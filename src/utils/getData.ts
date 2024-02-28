import {
  EAcademicTitle,
  EDayOfWeed,
  EDegree,
  EGender,
  EGenderPackage,
  EStatusService,
  SessionInput,
} from "src/graphql/webbooking-service.generated";
import { EQuickAddSessions } from "./enum";
import moment from "moment";

interface AnyObject {
  [key: string]: any;
}

export function removeTypename(obj: AnyObject): AnyObject {
  const newObj: AnyObject = {};

  for (const key in obj) {
    if (key !== "__typename") {
      newObj[key] =
        typeof obj[key] === "object" ? removeTypename(obj[key]) : obj[key];
    }
  }

  return newObj;
}

export const getDayOfWeek = (day: string | undefined) => {
  switch (day) {
    case "Monday":
      return "Thứ 2";
    case "Tuesday":
      return "Thứ 3";
    case "Wednesday":
      return "Thứ 4";
    case "Thursday":
      return "Thứ 5";
    case "Friday":
      return "Thứ 6";
    case "Saturday":
      return "Thứ 7";
    case "Sunday":
      return "Chủ nhật";
    default:
      break;
  }
};

export const getAcademicTitle = (at: string) => {
  switch (at) {
    case "GS":
      return "Giáo sư";
    case "PGS":
      return "Phó giáo sư";
    default:
      return "";
  }
};

export const getDegree = (de: string | undefined) => {
  switch (de) {
    case "BS":
      return "Bác sĩ";
    case "ThS BS":
      return "Thạc sĩ bác sĩ";
    case "TS BS":
      return "Tiến sĩ bác sĩ";
    case "BS CKII":
      return "Bác sĩ chuyên khoa 2";
    case "BS CKI":
      return "Bác sĩ chuyên khoa 1";
    default:
      return "";
  }
};

export const getQuickSessions = (
  type: EQuickAddSessions,
  startSchedule: string,
  endSchedule: string
) => {
  let skip: number;
  console.log("test input", type);
  switch (type) {
    case EQuickAddSessions.Session15:
      skip = 15;
      break;
    case EQuickAddSessions.Session30:
      skip = 30;
      break;
    case EQuickAddSessions.Session60:
      skip = 60;
      break;
  }

  const start: moment.Moment = moment(startSchedule, "HH:mm");
  const end: moment.Moment = moment(endSchedule, "HH:mm");
  const sessions: SessionInput[] = [];
  let currentStartTime: moment.Moment | undefined = undefined;
  while (true) {
    var startTime;
    if (currentStartTime === undefined) startTime = start;
    else startTime = currentStartTime;
    const tpmStartTime = startTime.clone();
    const endTime = tpmStartTime.add(skip, "minute");
    if (endTime.isSameOrBefore(end)) {
      if (
        (startTime.isBefore(moment("13:00", "HH:mm")) &&
          startTime.isAfter(moment("11:00", "HH:mm"))) ||
        (endTime.isBefore(moment("13:00", "HH:mm")) &&
          endTime.isAfter(moment("11:00", "HH:mm")))
      ) {
      } else {
        sessions.push({
          startTime: startTime.format("HH:mm").toString(),
          endTime: endTime.format("HH:mm").toString(),
        });
      }
      currentStartTime = endTime;
    } else break;
  }
  return sessions;
};

export const getEnumValueDegree = (input: string): EDegree => {
  switch (input) {
    case "TS BS":
      return EDegree.Doctorate;
    case "ThS BS":
      return EDegree.MasterDoctor;
    case "BS":
      return EDegree.Doctor;
    case "BS CKI":
      return EDegree.DoctorS1;
    case "BS CKII":
      return EDegree.DoctorS2;
    default:
      return EDegree.Doctor;
  }
};
export const getEnumValueAcademicTitle = (
  input: string
): EAcademicTitle | undefined => {
  switch (input) {
    case "GS":
      return EAcademicTitle.Professor;
    case "PGS":
      return EAcademicTitle.AssociateProfesso;
    default:
      return undefined;
  }
};
export const getEnumValueGender = (input: string): EGender => {
  switch (input) {
    case "Nam":
      return EGender.Male;
    case "Nữ":
      return EGender.Female;
    default:
      return EGender.Male;
  }
};
export const getEnumValueDayOfWeek = (input: string): EDayOfWeed => {
  switch (input) {
    case "2":
      return EDayOfWeed.Monday;
    case "3":
      return EDayOfWeed.Tuesday;
    case "4":
      return EDayOfWeed.Wednesday;
    case "5":
      return EDayOfWeed.Thursday;
    case "6":
      return EDayOfWeed.Friday;
    case "7":
      return EDayOfWeed.Saturday;
    case "Chủ nhật":
      return EDayOfWeed.Sunday;
    default:
      return EDayOfWeed.Sunday;
  }
};
export const getEnumValueStateService = (input: string): EStatusService => {
  // console.log("input ", input);

  switch (input) {
    case "Mở":
      // console.log("return ", EStatusService.Open);
      return EStatusService.Open;
    case "Đống":
      // console.log("return ", EStatusService.Close);
      return EStatusService.Close;
    default:
      return EStatusService.Open;
  }
};
export const getEnumValueGenderPackage = (input: string): EGenderPackage => {
  switch (input) {
    case "Nam":
      return EGenderPackage.Male;
    case "Nữ":
      return EGenderPackage.Female;
    case "Nam và nữ":
      return EGenderPackage.Both;
    default:
      return EGenderPackage.Both;
  }
};
