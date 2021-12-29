import React, { Fragment, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
  Row,
  Form,
} from "reactstrap";

import { ApiAddMovie } from "../../api/movie";

import DataGenre from "../../data/DataGenre";

const Index = () => {
  const [value, setValue] = useState({
    title: "",
    genre: [],
    rating: "",
    duration: "",
    quality: "",
    trailer: "",
    watch: "",
  });
  const [error, setError] = useState({
    title: "",
    genre: "",
    rating: "",
    duration: "",
    quality: "",
    trailer: "",
    watch: "",
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

  const handleChangeGenre = useCallback(
    (e, data) => {
      setError((oldState) => ({
        ...oldState,
        genre: "",
      }));
      const clickedGenre = value.genre.indexOf(data);
      const newStateCheckedGenre = [...value.genre];
      if (clickedGenre === -1) {
        newStateCheckedGenre.push(data);
      } else if (clickedGenre !== -1) {
        newStateCheckedGenre.splice(clickedGenre, 1);
      }
      setValue((oldState) => ({
        ...oldState,
        genre: newStateCheckedGenre,
      }));
    },
    [value]
  );

  const handleSaveMovie = useCallback(
    (e) => {
      const payload = {
        title: value.title,
        genre: value.genre,
        rating: value.rating,
        duration: value.duration,
        quality: value.quality,
        trailer: value.trailer,
        watch: value.watch,
      };
      ApiAddMovie(payload).then((response) => {
        if (response.status === 400) {
          const field = response.result.field;
          setError((oldState) => ({
            ...oldState,
            [field]: response.message,
          }));
        } else if (response.status === 201) {
          document.getElementById("form-add-movie").reset();
          setSuccess("Movie saved successfully");
          setValue({
            title: "",
            genre: [],
            rating: "",
            duration: "",
            quality: "",
            trailer: "",
            watch: "",
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

        <Form id="form-add-movie">
          <FormGroup>
            <Label>Title</Label>
            <Input
              value={value.title}
              name="title"
              placeholder="title movie"
              type="text"
              onChange={handleChangeInput}
            />
            {error.title && <p className="text-danger">{error.title}</p>}
          </FormGroup>

          <FormGroup>
            <Col md="12">
              <Label>Genre</Label>
            </Col>
            <Col md="12">
              <Row>
                {DataGenre.map((data, i) => (
                  <Col md="4" key={i}>
                    <FormGroup check inline>
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        onChange={(e) => handleChangeGenre(e, data)}
                      />
                      <Label className="form-check-label">{data}</Label>
                    </FormGroup>
                  </Col>
                ))}
              </Row>
            </Col>
            {error.genre && <p className="text-danger">{error.genre}</p>}
          </FormGroup>

          <FormGroup>
            <Label>Rating</Label>
            <Input
              value={value.rating}
              name="rating"
              placeholder="rating movie"
              type="number"
              onChange={handleChangeInput}
            />
            {error.rating && <p className="text-danger">{error.rating}</p>}
          </FormGroup>

          <FormGroup>
            <Label>Duration (minute)</Label>
            <Input
              value={value.duration}
              name="duration"
              placeholder="duration movie"
              type="text"
              onChange={handleChangeInput}
            />
            {error.duration && <p className="text-danger">{error.duration}</p>}
          </FormGroup>

          <FormGroup>
            <Label>Quality</Label>
            <Input
              value={value.quality}
              name="quality"
              placeholder="quality movie"
              type="text"
              onChange={handleChangeInput}
            />
            {error.quality && <p className="text-danger">{error.quality}</p>}
          </FormGroup>

          <FormGroup>
            <Label>URL Trailer</Label>
            <Input
              value={value.trailer}
              name="trailer"
              placeholder="trailer movie"
              type="text"
              onChange={handleChangeInput}
            />
            {error.trailer && <p className="text-danger">{error.trailer}</p>}
          </FormGroup>

          <FormGroup>
            <Label>URL Watch</Label>
            <Input
              value={value.watch}
              name="watch"
              placeholder="watch movie"
              type="text"
              onChange={handleChangeInput}
            />
            {error.watch && <p className="text-danger">{error.watch}</p>}
          </FormGroup>
        </Form>

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
