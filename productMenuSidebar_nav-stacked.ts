const e = document.querySelector(
  '#productMenuSidebar .nav-stacked'
);

console.log({
  hauteur: e.offsetHeight,
  enfants: e.children.length,
  float: getComputedStyle(e).float,
  overflow: getComputedStyle(e).overflow,
  display: getComputedStyle(e).display
});
