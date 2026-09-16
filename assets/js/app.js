/**
 * ALBANO TECH - progressively enhanced, dependency-free interactions.
 * All content, FAQ and contact anchors are usable without JavaScript.
 * Runs from file:// as well as a static HTTP host such as GitHub Pages.
 */
(() => {
  'use strict';

  const config = window.ALBANO_CONFIG;
  const root = document.documentElement;
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
  const clamp = (number, min, max) => Math.min(max, Math.max(min, number));
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let manuallyReduced = false;
  let reducedMotion = motionQuery.matches;
  let revealObserver;

  // Keep the static links usable even if configuration is missing or invalid.
  const phoneIsValid = config && /^[1-9]\d{10,14}$/.test(config.whatsappNumber);
  if (!phoneIsValid) {
    console.error('Albano Tech: confira whatsappNumber em assets/js/config.js.');
  }

  /** @param {string} message @returns {string} */
  function whatsappUrl(message) {
    if (!phoneIsValid) throw new Error('Invalid WhatsApp number.');
    return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(String(message))}`;
  }

  function setupContactLinks() {
    if (!phoneIsValid) return;
    $$('[data-whatsapp]').forEach((link) => {
      const message = config.messages[link.dataset.whatsapp] || config.messages.general;
      link.href = whatsappUrl(message);
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });
    $$('[data-phone-label]').forEach((node) => { node.textContent = config.phoneLabel; });
    $$('[data-location]').forEach((node) => { node.textContent = config.location; });
  }

  function setupNavigation() {
    const toggle = $('#menuToggle');
    const nav = $('#mainNav');
    const desktopQuery = window.matchMedia('(min-width: 721px)');
    if (!toggle || !nav) return;

    function setMenu(open, restoreFocus = false) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      nav.classList.toggle('is-open', open);
      if (restoreFocus) toggle.focus({ preventScroll: true });
    }
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      setMenu(open);
      if (open) $('a', nav)?.focus({ preventScroll: true });
    });
    $$('a', nav).forEach((link) => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) setMenu(false, true);
    });
    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) setMenu(false);
    });
    // Close the mobile dropdown if the keyboard focus moves outside it.
    $('#siteHeader').addEventListener('focusout', (event) => {
      if (event.relatedTarget && !$('#siteHeader').contains(event.relatedTarget)) setMenu(false);
    });
    desktopQuery.addEventListener('change', (event) => { if (event.matches) setMenu(false); });

    if ('IntersectionObserver' in window) {
      const navLinks = $$('a[href^="#"]', nav).filter((link) => !link.classList.contains('mobile-contact'));
      const visibility = new Map();
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => visibility.set(entry.target.id, entry.isIntersecting));
        const active = [...visibility].find(([, visible]) => visible)?.[0];
        navLinks.forEach((link) => {
          const current = link.getAttribute('href') === `#${active}`;
          link.classList.toggle('is-current', current);
          if (current) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
      navLinks.forEach((link) => {
        const target = $(link.getAttribute('href'));
        if (target) observer.observe(target);
      });
    }
  }

  function setupMotion() {
    const button = $('#motionToggle');

    function updateMotion() {
      reducedMotion = motionQuery.matches || manuallyReduced;
      root.classList.toggle('no-motion', reducedMotion);
      button?.setAttribute('aria-pressed', String(reducedMotion));
      if (button) {
        button.disabled = motionQuery.matches;
        button.textContent = motionQuery.matches
          ? 'Movimentos reduzidos (sistema)'
          : reducedMotion ? 'Ativar movimentos' : 'Reduzir movimentos';
      }
      if (reducedMotion) {
        revealObserver?.disconnect();
        $$('[data-reveal]').forEach((element) => element.classList.add('is-visible'));
      }
    }

    button?.addEventListener('click', () => {
      manuallyReduced = !manuallyReduced;
      updateMotion();
    });
    motionQuery.addEventListener('change', updateMotion);
    updateMotion();
  }

  function setupReveals() {
    if (!('IntersectionObserver' in window) || reducedMotion) return;
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -22px 0px' });
    $$('[data-reveal]').forEach((element) => {
      // Never hide something already visible when the page starts.
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      const delay = clamp(Number(element.dataset.delay) || 0, 0, 250);
      element.style.setProperty('--reveal-delay', `${delay}ms`);
      element.classList.add('reveal-ready');
      revealObserver.observe(element);
    });
  }

  function setupScrollEffects() {
    const header = $('#siteHeader');
    const progress = $('#pageProgress');
    const timeline = $('#timeline');
    const steps = $$('[data-step]');
    let requested = false;

    function update() {
      requested = false;
      const y = window.scrollY;
      header?.classList.toggle('is-scrolled', y > 60);
      const available = root.scrollHeight - window.innerHeight;
      if (progress) progress.style.transform = `scaleX(${available > 0 ? clamp(y / available, 0, 1) : 0})`;
      if (timeline) {
        const bounds = timeline.getBoundingClientRect();
        const fill = clamp((window.innerHeight * 0.68 - bounds.top - 35) / Math.max(1, bounds.height - 70), 0, 1);
        timeline.style.setProperty('--timeline-progress', String(fill));
        if (bounds.bottom >= 0 && bounds.top <= window.innerHeight) {
          steps.forEach((step) => {
            const number = $('.timeline-number', step).getBoundingClientRect();
            step.classList.toggle('is-current', number.top + number.height / 2 < window.innerHeight * 0.68);
          });
        }
      }
    }
    function scheduleUpdate() {
      if (!requested) { requested = true; window.requestAnimationFrame(update); }
    }
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });
    window.addEventListener('load', scheduleUpdate, { once: true });
    update();

    const floating = $('#floatingWhatsapp');
    const contact = $('#contato');
    const footer = $('.footer');
    if (floating && contact && footer && 'IntersectionObserver' in window) {
      const visibility = new Map();
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => visibility.set(entry.target, entry.isIntersecting));
        const hidden = [...visibility.values()].some(Boolean);
        floating.classList.toggle('is-hidden', hidden);
        floating.tabIndex = hidden ? -1 : 0;
        floating.setAttribute('aria-hidden', String(hidden));
      }, { threshold: 0.04 });
      observer.observe(contact);
      observer.observe(footer);
    }
  }

function setupProcessAnimations() {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;

  if (!gsap || !ScrollTrigger) {
    console.warn('Albano Tech: GSAP/ScrollTrigger não carregado.');
    return;
  }

  const timeline = $('#timeline');
  const steps = $$('.timeline-step[data-step]');

  if (!timeline || !steps.length || reducedMotion) return;

  gsap.registerPlugin(ScrollTrigger);

  const media = gsap.matchMedia();


  // ========================================================
  // DESKTOP / TABLET
  // ========================================================

  media.add('(min-width: 721px)', () => {

    steps.forEach((step, index) => {
      const card = $('.timeline-content', step);
      const number = $('.timeline-number', step);
      const aside = $('.timeline-aside', step);
      const icon = $('.timeline-card-icon', step);

      if (!card) return;

      // Cards alternam a direção de entrada.
      const direction = index % 2 === 0 ? -55 : 55;

      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: step,

          // Começa quando o card entra na parte inferior da tela.
          start: 'top 82%',

          // Executa apenas na primeira passagem.
          once: true
        }
      });


      // CARD
      animation.fromTo(
        card,
        {
          autoAlpha: 0,
          x: direction,
          y: 20,
          scale: 0.975
        },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,

          duration: 0.9,
          ease: 'power3.out',

          clearProps: 'transform,opacity,visibility'
        }
      );


      // NÚMERO DA TIMELINE
      if (number) {
        animation.fromTo(
          number,
          {
            autoAlpha: 0,
            scale: 0.55
          },
          {
            autoAlpha: 1,
            scale: 1,

            duration: 0.5,
            ease: 'back.out(1.8)',

            clearProps: 'transform,opacity,visibility'
          },

          '-=0.67'
        );
      }


      // ÍCONE DO CARD
      if (icon) {
        animation.fromTo(
          icon,
          {
            autoAlpha: 0,
            scale: 0.7,
            rotate: -8
          },
          {
            autoAlpha: 1,
            scale: 1,
            rotate: 0,

            duration: 0.55,
            ease: 'back.out(1.6)',

            clearProps: 'transform,opacity,visibility'
          },

          '-=0.48'
        );
      }


      // PALAVRA LATERAL
      if (aside) {
        animation.fromTo(
          aside,
          {
            autoAlpha: 0,
            y: 22
          },
          {
            autoAlpha: 1,
            y: 0,

            duration: 0.65,
            ease: 'power2.out',

            clearProps: 'transform,opacity,visibility'
          },

          '-=0.48'
        );
      }
    });

  });


  // ========================================================
  // MOBILE
  // ========================================================

  media.add('(max-width: 720px)', () => {

    steps.forEach((step) => {
      const card = $('.timeline-content', step);
      const number = $('.timeline-number', step);
      const icon = $('.timeline-card-icon', step);

      if (!card) return;

      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: step,
          start: 'top 86%',
          once: true
        }
      });


      // No celular não vem das laterais.
      // Isso evita aquele efeito de layout "escorregando".
      animation.fromTo(
        card,
        {
          autoAlpha: 0,
          y: 32,
          scale: 0.985
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,

          duration: 0.78,
          ease: 'power3.out',

          clearProps: 'transform,opacity,visibility'
        }
      );


      if (number) {
        animation.fromTo(
          number,
          {
            autoAlpha: 0,
            scale: 0.6
          },
          {
            autoAlpha: 1,
            scale: 1,

            duration: 0.45,
            ease: 'back.out(1.7)',

            clearProps: 'transform,opacity,visibility'
          },

          '-=0.55'
        );
      }


      if (icon) {
        animation.fromTo(
          icon,
          {
            autoAlpha: 0,
            scale: 0.75
          },
          {
            autoAlpha: 1,
            scale: 1,

            duration: 0.45,
            ease: 'back.out(1.5)',

            clearProps: 'transform,opacity,visibility'
          },

          '-=0.4'
        );
      }
    });

  });


  // Recalcula posições depois que tudo estiver carregado.
  window.addEventListener(
    'load',
    () => ScrollTrigger.refresh(),
    { once: true }
  );
}



  function setupTestimonials() {
    const container = $('.testimonials-swiper');

    if (!container) return;

    if (!window.Swiper) {
      console.warn('Albano Tech: Swiper não carregado.');
      return;
    }

    new window.Swiper(container, {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      speed: reducedMotion ? 0 : 700,
      effect: reducedMotion ? 'slide' : 'creative',

      creativeEffect: {
        limitProgress: 2,
        prev: {
          translate: ['-7%', 0, -1],
          scale: 0.97,
          opacity: 0
        },
        next: {
          translate: ['7%', 0, -1],
          scale: 0.97,
          opacity: 0
        }
      },

      grabCursor: !reducedMotion,

      keyboard: {
        enabled: true,
        onlyInViewport: true
      },

      navigation: {
        prevEl: '.testimonial-prev',
        nextEl: '.testimonial-next'
      },

      pagination: {
        el: '.testimonial-pagination',
        clickable: true
      },

      a11y: {
        enabled: true,
        prevSlideMessage: 'Mostrar depoimento anterior',
        nextSlideMessage: 'Mostrar próximo depoimento',
        paginationBulletMessage: 'Ir para o depoimento {{index}}'
      }
    });
  }

  const dialogFocus = new WeakMap();
  function openDialog(dialog) {
    if (!dialog || typeof dialog.showModal !== 'function') return false;
    if (dialog.open) return true;
    dialogFocus.set(dialog, document.activeElement);
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('modal-open');
    $('[data-close-dialog]', dialog)?.focus({ preventScroll: true });
    return true;
  }

  function setupDialogs() {
    $$('dialog').forEach((dialog) => {
      // Keep Tab/Shift+Tab within visible controls of the open modal.
      // Native dialog also makes the rest of the document inert.
      dialog.addEventListener('keydown', (event) => {
        if (event.key !== 'Tab') return;
        const focusable = $$('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]', dialog)
          .filter((node) => node.tabIndex >= 0 && node.getClientRects().length > 0);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first) { event.preventDefault(); return; }
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      });
      $$('[data-close-dialog]', dialog).forEach((button) => button.addEventListener('click', () => dialog.close()));
      dialog.addEventListener('click', (event) => {
        const box = dialog.getBoundingClientRect();
        const outside = event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
        if (event.target === dialog && outside) dialog.close();
      });
      dialog.addEventListener('close', () => {
        if (!document.querySelector('dialog[open]')) document.body.classList.remove('modal-open');
        const previous = dialogFocus.get(dialog);
        if (previous instanceof HTMLElement && previous.isConnected) previous.focus({ preventScroll: true });
      });
    });
    $$('[data-open-privacy]').forEach((button) => button.addEventListener('click', () => {
      const privacy = $('#privacyDialog');
      if (!openDialog(privacy)) {
        // Legacy browser fallback; never make privacy information unreachable.
        window.alert(privacy?.textContent || 'Entre em contato para falar sobre seus dados.');
      }
    }));
  }

  function setupProjects() {
    const filters = $('#projectFilters');
    const cards = $$('.project-card');
    if (filters) {
      filters.hidden = false;
      $$('[data-filter]', filters).forEach((button) => button.addEventListener('click', () => {
        $$('[data-filter]', filters).forEach((candidate) => {
          const active = candidate === button;
          candidate.classList.toggle('is-active', active);
          candidate.setAttribute('aria-pressed', String(active));
        });
        cards.forEach((card) => {
          const show = button.dataset.filter === 'all' || button.dataset.filter === card.dataset.category;
          card.hidden = !show;
          if (show) card.classList.add('is-visible');
        });
        window.dispatchEvent(new Event('resize'));
      }));
    }

    const dialog = $('#projectDialog');
    if (!dialog || typeof dialog.showModal !== 'function' || !config?.projects) return;
    $('#projectCases').hidden = true;
    $$('[data-project]').forEach((link) => link.addEventListener('click', (event) => {
      const project = config.projects[link.dataset.project];
      if (!project) return;
      event.preventDefault();
      $('#projectDialogTitle').textContent = project.title;
      $('#projectDialogTag').textContent = project.tag;
      $('#projectDialogDescription').textContent = project.description;
      const image = $('#projectDialogImage');
      image.src = project.image;
      image.alt = project.imageAlt;
      const sections = $('#projectDialogSections');
      sections.replaceChildren();
      project.sections.forEach(([title, description]) => {
        const section = document.createElement('section');
        const heading = document.createElement('h3');
        const paragraph = document.createElement('p');
        heading.textContent = title;
        paragraph.textContent = description;
        section.append(heading, paragraph);
        sections.append(section);
      });
      const whatsapp = $('#projectDialogWhatsapp');
      if (phoneIsValid) whatsapp.href = whatsappUrl(config.messages[project.service] || config.messages.general);
      const external = $('#projectDialogExternal');
      const isExternalSafe = typeof project.url === 'string' && /^https:\/\//i.test(project.url);
      external.hidden = !isExternalSafe;
      if (isExternalSafe) external.href = project.url;
      openDialog(dialog);
    }));
  }

  function setupFaq() {
    // Native "name" grouping is also declared in HTML; this covers older browsers.
    const entries = $$('.faq-list details');
    entries.forEach((entry) => entry.addEventListener('toggle', () => {
      if (entry.open) entries.forEach((other) => { if (other !== entry) other.open = false; });
    }));
  }

  function setupQuoteForm() {
    if (!phoneIsValid) return;
    const form = $('#quoteForm');
    const brief = $('#projectBrief');
    const select = $('#serviceSelect');
    const name = $('#customerName');
    const count = $('#briefCount');
    if (!form || !brief || !select || !name) return;
    form.hidden = false;
    $('#contactFallback').hidden = true;

    brief.addEventListener('input', () => {
      brief.setCustomValidity('');
      if (count) count.textContent = `${brief.value.length}/600`;
    });
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const description = brief.value.trim();
      if (description.length < 10) {
        brief.setCustomValidity('Conte um pouco mais: escreva ao menos 10 caracteres.');
      } else {
        brief.setCustomValidity('');
      }
      if (!form.reportValidity()) return;
      const serviceLabel = select.selectedOptions[0]?.textContent || 'Outro servi\u00e7o';
      const lines = ['Ol\u00e1, Eraldo! Vim pelo site da Albano Tech.'];
      if (name.value.trim()) lines.push(`Meu nome: ${name.value.trim()}`);
      lines.push(`Servi\u00e7o: ${serviceLabel}`, '', 'O que preciso:', description);
      const url = whatsappUrl(lines.join('\n'));
      // Called synchronously from the user's action. No requests to a backend.
      // No confirmation of sending: the visitor must review and send in WhatsApp.
      // A normal fallback link stays visible if the browser blocks the new tab.
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  function setupHeroSlideshow() {
    const slides = $$('.hero-slide');
    if (slides.length <= 1) return;

    let currentSlide = slides.findIndex((slide) => slide.classList.contains('is-active'));
    if (currentSlide < 0) {
      currentSlide = 0;
      slides[0].classList.add('is-active');
    }

    window.setInterval(() => {
      // Respeita a preferência de movimento reduzido e evita trabalho em aba oculta.
      if (reducedMotion || document.hidden) return;

      slides[currentSlide].classList.remove('is-active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('is-active');
    }, 6000);
  }

  // Modules remain isolated: one optional enhancement failing does not stop links.
  [
  setupContactLinks,
  setupNavigation,
  setupMotion,
  setupHeroSlideshow,
  setupReveals,
  setupScrollEffects,

  setupProcessAnimations,
  setupTestimonials,

  setupDialogs,
  setupProjects,
  setupFaq,
  setupQuoteForm
]
    .forEach((setup) => {
      try { setup(); } catch (error) { console.error(`Albano Tech: ${setup.name}`, error); }
    });
  const year = $('#currentYear');
  if (year) year.textContent = String(new Date().getFullYear());
})();
