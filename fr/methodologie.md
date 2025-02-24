### Évaluation de la conformité à la norme de référence

#### Cadre général

Afin d’évaluer la conformité de l’application mobile avec la norme de référence, l’organisme doit conduire un audit d’accessibilité. L’audit (ou évaluation) peut être effectué par l’organisme lui-même (auto-évaluation) ou par un tiers. L’évaluation est réalisée sur un échantillon d’écrans représentatif de l’application. 

La vérification de la conformité des écrans de l’échantillon d’une application mobile avec les critères applicables s’effectue à l’aide du [référentiel d’évaluation de l’accessibilité des applications mobiles (RAAM)](./index.html). 

La phase finale de l’audit est la déclaration d’accessibilité qui rend compte de la conformité avec les règles applicables.

L’audit (ou évaluation) répond aux critères suivants&nbsp;:

- il est fiable&nbsp;: il revient à l’organisme concerné de veiller à la fiabilité de sa déclaration par tous moyens (recours à un prestataire externe, formation d’experts internes, audits croisés…)&nbsp;;
- il est représentatif&nbsp;: il porte sur un échantillon représentatif (cf. section «&nbsp;Échantillon&nbsp;» ci-dessous).

Il est possible de recourir à une autre méthode de tests, à une triple condition&nbsp;:

- s’assurer que la méthode de test utilisée est communicable sur demande à un utilisateur ou à une administration&nbsp;;
- produire une table de correspondance explicite entre les critères et tests et la norme de référence choisie&nbsp;;
- l’indiquer dans la déclaration d’accessibilité.

#### Échantillon

L’échantillon sur lequel est réalisé l’audit d’une application mobile porte au moins sur les écrans suivants, lorsqu’ils existent&nbsp;:

1. l’écran d’accueil&nbsp;;
1. l’écran des mentions légales&nbsp;;
1. l’écran ou le processus d’authentification&nbsp;;
1. l’écran de contact&nbsp;;
1. les écrans qui constituent la documentation de l’application&nbsp;;
1. au moins un écran pertinent pour chaque type de service fourni et toute autre utilisation principale prévue (ex.&nbsp;: rubriques de 1er niveau dans l’arborescence), y compris la fonctionnalité de recherche&nbsp;;
1. au moins un document téléchargeable pertinent, le cas échéant, pour chaque type de service fourni et pour toute autre utilisation principalement prévue&nbsp;;
1. l’ensemble des écrans constituant un processus (par exemple, un formulaire de saisie ou une transaction sur plusieurs écrans)&nbsp;;
des exemples d’écrans ayant un aspect sensiblement distinct ou présentant un type de contenu différent (ex.&nbsp;: écran contenant des tableaux de données, des éléments multimédia, des illustrations, des formulaires, une fonctionnalité de communication en temps réel, etc.).

La sélection des écrans audités ainsi que leur nombre doivent être représentatifs de l’application mobile. Le nombre de visiteurs par écran peut notamment être pris en compte lors de la constitution de l’échantillon.

Enfin, s’ajoutent des écrans sélectionnés au hasard représentant au moins 10 % des écrans de l’échantillon décrit supra.

#### Environnement de test (ou «&nbsp;base de référence&nbsp;»)

Contrairement aux contenus web pour lesquels il est possible d’inspecter le code source afin de déterminer la présence d’éléments et d’attributs, il est très difficile pour les applications mobiles de procéder de la même manière. D’une part, parce que cela demanderait des compétences techniques élevées (on accède au logiciel, mais rarement à son code contrairement à un site web). D’autre part, parce que contrairement au web et aux technologies (HTML/CSS/JavaScript) il existe une diversité d’environnements de développement qui rend difficile la définition d’une liste de tests basée sur la revue de code.

Une certaine partie des tests du [référentiel d’évaluation de l’accessibilité des applications mobiles](./index.html) se réalise avec les technologies d’assistance mises à disposition sur les plateformes.

##### Définition de l’environnement de test

Pour valider ces critères, il convient de définir un environnement de test (ou «&nbsp;base de référence&nbsp;»). Par défaut, il est composé des plateformes et technologies d’assistance majoritairement utilisées par les personnes en situation de handicap. 

Pour réaliser les tests d’évaluation dans le cadre du RAAM, il est nécessaire de prendre en compte l’[environnement de test du RAAM pour l’évaluation d’applications mobiles](./environnement.md).

Cet environnement de test minimal peut être complété, le cas échéant, par des solutions libres et gratuites disponibles ou par des technologies plus anciennes, en fonction de l’usage du site ou de l’application mobile. Lorsqu’il est possible de connaître la configuration des postes de travail, ainsi que le matériel utilisé, la base de référence est alors constituée des services réellement utilisés dans cet environnement.

#### Test des écrans

Chaque écran de l’échantillon doit être vérifié au regard des critères qui lui sont applicables.

Il existe 3 raisons pour qu’un critère ne soit pas applicable à un écran&nbsp;:

  1. Le critère concerne un contenu ou une fonctionnalité qui n’existe pas, par exemple si l’écran ne comporte pas de vidéo, les critères liés aux vidéos ne seront pas applicables.
  2. Le critère concerne un contenu ou un service exempté qui n’est donc pas soumis à l’obligation d’accessibilité.
  3. Le critère concerne un contenu soumis à dérogation pour charge disproportionnée qui est accompagné d’une alternative numérique accessible. Par exemple, un tableau statistique avec des graphiques, qui propose une alternative numérique en texte. Dans ce cas les critères applicables au contenu soumis à dérogation seront non applicables. 
      À noter&nbsp;: si le contenu soumis à dérogation pour charge disproportionnée ne propose pas d’alternative numérique accessible, les critères concernant ce contenu sont considérés comme applicables.

Les écrans sont ensuite testés au regard des critères applicables. Ces tests permettent d’obtenir&nbsp;:

  * le nombre de critères validés et non validés pour chaque écran
  * le taux de conformité de chaque écran.

À noter&nbsp;: 

  * un critère est validé pour un écran donné lorsque tous les éléments de l’écran ont passé avec succès les tests permettant de valider le critère&nbsp;;
  * dès lors qu’un seul élément de l’écran ne valide pas les tests d’un critère, le critère ne peut être validé&nbsp;;
  * si l’écran fait partie d’un processus (faire une déclaration, participer à une consultation publique, prendre un rendez-vous), un critère est validé pour un écran du processus uniquement s’il est validé pour tous les écrans du processus.

Certains critères ou thématiques sont applicables à l’ensemble de l’application et non à un écran particulier, il n’est donc pas nécessaire de les évaluer sur tous les écrans de l’échantillon. Dans ce cas, ils peuvent par exemple être évalués sur un seul écran de l’échantillon et être considérés comme non applicables sur tous les autres écrans. Cette méthodologie permettant de rapporter les résultats de l’évaluation de ces critères est bien entendu optionnelle. Quelle que soit la méthodologie choisie, il n’y aura pas d’impact sur le taux de conformité global de l’application. C’est notamment le cas pour les critères et thématiques suivantes&nbsp;:
  * La thématique &laquo;&nbsp;12. Documentation et fonctionnalités d’accessibilité&nbsp;&raquo; 
  * La thématique &laquo;&nbsp;14. Services d’assistance&nbsp;&raquo;

#### Taux de conformité à la norme

Le taux de conformité permet de mesurer les progrès du service en ligne eu égard à la conformité aux exigences d’accessibilité. 

Ce taux indique le pourcentage de critères respectés du service en ligne.

Le pourcentage de critères respectés s’obtient en divisant le nombre de critères validés par le nombre de critères applicables.

  * Critère validé&nbsp;: un critère est validé s’il est validé sur tous les écrans de l’échantillon. Si un critère est invalidé sur un seul écran de l’échantillon, il ne pourra pas être considéré comme valide pour le calcul du taux.
  * Critère applicable&nbsp;: pour qu’un critère soit applicable, il suffit qu’il le soit sur un seul écran de l’échantillon. Ce qui a pour corollaire qu’un critère est non applicable s’il est non applicable sur tous les écrans de l’échantillon sans exception.

Ce taux de conformité détermine l’état de conformité à mentionner dans la [déclaration d’accessibilité](../obligations.md#contenu-de-la-déclaration-d’accessibilité).

#### Principe de non-interférence

Dans un échantillon d’audit, il peut y avoir des contenus qui ne sont pas soumis à l’obligation de mise en accessibilité&nbsp;:

- les [contenus exemptés](../obligations.md#contenus-exemptés)&nbsp;;
- les [contenus dérogés pour charge disproportionnée](../obligations.md#dérogation-pour-charge-disproportionnée)&nbsp;;
- les contenus non accessibles qui disposent d’une alternative accessible.

Il est indispensable de s’assurer que ces contenus n’empêchent pas les utilisateurs d’accéder au reste de l’écran ou de l’application.

Ainsi, bien que la conformité de ces contenus ne soit pas requise, il reste obligatoire qu’ils se conforment aux critères et tests suivants&nbsp;:

- [Critère 3.12](./referentiel-technique.html#crit-3-12)&nbsp;: Chaque séquence sonore déclenchée automatiquement est-elle contrôlable par l’utilisateur&nbsp;?
- [Critère 10.3](./referentiel-technique.html#crit-10-3)&nbsp;: Dans chaque écran, la navigation ne doit pas contenir de piège au clavier. Cette règle est-elle respectée&nbsp;?
- [Critère 11.1](./referentiel-technique.html#crit-11-1)&nbsp;: Pour chaque écran, l’utilisateur a-t-il le contrôle de chaque limite de temps modifiant le contenu (hors cas particuliers)&nbsp;?
- [Critère 11.7](./referentiel-technique.html#crit-11-7)&nbsp;: Dans chaque écran, les changements brusques de luminosité ou les effets de flash sont-ils correctement utilisés&nbsp;?
- [Critère 11.8](./referentiel-technique.html#crit-11-8)&nbsp;: Dans chaque écran, chaque contenu en mouvement ou clignotant est-il contrôlable par l’utilisateur&nbsp;?

Le non-respect de l’un de ces critères ou tests pour l’un des types de contenus énumérés rend le ou les critères correspondants non conformes.

Le principe de non-interférence est identifié dans la norme EN 301 549 au critère 9.6 WCAG <span lang="en">conformance requirements</span>.

### Éléments de méthodologie

Contrairement aux contenus web pour lesquels il est possible d’inspecter le code source afin de déterminer la présence d’éléments ou d’attributs, il est très difficile pour les applications mobiles de procéder de la même manière. D’une part, parce que cela demanderait des compétences techniques élevées (on accède au logiciel, mais rarement à son code contrairement à un site web). D’autre part, parce que contrairement au web et aux technologies HTML / CSS / JavaScript il existe une diversité d’environnements de développement qui rend difficile la définition d’une liste de tests basée sur la revue de code.

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

Les méthodes de navigation privilégiées sont la méthode par gestes ou la navigation combinée avec un clavier externe. Les deux méthodes produisent les mêmes effets.

##### VoiceOver sur iOS

VoiceOver est le lecteur d’écran intégré à iOS.

###### Documentation 

Pour prendre en main VoiceOver, nous vous renvoyons vers la documentation officielle qui détaille les premiers pas pour l’activation et l’utilisation des gestes.
- [Activer VoiceOver et s’entraîner à utiliser les gestes sur l’iPhone](https://support.apple.com/fr-fr/guide/iphone/iph3e2e415f/ios).
- [Utiliser VoiceOver sur l’iPhone avec un clavier externe Apple](https://support.apple.com/fr-fr/guide/iphone/iph6c494dc6/ios)
- [Modifier les réglages de VoiceOver sur l’iPhone](https://support.apple.com/fr-fr/guide/iphone/iphfa3d32c50/ios)
- [Apprendre les gestes VoiceOver sur l’iPhone](https://support.apple.com/fr-fr/guide/iphone/iph3e2e2281/ios)&nbsp;: cette page vous détaille les gestes disponibles pour naviguer dans les interfaces avec VoiceOver.
- [Contrôler VoiceOver à l’aide du rotor sur l’iPhone](https://support.apple.com/fr-fr/guide/iphone/iph3e2e3a6d/ios)&nbsp;: le rotor est un élément central dans la navigation avec VoiceOver. Il permet de sélectionner un type d’élément (lien, bouton, entête, etc.) comme cible de la navigation rapide (glisser haut/bas). Il est important de connaître son existence et de savoir l’utiliser. Consultez également [la liste des paramètres qu’il est possible de trouver dans le rotor](https://support.apple.com/fr-fr/HT204783).

###### Affichage de la sortie vocale

Il est utile de pouvoir visualiser la sortie vocale. Dans iOS vous avez la possibilité d’activer le panneau légende, qui affiche sous format texte en bas de l’écran les annonces de VoiceOver. Pour cela, aller dans *Réglages > Accessibilité > VoiceOver* et en bas de l’écran des paramètres activer le paramètre &laquo;&nbsp;Panneau légende&nbsp;&raquo;.

##### TalkBack sur Android

TalkBack est le lecteur d’écran intégré à Android. Afin de profiter de plus d’options, il peut être nécessaire d’installer une application tierce (développée par Android)&nbsp;: [Outils d’accessibilité Android](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback&hl=fr&gl=US).

###### Documentation 

Pour prendre en main TalkBack, nous vous renvoyons vers la documentation officielle qui détaille les premiers pas pour l’activation et l’utilisation des gestes.
- [Activer ou désactiver TalkBack](https://support.google.com/accessibility/android/answer/6007100?hl=fr&ref_topic=10601570).
- [Les paramètres TalkBack](https://support.google.com/accessibility/android/answer/6006589?hl=fr&ref_topic=10601570).
- [Utiliser les gestes TalkBack](https://support.google.com/accessibility/android/answer/6151827?hl=fr&ref_topic=10601570).
- [Utiliser le menu TalkBack et le contrôle de la lecture](https://support.google.com/accessibility/android/answer/6007066?hl=fr)&nbsp;: le contrôle de la lecture (ou commandes de lecture) est une fonctionnalité similaire au rotor de VoiceOver, il permet de sélectionner des types d’éléments (liens, boutons, entêtes, etc.) pour la navigation rapide (glisser haut/bas).

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
- la couleur.

##### Android

L’utilisation d’un clavier externe avec Android peut se faire de plusieurs façons, et la norme EN 301 549 n’impose pas de méthode. 

###### Accès clavier seul

La méthode la plus simple est de connecter un clavier externe en USB ou <span lang="en">Bluetooth</span> au terminal mobile, et de réaliser les tests sans aucun paramétrage. 

Vous pouvez consulter la [liste des raccourcis clavier disponibles pour Android](https://appt.org/en/docs/android/features/keyboard-access) afin de naviguer efficacement.

###### Accès clavier avec un service d’accessibilité

Si les tests ne sont pas satisfaisants, il est possible de réaliser des tests complémentaires en utilisant le service d’accessibilité [Switch Access](https://support.google.com/accessibility/android/answer/6122836?hl=fr){lang=en}. 

Un guide vous permet de configurer pas à pas votre clavier externe en définissant des commutateurs, il est disponible dans <em>Préférences &gt; Accessibilité &gt; <span lanf="en">Switch Access</span> &gt; Paramètres &gt; Ouvrir le guide de configuration</em>. Vous allez associer deux actions :

* <em>Passer à l’option suivante</em>&nbsp;: appuyez sur la touche du clavier que vous souhaitez associer (nous vous recommandons <kbd>Tab</kbd> pour conserver les touches utilisées lors de la navigation sur un ordinateur).
* <em>Sélectionner</em>&nbsp;: appuyez sur la touche du clavier que vous souhaitez associer (nous vous recommandons <kbd>Entrée</kbd> pour conserver les touches utilisées lors de la navigation sur un ordinateur).

Une fois la première étape de configuration terminée (avec le guide de configuration), il sera nécessaire de paramétrer d’autres touches de navigation :

* <em lang="en">Switch Access</em> &gt; Paramètres &gt; Attribuer des commutateurs pour la recherche_ : Associer le paramètre _Passer à l’option précédente_ avec une touche ou combinaison de touches (nous vous recommandons <kbd>Shift + Tab</kbd>)
* <em lang="en">Switch Access</em> &gt; Paramètres &gt; Attribuer des commutateurs à des actions_ : Associer le paramètre <em>Retour</em> avec une touche ou combinaison de touches (nous vous recommandons <kbd>ESC</kbd>)

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

#### Modifier la taille de police sur iOS

Dans iOS, il est possible d’afficher une jauge des tailles de textes qui donne la valeur du ratio d’agrandissement. Pour cela, il faut ajouter le paramètre &laquo;&nbsp;Taille du texte&nbsp;&raquo; au centre de contrôle. 

Selon la version d’iOS, il existe des méthodes différentes pour personnaliser le centre de contrôle et ainsi ajouter le paramètre &laquo;&nbsp;Taille du texte&nbsp;&raquo;. [La documentation officielle les détaille pour les versions iOS 12 à 18](https://support.apple.com/fr-fr/guide/iphone/iph59095ec58/ios#iph83c5f986c). 

On peut constater que le paramètre permet d’atteindre 190% ou 235% d’agrandissement, mais jamais 200%, ce palier n’existe pas pour l’instant. 190% étant plus proche de 200%, c’est la valeur que la méthodologie suggère de tester.

#### Diffuser l’écran du terminal mobile

La diffusion de l’écran du terminal mobile sur votre ordinateur peut vous permettre d’enregistrer certaines interactions et de faire des captures d’écran lorsque vous devez rédiger des rapports d’audit. La diffusion peut également être utile pour faire des démonstrations au cours de restitution d’audit.

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

Si vous disposez d’un ordinateur avec Windows, Windows met à disposition une fonctionnalité &laquo;&nbsp;Se connecter&nbsp;&raquo; intégrée pour diffuser certaines sources externes. [Voir la documentation](https://support.google.com/pixelphone/answer/2865484?hl=fr&ref_topic=7084202).

#### Réaliser des captures d’écran

Si la diffusion des terminaux mobiles sur l’écran d’ordinateur est impossible, une alternative satisfaisante est de réaliser des captures d’écrans depuis votre terminal mobile et d’importer ensuite ces captures, par la méthode de votre choix, sur votre ordinateur.

Pour les critères 2.2, 2.3 et 2.4 pour l’évaluation des contrastes, nous vous invitons fortement à privilégier cette méthode de capture des écrans de sorte à pouvoir évaluer précisément les tailles des textes. En effet, la capture d’écran depuis le terminal garantit des proportions préservées contrairement à une capture qui serait faite depuis un terminal projeté sur un environnement de bureau.

- [Effectuer une capture d’écran de votre appareil Android](https://support.google.com/android/answer/9075928?hl=fr).
- [Réaliser une capture d’écran sur un iPhone](https://support.apple.com/fr-fr/HT200289).

##### Importer des captures d’écrans sur l’ordinateur

De manière générale, indépendamment de la plateforme mobile ou de l’environnement de bureau, la méthode principale pour faciliter le transit des photos depuis le terminal mobile vers l’ordinateur de bureau est de **paramétrer un utilitaire de sauvegarde de photos en ligne** sur le terminal mobile, comme peuvent le faire par exemple des services tels que Dropbox, OneDrive ou Google (Photos ou Drive), et accéder à la sauvegarde depuis l’ordinateur de bureau. 

Il peut ensuite exister des méthodes spécifiques en fonction des plateformes&nbsp;: 
- Depuis iOS vers macOS&nbsp;: la fonctionnalité [AirDrop](https://support.apple.com/fr-fr/119857).
- Depuis iOS vers macOS et Windows&nbsp;: la solution [iCloud](https://support.apple.com/fr-fr/guide/photos/phtf5e48489c/mac). Cette méthode fonctionne aussi bien avec macOS que [Windows](https://support.apple.com/fr-fr/103232).
- Depuis Android vers macOS&nbsp;: la solution [MacDroid](https://www.macdroid.app/fr/).
- Depuis Android ou iOS vers Windows&nbsp;: [la connexion directe par USB](https://support.microsoft.com/fr-fr/windows/importer-des-photos-et-des-vid%C3%A9os-aed09800-f826-4d40-a243-7640de229d9d).

D’autres utilitaires peuvent convenir, la présente liste n’est pas exhaustive.

##### Évaluer la taille d’un texte

Si lors des évaluations, la taille de certains textes n’est pas évidente (par exemple, il n’est pas évident à l’évaluation à l’œil nu que tel texte soit en taille normale ou taille agrandie), alors il sera nécessaire de la mesurer pour déterminer le rapport de contraste minimum requis. Voici une méthodologie qui permet d’obtenir cette mesure&nbsp;: 
1. Déterminer la taille de l’écran du terminal de test&nbsp;:
  - activer Safari (sous iOS) ou Chrome (sous Android) et naviguer jusqu’à [https://www.mydevice.io](https://www.mydevice.io)&nbsp;;
  - repérer la valeur <code>JS screen.width</code> (qui correspond à la largeur physique de l’écran). 
1. Réinitialiser la taille de la police par défaut dans l’application pour évaluer le texte à 100%. 
  - Dans iOS, le plus simple est de passer par la jauge disponible dans [le centre de contrôle](methodologie.md#modifier-la-taille-de-police-sur-ios) pour rétablir la taille à 100%. 
  - Dans Android, s’il existe dans l’écran des paramètres de taille (*Paramètres > Accessibilité > Taille de la police*), activez la fonction permettant de réinitialiser la taille de la police. Sinon, réduire la taille pour atteindre le premier ou le second pas de la jauge, selon la taille initiale. 
1. Réaliser une capture d’écran depuis le terminal mobile et l’importer sur l’ordinateur (voir ci-dessus, c’est la méthode à privilégier afin de garantir que les tailles seront préservées).
1. Ouvrir la capture dans un logiciel de retouche d’images&nbsp;: 
  - Sur macOS, ouvrir la capture avec le logiciel &laquo;&nbsp;Aperçu&nbsp;&raquo;&nbsp;: 
    - dans le menu &laquo;&nbsp;Outils&nbsp;&raquo; choisir &laquo;&nbsp;Ajuster la taille&nbsp;&raquo;&nbsp;;
    - paramétrer les unités en pixels&nbsp;;
    - dans le champ &laquo;&nbsp;largeur&nbsp;&raquo; inscrire la valeur de la largeur de l’écran déterminée précédemment.
  - Sur Windows, ouvrir la capture avec le logiciel &laquo;&nbsp;Paint&nbsp;&raquo;&nbsp;: 
    - dans la barre d’outils, choisir l’option &laquo;&nbsp;Redimensionner&nbsp;&raquo;&nbsp;;
    - paramétrer les unités en pixels&nbsp;;
    - dans le champ &laquo;&nbsp;Horizontal&nbsp;&raquo; inscrire la valeur de la largeur de l’écran déterminée précédemment.
1. Repérer dans l’écran les textes, les textes contenus dans des éléments graphiques et les textes incrustés dans les vidéos qui pourraient poser des problèmes de contraste et déterminer leur taille&nbsp;: 
  - depuis la capture d’écran ouverte dans le logiciel de retouche, activer l’outil de sélection rectangulaire&nbsp;;
  - dessiner un rectangle autour du texte pour lequel vous souhaitez déterminer la taille&nbsp;:
    - le mieux est de démarrer depuis une majuscule, sinon d’inclure une lettre du type &laquo;&nbsp;d&nbsp;&raquo;, &laquo;&nbsp;t&nbsp;&raquo; ou &laquo;&nbsp;b&nbsp;&raquo;&nbsp;;
    - vous pouvez zoomer sur la capture d’écran pour réaliser la sélection la plus précise possible, cela n’influe pas sur le calcul de la hauteur.
  - repérer dans le logiciel la hauteur du rectangle ainsi défini&nbsp;: 
    - dans &laquo;&nbsp;Aperçu&nbsp;&raquo; la valeur s’affiche juste à côté de la sélection, la hauteur est la seconde valeur&nbsp;;
    - dans &laquo;&nbsp;Paint&nbsp;&raquo; les valeurs s’affichent dans la barre d’état en bas de la fenêtre du logiciel, la hauteur est la seconde valeur.
