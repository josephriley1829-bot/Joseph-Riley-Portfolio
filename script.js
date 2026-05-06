const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const dot = document.querySelector('.cursor-dot');
window.addEventListener('mousemove', e => {
  dot.style.left = `${e.clientX}px`;
  dot.style.top = `${e.clientY}px`;
});

window.addEventListener('scroll', () => {
  const heroImage = document.querySelector('.hero-image');
  const y = window.scrollY * 0.08;
  if (heroImage) heroImage.style.transform = `translateY(${y}px)`;
});
