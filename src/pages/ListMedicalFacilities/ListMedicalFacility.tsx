import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import SearchInputCpn from "src/components/toasts/InputSearch";
import { useAuth } from "src/context/AuthContext";
import {
  MedicalFacilities,
  useGetAllMedicalFacilityQuery,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { Link } from "react-router-dom";
function ListMedicalFacilityPage() {
  const token = getToken();
  const { checkExpirationToken } = useAuth();
  const { refetch, data, loading, error } = useGetAllMedicalFacilityQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const [listMedical, setListMedical] = useState<MedicalFacilities[]>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filtered, setFiltered] = useState<MedicalFacilities[]>();
  const handleSearch = () => {
    setFiltered(() =>
      searchTerm
        ? listMedical?.filter((c) =>
            c.medicalFacilityName
              ?.toLowerCase()
              .includes(searchTerm.toLowerCase())
          )
        : listMedical
    );
  };

  useEffect(() => {
    setListMedical(data?.getAllMedicalFacility);
    handleSearch();
  }, [data, listMedical]);
  return (
    <Container fluid className={` ${s.component}`}>
      <Row>
        <Col xl={10} lg={10}>
          <SearchInputCpn
            onChange={(s: string) => setSearchTerm(s)}
            onSearch={handleSearch}
            value={searchTerm}
          />
        </Col>
        <Col>
          <Link
            className="btn btn-outline-primary"
            to={"/general/clinics/form-add"}>
            <FiPlus />
          </Link>
        </Col>
      </Row>
      <Row>
        <Table striped hover className="">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên cơ sở y tế</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Người đại diện</th>
              <th>Trạng thái</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered &&
              filtered.map((c, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td className="fs-6">{c.medicalFacilityName}</td>
                  <td className="fs-6">{c.email}</td>
                  <td className="fs-6">{c.numberPhone}</td>
                  <td className="fs-6">{c.legalRepresentation}</td>
                  <td className="fs-6">{c.workSchedule}</td>
                  <td className="fs-6">
                    <Link
                      className="fs-6 btn btn btn-outline-info btn-sm"
                      to={`/general/clinics/${c.id}`}>
                      Chi tiết
                    </Link>
                    <Button
                      variant="outline-warning"
                      className="fs-6"
                      size="sm">
                      Sửa
                    </Button>
                    <Button variant="outline-danger" className="fs-6" size="sm">
                      Xóa
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}

export default ListMedicalFacilityPage;
