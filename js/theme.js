document.addEventListener('DOMContentLoaded', () => {
    const toggleTheme = document.getElementById('toggle-theme');

    toggleTheme.addEventListener('click', () => {
        toggleTheme.classList.toggle('checked');

        if (toggleTheme.classList.contains('checked')) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            toggleTheme.setAttribute('aria-checked', true);
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
            toggleTheme.setAttribute('aria-checked', false);
        }
    });
});