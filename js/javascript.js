/**
 * image slide change
 */
let heroImgs = document.querySelectorAll('.hero__img');
let dots = document.querySelectorAll('.dot');
let imgIndex = 0;
let heroLen = heroImgs.length;

heroImgs[imgIndex].style.display = 'block';
dots[imgIndex].style.background = 'black';
setInterval(updateHeroIndex, 3000);

function updateHeroIndex() {
  displayHeroImg();

  if (imgIndex < heroLen - 1) {
    imgIndex++;
  } else {
    imgIndex = 0;
  }
}

function displayHeroImg() {
  heroImgs[imgIndex].style.display = 'block';
  dots[imgIndex].style.background = 'black';

  for (let i = 0; i < heroLen; i++) {
    if (i != imgIndex) {
      heroImgs[i].style.display = 'none';
      dots[i].style.background = 'white';
    }
  }
}

/**
 * open register box
 */
let registration = document.querySelector('.registration');
let cancelBtn = document.querySelector('.cancelBtn');
let accountBtn = document.querySelector('.accountBtn');

accountBtn.onclick = function() {
  registration.style.display = 'flex';
}

cancelBtn.onclick = function() {
  registration.style.display = 'none';
}