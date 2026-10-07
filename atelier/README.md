# Cap Web

## À quoi ça sert

Cap Web est un petit assistant de discussion qui tourne dans le navigateur, sans IA : il répond avec des règles écrites à la main.
On écrit un message, Cap Web le vérifie (pas vide, pas trop long), puis répond : une réponse connue pour « salut », « aide », « test » et quelques mots propres au binôme, ou un message de repli sinon.
Le message « conseil » demande un conseil au serveur. Un compteur sous le champ indique le nombre de caractères tapés.
La conversation s'affiche en texte brut et reste dans le navigateur (`localStorage`) après un rechargement.

## Installer et lancer

Il faut Node 24.20 ou plus (`node --version`). Depuis le dossier `atelier` :

```bash
npm ci
npm start
```

1. `npm ci` installe les outils. Il annonce une vulnérabilité : c'est normal, ne pas lancer `npm audit fix`.
2. `npm start` lance Cap Web sur http://127.0.0.1:3000 (Ctrl+C pour l'arrêter).

Le fichier `cahier-personnel.json` (la limite de caractères et les deux mots du binôme) est déjà dans le dépôt : ne pas le modifier ni le remplacer.

## Tester

Depuis le dossier `atelier` :

```bash
npm run lint
npm test
```

1. `npm run lint` vérifie le style du code : il ne doit afficher aucune erreur.
2. `npm test` lance les tests automatisés : la dernière partie doit afficher `fail 0`.

## La route `/api/conseil`

Le serveur répond à `GET /api/conseil` par un objet JSON, avec un conseil tiré au hasard parmi trois :

```json
{ "conseil": "Réservez votre restaurant la veille, surtout le week-end." }
```

Pour l'essayer, serveur lancé, ouvrir http://127.0.0.1:3000/api/conseil ou envoyer « conseil » dans la page.
Si le serveur ne répond pas, la page affiche « Le serveur ne répond pas : conseil indisponible. » au lieu de planter.

## Les 3 modules de `public/js`

| Module | Rôle |
|---|---|
| `brain.js` | Les règles. Fonctions pures, sans accès à la page : `validateMessage` vérifie le message (texte, non vide, pas plus de `LIMITE` caractères) et `replyTo` choisit la réponse. |
| `view.js` | L'affichage. `renderMessages` construit la liste des messages en texte (`textContent`), sans HTML et sans décider des réponses. |
| `app.js` | Le câblage. Lit le formulaire, appelle `brain.js`, met le compteur à jour, appelle le serveur (`/version.json`, `/api/conseil`), garde l'historique dans `localStorage` et demande l'affichage à `view.js`. |

## Arborescence du projet

```text
atelier/
├── public/              la page servie au navigateur
│   ├── index.html       la structure de la page
│   ├── styles.css       la mise en forme, dont la version mobile
│   └── js/
│       ├── brain.js     les règles
│       ├── view.js      l'affichage
│       └── app.js       le câblage
├── server/
│   ├── app.js           les routes, dont /api/conseil et /version.json
│   └── start.js         le lancement du serveur
├── tests/               les tests lancés par npm test
│   └── contrat/         le contrat du formateur, à ne pas modifier
├── browser/             les tests dans un vrai navigateur
├── scripts/             les outils de vérification
├── cahier-personnel.json  les réglages du binôme, à ne pas modifier
├── package.json         les commandes npm et les outils
├── AGENTS.md            les conventions du projet
├── SPEC.md              les critères attendus
└── README.md            ce fichier
```
