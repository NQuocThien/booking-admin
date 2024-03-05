import {
  CreateDoctorInput,
  EDegree,
  EGender,
  EStatusService,
  WorkScheduleInput,
} from "src/graphql/webbooking-service.generated";
export interface IOption {
  value: string;
  label: string;
}
export interface IStateFormAddDoctor {
  createDoctor: CreateDoctorInput;
  validate: boolean;
  avatarFile: Blob | null;
  formMedical: boolean;
  optionsSpecialties: [IOption];
  optionsFacilities: [IOption];
}
export interface IActionFormAddDoctor {
  type: string;
  key?: keyof CreateDoctorInput;
  payload: any;
}

const initCreateDoctor: CreateDoctorInput = {
  medicalFactilitiesId: "",
  avatar: {
    filename: "",
    type: "image",
    url: "",
  },
  name: "",
  gender: EGender.Male,
  numberPhone: "",
  email: "",
  degree: EDegree.Doctor,
  discription: "",
  price: 0,
  specialistId: "",
  userId: "",
  academicTitle: undefined,
  workSchedule: {
    dayOff: [],
    status: EStatusService.Open,
    schedule: [],
    numberSlot: 5,
  },
};

// innitState
export const initState: IStateFormAddDoctor = {
  createDoctor: initCreateDoctor,
  validate: false,
  avatarFile: null,
  formMedical: false,
  optionsSpecialties: [
    {
      label: "",
      value: "",
    },
  ],
  optionsFacilities: [
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
const HC_AVATAR = "hc-avatar";
const HC_STATE_FORM = "hc-change-state-form";
const HC_OPT_SPECIALTIES = "hc-change-opt-specialties";
const HC_OPT_FACILITES = "hc-change-opt-facilities";
const HC_WORK_SCHEDULE = "hc-work-schedule";
export const handleChangeForm = (
  name: keyof CreateDoctorInput,
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
export const handleChangeOptSpecialties = (
  payload: IOption[]
): IActionFormAddDoctor => {
  return {
    type: HC_OPT_SPECIALTIES,
    payload: payload,
  };
};
export const handleChangeOptFacilities = (
  payload: IOption[]
): IActionFormAddDoctor => {
  return {
    type: HC_OPT_FACILITES,
    payload: payload,
  };
};

export const hanldeFindLocation = (payload: string): IActionFormAddDoctor => {
  return {
    type: HC_FIND_LOCATION,
    payload: payload,
  };
};

export const handleChangAvatar = (payload: Blob): IActionFormAddDoctor => {
  return {
    type: HC_AVATAR,
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
  state: IStateFormAddDoctor,
  action: IActionFormAddDoctor
): IStateFormAddDoctor => {
  switch (action.type) {
    case HANDLE_CHANGE_FORM:
      if (action.key && action.key in state.createDoctor) {
        // console.log("test state create doctor: ", state.createDoctor);
        return {
          ...state,
          createDoctor: {
            ...state.createDoctor,
            [action.key]: action.payload,
          },
        };
      } else return state;
    case HC_VALIDATE:
      return {
        ...state,
        validate: action.payload,
      };
    case HC_AVATAR:
      return {
        ...state,
        avatarFile: action.payload,
      };
    case HC_STATE_FORM:
      return {
        ...state,
        formMedical: action.payload,
      };
    case HC_OPT_SPECIALTIES:
      return {
        ...state,
        optionsSpecialties: action.payload,
      };
    case HC_OPT_FACILITES:
      return {
        ...state,
        optionsFacilities: action.payload,
      };
    case HC_WORK_SCHEDULE:
      return {
        ...state,
        createDoctor: {
          ...state.createDoctor,
          workSchedule: action.payload,
        },
      };
    default:
      return state;
  }
};
