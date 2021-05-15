import "./style.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { OfferItem } from "components";
import { getMinMidMax, toVND } from 'utils/number'
import offer from "services/offer";

const OfferList = ({ offerList }) => {
  const [min, mid, max] = getMinMidMax(offerList.map(offer => offer.balance));
  const midDay = offerList.map(offer => offer.expect_day).reduce((x, y)=>x+y) / offerList.length;
  return (
    <div className="offer-list">
      <div className="offer-list__head">
        <Row>
          <Col xs="auto">
            <span>Chào giá:&nbsp;</span>
            <span className="offer-list__field-value">{offerList.length}</span>
          </Col>
          <Col className="offer-list__head__sec-2">
            <Row>
              <Col xs="auto">
                <span>Thấp nhất:&nbsp;</span>
                <span className="offer-list__field-value">{toVND(min)}</span>
              </Col>
              <Col xs="auto">
                <span>Trung bình:&nbsp;</span>
                <span className="offer-list__field-value">{toVND(mid)}</span>
              </Col>

              <Col xs="auto">
                <span>Cao nhất:&nbsp;</span>
                <span className="offer-list__field-value">{toVND(max)}</span>
              </Col>
            </Row>
          </Col>
          <Col xs="auto">
            <span>Trung bình:&nbsp;</span>
            <span className="offer-list__field-value">{midDay} ngày</span>
          </Col>
        </Row>
      </div>

      {offerList.map((offer) => (
        <OfferItem offer={offer} key={offer.id} />
      ))}
    </div>
  );
};

export default OfferList;
