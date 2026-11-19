(() => {
    const links = [...document.querySelectorAll('a.nav-link')]
        .filter(el =>
            ['Wiki', 'Translation Processes']
                .includes(el.textContent.trim())
        );

    const results = [];

    links.forEach(link => {
        let current = link;

        for (let level = 0; current && level < 12; level++) {
            const s = getComputedStyle(current);
            const r = current.getBoundingClientRect();

            results.push({
                lien: link.textContent.trim(),
                niveau: level,
                tag: current.tagName,
                classe: String(current.className).slice(0, 100),
                id: current.id,
                top: Math.round(r.top),
                hauteur: Math.round(r.height),
                position: s.position,
                overflowY: s.overflowY,
                display: s.display,
                transform: s.transform,
                zIndex: s.zIndex
            });

            current = current.parentElement;
        }
    });

    console.table(results);
})();
