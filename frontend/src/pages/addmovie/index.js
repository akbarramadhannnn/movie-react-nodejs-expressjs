import React, { Fragment, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Col, FormGroup, Label, Input, Button, Alert } from "reactstrap";

import { ApiAddMovie } from "../../api/movie";

const Index = () => {
  const [value, setValue] = useState({
    name: "",
    description: "",
    years: "",
    duration: "",
    urlImage: "",
  });
  const [error, setError] = useState({
    name: "",
    description: "",
    years: "",
    duration: "",
    urlImage: "",
  });
  const [success, setSuccess] = useState("");

  const handleChangeInput = useCallback((e) => {
    const { name, value } = e.target;
    setValue((oldState) => ({
      ...oldState,
      [name]: value,
    }));
    setError((oldState) => ({
      ...oldState,
      [name]: "",
    }));
  }, []);

  const handleSaveMovie = useCallback(
    (e) => {
      const payload = {
        name: value.name,
        description: value.description,
        years: value.years,
        duration: value.duration,
        urlImage: value.urlImage,
      };
      ApiAddMovie(payload).then((response) => {
        if (response.status === 400) {
          const field = response.result.field;
          setError((oldState) => ({
            ...oldState,
            [field]: response.message,
          }));
        } else if (response.status === 201) {
          setSuccess("Movie saved successfully");
          setValue({
            name: "",
            description: "",
            years: "",
            duration: "",
            urlImage: "",
          });
        }
      });
    },
    [value]
  );

  return (
    <Fragment>
      <Col md="12">
        <h2>Add Movie</h2>
      </Col>

      <Col md="12">
        {success && (
          <Alert color="success" toggle={() => setSuccess("")}>
            {success}
          </Alert>
        )}

        <FormGroup>
          <Label>Name</Label>
          <Input
            value={value.name}
            name="name"
            placeholder="movie name"
            type="text"
            onChange={handleChangeInput}
          />
          {error.name && <p className="text-danger">{error.name}</p>}
        </FormGroup>

        <FormGroup>
          <Label>Description</Label>
          <Input
            value={value.description}
            name="description"
            placeholder="description movie"
            type="textarea"
            onChange={handleChangeInput}
          />
          {error.description && (
            <p className="text-danger">{error.description}</p>
          )}
        </FormGroup>

        <FormGroup>
          <Label>Years</Label>
          <Input
            value={value.years}
            name="years"
            placeholder="years movie"
            type="number"
            onChange={handleChangeInput}
          />
          {error.years && <p className="text-danger">{error.years}</p>}
        </FormGroup>

        <FormGroup>
          <Label>Duration (minute)</Label>
          <Input
            value={value.duration}
            name="duration"
            placeholder="duration movie"
            type="number"
            onChange={handleChangeInput}
          />
          {error.duration && <p className="text-danger">{error.duration}</p>}
        </FormGroup>

        <FormGroup>
          <Label>URL Image</Label>
          <Input
            value={value.urlImage}
            name="urlImage"
            placeholder="url image movie"
            type="text"
            onChange={handleChangeInput}
          />
          {error.urlImage && <p className="text-danger">{error.urlImage}</p>}
        </FormGroup>

        <Col className="d-flex">
          <Col md="auto" style={{ marginRight: 20 }}>
            <Link to="/" className="btn btn-warning">
              Back
            </Link>
          </Col>

          <Col md="auto">
            <Button color="primary" onClick={handleSaveMovie}>
              Save
            </Button>
          </Col>
        </Col>
      </Col>
    </Fragment>
  );
};

export default Index;
