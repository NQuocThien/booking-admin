import {
  EGender,
  UpdateMedicalStaffInput,
} from "src/graphql/webbooking-service.generated";
export interface IOption {
  value: string;
  label: string;
}
export interface IStateForm {
  updateStaff: UpdateMedicalStaffInput;
  validate: boolean;
  formMedical: boolean;
  optionsSpecialties: [IOption];
  optionsUser: [IOption];
  optionsFacility: [IOption];
}
export interface IActionFormAdd {
  type: string;
  key?: keyof UpdateMedicalStaffInput;
  payload: any;
}

const innitState: UpdateMedicalStaffInput = {
  id: "",
  staffName: "",
  userId: "",
  email: "",
  gender: EGender.Male,
  medicalFacilityId: "",
  numberPhone: "",
  permissions: [],
  specialtyId: [],
};

// innitState
export const initState: IStateForm = {
  updateStaff: innitState,
  validate: false,
  formMedical: false,
  optionsSpecialties: [
    {
      label: "",
      value: "",
    },
  ],
  optionsUser: [
    {
      label: "",
      value: "",
    },
  ],
  optionsFacility: [
    {
      label: "",
      value: "",
    },
  ],
};

//actions
const HANDLE_CHANGE_FORM = "handle-change-form";
const HANDLE_SET_DATA_UPDATE = "handle-set-data-updated";
const HC_VALIDATE = "hc-validate";
const HC_STATE_FORM = "hc-change-state-form";
const HC_OPTION_SPECIALTY = "hc-option-specialty";
const HC_OPTION_USER = "hc-option-users";
const HC_OPTION_FACILITY = "hc-option-facility";
export const handleChangeForm = (
  name: keyof UpdateMedicalStaffInput,
  value: any
): IActionFormAdd => {
  return {
    type: HANDLE_CHANGE_FORM,
    key: name,
    payload: value,
  };
};

export const handleSetValidate = (payload: boolean): IActionFormAdd => {
  return {
    type: HC_VALIDATE,
    payload: payload,
  };
};
export const handleChangeStateForm = (payload: boolean): IActionFormAdd => {
  return {
    type: HC_STATE_FORM,
    payload: payload,
  };
};

export const handleChangeOptionUser = (payload: IOption[]): IActionFormAdd => {
  return {
    type: HC_OPTION_USER,
    payload: payload,
  };
};
export const handleChangeOptionSpecialty = (
  payload: IOption[]
): IActionFormAdd => {
  return {
    type: HC_OPTION_SPECIALTY,
    payload: payload,
  };
};

export const handleSetDataFormUpdate = (
  payload: UpdateMedicalStaffInput
): IActionFormAdd => {
  return {
    type: HANDLE_SET_DATA_UPDATE,
    payload: payload,
  };
};
export const handleChangeOptionFacility = (
  payload: IOption[]
): IActionFormAdd => {
  return {
    type: HC_OPTION_FACILITY,
    payload: payload,
  };
};
// reducer
export const reducer = (
  state: IStateForm,
  action: IActionFormAdd
): IStateForm => {
  switch (action.type) {
    case HANDLE_CHANGE_FORM:
      if (action.key && action.key in state.updateStaff) {
        return {
          ...state,
          updateStaff: {
            ...state.updateStaff,
            [action.key]: action.payload,
          },
        };
      } else return state;
    case HANDLE_SET_DATA_UPDATE:
      return {
        ...state,
        updateStaff: action.payload,
      };
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

    case HC_OPTION_SPECIALTY:
      return {
        ...state,
        optionsSpecialties: action.payload,
      };
    case HC_OPTION_USER:
      return {
        ...state,
        optionsUser: action.payload,
      };
    case HC_OPTION_FACILITY:
      return {
        ...state,
        optionsFacility: action.payload,
      };
    default:
      return state;
  }
};
