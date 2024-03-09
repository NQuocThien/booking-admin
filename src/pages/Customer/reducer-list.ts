import { ICheckRoles, IPagination } from "src/assets/contains/item-interface";
import {
  CreatePackageInput,
  Customer,
  Profile,
  // Doctor,
} from "src/graphql/webbooking-service.generated";
interface IShowModals {
  customer: boolean;
  listProfile: boolean;
  profile: boolean;
}
export interface IStateListCustomer {
  listCustomer: Customer[];
  selectedCustomer: Customer | undefined;
  selectedProfile: Profile | undefined;
  searchTerm: string;
  pagination: IPagination;
  showModals: IShowModals;
}
export interface IAction {
  type: string;
  key?: keyof CreatePackageInput;
  payload: any;
}

// innitState
export const initState: IStateListCustomer = {
  listCustomer: [],
  selectedCustomer: undefined,
  selectedProfile: undefined,
  searchTerm: "",
  pagination: {
    current: 1,
    total: 0,
    sort: "asc",
  },
  showModals: {
    customer: false,
    listProfile: false,
    profile: false,
  },
};

//actions
const HANDLE_SET_LIST_CUSTOMER = "handle-set-list-cutomer";
const HC_SEARCH_TERM = "handle-search-term";
const HC_PAGINATION = "handle-change-pagination";
const HS_SELECTED_CUSTOMER = "handle-selected-customer";
const HS_SELECTED_PROFILE = "handle-selected-profile";
const HC_SHOW_MODAL = "handle-show-modal";
export const handleSetlistCustomer = (value: Customer[]): IAction => {
  return {
    type: HANDLE_SET_LIST_CUSTOMER,
    payload: value,
  };
};
export const handleSetSelectedCustomer = (value: Customer): IAction => {
  return {
    type: HS_SELECTED_CUSTOMER,
    payload: value,
  };
};
export const handleSetSelectedProfile = (value: Profile): IAction => {
  return {
    type: HS_SELECTED_PROFILE,
    payload: value,
  };
};
export const handleChangeSearchTerm = (payload: string): IAction => {
  return {
    type: HC_SEARCH_TERM,
    payload: payload,
  };
};
export const handleChangeShowModal = (payload: IShowModals): IAction => {
  return {
    type: HC_SHOW_MODAL,
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
  state: IStateListCustomer,
  action: IAction
): IStateListCustomer => {
  switch (action.type) {
    case HANDLE_SET_LIST_CUSTOMER:
      return {
        ...state,
        listCustomer: action.payload,
      };
    case HS_SELECTED_CUSTOMER:
      return {
        ...state,
        selectedCustomer: action.payload,
      };
    case HS_SELECTED_PROFILE:
      return {
        ...state,
        selectedProfile: action.payload,
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
    case HC_SHOW_MODAL:
      return {
        ...state,
        showModals: action.payload,
      };
    default:
      return state;
  }
};
