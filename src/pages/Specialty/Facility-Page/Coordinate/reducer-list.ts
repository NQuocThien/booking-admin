import { ICheckRoles, IPagination } from "src/assets/contains/item-interface";
import { MedicalSpecialties } from "src/graphql/webbooking-service.generated";

export interface IStateListMedicalSpecialty {
  listSpecialty: MedicalSpecialties[];
  selectedSpecialty: MedicalSpecialties | undefined;
  searchTerm: string;
  pagination: IPagination;
}
export interface IAction {
  type: string;
  payload: any;
}

// innitState
export const initState: IStateListMedicalSpecialty = {
  listSpecialty: [],
  // facilityClicked: undefined,
  selectedSpecialty: undefined,
  searchTerm: "",
  pagination: {
    current: 1,
    total: 0,
    sort: "asc",
  },
};

//actions
const HANDLE_SET_LIST_SPECIALTY = "handle-set-list-specialty";
const HC_SEARCH_TERM = "handle-search-term";
const HC_PAGINATION = "handle-change-pagination";
const HC_SELECTED_SPECIALTY = "handle-selected-specialty";
export const handleSetlistSpecialty = (
  value: MedicalSpecialties[]
): IAction => {
  return {
    type: HANDLE_SET_LIST_SPECIALTY,
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
export const handleChangeSelectedSpecialty = (
  payload: MedicalSpecialties
): IAction => {
  return {
    type: HC_SELECTED_SPECIALTY,
    payload: payload,
  };
};
// reducer
export const reducer = (
  state: IStateListMedicalSpecialty,
  action: IAction
): IStateListMedicalSpecialty => {
  switch (action.type) {
    case HANDLE_SET_LIST_SPECIALTY:
      return {
        ...state,
        listSpecialty: action.payload,
      };
    case HC_SELECTED_SPECIALTY:
      return {
        ...state,
        selectedSpecialty: action.payload,
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
