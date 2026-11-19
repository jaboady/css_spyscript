(() => {
    const selectors = [
        '.sidenav-menu-slider',
        '#productMenuSidebar',
        '.lfr-product-menu-panel',
        '.sidebar-body',
        '.panel-group',
        '.panel-body'
    ];

    console.table(
        selectors.flatMap(selector =>
            [...document.querySelectorAll(selector)]
                .map(el => {
                    const s = getComputedStyle(el);
                    const r = el.getBoundingClientRect();

                    return {
                        selector,
                        classe: String(el.className).slice(0, 60),
                        top: Math.round(r.top),
                        hauteur: Math.round(r.height),
                        scrollTop: el.scrollTop,
                        scrollHeight: el.scrollHeight,
                        clientHeight: el.clientHeight,
                        position: s.position,
                        overflowY: s.overflowY,
                        zIndex: s.zIndex
                    };
                })
        )
    );
})();
