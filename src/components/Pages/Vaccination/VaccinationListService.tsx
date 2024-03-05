import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import { Row, Col, Table, Dropdown, Spinner } from "react-bootstrap";
import {
  Vaccination,
  useDeleteVaccinationMutation,
  useGetAllVaccinationByFacilityIdLazyQuery,
} from "src/graphql/webbooking-service.generated";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter, getToken } from "src/utils/contain";
import React, { useEffect, useState } from "react";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import ButtonGroupCheck from "src/components/sub/ButtonShowHide";
import { showToast } from "src/components/sub/toasts";
import { CustomToggleCiMenuKebab } from "src/components/Custom/Toggle";
interface IProps {
  facilityId: string | undefined;
}

function VaccinationListServive(props: IProps) {
  const { facilityId } = props;
  const [vaccines, setVaccines] = useState<Vaccination[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [deleteVacination, { loading: loadingDeleteVaccination }] =
    useDeleteVaccinationMutation({
      fetchPolicy: "no-cache",
    });
  const handleDelete = async (id: string) => {
    await deleteVacination({
      variables: {
        input: id,
      },
    })
      .then(() => {
        showToast("Đã xóa vaccine 👍");
        setVaccines((pre) => {
          return pre.filter((p) => p.id !== id);
        });
      })
      .catch((e) => console.error(e));
  };
  const [getVaccine, { data, loading, error }] =
    useGetAllVaccinationByFacilityIdLazyQuery({
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
  useEffect(() => {
    if (facilityId && show)
      getVaccine({
        variables: {
          input: facilityId,
        },
      });
  }, [facilityId, show]);
  useEffect(() => {
    if (data?.getAllVaccinationByFacilityId)
      setVaccines(data?.getAllVaccinationByFacilityId);
  }, [data]);
  const handleSetShow = (show: boolean) => {
    setShow(show);
  };
  return (
    <Row className={`${style.service}`}>
      <Col className={``}>
        <div className={`${style.service__info} ${s.component}`}>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <p className={`${style.title} `}>Tiểm chủng</p>
              {loadingDeleteVaccination && (
                <Spinner
                  className="mx-2"
                  variant="success"
                  animation="border"
                />
              )}
              <Link
                className="btn btn-outline-primary btn-sm mx-5 "
                to="vaccination/form-add">
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
                  <th>Tên Vaccine</th>
                  <th>Nguồn gốc</th>
                  <th>Lịch khám</th>
                  <th>Giá</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {vaccines?.map((vc, i) => (
                  <tr key={i}>
                    <td>{vc.vaccineName}</td>
                    <td>{vc.countryOfOrigin}</td>
                    <td>
                      Thứ:{" "}
                      {vc.workSchedule.schedule.map((s, i) => (
                        <span key={i}>
                          {s.dayOfWeek}
                          {i !== vc.workSchedule.schedule.length - 1
                            ? ", "
                            : ""}
                        </span>
                      ))}
                    </td>
                    <td>{formatter.format(vc.price)}</td>
                    <td className="fs-6">
                      <Dropdown drop="down">
                        <Dropdown.Toggle
                          as={CustomToggleCiMenuKebab}></Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            as={Link}
                            className="fs-6 text-decoration-none text-dark link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            to={`vaccination/${vc.id}`}>
                            Chi tiết Vaccine
                          </Dropdown.Item>
                          <Dropdown.Item
                            as={Link}
                            className="fs-6 text-decoration-none text-dark link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            to={`vaccination/update/${vc.id}`}>
                            Chỉnh sửa Vaccine
                          </Dropdown.Item>
                          <Dropdown.Item>
                            {" "}
                            <p
                              className="fs-6  text-dark link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                              onClick={() => {
                                handleDelete(vc.id);
                              }}>
                              Xóa Vaccine
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
  );
}
export const VaccinationListServiveMemory = React.memo(VaccinationListServive);
