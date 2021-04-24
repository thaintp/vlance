import "./style.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";

import { Category, Filter, Pagination, SortBy, JobList } from "components";
import JobService from "services/job";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    JobService.getAll().then((data) => setJobs(data));
  }, []);
  return (
    <div className="jobs-page">
      <Container fluid>
        <Row>
          <Col className="jobs-page__sidebar" xs={2}>
            <Category />
            <hr />
            <Filter />
          </Col>
          <Col xs={10} className="jobs-page__content">
            <Container fluid>
              {/* <Row>
                  <div className="jobs-page__sortBy">
                    <SortBy />
                  </div>
                  <div className="jobs-page__pagination">
                    <Pagination current={parseInt(1)} max={parseInt(10)} />
                  </div>
                </Row> */}
              <Row>
                <JobList jobs={jobs}></JobList>
              </Row>
              <Row>
                <Pagination current={parseInt(1)} max={parseInt(10)} />
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jobs;
