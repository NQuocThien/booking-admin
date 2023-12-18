import ImageUpload from "src/components/toasts/ImageUpload";
import {
  CarePackage,
  UpdateCarePackageInput,
  useGetAllTypePackedQuery,
  useUpdatePackageByIdMutation,
} from "src/graphql/webbooking-service.generated";
import { getToken } from "src/utils/contain";
import { FormEvent, useEffect, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { ETypeFile, uploadFilePromise } from "src/utils/upload";
import { ILinkImage } from "src/assets/contains/item-interface";
import { showToast } from "src/components/toasts/toasts";
interface IProp {
  // medicalFacilitiesId: string;
  currentPackage: CarePackage;
  handleClose: () => void;
}
interface IOptions {
  label: string;
  value: string;
}
function UpdateFormCarePackageCpn({ currentPackage, handleClose }: IProp) {
  const token = getToken();
  const { data: dataType } = useGetAllTypePackedQuery({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const [updatePackage, { loading: loadCreate }] = useUpdatePackageByIdMutation(
    {
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    }
  );

  const [updateInput, setUpdateInput] =
    useState<UpdateCarePackageInput>(currentPackage);
  const [formValid, setFormValid] = useState<boolean>();
  useEffect(() => {
    setUpdateInput(currentPackage);
  }, [currentPackage]);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log("test image2");
    setFormValid(true);
    if (form.checkValidity()) {
      if (imageFile) {
        await uploadFilePromise(ETypeFile.Image, imageFile).then((res) => {
          console.log("test image", res);

          showToast("Đã lưư ảnh");

          handleSave(res);
        });
      } else {
        handleSave();
      }
    }
  };
  const handleSave = (linkImage?: ILinkImage) => {
    if (linkImage) {
      const dataInput: UpdateCarePackageInput = {
        id: updateInput.id,
        discription: updateInput.discription,
        image: {
          filename: updateInput.image.filename,
          type: updateInput.image.type,
          url: updateInput.image.url,
        },
        medicalFacilitiesId: updateInput.medicalFacilitiesId,
        name: updateInput.name,
        price: updateInput.price,
        typePackageId: updateInput.typePackageId,
      };
      console.log("test image2", dataInput);
      updatePackage({ variables: { input: dataInput } }).then(() => {
        handleClose();
        showToast("Đã lưu ➕➕➕", undefined, 2000);
      });
    } else {
      const dataInput: UpdateCarePackageInput = {
        id: updateInput.id,
        discription: updateInput.discription,
        image: {
          filename: updateInput.image.filename,
          type: updateInput.image.type,
          url: updateInput.image.url,
        },
        medicalFacilitiesId: updateInput.medicalFacilitiesId,
        name: updateInput.name,
        price: updateInput.price,
        typePackageId: updateInput.typePackageId,
      };
      updatePackage({ variables: { input: dataInput } }).then(() => {
        handleClose();
        showToast("Đã lưu ➕➕➕", undefined, 2000);
      });
      console.log("test im3", dataInput);
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
      <h5 className="my-1">Sửa gói khám:</h5>
      <Form validated={formValid} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tên gói khám:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tên gói khám"
            value={updateInput.name}
            onChange={(e) =>
              setUpdateInput((pre) => ({ ...pre, name: e.target.value }))
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Giá khám: </Form.Label>
          <Form.Control
            type="number"
            placeholder="Nhập giá"
            value={updateInput.price}
            onChange={(e) =>
              setUpdateInput((pre) => ({
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
            value={updateInput.discription}
            onChange={(e) =>
              setUpdateInput((pre) => ({ ...pre, discription: e.target.value }))
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Hình ảnh: </Form.Label>
          <ImageUpload
            imageFile={imageFile}
            name="image"
            src={updateInput.image.url}
            onChange={(e) => {
              if (e.target.files) setImageFile(e.target?.files[0]);
            }}
            height={200}
            width={350}
          />
        </Form.Group>
        <Button type="submit">Lưu</Button>
        <Button
          variant="outline-warning"
          className="mx-5"
          onClick={() => {
            handleClose();
          }}>
          Hủy
        </Button>
      </Form>
    </Row>
  );
}
export default UpdateFormCarePackageCpn;
