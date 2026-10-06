# Cap Web

## À quoi ça sert

Cap Web est un petit assistant de discussion qui tourne dans le navigateur, sans IA : il répond avec des règles écrites à la main.
On écrit un message, Cap Web le vérifie (pas vide, pas trop long), puis répond : une réponse connue pour « salut », « aide », « test » et deux mots propres au binôme, ou un message de repli sinon.
La conversation s'affiche en texte brut et reste dans le navigateur (`localStorage`) après un rechargement.

## Installer et lancer

Il faut Node 24.20 ou plus (`node --version`). Depuis le dossier `atelier` :

```bash
npm ci
cp cahier-personnel.exemple.json cahier-personnel.json
npm start
```

1. `npm ci` installe les outils. Il annonce une vulnérabilité : c'est normal, ne pas lancer `npm audit fix`.
2. Ouvrir `cahier-personnel.json` et y mettre la limite de caractères et les deux mots du binôme.
3. `npm start` lance Cap Web sur http://127.0.0.1:3000 (Ctrl+C pour l'arrêter).

Pour lancer les tests :

```bash
npm test
```

## Les 3 modules de `public/js`

| Module | Rôle |
|---|---|
| `brain.js` | Les règles. Fonctions pures, sans accès à la page : `validateMessage` vérifie le message (texte, non vide, pas plus de `LIMITE` caractères) et `replyTo` choisit la réponse. |
| `view.js` | L'affichage. `renderMessages` construit la liste des messages en texte (`textContent`), sans HTML et sans décider des réponses. |
| `app.js` | Le câblage. Lit le formulaire, appelle `brain.js`, garde l'historique dans `localStorage` et demande l'affichage à `view.js`. |
