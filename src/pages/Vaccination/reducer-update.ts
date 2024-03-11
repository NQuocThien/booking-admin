import {
  UpdateVaccineInput,
  EStatusService,
  WorkScheduleInput,
} from "src/graphql/webbooking-service.generated";
export interface IOption {
  value: string;
  label: string;
}
export interface IStateFormAdd {
  updateVaccine: UpdateVaccineInput;
  validate: boolean;
  imageFile: Blob | null;
  formMedical: boolean;
  optionsSpecialties: [IOption];
}
export interface IActionForm {
  type: string;
  key?: keyof UpdateVaccineInput;
  payload: any;
}

const innitState: UpdateVaccineInput = {
  id: "",
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
  updateVaccine: innitState,
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
const HANDLE_SET_DATA_UPDATE_FORM = "hc-set-data-update-form";
export const handleChangeForm = (
  name: keyof UpdateVaccineInput,
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

export const handleSetDataUpdateForm = (
  payload: UpdateVaccineInput
): IActionForm => {
  return {
    type: HANDLE_SET_DATA_UPDATE_FORM,
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
export const reducer = (
  state: IStateFormAdd,
  action: IActionForm
): IStateFormAdd => {
  switch (action.type) {
    case HANDLE_CHANGE_FORM:
      if (action.key && action.key in state.updateVaccine) {
        return {
          ...state,
          updateVaccine: {
            ...state.updateVaccine,
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
        updateVaccine: {
          ...state.updateVaccine,
          workSchedule: action.payload,
        },
      };
    case HANDLE_SET_DATA_UPDATE_FORM:
      return {
        ...state,
        updateVaccine: action.payload,
      };
    default:
      return state;
  }
};
