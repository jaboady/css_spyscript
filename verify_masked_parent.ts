(() => {
    const el = document.querySelector(
        '.product-menu .collapse.show'
    );

    if (!el) {
        console.log("Aucun sous-menu ouvert");
        return;
    }

    const parentCollapse = el.parentElement?.closest('.collapse');

    console.log("Sous-menu :", el);
    console.log("Parent collapse :", parentCollapse);

    if (parentCollapse) {
        console.table({
            classe: parentCollapse.className,
            display: getComputedStyle(parentCollapse).display,
            hauteur: parentCollapse.getBoundingClientRect().height,
            id: parentCollapse.id,
            ariaHidden: parentCollapse.getAttribute('aria-hidden')
        });
    }
})();
