import { gql } from "@apollo/client";

const registerDoctorCreated = gql`
  subscription registerDoctorCreated($doctorId: String!, $date: String!) {
    registerDoctorCreated(doctorId: $doctorId, date: $date) {
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
    }
  }
`;
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
      session {
        startTime
        endTime
      }
    }
  }
`;
