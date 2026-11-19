console.table(
  [...document.querySelectorAll('#productMenuSidebar a')]
    .filter(e => e.textContent.trim() === 'Wiki')
    .map(e => ({
      position: getComputedStyle(e).position,
      top: getComputedStyle(e).top,
      marginTop: getComputedStyle(e).marginTop,
      hauteur: e.getBoundingClientRect().height,
      parent: e.parentElement.className
    }))
);
