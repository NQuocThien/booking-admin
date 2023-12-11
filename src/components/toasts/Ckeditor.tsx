// CKEditorControl.tsx
import React from "react";
import { Form } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface CKEditorControlProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const CKEditorControl: React.FC<CKEditorControlProps> = ({
  label,
  value,
  onChange,
}) => {
  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
    onChange(data);
  };

  return (
    <Form.Group controlId="ckeditorControl" style={{ height: 300 }}>
      <Form.Label>{label}</Form.Label>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onChange={handleEditorChange}
      />
      <style>{`
    #ckeditorControl .ck-editor {
      height: 100%;
    }
  `}</style>
    </Form.Group>
  );
};

export default CKEditorControl;
