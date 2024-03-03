import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import { Row, Col, Table, Dropdown, Spinner } from "react-bootstrap";
import { Package } from "src/graphql/webbooking-service.generated";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "src/utils/contain";
import { CiMenuKebab } from "react-icons/ci";
import { EtypeService } from "src/utils/enum";
import React from "react";
import s from "src/assets/scss/layout/MainLayout.module.scss";
interface IProps {
  handleDelete: (id: string, name: string, type: EtypeService) => void;
  packages: Package[] | undefined | null;
  loadingDeletePackage: boolean;
}

function PackageListServive(props: IProps) {
  const { packages, handleDelete, loadingDeletePackage } = props;

  return (
    <Row className={`${style.service}`}>
      <Col className={``}>
        <div className={`${style.service__info} ${s.component}`}>
          <div className="d-flex">
            <p className={`${style.title} `}>Gói khám</p>
            {loadingDeletePackage && (
              <Spinner className="mx-2" variant="success" animation="border" />
            )}
            <Link
              className="btn btn-outline-primary btn-sm mx-5 "
              to="package/form-add">
              <AiOutlinePlus />
            </Link>
          </div>
          <Table hover>
            <thead>
              <tr>
                <th>Tên gói khám</th>
                <th>Giới tính</th>
                <th>Lịch khám</th>
                <th>Giá</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {packages?.map((p, i) => (
                <tr key={i}>
                  <td>{p.packageName}</td>
                  <td>{p.gender}</td>
                  <td>
                    Thứ:{" "}
                    {p.workSchedule.schedule.map((s, i) => (
                      <span key={i}>
                        {s.dayOfWeek}{" "}
                        {i !== p.workSchedule.schedule.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </td>
                  <td>{formatter.format(p.price)}</td>
                  <td className="fs-6">
                    <Dropdown drop="down">
                      <Dropdown.Toggle as={CiMenuKebab}></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          as={Link}
                          to={`package/${p.id}`}
                          className="fs-6 text-decoration-none text-dark link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                          Chi tiết
                        </Dropdown.Item>
                        <Dropdown.Item
                          as={Link}
                          to={`package/update/${p.id}`}
                          className="fs-6 text-decoration-none text-dark link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                          Chỉnh sửa gói
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() =>
                            handleDelete(
                              p.id,
                              p.packageName,
                              EtypeService.Package
                            )
                          }>
                          {" "}
                          <p className="fs-6  text-dark link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                            Xóa cơ gói khám
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
export const PackageListServiveMemory = React.memo(PackageListServive);
