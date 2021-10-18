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

const Syllabus = () => {
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
      <SideMenu className="d-none d-lg-block col-12 col-lg-4 col-xl-2" />

      {isMenuClicked ? (
        <SideMenu className="w-100" style={{ width: "100%" }} />
      ) : Object.keys(data).length === 0 ? (
        <Empty className="col-12 col-lg-8 col-xl-10" />
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
          {data.objective && (
            <div className="syllabus-objective">
              <h4 className="text-left font-weight-bold">Course Objective:</h4>
              <p className="lead">{data.objective}</p>
            </div>
          )}

          {data.chapters && (
            <div className="syllabus-chapters">
              <ol>
                {data.chapters.map((chapter, i) => {
                  return (
                    <div key={i}>
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
            <div className="syllabus-tutorial mt-5">
              <h4 className="text-left font-weight-bold mt-4 mb-3">
                Tutorials:
              </h4>
              <p className="lead">
                There shall be related tutorials exercised in className and
                given as regular homework exercises. Tutorials can be as
                following for each specified chapters.
              </p>
              <ol>
                {data.tutorials.map((tutorial, i) => {
                  return (
                    <li
                      className="mt-2"
                      style={{
                        fontSize: "20px",
                      }}
                      key={i}
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
            <div className="syllabus-references mt-5">
              <h4 className="text-left font-weight-bold mt-4 mb-3">
                Practicals:
              </h4>
              <ol>
                {data.practicals.map((ref, i) => {
                  return (
                    <li
                      className="mt-2"
                      style={{
                        fontSize: "20px",
                      }}
                      key={i}
                    >
                      {ref}
                    </li>
                  );
                })}
              </ol>
            </div>
          )}

          {data.references && data.references.length > 0 && (
            <div className="syllabus-references mt-5">
              <h4 className="text-left font-weight-bold mt-4 mb-3">
                References:
              </h4>
              <ol>
                {data.references.map((ref, i) => {
                  return (
                    <li
                      className="mt-2"
                      style={{
                        fontSize: "20px",
                      }}
                      key={i}
                    >
                      {ref}
                    </li>
                  );
                })}
              </ol>
            </div>
          )}

          {data.evaluationScheme && (
            <div className="syllabus-evaluation-scheme mt-5">
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
