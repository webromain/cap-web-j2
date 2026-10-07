# Carnet de bord · J2

Binôme : b20 · Membres : Romain Poisson, Georgie Sandra · Nos réglages sont dans `atelier/cahier-personnel.json` : ne les recopiez pas ici.

## Mon positionnement (chacun de vous deux)

Pour chaque notion, chacun écrit « à l'aise » ou « à renforcer ». Ce n'est ni évalué ni classé : c'est votre point de départ pour le bilan individuel de fin de module.

| Notion | Membre 1 : Romain | Membre 2 : Georgie |
|---|---|---|
| Structure HTML | à l'aise | à l'aise |
| CSS et responsive | à l'aise | à renforcer |
| JavaScript | à renforcer | à renforcer |
| DOM et événements | à renforcer | à renforcer |
| Git | à renforcer | à renforcer |
| Tests | à renforcer | à renforcer |

Chacun, en une phrase, son objectif personnel pour J2 et J3.

Membre 1 (Romain) : Savoir expliquer, éditeur fermé, chaque ligne que j'ai corrigée ou écrite, et écrire mes propres tests avant le code pour J2, puis relier la page à des données avec `fetch` en J3.

Membre 2 (Georgie) : Savoir relire un diff seule et dire pourquoi une ligne est juste ou fausse, puis prendre la main sur le clavier (tests et commits) pour J2, et gérer l'erreur d'un `fetch` en J3.

## R1 · Les tests automatisés

Les tests rouges du départ, et ce que vous en avez fait :

| Test rouge | Cause trouvée (une phrase) | Fichier | Message du commit `fix:` |
|---|---|---|---|
| refuse le vide et les espaces seuls | Le test du vide se fait sur `raw` avant le `trim()` : les espaces seuls passent | `public/js/brain.js` (`validateMessage`) | `fix: validateMessage retire les espaces avant de tester le vide et utilise LIMITE` |
| accepte 210 caractères et refuse 211 | La limite est écrite en dur (280) au lieu d'utiliser `LIMITE` | `public/js/brain.js` (`validateMessage`) | `fix: validateMessage retire les espaces avant de tester le vide et utilise LIMITE` |
| ignore la casse et les espaces autour | `replyTo` ne fait pas de `trim()` : `'  SALUT '` n'est pas reconnu | `public/js/brain.js` (`replyTo`) | `fix: replyTo ignore les espaces autour du message` |
| reconnaît les deux mots du cahier personnel, quelles que soient la casse et les espaces autour | Même cause que le test précédent : le `trim()` manque dans `replyTo`, donc `'  ATELIER '` tombe dans le repli | `public/js/brain.js` (`replyTo`) | `fix: replyTo ignore les espaces autour du message` |
| répond à une phrase inconnue par un repli distinct | Un message inconnu renvoie `REPONSES.aide` au lieu d'un repli propre | `public/js/brain.js` (`replyTo`) | `fix: une phrase inconnue reçoit un repli distinct de aide` |
| view.js affiche du texte et ne décide pas des réponses | `view.js` utilise `innerHTML`, qui injecte le HTML du message | `public/js/view.js` (`renderMessages`) | `fix: l'historique s'affiche en texte, sans innerHTML` |

Avec l'agent : chaque correction a été relue avec `git diff` avant son commit, et aucun fichier de `tests/` ni `cahier-personnel.json` n'a été modifié.

Pour aller plus loin : le nom renommé par votre commit `refactor:`, et pourquoi le nouveau est plus clair.

`liste` devient `motsCites` (`refactor: liste devient motsCites`) : « liste » ne disait pas de quoi, alors que `motsCites` dit que c'est le texte des deux mots reconnus, cités dans la réponse à « aide ».

## R2 · Documenter le projet

Vos trois documents sont dans `atelier` : `README.md`, `SPEC.md` et `AGENTS.md`. Rien à recopier ici.

Bonus non fait : les 3 demandes du formateur n'ont pas été traitées.

Pour aller plus loin, avec l'agent, les demandes du formateur :

| Demande | Ce qu'a fait l'agent | Votre décision | Règle d'`AGENTS.md` concernée (ou ajoutée) |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |

## R3 · Premiers tests unitaires

| À remplir | Votre réponse |
|---|---|
| Fonction tirée | F1, `synonyme(message)` |
| Le rouge vu (message exact) | `SyntaxError: The requested module '../public/js/brain.js' does not provide an export named 'synonyme'` |
| Identifiant du commit `test:` | `9c12a0d` |
| Identifiant du commit `feat:` | `07d23d1` |
| Casse volontaire : la ligne changée | Dernière ligne de `synonyme` dans `public/js/brain.js` : `return texte;` remplacé par `return '';` |
| Casse volontaire : le test devenu rouge | `C4 : un autre message revient en minuscules, sans les espaces autour` (`'' !== 'météo'`) |
| Pour aller plus loin : la deuxième fonction | Non faite |

Les critères C1 à C5 de votre fonction, recopiés de la fiche :

- C1 : `'coucou'`, `'hello'` et `'bonsoir'` donnent `'salut'`.
- C2 : `'help'` et `'sos'` donnent `'aide'`.
- C3 : la casse et les espaces autour ne comptent pas, `'  HELLO '` donne `'salut'`.
- C4 : un autre message revient en minuscules, sans les espaces autour, `'  Météo '` donne `'météo'`.
- C5 : ce qui n'est pas du texte (`undefined`, `null`, `42`) donne `''`, sans erreur.

## R4 · La revue de code

| Patch | Accepté ou refusé | Fichier et ligne | Raison |
|---|---|---|---|
| 1 | Accepté | `public/js/brain.js` (réponse `merci`) et `tests/merci.test.js` | Le diff fait ce que dit la description : 2 fichiers, 14 lignes ajoutées, aucun test existant touché. `npm test` : 45 verts, contrat inchangé. |
| 2 | Refusé | `tests/contrat/brain.contrat.test.js`, lignes 69, 71 et 86 ; `public/js/brain.js`, `normaliser` | Le patch retire les espaces des assertions du contrat (`'  SALUT '` devient `'SALUT'`) et `normaliser` perd le `trim()` : la description ne parle pas du contrat. `npm test` est vert parce que le test a été affaibli ; avec le contrat d'origine, 2 tests rouges (« ignore la casse et les espaces autour » et « reconnaît les deux mots… »). |
| 3 | Refusé | `public/js/view.js`, ligne 13 | `createContextualFragment(enGras(msg.text))` interprète le HTML du message : `<b>gras</b>` n'est plus affiché comme du texte, et `enGras` ne neutralise rien. Le contrat ne voit que le mot `innerHTML` : il passe (15 verts) alors que la règle « le texte reste du texte » est violée. |

Pour aller plus loin : non fait (aucun patch corrigé).

## Fin de journée

Chacun, une phrase : ce que vous savez faire ce soir et que vous ne saviez pas faire ce matin. Relisez votre positionnement : une notion est-elle passée de « à renforcer » à « à l'aise » ?

Membre 1 (Romain) : Ce matin je ne savais pas lire un test rouge pour trouver la cause ; ce soir je corrige un défaut, je le vérifie avec `npm test` et je fais un commit par correction. Je sais aussi écrire un test avant le code et refuser un patch dont les tests sont verts mais affaiblis.

Membre 2 (Georgie) : Ce matin je ne savais pas relire une modification ligne par ligne ; ce soir je lis un diff et je dis pourquoi une ligne est juste ou fausse, en repérant un test affaibli ou un `innerHTML` qui revient. Pour les notions du tableau, Git et Tests passent de « à renforcer » vers « à l'aise » à confirmer en J3.

# Jour 3

## Étape 1 · Le troisième mot

Prédiction, écrite avant de toucher au code : à « aide », Cap Web citera bien les trois mots, mais annoncera encore « deux mots à moi ». La liste des mots est calculée à partir de `MOTS` (`Object.keys(MOTS)`), alors que le nombre « deux » est écrit à la main dans la phrase.

## Étape 3 · L'accessibilité avec Lighthouse

| Essai | Score Accessibilité | Alerte |
|---|---|---|
| Page d'origine, avec le `label` | 100 | Aucune |
| Sans le `label` du champ | 93 | « Form elements do not have associated labels » : le champ `textarea` n'a plus de nom, un lecteur d'écran ne peut plus dire à quoi il sert |

## J3 · Test du README (rôle B)
Commandes testées une par une dans mon clone : `git pull --no-rebase`, `npm ci`, `npm start`, `npm test` (54 passés, fail 0), `curl /api/conseil` : toutes OK (à confirmer pour curl après relance du serveur).
Fautes de frappe repérées : « auhasard », « conseilindisponible », « àjour » (à signaler à A).

## J3 · Étapes 8 à 10 (GitHub à deux)
Rôle B : clone fait avec mon compte, branche `georgie`, PR #2 fusionnée (commit `d8f0bab`). Relecture de la PR #1 de A : commentaire de type « bravo ».
Difficulté : cherry-pick entre deux dossiers aux historiques différents, conflits sur view.js et brain.js ; abandon et passage par `main`.

## J3 · Étape 10 · Relecture et fusion
- Relecture de ma PR #2 par Romain : commentaire (type + fait) : ... ; Approve : oui / non.
- Fusion de la PR #2 faite par moi (auteur) : oui.
- `git log --graph` : deux fusions visibles (#1 et #2).

## J3 · Étape 11 · Les quatre attaques

| Attaque | Résultat | Détail |
|---|---|---|
| 1 serveur arrêté, puis « conseil » | repoussée | message vu : « Le serveur ne répond pas : conseil indisponible. » |
| 2 message de plus de 210 caractères | repoussée | erreur visible sous le formulaire, rien ajouté |
| 3 `<b>test</b>` | repoussée | affiché tel quel, chevrons compris |
| 4 largeur 375 px | repoussée | bouton pleine largeur, pas de défilement horizontal |

Pendant l'essai sans `label`, la console affiche une erreur rouge et le score Bonnes pratiques passe de 100 à 96 : la limite s'affiche dans un `span` placé dans le `label`, que `app.js` ne trouve plus. Le `label` a été remis ensuite.

Au clavier seul (Tab jusqu'au champ, message tapé, envoi) : tout fonctionne sans la souris.
