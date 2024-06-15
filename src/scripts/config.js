function configSite() {
    const selectTheme = document.getElementById('select-theme');
    const themeIcon = document.getElementById('theme-icon');

    if (document.body.classList.contains('cv')) return;

    const updateTheme = (theme) => {
        localStorage.setItem('themePage', theme);

        const isDark = theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);

        selectTheme.value = theme
        document.body.classList.toggle('dark', isDark);
        document.body.classList.toggle('light', !isDark);
        themeIcon.classList.toggle('ri-moon-fill', isDark);
        themeIcon.classList.toggle('ri-sun-fill', !isDark);
    };

    selectTheme.addEventListener('change', (e) => updateTheme(e.target.value));

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const theme = localStorage.getItem('themePage');

    darkModeMediaQuery.addEventListener('change', () => {
        if (theme === 'auto' && selectTheme.value === 'auto') {
            updateTheme("auto");
        }
    })

    theme === null ? updateTheme("auto") : updateTheme(theme);

    document.getElementById("language-select").addEventListener("change", function() {
        const selectedLanguage = this.value;
        document.getElementById("language-select").value = selectedLanguage;
        document.getElementById("language-link").href = selectedLanguage;
        document.getElementById("language-link").click();
    });
}


configSite()
document.addEventListener('astro:after-swap', configSite)