(() => {
    const menu = document.querySelector('.product-menu');

    if (!menu) {
        console.log('Menu introuvable');
        return;
    }

    const links = [...menu.querySelectorAll('a')];

    console.table(
        links
            .filter(el => {
                const s = getComputedStyle(el);
                const r = el.getBoundingClientRect();

                return (
                    r.width > 0 &&
                    r.height > 0 &&
                    s.display !== 'none'
                );
            })
            .map(el => {
                const s = getComputedStyle(el);
                const r = el.getBoundingClientRect();

                return {
                    texte: el.textContent.trim().slice(0, 35),
                    top: Math.round(r.top),
                    hauteur: Math.round(r.height),
                    position: s.position,
                    transform: s.transform,
                    marginTop: s.marginTop,
                    lineHeight: s.lineHeight,
                    zIndex: s.zIndex
                };
            })
            .slice(0, 40)
    );
})();
