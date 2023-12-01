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
      fullname
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
      fullname
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
        fullname
        userId
      }
      active
    }
  }
`;
