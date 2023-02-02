let lang = document.querySelector("[data=lang]");

let list = document.querySelector(".choose");

let link = document.querySelectorAll("a");

let dropDown = document.querySelector(".dropdown");

let homeList = document.querySelector(".homelist");

let frist = document.querySelector(".frist");

let second = document.querySelector(".second");

let third = document.querySelector(".third");

lang.addEventListener("click", function (e) {
  e.preventDefault();
  if (homeList.style.height === "445px") {
    homeList.style.height = "615px";
    list.style.cssText = "display:block; padding: 20px 40px;";
    link.forEach((e) => {
      e.classList.remove("active");
    });
    let ele = document.querySelector(".lang");
    ele.classList.add("active");
    let after = document.querySelector(".after");
    after.classList.add("activ");
  } else if (homeList.style.height === "615px") {
    homeList.style.height = "455px";
    list.style.cssText = "display: none; padding: 0px;";
    let ele = document.querySelector(".lang");
    let after = document.querySelector(".after");
    ele.classList.remove("active");
    after.classList.remove("activ");
  } else if (homeList.style.height === "0px") {
    homeList.style.height = "1px";
    list.style.cssText = "display:block; padding: 20px 40px;";
    link.forEach((e) => {
      e.classList.remove("active");
    });
    let ele = document.querySelector(".lang");
    ele.classList.add("active");
    let after = document.querySelector(".after");
    after.classList.add("activ");
  } else {
    homeList.style.height = "0px";
    list.style.cssText = "display: none; padding: 0px;";
    let ele = document.querySelector(".lang");
    let after = document.querySelector(".after");
    ele.classList.remove("active");
    after.classList.remove("activ");
  }
});

dropDown.addEventListener("click", function () {
  if (homeList.style.height === "0px") {
    homeList.style.height = "445px";
    frist.style.cssText = "transform: rotateZ(45deg);";
    second.style.cssText = "display: none;";
    third.style.cssText = "position: absolute; transform: rotateZ(-45deg);";
  } else {
    frist.style.cssText = "transform: rotateZ(0deg);";
    second.style.cssText = "display: block;";
    third.style.cssText = "position: initial; transform: rotateZ(0deg);";
    list.style.cssText = "display: none; padding: 0px;";
    homeList.style.height = "0px";
  }
});

let images = document.querySelector("[data=hidden]");

let showInp = document.querySelector("[data=hide]");

showInp.addEventListener("click", function () {
  if (showInp.className.includes("show")) {
    images.style.cssText = "display: block;";
    showInp.classList.remove("show");
    showInp.classList.add("hide");
    showInp.setAttribute("value", "Show Less.");
  } else if (showInp.className.includes("hide")) {
    images.style.cssText = "display: none;";
    showInp.classList.remove("hide");
    showInp.classList.add("show");
    showInp.setAttribute("value", "Show More.");
  }
});

let stories = document.querySelectorAll("[name=hide]");

let showStr = document.querySelector("[data=story]");

showStr.addEventListener("click", function () {
  if (showStr.className.includes("show")) {
    stories.forEach((e) => {
      e.style.cssText = "display: block;";
    });
    showStr.classList.remove("show");
    showStr.classList.add("hide");
    showStr.setAttribute("value", "Show Less Stories.");
  } else if (showStr.className.includes("hide")) {
    stories.forEach((e) => {
      e.style.cssText = "display: none;";
    });
    showStr.classList.remove("hide");
    showStr.classList.add("show");
    showStr.setAttribute("value", "Show More Stories.");
  }
});

const navLinks = document.querySelectorAll(".navlist a");
let ignoreLink = document.querySelector(".lang");

navLinks.forEach((link) => {
  if (link === ignoreLink) {
    ("");
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const sectionId = event.target.getAttribute("href");
      const section = document.querySelector(sectionId);
      section.scrollIntoView({ behavior: "smooth" });
      navLinks.forEach((e) => {
        e.classList.remove("active");
      });
      link.classList.add("active");
    });
  }
});

let footerList = document.querySelectorAll(".footerlist a");

footerList.forEach((li) => {
  li.addEventListener("click", (event) => {
    event.preventDefault();
    const sectionId = event.target.getAttribute("href");
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
    footerList.forEach((e) => {
      e.classList.remove("active");
    });
    li.classList.add("active");
  });
});
