(() => {
    const elements = [...document.querySelectorAll('*')]
        .filter(el => {
            const text = el.textContent?.trim();

            return (
                el.children.length === 0 &&
                text &&
                (
                    text === 'Wiki' ||
                    text === 'Translation Processes' ||
                    text === 'Categorization'
                )
            );
        });

    console.table(elements.map(el => {
        const rect = el.getBoundingClientRect();
        const style = getComputedStyle(el);

        return {
            texte: el.textContent.trim(),
            tag: el.tagName,
            classe: String(el.className),
            parent: el.parentElement?.className,
            top: Math.round(rect.top),
            left: Math.round(rect.left),
            hauteur: Math.round(rect.height),
            couleur: style.color,
            position: style.position,
            display: style.display,
            visibility: style.visibility,
            zIndex: style.zIndex
        };
    }));

    console.log('Éléments trouvés :', elements.length);
})();
