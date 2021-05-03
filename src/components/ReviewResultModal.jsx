import "./style.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Rating from "react-rating";

const ReviewResultModal = ({ show, onHide, rate, review }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ĐÁNH GIÁ CỦA BẠN
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Rating
          className="review-form__rating"
          emptySymbol={
            <img
              src="/images/star-empty.png"
              className="offer-item__rating-icon"
            />
          }
          fullSymbol={
            <img
              src="/images/star-full.png"
              className="offer-item__rating-icon"
            />
          }
          initialRating={rate}
          readonly
        />
        <textarea
          readOnly
          rows="8"
          cols="1000"
          className="form-textarea"
          placeholder="- Tôi cảm thấy hài lòng về...
- Tuy nhiên tôi chưa hài lòng về..."
        >
          {review}
        </textarea>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-success" size="md" onClick={onHide}>
          Xác nhận
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReviewResultModal;
