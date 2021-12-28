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

const Index = ({ data, onRemove = () => {} }) => {
  return (
    <Card className="mb-3">
      <CardBody>
        <Row>
          <Col md="2" className="d-flex justify-content-center">
            <img
              width="67"
              height="98"
              alt="img"
              src={data.urlImage}
            />
          </Col>
          <Col md="8">
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
          </Col>
          <Col md="2" style={{ textAlign: "right" }}>
            <Button color="danger" onClick={() => onRemove(data.id)}>
              X
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default memo(Index);
