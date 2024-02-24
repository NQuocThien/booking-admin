import { Badge, Spinner } from "react-bootstrap";
interface IProp {
  loading: boolean;
  error: boolean;
}
function StatusCpn({ loading, error }: IProp) {
  return (
    <span>
      {loading && <Spinner size="sm" animation="border" />}
      {error && (
        <Badge pill bg="danger">
          {" "}
          Lỗi{" "}
        </Badge>
      )}
    </span>
  );
}
export default StatusCpn;
