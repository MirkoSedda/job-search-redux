import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import uniqid from "uniqid";
import { useParams } from "react-router-dom";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);

  const params = useParams();

  useEffect(() => {
    getJobs();
    //eslint-disable-next-line
  }, []);

  const url = "https://strive-jobs-api.herokuapp.com/jobs?company=";

  const getJobs = async () => {
    const response = await fetch(url + params.companyName);
    const { data } = await response.json();

    setJobs(data);
  };

  return (
    <Container>
      <Row>
        <Col>
          {jobs.map((job) => (
            <Job key={uniqid()} data={job} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
