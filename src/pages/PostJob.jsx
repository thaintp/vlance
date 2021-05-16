import MyButton from "components/MyButton";
import { FaLock } from "react-icons/fa";
import "./postjob.scss";
import {useSelector} from 'react-redux';
import { Redirect } from 'react-router-dom'

const PostJob = () => {
  const {isLoggedIn} = useSelector(state => state.auth);

  return (
    isLoggedIn ?
    <form class="form fv-plugins-bootstrap fv-plugins-framework postjob" id="kt_projects_add_form">
      <div class="pb-5 mx-auto" data-wizard-type="step-content" data-wizard-state="current">
        <h4 class="mb-10 pb-3 font-weight-bold text-dark">Việc cần tuyển freelancer</h4>
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group row fv-plugins-icon-container">
              <label class="col-xl-3 col-lg-3 col-form-label">Chọn lĩnh vực cần tuyển</label>
              <div class="col-lg-4 col-md-9 col-sm-12" data-select2-id="4">
                <select class="form-control select2 select2-hidden-accessible" id="kt_select2" name="Jobcategory" data-select2-id="kt_select2" tabindex="-1" aria-hidden="true">
                  <option label="- Tên lĩnh vực -" data-select2-id="2"></option>
                  <optgroup
                    label="Alaskan/Hawaiian Time Zone"
                    data-select2-id="10"
                  >
                    <option value="AK" data-select2-id="11">
                      Alaska
                    </option>
                  </optgroup>
                  <optgroup label="Pacific Time Zone" data-select2-id="13">
                    <option value="CA" data-select2-id="14">
                      California
                    </option>
                  </optgroup>
                  <optgroup label="Mountain Time Zone" data-select2-id="18">
                    <option value="AZ" data-select2-id="19">
                      Arizona
                    </option>
                  </optgroup>
                  <optgroup label="Central Time Zone" data-select2-id="28">
                    <option value="AL" data-select2-id="29">
                      Alabama
                    </option>
                  </optgroup>
                  <optgroup label="Eastern Time Zone" data-select2-id="44">
                    <option value="CT" data-select2-id="45">
                      Connecticut
                    </option>
                  </optgroup>
                </select>
                <div className="fv-plugins-message-container"></div>
              </div>
            </div>
            <div className="form-group row fv-plugins-icon-container">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Chọn dịch vụ phù hợp với freelancer
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12" data-select2-id="4">
                <select
                  className="form-control select2 select2-hidden-accessible"
                  id="kt_select2"
                  name="Jobcategory"
                  data-select2-id="kt_select2"
                  tabindex="-1"
                  aria-hidden="true"
                >
                  <option label="- Tên dịch vụ -" data-select2-id="2"></option>
                  <optgroup
                    label="Alaskan/Hawaiian Time Zone"
                    data-select2-id="10"
                  >
                    <option value="AK" data-select2-id="11">
                      Alaska
                    </option>
                  </optgroup>
                  <optgroup label="Pacific Time Zone" data-select2-id="13">
                    <option value="CA" data-select2-id="14">
                      California
                    </option>
                  </optgroup>
                  <optgroup label="Mountain Time Zone" data-select2-id="18">
                    <option value="AZ" data-select2-id="19">
                      Arizona
                    </option>
                  </optgroup>
                  <optgroup label="Central Time Zone" data-select2-id="28">
                    <option value="AL" data-select2-id="29">
                      Alabama
                    </option>
                  </optgroup>
                  <optgroup label="Eastern Time Zone" data-select2-id="44">
                    <option value="CT" data-select2-id="45">
                      Connecticut
                    </option>
                  </optgroup>
                </select>
                <div className="fv-plugins-message-container"></div>
              </div>
            </div>
            <div className="form-group row fv-plugins-icon-container">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Tên cụ thể cho công việc cần tuyển
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12">
                <input
                  className="form-control form-control-lg form-control-solid"
                  name="customername"
                  type="text"
                  placeholder="VD: Thiết kế trang web bán hàng cao cấp"
                />
                <div className="fv-plugins-message-container"></div>
              </div>
            </div>
          </div>
        </div>
        <h4 className="mb-10 pb-3 font-weight-bold text-dark">
          Thông tin đầy đủ về yêu cầu tuyển dụng
        </h4>
        <div className="row">
          <div className="col-xl-12">
            <div className="form-group row fv-plugins-icon-container">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Nội dung chi tiết
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12" data-select2-id="4">
                <textarea
                  className="form-control form-control-lg form-control-solid"
                  rows="4"
                  cols="48"
                  name="comment"
                  placeholder="Ví dụ: Các giao diện website cần thiết kế như trang chủ, xem hàng, thanh toán..."
                />
                <div className="fv-plugins-message-container"></div>
              </div>
            </div>
            <div className="form-group row fv-plugins-icon-container">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Kỹ năng cần có
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12" data-select2-id="4">
                <input
                  className="form-control form-control-lg form-control-solid"
                  name="skill"
                  type="text"
                  placeholder="VD: Photoshop, Tiếng Anh"
                />
                <div className="fv-plugins-message-container"></div>
              </div>
            </div>
            <div className="form-group row fv-plugins-icon-container">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Hạn cuối nhận chào giá
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12">
                <input
                  className="form-control form-control-lg form-control-solid"
                  type="text"
                  id="exp"
                  name="trip-start"
                  placeholder="dd/mm/yyyy"
                />
                <div className="fv-plugins-message-container"></div>
              </div>
              {/*<script>
                $(document).ready(function() {$('#exp').datepicker({
                    format: 'dd/mm/yyyy',
                    language: 'vn',
                    autoclose: true,
                    weekStart: 1,
                    startDate: '04/05/2021',
                    endDate: '02/06/2021'
                  })
                })
              </script>*/}
            </div>
            <div className="form-group row fv-plugins-icon-container">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Loại hình làm việc
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12">
                <select
                  className="form-control select2 select2-hidden-accessible"
                  id="kt_select2"
                  name="Jobcategory"
                  data-select2-id="kt_select2"
                  tabindex="-1"
                  aria-hidden="true"
                >
                  <option>Dự án</option>
                  <option>Bán thời gian</option>
                  <option>Toàn thời gian</option>
                </select>
                <div className="fv-plugins-message-container"></div>
              </div>
            </div>
            <div className="form-group row fv-plugins-icon-container">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Hình thức làm việc
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12">
                <select
                  className="form-control select2 select2-hidden-accessible"
                  id="kt_select2"
                  name="Jobcategory"
                  data-select2-id="kt_select2"
                  tabindex="-1"
                  aria-hidden="true"
                >
                  <option>Online</option>
                  <option>Offline</option>
                </select>
                <div className="fv-plugins-message-container"></div>
              </div>
            </div>
          </div>
        </div>
        <h4 className="mb-10 pb-3 font-weight-bold text-dark">
          Yêu cầu khác đối với freelancer
        </h4>
        <div className="row">
          <div className="col-xl-12">
            <div className="form-group row fv-plugins-icon-container">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Làm việc tại
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12" data-select2-id="4">
                <select
                  className="form-control select2 select2-hidden-accessible"
                  id="kt_select2"
                  name="Jobcategory"
                  data-select2-id="kt_select2"
                  tabindex="-1"
                  aria-hidden="true"
                >
                  <option label="- Nơi cần thuê -" data-select2-id="2"></option>
                  <option value="24">Hà Nội</option>
                  <option value="31">TP. Hồ Chí Minh</option>
                  <option value="15">Đà Nẵng</option>
                  <option value="1">An Giang</option>
                  <option value="2">Bà Rịa - Vũng Tàu</option>
                  <option value="5">Bắc Giang</option>
                  <option value="4">Bắc Kạn</option>
                  <option value="3">Bạc Liêu</option>
                  <option value="6">Bắc Ninh</option>
                  <option value="7">Bến Tre</option>
                  <option value="8">Bình Dương</option>
                  <option value="9">Bình Định</option>
                  <option value="10">Bình Phước</option>
                  <option value="11">Bình Thuận</option>
                  <option value="12">Cà Mau</option>
                  <option value="14">Cần Thơ</option>
                  <option value="13">Cao Bằng</option>
                  <option value="16">Đắk Lắk</option>
                  <option value="17">Đắk Nông</option>
                  <option value="20">Điện Biên</option>
                  <option value="18">Đồng Nai</option>
                  <option value="19">Đồng Tháp</option>
                  <option value="21">Gia Lai</option>
                  <option value="22">Hà Giang</option>
                  <option value="23">Hà Nam</option>
                  <option value="25">Hà Tĩnh</option>
                  <option value="26">Hải Dương</option>
                  <option value="27">Hải Phòng</option>
                  <option value="29">Hậu Giang</option>
                  <option value="28">Hòa Bình</option>
                  <option value="30">Hưng Yên</option>
                  <option value="32">Khánh Hòa</option>
                  <option value="33">Kiên Giang</option>
                  <option value="34">Kon Tum</option>
                  <option value="35">Lai Châu</option>
                  <option value="38">Lâm Đồng</option>
                  <option value="37">Lạng Sơn</option>
                  <option value="36">Lào Cai</option>
                  <option value="39">Long An</option>
                  <option value="40">Nam Định</option>
                  <option value="41">Nghệ An</option>
                  <option value="42">Ninh Bình</option>
                  <option value="43">Ninh Thuận</option>
                  <option value="44">Phú Thọ</option>
                  <option value="45">Phú Yên</option>
                  <option value="46">Quảng Bình</option>
                  <option value="47">Quảng Nam</option>
                  <option value="48">Quảng Ngãi</option>
                  <option value="49">Quảng Ninh</option>
                  <option value="50">Quảng Trị</option>
                  <option value="51">Sóc Trăng</option>
                  <option value="52">Sơn La</option>
                  <option value="53">Tây Ninh</option>
                  <option value="54">Thái Bình</option>
                  <option value="55">Thái Nguyên</option>
                  <option value="56">Thanh Hóa</option>
                  <option value="57">Thừa Thiên - Huế</option>
                  <option value="58">Tiền Giang</option>
                  <option value="59">Trà Vinh</option>
                  <option value="60">Tuyên Quang</option>
                  <option value="61">Vĩnh Long</option>
                  <option value="62">Vĩnh Phúc</option>
                  <option value="63">Yên Bái</option>
                </select>
                <div className="fv-plugins-message-container"></div>
              </div>
            </div>
          </div>
        </div>
        <h4 className="mb-10 pb-3 font-weight-bold text-dark">
          Ngân sách dự kiến chi cho công việc này
        </h4>
        <div className="row">
          <div className="col-xl-12">
            <div className="form-group row fv-plugins-icon-container">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Hình thức trả lương
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12" data-select2-id="4">
                <select
                  className="form-control select2 select2-hidden-accessible"
                  id="kt_select2"
                  name="Jobcategory"
                  data-select2-id="kt_select2"
                  tabindex="-1"
                  aria-hidden="true"
                >
                  <option>Trả theo dự án</option>
                  <option>Trả theo giờ</option>
                  <option>Trả theo tháng</option>
                </select>
                <div className="fv-plugins-message-container"></div>
              </div>
            </div>
            <div className="form-group row fv-plugins-icon-container">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Số tiền tối đa có thể trả trong khoảng
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12" data-select2-id="4">
                <input
                  type="text"
                  id=""
                  required
                  pattern="^(0|[1-9][0-9/.]*)$"
                  className="form-control form-control-lg form-control-solid"
                  placeholder="Từ                                                              VND"
                />
                <input
                  type="text"
                  id=""
                  required
                  pattern="^(0|[1-9][0-9/.]*)$"
                  className="form-control form-control-lg form-control-solid mt-3"
                  placeholder="Đến                                                           VND"
                />
                <div className="fv-plugins-message-container"></div>
              </div>
            </div>
          </div>
        </div>
        <h4 className="mb-10 pb-3 font-weight-bold text-dark">
          Tùy chọn hiển thị cho công việc này (không bắt buộc)
        </h4>
        <div className="row">
          <div className="col-xl-12">
            <div className="form-group row fv-plugins-icon-container">
              <div className="col-lg-7 col-md-9 col-sm-12" data-select2-id="4">
                <label>
                  <input type="checkbox" />
                  <FaLock color="#1E90FF" className="mr-2 mb-2 ml-2" />
                  Tôi muốn việc này được Hiển Thị Bí Mật - chỉ những người nào
                  tôi gửi link việc này cho họ và tôi mời họ làm việc qua
                  vLance.vn, thì mới xem được. (Số lượng hiển thị sẽ rất ít, vì
                  chỉ những người được cho phép mới xem được).
                </label>
                <div className="fv-plugins-message-container"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5 pt-10">
        <div>
          <MyButton></MyButton>
        </div>
      </div>
    </form>
    : <Redirect to="/" />
  );
};

export default PostJob;
