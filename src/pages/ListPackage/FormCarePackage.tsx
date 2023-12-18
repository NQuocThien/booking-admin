import ImageUpload from "src/components/toasts/ImageUpload";
import {
  CreateCarePackageInput,
  UpdateCarePackageInput,
  useCreatePackageByIdMutation,
  useCreateTypePackageMutation,
  useGetAllTypePackedQuery,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import { FormEvent, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Select from "react-select";
import { ETypeFile, uploadFilePromise } from "src/utils/upload";
import { ILinkImage } from "src/assets/contains/item-interface";
import { showToast } from "src/components/toasts/toasts";
interface IProp {
  medicalFacilitiesId: string;
  handleClose: () => void;
}
interface IOptions {
  label: string;
  value: string;
}
function FormCarePackageCpn({ medicalFacilitiesId, handleClose }: IProp) {
  console.log("tesst: ", medicalFacilitiesId);
  const token = getToken();
  const { data: dataType } = useGetAllTypePackedQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const [createPackage, { loading: loadCreate }] = useCreatePackageByIdMutation(
    {
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    }
  );
  const innital: CreateCarePackageInput = {
    discription: "",
    image: {
      filename: "",
      type: "",
      url: "",
    },
    medicalFacilitiesId: medicalFacilitiesId,
    name: "",
    price: 0,
    typePackageId: "",
  };
  const [createInput, setCreateInput] =
    useState<CreateCarePackageInput>(innital);
  const [formValid, setFormValid] = useState<boolean>();
  useEffect(() => {
    setCreateInput((pre) => ({
      ...pre,
      medicalFacilitiesId: medicalFacilitiesId,
    }));
  }, [medicalFacilitiesId]);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setFormValid(true);
    if (form.checkValidity()) {
      if (imageFile) {
        await uploadFilePromise(ETypeFile.Image, imageFile).then((res) => {
          console.log("test image", res);

          showToast("Đã lưư ảnh");

          handleSave(res);
        });
      }
    }
  };
  const handleSave = (linkImage: ILinkImage) => {
    if (linkImage) {
      const dataInput: CreateCarePackageInput = {
        ...createInput,
        image: {
          filename: linkImage.filename,
          type: linkImage.type,
          url: linkImage.url,
        },
      };
      //   console.log("test image2", linkImage);
      createPackage({ variables: { input: dataInput } }).then(() => {
        handleClose();
        showToast("Đã lưu ➕➕➕", undefined, 2000);
      });
    }
  };
  const [options, setOptions] = useState<IOptions[]>();
  const [imageFile, setImageFile] = useState<Blob | null>(null);
  useEffect(() => {
    if (dataType?.getAllTypePackage) {
      const tmp: IOptions[] = dataType?.getAllTypePackage.map((o) => ({
        label: o.typeName,
        value: o.id,
      }));
      setOptions(tmp);
    }
  }, [dataType]);
  return (
    <Row className="border p-3">
      <h5 className="my-1">Thêm gói khám:</h5>
      <Form validated={formValid} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tên gói khám:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tên gói khám"
            value={createInput.name}
            onChange={(e) =>
              setCreateInput((pre) => ({ ...pre, name: e.target.value }))
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Giá khám: </Form.Label>
          <Form.Control
            type="number"
            placeholder="Nhập giá"
            value={createInput.price}
            onChange={(e) =>
              setCreateInput((pre) => ({
                ...pre,
                price: parseFloat(e.target.value) || 0,
              }))
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Mô tả: </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={createInput.discription}
            onChange={(e) =>
              setCreateInput((pre) => ({ ...pre, discription: e.target.value }))
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Hình ảnh: </Form.Label>
          <ImageUpload
            imageFile={imageFile}
            name="image"
            src="/default.png"
            onChange={(e) => {
              if (e.target.files) setImageFile(e.target?.files[0]);
            }}
            height={200}
            width={350}
          />
        </Form.Group>
        <Button type="submit">Lưu</Button>
      </Form>
    </Row>
  );
}
export default FormCarePackageCpn;
