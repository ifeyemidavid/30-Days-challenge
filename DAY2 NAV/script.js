const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

// Mobile click toggle
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  menuToggle.classList.toggle('active');
});

// PC hover behavior
if (window.innerWidth > 768) {
  const nav = document.querySelector('nav');
  nav.addEventListener('mouseenter', () => {
    navLinks.classList.add('show');
  });
  nav.addEventListener('mouseleave', () => {
    navLinks.classList.remove('show');
  });
}
