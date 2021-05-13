import "./style.scss";
import {
  MyCarousel,
  MostPopularJobList,
  Step1,
  Step2,
  Step3,
  Conversation,
} from "components";

const Home = () => {
  return (
    <div className="home-page">
      <MyCarousel />

      <div className="home-page__most-popular-job-list-wrapper">
        <div className="home-page__most-popular-job-list not-fluid">
          <MostPopularJobList />
        </div>
      </div>

      <div className="home-page__step-odd-wrapper home-page__step-wrapper">
        <div className="not-fluid">
          <Step1 />
        </div>
      </div>

      <div className="home-page__step-even-wrapper home-page__step-wrapper">
        <div className="not-fluid">
          <Step2 />
        </div>
      </div>

      <div className="home-page__step-odd-wrapper home-page__step-wrapper">
        <div className="not-fluid">
          <Step3 />
        </div>
      </div>

      <div className="not-fluid">
        <Conversation />
      </div>
    </div>
  );
};

export default Home;
