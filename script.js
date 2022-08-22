//toggle menu
const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
//sidebar menu
const container = document.querySelector('.container');

menu.onclick = function () {
  sidebar.classList.toggle('small-sidebar');
  container.classList.toggle('large-container');
};
