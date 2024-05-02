import { gql } from "@apollo/client";
export const CheckLoginQuery = gql`
  query CheckLoginQuery {
    checklogin {
      id
      avatar {
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
      avatar {
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
      typeOfFacility
      operatingStatus
      legalRepresentation
      taxCode
      status
      dateOff
      schedule
    }
  }
`;
const getMedicalFacilityInfo = gql`
  query getMedicalFacilityInfo($userId: String, $staffId: String) {
    getMedicalFacilityInfo(userId: $userId, staffId: $staffId) {
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
      totalDoctors
      totalPackages
      totalSpecialties
      totalVaccinations
    }
  }
`;
const getGeneralMedicalFacilityInfo = gql`
  query getGeneralMedicalFacilityInfo($userId: String, $staffId: String) {
    getMedicalFacilityInfo(userId: $userId, staffId: $staffId) {
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
    }
  }
`;
const getMedicalFacilityIdByUserId = gql`
  query getMedicalFacilityIdByUserId($userId: String!) {
    getMedicalFacilityInfo(userId: $userId) {
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
      typeOfFacility
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
      staffName
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
      staffName
      gender
      numberPhone
      email
      permissions
      specialtyId
      specialties {
        id
        discription
        medicalFactilityId
        specialtyName
        price
      }
    }
  }
`;
const getMedicalStaffByUserId = gql`
  query getMedicalStaffByUserId($input: String!) {
    getMedicalStaffByUserId(input: $input) {
      id
      userId
      medicalFacilityId
      staffName
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
      specialtyName
    }
  }
`;
const getDoctorById = gql`
  query getDoctorbyId($input: String!) {
    getDoctorbyId(id: $input) {
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
        specialtyName
      }
    }
  }
`;
const getDoctorByUserId = gql`
  query getDoctorbyUserId($input: String!) {
    getDoctorbyUserId(id: $input) {
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
        specialtyName
      }
    }
  }
`;
const getDoctorPending = gql`
  query getAllDoctorPending {
    getAllDoctorPending {
      id
      doctorName
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
      doctorName
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
      doctorName
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
      doctorName
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
    $filter: FilterDoctorInput
    $page: Float!
    $limit: Float!
    $sortField: String
    $sortOrder: String
    $userId: String!
  ) {
    getAllDoctorPaginationOfFacility(
      page: $page
      limit: $limit
      sortField: $sortField
      sortOrder: $sortOrder
      userId: $userId
      filter: $filter
    ) {
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
  query getTotalDoctorsCount(
    $filter: FilterDoctorInput
    $userId: String
    $staffId: String
  ) {
    getTotalDoctorsCount(filter: $filter, userId: $userId, staffId: $staffId)
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
    $userId: String
    $staffId: String
  ) {
    getAllPackagePaginationOfFacility(
      search: $search
      page: $page
      limit: $limit
      sortField: $sortField
      sortOrder: $sortOrder
      userId: $userId
      staffId: $staffId
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
const getAllPackagePaginationByStaff = gql`
  query getAllPackagePaginationByStaff(
    $search: String
    $page: Float!
    $limit: Float!
    $sortField: String
    $sortOrder: String
    $staffId: String!
  ) {
    getAllPackagePaginationByStaff(
      search: $search
      page: $page
      limit: $limit
      sortField: $sortField
      sortOrder: $sortOrder
      staffId: $staffId
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
  query getTotalPackagesCount(
    $search: String
    $userId: String
    $staffId: String
  ) {
    getTotalPackagesCount(search: $search, userId: $userId, staffId: $staffId)
  }
`;
const getMedicalSpecialtyByid = gql`
  query getMedicalSpecialtyById($input: String!) {
    getMedicalSpecialtyById(input: $input) {
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
const getAllMedicalSpecialtyByFacilityId = gql`
  query getMedicalSpecialtiesByMedicalFacilityId($input: String!) {
    getMedicalSpecialtiesByMedicalFacilityId(input: $input) {
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
const getAllMedicalSpecialtiesPaginationOfFacility = gql`
  query getAllMedicalSpecialtiesPaginationOfFacility(
    $search: String
    $page: Float!
    $limit: Float!
    $sortField: String
    $sortOrder: String
    $userId: String
    $staffId: String
  ) {
    getAllMedicalSpecialtiesPaginationOfFacility(
      search: $search
      page: $page
      limit: $limit
      sortField: $sortField
      sortOrder: $sortOrder
      userId: $userId
      staffId: $staffId
    ) {
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
const getAllMedicalSpecialtiesPaginationByStaff = gql`
  query getAllMedicalSpecialtiesPaginationByStaff(
    $search: String
    $page: Float!
    $limit: Float!
    $sortField: String
    $sortOrder: String
    $staffId: String!
  ) {
    getAllMedicalSpecialtiesPaginationByStaff(
      search: $search
      page: $page
      limit: $limit
      sortField: $sortField
      sortOrder: $sortOrder
      staffId: $staffId
    ) {
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
const getTotalMedicalSpecialtiesCount = gql`
  query getTotalMedicalSpecialtiesCount(
    $search: String
    $userId: String
    $staffId: String
  ) {
    getTotalMedicalSpecialtiesCount(
      search: $search
      userId: $userId
      staffId: $staffId
    )
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
    $userId: String
    $staffId: String
  ) {
    getAllVaccinationPaginationOfFacility(
      search: $search
      page: $page
      limit: $limit
      sortField: $sortField
      sortOrder: $sortOrder
      userId: $userId
      staffId: $staffId
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
const getAllVaccinationPaginationByStaff = gql`
  query getAllVaccinationPaginationByStaff(
    $search: String
    $page: Float!
    $limit: Float!
    $sortField: String
    $sortOrder: String
    $staffId: String!
  ) {
    getAllVaccinationPaginationByStaff(
      search: $search
      page: $page
      limit: $limit
      sortField: $sortField
      sortOrder: $sortOrder
      staffId: $staffId
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
  query getTotalVaccinationsCount(
    $search: String
    $userId: String
    $staffId: String
  ) {
    getTotalVaccinationsCount(
      search: $search
      userId: $userId
      staffId: $staffId
    )
  }
`;
const getMedicalSpecialtySelect = gql`
  query getSpecialtySelect($input: String!) {
    getMedicalSpecialtySelect(input: $input) {
      id
      specialtyName
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
      avatar {
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
      cancel
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
          fullname
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
      createdAt
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
      staffName
      gender
      numberPhone
      email
      permissions
      specialtyId
      specialties {
        id
        specialtyName
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
      staffName
      gender
      numberPhone
      email
      permissions
      specialtyId
      specialties {
        id
        specialtyName
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
      fullname
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
const getTottalBlog = gql`
  query getTottalBlog($search: String, $isDeleted: Boolean) {
    getTotalBlogsCount(search: $search, isDeleted: $isDeleted)
  }
`;
const getAllBlogPagination = gql`
  query getAllBlogPagination(
    $search: String
    $page: Float!
    $limit: Float!
    $sortOrder: String
    $isDeleted: Boolean
  ) {
    getAllBlogPagination(
      search: $search
      page: $page
      limit: $limit
      sortOrder: $sortOrder
      isDeleted: $isDeleted
    ) {
      id
      title
      slug
      status
      priority
      type
      mainPhoto {
        filename
        type
        url
      }
      createdAt
      deletedAt
    }
  }
`;

const getBlogBySlug = gql`
  query getBlogBySlug($slug: String!) {
    getBlogBySlug(slug: $slug) {
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
      status
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

const getAllBlogOfFacilityPagination = gql`
  query getAllBlogOfFacilityPagination(
    $search: String
    $page: Float!
    $limit: Float!
    $sortOrder: String
    $facilityId: String!
    $isDeleted: Boolean
  ) {
    getAllBlogOfFacilityPagination(
      search: $search
      page: $page
      limit: $limit
      sortOrder: $sortOrder
      facilityId: $facilityId
      isDeleted: $isDeleted
    ) {
      id
      slug
      title
      status
      priority
      type
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

const getAllDoctorCountOfFacility = gql`
  query getAllDoctorCountOfFacility(
    $userId: String
    $staffId: String
    $startTime: String!
    $endTime: String!
    $isPending: Boolean
  ) {
    getAllDoctorOfFacility(userId: $userId, staffId: $staffId) {
      id
      doctorName
      registerCount(
        startTime: $startTime
        endTime: $endTime
        isPending: $isPending
      )
    }
  }
`;
const getAllPackageCountOfFacility = gql`
  query getAllPackageCountOfFacility(
    $userId: String
    $staffId: String
    $startTime: String!
    $endTime: String!
    $isPending: Boolean
  ) {
    getAllPackageOfFacility(userId: $userId, staffId: $staffId) {
      id
      packageName
      registerCount(
        startTime: $startTime
        endTime: $endTime
        isPending: $isPending
      )
    }
  }
`;
const getAllMedicalSpecialtiesCountOfFacility = gql`
  query getAllMedicalSpecialtiesCountOfFacility(
    $userId: String
    $staffId: String
    $startTime: String!
    $endTime: String!
    $isPending: Boolean
  ) {
    getAllMedicalSpecialtiesOfFacility(userId: $userId, staffId: $staffId) {
      id
      specialtyName
      registerCount(
        startTime: $startTime
        endTime: $endTime
        isPending: $isPending
      )
    }
  }
`;
const getAllVaccinationCountOfFacility = gql`
  query getAllVaccinationCountOfFacility(
    $userId: String
    $staffId: String
    $startTime: String!
    $endTime: String!
    $isPending: Boolean
  ) {
    getAllVaccinationOfFacility(userId: $userId, staffId: $staffId) {
      id
      vaccineName
      registerCount(
        startTime: $startTime
        endTime: $endTime
        isPending: $isPending
      )
    }
  }
`;

const getAllRegisPending = gql`
  query getAllRegisPending($input: GetRegisPendingInput!) {
    getAllRegisPending(input: $input) {
      id
      cancel
      createdAt
      date
      profileId
      session {
        startTime
        endTime
      }
      typeOfService
      doctorId
      packageId
      specialtyId
      vaccineId
      state

      profile {
        id
        fullname
        address
        email
        numberPhone
        gender
        ethnic
        identity
        medicalInsurance
        job
        relationship
        dataOfBirth
        customerId
        customer {
          id
          fullname
          address
          numberPhone
          gender
          ethnic
          dateOfBirth
          userId
          email
        }
      }
    }
  }
`;
const getRegisHistory = gql`
  query getRegisHistory(
    $profileId: String!
    $userId: String
    $staffId: String
  ) {
    getRegisHistory(profileId: $profileId, userId: $userId, staffId: $staffId) {
      id
      typeOfService
      cancel
      createdAt
      date
      state
      profileId
      session {
        startTime
        endTime
      }
      doctor {
        doctorName
      }
      specialty {
        specialtyName
      }
      vaccination {
        vaccineName
      }
      package {
        packageName
      }
    }
  }
`;
const getProfileById = gql`
  query getProfileById($profileId: String!) {
    getProfileById(id: $profileId) {
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
        fullname
        gender
        numberPhone
        email
        address
        dateOfBirth
        ethnic
      }
    }
  }
`;
const getRegisById = gql`
  query getRegisById($id: String!) {
    getRegisById(id: $id) {
      id
      cancel
      createdAt
      date
      profileId
      session {
        startTime
        endTime
      }
      doctor {
        doctorName
      }
      specialty {
        specialtyName
      }
      vaccination {
        vaccineName
      }
      package {
        packageName
      }
      typeOfService
      doctorId
      packageId
      specialtyId
      vaccineId
      state
      files {
        filename
        type
        url
      }

      profile {
        id
        fullname
        address
        email
        numberPhone
        gender
        ethnic
        identity
        medicalInsurance
        job
        relationship
        dataOfBirth
        customerId
        customer {
          id
          fullname
          address
          numberPhone
          gender
          ethnic
          dateOfBirth
          userId
          email
        }
      }
    }
  }
`;
