import React, { useState } from "react";
import Icon from "react-icons-kit";
import { useParams } from "react-router";
import SideMenu from "../../components/sidemenu";
import syllabus from "../../utils/syllabus";
import "./style.scss";
import { ic_menu } from "react-icons-kit/md/ic_menu";
import { ic_close } from "react-icons-kit/md/ic_close";
import { scrollWindow } from "../../utils/helpers";
import Empty from "../../components/empty";

const OldQuestions = () => {
  const [data, setData] = useState({});
  const [isMenuClicked, setMenuClicked] = useState(false);
  const { id } = useParams();

  React.useEffect(() => {
    scrollWindow();
    setMenuClicked(false);
    const data = syllabus.find((item) => item.id === id);
    if (data) {
      setData(data);
    } else {
      setData({});
    }
  }, [id]);

  const handleMenuClick = (val) => {
    scrollWindow();
    setMenuClicked(val);
  };

  return (
    <div
      class="ioeman-syllabus row"
      style={{
        minHeight: "100vh",
      }}
    >
      <SideMenu
        category="oldquestions"
        className="d-none d-lg-block col-12 col-lg-4 col-xl-2"
      />
      <Empty className="col-12 col-lg-8 col-xl-10" />

      <div
        className="menu-container d-block d-lg-none"
        onClick={() => handleMenuClick(!isMenuClicked)}
      >
        <Icon
          icon={isMenuClicked ? ic_close : ic_menu}
          size={30}
          onClick={() => handleMenuClick(!isMenuClicked)}
        />
      </div>
    </div>
  );
};

export default OldQuestions;
