const draggableArrow = document.getElementById("dragArrow");
const intro = document.getElementById("intro");
const introMain = document.getElementById("introMain");
const contents = document.getElementById("contents");
const contentAbout = document.getElementById("contentAbout");
const contentSkills = document.getElementById("contentSkills");
const contentProject = document.getElementById("contentProject");

const body = document.getElementsByTagName("body")[0];
const moon = document.getElementById("moon");
const stars = document.getElementById("stars");
const m1 = document.getElementById("m1");
const m2 = document.getElementById("m2");
const m3 = document.getElementById("m3");
const ground = document.getElementById("ground");
const section = document.getElementById("section");
let isSmall = false;

if (window.innerWidth <= 768) {
  isSmall = true;
}
window.scrollTo(0, 0);
// body.style = "height: 100vh; overflow: hidden";
contents.style.display = "none";

// draggableArrow.onclick = () => {
//   main.removeAttribute("style");
// };

const checkDrag = (e) => {
  dragAmount = draggableArrow.getBoundingClientRect().y;
  if (dragAmount > 50) {
    intro.style.top = draggableArrow.getBoundingClientRect().y - 50 + "px";
  }
  if (dragAmount > 75) {
    intro.style.opacity = 1 - dragAmount / screen.height;
  } else {
    intro.style.opacity = 1;
  }
  if (dragAmount > screen.height / 2) {
    intro.classList.add("closeIntro");
    draggableArrow.remove();
    setTimeout(() => {
      introMain.remove();
      body.removeAttribute("style");
      section.style.overflowY = "hidden";
      contents.removeAttribute("style");
    }, 400);
  }
};

const stopDrag = (e) => {
  draggableArrow.style.top = "25px";
  intro.style.top = "0";
  intro.style.opacity = 1;
};

if (!isSmall) $("#dragArrow").draggable({ axis: "y", drag: checkDrag, stop: stopDrag });
else {
  draggableArrow.remove();
  setTimeout(() => {
    opacityValue = 0;
    const hide = setInterval(() => {
      if (opacityValue > 1) {
        introMain.remove();
        body.removeAttribute("style");
        section.style.overflowY = "hidden";
        contents.removeAttribute("style");
        clearInterval(hide);
      }
      introMain.style.opacity = 1 - opacityValue;
      opacityValue += 0.1;
    }, 50);
  }, 1800);
}

const titleSkills = document.getElementById("titleSkills");
const navBtn = document.querySelectorAll("nav a");
const navAnimation = document.getElementById("navAnimation");
let currentTab = navBtn[0];
const navbar = document.getElementById("navbar");

// console.log(navbar.getBoundingClientRect.height);

navAnimation.style.left = currentTab.offsetLeft + "px";
navAnimation.style.width = currentTab.offsetWidth + "px";
currentTab.onmouseover = () => {
  currentTab.style.color = "#010101";
};

navBtn.forEach((element) => {
  element.onclick = () => {
    if (element === currentTab) return;
    // currentTab.classList.remove("focus");
    // currentTab.removeAttribute("style");
    // navAnimation.style.left = element.offsetLeft + "px";
    // navAnimation.style.width = element.offsetWidth + "px";
    // currentTab = element;
    // currentTab.onmouseover = () => {
    //   currentTab.style.color = "#010101";
    // };
    // currentTab.classList.add("focus");
    if (element === navBtn[0]) {
      console.log("ngi click");
      window.scrollTo(0, 0);
    } else if (element === navBtn[1]) {
      window.scrollBy(0, titleSkills.getBoundingClientRect().top - navbar.getBoundingClientRect().height - 20);
    } else if (element === navBtn[2]) {
      window.scrollBy(0, titleProjects.getBoundingClientRect().top - navbar.getBoundingClientRect().height - 20);
    }
    // else if (element === navBtn[2]) {
    //   window.scrollBy(0, titleProjects.getBoundingClientRect().top - 100);
    // }
  };
});

let snapAllowed = true;
let toAboutDone = false;
let toAboutProcessing = false;
let topSnap;
let values = {};

window.onscroll = () => {
  contentChangeValue = 300;
  snapAllowed = true;

  if (topSnap) {
    clearTimeout(topSnap);
  }
  toAboutProcessing = false;

  if (titleProjects.getBoundingClientRect().top <= contentChangeValue) {
    currentTab.classList.remove("focus");
    currentTab.removeAttribute("style");
    navAnimation.style.left = navBtn[2].offsetLeft + "px";
    navAnimation.style.width = navBtn[2].offsetWidth + "px";
    currentTab = navBtn[2];
    currentTab.onmouseover = () => {
      currentTab.style.color = "#010101";
    };
    currentTab.classList.add("focus");

    assignvalue(contentProject);
    if (Math.floor(scrollY) >= values.topLimit && Math.floor(scrollY) <= values.bottomLimit && !toAboutProcessing) {
      clearTimeout(topSnap);
      toAboutProcessing = true;
      startTimeOut(values);
    }
  } else if (titleSkills.getBoundingClientRect().top <= contentChangeValue) {
    currentTab.classList.remove("focus");
    currentTab.removeAttribute("style");
    navAnimation.style.left = navBtn[1].offsetLeft + "px";
    navAnimation.style.width = navBtn[1].offsetWidth + "px";
    currentTab = navBtn[1];
    currentTab.onmouseover = () => {
      currentTab.style.color = "#010101";
    };
    currentTab.classList.add("focus");

    assignvalue(contentSkills);
    values.topLimit = values.topLimit - contentSkills.getBoundingClientRect().height / 2;
    values.bottomLimit = values.bottomLimit + contentSkills.getBoundingClientRect().height / 2;

    if (Math.floor(scrollY) >= values.topLimit && Math.floor(scrollY) <= values.bottomLimit && !toAboutProcessing) {
      clearTimeout(topSnap);
      toAboutProcessing = true;
      startTimeOut(values);
    }
  } else if (titleSkills.getBoundingClientRect().top > contentChangeValue) {
    currentTab.classList.remove("focus");
    currentTab.removeAttribute("style");
    navAnimation.style.left = navBtn[0].offsetLeft + "px";
    navAnimation.style.width = navBtn[0].offsetWidth + "px";
    currentTab = navBtn[0];
    currentTab.onmouseover = () => {
      currentTab.style.color = "#010101";
    };
    currentTab.classList.add("focus");

    assignvalue(contentAbout);
    if (Math.floor(scrollY) >= values.topLimit && Math.floor(scrollY) <= values.bottomLimit && !toAboutProcessing) {
      clearTimeout(topSnap);
      toAboutProcessing = true;
      startTimeOut(values);
    }
  }

  if (toAboutProcessing) {
    if (Math.floor(scrollY) <= values.topLimit || Math.floor(scrollY) >= values.bottomLimit) {
      toAboutProcessing = false;
      clearTimeout(topSnap);
    }
    if (Math.floor(scrollY) >= values.topLimit && Math.floor(scrollY) <= values.bottomLimit && !toAboutProcessing) {
      clearTimeout(topSnap);
      toAboutProcessing = true;
      startTimeOut(values);
    }
  }
  if (Math.floor(scrollY) === Math.floor(values.topLimit)) {
    clearTimeout(topSnap);
    toAboutProcessing = false;
  }

  let scrollValue = window.scrollY;
  stars.style.top = scrollValue * -0.4 + "px";
  stars.style.left = scrollValue * 0.3 + "px";
  moon.style.top = scrollValue * 0.6 + "px";
  m3.style.top = scrollValue * 0.25 + "px";
  if (window.innerWidth > 1400) {
    ground.style.top = scrollValue * -0.1 + "px";
  }
  m1.style.top = scrollValue * 0.3 + "px";
  m2.style.top = scrollValue * 0.05 + "px";
};

const btnSkills = document.getElementById("btnSkills");

// btnSkills.onmouseover = () => {
//   console.log("ngo");
//   window.scrollBy(0, titleSkills.getBoundingClientRect().top - 100);
//   // console.log(titleSkills.getBoundingClientRect().top);
// };

// const scroll = () => {
//   setTimeout({
//     window.scrollTo
//   },100)
// }

const contact = document.querySelectorAll(".contact");

contact.forEach((element) => {
  element.onclick = () => {
    navigator.clipboard.writeText(element.textContent);
    element.classList.add("copied");
    setTimeout(() => {
      element.classList.remove("copied");
    }, 750);
  };
});
