console.table(
  ['#productMenuSidebar', '.sidebar-body', '.nav-stacked']
    .map(x => {
      const e = document.querySelector(x);
      const s = e && getComputedStyle(e);
      return {
        element: x,
        hauteur: e?.clientHeight,
        scroll: s?.overflowY
      };
    })
);
