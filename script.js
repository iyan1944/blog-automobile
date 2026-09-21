// Données du Hub Ingénierie & Sécurité
const hubData = {
  genesis: {
    borderClass: "border-top-genesis",
    techs: [
      { title: "Suspension Preview ECS", desc: "Caméra frontale scannant la route pour adapter l'amortissement avant chaque imperfection ou dos d'âne." },
      { title: "Face Connect & Crystal Sphere", desc: "Reconnaissance faciale infrarouge sur montant central, démarrage par empreinte et sélecteur en sphère de cristal." },
      { title: "Isolation Active RANC", desc: "Capteurs de vibrations châssis générant un contre-son en opposition de phase pour annuler les bruits de roulement." }
    ],
    safety: [
      { title: "Highway Driving Assist 2 (HDA 2)", desc: "Maintien centré et changement de voie entièrement automatisé sur simple activation du clignotant." },
      { title: "FCA-Junction (Freinage carrefour)", desc: "Détection active et freinage automatique lors de virages serrés coupant la trajectoire d'un véhicule inverse." },
      { title: "Airbag Central Anti-Collision", desc: "Airbag déployé entre les sièges avant pour éviter le contact direct entre conducteur et passager." }
    ]
  },
  xpeng: {
    borderClass: "border-top-xpeng",
    techs: [
      { title: "Fonderie Monobloc Gigacasting", desc: "Presses haute pression moulant l'avant et l'arrière d'un bloc aluminium (gain de 17 % de poids, rigidité 41 600 Nm/deg)." },
      { title: "Batterie Intégrée CIB (Cell-to-Body)", desc: "Cellules servant de plancher à l'habitacle pour abaisser le centre de gravité et libérer de l'espace aux jambes." },
      { title: "Onduleurs en Carbure de Silicium (SiC)", desc: "Semi-conducteurs haute puissance encaissant jusqu'à 451 kW en pic de charge avec un rendement moteur de 97 %." }
    ],
    safety: [
      { title: "XPILOT Assist & Double NVIDIA Orin-X", desc: "Calcul instantané de trajectoire à partir de 31 capteurs pour une perception périphérique à 360° sans angles morts." },
      { title: "Capot Actif Pyrotechnique", desc: "Déclenchement instantané soulevant le capot de quelques centimètres en cas de choc pour protéger la tête du piéton." },
      { title: "Surveillance Active du Conducteur", desc: "Caméra infrarouge analysant les micro-fermetures de paupières pour alerter avant l'endormissement." }
    ]
  },
  renault: {
    borderClass: "border-top-renault",
    techs: [
      { title: "Toit Vitré Opacifiant Solarbay", desc: "Cristaux liquides (AmpliSky) s'opacifiant par zones à la voix, supprimant 8 kg de moteur et rideau mécanique." },
      { title: "Moteur à Rotor Bobiné sans Terres Rares", desc: "Conception propriétaire sans aimants permanents ni métaux critiques, optimisée pour les vitesses autoroutières." },
      { title: "Insonorisation Brevetée Smart Cocoon", desc: "Couche de mousse composite amortissante intégrée directement entre le châssis et la batterie." }
    ],
    safety: [
      { title: "Fireman Access & QRescue (Brevet Mondial)", desc: "Accès permettant aux pompiers d'inonder la batterie en 10 min et QR code de désincarcération instantanée." },
      { title: "Safety Coach & Safety Score", desc: "Algorithme embarqué analysant la vitesse, les distances et les freinages pour attribuer un score de sécurité." },
      { title: "Régulateur Prédictif Contextuel", desc: "Adaptation automatique de l'allure avant l'entrée dans un rond-point ou virage via les cartes Google." }
    ]
  }
};

// Données du Studio Comparatif
const comparisonData = {
  recharge: [
    { model: "Genesis GV60", brand: "Corée du Sud", class: "card-border-genesis", scoreClass: "score-genesis", score: "800V E-GMP", detail: "Architecture 800V native capable de charger de 10 à 80 % en 18 minutes (pic à ~260 kW).", metricLabel: "Vitesse de recharge", metricValue: "92%", fillClass: "fill-genesis" },
    { model: "XPENG G6", brand: "Chine", class: "card-border-xpeng", scoreClass: "score-xpeng", score: "800V SiC (Pic 451 kW)", detail: "La charge la plus véloce du marché : 10 à 80 % en seulement 12 à 15 min grâce au carbure de silicium.", metricLabel: "Vitesse de recharge", metricValue: "99%", fillClass: "fill-xpeng" },
    { model: "Renault Scénic", brand: "France", class: "card-border-renault", scoreClass: "score-renault", score: "400V Optimisé (150 kW)", detail: "Architecture 400V (15-80 % en ~35 min). Moins rapide en pic mais compensé par l'efficience du moteur.", metricLabel: "Vitesse de recharge", metricValue: "70%", fillClass: "fill-renault" }
  ],
  confort: [
    { model: "Genesis GV60", brand: "Corée du Sud", class: "card-border-genesis", scoreClass: "score-genesis", score: "Preview ECS & Silence", detail: "Amortissement piloté par caméra prédictive. Double vitrage intégral et contrôle actif de bruit audio.", metricLabel: "Filtrage & Insonorisation", metricValue: "98%", fillClass: "fill-genesis" },
    { model: "XPENG G6", brand: "Chine", class: "card-border-xpeng", scoreClass: "score-xpeng", score: "Sièges Massants & Rigidité", detail: "Structure rigide en Gigacasting. Sièges chauffants/ventilés de série et insonorisation à 67 dB à 130 km/h.", metricLabel: "Filtrage & Insonorisation", metricValue: "82%", fillClass: "fill-xpeng" },
    { model: "Renault Scénic", brand: "France", class: "card-border-renault", scoreClass: "score-renault", score: "Smart Cocoon Français", detail: "Toucher de route équilibré filtrant avec douceur les nids-de-poule et mousse isolante brevetée sous plancher.", metricLabel: "Filtrage & Insonorisation", metricValue: "88%", fillClass: "fill-renault" }
  ],
  multimedia: [
    { model: "Genesis GV60", brand: "Corée du Sud", class: "card-border-genesis", scoreClass: "score-genesis", score: "Écran 27\" & Biométrie", detail: "Accès par caméra faciale, démarrage par empreinte et sphère de cristal Crystal Sphere pivotante.", metricLabel: "Expérience High-Tech", metricValue: "93%", fillClass: "fill-genesis" },
    { model: "XPENG G6", brand: "Chine", class: "card-border-xpeng", scoreClass: "score-xpeng", score: "Xmart OS & NVIDIA Orin", detail: "Grand écran central 15,6\", conduite autonome XPILOT de série et assistant vocal multizone réactif.", metricLabel: "Expérience High-Tech", metricValue: "95%", fillClass: "fill-xpeng" },
    { model: "Renault Scénic", brand: "France", class: "card-border-renault", scoreClass: "score-renault", score: "Google OpenR Link", detail: "La référence ergonomique : Google Maps intégré avec planificateur de recharge et applications Play Store.", metricLabel: "Expérience High-Tech", metricValue: "94%", fillClass: "fill-renault" }
  ],
  budget: [
    { model: "Genesis GV60", brand: "Corée du Sud", class: "card-border-genesis", scoreClass: "score-genesis", score: "De 54 200 € à 74 000 €", detail: "Positionnement grand luxe. Finition artisanale réservée à une clientèle recherchant l'exclusivité.", metricLabel: "Accessibilité Tarifaire", metricValue: "55%", fillClass: "fill-genesis" },
    { model: "XPENG G6", brand: "Chine", class: "card-border-xpeng", scoreClass: "score-xpeng", score: "Dès 46 990 € (Tout inclus)", detail: "Rapport équipement/prix imbattable : tout est inclus de série sans options payantes supplémentaires.", metricLabel: "Accessibilité Tarifaire", metricValue: "96%", fillClass: "fill-xpeng" },
    { model: "Renault Scénic", brand: "France", class: "card-border-renault", scoreClass: "score-renault", score: "Dès 39 990 € (Bonus éligible)", detail: "Fabriqué en France à Douai, éligible au Bonus Écologique avec un réseau après-vente très étendu.", metricLabel: "Accessibilité Tarifaire", metricValue: "90%", fillClass: "fill-renault" }
  ]
};

// Contrôleur du carrousel (rotation automatique & synchronisation des onglets)
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const carTabs = document.querySelectorAll('.car-tab');
let autoSlideInterval = null;

function goToSlide(index) {
  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
  carTabs.forEach((tab, i) => tab.classList.toggle('active', i === index));
  currentSlide = index;
  restartAutoSlide();
}

function nextSlide() {
  goToSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
  goToSlide((currentSlide - 1 + slides.length) % slides.length);
}

function startAutoSlide() {
  stopAutoSlide();
  autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
  if (autoSlideInterval) clearInterval(autoSlideInterval);
}

function restartAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

// Écouteurs de clics sur les flèches
const btnNext = document.getElementById('btnNext');
const btnPrev = document.getElementById('btnPrev');

if (btnNext && btnPrev) {
  btnNext.addEventListener('click', nextSlide);
  btnPrev.addEventListener('click', prevSlide);
}

// Mise en pause du défilement lors du survol de la souris
const carouselWrapper = document.querySelector('.carousel-wrapper');
if (carouselWrapper) {
  carouselWrapper.addEventListener('mouseenter', stopAutoSlide);
  carouselWrapper.addEventListener('mouseleave', startAutoSlide);
}

// Contrôleur du Hub Modèle
function selectModelHub(model) {
  ['genesis', 'xpeng', 'renault'].forEach(m => {
    const btn = document.getElementById('btnModel' + m.charAt(0).toUpperCase() + m.slice(1));
    if (btn) {
      btn.className = 'model-nav-btn' + (m === model ? ` active-${model}` : '');
    }
  });

  const data = hubData[model];
  const card = document.getElementById('hubCard');
  if (!card || !data) return;

  card.innerHTML = `
    <div>
      <h4 class="hub-col-title"><i class="fa-solid fa-atom"></i> Technologies Brevetées</h4>
      <ul class="tech-mini-list">
        ${data.techs.map(t => `
          <li class="tech-mini-item">
            <h5><i class="fa-solid fa-microchip"></i> ${t.title}</h5>
            <p>${t.desc}</p>
          </li>
        `).join('')}
      </ul>
    </div>
    <div>
      <h4 class="hub-col-title"><i class="fa-solid fa-shield-halved" style="color: var(--color-safety);"></i> Sécurité Routière & ADAS</h4>
      <ul class="tech-mini-list">
        ${data.safety.map(s => `
          <li class="tech-mini-item">
            <h5 style="color: var(--color-safety);"><i class="fa-solid fa-shield-check"></i> ${s.title}</h5>
            <p>${s.desc}</p>
          </li>
        `).join('')}
      </ul>
    </div>
  `;
}

// Contrôleur du Studio Comparatif
function renderComparisonCards(topic) {
  const grid = document.getElementById('comparisonGrid');
  const items = comparisonData[topic];
  if (!grid || !items) return;

  grid.innerHTML = items.map(item => `
    <article class="lux-compare-card ${item.class}">
      <div>
        <div class="lux-card-header">
          <div>
            <h4>${item.model}</h4>
            <span>${item.brand}</span>
          </div>
          <span class="badge-score ${item.scoreClass}">${item.score}</span>
        </div>
        <p class="lux-card-content">${item.detail}</p>
      </div>
      <div class="telemetry-gauge">
        <div class="gauge-label">
          <span>${item.metricLabel}</span>
          <span>${item.metricValue}</span>
        </div>
        <div class="gauge-track">
          <div class="gauge-fill ${item.fillClass}" style="width: ${item.metricValue};"></div>
        </div>
      </div>
    </article>
  `).join('');
}

function switchTopic(topic, element) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if (element) {
    element.classList.add('active');
  }
  renderComparisonCards(topic);
}

// Contrôleur des accordéons
function toggleAccordion(btn) {
  const item = btn.parentElement;
  const body = item.querySelector('.accordion-body');
  const isActive = item.classList.contains('active');

  document.querySelectorAll('.accordion-item').forEach(other => {
    other.classList.remove('active');
    const otherBody = other.querySelector('.accordion-body');
    if (otherBody) otherBody.style.maxHeight = null;
  });

  if (!isActive) {
    item.classList.add('active');
    body.style.maxHeight = body.scrollHeight + 30 + "px";
  }
}

// Initialisation au chargement du DOM
window.addEventListener('DOMContentLoaded', () => {
  selectModelHub('genesis');
  renderComparisonCards('recharge');
  startAutoSlide();

  const firstAcc = document.querySelector('.accordion-item.active .accordion-body');
  if (firstAcc) {
    firstAcc.style.maxHeight = firstAcc.scrollHeight + 30 + "px";
  }
});
