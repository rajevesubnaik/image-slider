const imgContainer = document.querySelector('.img-container');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

const imgArray = ['contBcg-0', 'contBcg-1', 'contBcg-2', 'contBcg-3', 'contBcg-4'];
let counter = 0;

function imgSlide(imgCount) {
  if (imgCount <= -1) {
    counter = imgArray.length - 1;
  } else if (imgCount >= imgArray.length) {
    counter = 0;
  }
  imgContainer.style.backgroundImage = `url('img/${imgArray[counter]}.jpeg')`;
}

btnLeft.addEventListener('click', () => {
  counter --;
  imgSlide(counter);
})

btnRight.addEventListener('click', () => {
  counter ++;
  imgSlide(counter);
})