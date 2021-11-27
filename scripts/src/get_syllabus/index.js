import { convertUrlToData, getFinalData } from "./helper.js";
import fs from "fs";

const variable = "ksFifthSemCivil";
const urls = [
  "https://ioesolutions.esign.com.np/contents/theory-of-structure-ii-ce-601",
  "https://ioesolutions.esign.com.np/contents/water-supply-engineering-ce-605",
  "https://ioesolutions.esign.com.np/contents/engineering-hydrology-ce-606",
  "https://ioesolutions.esign.com.np/contents/concrete-technology-and-masonry-structure-ce-603",
  "https://ioesolutions.esign.com.np/contents/numerical-methods-sh-603",
  "https://ioesolutions.esign.com.np/contents/foundation-engineering-ce-602",
  "https://ioesolutions.esign.com.np/contents/survey-camp-ce-604",
];

const getSyllabus = async () => {
  const urlPromises = [];
  urls.forEach((url) => {
    const urlPromise = convertUrlToData(url);
    urlPromises.push(urlPromise);
  });
  let finalData = await Promise.all(urlPromises);
  finalData = finalData.filter((item) => item);

  fs.writeFile(
    "./data/syllabus.js",
    getFinalData(variable, finalData),
    (err) => {
      if (err) throw err;
      console.log(
        `Success: Generating syllabus of ${finalData.length}/${urls.length} subjects`
      );
    }
  );
};

export default getSyllabus;
