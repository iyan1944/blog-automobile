# ⚡ AutoTech Studio — Décryptage Automobile Électrique

Projet de développement web réalisé dans le cadre du **BTS CIEL (Cybersécurité, Informatique et réseaux, Électronique)** au Lycée Saint-Éloi.

* **Développeurs :** Iyan GOFFENEY & Mathis DIETRICH
* **Dépôt GitHub :** [https://github.com/iyan1944/blog-automobile](https://github.com/iyan1944/blog-automobile)
* **Site en ligne (GitHub Pages) :** [https://iyan1944.github.io/blog-automobile/](https://iyan1944.github.io/blog-automobile/)

---

##  Présentation du Projet
**AutoTech Studio** est un site web interactif dédié à l'analyse et à la comparaison technique de trois véhicules électriques représentatifs des tendances actuelles du marché automobile :
1. **Genesis GV60** (Corée du Sud) : Cocon de luxe technologique, plateforme 800V E-GMP, amortissement piloté par caméra prédictive (Preview ECS) et insonorisation de premier plan.
2. **XPENG G6** (Chine) : Rupture technologique, architecture ultra-rapide 800V SiC (pic 451 kW, charge 10–80 % en 12–15 min) et châssis monobloc moulé en Gigacasting.
3. **Renault Scénic E-Tech** (France) : Voiture de l'Année, compromis européen idéal (masse sous 1 890 kg, autonomie jusqu'à 625 km WLTP) avec écosystème multimédia Google OpenR Link.

---

##  Pourquoi ce projet est-il utile ?
* **Vulgarisation technique avancée :** Il synthétise et met à la portée du grand public des notions souvent complexes (architectures 400V vs 800V, carbure de silicium SiC, suspension prédictive, insonorisation acoustique active RANC).
* **Comparateur pragmatique :** Grâce à un tableau de bord interactif par télémétrie (recharge, confort, multimédia, budget), il offre un outil d'aide à la décision impartial basé sur des données constructeurs et des essais réels.
* **Intégration multimédia :** Centralisation d'essais vidéo spécialisés de la presse automobile (Le Vendeur Automobiles, Caradisiac) pour valider les analyses sur piste et route.

---

##  Architecture Technique
* **HTML5 sémantique :** Structure claire sans éléments superflus, balisage accessible (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`).
* **CSS3 moderne :** Découpage dans un fichier externe (`style.css`), utilisation de variables CSS (`:root`), mise en page en Flexbox et CSS Grid, design sombre « Dark Cockpit » et animations fluides.
* **JavaScript ES6 :** Fichier séparé (`script.js`) gérant :
  * Un carrousel avec défilement automatique synchronisé sur onglets cliquables.
  * Un hub interactif affichant les brevets technologiques et dispositifs ADAS par constructeur.
  * Un studio comparatif dynamique par thématiques techniques.
  * Des accordéons déroulants pour retracer l'historique des constructeurs.
* **Hébergement & Déploiement :** Intégration continue via **GitHub Pages**.
