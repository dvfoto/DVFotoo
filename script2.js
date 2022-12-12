const openerMobile = document.querySelector('.gallery_meniu .pionter_down');
const navItemsMobile = document.querySelectorAll('.gallery_meniu .gallery_icons');
const sidebarMobile = document.querySelector('.gallery_meniu');

openerMobile.addEventListener('click', () => {

    if (sidebarMobile.className === 'gallery_meniu')
        sidebarMobile.classList.add('open');
    else
        sidebarMobile.classList.remove('open');

});

navItemsMobile.forEach(navItem => {

    navItem.addEventListener('click', () => {

        navItemsMobile.forEach(navItem => {
            navItem.classList.remove('active');
            sidebarMobile.classList.remove('open');
        });

        navItem.classList.add('active');
        sidebarMobile.classList.remove('open');

    });

});