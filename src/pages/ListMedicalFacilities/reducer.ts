import { stat } from "fs";
import { CreateMedicalFacilityInput } from "src/graphql/webbooking-service.generated";

interface IState {
  createMedicalFacility: CreateMedicalFacilityInput;
}
interface IAction {
  type: string;
  key?: keyof CreateMedicalFacilityInput;
  payload: any;
}
interface IActionForm {
  type: string;
  key: string;
  payload: any;
}
const InitCreateMedicalFacility: CreateMedicalFacilityInput = {
  userId: "",
  medicalFacilityName: "",
  address: "",
  discription: "",
  email: "",
  image: {
    filename: "",
    type: "",
    url: "",
  },
  introduce: "",
  legalRepresentation: "",
  numberPhone: "",
  operatingStatus: "",
  taxCode: "",
  lat: undefined,
  lng: undefined,
  workSchedule: "",
};

// innitState
export const initState: IState = {
  createMedicalFacility: InitCreateMedicalFacility,
};

//actions
const CHANGE_NAME = "change-name";
const HANDLE_CHANGE_FORM = "handle-change-form";

export const handleChangeForm = (
  name: keyof CreateMedicalFacilityInput,
  value: any
): IActionForm => {
  return {
    type: HANDLE_CHANGE_FORM,
    key: name,
    payload: value,
  };
};
// reducer
export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case HANDLE_CHANGE_FORM:
      if (action.key && action.key in state.createMedicalFacility)
        return {
          ...state,
          createMedicalFacility: {
            ...state.createMedicalFacility,
            [action.key]: action.payload,
          },
        };
      else return state;
    default:
      return state;
  }
};
