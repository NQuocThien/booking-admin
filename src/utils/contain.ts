import * as ICON from "react-icons/md";
import * as ICON2 from "react-icons/gi";
import React from "react";

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
  const iconTemp: any = ICON;
  const iconTemp2: any = ICON2;
  if (iconName)
    if (iconTemp[iconName]) {
      return React.createElement(iconTemp[iconName]);
    } else {
      if (iconTemp2[iconName]) return React.createElement(iconTemp[iconName]);
      else return null;
    }
  else return null;
}

export function getIcon2(iconName: string | undefined) {
  const iconTemp: any = ICON;
  const iconTemp2: any = ICON2;
  if (iconName)
    if (iconTemp[iconName]) {
      return React.createElement(iconTemp[iconName]);
    } else {
      if (iconTemp2[iconName]) return React.createElement(iconTemp2[iconName]);
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
