import {
  EAcademicTitle,
  EDayOfWeed,
  EDegree,
  EGender,
  EGenderPackage,
  EPermission,
  EStateRegister,
  EStatusService,
  Schedule,
  SessionInput,
} from "src/graphql/webbooking-service.generated";
import { EQuickAddSessions, IOption } from "./enum";
import moment from "moment";

export const getSelectedOption = (id: string, options: [IOption]): IOption => {
  return (
    options.find((option) => option.value === id) || { value: "", label: "" }
  );
};
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
export const renderDayOfWeek = (day: string | undefined): string => {
  switch (day) {
    case "2":
      return "Thứ 2";

    case "3":
      return "Thứ 3";

    case "4":
      return "Thứ 4";

    case "5":
      return "Thứ 5";

    case "6":
      return "Thứ 6";

    case "7":
      return "Thứ 7";

    case "Chủ nhật":
      return "Chủ nhật";

    default:
      return "";
  }
};
export const renderDayOfWeek2 = (days: Schedule[]): string => {
  var result = "Thứ: ";
  if (days.length === 0) return "";
  if (days.length === 1 && days[0].dayOfWeek === "Chủ nhật") return "Chủ nhật";
  if (days.length > 0)
    for (var i = 0; i < days.length; i++) {
      result = result + ", " + days[i].dayOfWeek;
    }
  return result;
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
      return EStatusService.Open;
    case "Đóng":
      return EStatusService.Close;
    default:
      return EStatusService.Open;
  }
};
export const getEnumValueStateRegis = (input: string): EStateRegister => {
  switch (input) {
    case "Đã khám":
      return EStateRegister.Success;
    case "Chưa khám":
      return EStateRegister.Pending;
    default:
      return EStateRegister.Pending;
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
export const getEnumValuePermission = (
  input: string
): EPermission | undefined => {
  switch (input) {
    case "Quản lý":
      return EPermission.Magager;

    case "Quản lý bài viết":
      return EPermission.MagagerBlog;

    case "Quản lý chuyên khoa":
      return EPermission.ManagerSpecialty;

    case "Quản lý gói khám":
      return EPermission.MagagerPackage;

    case "Quản lý tim chủng":
      return EPermission.MagagerVaccine;
  }
};
