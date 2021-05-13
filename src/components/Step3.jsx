import "./style.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Step3 = () => {
  return (
    <Row className="step align-items-center">
      <Col sm={12} md={6}>
        <div className="step__img-wrapper">
          <img
            className="step__img"
            src="https://www.vlance.vn/img/homepage-new/buoc-3-thanh-toan.png"
            alt=""
          />
        </div>
      </Col>
      <Col>
        <div className="step__title">
          <strong>99,82% khách hàng hài lòng</strong>,
        </div>
        <div className="step__title">
          <strong>Bảo mật thông tin</strong> cá nhân an toàn
        </div>
        <div className="step__sub-title">
          Khách hàng có thể đánh giá Freelancer sau khi hoàn thành việc. Điều
          này có ảnh hưởng đến sự uy tín của Freelancer. Thông tin cá nhân và
          công việc của bạn luôn được bảo mật theo chính sách bảo mật của
          vLanceJob.
        </div>
      </Col>
    </Row>
  );
};

export default Step3;
