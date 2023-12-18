import {
  CarePackage,
  useCreatePackageByIdMutation,
  useDeletePackageByIdMutation,
  useGetListPackageByUserIdQuery,
  useUpdatePackageByIdMutation,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import { useAuth } from "src/context/AuthContext";
import Image from "react-bootstrap/Image";
import { Button, Container, Row, Spinner, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { showToast } from "src/components/toasts/toasts";
import ShowAlert from "src/components/toasts/alerts";
import FormCarePackageCpn from "./FormCarePackage";
import UpdateFormCarePackageCpn from "./UpdateFormCarePackage";
import ListRegisterCpn from "./ListRegister";
interface IShow {
  add: boolean;
  update: boolean;
  listRegis: boolean;
}
function ListPackagePage() {
  const token = getToken();
  const { checkExpirationToken, userInfor } = useAuth();
  const userId: string = userInfor?.id || "";
  checkExpirationToken(); // lấy clinic thông qua userID và từ đó lấy được package
  const { refetch, data, loading, error } = useGetListPackageByUserIdQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: { input: userId },
  });

  const [createTypePackege] = useCreatePackageByIdMutation({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const [updateTypePackage, { loading: loadingUpdate }] =
    useUpdatePackageByIdMutation({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
  const [deleteTypePackage, { loading: loadingDelete }] =
    useDeletePackageByIdMutation({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
  const inital: CarePackage = {
    id: "",
    discription: "",
    image: {
      filename: "",
      type: "",
      url: "",
    },
    medicalFacilitiesId: userInfor?.medicalFacilities?.id || "",
    name: "",
    price: 0,
    typePackageId: "",
  };
  const [listPackage, setListPackage] = useState<CarePackage[] | null>();
  const [packageClicked, setPackageClicked] = useState<CarePackage>();
  useEffect(() => {
    setListPackage(data?.getClinicByUserId.carePackage);
  }, [data]);

  const handleDelete = async (id: string) => {
    console.log(`deleting ${id}`);
    const shouldDelete = window.confirm("Xóa loại gói khám ❎❎");
    if (shouldDelete) {
      await deleteTypePackage({ variables: { input: id } }).then(() => {
        showToast("Đã xóa 🙌🙌", undefined, 2000);
        refetch();
      });
    }
  };
  const [showForm, setShowForm] = useState<IShow>({
    add: false,
    update: false,
    listRegis: false,
  });
  const handleReset = () => {
    setShowForm({ add: false, update: false, listRegis: false });
    refetch();
  };
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) {
    console.log(error);
    return <ShowAlert />;
  }
  return (
    <Container fluid>
      <Row className="mt-3">
        {!showForm.add && !showForm.update && !showForm.listRegis && (
          <Row className="border p-3">
            <h5 className="my-1">Thêm gói khám:</h5>
            <Button
              onClick={() => {
                setShowForm((pre) => ({ ...pre, add: true }));
              }}>
              Thêm gói khám
            </Button>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hình ảnh</th>
                  <th>Tên gói khám</th>
                  <th>Mô tả</th>
                  <th>Giá</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {listPackage &&
                  listPackage.map((item, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>
                        <Image
                          src={item.image.url}
                          rounded
                          width={100}
                          height={80}
                        />{" "}
                      </td>
                      <td>{item.name}</td>
                      <td>{item.discription}</td>
                      <td>{item.price}</td>
                      <td>
                        <Button
                          variant="outline-warning"
                          className="m-2"
                          onClick={() => {
                            setShowForm((pre) => ({ ...pre, update: true }));
                            setPackageClicked(item);
                          }}>
                          Sửa
                        </Button>

                        <Button
                          variant="outline-danger"
                          className="m-2"
                          onClick={() => handleDelete(item.id)}>
                          Xóa
                          {loadingDelete && (
                            <Spinner animation="border" size="sm" />
                          )}
                        </Button>
                        <Button
                          variant="outline-info"
                          className="m-2"
                          onClick={() => {
                            setShowForm((pre) => ({ ...pre, listRegis: true }));
                            setPackageClicked(item);
                            console.log("test click ", item);
                          }}>
                          Thông tin
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Row>
        )}
      </Row>
      {showForm.add && (
        <Row>
          <FormCarePackageCpn
            handleClose={handleReset}
            medicalFacilitiesId={data?.getClinicByUserId.id || ""}
          />
        </Row>
      )}
      {showForm.update && packageClicked && (
        <Row>
          {/* <FormCarePackageCpn
            medicalFacilitiesId={data?.getClinicByUserId.id || ""}
          /> */}
          <UpdateFormCarePackageCpn
            currentPackage={packageClicked}
            handleClose={handleReset}
          />
        </Row>
      )}
      {showForm.listRegis && (
        <ListRegisterCpn
          currentPackage={packageClicked}
          handleClose={handleReset}
        />
      )}
    </Container>
  );
}
export default ListPackagePage;
