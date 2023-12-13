import {
  MedicalSpecialties,
  UpdateMedicalSpecialtiesInput,
  useCreateSpecialMutation,
  useDeleteSpecialMutation,
  useGetAllSpecialQuery,
  useUpdateSpcialMutation,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "src/context/AuthContext";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import { showToast } from "src/components/toasts/toasts";
import ShowAlert from "src/components/toasts/alerts";

const ListMedicalSpecialPage: React.FC = () => {
  const token = getToken();
  const { checkExpirationToken } = useAuth();
  checkExpirationToken();
  const { refetch, data, loading, error } = useGetAllSpecialQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const [createSpecial] = useCreateSpecialMutation({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const [updateSpecial] = useUpdateSpcialMutation({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const [deleteSpecial] = useDeleteSpecialMutation({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  useEffect(() => {
    setListSpecial(data?.getAllMecialSpecialties);
  }, [data]);
  const initState: MedicalSpecialties = {
    id: "",
    name: "",
    discription: "",
  };

  const [special, setSpecial] = useState<MedicalSpecialties>(initState);
  const [listSpecial, setListSpecial] = useState<MedicalSpecialties[]>();
  const handleDelete = async (id: string) => {
    await deleteSpecial({ variables: { input: id } }).then(() => {
      showToast("Đã xóa 🙌🙌", undefined, 2000);
      refetch();
    });
  };
  const hanldeSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      // submit
      if (special.id) {
        //sửa
        const updateInput: UpdateMedicalSpecialtiesInput = {
          id: special.id,
          discription: special.discription,
          name: special.name,
        };
        await updateSpecial({
          variables: {
            input: updateInput,
          },
        }).then(() => {
          showToast("Đã sửa ✌️✌️", undefined, 2000);
          setSpecial(initState);
          refetch();
        });
      } else {
        //thêm
        await createSpecial({
          variables: {
            input: { name: special.name, discription: special.discription },
          },
        }).then(() => {
          showToast("Đã thêm ✌️✌️", undefined, 2000);
          setSpecial(initState);
          refetch();
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
        <h5 className="my-1">Thêm chuyên khoa:</h5>
        <Form onSubmit={hanldeSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Chuyên Khoa</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tên chuyên khoa"
              value={special.name}
              name="name"
              onChange={(e) =>
                setSpecial((pre) => ({ ...pre, name: e.target.value }))
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="discription">
            <Form.Label>Mô tả</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="discription"
              value={special.discription}
              onChange={(e) =>
                setSpecial((pre) => ({ ...pre, discription: e.target.value }))
              }
            />
          </Form.Group>
          <Button type="submit">{(special.id && "Sửa") || "Thêm"}</Button>
        </Form>
      </Row>
      <Row className="mt-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Chuyên khoa</th>
              <th>Mô tả</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listSpecial &&
              listSpecial.map((sp, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{sp.name}</td>
                  <td>{sp.discription}</td>
                  <td className="w-25">
                    {" "}
                    <Button
                      className="mx-3"
                      variant="outline-primary"
                      onClick={() => {
                        checkExpirationToken();
                        setSpecial(sp);
                      }}
                      size="sm">
                      Sửa
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => {
                        checkExpirationToken();
                        handleDelete(sp.id);
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
};
export default ListMedicalSpecialPage;
