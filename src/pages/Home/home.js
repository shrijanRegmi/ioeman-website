import "./style.scss";
import { useState } from "react";
import { ReactComponent as HomeImgLg } from "../../assets/images/home_img_lg.svg";
import { ReactComponent as HomeImgSm } from "../../assets/images/home_img_sm.svg";
// import { ReactComponent as ContainerTop } from '../../assets/images/container_top.svg';

const categories = [
  {
    id: 1,
    title: "Syllabus",
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit impedit repellat quia repudiandae voluptatibus",
  },
  {
    id: 2,
    title: "Notes",
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit impedit repellat quia repudiandae voluptatibus",
  },
  {
    id: 3,
    title: "Old Questions",
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit impedit repellat quia repudiandae voluptatibus",
  },
  {
    id: 4,
    title: "Formulas",
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit impedit repellat quia repudiandae voluptatibus",
  },
];

// const modalData = {
//   faculties: [
//     'Aerospace',
//     'Agricultural',
//     'Architecture',
//     'Automobile',
//     'Civil',
//     'Computer',
//     'Electrical',
//     'Electronics and Communication',
//     'Geomatics',
//     'Industial',
//     'Mechanical',
//   ],
// };

const modalData = {
  Aerospace: {
    First: [
      "Applied Mechanics",
      "Basic Electrical Engineering",
      "Engineering Drawing I",
      "Engineering Math I",
      "Engineering Physics",
      "Workshop Technology",
    ],
    Second: [],
    Third: [],
    Fourth: [],
    Fifth: [],
    Sixth: [],
    Seventh: [],
    Eighth: [],
  },
  Agricultural: {
    First: [],
    Second: [],
    Third: [],
    Fourth: [],
    Fifth: [],
    Sixth: [],
    Seventh: [],
    Eighth: [],
  },
  Architecture: {
    First: [],
    Second: [],
    Third: [],
    Fourth: [],
    Fifth: [],
    Sixth: [],
    Seventh: [],
    Eighth: [],
  },
  Automobile: {
    First: [],
    Second: [],
    Third: [],
    Fourth: [],
    Fifth: [],
    Sixth: [],
    Seventh: [],
    Eighth: [],
  },
  Civil: {
    First: [],
    Second: [],
    Third: [],
    Fourth: [],
    Fifth: [],
    Sixth: [],
    Seventh: [],
    Eighth: [],
  },
  Computer: {
    First: [
      "Applied Mechanics",
      "Basic Electrical Engineering",
      "C Programming",
      "Drawing I",
      "Engineering Physics",
      "Math I",
    ],
    Second: [
      "Basic Electronics",
      "Engineering Chemistry",
      "Drawing II",
      "Math II",
      "Fundamental of Thermodynamics and Heat Transfer",
      "Workshop Technology",
    ],
    Third: [
      "Digital Logic",
      "Electric Circuit Theory",
      "Electromagnetics",
      "Electronic Devices and Circuits",
      "Engineering Math III",
      "Object Oriented Programming",
      "Theory of Computation",
    ],
    Fourth: [
      "Applied Mathematics",
      "Data Structure and Algorithmn",
      "Discrete Structure",
      "Electric Machine",
      "Instrumentation I",
      "Microprocessor",
      "Numerical Methods",
    ],
    Fifth: [
      "Communication English",
      "Computer Graphics",
      "Computer Organization and Architecture",
      "Data Communication",
      "Instrumentation II",
      "Probability and Statistics",
      "Software Engineering",
    ],
    Sixth: [
      "Artification Intelligence",
      "Database Management System",
      "Embedded System",
      "Engineering Economics",
      "Minor Project",
      "Object Oriented Analysis and Design",
      "Operating System",
    ],
    Seventh: [
      "Computer Network",
      "Digital Signal Analysis and Processing",
      "Distributed System",
      "Energy, Environment and Society",
      "ICT Project Management",
      "Organization and Management",
      "Project (Part A)",
      "Elective I",
    ],
    Eighth: [
      "Engineering Professional Practice",
      "Information System",
      "Internet and Intranet",
      "Project (Part B)",
      "Simulation and Modeling",
      "Elective II",
      "Elective III",
    ],
  },
  Electrical: {
    First: [],
    Second: [],
    Third: [],
    Fourth: [],
    Fifth: [],
    Sixth: [],
    Seventh: [],
    Eighth: [],
  },
  Electronics: {
    First: [],
    Second: [],
    Third: [],
    Fourth: [],
    Fifth: [],
    Sixth: [],
    Seventh: [],
    Eighth: [],
  },
  Geomatics: {
    First: [],
    Second: [],
    Third: [],
    Fourth: [],
    Fifth: [],
    Sixth: [],
    Seventh: [],
    Eighth: [],
  },
  Industial: {
    First: [],
    Second: [],
    Third: [],
    Fourth: [],
    Fifth: [],
    Sixth: [],
    Seventh: [],
    Eighth: [],
  },
  Mechanical: {
    First: [],
    Second: [],
    Third: [],
    Fourth: [],
    Fifth: [],
    Sixth: [],
    Seventh: [],
    Eighth: [],
  },
};

const Home = () => {
  const [selectedFaculty, setSelectedFaculty] = useState("Aerospace");
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
                <h3 className="font-weight-bold">Select Faculty</h3>
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
                <h3 className="font-weight-bold">Select Semester</h3>
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
                <h3 className="font-weight-bold">Select Subject</h3>
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
              <div class="btn btn-dark modal-btn-done" data-dismiss="modal">
                Done
              </div>
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
