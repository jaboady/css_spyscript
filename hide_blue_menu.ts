(() => {
    const slider = document.querySelector(
        '.sidenav-menu-slider'
    );

    if (!slider) {
        console.log('Slider introuvable');
        return;
    }

    window.__sliderDisplayBackup = slider.style.display;

    slider.style.setProperty(
        'display',
        'none',
        'important'
    );

    console.log('Slider secondaire masqué temporairement');
})();
