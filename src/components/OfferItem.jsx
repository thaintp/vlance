import "./style.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import {toString} from 'utils/date'

const OfferItem = ({ offer, isAuthor }) => {
const freelancer = offer.freelancer_detail;
  return (
    <div className="offer-item">
      <Row>
        <Col lg={2} className="offer-item__sec--center">
          <Row>
            <Col xs="12">
              <Link to={`/users/${offer.freelancer_id}`}>
                <img
                  className="offer-item__avatar"
                  src="https://i.loli.net/2021/04/16/BnZIhjMmzTDecEH.jpg"
                  alt="avatar"
                />
                </Link>
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
              <Link to={`/users/${offer.freelancer_id}`}>
                <div className="offer-item__full-name">{freelancer.user_information &&
                      (freelancer.user_information.fullname != null
                        ? freelancer.user_information.fullname
                        : freelancer.name)}</div>
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
              <div className="offer-item__job-title">{offer.freelancer_detail.user_information.bio}</div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div>
                <span className="offer-item__field">Kỹ năng:&nbsp;&nbsp;</span>
                <span className="offer-item__field-value">
                  {offer.freelancer_detail.user_information.skill.split("|").map((skill, index) => (
                    <Link to="#/" key={index}>
                      <Badge pill variant="secondary">
                        {skill}
                      </Badge>
                      <span> </span>
                    </Link>
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
            <Col className="offer-item__field-value">{offer.freelancer_detail.user_information.address}</Col>
          </Row>
          <Row>
            <Col xs={5} className="offer-item__field">
            Giá đề xuất
            </Col>
            <Col className="offer-item__field-value">
              {offer.balance}
            </Col>
          </Row>
          <Row>
            <Col xs={5} className="offer-item__field">
            Ước tính
            </Col>
            <Col className="offer-item__field-value">
            {offer.expect_day} ngày
            </Col>
          </Row>
          <Row>
            <Col xs={5} className="offer-item__field">
            Ngày
            </Col>
            <Col className="offer-item__field-value">{toString(offer.created_at)}</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default OfferItem;
