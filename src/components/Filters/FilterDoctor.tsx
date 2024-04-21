import { ApolloError } from "@apollo/client";
import { useState } from "react";
import {
  Form,
  Button,
  ButtonGroup,
  FormControl,
  InputGroup,
  ToggleButton,
} from "react-bootstrap";
import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Sort } from "src/assets/contains/item-interface";
import {
  EAcademicTitle,
  EDegree,
  EGender,
  FilterDoctorInput,
} from "src/graphql/webbooking-service.generated";
import StatusCpn from "../sub/Status";
import { GetEAcademicTitle, GetEDegree } from "src/utils/enum-value";

interface IProps {
  // filter: FilterDoctorInput;
  onChangeFilter: (filter: FilterDoctorInput | undefined) => void;
  onSort: (sort: Sort) => void;
  loading?: boolean;
  error?: ApolloError | undefined;
}
function FilterDoctor(props: IProps) {
  const { onChangeFilter, loading, error, onSort } = props;
  const [filter, setFilter] = useState<FilterDoctorInput>();
  const [sort, setSort] = useState<Sort>("asc");
  const handleChangeGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
    var gender: EGender | undefined = undefined;
    if (e.currentTarget.value === EGender.Male) gender = EGender.Male;
    else if (e.currentTarget.value === EGender.Female) gender = EGender.Female;
    setFilter((pre) => ({
      ...pre,
      gender: gender,
    }));
  };
  const handleChangeAcademiTitle = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    var academicTitle: EAcademicTitle | undefined = undefined;
    switch (e.currentTarget.value) {
      case EAcademicTitle.AssociateProfesso:
        academicTitle = EAcademicTitle.AssociateProfesso;
        break;

      case EAcademicTitle.Professor:
        academicTitle = EAcademicTitle.Professor;
        break;

      default:
        academicTitle = undefined;
    }
    setFilter((pre) => ({ ...filter, academicTitle: academicTitle }));
  };
  const handleChangeDegree = (e: React.ChangeEvent<HTMLSelectElement>) => {
    var degree: EDegree | undefined = undefined;
    switch (e.currentTarget.value) {
      case EDegree.Doctor:
        degree = EDegree.Doctor;
        break;

      case EDegree.DoctorS1:
        degree = EDegree.DoctorS1;
        break;

      case EDegree.DoctorS2:
        degree = EDegree.DoctorS2;
        break;

      case EDegree.Doctorate:
        degree = EDegree.Doctorate;
        break;

      case EDegree.MasterDoctor:
        degree = EDegree.MasterDoctor;
        break;
      default:
        degree = undefined;
    }
    setFilter((pre) => ({ ...filter, degree: degree }));
  };
  const handleChangName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) setFilter((pre) => ({ ...pre, name: e.target.value }));
  };
  return (
    <div className="d-flex gap-3">
      <Form
        className="col-11"
        onSubmit={(e) => {
          e.preventDefault();
          onChangeFilter(filter);
        }}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="basic-search"
            onChange={handleChangName}
          />
          <Form.Select
            // placeholder="Học hàm"
            onChange={handleChangeAcademiTitle}>
            <option value={undefined}>Học hàm</option>
            <option value={EAcademicTitle.Professor}>
              {GetEAcademicTitle.Professor}
            </option>
            <option value={EAcademicTitle.AssociateProfesso}>
              {GetEAcademicTitle.AssociateProfesso}
            </option>
          </Form.Select>
          <Form.Select
            // placeholder="Học vị"
            onChange={handleChangeDegree}>
            <option value={undefined}>Học vị</option>
            <option value={EDegree.Doctor}>{GetEDegree.Doctor}</option>
            <option value={EDegree.DoctorS1}>{GetEDegree.DoctorS1}</option>
            <option value={EDegree.DoctorS2}>{GetEDegree.DoctorS2}</option>
            <option value={EDegree.Doctorate}>{GetEDegree.DoctorS2}</option>
            <option value={EDegree.MasterDoctor}>
              {GetEDegree.MasterDoctor}
            </option>
          </Form.Select>
          <Form.Select
            // placeholder="Giới tính"
            onChange={handleChangeGender}>
            <option value={undefined}>Giới tính</option>
            <option value={EGender.Male}>Nam</option>
            <option value={EGender.Female}>Nữ</option>
          </Form.Select>
          <Button variant="outline-secondary" type="submit">
            {!loading && <IoSearch />}
            {loading && <StatusCpn size="sm" error={error} loading={loading} />}
          </Button>
        </InputGroup>
      </Form>
      <ButtonGroup className="mb-3 col ">
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
}
export default FilterDoctor;
