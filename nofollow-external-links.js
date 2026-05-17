document.addEventListener('DOMContentLoaded', function () {
  const domain = window.location.hostname;

  document.querySelectorAll('a[href]').forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href) return;

    // Enlaces externos (http/https fuera del dominio)
    if (/^https?:\/\//i.test(href) && !href.includes(domain)) {
      link.setAttribute('rel', 'nofollow noopener noreferrer');
      link.setAttribute('target', '_blank');
    }

    // mailto y tel — nofollow sin noopener (no abren ventana)
    if (/^mailto:/i.test(href) || /^tel:/i.test(href)) {
      link.setAttribute('rel', 'nofollow');
    }
  });
});
