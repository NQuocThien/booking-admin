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
const registerPendingCreated = gql`
  subscription registerPendingCreated($input: GetRegisPendingInput!) {
    registerPendingCreated(option: $input) {
      id
      cancel
      createdAt
      date
      profileId
      typeOfService
      doctorId
      packageId
      specialtyId
      vaccineId
      state
      session {
        startTime
        endTime
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
