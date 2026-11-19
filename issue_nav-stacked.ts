console.table(
  [...document.querySelectorAll('#productMenuSidebar .nav-stacked')]
    .map(e => ({
      classe: e.className,
      hauteur: e.getBoundingClientRect().height,
      position: getComputedStyle(e).position,
      display: getComputedStyle(e).display,
      flex: getComputedStyle(e).flex,
      marginTop: getComputedStyle(e).marginTop
    }))
);
