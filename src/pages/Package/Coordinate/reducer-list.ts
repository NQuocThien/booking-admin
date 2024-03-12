import { IPagination } from "src/assets/contains/item-interface";
import { Package } from "src/graphql/webbooking-service.generated";

export interface IStateListPackage {
  listPackage: Package[];
  selectedPackage: Package | undefined;
  searchTerm: string;
  pagination: IPagination;
}
export interface IAction {
  type: string;
  payload: any;
}

// innitState
export const initState: IStateListPackage = {
  listPackage: [],
  // facilityClicked: undefined,
  selectedPackage: undefined,
  searchTerm: "",
  pagination: {
    current: 1,
    total: 0,
    sort: "asc",
  },
};

//actions
const HANDLE_SET_LIST_PACKAGE = "handle-set-list-package";
const HC_SEARCH_TERM = "handle-search-term";
const HC_PAGINATION = "handle-change-pagination";
const HC_SELECTED_PACKAGE = "handle-selected-package";
export const handleSetlistPackage = (value: Package[]): IAction => {
  return {
    type: HANDLE_SET_LIST_PACKAGE,
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
export const handleChangeSelectedPackage = (payload: Package): IAction => {
  return {
    type: HC_SELECTED_PACKAGE,
    payload: payload,
  };
};
// reducer
export const reducer = (
  state: IStateListPackage,
  action: IAction
): IStateListPackage => {
  switch (action.type) {
    case HANDLE_SET_LIST_PACKAGE:
      return {
        ...state,
        listPackage: action.payload,
      };
    case HC_SELECTED_PACKAGE:
      return {
        ...state,
        selectedPackage: action.payload,
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
