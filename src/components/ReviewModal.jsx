import "./style.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Rating from "react-rating";
import { useState, useRef } from "react";
import { ReviewResultModal } from "components";
import Toast from 'utils/toast';
import ReviewService from 'services/review';

const ReviewModal = ({ job_id, onHide, show }) => {
  const [rate, setRate] = useState(0);
  const reviewRef = useRef("");
  const [reviewResultModalShow, setReviewResultModalShow] = useState(false);

  const showReviewResultModal = () => {
    if (rate > 0 && reviewRef.current.value !== "") {
      ReviewService.post(job_id, reviewRef.current.value, rate).then(data => {
        if (data.status) {
          onHide();
          Toast.fire({
            icon: "success",
            title: data.message,
          });
        } else {
          Toast.fire({
            icon: "error",
            title: data.message,
          });
        }
      })
    } else {
      Toast.fire({
        icon: "error",
        title: "Đánh giá thất bại.",
        text: "Vui lòng điền đầy đủ thông tin để đánh giá"
      });
    }
  };

  return (
    <>
      {/* Submit: rate & review */}
      <form action="">
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={onHide}
          show={show}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              ĐÁNH GIÁ
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="review-form__fields">
              <Rating
                className="review-form__rating"
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
                onChange={(value) => setRate(value)}
              />

              <textarea
                name="review"
                rows="8"
                cols="1000"
                className="form-textarea"
                placeholder="- Tôi cảm thấy hài lòng về...
- Tuy nhiên tôi chưa hài lòng về..."
                ref={reviewRef}
              ></textarea>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="btn-danger review-form__btn"
              size="md"
              onClick={onHide}
            >
              Hủy
            </Button>
            <Button
              className="btn-success review-form__btn"
              size="md"
              onClick={showReviewResultModal}
            >
              Gửi
            </Button>
          </Modal.Footer>
        </Modal>

        <input type="number" name="rate" hidden value={rate} />
      </form>

      <ReviewResultModal
        rate={rate}
        review={reviewRef.current ? reviewRef.current.value : ""}
        show={reviewResultModalShow}
        onHide={() => setReviewResultModalShow(false)}
      />
    </>
  );
};

export default ReviewModal;
