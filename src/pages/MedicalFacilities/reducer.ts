import {
  CreateMedicalFacilityInput,
  EStatusService,
} from "src/graphql/webbooking-service.generated";

interface IState {
  createMedicalFacility: CreateMedicalFacilityInput;
  validate: boolean;
  address: string;
  imageFile: Blob | null;
  logoFile: Blob | null;
}
interface IAction {
  type: string;
  key?: keyof CreateMedicalFacilityInput;
  payload: any;
}

const InitCreateMedicalFacility: CreateMedicalFacilityInput = {
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
  createMedicalFacility: InitCreateMedicalFacility,
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
export const handleChangeForm = (
  name: keyof CreateMedicalFacilityInput,
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
// reducer
export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case HANDLE_CHANGE_FORM:
      if (action.key && action.key in state.createMedicalFacility) {
        console.log("test chang: ", state.createMedicalFacility);
        return {
          ...state,
          createMedicalFacility: {
            ...state.createMedicalFacility,
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
    default:
      return state;
  }
};
