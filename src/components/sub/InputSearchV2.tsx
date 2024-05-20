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
import { FaCheckCircle, FaSortAlphaDown } from "react-icons/fa";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import { Sort } from "src/assets/contains/item-interface";
import { ApolloError } from "@apollo/client";
import StatusCpn from "./Status";
import { TiCancel } from "react-icons/ti";

interface Iprop {
  onSearch: (search: string) => void;
  onCancel: (cancel: boolean) => void;
  loading?: boolean;
  error?: ApolloError | undefined;
}

const SearchInputCpnV2 = ({
  onSearch,
  onCancel,
  loading = undefined,
  error = undefined,
}: Iprop) => {
  const [value, setValue] = useState<string>("");
  const [cancel, setCancel] = useState<boolean>(false);
  return (
    <div className="d-flex gap-3">
      <Form
        className="col-10"
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
      <ButtonGroup className="mb-3">
        <ToggleButton
          size="sm"
          id={`radio-anpha-down`}
          type="radio"
          variant="outline-success"
          name="radio"
          value={"false"}
          checked={!cancel}
          onChange={() => {
            setCancel(false);
            onCancel(false);
          }}>
          <FaCheckCircle />
        </ToggleButton>
        <ToggleButton
          size="sm"
          id={`radio-anpha-down-alt`}
          type="radio"
          variant="outline-danger"
          name="radio"
          value={"true"}
          checked={cancel}
          onChange={() => {
            setCancel(true);
            onCancel(true);
          }}>
          <TiCancel />
        </ToggleButton>
      </ButtonGroup>
    </div>
  );
};

export default SearchInputCpnV2;
