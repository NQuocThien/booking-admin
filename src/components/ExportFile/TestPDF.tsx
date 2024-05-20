import React, { useRef } from "react";
import html2pdf from "html2pdf.js";

const HtmlToPdfConverter = () => {
  const elementRef = useRef(null);

  const handleConvertToPdf = () => {
    html2pdf().from(elementRef.current).save();
  };

  return (
    <div>
      <div ref={elementRef}>
        {/* Nội dung HTML bạn muốn chuyển đổi thành PDF */}
        <h1>Hello, World!</h1>
        <p>This is a sample content to convert to PDF.</p>
      </div>
      <button onClick={handleConvertToPdf}>Convert to PDF and Download</button>
    </div>
  );
};

export default HtmlToPdfConverter;
