import { IPagination } from "src/assets/contains/item-interface";
import { Vaccination } from "src/graphql/webbooking-service.generated";

export interface IStateListVaccination {
  listVaccine: Vaccination[];
  selectedVaccine: Vaccination | undefined;
  searchTerm: string;
  pagination: IPagination;
}
export interface IAction {
  type: string;
  payload: any;
}

// innitState
export const initState: IStateListVaccination = {
  listVaccine: [],
  // facilityClicked: undefined,
  selectedVaccine: undefined,
  searchTerm: "",
  pagination: {
    current: 1,
    total: 0,
    sort: "asc",
  },
};

//actions
const HANDLE_SET_LIST_VACCINE = "handle-set-list-vaccine";
const HC_SEARCH_TERM = "handle-search-term";
const HC_PAGINATION = "handle-change-pagination";
const HC_SELECTED_VACCINE = "handle-selected-vaccine";
export const handleSetlistVaccine = (value: Vaccination[]): IAction => {
  return {
    type: HANDLE_SET_LIST_VACCINE,
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
export const handleChangeSelectedVaccine = (payload: Vaccination): IAction => {
  return {
    type: HC_SELECTED_VACCINE,
    payload: payload,
  };
};
// reducer
export const reducer = (
  state: IStateListVaccination,
  action: IAction
): IStateListVaccination => {
  switch (action.type) {
    case HANDLE_SET_LIST_VACCINE:
      return {
        ...state,
        listVaccine: action.payload,
      };
    case HC_SELECTED_VACCINE:
      return {
        ...state,
        selectedVaccine: action.payload,
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
