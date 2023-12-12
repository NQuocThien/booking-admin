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
      customer {
        userId
      }
      active
    }
  }
`;
const GetAllCustomer = gql`
  query GetCustomer {
    getcustomers {
      fullname
      userId
    }
  }
`;

const GetAllDoctor = gql`
  query GetDoctors {
    getDoctors {
      id
      name
      email
      numberPhone
      avatar {
        filename
        type
        url
      }
      facilitiesId
      medicalSpecialties {
        id
        name
        discription
      }
      userId
      degree {
        id
        name
        abbreviations
      }
    }
  }
`;
const GetAllMedicalFacilities = gql`
  query getMedicalfacilities {
    getMedicalfacilities {
      id
      companyName
      discription
      adress
      doctors {
        id
        userId
        name
        avatar {
          filename
          type
          url
        }
        degree {
          id
          name
          abbreviations
        }
        email
        evaluate
        numberPhone
      }
      image {
        filename
        type
        url
      }
    }
  }
`;
const GetUserNotHasClinic = gql`
  query getUserMedicalNon {
    getUserMedicalNon {
      id
      username
    }
  }
`;
const GetAllDegreeSelect = gql`
  query degreesSellect {
    getAllDegree {
      id
      name
    }
  }
`;

const GetAllClinicSelect = gql`
  query getClinicsSelect {
    getMedicalfacilities {
      id
      companyName
    }
  }
`;
const GetAllSpecialSelect = gql`
  query getSpecicalsSelect {
    getAllMecialSpecialties {
      id
      name
      discription
    }
  }
`;
const GetUserSelect = gql`
  query getUserSelect($input: UserSelectInput!) {
    getUserSelect(roleInput: $input) {
      id
      username
    }
  }
`;
