const mango = document.getElementById('mango-stamp');
const papaya = document.getElementById('papaya-stamp');
const lemon = document.getElementById('lemon-stamp');
const dragon = document.getElementById('dragon-stamp');
const asparagus = document.getElementById('asparagus-stamp');
const okra = document.getElementById('okra-stamp');
const Banana = document.getElementById('Banana-stamp');



/* 망고 */
window.addEventListener('scroll', () => {
  const mangoRect = mango.getBoundingClientRect(); // 요소의 위치를 가져옴
  const windowHeight = window.innerHeight;

  // 요소가 화면의 중앙에 위치할 때 나타나고, 벗어나면 사라짐
  if (mangoRect.top <= windowHeight * 0.7 && mangoRect.bottom >= windowHeight * 0.3) {
    mango.style.opacity = 1; // 나타남
  } else {
    mango.style.opacity = 0; // 사라짐
  }
});

/* 파파야 */
window.addEventListener('scroll', () => {
  const papayaRect = papaya.getBoundingClientRect(); 
  const windowHeight = window.innerHeight;

  
  if (papayaRect.top <= windowHeight * 0.7 && papayaRect.bottom >= windowHeight * 0.3) {
    papaya.style.opacity = 1; 
  } else {
    papaya.style.opacity = 0; 
  }
});

/* 레몬 */
window.addEventListener('scroll', () => {
  const lemonRect = lemon.getBoundingClientRect(); 
  const windowHeight = window.innerHeight;

  
  if (lemonRect.top <= windowHeight * 0.7 && lemonRect.bottom >= windowHeight * 0.3) {
    lemon.style.opacity = 1; 
  } else {
    lemon.style.opacity = 0; 
  }
});

/* 용과 */
window.addEventListener('scroll', () => {
  const dragonRect = dragon.getBoundingClientRect(); 
  const windowHeight = window.innerHeight;

  
  if (dragonRect.top <= windowHeight * 0.7 && dragonRect.bottom >= windowHeight * 0.3) {
    dragon.style.opacity = 1; 
  } else {
    dragon.style.opacity = 0; 
  }
});

/* 아스파라거스 */
window.addEventListener('scroll', () => {
  const asparagusRect = asparagus.getBoundingClientRect(); 
  const windowHeight = window.innerHeight;

  
  if (asparagusRect.top <= windowHeight * 0.7 && asparagusRect.bottom >= windowHeight * 0.3) {
    asparagus.style.opacity = 1; 
  } else {
    asparagus.style.opacity = 0; 
  }
});

/* 오크라 */
window.addEventListener('scroll', () => {
  const okraRect = okra.getBoundingClientRect(); 
  const windowHeight = window.innerHeight;

  
  if (okraRect.top <= windowHeight * 0.7 && okraRect.bottom >= windowHeight * 0.3) {
    okra.style.opacity = 1; 
  } else {
    okra.style.opacity = 0; 
  }
});

/* 바나나 */
window.addEventListener('scroll', () => {
  const BananaRect = Banana.getBoundingClientRect(); 
  const windowHeight = window.innerHeight;

  
  if (BananaRect.top <= windowHeight * 0.7 && BananaRect.bottom >= windowHeight * 0.3) {
    Banana.style.opacity = 1; 
  } else {
    Banana.style.opacity = 0; 
  }
});