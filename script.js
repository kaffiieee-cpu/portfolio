/* ============================================
   Ikhsan — Portfolio Script Engine
   Vanilla JS · No Dependencies · Performant
   ============================================ */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initLoader();
    initNavigation();
    initScrollReveal();
    initCounters();
    initCursorGlow();
    initBackToTop();
    initActiveNavLink();
    initTypewriter();
    initSkillBars();
    initModuleBars();
  }

  // ============================================
  // LOADER
  // ============================================
  function initLoader() {
    var loader = document.querySelector('.loader');
    if (!loader) return;

    window.addEventListener('load', function () {
      setTimeout(function () {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
      }, 500);
    });

    // Fallback
    setTimeout(function () {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
    }, 3000);
  }

  // ============================================
  // NAVIGATION
  // ============================================
  function initNavigation() {
    var nav = document.querySelector('.nav');
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('#nav-links');
    var overlay = document.querySelector('.nav-overlay');

    if (!nav) return;

    // Scroll: add scrolled class
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });

    // Mobile toggle
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        var isOpen = links.classList.contains('open');
        toggle.classList.toggle('active');
        links.classList.toggle('open');
        if (overlay) overlay.classList.toggle('active');
        document.body.style.overflow = isOpen ? '' : 'hidden';
      });

      // Close on link click
      links.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          toggle.classList.remove('active');
          links.classList.remove('open');
          if (overlay) overlay.classList.remove('active');
          document.body.style.overflow = '';
        });
      });

      // Close on overlay click
      if (overlay) {
        overlay.addEventListener('click', function () {
          toggle.classList.remove('active');
          links.classList.remove('open');
          overlay.classList.remove('active');
          document.body.style.overflow = '';
        });
      }

      // Keyboard toggle
      toggle.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle.click();
        }
      });
    }
  }

  // ============================================
  // SCROLL REVEAL
  // ============================================
  function initScrollReveal() {
    var elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: '0px 0px -30px 0px' }
    );

    elements.forEach(function (el) { observer.observe(el); });
  }

  // ============================================
  // ANIMATED COUNTERS
  // ============================================
  function initCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(function (counter) { observer.observe(counter); });
  }

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var prefix = el.getAttribute('data-prefix') || '';
    var duration = 1600;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var ease = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(ease * target);
      el.textContent = prefix + current + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = prefix + target + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  // ============================================
  // TYPEWRITER — Hero Role Titles
  // ============================================
  function initTypewriter() {
    var el = document.getElementById('role-typed');
    if (!el) return;

    var roles = [
      'AI-Powered Systems',
      'Business Operating Systems',
      'Automation Workflows',
      'AI Products'
    ];

    var roleIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    var typingSpeed = 80;
    var deletingSpeed = 45;
    var pauseAfterType = 2200;
    var pauseAfterDelete = 400;

    function type() {
      var currentRole = roles[roleIndex];

      if (isDeleting) {
        el.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(type, pauseAfterDelete);
          return;
        }
        setTimeout(type, deletingSpeed);
      } else {
        el.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentRole.length) {
          isDeleting = true;
          setTimeout(type, pauseAfterType);
          return;
        }
        setTimeout(type, typingSpeed);
      }
    }

    // Start after a small delay
    setTimeout(type, 800);
  }

  // ============================================
  // SKILL PROGRESS BARS
  // ============================================
  function initSkillBars() {
    var bars = document.querySelectorAll('.skill-bar-fill');
    if (!bars.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var fill = entry.target;
            var width = fill.getAttribute('data-width') || '0';
            // Small delay for stagger feel
            setTimeout(function () {
              fill.style.width = width + '%';
            }, 100);
            observer.unobserve(fill);
          }
        });
      },
      { threshold: 0.3 }
    );

    bars.forEach(function (bar) { observer.observe(bar); });
  }

  // ============================================
  // MODULE PROGRESS BARS (Currently Building)
  // ============================================
  function initModuleBars() {
    var moduleFills = document.querySelectorAll('.module-bar-fill');
    var overallFill = document.getElementById('overall-bar-fill');
    var overallPct = document.getElementById('overall-pct');

    if (!moduleFills.length) return;

    var hasAnimated = false;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;

            // Animate each module bar
            moduleFills.forEach(function (fill, i) {
              var width = fill.getAttribute('data-width') || '0';
              setTimeout(function () {
                fill.style.width = width + '%';
              }, i * 100 + 200);
            });

            // Animate overall bar
            if (overallFill) {
              var overallWidth = overallFill.getAttribute('data-width') || '0';
              setTimeout(function () {
                overallFill.style.width = overallWidth + '%';
              }, 300);
            }

            // Animate overall percentage counter
            if (overallPct) {
              var targetPct = parseInt(overallFill ? overallFill.getAttribute('data-width') : '62', 10);
              var start = null;
              var duration = 1500;

              function animatePct(timestamp) {
                if (!start) start = timestamp;
                var progress = Math.min((timestamp - start) / duration, 1);
                var ease = 1 - Math.pow(1 - progress, 3);
                var current = Math.floor(ease * targetPct);
                overallPct.textContent = current + '%';
                if (progress < 1) requestAnimationFrame(animatePct);
                else overallPct.textContent = targetPct + '%';
              }

              setTimeout(function () {
                requestAnimationFrame(animatePct);
              }, 400);
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    var section = document.querySelector('.building-inner');
    if (section) observer.observe(section);
  }

  // ============================================
  // CURSOR GLOW EFFECT
  // ============================================
  function initCursorGlow() {
    var glow = document.querySelector('.cursor-glow');
    if (!glow) return;

    document.addEventListener('mousemove', function (e) {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    }, { passive: true });
  }

  // ============================================
  // BACK TO TOP
  // ============================================
  function initBackToTop() {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 500) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ============================================
  // ACTIVE NAV LINK
  // ============================================
  function initActiveNavLink() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    if (!sections.length || !navLinks.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute('id');
            navLinks.forEach(function (link) {
              link.classList.remove('active');
              if (link.getAttribute('href') === '#' + id) {
                link.classList.add('active');
              }
            });
          }
        });
      },
      { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }
    );

    sections.forEach(function (section) { observer.observe(section); });
  }

})();
