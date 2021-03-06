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
          title: "G???i tin th??nh c??ng",
        });
        window.location.reload(false);
      } else {
        Toast.fire({
          icon: "error",
          title: "G???i tin nh???n th???t b???i",
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
                  placeholder="G???i tin nh???n ??? ????y"
                ></textarea>
                <Row>
                  <Col>
                    <Link to="#">
                      <ImAttachment />
                    </Link>
                  </Col>
                  <Col xs="auto" className="mt-2">
                    <Button variant="success" onClick={handleSendMessage}>
                      G???i
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
      <div className="conversation__job-info__title">Th??ng tin vi???c l??m</div>
      <Row>
        <Col className="conversation__job-info__field-label">ID d??? ??n</Col>
        <Col className="conversation__job-info__field-value">{job?.id}</Col>
      </Row>
      <Row>
        <Col className="conversation__job-info__field-label">
          Ng?????i tr??ng th???u
        </Col>
        <Col className="conversation__job-info__field-value">
          <b>{job?.freelancer_detail?.user_information?.fullname}</b>
        </Col>
      </Row>
      <Row>
        <Col className="conversation__job-info__field-label">?????a ??i???m</Col>
        <Col className="conversation__job-info__field-value">To??n qu???c</Col>
      </Row>
      <Row>
        <Col className="conversation__job-info__field-label">
          Ng??n s??ch d??? ki???n
        </Col>
        <Col className="conversation__job-info__field-value">
          {toVND(job?.expect_balance)}
        </Col>
      </Row>
      <Row>
        <Col className="conversation__job-info__field-label">
          Ng??n s??ch tr??ng th???u
        </Col>
        <Col className="conversation__job-info__field-value">
          {toVND(job?.freelancer_applicant?.balance)}
        </Col>
      </Row>

      <Row>
        <Col className="conversation__job-info__field-label">
          S??? ng??y d??? ki???n
        </Col>
        <Col className="conversation__job-info__field-value">
          {job?.freelancer_applicant?.expect_day ?? "0"} ng??y
        </Col>
      </Row>
    </div>
  );
};

const ReviewBox = ({ job_id }) => {
  return (
    <div className="conversation__review-box">
      {/* <div className="conversation__review-box__title">
      Nh???n x??t c??ng vi???c
      </div> */}
      <div className="conversation__review-box__btn-wrapper">
        <ReviewButton variant="warning" text="Nh???n x??t c??ng vi???c" job_id={job_id} />
      </div>
      <div className="conversation__review-box__sub-title">
        G???i <strong>nh???n x??t v??? c??ng vi???c</strong> gi??p b???n t??ng th??m nhi???u c??
        h???i vi???c l??m h??n
      </div>
    </div>
  );
};
const ControlBox = ({ job_id }) => {
  const handleCancelJob = () => {
    Swal.fire({
      title: "H???y d??? ??n?",
      text: "B???n c?? ch???c h???y d??? ??n",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "X??c nh???n",
      cancelButtonText: "H???y",
    }).then((result) => {
      if (result.value) {
        JobService.cancelJob({
          job_id: parseInt(job_id),
        }).then((res) => {
          if (res.status) {
            Toast.fire({
              icon: "success",
              title: "X??c nh???n h???y th??nh c??ng",
            });
            window.location.reload(false);
          } else {
            Toast.fire({
              icon: "error",
              title: "H???y th???t b???i ," + res.message,
            });
          }
        });
      }
    });
  };

  const handleFinishJob = () => {
    Swal.fire({
      title: "Ho??n th??nh d??? ??n?",
      text: "B???n c?? ch???c ho??n th??nh d??? ??n",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "X??c nh???n",
      cancelButtonText: "H???y",
    }).then((result) => {
      if (result.value) {
        JobService.finishJob({
          job_id: parseInt(job_id),
        }).then((res) => {
          if (res.status) {
            Toast.fire({
              icon: "success",
              title: "X??c nh???n ho??n th??nh d??? ??n th??nh c??ng",
            });
            window.location.reload(false);
          } else {
            Toast.fire({
              icon: "error",
              title: "Ho??n th??nh d??? ??n th???t b???i, " + res.message,
            });
          }
        });
      }
    });
  };
  return (
    <div className="conversation__review-box">
      <div className="conversation__review-box__title">Qu???n l??</div>
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
            K???t th??c d??? ??n
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
            Y??u c???u h???y d??? ??n
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
        placeholder="G???i tin nh???n ??? ????y"
      ></textarea>
      <Row>
        <Col>
          <Link to="#">
            <ImAttachment />
          </Link>
        </Col>
        <Col xs="auto">
          <Button variant="success">G???i</Button>
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
          NG?????I G???I
        </Col>
        <Col className="conversation__chat-history__header">L???I NH???N</Col>
        <Col xs="auto" className="conversation__chat-history__header">
          TH???I GIAN
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
