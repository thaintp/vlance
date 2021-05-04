import "./style.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Step2 = () => {
  return (
    <Row className="step align-items-center">
      <Col sm={{ order: "last" }} md={{ order: "first" }}>
        <div className="step__title">
          Kết nối <strong>nhanh chóng</strong>,
        </div>
        <div className="step__title">
          <strong>Rút ngắn thời gian</strong> tìm nhân sự
        </div>
        <div className="step__sub-title">
          vLanceJob kết nối bạn với Freelancer/Cộng tác viên trên lãnh thổ Việt
          Nam và quốc tế. Công việc của bạn sẽ nhanh chóng được giải quyết với
          chất lượng cao.
        </div>
      </Col>
      <Col xs={{ span: 12, order: "first" }} md={{ span: 6, order: "last" }}>
        <div className="step__img-wrapper">
          <img
            className="step__img"
            src="https://www.vlance.vn/img/homepage-new/buoc-2-lam-viec.png"
            alt=""
          />
        </div>
      </Col>
    </Row>
  );
};

export default Step2;
