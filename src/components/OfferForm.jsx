import "./style.scss";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useRef } from 'react';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import OfferService from 'services/offer';
import Toast from 'utils/toast';
import { timeToDay } from 'utils/date'

const OfferForm = ({ job, setCanOffer }) => {
  const { account } = useSelector(state => state.auth);
  const balanceRef = useRef();
  const expectDayRef = useRef();
  const expRef = useRef();
  const stepRef = useRef();
  const phoneRef = useRef();
  const mailRef = useRef();

  useEffect(() => {
    if (account) {
      mailRef.current.value = account.email;
      if (account.user_information) {
        phoneRef.current.value = account.user_information.phone
      }
    }
    
  }, [account])

  const handleOffer = () => {
    OfferService.make(
      job.id,
      balanceRef.current.value,
      timeToDay(expectDayRef.current.value),
      phoneRef.current.value,
      mailRef.current.value,
      expRef.current.value,
      stepRef.current.value,
    ).then((res) =>  {
      if (res.status) {
        Toast.fire({
          icon: "success",
          title: "Chào giá thành công",
        })
        setCanOffer(false);
      } else {
        Toast.fire({
          icon: "error",
          title: "Chào giá thất bại",
        })
        setCanOffer(true);
      }
    })
  }
  return (
    <div className="offer-form">
      <div className="offer-form__title">THÔNG TIN CHÀO GIÁ</div>
      <hr />
      <form action="">
        <Container>
          <Row>
            <Col xs={6} className="pl-0">
              <div className="offer-form__subtitle">ĐỀ XUẤT CHI PHÍ</div>
              <div className="form-group">
                <label htmlFor="expected_price" className="offer-form__label">
                  Bạn muốn nhận (chi phí thực nhận cho dự án VND)
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="expected_price"
                  placeholder="500000"
                  defaultValue="500000"
                  ref={balanceRef}
                  required
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="expected_time form-label"
                  className="offer-form__label"
                >
                  Dự kiến hoàn thành trong:
                </label>{" "}
                <select name="expected_time form-control" ref={expectDayRef}>
                  <option value="1 ngày">1 ngày</option>
                  <option value="3 ngày">3 ngày</option>
                  <option value="5 ngày">5 ngày</option>
                  <option value="7 ngày">7 ngày</option>
                  <option value="10 ngày">10 ngày</option>
                  <option value="2 tuần">2 tuần</option>
                  <option value="3 tuần">3 tuần</option>
                  <option value="4 tuần">4 tuần</option>
                  <option value="6 tuần">6 tuần</option>
                </select>
              </div>
              <div className="offer-form__subtitle mb-2">
                THÔNG TIN LIÊN HỆ CỦA BẠN
              </div>
              <Container>
                <Row>
                  <Col className="pl-0">
                    <div className="form-group offer-form__prettyInput">
                      <label htmlFor="phone">
                        <FaPhoneAlt></FaPhoneAlt>
                      </label>
                      <input
                        type="phone"
                        className="form-control"
                        name="phone"
                        placeholder="Số điện thoại"
                        ref={phoneRef}
                        required
                        />
                    </div>
                  </Col>
                  <Col className="pr-0">
                    <div className="form-group offer-form__prettyInput">
                      <label htmlFor="email">
                        <FaEnvelope></FaEnvelope>
                      </label>
                      <input
                        type="link"
                        className="form-control"
                        name="email"
                        placeholder="Địa chỉ email"
                        ref={mailRef}
                        required
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="offer-form__offer">
                <div className="offer__policy">
                  Khi gửi chào giá, bạn xác nhận đồng ý các điều khoản sử dụng
                  của vLanceJob, và không để lộ bất kỳ thông tin liên lạc cá
                  nhân nào trong phần đề xuất thuyết phục khách hàng.
                </div>
                <Button className="btn-warning w-100 mt-3" onClick={() => handleOffer()}>Gửi chào giá</Button>
              </div>
            </Col>
            <Col xs={6} className="pr-0">
              <div className="offer-form__subtitle">
                ĐỀ XUẤT THUYẾT PHỤC KHÁCH HÀNG
              </div>
              <div className="form-group">
                <label htmlFor="experience" className="offer-form__label">
                  1. Bạn có những kinh nghiệm và kỹ năng nào phù hợp với dự án
                  này?
                </label>
                <textarea
                  name="experience"
                  rows="4"
                  cols="50"
                  className="form-textarea"
                  ref={expRef}
                  placeholder="- Tôi đã có xx năm kinh nghiệm trong lĩnh vực...
                  - Tôi sử dụng thành thạo các công cụ như...
                  - Tôi đã từng thực hiện những dự án tương tự..."
                  ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="plan" className="offer-form__label">
                  2. Bạn dự định thực hiện dự án này như thế nào?
                </label>
                <textarea
                  name="plan"
                  rows="4"
                  cols="50"
                  className="form-textarea"
                  ref={stepRef}
                  placeholder="- Đầu tiên tôi sẽ...
- Sau đó tôi sẽ...
- Tôi tin tưởng có thể hoàn thành đúng theo kế hoạch...
- Hãy liên hệ với tôi qua vLance để trao đổi thêm..."
                />
              </div>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
};

export default OfferForm;
