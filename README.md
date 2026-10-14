Personafy

Une plateforme pour aider les designers UX à construire des personas fondés sur des données réelles.

Projet de master (Mastère Direction artistique & UX/UI, YNOV, 2024) : UX/UI par Minosoa Andriamanana et Ylona Oth, développement front-end réalisé par Julie François.

Le problème

Créer un persona prend du temps, et le résultat repose souvent sur des intuitions plutôt que sur des données. Les designers UX recueillent des réponses dans des outils séparés, puis les synthétisent à la main.

La solution

Personafy centralise toute la démarche, du questionnaire au persona :

Créer un questionnaire adapté à la cible et aux questions du projet.
Le diffuser pour que la cible y réponde.
Stocker les réponses dans une base de données MongoDB.
Générer un persona moyen à partir des statistiques médianes des réponses, pour obtenir le profil le plus proche de la cible réelle.

Ce que j'ai fait
Développement front-end : application entièrement codée en React.
Données : connexion à MongoDB et calcul des statistiques utilisées pour construire le persona.
Stack technique
React (JavaScript)
CSS
MongoDB

Lancer le projet en local
bash
git clone https://github.com/JulieFrancois/personafy.git
cd personafy
npm install
npm start

Julie François, Designer UX/UI juliefrancois.fr
