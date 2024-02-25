import { GetMedicalFacilityByIdQuery } from "src/graphql/webbooking-service.generated";
import { Row, Col, Table, Dropdown } from "react-bootstrap";
import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import { Link } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import s from "src/assets/scss/layout/MainLayout.module.scss";

interface IProp {
  data: GetMedicalFacilityByIdQuery | undefined;
}
function MedicalFacilityListStaff({ data }: IProp) {
  if (!data) return <div></div>;
  else
    return (
      <div>
        <Row className={`${style.service}`}>
          <Col className={``}>
            <div className={`${style.service__info} ${s.component}`}>
              <p className={`${style.title} `}>Nhân viên của CSYT:</p>
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
                  {data?.getMedicalFacilityById.medicalStaffs?.map(
                    (staff, i) => (
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
                            <Dropdown.Toggle as={CiMenuKebab}></Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item>
                                <Link
                                  className="fs-6 text-decoration-none text-dark link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                                  to={`/admin-page/medical-facility/${staff.id}`}>
                                  Chi tiết
                                </Link>
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <Link
                                  className="fs-6 text-decoration-none text-dark link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                                  to={`/admin-page/medical-facility/update/${staff.id}`}>
                                  Chỉnh sửa
                                </Link>
                              </Dropdown.Item>
                              <Dropdown.Item>
                                {" "}
                                <p
                                  className="fs-6  text-dark link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                                  // onClick={async () => await hanldeDelete(c.id)}
                                >
                                  Xóa cơ sở y tế
                                </p>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </div>
    );
}
export default MedicalFacilityListStaff;
