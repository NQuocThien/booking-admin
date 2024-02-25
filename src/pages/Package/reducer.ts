import {
  CreatePackageInput,
  EGenderPackage,
  EStatusService,
  WorkScheduleInput,
} from "src/graphql/webbooking-service.generated";
export interface IOption {
  value: string;
  label: string;
}
export interface IStateFormAddPackage {
  createPackage: CreatePackageInput;
  validate: boolean;
  imageFile: Blob | null;
  formMedical: boolean;
  optionsSpecialties: [IOption];
}
export interface IActionFormAddDoctor {
  type: string;
  key?: keyof CreatePackageInput;
  payload: any;
}

const innitState: CreatePackageInput = {
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
export const initState: IStateFormAddPackage = {
  createPackage: innitState,
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
export const handleChangeForm = (
  name: keyof CreatePackageInput,
  value: any
): IActionFormAddDoctor => {
  return {
    type: HANDLE_CHANGE_FORM,
    key: name,
    payload: value,
  };
};
export const handleChangeFormWorkSchedule = (
  payload: WorkScheduleInput
): IActionFormAddDoctor => {
  return {
    type: HC_WORK_SCHEDULE,
    payload: payload,
  };
};

export const handleSetValidate = (payload: boolean): IActionFormAddDoctor => {
  return {
    type: HC_VALIDATE,
    payload: payload,
  };
};
export const handleChangeStateForm = (
  payload: boolean
): IActionFormAddDoctor => {
  return {
    type: HC_STATE_FORM,
    payload: payload,
  };
};

export const hanldeFindLocation = (payload: string): IActionFormAddDoctor => {
  return {
    type: HC_FIND_LOCATION,
    payload: payload,
  };
};

export const handleChangImage = (payload: Blob): IActionFormAddDoctor => {
  return {
    type: HC_IMAGE,
    payload: payload,
  };
};
// reducer
export const reducer = (
  state: IStateFormAddPackage,
  action: IActionFormAddDoctor
): IStateFormAddPackage => {
  switch (action.type) {
    case HANDLE_CHANGE_FORM:
      if (action.key && action.key in state.createPackage) {
        // console.log("test state create doctor: ", state.createDoctor);
        return {
          ...state,
          createPackage: {
            ...state.createPackage,
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
      return {
        ...state,
        createPackage: {
          ...state.createPackage,
          workSchedule: action.payload,
        },
      };
    default:
      return state;
  }
};
