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
      doctors {
        id
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
          schedule {
            dayOfWeek
            sessions {
              startTime
              startTime
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
        workSchedule {
          dayOff
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
const getMedicalFacilityNameById = gql`
  query getMedicalFacilityNameById($input: String!) {
    getMedicalFacilityById(id: $input) {
      id
      medicalFacilityName
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
    getMecialSpecialtiesByMedicalFacilityId(id: $input) {
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
