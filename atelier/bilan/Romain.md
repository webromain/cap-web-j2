# Bilan individuel · Romain Poisson

Binôme b20, avec Georgie Sandra.

## Mon niveau de départ

Mon positionnement de mardi, tel que je l'ai écrit dans le carnet :

| Notion | Au départ |
|---|---|
| Structure HTML | à l'aise |
| CSS et responsive | à l'aise |
| JavaScript | à renforcer |
| DOM et événements | à renforcer |
| Git | à renforcer |
| Tests | à renforcer |

Je savais construire une page et la mettre en forme. Je ne savais pas lire un test rouge pour trouver la cause d'un défaut, ni relier une page à un serveur.

## Deux acquis, avec leur preuve

1. **Écrire un test avant le code, puis le code qui le fait passer.** Pour la fonction `synonyme`, j'ai d'abord écrit les cinq critères C1 à C5 et vu le rouge, puis j'ai écrit la fonction jusqu'au vert.
   Preuves : commit `9c12a0d` (`test: synonyme, critères C1 à C5`), puis commit `07d23d1` (`feat: synonyme`).

2. **Échanger des données avec le serveur sans que la page plante.** J'ai ajouté la route `/api/conseil`, qui renvoie du JSON, puis la page l'appelle avec `fetch`, `async/await` et `try/catch` : si le serveur est arrêté, elle affiche un message clair au lieu d'un écran blanc.
   Preuves : commit `19b6579` (`feat: route /api/conseil`), puis commit `c9d4546` (`feat: Cap Web donne un conseil`).

## Deux points à renforcer

1. **Git à plusieurs.** J'ai fait un commit dans le mauvais ordre et lancé des `git add` depuis le mauvais dossier. Je dois encore m'entraîner sur les branches, les pull requests et la lecture de `git log --graph` sans aide.
2. **JavaScript asynchrone.** Je sais suivre `await`, `reponse.ok` et `catch` sur un exemple, mais je ne suis pas encore capable de les réécrire seul, de mémoire, sur un nouveau cas.

## Mon objectif

Sur mon prochain projet en équipe, travailler uniquement sur des branches, et faire plus de pull requests relues par un coéquipier avant chaque fusion. Je veux aussi mieux communiquer dans le groupe et annoncer ce que je fais avant de commencer, et laisser sur chaque pull request que je relis un commentaire précis, qui cite un fait.
