import {
  ISelecUser,
  ISelectClinic,
  ISelectDegree,
  ISelectSpecial,
} from "src/assets/contains/item-interface";
import { UpdateDoctorInput } from "src/graphql/webbooking-service.generated";

interface IFormAddDoctor {
  updateDocter: UpdateDoctorInput;
  listUser: ISelecUser[] | undefined;
  listDegree: ISelectDegree[] | undefined;
  listClinic: ISelectClinic[] | undefined;
  listSpecial: ISelectSpecial[] | undefined;
  imageFile: Blob | null;
}
export enum EKeyDoctor {
  id = "id",
  avatar = "avatar",
  degreeId = "degreeId",
  email = "email",
  name = "name",
  idSpecialist = "idSpecialist",
  numberPhone = "numberPhone",
  userId = "userId",
  facilitiesId = "facilitiesId",
}
type IKeyDoctor =
  | "id"
  | "avatar"
  | "degreeId"
  | "email"
  | "name"
  | "idSpecialist"
  | "numberPhone"
  | "userId"
  | "facilitiesId";

interface IActionDoctor {
  type: string;
  key?: string | undefined;
  payload: any;
}
export const initState: IFormAddDoctor = {
  updateDocter: {
    id: "",
    email: "",
    name: "",
    numberPhone: "",
    avatar: {
      filename: "",
      type: "",
      url: "",
    },
    degreeId: "",
    facilitiesId: "",
    idSpecialist: "",
    userId: "",
  },
  listClinic: undefined,
  listDegree: undefined,
  listSpecial: undefined,
  listUser: undefined,
  imageFile: null,
};
function isIKeyDoctor(value: any): value is IKeyDoctor {
  return [
    "avatar",
    "degreeId",
    "email",
    "name",
    "idSpecialist",
    "numberPhone",
    "userId",
    "facilitiesId",
  ].includes(value);
}
//action key
const SET_NAME = "set-name";
const RESEST = "reset";
const SET_UPDATE_ID = "set-update-id";
const SET_UPDATE = "set-create";
const HANDLE_CHANGE_FORM = "handles-change-form";
const HC_LIST_DEGREE = "hc-list-degree";
const HC_LIST_CLINIC = "hc-list-clinic";
const HC_LIST_SPECIAL = "hc-list-special";
const HC_LIST_USER = "hc-list-user";
const hC_IMAGE_FILE = "hc-image-file";

// const hC_CREATE_DOCTOR = "hc-create-doctor";

// action callback
export const setName = (payload: string) => ({
  type: SET_NAME,
  payload,
});

export const hCListDegree = (payload: any) => ({
  type: HC_LIST_DEGREE,
  payload,
});
export const hCListClinic = (payload: any) => ({
  type: HC_LIST_CLINIC,
  payload,
});
export const hcListSpecial = (payload: any) => ({
  type: HC_LIST_SPECIAL,
  payload,
});
export const hcListUser = (payload: any) => ({
  type: HC_LIST_USER,
  payload,
});
export const setUpdate = (payload: string | undefined) => ({
  type: SET_UPDATE_ID,
  payload,
});
// export const hCCreateDoctor =
export const handleChangeForm = (name: string, value: any): IActionDoctor => {
  console.log("name: ", name, ":", value);
  return {
    type: HANDLE_CHANGE_FORM,
    key: name,
    payload: value,
  };
};
export const hcImageFile = (payload: any) => ({
  type: hC_IMAGE_FILE,
  payload,
});
export const handleReset = () => ({
  type: RESEST,
  payload: initState,
});

export const setUpdateDoctor = (payload: UpdateDoctorInput) => ({
  type: SET_UPDATE,
  payload,
});

// REDUCER ++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const reducer = (
  state: IFormAddDoctor,
  action: IActionDoctor
): IFormAddDoctor => {
  // console.log("Action: ", action);
  // console.log("Previous state:", state);

  switch (action.type) {
    case SET_NAME:
      if (state.updateDocter)
        return {
          ...state,
          updateDocter: {
            ...state.updateDocter,
            name: action.payload,
          },
        };
      return state;
    case HANDLE_CHANGE_FORM:
      if (action.key && state.updateDocter && isIKeyDoctor(action.key)) {
        return {
          ...state,
          updateDocter: {
            ...state.updateDocter,
            [action.key]: action.payload,
          },
        };
      }
      return state;
    case HC_LIST_DEGREE:
      return {
        ...state,
        listDegree: action.payload,
      };
    case HC_LIST_CLINIC:
      return {
        ...state,
        listClinic: action.payload,
      };
    case HC_LIST_SPECIAL:
      return {
        ...state,
        listSpecial: action.payload,
      };
    case HC_LIST_USER:
      return {
        ...state,
        listUser: action.payload,
      };
    case hC_IMAGE_FILE:
      return {
        ...state,
        imageFile: action.payload,
      };
    case RESEST:
      return initState;
    case SET_UPDATE:
      return {
        ...state,
        updateDocter: action.payload,
      };
    default:
      return state;
  }
};
