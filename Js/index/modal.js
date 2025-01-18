let openModalButton = document.querySelector('.footer__button')

openModalButton.addEventListener('click', openModal)

function openModal() {
  document.querySelector(".modal").style = "block";
}

function closeModal() {
  document.querySelector(".modal").style.display = "none";
}