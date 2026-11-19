(() => {
    const el = document.querySelector(
        '.product-menu .collapse.show'
    );

    if (!el) {
        console.log("Aucun sous-menu ouvert trouvé");
        return;
    }

    let current = el;
    const results = [];

    while (current && results.length < 12) {
        const s = getComputedStyle(current);
        const r = current.getBoundingClientRect();

        results.push({
            element: current.tagName,
            classe: String(current.className).slice(0, 70),
            hauteur: Math.round(r.height),
            scrollHeight: current.scrollHeight,
            display: s.display,
            position: s.position,
            overflow: s.overflow,
            flex: s.flex,
            minHeight: s.minHeight
        });

        current = current.parentElement;
    }

    console.table(results);
})();
