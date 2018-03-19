$(".single-item").slick({
  dots: true,
  arrows: false,
  // autoplay: true
});
var idMenuContainer = 'menu-container',
    clsMenuCollapse = 'menu-collapse',
    idToggleBox = 'menu-toggle',
    clsToggleTranform = 'transform',
    idMainContainer = 'main-container',
    clsBlur = 'blur';

function toggleClass(id, additionalClassName) {
  var object = document.getElementById(id);
  var className = object && object.className;
  if (!className || typeof className !== 'string') {
    return;
  }
  if (className.indexOf(additionalClassName) === -1) {
    object.className += ` ${additionalClassName}`;
  } else {
    object.className = className.replace(additionalClassName, '').trim();
  }
}

function toggleMenu() {
  toggleClass(idMenuContainer, clsMenuCollapse);
  toggleClass(idToggleBox, clsToggleTranform);
  toggleClass(idMainContainer, clsBlur);
}

function setHeightMenu() {
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;

  var menu = document.getElementById('menu-container');

  if (menu) {
    menu.style.height = `${y}px`;
  }
  console.log('WIDTH', x);
  console.log('HEIGHT', y);
}

var btnMenuTop = document.getElementById('btn-menu-top');

btnMenuTop && btnMenuTop.addEventListener("click", toggleMenu);

setHeightMenu();

