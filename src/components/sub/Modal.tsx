import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
interface Iprops {
  children: React.ReactElement;
  closeButton?: boolean;
  openRequest: boolean;
  handleSave: () => void;
  handleClose: () => void;
  headerText: string;
  fullscreen?: string | true | undefined;
  onlySclose?: boolean;
  textButtonClose?: string;
  textButtonSave?: string;
}
function ModalCpn({
  children,
  closeButton = true,
  openRequest,
  handleSave,
  headerText,
  handleClose,
  onlySclose = false,
  fullscreen = undefined,
  textButtonSave = undefined,
  textButtonClose = undefined,
}: Iprops) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(openRequest);
  }, [openRequest]);
  return (
    <>
      <Modal show={show} onHide={handleClose} fullscreen={fullscreen}>
        <Modal.Header closeButton={closeButton}>
          <Modal.Title>{headerText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {(textButtonClose && textButtonClose) || "Đóng"}
          </Button>
          {!onlySclose && (
            <Button variant="primary" onClick={handleSave}>
              {(textButtonSave && textButtonSave) || "Lưu thay đổi"}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCpn;
