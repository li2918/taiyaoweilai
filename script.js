/* ====================================================================
   AI OpsFlow — Premium Consulting Edition · Behaviour
   - Sticky nav with scrolled state
   - Mobile menu toggle
   - Scroll progress bar
   - Reveal-on-scroll via IntersectionObserver
   - Diagnostic panel: animate progress bars + count up percentages
   - Footer year stamp
   ==================================================================== */

(function () {
  "use strict";

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------- i18n toggle ---------- */
  const META = {
    zh: {
      title: "AI OpsFlow | AI 运营流程重构解决方案",
      desc: "AI OpsFlow 帮助中小企业分析运营流程、识别效率瓶颈，并落地 AI 自动化解决方案，实现降本、提效与增长。",
      htmlLang: "zh-CN",
    },
    en: {
      title: "AI OpsFlow | AI-Driven Operations Redesign for Mid-Market Companies",
      desc: "AI OpsFlow helps mid-market companies map their operations, find what's worth automating, and deploy AI systems that actually run.",
      htmlLang: "en",
    },
  };

  const STORAGE_KEY = "aiopsflow.lang";

  const setLang = (lang) => {
    if (lang !== "zh" && lang !== "en") lang = "zh";
    document.body.classList.remove("lang-zh", "lang-en");
    document.body.classList.add("lang-" + lang);
    document.documentElement.lang = META[lang].htmlLang;
    document.title = META[lang].title;
    const metaDesc = document.getElementById("metaDesc");
    if (metaDesc) metaDesc.setAttribute("content", META[lang].desc);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
  };

  // Initial language: localStorage > navigator.language > zh
  const initLang = (() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "zh" || saved === "en") return saved;
    } catch (_) {}
    const nav = (navigator.language || "").toLowerCase();
    return nav.startsWith("zh") ? "zh" : "en";
  })();
  setLang(initLang);

  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-lang]");
      if (!btn) return;
      setLang(btn.dataset.lang);
    });
  }

  /* ---------- Sticky nav ---------- */
  const nav = $("#nav");
  const progress = $("#progress");

  const onScroll = () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle("is-scrolled", y > 24);

    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (y / max) * 100 : 0;
      progress.style.width = pct + "%";
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

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

    toggle.addEventListener("click", () =>
      setOpen(!links.classList.contains("is-open"))
    );

    $$("a", links).forEach((a) => a.addEventListener("click", () => setOpen(false)));

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
  const supportsIO = "IntersectionObserver" in window;

  if (supportsIO && revealItems.length) {
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
    revealItems.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Diagnostic panel: animate bars + count up ---------- */
  const panel = $(".panel");
  const bars  = $$(".bar", panel);

  const countUp = (el, target, duration = 1400) => {
    const start = performance.now();
    const from = 0;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      const val = Math.round(from + (target - from) * eased);
      el.textContent = val + "%";
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if (panel && bars.length) {
    if (supportsIO) {
      const panelIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              bars.forEach((bar, i) => {
                const target = parseInt(bar.dataset.bar, 10) || 0;
                const valEl = $(".bar__val", bar);
                setTimeout(() => {
                  bar.classList.add("is-animate");
                  if (valEl) countUp(valEl, target, 1400);
                }, i * 180);
              });
              panelIO.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );
      panelIO.observe(panel);
    } else {
      bars.forEach((bar) => {
        const target = parseInt(bar.dataset.bar, 10) || 0;
        const valEl = $(".bar__val", bar);
        bar.classList.add("is-animate");
        if (valEl) valEl.textContent = target + "%";
      });
    }
  }

  /* ---------- Footer year ---------- */
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
})();
