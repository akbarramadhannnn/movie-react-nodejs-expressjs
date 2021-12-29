import React, { memo } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

import NotFoundImage from "../../assets/image/not-found.png";

const Index = ({ data, onRemove = () => {} }) => {
  return (
    <Card className="mb-3">
      <CardBody>
        <Row className="d-flex">
          <div className="col-9">
            <Row>
              <div className="col-md-2 d-flex justify-content-center mb-4">
                <img
                  width="67"
                  height="98"
                  alt="img"
                  src={data.urlImage}
                  onError={(image) => {
                    image.target.src = NotFoundImage;
                    return true;
                  }}
                />
              </div>
              <div className="col-md-10">
                <Col className="d-flex">
                  <CardTitle tag="h5" style={{ marginRight: 5 }}>
                    {data.name}
                  </CardTitle>
                  <p className="text-muted">({data.years})</p>
                </Col>
                <CardSubtitle
                  style={{ fontSize: 14 }}
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Duration: {data.duration} minutes
                </CardSubtitle>
                <CardText>{data.description}</CardText>
              </div>
            </Row>
          </div>
          <div className="col" style={{ textAlign: "right" }}>
            <Button color="danger" onClick={() => onRemove(data.id)}>
              X
            </Button>
          </div>
        </Row>
      </CardBody>
    </Card>
  );
};

export default memo(Index);
