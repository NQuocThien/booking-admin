import { ICheckRoles, IPagination } from "src/assets/contains/item-interface";
import {
  CreatePackageInput,
  CreateUserByAdminInput,
  User,
} from "src/graphql/webbooking-service.generated";

interface IShowModal {
  roles: boolean;
  add: boolean;
}
export interface IStateListUserPage {
  listUser: User[];
  userClicked: User | undefined;
  stateRoles: ICheckRoles;
  createUser: CreateUserByAdminInput;
  searchTerm: string;
  filtered: User[];
  pagination: IPagination;
  showModals: IShowModal;
}
export interface IAction {
  type: string;
  key?: keyof CreatePackageInput;
  payload: any;
}

// innitState
export const initState: IStateListUserPage = {
  listUser: [],
  userClicked: undefined,
  stateRoles: {
    admin: false,
    facility: false,
    customer: false,
    doctor: false,
    staff: false,
  },
  createUser: {
    email: "",
    password: "",
    username: "",
  },
  searchTerm: "",
  filtered: [],
  pagination: {
    current: 1,
    total: 0,
    sort: "asc",
  },
  showModals: {
    add: false,
    roles: false,
  },
};

//actions
const HANDLE_SET_LIST_USER = "handle-set-list-user";
const HC_USER_CLICKED = "handle-change-user-clicked";
const HC_SEARCH_TERM = "handle-search-term";
const HC_FILTERED = "handle-filtered";
const HC_PAGINATION = "handle-change-pagination";
const HC_SHOW_MODALS = "handle-show-modals";
const HC_CREATE_USER = "handle-change-create-user";
const HC_STATE_ROLE = "handle-change-state-role";
export const handleSetListUser = (value: User[]): IAction => {
  return {
    type: HANDLE_SET_LIST_USER,
    payload: value,
  };
};
export const handleChangeSearchTerm = (payload: string): IAction => {
  return {
    type: HC_SEARCH_TERM,
    payload: payload,
  };
};
export const handleChangeFiltered = (payload: User[]): IAction => {
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
export const handleChangShowModal = (payload: IShowModal): IAction => {
  return {
    type: HC_SHOW_MODALS,
    payload: payload,
  };
};
export const handleChangUserClicked = (payload: User): IAction => {
  return {
    type: HC_USER_CLICKED,
    payload: payload,
  };
};
export const handleChangeCreateUser = (
  payload: CreateUserByAdminInput
): IAction => {
  return {
    type: HC_CREATE_USER,
    payload: payload,
  };
};
export const handleChangeStateRoles = (payload: ICheckRoles): IAction => {
  return {
    type: HC_STATE_ROLE,
    payload: payload,
  };
};
// reducer
export const reducer = (
  state: IStateListUserPage,
  action: IAction
): IStateListUserPage => {
  switch (action.type) {
    case HANDLE_SET_LIST_USER:
      return {
        ...state,
        listUser: action.payload,
      };
    case HC_USER_CLICKED:
      return {
        ...state,
        userClicked: action.payload,
      };
    case HC_STATE_ROLE:
      return {
        ...state,
        stateRoles: action.payload,
      };
    case HC_CREATE_USER:
      return {
        ...state,
        createUser: action.payload,
      };
    case HC_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case HC_FILTERED:
      return {
        ...state,
        filtered: action.payload,
      };
    case HC_PAGINATION:
      return {
        ...state,
        pagination: action.payload,
      };
    case HC_SHOW_MODALS:
      return {
        ...state,
        showModals: action.payload,
      };
    default:
      return state;
  }
};
