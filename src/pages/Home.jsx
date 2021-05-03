import { ReviewModal } from "components";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [reviewModalShow, setReviewModalShow] = useState(false);

  return (
    <div className="home-page">
      <h1>Home page</h1>

      <Button variant="success" onClick={() => setReviewModalShow(true)}>
        Hoàn thành
      </Button>
      <ReviewModal
        show={reviewModalShow}
        onHide={() => setReviewModalShow(false)}
      />
    </div>
  );
};

export default Home;
