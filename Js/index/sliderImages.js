//Get all the imports from the dom
const mainSection = document.querySelector(".main");
const mainImage = document.querySelector(".main__image");
const sliderButtons = document.querySelectorAll(".main__footer-buttons button");
const contentTitle = document.querySelector(".main__content .title");
const contentLink = document.querySelector(".main__content .detail");
const progressBars = document.querySelectorAll(".progress-bar");

//This changes the images via the img element
const contentData = [
  {
    image: "assets/images/slides/1.jpg",
    title: "Native House",
    link: "#",
  },
  {
    image: "assets/images/slides/2.jpg",
    title: "Interior Design",
    link: "#",
  },
  {
    image: "assets/images/slides/3.jpg",
    title: "Exterior Design",
    link: "#",
  },
];

//Set the current state of the slider
let currentSlideIndex = 0;

function changeSlide() {
  const image = contentData[currentSlideIndex].image;
  const title = contentData[currentSlideIndex].title;
  const link = contentData[currentSlideIndex].link;

  // // Update image 'src' directly
  mainImage.src = `/${image}`;
  mainImage.alt = title;
  mainImage.classList.add("image-slide-in");

  // Update Content
  contentTitle.textContent = title;
  contentLink.href = link;

  //(Progress bar logic remains the same)
  progressBars.forEach((progressBar) => {
    progressBar.style.width = "0%";
  });

  // Animate only the progress bar of the active button
  const activeButton = document.querySelectorAll(
    ".main__footer-buttons button"
  )[currentSlideIndex];
  activeButton.nextElementSibling.style.width = "100%";

  //This is the part that updates the index slider
  currentSlideIndex++;

  //If the index slider is greater that the content of the length which we have we initialize it to 0
  if (currentSlideIndex >= contentData.length) {
    currentSlideIndex = 0;
  }
  animateTitle();
}

//Change the image based on the number of the button from the start
sliderButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    currentSlideIndex = index;
    changeSlide();
  });
});

mainImage.classList.remove("image-slide-in");

let intervalId; // To store the timer

function startTimer(interval) {
  intervalId = setInterval(changeSlide, interval);
}
setInterval(changeSlide, 6000);

function stopTimer() {
  clearInterval(intervalId);
}

// Initial Slide and Timer
changeSlide();
// startTimer(10000)
