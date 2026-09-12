const areaData = {
    inteligencia: {
      tag: 'núcleo — inteligencia de negocios',
      title: 'Inteligencia de negocios',
      desc: 'Tu información contable y operativa convertida en reportes claros, para decidir con datos y no solo con intuición.',
      items: ['Reportes y dashboards', 'Análisis de datos', 'Indicadores de gestión']
    },
    redes: {
      tag: '01 — redes y comunicaciones',
      title: 'Redes y comunicaciones',
      desc: 'Infraestructura de red y comunicación empresarial, para que tus sistemas y sucursales se hablen entre sí sin cortes.',
      items: ['Redes internas', 'Telefonía y comunicaciones', 'Monitoreo y seguridad de red']
    },
    software: {
      tag: '02 — software',
      title: 'Software',
      desc: 'Desarrollo de software orientado a la satisfacción integral de los actuales requerimientos contables, laborales e…',
      items: ['Sistemas a medida', 'Integración entre áreas', 'Actualización continua']
    },
    hardware: {
      tag: '03 — hardware',
      title: 'Hardware',
      desc: 'Equipo e infraestructura dimensionados para lo que tu sistema realmente necesita.',
      items: ['Equipos y servidores', 'Redes internas', 'Instalación y configuración']
    },
    soporte: {
      tag: '04 — soporte técnico',
      title: 'Soporte técnico',
      desc: 'Acompañamiento técnico continuo para resolver antes de que se detenga tu operación.',
      items: ['Soporte remoto y en sitio', 'Mantenimiento preventivo', 'Atención directa']
    }
  };

  const buttons = document.querySelectorAll('.orbit-btn');
  const tagEl = document.getElementById('detail-tag');
  const titleEl = document.getElementById('detail-title');
  const descEl = document.getElementById('detail-desc');
  const listEl = document.getElementById('detail-list');

  function openArea(areaKey){
    const area = areaData[areaKey];
    if(!area) return;
    buttons.forEach(b => b.setAttribute('aria-expanded', b.dataset.area === areaKey ? 'true' : 'false'));
    tagEl.textContent = area.tag;
    titleEl.textContent = area.title;
    descEl.textContent = area.desc;
    listEl.innerHTML = area.items.map(i => `<li>${i}</li>`).join('');
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => openArea(btn.dataset.area));
  });

  /* nav: dropdown + mobile links that also open a service area */
  document.querySelectorAll('[data-area-link]').forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(() => openArea(link.dataset.areaLink), 350);
      mobileNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* mobile menu toggle */
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  navToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  mobileNav.querySelectorAll('a:not([data-area-link])').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* scroll-spy: highlight current section in the main nav */
  const navLinks = document.querySelectorAll('.main-nav > ul > li > a[data-section]');
  const spySections = ['inicio', 'nosotros', 'servicios', 'contacto']
    .map(id => document.getElementById(id)).filter(Boolean);

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        navLinks.forEach(link => {
          link.classList.toggle('is-active', link.dataset.section === entry.target.id);
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  spySections.forEach(sec => spyObserver.observe(sec));
