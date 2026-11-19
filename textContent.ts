const a = [...document.querySelectorAll(
  '#productMenuSidebar a.nav-link'
)].find(e => e.textContent.trim() === 'Style Books');

console.log({
  display: getComputedStyle(a).display,
  height: getComputedStyle(a).height,
  maxHeight: getComputedStyle(a).maxHeight,
  overflow: getComputedStyle(a).overflow,
  parentDisplay: getComputedStyle(a.parentElement).display
});
