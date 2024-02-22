// SearchInput.js
import React, { ChangeEvent } from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";
interface Iprop {
  value: string;
  onChange: (s: string) => void;
  onSearch: () => void;
}
const SearchInputCpn = ({ value, onChange, onSearch }: Iprop) => {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="basic-addon2"
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
        />
        <Button variant="outline-secondary" type="submit">
          <IoSearch />
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchInputCpn;
