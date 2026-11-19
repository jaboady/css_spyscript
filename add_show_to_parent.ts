(() => {
    const parent = document.getElementById(
        'panel-manage-site_administration_content'
    );

    if (!parent) {
        console.log('Parent introuvable');
        return;
    }

    parent.classList.add('show');

    console.log('Parent ouvert temporairement');
    console.log(
        'Hauteur :',
        parent.getBoundingClientRect().height
    );
})();
