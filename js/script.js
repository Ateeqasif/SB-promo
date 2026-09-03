(function () {
  'use strict';

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky header shadow on scroll
  var header = document.getElementById('siteHeader');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  if (navToggle && header) {
    navToggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.getElementById('mainNav').addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        header.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Scroll-reveal animations
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Read more / read less toggles (merged feature columns)
  document.querySelectorAll('.read-more-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var col = btn.closest('.feature-col');
      var expanded = col.classList.toggle('is-expanded');
      btn.setAttribute('aria-expanded', String(expanded));
      var label = btn.querySelector('.read-more-label');
      if (label) label.textContent = expanded ? 'Read less' : 'Read more';
    });
  });

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var question = item.querySelector('.faq-question');
    question.addEventListener('click', function () {
      var wasOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item.is-open').forEach(function (openItem) {
        openItem.classList.remove('is-open');
        openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        item.classList.add('is-open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Lead form (client-side demo only — no backend wired up)
  var quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    // Product-type pill selector (single-select)
    var pillGroup = document.getElementById('productPills');
    if (pillGroup) {
      pillGroup.addEventListener('click', function (e) {
        var pill = e.target.closest('.pill-option');
        if (!pill) return;
        pillGroup.querySelectorAll('.pill-option').forEach(function (p) {
          p.classList.remove('is-selected');
        });
        pill.classList.add('is-selected');
      });
    }

    var step1 = document.getElementById('formStep1');
    var step2 = document.getElementById('formStep2');
    var zipInput = document.getElementById('zip');

    var toStep2 = document.getElementById('toStep2');
    if (toStep2) {
      toStep2.addEventListener('click', function () {
        if (!zipInput.checkValidity()) {
          zipInput.reportValidity();
          return;
        }
        step1.classList.remove('is-active');
        step2.classList.add('is-active');
      });
    }

    var backToStep1 = document.getElementById('backToStep1');
    if (backToStep1) {
      backToStep1.addEventListener('click', function () {
        step2.classList.remove('is-active');
        step1.classList.add('is-active');
      });
    }

    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!quoteForm.checkValidity()) {
        quoteForm.reportValidity();
        return;
      }
      quoteForm.classList.add('is-submitted');
      var success = document.getElementById('formSuccess');
      if (success) success.classList.add('is-visible');
    });
  }

  // Cookie notice
  var cookieNotice = document.getElementById('cookieNotice');
  if (cookieNotice) {
    var STORAGE_KEY = 'slickblinds_cookie_choice';
    var stored;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (err) { stored = null; }

    if (!stored) {
      window.setTimeout(function () { cookieNotice.classList.add('is-visible'); }, 800);
    }

    var setChoice = function (value) {
      cookieNotice.classList.remove('is-visible');
      try { localStorage.setItem(STORAGE_KEY, value); } catch (err) { /* ignore */ }
    };

    var acceptBtn = document.getElementById('cookieAccept');
    var declineBtn = document.getElementById('cookieDecline');
    if (acceptBtn) acceptBtn.addEventListener('click', function () { setChoice('accepted'); });
    if (declineBtn) declineBtn.addEventListener('click', function () { setChoice('declined'); });
  }
})();
