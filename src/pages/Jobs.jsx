import "./style.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import Pagination from "react-js-pagination";

import { Category, Filter, JobList, CustomPagination } from "components";
import JobService from "services/job";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPages, setCurrentPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(100);

  const onPageChange = (page_data) => {
    const { currentPage, totalPages, pageLimit } = page_data;
    setCurrentPages(currentPage);
  };

  useEffect(() => {
    JobService.get({ page: currentPages }).then((data) => {
      setJobs(data?.data);
      const { current_page, per_page, total } = data?.meta;
      setTotalRecords(total);
      console.log("Total", total);
    });
  }, [currentPages]);

  return (
    <div className="jobs-page not-fluid">
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
                <CustomPagination
                  key={totalRecords}
                  totalRecords={totalRecords}
                  pageLimit={10}
                  pageNeighbours={1}
                  onPageChanged={(page_data) => onPageChange(page_data)}
                />
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jobs;
