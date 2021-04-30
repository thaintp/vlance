import "./style.scss";
import { map_status } from "utils/status";
import classNames from "classnames";

const TabBar = ({ tab, setTab }) => {
  return (
    <div className="tab-bar">
      {Object.entries(map_status).map(([key, value]) => (
        <div
          className={classNames("tab-bar__item", {
            "tab-bar__item--active": tab === key,
          })}
          key={key}
          onClick={() => setTab(key)}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default TabBar;
