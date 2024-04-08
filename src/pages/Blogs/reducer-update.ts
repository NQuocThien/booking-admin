import {
  EnumBlogStatus,
  EnumBlogType,
  UpdateBlogInput,
} from "src/graphql/webbooking-service.generated";

interface IStateForUpdateBlog {
  updateBlogInput: UpdateBlogInput;
  validate: boolean;
  mainPhoto: Blob | null;
}
interface IAction {
  type: string;
  key?: keyof UpdateBlogInput;
  payload: any;
}

const InitCreateBlogInit: UpdateBlogInput = {
  id: "",
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
export const initState: IStateForUpdateBlog = {
  updateBlogInput: InitCreateBlogInit,
  validate: false,
  mainPhoto: null,
};

//actions
const HANDLE_CHANGE_FORM = "handle-change-form";
const HANDLE_SET_FORM = "handle-set-form";
const HC_VALIDATE = "hc-validate";
const HC_MAIN_PHOTO = "hc-main-photo";
export const handleChangeForm = (
  name: keyof UpdateBlogInput,
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

export const handleSetData = (payload: UpdateBlogInput): IAction => {
  return {
    type: HANDLE_SET_FORM,
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
  state: IStateForUpdateBlog,
  action: IAction
): IStateForUpdateBlog => {
  switch (action.type) {
    case HANDLE_CHANGE_FORM:
      if (action.key && action.key in state.updateBlogInput) {
        return {
          ...state,
          updateBlogInput: {
            ...state.updateBlogInput,
            [action.key]: action.payload,
          },
        };
      } else return state;
    case HANDLE_SET_FORM:
      return {
        ...state,
        updateBlogInput: action.payload,
      };
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
