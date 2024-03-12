import { ICheckRoles, IPagination } from "src/assets/contains/item-interface";
import {
  CreatePackageInput,
  Doctor,
  FilterDoctorInput,
  // Doctor,
} from "src/graphql/webbooking-service.generated";

export interface IStateListDoctor {
  listDoctor: Doctor[];
  facilityClicked: Doctor | undefined;
  pagination: IPagination;
  filter: FilterDoctorInput | undefined;
}
export interface IAction {
  type: string;
  key?: keyof CreatePackageInput;
  payload: any;
}

// innitState
export const initState: IStateListDoctor = {
  listDoctor: [],
  facilityClicked: undefined,
  pagination: {
    current: 1,
    total: 0,
    sort: "asc",
  },
  filter: {
    name: undefined,
    academicTitle: undefined,
    degree: undefined,
    gender: undefined,
  },
};

//actions
const HANDLE_SET_LIST_FACILITY = "handle-set-list-facility";
const HC_FILTER = "handle-filter";
const HC_PAGINATION = "handle-change-pagination";
export const handleSetlistDoctor = (value: Doctor[]): IAction => {
  return {
    type: HANDLE_SET_LIST_FACILITY,
    payload: value,
  };
};
export const handleChangeFilter = (payload: FilterDoctorInput): IAction => {
  return {
    type: HC_FILTER,
    payload: payload,
  };
};
export const handleChangePagination = (payload: IPagination): IAction => {
  return {
    type: HC_PAGINATION,
    payload: payload,
  };
};

// reducer
export const reducer = (
  state: IStateListDoctor,
  action: IAction
): IStateListDoctor => {
  switch (action.type) {
    case HANDLE_SET_LIST_FACILITY:
      return {
        ...state,
        listDoctor: action.payload,
      };
    case HC_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case HC_PAGINATION:
      return {
        ...state,
        pagination: action.payload,
      };
    default:
      return state;
  }
};
