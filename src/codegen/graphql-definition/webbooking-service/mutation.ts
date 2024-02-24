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
const createMedicalFacility = gql`
  mutation createMedicalFacility($input: CreateMedicalFacilityInput!) {
    createMedicalFacility(input: $input) {
      id
      userId
      medicalFacilityName
      address
      numberPhone
      email
      image {
        filename
        type
        url
      }
      lat
      lng
      discription
      introduce
      operatingStatus
      legalRepresentation
      taxCode
      dateOff
      status
      schedule
    }
  }
`;

const updateMedicalFacility = gql`
  mutation updateMedicalFacility($input: UpdateMedicalFacilityInput!) {
    updateMedicalFacility(input: $input) {
      id
      userId
      medicalFacilityName
      address
      numberPhone
      email
      image {
        filename
        type
        url
      }
      lat
      lng
      discription
      introduce
      operatingStatus
      legalRepresentation
      taxCode
      dateOff
      status
      schedule
    }
  }
`;
const deleteMedicalFacility = gql`
  mutation deleteMedicalFacility($input: String!) {
    deleteMedicalFacility(input: $input) {
      id
    }
  }
`;

const createDoctor = gql`
  mutation createDoctor($input: CreateDoctorInput!) {
    createDoctor(createDoctorInput: $input) {
      id
      userId
      medicalFactilitiesId
      name
      gender
      numberPhone
      email
      academicTitle
      degree
      specialistId
      avatar {
        filename
        type
        url
      }
      discription
      workSchedule {
        dayOff
        status
        schedule {
          dayOfWeek
          sessions {
            startTime
            endTime
          }
        }
      }
    }
  }
`;
const updateDoctor = gql`
  mutation updateDoctor($input: UpdateDoctorInput!) {
    updateDoctor(input: $input) {
      id
      userId
      medicalFactilitiesId
      name
      gender
      numberPhone
      email
      academicTitle
      degree
      specialistId
      avatar {
        filename
        type
        url
      }
      discription
      workSchedule {
        dayOff
        status
        schedule {
          dayOfWeek
          sessions {
            startTime
            endTime
          }
        }
      }
    }
  }
`;
const deleteDoctor = gql`
  mutation deleteDoctor($input: String!) {
    deleteDoctor(id: $input) {
      id
    }
  }
`;
