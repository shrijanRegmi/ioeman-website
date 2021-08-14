import React, { useState } from "react";
import Icon from "react-icons-kit";
import { useParams } from "react-router";
import SideMenu from "../../components/sidemenu";
import syllabus from "../../utils/syllabus/";
import "./style.scss";
import { ic_menu } from "react-icons-kit/md/ic_menu";
import { ic_close } from "react-icons-kit/md/ic_close";
import { scrollWindow } from "../../utils/helpers";

const Syllabus = () => {
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
      <SideMenu className="d-none d-lg-block col-12 col-lg-4 col-xl-2" />

      {isMenuClicked ? (
        <SideMenu className="w-100" style={{ width: "100%" }} />
      ) : Object.keys(data).length === 0 ? (
        <h2 class="display-4">Nothing to show !</h2>
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
          {data.objective && (
            <div class="syllabus-objective">
              <h4 className="text-left font-weight-bold">Course Objective:</h4>
              <p className="lead">{data.objective}</p>
            </div>
          )}

          {data.chapters && (
            <div class="syllabus-chapters">
              <ol>
                {data.chapters.map((chapter) => {
                  return (
                    <div>
                      <li
                        className="font-weight-bold font"
                        style={{
                          fontSize: "20px",
                        }}
                      >
                        {chapter.title}
                      </li>
                      <ul className="mt-2 mb-3">
                        {chapter.topics.map((topic) => {
                          return (
                            <li
                              style={{
                                fontSize: "18px",
                              }}
                            >
                              {topic}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </ol>
            </div>
          )}

          {data.tutorials && data.tutorials.length > 0 && (
            <div class="syllabus-tutorial mt-5">
              <h4 className="text-left font-weight-bold mt-4 mb-3">
                Tutorials:
              </h4>
              <p className="lead">
                There shall be related tutorials exercised in class and given as
                regular homework exercises. Tutorials can be as following for
                each specified chapters.
              </p>
              <ol>
                {data.tutorials.map((tutorial) => {
                  return (
                    <li
                      className="mt-2"
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      <span className="font-weight-bold">
                        {tutorial.title} :{" "}
                      </span>
                      {tutorial.description}
                    </li>
                  );
                })}
              </ol>
            </div>
          )}

          {data.practicals && data.practicals.length > 0 && (
            <div class="syllabus-references mt-5">
              <h4 className="text-left font-weight-bold mt-4 mb-3">
                Practicals:
              </h4>
              <ol>
                {data.practicals.map((ref) => {
                  return (
                    <li
                      className="mt-2"
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      {ref}
                    </li>
                  );
                })}
              </ol>
            </div>
          )}

          {data.references && data.references.length > 0 && (
            <div class="syllabus-references mt-5">
              <h4 className="text-left font-weight-bold mt-4 mb-3">
                References:
              </h4>
              <ol>
                {data.references.map((ref) => {
                  return (
                    <li
                      className="mt-2"
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      {ref}
                    </li>
                  );
                })}
              </ol>
            </div>
          )}

          {data.evaluationScheme && (
            <div class="syllabus-evaluation-scheme mt-5">
              <h4 className="text-left font-weight-bold mt-4 mb-3">
                Evaluation Scheme:
              </h4>
              <div
                dangerouslySetInnerHTML={{ __html: `${data.evaluationScheme}` }}
              ></div>
            </div>
          )}
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

export default Syllabus;
