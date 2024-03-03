import { Session } from "src/graphql/webbooking-service.generated";
import { Button } from "react-bootstrap";

interface IPorp {
  session: Session;
  onClick: (s: Session) => void;
  active?: boolean;
}
function SessionItem(props: IPorp) {
  const { onClick, session, active = false } = props;
  const handleClick = () => {
    onClick(session);
  };
  return (
    <div className="m-1">
      {(active && (
        <Button className="text-nowrap" onClick={handleClick} variant="primary">
          {session.startTime}
          {"-"}
          {session.endTime}
        </Button>
      )) || (
        <Button
          className="text-nowrap"
          size="sm"
          onClick={handleClick}
          variant="outline-primary">
          {session.startTime}
          {"-"}
          {session.endTime}
        </Button>
      )}
    </div>
  );
}
export default SessionItem;
