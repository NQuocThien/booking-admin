export enum EtypeService {
  Doctor = "bác sĩ",
  Package = "gói khám",
  Vaccine = "vaccine",
  Specialty = " chuyên khoa",
}

export enum EQuickAddSessions {
  Session15,
  Session30,
  Session60,
}

export interface IOption {
  value: string;
  label: string;
}
