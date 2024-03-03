import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import { Row, Col, Table, Dropdown, Spinner } from "react-bootstrap";
import {
  Doctor,
  MedicalSpecialties,
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
  medicalSpecialties: MedicalSpecialties[] | undefined | null;
  loadingDeleteSpecialty: boolean;
}

function SpecialtyListServive(props: IProps) {
  const { medicalSpecialties, handleDelete, loadingDeleteSpecialty } = props;

  return (
    <Row className={`${style.service}`}>
      <Col className={``}>
        <div className={`${style.service__info} ${s.component}`}>
          <div className="d-flex">
            <p className={`${style.title} `}>Chuyên khoa khám</p>
            {loadingDeleteSpecialty && (
              <Spinner className="mx-2" variant="success" animation="border" />
            )}
            <Link
              className="btn btn-outline-primary btn-sm mx-5 "
              to="specialty/form-add">
              <AiOutlinePlus />
            </Link>
          </div>
          <Table hover>
            <thead>
              <tr>
                <th>Tên chuyên khoa</th>
                <th>Lịch khám</th>
                <th>Giá</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {medicalSpecialties?.map((ms, i) => (
                <tr key={i}>
                  <td>{ms.name}</td>
                  <td>
                    Thứ:{" "}
                    {ms.workSchedule.schedule.map((s, i) => (
                      <span key={i}>
                        {s.dayOfWeek}{" "}
                        {i === ms.workSchedule.schedule.length ? ", " : ""}
                      </span>
                    ))}
                  </td>
                  <td>{formatter.format(ms.price)}</td>
                  <td className="fs-6">
                    <Dropdown drop="down">
                      <Dropdown.Toggle as={CiMenuKebab}></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          as={Link}
                          className="fs-6 text-decoration-none text-dark link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                          to={`specialty/${ms.id}`}>
                          Chi tiết chuyên khoa
                        </Dropdown.Item>
                        <Dropdown.Item
                          as={Link}
                          className="fs-6 text-decoration-none text-dark link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                          to={`specialty/update/${ms.id}`}>
                          Chỉnh sửa chuyên khoa
                        </Dropdown.Item>
                        <Dropdown.Item>
                          {" "}
                          <p
                            className="fs-6  text-dark link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            onClick={async () =>
                              handleDelete(
                                ms.id,
                                ms.name,
                                EtypeService.Specialty
                              )
                            }>
                            Xóa chuyên khoa
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
export const SpecialtyListServiveMemory = React.memo(SpecialtyListServive);
