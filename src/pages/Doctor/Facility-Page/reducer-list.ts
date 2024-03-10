import { ICheckRoles, IPagination } from "src/assets/contains/item-interface";
import {
  CreatePackageInput,
  Doctor,
  // Doctor,
} from "src/graphql/webbooking-service.generated";

export interface IStateListDoctor {
  listDoctor: Doctor[];
  facilityClicked: Doctor | undefined;
  searchTerm: string;
  pagination: IPagination;
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
  searchTerm: "",
  pagination: {
    current: 1,
    total: 0,
    sort: "asc",
  },
};

//actions
const HANDLE_SET_LIST_FACILITY = "handle-set-list-facility";
const HC_SEARCH_TERM = "handle-search-term";
const HC_PAGINATION = "handle-change-pagination";
export const handleSetlistDoctor = (value: Doctor[]): IAction => {
  return {
    type: HANDLE_SET_LIST_FACILITY,
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
    default:
      return state;
  }
};
