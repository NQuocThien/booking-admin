import {
  MedicalFacilities,
  useDeleteDoctorMutation,
  useDeleteMecialSpecialtyMutation,
  useDeletePackageMutation,
  useDeleteVaccinationMutation,
} from "src/graphql/webbooking-service.generated";
import { showToast } from "src/components/sub/toasts";
import { EtypeService } from "src/utils/enum";
import { DoctorListServiveMemory } from "../Doctor/DoctorListService";
import { PackageListServiveMemory } from "../Package/PackageListService";
import { SpecialtyListServiveMemory } from "../Specialty/SpecialtyListService";
import { VaccinationListServiveMemory } from "../Vaccination/VaccinationListService";
interface IProp {
  data: MedicalFacilities | undefined;
  hanldeDeleteRefetch: (typeService: EtypeService, id: string) => void;
}
function MedicalFacilityListService({ data, hanldeDeleteRefetch }: IProp) {
  const [deleteDoctor, { loading: loadingDeleteDoctor }] =
    useDeleteDoctorMutation({
      fetchPolicy: "no-cache",
    });
  const [deletePackage, { loading: loadingDeletePackage }] =
    useDeletePackageMutation({
      fetchPolicy: "no-cache",
    });
  const [deleteMedicalSpcialty, { loading: loadingDeleteSpecialty }] =
    useDeleteMecialSpecialtyMutation({
      fetchPolicy: "no-cache",
    });
  const [deleteVacination, { loading: loadingDeleteVaccination }] =
    useDeleteVaccinationMutation({
      fetchPolicy: "no-cache",
    });
  const handleDelete = async (id: string, name: string, type: EtypeService) => {
    const confirm = window.confirm(`Bạn có chắc xóa ${type} "${name}"`);
    switch (type) {
      case EtypeService.Doctor:
        if (confirm) {
          await deleteDoctor({
            variables: {
              input: id,
            },
          })
            .then(() => {
              showToast("Đã xóa bác sĩ 👌");
              hanldeDeleteRefetch(type, id);
            })
            .catch((e) => {
              showToast(`Đã lỗi khi xóa ${type}`, "error");
            });
        }
        break;
      case EtypeService.Package:
        if (confirm) {
          await deletePackage({
            variables: {
              input: id,
            },
          })
            .then(() => {
              showToast("Đã xóa gói khám 👌");
              hanldeDeleteRefetch(type, id);
            })
            .catch((e) => {
              showToast(`Đã lỗi khi xóa ${type}`, "error");
            });
        }
        break;
      case EtypeService.Specialty:
        if (confirm) {
          await deleteMedicalSpcialty({
            variables: {
              input: id,
            },
          })
            .then(() => {
              showToast("Đã xóa chuyên khoa khám 👌");
              hanldeDeleteRefetch(type, id);
            })
            .catch((e) => {
              showToast(`Đã lỗi khi xóa ${type}`, "error");
            });
        }
        break;
      case EtypeService.Vaccine:
        if (confirm) {
          await deleteVacination({
            variables: {
              input: id,
            },
          })
            .then(() => {
              showToast("Đã xóa vaccine👌");
              hanldeDeleteRefetch(type, id);
            })
            .catch((e) => {
              showToast(`Đã lỗi khi xóa ${type}`, "error");
            });
        }
        break;

      default:
        break;
    }
  };

  if (!data) return <div></div>;
  else
    return (
      <div>
        <DoctorListServiveMemory
          doctors={data?.doctors}
          handleDelete={handleDelete}
          loadingDeleteDoctor={loadingDeleteDoctor}
        />

        <PackageListServiveMemory
          handleDelete={handleDelete}
          loadingDeletePackage={loadingDeletePackage}
          packages={data?.packages}
        />
        <SpecialtyListServiveMemory
          handleDelete={handleDelete}
          loadingDeleteSpecialty={loadingDeleteSpecialty}
          medicalSpecialties={data.medicalSpecialties}
        />
        <VaccinationListServiveMemory
          handleDelete={handleDelete}
          loadingDeleteVaccination={loadingDeleteVaccination}
          vaccinations={data.vaccinations}
        />
      </div>
    );
}
export default MedicalFacilityListService;
