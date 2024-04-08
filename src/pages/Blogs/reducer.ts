import {
  CreateBlogInput,
  EnumBlogStatus,
  EnumBlogType,
} from "src/graphql/webbooking-service.generated";

interface IStateForAddBlog {
  createBlogInput: CreateBlogInput;
  validate: boolean;
  mainPhoto: Blob | null;
}
interface IAction {
  type: string;
  key?: keyof CreateBlogInput;
  payload: any;
}

const InitCreateBlogInit: CreateBlogInput = {
  title: "",
  content: "",
  keywords: "",
  shortContent: "",
  mainPhoto: {
    filename: "",
    type: "image",
    url: "",
  },
  priority: 0,
  slug: "",
  status: EnumBlogStatus.Public,
  type: EnumBlogType.Health,
};

// innitState
export const initState: IStateForAddBlog = {
  createBlogInput: InitCreateBlogInit,
  validate: false,
  mainPhoto: null,
};

//actions
const HANDLE_CHANGE_FORM = "handle-change-form";
const HC_VALIDATE = "hc-validate";
const HC_MAIN_PHOTO = "hc-main-photo";
export const handleChangeForm = (
  name: keyof CreateBlogInput,
  value: any
): IAction => {
  return {
    type: HANDLE_CHANGE_FORM,
    key: name,
    payload: value,
  };
};

export const handleSetValidate = (payload: boolean): IAction => {
  return {
    type: HC_VALIDATE,
    payload: payload,
  };
};

export const handleChangePhoto = (payload: Blob): IAction => {
  return {
    type: HC_MAIN_PHOTO,
    payload: payload,
  };
};

// reducer
export const reducer = (
  state: IStateForAddBlog,
  action: IAction
): IStateForAddBlog => {
  switch (action.type) {
    case HANDLE_CHANGE_FORM:
      if (action.key && action.key in state.createBlogInput) {
        return {
          ...state,
          createBlogInput: {
            ...state.createBlogInput,
            [action.key]: action.payload,
          },
        };
      } else return state;
    case HC_VALIDATE:
      return {
        ...state,
        validate: action.payload,
      };

    case HC_MAIN_PHOTO:
      return {
        ...state,
        mainPhoto: action.payload,
      };

    default:
      return state;
  }
};
