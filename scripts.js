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

