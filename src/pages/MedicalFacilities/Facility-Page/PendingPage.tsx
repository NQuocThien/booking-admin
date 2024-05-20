import {
  Badge,
  Button,
  Col,
  Dropdown,
  Form,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import s from "src/assets/scss/General.module.scss";
import {
  ConfirmRegisterInput,
  EStateRegister,
  ETypeOfService,
  GetAllRegisPendingQuery,
  Register,
  useCancelRegisterByAdminMutation,
  useConfirmRegisterMutation,
  useGetAllDoctorCountOfFacilityLazyQuery,
  useGetAllMedicalSpecialtiesCountOfFacilityLazyQuery,
  useGetAllPackageCountOfFacilityLazyQuery,
  useGetAllRegisPendingLazyQuery,
  useGetAllVaccinationCountOfFacilityLazyQuery,
  useGetMedicalFacilityInfoLazyQuery,
  useRegisterPendingCreatedSubscription,
} from "src/graphql/webbooking-service.generated";
import { TiCancel } from "react-icons/ti";
import { useAuth } from "src/context/AuthContext";
import ShowAlert from "src/components/sub/alerts";
import { formatDate, getToken } from "src/utils/contain";
import GeneralStatistic from "src/components/Pages/MedicalFacility/Generalstatistic";
import { FaPeopleGroup, FaPhone, FaUserDoctor } from "react-icons/fa6";
import { LuPackageCheck } from "react-icons/lu";
import { FaBriefcaseMedical } from "react-icons/fa";
import {
  MdOutlineEmail,
  MdOutlineTransgender,
  MdOutlineVaccines,
} from "react-icons/md";
import { useEffect, useState } from "react";
import {
  GetEPermission,
  GetETypeOfService,
  GetRole,
} from "src/utils/enum-value";
import DatePickerCpn from "src/components/sub/DatePicker";
import LoadingIndicator from "src/components/sub/LoadingProgress";
import { CustomToggleCiMenuKebab } from "src/components/Custom/Toggle";
import ModalCpn from "src/components/sub/Modal";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { SiGoogletagmanager, SiStaffbase } from "react-icons/si";
import { GiMedicalPackAlt } from "react-icons/gi";
import { showToast } from "src/components/sub/toasts";
import { Link } from "react-router-dom";
import { handleNotification } from "src/utils/tools";
import { getEnumValueTypeOfService } from "src/utils/getData";
import { useStatePending } from "src/context/PendingPageContext";
import { IPagination } from "src/assets/contains/item-interface";
import PaginationCpn from "src/components/sub/Pagination";
import SearchInputCpn from "src/components/sub/InputSearch";
import SearchInputCpnV2 from "src/components/sub/InputSearchV2";
interface IFilterMonth {
  startTime: string;
  endTime: string;
}

interface ITypeService {
  ids: string[];
  total: number;
}

interface IStateServices {
  doctor: ITypeService;
  package: ITypeService;
  vaccine: ITypeService;
  specialty: ITypeService;
  currentType?: ETypeOfService;
  cancel: boolean;
}

interface IShowModal {
  customer: boolean;
  profile: boolean;
  cancel: boolean;
  confirm: boolean;
}
interface IInputCancel {
  regisId: string;
  content: string;
}
function PendingPage() {
  const { userInfor, checkExpirationToken, currRole, infoStaff } = useAuth();
  const {
    startTime,
    endTime,
    typeOfService,
    handleChangeTypeOfService,
    handleChangeEndTime,
    handleChangeStartTime,
  } = useStatePending();
  checkExpirationToken();

  const getValueFilter = (date: Date): IFilterMonth => {
    const current = new Date();
    if (!!endTime) {
      if (startTime === undefined)
        return {
          endTime: endTime.toDateString(),
          startTime: formatDate(current.toDateString()),
        };
      else if (!!startTime) {
        return {
          endTime: endTime.toDateString(),
          startTime: startTime.toDateString(),
        };
      }
    }

    const start = formatDate(current.toDateString()); // Lấy ngày hiện tại

    const end = new Date(current.getTime() + 24 * 60 * 60 * 1000); // Thêm 1 ngày cho ngày hiện tại
    return {
      endTime: formatDate(end.toDateString()),
      startTime: start,
    };
  };
  // ===========================================================================================================

  const [authorized, setAuthorized] = useState<boolean>(true);
  const [month, setMonth] = useState<IFilterMonth>(getValueFilter(new Date()));
  const [stateServices, setStateServices] = useState<IStateServices>({
    doctor: {
      ids: [],
      total: 0,
    },
    package: {
      ids: [],
      total: 0,
    },
    specialty: {
      ids: [],
      total: 0,
    },
    vaccine: {
      ids: [],
      total: 0,
    },
    cancel: false,
    currentType: typeOfService,
  });
  const [regisPending, setRegisPending] = useState<GetAllRegisPendingQuery>();
  const [listRegis, setListRegis] = useState<Register[]>([]);
  const [selectedRegiser, setSetSelectedRegister] = useState<Register>();
  const [showModal, setShowModal] = useState<IShowModal>({
    customer: false,
    profile: false,
    cancel: false,
    confirm: false,
  });
  const [inputCancel, setInputCancel] = useState<IInputCancel>();
  const [pagination, setPagination] = useState<IPagination>({
    current: 1,
    total: 1,
    sort: "asc",
  });
  const [search, setSearch] = useState<string>();
  // =================================================================

  const [getData, { data, loading, error }] =
    useGetMedicalFacilityInfoLazyQuery({
      variables: {
        userId: userInfor?.id || "",
      },
      context: {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    });

  const [
    getDataRegisDoctor,
    { data: dataDataRegisDoctor, loading: loadDataRegisDoctor },
  ] = useGetAllDoctorCountOfFacilityLazyQuery({
    fetchPolicy: "no-cache",
    variables: {
      userId: userInfor?.id || "",
      endTime: month.endTime,
      startTime: month.startTime,
    },
    context: {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    },
  });

  const [
    getDataRegisPackage,
    { data: dataDataRegisPackage, loading: loadDataRegisPackage },
  ] = useGetAllPackageCountOfFacilityLazyQuery({
    fetchPolicy: "no-cache",
    variables: {
      userId: userInfor?.id || "",
      endTime: month.endTime,
      startTime: month.startTime,
    },
    context: {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    },
  });
  const [
    getDataRegisMedicalSpecialty,
    {
      data: dataDataRegisMedicalSpecialty,
      loading: loadDataRegisMedicalSpecialty,
    },
  ] = useGetAllMedicalSpecialtiesCountOfFacilityLazyQuery({
    fetchPolicy: "no-cache",
    variables: {
      userId: userInfor?.id || "",
      endTime: month.endTime,
      startTime: month.startTime,
    },
    context: {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    },
  });
  const [
    getDataRegisVaccination,
    { data: dataDataRegisVaccination, loading: loadDataRegisVaccination },
  ] = useGetAllVaccinationCountOfFacilityLazyQuery({
    fetchPolicy: "no-cache",
    variables: {
      userId: userInfor?.id || "",
      endTime: month.endTime,
      startTime: month.startTime,
    },
    context: {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    },
  });

  const [
    getRegisPending,
    {
      data: dataRegisPending,
      loading: loadingRegisPending,
      error: errorRegisPending,
    },
  ] = useGetAllRegisPendingLazyQuery({
    fetchPolicy: "no-cache",
  });

  const {
    data: dataCreated,
    loading: loadingCreated,
    error: errCreated,
  } = useRegisterPendingCreatedSubscription({
    variables: {
      input: {
        doctorIds: stateServices.doctor.ids,
        packageIds: stateServices.package.ids,
        vaccineIds: stateServices.vaccine.ids,
        specialtyIds: stateServices.specialty.ids,
        startTime: month.startTime,
        endTime: month.endTime,
        typeOfService: stateServices.currentType,
        cancel: stateServices.cancel,
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

  const [cancelRegis, { loading: loadCancel, error: errorCancel }] =
    useCancelRegisterByAdminMutation({
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    });
  // =================================================================

  useEffect(() => {
    if (currRole === GetRole.Facility) {
      getData({
        variables: {
          userId: userInfor?.id || "",
        },
      });
      getDataRegisDoctor({
        variables: {
          userId: userInfor?.id || "",
          endTime: month.endTime,
          startTime: month.startTime,
          isPending: true,
          isCancel: stateServices.cancel,
        },
      });
      getDataRegisPackage({
        variables: {
          userId: userInfor?.id || "",
          endTime: month.endTime,
          startTime: month.startTime,
          isPending: true,
          isCancel: stateServices.cancel,
        },
      });
      getDataRegisVaccination({
        variables: {
          userId: userInfor?.id || "",
          endTime: month.endTime,
          startTime: month.startTime,
          isPending: true,
          isCancel: stateServices.cancel,
        },
      });
      getDataRegisMedicalSpecialty({
        variables: {
          userId: userInfor?.id || "",
          endTime: month.endTime,
          startTime: month.startTime,
          isPending: true,
          isCancel: stateServices.cancel,
        },
      });
    } else if (currRole === GetRole.Staff) {
      if (
        infoStaff?.permissions.includes(GetEPermission.Magager) ||
        infoStaff?.permissions.includes(GetEPermission.MagagerPending)
      ) {
        getData({
          variables: {
            staffId: infoStaff?.id || "",
          },
        });

        getDataRegisDoctor({
          variables: {
            staffId: infoStaff?.id || "",
            endTime: month.endTime,
            startTime: month.startTime,
            isPending: true,
            isCancel: stateServices.cancel,
          },
        });
        getDataRegisPackage({
          variables: {
            staffId: infoStaff?.id || "",
            endTime: month.endTime,
            startTime: month.startTime,
            isPending: true,
            isCancel: stateServices.cancel,
          },
        });
        getDataRegisVaccination({
          variables: {
            staffId: infoStaff?.id || "",
            endTime: month.endTime,
            startTime: month.startTime,
            isPending: true,
            isCancel: stateServices.cancel,
          },
        });
        getDataRegisMedicalSpecialty({
          variables: {
            staffId: infoStaff?.id || "",
            endTime: month.endTime,
            startTime: month.startTime,
            isPending: true,
            isCancel: stateServices.cancel,
          },
        });
      } else {
        setAuthorized(false);
      }
    }
  }, [currRole, month]);

  useEffect(() => {
    if (dataDataRegisDoctor) {
      const ids: string[] = dataDataRegisDoctor.getAllDoctorOfFacility.map(
        (doctor) => doctor.id
      );
      const total: number =
        dataDataRegisDoctor?.getAllDoctorOfFacility.reduce(
          (total, current) =>
            current.registerCount ? total + current.registerCount : total,
          0
        ) || 0;
      setStateServices((pre) => ({
        ...pre,
        doctor: {
          ids: ids,
          total: total,
        },
      }));
      if (stateServices.currentType === ETypeOfService.Package)
        setPagination((pre) => ({ ...pre, total: total }));
    }
  }, [dataDataRegisDoctor]);

  useEffect(() => {
    if (dataDataRegisPackage) {
      const ids: string[] = dataDataRegisPackage?.getAllPackageOfFacility.map(
        (p) => p.id
      );
      const total: number =
        dataDataRegisPackage?.getAllPackageOfFacility.reduce(
          (total, current) =>
            current.registerCount ? total + current.registerCount : total,
          0
        ) || 0;
      setStateServices((pre) => ({
        ...pre,
        package: {
          ids: ids,
          total: total,
        },
      }));
      if (stateServices.currentType === ETypeOfService.Package)
        setPagination((pre) => ({ ...pre, total: total }));
    }
  }, [dataDataRegisPackage]);

  useEffect(() => {
    if (dataDataRegisVaccination) {
      const ids: string[] =
        dataDataRegisVaccination.getAllVaccinationOfFacility.map(
          (vaccine) => vaccine.id
        );
      const total: number =
        dataDataRegisVaccination?.getAllVaccinationOfFacility.reduce(
          (total, current) =>
            current.registerCount ? total + current.registerCount : total,
          0
        ) || 0;
      setStateServices((pre) => ({
        ...pre,
        vaccine: {
          ids: ids,
          total: total,
        },
      }));
      if (stateServices.currentType === ETypeOfService.Vaccine)
        setPagination((pre) => ({ ...pre, total: total }));
    }
  }, [dataDataRegisVaccination]);

  useEffect(() => {
    if (dataDataRegisMedicalSpecialty) {
      const ids: string[] =
        dataDataRegisMedicalSpecialty.getAllMedicalSpecialtiesOfFacility.map(
          (specialty) => specialty.id
        );
      const total: number =
        dataDataRegisMedicalSpecialty?.getAllMedicalSpecialtiesOfFacility.reduce(
          (total, current) =>
            current.registerCount ? total + current.registerCount : total,
          0
        ) || 0;
      setStateServices((pre) => ({
        ...pre,
        specialty: {
          ids: ids,
          total: total,
        },
      }));
      if (stateServices.currentType === ETypeOfService.Specialty)
        setPagination((pre) => ({ ...pre, total: total }));
    }
  }, [dataDataRegisMedicalSpecialty]);

  useEffect(() => {
    if (dataCreated) {
      handleNotification();
      if (
        stateServices.currentType === undefined ||
        stateServices.currentType ===
          getEnumValueTypeOfService(
            dataCreated.registerPendingCreated.typeOfService
          )
      )
        setListRegis((pre) => [...pre, dataCreated.registerPendingCreated]);
      if (
        dataCreated.registerPendingCreated.typeOfService ===
        GetETypeOfService.Doctor
      ) {
        setStateServices((pre) => ({
          ...pre,
          doctor: { ...pre.doctor, total: pre.doctor.total + 1 },
        }));
      }
      if (
        dataCreated.registerPendingCreated.typeOfService ===
        GetETypeOfService.Package
      ) {
        setStateServices((pre) => ({
          ...pre,
          package: { ...pre.package, total: pre.package.total + 1 },
        }));
      }
      if (
        dataCreated.registerPendingCreated.typeOfService ===
        GetETypeOfService.Specialty
      ) {
        setStateServices((pre) => ({
          ...pre,
          specialty: { ...pre.specialty, total: pre.specialty.total + 1 },
        }));
      }
      if (
        dataCreated.registerPendingCreated.typeOfService ===
        GetETypeOfService.Vaccine
      ) {
        setStateServices((pre) => ({
          ...pre,
          vaccine: { ...pre.vaccine, total: pre.vaccine.total + 1 },
        }));
      }
    }
  }, [dataCreated]);

  //----- Get regis pending -----
  useEffect(() => {
    if (currRole === GetRole.Facility)
      getRegisPending({
        variables: {
          input: {
            userId: userInfor?.id,
            startTime: month.startTime,
            endTime: month.endTime,
            typeOfService: stateServices.currentType,
            cancel: stateServices.cancel,
          },
          limit: pagination.rowPerPage || 15,
          page: pagination.current,
          search: search,
        },
      });
    else if (currRole === GetRole.Staff)
      getRegisPending({
        variables: {
          input: {
            facilityIdFromStaff: infoStaff?.medicalFacilityId,
            startTime: month.startTime,
            endTime: month.endTime,
            typeOfService: stateServices.currentType,
            cancel: stateServices.cancel,
          },
          limit: pagination.rowPerPage || 15,
          page: pagination.current,
          search: search,
        },
      });

    if (stateServices.currentType === undefined) {
      const totalRefig: number =
        stateServices.doctor.total +
        stateServices.package.total +
        stateServices.vaccine.total +
        stateServices.specialty.total;
      setPagination((pre) => ({ ...pre, total: totalRefig }));
    } else if (stateServices.currentType === ETypeOfService.Doctor) {
      setPagination((pre) => ({ ...pre, total: stateServices.doctor.total }));
    } else if (stateServices.currentType === ETypeOfService.Package) {
      setPagination((pre) => ({ ...pre, total: stateServices.package.total }));
    } else if (stateServices.currentType === ETypeOfService.Specialty) {
      setPagination((pre) => ({
        ...pre,
        total: stateServices.specialty.total,
      }));
    } else if (stateServices.currentType === ETypeOfService.Vaccine) {
      setPagination((pre) => ({ ...pre, total: stateServices.vaccine.total }));
    }
  }, [
    stateServices.cancel,
    stateServices.currentType,
    month,
    pagination.current,
    search,
  ]);

  useEffect(() => {
    if (dataRegisPending) {
      setRegisPending(dataRegisPending);
      setListRegis(dataRegisPending.getAllRegisPending);
    }
  }, [dataRegisPending]);
  // ===========================================================================================================
  const getTimeRegis = (date: string): string => {
    const time = new Date(date);
    return `${
      time.getMonth() + 1
    }/${time.getDate()} - ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  };
  const handleShowProfile = (regis: Register) => {
    setSetSelectedRegister(regis);
    setShowModal((pre) => ({ ...pre, profile: true }));
  };
  const handleShowCustomer = (regis: Register) => {
    setSetSelectedRegister(regis);
    setShowModal((pre) => ({ ...pre, customer: true }));
  };
  const handleUpdateNumberRegis = (typeOfService: string) => {
    if (typeOfService === GetETypeOfService.Doctor) {
      setStateServices((pre) => ({
        ...pre,
        doctor: { ...pre.doctor, total: pre.doctor.total - 1 },
      }));
    }
    if (typeOfService === GetETypeOfService.Package) {
      setStateServices((pre) => ({
        ...pre,
        package: { ...pre.package, total: pre.package.total - 1 },
      }));
    }
    if (typeOfService === GetETypeOfService.Specialty) {
      setStateServices((pre) => ({
        ...pre,
        specialty: { ...pre.specialty, total: pre.specialty.total - 1 },
      }));
    }
    if (typeOfService === GetETypeOfService.Vaccine) {
      setStateServices((pre) => ({
        ...pre,
        vaccine: { ...pre.vaccine, total: pre.vaccine.total - 1 },
      }));
    }
  };
  const handleConfirmRegister = async (regis: Register) => {
    const inputConfirm: ConfirmRegisterInput = {
      registerId: regis.id,
      state: EStateRegister.Approved,
    };
    await confirmRegister({
      variables: {
        input: inputConfirm,
      },
    })
      .then(() => {
        handleUpdateNumberRegis(regis.typeOfService);
        const newRegisPending = listRegis.filter((r) => r.id !== regis.id);
        setListRegis(newRegisPending);
        showToast(
          `Đã duyệt đăng ký ${regis.profile?.fullname}👌`,
          undefined,
          1000
        );
      })
      .catch((e) => {
        showToast(e.message, "error");
      });
  };
  const handleCancel = async () => {
    if (inputCancel) {
      await cancelRegis({
        variables: {
          id: inputCancel?.regisId,
          content: inputCancel?.content,
        },
      })
        .then(() => {
          showToast(
            `Đã hủy đăng ký ${selectedRegiser?.profile?.fullname}`,
            "success"
          );

          setListRegis((pre) =>
            pre.filter((r) => r.id !== inputCancel.regisId)
          );
          setShowModal((pre) => ({ ...pre, cancel: false }));
        })
        .catch((e) => {
          showToast(e.message, "error");
        });
    }
  };
  const handleShowCancel = (regis: Register) => {
    setSetSelectedRegister(regis);
    setShowModal((pre) => ({ ...pre, cancel: true }));
    setInputCancel({
      regisId: regis.id,
      content: "Lý do khách quan không thể tiếp nhận",
    });
  };
  const refetchCount = (isCancel: boolean) => {
    getDataRegisDoctor({
      variables: {
        userId: userInfor?.id || "",
        endTime: month.endTime,
        startTime: month.startTime,
        isPending: true,
        isCancel: isCancel,
      },
    });
    getDataRegisPackage({
      variables: {
        userId: userInfor?.id || "",
        endTime: month.endTime,
        startTime: month.startTime,
        isPending: true,
        isCancel: isCancel,
      },
    });
    getDataRegisVaccination({
      variables: {
        userId: userInfor?.id || "",
        endTime: month.endTime,
        startTime: month.startTime,
        isPending: true,
        isCancel: isCancel,
      },
    });
    getDataRegisMedicalSpecialty({
      variables: {
        userId: userInfor?.id || "",
        endTime: month.endTime,
        startTime: month.startTime,
        isPending: true,
        isCancel: isCancel,
      },
    });
  };
  // ==================================================================
  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) {
    console.log(error);
    return <ShowAlert />;
  }
  if (!authorized) {
    return <ShowAlert head="Không có quyền truy cập" />;
  }
  return (
    <div>
      <div className={`${s.component}  mb-2`}>
        <Row>
          <Col>
            <h4>
              Danh sách đăng ký khám chờ duyệt
              {!errCreated && (
                <Spinner size="sm" animation="grow" variant="danger" />
              )}
              {loadConfirm && <Spinner size="sm" />}{" "}
            </h4>
          </Col>
          <Col>
            <SearchInputCpnV2
              onSearch={(s) => {
                setSearch(s);
              }}
              onCancel={(item) => {
                const cancel = stateServices.cancel;
                setStateServices((pre) => ({ ...pre, cancel: item }));
                refetchCount(item);
              }}
            />
          </Col>
          {/* <Button
            size="sm"
            className="fs-6"
            active={stateServices.cancel}
            onClick={() => {
              const cancel = stateServices.cancel;
              setStateServices((pre) => ({ ...pre, cancel: !pre.cancel }));
              refetchCount(!cancel);
            }}
            variant={`${
              (stateServices.cancel && "danger") || "outline-secondary"
            }`}>
            <TiCancel />
          </Button> */}
        </Row>
      </div>
      <div className={`${s.component} mb-2 d-flex g-4`}>
        <Col lg={4}>
          <div className="d-flex align-items-center g-3">
            <div>Ngày bắt đầu:</div>
            <div>
              <DatePickerCpn
                onChange={(date) => {
                  handleChangeStartTime(date);
                  setMonth((pre) => ({
                    ...pre,
                    startTime: date.toDateString(),
                    endTime:
                      (date > new Date(month.endTime) && date.toDateString()) ||
                      pre.endTime,
                  }));
                }}
                filterDate={(date) => {
                  return (
                    date >= new Date() ||
                    date.toDateString() === new Date().toDateString()
                  );
                }}
              />
            </div>
          </div>
        </Col>
        <Col>
          <div className="d-flex align-items-center g-3">
            <div>Ngày kết thúc:</div>
            <div>
              <DatePickerCpn
                onChange={(date) => {
                  handleChangeEndTime(date);
                  setMonth((pre) => ({ ...pre, endTime: date.toDateString() }));
                }}
                filterDate={(date) => {
                  return date >= new Date(month.startTime);
                }}
                currentValue={month.endTime}
              />
            </div>
          </div>
        </Col>
      </div>
      <div>
        {data?.getMedicalFacilityInfo && (
          <Row>
            {data?.getMedicalFacilityInfo?.totalDoctors && (
              <Col
                xl={3}
                lg={4}
                sm={6}
                onClick={() => {
                  handleChangeTypeOfService(
                    stateServices.currentType !== ETypeOfService.Doctor
                      ? ETypeOfService.Doctor
                      : undefined
                  );
                  setStateServices((pre) => ({
                    ...pre,
                    currentType:
                      pre.currentType !== ETypeOfService.Doctor
                        ? ETypeOfService.Doctor
                        : undefined,
                  }));
                }}>
                <GeneralStatistic
                  title="Bác sĩ"
                  number={stateServices.doctor.total}
                  icons={FaUserDoctor}
                  pending
                  active={stateServices.currentType === ETypeOfService.Doctor}
                  loading={loadDataRegisDoctor}
                />
              </Col>
            )}
            {data?.getMedicalFacilityInfo?.totalPackages && (
              <Col
                xl={3}
                lg={4}
                sm={6}
                onClick={() => {
                  handleChangeTypeOfService(
                    stateServices.currentType !== ETypeOfService.Package
                      ? ETypeOfService.Package
                      : undefined
                  );
                  setStateServices((pre) => ({
                    ...pre,
                    currentType:
                      pre.currentType !== ETypeOfService.Package
                        ? ETypeOfService.Package
                        : undefined,
                  }));
                }}>
                <GeneralStatistic
                  title="Gói khám"
                  number={stateServices.package.total}
                  icons={LuPackageCheck}
                  pending
                  active={stateServices.currentType === ETypeOfService.Package}
                  loading={loadDataRegisPackage}
                />
              </Col>
            )}
            {data?.getMedicalFacilityInfo?.totalSpecialties && (
              <Col
                xl={3}
                lg={4}
                sm={6}
                onClick={() => {
                  handleChangeTypeOfService(
                    stateServices.currentType !== ETypeOfService.Specialty
                      ? ETypeOfService.Specialty
                      : undefined
                  );

                  setStateServices((pre) => ({
                    ...pre,
                    currentType:
                      pre.currentType !== ETypeOfService.Specialty
                        ? ETypeOfService.Specialty
                        : undefined,
                  }));
                }}>
                <GeneralStatistic
                  title="Chuyên khoa"
                  number={stateServices.specialty.total}
                  icons={FaBriefcaseMedical}
                  pending
                  active={
                    stateServices.currentType === ETypeOfService.Specialty
                  }
                  loading={loadDataRegisMedicalSpecialty}
                />
              </Col>
            )}
            {data?.getMedicalFacilityInfo?.totalVaccinations && (
              <Col
                xl={3}
                lg={4}
                sm={6}
                onClick={() => {
                  handleChangeTypeOfService(
                    stateServices.currentType !== ETypeOfService.Vaccine
                      ? ETypeOfService.Vaccine
                      : undefined
                  );
                  setStateServices((pre) => ({
                    ...pre,
                    currentType:
                      pre.currentType !== ETypeOfService.Vaccine
                        ? ETypeOfService.Vaccine
                        : undefined,
                  }));
                }}>
                <GeneralStatistic
                  title="Tim chủng"
                  number={stateServices.vaccine.total}
                  icons={MdOutlineVaccines}
                  active={stateServices.currentType === ETypeOfService.Vaccine}
                  pending
                  loading={loadDataRegisVaccination}
                />
              </Col>
            )}
          </Row>
        )}
      </div>
      <div className="d-flex g-4 justify-content-between mb-2">
        <div className="fs-5 me-3">
          {(stateServices.cancel && (
            <span className="text-danger">Danh sách đã hủy</span>
          )) || <span className="text-primary">Danh sách chờ duyệt:</span>}
        </div>
      </div>
      <Row
        className="overflow-y-scroll bg-light rounded"
        style={{
          minHeight: "50vh",
          maxHeight: "70vh",
        }}>
        {loadingRegisPending && (
          <LoadingIndicator loading={loadingRegisPending} />
        )}
        {!loadingRegisPending && (
          <div>
            <Table
              striped
              hover
              responsive
              size="sm"
              className="mb-5  bg-light">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tên bệnh nhân</th>
                  <th>Ngày sinh</th>
                  <th>Ngày/Phiên</th>
                  <th>Dịch vụ</th>
                  <th>Tạo lúc</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {listRegis.map((regis, key) => (
                  <tr key={key}>
                    <td className="align-middle">{key + 1}</td>
                    <td className="align-middle" style={{ minWidth: 230 }}>
                      <span className="fw-bold">{regis.profile?.fullname}</span>
                      ({regis.profile?.gender})
                    </td>
                    <td className="align-middle" style={{ minWidth: 100 }}>
                      {formatDate(regis.profile?.dataOfBirth)}
                    </td>
                    <td className="align-middle">
                      <span className="text-success">
                        {formatDate(regis.date)}
                      </span>
                      <br />
                      {regis.session.startTime}-{regis.session.endTime}
                    </td>
                    <td>{regis.typeOfService}</td>
                    <td className="align-middle">
                      <Badge>{getTimeRegis(regis.createdAt)}</Badge>
                    </td>
                    <td className="align-middle">
                      {" "}
                      <Dropdown drop="down">
                        <Dropdown.Toggle
                          as={CustomToggleCiMenuKebab}></Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item as={Link} to={`detail/${regis.id}`}>
                            Chi tiết
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              const input: Register = {
                                id: regis.id,
                                cancel: regis.cancel,
                                createdAt: regis.createdAt,
                                date: regis.date,
                                profileId: regis.profileId,
                                session: regis.session,
                                state: regis.state,
                                typeOfService: regis.typeOfService,
                                profile: regis.profile,
                              };
                              handleConfirmRegister(input);
                            }}>
                            Duyệt đăng ký
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to={`${regis.profile?.id}`}>
                            Xem lịch sử
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              const input: Register = {
                                id: regis.id,
                                cancel: regis.cancel,
                                createdAt: regis.createdAt,
                                date: regis.date,
                                profileId: regis.profileId,
                                session: regis.session,
                                state: regis.state,
                                typeOfService: regis.typeOfService,
                                profile: regis.profile,
                              };
                              handleShowProfile(input);
                            }}>
                            Xem hồ sơ
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              const input: Register = {
                                id: regis.id,
                                cancel: regis.cancel,
                                createdAt: regis.createdAt,
                                date: regis.date,
                                profileId: regis.profileId,
                                session: regis.session,
                                state: regis.state,
                                typeOfService: regis.typeOfService,
                                profile: regis.profile,
                              };
                              handleShowCustomer(input);
                            }}>
                            Xem người đăng ký
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              const input: Register = {
                                id: regis.id,
                                cancel: regis.cancel,
                                createdAt: regis.createdAt,
                                date: regis.date,
                                profileId: regis.profileId,
                                session: regis.session,
                                state: regis.state,
                                typeOfService: regis.typeOfService,
                                profile: regis.profile,
                              };
                              handleShowCancel(input);
                            }}>
                            Hủy đăng ký
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="d-flex justify-content-center">
              <PaginationCpn
                setPageActive={(page: number) => {
                  setPagination((pre) => ({ ...pre, current: page }));
                }}
                totalPage={Math.ceil(
                  pagination.total / (pagination.rowPerPage || 15)
                )}
                activePage={pagination.current}
              />
            </div>
          </div>
        )}
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
                  Quan hệ với chủ tài khoản:
                  <span className="text-info ms-2">
                    {selectedRegiser?.profile?.relationship}
                  </span>
                </h6>
              </div>
            </>
          )}
        </div>
      </ModalCpn>
      <ModalCpn
        handleClose={() => setShowModal({ ...showModal, cancel: false })}
        handleSave={() => {
          handleCancel();
        }}
        textButtonSave="Xác nhận hủy"
        headerText="Hủy tiếp nhận đăng ký khám"
        openRequest={showModal.cancel}>
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
            </>
          )}

          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Lý do hủy</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={inputCancel?.content || ""}
              />
            </Form.Group>
          </Form>
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
      {/* Regis confirm */}
      {/* <ModalCpn
        handleClose={() => setShowModal({ ...showModal, confirm: false })}
        handleSave={() => {}}
        headerText="Xac"
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
      </ModalCpn> */}
    </div>
  );
}
export default PendingPage;
