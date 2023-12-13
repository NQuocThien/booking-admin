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
export const CreateDoctor = gql`
  mutation createDoctor($input: CreateDoctorInput!) {
    createDoctor(createDoctorInput: $input) {
      id
    }
  }
`;
export const UpdateDoctor = gql`
  mutation updateDoctor($input: UpdateDoctorInput!) {
    updateDoctor(updateDoctorInput: $input) {
      id
    }
  }
`;
export const DeleteDoctor = gql`
  mutation deleteDoctor($input: String!) {
    deleteDoctor(id: $input) {
      id
    }
  }
`;
export const CreateDegree = gql`
  mutation createDegree($input: CreateDegreeInput!) {
    createDegree(input: $input) {
      id
      name
      abbreviations
    }
  }
`;
export const UpdateDegree = gql`
  mutation updateDegree($input: UpdateDegreeInput!) {
    updateDegree(input: $input) {
      id
      name
      abbreviations
    }
  }
`;
export const CreateMedicalSpecial = gql`
  mutation createSpecial($input: CreateMedicalSpecialtiesInput!) {
    createMecialSpecialties(mecicalSpecialtiesInput: $input) {
      id
      name
      discription
    }
  }
`;
export const UpdateMedicalSpecial = gql`
  mutation updateSpcial($input: UpdateMedicalSpecialtiesInput!) {
    updateMecialSpecialties(updateSpecialtiesInput: $input) {
      id
    }
  }
`;
export const DeleteMedicalSpecial = gql`
  mutation deleteSpecial($input: String!) {
    deleteMecialSpecialties(id: $input) {
      id
      name
      discription
    }
  }
`;
export const DeleteDegree = gql`
  mutation deleteDegree($input: String!) {
    deleteDegree(input: $input) {
      id
    }
  }
`;
