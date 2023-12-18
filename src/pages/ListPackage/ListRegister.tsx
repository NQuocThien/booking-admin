import { getToken } from "src/utils/contain";
import { useAuth } from "src/context/AuthContext";
import { Button, Container, Form, Row, Table } from "react-bootstrap";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { FaBackspace, FaPhone } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineTransgender } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiStaffbase } from "react-icons/si";
import { GiMedicalPackAlt } from "react-icons/gi";
import {
  CarePackage,
  Profile,
  Register,
  RegisterState,
  UpdateRegisterInput,
  useUpdateRegisterMutation,
} from "src/graphql/webbooking-service.generated";
import { ChangeEvent, useState } from "react";
import ModalCpn from "src/components/toasts/Modal";
import { showToast } from "src/components/toasts/toasts";
interface IProp {
  currentPackage: CarePackage | undefined;
  handleClose: () => void;
}
function ListRegisterCpn({ currentPackage, handleClose }: IProp) {
  const token = getToken();
  const { checkExpirationToken } = useAuth();
  checkExpirationToken();
  const [updateRegister, { loading: loadUpdate }] = useUpdateRegisterMutation({
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const [updateInput, setUpdateInput] = useState<UpdateRegisterInput>();
  const handleUpdate = async () => {
    console.log("test btn update,", updateInput);
    if (updateInput) {
      await updateRegister({
        variables: { input: { id: updateInput.id, state: updateInput?.state } },
      }).then(() => {
        showToast("Đã chỉnh trạng thái👌👌 ", undefined, 2000);
      });
    }
  };
  const handleSelectChange = (
    e: ChangeEvent<HTMLSelectElement>,
    item: Register
  ) => {
    const selectedValue = e.target.value;
    console.log("test selected value", selectedValue, updateInput);
    // Dựa vào giá trị được chọn và cập nhật trạng thái tương ứng
    switch (selectedValue) {
      case "noactive":
        setUpdateInput({
          id: item.id,
          state: "noactive",
        });
        break;
      case "active":
        setUpdateInput({
          id: item.id,
          state: "active",
        });
        break;
      case "success":
        setUpdateInput({
          id: item.id,
          state: "success",
        });
        break;
    }
  };
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [detail, setDetail] = useState<Profile>();
  return (
    <Container fluid>
      <Button
        variant="outline-info"
        onClick={() => {
          handleClose();
        }}>
        <FaBackspace />
      </Button>

      <Row className="border p-3">
        <h5 className="my-1">Danh sách phiếu đăng ký khám chửa bệnh:</h5>
      </Row>
      <Row className="mt-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Tên bệnh nhân</th>
              <th>Số điện thoại</th>
              <th>Gói khám</th>
              <th>Giá khám</th>
              <th></th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {currentPackage &&
              currentPackage.register &&
              currentPackage.register.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.profile?.fullname}</td>
                  <td>{item.profile?.numberPhone}</td>
                  <td>{currentPackage.name}</td>
                  <td>{item.date}</td>
                  <td>
                    <Button
                      variant="outline-info"
                      size="sm"
                      onClick={() => {
                        item.profile && setDetail(item.profile);
                        setShowProfile(true);
                      }}>
                      Hồ sơ{" "}
                    </Button>
                  </td>
                  <td>
                    <Form.Select
                      onChange={(e) => handleSelectChange(e, item)}
                      aria-label="Default select example">
                      <option
                        className="text-warning"
                        selected={item.state === RegisterState.NoActive}
                        value="noactive"
                        onClick={() => {
                          setUpdateInput({
                            id: item.id,
                            state: RegisterState.NoActive,
                          });
                        }}>
                        Chưa duyệt
                      </option>
                      <option
                        className="text-info"
                        onClick={() => {
                          setUpdateInput({
                            id: item.id,
                            state: RegisterState.Active,
                          });
                        }}
                        selected={item.state === RegisterState.Active}
                        value="active">
                        Duyệt
                      </option>
                      <option
                        className="text-success"
                        onChange={() => {
                          console.log("text selected");
                          setUpdateInput({
                            id: item.id,
                            state: RegisterState.Success,
                          });
                        }}
                        selected={item.state === RegisterState.Success}
                        value="success">
                        Đã khám
                      </option>
                    </Form.Select>
                    <Button
                      onClick={handleUpdate}
                      variant="primary"
                      size={"sm"}
                      className="m-2">
                      Lưu
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Row>
      <ModalCpn
        handleSave={() => {}}
        handleClose={() => {
          setShowProfile(false);
          setDetail(undefined);
        }}
        closeButton={false}
        onlySclose={true}
        // textButtonSave="Đống"
        headerText="Thông tin hố sơ chi tiết"
        openRequest={showProfile}>
        <div className="shadow-lg bg-light p-3 mt-3">
          {detail && (
            <>
              <div className="px-3">
                <h6>
                  <span className="text-primary">
                    <IoPersonCircleOutline />
                  </span>
                  Họ và tên:{" "}
                  <span className="text-success ms-2">{detail.fullname} </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary">
                    <CiCalendarDate />
                  </span>
                  Ngày sinh:
                  <span className="text-info ms-2">{detail.dataOfBirth}</span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary">
                    <FaPhone />
                  </span>
                  Số điện thoại:
                  <span className="text-info ms-2">{detail.numberPhone}</span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary">
                    <MdOutlineEmail />
                  </span>
                  Email:
                  <span className="text-info ms-2">{detail.email}</span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary">
                    <MdOutlineTransgender />
                  </span>
                  Giới tính:
                  <span className="text-info ms-2">{detail.gender}</span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary">
                    <SiStaffbase />
                  </span>
                  Nghề nghiệp:
                  <span className="text-info ms-2">{detail.job}</span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary">
                    <SiStaffbase />
                  </span>
                  CCCD:
                  <span className="text-info ms-2">{detail.identity}</span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary">
                    <GiMedicalPackAlt />
                  </span>
                  Số BHYT:
                  <span className="text-info ms-2">
                    {detail.medicalInsurance}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary">
                    <FaPeopleGroup />
                  </span>
                  Dân tộc:
                  <span className="text-info ms-2">{detail.ethnic}</span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary">
                    <FaPeopleGroup />
                  </span>
                  Quan hệ với chủ hộ:
                  <span className="text-info ms-2">{detail.relationship}</span>
                </h6>
              </div>
            </>
          )}
        </div>
      </ModalCpn>
    </Container>
  );
}
export default ListRegisterCpn;
