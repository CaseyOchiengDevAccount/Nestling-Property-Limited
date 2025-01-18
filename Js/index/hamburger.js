const hamburgerBtn = document.querySelector('.main__hamburger-btn');
const navList = document.querySelector('.main__list');
const button = document.querySelector('.main__hamburger-btn');
const listItems = navList.querySelectorAll('li');

hamburgerBtn.addEventListener('click', () => {
  navList.classList.toggle('active');

  //Setting the stagger delay in javascript
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
