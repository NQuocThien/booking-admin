import {
  EDayOfWeed,
  SessionInput,
} from "src/graphql/webbooking-service.generated";
import { EQuickAddSessions } from "./enum";
import moment from "moment";
import { Session } from "inspector";

export const getDayOfWeek = (day: string | undefined) => {
  switch (day) {
    case "Monday":
      return "Thứ 2";
    case "Thursday":
      return "Thứ 3";
    case "Wednesday":
      return "Thứ 4";
    case "Tuesday":
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
