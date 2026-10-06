# Spécification de Cap Web

`N` désigne la limite de caractères du binôme (`LIMITE` dans `public/js/brain.js`). Les tests nommés ci-dessous sont dans `tests/contrat/brain.contrat.test.js`.

1. Quand on envoie un message de N caractères, Cap Web l'accepte ; à N + 1 caractères (espaces autour retirés), il refuse et l'erreur cite N.
   Vérifié par : test « accepte N caractères et refuse N+1 » (le nom affiche les valeurs du binôme).

2. Quand on envoie un message vide ou fait d'espaces seuls, Cap Web le refuse avec une erreur.
   Vérifié par : test « refuse le vide et les espaces seuls ».

3. Quand le message contient du HTML comme `<b>gras</b>`, Cap Web l'affiche tel quel, en texte, sans l'interpréter.
   Vérifié par : test « view.js affiche du texte et ne décide pas des réponses », et essai de 30 secondes : envoyer `<b>gras</b>` dans la page et lire les chevrons à l'écran.

4. Quand on envoie l'un des deux mots du cahier personnel, quelles que soient la casse et les espaces autour, Cap Web répond par une phrase propre à ce mot.
   Vérifié par : test « reconnaît les deux mots du cahier personnel, quelles que soient la casse et les espaces autour ».

5. Quand on envoie une phrase inconnue, Cap Web répond par un message de repli, différent des réponses à « salut », « aide » et « test ».
   Vérifié par : test « répond à une phrase inconnue par un repli distinct ».
