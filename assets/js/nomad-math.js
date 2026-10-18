// Local KaTeX: accessible HTML + MathML, with the TeX source retained for copying.
document.querySelectorAll('.nomad-math').forEach((element) => {
  const source = element.textContent.trim();
  try {
    katex.render(source, element, {
      displayMode: !element.classList.contains('nomad-math-inline'),
      output: 'htmlAndMathml',
      throwOnError: true,
      trust: false,
      strict: 'warn'
    });
  } catch (error) {
    element.classList.add('math-error');
    console.error('NOMAD equation rendering failed:', error);
  }
});
