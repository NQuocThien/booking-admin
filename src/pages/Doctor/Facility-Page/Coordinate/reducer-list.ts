import { IPagination } from "src/assets/contains/item-interface";
import {
  Doctor,
  FilterDoctorInput,
} from "src/graphql/webbooking-service.generated";

export interface IStateListDoctor {
  listDoctor: Doctor[];
  selectedDoctor: Doctor | undefined;
  filter: FilterDoctorInput;
  pagination: IPagination;
}
export interface IAction {
  type: string;
  payload: any;
}

// innitState
export const initState: IStateListDoctor = {
  listDoctor: [],
  selectedDoctor: undefined,
  pagination: {
    current: 1,
    total: 0,
    rowPerPage: 10,
    sort: "asc",
  },
  filter: {
    doctorName: undefined,
    academicTitle: undefined,
    degree: undefined,
    gender: undefined,
  },
};

//actions
const HANDLE_SET_LIST_FACILITY = "handle-set-list-facility";
const HC_PAGINATION = "handle-change-pagination";
const HC_CHANGE_SELECTED_DOCTOR = "handle-change-selected-doctor";
const HC_FILTER = "handle-filter";
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
export const handleChangeSelectedDoctor = (payload: Doctor): IAction => {
  return {
    type: HC_CHANGE_SELECTED_DOCTOR,
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

    case HC_CHANGE_SELECTED_DOCTOR:
      return {
        ...state,
        selectedDoctor: action.payload,
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
