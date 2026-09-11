(() => {
  const links = [...document.querySelectorAll('a.image-zoom')];
  if (!links.length) return;

  const lightbox = document.createElement('div');
  lightbox.className = 'image-lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', '확대 이미지');
  lightbox.innerHTML = '<button type="button" aria-label="확대 이미지 닫기">×</button><img alt="" />';
  document.body.appendChild(lightbox);

  const image = lightbox.querySelector('img');
  const closeButton = lightbox.querySelector('button');
  let previousFocus = null;

  const close = () => {
    lightbox.classList.remove('is-open');
    document.body.classList.remove('lightbox-open');
    image.removeAttribute('src');
    if (previousFocus) previousFocus.focus();
  };

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      previousFocus = link;
      const thumbnail = link.querySelector('img');
      image.src = link.href;
      image.alt = thumbnail?.alt || '확대 이미지';
      lightbox.classList.add('is-open');
      document.body.classList.add('lightbox-open');
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', close);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) close();
  });
})();
