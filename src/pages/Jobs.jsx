import "./style.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Category, Filter, Pagination, SortBy } from "components";

const Jobs = () => {
  return (
    <div className="jobs-page">
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
                <Row className="jobs-page__content__title">
                  <div className="jobs-page__sortBy">
                    <SortBy />
                  </div>
                  <div className="jobs-page__pagination">
                    <Pagination current={parseInt(1)} max={parseInt(10)} />
                  </div>
                </Row>
                <Row>
                  {/* <jobsList jobs={jobs} /> */}
                  List jobs
                </Row>
                <div className="jobs-page__content">
                  <Pagination current={parseInt(1)} max={parseInt(10)} />
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Jobs;
