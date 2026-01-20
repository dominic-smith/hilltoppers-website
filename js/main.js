// Load component into placeholder
function loadComponent(selector, url) {
    const el = document.querySelector(selector);
    if (el) {
        fetch(url)
            .then(r => r.text())
            .then(html => { el.innerHTML = html; });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadComponent('#header-placeholder', 'components/header.html');
    loadComponent('#footer-placeholder', 'components/footer.html');

    // Mobile nav toggle (uses event delegation since header loads async)
    document.addEventListener('click', function(e) {
        if (e.target.closest('.nav-toggle')) {
            document.querySelector('.nav-menu')?.classList.toggle('active');
        }
    });
});
