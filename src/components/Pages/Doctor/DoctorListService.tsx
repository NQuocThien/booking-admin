import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import { Row, Col, Table, Dropdown, Spinner } from "react-bootstrap";
import {
  Doctor,
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
  doctors: Doctor[] | undefined | null;
  loadingDeleteDoctor: boolean;
}

function DoctorListServive(props: IProps) {
  const { doctors, handleDelete, loadingDeleteDoctor } = props;

  return (
    <Row className={`${style.service}`}>
      <Col className={``}>
        <div className={`${style.service__info} ${s.component}`}>
          <div className="d-flex">
            <p className={`${style.title} `}>Danh sách bác sĩ</p>
            {loadingDeleteDoctor && (
              <Spinner className="mx-2" variant="success" animation="border" />
            )}
            <Link
              className="btn btn-outline-primary btn-sm mx-5 "
              to="doctor/form-add">
              <AiOutlinePlus />
            </Link>
          </div>
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
                      <Dropdown.Toggle as={CiMenuKebab}></Dropdown.Toggle>
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
                          onClick={() =>
                            handleDelete(
                              doctor.id,
                              doctor.name,
                              EtypeService.Doctor
                            )
                          }>
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
        </div>
      </Col>
    </Row>
  );
}
export const DoctorListServiveMemory = React.memo(DoctorListServive);
