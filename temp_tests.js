document.querySelectorAll(
  '#productMenuSidebar .nav-stacked'
).forEach(e => {
  e.style.setProperty('flex', 'none', 'important');
  e.style.setProperty('height', 'auto', 'important');
  e.style.setProperty('min-height', '0', 'important');
});
