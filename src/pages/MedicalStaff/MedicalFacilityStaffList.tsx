import {
  MedicalStaff,
  useDeleteMedicalStaffMutation,
  useGetMedicalStaffByFacilityIdLazyQuery,
  useGetSpecialtySelectLazyQuery,
  useGetSpecialtySelectQuery,
} from "src/graphql/webbooking-service.generated";
import { Row, Col, Table, Dropdown } from "react-bootstrap";
import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import { Link } from "react-router-dom";
import { CiCalendarDate, CiMenuKebab } from "react-icons/ci";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { getToken } from "src/utils/contain";
import { useEffect, useState } from "react";
import ButtonGroupCheck from "src/components/sub/ButtonShowHide";
import { showToast } from "src/components/sub/toasts";
import ModalCpn from "src/components/sub/Modal";
import { IoPersonCircleOutline, IoSettingsSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import {
  MdManageAccounts,
  MdOutlineEmail,
  MdOutlineTransgender,
} from "react-icons/md";
import { GetEPermission } from "src/utils/enum-value";
import { IOption } from "src/utils/enum";
import { CustomToggleCiMenuKebab } from "src/components/Custom/Toggle";

interface IProp {
  // data: MedicalStaff[] | undefined;
  facilityId: string | undefined;
}
function MedicalFacilityListStaff({ facilityId }: IProp) {
  const token = getToken();
  const [staffs, setStaffs] = useState<MedicalStaff[]>([]);
  const [selectedStaff, setSelectedStaff] = useState<MedicalStaff>();
  const [listSpecialty, setListSpecialty] = useState<IOption[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const { data: dataSpecialty } = useGetSpecialtySelectQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: {
      input: facilityId || "",
    },
  });
  const [deleteVacination, { loading: loadingDeleteVaccination }] =
    useDeleteMedicalStaffMutation({
      fetchPolicy: "no-cache",
    });
  const handleDelete = async (id: string) => {
    await deleteVacination({
      variables: {
        input: id,
      },
    })
      .then(() => {
        showToast("Đã xóa nhân viên 👍");
        setStaffs((pre) => {
          return pre.filter((p) => p.id !== id);
        });
      })
      .catch((e) => console.error(e));
  };
  const [getStaff, { data, loading, error }] =
    useGetMedicalStaffByFacilityIdLazyQuery({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      variables: {
        input: facilityId || "",
      },
    });
  useEffect(() => {
    if (dataSpecialty?.getMedicalSpecialtySelect) {
      const data: IOption[] = dataSpecialty.getMedicalSpecialtySelect.map(
        (item) => ({
          label: item.name,
          value: item.id,
        })
      );
      setListSpecialty(data);
    }
  }, [dataSpecialty]);
  const handleClickDetail = (staff: MedicalStaff) => {
    setSelectedStaff(staff);
    setShowModal(true);
  };

  useEffect(() => {
    if (facilityId && show)
      getStaff({
        variables: {
          input: facilityId,
        },
      });
  }, [facilityId, show]);
  useEffect(() => {
    if (data?.getMedicalStaffByFacilityId)
      setStaffs(data?.getMedicalStaffByFacilityId);
  }, [data]);
  const handleSetShow = (show: boolean) => {
    setShow(show);
  };

  return (
    <div>
      <Row className={`${style.service}`}>
        <Col className={``}>
          <div className={`${style.service__info} ${s.component}`}>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <p className={`${style.title} `}>Nhân viên của CSYT:</p>
                <Link
                  className="btn btn-outline-primary btn-sm mx-5 "
                  to="staff/form-add">
                  <AiOutlinePlus />
                </Link>
              </div>
              <ButtonGroupCheck
                show={show}
                setShow={handleSetShow}
                loading={loading}
                error={error}
              />
            </div>
            {show && (
              <Table hover>
                <thead>
                  <tr>
                    <th>Tên nhân viên</th>
                    <th>Giới tính</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>
                    <th>Quyền</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {staffs?.map((staff, i) => (
                    <tr key={i}>
                      <td>{staff.name}</td>
                      <td>{staff.gender}</td>
                      <td>{staff.numberPhone}</td>
                      <td>{staff.email}</td>
                      <td>
                        {staff.permissions.map((per, i) => (
                          <span key={i}>
                            {per}
                            {i < staff.permissions.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </td>
                      <td className="fs-6">
                        <Dropdown drop="down">
                          <Dropdown.Toggle
                            as={CustomToggleCiMenuKebab}></Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item
                              className="fs-6 text-decoration-none text-dark link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                              onClick={() => handleClickDetail(staff)}>
                              Chi tiết
                            </Dropdown.Item>
                            <Dropdown.Item
                              as={Link}
                              className="fs-6 text-decoration-none text-dark link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                              to={`/admin-page/medical-facility/update/${staff.id}`}>
                              Chỉnh sửa
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => handleDelete(staff.id)}>
                              <p className="fs-6  text-dark link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                                Xóa nhân viên
                              </p>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </div>
        </Col>
      </Row>
      <ModalCpn
        handleClose={() => setShowModal(false)}
        handleSave={() => {}}
        headerText="Thông tin nhân viên"
        openRequest={showModal}
        onlySclose>
        <div className="shadow-lg bg-light p-3 mt-3">
          {selectedStaff && (
            <>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <IoPersonCircleOutline />
                  </span>
                  Họ và tên:{" "}
                  <span className="text-success ms-2">
                    {selectedStaff.name}{" "}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <FaPhone />
                  </span>
                  Số điện thoại:
                  <span className="text-info ms-2">
                    {selectedStaff.numberPhone}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <MdOutlineEmail />
                  </span>
                  Email:
                  <span className="text-info ms-2">{selectedStaff.email}</span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <MdOutlineTransgender />
                  </span>
                  Giới tính:
                  <span className="text-info ms-2">{selectedStaff.gender}</span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <IoSettingsSharp />
                  </span>
                  Quyền:
                  <span className="text-info ms-2">
                    {selectedStaff.permissions.map((per, i) => (
                      <span key={i}>
                        {" "}
                        {per}{" "}
                        {i !== selectedStaff.permissions.length - 1
                          ? ", "
                          : "."}{" "}
                      </span>
                    ))}
                  </span>
                </h6>
              </div>
              {selectedStaff.specialtyId &&
                selectedStaff.permissions.includes(
                  GetEPermission.ManagerSpecialty
                ) && (
                  <div className="px-3">
                    <h6>
                      <span className="text-primary mx-1">
                        <MdManageAccounts />
                      </span>
                      Chuyên khoa đang quản lí:
                    </h6>
                    <div className="text-info ms-2">
                      {selectedStaff.specialtyId.map((spec) => {
                        return listSpecialty.map((item, index) => {
                          if (item.value === spec)
                            return (
                              <div className="mx-5 text-primary" key={index}>
                                - {item.label}
                              </div>
                            );
                          return null;
                        });
                      })}
                    </div>
                  </div>
                )}
            </>
          )}
        </div>
      </ModalCpn>
    </div>
  );
}
export default MedicalFacilityListStaff;
