export const handleNotification = () => {
  const audio = new Audio("/audio/chuong2.mp3");
  audio.loop = false;
  audio.play();
};

export const formatFileSize = (size: number) => {
  if (size < 1024) {
    return `${size} bytes`;
  } else if (size < 1048576) {
    return `${(size / 1024).toFixed(1)} KB`;
  } else if (size < 1073741824) {
    return `${(size / 1048576).toFixed(1)} MB`;
  } else {
    return `${(size / 1073741824).toFixed(1)} GB`;
  }
};

export function validatePhoneNumber(phoneNumber: string): boolean {
  const strippedPhoneNumber = phoneNumber.replace(/\D/g, "");
  if (phoneNumber.trim().length !== 10) {
    return false;
  }
  if (strippedPhoneNumber.length !== 10) {
    return false;
  }
  if (strippedPhoneNumber.charAt(0) !== "0") {
    return false;
  }
  if (!/^\d+$/.test(strippedPhoneNumber)) {
    return false;
  }

  // Nếu tất cả các điều kiện trên đều đúng, số điện thoại là hợp lệ
  return true;
}
