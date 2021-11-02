import ksFifthSemComputer from "./fifth_sem/computer";
import ksFirstSemCivil from "./first_sem/civil";
import ksFirstSemComputer from "./first_sem/computer";
import ksFourthSemComputer from "./fourth_sem/computer";
import ksSecondSemCivil from "./second_sem/civil";
import ksSecondSemComputer from "./second_sem/computer";
import ksSixthSemComputer from "./sixth_sem/computer";
import ksThirdSemComputer from "./third_sem/computer";

const studyMaterials = [
  ...ksFirstSemComputer,
  ...ksFirstSemCivil,

  ...ksSecondSemComputer,
  ...ksSecondSemCivil,

  ...ksThirdSemComputer,
  ...ksFourthSemComputer,
  ...ksFifthSemComputer,
  ...ksSixthSemComputer,
];

export default studyMaterials;
