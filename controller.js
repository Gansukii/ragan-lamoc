let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();
let timeline2 = new TimelineMax();
let timeline3 = new TimelineMax();

timeline
  .to("#introName", 1, { x: 350, opacity: 0 })
  .to("#introSub", 1, { x: -100, opacity: 0, zIndex: 0 }, "-=1")
  .to("#navbar", 1, { background: "#424242" }, "-=1")
  .to("#navName", 1, { opacity: 1 }, "-=1");

let scene = new ScrollMagic.Scene({
  // triggerElement: "#contents",
  duration: "100%",
  triggerHook: 0.8,
})
  .setTween(timeline)
  .addTo(controller);

timeline2
  .fromTo("#titleAbout", 10, { opacity: 0 }, { opacity: 1 })
  .fromTo("#pinIcon", 10, { y: -50, opacity: 0 }, { y: 0, opacity: 1 })
  .fromTo("#txtLocation", 1, { x: -50, opacity: 0 }, { x: 0, opacity: 1 })
  .fromTo("#educIcon", 10, { y: -50, opacity: 0 }, { y: 0, opacity: 1 })
  .fromTo("#txtEduc", 1, { x: -50, opacity: 0 }, { x: 0, opacity: 1 })
  .fromTo("#txtEduc1", 10, { y: -50, opacity: 0 }, { y: 0, opacity: 1 })
  .fromTo("#txtEduc2", 10, { y: -50, opacity: 0 }, { y: 0, opacity: 1 })
  .fromTo("#workIcon", 10, { y: -50, opacity: 0 }, { y: 0, opacity: 1 })
  .fromTo("#txtWork", 1, { y: -50, opacity: 0 }, { y: 0, opacity: 1 })
  .fromTo("#txtWork1", 10, { y: -50, opacity: 0 }, { y: 0, opacity: 1 })
  .fromTo("#txtAbout", 10, { y: -50, opacity: 0 }, { y: 0, opacity: 1 });

let scene2 = new ScrollMagic.Scene({
  triggerElement: "#contentAbout",
  duration: "40%",
  triggerHook: 0.5,
})
  .setTween(timeline2)
  // .addIndicators()
  .addTo(controller);

timeline3
  .fromTo("#titleSkills", 10, { opacity: 0 }, { opacity: 1 })
  .fromTo("#txtSkills", 10, { y: -30, opacity: 0 }, { y: 0, opacity: 1 });
let scene3 = new ScrollMagic.Scene({
  triggerElement: "#txtAbout",
  duration: "40%",
  triggerHook: 0.3,
})
  .setTween(timeline3)
  .addTo(controller);

const imgPy = document.getElementById("imgPy");
const imgJs = document.getElementById("imgJs");
const imgJa = document.getElementById("imgJa");
const imgPh = document.getElementById("imgPh");
const imgC = document.getElementById("imgC");
const imgMy = document.getElementById("imgMy");
const imgMo = document.getElementById("imgMo");
const imgRe = document.getElementById("imgRe");
const imgGear = document.getElementById("imgGear");

const boxz = document.getElementById("boxz");
const imgSkillContainer = document.getElementById("imgSkillContainer");

let isMouseOut = false;
let imgContainerW = imgSkillContainer.getBoundingClientRect().width / 4;
let pyTop = imgPy.offsetTop;
let pyLeft = imgPy.offsetLeft;

window.onresize = () => {
  resizeImg();
};

const resizeImg = () => {
  let shrinkValue = 1;
  if (window.innerWidth > 992) {
    imgGear.setAttribute("height", 200);
    imgGear.setAttribute("width", 200);
    shrinkValue = 1;
    resizeOperation(100);
  } else if (window.innerWidth <= 992) {
    imgGear.setAttribute("height", 125);
    imgGear.setAttribute("width", 125);
    shrinkValue = 0.75;
    resizeOperation(75);
  }

  // imgPy.setAttribute("width", imgPy.width * shrinkValue);
  // imgPy.setAttribute("height", imgPy.height * shrinkValue);
  // imgJs.setAttribute("width", imgPy.width * shrinkValue);
  // imgJs.setAttribute("height", imgPy.height * shrinkValue);
  // imgJa.setAttribute("width", imgPy.width * shrinkValue);
  // imgJa.setAttribute("height", imgPy.height * shrinkValue);
  // imgPh.setAttribute("height", imgPy.height * shrinkValue);
  // imgC.setAttribute("width", imgPy.width * shrinkValue);
  // imgC.setAttribute("height", imgPy.height * shrinkValue);
  // imgMy.setAttribute("height", imgPy.height * shrinkValue);
  // imgMo.setAttribute("height", imgPy.height * shrinkValue);
  // imgRe.setAttribute("width", imgPy.width * shrinkValue);
  // imgRe.setAttribute("height", imgPy.height * shrinkValue);
};

const resizeOperation = (size) => {
  imgPy.setAttribute("width", size);
  imgPy.setAttribute("height", size);
  imgJs.setAttribute("width", size);
  imgJs.setAttribute("height", size);
  imgJa.setAttribute("width", size);
  imgJa.setAttribute("height", size);
  imgPh.setAttribute("height", size);
  imgC.setAttribute("width", size);
  imgC.setAttribute("height", size);
  imgMy.setAttribute("height", size);
  imgMo.setAttribute("height", size);
  imgRe.setAttribute("width", size);
  imgRe.setAttribute("height", size);
  imgContainerW = imgSkillContainer.getBoundingClientRect().width / 4;
  pyTop = imgPy.offsetTop;
  pyLeft = imgPy.offsetLeft;
};

resizeImg();

imgSkillContainer.onmouseover = () => {
  // console.log(imgSkillContainer.getBoundingClientRect().width / 4);
  if (window.innerWidth < 1200) {
    // console.log(imgPy.offsetLeft);
    // imgPy.setAttribute("width", imgPy.width / 2);
    // imgPy.setAttribute("height", imgPy.height / 2);
    // imgPy.setAttribute("width", toString(imgPy.width / 2));
  }
  if (!isMouseOut) {
    imgPy.style.top = pyTop - 100 + "px";
    imgJs.style.top = pyTop - 100 + "px";
    imgJa.style.top = pyTop - 100 + "px";
    imgPh.style.top = pyTop - 100 + "px";
    imgC.style.top = pyTop + 100 + "px";
    imgMy.style.top = pyTop + 100 + "px";
    imgMo.style.top = pyTop + 100 + "px";
    imgRe.style.top = pyTop + 100 + "px";
    imgPy.style.left = pyLeft - imgContainerW * 1.5 + "px";
    imgJs.style.left = pyLeft - imgContainerW * 0.5 + "px";
    imgJa.style.left = pyLeft + imgContainerW * 0.5 + "px";
    imgPh.style.left = pyLeft + imgContainerW * 1.5 + "px";
    imgC.style.left = pyLeft - imgContainerW * 1.5 + "px";
    imgMy.style.left = pyLeft - imgContainerW * 0.5 + "px";
    imgMo.style.left = pyLeft + imgContainerW * 0.5 + "px";
    imgRe.style.left = pyLeft + imgContainerW * 1.5 + "px";
    // console.log(imgPy.offsetTop);
    // console.log(imgPy.offsetLeft);
    isMouseOut = true;
    imgPy.classList.add("skillLogoShow");
    imgJs.classList.add("skillLogoShow");
    imgJa.classList.add("skillLogoShow");
    imgPh.classList.add("skillLogoShow");
    imgC.classList.add("skillLogoShow");
    imgMy.classList.add("skillLogoShow");
    imgMo.classList.add("skillLogoShow");
    imgRe.classList.add("skillLogoShow");
    imgGear.classList.add("gearRotate");
  }
};
imgSkillContainer.onmouseleave = () => {
  imgPy.removeAttribute("style");
  imgJs.removeAttribute("style");
  imgJa.removeAttribute("style");
  imgPh.removeAttribute("style");
  imgC.removeAttribute("style");
  imgMy.removeAttribute("style");
  imgMo.removeAttribute("style");
  imgRe.removeAttribute("style");

  imgPy.classList.remove("skillLogoShow");
  imgJs.classList.remove("skillLogoShow");
  imgJa.classList.remove("skillLogoShow");
  imgPh.classList.remove("skillLogoShow");
  imgC.classList.remove("skillLogoShow");
  imgMy.classList.remove("skillLogoShow");
  imgMo.classList.remove("skillLogoShow");
  imgRe.classList.remove("skillLogoShow");
  imgGear.classList.remove("gearRotate");

  isMouseOut = false;
};

// const projImg = document.getElementById("projImg");
const projImgs = document.querySelectorAll("#projImg");

projImgs.forEach((projImg) => {
  projImg.onmouseover = () => {
    projImg.classList.add("cardImgZoom");
  };
  projImg.onmouseleave = () => {
    projImg.classList.remove("cardImgZoom");
  };
});

// const cardBtn = document.getElementById("cardBtn");
const cardBtns = document.querySelectorAll("#cardBtn");
// const cardBtnBack = document.getElementById("cardBtnBack");
const cardBtnsBack = document.querySelectorAll("#cardBtnBack");

cardBtns.forEach((cardBtn) => {
  cardBtn.onclick = () => {
    cardBtn.parentNode.parentNode.classList.add("cardRotate");
    setTimeout(() => {
      cardBtn.parentNode.parentNode.firstElementChild.classList.add("d-none");
      cardBtn.parentNode.parentNode.lastElementChild.classList.remove("d-none");
    }, 150);
  };
});

cardBtnsBack.forEach((cardBtnBack) => {
  cardBtnBack.onclick = () => {
    cardBtnBack.parentNode.parentNode.classList.remove("cardRotate");
    setTimeout(() => {
      cardBtnBack.parentNode.parentNode.firstElementChild.classList.remove("d-none");
      cardBtnBack.parentNode.parentNode.lastElementChild.classList.add("d-none");
    }, 150);
  };
});

// cardBtn.onclick = () => {
//   cardBtn.parentNode.parentNode.classList.add("cardRotate");
//   setTimeout(() => {
//     cardBtn.parentNode.parentNode.firstElementChild.classList.add("d-none");
//     cardBtn.parentNode.parentNode.lastElementChild.classList.remove("d-none");
//   }, 150);
// };

// cardBtnBack.onclick = () => {
//   cardBtnBack.parentNode.parentNode.classList.remove("cardRotate");
//   setTimeout(() => {
//     cardBtnBack.parentNode.parentNode.firstElementChild.classList.remove("d-none");
//     cardBtnBack.parentNode.parentNode.lastElementChild.classList.add("d-none");
//   }, 150);
// };

//################ reference for offset scroll
// https://stackoverflow.com/questions/49820013/javascript-scrollintoview-smooth-scroll-and-offset
