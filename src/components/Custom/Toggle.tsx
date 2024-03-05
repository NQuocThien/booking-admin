import { forwardRef } from "react";
import { Button } from "react-bootstrap";
import { CiMenuKebab } from "react-icons/ci";

export const CustomToggleCiMenuKebab = forwardRef<
  HTMLButtonElement,
  { onClick: (e: React.MouseEvent<HTMLButtonElement>) => void }
>(({ onClick }, ref) => (
  <Button
    variant="outline-primary"
    size="sm"
    className="mx-5 d-flex  justify-content-center"
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    ref={ref}>
    <CiMenuKebab />
  </Button>
));
