import { useEffect, useState } from "react";
import { Col, Container, Dropdown, Row, Table } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import SearchInputCpn from "src/components/sub/InputSearch";
import { useAuth } from "src/context/AuthContext";
import {
  MedicalFacilities,
  useDeleteMedicalFacilityMutation,
  useGetAllMedicalFacilityQuery,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import s from "src/assets/scss/layout/MainLayout.module.scss";
import { Link } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import { showToast } from "src/components/sub/toasts";
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
  const [deleteMedicalFacility] = useDeleteMedicalFacilityMutation({
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
    console.log("test search: ", listMedical);
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
    console.log("test 111");
  }, [data, listMedical]);

  const hanldeDelete = async (id: string) => {
    var userConfirmed = window.confirm("Bạn có chắc muốn xóa không?");
    if (userConfirmed) {
      try {
        await deleteMedicalFacility({
          variables: {
            input: id,
          },
        }).then((res) => {
          showToast("Xóa thành công ✌️", "success");
          refetch();
        });
      } catch (e) {
        showToast("Có lỗi xảy ra 😢😢", "error");
      }
    } else {
      console.log("Hủy bỏ xóa");
    }
  };
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
            to={"/admin-page/medical-facility/form-add"}>
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
              <th>Hành động </th>
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
                  <td className="fs-6">{c.status}</td>
                  <td className="fs-6">
                    <Dropdown drop="down">
                      <Dropdown.Toggle as={CiMenuKebab}></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <Link
                            className="fs-6 text-decoration-none text-dark link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            to={`/admin-page/medical-facility/${c.id}`}>
                            Chi tiết
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link
                            className="fs-6 text-decoration-none text-dark link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            to={`/admin-page/medical-facility/update/${c.id}`}>
                            Chỉnh sửa
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          {" "}
                          <p
                            className="fs-6  text-dark link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            onClick={async () => await hanldeDelete(c.id)}>
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
      </Row>
    </Container>
  );
}

export default ListMedicalFacilityPage;
