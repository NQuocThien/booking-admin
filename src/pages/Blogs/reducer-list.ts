import { ICheckRoles, IPagination } from "src/assets/contains/item-interface";
import {
  CreatePackageInput,
  Blog,
} from "src/graphql/webbooking-service.generated";

export interface IStateListBlog {
  listBlog: Blog[];
  blog: Blog | undefined;
  searchTerm: string;
  isDeleted: boolean;
  pagination: IPagination;
}
export interface IAction {
  type: string;
  key?: keyof CreatePackageInput;
  payload: any;
}

// innitState
export const initState: IStateListBlog = {
  listBlog: [],
  blog: undefined,
  isDeleted: false,
  searchTerm: "",
  pagination: {
    current: 1,
    total: 0,
    sort: "asc",
  },
};

//actions
const HANDLE_SET_LIST_BLOG = "handle-set-list-blog";
const HC_BLOG_CLICKED = "handle-change-blog-clicked";
const HC_BLOG_DELETED = "handle-change-blog-deleted";
const HC_SEARCH_TERM = "handle-search-term";
const HC_PAGINATION = "handle-change-pagination";
export const handleSetListBlog = (value: Blog[]): IAction => {
  return {
    type: HANDLE_SET_LIST_BLOG,
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

export const handleChangblog = (payload: Blog): IAction => {
  return {
    type: HC_BLOG_CLICKED,
    payload: payload,
  };
};

export const handleChangDeleted = (payload: boolean): IAction => {
  return {
    type: HC_BLOG_DELETED,
    payload: payload,
  };
};

// reducer
export const reducer = (
  state: IStateListBlog,
  action: IAction
): IStateListBlog => {
  switch (action.type) {
    case HANDLE_SET_LIST_BLOG:
      return {
        ...state,
        listBlog: action.payload,
      };
    case HC_BLOG_CLICKED:
      return {
        ...state,
        blog: action.payload,
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
    case HC_BLOG_DELETED:
      return {
        ...state,
        isDeleted: action.payload,
      };
    default:
      return state;
  }
};
