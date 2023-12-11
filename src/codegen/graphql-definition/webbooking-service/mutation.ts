import { gql } from "@apollo/client";
export const Login = gql`
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
export const UpdateUserById = gql`
  mutation UdateUserByID($input: UpdateUserInput!) {
    updateUser(updateUserInput: $input) {
      id
    }
  }
`;
export const UpdateUserByIdWithPass = gql`
  mutation UpdateUserByIdWithPass($input: UpdateUserWithPassInput!) {
    updateUserWithPass(updateUserInput: $input) {
      id
    }
  }
`;
export const UpdateGeneralInfor = gql`
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
export const ActiveUser = gql`
  mutation ActiveUser($input: String!) {
    activeUser(id: $input) {
      username
      active
    }
  }
`;
export const UpdateRoles = gql`
  mutation UpdateRoles($input: UpdateRolesInput!) {
    updateRoles(updateRolesInput: $input) {
      roles
    }
  }
`;
export const CreateMedicalFacilities = gql`
  mutation createMedicalFacilities($input: CreateMedicalFacilitiesInput!) {
    createMedicalFacilities(createMedicalFacilitiesInput: $input) {
      id
    }
  }
`;
