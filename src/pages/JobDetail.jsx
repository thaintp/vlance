import "./style.scss";

import { Detail, OfferForm, OfferList } from "components";
import { useState, useEffect } from "react";
import JobService from "services/job";
import OfferService from "services/offer";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { OfferItem } from "components";

const JobDetail = ({ match }) => {
  const { id } = match.params;
  const [job, setJob] = useState({});
  const { isLoggedIn } = useSelector((state) => state.auth.account);
  const { account } = useSelector((state) => state.auth);
  const [canOffer, setCanOffer] = useState(false);
  const [offers, setOffers] = useState([]);
  console.log("account: ", account);
  useEffect(() => {
    JobService.getByID(id).then((data) => {
      console.log(data?.data);
      setJob(data?.data);
    });
  }, [id]);

  useEffect(() => {
    OfferService.getOffersAPI({ job_id: id }).then((json) => {
      const res_data = json.data;
      setOffers(res_data.data);
    });
  }, [id]);

  useEffect(() => {
    if (isLoggedIn) {
      OfferService.checkCanOffer(id).then((data) => setCanOffer(data));
    } else {
      setCanOffer(false);
    }
  }, [isLoggedIn]);

  return (
    <div className="job-detail not-fluid">
      <Detail className="job-detail__detail" job={job} />
      {canOffer && <OfferForm job={job} setCanOffer={setCanOffer}></OfferForm>}

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

        {offers &&
          offers.map((_offer, idx) => (
            <OfferItem
              key={idx}
              offer={_offer}
              isAuthor={account.id === job.employer_id}
            />
          ))}
      </div>
    </div>
  );
};

export default JobDetail;
