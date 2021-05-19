import { ReviewModal } from "components";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const ReviewButton = ({ variant, size, text, job_id }) => {
  const [reviewModalShow, setReviewModalShow] = useState(false);

  return (
    <>
      <Button
        variant={variant ? variant : "success"}
        size={size ? size : "md"}
        onClick={() => setReviewModalShow(true)}
      >
        {text ? text : "Hoàn thành"}
      </Button>
      <ReviewModal
        show={reviewModalShow}
        job_id={job_id}
        onHide={() => setReviewModalShow(false)}
      />
    </>
  );
};

export default ReviewButton;
