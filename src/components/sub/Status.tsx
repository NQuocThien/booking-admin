import { ApolloError } from "@apollo/client";
import { Badge, Spinner } from "react-bootstrap";
interface IProp {
  loading: boolean;
  error: ApolloError | undefined;
}

function StatusCpn({ loading, error }: IProp) {
  if (error) console.error(error);
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
