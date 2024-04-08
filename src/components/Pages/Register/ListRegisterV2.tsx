import { useEffect, useRef, useState } from "react";
import {
  Row,
  Table,
  Button,
  Col,
  Dropdown,
  Overlay,
  Badge,
  Spinner,
} from "react-bootstrap";
import {
  ConfirmRegisterInput,
  EStateRegister,
  GetRegisterByOptionInput,
  Register,
  Schedule,
  Session,
  useConfirmRegisterMutation,
  useGetAllRegisterByOptionLazyQuery,
  useRegisterCreatedSubscription,
} from "src/graphql/webbooking-service.generated";
import { TfiReload } from "react-icons/tfi";
import SessionItem from "../../WorkSchedule/Session";
import { getEnumValueStateRegis, renderDayOfWeek } from "src/utils/getData";
import { formatDate, getToken } from "src/utils/contain";
import StatusCpn from "../../sub/Status";
import DatePickerCpn from "../../sub/DatePicker";
import { format } from "date-fns";
import { CiCalendarDate } from "react-icons/ci";
import ModalCpn from "../../sub/Modal";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineTransgender } from "react-icons/md";
import { SiGoogletagmanager, SiStaffbase } from "react-icons/si";
import { GiMedicalPackAlt } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { showToast } from "../../sub/toasts";
import { CustomToggleCiMenuKebab } from "src/components/Custom/Toggle";
interface IProps {
  listSchedule: Schedule[] | undefined;
  title: string;
  doctorId?: string;
  packageId?: string;
  vaccineId?: string;
  specialtyId?: string;
}
interface IShowModal {
  customer: boolean;
  profile: boolean;
}
function ListRegisterV2(props: IProps) {
  const {
    listSchedule,
    title,
    doctorId = undefined,
    packageId = undefined,
    specialtyId = undefined,
    vaccineId = undefined,
  } = props;

  const [schedule, setSchedule] = useState<Schedule>();
  const [selectedSession, setSelectedSession] = useState<Session>();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [listRegister, setListRegister] = useState<Register[]>([]);
  const [selectedRegiser, setSetSelectedRegister] = useState<Register>();
  const [showModal, setShowModal] = useState<IShowModal>({
    customer: false,
    profile: false,
  });
  const [subscription, setSubscription] = useState<boolean>(false);
  const [option, setOption] = useState<GetRegisterByOptionInput>({
    date: new Date(),
    doctorId: doctorId,
    packageId: packageId,
    specialtyId: specialtyId,
    vaccineId: vaccineId,
  });
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const [getRegisters, { data, loading, error, refetch }] =
    useGetAllRegisterByOptionLazyQuery({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    });
  const [confirmRegister, { loading: loadConfirm, error: errConfirm }] =
    useConfirmRegisterMutation({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    });

  const {
    data: dataCreated,
    loading: loadCreated,
    error: errCreated,
  } = useRegisterCreatedSubscription({
    variables: {
      option: {
        date: option.date,
        doctorId: option.doctorId,
        packageId: option.packageId,
        specialtyId: option.specialtyId,
        vaccineId: option.vaccineId,
      },
    },
  });

  useEffect(() => {
    if (dataCreated)
      setListRegister((pre) => [...pre, dataCreated?.registerCreated]);
  }, [dataCreated]);

  const handleClick = (event: any) => {
    setShow(!show);
    setTarget(event.target);
  };
  useEffect(() => {
    if (doctorId) {
      setOption((pre) => ({
        ...pre,
        doctorId: doctorId,
      }));
    } else if (packageId) {
      setOption((pre) => ({
        ...pre,
        packageId: packageId,
      }));
    } else if (vaccineId) {
      setOption((pre) => ({
        ...pre,
        vaccineId: vaccineId,
      }));
    } else if (specialtyId) {
      setOption((pre) => ({
        ...pre,
        specialtyId: specialtyId,
      }));
    }
  }, [selectedDate, doctorId, packageId, vaccineId, specialtyId]);

  useEffect(() => {
    if (doctorId && selectedDate) {
      const dateFormat: string = format(selectedDate, "yyyy-MM-dd");
      setOption((pre) => ({
        ...pre,
        doctorId: doctorId,
        date: dateFormat,
      }));
      getRegisters({
        variables: {
          input: {
            doctorId: doctorId,
            date: dateFormat,
          },
        },
      });
    } else if (packageId && selectedDate) {
      const dateFormat: string = format(selectedDate, "yyyy-MM-dd");
      setOption((pre) => ({
        ...pre,
        packageId: packageId,
        date: dateFormat,
      }));
      getRegisters({
        variables: {
          input: {
            packageId: packageId,
            date: dateFormat,
          },
        },
      });
    } else if (vaccineId && selectedDate) {
      const dateFormat: string = format(selectedDate, "yyyy-MM-dd");
      setOption((pre) => ({
        ...pre,
        vaccineId: vaccineId,
        date: dateFormat,
      }));
      getRegisters({
        variables: {
          input: {
            vaccineId: vaccineId,
            date: dateFormat,
          },
        },
      });
    } else if (specialtyId && selectedDate) {
      const dateFormat: string = format(selectedDate, "yyyy-MM-dd");
      setOption((pre) => ({
        ...pre,
        specialtyId: specialtyId,
        date: dateFormat,
      }));
      getRegisters({
        variables: {
          input: {
            specialtyId: specialtyId,
            date: dateFormat,
          },
        },
      });
    }
  }, [selectedDate, doctorId, packageId, vaccineId, specialtyId]);
  useEffect(() => {
    if (data?.getAllRegisterByOption) {
      setListRegister(data?.getAllRegisterByOption);
    }
  }, [data]);

  useEffect(() => {
    if (loadCreated) setSubscription(loadCreated);
    if (errCreated) setSubscription(false);
  }, [loadCreated, errCreated]);

  const filterWeekdays = (date: Date): boolean => {
    const day = date.getDay();
    var dayOfWeek: string;
    switch (day) {
      case 0:
        dayOfWeek = "Chủ nhật";
        break;
      case 1:
        dayOfWeek = "2";
        break;
      case 2:
        dayOfWeek = "3";
        break;
      case 3:
        dayOfWeek = "4";
        break;
      case 4:
        dayOfWeek = "5";
        break;
      case 5:
        dayOfWeek = "6";
        break;
      case 6:
        dayOfWeek = "7";
        break;
      default:
        dayOfWeek = "";
    }
    const find = listSchedule?.findIndex(
      (item) => item.dayOfWeek === dayOfWeek
    );
    return find !== -1 ? true : false;
  };
  const handleChangeDatePicker = (date: Date) => {
    setSelectedDate(date);
    switch (date.getDay()) {
      case 0:
        setSchedule(() =>
          listSchedule?.find((item) => item.dayOfWeek === "Chủ nhật")
        );
        break;
      case 1:
        setSchedule(() => listSchedule?.find((item) => item.dayOfWeek === "2"));
        break;
      case 2:
        setSchedule(() => listSchedule?.find((item) => item.dayOfWeek === "3"));
        break;
      case 3:
        setSchedule(() => listSchedule?.find((item) => item.dayOfWeek === "4"));
        break;
      case 4:
        setSchedule(() => listSchedule?.find((item) => item.dayOfWeek === "5"));
        break;
      case 5:
        setSchedule(() => listSchedule?.find((item) => item.dayOfWeek === "6"));
        break;
      case 6:
        setSchedule(() => listSchedule?.find((item) => item.dayOfWeek === "7"));
        break;
    }
  };
  const handleShowProfile = (regis: Register) => {
    setSetSelectedRegister(regis);
    setShowModal((pre) => ({ ...pre, profile: true }));
  };
  const handleShowCustomer = (regis: Register) => {
    setSetSelectedRegister(regis);
    setShowModal((pre) => ({ ...pre, customer: true }));
  };
  const handleConfirmRegister = async (regis: Register) => {
    const inputConfirm: ConfirmRegisterInput = {
      registerId: regis.id,
      state:
        regis.state === "Đã khám"
          ? EStateRegister.Pending
          : EStateRegister.Success,
    };
    await confirmRegister({
      variables: {
        input: inputConfirm,
      },
    }).then(() => {
      showToast(`Đã sửa trạng thái bệnh nhân👌`, undefined, 1000);
      if (listRegister) {
        const editedRegiss: Register[] = listRegister?.map((regis) => {
          if (regis.id === inputConfirm.registerId) {
            const newRegis: Register = {
              ...regis,
              state:
                inputConfirm.state === EStateRegister.Success
                  ? "Đã khám"
                  : "Chưa khám",
            };
            return newRegis;
          }
          return regis;
        });
        setListRegister(editedRegiss);
      }
    });
  };
  return (
    <div>
      <Row>
        <Col className="col">
          <Row>
            <Col sm={10}>
              <p className="fw-medium">
                {title}{" "}
                {subscription && (
                  <Spinner size="sm" animation="grow" variant="danger" />
                )}
              </p>
            </Col>
            <Col>
              <Button
                size="sm"
                variant="outline-success"
                onClick={() => {
                  refetch();
                }}>
                <TfiReload />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <div className=" text-center d-flex align-items-center mb-2">
          <p className="my-0 me-2">Bộ lọc:</p>
          <DatePickerCpn
            onChange={(date) => {
              handleChangeDatePicker(date);
            }}
            filterDate={filterWeekdays}
          />
          <p className="ms-4 my-0">
            Chọn phiên khám "{renderDayOfWeek(schedule?.dayOfWeek)}"{" "}
            <StatusCpn loading={loading} error={error} size="sm" />
          </p>
          <div>
            <Button
              variant="outline-primary"
              className="ms-2"
              size="sm"
              active={selectedSession === undefined}
              onClick={handleClick}
              ref={ref}>
              {selectedSession === undefined && "Tất cả phiên"}
              {selectedSession !== undefined && (
                <span>
                  {selectedSession.startTime}
                  {"-"}
                  {selectedSession.endTime}
                </span>
              )}
            </Button>

            <Overlay
              show={show}
              target={target}
              placement="bottom"
              container={ref}
              containerPadding={20}>
              <div
                style={{
                  minHeight: 200,
                  width: 700,
                  zIndex: 999,
                }}
                className="shadow p-3 mb-5 mt-1 bg-body-tertiary rounded border">
                <h6 className="text-dark">Chọn phiên</h6>
                <div className="m-1 d-flex flex-wrap g-3 align-items-center">
                  {schedule?.sessions.map((session, i) => (
                    <div className="" key={i}>
                      <SessionItem
                        session={session}
                        onClick={(s) => {
                          setSelectedSession(s);
                        }}
                        active={
                          JSON.stringify(session) ===
                          JSON.stringify(selectedSession)
                        }
                      />
                    </div>
                  ))}
                  <div className="m-1">
                    <Button
                      className="text-nowrap"
                      onClick={() => setSelectedSession(undefined)}
                      size={selectedSession === undefined ? undefined : "sm"}
                      active={selectedSession === undefined}
                      variant="outline-primary">
                      Tất cả phiên
                    </Button>
                  </div>
                </div>
              </div>
            </Overlay>
          </div>
        </div>
      </Row>
      <Row
        style={{
          maxHeight: "70vh",
          overflow: "auto",
        }}>
        <Col>
          <p>
            Danh sách đăng ký khám:{" "}
            <StatusCpn size="sm" loading={loadConfirm} error={errConfirm} />
          </p>
          <Table striped hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Tên bệnh nhân</th>
                <th>Giới tính</th>
                <th>Năm sinh</th>
                <th>Tr.Thái</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {listRegister?.map((regis, i) => {
                if (
                  (regis.session.startTime === selectedSession?.startTime &&
                    regis.session.endTime === selectedSession?.endTime) ||
                  !selectedSession
                ) {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td className="d-flex">
                        {regis?.profile?.fullname}{" "}
                        <span>
                          {regis.cancel && <Badge bg="danger">Đã hủy</Badge>}
                        </span>
                      </td>
                      <td>{regis?.profile?.gender}</td>
                      <td>{formatDate(regis?.profile?.dataOfBirth)}</td>

                      {(getEnumValueStateRegis(regis.state) ===
                        EStateRegister.Success && (
                        <td className="fw-medium text-success">
                          {regis.state}
                        </td>
                      )) || (
                        <td className="fw-medium text-warning">
                          {regis.state}
                        </td>
                      )}
                      <td>
                        <Dropdown drop="down">
                          <Dropdown.Toggle
                            as={CustomToggleCiMenuKebab}></Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item
                              onClick={() => handleConfirmRegister(regis)}>
                              {regis.state === "Chưa khám"
                                ? "Xác nhận khám"
                                : "Hoàn tác"}
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => handleShowProfile(regis)}>
                              Xem hồ sơ
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => handleShowCustomer(regis)}>
                              Xem người đăng ký
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* PROFILE DETAIL */}

      <ModalCpn
        handleClose={() => setShowModal({ ...showModal, profile: false })}
        handleSave={() => {}}
        headerText="Thông tin hồ sơ bệnh nhân"
        onlySclose
        openRequest={showModal.profile}>
        <div className="shadow-lg bg-light p-3 mt-3">
          {selectedRegiser && (
            <>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <IoPersonCircleOutline />
                  </span>
                  Họ và tên:{" "}
                  <span className="text-success ms-2">
                    {selectedRegiser?.profile?.fullname}{" "}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <CiCalendarDate />
                  </span>
                  Ngày sinh:
                  <span className="text-info ms-2">
                    {formatDate(selectedRegiser?.profile?.dataOfBirth)}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <FaPhone />
                  </span>
                  Số điện thoại:
                  <span className="text-info ms-2">
                    {selectedRegiser?.profile?.numberPhone}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <MdOutlineEmail />
                  </span>
                  Email:
                  <span className="text-info ms-2">
                    {selectedRegiser?.profile?.email}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <MdOutlineTransgender />
                  </span>
                  Giới tính:
                  <span className="text-info ms-2">
                    {selectedRegiser?.profile?.gender}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <SiGoogletagmanager />
                  </span>
                  Nghề nghiệp:
                  <span className="text-info ms-2">
                    {selectedRegiser?.profile?.job}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <SiStaffbase />
                  </span>
                  CCCD:
                  <span className="text-info ms-2">
                    {selectedRegiser?.profile?.identity || "..."}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <GiMedicalPackAlt />
                  </span>
                  Số BHYT:
                  <span className="text-info ms-2">
                    {selectedRegiser?.profile?.medicalInsurance || "..."}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <FaPeopleGroup />
                  </span>
                  Dân tộc:
                  <span className="text-info ms-2">
                    {selectedRegiser?.profile?.ethnic}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <FaPeopleGroup />
                  </span>
                  Quan hệ với chủ hộ:
                  <span className="text-info ms-2">
                    {selectedRegiser?.profile?.relationship}
                  </span>
                </h6>
              </div>
            </>
          )}
        </div>
      </ModalCpn>
      {/* CUSTOMER DETAIL */}
      <ModalCpn
        handleClose={() => setShowModal({ ...showModal, customer: false })}
        handleSave={() => {}}
        headerText="Thông tin người đăng ký khám"
        onlySclose
        openRequest={showModal.customer}>
        <div className="shadow-lg bg-light p-3 mt-3">
          {selectedRegiser?.profile?.customer && (
            <>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <IoPersonCircleOutline />
                  </span>
                  Họ và tên:{" "}
                  <span className="text-success ms-2">
                    {selectedRegiser.profile.customer.fullname}{" "}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <CiCalendarDate />
                  </span>
                  Ngày sinh:
                  <span className="text-info ms-2">
                    {formatDate(selectedRegiser.profile.customer.dateOfBirth)}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <FaPhone />
                  </span>
                  Số điện thoại:
                  <span className="text-info ms-2">
                    {selectedRegiser.profile.customer.numberPhone}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <MdOutlineEmail />
                  </span>
                  Email:
                  <span className="text-info ms-2">
                    {selectedRegiser.profile.customer.email}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <MdOutlineTransgender />
                  </span>
                  Giới tính:
                  <span className="text-info ms-2">
                    {selectedRegiser.profile.customer.gender}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary mx-1">
                    <FaPeopleGroup />
                  </span>
                  Dân tộc:
                  <span className="text-info ms-2">
                    {selectedRegiser.profile.customer.ethnic}
                  </span>
                </h6>
              </div>
            </>
          )}
        </div>
      </ModalCpn>
    </div>
  );
}
export default ListRegisterV2;
