(() => {
    const menu = document.querySelector('.product-menu');

    if (!menu) {
        console.log('Menu introuvable');
        return;
    }

    const elements = [
        ...menu.querySelectorAll(
            '.nav-link, .list-group-heading, .collapse'
        )
    ];

    console.table(
        elements
            .filter(el => {
                const r = el.getBoundingClientRect();
                return r.width > 0 && r.height > 0;
            })
            .map(el => {
                const r = el.getBoundingClientRect();
                const s = getComputedStyle(el);

                return {
                    texte: el.textContent.trim().slice(0, 35),
                    classe: el.className,
                    top: Math.round(r.top),
                    hauteur: Math.round(r.height),
                    position: s.position,
                    display: s.display,
                    transform: s.transform
                };
            })
            .slice(0, 40)
    );
})();
