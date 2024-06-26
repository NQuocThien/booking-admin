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

export type Blocks = {
  __typename?: 'Blocks';
  content: Scalars['String']['output'];
  customerId: Scalars['String']['output'];
  seen: Scalars['Boolean']['output'];
};

export type Blog = {
  __typename?: 'Blog';
  content: Scalars['String']['output'];
  createdAt: Scalars['Float']['output'];
  createdBy: UserSlimEntity;
  deletedAt?: Maybe<Scalars['Float']['output']>;
  deletedBy?: Maybe<UserSlimEntity>;
  id: Scalars['ID']['output'];
  keywords: Scalars['String']['output'];
  mainPhoto: LinkImage;
  priority: Scalars['Float']['output'];
  shortContent: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Float']['output']>;
  updatedBy?: Maybe<UserSlimEntity>;
};

export type ConfirmRegisterInput = {
  note?: InputMaybe<Scalars['String']['input']>;
  registerId: Scalars['String']['input'];
  state: EStateRegister;
};

export type CreatUserAndStaffInput = {
  email: Scalars['String']['input'];
  gender: EGender;
  medicalFacilityId: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  password: Scalars['String']['input'];
  permissions: Array<EPermission>;
  specialtyId?: InputMaybe<Array<Scalars['String']['input']>>;
  staffName: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateBlogInput = {
  content: Scalars['String']['input'];
  keywords: Scalars['String']['input'];
  mainPhoto: LinkImageInput;
  priority: Scalars['Float']['input'];
  shortContent: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  status: EnumBlogStatus;
  title: Scalars['String']['input'];
  type: EnumBlogType;
};

export type CreateCustomerInput = {
  address: Scalars['String']['input'];
  dateOfBirth: Scalars['DateTime']['input'];
  email: Scalars['String']['input'];
  ethnic: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  gender: EGender;
  numberPhone: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateDoctorAndUserInput = {
  academicTitle?: InputMaybe<EAcademicTitle>;
  avatar: LinkImageInput;
  degree: EDegree;
  discription: Scalars['String']['input'];
  doctorName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gender: EGender;
  medicalFactilitiesId: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  password: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  specialistId: Scalars['String']['input'];
  username: Scalars['String']['input'];
  workSchedule: WorkScheduleInput;
};

export type CreateDoctorInput = {
  academicTitle?: InputMaybe<EAcademicTitle>;
  avatar: LinkImageInput;
  degree: EDegree;
  discription: Scalars['String']['input'];
  doctorName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gender: EGender;
  medicalFactilitiesId: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  specialistId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  workSchedule: WorkScheduleInput;
};

export type CreateEvaluateInput = {
  comment: Scalars['String']['input'];
  customerName: Scalars['String']['input'];
  doctorId?: InputMaybe<Scalars['String']['input']>;
  packageId?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Float']['input'];
  registerId: Scalars['String']['input'];
  specialtyId?: InputMaybe<Scalars['String']['input']>;
  typeOfService: ETypeOfService;
  userId: Scalars['String']['input'];
  vaccineId?: InputMaybe<Scalars['String']['input']>;
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
  status: EStatusService;
  taxCode: Scalars['String']['input'];
  typeOfFacility: ETypeOfFacility;
  userId: Scalars['String']['input'];
};

export type CreateMedicalSpecialtyInput = {
  discription: Scalars['String']['input'];
  medicalFactilityId: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  specialtyName: Scalars['String']['input'];
  workSchedule?: InputMaybe<WorkScheduleInput>;
};

export type CreateMedicalStaffInput = {
  email: Scalars['String']['input'];
  gender: EGender;
  medicalFacilityId: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  permissions: Array<EPermission>;
  specialtyId?: InputMaybe<Array<Scalars['String']['input']>>;
  staffName: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateNotificationInput = {
  content: Scalars['String']['input'];
  detailPath: Scalars['String']['input'];
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
  createBy?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['DateTime']['input'];
  doctorId: Scalars['String']['input'];
  profileId: Scalars['String']['input'];
  session: SessionInput;
};

export type CreateRegisterPackageInput = {
  createBy?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['DateTime']['input'];
  packageId: Scalars['String']['input'];
  profileId: Scalars['String']['input'];
  session: SessionInput;
};

export type CreateRegisterSpecialtyInput = {
  createBy?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['DateTime']['input'];
  profileId: Scalars['String']['input'];
  session: SessionInput;
  specialtyId: Scalars['String']['input'];
};

export type CreateRegisterVaccineInput = {
  createBy?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['DateTime']['input'];
  profileId: Scalars['String']['input'];
  session: SessionInput;
  vaccineId: Scalars['String']['input'];
};

export type CreateUserByAdminInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
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
  customerKey: Scalars['String']['output'];
  dateOfBirth: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  ethnic: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  numberPhone: Scalars['String']['output'];
  profileShares?: Maybe<Array<Profile>>;
  profiles?: Maybe<Array<Profile>>;
  userId: Scalars['String']['output'];
};

export type Doctor = {
  __typename?: 'Doctor';
  academicTitle?: Maybe<Scalars['String']['output']>;
  avatar: LinkImage;
  degree: Scalars['String']['output'];
  discription: Scalars['String']['output'];
  doctorName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  facility?: Maybe<MedicalFacilities>;
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  medicalFactilitiesId: Scalars['String']['output'];
  numberPhone: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  registerCount?: Maybe<Scalars['Float']['output']>;
  specialistId: Scalars['String']['output'];
  specialty?: Maybe<MedicalSpecialties>;
  userId: Scalars['String']['output'];
  workSchedule: WorkSchedule;
};


export type DoctorRegisterCountArgs = {
  endTime: Scalars['String']['input'];
  isCancel?: InputMaybe<Scalars['Boolean']['input']>;
  isPending?: InputMaybe<Scalars['Boolean']['input']>;
  missed?: InputMaybe<Scalars['Boolean']['input']>;
  startTime: Scalars['String']['input'];
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
  MagagerPackage = 'MagagerPackage',
  MagagerPending = 'MagagerPending',
  MagagerVaccine = 'MagagerVaccine',
  ManagerSpecialty = 'ManagerSpecialty'
}

export enum EStateRegister {
  Approved = 'Approved',
  Pending = 'Pending',
  Success = 'Success'
}

export enum EStatusService {
  Close = 'Close',
  Open = 'Open'
}

export enum ETypeOfFacility {
  Clinic = 'clinic',
  PrivateHospital = 'privateHospital',
  PublicHospital = 'publicHospital',
  VaccinationCenter = 'vaccinationCenter'
}

export enum ETypeOfNotification {
  NotSeen = 'NotSeen',
  Seen = 'Seen'
}

export enum ETypeOfService {
  Doctor = 'Doctor',
  Package = 'Package',
  Specialty = 'Specialty',
  Vaccine = 'Vaccine'
}

export enum EnumBlogStatus {
  Deleted = 'Deleted',
  NotPublic = 'NotPublic',
  Public = 'Public'
}

export enum EnumBlogType {
  Health = 'Health',
  Medical = 'Medical',
  Service = 'Service'
}

export type Evaluate = {
  __typename?: 'Evaluate';
  comment: Scalars['String']['output'];
  createdAt: Scalars['Float']['output'];
  customerName: Scalars['String']['output'];
  doctorId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  packageId?: Maybe<Scalars['String']['output']>;
  rating: Scalars['Float']['output'];
  registerId: Scalars['String']['output'];
  specialtyId?: Maybe<Scalars['String']['output']>;
  typeOfService: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Float']['output']>;
  userId: Scalars['String']['output'];
  vaccineId?: Maybe<Scalars['String']['output']>;
};

export type Exception = {
  __typename?: 'Exception';
  dates: Array<Scalars['DateTime']['output']>;
  numbeSlot?: Maybe<Scalars['Float']['output']>;
  open: Scalars['Boolean']['output'];
};

export type ExceptionInput = {
  dates: Array<Scalars['DateTime']['input']>;
  numbeSlot?: InputMaybe<Scalars['Float']['input']>;
  open: Scalars['Boolean']['input'];
};

export type FilterDoctorInput = {
  academicTitle?: InputMaybe<EAcademicTitle>;
  degree?: InputMaybe<EDegree>;
  doctorName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<EGender>;
  specialistId?: InputMaybe<Scalars['String']['input']>;
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

export type GetEvaluateOptionInput = {
  doctorId?: InputMaybe<Scalars['String']['input']>;
  packageId?: InputMaybe<Scalars['String']['input']>;
  specialtyId?: InputMaybe<Scalars['String']['input']>;
  vaccineId?: InputMaybe<Scalars['String']['input']>;
};

export type GetRegisPendingInput = {
  cancel: Scalars['Boolean']['input'];
  endTime: Scalars['String']['input'];
  facilityIdFromStaff?: InputMaybe<Scalars['String']['input']>;
  startTime: Scalars['String']['input'];
  typeOfService?: InputMaybe<ETypeOfService>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type GetRegisterByOptionInput = {
  date: Scalars['DateTime']['input'];
  doctorId?: InputMaybe<Scalars['String']['input']>;
  packageId?: InputMaybe<Scalars['String']['input']>;
  pedding?: InputMaybe<Scalars['Boolean']['input']>;
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
  blocks?: Maybe<Array<Blocks>>;
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
  typeOfFacility: Scalars['String']['output'];
  userId: Scalars['String']['output'];
  vaccinations?: Maybe<Array<Vaccination>>;
};


export type MedicalFacilitiesDoctorsArgs = {
  isClient?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MedicalFacilitiesMedicalSpecialtiesArgs = {
  isClient?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MedicalFacilitiesPackagesArgs = {
  isClient?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MedicalFacilitiesTotalDoctorsArgs = {
  isClient?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MedicalFacilitiesTotalPackagesArgs = {
  isClient?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MedicalFacilitiesTotalSpecialtiesArgs = {
  isClient?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MedicalFacilitiesTotalVaccinationsArgs = {
  isClient?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MedicalFacilitiesVaccinationsArgs = {
  isClient?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MedicalSpecialties = {
  __typename?: 'MedicalSpecialties';
  discription: Scalars['String']['output'];
  facility?: Maybe<MedicalFacilities>;
  id: Scalars['ID']['output'];
  medicalFactilityId: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  registerCount?: Maybe<Scalars['Float']['output']>;
  specialtyName: Scalars['String']['output'];
  workSchedule?: Maybe<WorkSchedule>;
};


export type MedicalSpecialtiesRegisterCountArgs = {
  endTime: Scalars['String']['input'];
  isCancel?: InputMaybe<Scalars['Boolean']['input']>;
  isPending?: InputMaybe<Scalars['Boolean']['input']>;
  missed?: InputMaybe<Scalars['Boolean']['input']>;
  startTime: Scalars['String']['input'];
};

export type MedicalStaff = {
  __typename?: 'MedicalStaff';
  email: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  medicalFacilityId: Scalars['String']['output'];
  numberPhone: Scalars['String']['output'];
  permissions: Array<Scalars['String']['output']>;
  specialties?: Maybe<Array<MedicalSpecialties>>;
  specialtyId?: Maybe<Array<Scalars['String']['output']>>;
  staffName: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  activeUser: User;
  addBlockCustomerByProfileId: MedicalFacilities;
  cancelRegister: Register;
  cancelRegisterByAdmin: Register;
  confirmRegister: Register;
  confirmRegisters: Array<Register>;
  createBlog: Blog;
  createCustomer: Customer;
  createDoctor: Doctor;
  createEvaluate: Evaluate;
  createMedicalFacility: MedicalFacilities;
  createMedicalSpecialty: MedicalSpecialties;
  createMedicalStaff: MedicalStaff;
  createNotification: Notification;
  createPackage: Package;
  createProfile: Profile;
  createRegisterDoctor: Register;
  createRegisterPackage: Register;
  createRegisterSpecialty: Register;
  createRegisterVaccine: Register;
  createUserAndStaff: MedicalStaff;
  createVaccination: Vaccination;
  deleteDoctor: Doctor;
  deleteEvaluate: Evaluate;
  deleteMecialSpecialty: MedicalSpecialties;
  deleteMedicalFacility: MedicalFacilities;
  deleteMedicalStaff: MedicalStaff;
  deleteNotification: Notification;
  deletePackage: Package;
  deleteProfile: Profile;
  deleteUnDeleteBlog: Blog;
  deleteUser: User;
  deleteUserAndDoctor: Doctor;
  deleteVaccination: Vaccination;
  generateExcel: Scalars['String']['output'];
  generateExcelRegisByOption: Scalars['String']['output'];
  login: LoginRespone;
  logout: LogoutUser;
  seenAllNotification: Scalars['String']['output'];
  seenNotificationById: Scalars['String']['output'];
  shareProfile: Profile;
  signup: User;
  signupAndCreateDoctor: Doctor;
  signupUser: User;
  updateBlog: Blog;
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
  updateUserAndDoctor: Doctor;
  updateUserAndStaff: MedicalStaff;
  updateUserWithPass: User;
  updateVaccination: Vaccination;
  uploadFileRegister: Register;
};


export type MutationActiveUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationAddBlockCustomerByProfileIdArgs = {
  content: Scalars['String']['input'];
  customerId?: InputMaybe<Scalars['String']['input']>;
  facilityId?: InputMaybe<Scalars['String']['input']>;
  isBlock?: InputMaybe<Scalars['Boolean']['input']>;
  profileId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCancelRegisterArgs = {
  id: Scalars['String']['input'];
};


export type MutationCancelRegisterByAdminArgs = {
  content: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type MutationConfirmRegisterArgs = {
  input: ConfirmRegisterInput;
};


export type MutationConfirmRegistersArgs = {
  input: Array<ConfirmRegisterInput>;
};


export type MutationCreateBlogArgs = {
  input: CreateBlogInput;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
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


export type MutationCreateNotificationArgs = {
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


export type MutationCreateUserAndStaffArgs = {
  input: CreatUserAndStaffInput;
};


export type MutationCreateVaccinationArgs = {
  input: CreateVaccineInput;
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


export type MutationDeleteUnDeleteBlogArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserAndDoctorArgs = {
  doctorId: Scalars['String']['input'];
  medicalFactilitiesId: Scalars['String']['input'];
};


export type MutationDeleteVaccinationArgs = {
  input: Scalars['String']['input'];
};


export type MutationGenerateExcelRegisByOptionArgs = {
  input: GetRegisterByOptionInput;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationSeenAllNotificationArgs = {
  userId: Scalars['String']['input'];
};


export type MutationSeenNotificationByIdArgs = {
  id: Scalars['String']['input'];
};


export type MutationShareProfileArgs = {
  customerKey: Scalars['String']['input'];
  profileId: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  createUserInput: CreateUserInput;
};


export type MutationSignupAndCreateDoctorArgs = {
  input: CreateDoctorAndUserInput;
};


export type MutationSignupUserArgs = {
  createUserInput: CreateUserByAdminInput;
};


export type MutationUpdateBlogArgs = {
  input: UpdateBlogInput;
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


export type MutationUpdateUserAndDoctorArgs = {
  input: UpdateUserAndDoctorInput;
};


export type MutationUpdateUserAndStaffArgs = {
  input: UpdateUserAndStaffInput;
};


export type MutationUpdateUserWithPassArgs = {
  updateUserInput: UpdateUserWithPassInput;
};


export type MutationUpdateVaccinationArgs = {
  input: UpdateVaccineInput;
};


export type MutationUploadFileRegisterArgs = {
  input: UpLoadFileRegisInput;
};

export type Notification = {
  __typename?: 'Notification';
  content: Scalars['String']['output'];
  createdAt: Scalars['Float']['output'];
  detailPath: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  status: ETypeOfNotification;
  userId: Scalars['String']['output'];
};

export type Package = {
  __typename?: 'Package';
  examinationDetails: Scalars['String']['output'];
  facility?: Maybe<MedicalFacilities>;
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: LinkImage;
  medicalFactilitiesId: Scalars['String']['output'];
  packageName: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  registerCount?: Maybe<Scalars['Float']['output']>;
  workSchedule: WorkSchedule;
};


export type PackageRegisterCountArgs = {
  endTime: Scalars['String']['input'];
  isCancel?: InputMaybe<Scalars['Boolean']['input']>;
  isPending?: InputMaybe<Scalars['Boolean']['input']>;
  missed?: InputMaybe<Scalars['Boolean']['input']>;
  startTime: Scalars['String']['input'];
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
  shares?: Maybe<Array<Scalars['String']['output']>>;
};


export type ProfileRegisterArgs = {
  cancel?: InputMaybe<Scalars['Boolean']['input']>;
  stateRegis?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  checklogin: User;
  checkloginCustomer: User;
  getAllBlogOfFacilityPagination: Array<Blog>;
  getAllBlogPagination: Array<Blog>;
  getAllBlogPaginationForClient: Array<Blog>;
  getAllCustomer: Array<Customer>;
  getAllCustomerFromRegis: Array<Customer>;
  getAllCustomerFromRegisCount: Scalars['Float']['output'];
  getAllCustomerPagination: Array<Customer>;
  getAllDoctor: Array<Doctor>;
  getAllDoctorByFacilityId: Array<Doctor>;
  getAllDoctorOfFacility: Array<Doctor>;
  getAllDoctorPagination: Array<Doctor>;
  getAllDoctorPaginationOfFacility: Array<Doctor>;
  getAllDoctorPaginationOfFacilityForClient: Array<Doctor>;
  getAllDoctorPending: Array<Doctor>;
  getAllEvaluate: Array<Evaluate>;
  getAllMecialSpecialty: Array<MedicalSpecialties>;
  getAllMedicalFacility: Array<MedicalFacilities>;
  getAllMedicalFacilityHaveSrvPaginationForClient: Array<MedicalFacilities>;
  getAllMedicalFacilityPagination: Array<MedicalFacilities>;
  getAllMedicalFacilityPaginationForClient: Array<MedicalFacilities>;
  getAllMedicalSpecialtiesOfFacility: Array<MedicalSpecialties>;
  getAllMedicalSpecialtiesPaginationByStaff: Array<MedicalSpecialties>;
  getAllMedicalSpecialtiesPaginationOfFacility: Array<MedicalSpecialties>;
  getAllMedicalSpecialtiesPaginationOfFacilityForClient: Array<MedicalSpecialties>;
  getAllMedicalStaff: Array<MedicalStaff>;
  getAllMedicalStaffPaginationOfFacility: Array<MedicalStaff>;
  getAllNotification: Array<Notification>;
  getAllNotificationByUserId: Array<Notification>;
  getAllPackage: Array<Package>;
  getAllPackageByFacilityId: Array<Package>;
  getAllPackageOfFacility: Array<Package>;
  getAllPackagePaginationByStaff: Array<Package>;
  getAllPackagePaginationOfFacility: Array<Package>;
  getAllPackagePaginationOfFacilityForClient: Array<Package>;
  getAllPackageSelect: Array<Package>;
  getAllProfile: Array<Profile>;
  getAllRegisCountByOption: Register;
  getAllRegisOfService: Array<Register>;
  getAllRegisPending: Array<Register>;
  getAllRegisPendingCount: Scalars['Float']['output'];
  getAllRegisterByOption: Array<Register>;
  getAllStaffPagination: Array<MedicalStaff>;
  getAllUsersPagination: Array<User>;
  getAllVacation: Array<Vaccination>;
  getAllVaccinationByFacilityId: Array<Vaccination>;
  getAllVaccinationOfFacility: Array<Vaccination>;
  getAllVaccinationPaginationByStaff: Array<Vaccination>;
  getAllVaccinationPaginationOfFacility: Array<Vaccination>;
  getAllVaccinationPaginationOfFacilityForClient: Array<Vaccination>;
  getAllVaccinationSelect: Array<Vaccination>;
  getBlogBySlug: Blog;
  getDoctorbyId: Doctor;
  getDoctorbyUserId: Doctor;
  getEvaluateById: Evaluate;
  getEvaluateByOption: Array<Evaluate>;
  getEvaluateByRegisId: Evaluate;
  getGeneralInfor: GeneralInfor;
  getMedicalFacilityById: MedicalFacilities;
  getMedicalFacilityInfo: MedicalFacilities;
  getMedicalSpecialtiesByMedicalFacilityId: Array<MedicalSpecialties>;
  getMedicalSpecialtyById: MedicalSpecialties;
  getMedicalSpecialtySelect: Array<MedicalSpecialties>;
  getMedicalStaffByFacilityId: Array<MedicalStaff>;
  getMedicalStaffById: MedicalStaff;
  getMedicalStaffByUserId: MedicalStaff;
  getPackageById: Package;
  getProfileByCustomerId: Array<Profile>;
  getProfileByCustomerKey: Array<Profile>;
  getProfileById: Profile;
  getProfiles: Profile;
  getRegisById: Register;
  getRegisHistory: Array<Register>;
  getSetting: Setting;
  getTopMedicalFacilities: Array<MedicalFacilities>;
  getTotalBlogsCount: Scalars['Float']['output'];
  getTotalBlogsCountForClient: Scalars['Float']['output'];
  getTotalCustomersCount: Scalars['Float']['output'];
  getTotalDoctorsCount: Scalars['Float']['output'];
  getTotalDoctorsCountForClient: Scalars['Float']['output'];
  getTotalFacilitiesCount: Scalars['Float']['output'];
  getTotalFacilitiesCountForClient: Scalars['Float']['output'];
  getTotalFacilitiesHaveSrvCountForClient: Scalars['Float']['output'];
  getTotalMedicalSpecialtiesCount: Scalars['Float']['output'];
  getTotalMedicalSpecialtiesCountForClient: Scalars['Float']['output'];
  getTotalPackagesCount: Scalars['Float']['output'];
  getTotalPackagesCountForClient: Scalars['Float']['output'];
  getTotalVaccinationsCount: Scalars['Float']['output'];
  getTotalVaccinationsCountForClient: Scalars['Float']['output'];
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


export type QueryGetAllBlogOfFacilityPaginationArgs = {
  facilityId: Scalars['String']['input'];
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllBlogPaginationArgs = {
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllBlogPaginationForClientArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllCustomerFromRegisArgs = {
  facilityId?: InputMaybe<Scalars['String']['input']>;
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllCustomerFromRegisCountArgs = {
  facilityId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
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


export type QueryGetAllDoctorOfFacilityArgs = {
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllDoctorPaginationArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllDoctorPaginationOfFacilityArgs = {
  filter?: InputMaybe<FilterDoctorInput>;
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllDoctorPaginationOfFacilityForClientArgs = {
  facilityId: Scalars['String']['input'];
  filter?: InputMaybe<FilterDoctorInput>;
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllMedicalFacilityHaveSrvPaginationForClientArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllMedicalFacilityPaginationArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllMedicalFacilityPaginationForClientArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  searchField?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllMedicalSpecialtiesOfFacilityArgs = {
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllMedicalSpecialtiesPaginationByStaffArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  staffId: Scalars['String']['input'];
};


export type QueryGetAllMedicalSpecialtiesPaginationOfFacilityArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllMedicalSpecialtiesPaginationOfFacilityForClientArgs = {
  facilityId: Scalars['String']['input'];
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllMedicalStaffPaginationOfFacilityArgs = {
  facilityId?: InputMaybe<Scalars['String']['input']>;
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllNotificationByUserIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetAllPackageByFacilityIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetAllPackageOfFacilityArgs = {
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllPackagePaginationByStaffArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllPackagePaginationOfFacilityArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllPackagePaginationOfFacilityForClientArgs = {
  facilityId: Scalars['String']['input'];
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllPackageSelectArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetAllRegisCountByOptionArgs = {
  input: GetRegisterByOptionInput;
};


export type QueryGetAllRegisOfServiceArgs = {
  input: GetRegisterByOptionInput;
};


export type QueryGetAllRegisPendingArgs = {
  input: GetRegisPendingInput;
  limit?: Scalars['Float']['input'];
  missed?: InputMaybe<Scalars['Boolean']['input']>;
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllRegisPendingCountArgs = {
  input: GetRegisPendingInput;
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
  role?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllVaccinationByFacilityIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetAllVaccinationOfFacilityArgs = {
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllVaccinationPaginationByStaffArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllVaccinationPaginationOfFacilityArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllVaccinationPaginationOfFacilityForClientArgs = {
  facilityId: Scalars['String']['input'];
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllVaccinationSelectArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetBlogBySlugArgs = {
  slug: Scalars['String']['input'];
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


export type QueryGetEvaluateByOptionArgs = {
  option: GetEvaluateOptionInput;
};


export type QueryGetEvaluateByRegisIdArgs = {
  regisId: Scalars['String']['input'];
};


export type QueryGetMedicalFacilityByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetMedicalFacilityInfoArgs = {
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
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


export type QueryGetMedicalStaffByUserIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetPackageByIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetProfileByCustomerIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetProfileByCustomerKeyArgs = {
  customerKey: Scalars['String']['input'];
};


export type QueryGetProfileByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetProfilesArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetRegisByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetRegisHistoryArgs = {
  profileId: Scalars['String']['input'];
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTopMedicalFacilitiesArgs = {
  limit?: Scalars['Float']['input'];
  typeFacility: Scalars['String']['input'];
};


export type QueryGetTotalBlogsCountArgs = {
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalBlogsCountForClientArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalCustomersCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalDoctorsCountArgs = {
  filter?: InputMaybe<FilterDoctorInput>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalDoctorsCountForClientArgs = {
  facilityId: Scalars['String']['input'];
  filter?: InputMaybe<FilterDoctorInput>;
};


export type QueryGetTotalFacilitiesCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalFacilitiesCountForClientArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  searchField?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalFacilitiesHaveSrvCountForClientArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalMedicalSpecialtiesCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalMedicalSpecialtiesCountForClientArgs = {
  facilityId: Scalars['String']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalPackagesCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalPackagesCountForClientArgs = {
  facilityId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalVaccinationsCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalVaccinationsCountForClientArgs = {
  facilityId: Scalars['String']['input'];
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
  facilityId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTotalUsersCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type RegisPendingInput = {
  cancel: Scalars['Boolean']['input'];
  doctorIds: Array<Scalars['String']['input']>;
  endTime: Scalars['String']['input'];
  packageIds: Array<Scalars['String']['input']>;
  specialtyIds: Array<Scalars['String']['input']>;
  startTime: Scalars['String']['input'];
  typeOfService?: InputMaybe<ETypeOfService>;
  vaccineIds: Array<Scalars['String']['input']>;
};

export type Register = {
  __typename?: 'Register';
  cancel: Scalars['Boolean']['output'];
  createRegisBy?: Maybe<Customer>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  date: Scalars['DateTime']['output'];
  doctor?: Maybe<Doctor>;
  doctorId?: Maybe<Scalars['String']['output']>;
  files?: Maybe<Array<LinkImage>>;
  id: Scalars['ID']['output'];
  note?: Maybe<Scalars['String']['output']>;
  package?: Maybe<Package>;
  packageId?: Maybe<Scalars['String']['output']>;
  profile?: Maybe<Profile>;
  profileId: Scalars['String']['output'];
  session: Session;
  specialty?: Maybe<MedicalSpecialties>;
  specialtyId?: Maybe<Scalars['String']['output']>;
  state: Scalars['String']['output'];
  typeOfService: Scalars['String']['output'];
  vaccination?: Maybe<Vaccination>;
  vaccineId?: Maybe<Scalars['String']['output']>;
  warning?: Maybe<Scalars['Float']['output']>;
  warningThisMonth?: Maybe<Scalars['Float']['output']>;
};

export enum Role {
  Admin = 'Admin',
  Customer = 'Customer',
  Doctor = 'Doctor',
  Facility = 'Facility',
  Staff = 'Staff'
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
  exceptions?: Maybe<Array<Exception>>;
  startTime: Scalars['String']['output'];
};

export type SessionInput = {
  endTime: Scalars['String']['input'];
  exceptions?: InputMaybe<Array<ExceptionInput>>;
  startTime: Scalars['String']['input'];
};

export type Setting = {
  __typename?: 'Setting';
  defaultLang: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  notifyCreated: Notification;
  registerCreated: Register;
  registerPendingCreated: Register;
};


export type SubscriptionNotifyCreatedArgs = {
  userId: Scalars['String']['input'];
};


export type SubscriptionRegisterCreatedArgs = {
  option: GetRegisterByOptionInput;
};


export type SubscriptionRegisterPendingCreatedArgs = {
  option: RegisPendingInput;
};

export type UpLoadFileRegisInput = {
  files?: InputMaybe<Array<LinkImageInput>>;
  id: Scalars['String']['input'];
};

export type UpdateBlogInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['Float']['input']>;
  deletedBy?: InputMaybe<UserSlimInput>;
  id: Scalars['ID']['input'];
  keywords?: InputMaybe<Scalars['String']['input']>;
  mainPhoto?: InputMaybe<LinkImageInput>;
  priority?: InputMaybe<Scalars['Float']['input']>;
  shortContent: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<EnumBlogStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumBlogType>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
  updatedBy?: InputMaybe<UserSlimInput>;
};

export type UpdateCustomerInput = {
  address: Scalars['String']['input'];
  dateOfBirth: Scalars['DateTime']['input'];
  email: Scalars['String']['input'];
  ethnic: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  gender: EGender;
  id: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
};

export type UpdateDoctorInput = {
  academicTitle?: InputMaybe<EAcademicTitle>;
  avatar: LinkImageInput;
  degree: EDegree;
  discription: Scalars['String']['input'];
  doctorName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gender: EGender;
  id: Scalars['String']['input'];
  medicalFactilitiesId: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  specialistId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
  workSchedule: WorkScheduleInput;
};

export type UpdateEvaluateInput = {
  comment: Scalars['String']['input'];
  id: Scalars['String']['input'];
  rating: Scalars['Float']['input'];
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
  status: EStatusService;
  taxCode: Scalars['String']['input'];
  typeOfFacility: ETypeOfFacility;
  userId: Scalars['String']['input'];
};

export type UpdateMedicalSpecialtyInput = {
  discription: Scalars['String']['input'];
  id: Scalars['String']['input'];
  medicalFactilityId: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  specialtyName: Scalars['String']['input'];
  workSchedule?: InputMaybe<WorkScheduleInput>;
};

export type UpdateMedicalStaffInput = {
  email: Scalars['String']['input'];
  gender: EGender;
  id: Scalars['String']['input'];
  medicalFacilityId: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  permissions: Array<EPermission>;
  specialtyId?: InputMaybe<Array<Scalars['String']['input']>>;
  staffName: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
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
  cancel: Scalars['Boolean']['input'];
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

export type UpdateUserAndDoctorInput = {
  academicTitle?: InputMaybe<EAcademicTitle>;
  avatar: LinkImageInput;
  degree: EDegree;
  discription: Scalars['String']['input'];
  doctorName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gender: EGender;
  id: Scalars['String']['input'];
  medicalFactilitiesId: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  specialistId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  workSchedule: WorkScheduleInput;
};

export type UpdateUserAndStaffInput = {
  email: Scalars['String']['input'];
  gender: EGender;
  id: Scalars['String']['input'];
  medicalFacilityId: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  permissions: Array<EPermission>;
  specialtyId?: InputMaybe<Array<Scalars['String']['input']>>;
  staffName: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  avatar?: InputMaybe<LinkImageInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserWithPassInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  avatar?: InputMaybe<LinkImageInput>;
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
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
  avatar?: Maybe<LinkImage>;
  customer?: Maybe<Customer>;
  doctor?: Maybe<Doctor>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  medicalFacilities?: Maybe<MedicalFacilities>;
  password: Scalars['String']['output'];
  roles?: Maybe<Array<Scalars['String']['output']>>;
  username: Scalars['String']['output'];
};

export type UserSelectInput = {
  role: Role;
};

export type UserSlimEntity = {
  __typename?: 'UserSlimEntity';
  role: Scalars['String']['output'];
  showName: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type UserSlimInput = {
  role: Scalars['String']['input'];
  showName: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Vaccination = {
  __typename?: 'Vaccination';
  countryOfOrigin: Scalars['String']['output'];
  facility?: Maybe<MedicalFacilities>;
  id: Scalars['ID']['output'];
  indication: Scalars['String']['output'];
  medicalFactilitiesId: Scalars['String']['output'];
  note: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  prophylactic: Scalars['String']['output'];
  registerCount?: Maybe<Scalars['Float']['output']>;
  vaccineName: Scalars['String']['output'];
  workSchedule: WorkSchedule;
};


export type VaccinationRegisterCountArgs = {
  endTime: Scalars['String']['input'];
  isCancel?: InputMaybe<Scalars['Boolean']['input']>;
  isPending?: InputMaybe<Scalars['Boolean']['input']>;
  missed?: InputMaybe<Scalars['Boolean']['input']>;
  startTime: Scalars['String']['input'];
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


export type CreateDoctorMutation = { __typename?: 'Mutation', createDoctor: { __typename?: 'Doctor', id: string, userId: string, medicalFactilitiesId: string, doctorName: string, gender: string, numberPhone: string, email: string, academicTitle?: string | null, degree: string, specialistId: string, discription: string, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string }> }> } } };

export type UpdateDoctorMutationVariables = Exact<{
  input: UpdateDoctorInput;
}>;


export type UpdateDoctorMutation = { __typename?: 'Mutation', updateDoctor: { __typename?: 'Doctor', id: string, userId: string, medicalFactilitiesId: string, doctorName: string, gender: string, numberPhone: string, email: string, academicTitle?: string | null, degree: string, specialistId: string, discription: string, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string }> }> } } };

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


export type CreateMedicalSpecialtyMutation = { __typename?: 'Mutation', createMedicalSpecialty: { __typename?: 'MedicalSpecialties', id: string, medicalFactilityId: string, specialtyName: string, price: number, discription: string, workSchedule?: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', endTime: string, startTime: string }> }> } | null } };

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

export type ConfirmRegistersMutationVariables = Exact<{
  input: Array<ConfirmRegisterInput> | ConfirmRegisterInput;
}>;


export type ConfirmRegistersMutation = { __typename?: 'Mutation', confirmRegisters: Array<{ __typename?: 'Register', id: string, state: string, note?: string | null }> };

export type DeleteMedicalStaffMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type DeleteMedicalStaffMutation = { __typename?: 'Mutation', deleteMedicalStaff: { __typename?: 'MedicalStaff', id: string } };

export type UpdateMedicalStaffMutationVariables = Exact<{
  input: UpdateMedicalStaffInput;
}>;


export type UpdateMedicalStaffMutation = { __typename?: 'Mutation', updateMedicalStaff: { __typename?: 'MedicalStaff', id: string } };

export type CreateBlogMutationVariables = Exact<{
  input: CreateBlogInput;
}>;


export type CreateBlogMutation = { __typename?: 'Mutation', createBlog: { __typename?: 'Blog', id: string, slug: string, title: string, content: string, shortContent: string, priority: number, type: string, keywords: string, createdAt: number, updatedAt?: number | null, deletedAt?: number | null, mainPhoto: { __typename?: 'LinkImage', filename: string, type: string, url: string }, createdBy: { __typename?: 'UserSlimEntity', username: string, showName: string, role: string }, updatedBy?: { __typename?: 'UserSlimEntity', username: string, showName: string, role: string } | null, deletedBy?: { __typename?: 'UserSlimEntity', role: string, showName: string, username: string } | null } };

export type UpdateBlogMutationVariables = Exact<{
  input: UpdateBlogInput;
}>;


export type UpdateBlogMutation = { __typename?: 'Mutation', updateBlog: { __typename?: 'Blog', id: string, slug: string, title: string, content: string, shortContent: string, priority: number, type: string, keywords: string, createdAt: number, updatedAt?: number | null, deletedAt?: number | null, mainPhoto: { __typename?: 'LinkImage', filename: string, type: string, url: string }, createdBy: { __typename?: 'UserSlimEntity', username: string, showName: string, role: string }, updatedBy?: { __typename?: 'UserSlimEntity', username: string, showName: string, role: string } | null, deletedBy?: { __typename?: 'UserSlimEntity', role: string, showName: string, username: string } | null } };

export type DeleteUnDeleteBlogMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteUnDeleteBlogMutation = { __typename?: 'Mutation', deleteUnDeleteBlog: { __typename?: 'Blog', id: string } };

export type UploadFileRegisterMutationVariables = Exact<{
  input: UpLoadFileRegisInput;
}>;


export type UploadFileRegisterMutation = { __typename?: 'Mutation', uploadFileRegister: { __typename?: 'Register', id: string } };

export type CancelRegisterByAdminMutationVariables = Exact<{
  id: Scalars['String']['input'];
  content: Scalars['String']['input'];
}>;


export type CancelRegisterByAdminMutation = { __typename?: 'Mutation', cancelRegisterByAdmin: { __typename?: 'Register', id: string } };

export type SignupAndCreateDoctorMutationVariables = Exact<{
  input: CreateDoctorAndUserInput;
}>;


export type SignupAndCreateDoctorMutation = { __typename?: 'Mutation', signupAndCreateDoctor: { __typename?: 'Doctor', id: string } };

export type UpdateUserAndDoctorMutationVariables = Exact<{
  input: UpdateUserAndDoctorInput;
}>;


export type UpdateUserAndDoctorMutation = { __typename?: 'Mutation', updateUserAndDoctor: { __typename?: 'Doctor', id: string } };

export type CreateUserAndStaffMutationVariables = Exact<{
  input: CreatUserAndStaffInput;
}>;


export type CreateUserAndStaffMutation = { __typename?: 'Mutation', createUserAndStaff: { __typename?: 'MedicalStaff', id: string } };

export type UpdateUserAndStaffMutationVariables = Exact<{
  input: UpdateUserAndStaffInput;
}>;


export type UpdateUserAndStaffMutation = { __typename?: 'Mutation', updateUserAndStaff: { __typename?: 'MedicalStaff', id: string } };

export type DeleteUserAndDoctorMutationVariables = Exact<{
  doctorId: Scalars['String']['input'];
  medicalFactilitiesId: Scalars['String']['input'];
}>;


export type DeleteUserAndDoctorMutation = { __typename?: 'Mutation', deleteUserAndDoctor: { __typename?: 'Doctor', id: string } };

export type GenerateExcelMutationVariables = Exact<{ [key: string]: never; }>;


export type GenerateExcelMutation = { __typename?: 'Mutation', generateExcel: string };

export type GenerateExcelRegisByOptionMutationVariables = Exact<{
  input: GetRegisterByOptionInput;
}>;


export type GenerateExcelRegisByOptionMutation = { __typename?: 'Mutation', generateExcelRegisByOption: string };

export type AddBlockCustomerByProfileIdMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  profileId?: InputMaybe<Scalars['String']['input']>;
  facilityId?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  isBlock?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type AddBlockCustomerByProfileIdMutation = { __typename?: 'Mutation', addBlockCustomerByProfileId: { __typename?: 'MedicalFacilities', id: string, userId: string, medicalFacilityName: string, address: string, numberPhone: string, email: string, lat?: number | null, lng?: number | null, discription: string, introduce: string, typeOfFacility: string, operatingStatus: string, legalRepresentation: string, taxCode: string, status: string, dateOff?: Array<any> | null, schedule: string, logo: { __typename?: 'LinkImage', filename: string, type: string, url: string }, image: { __typename?: 'LinkImage', filename: string, type: string, url: string }, blocks?: Array<{ __typename?: 'Blocks', content: string, customerId: string, seen: boolean }> | null } };

export type CheckLoginQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckLoginQueryQuery = { __typename?: 'Query', checklogin: { __typename?: 'User', id: string, email: string, username: string, password: string, roles?: Array<string> | null, avatar?: { __typename?: 'LinkImage', filename: string, type: string, url: string } | null } };

export type GetSettingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSettingQuery = { __typename?: 'Query', getSetting: { __typename?: 'Setting', defaultLang: string } };

export type GetGeneralInforQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGeneralInforQuery = { __typename?: 'Query', getGeneralInfor: { __typename?: 'GeneralInfor', company: string, address: string, copyrigth: string, email: string, hotline: string, liscenceBusiness: string, liscenceOparating: string, ID?: string | null, logoFooter: { __typename?: 'LinkImage', filename: string, url: string, type: string }, logoHeader: { __typename?: 'LinkImage', filename: string, url: string } } };

export type GetAllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, username: string, password: string, roles?: Array<string> | null, active?: boolean | null, avatar?: { __typename?: 'LinkImage', filename: string, type: string, url: string } | null }> };

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


export type GetMedicalFacilityByIdQuery = { __typename?: 'Query', getMedicalFacilityById: { __typename?: 'MedicalFacilities', id: string, userId: string, medicalFacilityName: string, address: string, numberPhone: string, email: string, lat?: number | null, lng?: number | null, discription: string, introduce: string, typeOfFacility: string, operatingStatus: string, legalRepresentation: string, taxCode: string, status: string, dateOff?: Array<any> | null, schedule: string, logo: { __typename?: 'LinkImage', filename: string, type: string, url: string }, image: { __typename?: 'LinkImage', filename: string, type: string, url: string } } };

export type GetMedicalFacilityInfoQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetMedicalFacilityInfoQuery = { __typename?: 'Query', getMedicalFacilityInfo: { __typename?: 'MedicalFacilities', id: string, userId: string, medicalFacilityName: string, address: string, numberPhone: string, email: string, lat?: number | null, lng?: number | null, discription: string, introduce: string, typeOfFacility: string, operatingStatus: string, legalRepresentation: string, taxCode: string, status: string, dateOff?: Array<any> | null, schedule: string, totalDoctors?: number | null, totalPackages?: number | null, totalSpecialties?: number | null, totalVaccinations?: number | null, logo: { __typename?: 'LinkImage', filename: string, type: string, url: string }, image: { __typename?: 'LinkImage', filename: string, type: string, url: string }, blocks?: Array<{ __typename?: 'Blocks', content: string, customerId: string, seen: boolean }> | null } };

export type GetGeneralMedicalFacilityInfoQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetGeneralMedicalFacilityInfoQuery = { __typename?: 'Query', getMedicalFacilityInfo: { __typename?: 'MedicalFacilities', id: string, userId: string, medicalFacilityName: string, address: string, numberPhone: string, email: string, lat?: number | null, lng?: number | null, discription: string, introduce: string, typeOfFacility: string, operatingStatus: string, legalRepresentation: string, taxCode: string, status: string, dateOff?: Array<any> | null, schedule: string, logo: { __typename?: 'LinkImage', filename: string, type: string, url: string }, image: { __typename?: 'LinkImage', filename: string, type: string, url: string } } };

export type GetMedicalFacilityIdByUserIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetMedicalFacilityIdByUserIdQuery = { __typename?: 'Query', getMedicalFacilityInfo: { __typename?: 'MedicalFacilities', id: string, userId: string, medicalFacilityName: string } };

export type GetAllMedicalFacilityPaginationQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllMedicalFacilityPaginationQuery = { __typename?: 'Query', getAllMedicalFacilityPagination: Array<{ __typename?: 'MedicalFacilities', id: string, userId: string, medicalFacilityName: string, address: string, numberPhone: string, email: string, lat?: number | null, lng?: number | null, discription: string, introduce: string, typeOfFacility: string, operatingStatus: string, legalRepresentation: string, taxCode: string, status: string, dateOff?: Array<any> | null, schedule: string, logo: { __typename?: 'LinkImage', filename: string, type: string, url: string }, image: { __typename?: 'LinkImage', filename: string, type: string, url: string } }> };

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


export type GetMedicalStaffByFacilityIdQuery = { __typename?: 'Query', getMedicalStaffByFacilityId: Array<{ __typename?: 'MedicalStaff', id: string, userId: string, medicalFacilityId: string, staffName: string, gender: string, numberPhone: string, email: string, permissions: Array<string>, specialtyId?: Array<string> | null }> };

export type GetMedicalStaffByIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetMedicalStaffByIdQuery = { __typename?: 'Query', getMedicalStaffById: { __typename?: 'MedicalStaff', id: string, userId: string, medicalFacilityId: string, staffName: string, gender: string, numberPhone: string, email: string, permissions: Array<string>, specialtyId?: Array<string> | null, specialties?: Array<{ __typename?: 'MedicalSpecialties', id: string, discription: string, medicalFactilityId: string, specialtyName: string, price: number }> | null } };

export type GetMedicalStaffByUserIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetMedicalStaffByUserIdQuery = { __typename?: 'Query', getMedicalStaffByUserId: { __typename?: 'MedicalStaff', id: string, userId: string, medicalFacilityId: string, staffName: string, gender: string, numberPhone: string, email: string, permissions: Array<string>, specialtyId?: Array<string> | null } };

export type GetUserSelectedQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetUserSelectedQuery = { __typename?: 'Query', getUserSelected: { __typename?: 'User', id: string, username: string } };

export type GetMedicalSpecialtiesSelectQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetMedicalSpecialtiesSelectQuery = { __typename?: 'Query', getMedicalSpecialtiesByMedicalFacilityId: Array<{ __typename?: 'MedicalSpecialties', id: string, specialtyName: string }> };

export type GetDoctorbyIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetDoctorbyIdQuery = { __typename?: 'Query', getDoctorbyId: { __typename?: 'Doctor', id: string, userId: string, medicalFactilitiesId: string, doctorName: string, gender: string, numberPhone: string, email: string, academicTitle?: string | null, degree: string, specialistId: string, discription: string, price: number, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, numberSlot: number, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string }> }> }, specialty?: { __typename?: 'MedicalSpecialties', id: string, specialtyName: string } | null } };

export type GetDoctorbyUserIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetDoctorbyUserIdQuery = { __typename?: 'Query', getDoctorbyUserId: { __typename?: 'Doctor', id: string, userId: string, medicalFactilitiesId: string, doctorName: string, gender: string, numberPhone: string, email: string, academicTitle?: string | null, degree: string, specialistId: string, discription: string, price: number, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, numberSlot: number, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string }> }> }, specialty?: { __typename?: 'MedicalSpecialties', id: string, specialtyName: string } | null } };

export type GetAllDoctorPendingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDoctorPendingQuery = { __typename?: 'Query', getAllDoctorPending: Array<{ __typename?: 'Doctor', id: string, doctorName: string, gender: string, academicTitle?: string | null, degree: string, numberPhone: string, email: string, discription: string, price: number, userId: string, medicalFactilitiesId: string, specialistId: string, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', endTime: string, startTime: string }> }> } }> };

export type GetAllDoctorByFacilityIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetAllDoctorByFacilityIdQuery = { __typename?: 'Query', getAllDoctorByFacilityId: Array<{ __typename?: 'Doctor', id: string, doctorName: string, gender: string, academicTitle?: string | null, degree: string, numberPhone: string, email: string, discription: string, price: number, userId: string, medicalFactilitiesId: string, specialistId: string, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', endTime: string, startTime: string }> }> } }> };

export type GetDoctorToUpdateByIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetDoctorToUpdateByIdQuery = { __typename?: 'Query', getDoctorbyId: { __typename?: 'Doctor', id: string, userId: string, medicalFactilitiesId: string, doctorName: string, gender: string, numberPhone: string, email: string, academicTitle?: string | null, degree: string, specialistId: string, discription: string, price: number, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, numberSlot: number, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string, exceptions?: Array<{ __typename?: 'Exception', dates: Array<any>, numbeSlot?: number | null, open: boolean }> | null }> }> } } };

export type GetAllDoctorPaginationQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllDoctorPaginationQuery = { __typename?: 'Query', getAllDoctorPagination: Array<{ __typename?: 'Doctor', id: string, userId: string, medicalFactilitiesId: string, doctorName: string, gender: string, numberPhone: string, email: string, academicTitle?: string | null, degree: string, specialistId: string, discription: string, price: number, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, numberSlot: number, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string }> }> } }> };

export type GetAllDoctorPaginationOfFacilityQueryVariables = Exact<{
  filter?: InputMaybe<FilterDoctorInput>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllDoctorPaginationOfFacilityQuery = { __typename?: 'Query', getAllDoctorPaginationOfFacility: Array<{ __typename?: 'Doctor', id: string, userId: string, medicalFactilitiesId: string, doctorName: string, gender: string, numberPhone: string, email: string, academicTitle?: string | null, degree: string, specialistId: string, discription: string, price: number, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, numberSlot: number, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string }> }> } }> };

export type GetTotalDoctorsCountQueryVariables = Exact<{
  filter?: InputMaybe<FilterDoctorInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTotalDoctorsCountQuery = { __typename?: 'Query', getTotalDoctorsCount: number };

export type GetPackageByIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetPackageByIdQuery = { __typename?: 'Query', getPackageById: { __typename?: 'Package', id: string, medicalFactilitiesId: string, packageName: string, gender: string, price: number, examinationDetails: string, image: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, numberSlot: number, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string, exceptions?: Array<{ __typename?: 'Exception', dates: Array<any>, numbeSlot?: number | null, open: boolean }> | null }> }> } } };

export type GetAllPackageByFacilityIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetAllPackageByFacilityIdQuery = { __typename?: 'Query', getAllPackageByFacilityId: Array<{ __typename?: 'Package', id: string, medicalFactilitiesId: string, packageName: string, gender: string, price: number, examinationDetails: string, image: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, numberSlot: number, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string, exceptions?: Array<{ __typename?: 'Exception', dates: Array<any>, numbeSlot?: number | null, open: boolean }> | null }> }> } }> };

export type GetAllPackagePaginationOfFacilityQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllPackagePaginationOfFacilityQuery = { __typename?: 'Query', getAllPackagePaginationOfFacility: Array<{ __typename?: 'Package', id: string, medicalFactilitiesId: string, packageName: string, gender: string, price: number, examinationDetails: string, image: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, numberSlot: number, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string, exceptions?: Array<{ __typename?: 'Exception', dates: Array<any>, numbeSlot?: number | null, open: boolean }> | null }> }> } }> };

export type GetAllPackagePaginationByStaffQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  staffId: Scalars['String']['input'];
}>;


export type GetAllPackagePaginationByStaffQuery = { __typename?: 'Query', getAllPackagePaginationByStaff: Array<{ __typename?: 'Package', id: string, medicalFactilitiesId: string, packageName: string, gender: string, price: number, examinationDetails: string, image: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, numberSlot: number, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string }> }> } }> };

export type GetTotalPackagesCountQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTotalPackagesCountQuery = { __typename?: 'Query', getTotalPackagesCount: number };

export type GetMedicalSpecialtyByIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetMedicalSpecialtyByIdQuery = { __typename?: 'Query', getMedicalSpecialtyById: { __typename?: 'MedicalSpecialties', id: string, medicalFactilityId: string, specialtyName: string, price: number, discription: string, workSchedule?: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', endTime: string, startTime: string, exceptions?: Array<{ __typename?: 'Exception', dates: Array<any>, numbeSlot?: number | null, open: boolean }> | null }> }> } | null } };

export type GetMedicalSpecialtiesByMedicalFacilityIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetMedicalSpecialtiesByMedicalFacilityIdQuery = { __typename?: 'Query', getMedicalSpecialtiesByMedicalFacilityId: Array<{ __typename?: 'MedicalSpecialties', id: string, medicalFactilityId: string, specialtyName: string, price: number, discription: string, workSchedule?: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', endTime: string, startTime: string }> }> } | null }> };

export type GetAllMedicalSpecialtiesPaginationOfFacilityQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllMedicalSpecialtiesPaginationOfFacilityQuery = { __typename?: 'Query', getAllMedicalSpecialtiesPaginationOfFacility: Array<{ __typename?: 'MedicalSpecialties', id: string, medicalFactilityId: string, specialtyName: string, price: number, discription: string, workSchedule?: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', endTime: string, startTime: string }> }> } | null }> };

export type GetAllMedicalSpecialtiesPaginationByStaffQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  staffId: Scalars['String']['input'];
}>;


export type GetAllMedicalSpecialtiesPaginationByStaffQuery = { __typename?: 'Query', getAllMedicalSpecialtiesPaginationByStaff: Array<{ __typename?: 'MedicalSpecialties', id: string, medicalFactilityId: string, specialtyName: string, price: number, discription: string, workSchedule?: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', endTime: string, startTime: string }> }> } | null }> };

export type GetTotalMedicalSpecialtiesCountQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTotalMedicalSpecialtiesCountQuery = { __typename?: 'Query', getTotalMedicalSpecialtiesCount: number };

export type GetVaccineByIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetVaccineByIdQuery = { __typename?: 'Query', getVaccineById: { __typename?: 'Vaccination', id: string, medicalFactilitiesId: string, vaccineName: string, price: number, countryOfOrigin: string, prophylactic: string, indication: string, note: string, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string, exceptions?: Array<{ __typename?: 'Exception', dates: Array<any>, numbeSlot?: number | null, open: boolean }> | null }> }> } } };

export type GetAllVaccinationByFacilityIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetAllVaccinationByFacilityIdQuery = { __typename?: 'Query', getAllVaccinationByFacilityId: Array<{ __typename?: 'Vaccination', id: string, medicalFactilitiesId: string, vaccineName: string, price: number, countryOfOrigin: string, prophylactic: string, indication: string, note: string, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string }> }> } }> };

export type GetAllVaccinationPaginationOfFacilityQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllVaccinationPaginationOfFacilityQuery = { __typename?: 'Query', getAllVaccinationPaginationOfFacility: Array<{ __typename?: 'Vaccination', id: string, medicalFactilitiesId: string, vaccineName: string, price: number, countryOfOrigin: string, prophylactic: string, indication: string, note: string, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string }> }> } }> };

export type GetAllVaccinationPaginationByStaffQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  staffId: Scalars['String']['input'];
}>;


export type GetAllVaccinationPaginationByStaffQuery = { __typename?: 'Query', getAllVaccinationPaginationByStaff: Array<{ __typename?: 'Vaccination', id: string, medicalFactilitiesId: string, vaccineName: string, price: number, countryOfOrigin: string, prophylactic: string, indication: string, note: string, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string }> }> } }> };

export type GetTotalVaccinationsCountQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTotalVaccinationsCountQuery = { __typename?: 'Query', getTotalVaccinationsCount: number };

export type GetSpecialtySelectQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetSpecialtySelectQuery = { __typename?: 'Query', getMedicalSpecialtySelect: Array<{ __typename?: 'MedicalSpecialties', id: string, specialtyName: string }> };

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
  role?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllUsersPaginationQuery = { __typename?: 'Query', getAllUsersPagination: Array<{ __typename?: 'User', id: string, email: string, username: string, password: string, roles?: Array<string> | null, active?: boolean | null, avatar?: { __typename?: 'LinkImage', filename: string, type: string, url: string } | null }> };

export type GetTotalUsersCountQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTotalUsersCountQuery = { __typename?: 'Query', totalUsersCount: number };

export type GetAllRegisterByOptionQueryVariables = Exact<{
  input: GetRegisterByOptionInput;
}>;


export type GetAllRegisterByOptionQuery = { __typename?: 'Query', getAllRegisterByOption: Array<{ __typename?: 'Register', id: string, date: any, typeOfService: string, cancel: boolean, state: string, packageId?: string | null, profileId: string, specialtyId?: string | null, vaccineId?: string | null, createdAt: any, profile?: { __typename?: 'Profile', id: string, customerId: string, email: string, ethnic: string, fullname: string, address: string, gender: string, job: string, dataOfBirth: any, identity?: string | null, medicalInsurance?: string | null, numberPhone: string, relationship: string, customer?: { __typename?: 'Customer', id: string, customerKey: string, userId: string, fullname: string, gender: string, numberPhone: string, email: string, address: string, dateOfBirth: any, ethnic: string } | null } | null, session: { __typename?: 'Session', startTime: string, endTime: string } }> };

export type GetAllStaffPaginationQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllStaffPaginationQuery = { __typename?: 'Query', getAllStaffPagination: Array<{ __typename?: 'MedicalStaff', id: string, userId: string, medicalFacilityId: string, staffName: string, gender: string, numberPhone: string, email: string, permissions: Array<string>, specialtyId?: Array<string> | null, specialties?: Array<{ __typename?: 'MedicalSpecialties', id: string, specialtyName: string, medicalFactilityId: string, discription: string, price: number }> | null }> };

export type TotalStaffsCountQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  facilityId?: InputMaybe<Scalars['String']['input']>;
}>;


export type TotalStaffsCountQuery = { __typename?: 'Query', totalStaffsCount: number };

export type GetAllMedicalStaffPaginationOfFacilityQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  facilityId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllMedicalStaffPaginationOfFacilityQuery = { __typename?: 'Query', getAllMedicalStaffPaginationOfFacility: Array<{ __typename?: 'MedicalStaff', id: string, userId: string, medicalFacilityId: string, staffName: string, gender: string, numberPhone: string, email: string, permissions: Array<string>, specialtyId?: Array<string> | null, specialties?: Array<{ __typename?: 'MedicalSpecialties', id: string, specialtyName: string, medicalFactilityId: string, discription: string, price: number }> | null }> };

export type GetAllCustomerPaginationQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllCustomerPaginationQuery = { __typename?: 'Query', getAllCustomerPagination: Array<{ __typename?: 'Customer', id: string, userId: string, customerKey: string, fullname: string, gender: string, numberPhone: string, email: string, address: string, dateOfBirth: any, ethnic: string, profiles?: Array<{ __typename?: 'Profile', id: string, fullname: string, address: string, gender: string, dataOfBirth: any, numberPhone: string, email: string, identity?: string | null, medicalInsurance?: string | null, job: string, relationship: string, customerId: string, ethnic: string }> | null }> };

export type GetTotalCustomersCountQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTotalCustomersCountQuery = { __typename?: 'Query', getTotalCustomersCount: number };

export type GetTottalBlogQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetTottalBlogQuery = { __typename?: 'Query', getTotalBlogsCount: number };

export type GetAllBlogPaginationQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetAllBlogPaginationQuery = { __typename?: 'Query', getAllBlogPagination: Array<{ __typename?: 'Blog', id: string, title: string, slug: string, status: string, priority: number, type: string, createdAt: number, deletedAt?: number | null, mainPhoto: { __typename?: 'LinkImage', filename: string, type: string, url: string } }> };

export type GetBlogBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetBlogBySlugQuery = { __typename?: 'Query', getBlogBySlug: { __typename?: 'Blog', id: string, slug: string, title: string, content: string, shortContent: string, priority: number, type: string, keywords: string, status: string, createdAt: number, updatedAt?: number | null, deletedAt?: number | null, mainPhoto: { __typename?: 'LinkImage', filename: string, type: string, url: string }, createdBy: { __typename?: 'UserSlimEntity', username: string, showName: string, role: string }, updatedBy?: { __typename?: 'UserSlimEntity', username: string, showName: string, role: string } | null, deletedBy?: { __typename?: 'UserSlimEntity', role: string, showName: string, username: string } | null } };

export type GetAllBlogOfFacilityPaginationQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  facilityId: Scalars['String']['input'];
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetAllBlogOfFacilityPaginationQuery = { __typename?: 'Query', getAllBlogOfFacilityPagination: Array<{ __typename?: 'Blog', id: string, slug: string, title: string, status: string, priority: number, type: string, createdAt: number, updatedAt?: number | null, deletedAt?: number | null, mainPhoto: { __typename?: 'LinkImage', filename: string, type: string, url: string }, createdBy: { __typename?: 'UserSlimEntity', username: string, showName: string, role: string }, updatedBy?: { __typename?: 'UserSlimEntity', username: string, showName: string, role: string } | null, deletedBy?: { __typename?: 'UserSlimEntity', role: string, showName: string, username: string } | null }> };

export type GetAllDoctorCountOfFacilityQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  startTime: Scalars['String']['input'];
  endTime: Scalars['String']['input'];
  isPending?: InputMaybe<Scalars['Boolean']['input']>;
  isCancel?: InputMaybe<Scalars['Boolean']['input']>;
  missed?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetAllDoctorCountOfFacilityQuery = { __typename?: 'Query', getAllDoctorOfFacility: Array<{ __typename?: 'Doctor', id: string, doctorName: string, registerCount?: number | null }> };

export type GetAllPackageCountOfFacilityQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  startTime: Scalars['String']['input'];
  endTime: Scalars['String']['input'];
  isPending?: InputMaybe<Scalars['Boolean']['input']>;
  isCancel?: InputMaybe<Scalars['Boolean']['input']>;
  missed?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetAllPackageCountOfFacilityQuery = { __typename?: 'Query', getAllPackageOfFacility: Array<{ __typename?: 'Package', id: string, packageName: string, registerCount?: number | null }> };

export type GetAllMedicalSpecialtiesCountOfFacilityQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  startTime: Scalars['String']['input'];
  endTime: Scalars['String']['input'];
  isPending?: InputMaybe<Scalars['Boolean']['input']>;
  isCancel?: InputMaybe<Scalars['Boolean']['input']>;
  missed?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetAllMedicalSpecialtiesCountOfFacilityQuery = { __typename?: 'Query', getAllMedicalSpecialtiesOfFacility: Array<{ __typename?: 'MedicalSpecialties', id: string, specialtyName: string, registerCount?: number | null }> };

export type GetAllVaccinationCountOfFacilityQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  startTime: Scalars['String']['input'];
  endTime: Scalars['String']['input'];
  isPending?: InputMaybe<Scalars['Boolean']['input']>;
  isCancel?: InputMaybe<Scalars['Boolean']['input']>;
  missed?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetAllVaccinationCountOfFacilityQuery = { __typename?: 'Query', getAllVaccinationOfFacility: Array<{ __typename?: 'Vaccination', id: string, vaccineName: string, registerCount?: number | null }> };

export type GetAllRegisPendingQueryVariables = Exact<{
  input: GetRegisPendingInput;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  missed: Scalars['Boolean']['input'];
}>;


export type GetAllRegisPendingQuery = { __typename?: 'Query', getAllRegisPending: Array<{ __typename?: 'Register', id: string, cancel: boolean, createdAt: any, date: any, profileId: string, typeOfService: string, doctorId?: string | null, packageId?: string | null, specialtyId?: string | null, vaccineId?: string | null, state: string, warning?: number | null, warningThisMonth?: number | null, createdBy?: string | null, session: { __typename?: 'Session', startTime: string, endTime: string }, createRegisBy?: { __typename?: 'Customer', id: string, fullname: string, address: string, customerKey: string, numberPhone: string, gender: string, ethnic: string, dateOfBirth: any, userId: string, email: string } | null, profile?: { __typename?: 'Profile', id: string, fullname: string, address: string, email: string, numberPhone: string, gender: string, ethnic: string, identity?: string | null, medicalInsurance?: string | null, job: string, relationship: string, dataOfBirth: any, customerId: string, customer?: { __typename?: 'Customer', id: string, fullname: string, address: string, customerKey: string, numberPhone: string, gender: string, ethnic: string, dateOfBirth: any, userId: string, email: string } | null } | null }> };

export type GetRegisHistoryQueryVariables = Exact<{
  profileId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetRegisHistoryQuery = { __typename?: 'Query', getRegisHistory: Array<{ __typename?: 'Register', id: string, typeOfService: string, cancel: boolean, createdAt: any, date: any, state: string, profileId: string, session: { __typename?: 'Session', startTime: string, endTime: string }, doctor?: { __typename?: 'Doctor', doctorName: string } | null, specialty?: { __typename?: 'MedicalSpecialties', specialtyName: string } | null, vaccination?: { __typename?: 'Vaccination', vaccineName: string } | null, package?: { __typename?: 'Package', packageName: string } | null }> };

export type GetProfileByIdQueryVariables = Exact<{
  profileId: Scalars['String']['input'];
}>;


export type GetProfileByIdQuery = { __typename?: 'Query', getProfileById: { __typename?: 'Profile', id: string, customerId: string, email: string, ethnic: string, fullname: string, address: string, gender: string, job: string, dataOfBirth: any, identity?: string | null, medicalInsurance?: string | null, numberPhone: string, relationship: string, customer?: { __typename?: 'Customer', id: string, customerKey: string, userId: string, fullname: string, gender: string, numberPhone: string, email: string, address: string, dateOfBirth: any, ethnic: string } | null } };

export type GetRegisByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetRegisByIdQuery = { __typename?: 'Query', getRegisById: { __typename?: 'Register', id: string, cancel: boolean, createdAt: any, date: any, profileId: string, note?: string | null, typeOfService: string, doctorId?: string | null, packageId?: string | null, specialtyId?: string | null, vaccineId?: string | null, state: string, session: { __typename?: 'Session', startTime: string, endTime: string }, doctor?: { __typename?: 'Doctor', doctorName: string } | null, specialty?: { __typename?: 'MedicalSpecialties', specialtyName: string } | null, vaccination?: { __typename?: 'Vaccination', vaccineName: string } | null, package?: { __typename?: 'Package', packageName: string } | null, files?: Array<{ __typename?: 'LinkImage', filename: string, type: string, url: string }> | null, profile?: { __typename?: 'Profile', id: string, fullname: string, address: string, email: string, numberPhone: string, gender: string, ethnic: string, identity?: string | null, medicalInsurance?: string | null, job: string, relationship: string, dataOfBirth: any, customerId: string, customer?: { __typename?: 'Customer', id: string, fullname: string, address: string, numberPhone: string, gender: string, ethnic: string, dateOfBirth: any, userId: string, email: string } | null } | null } };

export type GetAllCustomerFromRegisQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  facilityId?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  oderSort?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllCustomerFromRegisQuery = { __typename?: 'Query', getAllCustomerFromRegis: Array<{ __typename?: 'Customer', id: string, userId: string, customerKey: string, fullname: string, gender: string, numberPhone: string, email: string, address: string, dateOfBirth: any, ethnic: string, profiles?: Array<{ __typename?: 'Profile', id: string, fullname: string, address: string, gender: string, dataOfBirth: any, numberPhone: string, email: string, identity?: string | null, medicalInsurance?: string | null, job: string, relationship: string, customerId: string, ethnic: string }> | null }> };

export type GetAllCustomerFromRegisCountQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  facilityId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllCustomerFromRegisCountQuery = { __typename?: 'Query', getAllCustomerFromRegisCount: number };

export type RegisterCreatedSubscriptionVariables = Exact<{
  option: GetRegisterByOptionInput;
}>;


export type RegisterCreatedSubscription = { __typename?: 'Subscription', registerCreated: { __typename?: 'Register', id: string, date: any, typeOfService: string, cancel: boolean, state: string, packageId?: string | null, profileId: string, specialtyId?: string | null, vaccineId?: string | null, createdAt: any, profile?: { __typename?: 'Profile', id: string, customerId: string, email: string, ethnic: string, fullname: string, address: string, gender: string, job: string, dataOfBirth: any, identity?: string | null, medicalInsurance?: string | null, numberPhone: string, relationship: string, customer?: { __typename?: 'Customer', id: string, userId: string, customerKey: string, fullname: string, gender: string, numberPhone: string, email: string, address: string, dateOfBirth: any, ethnic: string } | null } | null, session: { __typename?: 'Session', startTime: string, endTime: string } } };

export type RegisterPendingCreatedSubscriptionVariables = Exact<{
  input: RegisPendingInput;
}>;


export type RegisterPendingCreatedSubscription = { __typename?: 'Subscription', registerPendingCreated: { __typename?: 'Register', id: string, cancel: boolean, createdAt: any, date: any, profileId: string, typeOfService: string, doctorId?: string | null, packageId?: string | null, specialtyId?: string | null, vaccineId?: string | null, state: string, session: { __typename?: 'Session', startTime: string, endTime: string }, profile?: { __typename?: 'Profile', id: string, fullname: string, address: string, email: string, numberPhone: string, gender: string, ethnic: string, identity?: string | null, medicalInsurance?: string | null, job: string, relationship: string, dataOfBirth: any, customerId: string, customer?: { __typename?: 'Customer', id: string, customerKey: string, fullname: string, address: string, numberPhone: string, gender: string, ethnic: string, dateOfBirth: any, userId: string, email: string } | null } | null } };


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
    doctorName
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
    doctorName
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
export const ConfirmRegistersDocument = gql`
    mutation confirmRegisters($input: [ConfirmRegisterInput!]!) {
  confirmRegisters(input: $input) {
    id
    state
    note
  }
}
    `;
export type ConfirmRegistersMutationFn = Apollo.MutationFunction<ConfirmRegistersMutation, ConfirmRegistersMutationVariables>;

/**
 * __useConfirmRegistersMutation__
 *
 * To run a mutation, you first call `useConfirmRegistersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmRegistersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmRegistersMutation, { data, loading, error }] = useConfirmRegistersMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConfirmRegistersMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmRegistersMutation, ConfirmRegistersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmRegistersMutation, ConfirmRegistersMutationVariables>(ConfirmRegistersDocument, options);
      }
export type ConfirmRegistersMutationHookResult = ReturnType<typeof useConfirmRegistersMutation>;
export type ConfirmRegistersMutationResult = Apollo.MutationResult<ConfirmRegistersMutation>;
export type ConfirmRegistersMutationOptions = Apollo.BaseMutationOptions<ConfirmRegistersMutation, ConfirmRegistersMutationVariables>;
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
export const CreateBlogDocument = gql`
    mutation createBlog($input: CreateBlogInput!) {
  createBlog(input: $input) {
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
export type CreateBlogMutationFn = Apollo.MutationFunction<CreateBlogMutation, CreateBlogMutationVariables>;

/**
 * __useCreateBlogMutation__
 *
 * To run a mutation, you first call `useCreateBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBlogMutation, { data, loading, error }] = useCreateBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBlogMutation(baseOptions?: Apollo.MutationHookOptions<CreateBlogMutation, CreateBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBlogMutation, CreateBlogMutationVariables>(CreateBlogDocument, options);
      }
export type CreateBlogMutationHookResult = ReturnType<typeof useCreateBlogMutation>;
export type CreateBlogMutationResult = Apollo.MutationResult<CreateBlogMutation>;
export type CreateBlogMutationOptions = Apollo.BaseMutationOptions<CreateBlogMutation, CreateBlogMutationVariables>;
export const UpdateBlogDocument = gql`
    mutation updateBlog($input: UpdateBlogInput!) {
  updateBlog(input: $input) {
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
export type UpdateBlogMutationFn = Apollo.MutationFunction<UpdateBlogMutation, UpdateBlogMutationVariables>;

/**
 * __useUpdateBlogMutation__
 *
 * To run a mutation, you first call `useUpdateBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBlogMutation, { data, loading, error }] = useUpdateBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBlogMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBlogMutation, UpdateBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBlogMutation, UpdateBlogMutationVariables>(UpdateBlogDocument, options);
      }
export type UpdateBlogMutationHookResult = ReturnType<typeof useUpdateBlogMutation>;
export type UpdateBlogMutationResult = Apollo.MutationResult<UpdateBlogMutation>;
export type UpdateBlogMutationOptions = Apollo.BaseMutationOptions<UpdateBlogMutation, UpdateBlogMutationVariables>;
export const DeleteUnDeleteBlogDocument = gql`
    mutation deleteUnDeleteBlog($id: String!) {
  deleteUnDeleteBlog(id: $id) {
    id
  }
}
    `;
export type DeleteUnDeleteBlogMutationFn = Apollo.MutationFunction<DeleteUnDeleteBlogMutation, DeleteUnDeleteBlogMutationVariables>;

/**
 * __useDeleteUnDeleteBlogMutation__
 *
 * To run a mutation, you first call `useDeleteUnDeleteBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUnDeleteBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUnDeleteBlogMutation, { data, loading, error }] = useDeleteUnDeleteBlogMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUnDeleteBlogMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUnDeleteBlogMutation, DeleteUnDeleteBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUnDeleteBlogMutation, DeleteUnDeleteBlogMutationVariables>(DeleteUnDeleteBlogDocument, options);
      }
export type DeleteUnDeleteBlogMutationHookResult = ReturnType<typeof useDeleteUnDeleteBlogMutation>;
export type DeleteUnDeleteBlogMutationResult = Apollo.MutationResult<DeleteUnDeleteBlogMutation>;
export type DeleteUnDeleteBlogMutationOptions = Apollo.BaseMutationOptions<DeleteUnDeleteBlogMutation, DeleteUnDeleteBlogMutationVariables>;
export const UploadFileRegisterDocument = gql`
    mutation uploadFileRegister($input: UpLoadFileRegisInput!) {
  uploadFileRegister(input: $input) {
    id
  }
}
    `;
export type UploadFileRegisterMutationFn = Apollo.MutationFunction<UploadFileRegisterMutation, UploadFileRegisterMutationVariables>;

/**
 * __useUploadFileRegisterMutation__
 *
 * To run a mutation, you first call `useUploadFileRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFileRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFileRegisterMutation, { data, loading, error }] = useUploadFileRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUploadFileRegisterMutation(baseOptions?: Apollo.MutationHookOptions<UploadFileRegisterMutation, UploadFileRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadFileRegisterMutation, UploadFileRegisterMutationVariables>(UploadFileRegisterDocument, options);
      }
export type UploadFileRegisterMutationHookResult = ReturnType<typeof useUploadFileRegisterMutation>;
export type UploadFileRegisterMutationResult = Apollo.MutationResult<UploadFileRegisterMutation>;
export type UploadFileRegisterMutationOptions = Apollo.BaseMutationOptions<UploadFileRegisterMutation, UploadFileRegisterMutationVariables>;
export const CancelRegisterByAdminDocument = gql`
    mutation cancelRegisterByAdmin($id: String!, $content: String!) {
  cancelRegisterByAdmin(id: $id, content: $content) {
    id
  }
}
    `;
export type CancelRegisterByAdminMutationFn = Apollo.MutationFunction<CancelRegisterByAdminMutation, CancelRegisterByAdminMutationVariables>;

/**
 * __useCancelRegisterByAdminMutation__
 *
 * To run a mutation, you first call `useCancelRegisterByAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelRegisterByAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelRegisterByAdminMutation, { data, loading, error }] = useCancelRegisterByAdminMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useCancelRegisterByAdminMutation(baseOptions?: Apollo.MutationHookOptions<CancelRegisterByAdminMutation, CancelRegisterByAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelRegisterByAdminMutation, CancelRegisterByAdminMutationVariables>(CancelRegisterByAdminDocument, options);
      }
export type CancelRegisterByAdminMutationHookResult = ReturnType<typeof useCancelRegisterByAdminMutation>;
export type CancelRegisterByAdminMutationResult = Apollo.MutationResult<CancelRegisterByAdminMutation>;
export type CancelRegisterByAdminMutationOptions = Apollo.BaseMutationOptions<CancelRegisterByAdminMutation, CancelRegisterByAdminMutationVariables>;
export const SignupAndCreateDoctorDocument = gql`
    mutation signupAndCreateDoctor($input: CreateDoctorAndUserInput!) {
  signupAndCreateDoctor(input: $input) {
    id
  }
}
    `;
export type SignupAndCreateDoctorMutationFn = Apollo.MutationFunction<SignupAndCreateDoctorMutation, SignupAndCreateDoctorMutationVariables>;

/**
 * __useSignupAndCreateDoctorMutation__
 *
 * To run a mutation, you first call `useSignupAndCreateDoctorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupAndCreateDoctorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupAndCreateDoctorMutation, { data, loading, error }] = useSignupAndCreateDoctorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupAndCreateDoctorMutation(baseOptions?: Apollo.MutationHookOptions<SignupAndCreateDoctorMutation, SignupAndCreateDoctorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupAndCreateDoctorMutation, SignupAndCreateDoctorMutationVariables>(SignupAndCreateDoctorDocument, options);
      }
export type SignupAndCreateDoctorMutationHookResult = ReturnType<typeof useSignupAndCreateDoctorMutation>;
export type SignupAndCreateDoctorMutationResult = Apollo.MutationResult<SignupAndCreateDoctorMutation>;
export type SignupAndCreateDoctorMutationOptions = Apollo.BaseMutationOptions<SignupAndCreateDoctorMutation, SignupAndCreateDoctorMutationVariables>;
export const UpdateUserAndDoctorDocument = gql`
    mutation updateUserAndDoctor($input: UpdateUserAndDoctorInput!) {
  updateUserAndDoctor(input: $input) {
    id
  }
}
    `;
export type UpdateUserAndDoctorMutationFn = Apollo.MutationFunction<UpdateUserAndDoctorMutation, UpdateUserAndDoctorMutationVariables>;

/**
 * __useUpdateUserAndDoctorMutation__
 *
 * To run a mutation, you first call `useUpdateUserAndDoctorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserAndDoctorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserAndDoctorMutation, { data, loading, error }] = useUpdateUserAndDoctorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserAndDoctorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserAndDoctorMutation, UpdateUserAndDoctorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserAndDoctorMutation, UpdateUserAndDoctorMutationVariables>(UpdateUserAndDoctorDocument, options);
      }
export type UpdateUserAndDoctorMutationHookResult = ReturnType<typeof useUpdateUserAndDoctorMutation>;
export type UpdateUserAndDoctorMutationResult = Apollo.MutationResult<UpdateUserAndDoctorMutation>;
export type UpdateUserAndDoctorMutationOptions = Apollo.BaseMutationOptions<UpdateUserAndDoctorMutation, UpdateUserAndDoctorMutationVariables>;
export const CreateUserAndStaffDocument = gql`
    mutation createUserAndStaff($input: CreatUserAndStaffInput!) {
  createUserAndStaff(input: $input) {
    id
  }
}
    `;
export type CreateUserAndStaffMutationFn = Apollo.MutationFunction<CreateUserAndStaffMutation, CreateUserAndStaffMutationVariables>;

/**
 * __useCreateUserAndStaffMutation__
 *
 * To run a mutation, you first call `useCreateUserAndStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserAndStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserAndStaffMutation, { data, loading, error }] = useCreateUserAndStaffMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserAndStaffMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserAndStaffMutation, CreateUserAndStaffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserAndStaffMutation, CreateUserAndStaffMutationVariables>(CreateUserAndStaffDocument, options);
      }
export type CreateUserAndStaffMutationHookResult = ReturnType<typeof useCreateUserAndStaffMutation>;
export type CreateUserAndStaffMutationResult = Apollo.MutationResult<CreateUserAndStaffMutation>;
export type CreateUserAndStaffMutationOptions = Apollo.BaseMutationOptions<CreateUserAndStaffMutation, CreateUserAndStaffMutationVariables>;
export const UpdateUserAndStaffDocument = gql`
    mutation updateUserAndStaff($input: UpdateUserAndStaffInput!) {
  updateUserAndStaff(input: $input) {
    id
  }
}
    `;
export type UpdateUserAndStaffMutationFn = Apollo.MutationFunction<UpdateUserAndStaffMutation, UpdateUserAndStaffMutationVariables>;

/**
 * __useUpdateUserAndStaffMutation__
 *
 * To run a mutation, you first call `useUpdateUserAndStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserAndStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserAndStaffMutation, { data, loading, error }] = useUpdateUserAndStaffMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserAndStaffMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserAndStaffMutation, UpdateUserAndStaffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserAndStaffMutation, UpdateUserAndStaffMutationVariables>(UpdateUserAndStaffDocument, options);
      }
export type UpdateUserAndStaffMutationHookResult = ReturnType<typeof useUpdateUserAndStaffMutation>;
export type UpdateUserAndStaffMutationResult = Apollo.MutationResult<UpdateUserAndStaffMutation>;
export type UpdateUserAndStaffMutationOptions = Apollo.BaseMutationOptions<UpdateUserAndStaffMutation, UpdateUserAndStaffMutationVariables>;
export const DeleteUserAndDoctorDocument = gql`
    mutation deleteUserAndDoctor($doctorId: String!, $medicalFactilitiesId: String!) {
  deleteUserAndDoctor(
    doctorId: $doctorId
    medicalFactilitiesId: $medicalFactilitiesId
  ) {
    id
  }
}
    `;
export type DeleteUserAndDoctorMutationFn = Apollo.MutationFunction<DeleteUserAndDoctorMutation, DeleteUserAndDoctorMutationVariables>;

/**
 * __useDeleteUserAndDoctorMutation__
 *
 * To run a mutation, you first call `useDeleteUserAndDoctorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserAndDoctorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserAndDoctorMutation, { data, loading, error }] = useDeleteUserAndDoctorMutation({
 *   variables: {
 *      doctorId: // value for 'doctorId'
 *      medicalFactilitiesId: // value for 'medicalFactilitiesId'
 *   },
 * });
 */
export function useDeleteUserAndDoctorMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserAndDoctorMutation, DeleteUserAndDoctorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserAndDoctorMutation, DeleteUserAndDoctorMutationVariables>(DeleteUserAndDoctorDocument, options);
      }
export type DeleteUserAndDoctorMutationHookResult = ReturnType<typeof useDeleteUserAndDoctorMutation>;
export type DeleteUserAndDoctorMutationResult = Apollo.MutationResult<DeleteUserAndDoctorMutation>;
export type DeleteUserAndDoctorMutationOptions = Apollo.BaseMutationOptions<DeleteUserAndDoctorMutation, DeleteUserAndDoctorMutationVariables>;
export const GenerateExcelDocument = gql`
    mutation generateExcel {
  generateExcel
}
    `;
export type GenerateExcelMutationFn = Apollo.MutationFunction<GenerateExcelMutation, GenerateExcelMutationVariables>;

/**
 * __useGenerateExcelMutation__
 *
 * To run a mutation, you first call `useGenerateExcelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateExcelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateExcelMutation, { data, loading, error }] = useGenerateExcelMutation({
 *   variables: {
 *   },
 * });
 */
export function useGenerateExcelMutation(baseOptions?: Apollo.MutationHookOptions<GenerateExcelMutation, GenerateExcelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateExcelMutation, GenerateExcelMutationVariables>(GenerateExcelDocument, options);
      }
export type GenerateExcelMutationHookResult = ReturnType<typeof useGenerateExcelMutation>;
export type GenerateExcelMutationResult = Apollo.MutationResult<GenerateExcelMutation>;
export type GenerateExcelMutationOptions = Apollo.BaseMutationOptions<GenerateExcelMutation, GenerateExcelMutationVariables>;
export const GenerateExcelRegisByOptionDocument = gql`
    mutation generateExcelRegisByOption($input: GetRegisterByOptionInput!) {
  generateExcelRegisByOption(input: $input)
}
    `;
export type GenerateExcelRegisByOptionMutationFn = Apollo.MutationFunction<GenerateExcelRegisByOptionMutation, GenerateExcelRegisByOptionMutationVariables>;

/**
 * __useGenerateExcelRegisByOptionMutation__
 *
 * To run a mutation, you first call `useGenerateExcelRegisByOptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateExcelRegisByOptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateExcelRegisByOptionMutation, { data, loading, error }] = useGenerateExcelRegisByOptionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGenerateExcelRegisByOptionMutation(baseOptions?: Apollo.MutationHookOptions<GenerateExcelRegisByOptionMutation, GenerateExcelRegisByOptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateExcelRegisByOptionMutation, GenerateExcelRegisByOptionMutationVariables>(GenerateExcelRegisByOptionDocument, options);
      }
export type GenerateExcelRegisByOptionMutationHookResult = ReturnType<typeof useGenerateExcelRegisByOptionMutation>;
export type GenerateExcelRegisByOptionMutationResult = Apollo.MutationResult<GenerateExcelRegisByOptionMutation>;
export type GenerateExcelRegisByOptionMutationOptions = Apollo.BaseMutationOptions<GenerateExcelRegisByOptionMutation, GenerateExcelRegisByOptionMutationVariables>;
export const AddBlockCustomerByProfileIdDocument = gql`
    mutation addBlockCustomerByProfileId($userId: String, $content: String!, $profileId: String, $facilityId: String, $customerId: String, $isBlock: Boolean) {
  addBlockCustomerByProfileId(
    userId: $userId
    content: $content
    profileId: $profileId
    facilityId: $facilityId
    customerId: $customerId
    isBlock: $isBlock
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
    blocks {
      content
      customerId
      seen
    }
  }
}
    `;
export type AddBlockCustomerByProfileIdMutationFn = Apollo.MutationFunction<AddBlockCustomerByProfileIdMutation, AddBlockCustomerByProfileIdMutationVariables>;

/**
 * __useAddBlockCustomerByProfileIdMutation__
 *
 * To run a mutation, you first call `useAddBlockCustomerByProfileIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBlockCustomerByProfileIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBlockCustomerByProfileIdMutation, { data, loading, error }] = useAddBlockCustomerByProfileIdMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      content: // value for 'content'
 *      profileId: // value for 'profileId'
 *      facilityId: // value for 'facilityId'
 *      customerId: // value for 'customerId'
 *      isBlock: // value for 'isBlock'
 *   },
 * });
 */
export function useAddBlockCustomerByProfileIdMutation(baseOptions?: Apollo.MutationHookOptions<AddBlockCustomerByProfileIdMutation, AddBlockCustomerByProfileIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBlockCustomerByProfileIdMutation, AddBlockCustomerByProfileIdMutationVariables>(AddBlockCustomerByProfileIdDocument, options);
      }
export type AddBlockCustomerByProfileIdMutationHookResult = ReturnType<typeof useAddBlockCustomerByProfileIdMutation>;
export type AddBlockCustomerByProfileIdMutationResult = Apollo.MutationResult<AddBlockCustomerByProfileIdMutation>;
export type AddBlockCustomerByProfileIdMutationOptions = Apollo.BaseMutationOptions<AddBlockCustomerByProfileIdMutation, AddBlockCustomerByProfileIdMutationVariables>;
export const CheckLoginQueryDocument = gql`
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
export function useCheckLoginQuerySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CheckLoginQueryQuery, CheckLoginQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CheckLoginQueryQuery, CheckLoginQueryQueryVariables>(CheckLoginQueryDocument, options);
        }
export type CheckLoginQueryQueryHookResult = ReturnType<typeof useCheckLoginQueryQuery>;
export type CheckLoginQueryLazyQueryHookResult = ReturnType<typeof useCheckLoginQueryLazyQuery>;
export type CheckLoginQuerySuspenseQueryHookResult = ReturnType<typeof useCheckLoginQuerySuspenseQuery>;
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
export function useGetSettingSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSettingQuery, GetSettingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSettingQuery, GetSettingQueryVariables>(GetSettingDocument, options);
        }
export type GetSettingQueryHookResult = ReturnType<typeof useGetSettingQuery>;
export type GetSettingLazyQueryHookResult = ReturnType<typeof useGetSettingLazyQuery>;
export type GetSettingSuspenseQueryHookResult = ReturnType<typeof useGetSettingSuspenseQuery>;
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
export function useGetGeneralInforSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetGeneralInforQuery, GetGeneralInforQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGeneralInforQuery, GetGeneralInforQueryVariables>(GetGeneralInforDocument, options);
        }
export type GetGeneralInforQueryHookResult = ReturnType<typeof useGetGeneralInforQuery>;
export type GetGeneralInforLazyQueryHookResult = ReturnType<typeof useGetGeneralInforLazyQuery>;
export type GetGeneralInforSuspenseQueryHookResult = ReturnType<typeof useGetGeneralInforSuspenseQuery>;
export type GetGeneralInforQueryResult = Apollo.QueryResult<GetGeneralInforQuery, GetGeneralInforQueryVariables>;
export const GetAllUserDocument = gql`
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
export function useGetAllUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
        }
export type GetAllUserQueryHookResult = ReturnType<typeof useGetAllUserQuery>;
export type GetAllUserLazyQueryHookResult = ReturnType<typeof useGetAllUserLazyQuery>;
export type GetAllUserSuspenseQueryHookResult = ReturnType<typeof useGetAllUserSuspenseQuery>;
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
export function useGetUserFacilitySelectQuery(baseOptions: Apollo.QueryHookOptions<GetUserFacilitySelectQuery, GetUserFacilitySelectQueryVariables> & ({ variables: GetUserFacilitySelectQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserFacilitySelectQuery, GetUserFacilitySelectQueryVariables>(GetUserFacilitySelectDocument, options);
      }
export function useGetUserFacilitySelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserFacilitySelectQuery, GetUserFacilitySelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserFacilitySelectQuery, GetUserFacilitySelectQueryVariables>(GetUserFacilitySelectDocument, options);
        }
export function useGetUserFacilitySelectSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserFacilitySelectQuery, GetUserFacilitySelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserFacilitySelectQuery, GetUserFacilitySelectQueryVariables>(GetUserFacilitySelectDocument, options);
        }
export type GetUserFacilitySelectQueryHookResult = ReturnType<typeof useGetUserFacilitySelectQuery>;
export type GetUserFacilitySelectLazyQueryHookResult = ReturnType<typeof useGetUserFacilitySelectLazyQuery>;
export type GetUserFacilitySelectSuspenseQueryHookResult = ReturnType<typeof useGetUserFacilitySelectSuspenseQuery>;
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
export function useGetUserDoctorPendingSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserDoctorPendingQuery, GetUserDoctorPendingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserDoctorPendingQuery, GetUserDoctorPendingQueryVariables>(GetUserDoctorPendingDocument, options);
        }
export type GetUserDoctorPendingQueryHookResult = ReturnType<typeof useGetUserDoctorPendingQuery>;
export type GetUserDoctorPendingLazyQueryHookResult = ReturnType<typeof useGetUserDoctorPendingLazyQuery>;
export type GetUserDoctorPendingSuspenseQueryHookResult = ReturnType<typeof useGetUserDoctorPendingSuspenseQuery>;
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
export function useGetUserDoctorPendingUpdateQuery(baseOptions: Apollo.QueryHookOptions<GetUserDoctorPendingUpdateQuery, GetUserDoctorPendingUpdateQueryVariables> & ({ variables: GetUserDoctorPendingUpdateQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserDoctorPendingUpdateQuery, GetUserDoctorPendingUpdateQueryVariables>(GetUserDoctorPendingUpdateDocument, options);
      }
export function useGetUserDoctorPendingUpdateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserDoctorPendingUpdateQuery, GetUserDoctorPendingUpdateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserDoctorPendingUpdateQuery, GetUserDoctorPendingUpdateQueryVariables>(GetUserDoctorPendingUpdateDocument, options);
        }
export function useGetUserDoctorPendingUpdateSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserDoctorPendingUpdateQuery, GetUserDoctorPendingUpdateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserDoctorPendingUpdateQuery, GetUserDoctorPendingUpdateQueryVariables>(GetUserDoctorPendingUpdateDocument, options);
        }
export type GetUserDoctorPendingUpdateQueryHookResult = ReturnType<typeof useGetUserDoctorPendingUpdateQuery>;
export type GetUserDoctorPendingUpdateLazyQueryHookResult = ReturnType<typeof useGetUserDoctorPendingUpdateLazyQuery>;
export type GetUserDoctorPendingUpdateSuspenseQueryHookResult = ReturnType<typeof useGetUserDoctorPendingUpdateSuspenseQuery>;
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
export function useGetAllUserStaffSelectQuery(baseOptions: Apollo.QueryHookOptions<GetAllUserStaffSelectQuery, GetAllUserStaffSelectQueryVariables> & ({ variables: GetAllUserStaffSelectQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUserStaffSelectQuery, GetAllUserStaffSelectQueryVariables>(GetAllUserStaffSelectDocument, options);
      }
export function useGetAllUserStaffSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUserStaffSelectQuery, GetAllUserStaffSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUserStaffSelectQuery, GetAllUserStaffSelectQueryVariables>(GetAllUserStaffSelectDocument, options);
        }
export function useGetAllUserStaffSelectSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllUserStaffSelectQuery, GetAllUserStaffSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUserStaffSelectQuery, GetAllUserStaffSelectQueryVariables>(GetAllUserStaffSelectDocument, options);
        }
export type GetAllUserStaffSelectQueryHookResult = ReturnType<typeof useGetAllUserStaffSelectQuery>;
export type GetAllUserStaffSelectLazyQueryHookResult = ReturnType<typeof useGetAllUserStaffSelectLazyQuery>;
export type GetAllUserStaffSelectSuspenseQueryHookResult = ReturnType<typeof useGetAllUserStaffSelectSuspenseQuery>;
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
export function useGetAllMedicalFacilitySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllMedicalFacilityQuery, GetAllMedicalFacilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllMedicalFacilityQuery, GetAllMedicalFacilityQueryVariables>(GetAllMedicalFacilityDocument, options);
        }
export type GetAllMedicalFacilityQueryHookResult = ReturnType<typeof useGetAllMedicalFacilityQuery>;
export type GetAllMedicalFacilityLazyQueryHookResult = ReturnType<typeof useGetAllMedicalFacilityLazyQuery>;
export type GetAllMedicalFacilitySuspenseQueryHookResult = ReturnType<typeof useGetAllMedicalFacilitySuspenseQuery>;
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
export function useGetAllMedicalFacilitySelectSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllMedicalFacilitySelectQuery, GetAllMedicalFacilitySelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllMedicalFacilitySelectQuery, GetAllMedicalFacilitySelectQueryVariables>(GetAllMedicalFacilitySelectDocument, options);
        }
export type GetAllMedicalFacilitySelectQueryHookResult = ReturnType<typeof useGetAllMedicalFacilitySelectQuery>;
export type GetAllMedicalFacilitySelectLazyQueryHookResult = ReturnType<typeof useGetAllMedicalFacilitySelectLazyQuery>;
export type GetAllMedicalFacilitySelectSuspenseQueryHookResult = ReturnType<typeof useGetAllMedicalFacilitySelectSuspenseQuery>;
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
export function useGetMedicalFacilityByIdQuery(baseOptions: Apollo.QueryHookOptions<GetMedicalFacilityByIdQuery, GetMedicalFacilityByIdQueryVariables> & ({ variables: GetMedicalFacilityByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMedicalFacilityByIdQuery, GetMedicalFacilityByIdQueryVariables>(GetMedicalFacilityByIdDocument, options);
      }
export function useGetMedicalFacilityByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMedicalFacilityByIdQuery, GetMedicalFacilityByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMedicalFacilityByIdQuery, GetMedicalFacilityByIdQueryVariables>(GetMedicalFacilityByIdDocument, options);
        }
export function useGetMedicalFacilityByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMedicalFacilityByIdQuery, GetMedicalFacilityByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMedicalFacilityByIdQuery, GetMedicalFacilityByIdQueryVariables>(GetMedicalFacilityByIdDocument, options);
        }
export type GetMedicalFacilityByIdQueryHookResult = ReturnType<typeof useGetMedicalFacilityByIdQuery>;
export type GetMedicalFacilityByIdLazyQueryHookResult = ReturnType<typeof useGetMedicalFacilityByIdLazyQuery>;
export type GetMedicalFacilityByIdSuspenseQueryHookResult = ReturnType<typeof useGetMedicalFacilityByIdSuspenseQuery>;
export type GetMedicalFacilityByIdQueryResult = Apollo.QueryResult<GetMedicalFacilityByIdQuery, GetMedicalFacilityByIdQueryVariables>;
export const GetMedicalFacilityInfoDocument = gql`
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
    blocks {
      content
      customerId
      seen
    }
  }
}
    `;

/**
 * __useGetMedicalFacilityInfoQuery__
 *
 * To run a query within a React component, call `useGetMedicalFacilityInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMedicalFacilityInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMedicalFacilityInfoQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      staffId: // value for 'staffId'
 *   },
 * });
 */
export function useGetMedicalFacilityInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetMedicalFacilityInfoQuery, GetMedicalFacilityInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMedicalFacilityInfoQuery, GetMedicalFacilityInfoQueryVariables>(GetMedicalFacilityInfoDocument, options);
      }
export function useGetMedicalFacilityInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMedicalFacilityInfoQuery, GetMedicalFacilityInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMedicalFacilityInfoQuery, GetMedicalFacilityInfoQueryVariables>(GetMedicalFacilityInfoDocument, options);
        }
export function useGetMedicalFacilityInfoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMedicalFacilityInfoQuery, GetMedicalFacilityInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMedicalFacilityInfoQuery, GetMedicalFacilityInfoQueryVariables>(GetMedicalFacilityInfoDocument, options);
        }
export type GetMedicalFacilityInfoQueryHookResult = ReturnType<typeof useGetMedicalFacilityInfoQuery>;
export type GetMedicalFacilityInfoLazyQueryHookResult = ReturnType<typeof useGetMedicalFacilityInfoLazyQuery>;
export type GetMedicalFacilityInfoSuspenseQueryHookResult = ReturnType<typeof useGetMedicalFacilityInfoSuspenseQuery>;
export type GetMedicalFacilityInfoQueryResult = Apollo.QueryResult<GetMedicalFacilityInfoQuery, GetMedicalFacilityInfoQueryVariables>;
export const GetGeneralMedicalFacilityInfoDocument = gql`
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

/**
 * __useGetGeneralMedicalFacilityInfoQuery__
 *
 * To run a query within a React component, call `useGetGeneralMedicalFacilityInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGeneralMedicalFacilityInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGeneralMedicalFacilityInfoQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      staffId: // value for 'staffId'
 *   },
 * });
 */
export function useGetGeneralMedicalFacilityInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetGeneralMedicalFacilityInfoQuery, GetGeneralMedicalFacilityInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGeneralMedicalFacilityInfoQuery, GetGeneralMedicalFacilityInfoQueryVariables>(GetGeneralMedicalFacilityInfoDocument, options);
      }
export function useGetGeneralMedicalFacilityInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGeneralMedicalFacilityInfoQuery, GetGeneralMedicalFacilityInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGeneralMedicalFacilityInfoQuery, GetGeneralMedicalFacilityInfoQueryVariables>(GetGeneralMedicalFacilityInfoDocument, options);
        }
export function useGetGeneralMedicalFacilityInfoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetGeneralMedicalFacilityInfoQuery, GetGeneralMedicalFacilityInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGeneralMedicalFacilityInfoQuery, GetGeneralMedicalFacilityInfoQueryVariables>(GetGeneralMedicalFacilityInfoDocument, options);
        }
export type GetGeneralMedicalFacilityInfoQueryHookResult = ReturnType<typeof useGetGeneralMedicalFacilityInfoQuery>;
export type GetGeneralMedicalFacilityInfoLazyQueryHookResult = ReturnType<typeof useGetGeneralMedicalFacilityInfoLazyQuery>;
export type GetGeneralMedicalFacilityInfoSuspenseQueryHookResult = ReturnType<typeof useGetGeneralMedicalFacilityInfoSuspenseQuery>;
export type GetGeneralMedicalFacilityInfoQueryResult = Apollo.QueryResult<GetGeneralMedicalFacilityInfoQuery, GetGeneralMedicalFacilityInfoQueryVariables>;
export const GetMedicalFacilityIdByUserIdDocument = gql`
    query getMedicalFacilityIdByUserId($userId: String!) {
  getMedicalFacilityInfo(userId: $userId) {
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
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetMedicalFacilityIdByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetMedicalFacilityIdByUserIdQuery, GetMedicalFacilityIdByUserIdQueryVariables> & ({ variables: GetMedicalFacilityIdByUserIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMedicalFacilityIdByUserIdQuery, GetMedicalFacilityIdByUserIdQueryVariables>(GetMedicalFacilityIdByUserIdDocument, options);
      }
export function useGetMedicalFacilityIdByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMedicalFacilityIdByUserIdQuery, GetMedicalFacilityIdByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMedicalFacilityIdByUserIdQuery, GetMedicalFacilityIdByUserIdQueryVariables>(GetMedicalFacilityIdByUserIdDocument, options);
        }
export function useGetMedicalFacilityIdByUserIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMedicalFacilityIdByUserIdQuery, GetMedicalFacilityIdByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMedicalFacilityIdByUserIdQuery, GetMedicalFacilityIdByUserIdQueryVariables>(GetMedicalFacilityIdByUserIdDocument, options);
        }
export type GetMedicalFacilityIdByUserIdQueryHookResult = ReturnType<typeof useGetMedicalFacilityIdByUserIdQuery>;
export type GetMedicalFacilityIdByUserIdLazyQueryHookResult = ReturnType<typeof useGetMedicalFacilityIdByUserIdLazyQuery>;
export type GetMedicalFacilityIdByUserIdSuspenseQueryHookResult = ReturnType<typeof useGetMedicalFacilityIdByUserIdSuspenseQuery>;
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
export function useGetAllMedicalFacilityPaginationQuery(baseOptions: Apollo.QueryHookOptions<GetAllMedicalFacilityPaginationQuery, GetAllMedicalFacilityPaginationQueryVariables> & ({ variables: GetAllMedicalFacilityPaginationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMedicalFacilityPaginationQuery, GetAllMedicalFacilityPaginationQueryVariables>(GetAllMedicalFacilityPaginationDocument, options);
      }
export function useGetAllMedicalFacilityPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMedicalFacilityPaginationQuery, GetAllMedicalFacilityPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMedicalFacilityPaginationQuery, GetAllMedicalFacilityPaginationQueryVariables>(GetAllMedicalFacilityPaginationDocument, options);
        }
export function useGetAllMedicalFacilityPaginationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllMedicalFacilityPaginationQuery, GetAllMedicalFacilityPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllMedicalFacilityPaginationQuery, GetAllMedicalFacilityPaginationQueryVariables>(GetAllMedicalFacilityPaginationDocument, options);
        }
export type GetAllMedicalFacilityPaginationQueryHookResult = ReturnType<typeof useGetAllMedicalFacilityPaginationQuery>;
export type GetAllMedicalFacilityPaginationLazyQueryHookResult = ReturnType<typeof useGetAllMedicalFacilityPaginationLazyQuery>;
export type GetAllMedicalFacilityPaginationSuspenseQueryHookResult = ReturnType<typeof useGetAllMedicalFacilityPaginationSuspenseQuery>;
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
export function useGetTotalFacilitiesCountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalFacilitiesCountQuery, GetTotalFacilitiesCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalFacilitiesCountQuery, GetTotalFacilitiesCountQueryVariables>(GetTotalFacilitiesCountDocument, options);
        }
export type GetTotalFacilitiesCountQueryHookResult = ReturnType<typeof useGetTotalFacilitiesCountQuery>;
export type GetTotalFacilitiesCountLazyQueryHookResult = ReturnType<typeof useGetTotalFacilitiesCountLazyQuery>;
export type GetTotalFacilitiesCountSuspenseQueryHookResult = ReturnType<typeof useGetTotalFacilitiesCountSuspenseQuery>;
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
export function useGetMedicalFacilityNameByIdQuery(baseOptions: Apollo.QueryHookOptions<GetMedicalFacilityNameByIdQuery, GetMedicalFacilityNameByIdQueryVariables> & ({ variables: GetMedicalFacilityNameByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMedicalFacilityNameByIdQuery, GetMedicalFacilityNameByIdQueryVariables>(GetMedicalFacilityNameByIdDocument, options);
      }
export function useGetMedicalFacilityNameByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMedicalFacilityNameByIdQuery, GetMedicalFacilityNameByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMedicalFacilityNameByIdQuery, GetMedicalFacilityNameByIdQueryVariables>(GetMedicalFacilityNameByIdDocument, options);
        }
export function useGetMedicalFacilityNameByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMedicalFacilityNameByIdQuery, GetMedicalFacilityNameByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMedicalFacilityNameByIdQuery, GetMedicalFacilityNameByIdQueryVariables>(GetMedicalFacilityNameByIdDocument, options);
        }
export type GetMedicalFacilityNameByIdQueryHookResult = ReturnType<typeof useGetMedicalFacilityNameByIdQuery>;
export type GetMedicalFacilityNameByIdLazyQueryHookResult = ReturnType<typeof useGetMedicalFacilityNameByIdLazyQuery>;
export type GetMedicalFacilityNameByIdSuspenseQueryHookResult = ReturnType<typeof useGetMedicalFacilityNameByIdSuspenseQuery>;
export type GetMedicalFacilityNameByIdQueryResult = Apollo.QueryResult<GetMedicalFacilityNameByIdQuery, GetMedicalFacilityNameByIdQueryVariables>;
export const GetMedicalStaffByFacilityIdDocument = gql`
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
export function useGetMedicalStaffByFacilityIdQuery(baseOptions: Apollo.QueryHookOptions<GetMedicalStaffByFacilityIdQuery, GetMedicalStaffByFacilityIdQueryVariables> & ({ variables: GetMedicalStaffByFacilityIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMedicalStaffByFacilityIdQuery, GetMedicalStaffByFacilityIdQueryVariables>(GetMedicalStaffByFacilityIdDocument, options);
      }
export function useGetMedicalStaffByFacilityIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMedicalStaffByFacilityIdQuery, GetMedicalStaffByFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMedicalStaffByFacilityIdQuery, GetMedicalStaffByFacilityIdQueryVariables>(GetMedicalStaffByFacilityIdDocument, options);
        }
export function useGetMedicalStaffByFacilityIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMedicalStaffByFacilityIdQuery, GetMedicalStaffByFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMedicalStaffByFacilityIdQuery, GetMedicalStaffByFacilityIdQueryVariables>(GetMedicalStaffByFacilityIdDocument, options);
        }
export type GetMedicalStaffByFacilityIdQueryHookResult = ReturnType<typeof useGetMedicalStaffByFacilityIdQuery>;
export type GetMedicalStaffByFacilityIdLazyQueryHookResult = ReturnType<typeof useGetMedicalStaffByFacilityIdLazyQuery>;
export type GetMedicalStaffByFacilityIdSuspenseQueryHookResult = ReturnType<typeof useGetMedicalStaffByFacilityIdSuspenseQuery>;
export type GetMedicalStaffByFacilityIdQueryResult = Apollo.QueryResult<GetMedicalStaffByFacilityIdQuery, GetMedicalStaffByFacilityIdQueryVariables>;
export const GetMedicalStaffByIdDocument = gql`
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
export function useGetMedicalStaffByIdQuery(baseOptions: Apollo.QueryHookOptions<GetMedicalStaffByIdQuery, GetMedicalStaffByIdQueryVariables> & ({ variables: GetMedicalStaffByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMedicalStaffByIdQuery, GetMedicalStaffByIdQueryVariables>(GetMedicalStaffByIdDocument, options);
      }
export function useGetMedicalStaffByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMedicalStaffByIdQuery, GetMedicalStaffByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMedicalStaffByIdQuery, GetMedicalStaffByIdQueryVariables>(GetMedicalStaffByIdDocument, options);
        }
export function useGetMedicalStaffByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMedicalStaffByIdQuery, GetMedicalStaffByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMedicalStaffByIdQuery, GetMedicalStaffByIdQueryVariables>(GetMedicalStaffByIdDocument, options);
        }
export type GetMedicalStaffByIdQueryHookResult = ReturnType<typeof useGetMedicalStaffByIdQuery>;
export type GetMedicalStaffByIdLazyQueryHookResult = ReturnType<typeof useGetMedicalStaffByIdLazyQuery>;
export type GetMedicalStaffByIdSuspenseQueryHookResult = ReturnType<typeof useGetMedicalStaffByIdSuspenseQuery>;
export type GetMedicalStaffByIdQueryResult = Apollo.QueryResult<GetMedicalStaffByIdQuery, GetMedicalStaffByIdQueryVariables>;
export const GetMedicalStaffByUserIdDocument = gql`
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

/**
 * __useGetMedicalStaffByUserIdQuery__
 *
 * To run a query within a React component, call `useGetMedicalStaffByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMedicalStaffByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMedicalStaffByUserIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMedicalStaffByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetMedicalStaffByUserIdQuery, GetMedicalStaffByUserIdQueryVariables> & ({ variables: GetMedicalStaffByUserIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMedicalStaffByUserIdQuery, GetMedicalStaffByUserIdQueryVariables>(GetMedicalStaffByUserIdDocument, options);
      }
export function useGetMedicalStaffByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMedicalStaffByUserIdQuery, GetMedicalStaffByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMedicalStaffByUserIdQuery, GetMedicalStaffByUserIdQueryVariables>(GetMedicalStaffByUserIdDocument, options);
        }
export function useGetMedicalStaffByUserIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMedicalStaffByUserIdQuery, GetMedicalStaffByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMedicalStaffByUserIdQuery, GetMedicalStaffByUserIdQueryVariables>(GetMedicalStaffByUserIdDocument, options);
        }
export type GetMedicalStaffByUserIdQueryHookResult = ReturnType<typeof useGetMedicalStaffByUserIdQuery>;
export type GetMedicalStaffByUserIdLazyQueryHookResult = ReturnType<typeof useGetMedicalStaffByUserIdLazyQuery>;
export type GetMedicalStaffByUserIdSuspenseQueryHookResult = ReturnType<typeof useGetMedicalStaffByUserIdSuspenseQuery>;
export type GetMedicalStaffByUserIdQueryResult = Apollo.QueryResult<GetMedicalStaffByUserIdQuery, GetMedicalStaffByUserIdQueryVariables>;
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
export function useGetUserSelectedQuery(baseOptions: Apollo.QueryHookOptions<GetUserSelectedQuery, GetUserSelectedQueryVariables> & ({ variables: GetUserSelectedQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserSelectedQuery, GetUserSelectedQueryVariables>(GetUserSelectedDocument, options);
      }
export function useGetUserSelectedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserSelectedQuery, GetUserSelectedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserSelectedQuery, GetUserSelectedQueryVariables>(GetUserSelectedDocument, options);
        }
export function useGetUserSelectedSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserSelectedQuery, GetUserSelectedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserSelectedQuery, GetUserSelectedQueryVariables>(GetUserSelectedDocument, options);
        }
export type GetUserSelectedQueryHookResult = ReturnType<typeof useGetUserSelectedQuery>;
export type GetUserSelectedLazyQueryHookResult = ReturnType<typeof useGetUserSelectedLazyQuery>;
export type GetUserSelectedSuspenseQueryHookResult = ReturnType<typeof useGetUserSelectedSuspenseQuery>;
export type GetUserSelectedQueryResult = Apollo.QueryResult<GetUserSelectedQuery, GetUserSelectedQueryVariables>;
export const GetMedicalSpecialtiesSelectDocument = gql`
    query getMedicalSpecialtiesSelect($input: String!) {
  getMedicalSpecialtiesByMedicalFacilityId(input: $input) {
    id
    specialtyName
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
export function useGetMedicalSpecialtiesSelectQuery(baseOptions: Apollo.QueryHookOptions<GetMedicalSpecialtiesSelectQuery, GetMedicalSpecialtiesSelectQueryVariables> & ({ variables: GetMedicalSpecialtiesSelectQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMedicalSpecialtiesSelectQuery, GetMedicalSpecialtiesSelectQueryVariables>(GetMedicalSpecialtiesSelectDocument, options);
      }
export function useGetMedicalSpecialtiesSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMedicalSpecialtiesSelectQuery, GetMedicalSpecialtiesSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMedicalSpecialtiesSelectQuery, GetMedicalSpecialtiesSelectQueryVariables>(GetMedicalSpecialtiesSelectDocument, options);
        }
export function useGetMedicalSpecialtiesSelectSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMedicalSpecialtiesSelectQuery, GetMedicalSpecialtiesSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMedicalSpecialtiesSelectQuery, GetMedicalSpecialtiesSelectQueryVariables>(GetMedicalSpecialtiesSelectDocument, options);
        }
export type GetMedicalSpecialtiesSelectQueryHookResult = ReturnType<typeof useGetMedicalSpecialtiesSelectQuery>;
export type GetMedicalSpecialtiesSelectLazyQueryHookResult = ReturnType<typeof useGetMedicalSpecialtiesSelectLazyQuery>;
export type GetMedicalSpecialtiesSelectSuspenseQueryHookResult = ReturnType<typeof useGetMedicalSpecialtiesSelectSuspenseQuery>;
export type GetMedicalSpecialtiesSelectQueryResult = Apollo.QueryResult<GetMedicalSpecialtiesSelectQuery, GetMedicalSpecialtiesSelectQueryVariables>;
export const GetDoctorbyIdDocument = gql`
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
export function useGetDoctorbyIdQuery(baseOptions: Apollo.QueryHookOptions<GetDoctorbyIdQuery, GetDoctorbyIdQueryVariables> & ({ variables: GetDoctorbyIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDoctorbyIdQuery, GetDoctorbyIdQueryVariables>(GetDoctorbyIdDocument, options);
      }
export function useGetDoctorbyIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDoctorbyIdQuery, GetDoctorbyIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDoctorbyIdQuery, GetDoctorbyIdQueryVariables>(GetDoctorbyIdDocument, options);
        }
export function useGetDoctorbyIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetDoctorbyIdQuery, GetDoctorbyIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetDoctorbyIdQuery, GetDoctorbyIdQueryVariables>(GetDoctorbyIdDocument, options);
        }
export type GetDoctorbyIdQueryHookResult = ReturnType<typeof useGetDoctorbyIdQuery>;
export type GetDoctorbyIdLazyQueryHookResult = ReturnType<typeof useGetDoctorbyIdLazyQuery>;
export type GetDoctorbyIdSuspenseQueryHookResult = ReturnType<typeof useGetDoctorbyIdSuspenseQuery>;
export type GetDoctorbyIdQueryResult = Apollo.QueryResult<GetDoctorbyIdQuery, GetDoctorbyIdQueryVariables>;
export const GetDoctorbyUserIdDocument = gql`
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

/**
 * __useGetDoctorbyUserIdQuery__
 *
 * To run a query within a React component, call `useGetDoctorbyUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDoctorbyUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDoctorbyUserIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetDoctorbyUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetDoctorbyUserIdQuery, GetDoctorbyUserIdQueryVariables> & ({ variables: GetDoctorbyUserIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDoctorbyUserIdQuery, GetDoctorbyUserIdQueryVariables>(GetDoctorbyUserIdDocument, options);
      }
export function useGetDoctorbyUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDoctorbyUserIdQuery, GetDoctorbyUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDoctorbyUserIdQuery, GetDoctorbyUserIdQueryVariables>(GetDoctorbyUserIdDocument, options);
        }
export function useGetDoctorbyUserIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetDoctorbyUserIdQuery, GetDoctorbyUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetDoctorbyUserIdQuery, GetDoctorbyUserIdQueryVariables>(GetDoctorbyUserIdDocument, options);
        }
export type GetDoctorbyUserIdQueryHookResult = ReturnType<typeof useGetDoctorbyUserIdQuery>;
export type GetDoctorbyUserIdLazyQueryHookResult = ReturnType<typeof useGetDoctorbyUserIdLazyQuery>;
export type GetDoctorbyUserIdSuspenseQueryHookResult = ReturnType<typeof useGetDoctorbyUserIdSuspenseQuery>;
export type GetDoctorbyUserIdQueryResult = Apollo.QueryResult<GetDoctorbyUserIdQuery, GetDoctorbyUserIdQueryVariables>;
export const GetAllDoctorPendingDocument = gql`
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
export function useGetAllDoctorPendingSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllDoctorPendingQuery, GetAllDoctorPendingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllDoctorPendingQuery, GetAllDoctorPendingQueryVariables>(GetAllDoctorPendingDocument, options);
        }
export type GetAllDoctorPendingQueryHookResult = ReturnType<typeof useGetAllDoctorPendingQuery>;
export type GetAllDoctorPendingLazyQueryHookResult = ReturnType<typeof useGetAllDoctorPendingLazyQuery>;
export type GetAllDoctorPendingSuspenseQueryHookResult = ReturnType<typeof useGetAllDoctorPendingSuspenseQuery>;
export type GetAllDoctorPendingQueryResult = Apollo.QueryResult<GetAllDoctorPendingQuery, GetAllDoctorPendingQueryVariables>;
export const GetAllDoctorByFacilityIdDocument = gql`
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
export function useGetAllDoctorByFacilityIdQuery(baseOptions: Apollo.QueryHookOptions<GetAllDoctorByFacilityIdQuery, GetAllDoctorByFacilityIdQueryVariables> & ({ variables: GetAllDoctorByFacilityIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDoctorByFacilityIdQuery, GetAllDoctorByFacilityIdQueryVariables>(GetAllDoctorByFacilityIdDocument, options);
      }
export function useGetAllDoctorByFacilityIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDoctorByFacilityIdQuery, GetAllDoctorByFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDoctorByFacilityIdQuery, GetAllDoctorByFacilityIdQueryVariables>(GetAllDoctorByFacilityIdDocument, options);
        }
export function useGetAllDoctorByFacilityIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllDoctorByFacilityIdQuery, GetAllDoctorByFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllDoctorByFacilityIdQuery, GetAllDoctorByFacilityIdQueryVariables>(GetAllDoctorByFacilityIdDocument, options);
        }
export type GetAllDoctorByFacilityIdQueryHookResult = ReturnType<typeof useGetAllDoctorByFacilityIdQuery>;
export type GetAllDoctorByFacilityIdLazyQueryHookResult = ReturnType<typeof useGetAllDoctorByFacilityIdLazyQuery>;
export type GetAllDoctorByFacilityIdSuspenseQueryHookResult = ReturnType<typeof useGetAllDoctorByFacilityIdSuspenseQuery>;
export type GetAllDoctorByFacilityIdQueryResult = Apollo.QueryResult<GetAllDoctorByFacilityIdQuery, GetAllDoctorByFacilityIdQueryVariables>;
export const GetDoctorToUpdateByIdDocument = gql`
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
          exceptions {
            dates
            numbeSlot
            open
          }
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
export function useGetDoctorToUpdateByIdQuery(baseOptions: Apollo.QueryHookOptions<GetDoctorToUpdateByIdQuery, GetDoctorToUpdateByIdQueryVariables> & ({ variables: GetDoctorToUpdateByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDoctorToUpdateByIdQuery, GetDoctorToUpdateByIdQueryVariables>(GetDoctorToUpdateByIdDocument, options);
      }
export function useGetDoctorToUpdateByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDoctorToUpdateByIdQuery, GetDoctorToUpdateByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDoctorToUpdateByIdQuery, GetDoctorToUpdateByIdQueryVariables>(GetDoctorToUpdateByIdDocument, options);
        }
export function useGetDoctorToUpdateByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetDoctorToUpdateByIdQuery, GetDoctorToUpdateByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetDoctorToUpdateByIdQuery, GetDoctorToUpdateByIdQueryVariables>(GetDoctorToUpdateByIdDocument, options);
        }
export type GetDoctorToUpdateByIdQueryHookResult = ReturnType<typeof useGetDoctorToUpdateByIdQuery>;
export type GetDoctorToUpdateByIdLazyQueryHookResult = ReturnType<typeof useGetDoctorToUpdateByIdLazyQuery>;
export type GetDoctorToUpdateByIdSuspenseQueryHookResult = ReturnType<typeof useGetDoctorToUpdateByIdSuspenseQuery>;
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
export function useGetAllDoctorPaginationQuery(baseOptions: Apollo.QueryHookOptions<GetAllDoctorPaginationQuery, GetAllDoctorPaginationQueryVariables> & ({ variables: GetAllDoctorPaginationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDoctorPaginationQuery, GetAllDoctorPaginationQueryVariables>(GetAllDoctorPaginationDocument, options);
      }
export function useGetAllDoctorPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDoctorPaginationQuery, GetAllDoctorPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDoctorPaginationQuery, GetAllDoctorPaginationQueryVariables>(GetAllDoctorPaginationDocument, options);
        }
export function useGetAllDoctorPaginationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllDoctorPaginationQuery, GetAllDoctorPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllDoctorPaginationQuery, GetAllDoctorPaginationQueryVariables>(GetAllDoctorPaginationDocument, options);
        }
export type GetAllDoctorPaginationQueryHookResult = ReturnType<typeof useGetAllDoctorPaginationQuery>;
export type GetAllDoctorPaginationLazyQueryHookResult = ReturnType<typeof useGetAllDoctorPaginationLazyQuery>;
export type GetAllDoctorPaginationSuspenseQueryHookResult = ReturnType<typeof useGetAllDoctorPaginationSuspenseQuery>;
export type GetAllDoctorPaginationQueryResult = Apollo.QueryResult<GetAllDoctorPaginationQuery, GetAllDoctorPaginationQueryVariables>;
export const GetAllDoctorPaginationOfFacilityDocument = gql`
    query getAllDoctorPaginationOfFacility($filter: FilterDoctorInput, $page: Float!, $limit: Float!, $sortField: String, $sortOrder: String, $userId: String, $staffId: String) {
  getAllDoctorPaginationOfFacility(
    page: $page
    limit: $limit
    sortField: $sortField
    sortOrder: $sortOrder
    userId: $userId
    staffId: $staffId
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
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *      userId: // value for 'userId'
 *      staffId: // value for 'staffId'
 *   },
 * });
 */
export function useGetAllDoctorPaginationOfFacilityQuery(baseOptions: Apollo.QueryHookOptions<GetAllDoctorPaginationOfFacilityQuery, GetAllDoctorPaginationOfFacilityQueryVariables> & ({ variables: GetAllDoctorPaginationOfFacilityQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDoctorPaginationOfFacilityQuery, GetAllDoctorPaginationOfFacilityQueryVariables>(GetAllDoctorPaginationOfFacilityDocument, options);
      }
export function useGetAllDoctorPaginationOfFacilityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDoctorPaginationOfFacilityQuery, GetAllDoctorPaginationOfFacilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDoctorPaginationOfFacilityQuery, GetAllDoctorPaginationOfFacilityQueryVariables>(GetAllDoctorPaginationOfFacilityDocument, options);
        }
export function useGetAllDoctorPaginationOfFacilitySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllDoctorPaginationOfFacilityQuery, GetAllDoctorPaginationOfFacilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllDoctorPaginationOfFacilityQuery, GetAllDoctorPaginationOfFacilityQueryVariables>(GetAllDoctorPaginationOfFacilityDocument, options);
        }
export type GetAllDoctorPaginationOfFacilityQueryHookResult = ReturnType<typeof useGetAllDoctorPaginationOfFacilityQuery>;
export type GetAllDoctorPaginationOfFacilityLazyQueryHookResult = ReturnType<typeof useGetAllDoctorPaginationOfFacilityLazyQuery>;
export type GetAllDoctorPaginationOfFacilitySuspenseQueryHookResult = ReturnType<typeof useGetAllDoctorPaginationOfFacilitySuspenseQuery>;
export type GetAllDoctorPaginationOfFacilityQueryResult = Apollo.QueryResult<GetAllDoctorPaginationOfFacilityQuery, GetAllDoctorPaginationOfFacilityQueryVariables>;
export const GetTotalDoctorsCountDocument = gql`
    query getTotalDoctorsCount($filter: FilterDoctorInput, $userId: String, $staffId: String) {
  getTotalDoctorsCount(filter: $filter, userId: $userId, staffId: $staffId)
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
 *      filter: // value for 'filter'
 *      userId: // value for 'userId'
 *      staffId: // value for 'staffId'
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
export function useGetTotalDoctorsCountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalDoctorsCountQuery, GetTotalDoctorsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalDoctorsCountQuery, GetTotalDoctorsCountQueryVariables>(GetTotalDoctorsCountDocument, options);
        }
export type GetTotalDoctorsCountQueryHookResult = ReturnType<typeof useGetTotalDoctorsCountQuery>;
export type GetTotalDoctorsCountLazyQueryHookResult = ReturnType<typeof useGetTotalDoctorsCountLazyQuery>;
export type GetTotalDoctorsCountSuspenseQueryHookResult = ReturnType<typeof useGetTotalDoctorsCountSuspenseQuery>;
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
          exceptions {
            dates
            numbeSlot
            open
          }
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
export function useGetPackageByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPackageByIdQuery, GetPackageByIdQueryVariables> & ({ variables: GetPackageByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPackageByIdQuery, GetPackageByIdQueryVariables>(GetPackageByIdDocument, options);
      }
export function useGetPackageByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPackageByIdQuery, GetPackageByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPackageByIdQuery, GetPackageByIdQueryVariables>(GetPackageByIdDocument, options);
        }
export function useGetPackageByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPackageByIdQuery, GetPackageByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPackageByIdQuery, GetPackageByIdQueryVariables>(GetPackageByIdDocument, options);
        }
export type GetPackageByIdQueryHookResult = ReturnType<typeof useGetPackageByIdQuery>;
export type GetPackageByIdLazyQueryHookResult = ReturnType<typeof useGetPackageByIdLazyQuery>;
export type GetPackageByIdSuspenseQueryHookResult = ReturnType<typeof useGetPackageByIdSuspenseQuery>;
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
          exceptions {
            dates
            numbeSlot
            open
          }
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
export function useGetAllPackageByFacilityIdQuery(baseOptions: Apollo.QueryHookOptions<GetAllPackageByFacilityIdQuery, GetAllPackageByFacilityIdQueryVariables> & ({ variables: GetAllPackageByFacilityIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPackageByFacilityIdQuery, GetAllPackageByFacilityIdQueryVariables>(GetAllPackageByFacilityIdDocument, options);
      }
export function useGetAllPackageByFacilityIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPackageByFacilityIdQuery, GetAllPackageByFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPackageByFacilityIdQuery, GetAllPackageByFacilityIdQueryVariables>(GetAllPackageByFacilityIdDocument, options);
        }
export function useGetAllPackageByFacilityIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPackageByFacilityIdQuery, GetAllPackageByFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPackageByFacilityIdQuery, GetAllPackageByFacilityIdQueryVariables>(GetAllPackageByFacilityIdDocument, options);
        }
export type GetAllPackageByFacilityIdQueryHookResult = ReturnType<typeof useGetAllPackageByFacilityIdQuery>;
export type GetAllPackageByFacilityIdLazyQueryHookResult = ReturnType<typeof useGetAllPackageByFacilityIdLazyQuery>;
export type GetAllPackageByFacilityIdSuspenseQueryHookResult = ReturnType<typeof useGetAllPackageByFacilityIdSuspenseQuery>;
export type GetAllPackageByFacilityIdQueryResult = Apollo.QueryResult<GetAllPackageByFacilityIdQuery, GetAllPackageByFacilityIdQueryVariables>;
export const GetAllPackagePaginationOfFacilityDocument = gql`
    query getAllPackagePaginationOfFacility($search: String, $page: Float!, $limit: Float!, $sortField: String, $sortOrder: String, $userId: String, $staffId: String) {
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
          exceptions {
            dates
            numbeSlot
            open
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllPackagePaginationOfFacilityQuery__
 *
 * To run a query within a React component, call `useGetAllPackagePaginationOfFacilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPackagePaginationOfFacilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPackagePaginationOfFacilityQuery({
 *   variables: {
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *      userId: // value for 'userId'
 *      staffId: // value for 'staffId'
 *   },
 * });
 */
export function useGetAllPackagePaginationOfFacilityQuery(baseOptions: Apollo.QueryHookOptions<GetAllPackagePaginationOfFacilityQuery, GetAllPackagePaginationOfFacilityQueryVariables> & ({ variables: GetAllPackagePaginationOfFacilityQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPackagePaginationOfFacilityQuery, GetAllPackagePaginationOfFacilityQueryVariables>(GetAllPackagePaginationOfFacilityDocument, options);
      }
export function useGetAllPackagePaginationOfFacilityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPackagePaginationOfFacilityQuery, GetAllPackagePaginationOfFacilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPackagePaginationOfFacilityQuery, GetAllPackagePaginationOfFacilityQueryVariables>(GetAllPackagePaginationOfFacilityDocument, options);
        }
export function useGetAllPackagePaginationOfFacilitySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPackagePaginationOfFacilityQuery, GetAllPackagePaginationOfFacilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPackagePaginationOfFacilityQuery, GetAllPackagePaginationOfFacilityQueryVariables>(GetAllPackagePaginationOfFacilityDocument, options);
        }
export type GetAllPackagePaginationOfFacilityQueryHookResult = ReturnType<typeof useGetAllPackagePaginationOfFacilityQuery>;
export type GetAllPackagePaginationOfFacilityLazyQueryHookResult = ReturnType<typeof useGetAllPackagePaginationOfFacilityLazyQuery>;
export type GetAllPackagePaginationOfFacilitySuspenseQueryHookResult = ReturnType<typeof useGetAllPackagePaginationOfFacilitySuspenseQuery>;
export type GetAllPackagePaginationOfFacilityQueryResult = Apollo.QueryResult<GetAllPackagePaginationOfFacilityQuery, GetAllPackagePaginationOfFacilityQueryVariables>;
export const GetAllPackagePaginationByStaffDocument = gql`
    query getAllPackagePaginationByStaff($search: String, $page: Float!, $limit: Float!, $sortField: String, $sortOrder: String, $staffId: String!) {
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

/**
 * __useGetAllPackagePaginationByStaffQuery__
 *
 * To run a query within a React component, call `useGetAllPackagePaginationByStaffQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPackagePaginationByStaffQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPackagePaginationByStaffQuery({
 *   variables: {
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *      staffId: // value for 'staffId'
 *   },
 * });
 */
export function useGetAllPackagePaginationByStaffQuery(baseOptions: Apollo.QueryHookOptions<GetAllPackagePaginationByStaffQuery, GetAllPackagePaginationByStaffQueryVariables> & ({ variables: GetAllPackagePaginationByStaffQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPackagePaginationByStaffQuery, GetAllPackagePaginationByStaffQueryVariables>(GetAllPackagePaginationByStaffDocument, options);
      }
export function useGetAllPackagePaginationByStaffLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPackagePaginationByStaffQuery, GetAllPackagePaginationByStaffQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPackagePaginationByStaffQuery, GetAllPackagePaginationByStaffQueryVariables>(GetAllPackagePaginationByStaffDocument, options);
        }
export function useGetAllPackagePaginationByStaffSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPackagePaginationByStaffQuery, GetAllPackagePaginationByStaffQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPackagePaginationByStaffQuery, GetAllPackagePaginationByStaffQueryVariables>(GetAllPackagePaginationByStaffDocument, options);
        }
export type GetAllPackagePaginationByStaffQueryHookResult = ReturnType<typeof useGetAllPackagePaginationByStaffQuery>;
export type GetAllPackagePaginationByStaffLazyQueryHookResult = ReturnType<typeof useGetAllPackagePaginationByStaffLazyQuery>;
export type GetAllPackagePaginationByStaffSuspenseQueryHookResult = ReturnType<typeof useGetAllPackagePaginationByStaffSuspenseQuery>;
export type GetAllPackagePaginationByStaffQueryResult = Apollo.QueryResult<GetAllPackagePaginationByStaffQuery, GetAllPackagePaginationByStaffQueryVariables>;
export const GetTotalPackagesCountDocument = gql`
    query getTotalPackagesCount($search: String, $userId: String, $staffId: String) {
  getTotalPackagesCount(search: $search, userId: $userId, staffId: $staffId)
}
    `;

/**
 * __useGetTotalPackagesCountQuery__
 *
 * To run a query within a React component, call `useGetTotalPackagesCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalPackagesCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalPackagesCountQuery({
 *   variables: {
 *      search: // value for 'search'
 *      userId: // value for 'userId'
 *      staffId: // value for 'staffId'
 *   },
 * });
 */
export function useGetTotalPackagesCountQuery(baseOptions?: Apollo.QueryHookOptions<GetTotalPackagesCountQuery, GetTotalPackagesCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalPackagesCountQuery, GetTotalPackagesCountQueryVariables>(GetTotalPackagesCountDocument, options);
      }
export function useGetTotalPackagesCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalPackagesCountQuery, GetTotalPackagesCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalPackagesCountQuery, GetTotalPackagesCountQueryVariables>(GetTotalPackagesCountDocument, options);
        }
export function useGetTotalPackagesCountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalPackagesCountQuery, GetTotalPackagesCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalPackagesCountQuery, GetTotalPackagesCountQueryVariables>(GetTotalPackagesCountDocument, options);
        }
export type GetTotalPackagesCountQueryHookResult = ReturnType<typeof useGetTotalPackagesCountQuery>;
export type GetTotalPackagesCountLazyQueryHookResult = ReturnType<typeof useGetTotalPackagesCountLazyQuery>;
export type GetTotalPackagesCountSuspenseQueryHookResult = ReturnType<typeof useGetTotalPackagesCountSuspenseQuery>;
export type GetTotalPackagesCountQueryResult = Apollo.QueryResult<GetTotalPackagesCountQuery, GetTotalPackagesCountQueryVariables>;
export const GetMedicalSpecialtyByIdDocument = gql`
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
          exceptions {
            dates
            numbeSlot
            open
          }
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
export function useGetMedicalSpecialtyByIdQuery(baseOptions: Apollo.QueryHookOptions<GetMedicalSpecialtyByIdQuery, GetMedicalSpecialtyByIdQueryVariables> & ({ variables: GetMedicalSpecialtyByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMedicalSpecialtyByIdQuery, GetMedicalSpecialtyByIdQueryVariables>(GetMedicalSpecialtyByIdDocument, options);
      }
export function useGetMedicalSpecialtyByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMedicalSpecialtyByIdQuery, GetMedicalSpecialtyByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMedicalSpecialtyByIdQuery, GetMedicalSpecialtyByIdQueryVariables>(GetMedicalSpecialtyByIdDocument, options);
        }
export function useGetMedicalSpecialtyByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMedicalSpecialtyByIdQuery, GetMedicalSpecialtyByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMedicalSpecialtyByIdQuery, GetMedicalSpecialtyByIdQueryVariables>(GetMedicalSpecialtyByIdDocument, options);
        }
export type GetMedicalSpecialtyByIdQueryHookResult = ReturnType<typeof useGetMedicalSpecialtyByIdQuery>;
export type GetMedicalSpecialtyByIdLazyQueryHookResult = ReturnType<typeof useGetMedicalSpecialtyByIdLazyQuery>;
export type GetMedicalSpecialtyByIdSuspenseQueryHookResult = ReturnType<typeof useGetMedicalSpecialtyByIdSuspenseQuery>;
export type GetMedicalSpecialtyByIdQueryResult = Apollo.QueryResult<GetMedicalSpecialtyByIdQuery, GetMedicalSpecialtyByIdQueryVariables>;
export const GetMedicalSpecialtiesByMedicalFacilityIdDocument = gql`
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
export function useGetMedicalSpecialtiesByMedicalFacilityIdQuery(baseOptions: Apollo.QueryHookOptions<GetMedicalSpecialtiesByMedicalFacilityIdQuery, GetMedicalSpecialtiesByMedicalFacilityIdQueryVariables> & ({ variables: GetMedicalSpecialtiesByMedicalFacilityIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMedicalSpecialtiesByMedicalFacilityIdQuery, GetMedicalSpecialtiesByMedicalFacilityIdQueryVariables>(GetMedicalSpecialtiesByMedicalFacilityIdDocument, options);
      }
export function useGetMedicalSpecialtiesByMedicalFacilityIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMedicalSpecialtiesByMedicalFacilityIdQuery, GetMedicalSpecialtiesByMedicalFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMedicalSpecialtiesByMedicalFacilityIdQuery, GetMedicalSpecialtiesByMedicalFacilityIdQueryVariables>(GetMedicalSpecialtiesByMedicalFacilityIdDocument, options);
        }
export function useGetMedicalSpecialtiesByMedicalFacilityIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMedicalSpecialtiesByMedicalFacilityIdQuery, GetMedicalSpecialtiesByMedicalFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMedicalSpecialtiesByMedicalFacilityIdQuery, GetMedicalSpecialtiesByMedicalFacilityIdQueryVariables>(GetMedicalSpecialtiesByMedicalFacilityIdDocument, options);
        }
export type GetMedicalSpecialtiesByMedicalFacilityIdQueryHookResult = ReturnType<typeof useGetMedicalSpecialtiesByMedicalFacilityIdQuery>;
export type GetMedicalSpecialtiesByMedicalFacilityIdLazyQueryHookResult = ReturnType<typeof useGetMedicalSpecialtiesByMedicalFacilityIdLazyQuery>;
export type GetMedicalSpecialtiesByMedicalFacilityIdSuspenseQueryHookResult = ReturnType<typeof useGetMedicalSpecialtiesByMedicalFacilityIdSuspenseQuery>;
export type GetMedicalSpecialtiesByMedicalFacilityIdQueryResult = Apollo.QueryResult<GetMedicalSpecialtiesByMedicalFacilityIdQuery, GetMedicalSpecialtiesByMedicalFacilityIdQueryVariables>;
export const GetAllMedicalSpecialtiesPaginationOfFacilityDocument = gql`
    query getAllMedicalSpecialtiesPaginationOfFacility($search: String, $page: Float!, $limit: Float!, $sortField: String, $sortOrder: String, $userId: String, $staffId: String) {
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

/**
 * __useGetAllMedicalSpecialtiesPaginationOfFacilityQuery__
 *
 * To run a query within a React component, call `useGetAllMedicalSpecialtiesPaginationOfFacilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMedicalSpecialtiesPaginationOfFacilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMedicalSpecialtiesPaginationOfFacilityQuery({
 *   variables: {
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *      userId: // value for 'userId'
 *      staffId: // value for 'staffId'
 *   },
 * });
 */
export function useGetAllMedicalSpecialtiesPaginationOfFacilityQuery(baseOptions: Apollo.QueryHookOptions<GetAllMedicalSpecialtiesPaginationOfFacilityQuery, GetAllMedicalSpecialtiesPaginationOfFacilityQueryVariables> & ({ variables: GetAllMedicalSpecialtiesPaginationOfFacilityQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMedicalSpecialtiesPaginationOfFacilityQuery, GetAllMedicalSpecialtiesPaginationOfFacilityQueryVariables>(GetAllMedicalSpecialtiesPaginationOfFacilityDocument, options);
      }
export function useGetAllMedicalSpecialtiesPaginationOfFacilityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMedicalSpecialtiesPaginationOfFacilityQuery, GetAllMedicalSpecialtiesPaginationOfFacilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMedicalSpecialtiesPaginationOfFacilityQuery, GetAllMedicalSpecialtiesPaginationOfFacilityQueryVariables>(GetAllMedicalSpecialtiesPaginationOfFacilityDocument, options);
        }
export function useGetAllMedicalSpecialtiesPaginationOfFacilitySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllMedicalSpecialtiesPaginationOfFacilityQuery, GetAllMedicalSpecialtiesPaginationOfFacilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllMedicalSpecialtiesPaginationOfFacilityQuery, GetAllMedicalSpecialtiesPaginationOfFacilityQueryVariables>(GetAllMedicalSpecialtiesPaginationOfFacilityDocument, options);
        }
export type GetAllMedicalSpecialtiesPaginationOfFacilityQueryHookResult = ReturnType<typeof useGetAllMedicalSpecialtiesPaginationOfFacilityQuery>;
export type GetAllMedicalSpecialtiesPaginationOfFacilityLazyQueryHookResult = ReturnType<typeof useGetAllMedicalSpecialtiesPaginationOfFacilityLazyQuery>;
export type GetAllMedicalSpecialtiesPaginationOfFacilitySuspenseQueryHookResult = ReturnType<typeof useGetAllMedicalSpecialtiesPaginationOfFacilitySuspenseQuery>;
export type GetAllMedicalSpecialtiesPaginationOfFacilityQueryResult = Apollo.QueryResult<GetAllMedicalSpecialtiesPaginationOfFacilityQuery, GetAllMedicalSpecialtiesPaginationOfFacilityQueryVariables>;
export const GetAllMedicalSpecialtiesPaginationByStaffDocument = gql`
    query getAllMedicalSpecialtiesPaginationByStaff($search: String, $page: Float!, $limit: Float!, $sortField: String, $sortOrder: String, $staffId: String!) {
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

/**
 * __useGetAllMedicalSpecialtiesPaginationByStaffQuery__
 *
 * To run a query within a React component, call `useGetAllMedicalSpecialtiesPaginationByStaffQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMedicalSpecialtiesPaginationByStaffQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMedicalSpecialtiesPaginationByStaffQuery({
 *   variables: {
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *      staffId: // value for 'staffId'
 *   },
 * });
 */
export function useGetAllMedicalSpecialtiesPaginationByStaffQuery(baseOptions: Apollo.QueryHookOptions<GetAllMedicalSpecialtiesPaginationByStaffQuery, GetAllMedicalSpecialtiesPaginationByStaffQueryVariables> & ({ variables: GetAllMedicalSpecialtiesPaginationByStaffQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMedicalSpecialtiesPaginationByStaffQuery, GetAllMedicalSpecialtiesPaginationByStaffQueryVariables>(GetAllMedicalSpecialtiesPaginationByStaffDocument, options);
      }
export function useGetAllMedicalSpecialtiesPaginationByStaffLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMedicalSpecialtiesPaginationByStaffQuery, GetAllMedicalSpecialtiesPaginationByStaffQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMedicalSpecialtiesPaginationByStaffQuery, GetAllMedicalSpecialtiesPaginationByStaffQueryVariables>(GetAllMedicalSpecialtiesPaginationByStaffDocument, options);
        }
export function useGetAllMedicalSpecialtiesPaginationByStaffSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllMedicalSpecialtiesPaginationByStaffQuery, GetAllMedicalSpecialtiesPaginationByStaffQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllMedicalSpecialtiesPaginationByStaffQuery, GetAllMedicalSpecialtiesPaginationByStaffQueryVariables>(GetAllMedicalSpecialtiesPaginationByStaffDocument, options);
        }
export type GetAllMedicalSpecialtiesPaginationByStaffQueryHookResult = ReturnType<typeof useGetAllMedicalSpecialtiesPaginationByStaffQuery>;
export type GetAllMedicalSpecialtiesPaginationByStaffLazyQueryHookResult = ReturnType<typeof useGetAllMedicalSpecialtiesPaginationByStaffLazyQuery>;
export type GetAllMedicalSpecialtiesPaginationByStaffSuspenseQueryHookResult = ReturnType<typeof useGetAllMedicalSpecialtiesPaginationByStaffSuspenseQuery>;
export type GetAllMedicalSpecialtiesPaginationByStaffQueryResult = Apollo.QueryResult<GetAllMedicalSpecialtiesPaginationByStaffQuery, GetAllMedicalSpecialtiesPaginationByStaffQueryVariables>;
export const GetTotalMedicalSpecialtiesCountDocument = gql`
    query getTotalMedicalSpecialtiesCount($search: String, $userId: String, $staffId: String) {
  getTotalMedicalSpecialtiesCount(
    search: $search
    userId: $userId
    staffId: $staffId
  )
}
    `;

/**
 * __useGetTotalMedicalSpecialtiesCountQuery__
 *
 * To run a query within a React component, call `useGetTotalMedicalSpecialtiesCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalMedicalSpecialtiesCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalMedicalSpecialtiesCountQuery({
 *   variables: {
 *      search: // value for 'search'
 *      userId: // value for 'userId'
 *      staffId: // value for 'staffId'
 *   },
 * });
 */
export function useGetTotalMedicalSpecialtiesCountQuery(baseOptions?: Apollo.QueryHookOptions<GetTotalMedicalSpecialtiesCountQuery, GetTotalMedicalSpecialtiesCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalMedicalSpecialtiesCountQuery, GetTotalMedicalSpecialtiesCountQueryVariables>(GetTotalMedicalSpecialtiesCountDocument, options);
      }
export function useGetTotalMedicalSpecialtiesCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalMedicalSpecialtiesCountQuery, GetTotalMedicalSpecialtiesCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalMedicalSpecialtiesCountQuery, GetTotalMedicalSpecialtiesCountQueryVariables>(GetTotalMedicalSpecialtiesCountDocument, options);
        }
export function useGetTotalMedicalSpecialtiesCountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalMedicalSpecialtiesCountQuery, GetTotalMedicalSpecialtiesCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalMedicalSpecialtiesCountQuery, GetTotalMedicalSpecialtiesCountQueryVariables>(GetTotalMedicalSpecialtiesCountDocument, options);
        }
export type GetTotalMedicalSpecialtiesCountQueryHookResult = ReturnType<typeof useGetTotalMedicalSpecialtiesCountQuery>;
export type GetTotalMedicalSpecialtiesCountLazyQueryHookResult = ReturnType<typeof useGetTotalMedicalSpecialtiesCountLazyQuery>;
export type GetTotalMedicalSpecialtiesCountSuspenseQueryHookResult = ReturnType<typeof useGetTotalMedicalSpecialtiesCountSuspenseQuery>;
export type GetTotalMedicalSpecialtiesCountQueryResult = Apollo.QueryResult<GetTotalMedicalSpecialtiesCountQuery, GetTotalMedicalSpecialtiesCountQueryVariables>;
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
          exceptions {
            dates
            numbeSlot
            open
          }
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
export function useGetVaccineByIdQuery(baseOptions: Apollo.QueryHookOptions<GetVaccineByIdQuery, GetVaccineByIdQueryVariables> & ({ variables: GetVaccineByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVaccineByIdQuery, GetVaccineByIdQueryVariables>(GetVaccineByIdDocument, options);
      }
export function useGetVaccineByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVaccineByIdQuery, GetVaccineByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVaccineByIdQuery, GetVaccineByIdQueryVariables>(GetVaccineByIdDocument, options);
        }
export function useGetVaccineByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetVaccineByIdQuery, GetVaccineByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetVaccineByIdQuery, GetVaccineByIdQueryVariables>(GetVaccineByIdDocument, options);
        }
export type GetVaccineByIdQueryHookResult = ReturnType<typeof useGetVaccineByIdQuery>;
export type GetVaccineByIdLazyQueryHookResult = ReturnType<typeof useGetVaccineByIdLazyQuery>;
export type GetVaccineByIdSuspenseQueryHookResult = ReturnType<typeof useGetVaccineByIdSuspenseQuery>;
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
export function useGetAllVaccinationByFacilityIdQuery(baseOptions: Apollo.QueryHookOptions<GetAllVaccinationByFacilityIdQuery, GetAllVaccinationByFacilityIdQueryVariables> & ({ variables: GetAllVaccinationByFacilityIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllVaccinationByFacilityIdQuery, GetAllVaccinationByFacilityIdQueryVariables>(GetAllVaccinationByFacilityIdDocument, options);
      }
export function useGetAllVaccinationByFacilityIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllVaccinationByFacilityIdQuery, GetAllVaccinationByFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllVaccinationByFacilityIdQuery, GetAllVaccinationByFacilityIdQueryVariables>(GetAllVaccinationByFacilityIdDocument, options);
        }
export function useGetAllVaccinationByFacilityIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllVaccinationByFacilityIdQuery, GetAllVaccinationByFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllVaccinationByFacilityIdQuery, GetAllVaccinationByFacilityIdQueryVariables>(GetAllVaccinationByFacilityIdDocument, options);
        }
export type GetAllVaccinationByFacilityIdQueryHookResult = ReturnType<typeof useGetAllVaccinationByFacilityIdQuery>;
export type GetAllVaccinationByFacilityIdLazyQueryHookResult = ReturnType<typeof useGetAllVaccinationByFacilityIdLazyQuery>;
export type GetAllVaccinationByFacilityIdSuspenseQueryHookResult = ReturnType<typeof useGetAllVaccinationByFacilityIdSuspenseQuery>;
export type GetAllVaccinationByFacilityIdQueryResult = Apollo.QueryResult<GetAllVaccinationByFacilityIdQuery, GetAllVaccinationByFacilityIdQueryVariables>;
export const GetAllVaccinationPaginationOfFacilityDocument = gql`
    query getAllVaccinationPaginationOfFacility($search: String, $page: Float!, $limit: Float!, $sortField: String, $sortOrder: String, $userId: String, $staffId: String) {
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

/**
 * __useGetAllVaccinationPaginationOfFacilityQuery__
 *
 * To run a query within a React component, call `useGetAllVaccinationPaginationOfFacilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllVaccinationPaginationOfFacilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllVaccinationPaginationOfFacilityQuery({
 *   variables: {
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *      userId: // value for 'userId'
 *      staffId: // value for 'staffId'
 *   },
 * });
 */
export function useGetAllVaccinationPaginationOfFacilityQuery(baseOptions: Apollo.QueryHookOptions<GetAllVaccinationPaginationOfFacilityQuery, GetAllVaccinationPaginationOfFacilityQueryVariables> & ({ variables: GetAllVaccinationPaginationOfFacilityQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllVaccinationPaginationOfFacilityQuery, GetAllVaccinationPaginationOfFacilityQueryVariables>(GetAllVaccinationPaginationOfFacilityDocument, options);
      }
export function useGetAllVaccinationPaginationOfFacilityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllVaccinationPaginationOfFacilityQuery, GetAllVaccinationPaginationOfFacilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllVaccinationPaginationOfFacilityQuery, GetAllVaccinationPaginationOfFacilityQueryVariables>(GetAllVaccinationPaginationOfFacilityDocument, options);
        }
export function useGetAllVaccinationPaginationOfFacilitySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllVaccinationPaginationOfFacilityQuery, GetAllVaccinationPaginationOfFacilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllVaccinationPaginationOfFacilityQuery, GetAllVaccinationPaginationOfFacilityQueryVariables>(GetAllVaccinationPaginationOfFacilityDocument, options);
        }
export type GetAllVaccinationPaginationOfFacilityQueryHookResult = ReturnType<typeof useGetAllVaccinationPaginationOfFacilityQuery>;
export type GetAllVaccinationPaginationOfFacilityLazyQueryHookResult = ReturnType<typeof useGetAllVaccinationPaginationOfFacilityLazyQuery>;
export type GetAllVaccinationPaginationOfFacilitySuspenseQueryHookResult = ReturnType<typeof useGetAllVaccinationPaginationOfFacilitySuspenseQuery>;
export type GetAllVaccinationPaginationOfFacilityQueryResult = Apollo.QueryResult<GetAllVaccinationPaginationOfFacilityQuery, GetAllVaccinationPaginationOfFacilityQueryVariables>;
export const GetAllVaccinationPaginationByStaffDocument = gql`
    query getAllVaccinationPaginationByStaff($search: String, $page: Float!, $limit: Float!, $sortField: String, $sortOrder: String, $staffId: String!) {
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

/**
 * __useGetAllVaccinationPaginationByStaffQuery__
 *
 * To run a query within a React component, call `useGetAllVaccinationPaginationByStaffQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllVaccinationPaginationByStaffQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllVaccinationPaginationByStaffQuery({
 *   variables: {
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *      staffId: // value for 'staffId'
 *   },
 * });
 */
export function useGetAllVaccinationPaginationByStaffQuery(baseOptions: Apollo.QueryHookOptions<GetAllVaccinationPaginationByStaffQuery, GetAllVaccinationPaginationByStaffQueryVariables> & ({ variables: GetAllVaccinationPaginationByStaffQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllVaccinationPaginationByStaffQuery, GetAllVaccinationPaginationByStaffQueryVariables>(GetAllVaccinationPaginationByStaffDocument, options);
      }
export function useGetAllVaccinationPaginationByStaffLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllVaccinationPaginationByStaffQuery, GetAllVaccinationPaginationByStaffQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllVaccinationPaginationByStaffQuery, GetAllVaccinationPaginationByStaffQueryVariables>(GetAllVaccinationPaginationByStaffDocument, options);
        }
export function useGetAllVaccinationPaginationByStaffSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllVaccinationPaginationByStaffQuery, GetAllVaccinationPaginationByStaffQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllVaccinationPaginationByStaffQuery, GetAllVaccinationPaginationByStaffQueryVariables>(GetAllVaccinationPaginationByStaffDocument, options);
        }
export type GetAllVaccinationPaginationByStaffQueryHookResult = ReturnType<typeof useGetAllVaccinationPaginationByStaffQuery>;
export type GetAllVaccinationPaginationByStaffLazyQueryHookResult = ReturnType<typeof useGetAllVaccinationPaginationByStaffLazyQuery>;
export type GetAllVaccinationPaginationByStaffSuspenseQueryHookResult = ReturnType<typeof useGetAllVaccinationPaginationByStaffSuspenseQuery>;
export type GetAllVaccinationPaginationByStaffQueryResult = Apollo.QueryResult<GetAllVaccinationPaginationByStaffQuery, GetAllVaccinationPaginationByStaffQueryVariables>;
export const GetTotalVaccinationsCountDocument = gql`
    query getTotalVaccinationsCount($search: String, $userId: String, $staffId: String) {
  getTotalVaccinationsCount(search: $search, userId: $userId, staffId: $staffId)
}
    `;

/**
 * __useGetTotalVaccinationsCountQuery__
 *
 * To run a query within a React component, call `useGetTotalVaccinationsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalVaccinationsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalVaccinationsCountQuery({
 *   variables: {
 *      search: // value for 'search'
 *      userId: // value for 'userId'
 *      staffId: // value for 'staffId'
 *   },
 * });
 */
export function useGetTotalVaccinationsCountQuery(baseOptions?: Apollo.QueryHookOptions<GetTotalVaccinationsCountQuery, GetTotalVaccinationsCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalVaccinationsCountQuery, GetTotalVaccinationsCountQueryVariables>(GetTotalVaccinationsCountDocument, options);
      }
export function useGetTotalVaccinationsCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalVaccinationsCountQuery, GetTotalVaccinationsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalVaccinationsCountQuery, GetTotalVaccinationsCountQueryVariables>(GetTotalVaccinationsCountDocument, options);
        }
export function useGetTotalVaccinationsCountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalVaccinationsCountQuery, GetTotalVaccinationsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalVaccinationsCountQuery, GetTotalVaccinationsCountQueryVariables>(GetTotalVaccinationsCountDocument, options);
        }
export type GetTotalVaccinationsCountQueryHookResult = ReturnType<typeof useGetTotalVaccinationsCountQuery>;
export type GetTotalVaccinationsCountLazyQueryHookResult = ReturnType<typeof useGetTotalVaccinationsCountLazyQuery>;
export type GetTotalVaccinationsCountSuspenseQueryHookResult = ReturnType<typeof useGetTotalVaccinationsCountSuspenseQuery>;
export type GetTotalVaccinationsCountQueryResult = Apollo.QueryResult<GetTotalVaccinationsCountQuery, GetTotalVaccinationsCountQueryVariables>;
export const GetSpecialtySelectDocument = gql`
    query getSpecialtySelect($input: String!) {
  getMedicalSpecialtySelect(input: $input) {
    id
    specialtyName
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
export function useGetSpecialtySelectQuery(baseOptions: Apollo.QueryHookOptions<GetSpecialtySelectQuery, GetSpecialtySelectQueryVariables> & ({ variables: GetSpecialtySelectQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpecialtySelectQuery, GetSpecialtySelectQueryVariables>(GetSpecialtySelectDocument, options);
      }
export function useGetSpecialtySelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpecialtySelectQuery, GetSpecialtySelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpecialtySelectQuery, GetSpecialtySelectQueryVariables>(GetSpecialtySelectDocument, options);
        }
export function useGetSpecialtySelectSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSpecialtySelectQuery, GetSpecialtySelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSpecialtySelectQuery, GetSpecialtySelectQueryVariables>(GetSpecialtySelectDocument, options);
        }
export type GetSpecialtySelectQueryHookResult = ReturnType<typeof useGetSpecialtySelectQuery>;
export type GetSpecialtySelectLazyQueryHookResult = ReturnType<typeof useGetSpecialtySelectLazyQuery>;
export type GetSpecialtySelectSuspenseQueryHookResult = ReturnType<typeof useGetSpecialtySelectSuspenseQuery>;
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
export function useGetAllPackageSelectQuery(baseOptions: Apollo.QueryHookOptions<GetAllPackageSelectQuery, GetAllPackageSelectQueryVariables> & ({ variables: GetAllPackageSelectQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPackageSelectQuery, GetAllPackageSelectQueryVariables>(GetAllPackageSelectDocument, options);
      }
export function useGetAllPackageSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPackageSelectQuery, GetAllPackageSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPackageSelectQuery, GetAllPackageSelectQueryVariables>(GetAllPackageSelectDocument, options);
        }
export function useGetAllPackageSelectSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPackageSelectQuery, GetAllPackageSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPackageSelectQuery, GetAllPackageSelectQueryVariables>(GetAllPackageSelectDocument, options);
        }
export type GetAllPackageSelectQueryHookResult = ReturnType<typeof useGetAllPackageSelectQuery>;
export type GetAllPackageSelectLazyQueryHookResult = ReturnType<typeof useGetAllPackageSelectLazyQuery>;
export type GetAllPackageSelectSuspenseQueryHookResult = ReturnType<typeof useGetAllPackageSelectSuspenseQuery>;
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
export function useGetAllVaccinationSelectQuery(baseOptions: Apollo.QueryHookOptions<GetAllVaccinationSelectQuery, GetAllVaccinationSelectQueryVariables> & ({ variables: GetAllVaccinationSelectQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllVaccinationSelectQuery, GetAllVaccinationSelectQueryVariables>(GetAllVaccinationSelectDocument, options);
      }
export function useGetAllVaccinationSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllVaccinationSelectQuery, GetAllVaccinationSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllVaccinationSelectQuery, GetAllVaccinationSelectQueryVariables>(GetAllVaccinationSelectDocument, options);
        }
export function useGetAllVaccinationSelectSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllVaccinationSelectQuery, GetAllVaccinationSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllVaccinationSelectQuery, GetAllVaccinationSelectQueryVariables>(GetAllVaccinationSelectDocument, options);
        }
export type GetAllVaccinationSelectQueryHookResult = ReturnType<typeof useGetAllVaccinationSelectQuery>;
export type GetAllVaccinationSelectLazyQueryHookResult = ReturnType<typeof useGetAllVaccinationSelectLazyQuery>;
export type GetAllVaccinationSelectSuspenseQueryHookResult = ReturnType<typeof useGetAllVaccinationSelectSuspenseQuery>;
export type GetAllVaccinationSelectQueryResult = Apollo.QueryResult<GetAllVaccinationSelectQuery, GetAllVaccinationSelectQueryVariables>;
export const GetAllUsersPaginationDocument = gql`
    query getAllUsersPagination($search: String, $role: String, $page: Float!, $limit: Float!, $sortField: String, $sortOrder: String) {
  getAllUsersPagination(
    role: $role
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
 *      role: // value for 'role'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *   },
 * });
 */
export function useGetAllUsersPaginationQuery(baseOptions: Apollo.QueryHookOptions<GetAllUsersPaginationQuery, GetAllUsersPaginationQueryVariables> & ({ variables: GetAllUsersPaginationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersPaginationQuery, GetAllUsersPaginationQueryVariables>(GetAllUsersPaginationDocument, options);
      }
export function useGetAllUsersPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersPaginationQuery, GetAllUsersPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersPaginationQuery, GetAllUsersPaginationQueryVariables>(GetAllUsersPaginationDocument, options);
        }
export function useGetAllUsersPaginationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllUsersPaginationQuery, GetAllUsersPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUsersPaginationQuery, GetAllUsersPaginationQueryVariables>(GetAllUsersPaginationDocument, options);
        }
export type GetAllUsersPaginationQueryHookResult = ReturnType<typeof useGetAllUsersPaginationQuery>;
export type GetAllUsersPaginationLazyQueryHookResult = ReturnType<typeof useGetAllUsersPaginationLazyQuery>;
export type GetAllUsersPaginationSuspenseQueryHookResult = ReturnType<typeof useGetAllUsersPaginationSuspenseQuery>;
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
export function useGetTotalUsersCountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalUsersCountQuery, GetTotalUsersCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalUsersCountQuery, GetTotalUsersCountQueryVariables>(GetTotalUsersCountDocument, options);
        }
export type GetTotalUsersCountQueryHookResult = ReturnType<typeof useGetTotalUsersCountQuery>;
export type GetTotalUsersCountLazyQueryHookResult = ReturnType<typeof useGetTotalUsersCountLazyQuery>;
export type GetTotalUsersCountSuspenseQueryHookResult = ReturnType<typeof useGetTotalUsersCountSuspenseQuery>;
export type GetTotalUsersCountQueryResult = Apollo.QueryResult<GetTotalUsersCountQuery, GetTotalUsersCountQueryVariables>;
export const GetAllRegisterByOptionDocument = gql`
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
        customerKey
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
export function useGetAllRegisterByOptionQuery(baseOptions: Apollo.QueryHookOptions<GetAllRegisterByOptionQuery, GetAllRegisterByOptionQueryVariables> & ({ variables: GetAllRegisterByOptionQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllRegisterByOptionQuery, GetAllRegisterByOptionQueryVariables>(GetAllRegisterByOptionDocument, options);
      }
export function useGetAllRegisterByOptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllRegisterByOptionQuery, GetAllRegisterByOptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllRegisterByOptionQuery, GetAllRegisterByOptionQueryVariables>(GetAllRegisterByOptionDocument, options);
        }
export function useGetAllRegisterByOptionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllRegisterByOptionQuery, GetAllRegisterByOptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllRegisterByOptionQuery, GetAllRegisterByOptionQueryVariables>(GetAllRegisterByOptionDocument, options);
        }
export type GetAllRegisterByOptionQueryHookResult = ReturnType<typeof useGetAllRegisterByOptionQuery>;
export type GetAllRegisterByOptionLazyQueryHookResult = ReturnType<typeof useGetAllRegisterByOptionLazyQuery>;
export type GetAllRegisterByOptionSuspenseQueryHookResult = ReturnType<typeof useGetAllRegisterByOptionSuspenseQuery>;
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
export function useGetAllStaffPaginationQuery(baseOptions: Apollo.QueryHookOptions<GetAllStaffPaginationQuery, GetAllStaffPaginationQueryVariables> & ({ variables: GetAllStaffPaginationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllStaffPaginationQuery, GetAllStaffPaginationQueryVariables>(GetAllStaffPaginationDocument, options);
      }
export function useGetAllStaffPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllStaffPaginationQuery, GetAllStaffPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllStaffPaginationQuery, GetAllStaffPaginationQueryVariables>(GetAllStaffPaginationDocument, options);
        }
export function useGetAllStaffPaginationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllStaffPaginationQuery, GetAllStaffPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllStaffPaginationQuery, GetAllStaffPaginationQueryVariables>(GetAllStaffPaginationDocument, options);
        }
export type GetAllStaffPaginationQueryHookResult = ReturnType<typeof useGetAllStaffPaginationQuery>;
export type GetAllStaffPaginationLazyQueryHookResult = ReturnType<typeof useGetAllStaffPaginationLazyQuery>;
export type GetAllStaffPaginationSuspenseQueryHookResult = ReturnType<typeof useGetAllStaffPaginationSuspenseQuery>;
export type GetAllStaffPaginationQueryResult = Apollo.QueryResult<GetAllStaffPaginationQuery, GetAllStaffPaginationQueryVariables>;
export const TotalStaffsCountDocument = gql`
    query totalStaffsCount($search: String, $userId: String, $facilityId: String) {
  totalStaffsCount(search: $search, userId: $userId, facilityId: $facilityId)
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
 *      search: // value for 'search'
 *      userId: // value for 'userId'
 *      facilityId: // value for 'facilityId'
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
export function useTotalStaffsCountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TotalStaffsCountQuery, TotalStaffsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TotalStaffsCountQuery, TotalStaffsCountQueryVariables>(TotalStaffsCountDocument, options);
        }
export type TotalStaffsCountQueryHookResult = ReturnType<typeof useTotalStaffsCountQuery>;
export type TotalStaffsCountLazyQueryHookResult = ReturnType<typeof useTotalStaffsCountLazyQuery>;
export type TotalStaffsCountSuspenseQueryHookResult = ReturnType<typeof useTotalStaffsCountSuspenseQuery>;
export type TotalStaffsCountQueryResult = Apollo.QueryResult<TotalStaffsCountQuery, TotalStaffsCountQueryVariables>;
export const GetAllMedicalStaffPaginationOfFacilityDocument = gql`
    query getAllMedicalStaffPaginationOfFacility($search: String, $page: Float!, $limit: Float!, $sortField: String, $sortOrder: String, $userId: String, $facilityId: String) {
  getAllMedicalStaffPaginationOfFacility(
    search: $search
    page: $page
    limit: $limit
    sortField: $sortField
    sortOrder: $sortOrder
    userId: $userId
    facilityId: $facilityId
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

/**
 * __useGetAllMedicalStaffPaginationOfFacilityQuery__
 *
 * To run a query within a React component, call `useGetAllMedicalStaffPaginationOfFacilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMedicalStaffPaginationOfFacilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMedicalStaffPaginationOfFacilityQuery({
 *   variables: {
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *      userId: // value for 'userId'
 *      facilityId: // value for 'facilityId'
 *   },
 * });
 */
export function useGetAllMedicalStaffPaginationOfFacilityQuery(baseOptions: Apollo.QueryHookOptions<GetAllMedicalStaffPaginationOfFacilityQuery, GetAllMedicalStaffPaginationOfFacilityQueryVariables> & ({ variables: GetAllMedicalStaffPaginationOfFacilityQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMedicalStaffPaginationOfFacilityQuery, GetAllMedicalStaffPaginationOfFacilityQueryVariables>(GetAllMedicalStaffPaginationOfFacilityDocument, options);
      }
export function useGetAllMedicalStaffPaginationOfFacilityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMedicalStaffPaginationOfFacilityQuery, GetAllMedicalStaffPaginationOfFacilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMedicalStaffPaginationOfFacilityQuery, GetAllMedicalStaffPaginationOfFacilityQueryVariables>(GetAllMedicalStaffPaginationOfFacilityDocument, options);
        }
export function useGetAllMedicalStaffPaginationOfFacilitySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllMedicalStaffPaginationOfFacilityQuery, GetAllMedicalStaffPaginationOfFacilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllMedicalStaffPaginationOfFacilityQuery, GetAllMedicalStaffPaginationOfFacilityQueryVariables>(GetAllMedicalStaffPaginationOfFacilityDocument, options);
        }
export type GetAllMedicalStaffPaginationOfFacilityQueryHookResult = ReturnType<typeof useGetAllMedicalStaffPaginationOfFacilityQuery>;
export type GetAllMedicalStaffPaginationOfFacilityLazyQueryHookResult = ReturnType<typeof useGetAllMedicalStaffPaginationOfFacilityLazyQuery>;
export type GetAllMedicalStaffPaginationOfFacilitySuspenseQueryHookResult = ReturnType<typeof useGetAllMedicalStaffPaginationOfFacilitySuspenseQuery>;
export type GetAllMedicalStaffPaginationOfFacilityQueryResult = Apollo.QueryResult<GetAllMedicalStaffPaginationOfFacilityQuery, GetAllMedicalStaffPaginationOfFacilityQueryVariables>;
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
    customerKey
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
export function useGetAllCustomerPaginationQuery(baseOptions: Apollo.QueryHookOptions<GetAllCustomerPaginationQuery, GetAllCustomerPaginationQueryVariables> & ({ variables: GetAllCustomerPaginationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCustomerPaginationQuery, GetAllCustomerPaginationQueryVariables>(GetAllCustomerPaginationDocument, options);
      }
export function useGetAllCustomerPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCustomerPaginationQuery, GetAllCustomerPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCustomerPaginationQuery, GetAllCustomerPaginationQueryVariables>(GetAllCustomerPaginationDocument, options);
        }
export function useGetAllCustomerPaginationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllCustomerPaginationQuery, GetAllCustomerPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCustomerPaginationQuery, GetAllCustomerPaginationQueryVariables>(GetAllCustomerPaginationDocument, options);
        }
export type GetAllCustomerPaginationQueryHookResult = ReturnType<typeof useGetAllCustomerPaginationQuery>;
export type GetAllCustomerPaginationLazyQueryHookResult = ReturnType<typeof useGetAllCustomerPaginationLazyQuery>;
export type GetAllCustomerPaginationSuspenseQueryHookResult = ReturnType<typeof useGetAllCustomerPaginationSuspenseQuery>;
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
export function useGetTotalCustomersCountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalCustomersCountQuery, GetTotalCustomersCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalCustomersCountQuery, GetTotalCustomersCountQueryVariables>(GetTotalCustomersCountDocument, options);
        }
export type GetTotalCustomersCountQueryHookResult = ReturnType<typeof useGetTotalCustomersCountQuery>;
export type GetTotalCustomersCountLazyQueryHookResult = ReturnType<typeof useGetTotalCustomersCountLazyQuery>;
export type GetTotalCustomersCountSuspenseQueryHookResult = ReturnType<typeof useGetTotalCustomersCountSuspenseQuery>;
export type GetTotalCustomersCountQueryResult = Apollo.QueryResult<GetTotalCustomersCountQuery, GetTotalCustomersCountQueryVariables>;
export const GetTottalBlogDocument = gql`
    query getTottalBlog($search: String, $isDeleted: Boolean) {
  getTotalBlogsCount(search: $search, isDeleted: $isDeleted)
}
    `;

/**
 * __useGetTottalBlogQuery__
 *
 * To run a query within a React component, call `useGetTottalBlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTottalBlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTottalBlogQuery({
 *   variables: {
 *      search: // value for 'search'
 *      isDeleted: // value for 'isDeleted'
 *   },
 * });
 */
export function useGetTottalBlogQuery(baseOptions?: Apollo.QueryHookOptions<GetTottalBlogQuery, GetTottalBlogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTottalBlogQuery, GetTottalBlogQueryVariables>(GetTottalBlogDocument, options);
      }
export function useGetTottalBlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTottalBlogQuery, GetTottalBlogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTottalBlogQuery, GetTottalBlogQueryVariables>(GetTottalBlogDocument, options);
        }
export function useGetTottalBlogSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTottalBlogQuery, GetTottalBlogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTottalBlogQuery, GetTottalBlogQueryVariables>(GetTottalBlogDocument, options);
        }
export type GetTottalBlogQueryHookResult = ReturnType<typeof useGetTottalBlogQuery>;
export type GetTottalBlogLazyQueryHookResult = ReturnType<typeof useGetTottalBlogLazyQuery>;
export type GetTottalBlogSuspenseQueryHookResult = ReturnType<typeof useGetTottalBlogSuspenseQuery>;
export type GetTottalBlogQueryResult = Apollo.QueryResult<GetTottalBlogQuery, GetTottalBlogQueryVariables>;
export const GetAllBlogPaginationDocument = gql`
    query getAllBlogPagination($search: String, $page: Float!, $limit: Float!, $sortOrder: String, $isDeleted: Boolean) {
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

/**
 * __useGetAllBlogPaginationQuery__
 *
 * To run a query within a React component, call `useGetAllBlogPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBlogPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBlogPaginationQuery({
 *   variables: {
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortOrder: // value for 'sortOrder'
 *      isDeleted: // value for 'isDeleted'
 *   },
 * });
 */
export function useGetAllBlogPaginationQuery(baseOptions: Apollo.QueryHookOptions<GetAllBlogPaginationQuery, GetAllBlogPaginationQueryVariables> & ({ variables: GetAllBlogPaginationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBlogPaginationQuery, GetAllBlogPaginationQueryVariables>(GetAllBlogPaginationDocument, options);
      }
export function useGetAllBlogPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBlogPaginationQuery, GetAllBlogPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBlogPaginationQuery, GetAllBlogPaginationQueryVariables>(GetAllBlogPaginationDocument, options);
        }
export function useGetAllBlogPaginationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllBlogPaginationQuery, GetAllBlogPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllBlogPaginationQuery, GetAllBlogPaginationQueryVariables>(GetAllBlogPaginationDocument, options);
        }
export type GetAllBlogPaginationQueryHookResult = ReturnType<typeof useGetAllBlogPaginationQuery>;
export type GetAllBlogPaginationLazyQueryHookResult = ReturnType<typeof useGetAllBlogPaginationLazyQuery>;
export type GetAllBlogPaginationSuspenseQueryHookResult = ReturnType<typeof useGetAllBlogPaginationSuspenseQuery>;
export type GetAllBlogPaginationQueryResult = Apollo.QueryResult<GetAllBlogPaginationQuery, GetAllBlogPaginationQueryVariables>;
export const GetBlogBySlugDocument = gql`
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

/**
 * __useGetBlogBySlugQuery__
 *
 * To run a query within a React component, call `useGetBlogBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetBlogBySlugQuery(baseOptions: Apollo.QueryHookOptions<GetBlogBySlugQuery, GetBlogBySlugQueryVariables> & ({ variables: GetBlogBySlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>(GetBlogBySlugDocument, options);
      }
export function useGetBlogBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>(GetBlogBySlugDocument, options);
        }
export function useGetBlogBySlugSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>(GetBlogBySlugDocument, options);
        }
export type GetBlogBySlugQueryHookResult = ReturnType<typeof useGetBlogBySlugQuery>;
export type GetBlogBySlugLazyQueryHookResult = ReturnType<typeof useGetBlogBySlugLazyQuery>;
export type GetBlogBySlugSuspenseQueryHookResult = ReturnType<typeof useGetBlogBySlugSuspenseQuery>;
export type GetBlogBySlugQueryResult = Apollo.QueryResult<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>;
export const GetAllBlogOfFacilityPaginationDocument = gql`
    query getAllBlogOfFacilityPagination($search: String, $page: Float!, $limit: Float!, $sortOrder: String, $facilityId: String!, $isDeleted: Boolean) {
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

/**
 * __useGetAllBlogOfFacilityPaginationQuery__
 *
 * To run a query within a React component, call `useGetAllBlogOfFacilityPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBlogOfFacilityPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBlogOfFacilityPaginationQuery({
 *   variables: {
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortOrder: // value for 'sortOrder'
 *      facilityId: // value for 'facilityId'
 *      isDeleted: // value for 'isDeleted'
 *   },
 * });
 */
export function useGetAllBlogOfFacilityPaginationQuery(baseOptions: Apollo.QueryHookOptions<GetAllBlogOfFacilityPaginationQuery, GetAllBlogOfFacilityPaginationQueryVariables> & ({ variables: GetAllBlogOfFacilityPaginationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBlogOfFacilityPaginationQuery, GetAllBlogOfFacilityPaginationQueryVariables>(GetAllBlogOfFacilityPaginationDocument, options);
      }
export function useGetAllBlogOfFacilityPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBlogOfFacilityPaginationQuery, GetAllBlogOfFacilityPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBlogOfFacilityPaginationQuery, GetAllBlogOfFacilityPaginationQueryVariables>(GetAllBlogOfFacilityPaginationDocument, options);
        }
export function useGetAllBlogOfFacilityPaginationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllBlogOfFacilityPaginationQuery, GetAllBlogOfFacilityPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllBlogOfFacilityPaginationQuery, GetAllBlogOfFacilityPaginationQueryVariables>(GetAllBlogOfFacilityPaginationDocument, options);
        }
export type GetAllBlogOfFacilityPaginationQueryHookResult = ReturnType<typeof useGetAllBlogOfFacilityPaginationQuery>;
export type GetAllBlogOfFacilityPaginationLazyQueryHookResult = ReturnType<typeof useGetAllBlogOfFacilityPaginationLazyQuery>;
export type GetAllBlogOfFacilityPaginationSuspenseQueryHookResult = ReturnType<typeof useGetAllBlogOfFacilityPaginationSuspenseQuery>;
export type GetAllBlogOfFacilityPaginationQueryResult = Apollo.QueryResult<GetAllBlogOfFacilityPaginationQuery, GetAllBlogOfFacilityPaginationQueryVariables>;
export const GetAllDoctorCountOfFacilityDocument = gql`
    query getAllDoctorCountOfFacility($userId: String, $staffId: String, $startTime: String!, $endTime: String!, $isPending: Boolean, $isCancel: Boolean, $missed: Boolean) {
  getAllDoctorOfFacility(userId: $userId, staffId: $staffId) {
    id
    doctorName
    registerCount(
      startTime: $startTime
      endTime: $endTime
      isPending: $isPending
      isCancel: $isCancel
      missed: $missed
    )
  }
}
    `;

/**
 * __useGetAllDoctorCountOfFacilityQuery__
 *
 * To run a query within a React component, call `useGetAllDoctorCountOfFacilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDoctorCountOfFacilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDoctorCountOfFacilityQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      staffId: // value for 'staffId'
 *      startTime: // value for 'startTime'
 *      endTime: // value for 'endTime'
 *      isPending: // value for 'isPending'
 *      isCancel: // value for 'isCancel'
 *      missed: // value for 'missed'
 *   },
 * });
 */
export function useGetAllDoctorCountOfFacilityQuery(baseOptions: Apollo.QueryHookOptions<GetAllDoctorCountOfFacilityQuery, GetAllDoctorCountOfFacilityQueryVariables> & ({ variables: GetAllDoctorCountOfFacilityQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDoctorCountOfFacilityQuery, GetAllDoctorCountOfFacilityQueryVariables>(GetAllDoctorCountOfFacilityDocument, options);
      }
export function useGetAllDoctorCountOfFacilityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDoctorCountOfFacilityQuery, GetAllDoctorCountOfFacilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDoctorCountOfFacilityQuery, GetAllDoctorCountOfFacilityQueryVariables>(GetAllDoctorCountOfFacilityDocument, options);
        }
export function useGetAllDoctorCountOfFacilitySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllDoctorCountOfFacilityQuery, GetAllDoctorCountOfFacilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllDoctorCountOfFacilityQuery, GetAllDoctorCountOfFacilityQueryVariables>(GetAllDoctorCountOfFacilityDocument, options);
        }
export type GetAllDoctorCountOfFacilityQueryHookResult = ReturnType<typeof useGetAllDoctorCountOfFacilityQuery>;
export type GetAllDoctorCountOfFacilityLazyQueryHookResult = ReturnType<typeof useGetAllDoctorCountOfFacilityLazyQuery>;
export type GetAllDoctorCountOfFacilitySuspenseQueryHookResult = ReturnType<typeof useGetAllDoctorCountOfFacilitySuspenseQuery>;
export type GetAllDoctorCountOfFacilityQueryResult = Apollo.QueryResult<GetAllDoctorCountOfFacilityQuery, GetAllDoctorCountOfFacilityQueryVariables>;
export const GetAllPackageCountOfFacilityDocument = gql`
    query getAllPackageCountOfFacility($userId: String, $staffId: String, $startTime: String!, $endTime: String!, $isPending: Boolean, $isCancel: Boolean, $missed: Boolean) {
  getAllPackageOfFacility(userId: $userId, staffId: $staffId) {
    id
    packageName
    registerCount(
      startTime: $startTime
      endTime: $endTime
      isPending: $isPending
      isCancel: $isCancel
      missed: $missed
    )
  }
}
    `;

/**
 * __useGetAllPackageCountOfFacilityQuery__
 *
 * To run a query within a React component, call `useGetAllPackageCountOfFacilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPackageCountOfFacilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPackageCountOfFacilityQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      staffId: // value for 'staffId'
 *      startTime: // value for 'startTime'
 *      endTime: // value for 'endTime'
 *      isPending: // value for 'isPending'
 *      isCancel: // value for 'isCancel'
 *      missed: // value for 'missed'
 *   },
 * });
 */
export function useGetAllPackageCountOfFacilityQuery(baseOptions: Apollo.QueryHookOptions<GetAllPackageCountOfFacilityQuery, GetAllPackageCountOfFacilityQueryVariables> & ({ variables: GetAllPackageCountOfFacilityQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPackageCountOfFacilityQuery, GetAllPackageCountOfFacilityQueryVariables>(GetAllPackageCountOfFacilityDocument, options);
      }
export function useGetAllPackageCountOfFacilityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPackageCountOfFacilityQuery, GetAllPackageCountOfFacilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPackageCountOfFacilityQuery, GetAllPackageCountOfFacilityQueryVariables>(GetAllPackageCountOfFacilityDocument, options);
        }
export function useGetAllPackageCountOfFacilitySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPackageCountOfFacilityQuery, GetAllPackageCountOfFacilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPackageCountOfFacilityQuery, GetAllPackageCountOfFacilityQueryVariables>(GetAllPackageCountOfFacilityDocument, options);
        }
export type GetAllPackageCountOfFacilityQueryHookResult = ReturnType<typeof useGetAllPackageCountOfFacilityQuery>;
export type GetAllPackageCountOfFacilityLazyQueryHookResult = ReturnType<typeof useGetAllPackageCountOfFacilityLazyQuery>;
export type GetAllPackageCountOfFacilitySuspenseQueryHookResult = ReturnType<typeof useGetAllPackageCountOfFacilitySuspenseQuery>;
export type GetAllPackageCountOfFacilityQueryResult = Apollo.QueryResult<GetAllPackageCountOfFacilityQuery, GetAllPackageCountOfFacilityQueryVariables>;
export const GetAllMedicalSpecialtiesCountOfFacilityDocument = gql`
    query getAllMedicalSpecialtiesCountOfFacility($userId: String, $staffId: String, $startTime: String!, $endTime: String!, $isPending: Boolean, $isCancel: Boolean, $missed: Boolean) {
  getAllMedicalSpecialtiesOfFacility(userId: $userId, staffId: $staffId) {
    id
    specialtyName
    registerCount(
      startTime: $startTime
      endTime: $endTime
      isPending: $isPending
      isCancel: $isCancel
      missed: $missed
    )
  }
}
    `;

/**
 * __useGetAllMedicalSpecialtiesCountOfFacilityQuery__
 *
 * To run a query within a React component, call `useGetAllMedicalSpecialtiesCountOfFacilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMedicalSpecialtiesCountOfFacilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMedicalSpecialtiesCountOfFacilityQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      staffId: // value for 'staffId'
 *      startTime: // value for 'startTime'
 *      endTime: // value for 'endTime'
 *      isPending: // value for 'isPending'
 *      isCancel: // value for 'isCancel'
 *      missed: // value for 'missed'
 *   },
 * });
 */
export function useGetAllMedicalSpecialtiesCountOfFacilityQuery(baseOptions: Apollo.QueryHookOptions<GetAllMedicalSpecialtiesCountOfFacilityQuery, GetAllMedicalSpecialtiesCountOfFacilityQueryVariables> & ({ variables: GetAllMedicalSpecialtiesCountOfFacilityQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMedicalSpecialtiesCountOfFacilityQuery, GetAllMedicalSpecialtiesCountOfFacilityQueryVariables>(GetAllMedicalSpecialtiesCountOfFacilityDocument, options);
      }
export function useGetAllMedicalSpecialtiesCountOfFacilityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMedicalSpecialtiesCountOfFacilityQuery, GetAllMedicalSpecialtiesCountOfFacilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMedicalSpecialtiesCountOfFacilityQuery, GetAllMedicalSpecialtiesCountOfFacilityQueryVariables>(GetAllMedicalSpecialtiesCountOfFacilityDocument, options);
        }
export function useGetAllMedicalSpecialtiesCountOfFacilitySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllMedicalSpecialtiesCountOfFacilityQuery, GetAllMedicalSpecialtiesCountOfFacilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllMedicalSpecialtiesCountOfFacilityQuery, GetAllMedicalSpecialtiesCountOfFacilityQueryVariables>(GetAllMedicalSpecialtiesCountOfFacilityDocument, options);
        }
export type GetAllMedicalSpecialtiesCountOfFacilityQueryHookResult = ReturnType<typeof useGetAllMedicalSpecialtiesCountOfFacilityQuery>;
export type GetAllMedicalSpecialtiesCountOfFacilityLazyQueryHookResult = ReturnType<typeof useGetAllMedicalSpecialtiesCountOfFacilityLazyQuery>;
export type GetAllMedicalSpecialtiesCountOfFacilitySuspenseQueryHookResult = ReturnType<typeof useGetAllMedicalSpecialtiesCountOfFacilitySuspenseQuery>;
export type GetAllMedicalSpecialtiesCountOfFacilityQueryResult = Apollo.QueryResult<GetAllMedicalSpecialtiesCountOfFacilityQuery, GetAllMedicalSpecialtiesCountOfFacilityQueryVariables>;
export const GetAllVaccinationCountOfFacilityDocument = gql`
    query getAllVaccinationCountOfFacility($userId: String, $staffId: String, $startTime: String!, $endTime: String!, $isPending: Boolean, $isCancel: Boolean, $missed: Boolean) {
  getAllVaccinationOfFacility(userId: $userId, staffId: $staffId) {
    id
    vaccineName
    registerCount(
      startTime: $startTime
      endTime: $endTime
      isPending: $isPending
      isCancel: $isCancel
      missed: $missed
    )
  }
}
    `;

/**
 * __useGetAllVaccinationCountOfFacilityQuery__
 *
 * To run a query within a React component, call `useGetAllVaccinationCountOfFacilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllVaccinationCountOfFacilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllVaccinationCountOfFacilityQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      staffId: // value for 'staffId'
 *      startTime: // value for 'startTime'
 *      endTime: // value for 'endTime'
 *      isPending: // value for 'isPending'
 *      isCancel: // value for 'isCancel'
 *      missed: // value for 'missed'
 *   },
 * });
 */
export function useGetAllVaccinationCountOfFacilityQuery(baseOptions: Apollo.QueryHookOptions<GetAllVaccinationCountOfFacilityQuery, GetAllVaccinationCountOfFacilityQueryVariables> & ({ variables: GetAllVaccinationCountOfFacilityQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllVaccinationCountOfFacilityQuery, GetAllVaccinationCountOfFacilityQueryVariables>(GetAllVaccinationCountOfFacilityDocument, options);
      }
export function useGetAllVaccinationCountOfFacilityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllVaccinationCountOfFacilityQuery, GetAllVaccinationCountOfFacilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllVaccinationCountOfFacilityQuery, GetAllVaccinationCountOfFacilityQueryVariables>(GetAllVaccinationCountOfFacilityDocument, options);
        }
export function useGetAllVaccinationCountOfFacilitySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllVaccinationCountOfFacilityQuery, GetAllVaccinationCountOfFacilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllVaccinationCountOfFacilityQuery, GetAllVaccinationCountOfFacilityQueryVariables>(GetAllVaccinationCountOfFacilityDocument, options);
        }
export type GetAllVaccinationCountOfFacilityQueryHookResult = ReturnType<typeof useGetAllVaccinationCountOfFacilityQuery>;
export type GetAllVaccinationCountOfFacilityLazyQueryHookResult = ReturnType<typeof useGetAllVaccinationCountOfFacilityLazyQuery>;
export type GetAllVaccinationCountOfFacilitySuspenseQueryHookResult = ReturnType<typeof useGetAllVaccinationCountOfFacilitySuspenseQuery>;
export type GetAllVaccinationCountOfFacilityQueryResult = Apollo.QueryResult<GetAllVaccinationCountOfFacilityQuery, GetAllVaccinationCountOfFacilityQueryVariables>;
export const GetAllRegisPendingDocument = gql`
    query getAllRegisPending($input: GetRegisPendingInput!, $page: Float!, $limit: Float!, $search: String, $missed: Boolean!) {
  getAllRegisPending(
    input: $input
    page: $page
    limit: $limit
    search: $search
    missed: $missed
  ) {
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
    warning
    warningThisMonth
    createdBy
    createRegisBy {
      id
      fullname
      address
      customerKey
      numberPhone
      gender
      ethnic
      dateOfBirth
      userId
      email
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
        customerKey
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

/**
 * __useGetAllRegisPendingQuery__
 *
 * To run a query within a React component, call `useGetAllRegisPendingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRegisPendingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRegisPendingQuery({
 *   variables: {
 *      input: // value for 'input'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      search: // value for 'search'
 *      missed: // value for 'missed'
 *   },
 * });
 */
export function useGetAllRegisPendingQuery(baseOptions: Apollo.QueryHookOptions<GetAllRegisPendingQuery, GetAllRegisPendingQueryVariables> & ({ variables: GetAllRegisPendingQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllRegisPendingQuery, GetAllRegisPendingQueryVariables>(GetAllRegisPendingDocument, options);
      }
export function useGetAllRegisPendingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllRegisPendingQuery, GetAllRegisPendingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllRegisPendingQuery, GetAllRegisPendingQueryVariables>(GetAllRegisPendingDocument, options);
        }
export function useGetAllRegisPendingSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllRegisPendingQuery, GetAllRegisPendingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllRegisPendingQuery, GetAllRegisPendingQueryVariables>(GetAllRegisPendingDocument, options);
        }
export type GetAllRegisPendingQueryHookResult = ReturnType<typeof useGetAllRegisPendingQuery>;
export type GetAllRegisPendingLazyQueryHookResult = ReturnType<typeof useGetAllRegisPendingLazyQuery>;
export type GetAllRegisPendingSuspenseQueryHookResult = ReturnType<typeof useGetAllRegisPendingSuspenseQuery>;
export type GetAllRegisPendingQueryResult = Apollo.QueryResult<GetAllRegisPendingQuery, GetAllRegisPendingQueryVariables>;
export const GetRegisHistoryDocument = gql`
    query getRegisHistory($profileId: String!, $userId: String, $staffId: String) {
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

/**
 * __useGetRegisHistoryQuery__
 *
 * To run a query within a React component, call `useGetRegisHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRegisHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRegisHistoryQuery({
 *   variables: {
 *      profileId: // value for 'profileId'
 *      userId: // value for 'userId'
 *      staffId: // value for 'staffId'
 *   },
 * });
 */
export function useGetRegisHistoryQuery(baseOptions: Apollo.QueryHookOptions<GetRegisHistoryQuery, GetRegisHistoryQueryVariables> & ({ variables: GetRegisHistoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRegisHistoryQuery, GetRegisHistoryQueryVariables>(GetRegisHistoryDocument, options);
      }
export function useGetRegisHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRegisHistoryQuery, GetRegisHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRegisHistoryQuery, GetRegisHistoryQueryVariables>(GetRegisHistoryDocument, options);
        }
export function useGetRegisHistorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetRegisHistoryQuery, GetRegisHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRegisHistoryQuery, GetRegisHistoryQueryVariables>(GetRegisHistoryDocument, options);
        }
export type GetRegisHistoryQueryHookResult = ReturnType<typeof useGetRegisHistoryQuery>;
export type GetRegisHistoryLazyQueryHookResult = ReturnType<typeof useGetRegisHistoryLazyQuery>;
export type GetRegisHistorySuspenseQueryHookResult = ReturnType<typeof useGetRegisHistorySuspenseQuery>;
export type GetRegisHistoryQueryResult = Apollo.QueryResult<GetRegisHistoryQuery, GetRegisHistoryQueryVariables>;
export const GetProfileByIdDocument = gql`
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
      customerKey
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

/**
 * __useGetProfileByIdQuery__
 *
 * To run a query within a React component, call `useGetProfileByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileByIdQuery({
 *   variables: {
 *      profileId: // value for 'profileId'
 *   },
 * });
 */
export function useGetProfileByIdQuery(baseOptions: Apollo.QueryHookOptions<GetProfileByIdQuery, GetProfileByIdQueryVariables> & ({ variables: GetProfileByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileByIdQuery, GetProfileByIdQueryVariables>(GetProfileByIdDocument, options);
      }
export function useGetProfileByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileByIdQuery, GetProfileByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileByIdQuery, GetProfileByIdQueryVariables>(GetProfileByIdDocument, options);
        }
export function useGetProfileByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProfileByIdQuery, GetProfileByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfileByIdQuery, GetProfileByIdQueryVariables>(GetProfileByIdDocument, options);
        }
export type GetProfileByIdQueryHookResult = ReturnType<typeof useGetProfileByIdQuery>;
export type GetProfileByIdLazyQueryHookResult = ReturnType<typeof useGetProfileByIdLazyQuery>;
export type GetProfileByIdSuspenseQueryHookResult = ReturnType<typeof useGetProfileByIdSuspenseQuery>;
export type GetProfileByIdQueryResult = Apollo.QueryResult<GetProfileByIdQuery, GetProfileByIdQueryVariables>;
export const GetRegisByIdDocument = gql`
    query getRegisById($id: String!) {
  getRegisById(id: $id) {
    id
    cancel
    createdAt
    date
    profileId
    note
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

/**
 * __useGetRegisByIdQuery__
 *
 * To run a query within a React component, call `useGetRegisByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRegisByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRegisByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRegisByIdQuery(baseOptions: Apollo.QueryHookOptions<GetRegisByIdQuery, GetRegisByIdQueryVariables> & ({ variables: GetRegisByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRegisByIdQuery, GetRegisByIdQueryVariables>(GetRegisByIdDocument, options);
      }
export function useGetRegisByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRegisByIdQuery, GetRegisByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRegisByIdQuery, GetRegisByIdQueryVariables>(GetRegisByIdDocument, options);
        }
export function useGetRegisByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetRegisByIdQuery, GetRegisByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRegisByIdQuery, GetRegisByIdQueryVariables>(GetRegisByIdDocument, options);
        }
export type GetRegisByIdQueryHookResult = ReturnType<typeof useGetRegisByIdQuery>;
export type GetRegisByIdLazyQueryHookResult = ReturnType<typeof useGetRegisByIdLazyQuery>;
export type GetRegisByIdSuspenseQueryHookResult = ReturnType<typeof useGetRegisByIdSuspenseQuery>;
export type GetRegisByIdQueryResult = Apollo.QueryResult<GetRegisByIdQuery, GetRegisByIdQueryVariables>;
export const GetAllCustomerFromRegisDocument = gql`
    query getAllCustomerFromRegis($userId: String, $facilityId: String, $page: Float!, $limit: Float!, $search: String, $oderSort: String) {
  getAllCustomerFromRegis(
    userId: $userId
    facilityId: $facilityId
    page: $page
    limit: $limit
    search: $search
    sortOrder: $oderSort
  ) {
    id
    userId
    customerKey
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

/**
 * __useGetAllCustomerFromRegisQuery__
 *
 * To run a query within a React component, call `useGetAllCustomerFromRegisQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCustomerFromRegisQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCustomerFromRegisQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      facilityId: // value for 'facilityId'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      search: // value for 'search'
 *      oderSort: // value for 'oderSort'
 *   },
 * });
 */
export function useGetAllCustomerFromRegisQuery(baseOptions: Apollo.QueryHookOptions<GetAllCustomerFromRegisQuery, GetAllCustomerFromRegisQueryVariables> & ({ variables: GetAllCustomerFromRegisQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCustomerFromRegisQuery, GetAllCustomerFromRegisQueryVariables>(GetAllCustomerFromRegisDocument, options);
      }
export function useGetAllCustomerFromRegisLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCustomerFromRegisQuery, GetAllCustomerFromRegisQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCustomerFromRegisQuery, GetAllCustomerFromRegisQueryVariables>(GetAllCustomerFromRegisDocument, options);
        }
export function useGetAllCustomerFromRegisSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllCustomerFromRegisQuery, GetAllCustomerFromRegisQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCustomerFromRegisQuery, GetAllCustomerFromRegisQueryVariables>(GetAllCustomerFromRegisDocument, options);
        }
export type GetAllCustomerFromRegisQueryHookResult = ReturnType<typeof useGetAllCustomerFromRegisQuery>;
export type GetAllCustomerFromRegisLazyQueryHookResult = ReturnType<typeof useGetAllCustomerFromRegisLazyQuery>;
export type GetAllCustomerFromRegisSuspenseQueryHookResult = ReturnType<typeof useGetAllCustomerFromRegisSuspenseQuery>;
export type GetAllCustomerFromRegisQueryResult = Apollo.QueryResult<GetAllCustomerFromRegisQuery, GetAllCustomerFromRegisQueryVariables>;
export const GetAllCustomerFromRegisCountDocument = gql`
    query getAllCustomerFromRegisCount($userId: String, $facilityId: String, $search: String) {
  getAllCustomerFromRegisCount(
    userId: $userId
    facilityId: $facilityId
    search: $search
  )
}
    `;

/**
 * __useGetAllCustomerFromRegisCountQuery__
 *
 * To run a query within a React component, call `useGetAllCustomerFromRegisCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCustomerFromRegisCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCustomerFromRegisCountQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      facilityId: // value for 'facilityId'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useGetAllCustomerFromRegisCountQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCustomerFromRegisCountQuery, GetAllCustomerFromRegisCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCustomerFromRegisCountQuery, GetAllCustomerFromRegisCountQueryVariables>(GetAllCustomerFromRegisCountDocument, options);
      }
export function useGetAllCustomerFromRegisCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCustomerFromRegisCountQuery, GetAllCustomerFromRegisCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCustomerFromRegisCountQuery, GetAllCustomerFromRegisCountQueryVariables>(GetAllCustomerFromRegisCountDocument, options);
        }
export function useGetAllCustomerFromRegisCountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllCustomerFromRegisCountQuery, GetAllCustomerFromRegisCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCustomerFromRegisCountQuery, GetAllCustomerFromRegisCountQueryVariables>(GetAllCustomerFromRegisCountDocument, options);
        }
export type GetAllCustomerFromRegisCountQueryHookResult = ReturnType<typeof useGetAllCustomerFromRegisCountQuery>;
export type GetAllCustomerFromRegisCountLazyQueryHookResult = ReturnType<typeof useGetAllCustomerFromRegisCountLazyQuery>;
export type GetAllCustomerFromRegisCountSuspenseQueryHookResult = ReturnType<typeof useGetAllCustomerFromRegisCountSuspenseQuery>;
export type GetAllCustomerFromRegisCountQueryResult = Apollo.QueryResult<GetAllCustomerFromRegisCountQuery, GetAllCustomerFromRegisCountQueryVariables>;
export const RegisterCreatedDocument = gql`
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
        customerKey
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

/**
 * __useRegisterCreatedSubscription__
 *
 * To run a query within a React component, call `useRegisterCreatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useRegisterCreatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRegisterCreatedSubscription({
 *   variables: {
 *      option: // value for 'option'
 *   },
 * });
 */
export function useRegisterCreatedSubscription(baseOptions: Apollo.SubscriptionHookOptions<RegisterCreatedSubscription, RegisterCreatedSubscriptionVariables> & ({ variables: RegisterCreatedSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<RegisterCreatedSubscription, RegisterCreatedSubscriptionVariables>(RegisterCreatedDocument, options);
      }
export type RegisterCreatedSubscriptionHookResult = ReturnType<typeof useRegisterCreatedSubscription>;
export type RegisterCreatedSubscriptionResult = Apollo.SubscriptionResult<RegisterCreatedSubscription>;
export const RegisterPendingCreatedDocument = gql`
    subscription registerPendingCreated($input: RegisPendingInput!) {
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
        customerKey
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

/**
 * __useRegisterPendingCreatedSubscription__
 *
 * To run a query within a React component, call `useRegisterPendingCreatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useRegisterPendingCreatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRegisterPendingCreatedSubscription({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterPendingCreatedSubscription(baseOptions: Apollo.SubscriptionHookOptions<RegisterPendingCreatedSubscription, RegisterPendingCreatedSubscriptionVariables> & ({ variables: RegisterPendingCreatedSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<RegisterPendingCreatedSubscription, RegisterPendingCreatedSubscriptionVariables>(RegisterPendingCreatedDocument, options);
      }
export type RegisterPendingCreatedSubscriptionHookResult = ReturnType<typeof useRegisterPendingCreatedSubscription>;
export type RegisterPendingCreatedSubscriptionResult = Apollo.SubscriptionResult<RegisterPendingCreatedSubscription>;