export interface ICheckRoles {
  admin: boolean;
  customer: boolean;
  clinic: boolean;
  doctor: boolean;
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
