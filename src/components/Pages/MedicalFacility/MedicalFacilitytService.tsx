import {
  Doctor,
  GetMedicalFacilityByIdQuery,
  useDeleteDoctorMutation,
} from "src/graphql/webbooking-service.generated";
import { Row, Col, Table, Dropdown } from "react-bootstrap";
import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import { formatter } from "src/utils/contain";
import { Link } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { showToast } from "src/components/sub/toasts";
import { EtypeService } from "src/utils/enum";
interface IProp {
  data: GetMedicalFacilityByIdQuery | undefined;
  hanldeDeleteRefetch: (typeService: EtypeService, id: string) => void;
}
function MedicalFacilityListService({ data, hanldeDeleteRefetch }: IProp) {
  const [deleteDoctor, { loading: loadingDelete }] = useDeleteDoctorMutation({
    fetchPolicy: "no-cache",
  });
  const handleDeleteDoctor = async (id: string, name: string) => {
    const confirm = window.confirm(`Bạn có chắc xóa bác sĩ "${name}"`);
    if (confirm) {
      await deleteDoctor({
        variables: {
          input: id,
        },
      }).then(() => {
        showToast("Đã xóa bác sĩ 👌");
        hanldeDeleteRefetch(EtypeService.Doctor, id);
      });
    }
  };
  if (!data) return <div></div>;
  else
    return (
      <div>
        <Row className={`${style.service}`}>
          <Col className={``}>
            <div className={`${style.service__info} ${s.component}`}>
              <div className="d-flex">
                <p className={`${style.title} `}>Danh sách bác sĩ</p>
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
                  {data?.getMedicalFacilityById.doctors?.map((doctor, i) => (
                    <tr key={i}>
                      <td>
                        {doctor.academicTitle}.{doctor.degree} {doctor.name}
                      </td>
                      <td>{doctor.gender}</td>
                      <td>
                        Thứ:{" "}
                        {doctor.workSchedule.schedule.map((s, i) => (
                          <span>
                            {s.dayOfWeek}{" "}
                            {i === doctor.workSchedule.schedule.length
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
                            <Dropdown.Item>
                              <Link
                                className="fs-6 text-decoration-none text-dark link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                                to={`doctor/${doctor.id}`}>
                                Chi tiết
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link
                                className="fs-6 text-decoration-none text-dark link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                                to={`/admin-page/medical-facility/update/${doctor.id}`}>
                                Chỉnh sửa
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() =>
                                handleDeleteDoctor(doctor.id, doctor.name)
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
        <Row className={`${style.service}`}>
          <Col className={``}>
            <div className={`${style.service__info} ${s.component}`}>
              <p className={`${style.title} `}>Gói khám</p>
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
                  {data?.getMedicalFacilityById.packages?.map((p, i) => (
                    <tr key={i}>
                      <td>{p.packageName}</td>
                      <td>{p.gender}</td>
                      <td>
                        Thứ:{" "}
                        {p.workSchedule.schedule.map((s, i) => (
                          <span>
                            {s.dayOfWeek}{" "}
                            {i === p.workSchedule.schedule.length ? ", " : ""}
                          </span>
                        ))}
                      </td>
                      <td>{formatter.format(p.price)}</td>
                      <td className="fs-6">
                        <Dropdown drop="down">
                          <Dropdown.Toggle as={CiMenuKebab}></Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>
                              <Link
                                className="fs-6 text-decoration-none text-dark link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                                to={`/admin-page/medical-facility/${p.id}`}>
                                Chi tiết
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link
                                className="fs-6 text-decoration-none text-dark link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                                to={`/admin-page/medical-facility/update/${p.id}`}>
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
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <Row className={`${style.service}`}>
          <Col className={``}>
            <div className={`${style.service__info} ${s.component}`}>
              <p className={`${style.title} `}>Chuyên khoa khám</p>
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
                  {data?.getMedicalFacilityById.medicalSpecialties?.map(
                    (ms, i) => (
                      <tr key={i}>
                        <td>{ms.name}</td>
                        <td>
                          Thứ:{" "}
                          {ms.workSchedule.schedule.map((s, i) => (
                            <span>
                              {s.dayOfWeek}{" "}
                              {i === ms.workSchedule.schedule.length
                                ? ", "
                                : ""}
                            </span>
                          ))}
                        </td>
                        <td>{formatter.format(ms.price)}</td>
                        <td className="fs-6">
                          <Dropdown drop="down">
                            <Dropdown.Toggle as={CiMenuKebab}></Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item>
                                <Link
                                  className="fs-6 text-decoration-none text-dark link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                                  to={`/admin-page/medical-facility/${ms.id}`}>
                                  Chi tiết
                                </Link>
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <Link
                                  className="fs-6 text-decoration-none text-dark link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                                  to={`/admin-page/medical-facility/update/${ms.id}`}>
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
        <Row className={`${style.service}`}>
          <Col className={``}>
            <div className={`${style.service__info} ${s.component}`}>
              <p className={`${style.title} `}>Tiểm chủng</p>
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
                  {data?.getMedicalFacilityById.vaccinations?.map((vc, i) => (
                    <tr key={i}>
                      <td>{vc.vaccineName}</td>
                      <td>{vc.countryOfOrigin}</td>
                      <td>
                        Thứ:{" "}
                        {vc.workSchedule.schedule.map((s, i) => (
                          <span>
                            {s.dayOfWeek}{" "}
                            {i === vc.workSchedule.schedule.length ? ", " : ""}
                          </span>
                        ))}
                      </td>
                      <td>{formatter.format(vc.price)}</td>
                      <td className="fs-6">
                        <Dropdown drop="down">
                          <Dropdown.Toggle as={CiMenuKebab}></Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>
                              <Link
                                className="fs-6 text-decoration-none text-dark link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                                to={`/admin-page/medical-facility/${vc.id}`}>
                                Chi tiết
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link
                                className="fs-6 text-decoration-none text-dark link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                                to={`/admin-page/medical-facility/update/${vc.id}`}>
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
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </div>
    );
}
export default MedicalFacilityListService;
