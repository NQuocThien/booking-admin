import ShowAlert from "src/components/toasts/alerts";
import {
  Doctor,
  MedicalFacilities,
  useGetDoctorsQuery,
  useGetMedicalfacilitiesQuery,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
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
import { ImProfile } from "react-icons/im";
import { FaHistory } from "react-icons/fa";
import { useAuth } from "src/context/AuthContext";
import ModalCpn from "src/components/toasts/Modal";
function ListMedicalFacilitiesPage() {
  const token = getToken();
  const { checkExpirationToken } = useAuth();
  const { refetch, data, loading, error } = useGetMedicalfacilitiesQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: `Bearer ${token}`,
    },
  });
  const [listMedical, setListMedical] = useState<MedicalFacilities[]>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filtered, setFiltered] = useState<MedicalFacilities[]>();
  const [openModals, setOpenModals] = useState({
    modalAdd: false,
    modalupdate: false,
  });
  const [clicked, setClicked] = useState<MedicalFacilities>();
  const handleCloseModal = useCallback(() => {
    setOpenModals((pre) => ({ ...pre, modalAdd: false }));
  }, []);
  const handleAddMedicalSubmmit = useCallback(() => {
    setOpenModals((pre) => ({ ...pre, modalAdd: false }));
  }, []);
  const handleShowModal = (medical: MedicalFacilities) => {
    checkExpirationToken();
    setClicked(medical);
    // setStateRoles({
    //   admin: false,
    //   clinic: false,
    //   customer: false,
    //   doctor: false,
    // }); // reset roles
    // if (user.roles) {
    //   user.roles.map((role) => {
    //     switch (role) {
    //       case ERoles.admin:
    //         setStateRoles((pre) => ({ ...pre, admin: true }));
    //         break;
    //       case ERoles.clinic:
    //         setStateRoles((pre) => ({ ...pre, clinic: true }));
    //         break;
    //       case ERoles.customer:
    //         setStateRoles((pre) => ({ ...pre, customer: true }));
    //         break;
    //       case ERoles.doctor:
    //         setStateRoles((pre) => ({ ...pre, doctor: true }));
    //         break;
    //       default:
    //         break;
    //     }
    //   });
    // }
    // setOpenModal(true);
  };
  const handleSearch = () => {
    setFiltered(() =>
      searchTerm
        ? listMedical?.filter((c) =>
            c.companyName?.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : listMedical
    );
  };
  useLayoutEffect(() => {
    setListMedical(data?.getMedicalfacilities);
    handleSearch();
  }, [data, listMedical]);
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
          <Button
            variant="outline-success"
            onClick={() => {
              setOpenModals((pre) => ({ ...pre, modalAdd: true }));
            }}>
            <FiPlus />
          </Button>
        </Col>
      </Row>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên cơ sở y tế</th>
            <th>Danh sách bác sĩ</th>
            <th>Thông </th>
          </tr>
        </thead>
        <tbody>
          {filtered &&
            filtered.map((c, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{c.companyName}</td>
                <td>
                  <Button variant="outline-info">
                    <FaHistory />
                  </Button>
                </td>
                <td>
                  <Button variant="outline-info">
                    <ImProfile />
                  </Button>
                  {/* {c.email} */}
                </td>
                {/* <td>{c.degree}</td>
                <td>{c.medicalSpecialties?.name}</td> */}
              </tr>
            ))}
        </tbody>
      </Table>
      <ModalCpn
        headerText="Thêm CSYT"
        openRequest={openModals.modalAdd}
        handleSave={handleAddMedicalSubmmit}
        handleClose={() =>
          setOpenModals((pre) => ({ ...pre, modalAdd: false }))
        }>
        <p></p>
        {/* <Form
          onSubmit={handleActionFormChangeRoles}
          className="d-flex flex-column align-items-center">
          <Row>
            <Col>
              <Form.Check
                type="switch"
                id="custom-admin"
                label="Admin"
                name="check-admin"
                checked={stateRoles.admin}
                onChange={() =>
                  setStateRoles((pre) => ({ ...pre, admin: !pre.admin }))
                }
              />

              <Form.Check
                type="switch"
                id="custom-clinic"
                label="Clinic"
                name="check-clinic"
                checked={stateRoles.clinic}
                onChange={() =>
                  setStateRoles((pre) => ({ ...pre, clinic: !pre.clinic }))
                }
              />
            </Col>
            <Col>
              <Form.Check
                type="switch"
                id="custom-doctor"
                label="Doctor"
                name="check-doctor"
                checked={stateRoles.doctor}
                onChange={() =>
                  setStateRoles((pre) => ({ ...pre, doctor: !pre.doctor }))
                }
              />
              <Form.Check
                type="switch"
                id="custom-customer"
                label="Customer"
                name="check-customer"
                checked={stateRoles.customer}
                onChange={() =>
                  setStateRoles((pre) => ({ ...pre, customer: !pre.customer }))
                }
              />
            </Col>
          </Row>
        </Form> */}
      </ModalCpn>
    </Container>
  );
}
export default ListMedicalFacilitiesPage;
