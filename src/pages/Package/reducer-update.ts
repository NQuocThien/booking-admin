import {
  CreatePackageInput,
  EGenderPackage,
  EStatusService,
  UpdatePackageInput,
  WorkScheduleInput,
} from "src/graphql/webbooking-service.generated";
import { IOption } from "src/utils/enum";

export interface IStateFormUpdatePackage {
  updatePackage: UpdatePackageInput;
  validate: boolean;
  imageFile: Blob | null;
  formMedical: boolean;
  optionsSpecialties: [IOption];
}
export interface IActionFormUpdateDoctor {
  type: string;
  key?: keyof CreatePackageInput;
  payload: any;
}

const innitState: UpdatePackageInput = {
  id: "",
  medicalFactilitiesId: "",
  examinationDetails: "",
  gender: EGenderPackage.Both,
  image: {
    filename: "",
    type: "image",
    url: "",
  },
  packageName: "",
  price: 0,
  workSchedule: {
    dayOff: [],
    numberSlot: 5,
    schedule: [],
    status: EStatusService.Open,
  },
};

// innitState
export const initState: IStateFormUpdatePackage = {
  updatePackage: innitState,
  validate: false,
  imageFile: null,
  formMedical: false,
  optionsSpecialties: [
    {
      label: "",
      value: "",
    },
  ],
};

//actions
const HANDLE_CHANGE_FORM = "handle-change-form";
const HC_VALIDATE = "hc-validate";
const HC_FIND_LOCATION = "hc-find-location";
const HC_IMAGE = "hc-image";
const HC_STATE_FORM = "hc-change-state-form";
const HC_WORK_SCHEDULE = "hc-work-schedule";
const HC_SET_FORM_UPDATE = "hc-set-form-update";
export const handleChangeForm = (
  name: keyof CreatePackageInput,
  value: any
): IActionFormUpdateDoctor => {
  return {
    type: HANDLE_CHANGE_FORM,
    key: name,
    payload: value,
  };
};
export const handleChangeFormWorkSchedule = (
  payload: WorkScheduleInput
): IActionFormUpdateDoctor => {
  return {
    type: HC_WORK_SCHEDULE,
    payload: payload,
  };
};

export const handleSetValidate = (
  payload: boolean
): IActionFormUpdateDoctor => {
  return {
    type: HC_VALIDATE,
    payload: payload,
  };
};
export const handleChangeStateForm = (
  payload: boolean
): IActionFormUpdateDoctor => {
  return {
    type: HC_STATE_FORM,
    payload: payload,
  };
};
export const handleSetDataFormUpdate = (
  payload: UpdatePackageInput
): IActionFormUpdateDoctor => {
  return {
    type: HC_SET_FORM_UPDATE,
    payload: payload,
  };
};
export const hanldeFindLocation = (
  payload: string
): IActionFormUpdateDoctor => {
  return {
    type: HC_FIND_LOCATION,
    payload: payload,
  };
};

export const handleChangImage = (payload: Blob): IActionFormUpdateDoctor => {
  return {
    type: HC_IMAGE,
    payload: payload,
  };
};
// reducer
export const reducer = (
  state: IStateFormUpdatePackage,
  action: IActionFormUpdateDoctor
): IStateFormUpdatePackage => {
  // console.log("test state: ", state.updatePackage.workSchedule);
  switch (action.type) {
    case HANDLE_CHANGE_FORM:
      if (action.key && action.key in state.updatePackage) {
        // console.log("test state create doctor: ", state.createDoctor);
        return {
          ...state,
          updatePackage: {
            ...state.updatePackage,
            [action.key]: action.payload,
          },
        };
      } else return state;
    case HC_VALIDATE:
      return {
        ...state,
        validate: action.payload,
      };
    case HC_STATE_FORM:
      return {
        ...state,
        formMedical: action.payload,
      };
    case HC_IMAGE:
      return {
        ...state,
        imageFile: action.payload,
      };
    case HC_WORK_SCHEDULE:
      // console.log("test payload: ", action.payload);
      return {
        ...state,
        updatePackage: {
          ...state.updatePackage,
          workSchedule: action.payload,
        },
      };
    case HC_SET_FORM_UPDATE:
      return {
        ...state,
        updatePackage: action.payload,
      };
    default:
      return state;
  }
};
