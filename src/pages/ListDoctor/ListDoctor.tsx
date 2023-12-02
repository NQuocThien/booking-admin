import ShowAlert from "src/components/toasts/alerts";
import {
  Doctor,
  useGetDoctorsQuery,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  Button,
  Container,
  Col,
  Form,
  InputGroup,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import SearchInputCpn from "src/components/toasts/InputSearch";
function ListDoctorPage() {
  const token = getToken();
  const { refetch, data, loading, error } = useGetDoctorsQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: `Bearer ${token}`,
    },
  });
  const [listDoctor, setListDoctor] = useState<Doctor[]>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filtered, setFiltered] = useState<Doctor[]>();
  const handleSearch = () => {
    // console.log("search", searchTerm, listDoctor);

    setFiltered(() =>
      searchTerm
        ? listDoctor?.filter((c) =>
            c.name?.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : listDoctor
    );
  };
  useLayoutEffect(() => {
    setListDoctor(data?.getDoctors);
    // console.log("test re", data);
    handleSearch();
  }, [data, listDoctor]);
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) {
    console.log(error);
    return <ShowAlert />;
  }
  return (
    <Container fluid className="overflow-x-auto">
      <Row>
        <Col xl={8} lg={8}>
          <SearchInputCpn
            onChange={(s: string) => setSearchTerm(s)}
            onSearch={handleSearch}
            value={searchTerm}
          />
        </Col>
        <Col>
          <Button variant="outline-success" onClick={() => {}}>
            <FiPlus />
          </Button>
        </Col>
      </Row>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên Bác Sĩ</th>
            <th>Sdt</th>
            <th>Email</th>
            <th>Học vị</th>
            <th>Chuyên khoa</th>
          </tr>
        </thead>
        <tbody>
          {filtered &&
            filtered.map((c, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{c.name}</td>
                <td>
                  {/* <Button variant="outline-info">
                    <FaHistory />
                  </Button> */}
                  {c.numberPhone}
                </td>
                <td>
                  {/* <Button variant="outline-info">
                    <ImProfile />
                  </Button> */}
                  {c.email}
                </td>
                <td>{c.degree}</td>
                <td>{c.medicalSpecialties?.name}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
}
export default ListDoctorPage;
