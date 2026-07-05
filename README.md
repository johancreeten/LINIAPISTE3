# LINIA — Piste 3 : L’Agenda créatif

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
