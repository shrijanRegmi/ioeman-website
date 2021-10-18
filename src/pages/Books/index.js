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

const Books = () => {
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
      class="ioeman-syllabus row"
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
            <h2 class="page-title display-4 my-4 my-lg-5 text-center">
              {data.title}
            </h2>
          )}
          <Empty />
        </div>
      ) : (
        <div
          class="text-left px-4 px-lg-5 col-12 col-lg-8 col-xl-10"
          style={{
            marginBottom: "200px",
          }}
        >
          {data.title && (
            <h2 class="page-title display-4 my-4 my-lg-5 text-center">
              {data.title}
            </h2>
          )}
          {data.books &&
            data.books.map((item, i) => {
              return (
                <div class="syllabus-objective mb-5" key={i}>
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
                    tabindex="-1"
                    role="dialog"
                    id="books-previewer"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered modal-xl mr-4"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <button
                            type="button"
                            class="modal-btn-close close"
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
                      class="btn btn-dark modal-btn-done mr-4"
                      href={`${process.env.PUBLIC_URL}/pdfs/${item.path}`}
                      target="_blank"
                      download
                    >
                      Download
                    </a>
                    <div
                      class="btn btn-dark modal-btn-done"
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
