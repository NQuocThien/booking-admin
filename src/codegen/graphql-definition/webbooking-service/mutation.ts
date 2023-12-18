import { gql } from "@apollo/client";
const Login = gql`
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
const UpdateUserById = gql`
  mutation UdateUserByID($input: UpdateUserInput!) {
    updateUser(updateUserInput: $input) {
      id
    }
  }
`;
const CreateUserByAdmin = gql`
  mutation singupByAdmin($input: CreateUserByAdminInput!) {
    signupUser(createUserInput: $input) {
      id
    }
  }
`;
const UpdateUserByIdWithPass = gql`
  mutation UpdateUserByIdWithPass($input: UpdateUserWithPassInput!) {
    updateUserWithPass(updateUserInput: $input) {
      id
    }
  }
`;
const UpdateGeneralInfor = gql`
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
const ActiveUser = gql`
  mutation ActiveUser($input: String!) {
    activeUser(id: $input) {
      username
      active
    }
  }
`;
const UpdateRoles = gql`
  mutation UpdateRoles($input: UpdateRolesInput!) {
    updateRoles(updateRolesInput: $input) {
      roles
    }
  }
`;
const CreateMedicalFacilities = gql`
  mutation createMedicalFacilities($input: CreateMedicalFacilitiesInput!) {
    createMedicalFacilities(createMedicalFacilitiesInput: $input) {
      id
    }
  }
`;
const CreateDoctor = gql`
  mutation createDoctor($input: CreateDoctorInput!) {
    createDoctor(createDoctorInput: $input) {
      id
    }
  }
`;
const UpdateDoctor = gql`
  mutation updateDoctor($input: UpdateDoctorInput!) {
    updateDoctor(updateDoctorInput: $input) {
      id
    }
  }
`;
const DeleteDoctor = gql`
  mutation deleteDoctor($input: String!) {
    deleteDoctor(id: $input) {
      id
    }
  }
`;
const CreateDegree = gql`
  mutation createDegree($input: CreateDegreeInput!) {
    createDegree(input: $input) {
      id
      name
      abbreviations
    }
  }
`;
const UpdateDegree = gql`
  mutation updateDegree($input: UpdateDegreeInput!) {
    updateDegree(input: $input) {
      id
      name
      abbreviations
    }
  }
`;
const CreateMedicalSpecial = gql`
  mutation createSpecial($input: CreateMedicalSpecialtiesInput!) {
    createMecialSpecialties(mecicalSpecialtiesInput: $input) {
      id
      name
      discription
    }
  }
`;
const UpdateMedicalSpecial = gql`
  mutation updateSpcial($input: UpdateMedicalSpecialtiesInput!) {
    updateMecialSpecialties(updateSpecialtiesInput: $input) {
      id
    }
  }
`;
const DeleteMedicalSpecial = gql`
  mutation deleteSpecial($input: String!) {
    deleteMecialSpecialties(id: $input) {
      id
      name
      discription
    }
  }
`;
const DeleteDegree = gql`
  mutation deleteDegree($input: String!) {
    deleteDegree(input: $input) {
      id
    }
  }
`;
const UpdateClinic = gql`
  mutation updateClinic($input: UpdateMedicalFacilitiesInput!) {
    updateMedicalFacilities(createMedicalFacilitiesInput: $input) {
      id
    }
  }
`;
const UpdateTypePackageInput = gql`
  mutation UpdateTypePackageById($input: UpdateTypePackageInput!) {
    updateTypePackage(input: $input) {
      id
    }
  }
`;
const DeleteTypePackageInput = gql`
  mutation DeleteTypePackageById($input: String!) {
    deleteTypePackage(id: $input) {
      id
    }
  }
`;
const CreateTypePackageInput = gql`
  mutation CreateTypePackage($input: CreateTypePackageInput!) {
    createTypePackage(input: $input) {
      id
    }
  }
`;
const DeleteCarePackageInput = gql`
  mutation deletePackageById($input: String!) {
    deleteCarePackage(input: $input) {
      id
    }
  }
`;
const UpdateCarePackageInput = gql`
  mutation updatePackageById($input: UpdateCarePackageInput!) {
    updateCarePackage(input: $input) {
      id
    }
  }
`;
const CreateCarePackageInput = gql`
  mutation CreatePackageById($input: createCarePackageInput!) {
    createCarePackage(input: $input) {
      id
    }
  }
`;
const UpdateRegisterInput = gql`
  mutation updateRegister($input: UpdateRegisterInput!) {
    updateRegister(input: $input) {
      id
      state
    }
  }
`;
