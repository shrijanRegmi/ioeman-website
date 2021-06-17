import React, { useState } from "react";
import { useParams } from "react-router";
import syllabus from "../../utils/syllabus";
import "./style.scss";

const Syllabus = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  React.useEffect(() => {
    const data = syllabus.find((item) => item.id === id);
    if (data) {
      setData(data);
    }
  }, [id]);

  if (Object.keys(data).length === 0)
    return <h2 class="display-4 m-5">Nothing to show !</h2>;
  return (
    <div
      class="ioeman-syllabus"
      style={{
        marginBottom: "200px",
      }}
    >
      <div class="container text-left">
        {data.title && (
          <h2 class="page-title display-4 my-4 my-lg-5 text-center">{data.title}</h2>
        )}
        {data.objective && (
          <div class="syllabus-objective">
            <h4 className="text-left font-weight-bold">
              Course Objective:
            </h4>
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

        {data.tutorials && (
          <div class="syllabus-tutorial mt-5">
            <h4 className="text-left font-weight-bold mt-4 mb-3">Tutorials:</h4>
            <p className="lead">
              There shall be related tutorials exercised in class and given as
              regular homework exercises. Tutorials can be as following for each
              specified chapters.
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

        {data.references && (
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
      </div>
    </div>
  );
};

export default Syllabus;
