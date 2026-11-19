document.querySelectorAll(
  '#productMenuSidebar .nav-stacked > .nav-item'
).forEach(el => {
  el.style.float = 'none';
  el.style.position = 'relative';
  el.style.width = '100%';
});
