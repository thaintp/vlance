import "./style.scss";
import Button from "react-bootstrap/Button";

const OfferForm = () => {
  return (
    <div className="offer-form">
      <div className="offer-form__title">THÔNG TIN CHÀO GIÁ</div>
      <hr />
      <form action="">
        Đề xuất chi phí *
        <div className="form-group">
          <label htmlFor="expected_price">
            Bạn muốn nhận (chi phí thực nhận cho dự án)
          </label>
          <input
            type="number"
            className="form-control"
            name="expected_price"
            placeholder="500000"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expected_time">Dự kiến hoàn thành trong</label>
          <select name="expected_time">
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
        ĐỀ XUẤT THUYẾT PHỤC KHÁCH HÀNG *
        <div className="form-group">
          <label htmlFor="expected_price">
            Bạn có những kinh nghiệm và kỹ năng nào phù hợp với dự án này?*
          </label>
          <input
            type="text"
            className="form-control"
            name="expected_price"
            placeholder="500000"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expected_price">
            Bạn dự định thực hiện dự án này như thế nào?*
          </label>
          <input
            type="text"
            className="form-control"
            name="expected_price"
            placeholder="500000"
            required
          />
        </div>
        THÔNG TIN LIÊN HỆ CỦA BẠN
        <div className="form-group">
          <label htmlFor="expected_price">Số điện thoại</label>
          <input
            type="phone"
            className="form-control"
            name="expected_price"
            placeholder="500000"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expected_price">Skype</label>
          <input
            type="link"
            className="form-control"
            name="expected_price"
            placeholder="500000"
            required
          />
        </div>
        <Button className="btn-warning w-100">Gửi chào giá</Button>
      </form>
    </div>
  );
};

export default OfferForm;
