import "./style.scss";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { ImAttachment } from "react-icons/im";
import { ReviewButton } from "components";

const Conversation = () => {
  return (
    <div className="conversation">
      <Row>
        <Col md={12} lg={3}>
          <JobInfo />
          <ReviewBox />
        </Col>

        <Col>
          <ChatBox />
          <ChatHistory />
        </Col>
      </Row>
    </div>
  );
};

const JobInfo = () => {
  return (
    <div className="conversation__job-info">
      <div className="conversation__job-info__title">Thông tin việc làm</div>
      <Row>
        <Col className="conversation__job-info__field-label">ID dự án</Col>
        <Col className="conversation__job-info__field-value">37668</Col>
      </Row>
      <Row>
        <Col className="conversation__job-info__field-label">Địa điểm</Col>
        <Col className="conversation__job-info__field-value">Toàn quốc</Col>
      </Row>
      <Row>
        <Col className="conversation__job-info__field-label">
          Ngân sách dự kiến
        </Col>
        <Col className="conversation__job-info__field-value">8.000.000 VNĐ</Col>
      </Row>
      <Row>
        <Col className="conversation__job-info__field-label">
          Ngân sách trúng thầu
        </Col>
        <Col className="conversation__job-info__field-value">8.000.000 VNĐ</Col>
      </Row>
      <Row>
        <Col className="conversation__job-info__field-label">Đã đặt cọc</Col>
        <Col className="conversation__job-info__field-value">0 VNĐ</Col>
      </Row>
    </div>
  );
};

const ReviewBox = () => {
  return (
    <div className="conversation__review-box">
      <div className="conversation__review-box__title">
        Bạn đánh giá thế nào về khách hàng?
      </div>
      <div className="conversation__review-box__btn-wrapper">
        <ReviewButton variant="warning" text="Nhận xét khách hàng" />
      </div>
      <div className="conversation__review-box__sub-title">
        Gửi <strong>nhận xét về khách hàng</strong> giúp bạn tăng thêm nhiều cơ
        hội về việc làm hơn
      </div>
    </div>
  );
};

const ChatBox = () => {
  return (
    <form action="" className="conversation__chat-box">
      <textarea
        name="message"
        rows="4"
        cols="1000"
        className="form-textarea"
        placeholder="Gửi tin nhắn ở đây"
      ></textarea>
      <Row>
        <Col>
          <Link>
            <ImAttachment />
          </Link>
        </Col>
        <Col xs="auto">
          <Button variant="success">Gửi</Button>
        </Col>
      </Row>
    </form>
  );
};

const ChatHistory = () => {
  const fake = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <Row>
        <Col xs={2} className="conversation__chat-history__header">
          NGƯỜI GỬI
        </Col>
        <Col className="conversation__chat-history__header">LỜI NHẮN</Col>
        <Col xs="auto" className="conversation__chat-history__header">
          THỜI GIAN
        </Col>
      </Row>

      <hr />

      {fake.map(() => (
        <MessageItem />
      ))}
    </div>
  );
};

const MessageItem = () => {
  return (
    <div>
      <Row className="conversation__message-item">
        <Col xs={2}>
          <Link>
            <img
              className="conversation__message-item__avatar"
              src="https://i.loli.net/2021/04/16/BnZIhjMmzTDecEH.jpg"
              alt="avatar"
            />
          </Link>
        </Col>
        <Col>
          <Link>
            <div className="conversation__message-item__from-user">
              Đỗ Hồng Nam
            </div>
          </Link>
          <div className="conversation__message-item__message">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </Col>
        <Col xs="auto" className="conversation__message-item__created-at">
          15/05/2021 10:10
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default Conversation;
