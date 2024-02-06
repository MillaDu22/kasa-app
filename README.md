# Application Kasa
Application d'agence de locations immobilières .

### `Pré-requis:`
Node.js v21.6.1
React v18.2.0
React-router v6.22.0
Dans le répertoire du projet, vous pouvez exécuter : npm start

### `Refonte site Kasa:`
Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté Back-end, et React côté Front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance.
Maquettes Figma : https://www.figma.com/file/qEno0LwL4ZLkWyeY59kxp1/Kasa-FR-(Archived-2)?type=design&node-id=0-1&mode=design&t=KdCtY9OnZPKu9iIN-0
Pas de développeur BackEnd actuellement, faire sans pour le moment avec un extrait des 20 dernières annonces de logements au format json.
Data.json: https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json

### `Contraintes fonctionnelles:`
1/ Pour le défilement des photos dans la galerie (composant Gallery) :
- Si l'utilisateur se trouve à la première image et qu'il clique sur "image précédente", la galerie affiche la dernière image. 
- Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "image suivante", la galerie affiche la première image. 
- S'il n'y a qu'une seule image, les boutons "suivant" et "précédent" ainsi que la numérotation n'apparaissent pas.

2/ La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.

3/ Collapse : Par défaut, les Collapse sont fermés à l'initialisation de la page. 
Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
- Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.






