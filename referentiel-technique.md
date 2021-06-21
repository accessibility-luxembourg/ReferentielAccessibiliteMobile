**Avertissement&nbsp;:** Pour chaque critère du référentiel, une méthodologie d’évaluation est proposée. Néanmoins, cette méthodologie n’a pas de valeur normative, c’est-à-dire qu’elle n’est fournie qu’à titre d’aide à la prise en main du référentiel, en donnant un exemple d’une méthode possible d’évaluation mais il peut exister d’autres méthodes d’évaluation. De plus, le contenu de cette méthodologie ainsi que ces étapes ne peuvent pas constituer une base opposable en cas de contestation. Enfin, il est possible que des erreurs ne soient pas détectées sur la seule base de cette méthodologie. Seul le contenu du critère et des tests ont une valeur normative.

**Note concernant les [vues web](glossaire.md#vues-web)&nbsp;:** dans les applications, certains écrans (ou tous les écrans) sont des pages web embarquées, appelées aussi [vues web](glossaire.md#vues-web) ou *web views*{lang=en}. Si le contenu de ces vues web est sous la responsabilité de l’éditeur de l’application, alors elles devront se conformer au présent référentiel au même titre que les autres écrans de l’application développés dans un langage propre aux applications mobiles. Si ces vues web ne sont pas sous la responsabilité de l’éditeur, leur contenu pourra être dérogé. Néanmoins, en fonction de l’importance pour les utilisateurs du contenu, il pourra être exigé une alternative ou un moyen de compensation.

### [Thématique 1](#topic-1)&nbsp;: Éléments graphiques {id="topic-1"}

#### [Critère 1.1](#crit-1-1) [A] Chaque [élément graphique de décoration](glossaire.md#element-graphique-de-decoration) est-il [ignoré par les technologies d’assistance](glossaire.md#ignore-par-les-technologies-d-assistance)&nbsp;? {id="crit-1-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Activer le **lecteur d’écran**.
1. Repérer dans l’écran les éléments graphiques décoratifs ([voir la note de glossaire concernant les particularités de restitution](glossaire.md#element-graphique)).
1. Vérifier&nbsp;:
	- qu’ils ne peuvent pas être atteints avec le lecteur d’écran&nbsp;; 
	- que leur contenu n’est pas restitué par ailleurs depuis un autre élément dans l’écran.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.1.1.1 Non-text Content*{lang=en}

#### [Critère 1.2](#crit-1-2) [A] Chaque [élément graphique porteur d’information](glossaire.md#element-graphique-porteur-d-information) possède-t-il une alternative [accessible aux technologies d’assistance](glossaire.md#accessible-aux-technologies-d-assistance)&nbsp;? {id="crit-1-2"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Activer le **lecteur d’écran**.
1. Repérer dans l’écran les éléments graphiques porteurs d’informations ([voir la note de glossaire concernant les particularités de restitution](glossaire.md#element-graphique)), par exemple, une image ou une icône.
1. Vérifier&nbsp;:
	- qu’ils peuvent être atteints avec le lecteur d’écran&nbsp;; 
	- ou que l’information qu’ils véhiculent est restituée depuis un autre élément dans l’écran.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.1.1.1 Non-text Content*{lang=en}

#### [Critère 1.3](#crit-1-3) [A] Pour chaque [élément graphique porteur d’information](glossaire.md#element-graphique-porteur-d-information), l’alternative [accessible aux technologies d’assistance](glossaire.md#accessible-aux-technologies-d-assistance) est-elle pertinente (hors cas particuliers)&nbsp;? {id="crit-1-3"}

##### Cas particuliers 

Le critère est non applicable lorsque l’élément graphique est utilisé comme [CAPTCHA](glossaire.md#captcha) ou comme [élément graphique de test](glossaire.md#element-graphique-de-test). Dans cette situation, où il n’est pas possible de donner une alternative pertinente sans détruire l’objet du CAPTCHA ou du test, le critère est non applicable.

Note&nbsp;: le cas des CAPTCHAs et des éléments graphiques tests est traité de manière spécifique par le [critère 1.4](#crit-1-4).

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Activer le **lecteur d’écran**.
1. Repérer dans l’écran les éléments graphiques porteurs d’information ([voir la note de glossaire concernant les particularités de restitution](glossaire.md#element-graphique)).
1. Vérifier&nbsp;: 
	- que l’alternative restituée par le lecteur d’écran est pertinente&nbsp;; 
	- ou que l’information restituée depuis un autre élément dans l’écran est pertinente.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.1.1.1 Non-text Content*{lang=en}

#### [Critère 1.4](#crit-1-4) [A] Pour chaque [élément graphique](glossaire.md#element-graphique) utilisé comme [CAPTCHA](glossaire.md#captcha) ou comme [élément graphique de test](glossaire.md#element-graphique-de-test), l’alternative restituée par les technologies d’assistance permet-elle d’identifier la nature et la fonction de l’élément graphique&nbsp;? {id="crit-1-4"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Activer le **lecteur d’écran**.
1. Repérer dans l’écran les éléments graphiques utilisés comme CAPTCHA ([voir la note de glossaire concernant les particularités de restitution](glossaire.md#element-graphique)).
1. Vérifier que l’alternative restituée par le lecteur d’écran permet de comprendre la fonction de l’élément graphique (par exemple &laquo;&nbsp;Code secret à saisir&nbsp;&raquo;, &laquo;&nbsp;Code de sécurité&nbsp;&raquo;).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.1.1.1 Non-text Content*{lang=en}

#### [Critère 1.5](#crit-1-5) [A] Chaque [élément graphique](glossaire.md#element-graphique) utilisé comme [CAPTCHA](glossaire.md#captcha) possède-t-il une alternative&nbsp;? {id="crit-1-5"}

**[Test 1.5.1](#test-1-5-1)** Chaque élément graphique utilisé comme CAPTCHA respecte-t-il une de ces conditions&nbsp;? {id="test-1-5-1"}
- Il existe une autre forme de CAPTCHA non graphique, au moins&nbsp;;
- Il existe une autre solution d’accès à la fonctionnalité sécurisée par le CAPTCHA.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les éléments graphiques utilisés comme CAPTCHA ([voir la note de glossaire concernant les particularités de restitution](glossaire.md#element-graphique)).
1. Vérifier&nbsp;:
	- la présence d’une alternative non graphique (CAPTCHA sonore ou logique)&nbsp;;
	- ou la présence d’une autre solution d’accès à la fonctionnalité sécurisée par le CAPTCHA (envoi d’un code sms, envoi d’un email de confirmation, etc.).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.1.1.1 Non-text Content*{lang=en}

#### [Critère 1.6](#crit-1-6) [A] Chaque [élément graphique porteur d’information](glossaire.md#element-graphique-porteur-d-information) a-t-il, si nécessaire, une [description détaillée](glossaire.md#description-detaillee)&nbsp;? {id="crit-1-6"}

**[Test 1.6.1](#test-1-6-1)&nbsp;:** Chaque élément graphique porteur d’information qui nécessite une description détaillée vérifie-t-il une de ces conditions&nbsp;? {id="test-1-6-1"}
- Depuis l’élément graphique, les technologies d’assistance restituent ou donnent accès à une description détaillée&nbsp;;
- Il existe une description détaillée clairement identifiable adjacente à l’élément graphique&nbsp;;
- Il existe une fonctionnalité qui permet d’accéder à une description détaillée.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les éléments graphiques porteurs d’information qui nécessitent une description détaillée ([voir la note de glossaire concernant les particularités de restitution](glossaire.md#element-graphique)). Par exemple&nbsp;:
	- éléments graphiques pour lesquels l’alternative à fournir est trop longue (plus d’une phrase par exemple) ou nécessite une structuration (titres, listes ou tableau)&nbsp;; 
	- éléments graphiques qui cumulent plusieurs problématiques (information par la couleur, élément graphique texte, contrastes, etc.) comme les graphiques ou les cartes.
1. Vérifier&nbsp;: 
	- la présence d’une description détaillée clairement identifiable adjacente à l’élément graphique&nbsp;; 
	- ou la présence d’une fonctionnalité (un bouton, un lien) permettant d’accéder à une description détaillée.
1. Sinon, activer le **lecteur d’écran** et naviguer jusqu’à l’élément graphique. 
1. Vérifier que le lecteur d’écran restitue une description détaillée.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.1.1.1 Non-text Content*{lang=en}

#### [Critère 1.7](#crit-1-7) [A] Pour chaque [élément graphique porteur d’information](glossaire.md#element-graphique-porteur-d-information) ayant une [description détaillée](glossaire.md#description-detaillee), celle-ci est-elle pertinente&nbsp;? {id="crit-1-7"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les éléments graphiques qui possèdent une description détaillée.
1. Vérifier que chaque description détaillée est pertinente. On doit y trouver toutes les informations présentes dans l’élément graphique et nécessaires à la compréhension du contenu. 
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.1.1.1 Non-text Content*{lang=en}

#### [Critère 1.8](#crit-1-8) [AA] Chaque [élément graphique texte](glossaire.md#element-graphique-texte) porteur d’information, en l’absence d’un [mécanisme de remplacement](glossaire.md#mecanisme-de-remplacement), doit, si possible être remplacé par du [texte stylé](glossaire.md#texte-style). Cette règle est-elle respectée (hors cas particuliers)&nbsp;? {id="crit-1-8"}

##### Cas particuliers

Le critère est non applicable pour les éléments suivants&nbsp;:
- Lorsque le texte fait partie d’un logo ou d’un élément associé à l’identité graphique d’un organisme ou d’une société (un slogan, par exemple).
- Lorsque le texte contenu dans l’élément graphique est utilisé comme [CAPTCHA](glossaire.md#captcha) ou comme [élément graphique de test](glossaire.md#element-graphique-de-test).
- Lorsque le texte fait partie d’un élément dont l’exactitude graphique est considérée comme essentielle à la bonne transmission de l’information véhiculée par l’élément graphique. 

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les éléments graphiques texte porteurs d’information ([voir la note de glossaire concernant les particularités de restitution](glossaire.md#element-graphique))&nbsp;: 
	- Activer le **lecteur d’écran**, parcourir le contenu et repérer si les éléments restitués &laquo;&nbsp;élément graphique&nbsp;&raquo; ou &laquo;&nbsp;image&nbsp;&raquo; contiennent du texte porteur d’information.
1. Vérifier&nbsp;: 
	- qu’il existe un mécanisme de remplacement des éléments graphiques texte par du texte modifiable selon les préférences d’affichage de l’utilisateur (taille, couleur, graisse…)&nbsp;;
    - ou que les styles et effets ne peuvent pas être reproduits via du [texte stylé](glossaire.md#texte-style).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.4.5 Images of text (AA)](https://www.w3.org/TR/WCAG21/#images-of-text){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.4.5.1 Images of text*{lang=en}

#### [Critère 1.9](#crit-1-9) [AA] Chaque [élément graphique légendé](glossaire.md#element-graphique-legende) est-il correctement restitué par les technologies d’assistance&nbsp;? {id="crit-1-9"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Activer le **lecteur d’écran**.
1. Naviguer jusqu’aux éléments graphiques légendés.
1. Vérifier que la légende de l’élément graphique est restituée lorsque le focus atteint l’élément graphique (l’élément graphique et la légende sont contenus dans un seul élément atteignable par le lecteur d’écran).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Non-text Content (A)](https://www.w3.org/TR/WCAG21/#non-text-content){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.1.1.1 Non-text Content*{lang=en}

### [Thématique 2](#topic-2)&nbsp;: Couleurs {id="topic-2"}

#### [Critère 2.1](#crit-2-1) [A] Dans chaque écran, l’[information ne doit pas être donnée uniquement par la couleur](glossaire.md#information-donnee-par-la-couleur). Cette règle est-elle respectée&nbsp;? {id="crit-2-1"}

**[Test 2.1.1](#test-2-1-1)&nbsp;:** Dans chaque écran, chaque élément dont la mise en couleur est porteuse d’information respecte-t-il au moins une de ces conditions&nbsp;? {id="test-2-1-1"}
- L’information n’est pas donnée uniquement par la couleur&nbsp;;
- Un [mécanisme de remplacement](glossaire.md#mecanisme-de-remplacement) permet à l’utilisateur d’afficher une alternative à la couleur.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS

1. Activer l’option **Différencier sans couleur** (*Réglages > Accessibilité > Affichage et taille du texte > Différencier sans couleur*).
1. Repérer dans l’écran les mots ou ensemble de mots, les textes, les éléments graphiques porteurs d’information et les médias temporels dont la mise en couleur est porteuse d’information.
1. Vérifier qu’il existe un autre moyen visuel de récupérer cette information&nbsp;: présence d’une icône ou d’un effet graphique de forme ou de position, un effet typographique, etc.
1. Avec le **lecteur d’écran**, accéder à l’information donnée par la couleur.  
1. Vérifier qu’une information équivalente est restituée par le lecteur d’écran (par exemple l’état &laquo;&nbsp;sélectionné&nbsp;&raquo; d’un bouton vert).
1. Si c’est le cas, le critère est validé.

###### Android

1. Repérer dans l’écran les mots ou ensemble de mots, les textes, les éléments graphiques porteurs d’information et les médias temporels dont la mise en couleur est porteuse d’information.
1. Vérifier qu’il existe un autre moyen visuel de récupérer cette information&nbsp;: présence d’une icône ou d’un effet graphique de forme ou de position, un effet typographique, etc.).
1. Avec le **lecteur d’écran**, accéder à l’information donnée par la couleur. 
1. Vérifier qu’une information équivalente est restituée par le lecteur d’écran (par exemple l’état &laquo;&nbsp;sélectionné&nbsp;&raquo; d’un bouton vert).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.1 Info and Relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships), [1.4.1 Use of color (A)](https://www.w3.org/TR/WCAG21/#use-of-color)
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.3.1.1 Info and Relationships*{lang=en}, *11.1.4.1 Use of colour*{lang=en}

#### [Critère 2.2](#crit-2-2) [AA] Dans chaque écran, le [contraste](glossaire.md#contraste) entre la couleur du texte et la couleur de son arrière-plan est-il suffisamment élevé (hors cas particuliers)&nbsp;? {id="crit-2-2"}

**[Test 2.2.1](#test-2-2-1)&nbsp;:** Pour chaque texte, le contraste entre la couleur du texte et la couleur de son arrière-plan respecte-t-il une de ces conditions&nbsp;? {id="test-2-2-1"}
- Le rapport de contraste entre le texte et son arrière-plan est d’au moins 4.5:1 pour le texte en [taille normale](glossaire.md#contraste-taille-des-textes) et d’au moins 3:1 pour le [texte de grande taille](glossaire.md#contraste-taille-des-textes)&nbsp;;
- Un [mécanisme de remplacement](glossaire.md#mecanisme-de-remplacement) permet à l’utilisateur d’afficher le texte en [taille normale](glossaire.md#contraste-taille-des-textes) avec un rapport de contraste de 4.5:1 au moins et le [texte de grande taille](glossaire.md#contraste-taille-des-textes) avec un rapport de contraste de 3:1 au moins.

##### Cas particuliers

Le critère est non applicable pour les éléments suivants&nbsp;:
- Le texte fait partie d’un logo ou d’un nom de marque d’un organisme ou d’une société.
- Le texte ou le texte contenu dans l’élément graphique est purement décoratif.
- Le texte fait partie d’un élément graphique porteur d’information, mais le texte lui-même n’apporte aucune information essentielle.
- Le texte ou le texte contenu dans l’élément graphique fait partie d’un élément d’interface sur lequel aucune action n’est possible (par exemple, un bouton désactivé).

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS

1. Activer l’option **Augmenter le contraste** (*Réglages > Accessibilité > Affichage et taille du texte > Augmenter le contraste*) ou s’il est présent dans l’application, activer le mécanisme de remplacement permettant d’afficher l’application avec un rapport de contraste suffisant.
1. Repérer dans l’écran les textes, les textes contenus dans des éléments graphiques et les textes incrustés dans les vidéos qui pourraient poser des problèmes de contraste.
1. Activer le logiciel **Colour Contrast Analyser**{lang=en} sur l’ordinateur et capturer les couleurs d’avant-plan et d’arrière-plan sur le terminal mobile soit&nbsp;:  
	- En [diffusant l’écran du terminal mobile sur l’ordinateur](methodologie.md#diffuser-l-ecran-du-terminal-mobile)&nbsp;;
	- En réalisant des [captures d’écran](methodologie.md#realiser-des-captures-d-ecran) des éléments à évaluer (et en les important sur l’ordinateur).
1. Vérifier&nbsp;:
	- Pour les textes en taille normale, que la valeur de contraste est de 4.5:1, au moins&nbsp;; 
	- Pour les textes de grande taille, que la valeur de contraste est de 3:1 au moins.
1. Si c’est le cas, le critère est validé.

Note&nbsp;: Il est possible d’utiliser l’application **[Accessibility Inspector](methodologie.md#applications-de-tests)**{lang=en} disponible sur macOS pour réaliser une évaluation rapide des contrastes des écrans. Le logiciel dispose d’une fonctionnalité &laquo;&nbsp;Audit&nbsp;&raquo; qui permet de faire des tests automatiques de certains éléments textes et graphiques des écrans. Cette fonctionnalité ne détecte pas l’ensemble des défauts de contraste, des tests complémentaires suivant la méthodologie décrite ci-avant seront nécessaires.

###### Android

1. S’il existe dans l’application, activer le mécanisme de remplacement permettant d’afficher l’application avec un rapport de contraste suffisant.
1. Repérer dans l’écran les textes, les textes contenus dans des éléments graphiques et les textes incrustés dans les vidéos qui pourraient poser des problèmes de contraste.
1. Activer le logiciel **Colour Contrast Analyser**{lang=en} sur l’ordinateur et capturer les couleurs d’avant-plan et d’arrière-plan sur le terminal mobile soit&nbsp;:  
	- En [diffusant l’écran du terminal mobile sur l’ordinateur](methodologie.md#diffuser-l-ecran-du-terminal-mobile)&nbsp;;
	- En réalisant des [captures d’écran](methodologie.md#realiser-des-captures-d-ecran) des éléments à évaluer (et en les important sur l’ordinateur).
1. Vérifier&nbsp;:
	- Pour les textes en taille normale, que la valeur de contraste est de 4.5:1, au moins&nbsp;; 
	- Pour les textes de grande taille, que la valeur de contraste est de 3:1 au moins.
1. Si c’est le cas, le critère est validé.

Note&nbsp;: Il est possible d’utiliser l’application **[Accessibility Scanner](methodologie.md#applications-de-tests)** pour réaliser une évaluation rapide des contrastes des écrans. L’application ne détecte pas l’ensemble des défauts de contrastes, des tests complémentaires suivant la méthodologie décrite ci-avant seront nécessaires.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.4.3 Contrast (Minimum) (AA)](https://www.w3.org/TR/WCAG21/#contrast-minimum){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.4.3 Contrast (Minimum)*{lang=en}, *11.7 User preferences*{lang=en} 

#### [Critère 2.3](#crit-2-3) [AA] Dans chaque écran, les couleurs utilisées dans les [composants d’interface](glossaire.md#composant-d-interface) et les éléments graphiques porteurs d’informations sont-elles suffisamment contrastées (hors cas particuliers)&nbsp;? {id="crit-2-3"}

- **[Test 2.3.1](#test-2-3-1)&nbsp;:** Dans chaque écran, le rapport de contraste entre les couleurs d’un [composant d’interface](glossaire.md#composant-d-interface) dans ses différents états et les [couleurs adjacentes](glossaire.md#couleur-adjacente) vérifie-t-il une de ces conditions (hors cas particuliers)&nbsp;? {id="test-2-3-1"}
	- Le rapport de contraste est de 3:1, au moins&nbsp;;
	- Un [mécanisme de remplacement](glossaire.md#mecanisme-de-remplacement) permet d’afficher le composant d’interface avec un rapport de contraste de 3:1, au moins.
- **[Test 2.3.2](#test-2-3-2)&nbsp;:** Dans chaque écran, le rapport de contraste de chaque couleur nécessaire à la compréhension d’un élément graphique et les [couleurs adjacentes](glossaire.md#couleur-adjacente), vérifie-t-il une de ces conditions (hors cas particuliers)&nbsp;? {id="test-2-3-2"}
	- Le rapport de contraste est de 3:1, au moins&nbsp;;
	- Un [mécanisme de remplacement](glossaire.md#mecanisme-de-remplacement) permet un rapport de contraste de 3:1, au moins.

##### Cas particuliers

Le critère est non applicable pour les éléments suivants&nbsp;:
- Composant d’interface inactif (par exemple, un bouton désactivé) sur lequel aucune action n’est possible.
- Composant d’interface géré par la plateforme et pour lequel il n’existe pas de méthode simple de développement pour le modifier.
- Composant d’interface dont la couleur n’est pas nécessaire pour identifier le composant ou son état (par exemple, le soulignement des liens qui aurait un rapport de contraste inférieur à 3:1 mais dont le texte a un rapport de contraste de 4.5:1).
- [Élément graphique](glossaire.md#element-graphique) ou parties d’élément graphique non porteur d’information ou ayant une alternative, une description détaillée, une information identique visible dans l’écran).
- [Élément graphique](glossaire.md#element-graphique) ou parties d’élément graphique faisant partie d’un logo ou du nom de marque d’un organisme ou d’une société.
- [Élément graphique](glossaire.md#element-graphique) ou parties d’élément graphique dont la présentation est essentielle à l’information véhiculée (par exemple, drapeaux, logotypes, photos de personnes ou de scènes, captures d’écran, diagrammes médicaux, carte de chaleurs).
- [Élément graphique](glossaire.md#element-graphique) ou parties d’élément graphique dynamique dont le contraste peut varier si d’autres éléments sont survolés (ou reçoivent le focus), mais dont le survol ou focus permet de le rendre suffisamment contrasté (par exemple, un diagramme en camembert composé de plusieurs sections suffisamment contrastées, mais lorsque la souris survole une section du camembert, les autres sections ne sont plus suffisamment contrastées, leur opacité est réduite pour mettre en avant la section survolée).

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS

1. Activer l’option **Augmenter le contraste** (*Réglages > Accessibilité > Affichage et taille du texte > Augmenter le contraste*) ou s’il est présent dans l’application, activer le mécanisme de remplacement permettant d’afficher les éléments graphiques avec un rapport de contraste suffisant.
1. Repérer dans l’écran les éléments graphiques porteurs d’information et pour chacun&nbsp;: 
	- Identifier quelle(s) couleur(s) du composant sont nécessaires à l’identification de la localisation et/ou de l’information véhiculée (cela peut être la bordure, la couleur d’une icône, la couleur de fond)&nbsp;;
	- Identifier les couleurs adjacentes qui ont un impact sur la visibilité de la ou les couleurs du composant.
1. Repérer dans l’écran les composants interactifs qui peuvent avoir plusieurs états (survolés, focus, activé, coché) et pour chacun&nbsp;:
	- Identifier quelle(s) couleur(s) du composant sont nécessaires à l’identification de la localisation et/ou de l’information véhiculée et de l’état (cela peut être la bordure, la couleur d’une icône, la couleur de fond) pour chacun des états&nbsp;;
	- Identifier les couleurs adjacentes qui ont un impact sur la visibilité de la ou les couleurs du composant.
1. Activer le logiciel **Colour Contrast Analyser**{lang=en} sur l’ordinateur et capturer les couleurs d’avant-plan et d’arrière-plan sur le terminal mobile soit&nbsp;:  
	- En [diffusant l’écran du terminal mobile sur l’ordinateur](methodologie.md#diffuser-l-ecran-du-terminal-mobile)&nbsp;;
	- En réalisant des [captures d’écran](methodologie.md#realiser-des-captures-d-ecran) des éléments à évaluer (et en les important sur l’ordinateur).
1. Vérifier que le rapport de contraste entre les couleurs identifiées est de 3:1 au moins.
1. Si c’est le cas, le critère est validé.

Note&nbsp;: Il est possible d’utiliser l’application **[Accessibility Inspector](methodologie.md#applications-de-tests)**{lang=en} disponible sur macOS pour réaliser une évaluation rapide des contrastes des écrans. Le logiciel dispose d’une fonctionnalité &laquo;&nbsp;Audit&nbsp;&raquo; qui permet de faire des tests automatiques de certains éléments textes et graphiques des écrans. Cette fonctionnalité ne détecte pas l’ensemble des défauts de contraste, des tests complémentaires suivant la méthodologie décrite ci-avant seront nécessaires.

###### Android

1. S’il existe dans l’application, activer le mécanisme de remplacement de l’application permettant d’afficher les éléments graphiques avec un rapport de contraste suffisant.
1. Repérer dans l’écran les éléments graphiques porteurs d’information et pour chacun&nbsp;: 
	- Identifier quelle(s) couleur(s) du composant sont nécessaires à l’identification de la localisation et/ou de l’information véhiculée (cela peut être la bordure, la couleur d’une icône, la couleur de fond)&nbsp;;
	- Identifier les couleurs adjacentes qui ont un impact sur la visibilité de la ou les couleurs du composant.
1. Repérer dans l’écran les composants interactifs qui peuvent avoir plusieurs états (survolés, focus, activé, coché) et pour chacun&nbsp;:
	- Identifier quelle(s) couleur(s) du composant sont nécessaires à l’identification de la localisation et/ou de l’information véhiculée et de l’état (cela peut être la bordure, la couleur d’une icône, la couleur de fond) pour chacun des états&nbsp;;
	- Identifier les couleurs adjacentes qui ont un impact sur la visibilité de la ou les couleurs du composant.
1. Activer le logiciel **Colour Contrast Analyser**{lang=en} sur l’ordinateur et capturer les couleurs d’avant-plan et d’arrière-plan sur le terminal mobile soit&nbsp;:  
	- En [diffusant l’écran du terminal mobile sur l’ordinateur](methodologie.md#diffuser-l-ecran-du-terminal-mobile)&nbsp;;
	- En réalisant des [captures d’écran](methodologie.md#realiser-des-captures-d-ecran) des éléments à évaluer (et en les important sur l’ordinateur).
1. Vérifier que le rapport de contraste entre les couleurs identifiées est de 3:1 au moins.
1. Si c’est le cas, le critère est validé.

Note&nbsp;: Il est possible d’utiliser l’application **[Accessibility Scanner](methodologie.md#applications-de-tests)** pour réaliser une évaluation rapide des contrastes des écrans. L’application ne détecte pas l’ensemble des défauts de contrastes, des tests complémentaires suivant la méthodologie décrite ci-avant seront nécessaires.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.4.11 Non-text Contrast (AA)](https://www.w3.org/TR/WCAG21/#non-text-contrast){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.4.11 Non-text Contrast*{lang=en}, *11.7 User preference*{lang=en}

#### [Critère 2.4](#crit-2-4) [AA] Le rapport de contraste de chaque [mécanisme de remplacement qui permet d’afficher l’écran avec un rapport de contraste conforme](glossaire.md#mecanisme-de-l-application-qui-permet-d-afficher-un-rapport-de-contraste-conforme) est-il suffisamment élevé&nbsp;? {id="crit-2-4"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS

1. Vérifier que l’option **Augmenter le contraste** (*Réglages > Accessibilité > Affichage et taille du texte > Augmenter le contraste*) est désactivée.
1. Repérer la présence d’un mécanisme de remplacement permettant d’afficher l’application avec un rapport de contraste suffisant.
1. Vérifier qu’il n’est pas activé (c’est-à-dire que l’écran est diffusé avec les contrastes par défaut).
1. Activer le logiciel **Colour Contrast Analyser**{lang=en} sur l’ordinateur et capturer les couleurs d’avant-plan et d’arrière-plan sur le terminal mobile soit&nbsp;:  
	- En [diffusant l’écran du terminal mobile sur l’ordinateur](methodologie.md#diffuser-l-ecran-du-terminal-mobile)&nbsp;;
	- En réalisant des [captures d’écran](methodologie.md#realiser-des-captures-d-ecran) des éléments à évaluer (et en les important sur l’ordinateur).
1. Si le mécanisme de remplacement est identifié par un texte, capturer les couleurs d’avant-plan et d’arrière-plan et vérifier&nbsp;: 
	- Pour les textes en taille normale, que la valeur de contraste est de 4.5:1, au moins&nbsp;; 
	- Pour les textes en taille agrandie, que la valeur de contraste est de 3:1 au moins.
1. Si le mécanisme de remplacement est identifié par un élément non textuel uniquement (une icône par exemple)&nbsp;:
	1. Identifier quelle(s) couleur(s) du composant sont nécessaires à l’identification de la localisation et/ou de l’information (cela peut être la bordure, la couleur d’une icône, la couleur de fond)&nbsp;;
	1. Identifier les couleurs adjacentes qui ont un impact sur la visibilité de la couleur&nbsp;;
	1. Vérifier que le rapport de contraste entre les couleurs identifiées est de 3:1 au moins.
1. Si c’est le cas, le critère est validé.

###### Android

1. Repérer la présence d’un mécanisme de remplacement permettant d’afficher l’application avec un rapport de contraste suffisant.
1. Vérifier qu’il n’est pas activé (c’est-à-dire que l’écran est diffusé avec les contrastes par défaut).
1. Activer le logiciel **Colour Contrast Analyser**{lang=en} sur l’ordinateur et capturer les couleurs d’avant-plan et d’arrière-plan sur le terminal mobile soit&nbsp;:  
	- En [diffusant l’écran du terminal mobile sur l’ordinateur](methodologie.md#diffuser-l-ecran-du-terminal-mobile)&nbsp;;
	- En réalisant des [captures d’écran](methodologie.md#realiser-des-captures-d-ecran) des éléments à évaluer (et en les important sur l’ordinateur).
1. Si le mécanisme de remplacement est identifié par un texte, capturer les couleurs d’avant-plan et d’arrière-plan et vérifier&nbsp;: 
	- Pour les textes en taille normale, que la valeur de contraste est de 4.5:1, au moins&nbsp;; 
	- Pour les textes en taille agrandie, que la valeur de contraste est de 3:1 au moins.
1. Si le mécanisme de remplacement est identifié par un élément non textuel uniquement (une icône par exemple)&nbsp;:
	1. Identifier quelle(s) couleur(s) du composant sont nécessaires à l’identification de la localisation et/ou de l’information (cela peut être la bordure, la couleur d’une icône, la couleur de fond)&nbsp;;
	1. Identifier les couleurs adjacentes qui ont un impact sur la visibilité de la couleur&nbsp;;
	1. Vérifier que le rapport de contraste entre les couleurs identifiées est de 3:1 au moins.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.4.3 Contrast (Minimum) (AA)](https://www.w3.org/TR/WCAG21/#contrast-minimum){lang=en}, [1.4.11 Non-text Contrast (AA)](https://www.w3.org/TR/WCAG21/#non-text-contrast){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *5.2 Activation of accessibility features*{lang=en}, *11.1.4.3 Contrast (Minimum)*{lang=en}, *11.1.4.11 Non-text Contrast*{lang=en}

### [Thématique 3](#topic-3)&nbsp;: Multimédia {id="topic-3"}

#### [Critère 3.1](#crit-3-1) [A] Chaque [média temporel](glossaire.md#media-temporel-type-son-video-et-synchronise) pré-enregistré seulement audio a-t-il, si nécessaire, une [transcription textuelle](glossaire.md#transcription-textuelle-media-temporel) [adjacente clairement identifiable](glossaire.md#adjacente-clairement-identifiable) (hors cas particuliers)&nbsp;? {id="crit-3-1"}

##### Cas particuliers

Le critère est non applicable pour les éléments suivants&nbsp;:
- Le média temporel est utilisé à des fins décoratives (c’est-à-dire qu’il n’apporte aucune information).
- Le média temporel est lui-même une alternative à un contenu de l’écran (une vidéo en langue des signes ou la vocalisation d’un texte, par exemple).
- Le média temporel est utilisé pour accéder à une version agrandie.
- Le média temporel est utilisé comme un CAPTCHA.
- Le média temporel fait partie d’un test qui deviendrait inutile si la transcription textuelle, les sous-titres synchronisés ou l’audiodescription étaient communiqués.
- Le média temporel a été publié avant le 23 septembre 2020 (d’après la [loi du 28 mai 2019](http://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo)).

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les médias temporels seulement audio qui nécessitent une transcription textuelle.
1. Vérifier&nbsp;:
	- La présence d’une transcription textuelle accessible via un composant adjacent (un bouton ou un lien)&nbsp;;
	- Ou la présence d’une transcription textuelle adjacente clairement identifiable.
1. Si c’est le cas, le critère est validé. 

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.2.1 Audio-only and Video-only (Prerecorded) (A)](https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded){lang=en}, [1.2.3 Audio Description or Media Alternative (Prerecorded) (A)](https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded){lang=en}. 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.2.1.1 Audio-only and Video-only (Pre-recorded)*{lang=en}, *11.1.2.3.1 Audio Description or Media Alternative (Pre-recorded)*{lang=en}

#### [Critère 3.2](#crit-3-2) [A] Pour chaque [média temporel](glossaire.md#media-temporel-type-son-video-et-synchronise) pré-enregistré seulement audio ayant une [transcription textuelle](glossaire.md#transcription-textuelle-media-temporel), celle-ci est-elle pertinente (hors cas particuliers)&nbsp;? {id="crit-3-2"}

##### Cas particuliers

[Voir les cas particuliers du critère 3.1](#crit-3-1) 

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les transcriptions textuelles des médias temporels seulement audio.
1. Vérifier que chaque transcription textuelle est pertinente (toutes les informations sonores ou visuelles importantes sont présentes, les dialogues et les textes incrustés notamment).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.2.1 Audio-only and Video-only (Prerecorded) (A)](https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.2.1.1 Audio-only and Video-only (Pre-recorded)*{lang=en}

#### [Critère 3.3](#crit-3-3) [A] Chaque [média temporel](glossaire.md#media-temporel-type-son-video-et-synchronise) pré-enregistré seulement vidéo a-t-il, si nécessaire, une alternative (hors cas particuliers)&nbsp;? {id="crit-3-3"}

**[Test 3.3.1](#test-3-3-1)&nbsp;:** Chaque média temporel pré-enregistré seulement vidéo vérifie-t-il, si nécessaire, l’une de ces conditions (hors cas particuliers)&nbsp;? {id="test-3-3-1"}
- Il existe une [version alternative « audio seulement »](glossaire.md#version-alternative-audio-seulement) [adjacente clairement identifiable](glossaire.md#adjacente-clairement-identifiable)&nbsp;;
- Il existe une [transcription textuelle](glossaire.md#transcription-textuelle-media-temporel) accessible [adjacente clairement identifiable](glossaire.md#adjacente-clairement-identifiable)&nbsp;;
- Il existe une [audiodescription synchronisée](glossaire.md#audiodescription-synchronisee-media-temporel)&nbsp;;
- Il existe une version alternative avec une [audiodescription synchronisée](glossaire.md#audiodescription-synchronisee-media-temporel) accessible via un composant adjacent (un bouton ou un lien).
	
##### Cas particuliers

[Voir les cas particuliers du critère 3.1](#crit-3-1) 

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les médias temporels seulement vidéo qui nécessitent une transcription textuelle.
1. Vérifier&nbsp;:
	- la présence d’une version alternative audio seulement accessible via un composant adjacent (un bouton ou un lien)&nbsp;;
	- ou la présence d’une version alternative audio seulement adjacente&nbsp;;
	- ou la présence d’une transcription textuelle adjacente (un bouton ou un lien)&nbsp;;
	- ou la présence d’une transcription textuelle adjacente clairement identifiable&nbsp;;
	- ou la présence d’une audiodescription synchronisée&nbsp;;
	- ou la présence d’une version alternative avec une audiodescription synchronisée accessible via un composant adjacent (un bouton ou un lien).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.2.1 Audio-only and Video-only (Prerecorded) (A)](https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded){lang=en}, [1.2.3 Audio Description or Media Alternative (Prerecorded) (A)](https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded){lang=en}. 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.2.1.1 Audio-only and Video-only (Pre-recorded)*{lang=en}, *11.1.2.3.1 Audio Description or Media Alternative (Pre-recorded)*{lang=en}

#### [Critère 3.4](#crit-3-4) [A] Pour chaque [média temporel](glossaire.md#media-temporel-type-son-video-et-synchronise) pré-enregistré seulement vidéo ayant une alternative, celle-ci est-elle pertinente (hors cas particuliers)&nbsp;? {id="crit-3-4"}

**[Test 3.4.1](#test-3-4-1)&nbsp;:** Chaque média temporel pré-enregistré seulement vidéo respecte-t-il une de ces conditions&nbsp;? {id="test-3-4-1"}
- La [transcription textuelle](glossaire.md#transcription-textuelle-media-temporel) est pertinente&nbsp;;
- L’[audiodescription synchronisée](glossaire.md#audiodescription-synchronisee-media-temporel) est pertinente et correctement synchronisée&nbsp;;
- La [version alternative « audio seulement »](glossaire.md#version-alternative-audio-seulement) est pertinente.

##### Cas particuliers

[Voir les cas particuliers du critère 3.1](#crit-3-1) 

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les médias temporels seulement vidéo avec une alternative (transcription textuelle ou une version audio seulement).
1. Si la transcription textuelle est présente, vérifier&nbsp;: 
	- que celle-ci est pertinente (toutes les informations sonores ou visuelles importantes sont présentes, les dialogues et les textes incrustés notamment).
1. Si une audiodescription est présente, vérifier&nbsp;: 
	- que celle-ci est pertinente (toutes les informations visuelles importantes sont présentes)&nbsp;;
	- et que celle-ci est correctement synchronisée (la bande-son de l’audiodescription coïncide correctement avec la bande vidéo).
1. Si une version « audio seulement » est présente, vérifier&nbsp;: 
	- que celle-ci est pertinente (toutes les informations sonores ou visuelles importantes sont présentes, les dialogues et les textes incrustés notamment).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.2.1 Audio-only and Video-only (Prerecorded) (A)](https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded){lang=en}, [1.2.3 Audio Description or Media Alternative (Prerecorded) (A)](https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded){lang=en}. 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.2.1.1 Audio-only and Video-only (Pre-recorded)*{lang=en}, *11.1.2.3.1 Audio Description or Media Alternative (Pre-recorded)*{lang=en}

#### [Critère 3.5](#crit-3-5) [A] Chaque [média temporel](glossaire.md#media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré a-t-il, si nécessaire, une alternative (hors cas particuliers)&nbsp;? {id="crit-3-5}

**[Test 3.5.1](#test-3-5-1)&nbsp;:** Chaque média temporel synchronisé pré-enregistré vérifie-t-il, si nécessaire, l’une de ces conditions (hors cas particuliers)&nbsp;? {id="test-3-5-1"}
- Il existe une [transcription textuelle](glossaire.md#transcription-textuelle-media-temporel) accessible [adjacente clairement identifiable](glossaire.md#adjacente-clairement-identifiable)&nbsp;;
- Il existe une [audiodescription synchronisée](glossaire.md#audiodescription-synchronisee-media-temporel)&nbsp;;
- Il existe une version alternative avec une [audiodescription synchronisée](glossaire.md#audiodescription-synchronisee-media-temporel) accessible via un composant adjacent (un bouton ou un lien).
	
##### Cas particuliers

[Voir les cas particuliers du critère 3.1](#crit-3-1)  

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les médias temporels synchronisés qui nécessitent une transcription textuelle.
1. Vérifier&nbsp;:
	- la présence d’une transcription textuelle adjacente clairement identifiable&nbsp;;
	- ou la présence d’une transcription textuelle accessible via un composant adjacent (un bouton ou un lien)&nbsp;;
	- ou la présence d’une audiodescription synchronisée&nbsp;;
	- ou la présence d’une version alternative avec une audiodescription synchronisée accessible via un composant adjacent (un bouton ou un lien).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.2.3 Audio Description or Media Alternative (Prerecorded) (A)](https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded){lang=en}. 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.2.3.1 Audio Description or Media Alternative (Pre-recorded)*{lang=en}.

#### [Critère 3.6](#crit-3-6) [A] Pour chaque [média temporel](glossaire.md#media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré ayant une alternative, celle-ci est-elle pertinente (hors cas particuliers)&nbsp;? {id="crit-3-6"}

**[Test 3.6.1](#test-3-6-1)&nbsp;:** Chaque média temporel pré-enregistré synchronisé respecte-t-il une de ces conditions&nbsp;? {id="test-3-6-1"}
- L’audiodescription est pertinente et correctement synchronisée&nbsp;;
- La transcription textuelle est pertinente.

##### Cas particuliers

[Voir les cas particuliers du critère 3.1](#crit-3-1) 

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les médias temporels synchronisés avec une audiodescription ou une transcription textuelle.
1. Si une audiodescription est présente, vérifier&nbsp;: 
	- que celle-ci est pertinente (toutes les informations visuelles importantes sont présentes)&nbsp;;
	- et que celle-ci est correctement synchronisée (la bande-son de l’audiodescription coïncide correctement avec la bande vidéo).
1. Si une transcription textuelle est présente, vérifier&nbsp;:
	-  que celle-ci est pertinente (toutes les informations sonores ou visuelles importantes sont présentes, les dialogues et les textes incrustés notamment).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.2.3 Audio Description or Media Alternative (Prerecorded) (A)](https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded){lang=en}. 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *7.2.2 Audio description synchronization*{lang=en}, *11.1.2.3.1 Audio Description or Media Alternative (Pre-recorded)*{lang=en}

#### [Critère 3.7](#crit-3-7) [A] Chaque [média temporel](glossaire.md#media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré a-t-il, si nécessaire, des [sous-titres synchronisés](glossaire.md#sous-titres-synchronises-objet-multimedia) (hors cas particuliers)&nbsp;? {id="crit-3-7}

##### Cas particuliers

[Voir les cas particuliers du critère 3.1](#crit-3-1) 

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les médias temporels synchronisés qui nécessitent des sous-titres (c’est-à-dire dont la bande son apporte de l’information, comme le discours d’une personne).
1. Vérifier&nbsp;:
	- qu’il existe des sous-titres synchronisés&nbsp;;
	- ou qu’il existe une version alternative possédant des sous-titres synchronisés accessible via un composant adjacent (un bouton ou un lien).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.2.2 Captions (Prerecorded) (A)](https://www.w3.org/TR/WCAG21/#captions-prerecorded){lang=en} 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.2.2 Captions (Prerecorded)*{lang=en}

#### [Critère 3.8](#crit-3-8) [A] Pour chaque [média temporel](glossaire.md#media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré ayant des [sous-titres synchronisés](glossaire.md#sous-titres-synchronises-objet-multimedia), ceux-ci sont-ils pertinents&nbsp;? {id="crit-3-8}

**[Test 3.8.1](#test-3-8-1)&nbsp;:** Pour chaque média temporel synchronisé pré-enregistré ayant des sous-titres synchronisés, les sous-titres respectent-ils ces conditions&nbsp;? {id="test-3-8-1"}
- Les sous-titres sont pertinents&nbsp;;
- Les sous-titres sont correctement synchronisés.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les médias temporels synchronisés possédant des sous-titres.
1. Vérifier que les sous-titres sont&nbsp;:
	- pertinents (toutes les informations sonores importantes sont présentes, les dialogues notamment)&nbsp;;
	- et correctement synchronisés. Si vous n’observez pas de décalage entre le discours oralisé et l’apparition des sous-titres, les sous-titres sont correctement synchronisés. La norme de référence spécifie que les sous-titres doivent apparaître dans les 100 ms suivant l’[horodatage du sous-titre](glossaire.md#horodatage-time-stamp).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.2.2 Captions (Prerecorded) (A)](https://www.w3.org/TR/WCAG21/#captions-prerecorded){lang=en} 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *7.1.2 Captioning synchronization*{lang=en}, *11.1.2.2 Captions (Prerecorded)*{lang=en}

#### [Critère 3.9](#crit-3-9) [AA] Chaque [média temporel](glossaire.md#media-temporel-type-son-video-et-synchronise) pré-enregistré (seulement vidéo ou synchronisé) a-t-il, si nécessaire, une [audiodescription synchronisée](glossaire.md#audiodescription-synchronisee-media-temporel) (hors cas particuliers)&nbsp;? {id="crit-3-9"}

##### Cas particuliers

[Voir les cas particuliers du critère 3.1](#crit-3-1) 

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les médias temporels pré-enregistrés seulement vidéo et synchronisés qui nécessitent une audiodescription.
1. Vérifier&nbsp;:
	- la présence d’une audiodescription synchronisée&nbsp;;
	- ou la présence d’une version alternative avec une audiodescription synchronisée adjacente ou accessible via un composant adjacent (un bouton ou un lien).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.2.5 Audio Description (Prerecorded) (AA)](https://www.w3.org/TR/WCAG21/#audio-description-prerecorded){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.2.5 Audio Description (Pre-recorded)*{lang=en}

#### [Critère 3.10](#crit-3-10) [AA] Pour chaque [média temporel](glossaire.md#media-temporel-type-son-video-et-synchronise) pré-enregistré (seulement vidéo ou synchronisé) ayant une [audiodescription synchronisée](glossaire.md#audiodescription-synchronisee-media-temporel), celle-ci est-elle pertinente&nbsp;? {id="crit-3-10"}

**[Test 3.10.1](#test-3-10-1)&nbsp;:** Pour chaque média temporel pré-enregistré seulement vidéo ou synchronisé ayant une audiodescription, celle-ci respecte-t-elle ces conditions&nbsp;? {id="test-3-10-1"}
- L’audiodescription est pertinente&nbsp;;
- L’audiodescription est correctement synchronisée (la bande-son de l’audiodescription coïncide correctement avec la bande vidéo).

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les médias temporels seulement vidéo ou synchronisé avec une audiodescription.
1. Vérifier que l’audiodescription est&nbsp;:
	- pertinente (toutes les informations visuelles importantes sont présentes)&nbsp;;
	- correctement synchronisée&nbsp;: 
		- les sons et paroles de l’audiodescription ne chevauchent pas ceux de la bande-son originale pour provoquer des problèmes de perception et de compréhension&nbsp;; 
		- les informations véhiculées dans l’audiodescription sont données au moment où apparaissent les informations visuelles équivalentes.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.2.5 Audio Description (Prerecorded) (AA)](https://www.w3.org/TR/WCAG21/#audio-description-prerecorded){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *7.2.2 Audio description synchronization*{lang=en}, *11.1.2.5 Audio Description (Pre-recorded)*{lang=en}

#### [Critère 3.11](#crit-3-11) [A] Pour chaque [média temporel](glossaire.md#media-temporel-type-son-video-et-synchronise) pré-enregistré, le contenu textuel adjacent permet-il d’identifier clairement le média temporel (hors cas particuliers)&nbsp;?  {id="crit-3-11"}

##### Cas particuliers

Le critère est non applicable lorsque le média temporel est utilisé à des fins décoratives (c’est-à-dire qu’il n’apporte aucune information).

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les médias temporels seulement vidéo, audio ou synchronisés pré-enregistrés.
1. Vérifier&nbsp;:
	- qu’un passage de texte (un titre ou un paragraphe par exemple), permettant d’identifier le média temporel, le précède ou le suit immédiatement&nbsp;;
	- que le passage de texte est situé à l’extérieur du lecteur de contenu multimédia.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Non-text Content (A)](https://www.w3.org/TR/WCAG21/#non-text-content){lang=en} 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.1.1.1 Non-text Content*{lang=en}

#### [Critère 3.12](#crit-3-12) [A] Chaque séquence sonore déclenchée automatiquement est-elle [contrôlable](glossaire.md#controle-son-declenche-automatiquement) par l’utilisateur&nbsp;? {id="crit-3-12"}

**[Test 3.12.1](#test-3-12-1)&nbsp;:** Chaque séquence sonore déclenchée automatiquement vérifie-t-elle une de ces conditions&nbsp;? {id="test-3-12-1"}
- La séquence sonore a une durée inférieure ou égale à 3 secondes&nbsp;;
- La séquence sonore peut être stoppée sur action de l’utilisateur&nbsp;;
- Le volume de la séquence sonore peut être contrôlé par l’utilisateur indépendamment du contrôle de volume du système.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Au chargement de l’écran, si un son se déclenche automatiquement, vérifier&nbsp;:
	- que la séquence sonore a une durée inférieure ou égale à 3 secondes&nbsp;;
	- ou qu’un dispositif (un bouton par exemple), sur l’élément ayant déclenché le son, ou dans l’écran, permet de le stopper&nbsp;;
	- ou que le volume de la séquence peut être contrôlé par l’utilisateur, indépendamment du contrôle de volume du système.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.4.2 Audio Control (A)](https://www.w3.org/TR/WCAG21/#audio-control){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.4.2 Audio Control*{lang=en}

#### [Critère 3.13](#crit-3-13) [A] Chaque [média temporel](glossaire.md#media-temporel-type-son-video-et-synchronise) a-t-il, si nécessaire, les [fonctionnalités de contrôle de sa consultation](glossaire.md#controle-de-la-consultation-d-un-media-temporel)&nbsp;?  {id="crit-3-13"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les médias temporels pré-enregistrés.
1. Vérifier que les fonctionnalités suivantes au moins sont présentes&nbsp;: 
	- une fonctionnalité de lecture&nbsp;;
	- une fonctionnalité de mise en pause ou d’arrêt&nbsp;; 
	- si le média possède une piste sonore, une fonctionnalité qui permet d’activer et désactiver le son&nbsp;;
1. Si le média possède une audiodescription, vérifier qu’il existe une fonctionnalité qui permet d’activer et désactiver l’audiodescription.
1. Si le média possède des sous-titres synchronisés&nbsp;: 
	- s’il s’agit de sous-titres incrustés (*open captions*{lang=en}) en tant qu’image, vérifier qu’ils sont affichés au lancement de la lecture de la vidéo&nbsp;;
	- s’il s’agit de sous-titres non incrustés (*closed captions*{lang=en}) , vérifier qu’il existe une fonctionnalité qui permet d’activer et désactiver ces sous-titres.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.1.1 Keyboard (A)](https://www.w3.org/TR/WCAG21/#keyboard){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *7.1.1 Captioning playback*{lang=en}, *7.2.1 Audio description playback*{lang=en}, *11.2.1.1.1 Keyboard*{lang=en}

#### [Critère 3.14](#crit-3-14) [AA] Pour chaque [média temporel](glossaire.md#media-temporel-type-son-video-et-synchronise), les fonctionnalités de contrôle des alternatives sont-elles présentées au même niveau que les autres fonctionnalités de [contrôle primaires](glossaire.md#controle-primaire-d-un-media-temporel)&nbsp;? {id="crit-3-14"}

**[Test 3.14.1](#test-3-14-1)&nbsp;:** Pour chaque média temporel, les fonctionnalités de contrôle des alternatives respectent-elles ces conditions&nbsp;? {id="test-3-14-1"}
- Pour chaque média temporel, la fonctionnalité qui permet d’activer et désactiver les sous-titres est présentée au même niveau que les autres fonctionnalités de contrôle primaires&nbsp;;
- Pour chaque média temporel, la fonctionnalité qui permet d’activer et désactiver l’audiodescription est présentée au même niveau que les autres fonctionnalités de contrôle primaires.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les médias temporels pré-enregistrés ayant une alternative (sous-titres synchronisés ou audiodescription).
1. Si des sous-titres sont présents, vérifier que la fonctionnalité qui permet d’activer et désactiver les sous-titres est présentée au même niveau que les autres fonctionnalités (comme la fonctionnalité de lecture par exemple), c’est-à-dire qu’il n’est pas nécessaire de réaliser plus d’actions pour déclencher les sous-titres que pour déclencher les autres fonctionnalités. Par exemple, si le bouton de lecture peut être activé depuis l’interface par un simple geste de tap (sans la nécessité d’activer un premier composant), la fonction de sous-titres doit être disponible de manière équivalente, avec un simple geste de tap. Si la fonction des sous-titres est disponible depuis un menu déroulant qui doit être activé (par un geste de tap par exemple), elle ne sera pas considérée comme étant au même niveau puisqu’il y aura une étape supplémentaire à réaliser.
1. Si une audiodescription est présente, vérifier que la fonctionnalité qui permet d’activer et désactiver l’audiodescription est présentée au même niveau que les autres fonctionnalités.
1. Si c’est le cas, le critère est validé.

Note&nbsp;: Bien que les contrôles de volume et de lecture puissent être des composants physiques des terminaux (boutons de volume d’un smartphone par exemple), il n’est pas requis que ces terminaux possèdent des contrôles physiques dédiés à l’activation des sous-titres et de l’audiodescription ou que ces contrôles, s’ils existent, soient situés au même niveau.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *7.3 User controls for captions and audio description*{lang=en}

#### [Critère 3.15](#crit-3-15) [AA] Pour chaque fonctionnalité qui transmet, convertit ou enregistre un [média temporel](glossaire.md#media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré qui possède une piste de sous-titres, à l’issue du processus, les sous-titres sont-ils correctement conservés&nbsp;? {id="crit-3-15"}

**[Test 3.15.1](#test-3-15-1)&nbsp;:** Pour chaque fonctionnalité qui transmet, convertit ou enregistre une vidéo qui possède une piste de sous-titres, à l’issue du processus, les sous-titres respectent-ils ces conditions&nbsp;? {id="test-3-15-1"}
- Les sous-titres sont présents&nbsp;;
- Les sous-titres peuvent être affichés&nbsp;;
- Les sous-titres sont correctement synchronisés&nbsp;;
- Les [caractéristiques essentielles des sous-titres](glossaire.md#caracteristiques-essentielles-des-sous-titres) sont conservées.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer les fonctionnalités qui permettent de transmettre (envoyer un contenu vers un autre terminal par exemple), convertir ou enregistrer un média temporel.
1. Exécuter chacune des fonctionnalités (transmettre, convertir et enregistrer).
1. Pour chacun des médias résultant de la fonctionnalité, évaluer&nbsp;:
	- si les sous-titres sont toujours présents&nbsp;; 
	- si les sous-titres peuvent être affichés&nbsp;;
	- si les sous-titres sont correctement synchronisés&nbsp;;
	- si les caractéristiques essentielles des sous-titres sont conservées (par exemple, si dans le média original les sous-titres étaient colorés en fonction du locuteur, cette coloration doit se retrouver dans le média qui résulte de la fonctionnalité).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *5.4 Preservation of accessibility information during conversion*{lang=en}, *7.1.3 Preservation of captioning*{lang=en}

#### [Critère 3.16](#crit-3-16) [AA] Pour chaque fonctionnalité qui transmet, convertit ou enregistre un [média temporel](glossaire.md#media-temporel-type-son-video-et-synchronise) pré-enregistré avec une [audiodescription synchronisée](glossaire.md#audiodescription-synchronisee-media-temporel), à l’issue du processus, l’audiodescription est-elle correctement conservée&nbsp;? {id="crit-3-16"}

**[Test 3.16.1](#test-3-16-1)&nbsp;:** Pour chaque fonctionnalité qui transmet, convertit ou enregistre un média temporel pré-enregistré avec une audiodescription synchronisée, à l’issue du processus l’audiodescription respecte-t-elle ces conditions&nbsp;? {id="test-3-16-1"}
- L’audiodescription est présente&nbsp;;
- L’audiodescription peut être activée&nbsp;;
- L’audiodescription est correctement synchronisée.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer les fonctionnalités qui permettent de transmettre (envoyer un contenu vers un autre terminal par exemple), convertir ou enregistrer un média temporel.
1. Exécuter chacune des fonctionnalités (transmettre, convertir et enregistrer).
1. Pour chacun des médias résultant de la fonctionnalité, évaluer&nbsp;:
	- si l’audiodescription est présente&nbsp;; 
	- si l’audiodescription peut être activée&nbsp;;
	- si l’audiodescription est correctement synchronisée&nbsp;: 
	    - les sons et paroles de l’audiodescription ne chevauchent pas ceux de la bande-son originale pour provoquer des problèmes de perception et de compréhension&nbsp;;
	    - les informations véhiculées dans l’audiodescription sont données au moment où apparaissent les informations visuelles équivalentes.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *5.4 Preservation of accessibility information during conversion*{lang=en}, *7.2.3 Preservation of audio description*{lang=en}

#### [Critère 3.17](#crit-3-17) [AA] Pour chaque [média temporel](glossaire.md#media-temporel-type-son-video-et-synchronise) pré-enregistré, la présentation des sous-titres est-elle contrôlable par l’utilisateur (hors cas particuliers)&nbsp;? {id="crit-3-17"}

##### Cas particuliers

Le critère est non applicable pour les sous-titres incrustés (*open captions*{lang=en}).

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS

1. Repérer dans l’écran les médias temporels pré-enregistrés qui possèdent des sous-titres.
1. Modifier les paramètres de présentation des sous-titres depuis la plateforme&nbsp;: 
	- Aller dans *Réglages > Accessibilité > Sous-titres codés et SM > Style*&nbsp;;
	- Sélectionner **Créer un style** pour définir un style de sous-titres personnalisé et reconnaissable. 
	- Définir un ou plusieurs paramètres parmi&nbsp;: la taille des sous-titres, la couleur, le style de bordure des sous-titres, la couleur d’arrière-plan ou encore l’opacité de l’arrière-plan (vérifier que le paramètre **Ignorer les réglages personnalisés** en bas d’écran est désactivé).
1. Vérifier que les paramètres définis au niveau de la plateforme sont appliqués aux sous-titres.
1. Si ce n’est pas le cas, vérifier dans le média la présence d’une fonctionnalité permettant de modifier les paramètres de présentation des sous-titres.
1. Vérifier que les paramètres définis ci-avant sont appliqués aux sous-titres.
1. Si c’est le cas, le critère est validé.

###### Android

1. Repérer dans l’écran les médias temporels pré-enregistrés qui possèdent des sous-titres.
1. Modifier les paramètres de présentation des sous-titres depuis la plateforme&nbsp;: 
	- Aller dans *Paramètres > Accessibilité > Préférence pour les sous-titres > Style et taille des sous-titres*&nbsp;;
	- Définir un ou plusieurs paramètres parmi&nbsp;: la taille des sous-titres, la couleur, le style de bordure des sous-titres, la couleur d’arrière-plan ou encore l’opacité de l’arrière-plan.
1. Vérifier que les paramètres au niveau de la plateforme sont appliqués aux sous-titres.
1. Si ce n’est pas le cas, vérifier dans le média la présence d’une fonctionnalité permettant de modifier les paramètres de présentation des sous-titres.
1. Vérifier que les paramètres définis ci-avant sont appliqués aux sous-titres.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *7.1.4 Captions characteristics, 11.7 User preferences*{lang=en}

#### [Critère 3.18](#crit-3-18) [AA] Pour chaque [média temporel synchronisé pré-enregistré](glossaire.md#media-temporel-type-son-video-et-synchronise) qui possède des [sous-titres synchronisés](glossaire.md#sous-titres-synchronises-objet-multimedia), ceux-ci peuvent-ils être, si nécessaire, vocalisés (hors cas particuliers)&nbsp;? {id="crit-3-18"}

**[Test 3.18.1](#test-3-18-1)&nbsp;:** Chaque média temporel synchronisé pré-enregistré qui possède des sous-titres synchronisés respecte-t-il une de ces conditions ? {id="test-3-18-1"}
- Les sous-titres sont dans un format standardisé&nbsp;;
- Il existe une piste audio supplémentaire qui contient les sous-titres vocalisés.

##### Cas particuliers

Le critère est non applicable dans les cas suivants&nbsp;: 
- Les sous-titres sont incrustés dans la vidéo.
- La vidéo et les sous-titres utilisent la même langue. Le critère ne concerne que les sous-titres de traduction.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS

1. Repérer dans l’écran les médias temporels synchronisés pré-enregistrés qui possèdent des sous-titres de traduction.
1. Vérifier que les sous-titres sont dans un format standardisé (par exemple, le format .srt).
1. Sinon, activer le **lecteur d’écran** et naviguer jusqu’au lecteur multimédia.
1. [Activer le rotor](https://support.apple.com/fr-fr/guide/iphone/iph3e2e3a6d/ios).
1. Faire défiler les paramètres du rotor et trouver l’option &laquo;&nbsp;Description multimédia&nbsp;&raquo;. 
1. Si c’est le cas, en balayant vers le haut, sélectionner l’option &laquo;&nbsp;Énonciation&nbsp;&raquo;.
1. Activer les sous-titres de la vidéo et lancer la vidéo.
1. Vérifier que les sous-titres affichés sont restitués par le lecteur d’écran.
1. Si ce n’est pas le cas, vérifier la présence dans le lecteur multimédia d’une piste sonore supplémentaire qui serait la version vocalisée des sous-titres.
1. Activer la piste audio supplémentaire et vérifier que les sous-titres vocalisés correspondent aux sous-titres affichés.
1. Si c’est le cas, le critère est validé.

Note&nbsp;: Si l’option &laquo;&nbsp;Description multimédia&nbsp;&raquo; n’est pas disponible dans le rotor, déplacer le focus du lecteur d’écran pour atteindre la vidéo et utiliser à nouveau le rotor. Si l’option n’apparaît toujours pas, les sous-titres ne pourront pas être restitués par le lecteur d’écran, le critère est non conforme.

###### Android

1. Repérer dans l’écran les médias temporels synchronisés pré-enregistrés qui possèdent des sous-titres de traduction.
1. Vérifier que les sous-titres sont dans un format standardisé (par exemple, le format .srt).
1. Sinon, vérifier la présence dans le lecteur multimédia d’une piste sonore supplémentaire qui serait la version vocalisée des sous-titres.
1. Activer la piste audio supplémentaire et vérifier que les sous-titres vocalisés correspondent aux sous-titres affichés.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *7.1.5 Spoken subtitles*{lang=en}

### [Thématique 4](#topic-4)&nbsp;: Tableaux {id="topic-4"}

#### [Critère 4.1](#crit-4-1) [A] Chaque [tableau de données complexe](glossaire.md#tableau-de-donnees-complexe) a-t-il un [résumé](glossaire.md#resume-de-tableau)&nbsp;? {id="crit-4-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les tableaux de données complexes.
1. Activer le **lecteur d’écran**.
1. Vérifier&nbsp;:
	- qu’un résumé est restitué lorsque le lecteur d’écran atteint le tableau&nbsp;; 
	- ou qu’un résumé est disponible avant le tableau, sous la forme d’un texte précédant le tableau.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.1 Info and Relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.3.1.1 Info and Relationships*{lang=en}, *11.5.2.5 Object information*{lang=en}

#### [Critère 4.2](#crit-4-2) [A] Pour chaque [tableau de données complexe](glossaire.md#tableau-de-donnees-complexe) ayant un [résumé](glossaire.md#resume-de-tableau), celui-ci est-il pertinent&nbsp;? {id="crit-4-2"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Vérifier que chaque résumé de tableau est pertinent, c’est-à-dire qu’il permet de comprendre la nature des données et la construction du tableau.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.1 Info and Relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.3.1.1 Info and Relationships*{lang=en}, *11.5.2.5 Object information*{lang=en}

#### [Critère 4.3](#crit-4-3) [A] Chaque [tableau de données](glossaire.md#tableau-de-donnees) a-t-il un [titre](glossaire.md#titre-d-un-tableau-de-donnees)&nbsp;? {id="crit-4-3"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les tableaux de données.
1. Activer le **lecteur d’écran**. 
1. Vérifier qu’un titre est restitué lorsque le lecteur d’écran atteint le tableau.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.1 Info and Relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.3.1.1 Info and Relationships*{lang=en}, *11.5.2.5 Object information*{lang=en}

#### [Critère 4.4](#crit-4-4) [A] Pour chaque [tableau de données](glossaire.md#tableau-de-donnees) ayant un [titre](glossaire.md#titre-d-un-tableau-de-donnees), celui-ci est-il pertinent&nbsp;? {id="crit-4-4"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Vérifier que chaque titre de tableau de données est pertinent, c’est-à-dire qu’il permet d’identifier la nature des données présentées dans le tableau.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.1 Info and Relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.3.1.1 Info and Relationships*{lang=en}, *11.5.2.5 Object information*{lang=en}

#### [Critère 4.5](#crit-4-5) [A] Pour chaque [tableau de données](glossaire.md#tableau-de-donnees), les entêtes de lignes et de colonnes sont-ils correctement reliés aux cellules de données&nbsp;? {id="crit-4-5"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les tableaux de données.
1. Activer le **lecteur d’écran** et parcourir les cellules de données.
1. Vérifier que les entêtes sont correctement restitués.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.1 Info and Relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.3.1.1 Info and Relationships*{lang=en}, *11.5.2.5 Object information*{lang=en}, *11.5.2.6 Row, column, and headers*{lang=en}

### [Thématique 5](#topic-5)&nbsp;: Composants interactifs {id="topic-5"}

#### [Critère 5.1](#crit-5-1) [A] Chaque [composant d’interface](glossaire.md#composant-d-interface) est-il, si nécessaire, [compatible avec les technologies d’assistance](glossaire.md#compatible-avec-les-technologies-d-assistance) (hors cas particuliers)&nbsp;? {id="crit-5-1"}

- **[Test 5.1.1](#test-5-1-1)&nbsp;:** Chaque composant d’interface vérifie-t-il, si nécessaire, une de ces conditions&nbsp;? {id="test-5-1-1"}
	- [Le nom, le rôle, la valeur, le paramétrage et les changements d’états](glossaire.md#nom-role-valeur-parametrage-et-changements-d-etat) sont [accessibles aux technologies d’assistance](glossaire.md#accessible-aux-technologies-d-assistance) via une API d’accessibilité&nbsp;;
	- Une alternative [adjacente clairement identifiable](glossaire.md#adjacente-clairement-identifiable) compatible avec une API d’accessibilité permet d’accéder aux mêmes fonctionnalités.
- **[Test 5.1.2](#test-5-1-2)&nbsp;:** Chaque composant d’interface vérifie-t-il ces conditions (hors cas particuliers)&nbsp;? {id="test-5-1-2"}
	- Le composant possède un nom pertinent&nbsp;;
	- Le nom accessible du composant contient au moins l’intitulé visible&nbsp;;
	- Le composant possède un rôle pertinent&nbsp;;
	- Le composant possède une valeur pertinente&nbsp;;
	- Le composant possède un état pertinent.

##### Cas particuliers

Le critère est non applicable pour les éléments suivants&nbsp;:
- L’application est soumise à des exigences de sécurité strictes qui empêchent d’autres applications d’interagir avec son interface (comme une technologie d’assistance). Des exemples de systèmes soumis à des exigences de sécurité strictes sont les systèmes traitant des activités de renseignement, des activités de cryptologie liées à la sécurité nationale, du commandement et du contrôle des forces militaires.
- Les cartes et les services de cartographie en ligne, pour autant que les informations essentielles soient fournies sous une forme numérique accessible pour ce qui concerne les cartes destinées à la navigation.

Il existe une gestion de cas particuliers pour le [test 5.1.2](#test-5-1-2) lorsque&nbsp;:
- La ponctuation et les lettres majuscules sont présentes dans le texte de l’intitulé visible&nbsp;: elles peuvent être ignorées dans le nom accessible sans porter à conséquence.
- Le texte de l’intitulé visible sert de symbole&nbsp;: le texte ne doit pas être interprété littéralement au niveau du nom accessible. Le nom doit exprimer la fonction véhiculée par le symbole (par exemple, “B” au niveau d’un éditeur de texte aura pour nom accessible “Mettre en gras”, le signe “>” en fonction du contexte signifiera “Suivant” ou “Lancer la vidéo”). Le cas des symboles mathématiques fait cependant exception (voir la note ci-dessous).

**Note&nbsp;:** si l’étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d’étiquette au nom accessible (ex.&nbsp;: “A>B”). Il est laissé à l’utilisateur le soin d’opérer la correspondance entre l’expression et ce qu’il doit épeler compte tenu de la connaissance qu’il a du fonctionnement de son logiciel de saisie vocale (“A plus grand que B” ou “A supérieur à B”).

##### Méthodologie d’évaluation {class="disclosure methodo"}

Le test le plus complet est un test de restitution avec un lecteur d’écran. En effet tous les éléments à évaluer, s’ils sont présents, sont restitués par les lecteurs d’écran. D’autres tests avec d’autres technologies d’assistance peuvent être nécessaires pour s’assurer de la compatibilité. Plusieurs méthodes d’évaluation plus ou moins complètes vous sont décrites.

Plusieurs méthodes sont disponibles avec iOS, mais seul le test avec VoiceOver est le test qui permet d’évaluer l’ensemble des éléments demandé par le critère.

De plus, il n’existe pas comme pour le web de documentation technique permettant de décrire le fonctionnement et les implémentations attendues (par exemple pour les fenêtres modales ou les potentiomètres). En l’absence d’une telle documentation, afin d’évaluer au plus juste ce type de composant il est conseillé tout de même de se rapprocher&nbsp;: 
- de ce que décrit [la spécification ARIA pour les modèles de conception](https://www.w3.org/TR/wai-aria-practices-1.1/)&nbsp;;
- des [documentations des éditeurs de plateformes dédiées aux développeurs](methodologie.md#ressources-des-editeurs).

###### iOS avec VoiceOver

1. Activer le **lecteur d’écran**.
1. Repérer dans l’écran les composants interactifs (par exemple, bouton, lien).
1. Accéder à chaque composant interactif en utilisant les gestes du lecteur d’écran.
1. Vérifier&nbsp;:
	- qu’un rôle est restitué (par exemple, bouton, zone de modification, lien)&nbsp;; 
	- que le rôle restitué est pertinent au regard de la fonctionnalité associée (par exemple, un composant qui déclenche l’ouverture d’une fenêtre modale et qui est restitué &laquo;&nbsp;zone de modification&nbsp;&raquo; a un rôle non pertinent, il devrait être identifié comme un bouton)&nbsp;; 
	- qu’un nom est restitué et que ce nom est pertinent, c’est-à-dire qu’il permet de comprendre la fonction de l’élément (pour les champs de formulaire, on se reportera à la thématique &laquo;&nbsp;Formulaires&nbsp;&raquo; pour les évaluer)&nbsp;;
	- que si le composant possède un nom visible (un texte visible), l’intitulé est restitué&nbsp;;
	- que si le composant a un état perceptible (activé, désactivé, sélectionné), cet état est restitué&nbsp;;
	- que si le composant peut changer d’état (par exemple bouton à bascule, potentiomètre), réaliser les actions nécessaires pour tester les différents états et vérifier que chaque changement d’état est correctement restitué (le passage à l’état sélectionné, l’augmentation du potentiomètre)&nbsp;;
	- que si le composant a une valeur perceptible (valeur d’un potentiomètre), cette valeur est restituée.
1. Si c’est le cas, le critère est validé.

###### iOS Avec **Accessibility Inspector**{lang=en}

1. Connecter le terminal mobile iOS à l’ordinateur avec macOS.
1. Activer le logiciel **Accessibility Inspector**{lang=en}.
1. Choisir le terminal mobile comme source et rester sur l’onglet &laquo;&nbsp;Inspection&nbsp;&raquo; (boutons en haut à droite).
1. Avec les flèches de *Accessibility Inspector*{lang=en}, accéder à chaque élément de l’interface.
1. Vérifier&nbsp;: 
	- qu’un rôle est disponible dans le paramètre &laquo;&nbsp;*Traits*{lang=en}&nbsp;&raquo; (par exemple, *Bouton, Tab, Text Field*{lang=en})&nbsp;; 
	- que le rôle est pertinent au regard de la fonctionnalité associée (par exemple, un composant qui déclenche l’ouverture d’une fenêtre modale et qui est présenté comme *Static text*{lang=en} a un rôle non pertinent, il devrait être identifié comme un bouton)&nbsp;; 
	- qu’un nom est disponible dans le paramètre &laquo;&nbsp;Label&nbsp;&raquo; et que ce nom est pertinent, c’est-à-dire qu’il permet de comprendre la fonction de l’élément (pour les champs de formulaire, on se reportera à la thématique &laquo;&nbsp;Formulaires&nbsp;&raquo; pour les évaluer)&nbsp;;
	- que si le composant possède un nom visible (un texte visible), l’intitulé défini dans le paramètre &laquo;&nbsp;Label&nbsp;&raquo; contient au moins cet intitulé.
1. Si le composant a un état perceptible (activé, désactivé, sélectionné), vérifier que cet état&nbsp;: 
	- est disponible dans le paramètre &laquo;&nbsp;*Traits*{lang=en}&nbsp;&raquo;&nbsp;;
	- ou est indiqué dans le paramètre &laquo;&nbsp;Label&nbsp;&raquo;.
1. Si le composant peut changer d’état (par exemple bouton à bascule, potentiomètre), réaliser les actions nécessaires pour tester les différents états et vérifier que chaque changement d’état (le passage à l’état sélectionné, l’augmentation du potentiomètre)&nbsp;:
	- est disponible dans le paramètre &laquo;&nbsp;*Traits*{lang=en}&nbsp;&raquo;&nbsp;;
	- ou est indiqué dans le paramètre &laquo;&nbsp;Label&nbsp;&raquo;.
1. Si c’est le cas, le critère est validé.

###### iOS Avec le contrôle vocal

L’application de contrôle vocal permet aux utilisateurs de naviguer à la voix. 

Le critère 5.1 dans sa globalité ne peut pas être évalué avec le contrôle vocal, mais une fonctionnalité du contrôle vocal (l’affichage des libellés) permet d’avoir une vue d’ensemble rapide de l’état des composants interactifs.

Le contrôle vocal va permettre de déceler les composants utilisables au toucher qui ne sont pas des composants interactifs détectables par les technologies d’assistance, la présence d’un intitulé et sa pertinence, et la présence du nom visible dans le nom accessible.

1. Activer le contrôle vocal&nbsp;: *Réglages > Accessibilité > Contrôle vocal*.
1. Afficher les libellés des composants interactifs&nbsp;: depuis l’écran de paramètres du contrôle vocal, atteindre le bouton &laquo;&nbsp;Superposition&nbsp;&raquo; et l’activer, puis choisir &laquo;&nbsp;Noms des éléments&nbsp;&raquo;.
1. Dorénavant, lorsque le contrôle vocal sera activé, des infobulles grises apparaitront au-dessus des éléments interactifs qui ont des labels. À noter que si l’écran possède un très grand nombre de contrôles interactifs, les labels s’afficheront par groupes successifs (un  groupe de label disparait et un autre apparaît).

Ce qu’il faut savoir&nbsp;: seuls les éléments qui ont des rôles interactifs reconnus par l’API d’accessibilité posséderont un label. Ceci va permettre de repérer rapidement quels éléments utilisables au toucher ne sont pas reconnus par le contrôle vocal et ne sont donc pas des éléments interactifs (ce qui constitue une non conformité).

Procédure&nbsp;: 

1. Repérer dans l’écran tous les contrôles interactifs (activables au toucher).
1. Activer le contrôle vocal et vérifier que tous les contrôles interactifs identifiés possèdent un label associé (infobulle grise).
1. Si c’est le cas, vérifier que&nbsp;: 
	- le label associé est pertinent&nbsp;;
	- et que le nom visible (s’il en possède un) est compris dans ce label.
1. Si c’est le cas, les conditions sur la pertinence de l’intitulé et la présence du nom visible dans le nom accessible sont remplies.

###### Android

1. Activer le **lecteur d’écran**.
1. Repérer dans l’écran les composants interactifs (par exemple, bouton, lien).
1. Accéder à chaque composant interactif avec les gestes du lecteur d’écran.
1. Vérifier&nbsp;:
	- qu’un rôle est restitué (par exemple, bouton, zone de modification, lien)&nbsp;; 
	- que le rôle restitué est pertinent au regard de la fonctionnalité associée (par exemple, un composant qui déclenche l’ouverture d’une fenêtre modale et qui est restitué &laquo;&nbsp;zone de modification&nbsp;&raquo; a un rôle non pertinent, il devrait être identifié comme un bouton)&nbsp;; 
	- qu’un nom est restitué et que ce nom est pertinent, c’est-à-dire qu’il permet de comprendre la fonction de l’élément (pour les champs de formulaire, on se reportera à la thématique [&laquo;&nbsp;Formulaires&nbsp;&raquo;](#topic-9) pour les évaluer)&nbsp;;
	- que si le composant possède un nom visible (un texte visible), l’intitulé est restitué&nbsp;;
	- que si le composant a un état perceptible (activé, désactivé, sélectionné), cet état est restitué&nbsp;;
	- que si le composant peut changer d’état (par exemple bouton à bascule, potentiomètre), réaliser les actions nécessaires pour tester les différents états et vérifier que chaque changement d’état est correctement restitué (le passage à l’état sélectionné, l’augmentation du potentiomètre)&nbsp;;
	- que si le composant a une valeur perceptible (valeur d’un potentiomètre), cette valeur est restituée.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.4.4 Link Purpose (In Context)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context), [2.5.3 Label in Name](https://www.w3.org/TR/WCAG21/#label-in-name){lang=en}, [4.1.2 Name, role, value (A)](https://www.w3.org/TR/WCAG21/#name-role-value){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *5.6.1 Tactile or auditory status*{lang=en}, *11.2.4.4 Link Purpose (in context)*{lang=en}, *11.2.5.3.1 Label in Name*{lang=en}, *11.4.1.2.1 Name, role, value*{lang=en}, *11.5.2.3 Use of accessibility services*{lang=en}, *11.5.2.5 Object information*{lang=en}, *11.5.2.7 Values*{lang=en}, *11.5.2.8 Label relationships*{lang=en}, *11.5.2.9 Parent-child relationships*{lang=en}, *11.5.2.11 List of available actions*{lang=en}, *11.5.2.12 Execution of available actions*{lang=en}, *11.5.2.16 Modifications of states and properties*{lang=en}, *11.6.2 No disruption of accessibility features*{lang=en}

#### [Critère 5.2](#crit-5-2) [A] Chaque [composant d’interface](glossaire.md#composant-d-interface) est-il [contrôlable par le clavier et tout dispositif de pointage](glossaire.md#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) (hors cas particuliers)&nbsp;? {id="crit-5-2"}

##### Cas particuliers

Le critère est non applicable pour les éléments suivants&nbsp;:
- La fonctionnalité dépend de l’utilisation d’un gestionnaire d’événement sans équivalent universel&nbsp;; par exemple, une application de dessin à main levée ne pourra pas être rendue contrôlable au clavier.
- L’application est soumise à des exigences de sécurité strictes qui empêchent d’autres applications d’interagir avec son interface (comme une technologie d’assistance). Des exemples de systèmes soumis à des exigences de sécurité strictes sont les systèmes traitant des activités de renseignement, des activités de cryptologie liées à la sécurité nationale, du commandement et du contrôle des forces militaires.
- Les cartes et les services de cartographie en ligne, pour autant que les informations essentielles soient fournies sous une forme numérique accessible pour ce qui concerne les cartes destinées à la navigation.

##### Méthodologie d’évaluation {class="disclosure methodo"}

Il s’agit ici de s’assurer que le composant peut être utilisé par le lecteur d’écran, le contrôle vocal, un clavier externe ou tout autre commutateur externe. On peut limiter les tests à quelques dispositifs de pointage puisque les caractéristiques nécessaires (sur les composants interactifs) sont semblables.

Il est néanmoins nécessaire de tester au moins avec le lecteur d’écran et un clavier externe.

Pour le clavier externe, [certains paramétrages sont nécessaires pour que le périphérique soit pleinement fonctionnel](methodologie.md#clavier-externe).

###### iOS et Android

1. Activer le **lecteur d’écran**.
1. Parcourir l’ensemble des composants interactifs.
1. Vérifier&nbsp;: 
	-  qu’il peut être atteint avec le lecteur d’écran&nbsp;;
	- qu’il peut être activé avec le lecteur d’écran. 
1. Si c’est un composant modifiable (champ de saisie, case à cocher, potentiomètre), vérifier qu’il peut être modifié avec le lecteur d’écran.
1. Connecter un **clavier externe** (et [paramétrer la navigation au clavier](methodologie.md#clavier-externe)).
1. Parcourir l’ensemble des composants interactifs.
1. Vérifier&nbsp;: 
	- qu’il peut être atteint avec les touches du clavier&nbsp;;
	- qu’il peut être activé avec la touche dédiée du clavier.
1. Si c’est un composant modifiable (champ de saisie, case à cocher, potentiomètre), vérifier qu’il peut être modifié avec les touches du clavier.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.1 Info and Relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships), [2.1.1 Keyboard (A)](https://www.w3.org/TR/WCAG21/#keyboard), [2.4.7 Focus Visible (AA)](https://www.w3.org/TR/WCAG21/#focus-visible){lang=en} 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.3.1.1 Info and Relationships*{lang=en}, *11.2.1.1.1 Keyboard*{lang=en}, *11.2.4.7 Focus Visible*{lang=en}, *11.5.2.3 Use of accessibility services*{lang=en}, *11.5.2.7 Values*{lang=en}, *11.5.2.12 Execution of available actions*{lang=en}, *11.5.2.13 Tracking of focus and selection attributes*{lang=en}, *11.5.2.14 Modification of focus and selection attributes*{lang=en}, *11.5.2.17 Modifications of values and text*{lang=en}.

#### [Critère 5.3](#crit-5-3) [A] Chaque [changement de contexte](glossaire.md#changement-de-contexte) respecte-t-il une de ces conditions&nbsp;? {id="crit-5-3"}

**[Test 5.3.1](#test-5-3-1)&nbsp;:** Chaque changement de contexte respecte-t-il une de ces conditions&nbsp;? {id="test-5-3-1"}
- L’utilisateur est averti par un texte du type de changement avant son déclenchement&nbsp;;
- Le changement de contexte est initié par une action de l’utilisateur sur un composant ayant un nom explicite.	

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran tous les événements qui initient un changement de contexte, par exemple&nbsp;:
	- une mise à jour dynamique de champs de formulaire&nbsp;;
	- l’ouverture d’une nouvelle page sur la sélection d’une entrée de liste&nbsp;;
	- la mise à jour d’une partie essentielle de l’écran sans action de l’utilisateur&nbsp;;
	- le lancement automatique d’un lecteur vidéo sur la sélection d’une playlist&nbsp;;
	- la manipulation du focus ayant pour résultat de modifier la position courante de l’utilisateur dans l’écran.
1. Vérifier&nbsp;:
	- que l’utilisateur est averti par un texte du type de changement avant son déclenchement&nbsp;;
	- ou que le changement de contexte est initié par un bouton ou un lien explicite.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [3.2.1 On Focus (A)](https://www.w3.org/TR/WCAG21/#on-focus){lang=en}, [3.2.2 On Input (A)](https://www.w3.org/TR/WCAG21/#on-input){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.3.2.1 On Focus*{lang=en}, *11.3.2.2 On Input*{lang=en}

#### [Critère 5.4](#crit-5-4) [AA] Dans chaque écran, les [messages de statut](glossaire.md#message-de-statut) sont-ils correctement restitués par les technologies d’assistance&nbsp;? {id="crit-5-4"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Activer le **lecteur d’écran**. 
1. Réaliser les actions nécessaires à l’apparition d’un message de statut par exemple&nbsp;: 
	- remplir correctement un formulaire et le valider pour faire apparaître un message indiquant l’envoi avec succès&nbsp;;
	- soumettre un formulaire avec des champs obligatoires sans saisie pour faire apparaître un message indiquant la présence d’erreurs&nbsp;; 
	- afficher un écran qui nécessite un certain temps de chargement pour faire apparaître un message de progression ou un indicateur de progression de chargement.
1. Vérifier que lorsque le statut apparaît, le lecteur d’écran restitue l’information et que cette information est compréhensible.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [4.1.3 Status Messages (AA)](https://www.w3.org/TR/WCAG21/#status-messages){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.4.1.3.1 Status Messages*{lang=en}, *11.5.2.3 Use of accessibility services*{lang=en}, *11.5.2.15 Change notification*{lang=en}

#### [Critère 5.5](#crit-5-5) [A] Chaque état d’un [contrôle à bascule](glossaire.md#controle-a-bascule) présenté à l’utilisateur est-il perceptible&nbsp;? {id="crit-5-5"}

**[Test 5.5.1](#test-5-5-1)&nbsp;:** Pour chaque état d’un contrôle à bascule présenté à l’utilisateur, les conditions suivantes sont-elles respectées&nbsp;? {id="test-5-5-1"} 
- L’état de la fonctionnalité est visible sur l’interface sans modifier l’état du contrôle&nbsp;; 
- L’état de la fonctionnalité peut être déterminé par le toucher ou le son sans modifier l’état du contrôle.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les contrôles à bascule (boutons avec un ou plusieurs états, par exemple, cases à cocher, bouton radio, *switch*{lang=en}).
1. Vérifier qu’il est possible de déterminer l’état du contrôle sur la base de sa présentation dans l’interface (par exemple, un changement de forme lorsque le contrôle passe d’un état à l’autre).
1. Activer le **lecteur d’écran** et naviguer jusqu’au contrôle. 
1. Vérifier que l’état du contrôle est restitué par le lecteur d’écran sans avoir à interagir avec le contrôle.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *5.6.1 Tactile or auditory status, 5.6.2 Visual status*{lang=en}

### [Thématique 6](#topic-6)&nbsp;: Éléments obligatoires {id="topic-6"}

#### [Critère 6.1](#crit-6-1) [A] Dans chaque écran, les textes sont-ils restitués par les technologies d’assistance dans la langue principale de l’écran&nbsp;? {id="crit-6-1"}

**Note&nbsp;:** Il n’est pas requis que les changements de langue dans l’écran soient identifiés (par exemple, un terme en langue étrangère inclus dans un paragraphe) mais que l’écran soit restitué au moins correctement dans la langue principale de l’écran. Cependant, dans certains cas d’applications où les changements de langue seraient essentiels à la compréhension du contenu (comme une application de traduction ou une application de cours de langue étrangère) il faudra veiller à ce que les textes en langue étrangère soient correctement restitués dans la langue identifiée.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS 

1. Aller dans *Réglages > Accessibilité > VoiceOver > Parole* et activer le paramètre &laquo;&nbsp;Détecter les langues&nbsp;&raquo;.
1. Activer le **lecteur d’écran** et parcourir l’ensemble des éléments de l’écran.
1. Vérifier que le texte est restitué dans la langue principale de l’écran.
1. Si c’est le cas, le critère est validé.

###### Android 

1. Aller dans *Paramètres > Accessibilité > TalkBack > Paramètres > Paramètres de la synthèse vocale*  (selon la version de la plateforme, le chemin d’accès peut être différent)&nbsp;: 
	- Vérifier que le paramètre &laquo;&nbsp;Moteur préféré&nbsp;&raquo; est &laquo;&nbsp;Synthèse vocale Google&nbsp;&raquo;&nbsp;; 
	- Activer les paramètres de la synthèse (bouton à droite de &laquo;&nbsp;Moteur préféré&nbsp;&raquo;) et vérifier que le paramètre &laquo;&nbsp;Détection de la langue&nbsp;&raquo; est sur &laquo;&nbsp;Forcée&nbsp;&raquo;.
1. Activer le **lecteur d’écran** et parcourir l’ensemble des éléments de l’écran.
1. Vérifier que les textes sont restitués dans la langue principale de l’écran.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [3.1.1 Language of Page (A)](https://www.w3.org/TR/WCAG21/#language-of-page){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.3.1.1.1 Language of software*{lang=en}

#### [Critère 6.2](#crit-6-2) [A] Dans chaque écran, les éléments de l’interface ne doivent pas être utilisés [uniquement à des fins de présentation](glossaire.md#uniquement-a-des-fins-de-presentation). Cette règle est-elle respectée&nbsp;? {id="crit-6-2"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

Dans ce critère, on ne contrôle que les éléments qui ne doivent pas être interactifs (les éléments texte, les tableaux par exemple).

###### iOS avec VoiceOver

1. Activer le **lecteur d’écran** et parcourir l’ensemble des éléments de l’écran.
1. Vérifier que le rôle restitué par le lecteur d’écran correspond à la nature de l’élément (par exemple, lorsque le lecteur d’écran atteint ce qui apparaît comme un paragraphe et qu’il restitue &laquo;&nbsp;Bouton&nbsp;&raquo;, il s’agit d’une erreur, aucun rôle n’est restitué sur les paragraphes).
1. Si c’est le cas, le critère est validé.

###### iOS Avec *Accessibility Inspector*{lang=en}

1. Connecter le terminal mobile iOS à l’ordinateur avec macOS.
1. Activer le logiciel **Accessibility Inspector**{lang=en}.
1. Choisir le terminal mobile comme source et rester sur l’onglet &laquo;&nbsp;Inspection&nbsp;&raquo; (boutons en haut à droite).
1. Avec les flèches de *Accessibility Inspector*{lang=en}, accéder à chaque élément de l’interface.
1. Vérifier que le rôle disponible dans le paramètre &laquo;&nbsp;*Traits*{lang=en}&nbsp;&raquo; est pertinent au regard de la nature de l’élément associé (par exemple, un simple texte qui aurait un rôle de bouton serait considéré non conforme, il devrait être identifié comme un texte statique).
1. Si c’est le cas, le critère est validé.

###### Android

1. Activer le **lecteur d’écran** et parcourir l’ensemble des éléments de l’écran.
1. Vérifier que le rôle restitué par le lecteur d’écran correspond à la nature de l’élément (par exemple, lorsque le lecteur d’écran atteint ce qui apparaît comme un paragraphe et qu’il restitue &laquo;&nbsp;Bouton&nbsp;&raquo;, il s’agit d’une erreur, aucun rôle n’est restitué sur les paragraphes).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.1 Info and Relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships){lang=en} 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.3.1.1 Info and Relationships*{lang=en}

### [Thématique 7](#topic-7)&nbsp;: Structuration de l’information {id="topic-7"}

#### [Critère 7.1](#crit-7-1) [A] Dans chaque écran, l’information est-elle structurée par l’utilisation appropriée de titres&nbsp;? {id="crit-7-1"}

**[Test 7.1.1](#test-7-1-1)&nbsp;:** Chaque écran vérifie-t-il ces conditions&nbsp;? {id="test-7-1-1"}
- Le contenu de chaque titre est pertinent&nbsp;;
- Chaque passage de texte constituant un titre est identifié comme un titre.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS avec VoiceOver

1. Activer le **lecteur d’écran**.
1. Utiliser le rotor et sélectionner &laquo;&nbsp;En-têtes&nbsp;&raquo;.
1. Parcourir les entêtes en glissant un doigt vers le haut ou vers le bas.
1. Vérifier&nbsp;: 
	- que chaque texte qui structure l’écran peut être atteint&nbsp;; 
	- que chaque entête atteint est pertinent, c’est-à-dire&nbsp;: 
		- que le titre est utile à la structuration de l’écran&nbsp;;
		- que le texte contenu dans le titre permet de comprendre le contenu de la section titrée.
1. Si c’est le cas, le critère est validé.

###### iOS avec *Accessibility Inspector*{lang=en}

1. Connecter le terminal mobile iOS à l’ordinateur avec macOS.
1. Activer le logiciel **Accessibility Inspector**{lang=en}.
1. Choisir le terminal mobile comme source et rester sur l’onglet &laquo;&nbsp;Inspection&nbsp;&raquo; (boutons en haut à droite).
1. Avec les flèches de *Accessibility Inspector*{lang=en}, accéder à chaque élément de l’interface.
1. Vérifier&nbsp;: 
	- que pour chaque texte qui structure l’écran, le paramètre &laquo;&nbsp;*Traits*{lang=en}&nbsp;&raquo; contient la valeur &laquo;&nbsp;En-têtes&nbsp;&raquo;&nbsp;; 
	- que chaque texte dont le paramètre &laquo;&nbsp;*Traits*{lang=en}&nbsp;&raquo; contient la valeur &laquo;&nbsp;En-têtes&nbsp;&raquo; est pertinent, c’est-à-dire&nbsp;: 
		- que le titre ainsi déclaré est utile à la structuration de l’écran&nbsp;;
		- que le texte contenu dans le titre permet de comprendre le contenu de la section ainsi titrée.
1. Si c’est le cas, le critère est validé.

###### Android

1. Activer le **lecteur d’écran**.
1. Utiliser le menu des commandes de lecture et sélectionner &laquo;&nbsp;Titres&nbsp;&raquo;.
1. Parcourir les titres en glissant un doigt vers le haut ou vers le bas.
1. Vérifier&nbsp;: 
	- que chaque texte qui structure l’écran est atteint de cette manière et est restitué comme titre&nbsp;; 
	- que chaque titre atteint est pertinent, c’est-à-dire&nbsp;: 
		- que le titre est utile à la structuration de l’écran&nbsp;;
		- que le texte contenu dans le titre permet de comprendre le contenu de la section ainsi titrée.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.1 Info and Relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships){lang=en}, [2.4.6 Headings and Labels (AA)](https://www.w3.org/TR/WCAG21/#headings-and-labels){lang=en}, [4.1.2 Name, Role, Value (A)](https://www.w3.org/TR/WCAG21/#name-role-value){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.3.1.1 Info and Relationships*{lang=en}, *2.4.6 Headings and Labels*{lang=en}, *4.1.2 Name, Role, Value*{lang=en}, *11.5.2.3 Use of accessibility services*{lang=en}, *11.5.2.5 Object information*{lang=en}, *11.5.2.9 Parent-child relationships*{lang=en}

#### [Critère 7.2](#crit-7-2) [A] Dans chaque écran, chaque liste est-elle correctement structurée&nbsp;? {id="crit-7-2"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Activer le **lecteur d’écran**.
1. Repérer dans l’écran les éléments rassemblés sous forme de liste.
1. Vérifier que le lecteur d’écran restitue &laquo;&nbsp;Liste&nbsp;&raquo; lorsqu’il atteint le groupe d’éléments.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.1 Info and Relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.3.1.1 Info and Relationships*{lang=en}, *11.5.2.5 Object information*{lang=en}, *11.5.2.9 Parent-child relationships*{lang=en}

### [Thématique 8](#topic-8)&nbsp;: Présentation de l’information {id="topic-8"}

#### [Critère 8.1](#crit-8-1) [A] Dans chaque écran, le contenu visible porteur d’information est-il accessible aux technologies d’assistance&nbsp;? {id="crit-8-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Activer le **lecteur d’écran**.
1. Parcourir l’ensemble des éléments en utilisant les gestes du lecteur d’écran.
1. Vérifier que l’ensemble des informations visibles à l’écran sont restituées par le lecteur d’écran.
1. Si c’est le cas, le critère est validé.

Note&nbsp;: Dans les applications, il est possible de réaliser des regroupements d’éléments. Par exemple, dans un catalogue de produits, chaque item possède un titre, un prix et une description. Au lieu de prendre le focus avec le lecteur d’écran sur chacun des 3 items, l’application peut être conçue pour que le lecteur d’écran accède seulement à l’item dans sa globalité, ainsi le lecteur d’écran restitue l’ensemble des informations sans que l’utilisateur ait à réaliser plusieurs gestes pour atteindre les 3 items. Ceci est conforme (voire encouragé puisque cela limite les actions à réaliser pour parcourir le contenu), il faut s’assurer que tous les textes contenus sont bien restitués par le lecteur d’écran. 

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Non-text Content (A)](https://www.w3.org/TR/WCAG21/#non-text-content){lang=en}, [1.3.1 Info and Relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships){lang=en} 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.1.1.1 Non-text Content*{lang=en}, *11.1.3.1.1 Info and Relationships*{lang=en}, *11.5.2.10 Text*{lang=en}

#### [Critère 8.2](#crit-8-2) [AA] Dans chaque écran, l’utilisateur peut-il augmenter la taille des caractères de 200% au moins (hors cas particuliers)&nbsp;? {id="crit-8-2"}

**[Test 8.2.1](#test-8-2-1)&nbsp;:** Chaque écran vérifie-t-il ces conditions&nbsp;? {id="test-8-2-1"}
- L’utilisateur peut agrandir la taille des textes de 200% en utilisant les paramètres de la plateforme&nbsp;;
- Tous les textes de l’écran sont agrandis&nbsp;;
- Tous les textes agrandis restent lisibles et les composants interactifs utilisables.

##### Cas particuliers

Le critère est non applicable pour les éléments suivants&nbsp;:
- Les éléments graphiques texte&nbsp;;
- Les sous-titres de vidéo.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS

1. Accéder aux paramètres de réglages des tailles de caractères de la plateforme&nbsp;: *Réglages > Accessibilité > Affichage et taille du texte > Police plus grande*.
1. Activer le bouton &laquo;&nbsp;Taille de police plus grande&nbsp;&raquo; et augmenter la valeur de la taille de la police (potentiomètre en bas de l’écran) jusqu'à atteindre un agrandissement de 200% (le maximum de la jauge permet d'atteindre un zoom supérieur à 200%, le test peut donc se limiter à augmenter le zoom en utilisant l'avant-dernière position du potentiomètre).
1. Si nécessaire, redémarrer l’application pour s’assurer que le paramètre est pris en compte par l’application.
1. Vérifier&nbsp;: 
	- que tous les textes de l’interface ont été agrandis&nbsp;; 
	- que tous les textes de l’interface restent lisibles et les fonctionnalités utilisables&nbsp;; 
	- que des contenus ne disparaissent pas&nbsp;; 
	- si des textes ont disparu, qu’il existe une méthode dans l’écran pour afficher les textes à la demande (par exemple avec l’appui prolongé sur une icône).
1. Si c’est le cas, le critère est validé.

###### Android

1. Accéder aux paramètres de réglages des tailles de caractères de la plateforme&nbsp;: *Paramètres > Accessibilité > Taille de la police* (selon la version de la plateforme, le chemin d’accès peut être différent)&nbsp;; 
1. Augmenter la valeur de la taille de la police (potentiomètre en bas de l’écran) jusqu'à atteindre un agrandissement de 200% (sur certains terminaux, la jauge du potentiomètre peut être différente et offrir des valeurs qui permettent d'atteindre un zoom supérieur à 200%, il faudra alors vérifier que le test ne se fait que pour une valeur de 200%).
1. Si nécessaire, redémarrer l’application pour s’assurer que le paramètre est pris en compte par l’application.
1. Vérifier&nbsp;: 
	- que tous les textes de l’interface ont été agrandis&nbsp;; 
	- que tous les textes de l’interface restent lisibles et les fonctionnalités utilisables&nbsp;;
	- que des contenus ne disparaissent pas&nbsp;; 
	- si des textes ont disparu, qu’il existe une méthode dans l’écran pour afficher les textes à la demande (par exemple avec l’appui prolongé sur une icône).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.4.4 Resize Text (AA)](https://www.w3.org/TR/WCAG21/#resize-text){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.4.4.1 Resize Text (AA)*{lang=en}, *11.5.2.3 Use of accessibility services*{lang=en}, *11.7 User preferences*{lang=en}

#### [Critère 8.3](#crit-8-3) [A] Dans chaque écran, chaque [composant en environnement de texte dont la nature n’est pas évidente](glossaire.md#composant-dont-la-nature-n-est-pas-evidente) a-t-il un rapport de contraste supérieur ou égal à 3:1 par rapport au texte environnant&nbsp;? {id="crit-8-3"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS

1. Activer l’option **Différencier sans couleur** (*Réglages > Accessibilité > Affichage et taille du texte > Différencier sans couleur*).
1. Activer l’option **Augmenter le contraste** (*Réglages > Accessibilité > Affichage et taille du texte > Augmenter le contraste*) ou s’il est présent dans l’application, activer le mécanisme de remplacement permettant d’afficher l’application avec un rapport de contraste suffisant.
1. Repérer dans l’écran les composants d’interface (liens, boutons) avec du texte intégrés dans un environnement de texte (dans une phrase par exemple), signifiés uniquement par la couleur (sans autre mise en forme qui les distingue du reste du texte dans lequel ils sont intégrés).
1. Activer le logiciel **Colour Contrast Analyser**{lang=en} sur l’ordinateur et capturer les couleurs du texte environnant et du composant interactif sur le terminal mobile, soit&nbsp;:  
	- en [diffusant l’écran du terminal mobile sur l’ordinateur](methodologie.md#diffuser-l-ecran-du-terminal-mobile)&nbsp;;
	- en réalisant des [captures d’écran](methodologie.md#realiser-des-captures-d-ecran) des éléments à évaluer (et en les important sur l’ordinateur).
1. Vérifier que le contraste entre la couleur de police du composant et la couleur de police du texte environnant est de 3:1, au moins.
1. Si c’est le cas, le critère est validé.

###### Android

1. S’il existe dans l’application, activer le mécanisme de remplacement permettant d’afficher l’application avec un rapport de contraste suffisant.
1. Repérer dans l’écran les composants d’interface (liens, boutons) avec du texte intégrés dans un environnement de texte (dans une phrase par exemple) signifiés uniquement par la couleur (sans autre mise en forme qui les distingue du reste du texte dans lequel ils sont intégrés).
1. Activer le logiciel **Colour Contrast Analyser**{lang=en} sur l’ordinateur et capturer les couleurs du texte environnant et du composant interactif sur le terminal mobile, soit&nbsp;:  
	- en [diffusant l’écran du terminal mobile sur l’ordinateur](methodologie.md#diffuser-l-ecran-du-terminal-mobile)&nbsp;;
	- en réalisant des [captures d’écran](methodologie.md#realiser-des-captures-d-ecran) des éléments à évaluer (et en les important sur l’ordinateur).
1. Vérifier que le contraste entre la couleur de police du composant et la couleur de police du texte environnant est de 3:1, au moins.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.4.1 Use of Color (A)](https://www.w3.org/TR/WCAG21/#use-of-color){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.4.1 Use of Colour*{lang=en} 

#### [Critère 8.4](#crit-8-4) [A] Dans chaque écran, pour chaque [composant en environnement de texte dont la nature n’est pas évidente](glossaire.md#composant-dont-la-nature-n-est-pas-evidente), une indication autre que la couleur permet-elle de signaler la prise de focus et le survol à la souris&nbsp;? {id="crit-8-4"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les composants d’interface (liens, boutons) avec du texte intégrés dans un environnement de texte (dans une phrase par exemple), signifiés uniquement par la couleur (sans autre mise en forme qui les distingue du reste du texte dans lequel ils sont intégrés).
1. Connecter un **clavier externe** (et [paramétrer la navigation au clavier](methodologie.md#clavier-externe)).
1. Vérifier que la visibilité du focus telle que définie au niveau du système est préservée sur ces éléments.
1. Connecter une **souris**.
1. Vérifier que le survol des composants interactifs en environnement de texte est signifié par un autre moyen que la couleur (mise en gras, soulignement par exemple).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.4.1 Use of Color (A)](https://www.w3.org/TR/WCAG21/#use-of-color){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.4.1 Use of Colour*{lang=en} 

#### [Critère 8.5](#crit-8-5) [A] Dans chaque écran, pour chaque élément recevant le focus, la [prise de focus](glossaire.md#prise-de-focus) est-elle visible&nbsp;? {id="crit-8-5"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS

1. Connecter un **clavier externe** (et [paramétrer la navigation au clavier](methodologie.md#clavier-externe)).
1. Activer tous les [paramètres disponibles de style de focus](methodologie.md#clavier-externe). 
1. Naviguer dans l’application et évaluer si la visibilité du focus telle que définie au niveau du système est préservée sur l’ensemble des éléments de l’application.
1. Si c’est le cas, le critère est validé.

###### Android

1. Connecter un **clavier externe** (et [paramétrer la navigation au clavier](methodologie.md#clavier-externe)).
1. Naviguer dans l’application et évaluer si la visibilité du focus telle que définie au niveau du système est préservée sur l’ensemble des éléments de l’application.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.4.1 Use of Color (A)](https://www.w3.org/TR/WCAG21/#use-of-color){lang=en}, [2.4.7 Focus Visible (AA)](https://www.w3.org/TR/WCAG21/#focus-visible){lang=en} 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.4.1 Use of Colour*{lang=en}, *11.2.4.7 Focus Visible*{lang=en}, *11.7 User preferences*{lang=en}

#### [Critère 8.6](#crit-8-6) [A] Dans chaque écran, l’information ne doit pas être donnée uniquement par [la forme, taille ou position](glossaire.md#indication-donnee-par-la-forme-la-taille-ou-la-position). Cette règle est-elle respectée&nbsp;? {id="crit-8-6"}

Sont concernés les mots ou ensemble de mots, les textes, les éléments graphiques porteurs d’informations et les médias temporels.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les informations données par la forme, la taille ou la position dans un texte, un élément graphique, un média temporel ou non temporel. Ce peut être une icône positionnée à gauche d’un composant pour signifier qu’il est actif, ou une consigne dans l’écran qui demande d’activer un composant positionné à un certain endroit dans l’écran.
1. Vérifier qu’il existe un autre moyen de récupérer cette information dans l’écran (par exemple, un texte lisible par tous qui donne la même information).
1. Si ce n’est pas le cas, activer le **lecteur d’écran** et vérifier qu’une information alternative à la forme, la taille ou la position et restituée par le lecteur d’écran.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.3 Sensory Characteristics (A)](https://www.w3.org/TR/WCAG21/#sensory-characteristics){lang=en}, [1.4.1 Use of Color (A)](https://www.w3.org/TR/WCAG21/#use-of-color){lang=en}. 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.3.3 Sensory Characteristics*{lang=en}, *11.1.4.1 Use of Colour*{lang=en}

#### [Critère 8.7](#crit-8-7) [AA] Dans chaque écran, les contenus additionnels apparaissant à la prise de focus ou au survol d’un [composant d’interface](glossaire.md#composant-d-interface) sont-ils contrôlables par l’utilisateur (hors cas particuliers)&nbsp;? {id="crit-8-7"}

- **[Test 8.7.1](#test-8-7-1)&nbsp;:** Chaque contenu additionnel devenant visible à la prise de focus ou au survol d’un composant d’interface peut-il être masqué par une action de l’utilisateur sans déplacer le focus ou le pointeur de la souris (hors cas particuliers)&nbsp;? {id="test-8-7-1"}
- **[Test 8.7.2](#test-8-7-2)&nbsp;:** Chaque contenu additionnel qui apparaît au survol d’un composant d’interface peut-il être survolé par le pointeur de la souris sans disparaître (hors cas particuliers)&nbsp;? {id="test-8-7-2"}
- **[Test 8.7.3](#test-8-7-3)&nbsp;:** Chaque contenu additionnel qui apparaît à la prise de focus ou au survol d’un composant d’interface vérifie-t-il une de ces conditions (hors cas particuliers)&nbsp;? {id="test-8-7-3"}
	- Le contenu additionnel reste visible jusqu’à ce que l’utilisateur retire le pointeur souris ou le focus du contenu additionnel et du composant d’interface ayant déclenché son apparition&nbsp;;
	- Le contenu additionnel reste visible jusqu’à ce que l’utilisateur déclenche une action masquant ce contenu sans déplacer le focus ou le pointeur de la souris du composant d’interface ayant déclenché son apparition&nbsp;;
	- Le contenu additionnel reste visible jusqu’à ce qu’il ne soit plus valide.

##### Cas particuliers

Le critère est non applicable lorsque le contenu additionnel est contrôlé par la plateforme (par exemple, attribut `title` en HTML) ou correspond à une fenêtre modale.

Lorsque le contenu additionnel ne masque ou ne remplace aucun contenu porteur d’information, le [test 8.7.1](#test-8-7-1) est non applicable.


##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS

1. Connecter un **clavier externe** (et [paramétrer la navigation au clavier](methodologie.md#clavier-externe)).
1. Parcourir l’écran et repérer les contenus additionnels qui apparaissent à la prise de focus sur un composant d’interface.
1. Vérifier que le contenu additionnel peut être masqué par une touche du clavier (la touche <kbd>ESC</kbd> par exemple).
1. Vérifier que le contenu additionnel reste visible&nbsp;: 
	- jusqu’à ce que le focus soit déplacé en dehors du composant d’interface et du contenu additionnel&nbsp;;
	- ou tant que le focus est positionné sur le composant d’interface ou dans le contenu additionnel&nbsp;;
	- ou tant que le contenu additionnel est valide. 
1. Connecter une **souris**.
1. Balayer l’écran avec la souris et repérer les contenus additionnels qui apparaissent au survol d’un composant d’interface.
1. Vérifier que le contenu additionnel peut être survolé par la souris.
1. Vérifier que le contenu additionnel reste visible&nbsp;: 
	- jusqu’à ce que le pointeur de la souris soit déplacé en dehors du composant d’interface et du contenu additionnel&nbsp;;
	- ou tant que le pointeur de la souris survole le composant d’interface ou le contenu additionnel&nbsp;;
	- ou tant que le contenu additionnel est valide. 
1. Si c’est le cas, le critère est validé.

###### Android

1. Connecter un **clavier externe** (et [paramétrer la navigation au clavier](methodologie.md#clavier-externe)).
1. Parcourir l’écran et repérer les contenus additionnels qui apparaissent à la prise de focus sur un composant d’interface.
1. Vérifier que le contenu additionnel peut être masqué par une touche du clavier (généralement la touche ou la combinaison de touches qui aura été associée dans *Switch Access*{lang=en} pour le paramètre *Retour*)
1. Vérifier que le contenu additionnel reste visible&nbsp;: 
	- jusqu’à ce que le focus soit déplacé en dehors du composant d’interface et du contenu additionnel&nbsp;;
	- ou tant que le focus est positionné sur le composant d’interface ou dans le contenu additionnel&nbsp;;
	- ou tant que le contenu additionnel est valide. 
1. Connecter une **souris**.
1. Balayer l’écran avec la souris et repérer les contenus additionnels qui apparaissent au survol d’un composant d’interface.
1. Vérifier que le contenu additionnel peut être survolé par la souris.
1. Vérifier que le contenu additionnel reste visible&nbsp;: 
	- jusqu’à ce que le pointeur de la souris soit déplacé en dehors du composant d’interface et du contenu additionnel&nbsp;;
	- ou tant que le pointeur de la souris survole le composant d’interface ou le contenu additionnel&nbsp;;
	- ou tant que le contenu additionnel est valide. 
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.4.13 Content on Hover or Focus (AA)](https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus){lang=en} 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.4.13 Content on Hover or Focus*{lang=en}

### [Thématique 9](#topic-9)&nbsp;: Formulaires {id="topic-9"}

#### [Critère 9.1](#crit-9-1) [A] Chaque champ de formulaire a-t-il une étiquette visible&nbsp;? {id="crit-9-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les champs de formulaire (champ de saisie, bouton radio, case à cocher).
1. Vérifier la présence d’une étiquette visible adjacente.
1. Activer le champ de formulaire (par exemple, saisir du texte).
1. Vérifier que l’étiquette reste visible.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.4.6 Headings and Labels (AA)](https://www.w3.org/TR/WCAG21/#headings-and-labels){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.2.4.6 Headings and Labels*{lang=en}

#### [Critère 9.2](#crit-9-2) [A] Chaque champ de formulaire a-t-il une étiquette accessible aux technologies d’assistance&nbsp;? {id="crit-9-2"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS avec VoiceOver

1. Activer le **lecteur d’écran**.
1. Naviguer jusqu’aux éléments de formulaire en utilisant les gestes du lecteur d’écran.
1. Vérifier qu’une étiquette est restituée lorsque le focus du lecteur d’écran est sur le champ de formulaire.
1. Si c’est le cas, le critère est validé.

###### iOS avec le contrôle vocal

1. Activer le **contrôle vocal**.
1. Repérer dans l’écran tous les champs de formulaire.
1. Vérifier qu’une étiquette est détectée par le contrôle vocal (apparition d’une infobulle grise au-dessus du champ).
1. Si c’est le cas, le critère est validé.

###### Android

1. Activer le **lecteur d’écran**.
1. Naviguer jusqu’aux éléments de formulaire en utilisant les gestes du lecteur d’écran.
1. Vérifier qu’une étiquette est restituée lorsque le focus du lecteur d’écran est sur le champ de formulaire.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.1 Info and Relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships){lang=en}, [3.3.2 Labels or Instructions (A)](https://www.w3.org/TR/WCAG21/#labels-or-instructions){lang=en}, [4.1.2 Name, Role, Value (A)](https://www.w3.org/TR/WCAG21/#name-role-value){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.3.1 Info and Relationships (A)*{lang=en}, *11.3.3.2 Labels or Instructions (A)*{lang=en}, *11.4.1.2.1 Name, role, value (A)*{lang=en}, *11.5.2.3 Use of accessibility services*{lang=en}, *11.5.2.5 Object information*{lang=en}, *11.5.2.8 Label relationships*{lang=en}

#### [Critère 9.3](#crit-9-3) [A] Chaque étiquette associée à un champ de formulaire est-elle pertinente&nbsp;? {id="crit-9-3"}

**[Test 9.3.1](#test-9-3-1)&nbsp;:** Chaque étiquette associée à un champ de formulaire respecte-t-elle ces conditions&nbsp;? {id="test-9-3-1"}
- L’étiquette accessible aux technologies d’assistance est pertinente&nbsp;;
- L’étiquette visible est contenue dans l’étiquette accessible aux technologies d’assistance.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS avec VoiceOver

1. Activer le **lecteur d’écran**.
1. Naviguer jusqu’aux éléments de formulaire en utilisant les gestes du lecteur d’écran.
1. Vérifier&nbsp;:
	- que l’étiquette restituée par le lecteur d’écran est pertinente (elle permet de comprendre la nature de la saisie attendue)&nbsp;;
	- que l’étiquette visible est contenue dans l’étiquette restituée par le lecteur d’écran.
1. Si c’est le cas, le critère est validé.

###### Avec le contrôle vocal

1. Activer le **contrôle vocal**.
1. Repérer dans l’écran tous les champs de formulaire.
1. Vérifier&nbsp;:
	- que l’étiquette détectée par le contrôle vocal (infobulle grise) est pertinente (elle permet de comprendre la nature de la saisie attendue)&nbsp;;
	- que l’étiquette visible est contenue dans l’étiquette détectée par le contrôle vocal (infobulle grise).
1. Si c’est le cas, le critère est validé.

###### Android 

1. Activer le **lecteur d’écran**.
1. Naviguer jusqu’aux éléments de formulaire en utilisant les gestes du lecteur d’écran.
1. Vérifier&nbsp;:
	- que l’étiquette restituée par le lecteur d’écran est pertinente (elle permet de comprendre la nature de la saisie attendue)&nbsp;;
	- que l’étiquette visible est contenue dans l’étiquette restituée par le lecteur d’écran.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.4.6 Headings and Labels (AA)](https://www.w3.org/TR/WCAG21/#headings-and-labels){lang=en},  [2.5.3 Label in Name (A)](https://www.w3.org/TR/WCAG21/#label-in-name){lang=en}, [3.3.2 Labels or Instructions (A)](https://www.w3.org/TR/WCAG21/#labels-or-instructions){lang=en}.
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.2.4.6 Headings and Labels*{lang=en}, *11.2.5.3.1 Label in Name*{lang=en}, *11.3.3.2 Labels or Instructions (A)*{lang=en}, *11.5.2.5 Object information*{lang=en}

#### [Critère 9.4](#crit-9-4) [A] Chaque étiquette de champ et son champ associé sont-ils [accolés](glossaire.md#accoles-etiquette-et-champ-accoles)&nbsp;? {id="crit-9-4"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran tous les champs de formulaire.
1. Pour chaque champ de formulaire, vérifier que l’étiquette visible est accolée au champ auquel elle est liée.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [3.3.2 Labels or Instructions (A)](https://www.w3.org/TR/WCAG21/#labels-or-instructions){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.3.3.2 Labels or Instructions (A)*{lang=en}

#### [Critère 9.5](#crit-9-5) [A] Dans chaque formulaire, l’intitulé de chaque bouton est-il pertinent&nbsp;? {id="crit-9-5"}

**[Test 9.5.1](#test-9-5-1)&nbsp;:** Chaque bouton de formulaire respecte-t-il ces conditions&nbsp;? {id="test-9-5-1"}
- L’intitulé du bouton accessible aux technologies d’assistance est pertinent&nbsp;;
- L’intitulé visible du bouton est contenu dans l’intitulé accessible aux technologies d’assistance.

##### Méthodologie d’évaluation {class="disclosure methodo"}

2 méthodes d’évaluation sur iOS sont proposées. Les deux méthodes aboutissent aux mêmes résultats. Une seule de ces méthodes est nécessaire pour évaluer le critère sur iOS.

###### iOS avec VoiceOver

1. Activer le **lecteur d’écran**.
1. Naviguer jusqu’aux boutons de formulaire en utilisant les gestes du lecteur d’écran.
1. Vérifier&nbsp;:
	- que l’intitulé restitué par le lecteur d’écran est pertinent (il permet de comprendre l’action du bouton)&nbsp;;
	- que l’intitulé visible est contenu dans l’intitulé restitué par le lecteur d’écran.
1. Si c’est le cas, le critère est validé.

###### iOS avec le contrôle vocal

1. Activer le **contrôle vocal**.
1. Repérer dans l’écran les boutons de formulaire.
1. Vérifier&nbsp;:
	- que l’intitulé détecté par le contrôle vocal (infobulle grise) est pertinent (il permet de comprendre l’action du bouton)&nbsp;;
	- que l’intitulé visible est contenu dans l’intitulé détecté par le contrôle vocal (infobulle grise)&nbsp;;
1. Si c’est le cas, le critère est validé.

###### Android 

1. Activer le **lecteur d’écran**.
1. Naviguer jusqu’aux boutons de formulaire en utilisant les gestes du lecteur d’écran.
1. Vérifier&nbsp;:
	- que l’intitulé restitué par le lecteur d’écran est pertinent (il permet de comprendre l’action du bouton)&nbsp;;
	- que l’intitulé visible est contenu dans l’intitulé restitué par le lecteur d’écran.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.5.3 Label in Name (A)](https://www.w3.org/TR/WCAG21/#label-in-name){lang=en}, [4.1.2 Name, Role, Value (A)](https://www.w3.org/TR/WCAG21/#name-role-value){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.2.5.3.1 Label in Name (A)*{lang=en}, *11.4.1.2.1 Name, role, value (A)*{lang=en}, *11.5.2.5 Object information*{lang=en}, *11.5.2.8 Label relationships*{lang=en}

#### [Critère 9.6](#crit-9-6) [A] Dans chaque formulaire, les [champs de même nature](glossaire.md#champs-de-meme-nature) sont-ils identifiés, si nécessaire&nbsp;? {id="crit-9-6"}

**[Test 9.6.1](#test-9-6-1)&nbsp;:** Les champs de même nature respectent-ils ces conditions, si nécessaire&nbsp;? {id="test-9-6-1"}
- Les champs sont regroupés dans un élément commun&nbsp;;
- Le regroupement possède un titre pertinent.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Activer le **lecteur d’écran**.
1. Repérer dans l’écran les champs de même nature qui nécessitent d’être regroupés (par exemple, les champs de saisies des différentes suites de chiffres d’un code de carte bleue).
1. Vérifier&nbsp;:
	- qu’une information est restituée à la prise de focus sur le premier champ, qui permette d’identifier le groupe auquel appartient le champ (bien que cela soit important pour les utilisateurs, il n’est pas requis que l’information du regroupement soit restituée sur chacun des champs de formulaire, mais seulement au moins sur le premier champ du regroupement)&nbsp;;
	- que l’information restituée est pertinente, c’est-à-dire qu’elle permet de comprendre quelle est la nature du regroupement.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.1 Info and Relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships){lang=en}, [3.3.2 Labels or Instructions (A)](https://www.w3.org/TR/WCAG21/#labels-or-instructions){lang=en}. 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.3.1 Info and Relationships, 11.3.3.2 Labels or Instructions*{lang=en}

#### [Critère 9.7](#crit-9-7) [A] Les champs de formulaire obligatoires sont-ils correctement identifiés (hors cas particuliers)&nbsp;? {id="crit-9-7"}

**[Test 9.7.1](#test-9-7-1)&nbsp;:** Chaque champ de formulaire obligatoire vérifie-t-il ces conditions&nbsp;?  {id="test-9-7-1"}
- Le caractère obligatoire est visible&nbsp;;
- Le caractère obligatoire est accessible aux technologies d’assistance.

##### Cas particulier 

Le critère est non applicable lorsque le formulaire comporte un seul champ de formulaire ou qu’il indique les champs optionnels de manière&nbsp;:
- visible&nbsp;;
- dans l’étiquette du champ.

Dans le cas où l’ensemble des champs d’un formulaire sont obligatoires, le critère reste applicable. 

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android 

1. Activer le **lecteur d’écran**.
1. Valider le formulaire sans saisir de données afin d’identifier les champs obligatoires.
1. Pour chaque champ obligatoire, Vérifier&nbsp;:
	- que les informations restituées par le lecteur d’écran à la prise de focus sur le champ contiennent la mention du caractère obligatoire&nbsp;;
	- et qu’un texte visible à proximité du champ indique le caractère obligatoire du champ de formulaire.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [3.3.2 Labels or Instructions (A)](https://www.w3.org/TR/WCAG21/#labels-or-instructions){lang=en}. 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.3.3.2 Labels or Instructions (A)*{lang=en}.

#### [Critère 9.8](#crit-9-8) [A] Pour chaque champ de formulaire obligatoire, le type de données et/ou de format attendu est-il disponible&nbsp;? {id="crit-9-8"}

**[Test 9.8.1](#test-9-8-1)&nbsp;:** Chaque champ de formulaire obligatoire respecte-t-il ces conditions&nbsp;? {id="test-9-8-1"}
- Le type de données et/ou de format est visible&nbsp;;
- Le type de données et/ou de format est accessible aux technologies d’assistance.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android 

1. Activer le **lecteur d’écran**.
1. Remplir les champs de formulaire avec des valeurs susceptibles de provoquer des erreurs de saisies (entrer une adresse *e-mail*{lang=en} mal formée par exemple).
1. Valider le formulaire.
1. Pour chaque champ de formulaire obligatoire qui possède un contrôle du format (qui sera présenté avec une erreur après la validation), vérifier&nbsp;:
	- que le type de données et/ou le format attendu sont restitués par le lecteur d’écran à la prise de focus sur le champ&nbsp;;
	- qu’un texte visible à proximité du champ indique le type de données et/ou le format attendu.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [3.3.2 Labels or Instructions (A)](https://www.w3.org/TR/WCAG21/#labels-or-instructions){lang=en}. 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.3.3.2 Labels or Instructions (A)*{lang=en}. 

#### [Critère 9.9](#crit-9-9) [A] Dans chaque formulaire, les erreurs de saisie sont-elles accessibles&nbsp;? {id="crit-9-9"}

**[Test 9.9.1](#test-9-9-1)&nbsp;:** Chaque erreur de saisie respecte-t-elle ces conditions&nbsp;? {id="test-9-9-1"}
- L’erreur de saisie est visible&nbsp;;
- L’erreur de saisie est accessible aux technologies d’assistance.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android 

1. Activer le **lecteur d’écran**.
1. Remplir les champs de formulaire avec des valeurs susceptibles de provoquer des erreurs de saisie (laisser un champ vide, entrer une adresse e-mail mal formée par exemple).
1. Valider le formulaire.
1. Pour chaque champ en erreur, vérifier&nbsp;: 
	- que le message d’erreur est visible à proximité du champ&nbsp;;
	- que le message d’erreur est restitué par le lecteur d’écran à la prise de focus sur le champ.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [3.3.1 Error Identification (A)](https://www.w3.org/TR/WCAG21/#error-identification){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.3.3.1.1 Error Identification (A)*{lang=en}

#### [Critère 9.10](#crit-9-10) [AA] Dans chaque formulaire, le [contrôle de saisie](glossaire.md#controle-de-saisie-formulaire) est-il accompagné, si nécessaire, de suggestions des types, formats de données ou valeurs attendus&nbsp;? {id="crit-9-10"}

**[Test 9.10.1](#test-9-10-1)&nbsp;:** Dans chaque formulaire, le contrôle de saisie vérifie-t-il ces conditions&nbsp;?  {id="test-9-10-1"}
- Le contrôle de saisie est accompagné, si nécessaire, de suggestions des types et formats de données attendus&nbsp;;
- Le contrôle de saisie est accompagné, si nécessaire, de suggestions de valeurs attendues.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android 

1. Activer le **lecteur d’écran**.
1. Remplir les champs de formulaire avec des valeurs susceptibles de provoquer des erreurs de saisies (entrer une adresse e-mail mal formée par exemple).
1. Valider le formulaire.
1. Pour chaque champ en erreur qui possède un contrôle du format, vérifier la présence d’un exemple réel de saisie dans le message d’erreur (par exemple, pour une adresse *e-mail*{lang=en}, vérifier la mention d’une adresse réelle sur le modèle &laquo;&nbsp;jean.schmitt@accessibilite.lu&nbsp;&raquo;).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [3.3.3 Error Suggestion (AA)](https://www.w3.org/TR/WCAG21/#error-suggestion){lang=en}. 
- EN 301 549 V3.2.1 (2021-03)&nbsp;:  *11.3.3.3 Error Suggestion (AA)*{lang=en}. 

#### [Critère 9.11](#crit-9-11) [AA] Pour chaque formulaire qui modifie ou supprime des données, ou qui transmet des réponses à un test ou à un examen, ou dont la validation a des conséquences financières ou juridiques, les données saisies peuvent-elles être modifiées, mises à jour ou récupérées par l’utilisateur&nbsp;? {id="crit-9-11"} 

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android 

1. Activer le **lecteur d’écran**.
1. Remplir le formulaire.
1. Pour chaque donnée à caractère financier (par exemple, une indication de revenu), juridique (par exemple, une référence d’acte administratif), personnelle (par exemple, un numéro de téléphone), pour chaque formulaire qui transmet des réponses à un test ou à un examen, vérifier que l’utilisateur peut&nbsp;:
	- modifier ou annuler les données et les actions effectuées sur ces données en cours de saisie (par exemple la saisie du champ et la fonctionnalité d’annulation d’édition du navigateur ne sont pas désactivées)&nbsp;;
    - ou confirmer, de manière explicite, l’envoi de ces données via un mécanisme dédié (par exemple, un champ de formulaire ou une étape supplémentaire).
1. Pour chaque formulaire qui modifie ou supprime des données (par exemple la suppression d’une adresse postale), vérifier que l’utilisateur peut&nbsp;:
    - récupérer les données supprimées en cours de saisie&nbsp;;
    - ou confirmer, de manière explicite, la suppression de ces données via un mécanisme dédié (par exemple, un champ de formulaire ou une étape supplémentaire).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [3.3.4 Error Prevention (Legal, Financial, Data) (AA)](https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data){lang=en}. 
- EN 301 549 V3.2.1 (2021-03)&nbsp;:  *11.3.3.4 Error Prevention (Legal, Financial, Data) (AA)*{lang=en}.

#### [Critère 9.12](#crit-9-12) [AA] Pour chaque champ qui attend une [donnée personnelle de l’utilisateur](glossaire.md#donnee-personnelle-de-l-utilisateur), la saisie est-elle facilitée&nbsp;? {id="crit-9-12"}

**[Test 9.12.1](#test-9-12-1)&nbsp;:** Chaque champ qui attend une donnée personnelle de l’utilisateur respecte-t-il ces conditions&nbsp;?  {id="test-9-12-1"}
- Les [contrôles natifs adéquats de la plateforme](glossaire.md#controles-natifs-de-la-plateforme) sont présentés à l’utilisateur&nbsp;;
- Le champ est compatible avec une fonctionnalité de remplissage automatique.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS 

1. Accéder à chacun des champs de formulaire (taper sur le champ de saisie par exemple pour activer l’apparition des contrôles de saisie).
1. Pour chaque champ qui attend une donnée personnelle sur l’utilisateur, vérifier que les [contrôles natifs adéquats de la plateforme](glossaire.md#controles-natifs-de-la-plateforme) sont présentés à l’utilisateur. Par exemple&nbsp;:
	- pour un champ demandant la saisie de l’adresse *e-mail*{lang=en} de l’utilisateur, le clavier présenté possède le caractère @ sans que l’utilisateur ait de manipulation de clavier à réaliser (comme afficher le clavier secondaire)&nbsp;;
	- pour un champ demandant la saisie d’un numéro de téléphone, le pavé numérique est présenté directement à l’utilisateur&nbsp;;
	- etc.
1. Vérifier que le formulaire est compatible avec un mécanisme de remplissage automatique. Par exemple, iOS permet un remplissage automatique des champs sur la base des dernières valeurs saisies en fonction de leur nature (adresse postale, ville, nom, prénom, adresse *e-mail*{lang=en}). Vérifier que des valeurs pertinentes sont suggérées sur ces champs.
1. Si c’est le cas, le critère est validé.

###### Android 

1. Accéder à chacun des champs de formulaire (taper sur le champ de saisie par exemple pour activer l’apparition des contrôles de saisie).
1. Pour chaque champ qui attend une donnée personnelle sur l’utilisateur, vérifier que les [contrôles natifs adéquats de la plateforme](glossaire.md#controles-natifs-de-la-plateforme) sont présentés à l’utilisateur. Par exemple&nbsp;:
	- pour un champ demandant la saisie de l’adresse *e-mail*{lang=en} de l’utilisateur, le clavier présenté possède le caractère @ sans que l’utilisateur ait de manipulation de clavier à réaliser (comme afficher le clavier secondaire)&nbsp;;
	- pour un champ demandant la saisie d’un numéro de téléphone, le pavé numérique est présenté directement à l’utilisateur&nbsp;;
	- etc.
1. Vérifier que le formulaire est compatible avec un mécanisme de remplissage automatique. Par exemple, Google fournit un système de remplissage automatique sur Android. Aller dans *Paramètres > Système > Langues et saisie > Paramètres avancés > Service de saisie automatique* (selon la version de la plateforme, le chemin d’accès peut être différent) pour activer et paramétrer les données.
1. Sur le formulaire de l’application, vérifier que le système vous propose une option pour remplir automatiquement avec les données renseignées.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.5 Identify Input Purpose (AA)](https://www.w3.org/TR/WCAG21/#identify-input-purpose){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.3.5.1 Identify Input Purpose (AA)*{lang=en}

### [Thématique 10](#topic-10)&nbsp;: Navigation {id="topic-10"}

#### [Critère 10.1](#crit-10-1) [A] Dans chaque écran, l’[ordre de tabulation](glossaire.md#ordre-de-tabulation) au clavier est-il [cohérent](glossaire.md#coherent-ordre-de-lecture)&nbsp;? {id="crit-10-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Connecter un **clavier externe** (et [paramétrer la navigation au clavier](methodologie.md#clavier-externe)).
1. Naviguer sur l’ensemble des éléments de l’écran et vérifier que l’ordre de tabulation reste cohérent. Il n’est pas obligatoire que la tabulation suive l’ordre de lecture naturel (de gauche à droite et de haut en bas par exemple) tant que les éléments sont accessibles dans un ordre cohérent.
1. Repérer dans l’écran les composants (bouton par exemple) qui mettent à jour un contenu (affichage d’élément masqué, mise à jour dynamique de contenus par exemple)&nbsp;: 
	1. activer le composant&nbsp;;
	1. après l’affichage du contenu mis à jour, vérifier que la tabulation reste cohérente.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.4.3 Focus Order (A)](https://www.w3.org/TR/WCAG21/#focus-order){lang=en} 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.2.4.3 Focus Order (A)*{lang=en} 

#### [Critère 10.2](#crit-10-2) [A] Dans chaque écran, l’ordre de restitution par les technologies d’assistance est-il [cohérent](glossaire.md#coherent-ordre-de-lecture)&nbsp;? {id="crit-10-2"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Activer le **lecteur d’écran**.
1. Naviguer sur l’ensemble des éléments de l’écran avec les gestes du lecteur d’écran et vérifier que l’ordre d’accès aux éléments de l’écran (composants interactifs et textes) reste cohérent. Il n’est pas obligatoire que l’ordre suive l’ordre de lecture naturel (de gauche à droite et de haut en bas par exemple) tant que les éléments sont accessibles dans un ordre cohérent qui ne pose pas de problèmes de compréhension.
1. Repérer dans l’écran les composants (bouton par exemple) qui mettent à jour un contenu (affichage d’élément masqué, mise à jour dynamique de contenus par exemple)&nbsp;: 
	1. activer le composant&nbsp;;
	1. après l’affichage du contenu mis à jour, vérifier que le parcours du lecteur d’écran reste cohérent.
1. Si c’est le cas, le critère est validé.

**Exemple de contenu dont l’implémentation pose un problème de compréhension&nbsp;:** une heure d’arrivée et une heure de départ sont affichées à l’écran sous forme de deux blocs d’informations visuelles (heure d’arrivée 17h00&nbsp;; heure de départ 18h00). Le lecteur d’écran atteint séquentiellement &laquo;&nbsp;heure d’arrivée&nbsp;&raquo; puis &laquo;&nbsp;heure de départ&nbsp;&raquo; puis &laquo;&nbsp;17h00&nbsp;&raquo; et enfin &laquo;&nbsp;18h00&nbsp;&raquo;. L’ordre de lecture ne correspond pas à l’ordre visuel, et l’ordre de lecture est problématique puisqu’il ne permet pas de lier les informations entre elles.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.2 Meaningful Sequence (A)](https://www.w3.org/TR/WCAG21/#meaningful-sequence){lang=en}, [2.4.3 Focus Order (A)](https://www.w3.org/TR/WCAG21/#focus-order){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.3.2.1 Meaningful Sequence, 11.2.4.3 Focus Order (A), 11.5.2.10 Text*{lang=en}

#### [Critère 10.3](#crit-10-3) [A] Dans chaque écran, la navigation ne doit pas contenir de [piège au clavier](glossaire.md#piege-au-clavier). Cette règle est-elle respectée&nbsp;? {id="crit-10-3"}

**[Test 10.3.1](#test-10-3-1)&nbsp;:** Dans chaque écran, chaque élément recevant le focus vérifie-t-il une de ces conditions&nbsp;? {id="test-10-3-1"}
- Il est possible d’atteindre l’élément suivant ou précédent pouvant recevoir le focus avec le clavier&nbsp;;
- L’utilisateur est informé d’un mécanisme fonctionnel permettant d’atteindre au clavier l’élément suivant ou précédent pouvant recevoir le focus.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS

1. Connecter un **clavier externe** (et [paramétrer la navigation au clavier](methodologie.md#clavier-externe)).
1. Naviguer sur l’ensemble des éléments de l’écran en utilisant les touches du clavier dédiées (par défaut dans iOS, ce sont les touches <kbd>Tab</kbd> et les flèches de direction qui sont utilisées pour naviguer dans les contenus).
1. Vérifier que&nbsp;:
	 - à partir de la position courante, l’élément focusable suivant ou précédent est atteignable avec les touches de navigation du clavier&nbsp;;
	 - l’élément possédant actuellement le focus propose une méthode utilisable au clavier (par exemple, un raccourci clavier) permettant d’atteindre l’élément suivant ou précédent.
1. Si c’est le cas, le critère est validé.

**Note&nbsp;:** Certains éléments complexes, souvent gérés par la plateforme, peuvent faire appel à des navigations optimisées qui utilisent généralement les flèches de direction pour passer d’une partie du composant à l’autre.
Le test sur le piège au clavier se limite alors à vérifier que le composant peut être atteint et qu’il est possible de passer au composant suivant ou revenir au composant précédent. On ne vérifie pas l’utilisation même du composant dans ce critère.

###### Android

1. Connecter un **clavier externe** (et [paramétrer la navigation au clavier](methodologie.md#clavier-externe)).
1. Naviguer sur l’ensemble des éléments de l’écran en utilisant les touches du clavier (les touches ou la combinaison de touches qui aura été associée dans *Switch Access*{lang=en} pour les paramètres &laquo;&nbsp;Passer à l’option suivante&nbsp;&raquo; et &laquo;&nbsp;Passer à l’option précédente&nbsp;&raquo;).
1. Vérifier que&nbsp;:
	 - à partir de la position courante, l’élément focusable suivant ou précédent est atteignable avec la touche de navigation du clavier&nbsp;;
	 - l’élément possédant actuellement le focus propose une méthode utilisable au clavier (par exemple, un raccourci clavier) permettant d’atteindre l’élément suivant ou précédent.
1. Si c’est le cas, le critère est validé.

**Note&nbsp;:** Certains éléments complexes, souvent gérés par la plateforme, peuvent faire appel à des navigations optimisées qui utilisent généralement les flèches de direction pour passer d’une partie du composant à l’autre.
Le test sur le piège au clavier se limite alors à vérifier que le composant peut être atteint et qu’il est possible de passer au composant suivant ou revenir au composant précédent. On ne vérifie pas l’utilisation même du composant dans ce critère.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.1.1 Keyboard (A)](https://www.w3.org/TR/WCAG21/#keyboard){lang=en}, [2.1.2 No Keyboard Trap (A)](https://www.w3.org/TR/WCAG21/#no-keyboard-trap){lang=en}. 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.2.1.1.1 Keyboard (A), 11.2.1.2 No Keyboard Trap (A)*{lang=en}. 

#### [Critère 10.4](#crit-10-4) [A] Dans chaque écran, les [raccourcis clavier](glossaire.md#raccourci-clavier) n’utilisant qu’une seule touche (lettre minuscule ou majuscule, ponctuation, chiffre ou symbole) sont-ils contrôlables par l’utilisateur&nbsp;?  {id="crit-10-4"}

**[Test 10.4.1](#test-10-4-1)&nbsp;:** Dans chaque écran, chaque raccourci clavier n’utilisant qu’une seule touche (lettre minuscule ou majuscule, ponctuation, chiffre ou symbole) vérifie-t-il l’une de ces conditions&nbsp;? {id="test-10-4-1"}
- Un mécanisme est disponible pour désactiver le raccourci clavier&nbsp;;
- Un mécanisme est disponible pour configurer la touche de raccourci clavier au moyen des touches de modification (<kbd>Ctrl</kbd>, <kbd>Alt</kbd>, <kbd>Maj</kbd>, etc.)&nbsp;;
- Dans le cas d’un composant d’interface, le raccourci clavier qui lui est associé ne peut être activé que si le focus clavier est sur ce composant.

##### Méthodologie d’évaluation {class="disclosure methodo"} 

###### iOS et Android

1. Connecter un **clavier externe** (et [paramétrer la navigation au clavier](methodologie.md#clavier-externe)).
1. Depuis l’application, appuyer successivement sur chacune des touches de caractère imprimable (les lettres minuscules a-z, les majuscules A-Z, les chiffres 0-9, tous les symboles comme $,\*,%,! etc. à partir du moment où ils peuvent être inscrits à l’écran).
1. Si le raccourci clavier est associé à un seul composant isolé de l’écran, vérifier qu’il ne peut être activé que si le focus clavier est à l’intérieur de ce composant.
1. Sinon, si une action est déclenchée, vérifier la présence dans l’application d’un élément de configuration permettant&nbsp;:
	- de désactiver ces raccourcis clavier à touche unique&nbsp;;
	- de configurer ces raccourcis clavier en leur ajoutant une touche de modification <kbd>Ctrl</kbd>, <kbd>Alt</kbd>, <kbd>Maj</kbd>, etc. 
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.1.4 Character Key Shortcuts (A)](https://www.w3.org/TR/WCAG21/#character-key-shortcuts){lang=en}. 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.2.1.4.1 Character Key Shortcuts (A)*{lang=en}.

### [Thématique 11](#topic-11)&nbsp;: Consultation {id="topic-11"}

#### [Critère 11.1](#crit-11-1) [A] Pour chaque écran, l’utilisateur a-t-il le contrôle de chaque [limite de temps modifiant le contenu](glossaire.md#procede-de-rafraichissement) (hors cas particuliers)&nbsp;? {id="crit-11-1"}

**[Test 11.1.1](#test-11-1-1)&nbsp;:** Chaque limite de temps respecte-t-elle une de ces conditions&nbsp;? {id="test-11-1-1"}
- L’utilisateur peut arrêter ou relancer le rafraîchissement&nbsp;;
- L’utilisateur peut augmenter la limite de temps entre deux rafraîchissements de dix fois, au moins&nbsp;;
- L’utilisateur est averti de l’imminence du rafraîchissement et dispose de vingt secondes, au moins, pour augmenter la limite de temps avant le prochain rafraîchissement&nbsp;;
- La limite de temps entre deux rafraîchissements est de vingt heures, au moins.

##### Cas particuliers

Le critère est non applicable lorsque la limite de temps est essentielle, notamment lorsqu’elle ne pourrait pas être supprimée sans changer fondamentalement le contenu ou les fonctionnalités liées au contenu.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer les procédés limitant le temps d’une session (par exemple après une authentification).
1. Vérifier&nbsp;:
	- la présence d’un mécanisme permettant à l’utilisateur de supprimer la limite de temps (par exemple, un bouton à bascule permettant à l’utilisateur d’activer ou désactiver la limite de temps de la session)&nbsp;;
	- ou la présence d’un mécanisme permettant à l’utilisateur d’augmenter la limite de temps (par exemple, une liste déroulante avec des valeurs de temps de connexion disponibles)&nbsp;;
	- ou la présence d’un mécanisme qui avertit l’utilisateur de l’imminence de la limite de temps et laisse 20 secondes, au moins, à l’utilisateur pour augmenter la limite de temps (par exemple, l’ouverture d’une modale avec un bouton permettant d’augmenter la limite de temps)&nbsp;;
	- ou que la limite de temps est de vingt heures, au moins.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.2.1 Timing adjustable (A)](https://www.w3.org/TR/WCAG21/#timing-adjustable){lang=en}, [2.2.2 Pause, Stop, Hide (A)](https://www.w3.org/TR/WCAG21/#pause-stop-hide){lang=en}. 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.2.2.1 Timing adjustable (A), 11.2.2.2 Pause, Stop, Hide (A)*{lang=en}.

#### [Critère 11.2](#crit-11-2) [A] Pour chaque écran, chaque procédé limitant le temps d’une session peut-il être arrêté ou supprimé (hors cas particuliers)&nbsp;? {id="crit-11-2"}

**[Test 11.2.1](#test-11-2-1)&nbsp;:** Chaque procédé limitant le temps d’une session respecte-t-il une de ces conditions&nbsp;? {id="test-11-2-1"}
- L’utilisateur peut supprimer la limite de temps&nbsp;;
- L’utilisateur peut augmenter la limite de temps&nbsp;;
- La limite de temps avant la fin de la session est de vingt heures au moins.

##### Cas particuliers

Le critère est non applicable lorsque la limite de temps est essentielle, notamment lorsqu’elle ne pourrait pas être supprimée sans changer fondamentalement le contenu ou les fonctionnalités liées au contenu.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer les limites de temps de session (par exemple, la déconnexion d’un compte client).
1. Vérifier&nbsp;:
	- la présence d’un mécanisme permettant à l’utilisateur de supprimer la limite de temps (par exemple, un bouton avec un intitulé explicite)&nbsp;;
	- ou la présence d’un mécanisme permettant à l’utilisateur d’augmenter la limite de temps (par exemple, un paramètre disponible dans l’application pour gérer les temps de sessions)&nbsp;;
	- ou que la durée de la session est de vingt heures, au moins.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.2.1 Timing adjustable (A)](https://www.w3.org/TR/WCAG21/#timing-adjustable){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.2.2.1 Timing adjustable*{lang=en} 

#### [Critère 11.3](#crit-11-3) [A] Dans chaque écran, chaque document bureautique en téléchargement possède-t-il, si nécessaire, une [version accessible](glossaire.md#version-accessible) (hors cas particuliers)&nbsp;? {id="crit-11-3"}

**[Test 11.3.1](#test-11-3-1)&nbsp;:** Chaque document bureautique vérifie-t-il une de ces conditions&nbsp;?  {id="test-11-3-1"}
- Le document en téléchargement est compatible avec l’accessibilité&nbsp;;
- Il existe une version alternative du document en téléchargement compatible avec l’accessibilité&nbsp;;
- Il existe une version alternative du document en téléchargement dans l’application accessible aux technologies d’assistance.

##### Cas particuliers

Le critère est non applicable lorsque les documents bureautiques (ex&nbsp;: PDF, documents Microsoft ou libreOffice, etc.) ont été publiés avant le 23 septembre 2018 (sauf si ces contenus sont nécessaires pour les besoins de processus administratifs actifs concernant des tâches effectuées par l’organisme du secteur public concerné), ils sont exemptés de l’obligation d’accessibilité, d’après la loi du [28 mai 2019](http://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo).

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les composants (un lien, un bouton de formulaire ou un formulaire de téléchargement par exemple) permettant de télécharger un fichier au format bureautique (.doc, .docx, .pdf par exemple).
1. Pour chaque fichier proposé au téléchargement, dans un format bureautique, vérifier la présence d’une version alternative présentée comme accessible.
1. Si l’alternative est proposée dans un format bureautique (pdf, odt, doc, docx, EPUB/DAISY)&nbsp;: 
	- télécharger le fichier de l’alternative proposée&nbsp;; 
	- vérifier que l’ensemble des contenus est conforme avec la [liste des critères Documents bureautiques en téléchargement (format Docx, 66 kilo-octets)](/fr/rgaa4/files/liste-criteres-documents-bureautiques-telechargement-RGAA.docx).
1. Si l’alternative est proposée dans l’application, vérifier que le contenu est conforme au présent référentiel.
1. Sinon, pour les documents au format bureautique (pdf, odt, doc, docx, EPUB/DAISY)&nbsp;: 
	- télécharger le fichier&nbsp;; 
	- vérifier que l’ensemble des contenus est conforme avec la [liste des critères Documents bureautiques en téléchargement (format Docx, 66 kilo-octets)](/fr/rgaa4/files/liste-criteres-documents-bureautiques-telechargement-RGAA.docx).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Non-text Content (A)](https://www.w3.org/TR/WCAG21/#non-text-content){lang=en}, [1.3.1 Info and Relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships){lang=en}, [1.3.2 Meaningful Sequence (AA)](https://www.w3.org/TR/WCAG21/#meaningful-sequence){lang=en}, [2.4.1 Bypass Blocks (AA)](https://www.w3.org/TR/WCAG21/#bypass-blocks){lang=en}, [2.4.3 Focus Order (A)](https://www.w3.org/TR/WCAG21/#focus-order){lang=en}, [3.1.1 Language of Page (A)](https://www.w3.org/TR/WCAG21/#language-of-page){lang=en}, [4.1.2 Name, Role, Value (A)](https://www.w3.org/TR/WCAG21/#name-role-value){lang=en}. 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: tous les critères de la section 10 *Non-web documents*{lang=en}.

#### [Critère 11.4](#crit-11-4) [A] Pour chaque document bureautique ayant une [version accessible](glossaire.md#version-accessible), cette version offre-t-elle la même information (hors cas particuliers)&nbsp;? {id="crit-11-4"}

##### Cas particuliers

Le critère est non applicable lorsque les documents bureautiques (ex&nbsp;: PDF, documents Microsoft ou libreOffice, etc.) ont été publiés avant le 23 septembre 2018 (sauf si ces contenus sont nécessaires pour les besoins de processus administratifs actifs concernant des tâches effectuées par l’organisme du secteur public concerné), ils sont exemptés de l’obligation d’accessibilité, d’après la loi du [28 mai 2019](http://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo).

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Pour chaque fichier proposé au téléchargement dans un format bureautique qui possède une version alternative présentée comme accessible, vérifier que les deux documents (le document d’origine et la version accessible dans un format bureautique ou dans l’application) offrent la même information.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Non-text Content (A)](https://www.w3.org/TR/WCAG21/#non-text-content){lang=en}, [1.3.1 Info and Relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships){lang=en}, [1.3.2 Meaningful Sequence (AA)](https://www.w3.org/TR/WCAG21/#meaningful-sequence){lang=en}, [2.4.1 Bypass Blocks (AA)](https://www.w3.org/TR/WCAG21/#bypass-blocks){lang=en}, [2.4.3 Focus Order (A)](https://www.w3.org/TR/WCAG21/#focus-order){lang=en}, [3.1.1 Language of Page (A)](https://www.w3.org/TR/WCAG21/#language-of-page){lang=en}, [4.1.2 Name, Role, Value (A)](https://www.w3.org/TR/WCAG21/#name-role-value){lang=en}. 
- EN 301 549 V3.2.1 (2021-03)&nbsp;:  tous les critères de la section 10 *Non-web documents*{lang=en}.

#### [Critère 11.5](#crit-11-5) [A] Dans chaque écran, chaque contenu cryptique (art ASCII, émoticon, syntaxe cryptique) a-t-il une alternative&nbsp;? {id="crit-11-5"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les contenus cryptiques (art ascii, émoticône, syntaxe cryptique).
1. Vérifier qu’une définition est disponible dans le contexte adjacent (immédiatement avant ou après le contenu cryptique, dans le texte adjacent ou via l’activation d’un composant d’interface).
1. Sinon, activer le **lecteur d’écran**.
1. Naviguer jusqu’au contenu cryptique et vérifier qu’une alternative est restituée.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Non-text Content (A)](https://www.w3.org/TR/WCAG21/#non-text-content){lang=en}. 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.1.1.1 Non-text Content (A)*{lang=en}. 

#### [Critère 11.6](#crit-11-6) [A] Dans chaque écran, pour chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) ayant une alternative, cette alternative est-elle pertinente&nbsp;? {id="crit-11-6"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Pour chaque contenu cryptique qui possède une alternative, vérifier que l’alternative donnée est pertinente (elle permet de comprendre le contenu ou la fonction).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Non-text Content (A)](https://www.w3.org/TR/WCAG21/#non-text-content){lang=en}. 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.1.1.1 Non-text Content (A)*{lang=en}. 

#### [Critère 11.7](#crit-11-7) [A] Dans chaque écran, les [changements brusques de luminosité ou les effets de flash](glossaire.md#changement-brusque-de-luminosite-ou-effet-de-flash) sont-ils correctement utilisés&nbsp;? {id="crit-11-7"}

**[Test 11.7.1](#test-11-7-1)&nbsp;:** Les changements brusques de luminosité ou les effets de flash vérifient-ils une de ces conditions&nbsp;? {id="test-11-7-1"}
- La fréquence de l’effet est inférieure à 3 par seconde&nbsp;;
- La surface totale cumulée des effets est inférieure ou égale à 21 824 pixels.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les contenus clignotants ou qui provoquent des effets de flash&nbsp;: élément graphique animé, vidéo ou animation, effet de mise en forme.
1. Vérifier&nbsp;:
	- que la fréquence de l’effet est inférieure à 3 flashs par seconde&nbsp;;
	- ou que la surface cumulée est inférieure à 21824 pixels.
1. Si c’est le cas, le critère est validé.

Note&nbsp;: L’outil [PEAT](https://trace.umd.edu/peat/) permet d’analyser les vidéos au format .avi.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.3.1 Three Flashes or Below Threshold (A)](https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold){lang=en}.
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.2.3.1 Three Flashes or Below Threshold (A)*{lang=en}.

#### [Critère 11.8](#crit-11-8) [A] Dans chaque écran, chaque contenu en mouvement ou clignotant est-il [contrôlable](glossaire.md#controle-contenu-en-mouvement-ou-clignotant) par l’utilisateur&nbsp;? {id="crit-11-8"}

**[Test 11.8.1](#test-11-8-1)&nbsp;:** Chaque contenu en mouvement ou clignotant respecte-t-il une de ces conditions&nbsp;? {id="test-11-8-1"}
- La durée du mouvement ou du clignotement est inférieure ou égale à 5 secondes&nbsp;;
- L’utilisateur peut arrêter et relancer le mouvement ou le clignotement&nbsp;;
- L’utilisateur peut afficher et masquer le contenu en mouvement ou clignotant&nbsp;;
- L’utilisateur peut afficher la totalité de l’information sans le mouvement ou le clignotement.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les contenus en mouvement ou clignotants (un élément graphique, un effet de mise en forme, un carrousel par exemple) déclenchés automatiquement au chargement de l’écran ou lors de l’affichage d’un contenu (cf. note).
1. Vérifier&nbsp;:
	- que la durée totale du mouvement ou du clignotement est inférieure à 5 secondes&nbsp;;
	- ou la présence d’un mécanisme (un bouton par exemple) qui permet d’arrêter et de relancer le mouvement ou le clignotement&nbsp;;
	- ou la présence d’un mécanisme (un bouton par exemple) qui permet de cacher et d’afficher à nouveau le contenu en mouvement ou clignotant&nbsp;;
	- ou la présence d’un mécanisme (un bouton par exemple) qui permet d’afficher le contenu sans mouvement ou clignotement.
1. Si c’est le cas, le critère est validé.

**Note&nbsp;:**
- l’arrêt ou la mise en pause d’un contenu en mouvement ou clignotant via la prise de focus (l’effet est suspendu uniquement pendant la prise de focus mais reprend une fois la prise de focus perdue) ou au toucher sur le contenu en mouvement (l’effet est suspendu uniquement pendant qu’une pression est effectuée sur le contenu, mais reprend une fois la pression relâchée) ne sont pas considérés comme des procédés conformes.
- dans certains cas, le mouvement ne peut pas être arrêté, par exemple, une barre de progression, dans ce cas, le critère est non applicable.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.2.1 Timing Adjustable (A)](https://www.w3.org/TR/WCAG21/#timing-adjustable){lang=en}, [2.2.2 Pause, Stop, Hide (A)](https://www.w3.org/TR/WCAG21/#pause-stop-hide){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.2.2.1 Timing Adjustable (A), 11.2.2.2 Pause, Stop, Hide (A)*{lang=en}

#### [Critère 11.9](#crit-11-9) [AA] Dans chaque écran, le contenu proposé est-il consultable quelle que soit l’orientation de l’écran (portrait ou paysage) (hors cas particuliers)&nbsp;? {id="crit-11-9"}

**[Test 11.9.1](#test-11-9-1)&nbsp;:** Dans chaque écran, chaque contenu vérifie-t-il ces conditions&nbsp;? {id="test-11-9-1"}
- La consultation est possible quel que soit le mode d’orientation de l’écran&nbsp;;
- Le contenu proposé reste le même quel que soit le mode d’orientation de l’écran même si sa présentation et le moyen d’y accéder peuvent différer.

##### Cas particuliers

Le critère est non applicable lorsque l’orientation du périphérique est essentielle à l’utilisation de l’application, par exemple&nbsp;: interfaces de jeu, de piano, etc.
Si l’interface est le seul moyen d’accéder au service proposé, une alternative devrait être mise en place.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS

1. Ouvrir le **Centre de contrôle**.
1. Vérifier que l’orientation de l’écran n’est pas verrouillée dans les paramètres de la plateforme ([voir la documentation officielle](https://support.apple.com/fr-fr/guide/iphone/iph3badf94ec/ios)).
1. Afficher l’application et basculer le terminal alternativement en mode paysage et portrait.
1. Vérifier&nbsp;: 
	- que l’application est utilisable dans les deux orientations, c’est-à-dire que les éléments de l’application sont repositionnés pour être lisibles&nbsp;; 
	- que les contenus disponibles dans une orientation sont toujours disponibles dans l’autre orientation (directement ou par l’activation d’un composant supplémentaire par exemple).
1. Si c’est le cas, le critère est validé.

###### Android

1. Ouvrir le panneau de **configuration rapide**.
1. Vérifier que le paramètre &laquo;&nbsp;Rotation automatique&nbsp;&raquo; est activé ([voir la documentation officielle](https://support.google.com/android/answer/9083864?hl=fr)).
1. Afficher l’application et basculer le terminal alternativement en mode paysage et portrait.
1. Vérifier&nbsp;: 
	- que l’application est utilisable dans les deux orientations, c’est-à-dire que les éléments de l’application sont repositionnés pour être lisibles&nbsp;;
	- que les contenus disponibles dans une orientation sont toujours disponibles dans l’autre orientation (directement ou par l’activation d’un composant supplémentaire par exemple).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.4 Orientation (AA)](https://www.w3.org/TR/WCAG21/#orientation){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.1.3.4 Orientation*{lang=en}

#### [Critère 11.10](#crit-11-10) [A] Dans chaque écran, les fonctionnalités activables au moyen d’un [geste complexe](glossaire.md#gestes-complexes-et-gestes-simples) sont-elles activables au moyen d’un [geste simple](glossaire.md#gestes-complexes-et-gestes-simples) (hors cas particuliers)&nbsp;? {id="crit-11-10"}

##### Cas particuliers

Le critère est non applicable pour les éléments suivants&nbsp;:
- Les gestes requis par la plateforme.
- Les fonctionnalités pour lesquelles la réalisation d’un geste complexe est essentielle (exécuter le tracé d’une signature, par exemple).

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les fonctionnalités qui nécessitent de réaliser des gestes complexes (repérer la présence de consignes dans l’interface ou dans une documentation associée à l’application), par exemple&nbsp;:
	- l’utilisation simultanée de deux doigts ou plus&nbsp;;
	- la réalisation d’un tracé de trajectoire (comme le geste *swipe*{lang=en}).
1. Vérifier qu’il existe une méthode alternative pour réaliser l’action associée avec un geste simple, par exemple l’appui sur une seule touche du clavier ou un bouton. 
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.5.1 Pointer Gestures (A)](https://www.w3.org/TR/WCAG21/#pointer-gestures){lang=en}. 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *5.5.1 Means of operation, 5.9 Simultaneous user actions, 11.2.5.1 Pointer Gestures*{lang=en}

#### [Critère 11.11](#crit-11-11) [A] Dans chaque écran, les fonctionnalités activables par la réalisation d’actions simultanées sont-elles activables au moyen d’une action unique. Cette règle est-elle respectée (hors cas particuliers)&nbsp;? {id="crit-11-11"}

##### Cas particuliers

Le critère est non applicable pour les actions requises par la plateforme.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les fonctionnalités qui nécessitent la réalisation de deux actions simultanées, par exemple&nbsp;: 
	- l’utilisation simultanée de deux touches d’un clavier ou plus&nbsp;;
	- devoir énoncer une commande vocale et toucher l’écran en même temps pour réaliser une action.
1. Vérifier qu’il existe dans l’écran ou l’application une méthode alternative pour réaliser l’action associée avec une action unique, par exemple l’appui sur un bouton. 
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *5.9 Simultaneous user actions*{lang=en}

#### [Critère 11.12](#crit-11-12) [A] Dans chaque écran, les actions déclenchées au moyen d’un dispositif de pointage sur un point unique de l’écran peuvent-elles faire l’objet d’une annulation (hors cas particuliers)&nbsp;? {id="crit-11-12"}

**[Test 11.12.1](#test-11-12-1)&nbsp;:** Dans chaque écran, les actions déclenchées au moyen d’un dispositif de pointage sur un point unique de l’écran vérifient-elles l’une de ces conditions (hors cas particuliers)&nbsp;? {id="test-11-12-1"}
- L’action est déclenchée au moment où le dispositif de pointage est relâché ou relevé&nbsp;;
- L’action est déclenchée au moment où le dispositif de pointage est pressé ou posé puis annulée lorsque le dispositif de pointage est relâché ou relevé&nbsp;;
- L’[action est complexe](glossaire.md#action-complexe) et un mécanisme est disponible pour abandonner (avant achèvement de l’action) ou annuler (après achèvement) l’exécution de l’action.

##### Cas particuliers

Le critère est non applicable lorsque la fonctionnalité nécessite que le comportement attendu soit réalisé lors d’un événement descendant, par exemple, un émulateur de clavier dont les touches doivent s’activer à la pression comme sur un clavier physique.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les composants interactifs (par exemple, bouton ou lien).
1. Pour chaque composant interactif, effectuer un appui simple dessus et conserver la pression.
1. Déplacer le doigt en dehors de la zone interactive et constater que l’action associée n’est pas déclenchée.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.5.2 Pointer Cancellation (A)](https://www.w3.org/TR/WCAG21/#pointer-cancellation){lang=en} 
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.2.5.2 Pointer Cancellation (A)*{lang=en}

#### [Critère 11.13](#crit-11-13) [A] Dans chaque écran, les fonctionnalités qui impliquent un mouvement de l’appareil ou vers l’appareil peuvent-elles être satisfaites de manière alternative (hors cas particuliers)&nbsp;? {id="crit-11-13"}

**[Test 11.13.1](#test-11-13-1)&nbsp;:** Chaque fonctionnalité qui implique un mouvement de l’appareil ou vers l’appareil respecte-t-elle ces conditions&nbsp;? {id="test-11-13-1"}
- La fonctionnalité peut être déclenchée avec un composant d’interface&nbsp;;
- L’utilisateur a la possibilité de désactiver la détection du mouvement pour éviter un déclenchement accidentel de la fonctionnalité.

##### Cas particuliers

Le critère est non applicable lorsque&nbsp;:
- Le mouvement est essentiel à l’accomplissement de la fonctionnalité (ex. podomètre).
- La détection du mouvement est utilisée pour contrôler une fonctionnalité au travers d’une interface compatible avec l’accessibilité.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les fonctionnalités qui se déclenchent au moyen d’un mouvement de l’appareil ou d’un geste vers l’appareil (repérer par exemple la présence de consignes dans l’interface ou dans une documentation associée à l’application qui décrive ce type de déclenchement).
1. Vérifier&nbsp;:
	- que la fonctionnalité peut être déclenchée sans mouvement, par exemple par l’activation d’un bouton ou d’un lien&nbsp;;
	- et que l’application propose une méthode pour désactiver la détection du mouvement (par exemple, un paramètre dans l’application).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.5.4 Motion Actuation (A)](https://www.w3.org/TR/WCAG21/#motion-actuation){lang=en}
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *5.5.1 Means of operation, 11.2.5.4 Motion Actuation (A)*{lang=en}

#### [Critère 11.14](#crit-11-14) [AA] Pour chaque fonctionnalité de conversion d’un document, les [informations relatives à l’accessibilité](glossaire.md#information-d-accessibilite) disponibles dans le document source sont-elles conservées dans le document de destination (hors cas particuliers)&nbsp;? {id="crit-11-14"}

Sont concernés tous les formats numériques tels que le texte, l’audio et la vidéo.

##### Cas particuliers

Le critère est non applicable lorsque le format de conversion ne dispose pas des éléments nécessaires à l’identification des informations d’accessibilité. Par exemple, si la conversion se fait depuis un format HTML vers un format TXT, alors le critère est non applicable.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les fonctionnalités de conversion de document (par exemple exportation en PDF, en .odt, HTML etc.)
1. Repérer dans le contenu original les informations d’accessibilité présentes (par exemple, une alternative d’un élément graphique, des niveaux de titres, une table des matières).
1. Vérifier que dans le document résultant de la conversion, les informations d’accessibilité sont toujours présentes (sauf si le format de conversion choisi ne possède pas de support pour les informations d’accessibilité du document source).
1. Si c’est le cas, le test est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *5.4 Preservation of accessibility information during conversion*{lang=en}

#### [Critère 11.15](#crit-11-15) [A] Chaque fonctionnalité d’identification ou de contrôle de l’application qui repose sur l’utilisation de [caractéristique biologique](glossaire.md#caracteristique-biologique) de l’utilisateur, dispose-t-elle d’une méthode alternative&nbsp;? {id="crit-11-15"}

**[Test 11.15.1](#test-11-15-1)&nbsp;:** Chaque fonctionnalité d’identification ou de contrôle de l’application qui repose sur l’utilisation de caractéristique biologique de l’utilisateur respecte-t-elle une de ces conditions&nbsp;? {id="test-11-15-1"}
- Il existe une alternative qui ne repose pas sur une caractéristique biologique de l’utilisateur&nbsp;;
- Il existe une alternative qui repose sur une caractéristique biologique de l’utilisateur qui soit suffisamment différente.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’écran les fonctionnalités d’identification (authentification) et de contrôle qui reposent sur l’utilisation de caractéristiques biologiques (par exemple reconnaissance vocale, empreinte digitale, reconnaissance faciale). 
1. Vérifier qu’il existe une méthode alternative pour réaliser l’action, par exemple&nbsp;: 
	- pour une fonctionnalité d’authentification qui passe par une reconnaissance d’empreinte digitale, un bouton est disponible sur l’écran de connexion pour accéder à la saisie d’un mot de passe à la place.
	- pour une fonctionnalité d’authentification qui passe par une reconnaissance vocale, l’application propose également une reconnaissance d’empreinte digitale (si la méthode alternative repose également sur une caractéristique biologique, il est souhaitable qu’elle n’implique pas une caractéristique biologique similaire. Par exemple, si la méthode initiale implique la voix, la méthode alternative ne devrait pas impliquer la voix.) 
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *5.3 Biometrics*{lang=en}

#### [Critère 11.16](#crit-11-16) [A] Pour chaque application qui intègre une fonctionnalité de [répétition des touches](glossaire.md#repetition-des-touches), la répétition est-elle ajustable (hors cas particuliers)&nbsp;? {id="crit-11-16"}

**[Test 11.16.1](#test-11-16-1)&nbsp;:** Pour chaque application qui intègre une fonctionnalité de répétition des touches, les conditions suivantes sont-elles respectées&nbsp;? {id="test-11-16-1"}
- Le délai de déclenchement de la fonction de répétition peut être paramétré à 2 secondes au moins&nbsp;;
- Le délai entre deux répétitions peut être paramétré au moins à 2 secondes.

##### Cas particuliers

Le critère est non applicable&nbsp;: 
- Pour les répétitions de touches gérées au niveau de la plateforme&nbsp;;
- Pour les applications qui disposent d’une méthode permettant de désactiver la fonctionnalité de répétition des touches.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’application la présence d’une fonctionnalité de répétition de touches (repérer par exemple la présence de consignes dans l’interface ou dans une documentation associée à l’application).
1. Vérifier que le délai de déclenchement de la fonction de répétition (le délai entre la toute première pression de touche à répéter et la mise en œuvre de la fonction de répétition)&nbsp;:
	- est de 2 secondes au moins&nbsp;;
	- ou qu’il existe une méthode permettant de le paramétrer à 2 secondes au moins (par exemple, un champ de saisie dans les paramètres utilisateurs de l’application). 
1. Vérifier que le délai entre deux répétitions&nbsp;: 
	- est de 2 secondes au moins&nbsp;;
	- ou qu’il existe une méthode permettant de le paramétrer à 2 secondes au moins (par exemple, un champ de saisie dans les paramètres utilisateurs de l’application).
1. Si c’est le cas, le test est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *5.7 Key repeat*{lang=en}

### [Thématique 12](#topic-12)&nbsp;: Documentation et fonctionnalités d’accessibilité {id="topic-12"}

#### [Critère 12.1](#crit-12-1) [AA] La documentation de l’application décrit-elle les [fonctionnalités d’accessibilité](glossaire.md#fonctionnalite-d-accessibilite) de l’application et leur utilisation&nbsp;? {id="crit-12-1"}

**[Test 12.1.1](#test-12-1-1)&nbsp;:** La documentation de l’application inclut-elle les éléments suivants au moins&nbsp;? {id="test-12-1-1"}
- Une description des fonctionnalités d’accessibilité de l’application&nbsp;;
- Une explication de l’utilisation des fonctionnalités d’accessibilité de l’application&nbsp;; 
- Des informations concernant l’accessibilité de la plateforme et sa compatibilité avec les technologies d’assistance.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’application la présence d’une documentation, par exemple&nbsp;: 
	- un écran d’aide&nbsp;;
	- une [déclaration d’accessibilité](../obligations.html#déclaration-daccessibilité)&nbsp;; 
	- tout autre contenu qui fait office de documentation.
1. Repérer dans l’application la présence de fonctionnalités d’accessibilité.
1. Vérifier la présence dans la documentation&nbsp;: 
	- de la description des fonctionnalités d’accessibilité de l’application, par exemple&nbsp;: 
		- des paramètres d’accessibilité intégrés dans l’application comme la gestion des couleurs, des tailles de polices, la gestion des animations&nbsp;;
		- un rotor personnalisé sur certains écrans (le rotor est une fonctionnalité des lecteurs d’écran qui permet une navigation rapide entre des types d’éléments d’un écran, certaines plateformes permettent de définir des éléments de navigation rapide spécifique à une application dans ce rotor. [Voir une démonstration](https://developer.apple.com/videos/play/wwdc2020/10116/))&nbsp;; 
		- des gestes ou mouvements d’appareil qui déclenchent des fonctionnalités&nbsp;;  
		- des raccourcis clavier spéciaux disponibles pour certaines technologies d’assistance.
	- de la description des composants complexes pour lesquels il est mis en place une gestion particulière selon les technologies d’assistance&nbsp;;
	- d’explications sur les modalités d’utilisation de ces fonctionnalités (leur localisation, les méthodes pour les activer)&nbsp;; 
	- de la description des éléments non conformes ou non compatibles avec certaines technologies d’assistance, et de la présence d’alternatives le cas échéant.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *12.1.1 Accessibility and compatibility features*{lang=en}

#### [Critère 12.2](#crit-12-2) [A] Pour chaque [fonctionnalité d’accessibilité](glossaire.md#fonctionnalite-d-accessibilite) décrite dans la documentation, l’ensemble du parcours qui permet de l’activer répond aux besoins d’accessibilité des utilisateurs qui en ont besoin. Cette règle est-elle respectée (hors cas particuliers)&nbsp;? {id="crit-12-2"}

##### Cas particuliers

Le critère est non applicable pour les fonctionnalités intégrées à la plateforme.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’application les fonctionnalités d’accessibilité décrites dans la documentation. Par exemple&nbsp;: 
	- une fonctionnalité qui permet d’accéder à une version en langage simplifié de l’application&nbsp;;
	- une fonctionnalité qui permet de verrouiller l’orientation d’un écran.
1. Vérifier qu’il est possible pour les utilisateurs qui ont besoin&nbsp;:
	- de percevoir la présence de cette fonctionnalité dans l’interface&nbsp;;
	- d’activer cette fonctionnalité, par exemple, une fonctionnalité est disponible qui permet d’accéder à une version en langage simplifié de l’application, alors tous les composants qui composent le parcours permettant d’atteindre la fonctionnalité doivent être en langage simplifié.
1. Si c’est le cas, le critère est validé. 

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *5.2 Activation of accessibility features*{lang=en}

#### [Critère 12.3](#crit-12-3) [A] L’application ne perturbe pas les fonctionnalités d’accessibilité de la plateforme. Cette règle est-elle respectée&nbsp;? {id="crit-12-3"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS

1. Identifier dans la documentation de la plateforme les fonctionnalités d’accessibilité mises à disposition des utilisateurs (voir la [documentation concernant les fonctionnalités d’accessibilité fournie par iOS](https://www.apple.com/fr/accessibility/?afid=p238%7CsfxtLHWp4-dc_mtid_2092576239937_pcrid_483515907294_pgrid_110868765821_&cid=wwa-fr-kwgo-features--slid---productid---Accessibility-Accessibility-)).
1. Vérifier que l’application n’empêche pas leur utilisation, par exemple&nbsp;:
	- si l’application implémente des interactions qui déclenchent des fonctionnalités, ces interactions n’empêchent pas le bon fonctionnement des fonctionnalités d’accessibilité de la plateforme comme le lecteur d’écran ou les autres fonctionnalités basées sur le toucher&nbsp;;
	- si l’application embarque une reconnaissance vocale, alors l’utilisation de la commande vocale intégrée à la plateforme n’est pas perturbée&nbsp;; 
	- si l’application implémente des raccourcis clavier, ceux-ci n’utilisent pas des combinaisons de touches déjà employées par la plateforme pour des fonctionnalités d’accessibilité ([VoiceOver peut être utilisé avec un clavier](https://support.apple.com/fr-fr/guide/iphone/iph6c494dc6/ios) par exemple, les raccourcis proposés ne doivent pas interférer)&nbsp;;
	- ou toute autre fonctionnalité de l’application.
1. Si c’est le cas, le critère est validé.

###### Android

1. Identifier dans la documentation de la plateforme les fonctionnalités d’accessibilité mises à disposition des utilisateurs (voir la [documentation concernant les fonctionnalités d’accessibilité fournie par Android](https://support.google.com/accessibility/android/answer/6006564?hl=fr)).
1. Vérifier que l’application n’empêche pas leur utilisation, par exemple&nbsp;:
	- si l’application implémente des interactions qui déclenchent des fonctionnalités, ces interactions n’empêchent pas le bon fonctionnement des fonctionnalités d’accessibilité de la plateforme comme le lecteur d’écran ou les autres fonctionnalités basées sur le toucher&nbsp;;
	- si l’application embarque une reconnaissance vocale, alors l’utilisation de la commande vocale intégrée à la plateforme n’est pas perturbée&nbsp;;
	- si l’application implémente des raccourcis clavier, ceux-ci n’utilisent pas des combinaisons de touches déjà employées par la plateforme pour des fonctionnalités d’accessibilité ([TalkBack peut être utilisé avec un clavier](https://support.google.com/accessibility/android/answer/6110948?hl=fr&ref_topic=10602074) par exemple, les raccourcis proposés ne doivent pas interférer)&nbsp;; 
	- ou toute autre fonctionnalité de l’application.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.6.2 No disruption of accessibility features*{lang=en}

#### [Critère 12.4](#crit-12-4) [A] La documentation de l’application est-elle accessible&nbsp;? {id="crit-12-4"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’application la présence d’une documentation, par exemple&nbsp;: 
	- un écran d’aide&nbsp;;
	- une [déclaration d’accessibilité](../obligations.html#déclaration-daccessibilité)&nbsp;; 
	- tout autre contenu qui fait office de documentation (cela peut être un document pdf, une page HTML externe lisible dans un navigateur web).
1. Si c’est le cas, vérifier pour chaque élément de documentation&nbsp;: 
	- s’il s’agit d’une page web, qu’il respecte le [RGAA](../rgaa4/criteres.html)&nbsp;; 
	- s’il s’agit d’un document bureautique, qu’il respecte la [liste des critères Documents bureautiques en téléchargement (format Docx, 66 kilo-octets)](/fr/rgaa4/files/liste-criteres-documents-bureautiques-telechargement-RGAA.docx)&nbsp;;
	- s’il s’agit d’un écran de l’application, que le présent référentiel est respecté (la page **[Obligations](../obligations.html)** détaille par ailleurs que les écrans relatifs à la documentation doivent être inclus dans l’échantillon d’évaluation).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *12.1.2 Accessible documentation, 12.2.4 Accessible documentation*{lang=en}

### [Thématique 13](#topic-13)&nbsp;: Outils d’édition {id="topic-13"}

#### [Critère 13.1](#crit-13-1) [A] L’[outil d’édition](glossaire.md#outil-d-edition) permet-il de définir les [informations d’accessibilité](glossaire.md#information-d-accessibilite) nécessaires pour créer un contenu conforme&nbsp;? {id="crit-13-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’outil les fonctionnalités d’édition (par exemple, un éditeur de texte, mais cela peut être une médiathèque ou toute autre interface qui permet de saisir du texte ou définir des propriétés).
1. Vérifier qu’il est possible de définir les informations d’accessibilité nécessaires pour rendre le contenu conforme au RGAA. Par exemple&nbsp;: 
	 - définir l’alternative textuelle d’une image depuis l’éditeur de texte ou une médiathèque&nbsp;;
	 - définir un intitulé de lien&nbsp;;
	 - etc.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.8.1 Content technology, 11.8.2 Accessible content creation*{lang=en}

#### [Critère 13.2](#crit-13-2) [A] L’[outil d’édition](glossaire.md#outil-d-edition) met-il à disposition des aides à la création de contenus accessibles&nbsp;? {id="crit-13-2"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’outil la présence d’aides à la création de contenus accessibles. Cela peut être&nbsp;: 
	- une documentation utilisateur qui explique comment définir les propriétés d’accessibilité pour chaque élément de contenu&nbsp;; 
	- des tests automatiques ou semi-automatiques disponibles depuis les fonctionnalités d’édition&nbsp;; 
	- des tests manuels disponibles depuis les fonctionnalités d’édition pour guider les auteurs dans la détection d’erreurs.
1. Vérifier que les aides à la création de contenus accessibles sont pertinentes, c’est-à-dire qu’elles permettent de créer un contenu accessible.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.8.1 Content technology, 11.8.2 Accessible content creation*{lang=en}

#### [Critère 13.3](#crit-13-3) [A] Le contenu généré par chaque [transformation](glossaire.md#transformation) des contenus est-il accessible (hors cas particuliers)&nbsp;? {id="crit-13-3"}

##### Cas particuliers

Le critère est non applicable lorsque le format de destination ne permet pas de conserver les informations d’accessibilité présentes dans le contenu en entrée.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Depuis les fonctionnalités d’édition (un éditeur de texte, mais cela peut être une médiathèque et toute autre interface qui permet de saisir du texte ou définir des propriétés), saisir les typologies de contenus proposées par l’éditeur (titre, liste, tableau, image, etc.). Utiliser également les différents paramètres permettant de définir des informations d’accessibilité (renseigner l’alternative textuelle d’une image, ajouter une description sur un lien, etc.)
1. Enregistrer les saisies.
1. Consulter le contenu généré&nbsp;: 
	- dans la fonctionnalité d’édition (par exemple, dans l’éditeur de texte)&nbsp;; 
	- dans l’interface de publication des contenus (par exemple, la page web de publication).
1. Vérifier&nbsp;: 
	- que les informations d’accessibilité (par exemple l’alternative d’une image, les niveaux de titres) sont préservées dans le contenu généré&nbsp;;
	- que la technologie prend en charge les informations d’accessibilité pour la forme restructurée de l’information (vérifier que la transformation des informations est compatible avec la technologie, notamment pour s’assurer que ces informations pourront être exploitées par les technologies d’assistance).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.8.1 Content technology, 11.8.3 Preservation of accessibility information in transformations*{lang=en}

#### [Critère 13.4](#crit-13-4) [AA] Pour chaque erreur d’accessibilité relevée par un test d’accessibilité automatique ou semi-automatique, l’outil d’édition fournit-il des suggestions de réparation&nbsp;? {id="crit-13-4"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer dans l’outil la présence de fonctionnalités de tests automatiques ou semi-automatiques.
1. Modifier les valeurs ou contenus dans les zones d’édition afin de créer des erreurs d’accessibilité dans le contenu généré (web et non web).
1. Activer les fonctionnalités de tests.
1. Vérifier&nbsp;: 
	- que l’outil répare automatiquement l’erreur&nbsp;;
    - ou que l’outil met à disposition de l’auteur des suggestions de réparations.
1. Dans le cas d’un test semi-automatique, vérifier : 
	- l’outil met à disposition une aide à la décision et des suggestions de réparations&nbsp;;
    - ou que l’outil met à disposition de l’auteur des explications lui permettant d’effectuer la réparation.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.8.1 Content technology, 11.8.4 Repair Assistance*{lang=en}

#### [Critère 13.5](#crit-13-5) [A] Pour chaque ensemble de [gabarits](glossaire.md#gabarit), un gabarit au moins permet de répondre aux exigences du [RGAA](../rgaa4/criteres.html). Cette règle est-elle respectée&nbsp;? {id="crit-13-5"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer la présence de gabarits mis à disposition par l’outil d’édition.
1. Tester le respect des critères du [RGAA](../rgaa4/criteres.html) et vérifier qu’au moins un des gabarits est totalement conforme.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.8.1 Content technology, 11.8.5 Templates*{lang=en}

#### [Critère 13.6](#crit-13-6) [A] Chaque [gabarit](glossaire.md#gabarit) qui permet de répondre aux exigences du RGAA est-il clairement identifiable&nbsp;? {id="crit-13-6"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer la présence de gabarits totalement conformes au [RGAA](../rgaa4/criteres.html) mis à disposition par l’outil d’édition.
1. Vérifier la présence d’une mention explicite permettant de les identifier. Par exemple, depuis la liste des gabarits, les gabarits conformes possèdent une étiquette &laquo;&nbsp;gabarit accessible&nbsp;&raquo;.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *11.8.1 Content technology, 11.8.5 Templates*{lang=en}

### [Thématique 14](#topic-14)&nbsp;: Services d’assistance {id="topic-14"}

#### [Critère 14.1](#crit-14-1) [AA] Chaque [service d’assistance](glossaire.md#service-d-assistance) fournit-il des informations relatives aux [fonctionnalités d’accessibilité](glossaire.md#fonctionnalite-d-accessibilite) de l’application décrites dans la documentation&nbsp;? {id="crit-14-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer la mise à disposition d’un service d’assistance depuis l’application.
1. Si c’est le cas, repérer dans l’application la présence d’une documentation, par exemple&nbsp;: 
	- un écran d’aide&nbsp;;
	- une [déclaration d’accessibilité](../obligations.html#déclaration-daccessibilité)&nbsp;; 
	- tout autre contenu qui fait office de documentation.
1. Repérer la présence dans la documentation&nbsp;: 
	- de la description des fonctionnalités d’accessibilité de l’application, par exemple&nbsp;: 
		- des paramètres d’accessibilité intégrés dans l’application comme la gestion des couleurs, des tailles de polices, la gestion des animations&nbsp;;
		- un rotor personnalisé sur certains écrans (le rotor est une fonctionnalité des lecteurs d’écran qui permet une navigation rapide entre des types d’éléments d’un écran, certaines plateformes permettent de définir des éléments de navigation rapide spécifique à une application dans ce rotor. [Voir une démonstration](https://developer.apple.com/videos/play/wwdc2020/10116/))&nbsp;; 
		- des gestes ou mouvements d’appareil qui déclenchent des fonctionnalités&nbsp;;  
		- des raccourcis clavier spéciaux disponibles pour certaines technologies d’assistance.
	- de la description des composants complexes pour lesquels il est mis en place une gestion particulière selon les technologies d’assistance&nbsp;;
	- d’explications sur les modalités d’utilisation de ces fonctionnalités (leur localisation, les méthodes pour les activer)&nbsp;; 
	- de la description des éléments non conformes ou non compatibles avec certaines technologies d’assistance, et de la présence d’alternatives le cas échéant.
1. Vérifier que le service support propose des informations concernant ces fonctionnalités. 
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *12.2.2 Information on accessibility and compatibility features*{lang=en}

#### [Critère 14.2](#crit-14-2) [A] Le [service d’assistance](glossaire.md#service-d-assistance) répond aux besoins de communication des personnes handicapées directement ou par [l’intermédiaire d’un service de relais](glossaire.md#service-de-relais). Cette règle est-elle respectée&nbsp;? {id="crit-14-2"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer la présence dans l’application d’un service d’assistance.
1. Si c’est le cas, vérifier que le service d’assistance peut être utilisé par toutes les personnes en situation de handicap. Il peut être utile de rechercher dans la documentation de l’application pour trouver ces informations. Par exemple, si le service d’assistance est disponible depuis un numéro de téléphone, vérifier qu’il existe des moyens alternatifs pour les utilisateurs qui ne peuvent pas s’exprimer à l’oral (personnes sourdes ou malentendantes) ou qui ne peuvent pas utiliser le langage verbal (personnes aphasiques). Par exemple&nbsp;: 
	- une messagerie instantanée qui fournit un service équivalent (dialogue en temps réel avec un opérateur humain)&nbsp;; 
	- la mise à disposition d’une traduction écrite simultanée ou visuelle des informations orales ou sonores, ou la mise à disposition d’un interprète en langue des signes (utilisation d’un service de relais).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *12.2.3 Effective communication*{lang=en}.

### [Thématique 15](#topic-15)&nbsp;: Communication en temps réel {id="topic-15"}

#### [Critère 15.1](#crit-15-1) [A] Pour chaque [application de communication orale bidirectionnelle](glossaire.md#application-de-communication-orale-bidirectionnelle), l’application est-elle capable d’encoder et de décoder cette communication avec une gamme de fréquences dont la limite supérieure est de 7&nbsp;000&nbsp;Hz au moins&nbsp;? {id="crit-15-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

La façon la plus sûre d’évaluer ce critère est de faire une recherche soit dans l’interface soit dans la documentation de l’application pour obtenir cette information. Il est également recommandé de demander à l’éditeur de l’application de fournir cette information. 

Une implémentation de la [recommandation UIT-T G.722](https://www.itu.int/rec/T-REC-G.722/fr) par exemple semble être une solution optimale.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *6.1 Audio bandwidth for speech*{lang=en}

#### [Critère 15.2](#crit-15-2) [A] Chaque application qui permet une [communication orale bidirectionnelle](glossaire.md#application-de-communication-orale-bidirectionnelle) dispose-t-elle d’une fonctionnalité de [communication écrite en temps réel](glossaire.md#communication-ecrite-en-temps-reel)&nbsp;? {id="crit-15-2"}

**[Test 15.2.1](#test-15-2-1)&nbsp;:** Chaque application qui permet une communication orale bidirectionnelle respecte-t-elle une de ces conditions&nbsp;?  {id="test-15-2-1"}
- L’application dispose d’une fonctionnalité intégrée de communication écrite en temps réel&nbsp;;
- L’application peut être connectée à un terminal qui intègre une fonctionnalité de communication écrite en temps réel. 

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Vérifier que l’application permet la communication orale bidirectionnelle.
1. Si c’est le cas, vérifier la présence d’une fonctionnalité de communication écrite en temps réel (il peut être parfois nécessaire d’activer un paramètre dédié dans l’application pour permettre la communication écrite en temps réel).
1. Sinon, vérifier si l’application peut se connecter à un terminal intégrant une fonctionnalité de communication écrite en temps réel (cette évaluation peut être complexe à mener sans la mise à disposition d’un terminal de communication en temps réel ou si le réseau utilisé par le terminal ne supporte pas les protocoles de texte en temps réel. Une première étape peut être de rechercher dans la documentation ou de questionner directement l’éditeur de l’application.)
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *6.2.1.1 RTT communication*{lang=en}

#### [Critère 15.3](#crit-15-3) [A] Pour chaque application qui permet une [communication orale bidirectionnelle](glossaire.md#application-de-communication-orale-bidirectionnelle) et [écrite en temps réel](glossaire.md#communication-ecrite-en-temps-reel), les deux modes sont-ils utilisables simultanément&nbsp;? {id="crit-15-3"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Vérifier que l’application permet la communication orale bidirectionnelle.
1. Si c’est le cas, vérifier la présence d’une fonctionnalité de communication écrite en temps réel.
1. Si c’est le cas, vérifier qu’il est possible d’utiliser les deux modes de communications en même temps, c’est-à-dire que des utilisateurs peuvent envoyer des messages écrits en temps réels au même moment que d’autres utilisateurs parlent par exemple.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *6.2.1.2 Concurrent voice and text*{lang=en}

#### [Critère 15.4](#crit-15-4) [A] Pour chaque fonctionnalité de [communication écrite en temps réel](glossaire.md#communication-ecrite-en-temps-reel), les messages peuvent-ils être identifiés (hors cas particuliers)&nbsp;? {id="crit-15-4"}

**[Test 15.4.1](#test-15-4-1)&nbsp;:** Pour chaque fonctionnalité de communication écrite en temps réel, les messages respectent-ils ces conditions&nbsp;? {id="test-15-4-1"}
- Les messages reçus et envoyés sont séparés dans la présentation&nbsp;;
- La présentation permet d’identifier la nature du message (reçu ou envoyé)&nbsp;;
- La présentation permet d’identifier les auteurs des messages&nbsp;;
- La nature du message (reçu ou envoyé) est accessible aux technologies d’assistance&nbsp;;
- L’identification de l’auteur du message est accessible aux technologies d’assistance.

##### Cas particuliers

Le critère est non applicable lorsque la fonctionnalité de communication orale bidirectionnelle ne permet pas d’identifier les participants, il n’est alors pas requis que la fonctionnalité de communication écrite en temps réel identifie les auteurs des messages.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Activer l’application et la fonctionnalité de communication écrite en temps réel de l’application sur deux terminaux et les connecter à une même session.
1. Envoyer un message écrit depuis les deux terminaux pour obtenir des messages avec des statuts différents (envoyé et reçus).
1. Vérifier&nbsp;: 
	- que les messages envoyés et reçus sont visuellement séparés (par exemple, les messages envoyés sont dans une fenêtre et les messages reçus dans une autre, ou il y a un saut de ligne entre chaque message reçu et envoyé s’ils sont présentés dans une même fenêtre)&nbsp;;
	- qu’il est possible visuellement de distinguer les messages envoyés et les messages reçus (par exemple, repérer la mention &laquo;&nbsp;Envoyé&nbsp;&raquo; à proximité d’un message envoyé ou &laquo;&nbsp;Reçu&nbsp;&raquo; à proximité d’un message reçu)&nbsp;;
	- si l’identification de l’interlocuteur est disponible pour le mode de communication oral (par exemple, mise en avant de l’avatar de la personne ayant la parole), que les auteurs des messages écrits sont identifiés également (par exemple, la présence d’un nom ou un identifiant précédant le message).
1. Activer le **lecteur d’écran** et naviguer dans les messages.
1. Vérifier que le lecteur d’écran restitue&nbsp;:
	- l’information du statut envoyé ou reçu de chaque message&nbsp;; 
	- l’identification de l’auteur du message.
1. Si c’est le cas, le critère est validé. 

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *6.2.2.1 Visually distinguishable display, 6.2.2.2 Programmatically determinable send and receive direction, 6.2.2.3 Speaker identification*{lang=en}

#### [Critère 15.5](#crit-15-5) [A] Pour chaque application de [communication orale bidirectionnelle](glossaire.md#application-de-communication-orale-bidirectionnelle), un indicateur visuel de l’activité orale est-il présent&nbsp;? {id="crit-15-5"} 

- **[Test 15.5.1](#test-15-5-1)&nbsp;:** Pour chaque application de communication orale et écrite en temps réel, un indicateur visuel de l’activité orale est-il présent&nbsp;?  {id="test-15-5-1"}
- **[Test 15.5.2](#test-15-5-2)&nbsp;:** Pour chaque application de communication orale bidirectionnelle qui dispose d’une vidéo en temps réel, un indicateur visuel de l’activité orale est-il présent&nbsp;? {id="test-15-5-2"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Vérifier que l’application permet la communication orale bidirectionnelle et la communication écrite en temps réel ou la diffusion de la vidéo en temps réel.
1. Si c’est le cas, activer l’application sur deux terminaux et les connecter à une même session.
1. Faire parler un utilisateur depuis un des terminaux.
1. Vérifier sur l’interface l’apparition d’un indicateur visuel permettant d’identifier qu’une personne est en train de parler. Il n’est pas nécessaire pour ce critère d’identifier qui parle, mais simplement d’identifier qu’il y a une personne qui est en train de parler. Par exemple, un halo autour ou une icône à proximité de l’avatar de la personne qui parle.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *6.2.2.4 Visual indicator of Audio with RTT, 6.5.5 Visual indicator of audio with video*{lang=en}

#### [Critère 15.6](#crit-15-6) [A] Chaque application de [communication écrite en temps réel](glossaire.md#communication-ecrite-en-temps-reel) qui peut interagir avec d’autres applications de [communication écrite en temps réel](glossaire.md#communication-ecrite-en-temps-reel) respecte-t-elle les règles d’interopérabilité en vigueur&nbsp;? {id="crit-15-6"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

Il n’est pas proposé de méthode d’évaluation pour ce critère.

**Note importante&nbsp;:** Ce critère est très complexe à évaluer et demande une certaine maîtrise de l’ensemble des concepts et normes d’interopérabilité. Si l’application que vous évaluez ou développez doit couvrir ce critère, nous vous renvoyons à la lecture intégrale du critère *6.2.3 Interoperability*{lang=en} dans la norme EN 301 549.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *6.2.3 Interoperability*{lang=en}

#### [Critère 15.7](#crit-15-7) [AA] Pour chaque application qui permet une [communication écrite en temps réel](glossaire.md#communication-ecrite-en-temps-reel), le délai de transmission de chaque [unité de saisie](glossaire.md#unite-de-saisie) est de 500ms ou moins. Cette règle est-elle respectée&nbsp;? {id="crit-15-7"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Vérifier que l’application permet la communication écrite en temps réel.
1. Si c’est le cas, activer l’application et la fonctionnalité de communication écrite sur deux terminaux distincts et les connecter à une même session.
1. Saisir du texte sur le premier terminal et observer son apparition sur le second terminal. L’apparition sur le second terminal doit être instantanée (inférieure à une demi-seconde). Selon le fonctionnement de la fonctionnalité, chaque caractère n’est pas envoyé individuellement. En effet, si la fonctionnalité de communication écrite en temps réel implémente une prédiction de mots, c’est lorsque le mot désiré sera sélectionné qu’il sera envoyé, pas lors de la saisie des premiers caractères servant à déclencher l’affichage de suggestion. Un test par observation simple peut être suffisant pour constater l’apparition instantanée sur le terminal qui reçoit le message écrit. 
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *6.2.4 RTT Responsiveness*{lang=en}

#### [Critère 15.8](#crit-15-8) [A] Pour chaque application de télécommunication, l’identification de l’interlocuteur qui initie un appel est-elle accessible&nbsp;? {id="crit-15-8"}

**[Test 15.8.1](#test-15-8-1)&nbsp;:** Pour chaque application de télécommunication qui fournit l’identification de l’interlocuteur, l’identification respecte-t-elle ces conditions&nbsp;? {id="test-15-8-1"}
- L’identification de l’interlocuteur est présentée sous forme de texte&nbsp;;
- L’identification de l’interlocuteur est accessible aux technologies d’assistance.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Activer le **lecteur d’écran** depuis un terminal.
1. Depuis un second terminal, lancer un appel vers le premier terminal.
1. Lorsque l’appel entrant apparaît, vérifier&nbsp;:
	- que l’identification de l’interlocuteur est disponible sous format texte visible (par exemple, un nom ou un numéro de téléphone)&nbsp;;
	- et que cette identification est correctement restituée par **le lecteur d’écran**.
1. Si c’est le cas, le critère est validé. 

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *6.3 Caller ID*{lang=en}

#### [Critère 15.9](#crit-15-9) [A] Pour chaque application de [communication orale bidirectionnelle](glossaire.md#application-de-communication-orale-bidirectionnelle) qui fournit l’identification de l’interlocuteur, existe-t-il un moyen de présenter cette identification pour les utilisateurs de langue des signes&nbsp;? {id="crit-15-9"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Activer l’application et lancer un appel vidéo entre les deux terminaux.
1. Vérifier la présence sur le terminal recevant l’appel d’une méthode permettant aux utilisateurs de langue des signes d’identifier l’interlocuteur. 
1. Si c’est le cas, le critère est validé. 

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *6.5.6 Speaker identification with video (sign language) communication*{lang=en}

#### [Critère 15.10](#crit-15-10) [A] Pour chaque application de [communication orale bidirectionnelle](glossaire.md#application-de-communication-orale-bidirectionnelle) qui dispose de [fonctionnalités vocales](glossaire.md#fonctionnalites-vocales), celles-ci sont-elles utilisables sans la nécessité d’écouter ou parler&nbsp;? {id="crit-15-10"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

1. Repérer les fonctionnalités disponibles (en dehors de la fonctionnalité de communication orale) qui se basent sur l’écoute d’information ou l’énonciation de commande, par exemple&nbsp;:
	- une messagerie vocale&nbsp;; 
	- un standard téléphonique automatique (par exemple, qui demande d’énoncer un chiffre entre 1 et 4 pour être redirigé vers un service)&nbsp;;
	- ou tout autre serveur vocal interactif.
1. Vérifier&nbsp;: 
	- que l’information est disponible sans devoir écouter ou parler&nbsp;; 
	- que les actions peuvent être réalisées sans devoir écouter ou parler ou qu’il existe une alternative à la fonctionnalité qui peut être utilisée sans devoir écouter ou parler.
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *6.4 Alternatives to voice-based services*{lang=en}

#### [Critère 15.11](#crit-15-11) [AA] Pour chaque application de [communication orale bidirectionnelle](glossaire.md#application-de-communication-orale-bidirectionnelle) qui dispose d’une vidéo en temps réel, la qualité de la vidéo est-elle suffisante&nbsp;? {id="crit-15-11"}

**[Test 15.11.1](#test-15-11-1)&nbsp;:** Pour chaque application de communication orale bidirectionnelle qui dispose d’une vidéo en temps réel, les conditions suivantes sont-elles respectées&nbsp;? {id="test-15-11-1"}
- La résolution de la vidéo répond à la norme [QVGA](glossaire.md#qvga) au moins&nbsp;;
- La fréquence des images est de 20 images par seconde au moins&nbsp;;
- Le décalage entre la vidéo et les paroles ne doit pas être supérieur à 100 ms.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### iOS et Android

Pour les conditions concernant la résolution et la fréquence des images, la façon la plus sûre d’évaluer ce critère est de faire une recherche soit dans l’interface soit dans la documentation de l’application pour obtenir ces informations. Il est également recommandé de demander à l’éditeur de l’application de fournir ces détails techniques.

Pour la dernière condition concernant le décalage entre la vidéo et l’audio, le test peut s’établir sur une simple observation&nbsp;:
1. Activer l’application sur deux terminaux.
1. Établir une connexion d’appel vidéo entre les deux terminaux.
1. Vérifier la synchronisation entre les paroles et la vidéo (synchronisation labiale, mouvement des lèvres).
1. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: N/A
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *6.5.2 Resolution, 6.5.3 Frame rate, 6.5.4 Synchronization between audio and video*{lang=en}