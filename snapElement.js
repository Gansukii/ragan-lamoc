// let snapAllowed = true;
// let toAboutDone = false;
// let toAboutProcessing = false;
// let topSnap;
// let values = {};

const startTimeOut = (values) => {
  topSnap = setTimeout(() => {
    if (Math.floor(scrollY) >= values.topLimit && Math.floor(scrollY) <= values.bottomLimit && toAboutProcessing) {
      window.scrollTo({
        top: values.elementTop,
        left: 0,
        behavior: "smooth",
      });
    } else {
      clearTimeout(topSnap);
      toAboutProcessing = false;
    }
  }, 500);
};

const assignvalue = (element) => {
  const topLimit = Math.floor(
    element.getBoundingClientRect().top +
      scrollY -
      navbar.getBoundingClientRect().height -
      element.getBoundingClientRect().height / 4
  );
  const elementTop = Math.floor(element.getBoundingClientRect().top + scrollY - navbar.getBoundingClientRect().height);

  const bottomLimit = Math.floor(
    element.getBoundingClientRect().top -
      navbar.getBoundingClientRect().height +
      scrollY +
      element.getBoundingClientRect().height / 4
  );

  values = {
    topLimit,
    elementTop,
    bottomLimit,
  };
};

// window.onscroll = () => {
//   console.log("ngo");
// };

// window.onscroll = () => {
//   snapAllowed = true;

//   if (topSnap) {
//     clearTimeout(topSnap);
//   }
//   toAboutProcessing = false;

//   assignvalue(contentAbout);

//   if (Math.floor(scrollY) >= values.topLimit && Math.floor(scrollY) <= values.bottomLimit && !toAboutProcessing) {
//     clearTimeout(topSnap);
//     toAboutProcessing = true;
//     startTimeOut(values);
//   }

//   let b2 = toAboutProcessing;

//   if (toAboutProcessing) {
//     if (Math.floor(scrollY) <= values.topLimit || Math.floor(scrollY) >= values.bottomLimit) {
//       toAboutProcessing = false;
//       clearTimeout(topSnap);
//     }
//     if (Math.floor(scrollY) >= values.topLimit && Math.floor(scrollY) <= values.bottomLimit && !toAboutProcessing) {
//       clearTimeout(topSnap);
//       toAboutProcessing = true;
//       startTimeOut(values);
//     }
//   }
//   if (Math.floor(scrollY) === Math.floor(values.topLimit)) {
//     clearTimeout(topSnap);
//     toAboutProcessing = false;
//   }
// };
