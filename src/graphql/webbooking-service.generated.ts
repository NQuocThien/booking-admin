/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */
/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type CarePackage = {
  __typename?: 'CarePackage';
  discription: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: LinkImage;
  medicalFacilitiesId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  register?: Maybe<Array<Register>>;
  typePackageId: Scalars['String']['output'];
};

export type CreateCustomerInput = {
  fullname: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateDegreeInput = {
  abbreviations: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateDoctorInput = {
  avatar?: InputMaybe<LinkImageInput>;
  degreeId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  facilitiesId?: InputMaybe<Scalars['String']['input']>;
  idSpecialist?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMedicalFacilitiesInput = {
  adress: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  discription: Scalars['String']['input'];
  email: Scalars['String']['input'];
  image: LinkImageInput;
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
  numberPhone: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateMedicalSpecialtiesInput = {
  discription: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateProfileInput = {
  address: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  dataOfBirth: Scalars['DateTime']['input'];
  email: Scalars['String']['input'];
  ethnic: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  identity: Scalars['String']['input'];
  job: Scalars['String']['input'];
  medicalInsurance: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  relationship: Scalars['String']['input'];
};

export type CreateRegisterInput = {
  date: Scalars['DateTime']['input'];
  packegeId: Scalars['String']['input'];
  profileId: Scalars['String']['input'];
};

export type CreateTypePackageInput = {
  typeName: Scalars['String']['input'];
};

export type CreateUserByAdminInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Customer = {
  __typename?: 'Customer';
  fullname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  profile?: Maybe<Array<Profile>>;
  userId: Scalars['String']['output'];
};

export type Degree = {
  __typename?: 'Degree';
  abbreviations: Scalars['String']['output'];
  doctor?: Maybe<Doctor>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Doctor = {
  __typename?: 'Doctor';
  avatar: LinkImage;
  degree?: Maybe<Degree>;
  degreeId?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  evaluate?: Maybe<Scalars['Float']['output']>;
  facilitiesId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  idSpecialist?: Maybe<Scalars['String']['output']>;
  medicalSpecialties?: Maybe<MedicalSpecialties>;
  name: Scalars['String']['output'];
  numberPhone: Scalars['String']['output'];
  userId?: Maybe<Scalars['String']['output']>;
};

export type GeneralInfor = {
  __typename?: 'GeneralInfor';
  ID?: Maybe<Scalars['String']['output']>;
  address: Scalars['String']['output'];
  company: Scalars['String']['output'];
  copyrigth: Scalars['String']['output'];
  email: Scalars['String']['output'];
  hotline: Scalars['String']['output'];
  liscenceBusiness: Scalars['String']['output'];
  liscenceOparating: Scalars['String']['output'];
  logoFooter: LinkImage;
  logoHeader: LinkImage;
};

export type GeneralInforUpdateInput = {
  address: Scalars['String']['input'];
  company: Scalars['String']['input'];
  copyrigth: Scalars['String']['input'];
  email: Scalars['String']['input'];
  hotline: Scalars['String']['input'];
  liscenceBusiness: Scalars['String']['input'];
  liscenceOparating: Scalars['String']['input'];
  logoFooter?: InputMaybe<LinkImageInput>;
  logoHeader?: InputMaybe<LinkImageInput>;
};

export type LinkImage = {
  __typename?: 'LinkImage';
  filename: Scalars['String']['output'];
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type LinkImageInput = {
  filename: Scalars['String']['input'];
  type: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type LoginRespone = {
  __typename?: 'LoginRespone';
  access_token: Scalars['String']['output'];
  user: User;
};

export type LoginUserInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type LogoutUser = {
  __typename?: 'LogoutUser';
  logout: Scalars['Boolean']['output'];
};

export type MedicalFacilities = {
  __typename?: 'MedicalFacilities';
  adress: Scalars['String']['output'];
  carePackage?: Maybe<Array<CarePackage>>;
  companyName: Scalars['String']['output'];
  discription: Scalars['String']['output'];
  doctors?: Maybe<Array<Doctor>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: LinkImage;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  numberPhone: Scalars['String']['output'];
};

export type MedicalSpecialties = {
  __typename?: 'MedicalSpecialties';
  discription: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  activeUser: User;
  createCarePackage: CarePackage;
  createDegree: Degree;
  createDoctor: Doctor;
  createMecialSpecialties: MedicalSpecialties;
  createMedicalFacilities: MedicalFacilities;
  createProfile: Profile;
  createRegister: Register;
  createTypePackage: TypePackage;
  createcustomer: Customer;
  deleteCarePackage: CarePackage;
  deleteDegree: Degree;
  deleteDoctor: Doctor;
  deleteMecialSpecialties: MedicalSpecialties;
  deleteProfile: Profile;
  deleteTypePackage: TypePackage;
  deleteUser: User;
  login: LoginRespone;
  logout: LogoutUser;
  signup: User;
  signupUser: User;
  updateCarePackage: CarePackage;
  updateDegree: Degree;
  updateDoctor: Doctor;
  updateGeneralInfor: GeneralInfor;
  updateMecialSpecialties: MedicalSpecialties;
  updateMedicalFacilities: MedicalFacilities;
  updateProfile: Profile;
  updateRegister: Register;
  updateRoles: User;
  updateSetting: Setting;
  updateTypePackage: TypePackage;
  updateUser: User;
  updateUserWithPass: User;
};


export type MutationActiveUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationCreateCarePackageArgs = {
  input: CreateCarePackageInput;
};


export type MutationCreateDegreeArgs = {
  input: CreateDegreeInput;
};


export type MutationCreateDoctorArgs = {
  createDoctorInput: CreateDoctorInput;
};


export type MutationCreateMecialSpecialtiesArgs = {
  mecicalSpecialtiesInput: CreateMedicalSpecialtiesInput;
};


export type MutationCreateMedicalFacilitiesArgs = {
  createMedicalFacilitiesInput: CreateMedicalFacilitiesInput;
};


export type MutationCreateProfileArgs = {
  input: CreateProfileInput;
};


export type MutationCreateRegisterArgs = {
  input: CreateRegisterInput;
};


export type MutationCreateTypePackageArgs = {
  input: CreateTypePackageInput;
};


export type MutationCreatecustomerArgs = {
  createCustomerInput: CreateCustomerInput;
};


export type MutationDeleteCarePackageArgs = {
  input: Scalars['String']['input'];
};


export type MutationDeleteDegreeArgs = {
  input: Scalars['String']['input'];
};


export type MutationDeleteDoctorArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMecialSpecialtiesArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteProfileArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTypePackageArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationSignupArgs = {
  createUserInput: CreateUserInput;
};


export type MutationSignupUserArgs = {
  createUserInput: CreateUserByAdminInput;
};


export type MutationUpdateCarePackageArgs = {
  input: UpdateCarePackageInput;
};


export type MutationUpdateDegreeArgs = {
  input: UpdateDegreeInput;
};


export type MutationUpdateDoctorArgs = {
  updateDoctorInput: UpdateDoctorInput;
};


export type MutationUpdateGeneralInforArgs = {
  updateGeneralInforInput: GeneralInforUpdateInput;
};


export type MutationUpdateMecialSpecialtiesArgs = {
  updateSpecialtiesInput: UpdateMedicalSpecialtiesInput;
};


export type MutationUpdateMedicalFacilitiesArgs = {
  createMedicalFacilitiesInput: UpdateMedicalFacilitiesInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationUpdateRegisterArgs = {
  input: UpdateRegisterInput;
};


export type MutationUpdateRolesArgs = {
  updateRolesInput: UpdateRolesInput;
};


export type MutationUpdateSettingArgs = {
  updateSettingInput: UpdateSettingInput;
};


export type MutationUpdateTypePackageArgs = {
  input: UpdateTypePackageInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateUserWithPassArgs = {
  updateUserInput: UpdateUserWithPassInput;
};

export type Profile = {
  __typename?: 'Profile';
  address: Scalars['String']['output'];
  customerId: Scalars['String']['output'];
  dataOfBirth: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  ethnic: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  identity?: Maybe<Scalars['String']['output']>;
  job: Scalars['String']['output'];
  medicalInsurance?: Maybe<Scalars['String']['output']>;
  numberPhone: Scalars['String']['output'];
  register?: Maybe<Array<Register>>;
  relationship: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  checklogin: User;
  getAllDegree: Array<Degree>;
  getAllMecialSpecialties: Array<MedicalSpecialties>;
  getAllTypePackage: Array<TypePackage>;
  getCarePackagesByClinicId: Array<CarePackage>;
  getClinicById: MedicalFacilities;
  getClinicByUserId: MedicalFacilities;
  getDoctorbyId: Doctor;
  getDoctorbyUserId: Doctor;
  getDoctors: Array<Doctor>;
  getGeneralInfor: GeneralInfor;
  getMedicalfacilities: Array<MedicalFacilities>;
  getProfileByCustomerId: Array<Profile>;
  getSetting: Setting;
  getUser: User;
  getUserMedicalNon: Array<User>;
  getUserSelect: Array<User>;
  getcustomers: Array<Customer>;
  users: Array<User>;
};


export type QueryGetCarePackagesByClinicIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetClinicByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetClinicByUserIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetDoctorbyIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetDoctorbyUserIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetProfileByCustomerIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUserArgs = {
  username: Scalars['String']['input'];
};


export type QueryGetUserSelectArgs = {
  roleInput: UserSelectInput;
};

export type Register = {
  __typename?: 'Register';
  carePackage?: Maybe<CarePackage>;
  date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  packegeId: Scalars['String']['output'];
  profile?: Maybe<Profile>;
  profileId: Scalars['String']['output'];
  state: RegisterState;
};

/** Trạng thái của Register */
export enum RegisterState {
  Active = 'Active',
  NoActive = 'NoActive',
  Success = 'Success'
}

export type Setting = {
  __typename?: 'Setting';
  defaultLang: Scalars['String']['output'];
};

export type TypePackage = {
  __typename?: 'TypePackage';
  carePackage?: Maybe<Array<CarePackage>>;
  id: Scalars['ID']['output'];
  typeName: Scalars['String']['output'];
};

export type UpdateCarePackageInput = {
  discription: Scalars['String']['input'];
  id: Scalars['String']['input'];
  image: LinkImageInput;
  medicalFacilitiesId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  typePackageId: Scalars['String']['input'];
};

export type UpdateDegreeInput = {
  abbreviations: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdateDoctorInput = {
  avatar?: InputMaybe<LinkImageInput>;
  degreeId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  facilitiesId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  idSpecialist?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMedicalFacilitiesInput = {
  adress: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  discription: Scalars['String']['input'];
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  image?: InputMaybe<LinkImageInput>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
  numberPhone: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UpdateMedicalSpecialtiesInput = {
  discription: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdateProfileInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  dataOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  ethnic?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  identity?: InputMaybe<Scalars['String']['input']>;
  job?: InputMaybe<Scalars['String']['input']>;
  medicalInsurance?: InputMaybe<Scalars['String']['input']>;
  numberPhone?: InputMaybe<Scalars['String']['input']>;
  relationship?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRegisterInput = {
  id: Scalars['String']['input'];
  state: Scalars['String']['input'];
};

export type UpdateRolesInput = {
  id: Scalars['String']['input'];
  roles: Array<Scalars['String']['input']>;
};

export type UpdateSettingInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateTypePackageInput = {
  id: Scalars['String']['input'];
  typeName: Scalars['String']['input'];
};

export type UpdateUserInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  linkImage?: InputMaybe<LinkImageInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserWithPassInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  linkImage?: InputMaybe<LinkImageInput>;
  password: Scalars['String']['input'];
  passwordNew: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  active?: Maybe<Scalars['Boolean']['output']>;
  customer?: Maybe<Customer>;
  doctor?: Maybe<Doctor>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  linkImage?: Maybe<LinkImage>;
  medicalFacilities?: Maybe<MedicalFacilities>;
  password: Scalars['String']['output'];
  roles?: Maybe<Array<Scalars['String']['output']>>;
  username: Scalars['String']['output'];
};

export type UserSelectInput = {
  role: Scalars['String']['input'];
};

export type CreateCarePackageInput = {
  discription: Scalars['String']['input'];
  image: LinkImageInput;
  medicalFacilitiesId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  typePackageId: Scalars['String']['input'];
};

export type LoginMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginRespone', access_token: string, user: { __typename?: 'User', email: string, username: string } } };

export type UdateUserByIdMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UdateUserByIdMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string } };

export type SingupByAdminMutationVariables = Exact<{
  input: CreateUserByAdminInput;
}>;


export type SingupByAdminMutation = { __typename?: 'Mutation', signupUser: { __typename?: 'User', id: string } };

export type UpdateUserByIdWithPassMutationVariables = Exact<{
  input: UpdateUserWithPassInput;
}>;


export type UpdateUserByIdWithPassMutation = { __typename?: 'Mutation', updateUserWithPass: { __typename?: 'User', id: string } };

export type UpdateGeneralInforMutationVariables = Exact<{
  input: GeneralInforUpdateInput;
}>;


export type UpdateGeneralInforMutation = { __typename?: 'Mutation', updateGeneralInfor: { __typename?: 'GeneralInfor', company: string, address: string, copyrigth: string, email: string, hotline: string, liscenceBusiness: string, liscenceOparating: string, ID?: string | null, logoFooter: { __typename?: 'LinkImage', filename: string, url: string, type: string }, logoHeader: { __typename?: 'LinkImage', filename: string, url: string, type: string } } };

export type ActiveUserMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type ActiveUserMutation = { __typename?: 'Mutation', activeUser: { __typename?: 'User', username: string, active?: boolean | null } };

export type UpdateRolesMutationVariables = Exact<{
  input: UpdateRolesInput;
}>;


export type UpdateRolesMutation = { __typename?: 'Mutation', updateRoles: { __typename?: 'User', roles?: Array<string> | null } };

export type CreateMedicalFacilitiesMutationVariables = Exact<{
  input: CreateMedicalFacilitiesInput;
}>;


export type CreateMedicalFacilitiesMutation = { __typename?: 'Mutation', createMedicalFacilities: { __typename?: 'MedicalFacilities', id: string } };

export type CreateDoctorMutationVariables = Exact<{
  input: CreateDoctorInput;
}>;


export type CreateDoctorMutation = { __typename?: 'Mutation', createDoctor: { __typename?: 'Doctor', id: string } };

export type UpdateDoctorMutationVariables = Exact<{
  input: UpdateDoctorInput;
}>;


export type UpdateDoctorMutation = { __typename?: 'Mutation', updateDoctor: { __typename?: 'Doctor', id: string } };

export type DeleteDoctorMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type DeleteDoctorMutation = { __typename?: 'Mutation', deleteDoctor: { __typename?: 'Doctor', id: string } };

export type CreateDegreeMutationVariables = Exact<{
  input: CreateDegreeInput;
}>;


export type CreateDegreeMutation = { __typename?: 'Mutation', createDegree: { __typename?: 'Degree', id: string, name: string, abbreviations: string } };

export type UpdateDegreeMutationVariables = Exact<{
  input: UpdateDegreeInput;
}>;


export type UpdateDegreeMutation = { __typename?: 'Mutation', updateDegree: { __typename?: 'Degree', id: string, name: string, abbreviations: string } };

export type CreateSpecialMutationVariables = Exact<{
  input: CreateMedicalSpecialtiesInput;
}>;


export type CreateSpecialMutation = { __typename?: 'Mutation', createMecialSpecialties: { __typename?: 'MedicalSpecialties', id: string, name: string, discription: string } };

export type UpdateSpcialMutationVariables = Exact<{
  input: UpdateMedicalSpecialtiesInput;
}>;


export type UpdateSpcialMutation = { __typename?: 'Mutation', updateMecialSpecialties: { __typename?: 'MedicalSpecialties', id: string } };

export type DeleteSpecialMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type DeleteSpecialMutation = { __typename?: 'Mutation', deleteMecialSpecialties: { __typename?: 'MedicalSpecialties', id: string, name: string, discription: string } };

export type DeleteDegreeMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type DeleteDegreeMutation = { __typename?: 'Mutation', deleteDegree: { __typename?: 'Degree', id: string } };

export type UpdateClinicMutationVariables = Exact<{
  input: UpdateMedicalFacilitiesInput;
}>;


export type UpdateClinicMutation = { __typename?: 'Mutation', updateMedicalFacilities: { __typename?: 'MedicalFacilities', id: string } };

export type UpdateTypePackageByIdMutationVariables = Exact<{
  input: UpdateTypePackageInput;
}>;


export type UpdateTypePackageByIdMutation = { __typename?: 'Mutation', updateTypePackage: { __typename?: 'TypePackage', id: string } };

export type DeleteTypePackageByIdMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type DeleteTypePackageByIdMutation = { __typename?: 'Mutation', deleteTypePackage: { __typename?: 'TypePackage', id: string } };

export type CreateTypePackageMutationVariables = Exact<{
  input: CreateTypePackageInput;
}>;


export type CreateTypePackageMutation = { __typename?: 'Mutation', createTypePackage: { __typename?: 'TypePackage', id: string } };

export type DeletePackageByIdMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type DeletePackageByIdMutation = { __typename?: 'Mutation', deleteCarePackage: { __typename?: 'CarePackage', id: string } };

export type UpdatePackageByIdMutationVariables = Exact<{
  input: UpdateCarePackageInput;
}>;


export type UpdatePackageByIdMutation = { __typename?: 'Mutation', updateCarePackage: { __typename?: 'CarePackage', id: string } };

export type CreatePackageByIdMutationVariables = Exact<{
  input: CreateCarePackageInput;
}>;


export type CreatePackageByIdMutation = { __typename?: 'Mutation', createCarePackage: { __typename?: 'CarePackage', id: string } };

export type UpdateRegisterMutationVariables = Exact<{
  input: UpdateRegisterInput;
}>;


export type UpdateRegisterMutation = { __typename?: 'Mutation', updateRegister: { __typename?: 'Register', id: string, state: RegisterState } };

export type CheckLoginQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckLoginQueryQuery = { __typename?: 'Query', checklogin: { __typename?: 'User', id: string, email: string, username: string, password: string, roles?: Array<string> | null, linkImage?: { __typename?: 'LinkImage', filename: string, type: string, url: string } | null } };

export type GetSettingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSettingQuery = { __typename?: 'Query', getSetting: { __typename?: 'Setting', defaultLang: string } };

export type GetGeneralInforQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGeneralInforQuery = { __typename?: 'Query', getGeneralInfor: { __typename?: 'GeneralInfor', company: string, address: string, copyrigth: string, email: string, hotline: string, liscenceBusiness: string, liscenceOparating: string, ID?: string | null, logoFooter: { __typename?: 'LinkImage', filename: string, url: string, type: string }, logoHeader: { __typename?: 'LinkImage', filename: string, url: string } } };

export type GetAllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, username: string, password: string, roles?: Array<string> | null, active?: boolean | null, linkImage?: { __typename?: 'LinkImage', filename: string, type: string, url: string } | null, customer?: { __typename?: 'Customer', id: string, fullname: string, userId: string } | null }> };

export type GetCustomerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomerQuery = { __typename?: 'Query', getcustomers: Array<{ __typename?: 'Customer', id: string, fullname: string, userId: string, profile?: Array<{ __typename?: 'Profile', address: string, customerId: string, dataOfBirth: any, email: string, ethnic: string, fullname: string, gender: string, id: string, relationship: string, numberPhone: string, medicalInsurance?: string | null, job: string, identity?: string | null }> | null }> };

export type GetDoctorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDoctorsQuery = { __typename?: 'Query', getDoctors: Array<{ __typename?: 'Doctor', id: string, name: string, email: string, numberPhone: string, facilitiesId?: string | null, userId?: string | null, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, medicalSpecialties?: { __typename?: 'MedicalSpecialties', id: string, name: string, discription: string } | null, degree?: { __typename?: 'Degree', id: string, name: string, abbreviations: string } | null }> };

export type GetMedicalfacilitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMedicalfacilitiesQuery = { __typename?: 'Query', getMedicalfacilities: Array<{ __typename?: 'MedicalFacilities', id: string, companyName: string, discription: string, adress: string, email: string, numberPhone: string, carePackage?: Array<{ __typename?: 'CarePackage', id: string, discription: string, medicalFacilitiesId: string, name: string, price: number, typePackageId: string, image: { __typename?: 'LinkImage', filename: string, type: string, url: string } }> | null, doctors?: Array<{ __typename?: 'Doctor', id: string, userId?: string | null, name: string, email: string, evaluate?: number | null, numberPhone: string, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, degree?: { __typename?: 'Degree', id: string, name: string, abbreviations: string } | null }> | null, image: { __typename?: 'LinkImage', filename: string, type: string, url: string } }> };

export type GetUserMedicalNonQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserMedicalNonQuery = { __typename?: 'Query', getUserMedicalNon: Array<{ __typename?: 'User', id: string, username: string }> };

export type DegreesSellectQueryVariables = Exact<{ [key: string]: never; }>;


export type DegreesSellectQuery = { __typename?: 'Query', getAllDegree: Array<{ __typename?: 'Degree', id: string, name: string }> };

export type GetClinicsSelectQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClinicsSelectQuery = { __typename?: 'Query', getMedicalfacilities: Array<{ __typename?: 'MedicalFacilities', id: string, companyName: string }> };

export type GetSpecicalsSelectQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSpecicalsSelectQuery = { __typename?: 'Query', getAllMecialSpecialties: Array<{ __typename?: 'MedicalSpecialties', id: string, name: string, discription: string }> };

export type GetUserSelectQueryVariables = Exact<{
  input: UserSelectInput;
}>;


export type GetUserSelectQuery = { __typename?: 'Query', getUserSelect: Array<{ __typename?: 'User', id: string, username: string, doctor?: { __typename?: 'Doctor', id: string } | null }> };

export type GetAllDregreeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDregreeQuery = { __typename?: 'Query', getAllDegree: Array<{ __typename?: 'Degree', id: string, name: string, abbreviations: string }> };

export type GetAllSpecialQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSpecialQuery = { __typename?: 'Query', getAllMecialSpecialties: Array<{ __typename?: 'MedicalSpecialties', id: string, name: string, discription: string }> };

export type GetClinicByUserIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetClinicByUserIdQuery = { __typename?: 'Query', getClinicByUserId: { __typename?: 'MedicalFacilities', id: string, companyName: string, email: string, numberPhone: string, adress: string, discription: string, lat?: number | null, lng?: number | null, image: { __typename?: 'LinkImage', filename: string, type: string, url: string }, doctors?: Array<{ __typename?: 'Doctor', id: string, name: string, numberPhone: string, email: string, degree?: { __typename?: 'Degree', id: string, name: string, abbreviations: string } | null, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, medicalSpecialties?: { __typename?: 'MedicalSpecialties', name: string } | null }> | null } };

export type GetDoctorByIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetDoctorByIdQuery = { __typename?: 'Query', getDoctorbyId: { __typename?: 'Doctor', degreeId?: string | null, email: string, facilitiesId?: string | null, id: string, idSpecialist?: string | null, name: string, numberPhone: string, userId?: string | null, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string } } };

export type GetDoctorByUserIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetDoctorByUserIdQuery = { __typename?: 'Query', getDoctorbyUserId: { __typename?: 'Doctor', id: string, name: string, numberPhone: string, email: string, degreeId?: string | null, evaluate?: number | null, facilitiesId?: string | null, userId?: string | null, idSpecialist?: string | null, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, degree?: { __typename?: 'Degree', id: string, abbreviations: string, name: string } | null, medicalSpecialties?: { __typename?: 'MedicalSpecialties', id: string, name: string, discription: string } | null } };

export type GetAllTypePackedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTypePackedQuery = { __typename?: 'Query', getAllTypePackage: Array<{ __typename?: 'TypePackage', id: string, typeName: string }> };

export type GetPackageByClinicIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetPackageByClinicIdQuery = { __typename?: 'Query', getCarePackagesByClinicId: Array<{ __typename?: 'CarePackage', id: string, discription: string, typePackageId: string, medicalFacilitiesId: string, name: string, price: number, image: { __typename?: 'LinkImage', filename: string, type: string, url: string } }> };

export type GetListPackageByUserIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetListPackageByUserIdQuery = { __typename?: 'Query', getClinicByUserId: { __typename?: 'MedicalFacilities', id: string, carePackage?: Array<{ __typename?: 'CarePackage', id: string, discription: string, medicalFacilitiesId: string, typePackageId: string, price: number, name: string, image: { __typename?: 'LinkImage', filename: string, type: string, url: string }, register?: Array<{ __typename?: 'Register', id: string, date: any, packegeId: string, profileId: string, state: RegisterState, profile?: { __typename?: 'Profile', id: string, address: string, customerId: string, dataOfBirth: any, email: string, ethnic: string, fullname: string, gender: string, identity?: string | null, job: string, medicalInsurance?: string | null, numberPhone: string, relationship: string } | null }> | null }> | null } };


export const LoginDocument = gql`
    mutation login($input: LoginUserInput!) {
  login(loginUserInput: $input) {
    access_token
    user {
      email
      username
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const UdateUserByIdDocument = gql`
    mutation UdateUserByID($input: UpdateUserInput!) {
  updateUser(updateUserInput: $input) {
    id
  }
}
    `;
export type UdateUserByIdMutationFn = Apollo.MutationFunction<UdateUserByIdMutation, UdateUserByIdMutationVariables>;

/**
 * __useUdateUserByIdMutation__
 *
 * To run a mutation, you first call `useUdateUserByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUdateUserByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [udateUserByIdMutation, { data, loading, error }] = useUdateUserByIdMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUdateUserByIdMutation(baseOptions?: Apollo.MutationHookOptions<UdateUserByIdMutation, UdateUserByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UdateUserByIdMutation, UdateUserByIdMutationVariables>(UdateUserByIdDocument, options);
      }
export type UdateUserByIdMutationHookResult = ReturnType<typeof useUdateUserByIdMutation>;
export type UdateUserByIdMutationResult = Apollo.MutationResult<UdateUserByIdMutation>;
export type UdateUserByIdMutationOptions = Apollo.BaseMutationOptions<UdateUserByIdMutation, UdateUserByIdMutationVariables>;
export const SingupByAdminDocument = gql`
    mutation singupByAdmin($input: CreateUserByAdminInput!) {
  signupUser(createUserInput: $input) {
    id
  }
}
    `;
export type SingupByAdminMutationFn = Apollo.MutationFunction<SingupByAdminMutation, SingupByAdminMutationVariables>;

/**
 * __useSingupByAdminMutation__
 *
 * To run a mutation, you first call `useSingupByAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSingupByAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [singupByAdminMutation, { data, loading, error }] = useSingupByAdminMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSingupByAdminMutation(baseOptions?: Apollo.MutationHookOptions<SingupByAdminMutation, SingupByAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SingupByAdminMutation, SingupByAdminMutationVariables>(SingupByAdminDocument, options);
      }
export type SingupByAdminMutationHookResult = ReturnType<typeof useSingupByAdminMutation>;
export type SingupByAdminMutationResult = Apollo.MutationResult<SingupByAdminMutation>;
export type SingupByAdminMutationOptions = Apollo.BaseMutationOptions<SingupByAdminMutation, SingupByAdminMutationVariables>;
export const UpdateUserByIdWithPassDocument = gql`
    mutation UpdateUserByIdWithPass($input: UpdateUserWithPassInput!) {
  updateUserWithPass(updateUserInput: $input) {
    id
  }
}
    `;
export type UpdateUserByIdWithPassMutationFn = Apollo.MutationFunction<UpdateUserByIdWithPassMutation, UpdateUserByIdWithPassMutationVariables>;

/**
 * __useUpdateUserByIdWithPassMutation__
 *
 * To run a mutation, you first call `useUpdateUserByIdWithPassMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserByIdWithPassMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserByIdWithPassMutation, { data, loading, error }] = useUpdateUserByIdWithPassMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserByIdWithPassMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserByIdWithPassMutation, UpdateUserByIdWithPassMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserByIdWithPassMutation, UpdateUserByIdWithPassMutationVariables>(UpdateUserByIdWithPassDocument, options);
      }
export type UpdateUserByIdWithPassMutationHookResult = ReturnType<typeof useUpdateUserByIdWithPassMutation>;
export type UpdateUserByIdWithPassMutationResult = Apollo.MutationResult<UpdateUserByIdWithPassMutation>;
export type UpdateUserByIdWithPassMutationOptions = Apollo.BaseMutationOptions<UpdateUserByIdWithPassMutation, UpdateUserByIdWithPassMutationVariables>;
export const UpdateGeneralInforDocument = gql`
    mutation UpdateGeneralInfor($input: GeneralInforUpdateInput!) {
  updateGeneralInfor(updateGeneralInforInput: $input) {
    company
    address
    copyrigth
    email
    hotline
    liscenceBusiness
    liscenceOparating
    ID
    logoFooter {
      filename
      url
      type
    }
    logoHeader {
      filename
      url
      type
    }
  }
}
    `;
export type UpdateGeneralInforMutationFn = Apollo.MutationFunction<UpdateGeneralInforMutation, UpdateGeneralInforMutationVariables>;

/**
 * __useUpdateGeneralInforMutation__
 *
 * To run a mutation, you first call `useUpdateGeneralInforMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGeneralInforMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGeneralInforMutation, { data, loading, error }] = useUpdateGeneralInforMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateGeneralInforMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGeneralInforMutation, UpdateGeneralInforMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGeneralInforMutation, UpdateGeneralInforMutationVariables>(UpdateGeneralInforDocument, options);
      }
export type UpdateGeneralInforMutationHookResult = ReturnType<typeof useUpdateGeneralInforMutation>;
export type UpdateGeneralInforMutationResult = Apollo.MutationResult<UpdateGeneralInforMutation>;
export type UpdateGeneralInforMutationOptions = Apollo.BaseMutationOptions<UpdateGeneralInforMutation, UpdateGeneralInforMutationVariables>;
export const ActiveUserDocument = gql`
    mutation ActiveUser($input: String!) {
  activeUser(id: $input) {
    username
    active
  }
}
    `;
export type ActiveUserMutationFn = Apollo.MutationFunction<ActiveUserMutation, ActiveUserMutationVariables>;

/**
 * __useActiveUserMutation__
 *
 * To run a mutation, you first call `useActiveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActiveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activeUserMutation, { data, loading, error }] = useActiveUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useActiveUserMutation(baseOptions?: Apollo.MutationHookOptions<ActiveUserMutation, ActiveUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ActiveUserMutation, ActiveUserMutationVariables>(ActiveUserDocument, options);
      }
export type ActiveUserMutationHookResult = ReturnType<typeof useActiveUserMutation>;
export type ActiveUserMutationResult = Apollo.MutationResult<ActiveUserMutation>;
export type ActiveUserMutationOptions = Apollo.BaseMutationOptions<ActiveUserMutation, ActiveUserMutationVariables>;
export const UpdateRolesDocument = gql`
    mutation UpdateRoles($input: UpdateRolesInput!) {
  updateRoles(updateRolesInput: $input) {
    roles
  }
}
    `;
export type UpdateRolesMutationFn = Apollo.MutationFunction<UpdateRolesMutation, UpdateRolesMutationVariables>;

/**
 * __useUpdateRolesMutation__
 *
 * To run a mutation, you first call `useUpdateRolesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRolesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRolesMutation, { data, loading, error }] = useUpdateRolesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateRolesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRolesMutation, UpdateRolesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRolesMutation, UpdateRolesMutationVariables>(UpdateRolesDocument, options);
      }
export type UpdateRolesMutationHookResult = ReturnType<typeof useUpdateRolesMutation>;
export type UpdateRolesMutationResult = Apollo.MutationResult<UpdateRolesMutation>;
export type UpdateRolesMutationOptions = Apollo.BaseMutationOptions<UpdateRolesMutation, UpdateRolesMutationVariables>;
export const CreateMedicalFacilitiesDocument = gql`
    mutation createMedicalFacilities($input: CreateMedicalFacilitiesInput!) {
  createMedicalFacilities(createMedicalFacilitiesInput: $input) {
    id
  }
}
    `;
export type CreateMedicalFacilitiesMutationFn = Apollo.MutationFunction<CreateMedicalFacilitiesMutation, CreateMedicalFacilitiesMutationVariables>;

/**
 * __useCreateMedicalFacilitiesMutation__
 *
 * To run a mutation, you first call `useCreateMedicalFacilitiesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMedicalFacilitiesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMedicalFacilitiesMutation, { data, loading, error }] = useCreateMedicalFacilitiesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMedicalFacilitiesMutation(baseOptions?: Apollo.MutationHookOptions<CreateMedicalFacilitiesMutation, CreateMedicalFacilitiesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMedicalFacilitiesMutation, CreateMedicalFacilitiesMutationVariables>(CreateMedicalFacilitiesDocument, options);
      }
export type CreateMedicalFacilitiesMutationHookResult = ReturnType<typeof useCreateMedicalFacilitiesMutation>;
export type CreateMedicalFacilitiesMutationResult = Apollo.MutationResult<CreateMedicalFacilitiesMutation>;
export type CreateMedicalFacilitiesMutationOptions = Apollo.BaseMutationOptions<CreateMedicalFacilitiesMutation, CreateMedicalFacilitiesMutationVariables>;
export const CreateDoctorDocument = gql`
    mutation createDoctor($input: CreateDoctorInput!) {
  createDoctor(createDoctorInput: $input) {
    id
  }
}
    `;
export type CreateDoctorMutationFn = Apollo.MutationFunction<CreateDoctorMutation, CreateDoctorMutationVariables>;

/**
 * __useCreateDoctorMutation__
 *
 * To run a mutation, you first call `useCreateDoctorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDoctorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDoctorMutation, { data, loading, error }] = useCreateDoctorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDoctorMutation(baseOptions?: Apollo.MutationHookOptions<CreateDoctorMutation, CreateDoctorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDoctorMutation, CreateDoctorMutationVariables>(CreateDoctorDocument, options);
      }
export type CreateDoctorMutationHookResult = ReturnType<typeof useCreateDoctorMutation>;
export type CreateDoctorMutationResult = Apollo.MutationResult<CreateDoctorMutation>;
export type CreateDoctorMutationOptions = Apollo.BaseMutationOptions<CreateDoctorMutation, CreateDoctorMutationVariables>;
export const UpdateDoctorDocument = gql`
    mutation updateDoctor($input: UpdateDoctorInput!) {
  updateDoctor(updateDoctorInput: $input) {
    id
  }
}
    `;
export type UpdateDoctorMutationFn = Apollo.MutationFunction<UpdateDoctorMutation, UpdateDoctorMutationVariables>;

/**
 * __useUpdateDoctorMutation__
 *
 * To run a mutation, you first call `useUpdateDoctorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDoctorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDoctorMutation, { data, loading, error }] = useUpdateDoctorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDoctorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDoctorMutation, UpdateDoctorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDoctorMutation, UpdateDoctorMutationVariables>(UpdateDoctorDocument, options);
      }
export type UpdateDoctorMutationHookResult = ReturnType<typeof useUpdateDoctorMutation>;
export type UpdateDoctorMutationResult = Apollo.MutationResult<UpdateDoctorMutation>;
export type UpdateDoctorMutationOptions = Apollo.BaseMutationOptions<UpdateDoctorMutation, UpdateDoctorMutationVariables>;
export const DeleteDoctorDocument = gql`
    mutation deleteDoctor($input: String!) {
  deleteDoctor(id: $input) {
    id
  }
}
    `;
export type DeleteDoctorMutationFn = Apollo.MutationFunction<DeleteDoctorMutation, DeleteDoctorMutationVariables>;

/**
 * __useDeleteDoctorMutation__
 *
 * To run a mutation, you first call `useDeleteDoctorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDoctorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDoctorMutation, { data, loading, error }] = useDeleteDoctorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteDoctorMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDoctorMutation, DeleteDoctorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDoctorMutation, DeleteDoctorMutationVariables>(DeleteDoctorDocument, options);
      }
export type DeleteDoctorMutationHookResult = ReturnType<typeof useDeleteDoctorMutation>;
export type DeleteDoctorMutationResult = Apollo.MutationResult<DeleteDoctorMutation>;
export type DeleteDoctorMutationOptions = Apollo.BaseMutationOptions<DeleteDoctorMutation, DeleteDoctorMutationVariables>;
export const CreateDegreeDocument = gql`
    mutation createDegree($input: CreateDegreeInput!) {
  createDegree(input: $input) {
    id
    name
    abbreviations
  }
}
    `;
export type CreateDegreeMutationFn = Apollo.MutationFunction<CreateDegreeMutation, CreateDegreeMutationVariables>;

/**
 * __useCreateDegreeMutation__
 *
 * To run a mutation, you first call `useCreateDegreeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDegreeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDegreeMutation, { data, loading, error }] = useCreateDegreeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDegreeMutation(baseOptions?: Apollo.MutationHookOptions<CreateDegreeMutation, CreateDegreeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDegreeMutation, CreateDegreeMutationVariables>(CreateDegreeDocument, options);
      }
export type CreateDegreeMutationHookResult = ReturnType<typeof useCreateDegreeMutation>;
export type CreateDegreeMutationResult = Apollo.MutationResult<CreateDegreeMutation>;
export type CreateDegreeMutationOptions = Apollo.BaseMutationOptions<CreateDegreeMutation, CreateDegreeMutationVariables>;
export const UpdateDegreeDocument = gql`
    mutation updateDegree($input: UpdateDegreeInput!) {
  updateDegree(input: $input) {
    id
    name
    abbreviations
  }
}
    `;
export type UpdateDegreeMutationFn = Apollo.MutationFunction<UpdateDegreeMutation, UpdateDegreeMutationVariables>;

/**
 * __useUpdateDegreeMutation__
 *
 * To run a mutation, you first call `useUpdateDegreeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDegreeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDegreeMutation, { data, loading, error }] = useUpdateDegreeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDegreeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDegreeMutation, UpdateDegreeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDegreeMutation, UpdateDegreeMutationVariables>(UpdateDegreeDocument, options);
      }
export type UpdateDegreeMutationHookResult = ReturnType<typeof useUpdateDegreeMutation>;
export type UpdateDegreeMutationResult = Apollo.MutationResult<UpdateDegreeMutation>;
export type UpdateDegreeMutationOptions = Apollo.BaseMutationOptions<UpdateDegreeMutation, UpdateDegreeMutationVariables>;
export const CreateSpecialDocument = gql`
    mutation createSpecial($input: CreateMedicalSpecialtiesInput!) {
  createMecialSpecialties(mecicalSpecialtiesInput: $input) {
    id
    name
    discription
  }
}
    `;
export type CreateSpecialMutationFn = Apollo.MutationFunction<CreateSpecialMutation, CreateSpecialMutationVariables>;

/**
 * __useCreateSpecialMutation__
 *
 * To run a mutation, you first call `useCreateSpecialMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSpecialMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSpecialMutation, { data, loading, error }] = useCreateSpecialMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSpecialMutation(baseOptions?: Apollo.MutationHookOptions<CreateSpecialMutation, CreateSpecialMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSpecialMutation, CreateSpecialMutationVariables>(CreateSpecialDocument, options);
      }
export type CreateSpecialMutationHookResult = ReturnType<typeof useCreateSpecialMutation>;
export type CreateSpecialMutationResult = Apollo.MutationResult<CreateSpecialMutation>;
export type CreateSpecialMutationOptions = Apollo.BaseMutationOptions<CreateSpecialMutation, CreateSpecialMutationVariables>;
export const UpdateSpcialDocument = gql`
    mutation updateSpcial($input: UpdateMedicalSpecialtiesInput!) {
  updateMecialSpecialties(updateSpecialtiesInput: $input) {
    id
  }
}
    `;
export type UpdateSpcialMutationFn = Apollo.MutationFunction<UpdateSpcialMutation, UpdateSpcialMutationVariables>;

/**
 * __useUpdateSpcialMutation__
 *
 * To run a mutation, you first call `useUpdateSpcialMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSpcialMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSpcialMutation, { data, loading, error }] = useUpdateSpcialMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSpcialMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSpcialMutation, UpdateSpcialMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSpcialMutation, UpdateSpcialMutationVariables>(UpdateSpcialDocument, options);
      }
export type UpdateSpcialMutationHookResult = ReturnType<typeof useUpdateSpcialMutation>;
export type UpdateSpcialMutationResult = Apollo.MutationResult<UpdateSpcialMutation>;
export type UpdateSpcialMutationOptions = Apollo.BaseMutationOptions<UpdateSpcialMutation, UpdateSpcialMutationVariables>;
export const DeleteSpecialDocument = gql`
    mutation deleteSpecial($input: String!) {
  deleteMecialSpecialties(id: $input) {
    id
    name
    discription
  }
}
    `;
export type DeleteSpecialMutationFn = Apollo.MutationFunction<DeleteSpecialMutation, DeleteSpecialMutationVariables>;

/**
 * __useDeleteSpecialMutation__
 *
 * To run a mutation, you first call `useDeleteSpecialMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSpecialMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSpecialMutation, { data, loading, error }] = useDeleteSpecialMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteSpecialMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSpecialMutation, DeleteSpecialMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSpecialMutation, DeleteSpecialMutationVariables>(DeleteSpecialDocument, options);
      }
export type DeleteSpecialMutationHookResult = ReturnType<typeof useDeleteSpecialMutation>;
export type DeleteSpecialMutationResult = Apollo.MutationResult<DeleteSpecialMutation>;
export type DeleteSpecialMutationOptions = Apollo.BaseMutationOptions<DeleteSpecialMutation, DeleteSpecialMutationVariables>;
export const DeleteDegreeDocument = gql`
    mutation deleteDegree($input: String!) {
  deleteDegree(input: $input) {
    id
  }
}
    `;
export type DeleteDegreeMutationFn = Apollo.MutationFunction<DeleteDegreeMutation, DeleteDegreeMutationVariables>;

/**
 * __useDeleteDegreeMutation__
 *
 * To run a mutation, you first call `useDeleteDegreeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDegreeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDegreeMutation, { data, loading, error }] = useDeleteDegreeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteDegreeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDegreeMutation, DeleteDegreeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDegreeMutation, DeleteDegreeMutationVariables>(DeleteDegreeDocument, options);
      }
export type DeleteDegreeMutationHookResult = ReturnType<typeof useDeleteDegreeMutation>;
export type DeleteDegreeMutationResult = Apollo.MutationResult<DeleteDegreeMutation>;
export type DeleteDegreeMutationOptions = Apollo.BaseMutationOptions<DeleteDegreeMutation, DeleteDegreeMutationVariables>;
export const UpdateClinicDocument = gql`
    mutation updateClinic($input: UpdateMedicalFacilitiesInput!) {
  updateMedicalFacilities(createMedicalFacilitiesInput: $input) {
    id
  }
}
    `;
export type UpdateClinicMutationFn = Apollo.MutationFunction<UpdateClinicMutation, UpdateClinicMutationVariables>;

/**
 * __useUpdateClinicMutation__
 *
 * To run a mutation, you first call `useUpdateClinicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClinicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClinicMutation, { data, loading, error }] = useUpdateClinicMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateClinicMutation(baseOptions?: Apollo.MutationHookOptions<UpdateClinicMutation, UpdateClinicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateClinicMutation, UpdateClinicMutationVariables>(UpdateClinicDocument, options);
      }
export type UpdateClinicMutationHookResult = ReturnType<typeof useUpdateClinicMutation>;
export type UpdateClinicMutationResult = Apollo.MutationResult<UpdateClinicMutation>;
export type UpdateClinicMutationOptions = Apollo.BaseMutationOptions<UpdateClinicMutation, UpdateClinicMutationVariables>;
export const UpdateTypePackageByIdDocument = gql`
    mutation UpdateTypePackageById($input: UpdateTypePackageInput!) {
  updateTypePackage(input: $input) {
    id
  }
}
    `;
export type UpdateTypePackageByIdMutationFn = Apollo.MutationFunction<UpdateTypePackageByIdMutation, UpdateTypePackageByIdMutationVariables>;

/**
 * __useUpdateTypePackageByIdMutation__
 *
 * To run a mutation, you first call `useUpdateTypePackageByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTypePackageByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTypePackageByIdMutation, { data, loading, error }] = useUpdateTypePackageByIdMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTypePackageByIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTypePackageByIdMutation, UpdateTypePackageByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTypePackageByIdMutation, UpdateTypePackageByIdMutationVariables>(UpdateTypePackageByIdDocument, options);
      }
export type UpdateTypePackageByIdMutationHookResult = ReturnType<typeof useUpdateTypePackageByIdMutation>;
export type UpdateTypePackageByIdMutationResult = Apollo.MutationResult<UpdateTypePackageByIdMutation>;
export type UpdateTypePackageByIdMutationOptions = Apollo.BaseMutationOptions<UpdateTypePackageByIdMutation, UpdateTypePackageByIdMutationVariables>;
export const DeleteTypePackageByIdDocument = gql`
    mutation DeleteTypePackageById($input: String!) {
  deleteTypePackage(id: $input) {
    id
  }
}
    `;
export type DeleteTypePackageByIdMutationFn = Apollo.MutationFunction<DeleteTypePackageByIdMutation, DeleteTypePackageByIdMutationVariables>;

/**
 * __useDeleteTypePackageByIdMutation__
 *
 * To run a mutation, you first call `useDeleteTypePackageByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTypePackageByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTypePackageByIdMutation, { data, loading, error }] = useDeleteTypePackageByIdMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteTypePackageByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTypePackageByIdMutation, DeleteTypePackageByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTypePackageByIdMutation, DeleteTypePackageByIdMutationVariables>(DeleteTypePackageByIdDocument, options);
      }
export type DeleteTypePackageByIdMutationHookResult = ReturnType<typeof useDeleteTypePackageByIdMutation>;
export type DeleteTypePackageByIdMutationResult = Apollo.MutationResult<DeleteTypePackageByIdMutation>;
export type DeleteTypePackageByIdMutationOptions = Apollo.BaseMutationOptions<DeleteTypePackageByIdMutation, DeleteTypePackageByIdMutationVariables>;
export const CreateTypePackageDocument = gql`
    mutation CreateTypePackage($input: CreateTypePackageInput!) {
  createTypePackage(input: $input) {
    id
  }
}
    `;
export type CreateTypePackageMutationFn = Apollo.MutationFunction<CreateTypePackageMutation, CreateTypePackageMutationVariables>;

/**
 * __useCreateTypePackageMutation__
 *
 * To run a mutation, you first call `useCreateTypePackageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTypePackageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTypePackageMutation, { data, loading, error }] = useCreateTypePackageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTypePackageMutation(baseOptions?: Apollo.MutationHookOptions<CreateTypePackageMutation, CreateTypePackageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTypePackageMutation, CreateTypePackageMutationVariables>(CreateTypePackageDocument, options);
      }
export type CreateTypePackageMutationHookResult = ReturnType<typeof useCreateTypePackageMutation>;
export type CreateTypePackageMutationResult = Apollo.MutationResult<CreateTypePackageMutation>;
export type CreateTypePackageMutationOptions = Apollo.BaseMutationOptions<CreateTypePackageMutation, CreateTypePackageMutationVariables>;
export const DeletePackageByIdDocument = gql`
    mutation deletePackageById($input: String!) {
  deleteCarePackage(input: $input) {
    id
  }
}
    `;
export type DeletePackageByIdMutationFn = Apollo.MutationFunction<DeletePackageByIdMutation, DeletePackageByIdMutationVariables>;

/**
 * __useDeletePackageByIdMutation__
 *
 * To run a mutation, you first call `useDeletePackageByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePackageByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePackageByIdMutation, { data, loading, error }] = useDeletePackageByIdMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePackageByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeletePackageByIdMutation, DeletePackageByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePackageByIdMutation, DeletePackageByIdMutationVariables>(DeletePackageByIdDocument, options);
      }
export type DeletePackageByIdMutationHookResult = ReturnType<typeof useDeletePackageByIdMutation>;
export type DeletePackageByIdMutationResult = Apollo.MutationResult<DeletePackageByIdMutation>;
export type DeletePackageByIdMutationOptions = Apollo.BaseMutationOptions<DeletePackageByIdMutation, DeletePackageByIdMutationVariables>;
export const UpdatePackageByIdDocument = gql`
    mutation updatePackageById($input: UpdateCarePackageInput!) {
  updateCarePackage(input: $input) {
    id
  }
}
    `;
export type UpdatePackageByIdMutationFn = Apollo.MutationFunction<UpdatePackageByIdMutation, UpdatePackageByIdMutationVariables>;

/**
 * __useUpdatePackageByIdMutation__
 *
 * To run a mutation, you first call `useUpdatePackageByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePackageByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePackageByIdMutation, { data, loading, error }] = useUpdatePackageByIdMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePackageByIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePackageByIdMutation, UpdatePackageByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePackageByIdMutation, UpdatePackageByIdMutationVariables>(UpdatePackageByIdDocument, options);
      }
export type UpdatePackageByIdMutationHookResult = ReturnType<typeof useUpdatePackageByIdMutation>;
export type UpdatePackageByIdMutationResult = Apollo.MutationResult<UpdatePackageByIdMutation>;
export type UpdatePackageByIdMutationOptions = Apollo.BaseMutationOptions<UpdatePackageByIdMutation, UpdatePackageByIdMutationVariables>;
export const CreatePackageByIdDocument = gql`
    mutation CreatePackageById($input: createCarePackageInput!) {
  createCarePackage(input: $input) {
    id
  }
}
    `;
export type CreatePackageByIdMutationFn = Apollo.MutationFunction<CreatePackageByIdMutation, CreatePackageByIdMutationVariables>;

/**
 * __useCreatePackageByIdMutation__
 *
 * To run a mutation, you first call `useCreatePackageByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePackageByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPackageByIdMutation, { data, loading, error }] = useCreatePackageByIdMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePackageByIdMutation(baseOptions?: Apollo.MutationHookOptions<CreatePackageByIdMutation, CreatePackageByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePackageByIdMutation, CreatePackageByIdMutationVariables>(CreatePackageByIdDocument, options);
      }
export type CreatePackageByIdMutationHookResult = ReturnType<typeof useCreatePackageByIdMutation>;
export type CreatePackageByIdMutationResult = Apollo.MutationResult<CreatePackageByIdMutation>;
export type CreatePackageByIdMutationOptions = Apollo.BaseMutationOptions<CreatePackageByIdMutation, CreatePackageByIdMutationVariables>;
export const UpdateRegisterDocument = gql`
    mutation updateRegister($input: UpdateRegisterInput!) {
  updateRegister(input: $input) {
    id
    state
  }
}
    `;
export type UpdateRegisterMutationFn = Apollo.MutationFunction<UpdateRegisterMutation, UpdateRegisterMutationVariables>;

/**
 * __useUpdateRegisterMutation__
 *
 * To run a mutation, you first call `useUpdateRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRegisterMutation, { data, loading, error }] = useUpdateRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateRegisterMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRegisterMutation, UpdateRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRegisterMutation, UpdateRegisterMutationVariables>(UpdateRegisterDocument, options);
      }
export type UpdateRegisterMutationHookResult = ReturnType<typeof useUpdateRegisterMutation>;
export type UpdateRegisterMutationResult = Apollo.MutationResult<UpdateRegisterMutation>;
export type UpdateRegisterMutationOptions = Apollo.BaseMutationOptions<UpdateRegisterMutation, UpdateRegisterMutationVariables>;
export const CheckLoginQueryDocument = gql`
    query CheckLoginQuery {
  checklogin {
    id
    linkImage {
      filename
      type
      url
    }
    email
    username
    password
    roles
  }
}
    `;

/**
 * __useCheckLoginQueryQuery__
 *
 * To run a query within a React component, call `useCheckLoginQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckLoginQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckLoginQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useCheckLoginQueryQuery(baseOptions?: Apollo.QueryHookOptions<CheckLoginQueryQuery, CheckLoginQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckLoginQueryQuery, CheckLoginQueryQueryVariables>(CheckLoginQueryDocument, options);
      }
export function useCheckLoginQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckLoginQueryQuery, CheckLoginQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckLoginQueryQuery, CheckLoginQueryQueryVariables>(CheckLoginQueryDocument, options);
        }
export type CheckLoginQueryQueryHookResult = ReturnType<typeof useCheckLoginQueryQuery>;
export type CheckLoginQueryLazyQueryHookResult = ReturnType<typeof useCheckLoginQueryLazyQuery>;
export type CheckLoginQueryQueryResult = Apollo.QueryResult<CheckLoginQueryQuery, CheckLoginQueryQueryVariables>;
export const GetSettingDocument = gql`
    query getSetting {
  getSetting {
    defaultLang
  }
}
    `;

/**
 * __useGetSettingQuery__
 *
 * To run a query within a React component, call `useGetSettingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSettingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSettingQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSettingQuery(baseOptions?: Apollo.QueryHookOptions<GetSettingQuery, GetSettingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSettingQuery, GetSettingQueryVariables>(GetSettingDocument, options);
      }
export function useGetSettingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSettingQuery, GetSettingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSettingQuery, GetSettingQueryVariables>(GetSettingDocument, options);
        }
export type GetSettingQueryHookResult = ReturnType<typeof useGetSettingQuery>;
export type GetSettingLazyQueryHookResult = ReturnType<typeof useGetSettingLazyQuery>;
export type GetSettingQueryResult = Apollo.QueryResult<GetSettingQuery, GetSettingQueryVariables>;
export const GetGeneralInforDocument = gql`
    query GetGeneralInfor {
  getGeneralInfor {
    company
    address
    copyrigth
    email
    hotline
    liscenceBusiness
    liscenceOparating
    ID
    logoFooter {
      filename
      url
      type
    }
    logoHeader {
      filename
      url
    }
  }
}
    `;

/**
 * __useGetGeneralInforQuery__
 *
 * To run a query within a React component, call `useGetGeneralInforQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGeneralInforQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGeneralInforQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGeneralInforQuery(baseOptions?: Apollo.QueryHookOptions<GetGeneralInforQuery, GetGeneralInforQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGeneralInforQuery, GetGeneralInforQueryVariables>(GetGeneralInforDocument, options);
      }
export function useGetGeneralInforLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGeneralInforQuery, GetGeneralInforQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGeneralInforQuery, GetGeneralInforQueryVariables>(GetGeneralInforDocument, options);
        }
export type GetGeneralInforQueryHookResult = ReturnType<typeof useGetGeneralInforQuery>;
export type GetGeneralInforLazyQueryHookResult = ReturnType<typeof useGetGeneralInforLazyQuery>;
export type GetGeneralInforQueryResult = Apollo.QueryResult<GetGeneralInforQuery, GetGeneralInforQueryVariables>;
export const GetAllUserDocument = gql`
    query GetAllUser {
  users {
    id
    email
    username
    password
    linkImage {
      filename
      type
      url
    }
    roles
    customer {
      id
      fullname
      userId
    }
    active
  }
}
    `;

/**
 * __useGetAllUserQuery__
 *
 * To run a query within a React component, call `useGetAllUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUserQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
      }
export function useGetAllUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
        }
export type GetAllUserQueryHookResult = ReturnType<typeof useGetAllUserQuery>;
export type GetAllUserLazyQueryHookResult = ReturnType<typeof useGetAllUserLazyQuery>;
export type GetAllUserQueryResult = Apollo.QueryResult<GetAllUserQuery, GetAllUserQueryVariables>;
export const GetCustomerDocument = gql`
    query GetCustomer {
  getcustomers {
    id
    fullname
    userId
    profile {
      address
      customerId
      dataOfBirth
      email
      ethnic
      fullname
      gender
      id
      relationship
      numberPhone
      medicalInsurance
      job
      identity
    }
  }
}
    `;

/**
 * __useGetCustomerQuery__
 *
 * To run a query within a React component, call `useGetCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCustomerQuery(baseOptions?: Apollo.QueryHookOptions<GetCustomerQuery, GetCustomerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomerQuery, GetCustomerQueryVariables>(GetCustomerDocument, options);
      }
export function useGetCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomerQuery, GetCustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomerQuery, GetCustomerQueryVariables>(GetCustomerDocument, options);
        }
export type GetCustomerQueryHookResult = ReturnType<typeof useGetCustomerQuery>;
export type GetCustomerLazyQueryHookResult = ReturnType<typeof useGetCustomerLazyQuery>;
export type GetCustomerQueryResult = Apollo.QueryResult<GetCustomerQuery, GetCustomerQueryVariables>;
export const GetDoctorsDocument = gql`
    query GetDoctors {
  getDoctors {
    id
    name
    email
    numberPhone
    avatar {
      filename
      type
      url
    }
    facilitiesId
    medicalSpecialties {
      id
      name
      discription
    }
    userId
    degree {
      id
      name
      abbreviations
    }
  }
}
    `;

/**
 * __useGetDoctorsQuery__
 *
 * To run a query within a React component, call `useGetDoctorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDoctorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDoctorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDoctorsQuery(baseOptions?: Apollo.QueryHookOptions<GetDoctorsQuery, GetDoctorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDoctorsQuery, GetDoctorsQueryVariables>(GetDoctorsDocument, options);
      }
export function useGetDoctorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDoctorsQuery, GetDoctorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDoctorsQuery, GetDoctorsQueryVariables>(GetDoctorsDocument, options);
        }
export type GetDoctorsQueryHookResult = ReturnType<typeof useGetDoctorsQuery>;
export type GetDoctorsLazyQueryHookResult = ReturnType<typeof useGetDoctorsLazyQuery>;
export type GetDoctorsQueryResult = Apollo.QueryResult<GetDoctorsQuery, GetDoctorsQueryVariables>;
export const GetMedicalfacilitiesDocument = gql`
    query getMedicalfacilities {
  getMedicalfacilities {
    id
    companyName
    discription
    adress
    email
    numberPhone
    carePackage {
      id
      image {
        filename
        type
        url
      }
      discription
      medicalFacilitiesId
      name
      price
      typePackageId
    }
    doctors {
      id
      userId
      name
      avatar {
        filename
        type
        url
      }
      degree {
        id
        name
        abbreviations
      }
      email
      evaluate
      numberPhone
    }
    image {
      filename
      type
      url
    }
  }
}
    `;

/**
 * __useGetMedicalfacilitiesQuery__
 *
 * To run a query within a React component, call `useGetMedicalfacilitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMedicalfacilitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMedicalfacilitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMedicalfacilitiesQuery(baseOptions?: Apollo.QueryHookOptions<GetMedicalfacilitiesQuery, GetMedicalfacilitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMedicalfacilitiesQuery, GetMedicalfacilitiesQueryVariables>(GetMedicalfacilitiesDocument, options);
      }
export function useGetMedicalfacilitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMedicalfacilitiesQuery, GetMedicalfacilitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMedicalfacilitiesQuery, GetMedicalfacilitiesQueryVariables>(GetMedicalfacilitiesDocument, options);
        }
export type GetMedicalfacilitiesQueryHookResult = ReturnType<typeof useGetMedicalfacilitiesQuery>;
export type GetMedicalfacilitiesLazyQueryHookResult = ReturnType<typeof useGetMedicalfacilitiesLazyQuery>;
export type GetMedicalfacilitiesQueryResult = Apollo.QueryResult<GetMedicalfacilitiesQuery, GetMedicalfacilitiesQueryVariables>;
export const GetUserMedicalNonDocument = gql`
    query getUserMedicalNon {
  getUserMedicalNon {
    id
    username
  }
}
    `;

/**
 * __useGetUserMedicalNonQuery__
 *
 * To run a query within a React component, call `useGetUserMedicalNonQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserMedicalNonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserMedicalNonQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserMedicalNonQuery(baseOptions?: Apollo.QueryHookOptions<GetUserMedicalNonQuery, GetUserMedicalNonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserMedicalNonQuery, GetUserMedicalNonQueryVariables>(GetUserMedicalNonDocument, options);
      }
export function useGetUserMedicalNonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserMedicalNonQuery, GetUserMedicalNonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserMedicalNonQuery, GetUserMedicalNonQueryVariables>(GetUserMedicalNonDocument, options);
        }
export type GetUserMedicalNonQueryHookResult = ReturnType<typeof useGetUserMedicalNonQuery>;
export type GetUserMedicalNonLazyQueryHookResult = ReturnType<typeof useGetUserMedicalNonLazyQuery>;
export type GetUserMedicalNonQueryResult = Apollo.QueryResult<GetUserMedicalNonQuery, GetUserMedicalNonQueryVariables>;
export const DegreesSellectDocument = gql`
    query degreesSellect {
  getAllDegree {
    id
    name
  }
}
    `;

/**
 * __useDegreesSellectQuery__
 *
 * To run a query within a React component, call `useDegreesSellectQuery` and pass it any options that fit your needs.
 * When your component renders, `useDegreesSellectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDegreesSellectQuery({
 *   variables: {
 *   },
 * });
 */
export function useDegreesSellectQuery(baseOptions?: Apollo.QueryHookOptions<DegreesSellectQuery, DegreesSellectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DegreesSellectQuery, DegreesSellectQueryVariables>(DegreesSellectDocument, options);
      }
export function useDegreesSellectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DegreesSellectQuery, DegreesSellectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DegreesSellectQuery, DegreesSellectQueryVariables>(DegreesSellectDocument, options);
        }
export type DegreesSellectQueryHookResult = ReturnType<typeof useDegreesSellectQuery>;
export type DegreesSellectLazyQueryHookResult = ReturnType<typeof useDegreesSellectLazyQuery>;
export type DegreesSellectQueryResult = Apollo.QueryResult<DegreesSellectQuery, DegreesSellectQueryVariables>;
export const GetClinicsSelectDocument = gql`
    query getClinicsSelect {
  getMedicalfacilities {
    id
    companyName
  }
}
    `;

/**
 * __useGetClinicsSelectQuery__
 *
 * To run a query within a React component, call `useGetClinicsSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClinicsSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClinicsSelectQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetClinicsSelectQuery(baseOptions?: Apollo.QueryHookOptions<GetClinicsSelectQuery, GetClinicsSelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClinicsSelectQuery, GetClinicsSelectQueryVariables>(GetClinicsSelectDocument, options);
      }
export function useGetClinicsSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClinicsSelectQuery, GetClinicsSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClinicsSelectQuery, GetClinicsSelectQueryVariables>(GetClinicsSelectDocument, options);
        }
export type GetClinicsSelectQueryHookResult = ReturnType<typeof useGetClinicsSelectQuery>;
export type GetClinicsSelectLazyQueryHookResult = ReturnType<typeof useGetClinicsSelectLazyQuery>;
export type GetClinicsSelectQueryResult = Apollo.QueryResult<GetClinicsSelectQuery, GetClinicsSelectQueryVariables>;
export const GetSpecicalsSelectDocument = gql`
    query getSpecicalsSelect {
  getAllMecialSpecialties {
    id
    name
    discription
  }
}
    `;

/**
 * __useGetSpecicalsSelectQuery__
 *
 * To run a query within a React component, call `useGetSpecicalsSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpecicalsSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpecicalsSelectQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSpecicalsSelectQuery(baseOptions?: Apollo.QueryHookOptions<GetSpecicalsSelectQuery, GetSpecicalsSelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpecicalsSelectQuery, GetSpecicalsSelectQueryVariables>(GetSpecicalsSelectDocument, options);
      }
export function useGetSpecicalsSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpecicalsSelectQuery, GetSpecicalsSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpecicalsSelectQuery, GetSpecicalsSelectQueryVariables>(GetSpecicalsSelectDocument, options);
        }
export type GetSpecicalsSelectQueryHookResult = ReturnType<typeof useGetSpecicalsSelectQuery>;
export type GetSpecicalsSelectLazyQueryHookResult = ReturnType<typeof useGetSpecicalsSelectLazyQuery>;
export type GetSpecicalsSelectQueryResult = Apollo.QueryResult<GetSpecicalsSelectQuery, GetSpecicalsSelectQueryVariables>;
export const GetUserSelectDocument = gql`
    query getUserSelect($input: UserSelectInput!) {
  getUserSelect(roleInput: $input) {
    id
    username
    doctor {
      id
    }
  }
}
    `;

/**
 * __useGetUserSelectQuery__
 *
 * To run a query within a React component, call `useGetUserSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserSelectQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUserSelectQuery(baseOptions: Apollo.QueryHookOptions<GetUserSelectQuery, GetUserSelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserSelectQuery, GetUserSelectQueryVariables>(GetUserSelectDocument, options);
      }
export function useGetUserSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserSelectQuery, GetUserSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserSelectQuery, GetUserSelectQueryVariables>(GetUserSelectDocument, options);
        }
export type GetUserSelectQueryHookResult = ReturnType<typeof useGetUserSelectQuery>;
export type GetUserSelectLazyQueryHookResult = ReturnType<typeof useGetUserSelectLazyQuery>;
export type GetUserSelectQueryResult = Apollo.QueryResult<GetUserSelectQuery, GetUserSelectQueryVariables>;
export const GetAllDregreeDocument = gql`
    query getAllDregree {
  getAllDegree {
    id
    name
    abbreviations
  }
}
    `;

/**
 * __useGetAllDregreeQuery__
 *
 * To run a query within a React component, call `useGetAllDregreeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDregreeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDregreeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllDregreeQuery(baseOptions?: Apollo.QueryHookOptions<GetAllDregreeQuery, GetAllDregreeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDregreeQuery, GetAllDregreeQueryVariables>(GetAllDregreeDocument, options);
      }
export function useGetAllDregreeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDregreeQuery, GetAllDregreeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDregreeQuery, GetAllDregreeQueryVariables>(GetAllDregreeDocument, options);
        }
export type GetAllDregreeQueryHookResult = ReturnType<typeof useGetAllDregreeQuery>;
export type GetAllDregreeLazyQueryHookResult = ReturnType<typeof useGetAllDregreeLazyQuery>;
export type GetAllDregreeQueryResult = Apollo.QueryResult<GetAllDregreeQuery, GetAllDregreeQueryVariables>;
export const GetAllSpecialDocument = gql`
    query getAllSpecial {
  getAllMecialSpecialties {
    id
    name
    discription
  }
}
    `;

/**
 * __useGetAllSpecialQuery__
 *
 * To run a query within a React component, call `useGetAllSpecialQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSpecialQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSpecialQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSpecialQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSpecialQuery, GetAllSpecialQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSpecialQuery, GetAllSpecialQueryVariables>(GetAllSpecialDocument, options);
      }
export function useGetAllSpecialLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSpecialQuery, GetAllSpecialQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSpecialQuery, GetAllSpecialQueryVariables>(GetAllSpecialDocument, options);
        }
export type GetAllSpecialQueryHookResult = ReturnType<typeof useGetAllSpecialQuery>;
export type GetAllSpecialLazyQueryHookResult = ReturnType<typeof useGetAllSpecialLazyQuery>;
export type GetAllSpecialQueryResult = Apollo.QueryResult<GetAllSpecialQuery, GetAllSpecialQueryVariables>;
export const GetClinicByUserIdDocument = gql`
    query getClinicByUserId($input: String!) {
  getClinicByUserId(id: $input) {
    id
    companyName
    email
    numberPhone
    adress
    discription
    image {
      filename
      type
      url
    }
    lat
    lng
    doctors {
      id
      name
      numberPhone
      email
      degree {
        id
        name
        abbreviations
      }
      avatar {
        filename
        type
        url
      }
      medicalSpecialties {
        name
      }
    }
  }
}
    `;

/**
 * __useGetClinicByUserIdQuery__
 *
 * To run a query within a React component, call `useGetClinicByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClinicByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClinicByUserIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetClinicByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetClinicByUserIdQuery, GetClinicByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClinicByUserIdQuery, GetClinicByUserIdQueryVariables>(GetClinicByUserIdDocument, options);
      }
export function useGetClinicByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClinicByUserIdQuery, GetClinicByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClinicByUserIdQuery, GetClinicByUserIdQueryVariables>(GetClinicByUserIdDocument, options);
        }
export type GetClinicByUserIdQueryHookResult = ReturnType<typeof useGetClinicByUserIdQuery>;
export type GetClinicByUserIdLazyQueryHookResult = ReturnType<typeof useGetClinicByUserIdLazyQuery>;
export type GetClinicByUserIdQueryResult = Apollo.QueryResult<GetClinicByUserIdQuery, GetClinicByUserIdQueryVariables>;
export const GetDoctorByIdDocument = gql`
    query getDoctorById($input: String!) {
  getDoctorbyId(id: $input) {
    avatar {
      filename
      type
      url
    }
    degreeId
    email
    facilitiesId
    id
    idSpecialist
    name
    numberPhone
    userId
  }
}
    `;

/**
 * __useGetDoctorByIdQuery__
 *
 * To run a query within a React component, call `useGetDoctorByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDoctorByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDoctorByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetDoctorByIdQuery(baseOptions: Apollo.QueryHookOptions<GetDoctorByIdQuery, GetDoctorByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDoctorByIdQuery, GetDoctorByIdQueryVariables>(GetDoctorByIdDocument, options);
      }
export function useGetDoctorByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDoctorByIdQuery, GetDoctorByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDoctorByIdQuery, GetDoctorByIdQueryVariables>(GetDoctorByIdDocument, options);
        }
export type GetDoctorByIdQueryHookResult = ReturnType<typeof useGetDoctorByIdQuery>;
export type GetDoctorByIdLazyQueryHookResult = ReturnType<typeof useGetDoctorByIdLazyQuery>;
export type GetDoctorByIdQueryResult = Apollo.QueryResult<GetDoctorByIdQuery, GetDoctorByIdQueryVariables>;
export const GetDoctorByUserIdDocument = gql`
    query getDoctorByUserId($input: String!) {
  getDoctorbyUserId(id: $input) {
    id
    name
    numberPhone
    email
    avatar {
      filename
      type
      url
    }
    degree {
      id
      abbreviations
      name
    }
    degreeId
    evaluate
    facilitiesId
    medicalSpecialties {
      id
      name
      discription
    }
    userId
    idSpecialist
  }
}
    `;

/**
 * __useGetDoctorByUserIdQuery__
 *
 * To run a query within a React component, call `useGetDoctorByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDoctorByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDoctorByUserIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetDoctorByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetDoctorByUserIdQuery, GetDoctorByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDoctorByUserIdQuery, GetDoctorByUserIdQueryVariables>(GetDoctorByUserIdDocument, options);
      }
export function useGetDoctorByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDoctorByUserIdQuery, GetDoctorByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDoctorByUserIdQuery, GetDoctorByUserIdQueryVariables>(GetDoctorByUserIdDocument, options);
        }
export type GetDoctorByUserIdQueryHookResult = ReturnType<typeof useGetDoctorByUserIdQuery>;
export type GetDoctorByUserIdLazyQueryHookResult = ReturnType<typeof useGetDoctorByUserIdLazyQuery>;
export type GetDoctorByUserIdQueryResult = Apollo.QueryResult<GetDoctorByUserIdQuery, GetDoctorByUserIdQueryVariables>;
export const GetAllTypePackedDocument = gql`
    query getAllTypePacked {
  getAllTypePackage {
    id
    typeName
  }
}
    `;

/**
 * __useGetAllTypePackedQuery__
 *
 * To run a query within a React component, call `useGetAllTypePackedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTypePackedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTypePackedQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTypePackedQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTypePackedQuery, GetAllTypePackedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTypePackedQuery, GetAllTypePackedQueryVariables>(GetAllTypePackedDocument, options);
      }
export function useGetAllTypePackedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTypePackedQuery, GetAllTypePackedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTypePackedQuery, GetAllTypePackedQueryVariables>(GetAllTypePackedDocument, options);
        }
export type GetAllTypePackedQueryHookResult = ReturnType<typeof useGetAllTypePackedQuery>;
export type GetAllTypePackedLazyQueryHookResult = ReturnType<typeof useGetAllTypePackedLazyQuery>;
export type GetAllTypePackedQueryResult = Apollo.QueryResult<GetAllTypePackedQuery, GetAllTypePackedQueryVariables>;
export const GetPackageByClinicIdDocument = gql`
    query GetPackageByClinicId($input: String!) {
  getCarePackagesByClinicId(id: $input) {
    id
    discription
    typePackageId
    image {
      filename
      type
      url
    }
    medicalFacilitiesId
    name
    price
  }
}
    `;

/**
 * __useGetPackageByClinicIdQuery__
 *
 * To run a query within a React component, call `useGetPackageByClinicIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPackageByClinicIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPackageByClinicIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPackageByClinicIdQuery(baseOptions: Apollo.QueryHookOptions<GetPackageByClinicIdQuery, GetPackageByClinicIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPackageByClinicIdQuery, GetPackageByClinicIdQueryVariables>(GetPackageByClinicIdDocument, options);
      }
export function useGetPackageByClinicIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPackageByClinicIdQuery, GetPackageByClinicIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPackageByClinicIdQuery, GetPackageByClinicIdQueryVariables>(GetPackageByClinicIdDocument, options);
        }
export type GetPackageByClinicIdQueryHookResult = ReturnType<typeof useGetPackageByClinicIdQuery>;
export type GetPackageByClinicIdLazyQueryHookResult = ReturnType<typeof useGetPackageByClinicIdLazyQuery>;
export type GetPackageByClinicIdQueryResult = Apollo.QueryResult<GetPackageByClinicIdQuery, GetPackageByClinicIdQueryVariables>;
export const GetListPackageByUserIdDocument = gql`
    query GetListPackageByUserID($input: String!) {
  getClinicByUserId(id: $input) {
    id
    carePackage {
      id
      discription
      image {
        filename
        type
        url
      }
      medicalFacilitiesId
      typePackageId
      price
      name
      register {
        id
        date
        packegeId
        profileId
        state
        profile {
          id
          address
          customerId
          dataOfBirth
          email
          ethnic
          fullname
          gender
          identity
          job
          medicalInsurance
          numberPhone
          relationship
        }
      }
    }
  }
}
    `;

/**
 * __useGetListPackageByUserIdQuery__
 *
 * To run a query within a React component, call `useGetListPackageByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListPackageByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListPackageByUserIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetListPackageByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetListPackageByUserIdQuery, GetListPackageByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListPackageByUserIdQuery, GetListPackageByUserIdQueryVariables>(GetListPackageByUserIdDocument, options);
      }
export function useGetListPackageByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListPackageByUserIdQuery, GetListPackageByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListPackageByUserIdQuery, GetListPackageByUserIdQueryVariables>(GetListPackageByUserIdDocument, options);
        }
export type GetListPackageByUserIdQueryHookResult = ReturnType<typeof useGetListPackageByUserIdQuery>;
export type GetListPackageByUserIdLazyQueryHookResult = ReturnType<typeof useGetListPackageByUserIdLazyQuery>;
export type GetListPackageByUserIdQueryResult = Apollo.QueryResult<GetListPackageByUserIdQuery, GetListPackageByUserIdQueryVariables>;