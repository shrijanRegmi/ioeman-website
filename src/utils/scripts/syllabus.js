const data = {
  chapters: [],
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

getDataFromPOnly();

console.log(data);
