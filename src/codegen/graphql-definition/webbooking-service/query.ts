import { gql } from "@apollo/client";
export const CheckLoginQuery = gql`
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
const getSettingQuery = gql`
  query getSetting {
    getSetting {
      defaultLang
    }
  }
`;

const GetGeneralInfor = gql`
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

const GetAllUser = gql`
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
      active
    }
  }
`;
const getUserFacilitySelect = gql`
  query getUserFacilitySelect($input: String!) {
    getUserFacilitySelect(input: $input) {
      id
      username
    }
  }
`;

const getUserDoctorPending = gql`
  query getUserDoctorPending {
    getUserDoctorPending {
      id
      username
    }
  }
`;
const getUserDoctorPendingUpdate = gql`
  query getUserDoctorPendingUpdate($input: String!) {
    getUserDoctorPendingUpdate(input: $input) {
      id
      username
    }
  }
`;
const getUserStaffSelect = gql`
  query getAllUserStaffSelect($input: String!) {
    getUserStaffSelect(input: $input) {
      id
      username
    }
  }
`;

const getAllMedicalFacility = gql`
  query getAllMedicalFacility {
    getAllMedicalFacility {
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
      operatingStatus
      legalRepresentation
      taxCode
      status
      dateOff
      schedule
    }
  }
`;
const getAllMedicalFacilitySelect = gql`
  query getAllMedicalFacilitySelect {
    getAllMedicalFacility {
      id
      medicalFacilityName
    }
  }
`;
const getMedicalFacilityById = gql`
  query getMedicalFacilityById($input: String!) {
    getMedicalFacilityById(id: $input) {
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
      operatingStatus
      legalRepresentation
      taxCode
      status
      dateOff
      schedule
    }
  }
`;
const getMedicalFacilityByUserId = gql`
  query getMedicalFacilityByUserId($input: String!) {
    getMedicalFacilityByUserId(id: $input) {
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
      operatingStatus
      legalRepresentation
      taxCode
      status
      dateOff
      schedule
      totalDoctors
      totalPackages
      totalSpecialties
      totalVaccinations
    }
  }
`;
const getGeneralMedicalFacilityByUserId = gql`
  query getGeneralMedicalFacilityByUserId($input: String!) {
    getMedicalFacilityByUserId(id: $input) {
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
      operatingStatus
      legalRepresentation
      taxCode
      status
      dateOff
      schedule
    }
  }
`;
const getMedicalFacilityIdByUserId = gql`
  query getMedicalFacilityIdByUserId($input: String!) {
    getMedicalFacilityByUserId(id: $input) {
      id
      userId
      medicalFacilityName
    }
  }
`;
const getAllMedicalFacilityPagination = gql`
  query getAllMedicalFacilityPagination(
    $search: String
    $page: Float!
    $limit: Float!
    $sortField: String
    $sortOrder: String
  ) {
    getAllMedicalFacilityPagination(
      search: $search
      page: $page
      limit: $limit
      sortField: $sortField
      sortOrder: $sortOrder
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
      operatingStatus
      legalRepresentation
      taxCode
      status
      dateOff
      schedule
    }
  }
`;
const getTotalFacilitiesCount = gql`
  query getTotalFacilitiesCount($search: String) {
    getTotalFacilitiesCount(search: $search)
  }
`;
const getMedicalFacilityNameById = gql`
  query getMedicalFacilityNameById($input: String!) {
    getMedicalFacilityById(id: $input) {
      id
      medicalFacilityName
    }
  }
`;
const getMedicalStaffByFacilityId = gql`
  query getMedicalStaffByFacilityId($input: String!) {
    getMedicalStaffByFacilityId(input: $input) {
      id
      userId
      medicalFacilityId
      name
      gender
      numberPhone
      email
      permissions
      specialtyId
    }
  }
`;
const getMedicalStaffById = gql`
  query getMedicalStaffById($input: String!) {
    getMedicalStaffById(input: $input) {
      id
      userId
      medicalFacilityId
      name
      gender
      numberPhone
      email
      permissions
      specialtyId
    }
  }
`;
const getUserSelected = gql`
  query getUserSelected($input: String!) {
    getUserSelected(id: $input) {
      id
      username
    }
  }
`;
const getMedicalSpecialtiesSelect = gql`
  query getMedicalSpecialtiesSelect($input: String!) {
    getMedicalSpecialtiesByMedicalFacilityId(input: $input) {
      id
      name
    }
  }
`;
const getDoctorById = gql`
  query getDoctorbyId($input: String!) {
    getDoctorbyId(id: $input) {
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
      discription
      price
      avatar {
        filename
        type
        url
      }
      workSchedule {
        dayOff
        status
        numberSlot
        schedule {
          dayOfWeek
          sessions {
            startTime
            endTime
          }
        }
      }
      specialty {
        id
        name
      }
    }
  }
`;
const getDoctorPending = gql`
  query getAllDoctorPending {
    getAllDoctorPending {
      id
      name
      gender
      academicTitle
      degree
      numberPhone
      email
      avatar {
        filename
        type
        url
      }
      discription
      price
      workSchedule {
        dayOff
        numberSlot
        schedule {
          dayOfWeek
          sessions {
            endTime
            startTime
          }
        }
        status
      }
      userId
      medicalFactilitiesId
      specialistId
    }
  }
`;
const getDoctorByFacilityId = gql`
  query getAllDoctorByFacilityId($input: String!) {
    getAllDoctorByFacilityId(input: $input) {
      id
      name
      gender
      academicTitle
      degree
      numberPhone
      email
      avatar {
        filename
        type
        url
      }
      discription
      price
      workSchedule {
        dayOff
        numberSlot
        schedule {
          dayOfWeek
          sessions {
            endTime
            startTime
          }
        }
        status
      }
      userId
      medicalFactilitiesId
      specialistId
    }
  }
`;
const getDoctorToUpdateById = gql`
  query getDoctorToUpdateById($input: String!) {
    getDoctorbyId(id: $input) {
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
      discription
      price
      avatar {
        filename
        type
        url
      }
      workSchedule {
        dayOff
        status
        numberSlot
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
const getAllDoctorPagination = gql`
  query getAllDoctorPagination(
    $search: String
    $page: Float!
    $limit: Float!
    $sortField: String
    $sortOrder: String
  ) {
    getAllDoctorPagination(
      search: $search
      page: $page
      limit: $limit
      sortField: $sortField
      sortOrder: $sortOrder
    ) {
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
      discription
      price
      avatar {
        filename
        type
        url
      }
      workSchedule {
        dayOff
        status
        numberSlot
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
const getAllDoctorPaginationOfFacility = gql`
  query getAllDoctorPaginationOfFacility(
    $search: String
    $page: Float!
    $limit: Float!
    $sortField: String
    $sortOrder: String
    $userId: String!
  ) {
    getAllDoctorPaginationOfFacility(
      search: $search
      page: $page
      limit: $limit
      sortField: $sortField
      sortOrder: $sortOrder
      userId: $userId
    ) {
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
      discription
      price
      avatar {
        filename
        type
        url
      }
      workSchedule {
        dayOff
        status
        numberSlot
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
const getTotalDoctorsCount = gql`
  query getTotalDoctorsCount($search: String, $userId: String) {
    getTotalDoctorsCount(search: $search, userId: $userId)
  }
`;
const getPackageById = gql`
  query getPackageById($input: String!) {
    getPackageById(input: $input) {
      id
      medicalFactilitiesId
      packageName
      gender
      price
      image {
        filename
        type
        url
      }
      examinationDetails
      workSchedule {
        dayOff
        status
        numberSlot
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
const getPackageByFacilityId = gql`
  query getAllPackageByFacilityId($input: String!) {
    getAllPackageByFacilityId(input: $input) {
      id
      medicalFactilitiesId
      packageName
      gender
      price
      image {
        filename
        type
        url
      }
      examinationDetails
      workSchedule {
        dayOff
        status
        numberSlot
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
const getAllPackagePaginationOfFacility = gql`
  query getAllPackagePaginationOfFacility(
    $search: String
    $page: Float!
    $limit: Float!
    $sortField: String
    $sortOrder: String
    $userId: String!
  ) {
    getAllPackagePaginationOfFacility(
      search: $search
      page: $page
      limit: $limit
      sortField: $sortField
      sortOrder: $sortOrder
      userId: $userId
    ) {
      id
      medicalFactilitiesId
      packageName
      gender
      price
      image {
        filename
        type
        url
      }
      examinationDetails
      workSchedule {
        dayOff
        status
        numberSlot
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
const getTotalPackagesCount = gql`
  query getTotalPackagesCount($search: String, $userId: String) {
    getTotalPackagesCount(search: $search, userId: $userId)
  }
`;
const getMedicalSpecialtyByid = gql`
  query getMedicalSpecialtyById($input: String!) {
    getMedicalSpecialtyById(input: $input) {
      id
      medicalFactilityId
      name
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
const getAllMedicalSpecialtyByFacilityId = gql`
  query getMedicalSpecialtiesByMedicalFacilityId($input: String!) {
    getMedicalSpecialtiesByMedicalFacilityId(input: $input) {
      id
      medicalFactilityId
      name
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
const getAllMedicalSpecialtiesPaginationOfFacility = gql`
  query getAllMedicalSpecialtiesPaginationOfFacility(
    $search: String
    $page: Float!
    $limit: Float!
    $sortField: String
    $sortOrder: String
    $userId: String!
  ) {
    getAllMedicalSpecialtiesPaginationOfFacility(
      search: $search
      page: $page
      limit: $limit
      sortField: $sortField
      sortOrder: $sortOrder
      userId: $userId
    ) {
      id
      medicalFactilityId
      name
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
const getTotalMedicalSpecialtiesCount = gql`
  query getTotalMedicalSpecialtiesCount($search: String, $userId: String) {
    getTotalMedicalSpecialtiesCount(search: $search, userId: $userId)
  }
`;
const getVaccineById = gql`
  query getVaccineById($input: String!) {
    getVaccineById(input: $input) {
      id
      medicalFactilitiesId
      vaccineName
      price
      countryOfOrigin
      prophylactic
      indication
      note
      workSchedule {
        dayOff
        numberSlot
        schedule {
          dayOfWeek
          sessions {
            startTime
            endTime
          }
        }
        status
      }
    }
  }
`;
const getVaccineByFacilityId = gql`
  query getAllVaccinationByFacilityId($input: String!) {
    getAllVaccinationByFacilityId(input: $input) {
      id
      medicalFactilitiesId
      vaccineName
      price
      countryOfOrigin
      prophylactic
      indication
      note
      workSchedule {
        dayOff
        numberSlot
        schedule {
          dayOfWeek
          sessions {
            startTime
            endTime
          }
        }
        status
      }
    }
  }
`;
const getAllVaccinationPaginationOfFacility = gql`
  query getAllVaccinationPaginationOfFacility(
    $search: String
    $page: Float!
    $limit: Float!
    $sortField: String
    $sortOrder: String
    $userId: String!
  ) {
    getAllVaccinationPaginationOfFacility(
      search: $search
      page: $page
      limit: $limit
      sortField: $sortField
      sortOrder: $sortOrder
      userId: $userId
    ) {
      id
      medicalFactilitiesId
      vaccineName
      price
      countryOfOrigin
      prophylactic
      indication
      note
      workSchedule {
        dayOff
        numberSlot
        schedule {
          dayOfWeek
          sessions {
            startTime
            endTime
          }
        }
        status
      }
    }
  }
`;
const getTotalVaccinationsCount = gql`
  query getTotalVaccinationsCount($search: String, $userId: String) {
    getTotalVaccinationsCount(search: $search, userId: $userId)
  }
`;
const getMedicalSpecialtySelect = gql`
  query getSpecialtySelect($input: String!) {
    getMedicalSpecialtySelect(input: $input) {
      id
      name
    }
  }
`;
const getAllPackageSelect = gql`
  query getAllPackageSelect($input: String!) {
    getAllPackageSelect(input: $input) {
      id
      packageName
    }
  }
`;
const getAllVaccinationSelect = gql`
  query getAllVaccinationSelect($input: String!) {
    getAllVaccinationSelect(input: $input) {
      id
      vaccineName
    }
  }
`;
const getAllUserPagination = gql`
  query getAllUsersPagination(
    $search: String
    $page: Float!
    $limit: Float!
    $sortField: String
    $sortOrder: String
  ) {
    getAllUsersPagination(
      search: $search
      page: $page
      limit: $limit
      sortField: $sortField
      sortOrder: $sortOrder
    ) {
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
      active
    }
  }
`;
const getTotalUsersCount = gql`
  query getTotalUsersCount($search: String) {
    totalUsersCount(search: $search)
  }
`;
const getAllRegisterByOption = gql`
  query getAllRegisterByOption($input: GetRegisterByOptionInput!) {
    getAllRegisterByOption(input: $input) {
      id
      date
      typeOfService

      isHealthInsurance
      profile {
        id
        customerId
        email
        ethnic
        fullname
        address
        gender
        job
        dataOfBirth
        identity
        medicalInsurance
        numberPhone
        relationship
        customer {
          id
          userId
          name
          gender
          numberPhone
          email
          address
          dateOfBirth
          ethnic
        }
      }
      state
      packageId
      profileId
      specialtyId
      vaccineId
      session {
        startTime
        endTime
      }
    }
  }
`;
const getAllStaffPagination = gql`
  query getAllStaffPagination(
    $search: String
    $page: Float!
    $limit: Float!
    $sortField: String
    $sortOrder: String
  ) {
    getAllStaffPagination(
      search: $search
      page: $page
      limit: $limit
      sortField: $sortField
      sortOrder: $sortOrder
    ) {
      id
      userId
      medicalFacilityId
      name
      gender
      numberPhone
      email
      permissions
      specialtyId
      specialties {
        id
        name
        medicalFactilityId
        discription
        price
      }
    }
  }
`;
const totalStaffsCount = gql`
  query totalStaffsCount($search: String, $userId: String) {
    totalStaffsCount(search: $search, userId: $userId)
  }
`;
const getAllMedicalStaffPaginationOfFacility = gql`
  query getAllMedicalStaffPaginationOfFacility(
    $search: String
    $page: Float!
    $limit: Float!
    $sortField: String
    $sortOrder: String
    $userId: String!
  ) {
    getAllMedicalStaffPaginationOfFacility(
      search: $search
      page: $page
      limit: $limit
      sortField: $sortField
      sortOrder: $sortOrder
      userId: $userId
    ) {
      id
      userId
      medicalFacilityId
      name
      gender
      numberPhone
      email
      permissions
      specialtyId
      specialties {
        id
        name
        medicalFactilityId
        discription
        price
      }
    }
  }
`;
const getAllCustomerPagination = gql`
  query getAllCustomerPagination(
    $search: String
    $page: Float!
    $limit: Float!
    $sortField: String
    $sortOrder: String
  ) {
    getAllCustomerPagination(
      search: $search
      page: $page
      limit: $limit
      sortField: $sortField
      sortOrder: $sortOrder
    ) {
      id
      userId
      name
      gender
      numberPhone
      email
      address
      dateOfBirth
      ethnic
      profiles {
        id
        fullname
        address
        gender
        dataOfBirth
        numberPhone
        email
        identity
        medicalInsurance
        job
        relationship
        customerId
        ethnic
      }
    }
  }
`;
const getTotalCustomersCount = gql`
  query getTotalCustomersCount($search: String) {
    getTotalCustomersCount(search: $search)
  }
`;
