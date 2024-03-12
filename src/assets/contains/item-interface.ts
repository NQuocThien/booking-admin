export interface ICheckRoles {
  admin: boolean;
  customer: boolean;
  facility: boolean;
  doctor: boolean;
  staff: boolean;
}
export interface ILocation {
  lat: number;
  lng: number;
}

export interface ILinkImage {
  filename: string;
  type: string;
  url: string;
}
export interface IAction {
  type: string;
  payload: any;
}
export interface ISelecUser {
  id: string;
  username: string;
  doctor: {
    id: string;
  };
}
export interface ISelectClinic {
  id: string;
  companyName: string;
}
export interface ISelectDegree {
  id: string;
  name: string;
}
export interface ISelectSpecial {
  id: string;
  name: string;
}
export type Sort = "asc" | "desc";

export interface IPagination {
  total: number;
  current: number;
  sort: Sort;
  rowPerPage?: number;
}
