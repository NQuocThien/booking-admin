import { ApolloError } from "@apollo/client";
import { useState } from "react";
import { Form, Button, FormControl, InputGroup, Row } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";
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
  loading?: boolean;
  error?: ApolloError | undefined;
}
function FilterDoctorShort(props: IProps) {
  const { onChangeFilter, loading, error } = props;
  const [filter, setFilter] = useState<FilterDoctorInput>();
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
    if (e.target.value)
      setFilter((pre) => ({ ...pre, doctorName: e.target.value }));
    else setFilter((pre) => ({ ...pre, doctorName: undefined }));
  };
  return (
    <Row className="d-flex gap-3">
      <Form
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          onChangeFilter(filter);
        }}>
        <Row>
          <InputGroup size="sm" className="mb-2">
            <FormControl
              size="sm"
              placeholder="Tên..."
              aria-label="Search"
              aria-describedby="basic-search"
              onChange={handleChangName}
            />
          </InputGroup>
        </Row>
        <Row>
          <InputGroup size="sm" className="mb-2">
            <Form.Select onChange={handleChangeAcademiTitle}>
              <option value={undefined}>Học hàm</option>
              <option value={EAcademicTitle.Professor}>
                {GetEAcademicTitle.Professor}
              </option>
              <option value={EAcademicTitle.AssociateProfesso}>
                {GetEAcademicTitle.AssociateProfesso}
              </option>
            </Form.Select>

            <Form.Select onChange={handleChangeDegree}>
              <option value={undefined}>Học vị</option>
              <option value={EDegree.Doctor}>{GetEDegree.Doctor}</option>
              <option value={EDegree.DoctorS1}>{GetEDegree.DoctorS1}</option>
              <option value={EDegree.DoctorS2}>{GetEDegree.DoctorS2}</option>
              <option value={EDegree.Doctorate}>{GetEDegree.DoctorS2}</option>
              <option value={EDegree.MasterDoctor}>
                {GetEDegree.MasterDoctor}
              </option>
            </Form.Select>
          </InputGroup>
        </Row>

        <Row>
          <InputGroup className="mb-2" size="sm">
            <Form.Select
              // placeholder="Giới tính"
              onChange={handleChangeGender}>
              <option value={undefined}>Giới tính</option>
              <option value={EGender.Male}>Nam</option>
              <option value={EGender.Female}>Nữ</option>
            </Form.Select>
            <Button variant="outline-secondary" type="submit">
              {!loading && <IoSearch />}
              {loading && (
                <StatusCpn size="sm" error={error} loading={loading} />
              )}
            </Button>
          </InputGroup>
        </Row>
      </Form>
    </Row>
  );
}
export default FilterDoctorShort;
