import { ApolloError } from "@apollo/client";
import { Badge, Spinner } from "react-bootstrap";
interface IProp {
  loading: boolean;
  error: ApolloError | undefined;
  variant?: "primary" | "success" | "danger" | "light" | "info" | "dark";
  size?: "sm" | undefined;
}

function StatusCpn({
  loading,
  error,
  size = undefined,
  variant = "primary",
}: IProp) {
  if (error) console.error(error);
  return (
    <span>
      {loading && <Spinner size={size} variant={variant} animation="border" />}
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
