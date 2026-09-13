(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Menú móvil ---------- */
  var navToggle = document.getElementById("nav-toggle");
  var navMenu = document.getElementById("nav-menu");

  function closeMenu() {
    navToggle.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("is-open");
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navMenu.classList.toggle("is-open", !isOpen);
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  /* ---------- Barra de progreso de lectura ---------- */
  var progressBar = document.getElementById("progress-bar");

  function updateProgress() {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + "%";
  }

  /* ---------- Botón volver arriba ---------- */
  var backToTop = document.getElementById("back-to-top");

  function updateBackToTop() {
    backToTop.classList.toggle("is-visible", window.scrollY > 480);
  }

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  var scrollTicking = false;
  window.addEventListener("scroll", function () {
    if (!scrollTicking) {
      window.requestAnimationFrame(function () {
        updateProgress();
        updateBackToTop();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });
  updateProgress();
  updateBackToTop();

  /* ---------- Navegación activa según sección visible ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll("[data-nav]"));
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));

  function setActiveLink(id) {
    navLinks.forEach(function (link) {
      var match = link.getAttribute("href") === "#" + id;
      link.classList.toggle("is-active", match);
    });
  }

  if (sections.length && "IntersectionObserver" in window) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach(function (section) { sectionObserver.observe(section); });
  }

  /* ---------- Animación de aparición al hacer scroll ---------- */
  var revealTargets = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  if (revealTargets.length && "IntersectionObserver" in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealTargets.forEach(function (target) { revealObserver.observe(target); });
  } else {
    revealTargets.forEach(function (target) { target.classList.add("is-visible"); });
  }

  /* ---------- Acordeón de categorías de herramientas ---------- */
  var categoryCards = Array.prototype.slice.call(document.querySelectorAll(".tool-category__card"));

  categoryCards.forEach(function (card) {
    card.addEventListener("click", function () {
      var isOpen = card.getAttribute("aria-expanded") === "true";
      card.setAttribute("aria-expanded", String(!isOpen));
    });
  });
})();
