document.addEventListener('DOMContentLoaded', () => {
    const faqHeaders = document.querySelectorAll('.faq h3');
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  themeToggle.textContent = document.body.classList.contains('light-mode')
    ? 'Dark Mode'
    : 'Light Mode';
});

});