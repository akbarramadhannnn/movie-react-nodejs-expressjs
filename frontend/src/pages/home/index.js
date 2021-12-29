import React, { useState, useEffect, useCallback, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Input,
  Spinner,
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";

import { ApiGetMovie, ApiDeleteMovie } from "../../api/movie";

import { Card } from "../../components";

const Index = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [movieId, setMovieId] = useState("");
  const [modal, setModal] = useState({
    isShow: false,
    title: "",
    text: "",
  });

  useEffect(() => {
    let timeout;
    setIsLoading(true);

    timeout = setTimeout(() => {
      ApiGetMovie(search).then((response) => {
        if (response.status === 200) {
          setDataMovie(response.result);
          setIsLoading(false);
        }
      });
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [search]);

  const handleChangeSearch = useCallback((e) => {
    const value = e.target.value;
    setSearch(value);
  }, []);

  const handleRemoveMovie = useCallback(() => {
    ApiDeleteMovie(movieId).then((response) => {
      if (response.status === 200) {
        const index = dataMovie.map((d) => d.id).indexOf(movieId);
        const oldData = [...dataMovie];
        oldData.splice(index, 1);
        setDataMovie(oldData);
        setMessage("Movie deleted successfully");
        setModal({
          isShow: false,
          title: "",
          text: "",
        });
        setMovieId("");
      }
    });
  }, [movieId, dataMovie]);

  const handleClickRemove = useCallback((movieId) => {
    setMovieId(movieId);
    setModal({
      isShow: true,
      title: "Delete Confirmation",
      text: "Are you sure want to delete this movie ?",
    });
  }, []);

  return (
    <Fragment>
      <Col md="12" className="mb-4">
        <Link to="/add-movie" className="btn btn-primary">
          Add Movie
        </Link>
      </Col>

      <Col md="12">
        <Input
          value={search}
          onChange={handleChangeSearch}
          placeholder="Search by movie name"
        />
      </Col>

      {message && (
        <Col md="12" className="mt-3">
          <Alert color="success" toggle={() => setMessage("")}>
            {message}
          </Alert>
        </Col>
      )}

      <Col md="12" className="mt-4">
        <h2>Movie List</h2>

        {isLoading && (
          <Col className="text-center">
            <Spinner>Loading...</Spinner>
          </Col>
        )}

        {!isLoading && (
          <Fragment>
            {!dataMovie.length > 0 && (
              <p className="text-center text-muted">Movie List Not Found</p>
            )}
            {dataMovie.length > 0 &&
              dataMovie.map((d, i) => {
                return (
                  <Card
                    key={i}
                    data={d}
                    onRemove={(movieId) => handleClickRemove(movieId)}
                  />
                );
              })}
          </Fragment>
        )}
      </Col>

      <Modal isOpen={modal.isShow} toggle={function noRefCheck() {}}>
        <ModalHeader toggle={function noRefCheck() {}}>
          {modal.title}
        </ModalHeader>
        <ModalBody>{modal.text}</ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              setModal({
                isShow: false,
                title: "",
                text: "",
              });
              setMovieId("");
            }}
          >
            Cancel
          </Button>
          <Button color="primary" onClick={handleRemoveMovie}>
            Yes
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default Index;
