import "./style.scss";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { ImAttachment } from "react-icons/im";
import { ReviewButton } from "components";
import { useState, useEffect } from "react";
import JobService from "services/job";
import { toVND } from "utils/number";
import { useSelector } from "react-redux";
const Conversation = ({ job_id }) => {
  //id job_id
  const { account } = useSelector((state) => state.auth);
  const [job, setJob] = useState({});
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    JobService.getByID(parseInt(job_id)).then((data) => setJob(data.data));
    JobService.getJobConversation({ job_id: job_id }).then((data) =>
      setConversations(data.data)
    );
  }, [job_id]);

  return (
    <div className="conversation">
      <Row>
        <Col md={12} lg={3}>
          <JobInfo job={job} />
          <ReviewBox />
        </Col>

        <Col>
          <ChatBox />
          <ChatHistory conversations={conversations} />
        </Col>
      </Row>
    </div>
  );
};

const JobInfo = ({ job }) => {
  return (
    <div className="conversation__job-info">
      <div className="conversation__job-info__title">Thông tin việc làm</div>
      <Row>
        <Col className="conversation__job-info__field-label">ID dự án</Col>
        <Col className="conversation__job-info__field-value">{job?.id}</Col>
      </Row>
      <Row>
        <Col className="conversation__job-info__field-label">Địa điểm</Col>
        <Col className="conversation__job-info__field-value">Toàn quốc</Col>
      </Row>
      <Row>
        <Col className="conversation__job-info__field-label">
          Ngân sách dự kiến
        </Col>
        <Col className="conversation__job-info__field-value">
          {toVND(job?.expect_balance)}
        </Col>
      </Row>
      <Row>
        <Col className="conversation__job-info__field-label">
          Ngân sách trúng thầu
        </Col>
        <Col className="conversation__job-info__field-value">
          {toVND(job?.freelancer_applicant?.balance)}
        </Col>
      </Row>
      <Row>
        <Col className="conversation__job-info__field-label">
          Số ngày dự kiến
        </Col>
        <Col className="conversation__job-info__field-value">
          {job?.freelancer_applicant?.expect_day} ngày
        </Col>
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

const ChatHistory = ({ conversations }) => {
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

      {conversations?.map((item, idx) => (
        <MessageItem key={idx} conv={item} />
      ))}
    </div>
  );
};

const MessageItem = ({ conv }) => {
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
              {conv?.from_user_detail?.user_information?.fullname}
            </div>
          </Link>
          <div className="conversation__message-item__message">
            {conv?.message}
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
