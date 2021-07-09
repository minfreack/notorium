const menuMobileButton = document.querySelector('#buttonMenu');
const menuMobile = document.querySelector('#menu-mobile-items');

export const helper = () => {menuMobileButton.addEventListener('click', e => {
    menuMobile.classList.toggle('nav-bar-mobile');
  });
}
export default helper;