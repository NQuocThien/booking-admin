import {
  CreateMedicalStaffInput,
  EGender,
} from "src/graphql/webbooking-service.generated";
export interface IOption {
  value: string;
  label: string;
}
export interface IStateForm {
  createMedicalStaff: CreateMedicalStaffInput;
  validate: boolean;
  formMedical: boolean;
  optionsSpecialties: [IOption];
  optionsPackage: [IOption];
  optionsVaccine: [IOption];
  optionsUser: [IOption];
}
export interface IActionFormAdd {
  type: string;
  key?: keyof CreateMedicalStaffInput;
  payload: any;
}

const innitState: CreateMedicalStaffInput = {
  name: "",
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
  createMedicalStaff: innitState,
  validate: false,
  formMedical: false,
  optionsSpecialties: [
    {
      label: "",
      value: "",
    },
  ],
  optionsPackage: [
    {
      label: "",
      value: "",
    },
  ],
  optionsVaccine: [
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
};

//actions
const HANDLE_CHANGE_FORM = "handle-change-form";
const HC_VALIDATE = "hc-validate";
const HC_IMAGE = "hc-image";
const HC_STATE_FORM = "hc-change-state-form";
const HC_OPTION_PACKAGE = "hc-option-package";
const HC_OPTION_SPECIALTY = "hc-option-specialty";
const HC_OPTION_VACCINE = "hc-option-vaccine";
const HC_OPTION_USER = "hc-option-users";
export const handleChangeForm = (
  name: keyof CreateMedicalStaffInput,
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

export const handleChangeOptionPackage = (
  payload: IOption[]
): IActionFormAdd => {
  return {
    type: HC_OPTION_PACKAGE,
    payload: payload,
  };
};
export const handleChangeOptionVaccine = (
  payload: IOption[]
): IActionFormAdd => {
  return {
    type: HC_OPTION_VACCINE,
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

export const handleChangImage = (payload: Blob): IActionFormAdd => {
  return {
    type: HC_IMAGE,
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
      if (action.key && action.key in state.createMedicalStaff) {
        return {
          ...state,
          createMedicalStaff: {
            ...state.createMedicalStaff,
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
    case HC_OPTION_PACKAGE:
      return {
        ...state,
        optionsPackage: action.payload,
      };
    case HC_OPTION_VACCINE:
      return {
        ...state,
        optionsVaccine: action.payload,
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
    default:
      return state;
  }
};
