import {
  CreateTypePackageInput,
  TypePackage,
  UpdateTypePackageInput,
  useCreateTypePackageMutation,
  useDeleteTypePackageByIdMutation,
  useGetAllTypePackedQuery,
  useUpdateTypePackageByIdMutation,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import { useAuth } from "src/context/AuthContext";
import {
  Col,
  Container,
  Form,
  Row,
  Button,
  Table,
  Spinner,
} from "react-bootstrap";
import { FormEvent, useEffect, useState } from "react";
import { showToast } from "src/components/toasts/toasts";
import ShowAlert from "src/components/toasts/alerts";

function ListTypePackagePage() {
  const token = getToken();
  const { checkExpirationToken } = useAuth();
  checkExpirationToken();
  const { refetch, data, loading, error } = useGetAllTypePackedQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  const [createTypePackege] = useCreateTypePackageMutation({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const [updateTypePackage, { loading: loadingUpdate }] =
    useUpdateTypePackageByIdMutation({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
  const [deleteTypePackage, { loading: loadingDelete }] =
    useDeleteTypePackageByIdMutation({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
  const initDegree: TypePackage = {
    id: "",
    typeName: "",
  };
  const [typePackage, setTypePackage] = useState<TypePackage>(initDegree);
  const [listDegree, setListDegree] = useState<TypePackage[]>();
  useEffect(() => {
    setListDegree(data?.getAllTypePackage);
  }, [data]);

  const [formValid, setFormValid] = useState<boolean>(false);

  const handleDelete = async (id: string) => {
    const shouldDelete = window.confirm("Xóa loại gói khám ❎❎");
    if (shouldDelete) {
      await deleteTypePackage({ variables: { input: id } }).then(() => {
        showToast("Đã xóa 🙌🙌", undefined, 2000);
        refetch();
      });
    }
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkExpirationToken();
    setFormValid(true);
    const form = e.currentTarget;
    if (form.checkVisibility()) {
      //submit form
      if (typePackage.id) {
        // sửa
        const updateInput: UpdateTypePackageInput = {
          id: typePackage.id,
          typeName: typePackage.typeName,
        };
        await updateTypePackage({ variables: { input: updateInput } }).then(
          () => {
            showToast("Đã sửa 👍👍");
            refetch();
          }
        );
      } else {
        // thêm
        const createInput: CreateTypePackageInput = {
          typeName: typePackage.typeName,
        };
        await createTypePackege({
          variables: { input: createInput },
        }).then(() => {
          showToast("Đã thêm 👍👍");
          refetch();
          setTypePackage(initDegree);
        });
      }
    }
  };
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) {
    console.log(error);
    return <ShowAlert />;
  }
  return (
    <Container fluid>
      <Row className="border p-3">
        <h5 className="my-1">Thêm gói khám:</h5>
        <Form validated={formValid} onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Control
                placeholder="Tên loại gói khám chữa bệnh"
                name="name"
                value={typePackage.typeName}
                onChange={(e) =>
                  setTypePackage((pre) => ({
                    ...pre,
                    typeName: e.target.value,
                  }))
                }
              />
            </Col>
            <Col>
              <Button type="submit" variant="outline-success">
                {(typePackage.id && "Sửa") || "Thêm"}
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
      <Row className="mt-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Tên Loại gói khám</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listDegree &&
              listDegree.map((d, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{d.typeName}</td>
                  <td className="w-25">
                    {" "}
                    <Button
                      className="mx-3"
                      variant="outline-primary"
                      onClick={() => {
                        checkExpirationToken();
                        setTypePackage(d);
                      }}
                      size="sm">
                      Sửa
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => {
                        checkExpirationToken();
                        handleDelete(d.id);
                      }}>
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
export default ListTypePackagePage;
