document.getElementById("scroll-button").addEventListener("click", function() {
    document.querySelector('#Coonfederaciones').scrollIntoView({
        behavior: 'smooth'
    });
});
const imgContainer = document.querySelector('.confederaciones');
const imgFront = document.querySelector('.img-front');
const imgBack = document.querySelector('.img-back');

imgContainer.addEventListener('mouseenter', () => {
  imgFront.style.opacity = 0;
  imgBack.style.opacity = 1;
});

imgContainer.addEventListener('mouseleave', () => {
  imgFront.style.opacity = 1;
  imgBack.style.opacity = 0;
});
