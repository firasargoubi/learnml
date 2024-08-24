# Processus de développement d'application Web chez PolyAI
Bienvenue dans l'équipe!

**[Staging:](https://codeml---staging.web.app/)**

![Staging](https://github.com/PolyHx/website-CodeML/workflows/Deployement/badge.svg?branch=master)

u![Prodution](https://github.com/PolyHx/PolyAI-CodeML/w)
**Branche actuelle:**

![TSLint and tests](https://github.com/PolyHx/website-CodeML/workflows/Lint%20and%20test/badge.svg)

## IDE, outils, frameworks et autres dépendances
Il faut que vous installiez tout ça sur votre ordinateur avant de pouvoir commencer à programmer!

- node.js: https://nodejs.org/en/ (12.18)
- nodemon: https://www.npmjs.com/package/nodemon
- typescript: https://www.typescriptlang.org/#download-links
- vscode: https://code.visualstudio.com/Download
- git bash: https://git-scm.com/downloads
- tslint (il faut vs code avant): https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin
- Ensuite vous devez installer yarn! "Bien plus rapide que NPM" src: [Trust me bro](https://www.knowledgehut.com/blog/web-development/yarn-vs-npm)

## Étapes avant de démarrer le serveur pour la première fois (ou après installation de nouvelles dépendances)
Navigez dans la racine du projet (où se situe le fichier package.json) et exécutez cette commande dans un terminal:
`yarn install`

## Partir le serveur
Executez cette commande dans un terminal (dans le répertoire du projet):
`yarn start`

une page s'ouvrira automatiquement à `http://localhost:3000/`

## Run les tests
Exécutez la commande
`yarn test`
pour rouler les tests!

## Convention de nommage
Utilisez le ALL_CAPS pour les constantes.

Utilisez le PascalCase pour les noms de types, les noms de vos composants React et les valeurs d'énumérations.

Utilisez le camelCase pour les noms de fonctions (ceci inclut les hooks), de propriétés et de variables.

Pour créer vos propres hooks utilisez toujours le mot clé use devant. Exemple: useCustomHook

Utilisez le kebab-case pour les noms de fichiers des composants React et vos classes css.

Évitez les abbréviations dans les noms de variables ou de fonctions.

Un tableau/list/dictionnaire devrait avoir un nom indiquant qu'il contient plusieurs objets, par exemple "cars".

On évite de mettre le type de l'objet dans le noms, par exemple on préfère "cars" à "listOfCars" lorsqu'on déclare une liste.

Un objet ne devrait pas avoir un nom qui porte à croire qu'il s'agit d'un tableau.

Les clés de traduction doivent suivre le format suivant: "<ComposanteReact>.<cleMessage>'. La cleMessage doit suivre les conventions de nommage pour les variables. Pour les clés de traduction qui sont utilisés à l'extérieur d'une d'une composante, elle doit identique au chemin d'accès utilisé dans le code (e.g. "DATA_ARRAY[0].data").

Vous devez coder dans une langue et une seule. Nous vous recommandons d'écrire votre code en anglais.

Les pull requests et les commits se font aussi en anglais!

## Autres standards
Priorisez le plus possible l'utilisation de [composants fonctionnels](https://fr.reactjs.org/docs/hooks-state.html) et les [hooks](https://fr.reactjs.org/docs/hooks-overview.html)

Préférer utiliser la [composition](https://fr.reactjs.org/docs/composition-vs-inheritance.html) au lieu de l'héritage pour réutiliser du code, sinon, factoriser en plus petits composants

N'utilisez jamais var. Utilisez let et const.

N'utilisez jamais !important dans vos fichiers CSS.

N'utilisez jamais any, que ce soit implicitement ou explicitement.

N'utilisez pas le mot-clé function, utilisez les fonctions anonymes: () => {...}.

Déclarez tous les types de retour des fonctions (incluant void).

Évitez les fonctions qui ont plus d'une responsabilité.

N'utilisez pas de nombres magiques.

N'utilisez pas de chaînes de caractères magiques. Créez vos propres constantes avec des noms explicites.

Une fonction devrait avoir 3 paramètres ou moins.

Évitez la duplication de code.

## Guidelines pour Github

### Git

Une seule fonctionnalité par branche.

Les noms des branches ne doivent pas contenir d'accents ou de majuscules.

Une branche fonctionnalité devrait se nommer feature/_id-de-l'issue_/_nom-du-feature_.

Une branche correction de bogue devrait se nommer bugfix/_id-de-l'issue_/_nom-du-bug_.

Les messages de commit doivent être concis et significatifs. Ne mettez pas des messages trop long ou trop courts. On devrait être capable de comprendre ce que le commit fait sans lire les changements.

Vous devez garder le même courriel, peu importe l'ordinateur que vous utilisez.

Nous vous recommandons fortement de suivre le [Github-Flow](https://guides.github.com/introduction/flow/). [Lecture suggérée](http://scottchacon.com/2011/08/31/github-flow.html)

Si vous n'êtes pas familiers avec Git et le fonctionnement des branches, nous vous recommandons fortement d'explorer ce guide intéractif.

### Issues

Pour les tâches principale, respecter la nomenclature:

[Sprint _numéro-de-sprint_] Titre

Les tâches secondaires sont elles nommées:

(_id-de-la-tâche-principale-liée_) Titre

## Lecture suggérée
[article sur composants fonctionnels et différentes utilisations](https://www.robinwieruch.de/react-function-component)
