import "./style.scss";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";
import { ImAttachment } from "react-icons/im";
import { Review, ReviewButton } from "components";
import { useState, useEffect } from "react";
import JobService from "services/job";
import { toVND } from "utils/number";
import { useSelector } from "react-redux";
import Toast from "utils/toast";
import {
  Button as ReactButton,
  Tabs,
  Tab,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import ReviewService from 'services/review'

const Conversation = ({ job_id }) => {
  //id job_id
  const { account } = useSelector((state) => state.auth);
  const [job, setJob] = useState({});
  const [conversations, setConversations] = useState([]);
  const [message, setMessage] = useState("");
  const [toUser, setToUser] = useState(0);
  const [key, setKey] = useState("chat");
  const [canReview, setCanReview] = useState(false);

  useEffect(() => {
    JobService.getByID(parseInt(job_id)).then((data) => {
      setJob(data.data);
      if (job.id === undefined) {
        return;
      }
      if (job && job.freelancer_id === account.id) {
        setToUser(job.employer_id);
      }
      if (job && job.employer_id === account.id) {
        setToUser(job.freelancer_id);
      }
    });

    JobService.getJobConversation({
      job_id: job_id,
      order_by: "desc",
    }).then((data) => setConversations(data.data));
  }, [job_id]);

  useEffect(() => {
    if (job.status === 4 && (job.employer_id === account.id || job.freelancer_id === account.id)) {
      ReviewService.checkCanReview(job_id, account.id).then(data => setCanReview(!(data?.data)));
    } else {
      setCanReview(false);
    }
  }, [job, account]);

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleSendMessage = () => {
    JobService.sendJobMessage({
      job_id: parseInt(job_id),
      to_user: toUser,
      message: message,
    }).then((res) => {
      if (res.status) {
        Toast.fire({
          icon: "success",
          title: "Gửi tin thành công",
        });
        window.location.reload(false);
      } else {
        Toast.fire({
          icon: "error",
          title: "Gửi tin nhắn thất bại",
        });
      }
    });
  };

  return (
    <div className="conversation">
      <Row>
        <Col md={12} lg={3}>
          <JobInfo job={job} />
          {(job.status !== 4 && job.employer_id === account.id) && <ControlBox job_id={job_id} />}
          {canReview && <ReviewBox job_id={job_id} />}
        </Col>

        <Col>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="chat" title="Chat">
              {/* {//send message} */}
              <form action="#" className="conversation__chat-box">
                <textarea
                  name="message"
                  rows="4"
                  cols="1000"
                  value={message}
                  onChange={onChangeMessage}
                  className="form-textarea"
                  placeholder="Gửi tin nhắn ở đây"
                ></textarea>
                <Row>
                  <Col>
                    <Link to="#">
                      <ImAttachment />
                    </Link>
                  </Col>
                  <Col xs="auto" className="mt-2">
                    <Button variant="success" onClick={handleSendMessage}>
                      Gửi
                    </Button>
                  </Col>
                </Row>
              </form>

              {/* {//end send message} */}

              <ChatHistory conversations={conversations} />
            </Tab>
          </Tabs>
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
        <Col className="conversation__job-info__field-label">
          Người trúng thầu
        </Col>
        <Col className="conversation__job-info__field-value">
          <b>{job?.freelancer_detail?.user_information?.fullname}</b>
        </Col>
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
          {job?.freelancer_applicant?.expect_day ?? "0"} ngày
        </Col>
      </Row>
    </div>
  );
};

const ReviewBox = ({ job_id }) => {
  return (
    <div className="conversation__review-box">
      {/* <div className="conversation__review-box__title">
      Nhận xét công việc
      </div> */}
      <div className="conversation__review-box__btn-wrapper">
        <ReviewButton variant="warning" text="Nhận xét công việc" job_id={job_id} />
      </div>
      <div className="conversation__review-box__sub-title">
        Gửi <strong>nhận xét về công việc</strong> giúp bạn tăng thêm nhiều cơ
        hội việc làm hơn
      </div>
    </div>
  );
};
const ControlBox = ({ job_id }) => {
  const handleCancelJob = () => {
    Swal.fire({
      title: "Hủy dự án?",
      text: "Bạn có chắc hủy dự án",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.value) {
        JobService.cancelJob({
          job_id: parseInt(job_id),
        }).then((res) => {
          if (res.status) {
            Toast.fire({
              icon: "success",
              title: "Xác nhận hủy thành công",
            });
            window.location.reload(false);
          } else {
            Toast.fire({
              icon: "error",
              title: "Hủy thất bại ," + res.message,
            });
          }
        });
      }
    });
  };

  const handleFinishJob = () => {
    Swal.fire({
      title: "Hoàn thành dự án?",
      text: "Bạn có chắc hoàn thành dự án",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.value) {
        JobService.finishJob({
          job_id: parseInt(job_id),
        }).then((res) => {
          if (res.status) {
            Toast.fire({
              icon: "success",
              title: "Xác nhận hoàn thành dự án thành công",
            });
            window.location.reload(false);
          } else {
            Toast.fire({
              icon: "error",
              title: "Hoàn thành dự án thất bại, " + res.message,
            });
          }
        });
      }
    });
  };
  return (
    <div className="conversation__review-box">
      <div className="conversation__review-box__title">Quản lý</div>
      <div className="conversation__review-box__btn-wrapper">
        <Row>
          <Button
            variant="success"
            size="md"
            style={{
              minWidth: "200px",
            }}
            onClick={handleFinishJob}
          >
            Kết thúc dự án
          </Button>
        </Row>
      </div>
      <div className="conversation__review-box__btn-wrapper">
        <Row>
          <Button
            variant="danger"
            size="md"
            onClick={handleCancelJob}
            style={{
              minWidth: "200px",
            }}
          >
            Yêu cầu hủy dự án
          </Button>
        </Row>
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
          <Link to="#">
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
          <Link to="#">
            <img
              className="conversation__message-item__avatar"
              src="https://i.loli.net/2021/04/16/BnZIhjMmzTDecEH.jpg"
              alt="avatar"
            />
          </Link>
        </Col>
        <Col>
          <Link to="#">
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
