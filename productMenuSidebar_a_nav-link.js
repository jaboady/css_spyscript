console.table(
  [...document.querySelectorAll(
    '#productMenuSidebar a.nav-link'
  )].slice(0, 12).map(e => ({
    texte: e.textContent.trim(),
    position: getComputedStyle(e).position,
    hauteur: e.offsetHeight,
    parentHauteur: e.parentElement.offsetHeight
  }))
);
