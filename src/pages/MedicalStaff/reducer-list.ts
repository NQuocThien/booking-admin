import { ICheckRoles, IPagination } from "src/assets/contains/item-interface";
import {
  MedicalStaff,
  // Doctor,
} from "src/graphql/webbooking-service.generated";

export interface IAction {
  type: string;
  payload: any;
}

export interface IStateListStaff {
  listStaff: MedicalStaff[];
  selectedStaff: MedicalStaff | undefined;
  searchTerm: string;
  pagination: IPagination;
  showModal: boolean;
}
// innitState
export const initState: IStateListStaff = {
  listStaff: [],
  selectedStaff: undefined,
  searchTerm: "",
  pagination: {
    current: 1,
    total: 0,
    sort: "asc",
  },
  showModal: false,
};

//actions
const HANDLE_SET_LIST_FACILITY = "handle-set-list-facility";
const HC_SEARCH_TERM = "handle-search-term";
const HC_PAGINATION = "handle-change-pagination";
const SET_SHOW_MODAL = "set-show-modal";
const SET_SELECTED_STAFF = "set-selected-staff";
export const handleSetlistStaff = (value: MedicalStaff[]): IAction => {
  return {
    type: HANDLE_SET_LIST_FACILITY,
    payload: value,
  };
};
export const handleSetShowModal = (value: boolean): IAction => {
  return {
    type: SET_SHOW_MODAL,
    payload: value,
  };
};
export const handleChangeSearchTerm = (payload: string): IAction => {
  return {
    type: HC_SEARCH_TERM,
    payload: payload,
  };
};
export const handleChangePagination = (payload: IPagination): IAction => {
  return {
    type: HC_PAGINATION,
    payload: payload,
  };
};
export const handleSetSelectedStaff = (payload: MedicalStaff): IAction => {
  return {
    type: SET_SELECTED_STAFF,
    payload: payload,
  };
};

// reducer
export const reducer = (
  state: IStateListStaff,
  action: IAction
): IStateListStaff => {
  switch (action.type) {
    case HANDLE_SET_LIST_FACILITY:
      return {
        ...state,
        listStaff: action.payload,
      };
    case HC_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case HC_PAGINATION:
      return {
        ...state,
        pagination: action.payload,
      };
    case SET_SELECTED_STAFF:
      return {
        ...state,
        selectedStaff: action.payload,
      };
    case SET_SHOW_MODAL:
      return {
        ...state,
        showModal: action.payload,
      };
    default:
      return state;
  }
};
