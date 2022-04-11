import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import { Container, Row, Col, Form } from "react-bootstrap";
import JobResult from "./JobResult";
import { fetchJobs } from "../store/actions";

export default function MainSearch() {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);

  const baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchJobs(baseEndpoint, query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          <Link to="/favourites" className="btn btn-primary">
            Favourites
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.elements.map((jobData) => (
            <JobResult key={uniqid()} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

