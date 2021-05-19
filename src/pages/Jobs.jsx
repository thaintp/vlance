import "./style.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";

import { Category, Filter, JobList, CustomPagination } from "components";
import JobService from "services/job";
import useQuery from "hooks/useQuery";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPages, setCurrentPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(100);
  const [category, setCategory] = useState(undefined);
  const query = useQuery();
  const type = query.get("type");
  const name = query.get("name");

  const onPageChange = (page_data) => {
    const { currentPage, totalPages, pageLimit } = page_data;
    setCurrentPages(currentPage);
  };

  useEffect(() => {
    JobService.get({
      page: currentPages,
      category_id: category,
      job_type: type,
      contain_key: name,
    }).then((data) => {
      setJobs(data?.data);
      const { total } = data?.meta;
      setTotalRecords(total);
    });
  }, [currentPages, category, type]);

  return (
    <div
      className="jobs-page not-fluid"
      style={{
        paddingBottom: "100px",
      }}
    >
      <Container fluid>
        <Row>
          <Col className="jobs-page__sidebar" xs={2}>
            <Category onChange={(item) => setCategory(item.id)} />
            <hr />
            <Filter />
          </Col>
          <Col xs={10} className="jobs-page__content">
            <Container fluid>
              <Row>
                <JobList jobs={jobs}></JobList>
              </Row>
              <Row>
                <div
                  style={{
                    marginLeft: "20px",
                    marginTop: "10px",
                  }}
                >
                  <CustomPagination
                    key={totalRecords}
                    totalRecords={totalRecords}
                    pageLimit={10}
                    pageNeighbours={1}
                    onPageChanged={(page_data) => onPageChange(page_data)}
                  />
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jobs;
