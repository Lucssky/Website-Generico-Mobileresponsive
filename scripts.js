let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicadores = document.querySelector('.indicadores');
let dots = indicadores.querySelectorAll('ul li');
let list = container.querySelector('.list');

let active = 0;
let firstPositon = 0;
let lastPosition = items.length - 1;

function setSlider() {
  let itemOld = container.querySelector('.list .item.active');
  itemOld.classList.remove('active');

  let dotsOld = indicadores.querySelector('ul li.ativo');
  dotsOld.classList.remove('ativo');
  dots[active].classList.add('ativo');

  indicadores.querySelector('.number').innerHTML = active + 1;

}

nextButton.onclick = () => {
  list.style.setProperty('--calcular',1);

  active = active + 1 > lastPosition ? 0 : active + 1;
  setSlider()
  items[active].classList.add('active');
}

prevButton.onclick =  ()=> {
  list.style.setProperty('--calcular',-1);

  active = active - 1 < firstPositon ? lastPosition : active- 1;
  setSlider()
  items[active].classList.add('active');
}

let startX = 0;
let endX = 0;
const listaItens = document.querySelector('.list');
const itens = document.querySelectorAll('.list .item');
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  listaItens.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  listaItens.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
  });

  listaItens.addEventListener("touchend", () => {
    if (startX > endX + 50) {
      nextSlide(); // Deslizou para a esquerda
    } else if (startX < endX - 50) {
      prevSlide(); // Deslizou para a direita
    }
  });

  function nextSlide() {
    itens[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % itens.length;
    itens[currentIndex].classList.add("active");
  }

  function prevSlide() {
    itens[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + itens.length) % itens.length;
    itens[currentIndex].classList.add("active");
  }
});

 

