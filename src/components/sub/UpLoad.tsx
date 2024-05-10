import { useState } from "react";
import { Button } from "react-bootstrap";
import { ILinkImage } from "src/assets/contains/item-interface";
import { formatFileSize } from "src/utils/tools";
import { uploadMultiFile } from "src/utils/upload";
import { showToast } from "./toasts";
import { useAuth } from "src/context/AuthContext";
import { MdFileUpload } from "react-icons/md";
interface IProps {
  checkRole: () => boolean;
  onSave: (fileLink: ILinkImage[]) => void;
  remaining: number;
}
function Upload({ onSave, checkRole, remaining }: IProps) {
  const { checkExpirationToken } = useAuth();
  checkExpirationToken();
  const [files, setFiles] = useState<File[]>([]);

  const handleUpload = async () => {
    if (files.length === 0) {
      showToast("Chưa chọn file ⚠️", "warning");
      return;
    }

    await uploadMultiFile("document", files, (error, result) => {
      if (error) {
        console.error("Lỗi khi tải lên tệp tin:", error);
      } else {
        var linkFile: ILinkImage[] = [];
        result.map((r: any) => {
          linkFile.push({
            filename: r.originalname,
            type: "document",
            url: `${process.env.REACT_APP_BACKEND_URI_DOCUMENTS}/${r?.filename}`,
          });
        });
        showToast("Đã upload các file");
        onSave(linkFile);
        setFiles([]);
      }
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!checkRole()) {
      showToast("Không có quyền thực hiện thao tác này", "warning");
      return;
    }

    const acceptedFiles = event.target.files;

    if (acceptedFiles && files.length === 0) {
      const filesArray = Array.from(acceptedFiles);
      if (!checkFile(filesArray)) {
        alert(`Vui lòng không lưu file quá 5MB`);
        event.target.value = "";
        return;
      }
      if (filesArray.length > remaining) {
        alert(`Vui lòng không lưu tối đa quá 5 file`);
        event.target.value = "";
        return;
      }
      setFiles(filesArray);
    } else if (acceptedFiles && files.length > 0) {
      const filesArray = Array.from(acceptedFiles);
      if (!checkFile(filesArray)) {
        alert(`Vui lòng không lưu file quá 5MB`);
        event.target.value = "";
        return;
      }
      if (filesArray.length + files.length > remaining) {
        alert(`Vui lòng không lưu tối đa quá 5 file`);
        event.target.value = "";
        return;
      }
      const newFiles = [...files, ...filesArray];
      setFiles(newFiles);
      event.target.value = "";
    }
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const checkFile = (files: File[]): boolean => {
    for (let file of files) {
      if (file.size > 5242880) return false;
    }
    return true;
  };
  return (
    <div>
      <label htmlFor="input-file">Chọn file: </label>
      <input
        id="input-file"
        type="file"
        accept=".pdf,.doc,.docx"
        multiple={true}
        onChange={handleFileChange}
      />
      <div>
        <ul style={{ listStyleType: "none" }}>
          {files.map((file, i) => (
            <li key={i}>
              {i + 1}. {file.name} -- ({formatFileSize(file.size)}){" "}
              <Button
                size="sm"
                variant="light"
                className="text-danger fw-bold"
                onClick={() => handleRemoveFile(i)}>
                x
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-start">
        <Button
          onClick={() => {
            handleUpload();
          }}>
          <MdFileUpload />
          Tải lên
        </Button>
      </div>
    </div>
  );
}
export default Upload;
