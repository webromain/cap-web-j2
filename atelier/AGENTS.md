# Conventions du projet Cap Web

Ces règles s'adressent à l'agent comme à tout nouveau développeur. Ce qui n'est pas écrit ici, ni l'un ni l'autre ne peut le deviner : en cas de doute, s'arrêter et demander.

## Nommage

- **Fonction** : un verbe en camelCase qui dit ce qu'elle fait, comme `validateMessage`, `replyTo` ou `renderMessages`.
- **Constante** : en MAJUSCULES quand c'est un réglage ou une table fixe (`LIMITE`, `MOTS`, `REPONSES`), sinon en camelCase avec un nom qui dit le contenu (`motsCites`). Pas de nom vague comme `liste`, `data` ou `tmp`.
- **Fichier** : en minuscules, un nom court qui dit le rôle (`brain.js`, `view.js`, `app.js`). Un test s'appelle `<nom>.test.js` et vit dans `tests/`.
- **Message de commit** : un préfixe, deux-points, puis ce qui change, en une ligne : `fix:`, `feat:`, `test:`, `docs:` ou `refactor:`. Exemple : `fix: replyTo ignore les espaces autour du message`. Un commit = un changement.

## Interdits

1. Ne modifie jamais `tests/contrat/`, `browser/contrat.spec.js` ni `cahier-personnel.json`. Si un test te semble faux, arrête-toi et explique pourquoi : on corrige le code, jamais le test.
2. Ne mets jamais de clé, de mot de passe, de jeton ni de donnée personnelle dans un fichier, un commit ou un message. Ne recopie pas la limite ni les mots du cahier personnel dans la documentation.
3. N'utilise jamais `innerHTML`, `outerHTML` ni `insertAdjacentHTML` dans `app.js` ou `view.js` : le texte reste du texte (`textContent`).
4. Garde à chaque module son rôle : `brain.js` n'accède jamais à la page (`document`, `window`, `localStorage`), `view.js` ne décide pas des réponses, `app.js` ne crée pas les lignes de la conversation.
5. Ne modifie ni `package.json`, ni `package-lock.json`, ni les configurations (`eslint.config.js`, `playwright*.config.js`), ni `scripts/`, et n'ajoute aucune dépendance, sans demande écrite.
6. N'utilise jamais `git add -A` ni `git add .` : nomme les fichiers. Ne fais ni `git push`, ni `git reset --hard`, ni réécriture de l'historique.
7. N'accepte aucun changement sans un diff relu et qu'on sait expliquer : une ligne qu'on ne sait pas expliquer se refuse.
