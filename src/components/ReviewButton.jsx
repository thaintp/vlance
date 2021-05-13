import { ReviewModal } from "components";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const ReviewButton = ({ variant, size, text }) => {
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
        onHide={() => setReviewModalShow(false)}
      />
    </>
  );
};

export default ReviewButton;
