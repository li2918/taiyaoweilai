/* ============================================
   AI OpsFlow — Static Site Behaviour
   - Sticky nav with scrolled state
   - Mobile menu toggle
   - Smooth-scroll close on anchor click
   - Fade-in on scroll via IntersectionObserver
   - Year stamp in footer
   ============================================ */

(function () {
  "use strict";

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------- Sticky nav ---------- */
  const nav = $("#nav");
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 24) {
        nav.classList.add("is-scrolled");
      } else {
        nav.classList.remove("is-scrolled");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  const toggle = $("#navToggle");
  const links  = $("#navLinks");
  if (toggle && links) {
    const setOpen = (open) => {
      toggle.classList.toggle("is-open", open);
      links.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
    };

    toggle.addEventListener("click", () => {
      setOpen(!links.classList.contains("is-open"));
    });

    // Close on link click (mobile menu)
    $$("a", links).forEach((a) => {
      a.addEventListener("click", () => setOpen(false));
    });

    // Close on outside click / Escape
    document.addEventListener("click", (e) => {
      if (!links.classList.contains("is-open")) return;
      if (e.target.closest("#navLinks") || e.target.closest("#navToggle")) return;
      setOpen(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const revealItems = $$(".reveal");
  if ("IntersectionObserver" in window && revealItems.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealItems.forEach((el) => io.observe(el));
  } else {
    // Fallback: just show everything
    revealItems.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Footer year ---------- */
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
})();
