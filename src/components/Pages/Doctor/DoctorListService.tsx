import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import { Row, Col, Table, Dropdown, Spinner, Button } from "react-bootstrap";
import {
  Doctor,
  UpdateDoctorInput,
  useGetAllDoctorByFacilityIdLazyQuery,
  useGetAllDoctorPendingLazyQuery,
  useUpdateDoctorMutation,
} from "src/graphql/webbooking-service.generated";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter, getToken } from "src/utils/contain";
import React, { forwardRef, useEffect, useState } from "react";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import ButtonGroupCheck from "src/components/sub/ButtonShowHide";
import ModalCpn from "src/components/sub/Modal";
import {
  getEnumValueAcademicTitle,
  getEnumValueDayOfWeek,
  getEnumValueDegree,
  getEnumValueGender,
  getEnumValueStateService,
} from "src/utils/getData";
import { showToast } from "src/components/sub/toasts";
import StatusCpn from "src/components/sub/Status";
import { CustomToggleCiMenuKebab } from "src/components/Custom/Toggle";
interface IProps {
  facilityId: string | undefined;
}

function DoctorListServive(props: IProps) {
  const { facilityId } = props;
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [doctorsPending, setDoctorsPending] = useState<Doctor[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [getDoctor, { data, loading, error }] =
    useGetAllDoctorByFacilityIdLazyQuery({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
      variables: {
        input: facilityId || "",
      },
    });
  const [updateDoctor, { loading: loadUpdate, error: errUpdate }] =
    useUpdateDoctorMutation({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    });
  const [getDoctorPending, { data: dataDoctorPending }] =
    useGetAllDoctorPendingLazyQuery({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    });
  const handleAddDoctor = async (doctor: Doctor) => {
    if (facilityId) {
      const input: UpdateDoctorInput = {
        id: doctor.id,
        name: doctor.name,
        degree: getEnumValueDegree(doctor.degree),
        discription: doctor.discription,
        email: doctor.email,
        gender: getEnumValueGender(doctor.gender),
        avatar: {
          filename: doctor.avatar.filename,
          type: doctor.avatar.type,
          url: doctor.avatar.url,
        },
        medicalFactilitiesId: facilityId,
        numberPhone: doctor.numberPhone,
        price: doctor.price,
        specialistId: doctor.specialistId,
        userId: doctor.userId,
        workSchedule: {
          dayOff: doctor.workSchedule.dayOff,
          numberSlot: doctor.workSchedule.numberSlot,
          status: getEnumValueStateService(doctor.workSchedule.status),
          schedule: doctor.workSchedule.schedule.map((sc) => ({
            dayOfWeek: getEnumValueDayOfWeek(sc.dayOfWeek),
            sessions: sc.sessions.map((ss) => ({
              startTime: ss.startTime,
              endTime: ss.endTime,
            })),
          })),
        },
        academicTitle:
          (doctor.academicTitle &&
            getEnumValueAcademicTitle(doctor.academicTitle)) ||
          undefined,
      };
      await updateDoctor({
        variables: {
          input: input,
        },
      })
        .then(() => {
          showToast("Đã thêm Bác sỉ 👌");
          getDoctorPending();
          getDoctor();
        })
        .catch((e) => console.error(e));
    }
  };
  const handleRemoveDoctor = async (doctor: Doctor) => {
    if (facilityId) {
      const input: UpdateDoctorInput = {
        id: doctor.id,
        name: doctor.name,
        degree: getEnumValueDegree(doctor.degree),
        discription: doctor.discription,
        email: doctor.email,
        gender: getEnumValueGender(doctor.gender),
        avatar: {
          filename: doctor.avatar.filename,
          type: doctor.avatar.type,
          url: doctor.avatar.url,
        },
        medicalFactilitiesId: "",
        numberPhone: doctor.numberPhone,
        price: doctor.price,
        specialistId: doctor.specialistId,
        userId: doctor.userId,
        workSchedule: {
          dayOff: doctor.workSchedule.dayOff,
          numberSlot: doctor.workSchedule.numberSlot,
          status: getEnumValueStateService(doctor.workSchedule.status),
          schedule: doctor.workSchedule.schedule.map((sc) => ({
            dayOfWeek: getEnumValueDayOfWeek(sc.dayOfWeek),
            sessions: sc.sessions.map((ss) => ({
              startTime: ss.startTime,
              endTime: ss.endTime,
            })),
          })),
        },
        academicTitle:
          (doctor.academicTitle &&
            getEnumValueAcademicTitle(doctor.academicTitle)) ||
          undefined,
      };
      await updateDoctor({
        variables: {
          input: input,
        },
      })
        .then(() => {
          showToast("Đã xóa Bác sỉ 👌");
          getDoctorPending();
          getDoctor();
        })
        .catch((e) => console.error(e));
    }
  };

  useEffect(() => {
    if (facilityId && show)
      getDoctor({
        variables: {
          input: facilityId,
        },
      });
  }, [facilityId, show, getDoctor]);
  useEffect(() => {
    if (data?.getAllDoctorByFacilityId)
      setDoctors(data?.getAllDoctorByFacilityId);
  }, [data]);

  useEffect(() => {
    if (dataDoctorPending?.getAllDoctorPending) {
      setDoctorsPending(dataDoctorPending?.getAllDoctorPending);
    }
  }, [dataDoctorPending?.getAllDoctorPending]);
  const handleSetShow = (show: boolean) => {
    setShow(show);
  };

  const CustomToggle = forwardRef<
    HTMLButtonElement,
    { onClick: (e: React.MouseEvent<HTMLButtonElement>) => void }
  >(({ onClick }, ref) => (
    <Button
      variant="outline-primary"
      size="sm"
      className="mx-5 d-flex  justify-content-center"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      ref={ref}>
      <AiOutlinePlus />
    </Button>
  ));
  return (
    <Row className={`${style.service}`}>
      <Col className={``}>
        <div className={`${style.service__info} ${s.component}`}>
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <p className={`${style.title} `}>Danh sách bác sĩ</p>
              {loadUpdate && (
                <Spinner
                  className="mx-2"
                  variant="success"
                  animation="border"
                />
              )}
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle}></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      getDoctorPending();
                      setShowModal(true);
                    }}>
                    Chọn bác sỉ có sẵn
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to={`doctor/form-add`}>
                    Tạo mới bác sỉ
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
                  <th>Tên bác sĩ</th>
                  <th>Giới tính</th>
                  <th>Lịch khám</th>
                  <th>Giá</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {doctors?.map((doctor, i) => (
                  <tr key={i}>
                    <td>
                      {doctor.academicTitle ? doctor.academicTitle + "." : ""}
                      {doctor.degree} {doctor.name}
                    </td>
                    <td>{doctor.gender}</td>
                    <td>
                      Thứ:{" "}
                      {doctor.workSchedule.schedule.map((s, i) => (
                        <span key={i}>
                          {s.dayOfWeek}{" "}
                          {i !== doctor.workSchedule.schedule.length - 1
                            ? ", "
                            : ""}
                        </span>
                      ))}
                    </td>
                    <td>{formatter.format(doctor.price)}</td>
                    <td className="fs-6">
                      <Dropdown drop="down">
                        <Dropdown.Toggle
                          as={CustomToggleCiMenuKebab}></Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            className="fs-6 text-decoration-none text-dark link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            as={Link}
                            to={`doctor/${doctor.id}`}>
                            Chi tiết
                          </Dropdown.Item>
                          <Dropdown.Item
                            as={Link}
                            className="fs-6 text-decoration-none text-dark link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            to={`doctor/update/${doctor.id}`}>
                            Chỉnh sửa
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handleRemoveDoctor(doctor)}>
                            <p
                              className="fs-6  text-dark link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                              // onClick={async () => await hanldeDelete(c.id)}
                            >
                              Xóa Bác sĩ
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
      <ModalCpn
        handleSave={() => {}}
        onlySclose
        fullscreen
        headerText="Chọn bác sỉ"
        handleClose={() => setShowModal(false)}
        openRequest={showModal}>
        <Table hover>
          <thead>
            <tr>
              <th>Tên bác sĩ</th>
              <th>Giới tính</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Học hàm</th>
              <th>Học vị</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {doctorsPending?.map((doctor, i) => (
              <tr key={i}>
                <td>
                  {doctor.academicTitle ? doctor.academicTitle + "." : ""}
                  {doctor.degree} {doctor.name}
                </td>
                <td>{doctor.gender}</td>
                <td>{doctor.email}</td>
                <td>{doctor.numberPhone}</td>
                <td>{doctor.academicTitle}</td>
                <td>{doctor.degree}</td>
                <td>
                  <Button
                    onClick={() => handleAddDoctor(doctor)}
                    size="sm"
                    variant="outline-success">
                    Thêm
                    <StatusCpn
                      loading={loadUpdate}
                      error={errUpdate}
                      size="sm"
                      variant="light"
                    />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ModalCpn>
    </Row>
  );
}
export const DoctorListServiveMemory = React.memo(DoctorListServive);
