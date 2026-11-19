const el = document.querySelector(
  '#productMenuSidebar .nav-stacked'
);

console.table(
  [...el.children].map(e => ({
    texte: e.textContent.trim().slice(0, 35),
    position: getComputedStyle(e).position,
    float: getComputedStyle(e).float,
    display: getComputedStyle(e).display,
    hauteur: e.offsetHeight
  }))
);
