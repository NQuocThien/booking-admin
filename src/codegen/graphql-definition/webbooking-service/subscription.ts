import { gql } from "@apollo/client";

const registerCreated = gql`
  subscription registerCreated($option: GetRegisterByOptionInput!) {
    registerCreated(option: $option) {
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
      createdAt
      session {
        startTime
        endTime
      }
    }
  }
`;
