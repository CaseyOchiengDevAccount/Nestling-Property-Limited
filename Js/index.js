const contentData = [
    {
        image: "../assets/images/slides/1.jpg",
        title: "Native House",
        link: "#"
    },
    {
        image: "../assets/images/slides/2.jpg",
        title: "Project Two",
        link: "#"
    },
    {
        image: "../assets/images/slides/J7.jpg",
        title: "Another Project",
        link: "#"
    }
];

const mainSection = document.querySelector('.main');
const sliderButtons = document.querySelectorAll('.main__footer-buttons button');
const contentTitle = document.querySelector('.main__content .title');
const contentLink = document.querySelector('.main__content .detail');

console.log(sliderButtons)
let currentSlideIndex = 0; // Start with the first slide

function changeSlide() {
    console.log("Called")
    const image = contentData[currentSlideIndex].image;
    const title = contentData[currentSlideIndex].title;
    const link = contentData[currentSlideIndex].link;

    // Update background image
    mainSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('/${image}')`;

    // Update Content
    contentTitle.textContent = title;
    contentLink.href = link;

    currentSlideIndex++;
    if (currentSlideIndex >= contentData.length) {
        currentSlideIndex = 0;
    }

    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(progressBar => {
        progressBar.style.width = '0%';
    });

    // Animate only the progress bar of the active button
    const activeButton = document.querySelectorAll('.main__footer-buttons button')[currentSlideIndex];
    console.log(activeButton)
    activeButton.nextElementSibling.style.width = '100%';
}

sliderButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentSlideIndex = index;
        changeSlide();
    });
});

let intervalId; // To store the timer

function startTimer(interval) {
    intervalId = setInterval(changeSlide, interval);
}
setInterval(changeSlide, 5000);

function stopTimer() {
    clearInterval(intervalId);
}

// Initial Slide and Timer
changeSlide();
// startTimer(10000)

const images = document.querySelectorAll(".main_image-slider img");
const imageTitle = document.querySelector(".main_h1");
const hamburgerBtn = document.querySelector('.main__hamburger-btn');
const navList = document.querySelector('.main__list');
const button = document.querySelector('.main__hamburger-btn');


const listItems = navList.querySelectorAll('li');

hamburgerBtn.addEventListener('click', () => {
    navList.classList.toggle('active');

    if (navList.classList.contains('active')) {
        listItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = 1;
                item.style.transform = 'translateX(0)';
            }, index * 100); // 100ms delay for each item
        });
    } else {
        listItems.forEach(item => {
            item.style.opacity = 0;
            item.style.transform = 'translateX(-20px)';
        });
    }
});

button.addEventListener('click', function () {
    this.classList.toggle('active');
});
