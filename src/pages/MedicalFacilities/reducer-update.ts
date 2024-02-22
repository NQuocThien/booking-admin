import {
  EStatusService,
  UpdateMedicalFacilityInput,
} from "src/graphql/webbooking-service.generated";

interface IState {
  updateMedicalFacility: UpdateMedicalFacilityInput;
  validate: boolean;
  address: string;
  imageFile: Blob | null;
  logoFile: Blob | null;
}
interface IAction {
  type: string;
  key?: keyof UpdateMedicalFacilityInput;
  payload: any;
}

const InitupdateMedicalFacility: UpdateMedicalFacilityInput = {
  id: "",
  userId: "",
  medicalFacilityName: "",
  address: "",
  discription: "",
  email: "",
  logo: {
    filename: "",
    type: "",
    url: "",
  },
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
  dateOff: [],
  schedule: "",
  status: EStatusService.Open,
};

// innitState
export const initState: IState = {
  updateMedicalFacility: InitupdateMedicalFacility,
  validate: false,
  address: "",
  imageFile: null,
  logoFile: null,
};

//actions
const HANDLE_CHANGE_FORM = "handle-change-form";
const HC_VALIDATE = "hc-validate";
const HC_FIND_LOCATION = "hc-find-location";
const HC_LOGO = "hc-logo";
const HC_IMAGE = "hc-image";
const HANDLE_SET_FORM = "hc-set-form";
export const handleChangeForm = (
  name: keyof UpdateMedicalFacilityInput,
  value: any
): IAction => {
  return {
    type: HANDLE_CHANGE_FORM,
    key: name,
    payload: value,
  };
};

export const handleSetValidate = (payload: boolean): IAction => {
  return {
    type: HC_VALIDATE,
    payload: payload,
  };
};

export const hanldeFindLocation = (payload: string): IAction => {
  return {
    type: HC_FIND_LOCATION,
    payload: payload,
  };
};

export const handleChangLogo = (payload: Blob): IAction => {
  return {
    type: HC_LOGO,
    payload: payload,
  };
};
export const handleChangImage = (payload: Blob): IAction => {
  return {
    type: HC_IMAGE,
    payload: payload,
  };
};

export const handleSetForm = (payload: UpdateMedicalFacilityInput): IAction => {
  return {
    type: HANDLE_SET_FORM,
    payload: payload,
  };
};
// reducer
export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case HANDLE_CHANGE_FORM:
      if (action.key && action.key in state.updateMedicalFacility) {
        // console.log("test chang: ", state.updateMedicalFacility);
        return {
          ...state,
          updateMedicalFacility: {
            ...state.updateMedicalFacility,
            [action.key]: action.payload,
          },
        };
      } else return state;
    case HC_VALIDATE:
      return {
        ...state,
        validate: action.payload,
      };
    case HC_FIND_LOCATION:
      return {
        ...state,
        address: action.payload,
      };
    case HC_LOGO:
      return {
        ...state,
        logoFile: action.payload,
      };
    case HC_IMAGE:
      return {
        ...state,
        imageFile: action.payload,
      };
    case HANDLE_SET_FORM:
      return {
        ...state,
        updateMedicalFacility: action.payload,
      };
    default:
      return state;
  }
};
