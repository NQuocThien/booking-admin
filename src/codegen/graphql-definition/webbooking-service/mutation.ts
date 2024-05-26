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
const confirmRegisters = gql`
  mutation confirmRegisters($input: [ConfirmRegisterInput!]!) {
    confirmRegisters(input: $input) {
      id
      state
      note
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
const createBlog = gql`
  mutation createBlog($input: CreateBlogInput!) {
    createBlog(input: $input) {
      id
      slug
      title
      content
      shortContent
      priority
      type
      keywords
      mainPhoto {
        filename
        type
        url
      }
      createdAt
      createdBy {
        username
        showName
        role
      }
      updatedAt
      updatedBy {
        username
        showName
        role
      }
      deletedAt
      deletedBy {
        role
        showName
        username
      }
    }
  }
`;

const updateBlog = gql`
  mutation updateBlog($input: UpdateBlogInput!) {
    updateBlog(input: $input) {
      id
      slug
      title
      content
      shortContent
      priority
      type
      keywords
      mainPhoto {
        filename
        type
        url
      }
      createdAt
      createdBy {
        username
        showName
        role
      }
      updatedAt
      updatedBy {
        username
        showName
        role
      }
      deletedAt
      deletedBy {
        role
        showName
        username
      }
    }
  }
`;
const deleteUnDeleteBlog = gql`
  mutation deleteUnDeleteBlog($id: String!) {
    deleteUnDeleteBlog(id: $id) {
      id
    }
  }
`;
const uploadFileRegister = gql`
  mutation uploadFileRegister($input: UpLoadFileRegisInput!) {
    uploadFileRegister(input: $input) {
      id
    }
  }
`;
const cancelRegisterByAdmin = gql`
  mutation cancelRegisterByAdmin($id: String!, $content: String!) {
    cancelRegisterByAdmin(id: $id, content: $content) {
      id
    }
  }
`;
const signupAndCreateDoctor = gql`
  mutation signupAndCreateDoctor($input: CreateDoctorAndUserInput!) {
    signupAndCreateDoctor(input: $input) {
      id
    }
  }
`;

const updateUserAndDoctor = gql`
  mutation updateUserAndDoctor($input: UpdateUserAndDoctorInput!) {
    updateUserAndDoctor(input: $input) {
      id
    }
  }
`;

const createUserAndStaff = gql`
  mutation createUserAndStaff($input: CreatUserAndStaffInput!) {
    createUserAndStaff(input: $input) {
      id
    }
  }
`;
const updateUserAndStaff = gql`
  mutation updateUserAndStaff($input: UpdateUserAndStaffInput!) {
    updateUserAndStaff(input: $input) {
      id
    }
  }
`;
const deleteDoctorAndUser = gql`
  mutation deleteUserAndDoctor(
    $doctorId: String!
    $medicalFactilitiesId: String!
  ) {
    deleteUserAndDoctor(
      doctorId: $doctorId
      medicalFactilitiesId: $medicalFactilitiesId
    ) {
      id
    }
  }
`;
const generateExcelDoctor = gql`
  mutation generateExcel {
    generateExcel
  }
`;
const generateExcelRegisByOption = gql`
  mutation generateExcelRegisByOption($input: GetRegisterByOptionInput!) {
    generateExcelRegisByOption(input: $input)
  }
`;
const addBlockCustomerByProfileId = gql`
  mutation addBlockCustomerByProfileId(
    $userId: String
    $content: String!
    $profileId: String
    $facilityId: String
    $customerId: String
    $isBlock: Boolean
  ) {
    addBlockCustomerByProfileId(
      userId: $userId
      content: $content
      profileId: $profileId
      facilityId: $facilityId
      customerId: $customerId
      isBlock: $isBlock
    ) {
      id
      userId
      medicalFacilityName
      address
      numberPhone
      email
      logo {
        filename
        type
        url
      }
      image {
        filename
        type
        url
      }
      lat
      lng
      discription
      introduce
      typeOfFacility
      operatingStatus
      legalRepresentation
      taxCode
      status
      dateOff
      schedule
      blocks {
        content
        customerId
        seen
      }
    }
  }
`;
