import "./style.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { toString } from "utils/date";
import { toVND } from "utils/number";
import jobType from "utils/jobType";
import { useSelector } from "react-redux";

const ProjectInfo = ({ job }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div className="project-info">
      <Container className="project-info__job">
        <div className="project-info__title">Thông tin dự án</div>
        <Row>
          <Col xs={5} className="project-info__field mb-2">
            ID dự án
          </Col>
          <Col xs={7}>{job.id}</Col>
        </Row>
        <Row>
          <Col xs={5} className="project-info__field mb-2">
            Ngày đăng
          </Col>
          <Col xs={7}>{job.created_at ? toString(job.created_at) : ""}</Col>
        </Row>
        <Row>
          <Col xs={5} className="project-info__field mb-2">
            Chỉ còn
          </Col>
          <Col xs={7}>23 ngày</Col>
        </Row>
        <Row>
          <Col xs={5} className="project-info__field mb-2">
            Địa điểm
          </Col>
          <Col xs={7}>Toàn quốc</Col>
        </Row>
        <Row>
          <Col xs={5} className="project-info__field mb-2">
            Ngân sách
          </Col>
          <Col xs={7}>{toVND(job.expect_balance)}</Col>
        </Row>
        <Row>
          <Col xs={5} className="project-info__field mb-2">
            Hình thức làm việc
          </Col>
          <Col xs={7}>{jobType[parseInt(job.job_type)]}</Col>
        </Row>
        <Row>
          <Col xs={5} className="project-info__field mb-2">
            Hình thức trả lương
          </Col>
          <Col xs={7}>{jobType[parseInt(job.job_type)]}</Col>
        </Row>
      </Container>
      <Container className="project-info__employer">
        <div className="project-info__title">Thông tin khách hàng</div>
        <Row className="p-0">
          <Col xs={4}>
            <Link
              className="project-info__avatar"
              to={`/users/${job.employer_detail?.id}`}
            >
              <img
                src={
                  job.employer_detail?.avatar ??
                  "https://i.loli.net/2021/04/16/BnZIhjMmzTDecEH.jpg"
                }
                alt="avatar"
              />
            </Link>
          </Col>
          <Col xs={8} className="project-info__employer__info">
            <Link
              className="project-info__employer__name"
              to={`/users/${job.employer_detail?.id}`}
            >
              {job.employer_detail?.user_information?.fullname}
            </Link>
            <div className="project-info__jobTitle">
              {job.employer_detail?.job}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={3} className="project-info__field mb-2">
            Đến từ
          </Col>
          <Col xs={9}>{job.employer_detail?.user_information?.address}</Col>
        </Row>
        <Row>
          <Col xs={3} className="project-info__field mb-2">
            Email
          </Col>
          <Col xs={9}>{job.employer_detail?.email}</Col>
        </Row>
        {/* <Row>
          <Col xs={3} className="project-info__field mb-2">
            Đã đăng
          </Col>
          <Col xs={9}>
            <Link to={`/users/${job.employer_detail?.id}/posts`}>
              {job.employer_detail?.posted ?? 0} việc
            </Link>
          </Col>
        </Row> */}
        <Link to={`/conversation/${job.id}`}>
          <Button className="w-100 my-4 btn-success" disabled={!isLoggedIn}>Thảo luận dự án</Button>
        </Link>
      </Container>
    </div>
  );
};

export default ProjectInfo;
