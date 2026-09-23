// ============================================
// AutoTech Studio - main.js
// Bascule FR/EN + carrousel 3D + hub + studio comparatif + accordéon
// ============================================

// ---------------------------------------------
// Données bilingues du Hub Ingénierie & Sécurité
// ---------------------------------------------
const hubData = {
  genesis: {
    techs: {
      fr: [
        { title: "Suspension Preview ECS", desc: "Caméra frontale scannant la route pour adapter l'amortissement avant chaque imperfection ou dos d'âne." },
        { title: "Face Connect & Crystal Sphere", desc: "Reconnaissance faciale infrarouge sur montant central, démarrage par empreinte et sélecteur en sphère de cristal." },
        { title: "Isolation Active RANC", desc: "Capteurs de vibrations châssis générant un contre-son en opposition de phase pour annuler les bruits de roulement." }
      ],
      en: [
        { title: "ECS Preview Suspension", desc: "Front camera scanning the road to adjust damping before every bump or speed hump." },
        { title: "Face Connect & Crystal Sphere", desc: "Infrared facial recognition on the B-pillar, fingerprint start and a rotating crystal-sphere selector." },
        { title: "Active RANC Isolation", desc: "Chassis vibration sensors generating an out-of-phase counter-sound to cancel road noise." }
      ]
    },
    safety: {
      fr: [
        { title: "Highway Driving Assist 2 (HDA 2)", desc: "Maintien centré et changement de voie entièrement automatisé sur simple activation du clignotant." },
        { title: "FCA-Junction (Freinage carrefour)", desc: "Détection active et freinage automatique lors de virages serrés coupant la trajectoire d'un véhicule inverse." },
        { title: "Airbag Central Anti-Collision", desc: "Airbag déployé entre les sièges avant pour éviter le contact direct entre conducteur et passager." }
      ],
      en: [
        { title: "Highway Driving Assist 2 (HDA 2)", desc: "Centred lane keeping and fully automated lane changes with a simple indicator tap." },
        { title: "FCA-Junction (Junction Braking)", desc: "Active detection and automatic braking on tight turns crossing an oncoming vehicle's path." },
        { title: "Central Anti-Collision Airbag", desc: "Airbag deployed between the front seats to prevent direct contact between driver and passenger." }
      ]
    }
  },
  xpeng: {
    techs: {
      fr: [
        { title: "Fonderie Monobloc Gigacasting", desc: "Presses haute pression moulant l'avant et l'arrière d'un bloc aluminium (gain de 17 % de poids, rigidité 41 600 Nm/deg)." },
        { title: "Batterie Intégrée CIB (Cell-to-Body)", desc: "Cellules servant de plancher à l'habitacle pour abaisser le centre de gravité et libérer de l'espace aux jambes." },
        { title: "Onduleurs en Carbure de Silicium (SiC)", desc: "Semi-conducteurs haute puissance encaissant jusqu'à 451 kW en pic de charge avec un rendement moteur de 97 %." }
      ],
      en: [
        { title: "Gigacasting Monobloc Foundry", desc: "High-pressure presses casting the front and rear as a single aluminium block (17% weight saving, 41,600 Nm/deg rigidity)." },
        { title: "Cell-to-Body (CIB) Integrated Battery", desc: "Cells act as the cabin floor to lower the centre of gravity and free up legroom." },
        { title: "Silicon Carbide (SiC) Inverters", desc: "High-power semiconductors handling up to 451 kW peak charging with 97% motor efficiency." }
      ]
    },
    safety: {
      fr: [
        { title: "XPILOT Assist & Double NVIDIA Orin-X", desc: "Calcul instantané de trajectoire à partir de 31 capteurs pour une perception périphérique à 360° sans angles morts." },
        { title: "Capot Actif Pyrotechnique", desc: "Déclenchement instantané soulevant le capot de quelques centimètres en cas de choc pour protéger la tête du piéton." },
        { title: "Surveillance Active du Conducteur", desc: "Caméra infrarouge analysant les micro-fermetures de paupières pour alerter avant l'endormissement." }
      ],
      en: [
        { title: "XPILOT Assist & Dual NVIDIA Orin-X", desc: "Instant trajectory computation from 31 sensors for 360° peripheral perception with no blind spots." },
        { title: "Pyrotechnic Active Bonnet", desc: "Instant trigger lifting the bonnet a few centimetres on impact to protect a pedestrian's head." },
        { title: "Active Driver Monitoring", desc: "Infrared camera analysing micro eyelid closures to warn before drowsiness sets in." }
      ]
    }
  },
  renault: {
    techs: {
      fr: [
        { title: "Toit Vitré Opacifiant Solarbay", desc: "Cristaux liquides (AmpliSky) s'opacifiant par zones à la voix, supprimant 8 kg de moteur et rideau mécanique." },
        { title: "Moteur à Rotor Bobiné sans Terres Rares", desc: "Conception propriétaire sans aimants permanents ni métaux critiques, optimisée pour les vitesses autoroutières." },
        { title: "Insonorisation Brevetée Smart Cocoon", desc: "Couche de mousse composite amortissante intégrée directement entre le châssis et la batterie." }
      ],
      en: [
        { title: "Solarbay Opacifying Glass Roof", desc: "Liquid crystals (AmpliSky) that opacify by zone using voice control, removing 8 kg of motor and mechanical blind." },
        { title: "Rare-Earth-Free Wound Rotor Motor", desc: "Proprietary design with no permanent magnets or critical metals, optimised for motorway speeds." },
        { title: "Patented Smart Cocoon Soundproofing", desc: "Damping composite foam layer built directly between the chassis and the battery." }
      ]
    },
    safety: {
      fr: [
        { title: "Fireman Access & QRescue (Brevet Mondial)", desc: "Accès permettant aux pompiers d'inonder la batterie en 10 min et QR code de désincarcération instantanée." },
        { title: "Safety Coach & Safety Score", desc: "Algorithme embarqué analysant la vitesse, les distances et les freinages pour attribuer un score de sécurité." },
        { title: "Régulateur Prédictif Contextuel", desc: "Adaptation automatique de l'allure avant l'entrée dans un rond-point ou virage via les cartes Google." }
      ],
      en: [
        { title: "Fireman Access & QRescue (World Patent)", desc: "Access letting firefighters flood the battery in 10 min, plus an instant extrication QR code." },
        { title: "Safety Coach & Safety Score", desc: "Onboard algorithm analysing speed, following distance and braking to assign a safety score." },
        { title: "Predictive Contextual Cruise Control", desc: "Automatic speed adjustment before a roundabout or bend using Google Maps data." }
      ]
    }
  }
};

// ---------------------------------------------
// Données bilingues du Studio Comparatif
// ---------------------------------------------
const comparisonData = {
  recharge: [
    { model: "Genesis GV60", brand: { fr: "Corée du Sud", en: "South Korea" }, cls: "card-border-genesis", scoreClass: "score-genesis", fillClass: "fill-genesis", score: "800V E-GMP", metricLabel: { fr: "Vitesse de recharge", en: "Charging speed" }, metricValue: "92%",
      detail: { fr: "Architecture 800V native capable de charger de 10 à 80 % en 18 minutes (pic à ~260 kW).", en: "Native 800V architecture able to charge 10 to 80% in 18 minutes (peak ~260 kW)." } },
    { model: "XPENG G6", brand: { fr: "Chine", en: "China" }, cls: "card-border-xpeng", scoreClass: "score-xpeng", fillClass: "fill-xpeng", score: "800V SiC (Pic 451 kW)", metricLabel: { fr: "Vitesse de recharge", en: "Charging speed" }, metricValue: "99%",
      detail: { fr: "La charge la plus véloce du marché : 10 à 80 % en seulement 12 à 15 min grâce au carbure de silicium.", en: "The fastest charging on the market: 10 to 80% in just 12 to 15 min thanks to silicon carbide." } },
    { model: "Renault Scénic", brand: { fr: "France", en: "France" }, cls: "card-border-renault", scoreClass: "score-renault", fillClass: "fill-renault", score: "400V Optimisé (150 kW)", metricLabel: { fr: "Vitesse de recharge", en: "Charging speed" }, metricValue: "70%",
      detail: { fr: "Architecture 400V (15-80 % en ~35 min). Moins rapide en pic mais compensé par l'efficience du moteur.", en: "400V architecture (15-80% in ~35 min). Slower peak, offset by the motor's efficiency." } }
  ],
  confort: [
    { model: "Genesis GV60", brand: { fr: "Corée du Sud", en: "South Korea" }, cls: "card-border-genesis", scoreClass: "score-genesis", fillClass: "fill-genesis", score: "Preview ECS & Silence", metricLabel: { fr: "Filtrage & Insonorisation", en: "Ride & Sound Insulation" }, metricValue: "98%",
      detail: { fr: "Amortissement piloté par caméra prédictive. Double vitrage intégral et contrôle actif de bruit audio.", en: "Damping controlled by a predictive camera. Full double glazing and active noise-cancelling audio." } },
    { model: "XPENG G6", brand: { fr: "Chine", en: "China" }, cls: "card-border-xpeng", scoreClass: "score-xpeng", fillClass: "fill-xpeng", score: "Sièges Massants & Rigidité", metricLabel: { fr: "Filtrage & Insonorisation", en: "Ride & Sound Insulation" }, metricValue: "82%",
      detail: { fr: "Structure rigide en Gigacasting. Sièges chauffants/ventilés de série et insonorisation à 67 dB à 130 km/h.", en: "Rigid Gigacasting structure. Heated/ventilated seats as standard and 67 dB insulation at 130 km/h." } },
    { model: "Renault Scénic", brand: { fr: "France", en: "France" }, cls: "card-border-renault", scoreClass: "score-renault", fillClass: "fill-renault", score: "Smart Cocoon Français", metricLabel: { fr: "Filtrage & Insonorisation", en: "Ride & Sound Insulation" }, metricValue: "88%",
      detail: { fr: "Toucher de route équilibré filtrant avec douceur les nids-de-poule et mousse isolante brevetée sous plancher.", en: "Balanced ride that smoothly filters potholes, with a patented insulating foam under the floor." } }
  ],
  multimedia: [
    { model: "Genesis GV60", brand: { fr: "Corée du Sud", en: "South Korea" }, cls: "card-border-genesis", scoreClass: "score-genesis", fillClass: "fill-genesis", score: "Écran 27\" & Biométrie", metricLabel: { fr: "Expérience High-Tech", en: "High-Tech Experience" }, metricValue: "93%",
      detail: { fr: "Accès par caméra faciale, démarrage par empreinte et sphère de cristal Crystal Sphere pivotante.", en: "Facial-camera access, fingerprint start and a rotating Crystal Sphere gear selector." } },
    { model: "XPENG G6", brand: { fr: "Chine", en: "China" }, cls: "card-border-xpeng", scoreClass: "score-xpeng", fillClass: "fill-xpeng", score: "Xmart OS & NVIDIA Orin", metricLabel: { fr: "Expérience High-Tech", en: "High-Tech Experience" }, metricValue: "95%",
      detail: { fr: "Grand écran central 15,6\", conduite autonome XPILOT de série et assistant vocal multizone réactif.", en: "Large 15.6\" central screen, XPILOT autonomous driving as standard and a responsive multi-zone voice assistant." } },
    { model: "Renault Scénic", brand: { fr: "France", en: "France" }, cls: "card-border-renault", scoreClass: "score-renault", fillClass: "fill-renault", score: "Google OpenR Link", metricLabel: { fr: "Expérience High-Tech", en: "High-Tech Experience" }, metricValue: "94%",
      detail: { fr: "La référence ergonomique : Google Maps intégré avec planificateur de recharge et applications Play Store.", en: "The ergonomic benchmark: built-in Google Maps with charge planner and Play Store apps." } }
  ],
  budget: [
    { model: "Genesis GV60", brand: { fr: "Corée du Sud", en: "South Korea" }, cls: "card-border-genesis", scoreClass: "score-genesis", fillClass: "fill-genesis", score: "De 54 200 € à 74 000 €", metricLabel: { fr: "Accessibilité Tarifaire", en: "Price Accessibility" }, metricValue: "55%",
      detail: { fr: "Positionnement grand luxe. Finition artisanale réservée à une clientèle recherchant l'exclusivité.", en: "Premium luxury positioning. Hand-finished quality aimed at customers seeking exclusivity." } },
    { model: "XPENG G6", brand: { fr: "Chine", en: "China" }, cls: "card-border-xpeng", scoreClass: "score-xpeng", fillClass: "fill-xpeng", score: "Dès 46 990 € (Tout inclus)", metricLabel: { fr: "Accessibilité Tarifaire", en: "Price Accessibility" }, metricValue: "96%",
      detail: { fr: "Rapport équipement/prix imbattable : tout est inclus de série sans options payantes supplémentaires.", en: "Unbeatable equipment-to-price ratio: everything is included as standard, no paid options." } },
    { model: "Renault Scénic", brand: { fr: "France", en: "France" }, cls: "card-border-renault", scoreClass: "score-renault", fillClass: "fill-renault", score: "Dès 39 990 € (Bonus éligible)", metricLabel: { fr: "Accessibilité Tarifaire", en: "Price Accessibility" }, metricValue: "90%",
      detail: { fr: "Fabriqué en France à Douai, éligible au Bonus Écologique avec un réseau après-vente très étendu.", en: "Made in France in Douai, eligible for the eco bonus, with a very wide after-sales network." } }
  ]
};

// =========================================================
// Langue courante
// =========================================================
function langueCourante() {
  return document.body.classList.contains("lang-en") ? "en" : "fr";
}

// ---------- Bascule de langue FR / EN ----------
function definirLangue(langue) {
  document.body.classList.toggle("lang-en", langue === "en");
  document.documentElement.setAttribute("lang", langue);
  localStorage.setItem("autotech-langue", langue);

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("actif", btn.dataset.switchLang === langue);
  });

  // Re-rendre tout le contenu généré en JS dans la nouvelle langue
  const modeleActif = document.querySelector(".model-nav-btn.active-genesis, .model-nav-btn.active-xpeng, .model-nav-btn.active-renault");
  const modele = modeleActif ? modeleActif.dataset.model : "genesis";
  renderHub(modele);

  const ongletActif = document.querySelector(".tab-btn.active");
  const sujet = ongletActif ? ongletActif.dataset.topic : "recharge";
  renderComparisonCards(sujet);
}

function initLangue() {
  const boutons = document.querySelectorAll(".lang-switch button");
  const langueSauvee = localStorage.getItem("autotech-langue") || "fr";
  definirLangue(langueSauvee);

  boutons.forEach((btn) => {
    btn.addEventListener("click", () => definirLangue(btn.dataset.switchLang));
  });
}

// ---------- Mise en surbrillance du lien de nav actif ----------
function initNavActive() {
  const hash = window.location.hash || "#accueil";
  document.querySelectorAll("nav a").forEach((lien) => {
    if (lien.getAttribute("href") === hash) lien.classList.add("actif");
  });
}

// =========================================================
// Carrousel 3D automatique (rotation en anneau)
// =========================================================
function initCarrousel3D() {
  const stage = document.querySelector(".carousel-3d-stage");
  if (!stage) return;

  const slides = stage.querySelectorAll(".slide3d");
  const tabs = document.querySelectorAll(".car-tab");
  const total = slides.length;
  let index = 0;
  let autoTimer = null;

  // Place chaque slide sur l'anneau 3D (120° d'écart, rayon 420px)
  slides.forEach((slide, i) => {
    slide.style.transform = `rotateY(${i * (360 / total)}deg) translateZ(420px)`;
  });

  function aller(i) {
    index = (i + total) % total;
    stage.style.transform = `rotateY(${-index * (360 / total)}deg)`;
    tabs.forEach((tab, t) => tab.classList.toggle("active", t === index));
  }

  function demarrerAuto() {
    arreterAuto();
    autoTimer = setInterval(() => aller(index + 1), 4500);
  }
  function arreterAuto() {
    if (autoTimer) clearInterval(autoTimer);
  }

  document.getElementById("btnNext3d")?.addEventListener("click", () => { aller(index + 1); demarrerAuto(); });
  document.getElementById("btnPrev3d")?.addEventListener("click", () => { aller(index - 1); demarrerAuto(); });

  tabs.forEach((tab, i) => tab.addEventListener("click", () => { aller(i); demarrerAuto(); }));

  const scene = document.querySelector(".carousel-3d-scene");
  scene.addEventListener("mouseenter", arreterAuto);
  scene.addEventListener("mouseleave", demarrerAuto);

  aller(0);
  demarrerAuto();
}

// =========================================================
// Hub Ingénierie & Sécurité
// =========================================================
function renderHub(modele) {
  ["genesis", "xpeng", "renault"].forEach((m) => {
    const btn = document.querySelector(`.model-nav-btn[data-model="${m}"]`);
    if (btn) btn.className = "model-nav-btn" + (m === modele ? ` active-${m}` : "");
  });

  const langue = langueCourante();
  const data = hubData[modele];
  const carte = document.getElementById("hubCard");
  if (!carte || !data) return;

  const titreTech = langue === "fr" ? "Technologies Brevetées" : "Patented Technologies";
  const titreSecu = langue === "fr" ? "Sécurité Routière & ADAS" : "Road Safety & ADAS";

  carte.innerHTML = `
    <div>
      <h4 class="hub-col-title">🔧 ${titreTech}</h4>
      <ul class="tech-mini-list">
        ${data.techs[langue].map(t => `
          <li class="tech-mini-item">
            <h5>${t.title}</h5>
            <p>${t.desc}</p>
          </li>`).join("")}
      </ul>
    </div>
    <div>
      <h4 class="hub-col-title">🛡️ ${titreSecu}</h4>
      <ul class="tech-mini-list">
        ${data.safety[langue].map(s => `
          <li class="tech-mini-item securite">
            <h5>${s.title}</h5>
            <p>${s.desc}</p>
          </li>`).join("")}
      </ul>
    </div>
  `;
}

function initHub() {
  document.querySelectorAll(".model-nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => renderHub(btn.dataset.model));
  });
  renderHub("genesis");
}

// =========================================================
// Studio Comparatif
// =========================================================
function renderComparisonCards(sujet) {
  const langue = langueCourante();
  const grille = document.getElementById("comparisonGrid");
  const items = comparisonData[sujet];
  if (!grille || !items) return;

  grille.innerHTML = items.map(item => `
    <article class="lux-compare-card ${item.cls}">
      <div>
        <div class="lux-card-header">
          <div>
            <h4>${item.model}</h4>
            <span>${item.brand[langue]}</span>
          </div>
          <span class="badge-score ${item.scoreClass}">${item.score}</span>
        </div>
        <p class="lux-card-content">${item.detail[langue]}</p>
      </div>
      <div class="telemetry-gauge">
        <div class="gauge-label">
          <span>${item.metricLabel[langue]}</span>
          <span>${item.metricValue}</span>
        </div>
        <div class="gauge-track">
          <div class="gauge-fill ${item.fillClass}" style="width: ${item.metricValue};"></div>
        </div>
      </div>
    </article>
  `).join("");
}

function initStudio() {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderComparisonCards(btn.dataset.topic);
    });
  });
  renderComparisonCards("recharge");
}

// =========================================================
// Accordéon FAQ
// =========================================================
function initAccordion() {
  document.querySelectorAll(".accordion-header").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const body = item.querySelector(".accordion-body");
      const estActif = item.classList.contains("active");

      document.querySelectorAll(".accordion-item").forEach((autre) => {
        autre.classList.remove("active");
        const autreCorps = autre.querySelector(".accordion-body");
        if (autreCorps) autreCorps.style.maxHeight = null;
      });

      if (!estActif) {
        item.classList.add("active");
        body.style.maxHeight = body.scrollHeight + 30 + "px";
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLangue();
  initNavActive();
  initCarrousel3D();
  initHub();
  initStudio();
  initAccordion();
});
