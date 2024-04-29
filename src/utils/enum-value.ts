export enum GetEPermission {
  Magager = "Quản lý",
  MagagerPending = "Duyệt khám",
  ManagerSpecialty = "Quản lý chuyên khoa",
  MagagerPackage = "Quản lý gói khám",
  MagagerVaccine = "Quản lý tim chủng",
}
export enum GetRole {
  User = "user",
  Admin = "admin",
  Customer = "customer",
  Facility = "facility",
  Doctor = "doctor",
  Staff = "staff",
}

export enum GetEDegree { // bằng cấp
  Doctorate = "TS BS",
  MasterDoctor = "ThS BS",
  Doctor = "BS",
  DoctorS1 = "BS CKI",
  DoctorS2 = "BS CKII",
}

export enum GetEAcademicTitle { // học hàm
  Professor = "GS",
  AssociateProfesso = "PGS",
}

export enum GetETypeOfFacility {
  publicHospital = "Bệnh viện công",
  privateHospital = "Bệnh viện tư",
  clinic = "Phòng khám",
  vaccinationCenter = "Trung tâm tiêm chủng",
}

export enum GetETypeOfService {
  Doctor = "Khám theo Bác sĩ",
  Specialty = "Khám theo Chuyên khoa",
  Package = "Khám theo gói",
  Vaccine = "Tiêm chủng",
}

export enum GetEStateRegister {
  Pending = "Chưa duyệt",
  Approved = "Đã duyệt",
  Success = "Đã khám",
}
