// SearchInput.js
import { useState } from "react";
import {
  Form,
  InputGroup,
  FormControl,
  Button,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { IoSearch } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { ApolloError } from "@apollo/client";
import StatusCpn from "./Status";
import { TiCancel } from "react-icons/ti";
import { MdCallMissedOutgoing } from "react-icons/md";

interface Iprop {
  onSearch: (search: string) => void;
  onCancel: (cancel: boolean) => void;
  onMissed: (missed: boolean) => void;
  loading?: boolean;
  error?: ApolloError | undefined;
}

type State = "cancel" | "noCancel" | "missed";

const SearchInputCpnV2 = ({
  onSearch,
  onCancel,
  onMissed,
  loading = undefined,
  error = undefined,
}: Iprop) => {
  const [value, setValue] = useState<string>("");
  const [state, setState] = useState<State>("noCancel");
  return (
    <div className="row">
      <Form
        className="col-8"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(value);
        }}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="basic-search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button variant="outline-secondary" type="submit">
            {!loading && <IoSearch />}
            {loading && <StatusCpn size="sm" error={error} loading={loading} />}
          </Button>
        </InputGroup>
      </Form>
      <ButtonGroup className="mb-3 col">
        <ToggleButton
          size="sm"
          id={`radio-anpha-down`}
          type="radio"
          variant="outline-success"
          name="radio"
          value={"false"}
          checked={state === "noCancel"}
          onChange={() => {
            setState("noCancel");
            onCancel(false);
            onMissed(false);
          }}>
          <FaCheckCircle />
        </ToggleButton>
        <ToggleButton
          size="sm"
          id={`radio-anpha-down-alt`}
          type="radio"
          variant="outline-warning"
          name="radio"
          value={"true"}
          checked={state === "missed"}
          onChange={() => {
            setState("missed");
            onMissed(true);
            onCancel(false);
          }}>
          <MdCallMissedOutgoing />
        </ToggleButton>
        <ToggleButton
          size="sm"
          id={`radio-anpha-down-missed`}
          type="radio"
          variant="outline-danger"
          name="radio"
          value={"true"}
          checked={state === "cancel"}
          onClick={() => {
            onMissed(false);
            setState("cancel");
            onCancel(true);
          }}>
          <TiCancel />
        </ToggleButton>
      </ButtonGroup>
    </div>
  );
};

export default SearchInputCpnV2;
