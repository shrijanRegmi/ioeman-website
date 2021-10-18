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

  const [category, setCategory] = useState("syllabus");

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
    <div className="home">
      <div className="modal fade" tabindex="-1" role="dialog" id="myModal">
        <div
          className="modal-dialog modal-dialog-centered modal-xl"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
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
              <div className="modal-select modal-select-faculty text-left">
                <h4 className="font-weight-bold">Select Faculty</h4>
                <div className="dropdown">
                  <div
                    className="btn btn-outline-dark ioman-dropdown-toggler dropdown-toggle text-left"
                    data-toggle="dropdown"
                  >
                    {selectedFaculty} Engineering
                  </div>
                  <div className="dropdown-menu">
                    {Object.keys(modalData).map((key, value) => {
                      return (
                        <div
                          className="dropdown-item"
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
              <div className="modal-select modal-select-semester text-left">
                <h4 className="font-weight-bold">Select Semester</h4>
                <div className="dropdown">
                  <div
                    className="btn btn-outline-dark ioman-dropdown-toggler dropdown-toggle text-left"
                    data-toggle="dropdown"
                  >
                    {selectedSemester} Semester
                  </div>
                  <div className="dropdown-menu">
                    {Object.keys(modalData[selectedFaculty]).map(
                      (key, value) => {
                        return (
                          <div
                            className="dropdown-item"
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
              <div className="modal-select modal-select-semester text-left">
                <h4 className="font-weight-bold">Select Subject</h4>
                <div className="dropdown">
                  <div
                    className="btn btn-outline-dark ioman-dropdown-toggler dropdown-toggle text-left"
                    data-toggle="dropdown"
                  >
                    {selectedSubject}
                  </div>
                  <div className="dropdown-menu">
                    {modalData[selectedFaculty][selectedSemester].map(
                      (item) => {
                        return (
                          <div
                            className="dropdown-item"
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
                to={
                  selectedFaculty !== "Computer"
                    ? ""
                    : `${category}/${getId({
                        faculty: selectedFaculty,
                        semester: selectedSemester,
                        subject: selectedSubject,
                      })}`
                }
              >
                <div
                  className="btn btn-dark modal-btn-done"
                  onClick={() => {
                    if (selectedFaculty === "Computer") {
                      $("#myModal").modal("toggle");
                    }
                  }}
                >
                  {selectedFaculty !== "Computer" ? "Coming Soon !!!" : "Done"}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <HomeImgSm className="home-img-sm w-100" />
      <div className="home-list p-3 p-sm-5">
        <h1 className="font-weight-bold text-left">Home</h1>
        {categories.map((item, i) => {
          return (
            <div
              className="mCard text-left"
              data-toggle="modal"
              data-target="#myModal"
              key={i}
              onClick={() => {
                setCategory(item.title.toLowerCase().replace(" ", ""));
              }}
            >
              <h5 className="font-weight-bold">{item.title}</h5>
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
