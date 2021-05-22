import MyButton from "components/MyButton";
import { FaLock } from "react-icons/fa";
import "./postjob.scss";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import JobService from "services/job";
import Toast from "utils/toast";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Button,
  Input,
} from "reactstrap";

const CategorySelect = (props) => {
  return (
    <Input
      type="select"
      onChange={(event) => {
        props.onChange(parseInt(event.target.value, 10));
      }}
    >
      <option value={1}>IT</option>
      <option value={2}>Marketing</option>
    </Input>
  );
};
const JobTypeSelect = (props) => {
  return (
    <Input
      type="select"
      onChange={(event) => {
        props.onChange(parseInt(event.target.value, 10));
      }}
    >
      <option value={1}>Project</option>
      <option value={2}>Toàn thời gian</option>
      <option value={2}>Bán thời gian</option>
    </Input>
  );
};

const PostJob = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const titleRef = useRef("Tiêu đề");
  const descriptionRef = useRef("Mô tả");
  const expectBalanceRef = useRef("1000000");
  const expectDayRef = useRef("3");

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  let dataState = {
    category_id: 1,
    title: titleRef.current.value,
    description: descriptionRef.current.value,
    expect_balance: expectBalanceRef.current.value,
    expect_day: expectDayRef.current.value,
    job_type: 0,
    end_receive_date: "2021-05-30 19:09:52",
    status: 0,
  };
  const handlePost = () => {
    dataState = {
      ...dataState,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      expect_balance: expectBalanceRef.current.value,
      expect_day: expectDayRef.current.value,
    };
    JobService.sendPostJob(dataState).then((res) => {
      if (res.status) {
        Toast.fire({
          icon: "success",
          title: "Đăng tin thành công",
        });
      } else {
        Toast.fire({
          icon: "error",
          title: "Đăng tin thất bại",
        });
      }
    });
  };
  const onChangeCategory = (id) => {
    dataState = {
      category_id: id,
      ...dataState,
    };
  };
  const onChangeJobType = (id) => {
    dataState = {
      job_type: id,
      ...dataState,
    };
  };

  return isLoggedIn ? (
    <form
      className="form fv-plugins-bootstrap fv-plugins-framework postjob"
      id="kt_projects_add_form"
    >
      <div
        className="pb-5 mx-auto"
        data-wizard-type="step-content"
        data-wizard-state="current"
      >
        <h4 class="mb-10 pb-3 font-weight-bold text-dark">
          Việc cần tuyển freelancer
        </h4>
        <div class="row">
          <div class="col-xl-12">
            <div class="form-group row fv-plugins-icon-container">
              <label class="col-xl-3 col-lg-3 col-form-label">
                Chọn lĩnh vực cần tuyển
              </label>
              <div class="col-lg-4 col-md-9 col-sm-12" data-select2-id="4">
                <CategorySelect onChange={onChangeCategory} />
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
                  ref={titleRef}
                  defaultValue="Tiêu đề"
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
                  ref={descriptionRef}
                  defaultValue="Nội dung"
                />
                <div className="fv-plugins-message-container"></div>
              </div>
            </div>

            <div className="form-group row fv-plugins-icon-container">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Loại hình làm việc
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12">
                <JobTypeSelect onChange={onChangeJobType} />
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
                Ngân sách dự kiến
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12">
                <input
                  className="form-control form-control-lg form-control-solid"
                  name="customername"
                  type="text"
                  placeholder="VD: Thiết kế trang web bán hàng cao cấp"
                  ref={expectBalanceRef}
                  defaultValue="1000000"
                />
                <div className="fv-plugins-message-container"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="form-group row fv-plugins-icon-container">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Số ngày dự kiến
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12">
                <input
                  className="form-control form-control-lg form-control-solid"
                  name="customername"
                  type="text"
                  placeholder="VD: Thiết kế trang web bán hàng cao cấp"
                  ref={expectDayRef}
                  defaultValue="7"
                />
                <div className="fv-plugins-message-container"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <Button color="primary" onClick={handlePost}>
              Đăng bài
            </Button>
          </div>
        </div>
      </div>
    </form>
  ) : (
    <Redirect to="/" />
  );
};

export default PostJob;
