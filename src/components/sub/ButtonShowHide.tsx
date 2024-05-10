import { ApolloError } from "@apollo/client";
import { ButtonGroup, ToggleButton, Button, Row } from "react-bootstrap";
import { EtypeService } from "src/utils/enum";
import StatusCpn from "./Status";

interface IPropButtonGroupCheck {
  show: boolean;
  setShow: (show: boolean) => void;
  loading?: boolean;
  error?: ApolloError | undefined;
}
const ButtonGroupCheck = (props: IPropButtonGroupCheck) => {
  const { show, setShow, loading = undefined, error = undefined } = props;
  return (
    <div className="float-end">
      <Row className="d-flex gap-3">
        <ButtonGroup className="">
          <Button
            size="sm"
            variant={"outline-secondary"}
            name="radio"
            value={"hide"}
            active={show === false}
            onClick={(e) => setShow(false)}>
            Ẩn
          </Button>
          <Button
            size="sm"
            variant={"outline-success"}
            name="radio"
            value={"hide"}
            active={show === true}
            onClick={(e) => setShow(true)}>
            Hiện{" "}
            {loading !== undefined && (
              <StatusCpn
                variant="light"
                size="sm"
                loading={loading}
                error={error}
              />
            )}
          </Button>
        </ButtonGroup>
      </Row>
    </div>
  );
};
export default ButtonGroupCheck;
