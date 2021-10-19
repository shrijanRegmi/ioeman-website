import React, { useState } from "react";
import Icon from "react-icons-kit";
import { useHistory, useLocation, useParams } from "react-router";
import SideMenu from "../../components/sidemenu";
import studyMaterials from "../../utils/study_materials";
import "./style.scss";
import { ic_menu } from "react-icons-kit/md/ic_menu";
import { ic_close } from "react-icons-kit/md/ic_close";
import { scrollWindow } from "../../utils/helpers";
import Empty from "../../components/empty";
import PDFRenderer from "../../components/pdf_renderer";
import Tabs from "../../components/tabs";

const Books = () => {
  const [data, setData] = useState({});
  const [isMenuClicked, setMenuClicked] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();

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

  const tabItems = [
    {
      id: 0,
      value: "Syllabus",
      route: `/syllabus/${id}`,
    },
    {
      id: 1,
      value: "Books",
      route: `/books/${id}`,
    },
    {
      id: 2,
      value: "Old Questions",
      route: `/oldquestions/${id}`,
    },
  ];


  return (
    <div
      className="ioeman-syllabus row"
      style={{
        minHeight: "100vh",
      }}
    >
      <SideMenu
        category="books"
        className="d-none d-lg-block col-12 col-lg-4 col-xl-2"
      />

      {isMenuClicked ? (
        <SideMenu
          category="books"
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
          <Tabs
            initialItem={tabItems.find(
              (item) => item.route === location.pathname
            )}
            items={tabItems}
            onChange={(val) => {
              history.push(val.route);
            }}
          />

          {data.title && (
            <h2 className="page-title display-4 my-4 my-lg-5 text-center">
              {data.title}
            </h2>
          )}
          {data.books &&
            data.books.map((item, i) => {
              return (
                <div className="syllabus-objective mb-5" key={i}>
                  {item.title && (
                    <h4 className="text-left font-weight-bold">
                      {i + 1}. {item.title}
                    </h4>
                  )}
                  <p
                    className="lead"
                    style={{
                      marginBottom: "30px",
                    }}
                  >
                    {item.description}
                  </p>
                  <div
                    className="syllabus-pdf-previewer modal fade"
                    tabIndex="-1"
                    role="dialog"
                    id="books-previewer"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered modal-xl"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <button
                            type="button"
                            className="modal-btn-close close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span
                              aria-hidden="true"
                              style={{
                                width: "50px",
                                height: "50px",
                              }}
                            >
                              &times;
                            </span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <PDFRenderer pdf={item.path} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex">
                    <a
                      className="btn modal-btn-done mr-4 ioeman-bg-orange"
                      href={`${process.env.PUBLIC_URL}/pdfs/${item.path}`}
                      target="_blank"
                      rel="noreferrer"
                      download
                    >
                      Download
                    </a>
                    <div
                      className="btn modal-btn-done ioeman-bg-orange"
                      data-toggle="modal"
                      data-target="#books-previewer"
                      onClick={() => {}}
                    >
                      Preview
                    </div>
                  </div>
                </div>
              );
            })}
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

export default Books;
