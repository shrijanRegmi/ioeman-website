import React, { useState } from "react";
import { useParams } from "react-router";
import syllabus from "../../utils/syllabus";

const Syllabus = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  React.useEffect(() => {
    const data = syllabus.find((item) => item.id === id);
    if (data) {
      setData(data);
    }
  }, []);

  if (Object.keys(data).length == 0)
    return <h2 class="display-4 m-5">Nothing to show !</h2>;
  return (
    <div
      class="ioeman-syllabus"
      style={{
        marginBottom: "200px",
      }}
    >
      <div class="container text-left">
        <h2 class="display-4 my-2 my-lg-5 text-center">{data.title}</h2>
        <div class="syllabus-objective">
          <h3 className="text-left font-weight-bold mt-4">Course Objective:</h3>
          <p className="lead">{data.objective}</p>
        </div>

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

        <div class="syllabus-tutorial mt-5">
          <h3 className="text-left font-weight-bold mt-4 mb-3">Tutorials:</h3>
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
                  <span className="font-weight-bold">{tutorial.title} : </span>
                  {tutorial.description}
                </li>
              );
            })}
          </ol>
        </div>

        <div class="syllabus-references mt-5">
          <h3 className="text-left font-weight-bold mt-4 mb-3">References:</h3>
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
      </div>
    </div>
  );
};

export default Syllabus;
