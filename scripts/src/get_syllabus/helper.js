import puppeteer from "puppeteer";

const convertUrlToData = async (url) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`${url}`);
    const data = await page.evaluate(() => {
      const faculty = "computer";
      const semester = "first";

      const newDoc = document.querySelector(".ioesolutions-custom");
      if (newDoc) {
        const data = {
          id: `${faculty}-${semester}-`,
          title: "",
          objective: "",
          chapters: [],
          practicals: [],
          references: [],
          evaluationScheme: "",
        };

        // get subject title and id
        const title = newDoc.querySelector("h5");
        if (title.innerText !== "") {
          data.title = title.innerText.trim();
          data.id =
            data.id +
            data.title
              .toLowerCase()
              .replace("-", "")
              .replace(" ", "")
              .replace(/\s/g, "");
        }
        //

        // get subject objective
        const allBs = newDoc.querySelectorAll("b");
        for (const myB of allBs) {
          if (myB.innerText.trim().includes("Course Objective")) {
            const objectives = [];
            if (
              myB.nextElementSibling &&
              myB.nextElementSibling.localName === "ol"
            ) {
              for (const olChild of myB.nextElementSibling.children) {
                if (olChild.innerText.trim() !== "") {
                  objectives.push(olChild.innerText.trim());
                }
              }
              data.objective = objectives.join(", ");
            } else if (
              myB.parentElement.innerText.trim().includes("Course Objective") &&
              myB.parentElement.innerText
                .trim()
                .replace("Course Objective", "")
                .replace("Course Objectives", "")
                .replace("\n", "")
                .replace(":", "").length > 5
            ) {
              data.objective = myB.parentElement.innerText
                .trim()
                .replace("Course Objective", "")
                .replace("Course Objectives", "")
                .replace("\n", "")
                .replace(":", "");
            } else if (
              myB.parentElement.nextElementSibling &&
              myB.parentElement.nextElementSibling.localName === "ol"
            ) {
              for (const olChild of myB.parentElement.nextElementSibling
                .children) {
                if (olChild.innerText.trim() !== "") {
                  objectives.push(olChild.innerText.trim());
                }
              }
              data.objective = objectives.join(", ");
            }
          }
        }
        //

        // get subject chapters
        const chapTitles = document.querySelectorAll("ol b");
        for (const chapTitle of chapTitles) {
          const chapter = {
            title: "",
            topics: [],
          };
          chapter.title = chapTitle.innerText.trim();
          if (chapTitle.innerText.trim() !== "") {
            if (chapTitle.parentElement.nextElementSibling) {
              for (const olChild of chapTitle.parentElement.nextElementSibling
                .children) {
                if (olChild.localName === "li") {
                  if (olChild.innerText.trim() !== "") {
                    chapter.topics = [
                      ...chapter.topics,
                      olChild.innerText.trim(),
                    ];
                  }
                } else if (olChild.localName === "ol") {
                  chapter.topics[chapter.topics.length - 1] += ":- ";
                  for (const lastChild of olChild.children) {
                    chapter.topics[
                      chapter.topics.length - 1
                    ] += `${lastChild.innerText.trim()},`;
                  }
                }
              }
            }
          }
          if (chapter.title !== "") {
            data.chapters.push(chapter);
          }
        }
        //

        // get subject practicals
        for (const myB of allBs) {
          if (myB.innerText.trim().includes("Practical")) {
            if (
              myB.nextElementSibling &&
              myB.nextElementSibling.localName === "ol"
            ) {
              for (const olChild of myB.nextElementSibling.children) {
                if (olChild.innerText.trim() !== "") {
                  data.practicals.push(olChild.innerText.trim());
                }
              }
            } else if (
              myB.parentElement.nextElementSibling &&
              myB.parentElement.nextElementSibling.localName === "ol"
            ) {
              for (const olChild of myB.parentElement.nextElementSibling
                .children) {
                if (olChild.innerText.trim() !== "") {
                  data.practicals.push(olChild.innerText.trim());
                }
              }
            } else if (
              myB.parentElement.innerText.trim().includes("Practical")
            ) {
              data.practicals.push(
                myB.parentElement.innerText
                  .trim()
                  .replace("Practical", "")
                  .replace("\n", "")
                  .replace(":", "")
              );
            }
          }
        }
        //

        // get subject references
        for (const myB of allBs) {
          if (myB.innerText.trim().includes("Reference")) {
            if (
              myB.nextElementSibling &&
              myB.nextElementSibling.localName === "ol"
            ) {
              for (const olChild of myB.nextElementSibling.children) {
                if (olChild.innerText.trim() !== "") {
                  data.references.push(olChild.innerText.trim());
                }
              }
            } else if (
              myB.parentElement.nextElementSibling &&
              myB.parentElement.nextElementSibling.localName === "ol"
            ) {
              for (const olChild of myB.parentElement.nextElementSibling
                .children) {
                if (olChild.innerText.trim() !== "") {
                  data.references.push(olChild.innerText.trim());
                }
              }
            } else if (
              myB.parentElement.innerText.trim().includes("Practical")
            ) {
              data.references.push(
                myB.parentElement.innerText
                  .trim()
                  .replace("Practical", "")
                  .replace("\n", "")
                  .replace(":", "")
              );
            }
          }
        }
        //

        // get subject evaluation scheme
        const eScheme = newDoc.querySelector("table");
        if (eScheme) {
          data.evaluationScheme = eScheme.outerHTML.replace("\n", "");
        }
        //

        return JSON.stringify(data);
      }
    });

    return data;
  } catch (error) {
    console.log("Error!!!: Generating Data");
    throw error;
  }
};

const getFinalData = (variable, finalData) => {
  return `const ${variable} = [${finalData.toString()}]`;
};

export { convertUrlToData, getFinalData };
