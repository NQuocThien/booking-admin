// SearchInput.js
import { useState } from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";
import { Sort } from "src/assets/contains/item-interface";
import { ApolloError } from "@apollo/client";
import StatusCpn from "../sub/Status";

interface Iprop {
  onSearch: (search: string) => void;
  loading?: boolean;
  error?: ApolloError | undefined;
}

const FilterShort = ({
  onSearch,
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
        <InputGroup size="sm" className="mb-3">
          <FormControl
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="basic-search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button variant="outline-secondary" type="submit">
            <IoSearch />
          </Button>
        </InputGroup>
      </Form>
      {loading && <StatusCpn error={error} loading={loading} />}
    </div>
  );
};

export default FilterShort;
