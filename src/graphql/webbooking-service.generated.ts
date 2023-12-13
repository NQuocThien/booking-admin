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

export type CertificateInput = {
  associationName: Scalars['String']['input'];
  dateEnd?: InputMaybe<Scalars['DateTime']['input']>;
  dateStart: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  state?: InputMaybe<Scalars['Boolean']['input']>;
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
  certificate?: InputMaybe<CertificateInput>;
  education?: InputMaybe<EducationInput>;
  experience?: InputMaybe<ExperienceInput>;
  introduce?: InputMaybe<Scalars['String']['input']>;
  prize?: InputMaybe<PrizeInput>;
  skills?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Customer = {
  __typename?: 'Customer';
  fullname?: Maybe<Scalars['String']['output']>;
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
  avatar?: Maybe<LinkImage>;
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

export type EducationInput = {
  dateEnd?: InputMaybe<Scalars['DateTime']['input']>;
  dateStart: Scalars['DateTime']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  major: Scalars['String']['input'];
  schoolName: Scalars['String']['input'];
  state: Scalars['Boolean']['input'];
};

export type ExperienceInput = {
  companyName: Scalars['String']['input'];
  dateEnd?: InputMaybe<Scalars['DateTime']['input']>;
  dateStart: Scalars['DateTime']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  position: Scalars['String']['input'];
  state?: InputMaybe<Scalars['Boolean']['input']>;
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
  companyName: Scalars['String']['output'];
  discription: Scalars['String']['output'];
  doctors?: Maybe<Array<Doctor>>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: LinkImage;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  numberPhone?: Maybe<Scalars['String']['output']>;
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
  createDegree: Degree;
  createDoctor: Doctor;
  createMecialSpecialties: MedicalSpecialties;
  createMedicalFacilities: MedicalFacilities;
  createProfile: Profile;
  createcustomer: Customer;
  deleteDegree: Degree;
  deleteDoctor: Doctor;
  deleteMecialSpecialties: MedicalSpecialties;
  deleteUser: User;
  login: LoginRespone;
  logout: LogoutUser;
  removeProfile: Profile;
  signup: User;
  updateDegree: Degree;
  updateDoctor: Doctor;
  updateGeneralInfor: GeneralInfor;
  updateMecialSpecialties: MedicalSpecialties;
  updateProfile: Profile;
  updateRoles: User;
  updateSetting: Setting;
  updateUser: User;
  updateUserWithPass: User;
};


export type MutationActiveUserArgs = {
  id: Scalars['String']['input'];
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
  createProfileInput: CreateProfileInput;
};


export type MutationCreatecustomerArgs = {
  createCustomerInput: CreateCustomerInput;
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


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRemoveProfileArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSignupArgs = {
  createUserInput: CreateUserInput;
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


export type MutationUpdateProfileArgs = {
  updateProfileInput: UpdateProfileInput;
};


export type MutationUpdateRolesArgs = {
  updateRolesInput: UpdateRolesInput;
};


export type MutationUpdateSettingArgs = {
  updateSettingInput: UpdateSettingInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateUserWithPassArgs = {
  updateUserInput: UpdateUserWithPassInput;
};

export type PrizeInput = {
  associationName: Scalars['String']['input'];
  date: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['ID']['output'];
  introduce?: Maybe<Scalars['String']['output']>;
  skills?: Maybe<Scalars['String']['output']>;
  skills1?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Array<User>>;
  userId: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  checklogin: User;
  getAllDegree: Array<Degree>;
  getAllMecialSpecialties: Array<MedicalSpecialties>;
  getAllProfile: Array<Profile>;
  getDoctors: Array<Doctor>;
  getGeneralInfor: GeneralInfor;
  getMedicalfacilities: Array<MedicalFacilities>;
  getSetting: Setting;
  getUser: User;
  getUserMedicalNon: Array<User>;
  getUserSelect: Array<User>;
  getcustomers: Array<Customer>;
  users: Array<User>;
};


export type QueryGetUserArgs = {
  username: Scalars['String']['input'];
};


export type QueryGetUserSelectArgs = {
  roleInput: UserSelectInput;
};

export type Setting = {
  __typename?: 'Setting';
  defaultLang: Scalars['String']['output'];
};

export type UpdateDegreeInput = {
  abbreviations: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdateDoctorInput = {
  avatar?: InputMaybe<LinkImageInput>;
  degreeId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  facilitiesId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  idSpecialist?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  numberPhone?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMedicalSpecialtiesInput = {
  discription: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdateProfileInput = {
  certificate?: InputMaybe<CertificateInput>;
  education?: InputMaybe<EducationInput>;
  experience?: InputMaybe<ExperienceInput>;
  id: Scalars['Int']['input'];
  introduce?: InputMaybe<Scalars['String']['input']>;
  prize?: InputMaybe<PrizeInput>;
  skills?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
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

export type LoginMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginRespone', access_token: string, user: { __typename?: 'User', email: string, username: string } } };

export type UdateUserByIdMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UdateUserByIdMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string } };

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

export type CheckLoginQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckLoginQueryQuery = { __typename?: 'Query', checklogin: { __typename?: 'User', id: string, email: string, username: string, password: string, roles?: Array<string> | null, linkImage?: { __typename?: 'LinkImage', filename: string, type: string, url: string } | null } };

export type GetSettingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSettingQuery = { __typename?: 'Query', getSetting: { __typename?: 'Setting', defaultLang: string } };

export type GetGeneralInforQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGeneralInforQuery = { __typename?: 'Query', getGeneralInfor: { __typename?: 'GeneralInfor', company: string, address: string, copyrigth: string, email: string, hotline: string, liscenceBusiness: string, liscenceOparating: string, ID?: string | null, logoFooter: { __typename?: 'LinkImage', filename: string, url: string, type: string }, logoHeader: { __typename?: 'LinkImage', filename: string, url: string } } };

export type GetAllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, username: string, password: string, roles?: Array<string> | null, active?: boolean | null, linkImage?: { __typename?: 'LinkImage', filename: string, type: string, url: string } | null, customer?: { __typename?: 'Customer', userId: string } | null }> };

export type GetCustomerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomerQuery = { __typename?: 'Query', getcustomers: Array<{ __typename?: 'Customer', fullname?: string | null, userId: string }> };

export type GetDoctorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDoctorsQuery = { __typename?: 'Query', getDoctors: Array<{ __typename?: 'Doctor', id: string, name: string, email: string, numberPhone: string, facilitiesId?: string | null, userId?: string | null, avatar?: { __typename?: 'LinkImage', filename: string, type: string, url: string } | null, medicalSpecialties?: { __typename?: 'MedicalSpecialties', id: string, name: string, discription: string } | null, degree?: { __typename?: 'Degree', id: string, name: string, abbreviations: string } | null }> };

export type GetMedicalfacilitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMedicalfacilitiesQuery = { __typename?: 'Query', getMedicalfacilities: Array<{ __typename?: 'MedicalFacilities', id: string, companyName: string, discription: string, adress: string, doctors?: Array<{ __typename?: 'Doctor', id: string, userId?: string | null, name: string, email: string, evaluate?: number | null, numberPhone: string, avatar?: { __typename?: 'LinkImage', filename: string, type: string, url: string } | null, degree?: { __typename?: 'Degree', id: string, name: string, abbreviations: string } | null }> | null, image: { __typename?: 'LinkImage', filename: string, type: string, url: string } }> };

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


export type GetUserSelectQuery = { __typename?: 'Query', getUserSelect: Array<{ __typename?: 'User', id: string, username: string }> };

export type GetAllDregreeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDregreeQuery = { __typename?: 'Query', getAllDegree: Array<{ __typename?: 'Degree', id: string, name: string, abbreviations: string }> };

export type GetAllSpecialQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSpecialQuery = { __typename?: 'Query', getAllMecialSpecialties: Array<{ __typename?: 'MedicalSpecialties', id: string, name: string, discription: string }> };


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
    fullname
    userId
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