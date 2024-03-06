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
const getUserClinicPending = gql`
  query getUserClinicPending {
    getUserMedicalNon {
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
      doctors {
        id
        userId
        medicalFactilitiesId
        name
        academicTitle
        avatar {
          filename
          type
          url
        }
        discription
        price
        degree
        email
        numberPhone
        gender
        userId
        specialistId
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
      medicalSpecialties {
        id
        medicalFactilityId
        name
        price
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
        discription
      }
      vaccinations {
        id
        medicalFactilitiesId
        vaccineName
        countryOfOrigin
        indication
        note
        prophylactic
        price
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
      packages {
        id
        packageName
        medicalFactilitiesId
        gender
        examinationDetails
        price
        image {
          filename
          type
          url
        }
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
      medicalStaffs {
        id
        userId
        name
        email
        numberPhone
        gender
        medicalFacilityId
        permissions
      }
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
const getTotalDoctorsCount = gql`
  query getTotalDoctorsCount($search: String) {
    getTotalDoctorsCount(search: $search)
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

// const GetAllCustomer = gql`
//   query GetCustomer {
//     getcustomers {
//       id
//       fullname
//       userId
//       profile {
//         address
//         customerId
//         dataOfBirth
//         email
//         ethnic
//         fullname
//         gender
//         id
//         relationship
//         numberPhone
//         medicalInsurance
//         job
//         identity
//       }
//     }
//   }
// `;

// const GetAllDoctor = gql`
//   query GetDoctors {
//     getDoctors {
//       id
//       name
//       email
//       numberPhone
//       avatar {
//         filename
//         type
//         url
//       }
//       facilitiesId
//       medicalSpecialties {
//         id
//         name
//         discription
//       }
//       userId
//       degree {
//         id
//         name
//         abbreviations
//       }
//     }
//   }
// `;
// const GetAllMedicalFacilities = gql`
//   query getMedicalfacilities {
//     getMedicalfacilities {
//       id
//       companyName
//       discription
//       adress
//       email
//       numberPhone
//       carePackage {
//         id
//         image {
//           filename
//           type
//           url
//         }
//         discription
//         medicalFacilitiesId
//         name
//         price
//         typePackageId
//       }
//       doctors {
//         id
//         userId
//         name
//         avatar {
//           filename
//           type
//           url
//         }
//         degree {
//           id
//           name
//           abbreviations
//         }
//         email
//         evaluate
//         numberPhone
//       }
//       image {
//         filename
//         type
//         url
//       }
//     }
//   }
// `;

// const GetAllDegreeSelect = gql`
//   query degreesSellect {
//     getAllDegree {
//       id
//       name
//     }
//   }
// `;

// const GetAllClinicSelect = gql`
//   query getClinicsSelect {
//     getMedicalfacilities {
//       id
//       companyName
//     }
//   }
// `;
// const GetAllSpecialSelect = gql`
//   query getSpecicalsSelect {
//     getAllMecialSpecialties {
//       id
//       name
//       discription
//     }
//   }
// `;
// const GetUserSelect = gql`
//   query getUserSelect($input: UserSelectInput!) {
//     getUserSelect(roleInput: $input) {
//       id
//       username
//       doctor {
//         id
//       }
//     }
//   }
// `;
// const GetAllDegree = gql`
//   query getAllDregree {
//     getAllDegree {
//       id
//       name
//       abbreviations
//     }
//   }
// `;
// const GetAllMedicalSpecial = gql`
//   query getAllSpecial {
//     getAllMecialSpecialties {
//       id
//       name
//       discription
//     }
//   }
// `;
// const GetClinicByUserId = gql`
//   query getClinicByUserId($input: String!) {
//     getClinicByUserId(id: $input) {
//       id
//       companyName
//       email
//       numberPhone
//       adress
//       discription
//       image {
//         filename
//         type
//         url
//       }
//       lat
//       lng
//       doctors {
//         id
//         name
//         numberPhone
//         email
//         degree {
//           id
//           name
//           abbreviations
//         }
//         avatar {
//           filename
//           type
//           url
//         }
//         medicalSpecialties {
//           name
//         }
//       }
//     }
//   }
// `;

// const GetDoctorById = gql`
//   query getDoctorById($input: String!) {
//     getDoctorbyId(id: $input) {
//       avatar {
//         filename
//         type
//         url
//       }
//       degreeId
//       email
//       facilitiesId
//       id
//       idSpecialist
//       name
//       numberPhone
//       userId
//     }
//   }
// `;

// const GetDoctorByUserId = gql`
//   query getDoctorByUserId($input: String!) {
//     getDoctorbyUserId(id: $input) {
//       id
//       name
//       numberPhone
//       email
//       avatar {
//         filename
//         type
//         url
//       }
//       degree {
//         id
//         abbreviations
//         name
//       }
//       degreeId
//       evaluate
//       facilitiesId
//       medicalSpecialties {
//         id
//         name
//         discription
//       }
//       userId
//       idSpecialist
//     }
//   }
// `;

// const GetAllTypePackage = gql`
//   query getAllTypePacked {
//     getAllTypePackage {
//       id
//       typeName
//     }
//   }
// `;
// const GetAllPackageByClinicId = gql`
//   query GetPackageByClinicId($input: String!) {
//     getCarePackagesByClinicId(id: $input) {
//       id
//       discription
//       typePackageId
//       image {
//         filename
//         type
//         url
//       }
//       medicalFacilitiesId
//       name
//       price
//     }
//   }
// `;
// const GetListPackageByUserID = gql`
//   query GetListPackageByUserID($input: String!) {
//     getClinicByUserId(id: $input) {
//       id
//       carePackage {
//         id
//         discription
//         image {
//           filename
//           type
//           url
//         }
//         medicalFacilitiesId
//         typePackageId
//         price
//         name
//         register {
//           id
//           date
//           packegeId
//           profileId
//           state
//           profile {
//             id
//             address
//             customerId
//             dataOfBirth
//             email
//             ethnic
//             fullname
//             gender
//             identity
//             job
//             medicalInsurance
//             numberPhone
//             relationship
//           }
//         }
//       }
//     }
//   }
// `;
