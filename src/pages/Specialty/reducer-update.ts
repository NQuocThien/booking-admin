import {
  EStatusService,
  UpdateMedicalSpecialtyInput,
  WorkScheduleInput,
} from "src/graphql/webbooking-service.generated";
export interface IOption {
  value: string;
  label: string;
}
export interface IStateForm {
  updateSpecialty: UpdateMedicalSpecialtyInput;
  validate: boolean;
  formMedical: boolean;
}
export interface IActionForm {
  type: string;
  key?: keyof UpdateMedicalSpecialtyInput;
  payload: any;
}

const innitState: UpdateMedicalSpecialtyInput = {
  id: "",
  medicalFactilityId: "",
  discription: "",
  name: "",
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
  updateSpecialty: innitState,
  validate: false,
  formMedical: false,
};

//actions
const HANDLE_CHANGE_FORM = "handle-change-form";
const HC_VALIDATE = "hc-validate";
const HC_STATE_FORM = "hc-change-state-form";
const HC_WORK_SCHEDULE = "hc-work-schedule";
const HANDLE_SET_DATA_FORM_UPDATE = "handle-set-data-form-update";
export const handleChangeForm = (
  name: keyof UpdateMedicalSpecialtyInput,
  value: any
): IActionForm => {
  return {
    type: HANDLE_CHANGE_FORM,
    key: name,
    payload: value,
  };
};
export const handleSetDataFormUpdate = (
  payload: UpdateMedicalSpecialtyInput
): IActionForm => {
  return {
    type: HANDLE_SET_DATA_FORM_UPDATE,
    payload: payload,
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
      if (action.key && action.key in state.updateSpecialty) {
        return {
          ...state,
          updateSpecialty: {
            ...state.updateSpecialty,
            [action.key]: action.payload,
          },
        };
      } else return state;
    case HC_VALIDATE:
      return {
        ...state,
        validate: action.payload,
      };
    case HANDLE_SET_DATA_FORM_UPDATE:
      return {
        ...state,
        updateSpecialty: action.payload,
      };
    case HC_STATE_FORM:
      return {
        ...state,
        formMedical: action.payload,
      };
    case HC_WORK_SCHEDULE:
      return {
        ...state,
        updateSpecialty: {
          ...state.updateSpecialty,
          workSchedule: action.payload,
        },
      };
    default:
      return state;
  }
};
