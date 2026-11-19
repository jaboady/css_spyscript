const a = [...document.querySelectorAll(
  '#productMenuSidebar a.nav-link'
)].find(e => e.textContent.trim() === 'Style Books');

console.log({
  fontSize: getComputedStyle(a).fontSize,
  lineHeight: getComputedStyle(a).lineHeight,
  padding: getComputedStyle(a).padding,
  rectHeight: a.getBoundingClientRect().height,
  scrollHeight: a.scrollHeight,
  visibility: getComputedStyle(a).visibility
});
