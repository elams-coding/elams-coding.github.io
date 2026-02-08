document.addEventListener('DOMContentLoaded', () => {
    const toggleTheme = document.getElementById('toggle-theme');

    // créer 'theme' s'il n'existe pas
    if (localStorage.getItem('theme') === null) {
        localStorage.setItem('theme', 'light');
    }

    checkStatus();

    function checkStatus() {
        if (localStorage.getItem('theme') === 'dark') {
            toggleTheme.classList.add('checked');
        }
        else {
            toggleTheme.classList.remove('checked');
        }

        changeTheme();
    }

    function changeTheme() {
        if (toggleTheme.classList.contains('checked')) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            toggleTheme.setAttribute('aria-checked', 'dark');

            // sauvegarder le thème
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
            toggleTheme.setAttribute('aria-checked', 'light');

            // sauvegarder le thème
            localStorage.setItem('theme', 'light');
        }
    }

    // changer le thème
    toggleTheme.addEventListener('click', () => {
        toggleTheme.classList.toggle('checked');

        changeTheme();
    });
});