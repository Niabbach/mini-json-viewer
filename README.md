# mini-json-viewer


Un petit outil web pour **explorer les résultats de simulations Dymola** à partir de fichiers JSON.
L’utilisateur peut filtrer les signaux avec une barre de recherche et sélectionner un signal dans un menu déroulant pour voir ses valeurs clés.

---

## Fonctionnalités

- Lecture d’un fichier JSON contenant les résultats de simulation Dymola.
- Barre de recherche pour filtrer les signaux.
- Menu déroulant pour sélectionner un signal.
- Affichage clair des valeurs :
  - **Min** : valeur minimale du signal.
  - **Max** : valeur maximale du signal.
  - **Final** : dernière valeur du signal.
- Interface propre et responsive.

---

## Structure du projet

mini-dymola-viewer/
│
├─ data/
│ └─ Fichier.json
├─ index.html # Page principale
├─ style.css # Styles CSS
└─ app.js # Script JS pour gérer l’affichage

Usage
Ouvrir un terminal dans le dossier du projet.

Lancer un serveur local pour permettre le chargement du JSON :
python -m http.server 8000
Ouvrir le navigateur et accéder à :
http://localhost:8000
Utiliser la barre de recherche pour filtrer les signaux.

Sélectionner un signal dans le menu déroulant pour voir ses valeurs Min, Max et Final.
