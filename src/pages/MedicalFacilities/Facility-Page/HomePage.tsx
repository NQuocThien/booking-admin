import { Col, Row, Spinner } from "react-bootstrap";
import s from "src/assets/scss/General.module.scss";
import {
  GetAllDoctorCountOfFacilityQuery,
  GetAllMedicalSpecialtiesCountOfFacilityQuery,
  GetAllPackageCountOfFacilityQuery,
  GetAllVaccinationCountOfFacilityQuery,
  useGetAllDoctorCountOfFacilityLazyQuery,
  useGetAllMedicalSpecialtiesCountOfFacilityLazyQuery,
  useGetAllPackageCountOfFacilityLazyQuery,
  useGetAllVaccinationCountOfFacilityLazyQuery,
  useGetMedicalFacilityInfoLazyQuery,
} from "src/graphql/webbooking-service.generated";
import { useAuth } from "src/context/AuthContext";
import ShowAlert from "src/components/sub/alerts";
import { formatDate, getToken } from "src/utils/contain";
import GeneralStatistic from "src/components/Pages/MedicalFacility/Generalstatistic";
import { FaUserDoctor } from "react-icons/fa6";
import { LuPackageCheck } from "react-icons/lu";
import { FaBriefcaseMedical } from "react-icons/fa";
import { MdOutlineVaccines } from "react-icons/md";
import { useEffect, useState } from "react";
import { GetEPermission, GetRole } from "src/utils/enum-value";
import ChartColumnRegisService from "src/components/Charts/ChartCollumnRegisService";
import ChartPieRegisService from "src/components/Charts/ChartPieRegisService";
interface IFilterMonth {
  startTime: string;
  endTime: string;
}

function FacilityHomePage() {
  const { userInfor, checkExpirationToken, currRole, infoStaff } = useAuth();
  checkExpirationToken();

  const getValueFilter = (date: Date): IFilterMonth => {
    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    const start = new Date(date.getFullYear(), date.getMonth(), 1);
    const end = new Date(nextMonth.getTime() - 1);
    return {
      endTime: formatDate(end.toDateString()),
      startTime: formatDate(start.toDateString()),
    };
  };
  // ===========================================================================================================

  const [authorized, setAuthorized] = useState<boolean>(true);

  const [month, setMonth] = useState<IFilterMonth>(getValueFilter(new Date()));
  const [selectedMonth, setSelectedMonth] = useState("");

  const [doctorCount, setDoctorCount] =
    useState<GetAllDoctorCountOfFacilityQuery>();

  const [packageCount, setPackageCount] =
    useState<GetAllPackageCountOfFacilityQuery>();

  const [vaccinationCount, setVaccinationCount] =
    useState<GetAllVaccinationCountOfFacilityQuery>();

  const [spcialtyCount, setSpecialtyCount] =
    useState<GetAllMedicalSpecialtiesCountOfFacilityQuery>();

  const [total, setTotal] = useState({
    totalDoctor: 0,
    totalPackage: 0,
    totalVaccine: 0,
    totalSpecialty: 0,
  });
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
        },
      });
      getDataRegisPackage({
        variables: {
          userId: userInfor?.id || "",
          endTime: month.endTime,
          startTime: month.startTime,
        },
      });
      getDataRegisVaccination({
        variables: {
          userId: userInfor?.id || "",
          endTime: month.endTime,
          startTime: month.startTime,
        },
      });
      getDataRegisMedicalSpecialty({
        variables: {
          userId: userInfor?.id || "",
          endTime: month.endTime,
          startTime: month.startTime,
        },
      });
    } else if (currRole === GetRole.Staff) {
      if (infoStaff?.permissions.includes(GetEPermission.Magager)) {
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
          },
        });
        getDataRegisPackage({
          variables: {
            staffId: infoStaff?.id || "",
            endTime: month.endTime,
            startTime: month.startTime,
          },
        });
        getDataRegisVaccination({
          variables: {
            staffId: infoStaff?.id || "",
            endTime: month.endTime,
            startTime: month.startTime,
          },
        });
        getDataRegisMedicalSpecialty({
          variables: {
            staffId: infoStaff?.id || "",
            endTime: month.endTime,
            startTime: month.startTime,
          },
        });
      } else setAuthorized(false);
    }
  }, [currRole, month]);

  useEffect(() => {
    if (dataDataRegisDoctor) {
      setDoctorCount(dataDataRegisDoctor);
      setTotal((pre) => ({
        ...pre,
        totalDoctor:
          dataDataRegisDoctor?.getAllDoctorOfFacility.reduce(
            (total, current) =>
              current.registerCount ? total + current.registerCount : total,
            0
          ) || 0,
      }));
    }
  }, [dataDataRegisDoctor]);

  useEffect(() => {
    if (dataDataRegisPackage) {
      setPackageCount(dataDataRegisPackage);
      setTotal((pre) => ({
        ...pre,
        totalPackage:
          dataDataRegisPackage?.getAllPackageOfFacility.reduce(
            (total, current) =>
              current.registerCount ? total + current.registerCount : total,
            0
          ) || 0,
      }));
    }
  }, [dataDataRegisPackage]);

  useEffect(() => {
    if (dataDataRegisVaccination) {
      setVaccinationCount(dataDataRegisVaccination);
      setTotal((pre) => ({
        ...pre,
        totalVaccine:
          dataDataRegisVaccination?.getAllVaccinationOfFacility.reduce(
            (total, current) =>
              current.registerCount ? total + current.registerCount : total,
            0
          ) || 0,
      }));
    }
  }, [dataDataRegisVaccination]);

  useEffect(() => {
    if (dataDataRegisMedicalSpecialty) {
      setSpecialtyCount(dataDataRegisMedicalSpecialty);
      setTotal((pre) => ({
        ...pre,
        totalSpecialty:
          dataDataRegisMedicalSpecialty?.getAllMedicalSpecialtiesOfFacility.reduce(
            (total, current) =>
              current.registerCount ? total + current.registerCount : total,
            0
          ) || 0,
      }));
    }
  }, [dataDataRegisMedicalSpecialty]);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    setSelectedMonth(`${year}-${month}`);
  }, []);
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
      <div className={`${s.component} mb-2`}>
        <h4>
          Trang quản lý cơ sơ y tế "
          {data?.getMedicalFacilityInfo.medicalFacilityName}"
        </h4>
      </div>
      <div>
        {data?.getMedicalFacilityInfo && (
          <Row>
            {data?.getMedicalFacilityInfo?.totalDoctors && (
              <Col xl={3} lg={4} sm={6}>
                <GeneralStatistic
                  title="Bác sĩ"
                  number={data?.getMedicalFacilityInfo.totalDoctors}
                  icons={FaUserDoctor}
                />
              </Col>
            )}
            {data?.getMedicalFacilityInfo?.totalPackages && (
              <Col xl={3} lg={4} sm={6}>
                <GeneralStatistic
                  title="Gói khám"
                  number={data?.getMedicalFacilityInfo?.totalPackages}
                  icons={LuPackageCheck}
                />
              </Col>
            )}
            {data?.getMedicalFacilityInfo?.totalSpecialties && (
              <Col xl={3} lg={4} sm={6}>
                <GeneralStatistic
                  title="Chuyên khoa"
                  number={data?.getMedicalFacilityInfo?.totalSpecialties}
                  icons={FaBriefcaseMedical}
                />
              </Col>
            )}
            {data?.getMedicalFacilityInfo?.totalVaccinations && (
              <Col xl={3} lg={4} sm={6}>
                <GeneralStatistic
                  title="Tim chủng"
                  number={data?.getMedicalFacilityInfo?.totalVaccinations}
                  icons={MdOutlineVaccines}
                />
              </Col>
            )}
          </Row>
        )}
      </div>
      <div className="px-2">
        <p>Thống kê theo tháng:</p>
        <input
          type="month"
          value={selectedMonth}
          onChange={(e) => {
            const m = e.currentTarget.value;
            setSelectedMonth(m);
            setMonth(getValueFilter(new Date(m)));
          }}
        />
      </div>
      <div className="d-flex justify-content-between mt-3">
        <ChartColumnRegisService
          totalDoctor={total.totalDoctor}
          totalPackage={total.totalPackage}
          totalVaccine={total.totalVaccine}
          totalSpecialty={total.totalSpecialty}
        />
        <ChartPieRegisService
          totalDoctor={total.totalDoctor}
          totalPackage={total.totalPackage}
          totalVaccine={total.totalVaccine}
          totalSpecialty={total.totalSpecialty}
        />
      </div>
    </div>
  );
}
export default FacilityHomePage;
