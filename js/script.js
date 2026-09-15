let currentLang = 'es';

  const I18N = {
    'nav.inicio': { es: 'Inicio', en: 'Home' },
    'nav.nosotros': { es: 'Nosotros', en: 'About' },
    'nav.servicios': { es: 'Servicios', en: 'Services' },
    'nav.fortalezas': { es: 'Fortalezas', en: 'Strengths' },
    'nav.contacto': { es: 'Contacto', en: 'Contact' },
    'dd.inteligencia.t': { es: 'Inteligencia de negocios', en: 'Business Intelligence' },
    'dd.inteligencia.s': { es: 'Reportes y datos para decidir', en: 'Reports and data to decide' },
    'dd.redes.t': { es: 'Redes y comunicaciones', en: 'Networks & Communications' },
    'dd.redes.s': { es: 'Infraestructura de red y telefonía', en: 'Network and telephony infrastructure' },
    'dd.software.t': { es: 'Software Inteligente Integrado', en: 'Integrated Smart Software' },
    'dd.software.s': { es: 'Sistemas a la medida de tu operación', en: 'Systems tailored to your operation' },
    'dd.hardware.t': { es: 'Hardware', en: 'Hardware' },
    'dd.hardware.s': { es: 'Compra, venta y renta de equipo', en: 'Equipment purchase, sale and rental' },
    'dd.soporte.t': { es: 'Soporte técnico', en: 'Technical Support' },
    'dd.soporte.s': { es: 'Administración, soporte y mantenimiento', en: 'Administration, support and maintenance' },
    'dd.educacion.t': { es: 'Educación y capacitación', en: 'Education & Training' },
    'dd.educacion.s': { es: 'Formación para tu equipo', en: 'Training for your team' },

    'hero.tag1': { es: 'Integración de servicios corporativos', en: 'Corporate services integration' },
    'hero.tag2': { es: 'Tecnología orientada a servicios', en: 'Service-oriented technology' },
    'hero.h1': { es: 'Servicios inteligentes<br>integrados a tu alcance', en: 'Smart services<br>integrated within your reach' },
    'hero.lede': { es: 'Ofrecemos soluciones inteligentes con tecnología de punta certificadas en áreas como: software, hardware, redes comunicaciones y seguridad informática, respaldadas por experiencia nacional e internacional. Trabajamos con disciplina, capacidad, responsabilidad, honestidad y transparencia, preparados en el momento que lo necesites, utilizando recursos de contingencia para las soluciones de tu negocio o empresa ajustando los costos accesibles a tus necesidades.',
                 en: 'We offer smart, cutting-edge technology solutions certified across areas such as software, hardware, networks, communications and information security, backed by national and international experience. We work with discipline, capability, responsibility, honesty and transparency — ready whenever you need us, with contingency resources for your business, and costs adjusted to fit your needs.' },
    'hero.btn1': { es: 'Hablemos de tu empresa', en: "Let's talk about your business" },
    'hero.btn2': { es: 'Ver áreas de servicio', en: 'View service areas' },

    'orbit.inteligencia': { es: 'Inteligencia<br>de negocios', en: 'Business<br>Intelligence' },
    'orbit.software': { es: 'Software<br>Inteligente<br>Integrado', en: 'Smart<br>Integrated<br>Software' },
    'orbit.redes': { es: 'Redes y comunicaciones', en: 'Networks & Communications' },
    'orbit.educacion': { es: 'Educación y<br>Capacitación', en: 'Education &<br>Training' },

    'detail.servicios': { es: 'servicios', en: 'services' },
    'detail.choose': { es: 'Elegí un área', en: 'Choose an area' },
    'detail.chooseDesc': { es: 'Presiona uno de los íconos para ver qué incluye cada área de servicio.', en: 'Click one of the icons to see what each service area includes.' },

    'serv.h2': { es: 'Seis áreas, un mismo sistema', en: 'Six areas, one integrated system' },
    'serv.p': { es: 'Cada área se diseña para conectar con las demás, no para funcionar por separado.', en: 'Each area is designed to connect with the others, not to work on its own.' },
    'serv.tag': { es: 'servicios / 2026', en: 'services / 2026' },

    'nosotros.h2': { es: 'Ingeniería y soporte técnico, en un mismo equipo', en: 'Engineering and technical support, in one team' },
    'nosotros.p': { es: 'Desde 1997 diseñamos e implementamos soluciones de tecnología para empresas de todo tamaño y grupos corporativos — con ingenieros en sistemas, masters en bases de datos y especialistas en soporte técnico trabajando bajo un mismo equipo.',
                    en: 'Since 1997 we have designed and implemented technology solutions for businesses of every size and corporate groups — with systems engineers, database masters, and technical support specialists working as one team.' },
    'cap1.h': { es: 'Desarrollo de software', en: 'Software development' },
    'cap1.p': { es: 'Sistemas cliente-servidor, colaborativos, y aplicaciones web y móviles con inteligencia artificial, diseñados para empresas pequeñas, medianas, grandes y grupos corporativos.',
                en: 'Client-server and collaborative systems, and web and mobile applications with artificial intelligence, designed for small, medium and large businesses and corporate groups.' },
    'cap2.h': { es: 'Soporte técnico especializado', en: 'Specialized technical support' },
    'cap2.p': { es: 'Redes, comunicaciones, firewalls y seguridad informática; infraestructura, call y data centers, telefonía y videoseguridad; soporte a usuarios y servicios de IT fijos o en outsourcing.',
                en: 'Networks, communications, firewalls and information security; infrastructure, call and data centers, telephony and video security; user support and in-house or outsourced IT services.' },
    'cap3.h': { es: 'Consultoría tecnológica integral', en: 'Comprehensive technology consulting' },
    'cap3.p': { es: 'No solo software: adquisición, integración y administración de hardware, redes, comunicaciones, seguridad informática e internet, con soluciones a nivel operativo, fiscal, administrativo y contable-financiero.',
                en: 'Not just software: acquisition, integration and management of hardware, networks, communications, information security and internet, with solutions at the operational, tax, administrative and accounting-financial level.' },
    'cap4.h': { es: 'Educación y capacitación tecnológica', en: 'Technology education and training' },
    'cap4.p': { es: 'Formación inteligente con tecnología de punta en ingeniería de software avanzado y desarrollo de software y aplicaciones para todo tipo de negocio, soporte técnico, y acompañamiento en el desarrollo de proyectos y temas relacionados con IT.',
                en: 'Smart, cutting-edge training in advanced software engineering and software and application development for any type of business, technical support, and hands-on support throughout project development and IT-related topics.' },
    'fact.founded': { es: 'fundada', en: 'founded' },
    'fact.focus': { es: 'enfoque', en: 'focus' },
    'fact.focus.v': { es: 'Software + soporte técnico + capacitación + consultoría financiera de negocios', en: 'Software + technical support + training + business financial consulting' },
    'fact.coverage': { es: 'cobertura', en: 'coverage' },
    'fact.contact': { es: 'contacto', en: 'contact' },

    'schema.cap': { es: 'Capacitación', en: 'Training' },
    'schema.redes': { es: 'Redes', en: 'Networks' },
    'schema.software': { es: 'Software', en: 'Software' },
    'schema.hardware': { es: 'Hardware', en: 'Hardware' },
    'schema.soporte': { es: 'Soporte', en: 'Support' },
    'schema.caption': { es: 'un punto de contacto, seis áreas conectadas', en: 'one point of contact, six connected areas' },

    'fort.h2': { es: 'Fortalezas', en: 'Strengths' },
    'fort.p': { es: 'Lo que nos distingue en cada proyecto.', en: 'What sets us apart in every project.' },
    'fort.tag': { es: 'fortalezas', en: 'strengths' },
    'fort.b1tag': { es: '01 — objetivos', en: '01 — objectives' },
    'fort.b1h3': { es: 'Objetivos del servicio y software', en: 'Service and software objectives' },
    'fort.h1.h4': { es: 'Costos accesibles y competitivos del mercado', en: 'Accessible, market-competitive pricing' },
    'fort.tag1': { es: 'Acorde a tu presupuesto', en: 'Tailored to your budget' },
    'fort.tag2': { es: 'Distintas modalidades de pago', en: 'Multiple payment options' },
    'fort.tag3': { es: 'Evaluación y cotización sin costo', en: 'Free evaluation and quote' },
    'fort.obj1': { es: 'Intuitivo y fácil de manejar', en: 'Intuitive and easy to use' },
    'fort.obj2': { es: 'Sencillo, práctico y con inteligencia', en: 'Simple, practical and smart' },
    'fort.obj3': { es: 'Integrado en todas las áreas financieras, presupuesto y fiscal', en: 'Integrated across all financial, budget and tax areas' },
    'fort.obj4': { es: 'Comunicación cercana y acompañamiento constante, ideal para quienes necesitan orientación técnica', en: 'Close communication and constant support, ideal for those who need technical guidance' },
    'fort.obj5': { es: 'Que tu proyecto sea rentable y se vea como una inversión con pronta recuperación de costos', en: 'A profitable project that feels like an investment, with a fast return on cost' },
    'fort.obj6': { es: 'Que entre en producción de 1 a 7 días hábiles con los prototipos iniciales', en: 'Goes into production within 1 to 7 business days with initial prototypes' },
    'fort.b2tag': { es: '02 — qué ofrecemos', en: '02 — what we offer' },
    'fort.b2h3': { es: 'Qué ofrecemos', en: 'What we offer' },
    'fort.ofr1': { es: 'Desarrollo de aplicaciones móviles Android/iOS y multiplataforma', en: 'Android/iOS and cross-platform mobile app development' },
    'fort.ofr2': { es: 'Sistemas y plataformas web multipropósito', en: 'Multi-purpose web systems and platforms' },
    'fort.ofr3': { es: 'Implementación de APIs', en: 'API implementation' },
    'fort.ofr4': { es: 'Diseño de bocetos', en: 'Wireframe and mockup design' },
    'fort.ofr5': { es: 'Asesorías personalizadas y gratuitas', en: 'Free, personalized consulting' },
    'fort.ofr6': { es: 'Buen manejo de proyectos de gran escala', en: 'Strong management of large-scale projects' },
    'fort.ofr7': { es: 'Buen enfoque al cliente', en: 'Strong client focus' },
    'fort.ofr8': { es: 'Excelente soporte post-proyecto', en: 'Excellent post-project support' },
    'fort.ofr9': { es: 'Recursos capacitados y multilingües', en: 'Trained, multilingual staff' },
    'fort.ofr10': { es: 'Estándares internacionales de calidad', en: 'International quality standards' },
    'fort.ofr11': { es: 'Buen enfoque en diseño centrado en el usuario', en: 'Strong focus on user-centered design' },
    'fort.ofr12': { es: 'Apoyo en migración de información con recursos inteligentes', en: 'Support for data migration using smart resources' },
    'fort.sectorsh4': { es: 'Amplia experiencia en sectores como', en: 'Extensive experience across sectors such as' },
    'fort.sec1': { es: 'Salud, servicios médicos, laboratorios, centros de diagnóstico', en: 'Health, medical services, labs, diagnostic centers' },
    'fort.sec2': { es: 'Educación y capacitación tecnológica', en: 'Education and technology training' },
    'fort.sec3': { es: 'Contables, financieros y de auditoría', en: 'Accounting, finance and auditing' },
    'fort.sec4': { es: 'Sistemas de procesos y producción', en: 'Process and production systems' },
    'fort.sec5': { es: 'Banca, seguros, corretaje de seguros', en: 'Banking, insurance, insurance brokerage' },
    'fort.sec6': { es: 'Puntos de venta, controles de inventario', en: 'Points of sale, inventory control' },
    'fort.sec7': { es: 'Nóminas, planillas y recursos humanos', en: 'Payroll and human resources' },
    'fort.sec8': { es: 'Administración automotriz', en: 'Automotive administration' },
    'fort.sec9': { es: 'Hotelería y restaurantes', en: 'Hospitality and restaurants' },
    'fort.sec10': { es: 'Constructoras y procesos administrativos', en: 'Construction and administrative processes' },
    'fort.sec11': { es: 'Cooperativas de crédito e inversiones', en: 'Credit and investment cooperatives' },
    'fort.sec12': { es: 'Agronomía y agricultura', en: 'Agronomy and agriculture' },
    'fort.sec13': { es: 'Farmacéuticas: producción, venta y distribución', en: 'Pharmaceuticals: production, sales and distribution' },
    'fort.sec14': { es: 'Entre otros', en: 'Among others' },

    'contact.h2': { es: 'Hablemos', en: "Let's talk" },
    'contact.p': { es: 'Contactarnos para asesorarte sobre el sistema, soporte técnico o hardware que necesiten y te respondemos lo más pronto posible.',
                   en: 'Contact us for advice on the system, technical support or hardware you need, and we will get back to you as soon as possible.' },
    'contact.tag': { es: 'contacto', en: 'contact' },
    'contact.address': { es: 'Avenida Hincapié 2-51 zona 13, Edificio "C", interior parqueo — Ciudad de Guatemala, Guatemala',
                          en: 'Avenida Hincapié 2-51 zona 13, Building "C", parking interior — Guatemala City, Guatemala' },
    'contact.schedule': { es: 'Lunes a viernes, y sábados medio día en horario de oficina. Casos especiales en días festivos en horarios especiales.',
                          en: 'Monday to Friday, and Saturday half-day, during office hours. Special cases on holidays with special schedules.' },
    'contact.replymethod': { es: 'Respondemos por teléfono o correo', en: 'We respond by phone or email' },
    'form.nombre': { es: 'Nombre', en: 'Name' },
    'form.nombre.ph': { es: 'Tu nombre', en: 'Your name' },
    'form.empresa': { es: 'Empresa', en: 'Company' },
    'form.empresa.ph': { es: 'Nombre de tu empresa', en: 'Your company name' },
    'form.correo': { es: 'Correo', en: 'Email' },
    'form.mensaje': { es: '¿Qué sistema necesitás conectar?', en: 'What system do you need to connect?' },
    'form.mensaje.ph': { es: 'Contanos brevemente tu situación', en: 'Briefly tell us about your situation' },
    'form.note': { es: 'Al enviar, se abrirá WhatsApp con tu mensaje listo para enviar a Consisav.', en: 'When you submit, WhatsApp will open with your message ready to send to Consisav.' },
    'form.submit': { es: 'Enviar mensaje', en: 'Send message' },

    'footer.copy': { es: '© 2026 Consisav. Consultoría en Sistemas Avanzados.', en: '© 2026 Consisav. Advanced Systems Consulting.' }
  };

  function applyLanguage(lang){
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const entry = I18N[el.getAttribute('data-i18n')];
      if (entry) el.textContent = entry[lang];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const entry = I18N[el.getAttribute('data-i18n-html')];
      if (entry) el.innerHTML = entry[lang];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const entry = I18N[el.getAttribute('data-i18n-placeholder')];
      if (entry) el.setAttribute('placeholder', entry[lang]);
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
    });

    if (currentArea) {
      openArea(currentArea);
    } else {
      const tagEl2 = document.getElementById('detail-tag');
      const titleEl2 = document.getElementById('detail-title');
      const descEl2 = document.getElementById('detail-desc');
      if (tagEl2) tagEl2.textContent = I18N['detail.servicios'][lang];
      if (titleEl2) titleEl2.textContent = I18N['detail.choose'][lang];
      if (descEl2) descEl2.textContent = I18N['detail.chooseDesc'][lang];
    }
  }

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
      tag: { es: 'núcleo — inteligencia de negocios', en: 'core — business intelligence' },
      title: { es: 'Inteligencia de negocios', en: 'Business Intelligence' },
      desc: { es: 'Tu información contable, financiera, operativa y administrativa totalmente integrada, utilizando la menor cantidad de información para ser convertida en reportes claros, para decidir con datos y no solo con intuición, sino con inteligencia.',
              en: 'Your accounting, financial, operational and administrative information, fully integrated and distilled into clear reports — so you decide with data and intelligence, not just intuition.' },
      itemsLabel: { es: 'Incluye', en: 'Includes' },
      items: [
        { label: { es: 'Reportes y dashboards', en: 'Reports and dashboards' }, icon: 'chart' },
        { label: { es: 'Análisis de datos', en: 'Data analysis' }, icon: 'database' },
        { label: { es: 'Indicadores de gestión', en: 'Management indicators' }, icon: 'gear' }
      ]
    },
    redes: {
      tag: { es: '01 — redes y comunicaciones', en: '01 — networks & communications' },
      title: { es: 'Redes y comunicaciones', en: 'Networks & Communications' },
      desc: { es: 'Infraestructura de red y comunicación empresarial, para que tus sistemas y sucursales se hablen entre sí sin cortes — incluyendo construcción de Data Centers, Call Centers y Contact Centers, y venta de recursos tecnológicos de punta.',
              en: 'Enterprise network and communication infrastructure, so your systems and branches talk to each other without interruptions — including Data Center, Call Center and Contact Center construction, and sale of cutting-edge tech resources.' },
      itemsLabel: { es: 'Qué incluye', en: 'What it includes' },
      items: [
        { label: { es: 'Redes internas', en: 'Internal networks' }, icon: 'network' },
        { label: { es: 'Telefonía y comunicaciones', en: 'Telephony and communications' }, icon: 'phone' },
        { label: { es: 'Monitoreo y seguridad de red', en: 'Network monitoring and security' }, icon: 'shield' },
        { label: { es: 'Firewalls', en: 'Firewalls' }, icon: 'firewall' },
        { label: { es: 'Uso eficiente del Internet', en: 'Efficient internet usage' }, icon: 'wifi' }
      ]
    },
    software: {
      tag: { es: '02 — software inteligente integrado', en: '02 — integrated smart software' },
      title: { es: 'Software inteligente integrado', en: 'Integrated Smart Software' },
      desc: { es: 'Diseñamos, creamos, desarrollamos y administramos aplicaciones inteligentes totalmente certificadas, en modalidad de uso: renta, venta o híbrido, para distintos tipos de negocio: pequeños, medianos y grandes, incluyendo grupos corporativos, totalmente integradas con contabilidad, así como segmentos fiscales.',
              en: 'We design, create, develop and manage fully certified smart applications, available as rental, purchase, or a hybrid model, for businesses of every size — including corporate groups — fully integrated with accounting and tax reporting.' },
      itemsLabel: { es: 'Sectores que atendemos', en: 'Sectors we serve' },
      items: [
        { label: { es: 'Puntos de venta', en: 'Points of sale' }, icon: 'cart' },
        { label: { es: 'Inventarios, puntos de venta y facturación', en: 'Inventory, POS and invoicing' }, icon: 'cart' },
        { label: { es: 'Contabilidades y auditorías', en: 'Accounting and auditing' }, icon: 'audit' },
        { label: { es: 'Finanzas', en: 'Finance' }, icon: 'chart' },
        { label: { es: 'Gestión de negocios', en: 'Business management' }, icon: 'briefcase' },
        { label: { es: 'Restaurantes', en: 'Restaurants' }, icon: 'food' },
        { label: { es: 'Hospitales', en: 'Hospitals' }, icon: 'hospital' },
        { label: { es: 'Clínicas médicas y oftalmológicas', en: 'Medical and eye clinics' }, icon: 'clinic' },
        { label: { es: 'Servicios médicos', en: 'Medical services' }, icon: 'pulse' },
        { label: { es: 'Laboratorios y centros de diagnóstico', en: 'Labs and diagnostic centers' }, icon: 'flask' },
        { label: { es: 'Farmacéuticas y droguerías: producción, venta y distribución', en: 'Pharmaceuticals: production, sales and distribution' }, icon: 'pill' },
        { label: { es: 'Educación y administración de colegios', en: 'Education and school administration' }, icon: 'cap' },
        { label: { es: 'Hotelería', en: 'Hospitality' }, icon: 'hotel' },
        { label: { es: 'Constructoras', en: 'Construction companies' }, icon: 'build' },
        { label: { es: 'Administración automotriz', en: 'Automotive administration' }, icon: 'car' },
        { label: { es: 'Seguros y Banca', en: 'Insurance and Banking' }, icon: 'bank' },
        { label: { es: 'Corretaje de Seguros', en: 'Insurance brokerage' }, icon: 'shield' },
        { label: { es: 'Cooperativas de créditos e inversiones', en: 'Credit and investment cooperatives' }, icon: 'coins' },
        { label: { es: 'Call y contact centers', en: 'Call and contact centers' }, icon: 'headset' },
        { label: { es: 'Nóminas, Planillas y Recursos Humanos', en: 'Payroll and Human Resources' }, icon: 'payroll' },
        { label: { es: 'Recursos humanos', en: 'Human resources' }, icon: 'users' },
        { label: { es: 'Control de procesos', en: 'Process control' }, icon: 'sliders' },
        { label: { es: 'Producción y procesos', en: 'Production and processes' }, icon: 'gear' },
        { label: { es: 'Administración de fincas', en: 'Farm/estate administration' }, icon: 'map' },
        { label: { es: 'Agronomía y agricultura', en: 'Agronomy and agriculture' }, icon: 'leaf' },
        { label: { es: 'Vacacional y tiempo compartido', en: 'Vacation and timeshare' }, icon: 'umbrella' },
        { label: { es: 'Servicios funerarios', en: 'Funeral services' }, icon: 'flower' },
        { label: { es: 'Entre otros', en: 'Among others' }, icon: 'more' }
      ]
    },
    hardware: {
      tag: { es: '03 — hardware', en: '03 — hardware' },
      title: { es: 'Hardware', en: 'Hardware' },
      desc: { es: 'Compra y venta de equipo a precios competitivos, con opciones de renta directa, importaciones propias, sistemas de video seguridad, e instalación, creación y administración de Call Center y Contact Center.',
              en: 'Equipment purchase and sale at competitive prices, with direct rental options, our own imports, video security systems, and installation, setup and management of Call Centers and Contact Centers.' },
      itemsLabel: { es: 'Equipos y suministros', en: 'Equipment and supplies' },
      items: [
        { label: { es: 'Computadoras', en: 'Computers' }, icon: 'computer' },
        { label: { es: 'Laptops', en: 'Laptops' }, icon: 'laptop' },
        { label: { es: 'Tabletas', en: 'Tablets' }, icon: 'tablet' },
        { label: { es: 'Servidores', en: 'Servers' }, icon: 'server' },
        { label: { es: 'Impresoras', en: 'Printers' }, icon: 'printer' },
        { label: { es: 'Firewalls', en: 'Firewalls' }, icon: 'firewall' },
        { label: { es: 'Switches', en: 'Switches' }, icon: 'switchnet' },
        { label: { es: 'Sistemas de video seguridad', en: 'Video security systems' }, icon: 'camera' },
        { label: { es: 'Video conferencias', en: 'Video conferencing' }, icon: 'videocam' },
        { label: { es: 'Smart Home', en: 'Smart Home' }, icon: 'smarthome' },
        { label: { es: 'Materiales para redes y comunicaciones', en: 'Networking and communications materials' }, icon: 'cable' },
        { label: { es: 'Fibra óptica', en: 'Fiber optics' }, icon: 'fiber' },
        { label: { es: 'Doc Station', en: 'Docking stations' }, icon: 'dock' },
        { label: { es: 'Componentes de PC', en: 'PC components' }, icon: 'chip' },
        { label: { es: 'Suministros de cómputo', en: 'Computing supplies' }, icon: 'box' },
        { label: { es: 'Accesorios de cómputo', en: 'Computer accessories' }, icon: 'mouse' },
        { label: { es: 'UPS interactivos y online', en: 'Interactive and online UPS units' }, icon: 'battery' },
        { label: { es: 'Racks y gabinetes', en: 'Racks and cabinets' }, icon: 'rack' },
        { label: { es: 'Entre otros', en: 'Among others' }, icon: 'more' }
      ]
    },
    soporte: {
      tag: { es: '04 — soporte técnico', en: '04 — technical support' },
      title: { es: 'Soporte técnico', en: 'Technical Support' },
      desc: { es: 'Uso de software y conectividad remota — Office, Internet, inteligencia artificial, sistemas administrativos internos y gestión de proyectos — con administración y soporte técnico eficiente, outsourcing en administración de tecnologías IT, mantenimiento preventivo y correctivo, e instalación y configuración de equipos.',
              en: 'Software use and remote connectivity — Office, internet, artificial intelligence, internal administrative systems and project management — with efficient technical support, IT outsourcing, preventive and corrective maintenance, and equipment installation and setup.' },
      itemsLabel: { es: 'Qué administramos y soportamos', en: 'What we manage and support' },
      items: [
        { label: { es: 'Internet', en: 'Internet' }, icon: 'wifi' },
        { label: { es: 'Computadoras', en: 'Computers' }, icon: 'computer' },
        { label: { es: 'Servidores', en: 'Servers' }, icon: 'server' },
        { label: { es: 'Plantas telefónicas', en: 'Phone systems' }, icon: 'phone' },
        { label: { es: 'Firewalls', en: 'Firewalls' }, icon: 'firewall' },
        { label: { es: 'Switches', en: 'Switches' }, icon: 'switchnet' },
        { label: { es: 'Impresoras', en: 'Printers' }, icon: 'printer' },
        { label: { es: 'Redes y comunicaciones', en: 'Networks and communications' }, icon: 'cable' },
        { label: { es: 'Call Centers', en: 'Call Centers' }, icon: 'headset' },
        { label: { es: 'Contact Centers', en: 'Contact Centers' }, icon: 'headset' },
        { label: { es: 'Electricidad', en: 'Electrical systems' }, icon: 'bolt' },
        { label: { es: 'Mantenimiento de equipos', en: 'Equipment maintenance' }, icon: 'gear' }
      ]
    },
    educacion: {
      tag: { es: '05 — educación y capacitación', en: '05 — education & training' },
      title: { es: 'Educación y capacitación', en: 'Education & Training' },
      desc: { es: 'Capacitación y educación profesional con tecnología de punta, con acompañamiento en la creación de tus proyectos. Formamos a tu equipo en herramientas de oficina y sistemas colaborativos, administración de sistemas operativos, bases de datos y desarrollo web y móvil, software y recursos de inteligencia artificial, control de versiones, y diseño y administración de páginas web.',
              en: 'Professional training with cutting-edge technology, alongside support in building your projects. We train your team in office and collaboration tools, operating system administration, databases, web and mobile development, AI software and resources, version control, and web design and administration.' },
      itemsLabel: { es: 'Temas que cubrimos', en: 'Topics we cover' },
      items: [
        { label: { es: 'Office: Word, Excel, PowerPoint, Canva', en: 'Office: Word, Excel, PowerPoint, Canva' }, icon: 'audit' },
        { label: { es: 'Sistemas colaborativos', en: 'Collaborative systems' }, icon: 'users' },
        { label: { es: 'Sistemas operativos: Windows y Linux', en: 'Operating systems: Windows and Linux' }, icon: 'computer' },
        { label: { es: 'Bases de datos: Oracle, Supabase y otros', en: 'Databases: Oracle, Supabase and others' }, icon: 'database' },
        { label: { es: 'Desarrollo web y móvil sobre Oracle: Forms, Developer, APEX', en: 'Web and mobile development on Oracle: Forms, Developer, APEX' }, icon: 'code' },
        { label: { es: 'Software y recursos de inteligencia artificial: ChatGPT, Claude y otros', en: 'AI software and resources: ChatGPT, Claude and others' }, icon: 'chip' },
        { label: { es: 'Control de versiones: Git, GitHub, GitHub Desktop', en: 'Version control: Git, GitHub, GitHub Desktop' }, icon: 'git' },
        { label: { es: 'Diseño y administración de páginas web', en: 'Web page design and administration' }, icon: 'globe' },
        { label: { es: 'Técnicas de ingeniería de software avanzado', en: 'Advanced software engineering techniques' }, icon: 'gear' },
        { label: { es: 'Diseño, técnicas de desarrollo y administración de sistemas inteligentes', en: 'Design, development techniques and administration of smart systems' }, icon: 'layers' }
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

  let currentArea = null;

  function openArea(areaKey){
    const area = areaData[areaKey];
    if(!area) return;
    currentArea = areaKey;
    buttons.forEach(b => b.setAttribute('aria-expanded', b.dataset.area === areaKey ? 'true' : 'false'));
    tagEl.textContent = area.tag[currentLang];
    titleEl.textContent = area.title[currentLang];
    descEl.textContent = area.desc[currentLang];
    listLabelEl.textContent = (area.itemsLabel && area.itemsLabel[currentLang]) || (currentLang === 'en' ? 'Includes' : 'Incluye');
    listEl.innerHTML = area.items.map(i => {
      const svg = SECTOR_ICONS[i.icon] || '';
      return `<li class="has-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.6">${svg}</svg><span>${i.label[currentLang]}</span></li>`;
    }).join('');
    detailPanel.classList.add('is-long');
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

  /* language switch */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });
