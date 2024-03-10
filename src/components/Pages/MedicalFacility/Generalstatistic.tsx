import { Col } from "react-bootstrap";
import React, { ReactElement } from "react";
import style from "src/assets/scss/components/GeneralStatistic.module.scss";
import { IconBaseProps } from "react-icons";
import { Row } from "react-bootstrap";
interface IProps {
  title: string;
  number: number;
  icons: React.ComponentType<IconBaseProps> | undefined;
}
function GeneralStatistic(props: IProps) {
  const { title, number, icons } = props;
  const Icon = icons;
  return (
    <div className={`p-2`}>
      <Row className={`${style.component} align-items-center`}>
        <Col className="col-8 p-2">
          <h5>{title}</h5>
          <p className="fs-4 ms-2">{number}</p>
        </Col>
        {Icon && (
          <Col>
            <div className={`${style.icon}`}>
              <Icon style={{ fontSize: 32 }} />
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
}
export default GeneralStatistic;
