Projet Git - Mini-Site web


Branches utilisées

main → branche finale stable (code propre et validé)
dev → branche d'intégration globale (avant publication)
test/* → branches de tests intermédiaires
feature/html-structure : structure HTML
feature/css-theme : design CSS
feature/js-interactions : scripts et animations

Etapes utilisées

1. Creation et Initialisation du depot
mkdir Site_web
cd Site_web
git init

2. Création des branches
git checkout -b main
git checkout -b dev
git checkout -b feature/html-structure
git checkout -b feature/css-theme
git checkout -b feature/js-interactions



3. Développement des fonctionnalités
•	feature/html-structure : ajout de index.html, services.html, contact.html
•	feature/css-theme : ajout du style pour toutes les page index.css, services.css, contact.css
•	feature/js-interactions : ajout du javascript index.js

4. Commits
git add .
git commit -m "Ajout du html du site"
git commit -m " Ajout du style du site "
git commit -m "Ajout du javascript de la page index"

5. Fusions
-  Fusion des branches features dans la branche test/frontend
git checkout test/frontend
git merge feature/html-structure
git merge feature/css-theme
git merge feature/js-interactions

- Fusion de la branche test/frontend dans la branche dev
git checkout dev
git merge test/frontend

- Fusion finale de la branche dev dans la branche main
git checkout main
git merge dev

6. Mise en ligne sur GitHub
git remote add origin https://github.com/luciano-237/Site_web.git
git push -u origin main   
git push origin dev



Flux de travail recommandé :
feature/* → test/* → dev → main


Commandes Git utilisées
- ﻿﻿git init
- ﻿git checkout -b
- ﻿﻿git add 
- git commit
- ﻿﻿git merge
- ﻿﻿git log
- ﻿﻿git push 


Résultat
Site web statique complet, testé et versionné proprement.


