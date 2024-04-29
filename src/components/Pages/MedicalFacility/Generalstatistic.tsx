import { Badge, Col, Spinner } from "react-bootstrap";
import React, { ReactElement } from "react";
import style from "src/assets/scss/components/GeneralStatistic.module.scss";
import { IconBaseProps } from "react-icons";
import { Row } from "react-bootstrap";
import { FaDotCircle } from "react-icons/fa";
interface IProps {
  title: string;
  number: number;
  icons: React.ComponentType<IconBaseProps> | undefined;
  pending?: boolean;
  loading?: boolean;
  active?: boolean;
}
function GeneralStatistic(props: IProps) {
  const {
    title,
    number,
    icons,
    pending = false,
    loading = false,
    active = false,
  } = props;
  const Icon = icons;
  return (
    <div
      className={`p-2 ${pending && style.pending} ${active && style.active}`}>
      <Row
        className={`${style.component} ${
          pending && style.pending
        }   align-items-center`}>
        <Col className="col-8 p-2">
          <h5>{title}</h5>
          <div className="ms-2 ">
            <span className="fs-6 me-2">{pending && "Đang chờ:"}</span>
            {loading && <Spinner variant="primary" size="sm"></Spinner>}
            {!loading && <span className="fs-5 fw-bold">{number}</span>}
          </div>
        </Col>
        {Icon && (
          <Col className="  ">
            <div className={`${style.icon} position-relative`}>
              <Icon style={{ fontSize: 32 }} />
              {pending && (
                <div className="position-absolute top-0 end-0">
                  {number > 0 && <FaDotCircle className="text-danger fs-6" />}
                </div>
              )}
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
}
export default GeneralStatistic;
