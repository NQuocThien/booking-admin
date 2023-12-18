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
            Đống
          </Button>
          {!onlySclose && (
            <Button variant="primary" onClick={handleSave}>
              Lưu thay đổi
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCpn;
