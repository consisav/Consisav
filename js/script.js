const SECTOR_ICONS = {
    hospital: '<path d="M9 21V13a3 3 0 0 1 6 0v8"/><path d="M12 3v6M9 6h6"/><rect x="4" y="9" width="16" height="12" rx="1"/>',
    clinic: '<path d="M4.5 12.5 12 20l7.5-7.5a4.2 4.2 0 0 0-6-6L12 8l-1.5-1.5a4.2 4.2 0 0 0-6 6Z"/>',
    hotel: '<rect x="2" y="15" width="20" height="5" rx="1"/><path d="M4 15v-3a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v3"/><path d="M4 20v2M20 20v2"/>',
    pulse: '<path d="M3 12h4l2 6 4-14 2 8h6"/>',
    audit: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 8h8M8 12l2 2 4-4M8 17h5"/>',
    build: '<path d="M4 21V10l8-6 8 6v11"/><path d="M9 21v-6h6v6M4 10l8 4 8-4"/>',
    car: '<path d="M5 17h14M6 17l1.5-5.5A2 2 0 0 1 9.4 10h5.2a2 2 0 0 1 1.9 1.5L18 17"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="16.5" cy="17" r="1.5"/>',
    shield: '<circle cx="12" cy="12" r="9"/><path d="M8 12.3l2.6 2.6L16 9.3"/>',
    bank: '<path d="M3 10 12 4l9 6"/><path d="M5 10v9M9 10v9M15 10v9M19 10v9"/><path d="M3 21h18"/>',
    chart: '<path d="M4 20V10M10 20V6M16 20v-8M22 20H2"/>',
    pill: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
    coins: '<circle cx="9" cy="9" r="5"/><path d="M14 11a5 5 0 1 1 0 6"/>',
    briefcase: '<rect x="3" y="8" width="18" height="12" rx="1.5"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8"/>',
    map: '<path d="M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Z"/><path d="M9 4v14M15 6v14"/>',
    food: '<path d="M6 3v7a2 2 0 0 0 4 0V3M8 10v11M18 3c-2 1-2 4-2 6s0 3 2 3v9"/>',
    flask: '<path d="M9 3h6M10 3v6l-5.5 9.5A1.5 1.5 0 0 0 5.8 21h12.4a1.5 1.5 0 0 0 1.3-2.5L14 9V3"/><path d="M7.5 15h9"/>',
    cart: '<circle cx="9" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/><path d="M2 3h2l2.6 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L20 8H6"/>',
    headset: '<path d="M4 13a8 8 0 0 1 16 0"/><rect x="3" y="13" width="4" height="6" rx="1.4"/><rect x="17" y="13" width="4" height="6" rx="1.4"/>',
    eye: '<path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z"/><circle cx="12" cy="12" r="2.8"/>',
    leaf: '<path d="M12 21C4 21 4 13 12 3c8 10 8 18 0 18Z"/><path d="M12 21V9"/>',
    umbrella: '<path d="M3 12a9 9 0 0 1 18 0Z"/><path d="M12 12v7a2 2 0 0 1-4 0"/><path d="M12 3v2"/>',
    payroll: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 8h8M8 12h5M8 16h3"/><circle cx="16.5" cy="16.5" r="2"/>',
    sliders: '<path d="M4 6h10M17 6h3M4 12h4M11 12h9M4 18h13M20 18h0"/><circle cx="7" cy="6" r="2"/><circle cx="17" cy="12" r="2"/><circle cx="20" cy="18" r="2"/>',
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 4.2c1.7.4 3 2 3 3.8s-1.3 3.4-3 3.8M21 20c0-2.6-1.7-4.8-4-5.6"/>',
    cap: '<path d="M2 9 12 4l10 5-10 5-10-5Z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>',
    flower: '<circle cx="12" cy="12" r="2.2"/><path d="M12 9.8a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2ZM12 19.4a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2ZM14.2 12a2.6 2.6 0 1 1 5.2 0 2.6 2.6 0 0 1-5.2 0ZM4.6 12a2.6 2.6 0 1 1 5.2 0 2.6 2.6 0 0 1-5.2 0Z"/><path d="M12 15v6"/>',
    more: '<circle cx="5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="19" cy="12" r="1.3"/>',
    computer: '<rect x="3" y="4" width="18" height="12" rx="1"/><path d="M8 20h8M12 16v4"/>',
    server: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M7 7h.01M7 12h.01M7 17h.01M11 7h6M11 12h6M11 17h6"/>',
    printer: '<rect x="6" y="9" width="12" height="7" rx="1"/><path d="M6 9V4h12v5M8 16v4h8v-4"/>',
    firewall: '<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 10h18M9 4v6M15 4v6M6 15h4M14 15h4"/>',
    switchnet: '<rect x="3" y="9" width="18" height="6" rx="1"/><path d="M7 9v6M11 9v6M15 9v6"/>',
    camera: '<path d="M3 8a2 2 0 0 1 2-2h7l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z"/><circle cx="12" cy="13" r="3"/>',
    cable: '<path d="M9 15 15 9M8 13l-2 2a3 3 0 0 0 4 4l2-2M16 11l2-2a3 3 0 0 0-4-4l-2 2"/>',
    fiber: '<path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/>',
    dock: '<rect x="4" y="14" width="16" height="4" rx="1"/><rect x="8" y="6" width="8" height="8" rx="1"/>',
    box: '<path d="M3 7l9-4 9 4-9 4-9-4Z"/><path d="M3 7v10l9 4 9-4V7M12 11v10"/>',
    mouse: '<rect x="8" y="3" width="8" height="14" rx="4"/><path d="M12 3v6"/>',
    battery: '<rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 10v4"/><path d="M6 10v4M10 10v4"/>',
    rack: '<rect x="5" y="2" width="14" height="20" rx="1"/><path d="M5 8h14M5 14h14"/>',
    wifi: '<path d="M2 8.5a15 15 0 0 1 20 0"/><path d="M5.5 12a10 10 0 0 1 13 0"/><path d="M9 15.5a5 5 0 0 1 6 0"/><circle cx="12" cy="19" r="1"/>',
    phone: '<path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4.9c0-.5.4-1 1-1h3.4c.5 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z"/>',
    bolt: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>',
    database: '<path d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Z"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    code: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 5 11 19"/>',
    git: '<circle cx="6" cy="6" r="2.2"/><circle cx="6" cy="18" r="2.2"/><circle cx="18" cy="6" r="2.2"/><path d="M6 8.2V15.8M8.2 6H14a4 4 0 0 1 4 4v0"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.3 2.5 3.6 5.8 3.6 9s-1.3 6.5-3.6 9c-2.3-2.5-3.6-5.8-3.6-9s1.3-6.5 3.6-9Z"/>',
    network: '<circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="19" r="2.2"/><circle cx="19" cy="19" r="2.2"/><path d="M12 7.2V13M12 13 6.7 17.2M12 13l5.3 4.2"/>',
    layers: '<path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="M3 13l9 5 9-5M3 18l9 5 9-5"/>',
    laptop: '<rect x="3" y="4" width="18" height="11" rx="1"/><path d="M2 18.5h20"/>',
    tablet: '<rect x="6" y="3" width="12" height="18" rx="1.5"/><path d="M11 18h2"/>',
    smarthome: '<path d="M4 11 12 4l8 7"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/>',
    chip: '<rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/>',
    videocam: '<rect x="3" y="6" width="13" height="12" rx="1.5"/><path d="M16 10.5 21 8v8l-5-2.5"/>'
  };

  const areaData = {
    inteligencia: {
      tag: 'núcleo — inteligencia de negocios',
      title: 'Inteligencia de negocios',
      desc: 'Tu información contable, financiera, operativa y administrativa totalmente integrada, utilizando la menor cantidad de información para ser convertida en reportes claros, para decidir con datos y no solo con intuición, sino con inteligencia.',
      items: ['Reportes y dashboards', 'Análisis de datos', 'Indicadores de gestión']
    },
    redes: {
      tag: '01 — redes y comunicaciones',
      title: 'Redes y comunicaciones',
      desc: 'Infraestructura de red y comunicación empresarial, para que tus sistemas y sucursales se hablen entre sí sin cortes — incluyendo construcción de Data Centers, Call Centers y Contact Centers, y venta de recursos tecnológicos de punta.',
      itemsLabel: 'Qué incluye',
      items: [
        { label: 'Redes internas', icon: 'network' },
        { label: 'Telefonía y comunicaciones', icon: 'phone' },
        { label: 'Monitoreo y seguridad de red', icon: 'shield' },
        { label: 'Firewalls', icon: 'firewall' },
        { label: 'Uso eficiente del Internet', icon: 'wifi' }
      ]
    },
    software: {
      tag: '02 — software inteligente integrado',
      title: 'Software inteligente integrado',
      desc: 'Diseñamos, creamos, desarrollamos y administramos aplicaciones inteligentes totalmente certificadas, en modalidad de uso: renta, venta o híbrido, para distintos tipos de negocio: pequeños, medianos y grandes, incluyendo grupos corporativos, totalmente integradas con contabilidad, así como segmentos fiscales.',
      itemsLabel: 'Sectores que atendemos',
      items: [
        { label: 'Puntos de venta', icon: 'cart' },
        { label: 'Inventarios, puntos de venta y facturación', icon: 'cart' },
        { label: 'Contabilidades y auditorías', icon: 'audit' },
        { label: 'Finanzas', icon: 'chart' },
        { label: 'Gestión de negocios', icon: 'briefcase' },
        { label: 'Restaurantes', icon: 'food' },
        { label: 'Hospitales', icon: 'hospital' },
        { label: 'Clínicas médicas y oftalmológicas', icon: 'clinic' },
        { label: 'Servicios médicos', icon: 'pulse' },
        { label: 'Laboratorios y centros de diagnóstico', icon: 'flask' },
        { label: 'Farmacéuticas y droguerías: producción, venta y distribución', icon: 'pill' },
        { label: 'Educación y administración de colegios', icon: 'cap' },
        { label: 'Hotelería', icon: 'hotel' },
        { label: 'Constructoras', icon: 'build' },
        { label: 'Administración automotriz', icon: 'car' },
        { label: 'Seguros y Banca', icon: 'bank' },
        { label: 'Corretaje de Seguros', icon: 'shield' },
        { label: 'Cooperativas de créditos e inversiones', icon: 'coins' },
        { label: 'Call y contact centers', icon: 'headset' },
        { label: 'Nóminas, Planillas y Recursos Humanos', icon: 'payroll' },
        { label: 'Recursos humanos', icon: 'users' },
        { label: 'Control de procesos', icon: 'sliders' },
        { label: 'Producción y procesos', icon: 'gear' },
        { label: 'Administración de fincas', icon: 'map' },
        { label: 'Agronomía y agricultura', icon: 'leaf' },
        { label: 'Vacacional y tiempo compartido', icon: 'umbrella' },
        { label: 'Servicios funerarios', icon: 'flower' },
        { label: 'Entre otros', icon: 'more' }
      ]
    },
    hardware: {
      tag: '03 — hardware',
      title: 'Hardware',
      desc: 'Compra y venta de equipo a precios competitivos, con opciones de renta directa, importaciones propias, sistemas de video seguridad, e instalación, creación y administración de Call Center y Contact Center.',
      itemsLabel: 'Equipos y suministros',
      items: [
        { label: 'Computadoras', icon: 'computer' },
        { label: 'Laptops', icon: 'laptop' },
        { label: 'Tabletas', icon: 'tablet' },
        { label: 'Servidores', icon: 'server' },
        { label: 'Impresoras', icon: 'printer' },
        { label: 'Firewalls', icon: 'firewall' },
        { label: 'Switches', icon: 'switchnet' },
        { label: 'Sistemas de video seguridad', icon: 'camera' },
        { label: 'Video conferencias', icon: 'videocam' },
        { label: 'Smart Home', icon: 'smarthome' },
        { label: 'Materiales para redes y comunicaciones', icon: 'cable' },
        { label: 'Fibra óptica', icon: 'fiber' },
        { label: 'Doc Station', icon: 'dock' },
        { label: 'Componentes de PC', icon: 'chip' },
        { label: 'Suministros de cómputo', icon: 'box' },
        { label: 'Accesorios de cómputo', icon: 'mouse' },
        { label: 'UPS interactivos y online', icon: 'battery' },
        { label: 'Racks y gabinetes', icon: 'rack' },
        { label: 'Entre otros', icon: 'more' }
      ]
    },
    soporte: {
      tag: '04 — soporte técnico',
      title: 'Soporte técnico',
      desc: 'Uso de software y conectividad remota — Office, Internet, inteligencia artificial, sistemas administrativos internos y gestión de proyectos — con administración y soporte técnico eficiente, outsourcing en administración de tecnologías IT, mantenimiento preventivo y correctivo, e instalación y configuración de equipos.',
      itemsLabel: 'Qué administramos y soportamos',
      items: [
        { label: 'Internet', icon: 'wifi' },
        { label: 'Computadoras', icon: 'computer' },
        { label: 'Servidores', icon: 'server' },
        { label: 'Plantas telefónicas', icon: 'phone' },
        { label: 'Firewalls', icon: 'firewall' },
        { label: 'Switches', icon: 'switchnet' },
        { label: 'Impresoras', icon: 'printer' },
        { label: 'Redes y comunicaciones', icon: 'cable' },
        { label: 'Call Centers', icon: 'headset' },
        { label: 'Contact Centers', icon: 'headset' },
        { label: 'Electricidad', icon: 'bolt' },
        { label: 'Mantenimiento de equipos', icon: 'gear' }
      ]
    },
    educacion: {
      tag: '05 — educación y capacitación',
      title: 'Educación y capacitación',
      desc: 'Capacitación y educación profesional con tecnología de punta, con acompañamiento en la creación de tus proyectos. Formamos a tu equipo en herramientas de oficina y sistemas colaborativos, administración de sistemas operativos, bases de datos y desarrollo web y móvil, software y recursos de inteligencia artificial, control de versiones, y diseño y administración de páginas web.',
      itemsLabel: 'Temas que cubrimos',
      items: [
        { label: 'Office: Word, Excel, PowerPoint, Canva', icon: 'audit' },
        { label: 'Sistemas colaborativos', icon: 'users' },
        { label: 'Sistemas operativos: Windows y Linux', icon: 'computer' },
        { label: 'Bases de datos: Oracle, Supabase y otros', icon: 'database' },
        { label: 'Desarrollo web y móvil sobre Oracle: Forms, Developer, APEX', icon: 'code' },
        { label: 'Software y recursos de inteligencia artificial: ChatGPT, Claude y otros', icon: 'chip' },
        { label: 'Control de versiones: Git, GitHub, GitHub Desktop', icon: 'git' },
        { label: 'Diseño y administración de páginas web', icon: 'globe' },
        { label: 'Técnicas de ingeniería de software avanzado', icon: 'gear' },
        { label: 'Diseño, técnicas de desarrollo y administración de sistemas inteligentes', icon: 'layers' }
      ]
    }
  };

  const buttons = document.querySelectorAll('.orbit-btn');
  const tagEl = document.getElementById('detail-tag');
  const titleEl = document.getElementById('detail-title');
  const descEl = document.getElementById('detail-desc');
  const listLabelEl = document.getElementById('detail-list-label');
  const listEl = document.getElementById('detail-list');
  const detailPanel = document.getElementById('detail-panel');

  function openArea(areaKey){
    const area = areaData[areaKey];
    if(!area) return;
    buttons.forEach(b => b.setAttribute('aria-expanded', b.dataset.area === areaKey ? 'true' : 'false'));
    tagEl.textContent = area.tag;
    titleEl.textContent = area.title;
    descEl.textContent = area.desc;
    listLabelEl.textContent = area.itemsLabel || 'Incluye';
    listEl.innerHTML = area.items.map(i => {
      if (typeof i === 'object') {
        const svg = SECTOR_ICONS[i.icon] || '';
        return `<li class="has-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.6">${svg}</svg><span>${i.label}</span></li>`;
      }
      return `<li>${i}</li>`;
    }).join('');
    detailPanel.classList.toggle('is-long', area.items.length > 0 && typeof area.items[0] === 'object');
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
  const spySections = ['inicio', 'nosotros', 'servicios', 'fortalezas', 'contacto']
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

  /* contact form: build a prefilled WhatsApp message */
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const empresa = document.getElementById('empresa').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    let texto = `Hola, soy ${nombre}`;
    if (empresa) texto += ` de ${empresa}`;
    texto += `.\nMi correo: ${correo}`;
    if (mensaje) texto += `\n\n${mensaje}`;

    const url = `https://wa.me/50258656329?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  });
