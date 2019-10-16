# testHinnov

Bonjour,

Tout d'abords merci à InnovHealth de m'avoir attribué ce projet test, qui m'a permis d'exercer en React et en Api platform
et de découvrir le jeton JWT.

Malheureusement le projet n'est pas un franc succès, une semaine pour apprendre le plus possible sur React, découvrir Api
platform, le jeton jwt et de mettre tous ça en oeuvre dans un projet était un peu juste.
J'ai réussi à utiliser Api platform, the database movies et jwt.
J'ai essayé de maitriser un maximum symfony, mais je n'ai pas su gérer une session.

Mais j'ai essayé de faire quelque chose quand même.
Une personne peut aller sur le site et faire une recherche de film, puis voir le descriptif en cliquant sur le titre du film et
peut cliquer sur "Se connecter" puis rentrer ses informations personnels pour obtenir un token.

Comment mettre en place le film?

Il faut tout d'abord mettre en place l'API.
Dans le fichier API, il faut ouvrir un éditeur de code, puis dans le fichier .env, trouver la ligne DATABASE et modifier
l'utilisateur et le mot de passe ou créer le même utlisateur mysql.

Pour créer un utilisateur mysql, dans l'invite de command taper "sudo mysql -u root", puis "GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost' IDENTIFIED BY 'password';".

Maintenant pour créer la base de données il faut taper "php bin/console doctrine:database:create",
puis "php bin/console doctrine:schema:create" et "php bin/console doctrine:migrations:migrate"

IL faut créer un utilisateur pour le JWT, taper "sudo mysql -u root", puis "use (nom de la base de données)", puis 
"insert into user (username, roles, password) VALUES ('test', '["ROLE_USER"]', '$2y$10$7auEmNHnJQ2rxo.9yLL99eBPMozmYjSF4ON8gJ0NeYwGPLDxFWRT.');"
Le mot de pass est test crypté avec bcrypt.

Ensuite il faut démarrer l'API avec "php -S 127.0.0.1:8000 -t public".

Maintenant allons dans le fichier site, puis lancer la commande "npm start".

Le site est prêt.
