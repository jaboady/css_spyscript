(() => {
    const menu = document.querySelector('.product-menu');

    if (!menu) {
        console.log('Menu introuvable');
        return;
    }

    const links = [...menu.querySelectorAll('a')]
        .filter(el => {
            const r = el.getBoundingClientRect();
            return r.width > 0 && r.height > 0;
        });

    const overlaps = [];

    for (let i = 0; i < links.length; i++) {
        const a = links[i];
        const ra = a.getBoundingClientRect();

        for (let j = i + 1; j < links.length; j++) {
            const b = links[j];
            const rb = b.getBoundingClientRect();

            const overlapX =
                Math.min(ra.right, rb.right) -
                Math.max(ra.left, rb.left);

            const overlapY =
                Math.min(ra.bottom, rb.bottom) -
                Math.max(ra.top, rb.top);

            if (overlapX > 5 && overlapY > 5) {
                overlaps.push({
                    lien1: a.textContent.trim().slice(0, 35),
                    lien2: b.textContent.trim().slice(0, 35),
                    chevauchementX: Math.round(overlapX),
                    chevauchementY: Math.round(overlapY),
                    parent1: a.parentElement?.className,
                    parent2: b.parentElement?.className
                });
            }
        }
    }

    console.table(overlaps);
    console.log(
        'Nombre de chevauchements :',
        overlaps.length
    );
})();
