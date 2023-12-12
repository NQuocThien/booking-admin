import { ChangeEvent, useRef } from "react";
import { FormControl, Image } from "react-bootstrap";
interface IProp {
  required?: boolean;
  src: string;
  imageFile: Blob | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  shape?: "rounded" | "roundedCircle" | "thumbnail";
  width?: number | string;
  height?: number | string;
  //   ref: RefObject<HTMLInputElement>;
}
function ImageUpload({
  src,
  name,
  onChange,
  shape = "rounded",
  width = 50,
  height = 35,
  imageFile,
  required = false,
}: IProp) {
  const ref = useRef<HTMLInputElement | null>(null);
  return (
    <>
      <Image
        // className={s.image_header}
        style={{ height: height, width: width }}
        src={(imageFile && URL.createObjectURL(imageFile)) || src}
        rounded={shape === "rounded"}
        roundedCircle={shape === "roundedCircle"}
        thumbnail={shape === "thumbnail"}
        onClick={() => ref.current && ref.current.click()}
      />
      <FormControl
        required={required}
        type="file"
        accept="image/*"
        name={name}
        ref={ref}
        onChange={onChange}
        style={{ display: "none" }}
      />
      {required && (
        <FormControl.Feedback type="invalid">
          Vui lòng chọn ảnh
        </FormControl.Feedback>
      )}
    </>
  );
}
export default ImageUpload;
