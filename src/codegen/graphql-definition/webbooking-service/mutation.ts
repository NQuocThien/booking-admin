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
      doctorName
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
      doctorName
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
const createPackage = gql`
  mutation createPackage($input: CreatePackageInput!) {
    createPackage(input: $input) {
      id
      medicalFactilitiesId
      packageName
      gender
      price
      examinationDetails
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
      image {
        filename
        type
        url
      }
    }
  }
`;
const deletePackage = gql`
  mutation deletePackage($input: String!) {
    deletePackage(input: $input) {
      id
    }
  }
`;
const updatePackage = gql`
  mutation updatePackage($input: UpdatePackageInput!) {
    updatePackage(input: $input) {
      id
    }
  }
`;
const deleteMedicalSpecialty = gql`
  mutation deleteMecialSpecialty($input: String!) {
    deleteMecialSpecialty(id: $input) {
      id
    }
  }
`;
const createMedicalSpecialty = gql`
  mutation createMedicalSpecialty($input: CreateMedicalSpecialtyInput!) {
    createMedicalSpecialty(input: $input) {
      id
      medicalFactilityId
      specialtyName
      price
      discription
      workSchedule {
        dayOff
        numberSlot
        status
        schedule {
          dayOfWeek
          sessions {
            endTime
            startTime
          }
        }
      }
    }
  }
`;
const updateMedicalSpecialty = gql`
  mutation updateMedicalSpecialty($input: UpdateMedicalSpecialtyInput!) {
    updateMedicalSpecialty(input: $input) {
      id
    }
  }
`;
const createVaccination = gql`
  mutation createVaccination($input: CreateVaccineInput!) {
    createVaccination(input: $input) {
      id
    }
  }
`;
const updateVaccine = gql`
  mutation updateVaccination($input: UpdateVaccineInput!) {
    updateVaccination(input: $input) {
      id
    }
  }
`;
const deleteVaccine = gql`
  mutation deleteVaccination($input: String!) {
    deleteVaccination(input: $input) {
      id
    }
  }
`;
const createMedicalStaff = gql`
  mutation createMedicalStaff($input: CreateMedicalStaffInput!) {
    createMedicalStaff(input: $input) {
      id
    }
  }
`;
const confirmRegister = gql`
  mutation confirmRegister($input: ConfirmRegisterInput!) {
    confirmRegister(input: $input) {
      id
    }
  }
`;
const deleteMedicalStaff = gql`
  mutation deleteMedicalStaff($input: String!) {
    deleteMedicalStaff(input: $input) {
      id
    }
  }
`;
const updateMedicalStaff = gql`
  mutation updateMedicalStaff($input: UpdateMedicalStaffInput!) {
    updateMedicalStaff(input: $input) {
      id
    }
  }
`;
