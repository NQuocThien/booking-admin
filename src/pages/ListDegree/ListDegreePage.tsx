import {
  CreateDegreeInput,
  Degree,
  UpdateDegreeInput,
  useCreateDegreeMutation,
  useDeleteDegreeMutation,
  useGetAllDregreeQuery,
  useUpdateDegreeMutation,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import { useAuth } from "src/context/AuthContext";
import { Token } from "graphql";
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

function ListDegreePage() {
  const token = getToken();
  const { checkExpirationToken } = useAuth();
  checkExpirationToken();
  const { refetch, data, loading, error } = useGetAllDregreeQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  const [createDegree] = useCreateDegreeMutation({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const [updateDegree] = useUpdateDegreeMutation({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const [deleteDegree] = useDeleteDegreeMutation({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const initDegree = {
    id: "",
    name: "",
    abbreviations: "",
  };
  const [degree, setDegree] = useState<Degree>(initDegree);
  const [listDegree, setListDegree] = useState<Degree[]>();
  useEffect(() => {
    setListDegree(data?.getAllDegree);
  }, [data]);

  const [formValid, setFormValid] = useState<boolean>(false);

  const handleDelete = async (id: string) => {
    await deleteDegree({ variables: { input: id } }).then(() => {
      showToast("Đã xóa 🙌🙌", undefined, 2000);
      refetch();
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkExpirationToken();
    setFormValid(true);
    const form = e.currentTarget;
    if (form.checkVisibility()) {
      //submit form
      if (degree.id) {
        // sửa
        const updateInput: UpdateDegreeInput = {
          id: degree.id,
          name: degree.name,
          abbreviations: degree.abbreviations,
        };
        await updateDegree({ variables: { input: updateInput } }).then(() => {
          showToast("Đã sửa 👍👍");
          refetch();
          setDegree(initDegree);
        });
      } else {
        // thêm
        const { id, ...createDegreeInput } = degree;
        await createDegree({ variables: { input: createDegreeInput } }).then(
          () => {
            showToast("Đã thêm 👍👍");
            refetch();
            setDegree(initDegree);
          }
        );
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
        <h5 className="my-1">Thêm học vị:</h5>
        <Form validated={formValid} onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Control
                placeholder="Tên học vấn bằng cấp"
                name="name"
                value={degree.name}
                onChange={(e) =>
                  setDegree((pre) => ({ ...pre, name: e.target.value }))
                }
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Viết tắt"
                name="abbreviations"
                value={degree.abbreviations}
                onChange={(e) =>
                  setDegree((pre) => ({
                    ...pre,
                    abbreviations: e.target.value,
                  }))
                }
              />
            </Col>
            <Col>
              <Button type="submit" variant="outline-success">
                {(degree.id && "Sửa") || "Thêm"}
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
              <th>Tên học vị</th>
              <th>Tên viết tắt</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listDegree &&
              listDegree.map((d, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{d.name}</td>
                  <td>{d.abbreviations}</td>
                  <td className="w-25">
                    {" "}
                    <Button
                      className="mx-3"
                      variant="outline-primary"
                      onClick={() => {
                        checkExpirationToken();
                        setDegree(d);
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
export default ListDegreePage;
