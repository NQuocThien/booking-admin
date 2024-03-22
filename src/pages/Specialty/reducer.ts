import {
  CreateMedicalSpecialtyInput,
  EStatusService,
  WorkScheduleInput,
} from "src/graphql/webbooking-service.generated";
export interface IOption {
  value: string;
  label: string;
}
export interface IStateForm {
  createSpcialty: CreateMedicalSpecialtyInput;
  validate: boolean;
  formMedical: boolean;
}
export interface IActionForm {
  type: string;
  key?: keyof CreateMedicalSpecialtyInput;
  payload: any;
}

const innitState: CreateMedicalSpecialtyInput = {
  medicalFactilityId: "",
  discription: "",
  specialtyName: "",
  price: 0,
  workSchedule: {
    dayOff: [],
    numberSlot: 5,
    schedule: [],
    status: EStatusService.Open,
  },
};

// innitState
export const initState: IStateForm = {
  createSpcialty: innitState,
  validate: false,
  formMedical: false,
};

//actions
const HANDLE_CHANGE_FORM = "handle-change-form";
const HC_VALIDATE = "hc-validate";
const HC_STATE_FORM = "hc-change-state-form";
const HC_WORK_SCHEDULE = "hc-work-schedule";
export const handleChangeForm = (
  name: keyof CreateMedicalSpecialtyInput,
  value: any
): IActionForm => {
  return {
    type: HANDLE_CHANGE_FORM,
    key: name,
    payload: value,
  };
};
export const handleChangeFormWorkSchedule = (
  payload: WorkScheduleInput
): IActionForm => {
  return {
    type: HC_WORK_SCHEDULE,
    payload: payload,
  };
};

export const handleSetValidate = (payload: boolean): IActionForm => {
  return {
    type: HC_VALIDATE,
    payload: payload,
  };
};
export const handleChangeStateForm = (payload: boolean): IActionForm => {
  return {
    type: HC_STATE_FORM,
    payload: payload,
  };
};
// reducer
export const reducer = (state: IStateForm, action: IActionForm): IStateForm => {
  switch (action.type) {
    case HANDLE_CHANGE_FORM:
      if (action.key && action.key in state.createSpcialty) {
        return {
          ...state,
          createSpcialty: {
            ...state.createSpcialty,
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
        createSpcialty: {
          ...state.createSpcialty,
          workSchedule: action.payload,
        },
      };
    default:
      return state;
  }
};
