const data = {
  id: "computer-sixth-",
  title: "",
  objective: "",
  chapters: [],
  practicals: [],
  references: [],
  evaluationScheme: "",
};

// CASE : I => ol or ul present
const getDataFromOLUL = () => {
  const titles = document.getElementsByTagName("b");

  for (const title of titles) {
    if (title.nextSibling && title.nextSibling.nextSibling) {
      const children = title.nextSibling.nextSibling.children;
      const topics = [];
      if (children) {
        for (const topic of children) {
          topics.push(topic.innerText.replaceAll("\n", "; "));
        }

        if (title.innerText && title.innerText !== "" && topics.length > 0) {
          const item = {
            title: title.innerText,
            topics: topics,
          };

          data.chapters.push(item);
        }
      }
    }
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CASE : II => p is wrapped in div
const getDataFromPWrappedInDiv = () => {
  const divs = document.getElementsByTagName("div");

  for (const div of divs) {
    const item = {
      title: "",
      topics: [],
    };

    for (const element of div.children) {
      if (element.children.length > 0) {
        item.title = element.innerText;
      } else {
        item.topics.push(element.innerText);
      }
    }

    data.chapters.push(item);
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CASE : III => p is alone
const getDataFromPOnly = () => {
  const pTags = document.getElementsByTagName("p");

  let title = "";
  let topics = [];

  for (let i = 0; i < pTags.length; i++) {
    const element = pTags[i];
    let already = false;

    const item = {
      title: "",
      topics: [],
    };

    if (element.children && element.children.length > 0) {
      title = element.innerText;
      topics = [];
    } else {
      topics.push(element.innerText);
    }

    while (element.children && element.children.length == 0 && !already) {
      already = true;
      item.title = title;
      item.topics = topics;
    }

    if (
      item.title &&
      item.title !== "" &&
      !data.chapters.map((e) => e.title).includes(item.title)
    ) {
      data.chapters.push(item);
    }
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CASE : IV => table is present with ol or ul
const getDataFromTableOLUL = () => {
  const tables = document.querySelectorAll("table");

  for (const table of tables) {
    const item = {
      title: "",
      topics: [],
    };
    item.title = table.innerText.replaceAll("\n", "").replaceAll("\t", "");
    item.topics = table.nextElementSibling.innerText.split("\n") || [];

    data.chapters.push(item);
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CASE : IV => table is present with div
const getDataFromTableDiv = () => {
  const tables = document.querySelectorAll("table");
  const spans = document.querySelectorAll("span");

  for (const span of spans) {
    console.log(span);
  }

  for (const table of tables) {
    const item = {
      title: "",
      topics: [],
    };
    item.title = table.innerText.replaceAll("\n", "").replaceAll("\t", "");

    data.chapters.push(item);
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CASE : V => from ioesolution website
const getDataFromIoeSolutionWebsite = () => {
  // get subject title
  const title = document.querySelector("h5");
  if (title.innerText !== "") {
    data.title = title.innerText.trim();
  }
  //

  // get subject objective
  const allBs = document.querySelectorAll("b");
  for (const myB of allBs) {
    if (myB.innerText.trim().includes("Course Objective")) {
      const objectives = [];
      if (myB.parentElement.innerText.trim().includes("Course Objective")) {
        data.objective = myB.parentElement.innerText
          .trim()
          .replaceAll("Course Objective", "")
          .replaceAll("Course Objectives", "")
          .replaceAll("\n", "")
          .replace(":", "");
      } else if (
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
        myB.parentElement.nextElementSibling &&
        myB.parentElement.nextElementSibling.localName === "ol"
      ) {
        for (const olChild of myB.parentElement.nextElementSibling.children) {
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
              chapter.topics = [...chapter.topics, olChild.innerText.trim()];
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
      if (myB.nextElementSibling && myB.nextElementSibling.localName === "ol") {
        for (const olChild of myB.nextElementSibling.children) {
          if (olChild.innerText.trim() !== "") {
            data.practicals.push(olChild.innerText.trim());
          }
        }
      } else if (
        myB.parentElement.nextElementSibling &&
        myB.parentElement.nextElementSibling.localName === "ol"
      ) {
        for (const olChild of myB.parentElement.nextElementSibling.children) {
          if (olChild.innerText.trim() !== "") {
            data.practicals.push(olChild.innerText.trim());
          }
        }
      } else if (myB.parentElement.innerText.trim().includes("Practical")) {
        data.practicals.push(
          myB.parentElement.innerText
            .trim()
            .replaceAll("Practical", "")
            .replaceAll("\n", "")
            .replace(":", "")
        );
      }
    }
  }
  //

  // get subject references
  for (const myB of allBs) {
    if (myB.innerText.trim().includes("Reference")) {
      if (myB.nextElementSibling && myB.nextElementSibling.localName === "ol") {
        for (const olChild of myB.nextElementSibling.children) {
          if (olChild.innerText.trim() !== "") {
            data.references.push(olChild.innerText.trim());
          }
        }
      } else if (
        myB.parentElement.nextElementSibling &&
        myB.parentElement.nextElementSibling.localName === "ol"
      ) {
        for (const olChild of myB.parentElement.nextElementSibling.children) {
          if (olChild.innerText.trim() !== "") {
            data.references.push(olChild.innerText.trim());
          }
        }
      } else if (myB.parentElement.innerText.trim().includes("Practical")) {
        data.references.push(
          myB.parentElement.innerText
            .trim()
            .replaceAll("Practical", "")
            .replaceAll("\n", "")
            .replace(":", "")
        );
      }
    }
  }
  //

  // get subject evaluation scheme
  const eScheme = document.querySelector("table");
  if (eScheme) {
    data.evaluationScheme = eScheme.outerHTML.replaceAll("\n", "");
  }
  //
};

getDataFromIoeSolutionWebsite();

const chaptersDiv = document.getElementById("chapters");
chaptersDiv.innerText = `${JSON.stringify(data)}`;
