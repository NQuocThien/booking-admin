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
import { FaSortAlphaDown } from "react-icons/fa";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import { Sort } from "src/assets/contains/item-interface";
import { ApolloError } from "@apollo/client";
import StatusCpn from "./Status";

interface Iprop {
  onSearch: (search: string) => void;
  onSort: (sort: Sort) => void;
  loading?: boolean;
  error?: ApolloError | undefined;
}

const SearchInputCpn = ({
  onSearch,
  onSort,
  loading = undefined,
  error = undefined,
}: Iprop) => {
  const [value, setValue] = useState<string>("");
  const [sort, setSort] = useState<Sort>("asc");
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
          value={sort}
          checked={sort === "asc"}
          onChange={() => {
            setSort("asc");
            onSort("asc");
          }}>
          <FaSortAlphaDown />
        </ToggleButton>
        <ToggleButton
          size="sm"
          id={`radio-anpha-down-alt`}
          type="radio"
          variant="outline-success"
          name="radio"
          value={sort}
          checked={sort === "desc"}
          onChange={() => {
            setSort("desc");
            onSort("desc");
          }}>
          <FaSortAlphaDownAlt />
        </ToggleButton>
      </ButtonGroup>
    </div>
  );
};

export default SearchInputCpn;
