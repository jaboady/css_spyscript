const a = document.querySelector(
  '#productMenuSidebar a.nav-link'
);

console.table(
  [...document.querySelectorAll(
    '#productMenuSidebar a.nav-link'
  )]
  .filter(e => ['Design', 'Translation Processes']
    .includes(e.textContent.trim()))
  .map(e => ({
    texte: e.textContent.trim(),
    hauteur: e.offsetHeight,
    top: Math.round(e.getBoundingClientRect().top),
    parent: e.parentElement.className
  }))
);
