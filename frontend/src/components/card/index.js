import React, { Fragment, memo, useCallback, useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const Index = ({ data, onRemove = () => {} }) => {
  const [params, setParams] = useState("");

  useEffect(() => {
    var url = new URL(data.trailer);
    var videoId = url.searchParams.get("v");
    setParams(videoId);
  }, [data]);

  const handleClickWatch = useCallback((link) => {
    window.open(link);
  }, []);

  return (
    <Card className="mb-3">
      <CardBody>
        <Row>
          <Col md="12" style={{ textAlign: "right", marginBottom: "20px" }}>
            <Button color="danger" onClick={() => onRemove(data.id)}>
              X
            </Button>
          </Col>
          <Col md="12">
            <CardTitle tag="h4" style={{ marginRight: 5 }}>
              {data.title}
            </CardTitle>
            <CardSubtitle
              style={{ fontSize: 14 }}
              className="mb-2 text-muted"
              tag="h6"
            >
              <i className="bi bi-star text-warning"></i> {data.rating} |{" "}
              {data.quality} | {data.duration} |{" "}
              {data.genre.map((g, i) => (
                <Fragment key={i}>
                  {g}
                  {i === data.genre.length - 1 ? "" : ", "}
                </Fragment>
              ))}
            </CardSubtitle>
            <Col md="12 mt-4">
              <h5>Trailer : </h5>
              <iframe
                title={data.title}
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${params}`}
              ></iframe>
            </Col>
          </Col>

          <Col md="12" style={{ textAlign: "right", marginTop: "20px" }}>
            <Button
              color="primary"
              onClick={() => handleClickWatch(data.watch)}
            >
              Watch Movie
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default memo(Index);
