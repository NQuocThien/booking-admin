import {
  CreateVaccineInput,
  // createVaccineInput,
  EStatusService,
  WorkScheduleInput,
} from "src/graphql/webbooking-service.generated";
export interface IOption {
  value: string;
  label: string;
}
export interface IStateFormAdd {
  createVaccine: CreateVaccineInput;
  validate: boolean;
  imageFile: Blob | null;
  formMedical: boolean;
  optionsSpecialties: [IOption];
}
export interface IActionFormAddDoctor {
  type: string;
  key?: keyof CreateVaccineInput;
  payload: any;
}

const innitState: CreateVaccineInput = {
  medicalFactilitiesId: "",
  countryOfOrigin: "",
  indication: "",
  note: "",
  prophylactic: "",
  vaccineName: "",
  price: 0,
  workSchedule: {
    dayOff: [],
    numberSlot: 5,
    schedule: [],
    status: EStatusService.Open,
  },
};

// innitState
export const initState: IStateFormAdd = {
  createVaccine: innitState,
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
const HC_STATE_FORM = "hc-change-state-form";
const HC_WORK_SCHEDULE = "hc-work-schedule";
export const handleChangeForm = (
  name: keyof CreateVaccineInput,
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

// reducer
export const reducer = (
  state: IStateFormAdd,
  action: IActionFormAddDoctor
): IStateFormAdd => {
  switch (action.type) {
    case HANDLE_CHANGE_FORM:
      if (action.key && action.key in state.createVaccine) {
        return {
          ...state,
          createVaccine: {
            ...state.createVaccine,
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
    case HC_WORK_SCHEDULE:
      return {
        ...state,
        createVaccine: {
          ...state.createVaccine,
          workSchedule: action.payload,
        },
      };
    default:
      return state;
  }
};
