import "./style.scss";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/postjob" className="my-auto nav-bar__link">
      Đăng tin tuyển dụng
      </Link>
      {/* <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
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
      </Dropdown> */}
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          Tìm việc làm
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/jobs">
            Tất cả công việc
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/jobs">
            Việc bán thời gian
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/jobs">
            Việc toàn thời gian
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/jobs">
            Cuộc thi thiết kế
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {/* <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          Tìm Freelancer
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="#">
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
      <Link to="/users" className="my-auto nav-bar__link">
          Tất cả Freelancer
      </Link>
    </nav>
  );
};

export default NavBar;
