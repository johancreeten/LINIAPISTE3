# LINIA — Piste 3 : L’Agenda créatif

## Présentation du prototype
Prototype statique HTML/CSS/JS pour présenter LINIA comme une adresse créative active à Remouchamps. La page commence par un tableau d’agenda, et non par un hero classique, afin de montrer immédiatement les ateliers, événements, rencontres et places restantes.

## Objectif de la piste 3
La piste 3 doit donner envie de revenir sur le site pour consulter la programmation : ateliers à venir, démonstrations, rencontres créateurs, nouveautés boutique, idées cadeaux et moments café.

## Différence avec les pistes 1 et 2
- Piste 1 : LINIA comme lieu de vie chaleureux.
- Piste 2 : LINIA comme guide / parcours créatif.
- Piste 3 : LINIA comme agenda créatif vivant, organisé par dates, niveaux, publics et rendez-vous.

## Fichiers créés ou modifiés
- `piste-3.html` : prototype complet, sémantique et compatible future logique Gutenberg/WooCommerce.
- `css/styles.css` : design system responsive, palette, grilles, cartes, menu mobile, CTA sticky.
- `js/main.js` : menu burger accessible et fermeture au clic/Escape.
- `assets/photos/*.svg` : visuels éditoriaux temporaires, sans texte visible, en attendant les JPG Pexels.
- `docs/synthese-piste-3.md` : synthèse stratégique avant prototypage.
- `docs/pexels-images-a-telecharger.md` : brief de remplacement Pexels avec noms exacts.
## Présentation
Prototype HTML/CSS/JS statique pour présenter LINIA comme une adresse créative vivante à Remouchamps.

## Objectif de la piste 3
Montrer les prochains ateliers, événements, démonstrations, rencontres avec créateurs, cartes cadeaux et nouveautés boutique autour d’un agenda clair.

## Différence avec les pistes 1 et 2
La piste 1 positionne LINIA comme lieu de vie chaleureux. La piste 2 organise l’expérience par parcours créatif. La piste 3 organise l’accueil par dates, programmation, places restantes et rendez-vous à venir.

## Fichiers créés
- `piste-3.html`
- `css/styles.css`
- `js/main.js`
- `assets/photos/*.svg` temporaires
- `docs/synthese-piste-3.md`
- `docs/pexels-images-a-telecharger.md`

## Lancer en local
```bash
python3 -m http.server 8000
```
Puis ouvrir : `http://localhost:8000/piste-3.html`.

## Tester sur smartphone via le même Wi-Fi
1. Lancer le serveur local.
2. Trouver l’IP locale de l’ordinateur.
3. Ouvrir `http://IP_LOCALE:8000/piste-3.html` sur le smartphone.

## Publier sur GitHub Pages
1. Pousser la branche sur GitHub.
2. Activer GitHub Pages dans les réglages du dépôt.
3. Utiliser l’URL publiée avec `/piste-3.html`.

## Transposition WordPress/WooCommerce
- Les sections peuvent devenir des blocs Gutenberg : Agenda, À la une, Prochains rendez-vous, Agenda par envie, Produits liés, Créateur invité, Cartes cadeaux, Bientôt chez Linia.
- Les ateliers peuvent devenir des produits WooCommerce virtuels avec stock limité correspondant aux places disponibles.
- Les produits liés peuvent provenir d’une boucle produit WooCommerce.
- Les filtres pourront être basés sur des attributs : date, public, technique, niveau et disponibilité.

## Images Pexels
Le réseau de l’environnement a bloqué le téléchargement direct depuis Pexels. Les emplacements sont prêts et les fichiers temporaires sont des SVG éditoriaux locaux pour éviter les images cassées. Avant présentation finale, remplacer les SVG par des photos Pexels téléchargées et optimisées en JPG selon `docs/pexels-images-a-telecharger.md`.

## Points à adapter plus tard
Vraies photos LINIA, adresse, horaires, produits réels, ateliers réels, vraie programmation, fiches événements, intégration WooCommerce, paiements Stripe/Mollie, Google Maps, formulaires, actualités WordPress et éventuelle automatisation des événements.
Ouvrir `http://localhost:8000/piste-3.html`.

## Tester sur smartphone via le même Wi-Fi
Lancer le serveur, trouver l’IP locale de l’ordinateur, puis ouvrir `http://IP_LOCALE:8000/piste-3.html` sur le téléphone.

## Publier sur GitHub Pages
Pousser le dépôt, activer GitHub Pages sur la branche, puis ouvrir `/piste-3.html`.

## Transposition WordPress/WooCommerce
- Sections convertibles en blocs Gutenberg : Agenda, À la une, Prochains ateliers, Créateur invité, Cartes cadeaux, Nouveautés.
- Ateliers convertibles en produits WooCommerce virtuels avec stock limité.
- Produits liés convertibles en boucle WooCommerce.
- Filtres futurs : date, public, technique, niveau, places restantes.

## Images Pexels utilisées / à remplacer
Le réseau a bloqué le téléchargement direct Pexels. Des SVG temporaires cohérents occupent les emplacements visuels, et le document `docs/pexels-images-a-telecharger.md` liste les images Pexels à télécharger avec noms exacts. Les fichiers finaux attendus sont : `agenda-atelier-creatif.jpg`, `atelier-aquarelle-table.jpg`, `atelier-parent-enfant.jpg`, `boutique-materiel-art.jpg`, `cafe-livre-plante.jpg`, `createur-local-artisanat.jpg`, `carte-cadeau-creative.jpg`, `demo-materiel-art.jpg`, `agenda-carnet-creatif.jpg`.

## Points à adapter plus tard
Vraies photos LINIA, adresse, horaires, produits réels, ateliers réels, vraie programmation, fiches événements, intégration WooCommerce, paiements Stripe/Mollie, Google Maps, formulaires, actualités WordPress.
