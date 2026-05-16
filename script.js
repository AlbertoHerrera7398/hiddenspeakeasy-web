// ===== THEME TOGGLE (Modo Oscuro/Claro) =====
// Esta sección verifica si el usuario había elegido previamente el modo oscuro.
// Usa 'localStorage' para guardar esa preferencia en su dispositivo.
(function () {
  const saved = localStorage.getItem('color-theme');
  if (saved === 'dark') document.body.classList.add('dark');
})();

document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
    });
  }
});

// ===== MENU DATA (Datos del Menú) =====
// Aquí se almacena TODA la información de bebidas y precios.
// Es un objeto de JavaScript. Si quieres cambiar el precio de una botella o añadir una nueva, 
// solo necesitas editar este bloque de texto. No hace falta tocar el HTML.
const menuData = {
  leftCol: [
    {
      title: "WHISKY",
      cols: ["COPA", "BOTELLA"],
      items: [
        ["BLACK AND WHITE 700 ML", "90", "890"],
        ["RED LABEL 700 ML", "110", "1150"],
        ["JACK DANIELS 700 ML", "130", "1600"],
        ["BUCHANANS 12 750 ML", "190", "1950"],
        ["OLD PARR 750 ML", "190", "1950"],
        ["BLACK LABEL 750 ML", "190", "2350"],
        ["MACALLAN 12 700 ML", "", "3490"],
        ["BUCHANANS 18 750 ML", "", "3890"],
        ["GREEN LABEL 700 ML", "", "3890"],
        ["BLUE LABEL 750 ML", "", "12250"]
      ]
    },
    {
      title: "TEQUILA",
      cols: ["COPA", "BOTELLA"],
      items: [
        ["JOSE CUERVO ESPECIAL 695 ML", "90", "890"],
        ["AZUL CENTENARIO REP 700 ML", "90", "890"],
        ["GRAN MALO 750 ML", "100", "1090"],
        ["JOSE CUERVO TRAD PLATA 695 ML", "110", "1150"],
        ["JOSE CUERVO TRAD REP 695 ML", "110", "1150"],
        ["DON JULIO BLANCO 700 ML", "120", "1750"],
        ["DON JULIO REPOSADO 700 ML", "160", "1750"],
        ["MAESTRO DOBEL 700 ML", "", "1950"],
        ["DON JULIO 70 CRISTALINO 700 ML", "", "2250"]
      ]
    },
    {
      title: "RON",
      cols: ["COPA", "BOTELLA"],
      items: [
        ["CAPTIAN MORGAN 700 ML", "90", "890"],
        ["BACARDI BLANCO 750 ML", "100", "890"],
        ["MATUSALEM CLASICO 750 ML", "100", "890"],
        ["BACARDI SABORES 750 ML", "", "890"],
        ["HAVANNA 7 AÑOS 700 ML", "", "1250"],
        ["ZACAPA 23 750 ML", "", "2550"]
      ]
    },
    {
      title: "VODKA",
      cols: ["COPA", "BOTELLA"],
      items: [
        ["SMIRNOFF 750 ML", "100", "890"],
        ["SMIRNOFF TAMARINDO 750 ML", "100", "890"],
        ["STOLICHNAYA 750 ML", "100", "1099"],
        ["GREY GOOSE 750 ML", "", "1990"]
      ]
    },
    {
      title: "MEZCAL",
      cols: ["BOTELLA"],
      items: [
        ["400 CONEJOS JOVEN 750 ML", "1200"],
        ["400 CONEJOS REP 750 ML", "1390"]
      ]
    },
    {
      title: "BRANDY Y GINEBRA",
      cols: ["BOTELLA"],
      items: [
        ["TORRES 10 700 ML", "890"],
        ["BEEFEATER 750 ML", "1190"],
        ["TANQUERAY 750 ML", "1290"],
        ["BOMBAY SAPHIRE 750 ML", "1290"]
      ]
    },
    {
      title: "LICORES",
      cols: ["COPA", "BOTELLA"],
      items: [
        ["BAILEYS 700 ML", "120", "950"],
        ["LICOR 43 700 ML", "120", "1250"],
        ["JAGERMEISTER 700 ML", "", "1400"],
        ["HPNOTIQ 750 ML", "", "1750"]
      ]
    }
  ],
  champagne: {
    title: "CHAMPAGNE",
    cols: ["BOTELLA"],
    items: [
      ["MOET BRUT 750 ML", "2950"],
      ["MOET ICE IMPERIAL 750 ML", "3450"],
      ["MOET ICE IMPERIAL ROSE 750 ML", "4150"],
      ["DOM PERIGNON VINTAGE 750 ML", "10500"],
      ["DOM PERIGNOM LUMINOUS 750 ML", "12500"]
    ]
  },
  privateShots: [
    { name: "EL SECRETO DE HIDDEN", sub: "(BUFANDA NEGRA)", price: "$899" },
    { name: "BABY MANGO", price: "$599" },
    { name: "FUEGO SECRETO", price: "$499" },
    { name: "ELIXIR PROHIBIDO", price: "$499" }
  ],
  cervezas: {
    cols: ["PIEZA<br>355ML", "CUBO<br>5PZAS"],
    items: [
      ["XX LAGER", "$55", "$259"],
      ["TECATE LIGHT", "$55", "$229"],
      ["INDIO", "$55", "$229"],
      ["ULTRA", "$59", "$269"],
      ["BOHEMIA OSCURA", "$59", "$269"],
      ["XX AMBAR", "$59", "$269"],
      ["HEINEKEN", "$59", "$269"]
    ]
  },
  litros: [
    { name: "AZULITOS", price: "$130" },
    { name: "MICHELADA CLASICA", price: "$130" },
    { name: "MICHELADA SABORES", sub: "(FRUTOS ROJOS, MORA AZUL Y TAMARINDO)", price: "$130" },
    { name: "CHELADA", price: "$130" },
    { name: "CLAMATADA", price: "$130" },
    { name: "OJO ROJO", price: "$130" }
  ],
  cocteleria: [
    ["MOJITOS", "$89"], ["PIÑA COLADA", "$89"], ["DAIQUIRI", "$89"],
    ["PALOMA", "$89"], ["DESARMADOR", "$89"], ["MARGARITA", "$89"],
    ["GIN&TONIC", "$89"], ["CARAJILLO", "$165"]
  ],
  mezcladores: [
    ["AGUA EMBOTELLADA 500 ML", "$55"], ["AGUA MINERAL 355 ML", "$55"],
    ["COCA COLA 355 ML", "$55"], ["SQUIRT 355 ML", "$55"],
    ["7UP 355 ML", "$55"], ["AGUA TONICA 355 ML", "$55"],
    ["COCA COLA SIN AZUCAR 355 ML", "$55"], ["PERRIER", "$70"]
  ]
};

// ===== RENDER FUNCTIONS (Generadores de HTML) =====
// Estas funciones leen los datos de "MENU DATA" y construyen el código HTML 
// automáticamente. Esto permite que la página sea modular y muy fácil de actualizar.
function createSectionHeader(title, cols, extraClass) {
  const cls = extraClass ? `section-header ${extraClass}` : 'section-header';
  const labels = cols.map(c => `<span class="column-header" style="width:42px;text-align:right">${c}</span>`).join('');
  return `<div class="${cls}">
    <h2 class="section-title">${title}</h2>
    <div class="col-labels">${labels}</div>
  </div>`;
}

function formatPrice(val) {
  if (!val) return '';
  return val.startsWith('$') ? val : `$${val}`;
}

function createItems(items, dual) {
  return items.map(item => {
    if (dual) {
      return `<div class="grid-prices">
        <span class="item-name">${item[0]}</span>
        <span class="item-price price-col">${formatPrice(item[1])}</span>
        <span class="item-price price-col">${formatPrice(item[2])}</span>
      </div>`;
    }
    return `<div class="grid-prices-single">
      <span class="item-name">${item[0]}</span>
      <span class="item-price price-col">${formatPrice(item[1])}</span>
    </div>`;
  }).join('');
}

function renderLeftCol() {
  let html = '<div class="decor-line"></div>';

  menuData.leftCol.forEach(section => {
    const dual = section.cols.length === 2;
    html += `<section>
      ${createSectionHeader(section.title, section.cols)}
      <div class="items-list">${createItems(section.items, dual)}</div>
    </section>`;
  });

  // Champagne
  const ch = menuData.champagne;
  html += `<section class="champagne-section">
    ${createSectionHeader(ch.title, ch.cols)}
    <div class="items-list">${createItems(ch.items, false)}</div>
  </section>`;

  return html;
}

function renderPrivate() {
  let items = menuData.privateShots.map(s => {
    const sub = s.sub ? `<br><span class="item-subtitle">${s.sub}</span>` : '';
    return `<div class="grid-prices-single" style="align-items:start">
      <span class="item-name opacity-90" style="line-height:1.3">${s.name}${sub}</span>
      <span class="item-price" style="font-weight:700">${s.price}</span>
    </div>`;
  }).join('');

  return `<section class="private-section">
    <div class="private-box"><h2 class="menu-header">PRIVATE</h2></div>
    <h2 class="menu-header ronda-title">RONDA 10 <span class="shots-text"><span>SHOTS</span><span>SHOTS</span></span></h2>
    <div class="private-items">${items}</div>
  </section>`;
}

function renderCervezas() {
  const c = menuData.cervezas;
  const labels = c.cols.map(col => `<span style="width:35px;text-align:right;font-size:0.6rem;line-height:1.2">${col}</span>`).join('');
  const items = c.items.map(i => `<div class="grid-prices">
    <span class="item-name opacity-80">${i[0]}</span>
    <span class="item-price price-col" style="font-weight:700">${i[1]}</span>
    <span class="item-price price-col" style="font-weight:700">${i[2]}</span>
  </div>`).join('');

  return `<section>
    <div class="section-header section-header-line cervezas-header">
      <h2 class="section-title">CERVEZAS <span class="cervezas-sub">TOP SECRET</span></h2>
      <div class="col-labels">${labels}</div>
    </div>
    <div class="items-list">${items}</div>
  </section>`;
}

function renderLitros() {
  const items = menuData.litros.map(l => {
    const sub = l.sub ? `<br><span class="item-subtitle">${l.sub}</span>` : '';
    return `<div class="grid-prices-single" style="align-items:start">
      <span class="item-name opacity-80" style="line-height:1.3">${l.name}${sub}</span>
      <span class="item-price" style="font-weight:700">${l.price}</span>
    </div>`;
  }).join('');

  return `<section>
    <div class="litros-header">
      <h2 class="menu-header" style="font-size:1.875rem;font-weight:700;line-height:0.95">LOS LITROS<br>LEGENDARIOS</h2>
      <div class="top-secret-badge"><span>TOP<br>SECRET</span></div>
    </div>
    <div class="items-list" style="gap:0.5rem">${items}</div>
  </section>`;
}

function renderSimpleSection(title, items) {
  const list = items.map(i => `<div class="grid-prices-single">
    <span class="item-name opacity-80">${i[0]}</span>
    <span class="item-price" style="font-weight:700">${i[1]}</span>
  </div>`).join('');

  return `<section>
    <div class="section-header section-header-line" style="margin-bottom:0.5rem">
      <h2 class="section-title">${title}</h2>
      <div></div>
    </div>
    <div class="items-list">${list}</div>
  </section>`;
}

function renderFooter() {
  return `<section class="footer-section">
    <div class="legal-text">
      <p class="bold">EVITA EL EXCESO</p>
      <p>TODOS NUESTROS PRECIOS INCLUYEN IVA</p>
      <p>FORMAS DE PAGO: TARJETAS Y EFECTIVO</p>
      <p>ACEPTAMOS TODAS LAS TARJETAS SIN COMISION ALGUNA</p>
      <p>HORARIO DE 9 PM - 3 AM</p>
    </div>
    <div class="secret-tagline">
      <p class="menu-header"><span>SHH...THIS IS</span><span class="big">OUR SECRET</span></p>
    </div>
  </section>`;
}

function renderRightCol() {
  let html = '';
  html += renderPrivate();
  html += renderCervezas();
  html += renderLitros();
  html += renderSimpleSection('COCTELERIA', menuData.cocteleria);
  html += renderSimpleSection('MEZCLADORES', menuData.mezcladores);
  html += renderFooter();
  return html;
}

// ===== INIT (Inicialización) =====
// Esta función se ejecuta ("DOMContentLoaded") una vez que la página HTML se termina de cargar.
// Su tarea es inyectar el HTML generado en las columnas izquierda y derecha, revisar el 
// horario de las promociones y finalmente encender el carrusel de imágenes.
document.addEventListener('DOMContentLoaded', () => {
  const leftCol = document.getElementById('left-col');
  const rightCol = document.getElementById('right-col');

  if (leftCol) leftCol.innerHTML = renderLeftCol();
  if (rightCol) rightCol.innerHTML = renderRightCol();

  loadPromotionsFromCSV();
});

// ===== PROMO SCHEDULE & CSV LOADING =====
function loadPromotionsFromCSV() {
  const promoWrapper = document.getElementById('promo-wrapper');
  if (!promoWrapper) return;

  try {
    // Obtenemos los datos desde el archivo promociones.js cargado en el HTML
    const text = typeof promocionesCSV !== 'undefined' ? promocionesCSV : '';
    if (!text) {
      promoWrapper.style.display = 'none';
      return;
    }
    
    // Parse CSV
    const rows = text.split('\n').map(row => row.trim()).filter(row => row.length > 0);
    const headers = rows[0].split(',');
    
    const promotions = [];
    for (let i = 1; i < rows.length; i++) {
      const cols = rows[i].split(',');
      promotions.push({
        icono: cols[0],
        titulo: cols[1],
        subtitulo: cols[2],
        condicion: cols[3],
        validez: cols[4],
        horaInicio: parseInt(cols[5], 10),
        horaFin: parseInt(cols[6], 10),
        reloj: cols[7] ? cols[7].trim().toUpperCase() : 'OFF'
      });
    }

    const currentHour = new Date().getHours();
    
    // Filter active promotions
    const activePromos = promotions.filter(p => {
      if (isNaN(p.horaInicio) || isNaN(p.horaFin)) return true; // Si no hay horario, se muestra siempre
      
      let inicio = p.horaInicio;
      let fin = p.horaFin;

      // Si ponen la misma hora de inicio y fin, asumimos que no se debe mostrar
      if (inicio === fin) return false;

      if (inicio < fin) {
        return currentHour >= inicio && currentHour < fin;
      } else {
        // Cruza la medianoche (ej. 21 a 3)
        return currentHour >= inicio || currentHour < fin;
      }
    });

    if (activePromos.length === 0) {
      promoWrapper.style.display = 'none';
      return;
    }

    // Render HTML
    const track = document.getElementById('promo-track');
    if (!track) return;
    
    track.innerHTML = activePromos.map((p, index) => {
      // El reloj ahora es independiente por cada fila del CSV
      const needsTimer = p.reloj === 'ON';
      const countdownHTML = needsTimer ? `<p class="menu-header countdown-timer" data-fin="${p.horaFin}" style="margin-top:0.25rem"></p>` : '';
      
      return `
      <div class="carousel-slide ${index === 0 ? 'active' : ''}">
        <div class="promo-banner">
          <div class="promo-left">
            <div class="promo-icon">
              <span class="material-symbols-outlined">${p.icono}</span>
            </div>
            <div>
              <h2 class="menu-header">${p.titulo}</h2>
              <p>${p.subtitulo}</p>
            </div>
          </div>
          <div class="promo-right">
            <div class="promo-right-text">
              <p>${p.condicion}</p>
              <p class="menu-header" style="font-size:0.85rem; opacity:0.8">${p.validez}</p>
              ${countdownHTML}
            </div>
          </div>
        </div>
      </div>
      `;
    }).join('');

    promoWrapper.style.display = 'block';
    initCarousel();

    // Iniciamos el contador (la función interna ya verifica si hay relojes visibles)
    updateCountdowns();
    if (!window.countdownInterval) {
      window.countdownInterval = setInterval(updateCountdowns, 1000);
    }

  } catch (error) {
    console.error('Error cargando las promociones:', error);
    promoWrapper.style.display = 'none';
  }
}

// ===== COUNTDOWN LOGIC =====
function updateCountdowns() {
  const timers = document.querySelectorAll('.countdown-timer');
  if (timers.length === 0) return;

  const now = new Date();
  
  timers.forEach(timer => {
    const finHour = parseInt(timer.getAttribute('data-fin'), 10);
    if (isNaN(finHour)) return;

    let target = new Date();
    target.setHours(finHour, 0, 0, 0);

    if (target <= now) {
      target.setDate(target.getDate() + 1);
    }

    const diff = target - now;
    if (diff <= 0) {
      timer.innerHTML = "¡TIEMPO AGOTADO!";
      return;
    }

    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = num => num.toString().padStart(2, '0');
    // Si estamos en tema oscuro, color cyán/neón, si no, azul oscuro.
    // Para simplificar, usamos currentColor pero le damos un formato llamativo.
    timer.innerHTML = `TIEMPO: <span style="font-weight:700; color: #ff007f; text-shadow: 0 0 5px rgba(255,0,127,0.5)">${pad(h)}:${pad(m)}:${pad(s)}</span>`;
  });
}

// ===== CAROUSEL (Lógica del Carrusel) =====
// Esta sección controla el banner superior de promociones.
// Se encarga del cambio automático de diapositivas (autoplay cada 8 segundos), 
// de los botones/puntos de navegación y de permitir cambiar de promo al deslizar en el celular.
function initCarousel() {
  const carousel = document.getElementById('promo-carousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.carousel-slide');
  const dotsContainer = document.getElementById('carousel-dots');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  if (slides.length < 2) return;

  let current = 0;
  let interval = null;
  const INTERVAL_MS = 10000;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Promoción ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    if (index === current) return;

    const prev = current;
    current = index;

    // Instantly swap classes
    slides[prev].classList.remove('active');
    slides[current].classList.add('active');

    updateDots();
    resetAutoplay();
  }

  function next() {
    goTo((current + 1) % slides.length);
  }

  function prev() {
    goTo((current - 1 + slides.length) % slides.length);
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function startAutoplay() {
    interval = setInterval(next, INTERVAL_MS);
  }

  function resetAutoplay() {
    clearInterval(interval);
    startAutoplay();
  }

  // Events
  if (prevBtn) prevBtn.addEventListener('click', prev);
  if (nextBtn) nextBtn.addEventListener('click', next);

  // Pause on hover
  carousel.addEventListener('mouseenter', () => clearInterval(interval));
  carousel.addEventListener('mouseleave', startAutoplay);

  // Touch/swipe support
  let touchStartX = 0;
  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    clearInterval(interval);
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    startAutoplay();
  }, { passive: true });

  // Start
  startAutoplay();
}
