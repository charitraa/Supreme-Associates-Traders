window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('sticky');
  }

  else {
    navbar.classList.remove('sticky');
  }
});
document.querySelector('.menu-icon').addEventListener('click', function () {
  const menus = document.querySelector('.navbar-mobile');
  menus.classList.toggle('active');
  this.querySelector('i').classList.toggle('fa-bars');
  this.querySelector('i').classList.toggle('fa-times');
});

document.addEventListener('DOMContentLoaded', function () {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle-mobile');

  dropdownToggles.forEach(function (dropdownToggle) {
    dropdownToggle.addEventListener('click', function (event) {
      event.preventDefault();
      const dropdownMenu = dropdownToggle.nextElementSibling;
      dropdownMenu.classList.toggle('show-dropdown-mobile');
    });
  });
});


