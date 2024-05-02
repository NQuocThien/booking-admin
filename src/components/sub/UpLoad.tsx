import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { ILinkImage } from "src/assets/contains/item-interface";
import { formatFileSize } from "src/utils/tools";
import { uploadMultiFile } from "src/utils/upload";
import { showToast } from "./toasts";

interface IProps {
  onSave: (fileLink: ILinkImage[]) => void;
}
function Upload({ onSave }: IProps) {
  const [files, setFiles] = useState<File[]>([]);
  const handleUpload = () => {
    uploadMultiFile("document", files, (error, result) => {
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
        console.log("test result: ", linkFile);
        showToast("Đã upload các file");
        onSave(linkFile);
        setFiles([]);
      }
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const acceptedFiles = event.target.files;
    const max = 5;

    if (acceptedFiles && files.length === 0) {
      const filesArray = Array.from(acceptedFiles);
      if (filesArray.length > 5) {
        alert(`Vui lòng không chọn quá ${max} file.`);
        event.target.value = "";
        return;
      }
      setFiles(filesArray);
    } else if (acceptedFiles && files.length > 0) {
      const filesArray = Array.from(acceptedFiles);
      if (filesArray.length + files.length > 5) {
        alert(`Vui lòng không chọn quá ${max} file.`);
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
          Tải lên
        </Button>
      </div>
    </div>
  );
}
export default Upload;
