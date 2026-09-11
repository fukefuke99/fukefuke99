(() => {
  const toc = document.querySelector('.detail-toc');
  if (!toc) return;

  const links = [...toc.querySelectorAll('a[href^="#"]')];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const update = () => {
    const marker = window.scrollY + window.innerHeight * 0.32;
    let current = sections[0];

    sections.forEach((section) => {
      if (section.offsetTop <= marker) current = section;
    });

    links.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${current.id}`);
    });
  };

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
