import "./style.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ProjectInfo, OfferForm } from "components";

const Detail = ({ job }) => {
  return (
    <div className="detail">
      <Container fluid>
        <Row>
          <Col md={6} xs={12} className="p-0">
            <h2 className="detail__title">{job.title}</h2>
            <div className="detail__description">{job.description}</div>
          </Col>
          <Col md={1} xs={12}></Col>
          <Col md={5} xs={12} className="p-0">
            <ProjectInfo job={job} />
          </Col>
        </Row>
      </Container>
      <OfferForm></OfferForm>
    </div>
  );
};

export default Detail;
