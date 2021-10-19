import { useState } from "react";
import "./style.scss";

const Tabs = ({ initialItem, items, onChange }) => {
  const [currentTab, setCurrentTab] = useState(
    initialItem || (items && items[0])
  );
  const handleChange = (item) => {
    setCurrentTab(item);
    onChange(item);
  };

  return (
    <div className="ioeman-tabs">
      <div className="d-flex justify-content-between align-items-center">
        {items.map((item, i) => {
          return (
            <h4
              key={i}
              onClick={() => handleChange(item)}
              className={`${currentTab.id === item.id && "tab-active"}`}
            >
              {item.value}
            </h4>
          );
        })}
      </div>
    </div>
  );
};

Tabs.defaultProps = {
  items: [],
  onChange: () => {},
};

export default Tabs;
