import "./style.scss";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          Đăng tin tuyển dụng
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="#">
            Đăng việc theo dự án
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="#">
            Đăng việc bán thời gian
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="#">
            Đăng việc toàn thời gian
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="#">
            Đăng cuộc thi thiết kế
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          Tìm việc làm
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/jobs">
            Tất cả công việc
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="#">
            Việc bán thời gian
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="#">
            Việc toàn thời gian
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="#">
            Cuộc thi thiết kế
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          Tìm Freelancer
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="#">
            Tất cả Freelancer
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};

export default NavBar;
