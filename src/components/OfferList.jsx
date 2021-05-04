import "./style.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { OfferItem } from "components";

const OfferList = () => {
  const fake = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="offer-list">
      <div className="offer-list__head">
        <Row>
          <Col xs="auto">
            <span>Chào giá:&nbsp;</span>
            <span className="offer-list__field-value">{9}</span>
          </Col>
          <Col className="offer-list__head__sec-2">
            <Row>
              <Col xs="auto">
                <span>Thấp nhất:&nbsp;</span>
                <span className="offer-list__field-value">2.500.000 VNĐ</span>
              </Col>
              <Col xs="auto">
                <span>Trung bình:&nbsp;</span>
                <span className="offer-list__field-value">4.647.059 VNĐ</span>
              </Col>

              <Col xs="auto">
                <span>Cao nhất:&nbsp;</span>
                <span className="offer-list__field-value">6.000.000 VNĐ</span>
              </Col>
            </Row>
          </Col>
          <Col xs="auto">
            <span>Trung bình:&nbsp;</span>
            <span className="offer-list__field-value">{7} ngày</span>
          </Col>
        </Row>
      </div>

      {fake.map(() => (
        <OfferItem />
      ))}
    </div>
  );
};

export default OfferList;
