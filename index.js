

    window.addEventListener("load", function () {
      setTimeout(function () {
        const preloader = document.getElementById("preloader");
        if (preloader) {
          preloader.style.display = "none";
        }
      }, 1500);
    });

    window.addEventListener("DOMContentLoaded", () => {
      const track = document.getElementById("marquee-track");
      const container = track.parentElement;
      let totalWidth = track.scrollWidth;
      const containerWidth = container.offsetWidth;

      while (track.scrollWidth < containerWidth * 2) {
        const children = Array.from(track.children);
        children.forEach(child => {
          const clone = child.cloneNode(true);
          track.appendChild(clone);
        });
      }
    });

    const checkbox = document.getElementById("check");
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        document.body.classList.add("body-locked");
      } else {
        document.body.classList.remove("body-locked");
      }
    });

    window.addEventListener('scroll', () => {
  const hamburger = document.getElementById('user_icon');
  const scrollY = window.scrollY;

  if (scrollY > 100) {
    hamburger.classList.add('scrolled');
  } else {
    hamburger.classList.remove('scrolled');
  }
});
