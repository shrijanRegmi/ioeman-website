import "./style.scss";
import { useState } from "react";
import { ReactComponent as HomeImgLg } from "../../assets/images/home_img_lg.svg";
import { ReactComponent as HomeImgSm } from "../../assets/images/home_img_sm.svg";
import { Link } from "react-router-dom";
import $ from "jquery";
import getId from "../../utils/id_generator";
import modalData from "../../utils/faculties";
import categories from "../../utils/categories";

const Home = () => {
  const [selectedFaculty, setSelectedFaculty] = useState("Computer");
  const [selectedSemester, setselectedSemester] = useState("First");
  const [selectedSubject, setSelectedSubject] = useState("Applied Mechanics");

  const handleFacultySelection = (faculty) => {
    setSelectedFaculty(faculty);
    const subjects = modalData[selectedFaculty][selectedSemester];
    if (subjects.length > 0) {
      setSelectedSubject(subjects[0]);
    }
  };

  const handleSemesterSelection = (semester) => {
    setselectedSemester(semester);
    const subjects = modalData[selectedFaculty][semester];
    if (subjects.length > 0) {
      setSelectedSubject(subjects[0]);
    }
  };

  const handleSubjectSelection = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <div class="home">
      <div class="modal fade" tabindex="-1" role="dialog" id="myModal">
        <div
          class="modal-dialog modal-dialog-centered modal-xl"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-body">
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
              <div class="modal-select modal-select-faculty text-left">
                <h4 className="font-weight-bold">Select Faculty</h4>
                <div class="dropdown">
                  <div
                    class="btn btn-outline-dark ioman-dropdown-toggler dropdown-toggle text-left"
                    data-toggle="dropdown"
                  >
                    {selectedFaculty} Engineering
                  </div>
                  <div class="dropdown-menu">
                    {Object.keys(modalData).map((key, value) => {
                      return (
                        <div
                          class="dropdown-item"
                          key={key}
                          onClick={() => handleFacultySelection(key)}
                        >
                          {key} Engineering
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div class="modal-select modal-select-semester text-left">
                <h4 className="font-weight-bold">Select Semester</h4>
                <div class="dropdown">
                  <div
                    class="btn btn-outline-dark ioman-dropdown-toggler dropdown-toggle text-left"
                    data-toggle="dropdown"
                  >
                    {selectedSemester} Semester
                  </div>
                  <div class="dropdown-menu">
                    {Object.keys(modalData[selectedFaculty]).map(
                      (key, value) => {
                        return (
                          <div
                            class="dropdown-item"
                            key={key}
                            onClick={() => handleSemesterSelection(key)}
                          >
                            {key} Semester
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
              <div class="modal-select modal-select-semester text-left">
                <h4 className="font-weight-bold">Select Subject</h4>
                <div class="dropdown">
                  <div
                    class="btn btn-outline-dark ioman-dropdown-toggler dropdown-toggle text-left"
                    data-toggle="dropdown"
                  >
                    {selectedSubject}
                  </div>
                  <div class="dropdown-menu">
                    {modalData[selectedFaculty][selectedSemester].map(
                      (item) => {
                        return (
                          <div
                            class="dropdown-item"
                            key={item}
                            onClick={() => handleSubjectSelection(item)}
                          >
                            {item}
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
              <Link
                to={`syllabus/${getId({
                  faculty: selectedFaculty,
                  semester: selectedSemester,
                  subject: selectedSubject,
                })}`}
              >
                <div
                  class="btn btn-dark modal-btn-done"
                  onClick={() => {
                    $("#myModal").modal("toggle");
                  }}
                >
                  Done
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <HomeImgSm className="home-img-sm w-100" />
      <div class="home-list p-3 p-sm-5">
        <h1 class="font-weight-bold text-left">Home</h1>
        {categories.map((item) => {
          return (
            <div
              class="mCard text-left"
              data-toggle="modal"
              data-target="#myModal"
            >
              {/* <ContainerTop className="container-top" /> */}
              <h5 class="font-weight-bold">{item.title}</h5>
              <p>{item.details}</p>
            </div>
          );
        })}
      </div>
      <HomeImgLg className="mainImgContainer" />
    </div>
  );
};

export default Home;
