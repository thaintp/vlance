import "./style.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Step1 = () => {
  return (
    <Row className="step align-items-center">
      <Col sm={12} md={6}>
        <div className="step__img-wrapper">
          <img
            className="step__img"
            src="https://www.vlance.vn/img/homepage-new/buoc-1-tiep-can-chuyen-gia.png"
            alt=""
          />
        </div>
      </Col>
      <Col>
        <div className="step__title">
          Đăng dự án <strong>không mất phí</strong>,
        </div>
        <div className="step__title">
          Tiếp cận ngay <strong>chuyên gia</strong>
        </div>
        <div className="step__sub-title">
          Bạn sẽ nhanh chóng nhận được chào giá từ cộng đồng +400.000
          Freelancer/Cộng tác viên. Chủ động phỏng vấn các ứng viên thông qua hệ
          thống tin nhắn trực tuyến để tìm người phù hợp nhất với yêu cầu của
          bạn.
        </div>
      </Col>
    </Row>
  );
};

export default Step1;
