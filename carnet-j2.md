# Carnet de bord · J2

Binôme : b20 · Membres : Romain Poisson, Georgie Sandra · Nos réglages sont dans `atelier/cahier-personnel.json` : ne les recopiez pas ici.

## Mon positionnement (chacun de vous deux)

Pour chaque notion, chacun écrit « à l'aise » ou « à renforcer ». Ce n'est ni évalué ni classé : c'est votre point de départ pour le bilan individuel de fin de module.

| Notion | Membre 1 : Romain | Membre 2 : Georgie |
|---|---|---|
| Structure HTML | | |
| CSS et responsive | | |
| JavaScript | | |
| DOM et événements | | |
| Git | | |
| Tests | | |

Chacun, en une phrase, son objectif personnel pour J2 et J3.

Membre 1 (Romain) : Savoir expliquer, éditeur fermé, chaque ligne que j'ai corrigée ou écrite, et écrire mes propres tests avant le code pour J2, puis relier la page à des données avec `fetch` en J3.

Membre 2 (Georgie) : Savoir relire un diff seule et dire pourquoi une ligne est juste ou fausse, puis prendre la main sur le clavier (tests et commits) pour J2, et gérer l'erreur d'un `fetch` en J3.

## R1 · Les tests automatisés

Les tests rouges du départ, et ce que vous en avez fait :

| Test rouge | Cause trouvée (une phrase) | Fichier | Message du commit `fix:` |
|---|---|---|---|
| refuse le vide et les espaces seuls | Le test du vide se fait sur `raw` avant le `trim()` : les espaces seuls passent | `public/js/brain.js` (`validateMessage`) | `fix: validateMessage retire les espaces avant de tester le vide et utilise LIMITE` |
| accepte 210 caractères et refuse 211 | La limite est écrite en dur (280) au lieu d'utiliser `LIMITE` | `public/js/brain.js` (`validateMessage`) | `fix: validateMessage retire les espaces avant de tester le vide et utilise LIMITE` |
| ignore la casse et les espaces autour | `replyTo` ne fait pas de `trim()` : `'  SALUT '` n'est pas reconnu | `public/js/brain.js` (`replyTo`) | |
| reconnaît les deux mots du cahier personnel, quelles que soient la casse et les espaces autour | Même cause que le test précédent : le `trim()` manque dans `replyTo`, donc `'  ATELIER '` tombe dans le repli | `public/js/brain.js` (`replyTo`) | |
| répond à une phrase inconnue par un repli distinct | Un message inconnu renvoie `REPONSES.aide` au lieu d'un repli propre | `public/js/brain.js` (`replyTo`) | |
| view.js affiche du texte et ne décide pas des réponses | `view.js` utilise `innerHTML`, qui injecte le HTML du message | `public/js/view.js` (`renderMessages`) | |

Avec l'agent : ce qu'il a proposé et que vous avez refusé, et pourquoi.

Pour aller plus loin : le nom renommé par votre commit `refactor:`, et pourquoi le nouveau est plus clair.

## R2 · Documenter le projet

Vos trois documents sont dans `atelier` : `README.md`, `SPEC.md` et `AGENTS.md`. Rien à recopier ici.

Pour aller plus loin, avec l'agent, les demandes du formateur :

| Demande | Ce qu'a fait l'agent | Votre décision | Règle d'`AGENTS.md` concernée (ou ajoutée) |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |

## R3 · Premiers tests unitaires

| À remplir | Votre réponse |
|---|---|
| Fonction tirée | |
| Le rouge vu (message exact) | |
| Identifiant du commit `test:` | |
| Identifiant du commit `feat:` | |
| Casse volontaire : la ligne changée | |
| Casse volontaire : le test devenu rouge | |
| Pour aller plus loin : la deuxième fonction | |

Les critères C1 à C5 de votre fonction, recopiés de la fiche :

## R4 · La revue de code

| Patch | Accepté ou refusé | Fichier et ligne | Raison |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |

Pour aller plus loin : le patch que vous avez corrigé, et ce que vous avez changé.

## Fin de journée

Chacun, une phrase : ce que vous savez faire ce soir et que vous ne saviez pas faire ce matin. Relisez votre positionnement : une notion est-elle passée de « à renforcer » à « à l'aise » ?
