// Theme toggle. The initial theme is applied pre-paint by an inline script in <head>;
// this only syncs the button state and handles clicks.
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    const root = document.documentElement;

    const apply = (theme) => {
        root.setAttribute('data-theme', theme);
        if (toggle) {
            toggle.textContent = theme === 'light' ? '🌙' : '☀️';
            toggle.setAttribute('aria-pressed', String(theme === 'dark'));
        }
    };

    apply(root.getAttribute('data-theme') || 'light');

    if (toggle) {
        toggle.addEventListener('click', () => {
            const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', next);
            apply(next);
        });
    }
});
