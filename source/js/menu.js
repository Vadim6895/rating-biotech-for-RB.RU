const mainnav = document.querySelector('.main-nav');
const navtoggle = document.querySelector('.main-nav__toggle');

mainnav.classList.remove('main-nav--no-js');
mainnav.classList.remove('main-nav--opened');
mainnav.classList.add('main-nav--closed');

navtoggle.addEventListener('click', function () {
  if (mainnav.classList.contains('main-nav--closed')) {
    mainnav.classList.remove('main-nav--closed');
    mainnav.classList.add('main-nav--opened');
  } else {
    mainnav.classList.add('main-nav--closed');
    mainnav.classList.remove('main-nav--opened');
  }
});
