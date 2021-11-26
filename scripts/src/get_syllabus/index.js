import { convertUrlToData, getFinalData } from "./helper.js";
import fs from "fs";

const variable = "ksFourthSemComputer";
const urls = [
  "https://ioesolutions.esign.com.np/contents/numerical-method-sh-553",
  "https://ioesolutions.esign.com.np/contents/applied-mathematics-sh-551",
  "https://ioesolutions.esign.com.np/contents/instrumentation-i-ee-552",
  "https://ioesolutions.esign.com.np/contents/data-structure-and-algorithm-ct-552",
  "https://ioesolutions.esign.com.np/contents/microprocessor-ex-551",
  "https://ioesolutions.esign.com.np/contents/discrete-structure-ct-551",
  "https://ioesolutions.esign.com.np/contents/electrical-machine-ee-554",
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
      console.log(`Success: Generating syllabus of ${finalData.length} subjects`);
    }
  );
};

export default getSyllabus;
