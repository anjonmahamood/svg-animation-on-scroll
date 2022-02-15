const header = document.querySelector('header');

function easeIn(x) {
  return x * x * x;
}

function fadeHeader() {
  const scrolledDistance = window.pageYOffset;
  header.style.opacity = 1 - easeIn(scrolledDistance / 500);
}

window.addEventListener('scroll', () => {
  fadeHeader();
});
