import * as MaterialDesignIcon from "react-icons/md";
import * as GameIcon from "react-icons/gi";
import * as IconS8 from "react-icons/lia";
import * as Fa6 from "react-icons/fa6";
import momnet from "moment";
import React from "react";
import { SessionInput } from "src/graphql/webbooking-service.generated";

export const setLocalStorage = (key: string, value: string | object | []) => {
  if (typeof value === "string") {
    window.localStorage.setItem(key, value);
  } else {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getLocalStorage = (key: string) => {
  try {
    const storedValue = localStorage.getItem(key);
    // console.log('get item ' + key + ', ' + storedValue)
    return storedValue;
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error("Lỗi khi truy xuất từ localStorage:", error);
    return null;
  }
};

export const getToken = () => {
  try {
    const storedValue = localStorage.getItem(
      process.env.REACT_APP_ACCESS_TOKEN || "access_token"
    );
    // console.log('get item ' + key + ', ' + storedValue)
    return storedValue;
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error("Lỗi khi truy xuất từ localStorage:", error);
    return null;
  }
};

export function getIcon(iconName: string | undefined) {
  const iconTemp: any = MaterialDesignIcon;
  const iconTemp2: any = GameIcon;
  const iconTemp3: any = IconS8;
  const iconTemp4: any = Fa6;

  if (iconName)
    if (iconTemp[iconName]) {
      return React.createElement(iconTemp[iconName]);
    } else {
      if (iconTemp2[iconName]) return React.createElement(iconTemp2[iconName]);
      else if (iconTemp3[iconName])
        return React.createElement(iconTemp3[iconName]);
      else if (iconTemp4[iconName])
        return React.createElement(iconTemp4[iconName]);
      else return null;
    }
  else return null;
}

export function shallowEqual<T extends Record<string, any>>(
  obj1: T,
  obj2: T
): boolean {
  const keys1 = Object.keys(obj1) as (keyof T)[];
  const keys2 = Object.keys(obj2) as (keyof T)[];

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

export const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  currencyDisplay: "code",
});

export function isValidDate(dateString: string) {
  // Sử dụng biểu thức chính quy để kiểm tra định dạng ngày tháng năm (YYYY-MM-DD)
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  // Kiểm tra xem chuỗi có khớp với định dạng không
  return regex.test(dateString);
}
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Thêm 1 vì tháng bắt đầu từ 0
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export function checkSessionExist(
  newObject: SessionInput,
  arrayOfObjects: SessionInput[]
): boolean {
  const start_time_new: momnet.Moment = momnet(newObject.startTime, "HH:mm");
  const end_time_new: momnet.Moment = momnet(newObject.endTime, "HH:mm");
  // kiểm tra xem thời gian bắt đầu có bé hơn thời gian kết thúc:
  if (start_time_new.add(14, "minute").isSameOrAfter(end_time_new)) {
    alert("Phiên làm việc phải từ 15 ");
    return true;
  }

  for (const obj of arrayOfObjects) {
    const start_time_obj: momnet.Moment = momnet(obj.startTime, "HH:mm");
    const end_time_obj: momnet.Moment = momnet(obj.endTime, "HH:mm");

    // Kiểm tra xem khoảng thời gian mới bắt đầu ngay sau khi kết thúc khoảng thời gian hiện tại không
    if (
      start_time_new.isSameOrAfter(end_time_obj) &&
      start_time_new.isBefore(end_time_obj.add(-1, "minute"))
    ) {
      alert("Phiên làm việc bị trùng lặp ");
      return true;
    }

    // Kiểm tra xem khoảng thời gian mới kết thúc ngay trước khi bắt đầu khoảng thời gian hiện tại không
    if (
      end_time_new.isSameOrBefore(start_time_obj) &&
      end_time_new.isAfter(start_time_obj.subtract(1, "minute"))
    ) {
      alert("Phiên làm việc bị trùng lặp ");
      return true; // Có trùng lặp thời gian
    }
  }
  return false;
}
