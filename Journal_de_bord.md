# Journal de bord

#### lundi 9 juillet 2018
* Mise en commun des idées
* Reflexion sur le cahier des charges
* Reflexion sur les technologies et les fonctionnalités de l'outil
* Concertation avec nos collègues du projet Repair-Cafe sur la charte graphique et l'API du calendrier, principalement
* Début de modélisation MCD
* Envoi de questions sur le projet à Native Web

- question: Doit-on impérativement oublier MongoDB?

#### mardi 10 juillet
* Continuité du travail sur la modélisation
* Récupération d'un cahier des charges plus complet (mais toujours temporaire, la version finale sera disponible le lundi 16 juillet)
* Echange téléphonique avec Native-Web afin de préciser certaines fonctionnalités du site (notamment le principe de tarification peu clair dans le cahier des charges et la faisabilité d'incorporer des images dans un calendrier)
* Validation et finition du modèle logique de donnée
* Début de l'étude des cas d'utilisations (user stories)

#### mercredi 11 juillet
* Finition des cas d'utilisation
* Nouvel échange avec Native-Web par rapport à l'architecture du site ainsi qu'aux wireframes
* Amorce des wireframes sur papier en s'inspirant des idées vues dans le cahier des charges
* Choix d'un hébergeur pour la database : GearHost
* Choix d'un outil d'automatisation des mails : MailChimp semble correspondre aux besoins mais l'utilisation de l'API doit encore être étudiée
* Reflexion et test d'un calendrier : Full-Calendar
* Choix du framework : materialize

#### jeudi 12 juillet
* Finition des wireframes (côté modérateur)
* Changement de cap pour l'automatisation des mails : SendGrid (gratuit et semble simple d'utilisation après quelques tests)
* Mise au point de la création d'un calendrier
* Création d'un serveur express avec gulp
* Essais avec materialize
* Echanges avec l'autre groupe qui travaille sur un projet de la MDA pour tenter d'uniformiser les technologies ainsi que le visuel des deux projets

#### vendredi 13 juillet
* Finition du calendrier
* Construction et organisation du repo
* Paramétrage de gulp
* Front : page d'accueil

#### samedi 14 juillet
* Ajout de carousel et parallax
* Travail sur le calendrier
* Création et ajout des cartes "formules"

#### dimanche 15 juillet
* Création de la page "resa"
* Link entre les pages et les ancres
* Travail sur la page d'accueil
* Implémentation d'une open street map dans la page d'accueil avec leaflet
* Mise en place du formulaire de contact avec  sendgrid (mail automatique)
* Responsivité du site


### A demander lors de la réunion du 16 juillet :
* Tous les liens à nous fournir (le site MDA, les conditions d'utilisation, le formulaire de la newsletter)
* Confirmation des mails vers lesquels envoyer les notifications de réservation
* Le mail pour créer un compte chez Sendgrid (nécessaire pour l'API d'automatisation des mails)
* Le mail qui doit S'AFFICHER lorsque les gens reçoivent des notifications
* Le mail pour gérer la clef api Leaflet
* Le mail vers lequel envoyer les formulaires de contact


Julie Talbot : julie.talbot@mjc-st-gaudens.org
Emma Satyagraha : emma.mda@outlook.fr


### Notes de la réunion du 16 juillet 2018.
#### Sont présent : Géna Paillha, Jérémy Piccoli (représentant de Native Web), Emma Satyagraha et Julie Talbot (MDA) ainsi que notre équipe : Geoffrey, Julien et Edmond

* Réflexion autour de l'arborescence du site : ok pour rassembler en une page
* informations sur les adresses et lieux de la MDA à fournir  // Edit : mail reçu
* projection : abonnement coworking au sein de réseau de lieux sur la territoire midi-pyrénnées
* 3 formules à la base : Demi-journées (passage) - "comme à la maison" (mensuel) - et carnet de 10/mois
* mail à recevoir pour détail du matériel (option payante) + prestations supp (copies, scanner...) - formules dans le mail aussi // Edit : reçu
* écran en option à priori (un seul de disponible)
* RGPD du groupe "Repar' Café" validé
* côté réseau social à mettre en avant : pas vraiment un besoin puisque le projet de "repar' café" a pour but de répondre à ce besoin 
* Créer boîte mail pour tout


### lundi 16 juillet


* Révision des wireframes et fusion de plusieurs pages du site pour améliorer la fluidité de la navigation
* Travail sur le style de l'agenda/calendrier, la version à présenter lors de la réservation est quasiment terminée
* Création d'une boîte gmail pour gérer toute la modération du site (réception/envoi de notification et de message)
* Solution trouvée pour masquer la clef api de Sendgrid
* Inscription de cette boite mail chez les différents services que l'on utilise (GearHost, Sendgrid)
* Création de la base de donnée et des tables
* Création du formulaire d'inscription du site (ne manque que les pattern, gênants pour le développement)

### mardi 17 juillet

* Création d'une nouvelle clé api pour les mails automatiques
* Revu du code du calendrier
* Enregistrement d'un utilisateur - partie front
* Design de la page d'acceuil

### mercredi 18 juillet

* Sécurité: injections dans la BDD mises à mal
* Commencement de l'authentification (connexion d'un utilisateur)
* Enregistrement d'un utilisateur - partie back
* Design du calendrier


### jeudi 19 juillet

* ajout (en js) d'une classe "date" à toutes les div du calendrier ayant pour valeur la date qui leur correspond
* affichage des produits séléctionnés à l'écran lors de la résa d'un utilisateur
* création des sessions avec des cookies et express-session
* création d'une page dashboard admin
* début des requêtes pour afficher des données dans la page dashboard
* début des comparaisons de mots de passe avec bcrypt
* début des requêtes pour réellement créer une réservation lors de l'envoi de la demande

### vendredi 20 juillet

* Requetes SQL côté admin et client
* Design du site

### samedi 21 & dimanche 22 juillet

* Requetes SQL
* Echec de la mise en ligne sur Heroku
* Design du site