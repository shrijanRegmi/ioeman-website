import Icon from "react-icons-kit";
import { useHistory, useParams } from "react-router-dom";
import modalData from "../../utils/faculties";
import getId from "../../utils/id_generator";
import "./style.scss";
import { ic_keyboard_arrow_down } from "react-icons-kit/md/ic_keyboard_arrow_down";

const SideMenu = ({ className, style, category }) => {
  const { id } = useParams();
  const history = useHistory();
  const splitted = id.split("-");

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const faculty = capitalize(splitted[0]);
  const semester = capitalize(splitted[1]);
  const subject = splitted[2];

  return (
    <div className={`ioeman-sidemenu text-left p-4 ${className}`} style={style}>
      <h4 className="text-center font-weight-bold text-dark">
        {faculty} Engineering
      </h4>
      <hr />
      <div className="semester-container mt-4">
        {Object.keys(modalData[faculty]).map((sem) => {
          return (
            <div key={sem}>
              <div
                className={`item d-flex justify-content-between align-items-center mb-2 ${
                  sem === semester ? "item-active-no-bg" : ""
                }`}
                data-toggle="collapse"
                data-target={`#${sem}`}
              >
                <h5 className="text-left font-weight-bold">{sem} Semester</h5>
                <Icon icon={ic_keyboard_arrow_down} size={20} />
              </div>
              <ol id={sem} className={sem !== semester ? "collapse" : "show"}>
                {modalData[faculty][sem].map((sub) => {
                  return (
                    <li
                      className={`item mb-2 ${
                        sem === semester &&
                        sub
                          .toLowerCase()
                          .replaceAll(" ", "")
                          .replaceAll("-", "") === subject
                          ? "item-active"
                          : ""
                      }`}
                      key={sub}
                      onClick={() => {
                        history.push(
                          `/${category}/${getId({
                            faculty: faculty,
                            semester: sem,
                            subject: sub,
                          })}`
                        );
                      }}
                    >
                      <h6 className="font-weight-bold">{sub}</h6>
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        })}
      </div>
    </div>
  );
};

SideMenu.defaultProps = {
  className: "",
  style: {},
  category: "syllabus",
};

export default SideMenu;
