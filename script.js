document.getElementById('navbar-toggle').onclick = function () {
    var menu = document.getElementById('mobile-menu');
    var hamburgerIcon = document.getElementById('hamburger-icon');
    var closeIcon = document.getElementById('close-icon');

    menu.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    
    const navItems = document.querySelectorAll('#mobile-menu a');

    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            
            menu.classList.add("hidden")
            closeIcon.classList.add('hidden');
            hamburgerIcon.classList.remove('hidden');
    
        });
    });

};