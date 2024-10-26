const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

let people = [
  {

    name: "MOTILAL BOHARA ",
    profession: "RETD.IGP NEPAL POLICE BANESHWOR, KATHMANDU",
    description:
      "I am using Water Treatment Plant in my residence for last one year, supplied by Supreme Associates Traders, Gairidhara, Kathmandu.I am satisfied with the performance of the machine and service provided by them.Mr.Biraj Acharya has been quick to respond on behalf of Supreme Associates Traders.I look forward to continuing this relationship in the future."
  },

  {

    name: "RAJIV LACOUL ",
    profession: "REGULAR CUSTOMER",
    description:
      "I am happy with the service provided by Supreme Associates Traders, Gairidhara, Kathmandu. They are providing very quick and reliable after sales service."
  },

  {
    name: "KAMALA RAI ",
    profession: "REGULAR CUSTOMER",
    description:
      "I was looking for eco-friendly water treatment options for our home, and Supreme Associates Traders turned out to be the perfect choice.Their team has provided regular servicing, and the quality of their work has been outstanding.The product not only improves the water quality but also enhances its taste. I highly recommend their services!"
  },

  {

    name: "ANJU SHAH",
    profession: "REGULAR CUSTOMER",
    description:
      "The follow-up from Supreme Associates Traders is regular and timely. The technicians also guide us through simple and easy steps to run the system.I expect the same quality of service in the future as well."
  }
  ,
  {

    name: "SURAJ SHAKYA",
    profession: "REGULAR CUSTOMER",
    description:
      "I have installed water treatment plant from Supreme Associates Traders a few years back and am highly satisfied with the quality of the products provided.The service provided by Mr.Biraj Acharya and his team is commendatory.Looking forward to working with you more."
  }
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
  let reviewWrapWidth = reviewWrap.offsetWidth + "px";
  let descriptionHeight = description.offsetHeight + "px";
  //(+ or -)
  let side1symbol = whichSide === "left" ? "" : "-";
  let side2symbol = whichSide === "left" ? "-" : "";

  let tl = gsap.timeline();

  if (isChickenVisible) {
    tl.to(chicken, {
      duration: 0.4,
      opacity: 0
    });
  }

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 0,
    translateX: `${side1symbol + reviewWrapWidth}`
  });

  tl.to(reviewWrap, {
    duration: 0,
    translateX: `${side2symbol + reviewWrapWidth}`
  });

  setTimeout(() => {
    imgDiv.style.backgroundImage = people[personNumber].photo;
  }, 400);
  setTimeout(() => {
    description.style.height = descriptionHeight;
  }, 400);
  setTimeout(() => {
    personName.innerText = people[personNumber].name;
  }, 400);
  setTimeout(() => {
    profession.innerText = people[personNumber].profession;
  }, 400);
  setTimeout(() => {
    description.innerText = people[personNumber].description;
  }, 400);

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 1,
    translateX: 0
  });

  if (isChickenVisible) {
    tl.to(chicken, {
      duration: 0.4,
      opacity: 1
    });
  }
}

function setNextCardLeft() {
  if (currentPerson === 3) {
    currentPerson = 0;
    slide("left", currentPerson);
  } else {
    currentPerson++;
  }

  slide("left", currentPerson);
}

function setNextCardRight() {
  if (currentPerson === 0) {
    currentPerson = 3;
    slide("right", currentPerson);
  } else {
    currentPerson--;
  }

  slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

surpriseMeBtn.addEventListener("click", () => {
  if (chicken.style.opacity === "0") {
    chicken.style.opacity = "1";
    imgDiv.classList.add("move-head");
    surpriseMeBtn.innerText = "Remove the chicken";
    surpriseMeBtn.classList.remove("surprise-me-btn");
    surpriseMeBtn.classList.add("hide-chicken-btn");
    isChickenVisible = true;
  } else if (chicken.style.opacity === "1") {
    chicken.style.opacity = "0";
    imgDiv.classList.remove("move-head");
    surpriseMeBtn.innerText = "Surprise me";
    surpriseMeBtn.classList.add("surprise-me-btn");
    surpriseMeBtn.classList.remove("hide-chicken-btn");
    isChickenVisible = false;
  }
});

window.addEventListener("resize", () => {
  description.style.height = "100%";
});
