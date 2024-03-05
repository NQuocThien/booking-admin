import {
  MedicalFacilities,
  useDeleteDoctorMutation,
  useDeleteMecialSpecialtyMutation,
  useDeletePackageMutation,
  useDeleteVaccinationMutation,
} from "src/graphql/webbooking-service.generated";
import { DoctorListServiveMemory } from "../Doctor/DoctorListService";
import { PackageListServiveMemory } from "../Package/PackageListService";
import { SpecialtyListServiveMemory } from "../Specialty/SpecialtyListService";
import { VaccinationListServiveMemory } from "../Vaccination/VaccinationListService";
interface IProp {
  data: MedicalFacilities | undefined;
}
function MedicalFacilityListService({ data }: IProp) {
  if (!data) return <div></div>;
  else
    return (
      <div>
        <div>
          <DoctorListServiveMemory facilityId={data.id} />
        </div>
        <div>
          <PackageListServiveMemory facilityId={data?.id} />
        </div>
        <SpecialtyListServiveMemory facilityId={data?.id} />

        <VaccinationListServiveMemory facilityId={data?.id} />
      </div>
    );
}
export default MedicalFacilityListService;
