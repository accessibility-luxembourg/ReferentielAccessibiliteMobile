Contrairement aux contenus web pour lesquels il est possible d’inspecter le code source afin de déterminer la présence d’élément d’attribut, il est très difficile pour les applications mobiles de procéder de la même manière. D’une part, parce que cela demanderait des compétences techniques élevées (on accède au logiciel, mais rarement à son code contrairement à un site web). D’autre part, parce que contrairement au web et aux technologies (HTML/CSS/JavaScript) il existe une diversité d’environnements de développement qui rend difficile la définition d’une liste de tests basée sur la revue de code.

C’est la raison pour laquelle l’approche choisie est de tester la présence de certains éléments au travers d’outils spécialisés (inspecteurs d’interfaces, technologies d’assistance, commutateurs externes) ou directement sur l’interface elle-même.

Par exemple, lorsque l’interface contient un élément graphique porteur d’information, le critère demande de vérifier qu’une alternative est disponible et pertinente sans donner plus de précisions sur les techniques à employer pour mettre à disposition une alternative à un élément graphique. Afin d’aider pour l’évaluation, chaque critère dispose d’une méthodologie pratique (**qui n’est pas normative**) exposant une méthode possible d’évaluation du critère.

Nous vous renvoyons également aux documentations des éditeurs de langage et de logiciels de création d’application dans lesquelles se trouvent les dispositifs à respecter, les propriétés à utiliser et pour certains des outils spécialisés pour inspecter l’interface ou le code.

### Ressources des éditeurs

#### Android
- [Aide accessibilité Android](https://support.google.com/accessibility/android?hl=fr)&nbsp;: description des technologies d’assistance et des fonctionnalités d’accessibilité présentes sur les systèmes Android.
- [Test your app’s accessibility](https://developer.android.com/guide/topics/ui/accessibility/testing){lang=en}&nbsp;: présentation d’outils et méthodes d’évaluation de l’accessibilité des applications Android.
- [Make apps more accessible](https://developer.android.com/guide/topics/ui/accessibility/apps){lang=en}&nbsp;: principes généraux de développement pour respecter certaines règles d’accessibilité.
- [Build more accessible apps](https://developer.android.com/guide/topics/ui/accessibility){lang=en}&nbsp;: ensemble de ressources pour concevoir et développer des applications Android accessibles.

#### iOS
- [Accessibilité iOS](https://www.apple.com/fr/accessibility/)&nbsp;: description des technologies d’assistance et des fonctionnalités d’accessibilité présentes sur les systèmes iOS.
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/accessibility/overview/introduction/){lang=en}&nbsp;: Principes généraux d’accessibilité des interfaces d’applications mobiles sur iOS.
- [Vidéos et tutoriels](https://developer.apple.com/videos/frameworks/accessibility/) &nbsp;: ensemble de vidéos offrant des démonstrations de technologies d’assistance disponibles sur iOS ou présentant des méthodes techniques de développement pour prendre en compte l’accessibilité.

###  Outils d’évaluation

Pour évaluer les critères du référentiel, il va être utile de réaliser des tests en manipulant les paramètres et technologies d’assistance des plateformes. 

Il ne s’agit pas dans cette section de fournir une documentation exhaustive ni des explications détaillées sur la prise en main de ces éléments. Néanmoins, les éléments  essentiels pour une démarche d’évaluation sont listés, en pointant vers les documentations officielles quand cela est possible et en fournissant des aides à la configuration ou compréhension si nécessaire.

#### Lecteur d’écran

Le lecteur d’écran est un des outils qui sera le plus utilisé pour l’évaluation de l’accessibilité des applications. Les lecteurs d’écran sont utilisés principalement par les personnes aveugles ou malvoyantes pour interagir avec une application.

Certains critères demandent d’évaluer la compatibilité des composants avec les technologies d’assistance (dont le lecteur d’écran), mais le lecteur d’écran est aussi utilisé pour évaluer des critères qui impactent également d’autres technologies d’assistance.

##### VoiceOver sur iOS

VoiceOver est le lecteur d’écran intégré à iOS.

###### Documentation 

Pour prendre en main VoiceOver, nous vous renvoyons vers la documentation officielle qui détaille les premiers pas pour l’activation et l’utilisation des gestes.
- [Activer VoiceOver et s’entraîner à utiliser les gestes sur l’iPhone](https://support.apple.com/fr-fr/guide/iphone/iph3e2e415f/ios).
- [Modifier les réglages de VoiceOver sur l’iPhone](https://support.apple.com/fr-fr/guide/iphone/iphfa3d32c50/ios)
- [Apprendre les gestes VoiceOver sur l’iPhone](https://support.apple.com/fr-fr/guide/iphone/iph3e2e2281/ios)&nbsp;: cette page vous détaille les gestes disponibles pour naviguer dans les interfaces avec VoiceOver.
- [Contrôler VoiceOver à l’aide du rotor sur l’iPhone](https://support.apple.com/fr-fr/guide/iphone/iph3e2e3a6d/ios)&nbsp;: le rotor est un élément central dans la navigation avec VoiceOver. Il permet de sélectionner un type d’élément (lien, bouton, entête etc.) comme cible de la navigation rapide (glisser haut/bas). Il est important de connaître son existence et de savoir l’utiliser. Consultez également [la liste des paramètres qu’il est possible de trouver dans le rotor](https://support.apple.com/fr-fr/HT204783).

###### Affichage de la sortie vocale

Il est utile de pouvoir visualiser la sortie vocale. Dans iOS vous avez la possibilité d’activer le panneau légende, qui affiche sous format texte en bas de l’écran les annonces de VoiceOver. Pour cela, aller dans *Réglages > Accessibilité > VoiceOver* et en bas de l’écran des paramètres activer le paramètre &laquo;&nbsp;Panneau légende&nbsp;&raquo;.

##### TalkBack sur Android

TalkBack est le lecteur d’écran intégré à Android. Afin de profiter de plus d’options, il peut être nécessaire d’installer une application tierce (développée par Android)&nbsp;: [Outils d’accessibilité Android](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback&hl=fr&gl=US).

###### Documentation 

Pour prendre en main TalkBack, nous vous renvoyons vers la documentation officielle qui détaille les premiers pas pour l’activation et l’utilisation des gestes.
- [Activer ou désactiver TalkBack](https://support.google.com/accessibility/android/answer/6007100?hl=fr&ref_topic=10601570).
- [Les paramètres TalkBack](https://support.google.com/accessibility/android/answer/6006589?hl=fr&ref_topic=10601570).
- [Utiliser les gestes TalkBack](https://support.google.com/accessibility/android/answer/6151827?hl=fr&ref_topic=10601570).
- [Utiliser le menu TalkBack et le contrôle de la lecture](https://support.google.com/accessibility/android/answer/6007066?hl=fr)&nbsp;: le contrôle de la lecture (ou commandes de lecture) est une fonctionnalité similaire au rotor de VoiceOver, il permet de sélectionner des types d’éléments (liens, boutons, entêtes etc.) pour la navigation rapide (glisser haut/bas).

###### Affichage de la sortie vocale

Il est utile de pouvoir visualiser la sortie vocale. Dans TalkBack vous avez la possibilité d’activer un paramètre qui affiche sous format texte en bas de l’écran les annonces de TalkBack. Pour cela, aller dans *Paramètres > Accessibilité > TalkBack > Paramètres > Paramètres avancés > Paramètres du développeur* et activer le paramètre &laquo;&nbsp;Afficher la sortie vocale&nbsp;&raquo;.

Selon la version d’Android utilisée, il est possible que le chemin vers le paramètre &laquo;&nbsp;Afficher la sortie vocale&nbsp;&raquo; de TalkBack ne soit pas exactement le même.

#### Clavier externe

Les utilisateurs et utilisatrices avec un handicap moteur ne pourront pas toutes et tous utiliser l’interface tactile, il leur sera alors indispensable d’interagir au travers d’un commutateur externe&nbsp;: clavier ou autre périphérique externe.

Afin de tester les critères relatifs à l’utilisation des applications avec un clavier externe, il va être nécessaire de brancher un dispositif externe au terminal et paramétrer quelques éléments dans les plateformes.

##### iOS

Afin de permettre le contrôle du terminal par un clavier externe, il est nécessaire d’activer l’option &laquo;&nbsp;Accès clavier complet&nbsp;&raquo;. Pour cela, aller dans *Réglages > Accessibilité > Claviers > Accès clavier complet* et activer &laquo;&nbsp;Accès clavier complet&nbsp;&raquo;

iOS permet de spécifier un style de focus pour les utilisateurs qui utilisent un périphérique externe (*Réglages > Accessibilité > Clavier > Accès complet au clavier*). L’utilisateur peut choisir&nbsp;:
- de la masquer automatiquement au bout d’un temps paramétrable&nbsp;;
- d’augmenter la taille de la prise de focus&nbsp;;
- d’augmenter le contraste&nbsp;;
- de choisir la couleur.

##### Android

L’utilisation d’un clavier externe avec Android demande quelques paramétrages supplémentaires pour être efficace. En effet, pour que les interfaces et fonctionnalités soient pleinement accessibles au clavier il est nécessaire d’utiliser l’application [Switch Access](https://support.google.com/accessibility/android/answer/6122836?hl=fr) avec un clavier externe. 

Un guide de configuration vous permet de configurer pas à pas votre clavier externe en définissant des commutateurs, il est disponible dans *Préférences > Accessibilité > Switch Access > Paramètres > Ouvrir le guide de configuration*. Vous allez associer deux actions&nbsp;: 
- *Passer à l’option suivante*&nbsp;: appuyez sur la touche du clavier que vous souhaitez associer (nous vous recommandons <kbd>Tab</kbd> pour conserver les touches utilisées lors de la navigation sur un ordinateur).
- *Sélectionner*&nbsp;: appuyez sur la touche du clavier que vous souhaitez associer (nous vous recommandons <kbd>Entrée</kbd> pour conserver les touches utilisées lors de la navigation sur un ordinateur).

Une fois la première étape de configuration terminée (avec le guide de configuration), il sera nécessaire de vous paramétrer d’autres touches de navigation&nbsp;: 
- *Switch Access*{lang=en} *> Paramètres > Attribuer des commutateurs pour la recherche*&nbsp;: Associer le paramètre *Passer à l’option précédente* avec une touche ou combinaison de touches (nous vous recommandons <kbd>Shift + Tab</kbd>)
- *Switch Access*{lang=en} *> Paramètres > Attribuer des commutateurs à des actions*&nbsp;: Associer le paramètre *Retour* avec une touche ou combinaison de touches (nous vous recommandons <kbd>ESC</kbd>)

#### Applications de tests

##### iOS (macOS)

Certains éléments de méthodologie vous proposeront plusieurs méthodes de test, souvent en alternative aux technologies d’assistance pour évaluer des éléments. Avec iOS, il est possible de brancher le terminal sur un ordinateur avec macOS et d’utiliser l’application **Accessibility Inspector**{lang=en}.

**[Accessibility Inspector](https://developer.apple.com/library/archive/documentation/Accessibility/Conceptual/AccessibilityMacOSX/OSXAXTestingApps.html){lang=en}** est disponible depuis le logiciel [Xcode](https://apps.apple.com/fr/app/xcode/id497799835?mt=12) utilisé pour le développement d’applications mobiles. Cet outil est utile pour réaliser certains tests. Pour l’activer, lancer Xcode, puis depuis Xcode, suivre le chemin *Xcode > Open Developer Tool > Accessibility Inspector*{lang=en}.

##### Android

Pour réaliser certains tests sur des applications Android, des applications tierces sont requises ou pourront vous aider dans l’évaluation.

- [**Outils d’accessibilité Android**](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback&hl=fr&gl=US)&nbsp;: application Android permettant d’ajouter notamment des options et des gestes au lecteur d’écran Talkback.
- [**Accessibility Scanner**](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor&hl=fr&gl=US){lang=en}&nbsp;: application Android permettant de réaliser des tests automatiques pour certains critères. Une fois installé, accéder à l’application depuis *Paramètres > Accessibilité > Services installés >* *Accessibility Scanner*{lang="en"}.

##### iOS et Android

- [Color Contrast Analyser (CCA)](https://www.tpgi.com/color-contrast-checker/){lang=en}&nbsp;: outil d’évaluation des contrastes depuis l’ordinateur disponible sur Mac et Windows.

#### Diffuser l’écran du terminal mobile

La diffusion de l’écran du terminal mobile sur votre ordinateur va vous permettre de réaliser plus simplement certains tests comme les tests de contrastes notamment. De plus, cette diffusion peut vous permettre d’enregistrer certaines interactions et de faire des captures d’écran lorsque vous devez rédiger des rapports d’audit.

La diffusion du terminal mobile n’est pas un requis indispensable pour l’évaluation des applications, elle est néanmoins utile puisqu’elle peut faciliter certaines activités d’évaluation.

##### iOS

###### Vous disposez d’un ordinateur avec macOS 

1. Connecter le terminal iOS à l’ordinateur macOS par le câble USB. 
1. Ouvrir le logiciel QuickTime et dans le menu *Fichier*, sélectionner &laquo;&nbsp;Nouvel enregistrement vidéo&nbsp;&raquo;.
1. Une fenêtre s’ouvre, si elle diffuse l’image en provenance de la caméra de votre ordinateur, cliquer à droite du bouton rouge d’enregistrement pour modifier la source à diffuser et choisir votre terminal.
1. L’écran de votre terminal mobile s’affiche maintenant sur votre ordinateur.

###### Vous disposez d’un ordinateur avec Windows 

Il existe un certain nombre de logiciels (gratuits ou payants) permettant de diffuser le terminal iOS sur un ordinateur Windows.

##### Android

Il existe une application *open source*{lang=en} qui permet de diffuser une application Android sur **Windows et macOS**&nbsp;: [SCRCPY](https://github.com/Genymobile/scrcpy). 

Sur environnement macOS, son installation peut demander quelques connaissances techniques. Sur Windows, il s’utilise comme un applicatif standard. Néanmoins il n’est pas indispensable que vous projetiez votre terminal mobile, vous pouvez vous passer de cette installation (une autre méthode est détaillée après dans le document).

###### Vous disposez d’un ordinateur avec Windows 

Windows met à disposition une fonctionnalité &laquo;&nbsp;Se connecter&nbsp;&raquo; intégrée pour diffuser certaines sources externes. [Voir la documentation](https://support.google.com/pixelphone/answer/2865484?hl=fr&ref_topic=7084202).

#### Réaliser des captures d’écran

Si la diffusion des terminaux mobiles sur l’écran d’ordinateur est impossible, une alternative satisfaisante est de réaliser des captures d’écrans depuis votre terminal mobile et d’importer ensuite ces captures, par la méthode de votre choix, sur votre ordinateur.

- [Effectuer une capture d’écran ou enregistrer l’écran de votre appareil Android](https://support.google.com/android/answer/9075928?hl=fr).
- [Réaliser une capture d’écran sur un iPhone](https://support.apple.com/fr-fr/HT200289).

