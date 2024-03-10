/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */
/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type ConfirmRegisterInput = {
  registerId: Scalars['String']['input'];
  state: EStateRegister;
};

export type CreateCustomerInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  ethnic?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<EGender>;
  name: Scalars['String']['input'];
  numberPhone?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type CreateDoctorInput = {
  academicTitle?: InputMaybe<EAcademicTitle>;
  avatar: LinkImageInput;
  degree: EDegree;
  discription: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gender: EGender;
  medicalFactilitiesId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  specialistId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  workSchedule: WorkScheduleInput;
};

export type CreateEvaluateInput = {
  comment: Scalars['String']['input'];
  rating: Scalars['Float']['input'];
  registerId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateMedicalFacilityInput = {
  address: Scalars['String']['input'];
  dateOff?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  discription: Scalars['String']['input'];
  email: Scalars['String']['input'];
  image: LinkImageInput;
  introduce: Scalars['String']['input'];
  lat?: InputMaybe<Scalars['Float']['input']>;
  legalRepresentation: Scalars['String']['input'];
  lng?: InputMaybe<Scalars['Float']['input']>;
  logo: LinkImageInput;
  medicalFacilityName: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  operatingStatus: Scalars['String']['input'];
  schedule: Scalars['String']['input'];
  status: Scalars['String']['input'];
  taxCode: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateMedicalSpecialtyInput = {
  discription: Scalars['String']['input'];
  medicalFactilityId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  workSchedule?: InputMaybe<WorkScheduleInput>;
};

export type CreateMedicalStaffInput = {
  email: Scalars['String']['input'];
  gender: EGender;
  medicalFacilityId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  permissions: Array<EPermission>;
  specialtyId?: InputMaybe<Array<Scalars['String']['input']>>;
  userId: Scalars['String']['input'];
};

export type CreateNotificationInput = {
  content: Scalars['String']['input'];
  detailPath: Scalars['String']['input'];
  status: ETypeOfNotification;
  userId: Scalars['String']['input'];
};

export type CreatePackageInput = {
  examinationDetails: Scalars['String']['input'];
  gender: EGenderPackage;
  image: LinkImageInput;
  medicalFactilitiesId: Scalars['String']['input'];
  packageName: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  workSchedule: WorkScheduleInput;
};

export type CreateProfileInput = {
  address: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  dataOfBirth: Scalars['DateTime']['input'];
  email: Scalars['String']['input'];
  ethnic: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  gender: EGender;
  identity: Scalars['String']['input'];
  job: Scalars['String']['input'];
  medicalInsurance: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  relationship: Scalars['String']['input'];
};

export type CreateRegisterDoctorInput = {
  date: Scalars['DateTime']['input'];
  doctorId: Scalars['String']['input'];
  isHealthInsurance: Scalars['Boolean']['input'];
  profileId: Scalars['String']['input'];
  session: SessionInput;
};

export type CreateRegisterPackageInput = {
  date: Scalars['DateTime']['input'];
  isHealthInsurance: Scalars['Boolean']['input'];
  packageId: Scalars['String']['input'];
  profileId: Scalars['String']['input'];
  sessionId: Scalars['String']['input'];
};

export type CreateRegisterSpecialtyInput = {
  date: Scalars['DateTime']['input'];
  isHealthInsurance: Scalars['Boolean']['input'];
  profileId: Scalars['String']['input'];
  sessionId: Scalars['String']['input'];
  specialtyId: Scalars['String']['input'];
};

export type CreateRegisterVaccineInput = {
  date: Scalars['DateTime']['input'];
  isHealthInsurance: Scalars['Boolean']['input'];
  profileId: Scalars['String']['input'];
  sessionId: Scalars['String']['input'];
  vaccineId: Scalars['String']['input'];
};

export type CreateUserByAdminInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateVaccineInput = {
  countryOfOrigin: Scalars['String']['input'];
  indication: Scalars['String']['input'];
  medicalFactilitiesId: Scalars['String']['input'];
  note: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  prophylactic: Scalars['String']['input'];
  vaccineName: Scalars['String']['input'];
  workSchedule: WorkScheduleInput;
};

export type Customer = {
  __typename?: 'Customer';
  address: Scalars['String']['output'];
  dateOfBirth: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  ethnic: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  numberPhone: Scalars['String']['output'];
  profiles?: Maybe<Array<Profile>>;
  userId: Scalars['String']['output'];
};

export type Doctor = {
  __typename?: 'Doctor';
  academicTitle?: Maybe<Scalars['String']['output']>;
  avatar: LinkImage;
  degree: Scalars['String']['output'];
  discription: Scalars['String']['output'];
  email: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  medicalFactilitiesId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  numberPhone: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  specialistId: Scalars['String']['output'];
  specialty?: Maybe<MedicalSpecialties>;
  userId: Scalars['String']['output'];
  workSchedule: WorkSchedule;
};

export enum EAcademicTitle {
  AssociateProfesso = 'AssociateProfesso',
  Professor = 'Professor'
}

export enum EDayOfWeed {
  Friday = 'Friday',
  Monday = 'Monday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
  Thursday = 'Thursday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday'
}

export enum EDegree {
  Doctor = 'Doctor',
  DoctorS1 = 'DoctorS1',
  DoctorS2 = 'DoctorS2',
  Doctorate = 'Doctorate',
  MasterDoctor = 'MasterDoctor'
}

export enum EGender {
  Female = 'Female',
  Male = 'Male'
}

export enum EGenderPackage {
  Both = 'Both',
  Female = 'Female',
  Male = 'Male'
}

export enum EPermission {
  Magager = 'Magager',
  MagagerBlog = 'MagagerBlog',
  MagagerPackage = 'MagagerPackage',
  MagagerVaccine = 'MagagerVaccine',
  ManagerSpecialty = 'ManagerSpecialty'
}

export enum EStateRegister {
  Pending = 'Pending',
  Success = 'Success'
}

export enum EStatusService {
  Close = 'Close',
  Open = 'Open'
}

export enum ETypeOfNotification {
  NotSeen = 'NotSeen',
  Seen = 'Seen'
}

export type Evaluate = {
  __typename?: 'Evaluate';
  comment: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rating: Scalars['Float']['output'];
  registerId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type GeneralInfor = {
  __typename?: 'GeneralInfor';
  ID?: Maybe<Scalars['String']['output']>;
  address: Scalars['String']['output'];
  company: Scalars['String']['output'];
  copyrigth: Scalars['String']['output'];
  email: Scalars['String']['output'];
  hotline: Scalars['String']['output'];
  liscenceBusiness: Scalars['String']['output'];
  liscenceOparating: Scalars['String']['output'];
  logoFooter: LinkImage;
  logoHeader: LinkImage;
};

export type GeneralInforUpdateInput = {
  address: Scalars['String']['input'];
  company: Scalars['String']['input'];
  copyrigth: Scalars['String']['input'];
  email: Scalars['String']['input'];
  hotline: Scalars['String']['input'];
  liscenceBusiness: Scalars['String']['input'];
  liscenceOparating: Scalars['String']['input'];
  logoFooter?: InputMaybe<LinkImageInput>;
  logoHeader?: InputMaybe<LinkImageInput>;
};

export type GetRegisterByOptionInput = {
  date: Scalars['DateTime']['input'];
  doctorId?: InputMaybe<Scalars['String']['input']>;
  packageId?: InputMaybe<Scalars['String']['input']>;
  specialtyId?: InputMaybe<Scalars['String']['input']>;
  vaccineId?: InputMaybe<Scalars['String']['input']>;
};

export type LinkImage = {
  __typename?: 'LinkImage';
  filename: Scalars['String']['output'];
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type LinkImageInput = {
  filename: Scalars['String']['input'];
  type: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type LoginRespone = {
  __typename?: 'LoginRespone';
  access_token: Scalars['String']['output'];
  user: User;
};

export type LoginUserInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type LogoutUser = {
  __typename?: 'LogoutUser';
  logout: Scalars['Boolean']['output'];
};

export type MedicalFacilities = {
  __typename?: 'MedicalFacilities';
  address: Scalars['String']['output'];
  dateOff?: Maybe<Array<Scalars['DateTime']['output']>>;
  discription: Scalars['String']['output'];
  doctors?: Maybe<Array<Doctor>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: LinkImage;
  introduce: Scalars['String']['output'];
  lat?: Maybe<Scalars['Float']['output']>;
  legalRepresentation: Scalars['String']['output'];
  lng?: Maybe<Scalars['Float']['output']>;
  logo: LinkImage;
  medicalFacilityName: Scalars['String']['output'];
  medicalSpecialties?: Maybe<Array<MedicalSpecialties>>;
  medicalStaffs?: Maybe<Array<MedicalStaff>>;
  numberPhone: Scalars['String']['output'];
  operatingStatus: Scalars['String']['output'];
  packages?: Maybe<Array<Package>>;
  schedule: Scalars['String']['output'];
  status: Scalars['String']['output'];
  taxCode: Scalars['String']['output'];
  totalDoctors?: Maybe<Scalars['Float']['output']>;
  totalPackages?: Maybe<Scalars['Float']['output']>;
  totalSpecialties?: Maybe<Scalars['Float']['output']>;
  totalVaccinations?: Maybe<Scalars['Float']['output']>;
  userId: Scalars['String']['output'];
  vaccinations?: Maybe<Array<Vaccination>>;
};

export type MedicalSpecialties = {
  __typename?: 'MedicalSpecialties';
  discription: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  medicalFactilityId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  workSchedule?: Maybe<WorkSchedule>;
};

export type MedicalStaff = {
  __typename?: 'MedicalStaff';
  email: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  medicalFacilityId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  numberPhone: Scalars['String']['output'];
  permissions: Array<Scalars['String']['output']>;
  specialties?: Maybe<Array<MedicalSpecialties>>;
  specialtyId?: Maybe<Array<Scalars['String']['output']>>;
  userId: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  activeUser: User;
  confirmRegister: Register;
  createDoctor: Doctor;
  createEvaluate: Evaluate;
  createMedicalFacility: MedicalFacilities;
  createMedicalSpecialty: MedicalSpecialties;
  createMedicalStaff: MedicalStaff;
  createNotifition: Notification;
  createPackage: Package;
  createProfile: Profile;
  createRegisterDoctor: Register;
  createRegisterPackage: Register;
  createRegisterSpecialty: Register;
  createRegisterVaccine: Register;
  createVaccination: Vaccination;
  createcustomer: Customer;
  deleteDoctor: Doctor;
  deleteEvaluate: Evaluate;
  deleteMecialSpecialty: MedicalSpecialties;
  deleteMedicalFacility: MedicalFacilities;
  deleteMedicalStaff: MedicalStaff;
  deleteNotification: Notification;
  deletePackage: Package;
  deleteProfile: Profile;
  deleteUser: User;
  deleteVaccination: Vaccination;
  login: LoginRespone;
  logout: LogoutUser;
  signup: User;
  signupUser: User;
  updateCustomer: Customer;
  updateDoctor: Doctor;
  updateEvaluate: Evaluate;
  updateGeneralInfor: GeneralInfor;
  updateMedicalFacility: MedicalFacilities;
  updateMedicalSpecialty: MedicalSpecialties;
  updateMedicalStaff: MedicalStaff;
  updateNotification: Notification;
  updatePackage: Package;
  updateProfile: Profile;
  updateRegister: Register;
  updateRoles: User;
  updateSetting: Setting;
  updateUser: User;
  updateUserWithPass: User;
  updateVaccination: Vaccination;
};


export type MutationActiveUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationConfirmRegisterArgs = {
  input: ConfirmRegisterInput;
};


export type MutationCreateDoctorArgs = {
  createDoctorInput: CreateDoctorInput;
};


export type MutationCreateEvaluateArgs = {
  input: CreateEvaluateInput;
};


export type MutationCreateMedicalFacilityArgs = {
  input: CreateMedicalFacilityInput;
};


export type MutationCreateMedicalSpecialtyArgs = {
  input: CreateMedicalSpecialtyInput;
};


export type MutationCreateMedicalStaffArgs = {
  input: CreateMedicalStaffInput;
};


export type MutationCreateNotifitionArgs = {
  input: CreateNotificationInput;
};


export type MutationCreatePackageArgs = {
  input: CreatePackageInput;
};


export type MutationCreateProfileArgs = {
  input: CreateProfileInput;
};


export type MutationCreateRegisterDoctorArgs = {
  input: CreateRegisterDoctorInput;
};


export type MutationCreateRegisterPackageArgs = {
  input: CreateRegisterPackageInput;
};


export type MutationCreateRegisterSpecialtyArgs = {
  input: CreateRegisterSpecialtyInput;
};


export type MutationCreateRegisterVaccineArgs = {
  input: CreateRegisterVaccineInput;
};


export type MutationCreateVaccinationArgs = {
  input: CreateVaccineInput;
};


export type MutationCreatecustomerArgs = {
  input: CreateCustomerInput;
};


export type MutationDeleteDoctorArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteEvaluateArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMecialSpecialtyArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMedicalFacilityArgs = {
  input: Scalars['String']['input'];
};


export type MutationDeleteMedicalStaffArgs = {
  input: Scalars['String']['input'];
};


export type MutationDeleteNotificationArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePackageArgs = {
  input: Scalars['String']['input'];
};


export type MutationDeleteProfileArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteVaccinationArgs = {
  input: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationSignupArgs = {
  createUserInput: CreateUserInput;
};


export type MutationSignupUserArgs = {
  createUserInput: CreateUserByAdminInput;
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


export type MutationUpdateDoctorArgs = {
  input: UpdateDoctorInput;
};


export type MutationUpdateEvaluateArgs = {
  input: UpdateEvaluateInput;
};


export type MutationUpdateGeneralInforArgs = {
  updateGeneralInforInput: GeneralInforUpdateInput;
};


export type MutationUpdateMedicalFacilityArgs = {
  input: UpdateMedicalFacilityInput;
};


export type MutationUpdateMedicalSpecialtyArgs = {
  input: UpdateMedicalSpecialtyInput;
};


export type MutationUpdateMedicalStaffArgs = {
  input: UpdateMedicalStaffInput;
};


export type MutationUpdateNotificationArgs = {
  input: UpdateNotificationInput;
};


export type MutationUpdatePackageArgs = {
  input: UpdatePackageInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationUpdateRegisterArgs = {
  input: UpdateRegisterInput;
};


export type MutationUpdateRolesArgs = {
  updateRolesInput: UpdateRolesInput;
};


export type MutationUpdateSettingArgs = {
  updateSettingInput: UpdateSettingInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateUserWithPassArgs = {
  updateUserInput: UpdateUserWithPassInput;
};


export type MutationUpdateVaccinationArgs = {
  input: UpdateVaccineInput;
};

export type Notification = {
  __typename?: 'Notification';
  content: Scalars['String']['output'];
  detailPath: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  status: ETypeOfNotification;
  userId: Scalars['String']['output'];
};

export type Package = {
  __typename?: 'Package';
  examinationDetails: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: LinkImage;
  medicalFactilitiesId: Scalars['String']['output'];
  packageName: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  workSchedule: WorkSchedule;
};

export type Profile = {
  __typename?: 'Profile';
  address: Scalars['String']['output'];
  customer?: Maybe<Customer>;
  customerId: Scalars['String']['output'];
  dataOfBirth: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  ethnic: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  identity?: Maybe<Scalars['String']['output']>;
  job: Scalars['String']['output'];
  medicalInsurance?: Maybe<Scalars['String']['output']>;
  numberPhone: Scalars['String']['output'];
  register?: Maybe<Array<Register>>;
  relationship: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  checklogin: User;
  getAllCustomer: Array<Customer>;
  getAllCustomerPagination: Array<Customer>;
  getAllDoctor: Array<Doctor>;
  getAllDoctorByFacilityId: Array<Doctor>;
  getAllDoctorPagination: Array<Doctor>;
  getAllDoctorPaginationOfFacility: Array<Doctor>;
  getAllDoctorPending: Array<Doctor>;
  getAllEvaluate: Array<Evaluate>;
  getAllMecialSpecialty: Array<MedicalSpecialties>;
  getAllMedicalFacility: Array<MedicalFacilities>;
  getAllMedicalFacilityPagination: Array<MedicalFacilities>;
  getAllMedicalStaff: Array<MedicalStaff>;
  getAllNotification: Array<Notification>;
  getAllPackage: Array<Package>;
  getAllPackageByFacilityId: Array<Package>;
  getAllPackageSelect: Array<Package>;
  getAllProfile: Array<Profile>;
  getAllRegisterByOption: Array<Register>;
  getAllStaffPagination: Array<MedicalStaff>;
  getAllUsersPagination: Array<User>;
  getAllVacation: Array<Vaccination>;
  getAllVaccinationByFacilityId: Array<Vaccination>;
  getAllVaccinationSelect: Array<Vaccination>;
  getDoctorbyId: Doctor;
  getDoctorbyUserId: Doctor;
  getEvaluateById: Evaluate;
  getGeneralInfor: GeneralInfor;
  getMedicalFacilityById: MedicalFacilities;
  getMedicalFacilityByUserId: MedicalFacilities;
  getMedicalSpecialtiesByMedicalFacilityId: Array<MedicalSpecialties>;
  getMedicalSpecialtyById: MedicalSpecialties;
  getMedicalSpecialtySelect: Array<MedicalSpecialties>;
  getMedicalStaffByFacilityId: Array<MedicalStaff>;
  getMedicalStaffById: MedicalStaff;
  getPackageById: Package;
  getProfileByCustomerId: Array<Profile>;
  getSetting: Setting;
  getTotalCustomersCount: Scalars['Float']['output'];
  getTotalDoctorsCount: Scalars['Float']['output'];
  getTotalFacilitiesCount: Scalars['Float']['output'];
  getUser: User;
  getUserDoctorPending: Array<User>;
  getUserDoctorPendingUpdate: Array<User>;
  getUserFacilitySelect: Array<User>;
  getUserMedicalNon: Array<User>;
  getUserSelect: Array<User>;
  getUserSelected: User;
  getUserStaffSelect: Array<User>;
  getVaccineById: Vaccination;
  totalStaffsCount: Scalars['Float']['output'];
  totalUsersCount: Scalars['Float']['output'];
  users: Array<User>;
};


export type QueryGetAllCustomerPaginationArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllDoctorByFacilityIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetAllDoctorPaginationArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllDoctorPaginationOfFacilityArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllMedicalFacilityPaginationArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllPackageByFacilityIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetAllPackageSelectArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetAllRegisterByOptionArgs = {
  input: GetRegisterByOptionInput;
};


export type QueryGetAllStaffPaginationArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllUsersPaginationArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllVaccinationByFacilityIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetAllVaccinationSelectArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetDoctorbyIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetDoctorbyUserIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetEvaluateByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetMedicalFacilityByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetMedicalFacilityByUserIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetMedicalSpecialtiesByMedicalFacilityIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetMedicalSpecialtyByIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetMedicalSpecialtySelectArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetMedicalStaffByFacilityIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetMedicalStaffByIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetPackageByIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetProfileByCustomerIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetTotalCustomersCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalDoctorsCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalFacilitiesCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUserArgs = {
  username: Scalars['String']['input'];
};


export type QueryGetUserDoctorPendingUpdateArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetUserFacilitySelectArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetUserSelectArgs = {
  roleInput: UserSelectInput;
};


export type QueryGetUserSelectedArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUserStaffSelectArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetVaccineByIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryTotalStaffsCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTotalUsersCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type Register = {
  __typename?: 'Register';
  date: Scalars['DateTime']['output'];
  doctorId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isHealthInsurance: Scalars['Boolean']['output'];
  packageId?: Maybe<Scalars['String']['output']>;
  profile: Profile;
  profileId: Scalars['String']['output'];
  session: Session;
  specialtyId?: Maybe<Scalars['String']['output']>;
  state: Scalars['String']['output'];
  typeOfService: Scalars['String']['output'];
  vaccineId?: Maybe<Scalars['String']['output']>;
};

export enum Role {
  Admin = 'Admin',
  Customer = 'Customer',
  Doctor = 'Doctor',
  Facility = 'Facility',
  Staff = 'Staff',
  User = 'User'
}

export type Schedule = {
  __typename?: 'Schedule';
  dayOfWeek: Scalars['String']['output'];
  sessions: Array<Session>;
};

export type ScheduleInput = {
  dayOfWeek: EDayOfWeed;
  sessions: Array<SessionInput>;
};

export type Session = {
  __typename?: 'Session';
  endTime: Scalars['String']['output'];
  startTime: Scalars['String']['output'];
};

export type SessionInput = {
  endTime: Scalars['String']['input'];
  startTime: Scalars['String']['input'];
};

export type Setting = {
  __typename?: 'Setting';
  defaultLang: Scalars['String']['output'];
};

export type UpdateCustomerInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  ethnic?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<EGender>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  numberPhone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDoctorInput = {
  academicTitle?: InputMaybe<EAcademicTitle>;
  avatar: LinkImageInput;
  degree: EDegree;
  discription: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gender: EGender;
  id: Scalars['String']['input'];
  medicalFactilitiesId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  specialistId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  workSchedule: WorkScheduleInput;
};

export type UpdateEvaluateInput = {
  comment: Scalars['String']['input'];
  id: Scalars['String']['input'];
  rating: Scalars['Float']['input'];
  registerId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UpdateMedicalFacilityInput = {
  address: Scalars['String']['input'];
  dateOff?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  discription: Scalars['String']['input'];
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  image: LinkImageInput;
  introduce: Scalars['String']['input'];
  lat?: InputMaybe<Scalars['Float']['input']>;
  legalRepresentation: Scalars['String']['input'];
  lng?: InputMaybe<Scalars['Float']['input']>;
  logo: LinkImageInput;
  medicalFacilityName: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  operatingStatus: Scalars['String']['input'];
  schedule: Scalars['String']['input'];
  status: Scalars['String']['input'];
  taxCode: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UpdateMedicalSpecialtyInput = {
  discription: Scalars['String']['input'];
  id: Scalars['String']['input'];
  medicalFactilityId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  workSchedule?: InputMaybe<WorkScheduleInput>;
};

export type UpdateMedicalStaffInput = {
  email: Scalars['String']['input'];
  gender: EGender;
  id: Scalars['String']['input'];
  medicalFacilityId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  permissions: Array<EPermission>;
  specialtyId?: InputMaybe<Array<Scalars['String']['input']>>;
  userId: Scalars['String']['input'];
};

export type UpdateNotificationInput = {
  content: Scalars['String']['input'];
  detailPath: Scalars['String']['input'];
  id: Scalars['String']['input'];
  status: ETypeOfNotification;
  userId: Scalars['String']['input'];
};

export type UpdatePackageInput = {
  examinationDetails: Scalars['String']['input'];
  gender: EGenderPackage;
  id: Scalars['String']['input'];
  image: LinkImageInput;
  medicalFactilitiesId: Scalars['String']['input'];
  packageName: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  workSchedule: WorkScheduleInput;
};

export type UpdateProfileInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  dataOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  ethnic?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  gender: EGender;
  id: Scalars['String']['input'];
  identity?: InputMaybe<Scalars['String']['input']>;
  job?: InputMaybe<Scalars['String']['input']>;
  medicalInsurance?: InputMaybe<Scalars['String']['input']>;
  numberPhone?: InputMaybe<Scalars['String']['input']>;
  relationship?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRegisterInput = {
  id: Scalars['String']['input'];
  state: EStateRegister;
};

export type UpdateRolesInput = {
  id: Scalars['String']['input'];
  roles: Array<Role>;
};

export type UpdateSettingInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateUserInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  linkImage?: InputMaybe<LinkImageInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserWithPassInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  linkImage?: InputMaybe<LinkImageInput>;
  password: Scalars['String']['input'];
  passwordNew: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UpdateVaccineInput = {
  countryOfOrigin: Scalars['String']['input'];
  id: Scalars['String']['input'];
  indication: Scalars['String']['input'];
  medicalFactilitiesId: Scalars['String']['input'];
  note: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  prophylactic: Scalars['String']['input'];
  vaccineName: Scalars['String']['input'];
  workSchedule: WorkScheduleInput;
};

export type User = {
  __typename?: 'User';
  active?: Maybe<Scalars['Boolean']['output']>;
  customer?: Maybe<Customer>;
  doctor?: Maybe<Doctor>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  linkImage?: Maybe<LinkImage>;
  medicalFacilities?: Maybe<MedicalFacilities>;
  password: Scalars['String']['output'];
  roles?: Maybe<Array<Scalars['String']['output']>>;
  username: Scalars['String']['output'];
};

export type UserSelectInput = {
  role: Role;
};

export type Vaccination = {
  __typename?: 'Vaccination';
  countryOfOrigin: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  indication: Scalars['String']['output'];
  medicalFactilitiesId: Scalars['String']['output'];
  note: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  prophylactic: Scalars['String']['output'];
  vaccineName: Scalars['String']['output'];
  workSchedule: WorkSchedule;
};

export type WorkSchedule = {
  __typename?: 'WorkSchedule';
  dayOff: Array<Scalars['DateTime']['output']>;
  numberSlot: Scalars['Float']['output'];
  schedule: Array<Schedule>;
  status: Scalars['String']['output'];
};

export type WorkScheduleInput = {
  dayOff: Array<Scalars['DateTime']['input']>;
  numberSlot: Scalars['Float']['input'];
  schedule: Array<ScheduleInput>;
  status: EStatusService;
};

export type LoginMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginRespone', access_token: string, user: { __typename?: 'User', email: string, username: string } } };

export type UdateUserByIdMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UdateUserByIdMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string } };

export type SingupByAdminMutationVariables = Exact<{
  input: CreateUserByAdminInput;
}>;


export type SingupByAdminMutation = { __typename?: 'Mutation', signupUser: { __typename?: 'User', id: string } };

export type UpdateUserByIdWithPassMutationVariables = Exact<{
  input: UpdateUserWithPassInput;
}>;


export type UpdateUserByIdWithPassMutation = { __typename?: 'Mutation', updateUserWithPass: { __typename?: 'User', id: string } };

export type UpdateGeneralInforMutationVariables = Exact<{
  input: GeneralInforUpdateInput;
}>;


export type UpdateGeneralInforMutation = { __typename?: 'Mutation', updateGeneralInfor: { __typename?: 'GeneralInfor', company: string, address: string, copyrigth: string, email: string, hotline: string, liscenceBusiness: string, liscenceOparating: string, ID?: string | null, logoFooter: { __typename?: 'LinkImage', filename: string, url: string, type: string }, logoHeader: { __typename?: 'LinkImage', filename: string, url: string, type: string } } };

export type ActiveUserMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type ActiveUserMutation = { __typename?: 'Mutation', activeUser: { __typename?: 'User', username: string, active?: boolean | null } };

export type UpdateRolesMutationVariables = Exact<{
  input: UpdateRolesInput;
}>;


export type UpdateRolesMutation = { __typename?: 'Mutation', updateRoles: { __typename?: 'User', roles?: Array<string> | null } };

export type CreateMedicalFacilityMutationVariables = Exact<{
  input: CreateMedicalFacilityInput;
}>;


export type CreateMedicalFacilityMutation = { __typename?: 'Mutation', createMedicalFacility: { __typename?: 'MedicalFacilities', id: string, userId: string, medicalFacilityName: string, address: string, numberPhone: string, email: string, lat?: number | null, lng?: number | null, discription: string, introduce: string, operatingStatus: string, legalRepresentation: string, taxCode: string, dateOff?: Array<any> | null, status: string, schedule: string, image: { __typename?: 'LinkImage', filename: string, type: string, url: string } } };

export type UpdateMedicalFacilityMutationVariables = Exact<{
  input: UpdateMedicalFacilityInput;
}>;


export type UpdateMedicalFacilityMutation = { __typename?: 'Mutation', updateMedicalFacility: { __typename?: 'MedicalFacilities', id: string, userId: string, medicalFacilityName: string, address: string, numberPhone: string, email: string, lat?: number | null, lng?: number | null, discription: string, introduce: string, operatingStatus: string, legalRepresentation: string, taxCode: string, dateOff?: Array<any> | null, status: string, schedule: string, image: { __typename?: 'LinkImage', filename: string, type: string, url: string } } };

export type DeleteMedicalFacilityMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type DeleteMedicalFacilityMutation = { __typename?: 'Mutation', deleteMedicalFacility: { __typename?: 'MedicalFacilities', id: string } };

export type CreateDoctorMutationVariables = Exact<{
  input: CreateDoctorInput;
}>;


export type CreateDoctorMutation = { __typename?: 'Mutation', createDoctor: { __typename?: 'Doctor', id: string, userId: string, medicalFactilitiesId: string, name: string, gender: string, numberPhone: string, email: string, academicTitle?: string | null, degree: string, specialistId: string, discription: string, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string }> }> } } };

export type UpdateDoctorMutationVariables = Exact<{
  input: UpdateDoctorInput;
}>;


export type UpdateDoctorMutation = { __typename?: 'Mutation', updateDoctor: { __typename?: 'Doctor', id: string, userId: string, medicalFactilitiesId: string, name: string, gender: string, numberPhone: string, email: string, academicTitle?: string | null, degree: string, specialistId: string, discription: string, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string }> }> } } };

export type DeleteDoctorMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type DeleteDoctorMutation = { __typename?: 'Mutation', deleteDoctor: { __typename?: 'Doctor', id: string } };

export type CreatePackageMutationVariables = Exact<{
  input: CreatePackageInput;
}>;


export type CreatePackageMutation = { __typename?: 'Mutation', createPackage: { __typename?: 'Package', id: string, medicalFactilitiesId: string, packageName: string, gender: string, price: number, examinationDetails: string, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string }> }> }, image: { __typename?: 'LinkImage', filename: string, type: string, url: string } } };

export type DeletePackageMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type DeletePackageMutation = { __typename?: 'Mutation', deletePackage: { __typename?: 'Package', id: string } };

export type UpdatePackageMutationVariables = Exact<{
  input: UpdatePackageInput;
}>;


export type UpdatePackageMutation = { __typename?: 'Mutation', updatePackage: { __typename?: 'Package', id: string } };

export type DeleteMecialSpecialtyMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type DeleteMecialSpecialtyMutation = { __typename?: 'Mutation', deleteMecialSpecialty: { __typename?: 'MedicalSpecialties', id: string } };

export type CreateMedicalSpecialtyMutationVariables = Exact<{
  input: CreateMedicalSpecialtyInput;
}>;


export type CreateMedicalSpecialtyMutation = { __typename?: 'Mutation', createMedicalSpecialty: { __typename?: 'MedicalSpecialties', id: string, medicalFactilityId: string, name: string, price: number, discription: string, workSchedule?: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', endTime: string, startTime: string }> }> } | null } };

export type UpdateMedicalSpecialtyMutationVariables = Exact<{
  input: UpdateMedicalSpecialtyInput;
}>;


export type UpdateMedicalSpecialtyMutation = { __typename?: 'Mutation', updateMedicalSpecialty: { __typename?: 'MedicalSpecialties', id: string } };

export type CreateVaccinationMutationVariables = Exact<{
  input: CreateVaccineInput;
}>;


export type CreateVaccinationMutation = { __typename?: 'Mutation', createVaccination: { __typename?: 'Vaccination', id: string } };

export type UpdateVaccinationMutationVariables = Exact<{
  input: UpdateVaccineInput;
}>;


export type UpdateVaccinationMutation = { __typename?: 'Mutation', updateVaccination: { __typename?: 'Vaccination', id: string } };

export type DeleteVaccinationMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type DeleteVaccinationMutation = { __typename?: 'Mutation', deleteVaccination: { __typename?: 'Vaccination', id: string } };

export type CreateMedicalStaffMutationVariables = Exact<{
  input: CreateMedicalStaffInput;
}>;


export type CreateMedicalStaffMutation = { __typename?: 'Mutation', createMedicalStaff: { __typename?: 'MedicalStaff', id: string } };

export type ConfirmRegisterMutationVariables = Exact<{
  input: ConfirmRegisterInput;
}>;


export type ConfirmRegisterMutation = { __typename?: 'Mutation', confirmRegister: { __typename?: 'Register', id: string } };

export type DeleteMedicalStaffMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type DeleteMedicalStaffMutation = { __typename?: 'Mutation', deleteMedicalStaff: { __typename?: 'MedicalStaff', id: string } };

export type UpdateMedicalStaffMutationVariables = Exact<{
  input: UpdateMedicalStaffInput;
}>;


export type UpdateMedicalStaffMutation = { __typename?: 'Mutation', updateMedicalStaff: { __typename?: 'MedicalStaff', id: string } };

export type CheckLoginQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckLoginQueryQuery = { __typename?: 'Query', checklogin: { __typename?: 'User', id: string, email: string, username: string, password: string, roles?: Array<string> | null, linkImage?: { __typename?: 'LinkImage', filename: string, type: string, url: string } | null } };

export type GetSettingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSettingQuery = { __typename?: 'Query', getSetting: { __typename?: 'Setting', defaultLang: string } };

export type GetGeneralInforQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGeneralInforQuery = { __typename?: 'Query', getGeneralInfor: { __typename?: 'GeneralInfor', company: string, address: string, copyrigth: string, email: string, hotline: string, liscenceBusiness: string, liscenceOparating: string, ID?: string | null, logoFooter: { __typename?: 'LinkImage', filename: string, url: string, type: string }, logoHeader: { __typename?: 'LinkImage', filename: string, url: string } } };

export type GetAllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, username: string, password: string, roles?: Array<string> | null, active?: boolean | null, linkImage?: { __typename?: 'LinkImage', filename: string, type: string, url: string } | null }> };

export type GetUserFacilitySelectQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetUserFacilitySelectQuery = { __typename?: 'Query', getUserFacilitySelect: Array<{ __typename?: 'User', id: string, username: string }> };

export type GetUserDoctorPendingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserDoctorPendingQuery = { __typename?: 'Query', getUserDoctorPending: Array<{ __typename?: 'User', id: string, username: string }> };

export type GetUserDoctorPendingUpdateQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetUserDoctorPendingUpdateQuery = { __typename?: 'Query', getUserDoctorPendingUpdate: Array<{ __typename?: 'User', id: string, username: string }> };

export type GetAllUserStaffSelectQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetAllUserStaffSelectQuery = { __typename?: 'Query', getUserStaffSelect: Array<{ __typename?: 'User', id: string, username: string }> };

export type GetAllMedicalFacilityQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMedicalFacilityQuery = { __typename?: 'Query', getAllMedicalFacility: Array<{ __typename?: 'MedicalFacilities', id: string, userId: string, medicalFacilityName: string, address: string, numberPhone: string, email: string, lat?: number | null, lng?: number | null, discription: string, introduce: string, operatingStatus: string, legalRepresentation: string, taxCode: string, status: string, dateOff?: Array<any> | null, schedule: string, logo: { __typename?: 'LinkImage', filename: string, type: string, url: string }, image: { __typename?: 'LinkImage', filename: string, type: string, url: string } }> };

export type GetAllMedicalFacilitySelectQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMedicalFacilitySelectQuery = { __typename?: 'Query', getAllMedicalFacility: Array<{ __typename?: 'MedicalFacilities', id: string, medicalFacilityName: string }> };

export type GetMedicalFacilityByIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetMedicalFacilityByIdQuery = { __typename?: 'Query', getMedicalFacilityById: { __typename?: 'MedicalFacilities', id: string, userId: string, medicalFacilityName: string, address: string, numberPhone: string, email: string, lat?: number | null, lng?: number | null, discription: string, introduce: string, operatingStatus: string, legalRepresentation: string, taxCode: string, status: string, dateOff?: Array<any> | null, schedule: string, logo: { __typename?: 'LinkImage', filename: string, type: string, url: string }, image: { __typename?: 'LinkImage', filename: string, type: string, url: string } } };

export type GetMedicalFacilityByUserIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetMedicalFacilityByUserIdQuery = { __typename?: 'Query', getMedicalFacilityByUserId: { __typename?: 'MedicalFacilities', id: string, userId: string, medicalFacilityName: string, address: string, numberPhone: string, email: string, lat?: number | null, lng?: number | null, discription: string, introduce: string, operatingStatus: string, legalRepresentation: string, taxCode: string, status: string, dateOff?: Array<any> | null, schedule: string, totalDoctors?: number | null, totalPackages?: number | null, totalSpecialties?: number | null, totalVaccinations?: number | null, logo: { __typename?: 'LinkImage', filename: string, type: string, url: string }, image: { __typename?: 'LinkImage', filename: string, type: string, url: string } } };

export type GetGeneralMedicalFacilityByUserIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetGeneralMedicalFacilityByUserIdQuery = { __typename?: 'Query', getMedicalFacilityByUserId: { __typename?: 'MedicalFacilities', id: string, userId: string, medicalFacilityName: string, address: string, numberPhone: string, email: string, lat?: number | null, lng?: number | null, discription: string, introduce: string, operatingStatus: string, legalRepresentation: string, taxCode: string, status: string, dateOff?: Array<any> | null, schedule: string, logo: { __typename?: 'LinkImage', filename: string, type: string, url: string }, image: { __typename?: 'LinkImage', filename: string, type: string, url: string } } };

export type GetMedicalFacilityIdByUserIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetMedicalFacilityIdByUserIdQuery = { __typename?: 'Query', getMedicalFacilityByUserId: { __typename?: 'MedicalFacilities', id: string, userId: string, medicalFacilityName: string } };

export type GetAllMedicalFacilityPaginationQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllMedicalFacilityPaginationQuery = { __typename?: 'Query', getAllMedicalFacilityPagination: Array<{ __typename?: 'MedicalFacilities', id: string, userId: string, medicalFacilityName: string, address: string, numberPhone: string, email: string, lat?: number | null, lng?: number | null, discription: string, introduce: string, operatingStatus: string, legalRepresentation: string, taxCode: string, status: string, dateOff?: Array<any> | null, schedule: string, logo: { __typename?: 'LinkImage', filename: string, type: string, url: string }, image: { __typename?: 'LinkImage', filename: string, type: string, url: string } }> };

export type GetTotalFacilitiesCountQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTotalFacilitiesCountQuery = { __typename?: 'Query', getTotalFacilitiesCount: number };

export type GetMedicalFacilityNameByIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetMedicalFacilityNameByIdQuery = { __typename?: 'Query', getMedicalFacilityById: { __typename?: 'MedicalFacilities', id: string, medicalFacilityName: string } };

export type GetMedicalStaffByFacilityIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetMedicalStaffByFacilityIdQuery = { __typename?: 'Query', getMedicalStaffByFacilityId: Array<{ __typename?: 'MedicalStaff', id: string, userId: string, medicalFacilityId: string, name: string, gender: string, numberPhone: string, email: string, permissions: Array<string>, specialtyId?: Array<string> | null }> };

export type GetMedicalStaffByIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetMedicalStaffByIdQuery = { __typename?: 'Query', getMedicalStaffById: { __typename?: 'MedicalStaff', id: string, userId: string, medicalFacilityId: string, name: string, gender: string, numberPhone: string, email: string, permissions: Array<string>, specialtyId?: Array<string> | null } };

export type GetUserSelectedQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetUserSelectedQuery = { __typename?: 'Query', getUserSelected: { __typename?: 'User', id: string, username: string } };

export type GetMedicalSpecialtiesSelectQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetMedicalSpecialtiesSelectQuery = { __typename?: 'Query', getMedicalSpecialtiesByMedicalFacilityId: Array<{ __typename?: 'MedicalSpecialties', id: string, name: string }> };

export type GetDoctorbyIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetDoctorbyIdQuery = { __typename?: 'Query', getDoctorbyId: { __typename?: 'Doctor', id: string, userId: string, medicalFactilitiesId: string, name: string, gender: string, numberPhone: string, email: string, academicTitle?: string | null, degree: string, specialistId: string, discription: string, price: number, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, numberSlot: number, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string }> }> }, specialty?: { __typename?: 'MedicalSpecialties', id: string, name: string } | null } };

export type GetAllDoctorPendingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDoctorPendingQuery = { __typename?: 'Query', getAllDoctorPending: Array<{ __typename?: 'Doctor', id: string, name: string, gender: string, academicTitle?: string | null, degree: string, numberPhone: string, email: string, discription: string, price: number, userId: string, medicalFactilitiesId: string, specialistId: string, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', endTime: string, startTime: string }> }> } }> };

export type GetAllDoctorByFacilityIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetAllDoctorByFacilityIdQuery = { __typename?: 'Query', getAllDoctorByFacilityId: Array<{ __typename?: 'Doctor', id: string, name: string, gender: string, academicTitle?: string | null, degree: string, numberPhone: string, email: string, discription: string, price: number, userId: string, medicalFactilitiesId: string, specialistId: string, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', endTime: string, startTime: string }> }> } }> };

export type GetDoctorToUpdateByIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetDoctorToUpdateByIdQuery = { __typename?: 'Query', getDoctorbyId: { __typename?: 'Doctor', id: string, userId: string, medicalFactilitiesId: string, name: string, gender: string, numberPhone: string, email: string, academicTitle?: string | null, degree: string, specialistId: string, discription: string, price: number, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, numberSlot: number, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string }> }> } } };

export type GetAllDoctorPaginationQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllDoctorPaginationQuery = { __typename?: 'Query', getAllDoctorPagination: Array<{ __typename?: 'Doctor', id: string, userId: string, medicalFactilitiesId: string, name: string, gender: string, numberPhone: string, email: string, academicTitle?: string | null, degree: string, specialistId: string, discription: string, price: number, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, numberSlot: number, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string }> }> } }> };

export type GetAllDoctorPaginationOfFacilityQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
}>;


export type GetAllDoctorPaginationOfFacilityQuery = { __typename?: 'Query', getAllDoctorPaginationOfFacility: Array<{ __typename?: 'Doctor', id: string, userId: string, medicalFactilitiesId: string, name: string, gender: string, numberPhone: string, email: string, academicTitle?: string | null, degree: string, specialistId: string, discription: string, price: number, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, numberSlot: number, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string }> }> } }> };

export type GetTotalDoctorsCountQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTotalDoctorsCountQuery = { __typename?: 'Query', getTotalDoctorsCount: number };

export type GetPackageByIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetPackageByIdQuery = { __typename?: 'Query', getPackageById: { __typename?: 'Package', id: string, medicalFactilitiesId: string, packageName: string, gender: string, price: number, examinationDetails: string, image: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, numberSlot: number, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string }> }> } } };

export type GetAllPackageByFacilityIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetAllPackageByFacilityIdQuery = { __typename?: 'Query', getAllPackageByFacilityId: Array<{ __typename?: 'Package', id: string, medicalFactilitiesId: string, packageName: string, gender: string, price: number, examinationDetails: string, image: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, numberSlot: number, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string }> }> } }> };

export type GetMedicalSpecialtyByIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetMedicalSpecialtyByIdQuery = { __typename?: 'Query', getMedicalSpecialtyById: { __typename?: 'MedicalSpecialties', id: string, medicalFactilityId: string, name: string, price: number, discription: string, workSchedule?: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', endTime: string, startTime: string }> }> } | null } };

export type GetMedicalSpecialtiesByMedicalFacilityIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetMedicalSpecialtiesByMedicalFacilityIdQuery = { __typename?: 'Query', getMedicalSpecialtiesByMedicalFacilityId: Array<{ __typename?: 'MedicalSpecialties', id: string, medicalFactilityId: string, name: string, price: number, discription: string, workSchedule?: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', endTime: string, startTime: string }> }> } | null }> };

export type GetVaccineByIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetVaccineByIdQuery = { __typename?: 'Query', getVaccineById: { __typename?: 'Vaccination', id: string, medicalFactilitiesId: string, vaccineName: string, price: number, countryOfOrigin: string, prophylactic: string, indication: string, note: string, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string }> }> } } };

export type GetAllVaccinationByFacilityIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetAllVaccinationByFacilityIdQuery = { __typename?: 'Query', getAllVaccinationByFacilityId: Array<{ __typename?: 'Vaccination', id: string, medicalFactilitiesId: string, vaccineName: string, price: number, countryOfOrigin: string, prophylactic: string, indication: string, note: string, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string }> }> } }> };

export type GetSpecialtySelectQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetSpecialtySelectQuery = { __typename?: 'Query', getMedicalSpecialtySelect: Array<{ __typename?: 'MedicalSpecialties', id: string, name: string }> };

export type GetAllPackageSelectQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetAllPackageSelectQuery = { __typename?: 'Query', getAllPackageSelect: Array<{ __typename?: 'Package', id: string, packageName: string }> };

export type GetAllVaccinationSelectQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetAllVaccinationSelectQuery = { __typename?: 'Query', getAllVaccinationSelect: Array<{ __typename?: 'Vaccination', id: string, vaccineName: string }> };

export type GetAllUsersPaginationQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllUsersPaginationQuery = { __typename?: 'Query', getAllUsersPagination: Array<{ __typename?: 'User', id: string, email: string, username: string, password: string, roles?: Array<string> | null, active?: boolean | null, linkImage?: { __typename?: 'LinkImage', filename: string, type: string, url: string } | null }> };

export type GetTotalUsersCountQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTotalUsersCountQuery = { __typename?: 'Query', totalUsersCount: number };

export type GetAllRegisterByOptionQueryVariables = Exact<{
  input: GetRegisterByOptionInput;
}>;


export type GetAllRegisterByOptionQuery = { __typename?: 'Query', getAllRegisterByOption: Array<{ __typename?: 'Register', id: string, date: any, typeOfService: string, isHealthInsurance: boolean, state: string, packageId?: string | null, profileId: string, specialtyId?: string | null, vaccineId?: string | null, profile: { __typename?: 'Profile', id: string, customerId: string, email: string, ethnic: string, fullname: string, address: string, gender: string, job: string, dataOfBirth: any, identity?: string | null, medicalInsurance?: string | null, numberPhone: string, relationship: string, customer?: { __typename?: 'Customer', id: string, userId: string, name: string, gender: string, numberPhone: string, email: string, address: string, dateOfBirth: any, ethnic: string } | null }, session: { __typename?: 'Session', startTime: string, endTime: string } }> };

export type GetAllStaffPaginationQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllStaffPaginationQuery = { __typename?: 'Query', getAllStaffPagination: Array<{ __typename?: 'MedicalStaff', id: string, userId: string, medicalFacilityId: string, name: string, gender: string, numberPhone: string, email: string, permissions: Array<string>, specialtyId?: Array<string> | null, specialties?: Array<{ __typename?: 'MedicalSpecialties', id: string, name: string, medicalFactilityId: string, discription: string, price: number }> | null }> };

export type TotalStaffsCountQueryVariables = Exact<{
  input?: InputMaybe<Scalars['String']['input']>;
}>;


export type TotalStaffsCountQuery = { __typename?: 'Query', totalStaffsCount: number };

export type GetAllCustomerPaginationQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllCustomerPaginationQuery = { __typename?: 'Query', getAllCustomerPagination: Array<{ __typename?: 'Customer', id: string, userId: string, name: string, gender: string, numberPhone: string, email: string, address: string, dateOfBirth: any, ethnic: string, profiles?: Array<{ __typename?: 'Profile', id: string, fullname: string, address: string, gender: string, dataOfBirth: any, numberPhone: string, email: string, identity?: string | null, medicalInsurance?: string | null, job: string, relationship: string, customerId: string, ethnic: string }> | null }> };

export type GetTotalCustomersCountQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTotalCustomersCountQuery = { __typename?: 'Query', getTotalCustomersCount: number };

export type GetGeneralInfor3QueryVariables = Exact<{ [key: string]: never; }>;


export type GetGeneralInfor3Query = { __typename?: 'Query', getGeneralInfor: { __typename?: 'GeneralInfor', company: string, address: string, copyrigth: string, email: string, hotline: string, liscenceBusiness: string, liscenceOparating: string, ID?: string | null, logoFooter: { __typename?: 'LinkImage', filename: string, url: string, type: string }, logoHeader: { __typename?: 'LinkImage', filename: string, url: string } } };


export const LoginDocument = gql`
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
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const UdateUserByIdDocument = gql`
    mutation UdateUserByID($input: UpdateUserInput!) {
  updateUser(updateUserInput: $input) {
    id
  }
}
    `;
export type UdateUserByIdMutationFn = Apollo.MutationFunction<UdateUserByIdMutation, UdateUserByIdMutationVariables>;

/**
 * __useUdateUserByIdMutation__
 *
 * To run a mutation, you first call `useUdateUserByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUdateUserByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [udateUserByIdMutation, { data, loading, error }] = useUdateUserByIdMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUdateUserByIdMutation(baseOptions?: Apollo.MutationHookOptions<UdateUserByIdMutation, UdateUserByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UdateUserByIdMutation, UdateUserByIdMutationVariables>(UdateUserByIdDocument, options);
      }
export type UdateUserByIdMutationHookResult = ReturnType<typeof useUdateUserByIdMutation>;
export type UdateUserByIdMutationResult = Apollo.MutationResult<UdateUserByIdMutation>;
export type UdateUserByIdMutationOptions = Apollo.BaseMutationOptions<UdateUserByIdMutation, UdateUserByIdMutationVariables>;
export const SingupByAdminDocument = gql`
    mutation singupByAdmin($input: CreateUserByAdminInput!) {
  signupUser(createUserInput: $input) {
    id
  }
}
    `;
export type SingupByAdminMutationFn = Apollo.MutationFunction<SingupByAdminMutation, SingupByAdminMutationVariables>;

/**
 * __useSingupByAdminMutation__
 *
 * To run a mutation, you first call `useSingupByAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSingupByAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [singupByAdminMutation, { data, loading, error }] = useSingupByAdminMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSingupByAdminMutation(baseOptions?: Apollo.MutationHookOptions<SingupByAdminMutation, SingupByAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SingupByAdminMutation, SingupByAdminMutationVariables>(SingupByAdminDocument, options);
      }
export type SingupByAdminMutationHookResult = ReturnType<typeof useSingupByAdminMutation>;
export type SingupByAdminMutationResult = Apollo.MutationResult<SingupByAdminMutation>;
export type SingupByAdminMutationOptions = Apollo.BaseMutationOptions<SingupByAdminMutation, SingupByAdminMutationVariables>;
export const UpdateUserByIdWithPassDocument = gql`
    mutation UpdateUserByIdWithPass($input: UpdateUserWithPassInput!) {
  updateUserWithPass(updateUserInput: $input) {
    id
  }
}
    `;
export type UpdateUserByIdWithPassMutationFn = Apollo.MutationFunction<UpdateUserByIdWithPassMutation, UpdateUserByIdWithPassMutationVariables>;

/**
 * __useUpdateUserByIdWithPassMutation__
 *
 * To run a mutation, you first call `useUpdateUserByIdWithPassMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserByIdWithPassMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserByIdWithPassMutation, { data, loading, error }] = useUpdateUserByIdWithPassMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserByIdWithPassMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserByIdWithPassMutation, UpdateUserByIdWithPassMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserByIdWithPassMutation, UpdateUserByIdWithPassMutationVariables>(UpdateUserByIdWithPassDocument, options);
      }
export type UpdateUserByIdWithPassMutationHookResult = ReturnType<typeof useUpdateUserByIdWithPassMutation>;
export type UpdateUserByIdWithPassMutationResult = Apollo.MutationResult<UpdateUserByIdWithPassMutation>;
export type UpdateUserByIdWithPassMutationOptions = Apollo.BaseMutationOptions<UpdateUserByIdWithPassMutation, UpdateUserByIdWithPassMutationVariables>;
export const UpdateGeneralInforDocument = gql`
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
export type UpdateGeneralInforMutationFn = Apollo.MutationFunction<UpdateGeneralInforMutation, UpdateGeneralInforMutationVariables>;

/**
 * __useUpdateGeneralInforMutation__
 *
 * To run a mutation, you first call `useUpdateGeneralInforMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGeneralInforMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGeneralInforMutation, { data, loading, error }] = useUpdateGeneralInforMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateGeneralInforMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGeneralInforMutation, UpdateGeneralInforMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGeneralInforMutation, UpdateGeneralInforMutationVariables>(UpdateGeneralInforDocument, options);
      }
export type UpdateGeneralInforMutationHookResult = ReturnType<typeof useUpdateGeneralInforMutation>;
export type UpdateGeneralInforMutationResult = Apollo.MutationResult<UpdateGeneralInforMutation>;
export type UpdateGeneralInforMutationOptions = Apollo.BaseMutationOptions<UpdateGeneralInforMutation, UpdateGeneralInforMutationVariables>;
export const ActiveUserDocument = gql`
    mutation ActiveUser($input: String!) {
  activeUser(id: $input) {
    username
    active
  }
}
    `;
export type ActiveUserMutationFn = Apollo.MutationFunction<ActiveUserMutation, ActiveUserMutationVariables>;

/**
 * __useActiveUserMutation__
 *
 * To run a mutation, you first call `useActiveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActiveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activeUserMutation, { data, loading, error }] = useActiveUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useActiveUserMutation(baseOptions?: Apollo.MutationHookOptions<ActiveUserMutation, ActiveUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ActiveUserMutation, ActiveUserMutationVariables>(ActiveUserDocument, options);
      }
export type ActiveUserMutationHookResult = ReturnType<typeof useActiveUserMutation>;
export type ActiveUserMutationResult = Apollo.MutationResult<ActiveUserMutation>;
export type ActiveUserMutationOptions = Apollo.BaseMutationOptions<ActiveUserMutation, ActiveUserMutationVariables>;
export const UpdateRolesDocument = gql`
    mutation UpdateRoles($input: UpdateRolesInput!) {
  updateRoles(updateRolesInput: $input) {
    roles
  }
}
    `;
export type UpdateRolesMutationFn = Apollo.MutationFunction<UpdateRolesMutation, UpdateRolesMutationVariables>;

/**
 * __useUpdateRolesMutation__
 *
 * To run a mutation, you first call `useUpdateRolesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRolesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRolesMutation, { data, loading, error }] = useUpdateRolesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateRolesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRolesMutation, UpdateRolesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRolesMutation, UpdateRolesMutationVariables>(UpdateRolesDocument, options);
      }
export type UpdateRolesMutationHookResult = ReturnType<typeof useUpdateRolesMutation>;
export type UpdateRolesMutationResult = Apollo.MutationResult<UpdateRolesMutation>;
export type UpdateRolesMutationOptions = Apollo.BaseMutationOptions<UpdateRolesMutation, UpdateRolesMutationVariables>;
export const CreateMedicalFacilityDocument = gql`
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
export type CreateMedicalFacilityMutationFn = Apollo.MutationFunction<CreateMedicalFacilityMutation, CreateMedicalFacilityMutationVariables>;

/**
 * __useCreateMedicalFacilityMutation__
 *
 * To run a mutation, you first call `useCreateMedicalFacilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMedicalFacilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMedicalFacilityMutation, { data, loading, error }] = useCreateMedicalFacilityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMedicalFacilityMutation(baseOptions?: Apollo.MutationHookOptions<CreateMedicalFacilityMutation, CreateMedicalFacilityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMedicalFacilityMutation, CreateMedicalFacilityMutationVariables>(CreateMedicalFacilityDocument, options);
      }
export type CreateMedicalFacilityMutationHookResult = ReturnType<typeof useCreateMedicalFacilityMutation>;
export type CreateMedicalFacilityMutationResult = Apollo.MutationResult<CreateMedicalFacilityMutation>;
export type CreateMedicalFacilityMutationOptions = Apollo.BaseMutationOptions<CreateMedicalFacilityMutation, CreateMedicalFacilityMutationVariables>;
export const UpdateMedicalFacilityDocument = gql`
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
export type UpdateMedicalFacilityMutationFn = Apollo.MutationFunction<UpdateMedicalFacilityMutation, UpdateMedicalFacilityMutationVariables>;

/**
 * __useUpdateMedicalFacilityMutation__
 *
 * To run a mutation, you first call `useUpdateMedicalFacilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMedicalFacilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMedicalFacilityMutation, { data, loading, error }] = useUpdateMedicalFacilityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMedicalFacilityMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMedicalFacilityMutation, UpdateMedicalFacilityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMedicalFacilityMutation, UpdateMedicalFacilityMutationVariables>(UpdateMedicalFacilityDocument, options);
      }
export type UpdateMedicalFacilityMutationHookResult = ReturnType<typeof useUpdateMedicalFacilityMutation>;
export type UpdateMedicalFacilityMutationResult = Apollo.MutationResult<UpdateMedicalFacilityMutation>;
export type UpdateMedicalFacilityMutationOptions = Apollo.BaseMutationOptions<UpdateMedicalFacilityMutation, UpdateMedicalFacilityMutationVariables>;
export const DeleteMedicalFacilityDocument = gql`
    mutation deleteMedicalFacility($input: String!) {
  deleteMedicalFacility(input: $input) {
    id
  }
}
    `;
export type DeleteMedicalFacilityMutationFn = Apollo.MutationFunction<DeleteMedicalFacilityMutation, DeleteMedicalFacilityMutationVariables>;

/**
 * __useDeleteMedicalFacilityMutation__
 *
 * To run a mutation, you first call `useDeleteMedicalFacilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMedicalFacilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMedicalFacilityMutation, { data, loading, error }] = useDeleteMedicalFacilityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteMedicalFacilityMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMedicalFacilityMutation, DeleteMedicalFacilityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMedicalFacilityMutation, DeleteMedicalFacilityMutationVariables>(DeleteMedicalFacilityDocument, options);
      }
export type DeleteMedicalFacilityMutationHookResult = ReturnType<typeof useDeleteMedicalFacilityMutation>;
export type DeleteMedicalFacilityMutationResult = Apollo.MutationResult<DeleteMedicalFacilityMutation>;
export type DeleteMedicalFacilityMutationOptions = Apollo.BaseMutationOptions<DeleteMedicalFacilityMutation, DeleteMedicalFacilityMutationVariables>;
export const CreateDoctorDocument = gql`
    mutation createDoctor($input: CreateDoctorInput!) {
  createDoctor(createDoctorInput: $input) {
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
export type CreateDoctorMutationFn = Apollo.MutationFunction<CreateDoctorMutation, CreateDoctorMutationVariables>;

/**
 * __useCreateDoctorMutation__
 *
 * To run a mutation, you first call `useCreateDoctorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDoctorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDoctorMutation, { data, loading, error }] = useCreateDoctorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDoctorMutation(baseOptions?: Apollo.MutationHookOptions<CreateDoctorMutation, CreateDoctorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDoctorMutation, CreateDoctorMutationVariables>(CreateDoctorDocument, options);
      }
export type CreateDoctorMutationHookResult = ReturnType<typeof useCreateDoctorMutation>;
export type CreateDoctorMutationResult = Apollo.MutationResult<CreateDoctorMutation>;
export type CreateDoctorMutationOptions = Apollo.BaseMutationOptions<CreateDoctorMutation, CreateDoctorMutationVariables>;
export const UpdateDoctorDocument = gql`
    mutation updateDoctor($input: UpdateDoctorInput!) {
  updateDoctor(input: $input) {
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
export type UpdateDoctorMutationFn = Apollo.MutationFunction<UpdateDoctorMutation, UpdateDoctorMutationVariables>;

/**
 * __useUpdateDoctorMutation__
 *
 * To run a mutation, you first call `useUpdateDoctorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDoctorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDoctorMutation, { data, loading, error }] = useUpdateDoctorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDoctorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDoctorMutation, UpdateDoctorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDoctorMutation, UpdateDoctorMutationVariables>(UpdateDoctorDocument, options);
      }
export type UpdateDoctorMutationHookResult = ReturnType<typeof useUpdateDoctorMutation>;
export type UpdateDoctorMutationResult = Apollo.MutationResult<UpdateDoctorMutation>;
export type UpdateDoctorMutationOptions = Apollo.BaseMutationOptions<UpdateDoctorMutation, UpdateDoctorMutationVariables>;
export const DeleteDoctorDocument = gql`
    mutation deleteDoctor($input: String!) {
  deleteDoctor(id: $input) {
    id
  }
}
    `;
export type DeleteDoctorMutationFn = Apollo.MutationFunction<DeleteDoctorMutation, DeleteDoctorMutationVariables>;

/**
 * __useDeleteDoctorMutation__
 *
 * To run a mutation, you first call `useDeleteDoctorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDoctorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDoctorMutation, { data, loading, error }] = useDeleteDoctorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteDoctorMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDoctorMutation, DeleteDoctorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDoctorMutation, DeleteDoctorMutationVariables>(DeleteDoctorDocument, options);
      }
export type DeleteDoctorMutationHookResult = ReturnType<typeof useDeleteDoctorMutation>;
export type DeleteDoctorMutationResult = Apollo.MutationResult<DeleteDoctorMutation>;
export type DeleteDoctorMutationOptions = Apollo.BaseMutationOptions<DeleteDoctorMutation, DeleteDoctorMutationVariables>;
export const CreatePackageDocument = gql`
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
export type CreatePackageMutationFn = Apollo.MutationFunction<CreatePackageMutation, CreatePackageMutationVariables>;

/**
 * __useCreatePackageMutation__
 *
 * To run a mutation, you first call `useCreatePackageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePackageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPackageMutation, { data, loading, error }] = useCreatePackageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePackageMutation(baseOptions?: Apollo.MutationHookOptions<CreatePackageMutation, CreatePackageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePackageMutation, CreatePackageMutationVariables>(CreatePackageDocument, options);
      }
export type CreatePackageMutationHookResult = ReturnType<typeof useCreatePackageMutation>;
export type CreatePackageMutationResult = Apollo.MutationResult<CreatePackageMutation>;
export type CreatePackageMutationOptions = Apollo.BaseMutationOptions<CreatePackageMutation, CreatePackageMutationVariables>;
export const DeletePackageDocument = gql`
    mutation deletePackage($input: String!) {
  deletePackage(input: $input) {
    id
  }
}
    `;
export type DeletePackageMutationFn = Apollo.MutationFunction<DeletePackageMutation, DeletePackageMutationVariables>;

/**
 * __useDeletePackageMutation__
 *
 * To run a mutation, you first call `useDeletePackageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePackageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePackageMutation, { data, loading, error }] = useDeletePackageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePackageMutation(baseOptions?: Apollo.MutationHookOptions<DeletePackageMutation, DeletePackageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePackageMutation, DeletePackageMutationVariables>(DeletePackageDocument, options);
      }
export type DeletePackageMutationHookResult = ReturnType<typeof useDeletePackageMutation>;
export type DeletePackageMutationResult = Apollo.MutationResult<DeletePackageMutation>;
export type DeletePackageMutationOptions = Apollo.BaseMutationOptions<DeletePackageMutation, DeletePackageMutationVariables>;
export const UpdatePackageDocument = gql`
    mutation updatePackage($input: UpdatePackageInput!) {
  updatePackage(input: $input) {
    id
  }
}
    `;
export type UpdatePackageMutationFn = Apollo.MutationFunction<UpdatePackageMutation, UpdatePackageMutationVariables>;

/**
 * __useUpdatePackageMutation__
 *
 * To run a mutation, you first call `useUpdatePackageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePackageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePackageMutation, { data, loading, error }] = useUpdatePackageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePackageMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePackageMutation, UpdatePackageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePackageMutation, UpdatePackageMutationVariables>(UpdatePackageDocument, options);
      }
export type UpdatePackageMutationHookResult = ReturnType<typeof useUpdatePackageMutation>;
export type UpdatePackageMutationResult = Apollo.MutationResult<UpdatePackageMutation>;
export type UpdatePackageMutationOptions = Apollo.BaseMutationOptions<UpdatePackageMutation, UpdatePackageMutationVariables>;
export const DeleteMecialSpecialtyDocument = gql`
    mutation deleteMecialSpecialty($input: String!) {
  deleteMecialSpecialty(id: $input) {
    id
  }
}
    `;
export type DeleteMecialSpecialtyMutationFn = Apollo.MutationFunction<DeleteMecialSpecialtyMutation, DeleteMecialSpecialtyMutationVariables>;

/**
 * __useDeleteMecialSpecialtyMutation__
 *
 * To run a mutation, you first call `useDeleteMecialSpecialtyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMecialSpecialtyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMecialSpecialtyMutation, { data, loading, error }] = useDeleteMecialSpecialtyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteMecialSpecialtyMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMecialSpecialtyMutation, DeleteMecialSpecialtyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMecialSpecialtyMutation, DeleteMecialSpecialtyMutationVariables>(DeleteMecialSpecialtyDocument, options);
      }
export type DeleteMecialSpecialtyMutationHookResult = ReturnType<typeof useDeleteMecialSpecialtyMutation>;
export type DeleteMecialSpecialtyMutationResult = Apollo.MutationResult<DeleteMecialSpecialtyMutation>;
export type DeleteMecialSpecialtyMutationOptions = Apollo.BaseMutationOptions<DeleteMecialSpecialtyMutation, DeleteMecialSpecialtyMutationVariables>;
export const CreateMedicalSpecialtyDocument = gql`
    mutation createMedicalSpecialty($input: CreateMedicalSpecialtyInput!) {
  createMedicalSpecialty(input: $input) {
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
export type CreateMedicalSpecialtyMutationFn = Apollo.MutationFunction<CreateMedicalSpecialtyMutation, CreateMedicalSpecialtyMutationVariables>;

/**
 * __useCreateMedicalSpecialtyMutation__
 *
 * To run a mutation, you first call `useCreateMedicalSpecialtyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMedicalSpecialtyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMedicalSpecialtyMutation, { data, loading, error }] = useCreateMedicalSpecialtyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMedicalSpecialtyMutation(baseOptions?: Apollo.MutationHookOptions<CreateMedicalSpecialtyMutation, CreateMedicalSpecialtyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMedicalSpecialtyMutation, CreateMedicalSpecialtyMutationVariables>(CreateMedicalSpecialtyDocument, options);
      }
export type CreateMedicalSpecialtyMutationHookResult = ReturnType<typeof useCreateMedicalSpecialtyMutation>;
export type CreateMedicalSpecialtyMutationResult = Apollo.MutationResult<CreateMedicalSpecialtyMutation>;
export type CreateMedicalSpecialtyMutationOptions = Apollo.BaseMutationOptions<CreateMedicalSpecialtyMutation, CreateMedicalSpecialtyMutationVariables>;
export const UpdateMedicalSpecialtyDocument = gql`
    mutation updateMedicalSpecialty($input: UpdateMedicalSpecialtyInput!) {
  updateMedicalSpecialty(input: $input) {
    id
  }
}
    `;
export type UpdateMedicalSpecialtyMutationFn = Apollo.MutationFunction<UpdateMedicalSpecialtyMutation, UpdateMedicalSpecialtyMutationVariables>;

/**
 * __useUpdateMedicalSpecialtyMutation__
 *
 * To run a mutation, you first call `useUpdateMedicalSpecialtyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMedicalSpecialtyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMedicalSpecialtyMutation, { data, loading, error }] = useUpdateMedicalSpecialtyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMedicalSpecialtyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMedicalSpecialtyMutation, UpdateMedicalSpecialtyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMedicalSpecialtyMutation, UpdateMedicalSpecialtyMutationVariables>(UpdateMedicalSpecialtyDocument, options);
      }
export type UpdateMedicalSpecialtyMutationHookResult = ReturnType<typeof useUpdateMedicalSpecialtyMutation>;
export type UpdateMedicalSpecialtyMutationResult = Apollo.MutationResult<UpdateMedicalSpecialtyMutation>;
export type UpdateMedicalSpecialtyMutationOptions = Apollo.BaseMutationOptions<UpdateMedicalSpecialtyMutation, UpdateMedicalSpecialtyMutationVariables>;
export const CreateVaccinationDocument = gql`
    mutation createVaccination($input: CreateVaccineInput!) {
  createVaccination(input: $input) {
    id
  }
}
    `;
export type CreateVaccinationMutationFn = Apollo.MutationFunction<CreateVaccinationMutation, CreateVaccinationMutationVariables>;

/**
 * __useCreateVaccinationMutation__
 *
 * To run a mutation, you first call `useCreateVaccinationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVaccinationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVaccinationMutation, { data, loading, error }] = useCreateVaccinationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateVaccinationMutation(baseOptions?: Apollo.MutationHookOptions<CreateVaccinationMutation, CreateVaccinationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVaccinationMutation, CreateVaccinationMutationVariables>(CreateVaccinationDocument, options);
      }
export type CreateVaccinationMutationHookResult = ReturnType<typeof useCreateVaccinationMutation>;
export type CreateVaccinationMutationResult = Apollo.MutationResult<CreateVaccinationMutation>;
export type CreateVaccinationMutationOptions = Apollo.BaseMutationOptions<CreateVaccinationMutation, CreateVaccinationMutationVariables>;
export const UpdateVaccinationDocument = gql`
    mutation updateVaccination($input: UpdateVaccineInput!) {
  updateVaccination(input: $input) {
    id
  }
}
    `;
export type UpdateVaccinationMutationFn = Apollo.MutationFunction<UpdateVaccinationMutation, UpdateVaccinationMutationVariables>;

/**
 * __useUpdateVaccinationMutation__
 *
 * To run a mutation, you first call `useUpdateVaccinationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVaccinationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVaccinationMutation, { data, loading, error }] = useUpdateVaccinationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVaccinationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVaccinationMutation, UpdateVaccinationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateVaccinationMutation, UpdateVaccinationMutationVariables>(UpdateVaccinationDocument, options);
      }
export type UpdateVaccinationMutationHookResult = ReturnType<typeof useUpdateVaccinationMutation>;
export type UpdateVaccinationMutationResult = Apollo.MutationResult<UpdateVaccinationMutation>;
export type UpdateVaccinationMutationOptions = Apollo.BaseMutationOptions<UpdateVaccinationMutation, UpdateVaccinationMutationVariables>;
export const DeleteVaccinationDocument = gql`
    mutation deleteVaccination($input: String!) {
  deleteVaccination(input: $input) {
    id
  }
}
    `;
export type DeleteVaccinationMutationFn = Apollo.MutationFunction<DeleteVaccinationMutation, DeleteVaccinationMutationVariables>;

/**
 * __useDeleteVaccinationMutation__
 *
 * To run a mutation, you first call `useDeleteVaccinationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVaccinationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVaccinationMutation, { data, loading, error }] = useDeleteVaccinationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteVaccinationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteVaccinationMutation, DeleteVaccinationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteVaccinationMutation, DeleteVaccinationMutationVariables>(DeleteVaccinationDocument, options);
      }
export type DeleteVaccinationMutationHookResult = ReturnType<typeof useDeleteVaccinationMutation>;
export type DeleteVaccinationMutationResult = Apollo.MutationResult<DeleteVaccinationMutation>;
export type DeleteVaccinationMutationOptions = Apollo.BaseMutationOptions<DeleteVaccinationMutation, DeleteVaccinationMutationVariables>;
export const CreateMedicalStaffDocument = gql`
    mutation createMedicalStaff($input: CreateMedicalStaffInput!) {
  createMedicalStaff(input: $input) {
    id
  }
}
    `;
export type CreateMedicalStaffMutationFn = Apollo.MutationFunction<CreateMedicalStaffMutation, CreateMedicalStaffMutationVariables>;

/**
 * __useCreateMedicalStaffMutation__
 *
 * To run a mutation, you first call `useCreateMedicalStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMedicalStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMedicalStaffMutation, { data, loading, error }] = useCreateMedicalStaffMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMedicalStaffMutation(baseOptions?: Apollo.MutationHookOptions<CreateMedicalStaffMutation, CreateMedicalStaffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMedicalStaffMutation, CreateMedicalStaffMutationVariables>(CreateMedicalStaffDocument, options);
      }
export type CreateMedicalStaffMutationHookResult = ReturnType<typeof useCreateMedicalStaffMutation>;
export type CreateMedicalStaffMutationResult = Apollo.MutationResult<CreateMedicalStaffMutation>;
export type CreateMedicalStaffMutationOptions = Apollo.BaseMutationOptions<CreateMedicalStaffMutation, CreateMedicalStaffMutationVariables>;
export const ConfirmRegisterDocument = gql`
    mutation confirmRegister($input: ConfirmRegisterInput!) {
  confirmRegister(input: $input) {
    id
  }
}
    `;
export type ConfirmRegisterMutationFn = Apollo.MutationFunction<ConfirmRegisterMutation, ConfirmRegisterMutationVariables>;

/**
 * __useConfirmRegisterMutation__
 *
 * To run a mutation, you first call `useConfirmRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmRegisterMutation, { data, loading, error }] = useConfirmRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConfirmRegisterMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmRegisterMutation, ConfirmRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmRegisterMutation, ConfirmRegisterMutationVariables>(ConfirmRegisterDocument, options);
      }
export type ConfirmRegisterMutationHookResult = ReturnType<typeof useConfirmRegisterMutation>;
export type ConfirmRegisterMutationResult = Apollo.MutationResult<ConfirmRegisterMutation>;
export type ConfirmRegisterMutationOptions = Apollo.BaseMutationOptions<ConfirmRegisterMutation, ConfirmRegisterMutationVariables>;
export const DeleteMedicalStaffDocument = gql`
    mutation deleteMedicalStaff($input: String!) {
  deleteMedicalStaff(input: $input) {
    id
  }
}
    `;
export type DeleteMedicalStaffMutationFn = Apollo.MutationFunction<DeleteMedicalStaffMutation, DeleteMedicalStaffMutationVariables>;

/**
 * __useDeleteMedicalStaffMutation__
 *
 * To run a mutation, you first call `useDeleteMedicalStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMedicalStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMedicalStaffMutation, { data, loading, error }] = useDeleteMedicalStaffMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteMedicalStaffMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMedicalStaffMutation, DeleteMedicalStaffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMedicalStaffMutation, DeleteMedicalStaffMutationVariables>(DeleteMedicalStaffDocument, options);
      }
export type DeleteMedicalStaffMutationHookResult = ReturnType<typeof useDeleteMedicalStaffMutation>;
export type DeleteMedicalStaffMutationResult = Apollo.MutationResult<DeleteMedicalStaffMutation>;
export type DeleteMedicalStaffMutationOptions = Apollo.BaseMutationOptions<DeleteMedicalStaffMutation, DeleteMedicalStaffMutationVariables>;
export const UpdateMedicalStaffDocument = gql`
    mutation updateMedicalStaff($input: UpdateMedicalStaffInput!) {
  updateMedicalStaff(input: $input) {
    id
  }
}
    `;
export type UpdateMedicalStaffMutationFn = Apollo.MutationFunction<UpdateMedicalStaffMutation, UpdateMedicalStaffMutationVariables>;

/**
 * __useUpdateMedicalStaffMutation__
 *
 * To run a mutation, you first call `useUpdateMedicalStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMedicalStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMedicalStaffMutation, { data, loading, error }] = useUpdateMedicalStaffMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMedicalStaffMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMedicalStaffMutation, UpdateMedicalStaffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMedicalStaffMutation, UpdateMedicalStaffMutationVariables>(UpdateMedicalStaffDocument, options);
      }
export type UpdateMedicalStaffMutationHookResult = ReturnType<typeof useUpdateMedicalStaffMutation>;
export type UpdateMedicalStaffMutationResult = Apollo.MutationResult<UpdateMedicalStaffMutation>;
export type UpdateMedicalStaffMutationOptions = Apollo.BaseMutationOptions<UpdateMedicalStaffMutation, UpdateMedicalStaffMutationVariables>;
export const CheckLoginQueryDocument = gql`
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

/**
 * __useCheckLoginQueryQuery__
 *
 * To run a query within a React component, call `useCheckLoginQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckLoginQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckLoginQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useCheckLoginQueryQuery(baseOptions?: Apollo.QueryHookOptions<CheckLoginQueryQuery, CheckLoginQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckLoginQueryQuery, CheckLoginQueryQueryVariables>(CheckLoginQueryDocument, options);
      }
export function useCheckLoginQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckLoginQueryQuery, CheckLoginQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckLoginQueryQuery, CheckLoginQueryQueryVariables>(CheckLoginQueryDocument, options);
        }
export type CheckLoginQueryQueryHookResult = ReturnType<typeof useCheckLoginQueryQuery>;
export type CheckLoginQueryLazyQueryHookResult = ReturnType<typeof useCheckLoginQueryLazyQuery>;
export type CheckLoginQueryQueryResult = Apollo.QueryResult<CheckLoginQueryQuery, CheckLoginQueryQueryVariables>;
export const GetSettingDocument = gql`
    query getSetting {
  getSetting {
    defaultLang
  }
}
    `;

/**
 * __useGetSettingQuery__
 *
 * To run a query within a React component, call `useGetSettingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSettingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSettingQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSettingQuery(baseOptions?: Apollo.QueryHookOptions<GetSettingQuery, GetSettingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSettingQuery, GetSettingQueryVariables>(GetSettingDocument, options);
      }
export function useGetSettingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSettingQuery, GetSettingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSettingQuery, GetSettingQueryVariables>(GetSettingDocument, options);
        }
export type GetSettingQueryHookResult = ReturnType<typeof useGetSettingQuery>;
export type GetSettingLazyQueryHookResult = ReturnType<typeof useGetSettingLazyQuery>;
export type GetSettingQueryResult = Apollo.QueryResult<GetSettingQuery, GetSettingQueryVariables>;
export const GetGeneralInforDocument = gql`
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

/**
 * __useGetGeneralInforQuery__
 *
 * To run a query within a React component, call `useGetGeneralInforQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGeneralInforQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGeneralInforQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGeneralInforQuery(baseOptions?: Apollo.QueryHookOptions<GetGeneralInforQuery, GetGeneralInforQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGeneralInforQuery, GetGeneralInforQueryVariables>(GetGeneralInforDocument, options);
      }
export function useGetGeneralInforLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGeneralInforQuery, GetGeneralInforQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGeneralInforQuery, GetGeneralInforQueryVariables>(GetGeneralInforDocument, options);
        }
export type GetGeneralInforQueryHookResult = ReturnType<typeof useGetGeneralInforQuery>;
export type GetGeneralInforLazyQueryHookResult = ReturnType<typeof useGetGeneralInforLazyQuery>;
export type GetGeneralInforQueryResult = Apollo.QueryResult<GetGeneralInforQuery, GetGeneralInforQueryVariables>;
export const GetAllUserDocument = gql`
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

/**
 * __useGetAllUserQuery__
 *
 * To run a query within a React component, call `useGetAllUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUserQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
      }
export function useGetAllUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
        }
export type GetAllUserQueryHookResult = ReturnType<typeof useGetAllUserQuery>;
export type GetAllUserLazyQueryHookResult = ReturnType<typeof useGetAllUserLazyQuery>;
export type GetAllUserQueryResult = Apollo.QueryResult<GetAllUserQuery, GetAllUserQueryVariables>;
export const GetUserFacilitySelectDocument = gql`
    query getUserFacilitySelect($input: String!) {
  getUserFacilitySelect(input: $input) {
    id
    username
  }
}
    `;

/**
 * __useGetUserFacilitySelectQuery__
 *
 * To run a query within a React component, call `useGetUserFacilitySelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserFacilitySelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserFacilitySelectQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUserFacilitySelectQuery(baseOptions: Apollo.QueryHookOptions<GetUserFacilitySelectQuery, GetUserFacilitySelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserFacilitySelectQuery, GetUserFacilitySelectQueryVariables>(GetUserFacilitySelectDocument, options);
      }
export function useGetUserFacilitySelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserFacilitySelectQuery, GetUserFacilitySelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserFacilitySelectQuery, GetUserFacilitySelectQueryVariables>(GetUserFacilitySelectDocument, options);
        }
export type GetUserFacilitySelectQueryHookResult = ReturnType<typeof useGetUserFacilitySelectQuery>;
export type GetUserFacilitySelectLazyQueryHookResult = ReturnType<typeof useGetUserFacilitySelectLazyQuery>;
export type GetUserFacilitySelectQueryResult = Apollo.QueryResult<GetUserFacilitySelectQuery, GetUserFacilitySelectQueryVariables>;
export const GetUserDoctorPendingDocument = gql`
    query getUserDoctorPending {
  getUserDoctorPending {
    id
    username
  }
}
    `;

/**
 * __useGetUserDoctorPendingQuery__
 *
 * To run a query within a React component, call `useGetUserDoctorPendingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserDoctorPendingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserDoctorPendingQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserDoctorPendingQuery(baseOptions?: Apollo.QueryHookOptions<GetUserDoctorPendingQuery, GetUserDoctorPendingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserDoctorPendingQuery, GetUserDoctorPendingQueryVariables>(GetUserDoctorPendingDocument, options);
      }
export function useGetUserDoctorPendingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserDoctorPendingQuery, GetUserDoctorPendingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserDoctorPendingQuery, GetUserDoctorPendingQueryVariables>(GetUserDoctorPendingDocument, options);
        }
export type GetUserDoctorPendingQueryHookResult = ReturnType<typeof useGetUserDoctorPendingQuery>;
export type GetUserDoctorPendingLazyQueryHookResult = ReturnType<typeof useGetUserDoctorPendingLazyQuery>;
export type GetUserDoctorPendingQueryResult = Apollo.QueryResult<GetUserDoctorPendingQuery, GetUserDoctorPendingQueryVariables>;
export const GetUserDoctorPendingUpdateDocument = gql`
    query getUserDoctorPendingUpdate($input: String!) {
  getUserDoctorPendingUpdate(input: $input) {
    id
    username
  }
}
    `;

/**
 * __useGetUserDoctorPendingUpdateQuery__
 *
 * To run a query within a React component, call `useGetUserDoctorPendingUpdateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserDoctorPendingUpdateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserDoctorPendingUpdateQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUserDoctorPendingUpdateQuery(baseOptions: Apollo.QueryHookOptions<GetUserDoctorPendingUpdateQuery, GetUserDoctorPendingUpdateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserDoctorPendingUpdateQuery, GetUserDoctorPendingUpdateQueryVariables>(GetUserDoctorPendingUpdateDocument, options);
      }
export function useGetUserDoctorPendingUpdateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserDoctorPendingUpdateQuery, GetUserDoctorPendingUpdateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserDoctorPendingUpdateQuery, GetUserDoctorPendingUpdateQueryVariables>(GetUserDoctorPendingUpdateDocument, options);
        }
export type GetUserDoctorPendingUpdateQueryHookResult = ReturnType<typeof useGetUserDoctorPendingUpdateQuery>;
export type GetUserDoctorPendingUpdateLazyQueryHookResult = ReturnType<typeof useGetUserDoctorPendingUpdateLazyQuery>;
export type GetUserDoctorPendingUpdateQueryResult = Apollo.QueryResult<GetUserDoctorPendingUpdateQuery, GetUserDoctorPendingUpdateQueryVariables>;
export const GetAllUserStaffSelectDocument = gql`
    query getAllUserStaffSelect($input: String!) {
  getUserStaffSelect(input: $input) {
    id
    username
  }
}
    `;

/**
 * __useGetAllUserStaffSelectQuery__
 *
 * To run a query within a React component, call `useGetAllUserStaffSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserStaffSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserStaffSelectQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllUserStaffSelectQuery(baseOptions: Apollo.QueryHookOptions<GetAllUserStaffSelectQuery, GetAllUserStaffSelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUserStaffSelectQuery, GetAllUserStaffSelectQueryVariables>(GetAllUserStaffSelectDocument, options);
      }
export function useGetAllUserStaffSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUserStaffSelectQuery, GetAllUserStaffSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUserStaffSelectQuery, GetAllUserStaffSelectQueryVariables>(GetAllUserStaffSelectDocument, options);
        }
export type GetAllUserStaffSelectQueryHookResult = ReturnType<typeof useGetAllUserStaffSelectQuery>;
export type GetAllUserStaffSelectLazyQueryHookResult = ReturnType<typeof useGetAllUserStaffSelectLazyQuery>;
export type GetAllUserStaffSelectQueryResult = Apollo.QueryResult<GetAllUserStaffSelectQuery, GetAllUserStaffSelectQueryVariables>;
export const GetAllMedicalFacilityDocument = gql`
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

/**
 * __useGetAllMedicalFacilityQuery__
 *
 * To run a query within a React component, call `useGetAllMedicalFacilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMedicalFacilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMedicalFacilityQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllMedicalFacilityQuery(baseOptions?: Apollo.QueryHookOptions<GetAllMedicalFacilityQuery, GetAllMedicalFacilityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMedicalFacilityQuery, GetAllMedicalFacilityQueryVariables>(GetAllMedicalFacilityDocument, options);
      }
export function useGetAllMedicalFacilityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMedicalFacilityQuery, GetAllMedicalFacilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMedicalFacilityQuery, GetAllMedicalFacilityQueryVariables>(GetAllMedicalFacilityDocument, options);
        }
export type GetAllMedicalFacilityQueryHookResult = ReturnType<typeof useGetAllMedicalFacilityQuery>;
export type GetAllMedicalFacilityLazyQueryHookResult = ReturnType<typeof useGetAllMedicalFacilityLazyQuery>;
export type GetAllMedicalFacilityQueryResult = Apollo.QueryResult<GetAllMedicalFacilityQuery, GetAllMedicalFacilityQueryVariables>;
export const GetAllMedicalFacilitySelectDocument = gql`
    query getAllMedicalFacilitySelect {
  getAllMedicalFacility {
    id
    medicalFacilityName
  }
}
    `;

/**
 * __useGetAllMedicalFacilitySelectQuery__
 *
 * To run a query within a React component, call `useGetAllMedicalFacilitySelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMedicalFacilitySelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMedicalFacilitySelectQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllMedicalFacilitySelectQuery(baseOptions?: Apollo.QueryHookOptions<GetAllMedicalFacilitySelectQuery, GetAllMedicalFacilitySelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMedicalFacilitySelectQuery, GetAllMedicalFacilitySelectQueryVariables>(GetAllMedicalFacilitySelectDocument, options);
      }
export function useGetAllMedicalFacilitySelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMedicalFacilitySelectQuery, GetAllMedicalFacilitySelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMedicalFacilitySelectQuery, GetAllMedicalFacilitySelectQueryVariables>(GetAllMedicalFacilitySelectDocument, options);
        }
export type GetAllMedicalFacilitySelectQueryHookResult = ReturnType<typeof useGetAllMedicalFacilitySelectQuery>;
export type GetAllMedicalFacilitySelectLazyQueryHookResult = ReturnType<typeof useGetAllMedicalFacilitySelectLazyQuery>;
export type GetAllMedicalFacilitySelectQueryResult = Apollo.QueryResult<GetAllMedicalFacilitySelectQuery, GetAllMedicalFacilitySelectQueryVariables>;
export const GetMedicalFacilityByIdDocument = gql`
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

/**
 * __useGetMedicalFacilityByIdQuery__
 *
 * To run a query within a React component, call `useGetMedicalFacilityByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMedicalFacilityByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMedicalFacilityByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMedicalFacilityByIdQuery(baseOptions: Apollo.QueryHookOptions<GetMedicalFacilityByIdQuery, GetMedicalFacilityByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMedicalFacilityByIdQuery, GetMedicalFacilityByIdQueryVariables>(GetMedicalFacilityByIdDocument, options);
      }
export function useGetMedicalFacilityByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMedicalFacilityByIdQuery, GetMedicalFacilityByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMedicalFacilityByIdQuery, GetMedicalFacilityByIdQueryVariables>(GetMedicalFacilityByIdDocument, options);
        }
export type GetMedicalFacilityByIdQueryHookResult = ReturnType<typeof useGetMedicalFacilityByIdQuery>;
export type GetMedicalFacilityByIdLazyQueryHookResult = ReturnType<typeof useGetMedicalFacilityByIdLazyQuery>;
export type GetMedicalFacilityByIdQueryResult = Apollo.QueryResult<GetMedicalFacilityByIdQuery, GetMedicalFacilityByIdQueryVariables>;
export const GetMedicalFacilityByUserIdDocument = gql`
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

/**
 * __useGetMedicalFacilityByUserIdQuery__
 *
 * To run a query within a React component, call `useGetMedicalFacilityByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMedicalFacilityByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMedicalFacilityByUserIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMedicalFacilityByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetMedicalFacilityByUserIdQuery, GetMedicalFacilityByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMedicalFacilityByUserIdQuery, GetMedicalFacilityByUserIdQueryVariables>(GetMedicalFacilityByUserIdDocument, options);
      }
export function useGetMedicalFacilityByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMedicalFacilityByUserIdQuery, GetMedicalFacilityByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMedicalFacilityByUserIdQuery, GetMedicalFacilityByUserIdQueryVariables>(GetMedicalFacilityByUserIdDocument, options);
        }
export type GetMedicalFacilityByUserIdQueryHookResult = ReturnType<typeof useGetMedicalFacilityByUserIdQuery>;
export type GetMedicalFacilityByUserIdLazyQueryHookResult = ReturnType<typeof useGetMedicalFacilityByUserIdLazyQuery>;
export type GetMedicalFacilityByUserIdQueryResult = Apollo.QueryResult<GetMedicalFacilityByUserIdQuery, GetMedicalFacilityByUserIdQueryVariables>;
export const GetGeneralMedicalFacilityByUserIdDocument = gql`
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

/**
 * __useGetGeneralMedicalFacilityByUserIdQuery__
 *
 * To run a query within a React component, call `useGetGeneralMedicalFacilityByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGeneralMedicalFacilityByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGeneralMedicalFacilityByUserIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetGeneralMedicalFacilityByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetGeneralMedicalFacilityByUserIdQuery, GetGeneralMedicalFacilityByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGeneralMedicalFacilityByUserIdQuery, GetGeneralMedicalFacilityByUserIdQueryVariables>(GetGeneralMedicalFacilityByUserIdDocument, options);
      }
export function useGetGeneralMedicalFacilityByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGeneralMedicalFacilityByUserIdQuery, GetGeneralMedicalFacilityByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGeneralMedicalFacilityByUserIdQuery, GetGeneralMedicalFacilityByUserIdQueryVariables>(GetGeneralMedicalFacilityByUserIdDocument, options);
        }
export type GetGeneralMedicalFacilityByUserIdQueryHookResult = ReturnType<typeof useGetGeneralMedicalFacilityByUserIdQuery>;
export type GetGeneralMedicalFacilityByUserIdLazyQueryHookResult = ReturnType<typeof useGetGeneralMedicalFacilityByUserIdLazyQuery>;
export type GetGeneralMedicalFacilityByUserIdQueryResult = Apollo.QueryResult<GetGeneralMedicalFacilityByUserIdQuery, GetGeneralMedicalFacilityByUserIdQueryVariables>;
export const GetMedicalFacilityIdByUserIdDocument = gql`
    query getMedicalFacilityIdByUserId($input: String!) {
  getMedicalFacilityByUserId(id: $input) {
    id
    userId
    medicalFacilityName
  }
}
    `;

/**
 * __useGetMedicalFacilityIdByUserIdQuery__
 *
 * To run a query within a React component, call `useGetMedicalFacilityIdByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMedicalFacilityIdByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMedicalFacilityIdByUserIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMedicalFacilityIdByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetMedicalFacilityIdByUserIdQuery, GetMedicalFacilityIdByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMedicalFacilityIdByUserIdQuery, GetMedicalFacilityIdByUserIdQueryVariables>(GetMedicalFacilityIdByUserIdDocument, options);
      }
export function useGetMedicalFacilityIdByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMedicalFacilityIdByUserIdQuery, GetMedicalFacilityIdByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMedicalFacilityIdByUserIdQuery, GetMedicalFacilityIdByUserIdQueryVariables>(GetMedicalFacilityIdByUserIdDocument, options);
        }
export type GetMedicalFacilityIdByUserIdQueryHookResult = ReturnType<typeof useGetMedicalFacilityIdByUserIdQuery>;
export type GetMedicalFacilityIdByUserIdLazyQueryHookResult = ReturnType<typeof useGetMedicalFacilityIdByUserIdLazyQuery>;
export type GetMedicalFacilityIdByUserIdQueryResult = Apollo.QueryResult<GetMedicalFacilityIdByUserIdQuery, GetMedicalFacilityIdByUserIdQueryVariables>;
export const GetAllMedicalFacilityPaginationDocument = gql`
    query getAllMedicalFacilityPagination($search: String, $page: Float!, $limit: Float!, $sortField: String, $sortOrder: String) {
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

/**
 * __useGetAllMedicalFacilityPaginationQuery__
 *
 * To run a query within a React component, call `useGetAllMedicalFacilityPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMedicalFacilityPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMedicalFacilityPaginationQuery({
 *   variables: {
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *   },
 * });
 */
export function useGetAllMedicalFacilityPaginationQuery(baseOptions: Apollo.QueryHookOptions<GetAllMedicalFacilityPaginationQuery, GetAllMedicalFacilityPaginationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMedicalFacilityPaginationQuery, GetAllMedicalFacilityPaginationQueryVariables>(GetAllMedicalFacilityPaginationDocument, options);
      }
export function useGetAllMedicalFacilityPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMedicalFacilityPaginationQuery, GetAllMedicalFacilityPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMedicalFacilityPaginationQuery, GetAllMedicalFacilityPaginationQueryVariables>(GetAllMedicalFacilityPaginationDocument, options);
        }
export type GetAllMedicalFacilityPaginationQueryHookResult = ReturnType<typeof useGetAllMedicalFacilityPaginationQuery>;
export type GetAllMedicalFacilityPaginationLazyQueryHookResult = ReturnType<typeof useGetAllMedicalFacilityPaginationLazyQuery>;
export type GetAllMedicalFacilityPaginationQueryResult = Apollo.QueryResult<GetAllMedicalFacilityPaginationQuery, GetAllMedicalFacilityPaginationQueryVariables>;
export const GetTotalFacilitiesCountDocument = gql`
    query getTotalFacilitiesCount($search: String) {
  getTotalFacilitiesCount(search: $search)
}
    `;

/**
 * __useGetTotalFacilitiesCountQuery__
 *
 * To run a query within a React component, call `useGetTotalFacilitiesCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalFacilitiesCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalFacilitiesCountQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useGetTotalFacilitiesCountQuery(baseOptions?: Apollo.QueryHookOptions<GetTotalFacilitiesCountQuery, GetTotalFacilitiesCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalFacilitiesCountQuery, GetTotalFacilitiesCountQueryVariables>(GetTotalFacilitiesCountDocument, options);
      }
export function useGetTotalFacilitiesCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalFacilitiesCountQuery, GetTotalFacilitiesCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalFacilitiesCountQuery, GetTotalFacilitiesCountQueryVariables>(GetTotalFacilitiesCountDocument, options);
        }
export type GetTotalFacilitiesCountQueryHookResult = ReturnType<typeof useGetTotalFacilitiesCountQuery>;
export type GetTotalFacilitiesCountLazyQueryHookResult = ReturnType<typeof useGetTotalFacilitiesCountLazyQuery>;
export type GetTotalFacilitiesCountQueryResult = Apollo.QueryResult<GetTotalFacilitiesCountQuery, GetTotalFacilitiesCountQueryVariables>;
export const GetMedicalFacilityNameByIdDocument = gql`
    query getMedicalFacilityNameById($input: String!) {
  getMedicalFacilityById(id: $input) {
    id
    medicalFacilityName
  }
}
    `;

/**
 * __useGetMedicalFacilityNameByIdQuery__
 *
 * To run a query within a React component, call `useGetMedicalFacilityNameByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMedicalFacilityNameByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMedicalFacilityNameByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMedicalFacilityNameByIdQuery(baseOptions: Apollo.QueryHookOptions<GetMedicalFacilityNameByIdQuery, GetMedicalFacilityNameByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMedicalFacilityNameByIdQuery, GetMedicalFacilityNameByIdQueryVariables>(GetMedicalFacilityNameByIdDocument, options);
      }
export function useGetMedicalFacilityNameByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMedicalFacilityNameByIdQuery, GetMedicalFacilityNameByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMedicalFacilityNameByIdQuery, GetMedicalFacilityNameByIdQueryVariables>(GetMedicalFacilityNameByIdDocument, options);
        }
export type GetMedicalFacilityNameByIdQueryHookResult = ReturnType<typeof useGetMedicalFacilityNameByIdQuery>;
export type GetMedicalFacilityNameByIdLazyQueryHookResult = ReturnType<typeof useGetMedicalFacilityNameByIdLazyQuery>;
export type GetMedicalFacilityNameByIdQueryResult = Apollo.QueryResult<GetMedicalFacilityNameByIdQuery, GetMedicalFacilityNameByIdQueryVariables>;
export const GetMedicalStaffByFacilityIdDocument = gql`
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

/**
 * __useGetMedicalStaffByFacilityIdQuery__
 *
 * To run a query within a React component, call `useGetMedicalStaffByFacilityIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMedicalStaffByFacilityIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMedicalStaffByFacilityIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMedicalStaffByFacilityIdQuery(baseOptions: Apollo.QueryHookOptions<GetMedicalStaffByFacilityIdQuery, GetMedicalStaffByFacilityIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMedicalStaffByFacilityIdQuery, GetMedicalStaffByFacilityIdQueryVariables>(GetMedicalStaffByFacilityIdDocument, options);
      }
export function useGetMedicalStaffByFacilityIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMedicalStaffByFacilityIdQuery, GetMedicalStaffByFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMedicalStaffByFacilityIdQuery, GetMedicalStaffByFacilityIdQueryVariables>(GetMedicalStaffByFacilityIdDocument, options);
        }
export type GetMedicalStaffByFacilityIdQueryHookResult = ReturnType<typeof useGetMedicalStaffByFacilityIdQuery>;
export type GetMedicalStaffByFacilityIdLazyQueryHookResult = ReturnType<typeof useGetMedicalStaffByFacilityIdLazyQuery>;
export type GetMedicalStaffByFacilityIdQueryResult = Apollo.QueryResult<GetMedicalStaffByFacilityIdQuery, GetMedicalStaffByFacilityIdQueryVariables>;
export const GetMedicalStaffByIdDocument = gql`
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

/**
 * __useGetMedicalStaffByIdQuery__
 *
 * To run a query within a React component, call `useGetMedicalStaffByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMedicalStaffByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMedicalStaffByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMedicalStaffByIdQuery(baseOptions: Apollo.QueryHookOptions<GetMedicalStaffByIdQuery, GetMedicalStaffByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMedicalStaffByIdQuery, GetMedicalStaffByIdQueryVariables>(GetMedicalStaffByIdDocument, options);
      }
export function useGetMedicalStaffByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMedicalStaffByIdQuery, GetMedicalStaffByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMedicalStaffByIdQuery, GetMedicalStaffByIdQueryVariables>(GetMedicalStaffByIdDocument, options);
        }
export type GetMedicalStaffByIdQueryHookResult = ReturnType<typeof useGetMedicalStaffByIdQuery>;
export type GetMedicalStaffByIdLazyQueryHookResult = ReturnType<typeof useGetMedicalStaffByIdLazyQuery>;
export type GetMedicalStaffByIdQueryResult = Apollo.QueryResult<GetMedicalStaffByIdQuery, GetMedicalStaffByIdQueryVariables>;
export const GetUserSelectedDocument = gql`
    query getUserSelected($input: String!) {
  getUserSelected(id: $input) {
    id
    username
  }
}
    `;

/**
 * __useGetUserSelectedQuery__
 *
 * To run a query within a React component, call `useGetUserSelectedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserSelectedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserSelectedQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUserSelectedQuery(baseOptions: Apollo.QueryHookOptions<GetUserSelectedQuery, GetUserSelectedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserSelectedQuery, GetUserSelectedQueryVariables>(GetUserSelectedDocument, options);
      }
export function useGetUserSelectedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserSelectedQuery, GetUserSelectedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserSelectedQuery, GetUserSelectedQueryVariables>(GetUserSelectedDocument, options);
        }
export type GetUserSelectedQueryHookResult = ReturnType<typeof useGetUserSelectedQuery>;
export type GetUserSelectedLazyQueryHookResult = ReturnType<typeof useGetUserSelectedLazyQuery>;
export type GetUserSelectedQueryResult = Apollo.QueryResult<GetUserSelectedQuery, GetUserSelectedQueryVariables>;
export const GetMedicalSpecialtiesSelectDocument = gql`
    query getMedicalSpecialtiesSelect($input: String!) {
  getMedicalSpecialtiesByMedicalFacilityId(input: $input) {
    id
    name
  }
}
    `;

/**
 * __useGetMedicalSpecialtiesSelectQuery__
 *
 * To run a query within a React component, call `useGetMedicalSpecialtiesSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMedicalSpecialtiesSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMedicalSpecialtiesSelectQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMedicalSpecialtiesSelectQuery(baseOptions: Apollo.QueryHookOptions<GetMedicalSpecialtiesSelectQuery, GetMedicalSpecialtiesSelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMedicalSpecialtiesSelectQuery, GetMedicalSpecialtiesSelectQueryVariables>(GetMedicalSpecialtiesSelectDocument, options);
      }
export function useGetMedicalSpecialtiesSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMedicalSpecialtiesSelectQuery, GetMedicalSpecialtiesSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMedicalSpecialtiesSelectQuery, GetMedicalSpecialtiesSelectQueryVariables>(GetMedicalSpecialtiesSelectDocument, options);
        }
export type GetMedicalSpecialtiesSelectQueryHookResult = ReturnType<typeof useGetMedicalSpecialtiesSelectQuery>;
export type GetMedicalSpecialtiesSelectLazyQueryHookResult = ReturnType<typeof useGetMedicalSpecialtiesSelectLazyQuery>;
export type GetMedicalSpecialtiesSelectQueryResult = Apollo.QueryResult<GetMedicalSpecialtiesSelectQuery, GetMedicalSpecialtiesSelectQueryVariables>;
export const GetDoctorbyIdDocument = gql`
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

/**
 * __useGetDoctorbyIdQuery__
 *
 * To run a query within a React component, call `useGetDoctorbyIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDoctorbyIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDoctorbyIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetDoctorbyIdQuery(baseOptions: Apollo.QueryHookOptions<GetDoctorbyIdQuery, GetDoctorbyIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDoctorbyIdQuery, GetDoctorbyIdQueryVariables>(GetDoctorbyIdDocument, options);
      }
export function useGetDoctorbyIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDoctorbyIdQuery, GetDoctorbyIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDoctorbyIdQuery, GetDoctorbyIdQueryVariables>(GetDoctorbyIdDocument, options);
        }
export type GetDoctorbyIdQueryHookResult = ReturnType<typeof useGetDoctorbyIdQuery>;
export type GetDoctorbyIdLazyQueryHookResult = ReturnType<typeof useGetDoctorbyIdLazyQuery>;
export type GetDoctorbyIdQueryResult = Apollo.QueryResult<GetDoctorbyIdQuery, GetDoctorbyIdQueryVariables>;
export const GetAllDoctorPendingDocument = gql`
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

/**
 * __useGetAllDoctorPendingQuery__
 *
 * To run a query within a React component, call `useGetAllDoctorPendingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDoctorPendingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDoctorPendingQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllDoctorPendingQuery(baseOptions?: Apollo.QueryHookOptions<GetAllDoctorPendingQuery, GetAllDoctorPendingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDoctorPendingQuery, GetAllDoctorPendingQueryVariables>(GetAllDoctorPendingDocument, options);
      }
export function useGetAllDoctorPendingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDoctorPendingQuery, GetAllDoctorPendingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDoctorPendingQuery, GetAllDoctorPendingQueryVariables>(GetAllDoctorPendingDocument, options);
        }
export type GetAllDoctorPendingQueryHookResult = ReturnType<typeof useGetAllDoctorPendingQuery>;
export type GetAllDoctorPendingLazyQueryHookResult = ReturnType<typeof useGetAllDoctorPendingLazyQuery>;
export type GetAllDoctorPendingQueryResult = Apollo.QueryResult<GetAllDoctorPendingQuery, GetAllDoctorPendingQueryVariables>;
export const GetAllDoctorByFacilityIdDocument = gql`
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

/**
 * __useGetAllDoctorByFacilityIdQuery__
 *
 * To run a query within a React component, call `useGetAllDoctorByFacilityIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDoctorByFacilityIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDoctorByFacilityIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllDoctorByFacilityIdQuery(baseOptions: Apollo.QueryHookOptions<GetAllDoctorByFacilityIdQuery, GetAllDoctorByFacilityIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDoctorByFacilityIdQuery, GetAllDoctorByFacilityIdQueryVariables>(GetAllDoctorByFacilityIdDocument, options);
      }
export function useGetAllDoctorByFacilityIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDoctorByFacilityIdQuery, GetAllDoctorByFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDoctorByFacilityIdQuery, GetAllDoctorByFacilityIdQueryVariables>(GetAllDoctorByFacilityIdDocument, options);
        }
export type GetAllDoctorByFacilityIdQueryHookResult = ReturnType<typeof useGetAllDoctorByFacilityIdQuery>;
export type GetAllDoctorByFacilityIdLazyQueryHookResult = ReturnType<typeof useGetAllDoctorByFacilityIdLazyQuery>;
export type GetAllDoctorByFacilityIdQueryResult = Apollo.QueryResult<GetAllDoctorByFacilityIdQuery, GetAllDoctorByFacilityIdQueryVariables>;
export const GetDoctorToUpdateByIdDocument = gql`
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

/**
 * __useGetDoctorToUpdateByIdQuery__
 *
 * To run a query within a React component, call `useGetDoctorToUpdateByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDoctorToUpdateByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDoctorToUpdateByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetDoctorToUpdateByIdQuery(baseOptions: Apollo.QueryHookOptions<GetDoctorToUpdateByIdQuery, GetDoctorToUpdateByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDoctorToUpdateByIdQuery, GetDoctorToUpdateByIdQueryVariables>(GetDoctorToUpdateByIdDocument, options);
      }
export function useGetDoctorToUpdateByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDoctorToUpdateByIdQuery, GetDoctorToUpdateByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDoctorToUpdateByIdQuery, GetDoctorToUpdateByIdQueryVariables>(GetDoctorToUpdateByIdDocument, options);
        }
export type GetDoctorToUpdateByIdQueryHookResult = ReturnType<typeof useGetDoctorToUpdateByIdQuery>;
export type GetDoctorToUpdateByIdLazyQueryHookResult = ReturnType<typeof useGetDoctorToUpdateByIdLazyQuery>;
export type GetDoctorToUpdateByIdQueryResult = Apollo.QueryResult<GetDoctorToUpdateByIdQuery, GetDoctorToUpdateByIdQueryVariables>;
export const GetAllDoctorPaginationDocument = gql`
    query getAllDoctorPagination($search: String, $page: Float!, $limit: Float!, $sortField: String, $sortOrder: String) {
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

/**
 * __useGetAllDoctorPaginationQuery__
 *
 * To run a query within a React component, call `useGetAllDoctorPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDoctorPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDoctorPaginationQuery({
 *   variables: {
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *   },
 * });
 */
export function useGetAllDoctorPaginationQuery(baseOptions: Apollo.QueryHookOptions<GetAllDoctorPaginationQuery, GetAllDoctorPaginationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDoctorPaginationQuery, GetAllDoctorPaginationQueryVariables>(GetAllDoctorPaginationDocument, options);
      }
export function useGetAllDoctorPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDoctorPaginationQuery, GetAllDoctorPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDoctorPaginationQuery, GetAllDoctorPaginationQueryVariables>(GetAllDoctorPaginationDocument, options);
        }
export type GetAllDoctorPaginationQueryHookResult = ReturnType<typeof useGetAllDoctorPaginationQuery>;
export type GetAllDoctorPaginationLazyQueryHookResult = ReturnType<typeof useGetAllDoctorPaginationLazyQuery>;
export type GetAllDoctorPaginationQueryResult = Apollo.QueryResult<GetAllDoctorPaginationQuery, GetAllDoctorPaginationQueryVariables>;
export const GetAllDoctorPaginationOfFacilityDocument = gql`
    query getAllDoctorPaginationOfFacility($search: String, $page: Float!, $limit: Float!, $sortField: String, $sortOrder: String, $userId: String!) {
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

/**
 * __useGetAllDoctorPaginationOfFacilityQuery__
 *
 * To run a query within a React component, call `useGetAllDoctorPaginationOfFacilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDoctorPaginationOfFacilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDoctorPaginationOfFacilityQuery({
 *   variables: {
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetAllDoctorPaginationOfFacilityQuery(baseOptions: Apollo.QueryHookOptions<GetAllDoctorPaginationOfFacilityQuery, GetAllDoctorPaginationOfFacilityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDoctorPaginationOfFacilityQuery, GetAllDoctorPaginationOfFacilityQueryVariables>(GetAllDoctorPaginationOfFacilityDocument, options);
      }
export function useGetAllDoctorPaginationOfFacilityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDoctorPaginationOfFacilityQuery, GetAllDoctorPaginationOfFacilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDoctorPaginationOfFacilityQuery, GetAllDoctorPaginationOfFacilityQueryVariables>(GetAllDoctorPaginationOfFacilityDocument, options);
        }
export type GetAllDoctorPaginationOfFacilityQueryHookResult = ReturnType<typeof useGetAllDoctorPaginationOfFacilityQuery>;
export type GetAllDoctorPaginationOfFacilityLazyQueryHookResult = ReturnType<typeof useGetAllDoctorPaginationOfFacilityLazyQuery>;
export type GetAllDoctorPaginationOfFacilityQueryResult = Apollo.QueryResult<GetAllDoctorPaginationOfFacilityQuery, GetAllDoctorPaginationOfFacilityQueryVariables>;
export const GetTotalDoctorsCountDocument = gql`
    query getTotalDoctorsCount($search: String, $userId: String) {
  getTotalDoctorsCount(search: $search, userId: $userId)
}
    `;

/**
 * __useGetTotalDoctorsCountQuery__
 *
 * To run a query within a React component, call `useGetTotalDoctorsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalDoctorsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalDoctorsCountQuery({
 *   variables: {
 *      search: // value for 'search'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetTotalDoctorsCountQuery(baseOptions?: Apollo.QueryHookOptions<GetTotalDoctorsCountQuery, GetTotalDoctorsCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalDoctorsCountQuery, GetTotalDoctorsCountQueryVariables>(GetTotalDoctorsCountDocument, options);
      }
export function useGetTotalDoctorsCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalDoctorsCountQuery, GetTotalDoctorsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalDoctorsCountQuery, GetTotalDoctorsCountQueryVariables>(GetTotalDoctorsCountDocument, options);
        }
export type GetTotalDoctorsCountQueryHookResult = ReturnType<typeof useGetTotalDoctorsCountQuery>;
export type GetTotalDoctorsCountLazyQueryHookResult = ReturnType<typeof useGetTotalDoctorsCountLazyQuery>;
export type GetTotalDoctorsCountQueryResult = Apollo.QueryResult<GetTotalDoctorsCountQuery, GetTotalDoctorsCountQueryVariables>;
export const GetPackageByIdDocument = gql`
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

/**
 * __useGetPackageByIdQuery__
 *
 * To run a query within a React component, call `useGetPackageByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPackageByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPackageByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPackageByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPackageByIdQuery, GetPackageByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPackageByIdQuery, GetPackageByIdQueryVariables>(GetPackageByIdDocument, options);
      }
export function useGetPackageByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPackageByIdQuery, GetPackageByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPackageByIdQuery, GetPackageByIdQueryVariables>(GetPackageByIdDocument, options);
        }
export type GetPackageByIdQueryHookResult = ReturnType<typeof useGetPackageByIdQuery>;
export type GetPackageByIdLazyQueryHookResult = ReturnType<typeof useGetPackageByIdLazyQuery>;
export type GetPackageByIdQueryResult = Apollo.QueryResult<GetPackageByIdQuery, GetPackageByIdQueryVariables>;
export const GetAllPackageByFacilityIdDocument = gql`
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

/**
 * __useGetAllPackageByFacilityIdQuery__
 *
 * To run a query within a React component, call `useGetAllPackageByFacilityIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPackageByFacilityIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPackageByFacilityIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllPackageByFacilityIdQuery(baseOptions: Apollo.QueryHookOptions<GetAllPackageByFacilityIdQuery, GetAllPackageByFacilityIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPackageByFacilityIdQuery, GetAllPackageByFacilityIdQueryVariables>(GetAllPackageByFacilityIdDocument, options);
      }
export function useGetAllPackageByFacilityIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPackageByFacilityIdQuery, GetAllPackageByFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPackageByFacilityIdQuery, GetAllPackageByFacilityIdQueryVariables>(GetAllPackageByFacilityIdDocument, options);
        }
export type GetAllPackageByFacilityIdQueryHookResult = ReturnType<typeof useGetAllPackageByFacilityIdQuery>;
export type GetAllPackageByFacilityIdLazyQueryHookResult = ReturnType<typeof useGetAllPackageByFacilityIdLazyQuery>;
export type GetAllPackageByFacilityIdQueryResult = Apollo.QueryResult<GetAllPackageByFacilityIdQuery, GetAllPackageByFacilityIdQueryVariables>;
export const GetMedicalSpecialtyByIdDocument = gql`
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

/**
 * __useGetMedicalSpecialtyByIdQuery__
 *
 * To run a query within a React component, call `useGetMedicalSpecialtyByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMedicalSpecialtyByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMedicalSpecialtyByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMedicalSpecialtyByIdQuery(baseOptions: Apollo.QueryHookOptions<GetMedicalSpecialtyByIdQuery, GetMedicalSpecialtyByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMedicalSpecialtyByIdQuery, GetMedicalSpecialtyByIdQueryVariables>(GetMedicalSpecialtyByIdDocument, options);
      }
export function useGetMedicalSpecialtyByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMedicalSpecialtyByIdQuery, GetMedicalSpecialtyByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMedicalSpecialtyByIdQuery, GetMedicalSpecialtyByIdQueryVariables>(GetMedicalSpecialtyByIdDocument, options);
        }
export type GetMedicalSpecialtyByIdQueryHookResult = ReturnType<typeof useGetMedicalSpecialtyByIdQuery>;
export type GetMedicalSpecialtyByIdLazyQueryHookResult = ReturnType<typeof useGetMedicalSpecialtyByIdLazyQuery>;
export type GetMedicalSpecialtyByIdQueryResult = Apollo.QueryResult<GetMedicalSpecialtyByIdQuery, GetMedicalSpecialtyByIdQueryVariables>;
export const GetMedicalSpecialtiesByMedicalFacilityIdDocument = gql`
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

/**
 * __useGetMedicalSpecialtiesByMedicalFacilityIdQuery__
 *
 * To run a query within a React component, call `useGetMedicalSpecialtiesByMedicalFacilityIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMedicalSpecialtiesByMedicalFacilityIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMedicalSpecialtiesByMedicalFacilityIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMedicalSpecialtiesByMedicalFacilityIdQuery(baseOptions: Apollo.QueryHookOptions<GetMedicalSpecialtiesByMedicalFacilityIdQuery, GetMedicalSpecialtiesByMedicalFacilityIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMedicalSpecialtiesByMedicalFacilityIdQuery, GetMedicalSpecialtiesByMedicalFacilityIdQueryVariables>(GetMedicalSpecialtiesByMedicalFacilityIdDocument, options);
      }
export function useGetMedicalSpecialtiesByMedicalFacilityIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMedicalSpecialtiesByMedicalFacilityIdQuery, GetMedicalSpecialtiesByMedicalFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMedicalSpecialtiesByMedicalFacilityIdQuery, GetMedicalSpecialtiesByMedicalFacilityIdQueryVariables>(GetMedicalSpecialtiesByMedicalFacilityIdDocument, options);
        }
export type GetMedicalSpecialtiesByMedicalFacilityIdQueryHookResult = ReturnType<typeof useGetMedicalSpecialtiesByMedicalFacilityIdQuery>;
export type GetMedicalSpecialtiesByMedicalFacilityIdLazyQueryHookResult = ReturnType<typeof useGetMedicalSpecialtiesByMedicalFacilityIdLazyQuery>;
export type GetMedicalSpecialtiesByMedicalFacilityIdQueryResult = Apollo.QueryResult<GetMedicalSpecialtiesByMedicalFacilityIdQuery, GetMedicalSpecialtiesByMedicalFacilityIdQueryVariables>;
export const GetVaccineByIdDocument = gql`
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

/**
 * __useGetVaccineByIdQuery__
 *
 * To run a query within a React component, call `useGetVaccineByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVaccineByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVaccineByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetVaccineByIdQuery(baseOptions: Apollo.QueryHookOptions<GetVaccineByIdQuery, GetVaccineByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVaccineByIdQuery, GetVaccineByIdQueryVariables>(GetVaccineByIdDocument, options);
      }
export function useGetVaccineByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVaccineByIdQuery, GetVaccineByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVaccineByIdQuery, GetVaccineByIdQueryVariables>(GetVaccineByIdDocument, options);
        }
export type GetVaccineByIdQueryHookResult = ReturnType<typeof useGetVaccineByIdQuery>;
export type GetVaccineByIdLazyQueryHookResult = ReturnType<typeof useGetVaccineByIdLazyQuery>;
export type GetVaccineByIdQueryResult = Apollo.QueryResult<GetVaccineByIdQuery, GetVaccineByIdQueryVariables>;
export const GetAllVaccinationByFacilityIdDocument = gql`
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

/**
 * __useGetAllVaccinationByFacilityIdQuery__
 *
 * To run a query within a React component, call `useGetAllVaccinationByFacilityIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllVaccinationByFacilityIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllVaccinationByFacilityIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllVaccinationByFacilityIdQuery(baseOptions: Apollo.QueryHookOptions<GetAllVaccinationByFacilityIdQuery, GetAllVaccinationByFacilityIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllVaccinationByFacilityIdQuery, GetAllVaccinationByFacilityIdQueryVariables>(GetAllVaccinationByFacilityIdDocument, options);
      }
export function useGetAllVaccinationByFacilityIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllVaccinationByFacilityIdQuery, GetAllVaccinationByFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllVaccinationByFacilityIdQuery, GetAllVaccinationByFacilityIdQueryVariables>(GetAllVaccinationByFacilityIdDocument, options);
        }
export type GetAllVaccinationByFacilityIdQueryHookResult = ReturnType<typeof useGetAllVaccinationByFacilityIdQuery>;
export type GetAllVaccinationByFacilityIdLazyQueryHookResult = ReturnType<typeof useGetAllVaccinationByFacilityIdLazyQuery>;
export type GetAllVaccinationByFacilityIdQueryResult = Apollo.QueryResult<GetAllVaccinationByFacilityIdQuery, GetAllVaccinationByFacilityIdQueryVariables>;
export const GetSpecialtySelectDocument = gql`
    query getSpecialtySelect($input: String!) {
  getMedicalSpecialtySelect(input: $input) {
    id
    name
  }
}
    `;

/**
 * __useGetSpecialtySelectQuery__
 *
 * To run a query within a React component, call `useGetSpecialtySelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpecialtySelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpecialtySelectQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetSpecialtySelectQuery(baseOptions: Apollo.QueryHookOptions<GetSpecialtySelectQuery, GetSpecialtySelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpecialtySelectQuery, GetSpecialtySelectQueryVariables>(GetSpecialtySelectDocument, options);
      }
export function useGetSpecialtySelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpecialtySelectQuery, GetSpecialtySelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpecialtySelectQuery, GetSpecialtySelectQueryVariables>(GetSpecialtySelectDocument, options);
        }
export type GetSpecialtySelectQueryHookResult = ReturnType<typeof useGetSpecialtySelectQuery>;
export type GetSpecialtySelectLazyQueryHookResult = ReturnType<typeof useGetSpecialtySelectLazyQuery>;
export type GetSpecialtySelectQueryResult = Apollo.QueryResult<GetSpecialtySelectQuery, GetSpecialtySelectQueryVariables>;
export const GetAllPackageSelectDocument = gql`
    query getAllPackageSelect($input: String!) {
  getAllPackageSelect(input: $input) {
    id
    packageName
  }
}
    `;

/**
 * __useGetAllPackageSelectQuery__
 *
 * To run a query within a React component, call `useGetAllPackageSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPackageSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPackageSelectQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllPackageSelectQuery(baseOptions: Apollo.QueryHookOptions<GetAllPackageSelectQuery, GetAllPackageSelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPackageSelectQuery, GetAllPackageSelectQueryVariables>(GetAllPackageSelectDocument, options);
      }
export function useGetAllPackageSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPackageSelectQuery, GetAllPackageSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPackageSelectQuery, GetAllPackageSelectQueryVariables>(GetAllPackageSelectDocument, options);
        }
export type GetAllPackageSelectQueryHookResult = ReturnType<typeof useGetAllPackageSelectQuery>;
export type GetAllPackageSelectLazyQueryHookResult = ReturnType<typeof useGetAllPackageSelectLazyQuery>;
export type GetAllPackageSelectQueryResult = Apollo.QueryResult<GetAllPackageSelectQuery, GetAllPackageSelectQueryVariables>;
export const GetAllVaccinationSelectDocument = gql`
    query getAllVaccinationSelect($input: String!) {
  getAllVaccinationSelect(input: $input) {
    id
    vaccineName
  }
}
    `;

/**
 * __useGetAllVaccinationSelectQuery__
 *
 * To run a query within a React component, call `useGetAllVaccinationSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllVaccinationSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllVaccinationSelectQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllVaccinationSelectQuery(baseOptions: Apollo.QueryHookOptions<GetAllVaccinationSelectQuery, GetAllVaccinationSelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllVaccinationSelectQuery, GetAllVaccinationSelectQueryVariables>(GetAllVaccinationSelectDocument, options);
      }
export function useGetAllVaccinationSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllVaccinationSelectQuery, GetAllVaccinationSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllVaccinationSelectQuery, GetAllVaccinationSelectQueryVariables>(GetAllVaccinationSelectDocument, options);
        }
export type GetAllVaccinationSelectQueryHookResult = ReturnType<typeof useGetAllVaccinationSelectQuery>;
export type GetAllVaccinationSelectLazyQueryHookResult = ReturnType<typeof useGetAllVaccinationSelectLazyQuery>;
export type GetAllVaccinationSelectQueryResult = Apollo.QueryResult<GetAllVaccinationSelectQuery, GetAllVaccinationSelectQueryVariables>;
export const GetAllUsersPaginationDocument = gql`
    query getAllUsersPagination($search: String, $page: Float!, $limit: Float!, $sortField: String, $sortOrder: String) {
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

/**
 * __useGetAllUsersPaginationQuery__
 *
 * To run a query within a React component, call `useGetAllUsersPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersPaginationQuery({
 *   variables: {
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *   },
 * });
 */
export function useGetAllUsersPaginationQuery(baseOptions: Apollo.QueryHookOptions<GetAllUsersPaginationQuery, GetAllUsersPaginationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersPaginationQuery, GetAllUsersPaginationQueryVariables>(GetAllUsersPaginationDocument, options);
      }
export function useGetAllUsersPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersPaginationQuery, GetAllUsersPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersPaginationQuery, GetAllUsersPaginationQueryVariables>(GetAllUsersPaginationDocument, options);
        }
export type GetAllUsersPaginationQueryHookResult = ReturnType<typeof useGetAllUsersPaginationQuery>;
export type GetAllUsersPaginationLazyQueryHookResult = ReturnType<typeof useGetAllUsersPaginationLazyQuery>;
export type GetAllUsersPaginationQueryResult = Apollo.QueryResult<GetAllUsersPaginationQuery, GetAllUsersPaginationQueryVariables>;
export const GetTotalUsersCountDocument = gql`
    query getTotalUsersCount($search: String) {
  totalUsersCount(search: $search)
}
    `;

/**
 * __useGetTotalUsersCountQuery__
 *
 * To run a query within a React component, call `useGetTotalUsersCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalUsersCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalUsersCountQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useGetTotalUsersCountQuery(baseOptions?: Apollo.QueryHookOptions<GetTotalUsersCountQuery, GetTotalUsersCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalUsersCountQuery, GetTotalUsersCountQueryVariables>(GetTotalUsersCountDocument, options);
      }
export function useGetTotalUsersCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalUsersCountQuery, GetTotalUsersCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalUsersCountQuery, GetTotalUsersCountQueryVariables>(GetTotalUsersCountDocument, options);
        }
export type GetTotalUsersCountQueryHookResult = ReturnType<typeof useGetTotalUsersCountQuery>;
export type GetTotalUsersCountLazyQueryHookResult = ReturnType<typeof useGetTotalUsersCountLazyQuery>;
export type GetTotalUsersCountQueryResult = Apollo.QueryResult<GetTotalUsersCountQuery, GetTotalUsersCountQueryVariables>;
export const GetAllRegisterByOptionDocument = gql`
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

/**
 * __useGetAllRegisterByOptionQuery__
 *
 * To run a query within a React component, call `useGetAllRegisterByOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRegisterByOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRegisterByOptionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllRegisterByOptionQuery(baseOptions: Apollo.QueryHookOptions<GetAllRegisterByOptionQuery, GetAllRegisterByOptionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllRegisterByOptionQuery, GetAllRegisterByOptionQueryVariables>(GetAllRegisterByOptionDocument, options);
      }
export function useGetAllRegisterByOptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllRegisterByOptionQuery, GetAllRegisterByOptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllRegisterByOptionQuery, GetAllRegisterByOptionQueryVariables>(GetAllRegisterByOptionDocument, options);
        }
export type GetAllRegisterByOptionQueryHookResult = ReturnType<typeof useGetAllRegisterByOptionQuery>;
export type GetAllRegisterByOptionLazyQueryHookResult = ReturnType<typeof useGetAllRegisterByOptionLazyQuery>;
export type GetAllRegisterByOptionQueryResult = Apollo.QueryResult<GetAllRegisterByOptionQuery, GetAllRegisterByOptionQueryVariables>;
export const GetAllStaffPaginationDocument = gql`
    query getAllStaffPagination($search: String, $page: Float!, $limit: Float!, $sortField: String, $sortOrder: String) {
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

/**
 * __useGetAllStaffPaginationQuery__
 *
 * To run a query within a React component, call `useGetAllStaffPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllStaffPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllStaffPaginationQuery({
 *   variables: {
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *   },
 * });
 */
export function useGetAllStaffPaginationQuery(baseOptions: Apollo.QueryHookOptions<GetAllStaffPaginationQuery, GetAllStaffPaginationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllStaffPaginationQuery, GetAllStaffPaginationQueryVariables>(GetAllStaffPaginationDocument, options);
      }
export function useGetAllStaffPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllStaffPaginationQuery, GetAllStaffPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllStaffPaginationQuery, GetAllStaffPaginationQueryVariables>(GetAllStaffPaginationDocument, options);
        }
export type GetAllStaffPaginationQueryHookResult = ReturnType<typeof useGetAllStaffPaginationQuery>;
export type GetAllStaffPaginationLazyQueryHookResult = ReturnType<typeof useGetAllStaffPaginationLazyQuery>;
export type GetAllStaffPaginationQueryResult = Apollo.QueryResult<GetAllStaffPaginationQuery, GetAllStaffPaginationQueryVariables>;
export const TotalStaffsCountDocument = gql`
    query totalStaffsCount($input: String) {
  totalStaffsCount(search: $input)
}
    `;

/**
 * __useTotalStaffsCountQuery__
 *
 * To run a query within a React component, call `useTotalStaffsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useTotalStaffsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTotalStaffsCountQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTotalStaffsCountQuery(baseOptions?: Apollo.QueryHookOptions<TotalStaffsCountQuery, TotalStaffsCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TotalStaffsCountQuery, TotalStaffsCountQueryVariables>(TotalStaffsCountDocument, options);
      }
export function useTotalStaffsCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TotalStaffsCountQuery, TotalStaffsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TotalStaffsCountQuery, TotalStaffsCountQueryVariables>(TotalStaffsCountDocument, options);
        }
export type TotalStaffsCountQueryHookResult = ReturnType<typeof useTotalStaffsCountQuery>;
export type TotalStaffsCountLazyQueryHookResult = ReturnType<typeof useTotalStaffsCountLazyQuery>;
export type TotalStaffsCountQueryResult = Apollo.QueryResult<TotalStaffsCountQuery, TotalStaffsCountQueryVariables>;
export const GetAllCustomerPaginationDocument = gql`
    query getAllCustomerPagination($search: String, $page: Float!, $limit: Float!, $sortField: String, $sortOrder: String) {
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

/**
 * __useGetAllCustomerPaginationQuery__
 *
 * To run a query within a React component, call `useGetAllCustomerPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCustomerPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCustomerPaginationQuery({
 *   variables: {
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *   },
 * });
 */
export function useGetAllCustomerPaginationQuery(baseOptions: Apollo.QueryHookOptions<GetAllCustomerPaginationQuery, GetAllCustomerPaginationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCustomerPaginationQuery, GetAllCustomerPaginationQueryVariables>(GetAllCustomerPaginationDocument, options);
      }
export function useGetAllCustomerPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCustomerPaginationQuery, GetAllCustomerPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCustomerPaginationQuery, GetAllCustomerPaginationQueryVariables>(GetAllCustomerPaginationDocument, options);
        }
export type GetAllCustomerPaginationQueryHookResult = ReturnType<typeof useGetAllCustomerPaginationQuery>;
export type GetAllCustomerPaginationLazyQueryHookResult = ReturnType<typeof useGetAllCustomerPaginationLazyQuery>;
export type GetAllCustomerPaginationQueryResult = Apollo.QueryResult<GetAllCustomerPaginationQuery, GetAllCustomerPaginationQueryVariables>;
export const GetTotalCustomersCountDocument = gql`
    query getTotalCustomersCount($search: String) {
  getTotalCustomersCount(search: $search)
}
    `;

/**
 * __useGetTotalCustomersCountQuery__
 *
 * To run a query within a React component, call `useGetTotalCustomersCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalCustomersCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalCustomersCountQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useGetTotalCustomersCountQuery(baseOptions?: Apollo.QueryHookOptions<GetTotalCustomersCountQuery, GetTotalCustomersCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalCustomersCountQuery, GetTotalCustomersCountQueryVariables>(GetTotalCustomersCountDocument, options);
      }
export function useGetTotalCustomersCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalCustomersCountQuery, GetTotalCustomersCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalCustomersCountQuery, GetTotalCustomersCountQueryVariables>(GetTotalCustomersCountDocument, options);
        }
export type GetTotalCustomersCountQueryHookResult = ReturnType<typeof useGetTotalCustomersCountQuery>;
export type GetTotalCustomersCountLazyQueryHookResult = ReturnType<typeof useGetTotalCustomersCountLazyQuery>;
export type GetTotalCustomersCountQueryResult = Apollo.QueryResult<GetTotalCustomersCountQuery, GetTotalCustomersCountQueryVariables>;
export const GetGeneralInfor3Document = gql`
    query GetGeneralInfor3 {
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

/**
 * __useGetGeneralInfor3Query__
 *
 * To run a query within a React component, call `useGetGeneralInfor3Query` and pass it any options that fit your needs.
 * When your component renders, `useGetGeneralInfor3Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGeneralInfor3Query({
 *   variables: {
 *   },
 * });
 */
export function useGetGeneralInfor3Query(baseOptions?: Apollo.QueryHookOptions<GetGeneralInfor3Query, GetGeneralInfor3QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGeneralInfor3Query, GetGeneralInfor3QueryVariables>(GetGeneralInfor3Document, options);
      }
export function useGetGeneralInfor3LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGeneralInfor3Query, GetGeneralInfor3QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGeneralInfor3Query, GetGeneralInfor3QueryVariables>(GetGeneralInfor3Document, options);
        }
export type GetGeneralInfor3QueryHookResult = ReturnType<typeof useGetGeneralInfor3Query>;
export type GetGeneralInfor3LazyQueryHookResult = ReturnType<typeof useGetGeneralInfor3LazyQuery>;
export type GetGeneralInfor3QueryResult = Apollo.QueryResult<GetGeneralInfor3Query, GetGeneralInfor3QueryVariables>;