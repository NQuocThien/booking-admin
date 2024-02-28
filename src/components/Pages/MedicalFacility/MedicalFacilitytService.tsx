import {
  MedicalFacilities,
  useDeleteDoctorMutation,
  useDeleteMecialSpecialtyMutation,
  useDeletePackageMutation,
  useDeleteVaccinationMutation,
} from "src/graphql/webbooking-service.generated";
import { Row, Col, Table, Dropdown, Spinner } from "react-bootstrap";
import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import { formatter } from "src/utils/contain";
import { Link } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { showToast } from "src/components/sub/toasts";
import { EtypeService } from "src/utils/enum";
interface IProp {
  data: MedicalFacilities | undefined;
  hanldeDeleteRefetch: (typeService: EtypeService, id: string) => void;
}
function MedicalFacilityListService({ data, hanldeDeleteRefetch }: IProp) {
  const [deleteDoctor, { loading: loadingDeleteDoctor }] =
    useDeleteDoctorMutation({
      fetchPolicy: "no-cache",
    });
  const [deletePackage, { loading: loadingDeletePackage }] =
    useDeletePackageMutation({
      fetchPolicy: "no-cache",
    });
  const [deleteMedicalSpcialty, { loading: loadingDeleteSpecialty }] =
    useDeleteMecialSpecialtyMutation({
      fetchPolicy: "no-cache",
    });
  const [deleteVacination, { loading: loadingDeleteVaccination }] =
    useDeleteVaccinationMutation({
      fetchPolicy: "no-cache",
    });
  const handleDelete = async (id: string, name: string, type: EtypeService) => {
    const confirm = window.confirm(`Bạn có chắc xóa ${type} "${name}"`);
    switch (type) {
      case EtypeService.Doctor:
        if (confirm) {
          await deleteDoctor({
            variables: {
              input: id,
            },
          })
            .then(() => {
              showToast("Đã xóa bác sĩ 👌");
              hanldeDeleteRefetch(type, id);
            })
            .catch((e) => {
              showToast(`Đã lỗi khi xóa ${type}`, "error");
            });
        }
        break;
      case EtypeService.Package:
        if (confirm) {
          await deletePackage({
            variables: {
              input: id,
            },
          })
            .then(() => {
              showToast("Đã xóa gói khám 👌");
              hanldeDeleteRefetch(type, id);
            })
            .catch((e) => {
              showToast(`Đã lỗi khi xóa ${type}`, "error");
            });
        }
        break;
      case EtypeService.Specialty:
        if (confirm) {
          await deleteMedicalSpcialty({
            variables: {
              input: id,
            },
          })
            .then(() => {
              showToast("Đã xóa chuyên khoa khám 👌");
              hanldeDeleteRefetch(type, id);
            })
            .catch((e) => {
              showToast(`Đã lỗi khi xóa ${type}`, "error");
            });
        }
        break;
      case EtypeService.Vaccine:
        if (confirm) {
          await deleteVacination({
            variables: {
              input: id,
            },
          })
            .then(() => {
              showToast("Đã xóa vaccine👌");
              hanldeDeleteRefetch(type, id);
            })
            .catch((e) => {
              showToast(`Đã lỗi khi xóa ${type}`, "error");
            });
        }
        break;

      default:
        break;
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
                {loadingDeleteDoctor && (
                  <Spinner
                    className="mx-2"
                    variant="success"
                    animation="border"
                  />
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
                  {data.doctors?.map((doctor, i) => (
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
        <Row className={`${style.service}`}>
          <Col className={``}>
            <div className={`${style.service__info} ${s.component}`}>
              <div className="d-flex">
                <p className={`${style.title} `}>Gói khám</p>
                {loadingDeletePackage && (
                  <Spinner
                    className="mx-2"
                    variant="success"
                    animation="border"
                  />
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
                  {data.packages?.map((p, i) => (
                    <tr key={i}>
                      <td>{p.packageName}</td>
                      <td>{p.gender}</td>
                      <td>
                        Thứ:{" "}
                        {p.workSchedule.schedule.map((s, i) => (
                          <span key={i}>
                            {s.dayOfWeek}{" "}
                            {i !== p.workSchedule.schedule.length - 1
                              ? ", "
                              : ""}
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
        <Row className={`${style.service}`}>
          <Col className={``}>
            <div className={`${style.service__info} ${s.component}`}>
              <div className="d-flex">
                <p className={`${style.title} `}>Chuyên khoa khám</p>
                {loadingDeleteSpecialty && (
                  <Spinner
                    className="mx-2"
                    variant="success"
                    animation="border"
                  />
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
                  {data.medicalSpecialties?.map((ms, i) => (
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
        <Row className={`${style.service}`}>
          <Col className={``}>
            <div className={`${style.service__info} ${s.component}`}>
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
                  {data.vaccinations?.map((vc, i) => (
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
      </div>
    );
}
export default MedicalFacilityListService;
