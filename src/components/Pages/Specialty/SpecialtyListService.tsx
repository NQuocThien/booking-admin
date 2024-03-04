import style from "src/assets/scss/pages/MedicalFacilityDetail.module.scss";
import { Row, Col, Table, Dropdown, Spinner } from "react-bootstrap";
import {
  Doctor,
  MedicalSpecialties,
  useDeleteDoctorMutation,
  useGetMedicalSpecialtiesByMedicalFacilityIdLazyQuery,
} from "src/graphql/webbooking-service.generated";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter, getToken } from "src/utils/contain";
import { CiMenuKebab } from "react-icons/ci";
import { EtypeService } from "src/utils/enum";
import React, { useEffect, useState } from "react";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import ButtonGroupCheck from "src/components/sub/ButtonShowHide";
interface IProps {
  handleDelete: (id: string, name: string, type: EtypeService) => void;
  facilityId: string | undefined;
  loadingDeleteSpecialty: boolean;
}

function SpecialtyListServive(props: IProps) {
  const { facilityId, handleDelete, loadingDeleteSpecialty } = props;
  const [specialties, setSpecialties] = useState<MedicalSpecialties[]>([]);
  const [show, setShow] = useState<boolean>(false);

  const [getVaccine, { data, loading, error }] =
    useGetMedicalSpecialtiesByMedicalFacilityIdLazyQuery({
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
    if (data?.getMedicalSpecialtiesByMedicalFacilityId)
      setSpecialties(data?.getMedicalSpecialtiesByMedicalFacilityId);
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
                  <th>Tên chuyên khoa</th>
                  <th>Lịch khám</th>
                  <th>Giá</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {specialties?.map((ms, i) => (
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
          )}
        </div>
      </Col>
    </Row>
  );
}
export const SpecialtyListServiveMemory = React.memo(SpecialtyListServive);
