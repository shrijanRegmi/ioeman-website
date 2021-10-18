import React, { useState } from "react";
import Icon from "react-icons-kit";
import { useParams } from "react-router";
import SideMenu from "../../components/sidemenu";
import studyMaterials from "../../utils/study_materials";
import "./style.scss";
import { ic_menu } from "react-icons-kit/md/ic_menu";
import { ic_close } from "react-icons-kit/md/ic_close";
import { scrollWindow } from "../../utils/helpers";
import Empty from "../../components/empty";
import PDFRenderer from "../../components/pdf_renderer";

const OldQuestions = () => {
  const [data, setData] = useState({});
  const [isMenuClicked, setMenuClicked] = useState(false);
  const { id } = useParams();

  React.useEffect(() => {
    scrollWindow();
    setMenuClicked(false);
    const data = studyMaterials.find((item) => item.id === id);
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
      className="ioeman-syllabus row"
      style={{
        minHeight: "100vh",
      }}
    >
      <SideMenu
        category="oldquestions"
        className="d-none d-lg-block col-12 col-lg-4 col-xl-2"
      />
      {isMenuClicked ? (
        <SideMenu
          category="oldquestions"
          className="w-100"
          style={{ width: "100%" }}
        />
      ) : Object.keys(data).length === 0 ||
        !(data && data.books && data.books.length !== 0) ? (
        <div className="col-12 col-lg-8 col-xl-10">
          {data.title && (
            <h2 className="page-title display-4 my-4 my-lg-5 text-center">
              {data.title}
            </h2>
          )}
          <Empty />
        </div>
      ) : (
        <div
          className="text-left px-4 px-lg-5 col-12 col-lg-8 col-xl-10"
          style={{
            marginBottom: "200px",
          }}
        >
          {data.title && (
            <h2 className="page-title display-4 my-4 my-lg-5 text-center">
              {data.title}
            </h2>
          )}
          {data.old_questions && <PDFRenderer pdf={data.old_questions} />}
        </div>
      )}

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
