import { ICheckRoles, IPagination } from "src/assets/contains/item-interface";
import {
  CreatePackageInput,
  MedicalFacilities,
} from "src/graphql/webbooking-service.generated";

export interface IStateListMedicalFacilities {
  listFacility: MedicalFacilities[];
  facilityClicked: MedicalFacilities | undefined;
  searchTerm: string;
  pagination: IPagination;
}
export interface IAction {
  type: string;
  key?: keyof CreatePackageInput;
  payload: any;
}

// innitState
export const initState: IStateListMedicalFacilities = {
  listFacility: [],
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
const HC_FACILITY_CLICKED = "handle-change-facility-clicked";
const HC_SEARCH_TERM = "handle-search-term";
const HC_FILTERED = "handle-filtered";
const HC_PAGINATION = "handle-change-pagination";
export const handleSetListFacility = (value: MedicalFacilities[]): IAction => {
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
export const handleChangeFiltered = (payload: MedicalFacilities[]): IAction => {
  return {
    type: HC_FILTERED,
    payload: payload,
  };
};
export const handleChangePagination = (payload: IPagination): IAction => {
  return {
    type: HC_PAGINATION,
    payload: payload,
  };
};

export const handleChangFacilityClicked = (
  payload: MedicalFacilities
): IAction => {
  return {
    type: HC_FACILITY_CLICKED,
    payload: payload,
  };
};

// reducer
export const reducer = (
  state: IStateListMedicalFacilities,
  action: IAction
): IStateListMedicalFacilities => {
  switch (action.type) {
    case HANDLE_SET_LIST_FACILITY:
      return {
        ...state,
        listFacility: action.payload,
      };
    case HC_FACILITY_CLICKED:
      return {
        ...state,
        facilityClicked: action.payload,
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
