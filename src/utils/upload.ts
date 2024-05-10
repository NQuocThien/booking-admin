import { ILinkImage } from "src/assets/contains/item-interface";
import axios from "axios";

export type TypeFile = "image" | "video" | "document";
export type TypeFileImage =
  | "doctors"
  | "packages"
  | "facilities"
  | "users"
  | "blogs"
  | "";
export enum ETypeFile {
  Image = "image",
  Video = "video",
  Document = "document",
}
const BackendUri = process.env.BACKEND_URI
  ? process.env.BACKEND_URI
  : "http://localhost:4000";
export const backendUrlFile = {
  image: `${BackendUri}${"/images"}`,
  video: `${BackendUri}${"/videos"}`,
  document: `${BackendUri}${"/documents"}`,
};

export interface FileWithPreview {
  file: File;
  preview: string;
}

const backendUpload = {
  image: `${BackendUri}${"/webbookingImageUpload"}`,
  video: `${BackendUri}${"/webbookingVideoUpload"}`,
  document: `${BackendUri}${"/webbookingDocumentUpload"}`,
};

export async function uploadFile(
  typeFile: TypeFile, // TypeFile
  files: any[],
  callback: any,
  typeFileImage: TypeFileImage = ""
) {
  Promise.all(
    files.map(
      (file) =>
        new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("file", file);
          // console.log(
          //   `===> Test file ${file} --> ${formData} --> ${backendUpload[typeFile]}`
          // );
          axios
            .post(backendUpload[typeFile], formData, {
              headers: {
                "Content-Type": "multipart/form-data",
                imageType: `${typeFileImage}`,
              },
            })
            .then((response) => {
              resolve(response.data?.[0]);
            })
            .catch((error) => {
              console.log("test lỗi: ", error);
              reject(error);
            });
        })
    )
  )
    .then((result) => {
      callback(null, result);
    })
    .catch((error) => {
      callback(error);
    });
}

// export async function uploadMultiFile(
//   typeFile: TypeFile,
//   files: any,
//   callback?: any
// ) {
//   console.log("data submit: ", files);
//   const newArr = files?.map((file: any) => file);
//   console.log("array: ", newArr);

//   const newFile = new Promise((resolve, reject) => {
//     const formData = new FormData();
//     for (let i = 0; i < newArr.length; i++) {
//       console.log("array -> item: ", newArr[i]);
//       formData.append("file", newArr[i]);
//       console.log("form data: ", formData);
//     }
//     console.log("form date: ", JSON.stringify(formData));

//     axios
//       .post(backendUpload[typeFile], formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           // 'access-token': localStorage.getItem('access-token')
//         },
//       })
//       .then((response) => {
//         console.log("test repone:", response);
//         resolve(response);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
//   newFile
//     .then((result) => {
//       callback(null, result);
//     })
//     .catch((error) => {
//       callback(error);
//     });
// }

export async function uploadMultiFile(
  typeFile: TypeFile,
  files: File[],
  callback: (error: any, result: any) => void,
  typeFileImage: TypeFileImage = ""
) {
  try {
    const promises = files.map((file) => {
      const formData = new FormData();
      formData.append("file", file);
      // console.log("form data item: ", formData, file);
      return axios.post(backendUpload[typeFile], formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          imageType: `${typeFileImage}`,
        },
      });
    });

    Promise.all(promises)
      .then((responses) => {
        const data = responses.map((response) => response.data?.[0]);
        callback(null, data);
      })
      .catch((error) => {
        console.error("Lỗi khi tải lên tệp tin:", error);
        callback(error, null);
      });
  } catch (error) {
    console.error("Lỗi khi tải lên tệp tin:", error);
    callback(error, null);
  }
}
export function getUrlImage(linkImage: any) {
  const { url = "", fileName = "", type = "link" } = linkImage || {};
  if (type === "file") {
    return `${backendUrlFile.image}/${fileName}`;
  }
  return url;
}

export const uploadImage = (
  imageFile: Blob | null,
  typeFileImage: TypeFileImage = ""
): Promise<ILinkImage> => {
  return new Promise((resolve, reject) => {
    uploadFile(
      "image",
      [imageFile],
      (error: any, result: any) => {
        if (error) {
          reject(error);
        } else {
          var ulrImage: string;
          var linkImage: ILinkImage;
          if (typeFileImage === "") {
            ulrImage = `${process.env.REACT_APP_BACKEND_URI_IMAGE}/${result[0]?.filename}`;
            linkImage = {
              filename: result[0]?.filename + "",
              type: "image",
              url: ulrImage,
            };
          } else {
            ulrImage = `${process.env.REACT_APP_BACKEND_URI_IMAGE}/${typeFileImage}/${result[0]?.filename}`;
            linkImage = {
              filename: result[0]?.filename + "",
              type: "image",
              url: ulrImage,
            };
          }
          resolve(linkImage);
        }
      },
      typeFileImage
    );
  });
};
export const uploadDoc = (files: Blob[]): Promise<ILinkImage> => {
  return new Promise((resolve, reject) => {
    uploadFile("document", files, (error: any, result: any) => {
      if (error) {
        reject(error);
      } else {
        var urlDoc: string;
        var linkImage: ILinkImage;
        {
          urlDoc = `${process.env.REACT_APP_BACKEND_URI_DOCUMENTS}/${result[0]?.filename}`;
          linkImage = {
            filename: result[0]?.filename + "",
            type: "document",
            url: urlDoc,
          };
        }
        resolve(linkImage);
      }
    });
  });
};
