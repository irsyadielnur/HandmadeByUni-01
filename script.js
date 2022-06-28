// navbar for mobile, drop doww
const menuBurger = document.querySelector('.menu-burger input');
const nav = document.querySelector('nav ul');

menuBurger.addEventListener('click', function () {
  nav.classList.toggle('slide');
});

// window scroll navbar, sticky nacbar
const nav2 = document.querySelector('nav');
window.addEventListener('scroll', function () {
  this.scrollY > 20 ? nav2.classList.add('active') : nav2.classList.remove('active');
});

// main tentang kami muncul, parallax
const about = document.querySelector('.content1');
const about2 = document.querySelector('.content2');
window.addEventListener('scroll', function (i) {
  this.scrollY > 470 ? about.classList.add('muncul') : about.classList.remove('muncul');

  this.scrollY > 700 ? about2.classList.add('muncul') : about2.classList.remove('muncul');
});

// navbar href scroll tenang, smooth scrolling anchor link
const nav3 = document.querySelector('nav ul li a');
document.querySelectorAll('nav ul li a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
