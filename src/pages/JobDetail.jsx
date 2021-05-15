import "./style.scss";

import { Detail, OfferForm, OfferList } from "components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import JobService from "services/job";
import OfferService from "services/offer";
import { useSelector } from 'react-redux'

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const { isLoggedIn } = useSelector(state => state.auth);
  const [canOffer, setCanOffer] = useState(false);
  const [offerList, setOfferList] = useState([]);

  useEffect(() => {
    JobService.getByID(parseInt(id)).then((data) => setJob(data.data));
    OfferService.get({id}).then(data => setOfferList(data.data));
  }, [id]);
  useEffect(() => {
    if (isLoggedIn) {
      OfferService.checkCanOffer(id).then(data => setCanOffer(data));
    } else {
      setCanOffer(false);
    }
  }, [isLoggedIn])
  return (
    <div className="job-detail not-fluid">
      <Detail className="job-detail__detail" job={job} />
      { canOffer && <OfferForm job={job} setCanOffer={setCanOffer}></OfferForm>}
      <OfferList offerList={offerList} />
    </div>
  );
};

export default JobDetail;
