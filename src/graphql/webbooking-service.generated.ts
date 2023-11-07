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

export type Mutation = {
  __typename?: 'Mutation';
  createProfile: Profile;
  deleteUser: User;
  login: LoginRespone;
  logout: LogoutUser;
  removeProfile: Profile;
  signup: User;
  updateGeneralInfor: GeneralInfor;
  updateProfile: Profile;
  updateSetting: Setting;
  updateUser: User;
  updateUserWithPass: User;
};


export type MutationCreateProfileArgs = {
  createProfileInput: CreateProfileInput;
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


export type MutationUpdateGeneralInforArgs = {
  updateGeneralInforInput: GeneralInforUpdateInput;
};


export type MutationUpdateProfileArgs = {
  updateProfileInput: UpdateProfileInput;
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
  getAllProfile: Array<Profile>;
  getGeneralInfor: GeneralInfor;
  getSetting: Setting;
  getUser: User;
  users: Array<User>;
};


export type QueryGetUserArgs = {
  username: Scalars['String']['input'];
};

export type Setting = {
  __typename?: 'Setting';
  defaultLang: Scalars['String']['output'];
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

export type UpdateSettingInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateUserInput = {
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  id: Scalars['String']['input'];
  linkImage?: InputMaybe<LinkImageInput>;
  type: Scalars['Float']['input'];
  username: Scalars['String']['input'];
};

export type UpdateUserWithPassInput = {
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  id: Scalars['String']['input'];
  linkImage?: InputMaybe<LinkImageInput>;
  password: Scalars['String']['input'];
  passwordNew: Scalars['String']['input'];
  type: Scalars['Float']['input'];
  username: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  linkImage?: Maybe<LinkImage>;
  password: Scalars['String']['output'];
  profile?: Maybe<Profile>;
  roles?: Maybe<Array<Scalars['String']['output']>>;
  type: Scalars['Float']['output'];
  username: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginRespone', access_token: string, user: { __typename?: 'User', fullname: string, email: string, type: number, username: string } } };

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

export type CheckLoginQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckLoginQueryQuery = { __typename?: 'Query', checklogin: { __typename?: 'User', id: string, fullname: string, email: string, username: string, password: string, type: number, roles?: Array<string> | null, linkImage?: { __typename?: 'LinkImage', filename: string, type: string, url: string } | null } };

export type GetSettingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSettingQuery = { __typename?: 'Query', getSetting: { __typename?: 'Setting', defaultLang: string } };

export type GetGeneralInforQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGeneralInforQuery = { __typename?: 'Query', getGeneralInfor: { __typename?: 'GeneralInfor', company: string, address: string, copyrigth: string, email: string, hotline: string, liscenceBusiness: string, liscenceOparating: string, ID?: string | null, logoFooter: { __typename?: 'LinkImage', filename: string, url: string, type: string }, logoHeader: { __typename?: 'LinkImage', filename: string, url: string, type: string } } };


export const LoginDocument = gql`
    mutation login($input: LoginUserInput!) {
  login(loginUserInput: $input) {
    access_token
    user {
      fullname
      email
      type
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
export const CheckLoginQueryDocument = gql`
    query CheckLoginQuery {
  checklogin {
    id
    linkImage {
      filename
      type
      url
    }
    fullname
    email
    username
    password
    type
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
      type
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