(() => {
    const slider = document.querySelector(
        '.sidenav-menu-slider'
    );

    if (slider) {
        slider.style.display =
            window.__sliderDisplayBackup ?? '';
    }
})();
