document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.querySelector(".search-btn");
  const input = document.querySelector(".search-input");

  searchIcon?.addEventListener("click", () => {
    input?.focus();
  });

  if (window.innerWidth <= 768) {
    const videoBg = document.querySelector('.video-background');
    if (videoBg) videoBg.style.display = 'none';
  }
});
