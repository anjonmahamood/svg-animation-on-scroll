const header = document.querySelector('header');
const blobs = document.querySelectorAll('g.blob');
const sections = document.querySelectorAll('section');

function easeIn(x) {
  return x * x * x;
}

function fadeHeader() {
  const scrolledDistance = window.pageYOffset;
  header.style.opacity = 1 - easeIn(scrolledDistance / 500);
}

function animateBlobs() {
  const scrolledDistance = window.pageYOffset;

  blobs.forEach((blob, index) => {
    const currentSection = sections[index];
    if (scrolledDistance > currentSection.offsetTop - 300) {
      blob.classList.add('in-view-path');
    } else {
      blob.classList.remove('in-view-path');
    }
  });
}

window.addEventListener('scroll', () => {
  fadeHeader();
  animateBlobs();
});
