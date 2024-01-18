window.addEventListener('scroll', function () {
    var nav = document.querySelector('nav');
    var logo = document.getElementById('logo');
    var homeLi = document.getElementById('homeLi');
    var aboutLi = document.getElementById('aboutLi');
    var galleryLi = document.getElementById('galleryLi');
    var contactLi = document.getElementById('contactLi');
    var menu = document.getElementById('menu');

    if (window.scrollY > 50) {
        nav.classList.add('bg-white');
        logo.classList.add('text-primary');
        homeLi.classList.add('text-primary');
        aboutLi.classList.add('text-primary');
        galleryLi.classList.add('text-primary');
        contactLi.classList.add('bg-primary', 'rounded-lg', 'py-2', 'p-4');
        menu.classList.add('text-primary');
    } else {
        nav.classList.remove('bg-white', 'md:bg-transparent', 'text-third');
        logo.classList.remove('text-primary');
        homeLi.classList.remove('text-primary');
        aboutLi.classList.remove('text-primary');
        galleryLi.classList.remove('text-primary');
        contactLi.classList.remove('bg-primary', 'rounded-lg', 'py-2', 'p-4');
        menu.classList.remove('text-primary');
        nav.classList.add('bg-primary');
        contactLi.classList.add('bg-white', 'text-third', 'rounded-lg', 'py-2', 'p-4');
    }
});

// Adiciona um evento de clique ao botão burger para alternar a classe no menu mobile
document.getElementById('menu').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Adiciona um evento de clique a cada link do menu para fechar o menu móvel
document.querySelectorAll('#mobile-menu a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});
