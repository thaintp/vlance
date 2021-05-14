import "./style.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const OfferItem = ({ offer, isAuthor }) => {
  console.log("[OfferItem] : ", offer);
  //const user_id = useSelector((state) => state.auth.user);
  const freelancer = offer.freelancer_detail;
  const fakeSkills =
    freelancer.user_information.skill &&
    freelancer.user_information.skill.split("|");
  console.log("is author", isAuthor);
  return (
    <>
      <div className="offer-item">
        <Row>
          <Col lg={2} className="offer-item__sec--center">
            <Row>
              <Col xs="12">
                <img
                  className="offer-item__avatar"
                  src="https://i.loli.net/2021/04/16/BnZIhjMmzTDecEH.jpg"
                  alt="avatar"
                />
              </Col>
              <Col>
                <Rating
                  readonly
                  initialRating={3}
                  emptySymbol={
                    <img
                      src="/images/star-empty.png"
                      className="offer-item__rating-icon"
                      alt=""
                    />
                  }
                  fullSymbol={
                    <img
                      src="/images/star-full.png"
                      className="offer-item__rating-icon"
                      alt=""
                    />
                  }
                />
              </Col>
            </Row>
          </Col>

          <Col>
            <Row>
              <Col>
                <Link to="/user/{freelancer.id}">
                  <div className="offer-item__full-name">
                    {freelancer.user_information.fullname}
                  </div>
                </Link>
              </Col>
              <Col xs="auto">
                {isAuthor && isAuthor === true ? (
                  <Button className="btn-success" size="md">
                    Chọn ứng viên
                  </Button>
                ) : (
                  ""
                )}
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="offer-item__job-title">Software Engineer</div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div>
                  <span className="offer-item__field">
                    Kỹ năng:&nbsp;&nbsp;
                  </span>
                  <span className="offer-item__field-value">
                    {fakeSkills &&
                      fakeSkills.map((skill, idx) => (
                        <Badge key={idx} pill variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                  </span>
                </div>
              </Col>
            </Row>
          </Col>

          <Col lg={3}>
            <Row>
              <Col xs={5} className="offer-item__field">
                Đến từ
              </Col>
              <Col className="offer-item__field-value">TP. Hồ Chí Minh</Col>
            </Row>
            <Row>
              <Col xs={5} className="offer-item__field">
                Ngày gia nhập
              </Col>
              <Col className="offer-item__field-value">05/05/2021</Col>
            </Row>
            <Row>
              <Col xs={5} className="offer-item__field">
                Việc đã làm
              </Col>
              <Col className="offer-item__field-value">
                <Link to="#">1 việc</Link>
              </Col>
            </Row>
            <Row>
              <Col xs={5} className="offer-item__field">
                Thu nhập
              </Col>
              <Col className="offer-item__field-value">
                <Link to="#">50.000.000 VNĐ</Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default OfferItem;
