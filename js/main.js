const menuButton = document.querySelector('.linia-menu-toggle');
const mainNavigation = document.querySelector('.linia-nav');

function closeMenu() {
  if (!menuButton || !mainNavigation) return;
  menuButton.setAttribute('aria-expanded', 'false');
  mainNavigation.classList.remove('is-open');
  document.body.classList.remove('is-menu-open');
}

if (menuButton && mainNavigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    mainNavigation.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('is-menu-open', !isOpen);
  });

  mainNavigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.linia-nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',open?'true':'false');toggle.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));}
