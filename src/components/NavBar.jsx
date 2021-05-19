import "./style.scss";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/postjob" className="my-auto nav-bar__link">
        Đăng tin tuyển dụng
      </Link>
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          Tìm việc làm
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/jobs">
            Tất cả công việc
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/jobs?type=0">
            Việc theo dự án
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/jobs?type=1">
            Việc toàn thời gian
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/jobs?type=2">
            Việc bán thời gian
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Link to="/users" className="my-auto nav-bar__link">
        Tất cả Freelancer
      </Link>
    </nav>
  );
};

export default NavBar;
