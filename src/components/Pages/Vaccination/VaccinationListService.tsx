import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import { Row, Col, Table, Dropdown, Spinner } from "react-bootstrap";
import {
  Doctor,
  MedicalSpecialties,
  Vaccination,
  useDeleteDoctorMutation,
} from "src/graphql/webbooking-service.generated";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "src/utils/contain";
import { CiMenuKebab } from "react-icons/ci";
import { EtypeService } from "src/utils/enum";
import React from "react";
import s from "src/assets/scss/layout/MainLayout.module.scss";
interface IProps {
  handleDelete: (id: string, name: string, type: EtypeService) => void;
  vaccinations: Vaccination[] | undefined | null;
  loadingDeleteVaccination: boolean;
}

function VaccinationListServive(props: IProps) {
  const { vaccinations, handleDelete, loadingDeleteVaccination } = props;

  return (
    <Row className={`${style.service}`}>
      <Col className={``}>
        <div className={`${style.service__info} ${s.component}`}>
          <div className="d-flex">
            <p className={`${style.title} `}>Tiểm chủng</p>
            {loadingDeleteVaccination && (
              <Spinner className="mx-2" variant="success" animation="border" />
            )}
            <Link
              className="btn btn-outline-primary btn-sm mx-5 "
              to="vaccination/form-add">
              <AiOutlinePlus />
            </Link>
          </div>
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
              {vaccinations?.map((vc, i) => (
                <tr key={i}>
                  <td>{vc.vaccineName}</td>
                  <td>{vc.countryOfOrigin}</td>
                  <td>
                    Thứ:{" "}
                    {vc.workSchedule.schedule.map((s, i) => (
                      <span key={i}>
                        {s.dayOfWeek}
                        {i !== vc.workSchedule.schedule.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </td>
                  <td>{formatter.format(vc.price)}</td>
                  <td className="fs-6">
                    <Dropdown drop="down">
                      <Dropdown.Toggle as={CiMenuKebab}></Dropdown.Toggle>
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
                              handleDelete(
                                vc.id,
                                vc.vaccineName,
                                EtypeService.Vaccine
                              );
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
        </div>
      </Col>
    </Row>
  );
}
export const VaccinationListServiveMemory = React.memo(VaccinationListServive);
