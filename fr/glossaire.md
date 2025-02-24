### A

#### Accessible aux technologies d’assistance

Pour qu’une information soit accessible aux technologies d’assistance, il faut qu’elle soit mise à disposition de ces dernières, au travers du logiciel lui-même ou par l’intermédiaire d’une API d’accessibilité, cette dernière méthode étant la plus répandue.

Ceci peut être réalisé au travers des propriétés descriptives parfois non visibles sur l’interface mais restituées par les technologies d’assistance, soit au travers des paramètres de l’API définissant par exemple des états (sélectionné, actif, désactivé, etc.)

#### Accessible et activable par le clavier et tout dispositif de pointage

Les dispositifs de pointage en environnement mobile peuvent être, mais ne sont pas limités à&nbsp;: 
- le toucher&nbsp;; 
- la souris&nbsp;;
- les dispositifs d’*eye tracking*{lang=en}&nbsp;; 
- les dispositifs d’[analyse par point](https://support.apple.com/fr-fr/HT201370) sur iOS (ou [recherche par point](https://support.google.com/accessibility/android/answer/6395627?hl=fr) sur Android)&nbsp;; 
- la commande vocale.

Un composant d’interface (lien, bouton, champ de formulaire, etc.) est accessible par tout dispositif de pointage lorsque l’utilisateur &nbsp;: 
- peut prendre le focus sur le composant, indifféremment du dispositif&nbsp;;
- peut enclencher l’action prévue par le composant d’interface par une manipulation propre au dispositif (une certaine touche du clavier, un geste sur l’écran par exemple);

**Attention&nbsp;:** pour certains composants d’interface comme les potentiomètres (*slider*{lang=en}, bouton rotatif), plusieurs interactions sont possibles et donc plusieurs manipulations propres au dispositif peuvent être requises pour interagir avec le composant.  Au clavier, par exemple pour les potentiomètres, les flèches de direction (droite, gauche, haut et bas) permettent d’interagir et de modifier le composant. 

Dans ce référentiel, l’expression «&nbsp;contrôlable par le clavier et tout dispositif de pointage&nbsp;» se rapporte également à la présente définition.

**Note importante&nbsp;:** le recours à certaines technologies peut rendre la gestion du focus trop complexe ou trop instable pour ne reposer que sur la tabulation, les touches de direction et la touche entrée. Dans ce cas, la mise à disposition de raccourcis clavier peut être la seule solution pour rendre le composant utilisable. Le critère ne peut être considéré comme conforme qu’à la condition que les raccourcis clavier utilisés soient correctement documentés, qu’ils soient fonctionnels et qu’ils respectent le [critère 10.4](referentiel-technique.md#crit-10-4).

#### Accolés (étiquette et champ accolés)

 Il faut que l’étiquette et son champ soient visuellement proches, de manière à ce que la relation entre les deux ne puisse pas prêter à confusion.

#### Action complexe

Une action complexe est une action pour laquelle l’action descendante et remontante du pointeur constituent des événements indissociables de l’action, si bien qu’il n’est pas possible pour l’utilisateur d’annuler l’action descendante simplement en déplaçant son pointeur en dehors de la zone interactive. Il s’agit par exemple des mécanismes de glisser/déposer (*drag’n’drop*{lang=en}) au cours duquel l’action descendante du pointeur permet de sélectionner un item et l’action remontante du pointeur permet de positionner l’item.

#### Adjacente clairement identifiable

L’élément est mis à disposition de manière adjacente à l’objet identifié par le critère dans la représentation graphique et dans l’ordre de navigation au clavier. Si besoin, l’élément peut être disponible ailleurs dans le logiciel et être accessible avec une fonctionnalité (un bouton par exemple) adjacente à l’objet identifié dans le critère, explicite et clairement identifiable (l’intitulé de la fonctionnalité est explicite).

#### Aide à la création de contenus accessibles

Tout dispositif disponible depuis une interface d’édition de contenu, quel que soit le format de destination, qui accompagne l’auteur des contenus dans la prise en compte des règles d’accessibilité numérique.

Une aide à la création de contenus accessibles peut être un outil d’aide automatique ou une documentation. 

On compte parmi les aides à la création de contenus&nbsp;:

- des tests automatiques ou semi-automatiques disponibles depuis les fonctionnalités d’édition&nbsp;;
- d’autres outils automatiques (un chatbot par exemple)&nbsp;;
- une documentation qui explique comment définir les propriétés d’accessibilité pour chaque élément de contenu&nbsp;;
- des tests manuels disponibles depuis les fonctionnalités d’édition pour guider les auteurs dans la détection d’erreurs.

#### Application de communication orale bidirectionnelle

Les applications de communication orale bidirectionnelles sont des applications qui permettent à 2 interlocuteurs ou plus de parler simultanément. Les applications de visioconférence qui permettent de parler en même temps en sont un exemple.

#### Audiodescription synchronisée (média temporel)

Narration ajoutée (via un fichier son) à une piste sonore pour décrire les détails visuels importants qui ne peuvent être compris à partir de la piste sonore principale seulement. L’audiodescription doit être synchronisée avec le média temporel par un dispositif applicatif lié au lecteur multimédia.

**Note 1&nbsp;:** l’audiodescription d’une vidéo fournit de l’information à propos des actions, des personnages, des changements de scènes, du texte apparaissant à l’écran et d’autres contenus visuels.

**Note 2&nbsp;:** dans une audiodescription standard, la narration est ajoutée durant les pauses qui existent dans le dialogue. (Voir aussi audiodescription étendue.)

**Note 3&nbsp;:** lorsque toute l’information de la vidéo est déjà donnée dans la piste audio, aucune audiodescription supplémentaire n’est requise.

### C

#### CAPTCHA

Un CAPTCHA est un test utilisé pour distinguer un utilisateur humain d’un ordinateur. Le test utilise souvent des éléments graphiques contenant du texte déformé, mélangé avec d’autres formes ou utilisant des jeux de couleurs altérées, que l’utilisateur est invité à retaper. D’autres formes de CAPTCHA peuvent être basées sur des questions logiques ou des extraits sonores.

Le W3C fournit une documentation complète sur l’accessibilité de ce type de test&nbsp;: [Inaccessibility of CAPTCHA](https://www.w3.org/TR/turingtest/){lang=en}.

#### Caractéristique biologique

Les méthodes d’identification des utilisateurs ou de contrôle reposant sur des caractéristiques biologiques utilisables peuvent être, par exemple&nbsp;: 
- la reconnaissance d’empreintes digitales&nbsp;; 
- la reconnaissance faciale&nbsp;; 
- la reconnaissance vocale.

#### Caractéristiques essentielles des sous-titres

Il est possible d’appliquer des effets de présentation aux sous-titres (couleur des textes, style, police) afin de véhiculer une information aux utilisateurs (par exemple identifier la personne qui parle). Ces caractéristiques sont essentielles pour la compréhension des sous-titres par les utilisateurs et devraient être conservées au cours des processus de transformation (envoi ou enregistrement de la vidéo par exemple) si elles sont présentes.

#### Champs de même nature

Dans un formulaire, ensemble des champs pouvant être regroupés par la nature des informations attendues. Le regroupement vise à identifier les champs devant être traités comme un ensemble.

Quelques exemples&nbsp;:
- Trois champs successifs pour saisir une date (jour/mois/année)&nbsp;;
- Champs successifs pour un numéro de téléphone&nbsp;;
- Un bloc destiné à saisir l’identité et l’adresse de l’utilisateur, lorsque le formulaire contient plusieurs blocs de contact&nbsp;;
- Un ensemble de boutons radio ou de cases à cocher qui se rapportent à une question.

Ces champs doivent être regroupés lorsque les étiquettes des champs ne sont pas suffisantes pour informer l’utilisateur que les champs font partie d’un regroupement.

Lorsque le formulaire est constitué d’un seul bloc d’informations de même nature (l’identité et l’adresse de l’utilisateur, par exemple) ou d’un champ unique (un moteur de recherche, par exemple), le regroupement des champs n’est pas obligatoire.

#### Changement brusque de luminosité ou effet de flash

Alternance de luminosité relative qui peut causer des crises chez certaines personnes, si leur taille est suffisamment importante dans une gamme de fréquences spécifique.

#### Changement de contexte

Changements majeurs dans le contenu d’un écran qui, s’ils sont faits sans que l’utilisateur en soit conscient, peuvent désorienter l’utilisateur qui ne peut voir l’ensemble de l’écran en même temps. Les changements de contexte comprennent les changements&nbsp;:
- d’application&nbsp;;
- d’agent utilisateur&nbsp;;
- d’espace de restitution&nbsp;;
- de focus&nbsp;;
- de contenu qui modifie la signification de l’écran.

**Note&nbsp;:** un changement de contenu n’est pas toujours un changement de contexte. Un changement dans le contenu comme le déploiement d’une arborescence, un menu dynamique ou un déplacement de tabulation ne change pas nécessairement le contexte, à moins qu’il ne change aussi l’un des éléments énumérés ci-dessus (le focus, par exemple).

**Exemple&nbsp;:** l’ouverture dans un autre agent utilisateur, le déplacement du focus sur un composant différent ou la réorganisation significative du contenu de l’écran sont autant d’exemples d’un changement de contexte.

#### Communication écrite en temps réel

La communication écrite en temps réel (*Real-time text*{lang=en}, RTT) est un mode de communication écrite qui permet aux interlocuteurs de lire le texte en train d’être écrit par l’expéditeur, sans attendre que l’expéditeur valide (par exemple avec la touche <kbd>entrée</kbd>).

Les outils d’éditions collaboratifs (par exemple, les suites bureautiques en ligne) sont un exemple du principe de fonctionnement de la communication écrite en temps réel&nbsp;: les différents intervenants peuvent voir les textes écrits et modifiés par chacun au moment même de l’application des modifications aux textes. Ce fonctionnement est très différent d’un système de conversation en ligne courant (comme les messageries instantanées), qui ne transmet un message écrit aux interlocuteurs qu’à l’activation d’une touche ou d’un bouton (par exemple, la touche <kbd>entrée</kbd>).

Exemple de communication écrite en temps réel intégrée à une plateforme&nbsp;: [Answer or make RTT or TTY calls from iPhone](https://support.apple.com/en-us/HT207033){lang=en}

#### Compatible avec les technologies d’assistance

Un contenu ou une fonctionnalité doit être compatible avec les technologies d’assistance des utilisateurs ainsi qu’avec les fonctions d’accessibilité des logiciels via une API d’accessibilité.

Cela concerne, à la fois, la technologie, ses fonctionnalités et ses usages&nbsp;:
- La façon dont la technologie est utilisée doit être compatible avec les technologies d’assistance des utilisateurs. Cela signifie que la façon dont la technologie est utilisée a été testée dans une perspective d’interopérabilité avec des utilisateurs des technologies d’assistance dans les contenus du logiciel.
- La technologie fonctionne de façon native sur la plateforme et utilise l’API d’accessibilité de la plateforme.

#### Composant d’interface

Un composant d’interface est un élément avec lequel l’utilisateur peut interagir, par exemple un bouton, un lien, une zone de saisie. Certains composants peuvent être plus complexes comme un menu, une fenêtre de dialogue, un système d’onglets. Enfin un composant d’interface peut être basé sur des éléments natifs du langage de la plateforme ou développés de toutes pièces.

Note&nbsp;: Les composants d’interface natifs HTML ne se retrouvent pas tous dans les langages de développement d’applications mobiles. Par exemple, les boutons radio ou les cases à cocher n’existent pas en tant que tels pour les applications développées pour iOS. Il s’agira alors pour les développeurs d’utiliser les composants les plus adaptés disponibles dans les langages de développement pour remplir une fonction similaire. Pour reproduire ce qui serait une liste de boutons radio, il est possible par exemple d’utiliser des listes de boutons associés à un état sélectionné ou non sélectionné. Ainsi, lors des tests qui seront réalisés au lecteur d’écran, il est possible que le rôle annoncé ne corresponde pas au rôle figuré par l’interface (par exemple, un bouton qui aurait l’apparence d’un bouton radio). Néanmoins, si le rôle et l’état du composant sont pertinents et accessibles aux technologies d’assistance, alors le critère sera considéré conforme pour ce composant.

#### Composant dont la nature n’est pas évidente

Composant interactif mêlé à des éléments non interactifs (du texte par exemple) et qui n’est pas différenciable visuellement des éléments non interactifs.

#### Cohérent (ordre de lecture)

Un contenu compréhensible est lisible (l’ordre des éléments est logique) et cohérent (l’enchaînement de la lecture est cohérent).

#### Contraste

Opposition marquée entre la luminosité d’une couleur de premier plan et d’une couleur d’arrière-plan. Le rapport de contraste est basé sur la différence de luminance relative entre l’arrière-plan et le premier plan selon la règle&nbsp;: (L1 + 0,05) / (L2 + 0,05) où L1 est la luminance relative la plus claire et L2 la luminance relative la plus sombre. La luminosité est calculée selon la formule suivante&nbsp;: L = 0,2126 * R + 0,7152 * G + 0,0722 * B. Où R, G et B sont définis par&nbsp;:
- Si RsRGB <= 0,03928 alors R = RsRGB/12,92 sinon R = ((RsRGB+0,055)/1,055) ^ 2,4&nbsp;;
- Si GsRGB <= 0,03928 alors G = GsRGB/12,92 sinon G = ((GsRGB+0,055)/1,055) ^ 2,4&nbsp;;
- Si BsRGB <= 0,03928 alors B = BsRGB/12.92 sinon B = ((BsRGB+0,055)/1,055) ^ 2,4.

et RsRGB, GsRGB et BsRGB sont définis par&nbsp;:
- RsRGB = R8bit/255&nbsp;;
- GsRGB = G8bit/255&nbsp;;
- BsRGB = B8bit/255.

Le caractère «&nbsp;^&nbsp;» est l’opérateur de puissance.

**Note&nbsp;:** la mesure de contraste concerne le texte, le contenu dans les éléments graphiques, le texte et le texte en image dans les animations, le texte de sous-titrage et le texte incrusté dans les vidéos. Les textes présents dans les éléments d’un élément graphique ou d’une vidéo (par exemple un écriteau, une affiche, etc.) ne sont pas concernés.

**Source&nbsp;:** [Procédure de calcul de contraste des WCAG (en anglais)](https://www.w3.org/WAI/WCAG21/Techniques/general/G18#procedure).

#### Contraste (taille des textes)

La norme distingue plusieurs tailles de textes à évaluer, chaque taille relevant d’un seuil de contraste. Ces tailles sont évaluées en pixel ou en point. Plus un texte est grand (supérieur à 18,5px avec effet de graisse ou 24px sans effet de graisse) moins le rapport requis est élevé (3:1).

Dans le référentiel&nbsp;:
- un texte en taille normale est un texte d’une taille calculée de moins de 24px sans effet de graisse ou de moins de 18,5px avec effet de graisse&nbsp;;
- un texte de grande taille est un texte d’une taille calculée de 24px ou plus sans effet de graisse ou de moins 18,5px ou plus avec effet de graisse.

#### Contrôle (contenu en mouvement ou clignotant)

Possibilité pour l’utilisateur de contrôler l’affichage ou la lecture d’un contenu en mouvement ou clignotant au moyen de tous les dispositifs de pointage (toucher, clavier, souris, etc.).

Tous les contenus en mouvement, à l’exception des médias temporels pris en charge par la thématique [Multimédia](referentiel-technique.html#topic-3), sont concernés&nbsp;: les éléments graphiques animés, les contenus en mouvement par exemple.

**Note 1&nbsp;:** lorsque c’est approprié, la méthode de contrôle devrait être disponible comme premier élément de l’interface.

**Note 2&nbsp;:** la méthode de contrôle du contenu en mouvement ou clignotant doit permettre à l’utilisateur d’interagir avec le reste de l’application. En conséquence, l’arrêt ou la mise en pause via un événement déclenché uniquement sur la prise de focus ne permet pas de valider le critère.

**Note 3&nbsp;:** dans certains cas, le mouvement fait partie intégrante du composant et il n’est pas possible d’en donner le contrôle à l’utilisateur, par exemple une barre de progression dont la fonction est d’indiquer par un mouvement la progression d’un événement comme un téléchargement. Dans ce cas, le critère est non applicable.

#### Contrôle (son déclenché automatiquement)

Possibilité pour l’utilisateur d’arrêter ou de relancer un son déclenché automatiquement.

**Note&nbsp;:** la méthode de contrôle du son devrait être disponible comme premier élément de l’écran.

#### Contrôle à bascule

Un contrôle à bascule est un contrôle qui peut avoir 2 ou 3 états, et donc l’état défini par l’utilisateur est persistant jusqu’au prochain d’état. Cela peut être un contrôle de verrouillage de l’écran (l’écran est soit allumé soit éteint), un contrôle permettant d’activer ou désactiver les notifications d’une application.

Exemples de contrôles à bascule&nbsp;: 
- une case à cocher, 
- un bouton radio, 
- un bouton qui peut avoir un état activé ou désactivé.

#### Contrôle de la consultation (d’un média temporel)

Possibilité pour l’utilisateur de contrôler la consultation d’un média temporel par le clavier et tout dispositif de pointage, au moins. Les points suivants doivent être respectés&nbsp;:

Liste des fonctionnalités obligatoires de contrôle de la consultation&nbsp;:
- L’objet multimédia doit toujours avoir les fonctionnalités suivantes, au minimum&nbsp;: lecture, pause ou stop&nbsp;;
- Si l’objet multimédia a du son, il doit avoir une fonctionnalité d’activation / désactivation du son&nbsp;;
- Si l’objet multimédia a une audiodescription, il doit avoir une fonctionnalité de contrôle de l’activation et désactivation de l’audiodescription. 
- Si l’objet multimédia a des sous-titres, il doit avoir une fonctionnalité de contrôle de l’activation et désactivation des sous-titres.

Chaque fonctionnalité doit être accessible par le clavier et tout dispositif de pointage (toucher, lecteur d’écran, clavier, souris, etc.).

Si le lecteur ne permet pas d’inclure une seconde piste audio pour l’audiodescription, un lien (ou un bouton) vers une vidéo alternative avec audiodescription est une fonctionnalité alternative satisfaisante. De même pour les sous-titres&nbsp;: si la vidéo ne dispose pas de sous-titres activables et désactivables, la présence d’une vidéo alternative avec les sous-titres (disponible depuis un lien ou un bouton) est une alternative satisfaisante.

**Note&nbsp;:** s’il n’y a pas de son à un média temporel, il n’est pas utile de mettre une fonctionnalité d’activation / désactivation du son. Si cette fonctionnalité est cependant présente et qu’elle nécessite une alternative textuelle pour être comprise par certains utilisateurs, il faut alors lui en donner une puisque l’utilisateur est susceptible d’y accéder et de vouloir l’activer.

#### Contrôle de saisie (formulaire) 

Ensemble des processus qui permettent de prévenir l’utilisateur&nbsp;: 
- des champs obligatoires, 
- des indications de type ou de format attendus, 
- des erreurs de saisie dans un formulaire. 

#### Contrôles natifs de la plateforme

Les plateformes disposent de contrôles natifs, par exemple un *color picker*{lang=en} natif pour la sélection de couleur, un calendrier ou un champ spécifique contenant le contrôle du format pour la sélection de dates, etc. Les champs de formulaires qui attendent des formats particuliers (comme une date par exemple) devraient utiliser les contrôles natifs de la plateforme pour assurer un maximum de compatibilité avec les technologies d’assistance.

#### Couleur adjacente

Couleur directement en contact avec les couleurs du composant ou de l’élément graphique, cela peut être la couleur d’arrière-plan ou toute autre couleur en jonction directe.

**Exemple&nbsp;:** dans un panneau de «&nbsp;sens interdit&nbsp;», le rouge du panneau est la couleur adjacente au trait blanc au centre du panneau.

Il est important de comprendre que le [critère 2.3](referentiel-technique.md#crit-2-3) sur les contrastes des composants d’interfaces et des éléments graphiques évalue uniquement les éléments **non textuels**. Dès qu’il s’agira d’évaluer le contraste d’un texte, même s’il est présent dans un composant d’interface, c’est le [critère 2.2](referentiel-technique.md#crit-2-2) qui s’applique.

Toutes les couleurs d’un élément graphique ou d’un composant d’interface ne sont pas à évaluer. Il est essentiel d’évaluer&nbsp;: 
- **Les mises en couleur porteuses d’information** (toutes les mises en couleur ne sont pas porteuses d’information)&nbsp;: 
	- Par exemple, dans le panneau de navigation d’une application, les boutons de navigation ont une couleur de fond grise, mais le bouton de l’écran actif a une couleur de fond verte. Il est nécessaire de vérifier que la couleur verte en jonction directe avec la couleur de fond grise a un rapport de contraste de 3:1 au moins.
- **Les mises en couleur permettant d’identifier la localisation d’un élément ou les zones interactives**, par exemple&nbsp;: 
	- La bordure d’un champ de formulaire, si celle-ci est le seul moyen d’identifier la localisation de l’interaction, doit avoir une couleur qui présente un rapport de contraste de 3:1 au moins avec la couleur adjacente, généralement la couleur de fond&nbsp;;
	- Les bordures des cases à cocher et boutons radio, ainsi que leur état (sélectionné ou non). Il est essentiel ici d’évaluer le rapport de contraste de la bordure de ces composants avec les couleurs adjacentes (généralement la couleur de fond) mais également d’évaluer le rapport de contraste de ces composants lorsqu’ils sont sélectionnés. Il faut évaluer si l’élément visuel utilisé pour signifier la sélection a un rapport de contraste suffisant.
- **Les couleurs des éléments non textuels porteurs d’information** (éléments graphiques)&nbsp;:
	- Un chevron est positionné à droite de l’item sélectionné dans une liste d’items, le rapport de contraste entre la couleur du chevron et les couleurs adjacentes (généralement la couleur de fond) doit être de 3:1 au moins. 

La couleur de fond d’un bouton d’envoi de formulaire par exemple (&laquo;&nbsp;Envoyer&nbsp;&raquo;) n’a pas à être contrastée avec le fond de l’écran. En effet, la localisation du bouton se fait par le texte, qui doit déjà respecter les contraintes de contrastes des textes ([critère 2.2](referentiel-technique.md#crit-2-2)). La taille du bouton et ses rebords ne sont pas considérés comme des informations qui répondent de ce critère.

**Note 1&nbsp;:** dans le cas de la présence d’un dégradé, c’est la couleur adjacente la moins contrastée du dégradé qui sera à considérer comme la couleur adjacente.

**Note 2&nbsp;:** dans le cas de la présence de plusieurs couleurs, c’est l’ensemble des couleurs qui seront à considérer comme couleurs adjacentes.

### D

#### Description détaillée

Contenu associé à un [élément graphique](#element-graphique) en complément de son alternative textuelle afin de décrire en totalité l’information véhiculée par l’élément.

#### Documentation 

La documentation d’une application ou d’un [service d’assistance](#service-d-assistance) peut être&nbsp;:
- un écran d’aide&nbsp;;
- une [déclaration d’accessibilité](../obligations.html#déclaration-d’accessibilité)&nbsp;;
- tout autre contenu qui fait office de documentation (document PDF, page HTML externe lisible dans un navigateur web).

#### Donnée personnelle de l’utilisateur

Les données personnelles concernant l’utilisateur dans un formulaire peuvent être&nbsp;: 
- le nom&nbsp;; 
- le prénom&nbsp;;
- le mot de passe&nbsp;;
- l’adresse *e-mail*{lang=en}&nbsp;;
- l’adresse postale&nbsp;;
- le code postal&nbsp;; 
- le numéro de téléphone&nbsp;; 
- les codes de carte bleue&nbsp;; 
- la date d’anniversaire&nbsp;; 
- l’URL d’une page web présentant l’utilisateur ou l’organisation que représente la personne.

### E

#### Élément graphique

Élément faisant appel à une représentation visuelle telle que des images, des pictogrammes ou des graphiques.

Cet élément peut être composé d’une ou plusieurs parties dont la visibilité est nécessaire à sa compréhension (par exemple chaque point sur chaque ligne d’un graphique de statistiques).

Le rôle &laquo;&nbsp;Image&nbsp;&raquo; n’est pas restitué de manière uniforme sur tous les environnements.
- TalkBack (Android)&nbsp;: la nature des éléments graphiques n’est pas restituée lorsqu’ils sont intégrés dans une application native, le lecteur d’écran restituera la description si elle est définie mais n’annoncera pas &laquo;&nbsp;image&nbsp;&raquo;. Par contre, pour les images intégrées dans des [vues web](glossaire.md#vues-web), le lecteur d’écran restitue &laquo;&nbsp;Éléments graphiques&nbsp;&raquo;.
- VoiceOver (iOS)&nbsp;: que ce soit dans une application native ou dans une vue web, VoiceOver restitue  &laquo;&nbsp;Image&nbsp;&raquo; pour les images auxquelles il peut accéder.

De manière générale, selon la méthode de développement, il est également possible que le rôle ne soit restitué ni sur TalkBack ni sur VoiceOver. Dès lors, c’est l’observation seule qui permettra de déterminer la nature de l’élément.

Il n’est pas essentiel que le rôle &laquo;&nbsp;Image&nbsp;&raquo; soit restitué dans la majeure partie des cas. Sauf cas particuliers où l’identification du rôle est essentiel, l’absence de rôle restitué ne peut pas constituer une non-conformité.

#### Élément graphique de décoration

[Élément graphique](#element-graphique) n’ayant aucune fonction et ne véhiculant aucune information particulière par rapport au contenu auquel il est associé. Exemples&nbsp;:
- Un élément graphique servant à caler la mise en page.
- Un élément graphique présent à côté d’un intitulé de bouton servant juste d’agrément graphique (une icône, une mise en forme).
- Un élément graphique n’apportant aucune information nécessaire à la compréhension du texte auquel il est associé (une image décorative).

#### Élément graphique de test

[Élément graphique](#element-graphique) servant dans un test, un CAPTCHA ou un élément graphique servant de test dans un quiz ou un jeu. Exemple&nbsp;: une série d’éléments graphiques présente un détail issu de tableaux célèbres, il faut reconnaître le titre et le peintre de chaque tableau. Dans cette situation, il n’est pas possible de donner une alternative pertinente (par exemple le nom du tableau et/ou du peintre) sans rendre le test inutilisable. L’alternative doit alors se contenter de donner la possibilité d’identifier l’élément graphique, par exemple «&nbsp;image 1 du test&nbsp;».

#### Élément graphique légendé

Lorsqu’un texte, adjacent à un élément graphique, contient des informations sur l’élément graphique (par exemple un copyright, une date, un auteur…) ou est destiné à compléter les informations apportées par l’élément graphique (par exemple un texte associé à une image dans une galerie d’images), on parle d’élément graphique légendé.

Lorsqu’un élément graphique est légendé, il est nécessaire d’associer la légende à l’élément graphique, de telle sorte que les technologies d’assistance puissent traiter l’élément graphique et sa légende comme un ensemble unique.

#### Élément graphique porteur d’information

[Élément graphique](#element-graphique) qui véhicule une information nécessaire à la compréhension du contenu auquel il est associé.

#### Élément graphique texte

[Élément graphique](#element-graphique) affichant du texte.

Il n’est pas recommandé d’utiliser des éléments graphiques contenant du texte. Lorsqu’il est possible de reproduire les mêmes effets avec la technologie dans laquelle est développée l’interface, le [critère 1.8](referentiel-technique.html#crit-1-8) impose que le texte soit reproduit dans ce format ou qu’un mécanisme de remplacement permette à l’utilisateur de remplacer ces éléments graphiques par du texte stylé.

### F

#### Fonctionnalité d’accessibilité 

Exemple de fonctionnalité d’accessibilité&nbsp;: 
- un dispositif permettant de charger une palette de couleurs plus contrastées pour les utilisateurs&nbsp;;
- un dispositif d’agrandissement de taille des caractères&nbsp;; 
- un composant permettant d’accéder à une version en langage simplifié&nbsp;;
- des raccourcis clavier spéciaux disponibles pour certaines technologies d’assistance&nbsp;;
- des gestes ou mouvements d’appareil qui déclenchent des fonctionnalités&nbsp;;
- un rotor personnalisé sur certains écrans (le rotor est une fonctionnalité des lecteurs d’écran qui permet une navigation rapide entre des types d’éléments d’un écran, certaines plateformes permettent de définir des éléments de navigation rapide spécifique à une application dans ce rotor. [Voir une démonstration](https://developer.apple.com/videos/play/wwdc2020/10116/)).

#### Fonctionnalités principales (d’un média temporel)

Les fonctionnalités de contrôle principales sont les fonctionnalités de base d’un lecteur multimédia&nbsp;: lecture, pause, stop, contrôle du son.

#### Fonctionnalités vocales

Dans un système de communication orale (téléphonie par exemple), des fonctionnalités peuvent être mises à disposition, par exemple&nbsp;:
- une messagerie vocale (répondeur)&nbsp;; 
- un standard téléphonique automatique qui demande d’énoncer un chiffre entre 1 et 4 pour être redirigé vers un service,
- ou tout autre serveur vocal interactif.

### G

#### Gabarit

Un gabarit est un format de document qui possède des paramètres prédéfinis. Il est utilisé pour insérer les contenus édités par l’auteur. Un gabarit possède des paramètres de présentation, d’utilisation ou encore des paramètres techniques non perceptibles.

Un gabarit peut concerner une page entière ou un écran entier (gabarit de page d’accueil, etc.) ou des types de contenus particuliers (formulaires, images, vidéos…)

Un ensemble de gabarits est un groupe de gabarits qui permettent des mises en forme différentes d’un même élément. Par exemple&nbsp;:
- gabarits pour l’écran d’accueil de l’application&nbsp;;
- gabarits pour les écrans contenant des éléments interactifs&nbsp;;
- gabarits pour la création d’un PDF.

#### Gestes complexes et gestes simples

Un geste simple avec un écran implique un contact en un point unique de l’écran. Il peut s’agir d’une pression ou d’un clic simple, d’une double pression ou d’un double-clic, d’une pression prolongée. 

Un geste complexe peut être&nbsp;:
- un geste impliquant plusieurs points de contact sur l’écran (exemple&nbsp;: un geste avec deux doigts sur l’écran pour zoomer ou dézoomer une carte)&nbsp;; 
- un geste basé sur le suivi d’une trajectoire sur l’écran (exemple&nbsp;: fonction permettant de détecter le déplacement d’un doigt vers la gauche ou droite sur une surface tactile pour déclencher le passage à l’item précédent / suivant d’un carrousel).

### H

#### Horodatage (*time stamp*{lang=en})

L’horodatage d’une vidéo (*time stamp*{lang=en}) est la valeur temporelle déclarée dans le fichier de sous-titres.

```
1
00:00:03,000 --> 00:00:06,999
Le sous-titre doit apparaître lorsque la vidéo atteint 3 secondes.
````

### I

#### Ignoré par les technologies d’assistance

La restitution d’éléments comme des éléments graphiques de décoration qui n’apportent pas d’information pertinente peut créer des conditions de consultation complexes en surchargeant d’informations inutiles la restitution par les technologies d’assistance.

Il est donc important de pouvoir empêcher la restitution de ces éléments. La plupart des API d’accessibilité possèdent des propriétés ou des méthodes permettant d’empêcher la restitution de ce type d’élément.

 #### Indication de champ obligatoire

Indication textuelle ou graphique (icône) permettant à l’utilisateur de savoir que la saisie d’un champ est obligatoire préalablement à la saisie.

Note&nbsp;: Dans le cas où cette indication n’est pas réalisée de manière textuelle explicite (icône, «&nbsp;\*&nbsp;», «&nbsp;!&nbsp;», etc.), l’explication de la signification de cette indication doit se situer, visuellement et dans l’ordre de lecture, avant la première utilisation de l’indication.

#### Information d’accessibilité

Les informations d’accessibilité sont toutes les informations (attributs, relations programmatiques, alternatives, etc.) nécessaires pour rendre un contenu accessible. Par exemple&nbsp;: l’alternative d’un élément graphique, la sémantique d’un passage de texte, le titre d’un cadre en ligne ...

Par exemple, en HTML, l’attribut `alt` d’une image est une information d’accessibilité.

Un outil d’édition devrait disposer de fonctionnalités qui permettent de définir toutes les informations nécessaires à la création d’un contenu accessible, par exemple&nbsp;: 
- pouvoir définir l’alternative d’une image ou au contraire pouvoir la déclarer décorative&nbsp;;
- pouvoir définir des titres de section&nbsp;;
- pouvoir définir la langue d’un passage de texte&nbsp;;
- pouvoir définir des étiquettes aux champs de formulaires.

Tous les critères d’accessibilité relatifs à la technologie de contenu visée sont concernés. Par exemple, pour une page en HTML, ce sont tous les critères du [RAWeb](../raweb1/criteres.html) de niveau A et AA qui doivent pouvoir être respectés. Pour la création d’un document au format PDF, ce sont tous les critères du référentiel d’évaluation de l’accessibilité des documents au format PDF ([RAPDF](../rapdf1/index.html)) de niveau A et AA qui doivent pouvoir être respectés. Pour une application, ce sont tous les critères du présent référentiel qui doivent pouvoir être respectés.

#### Information donnée par la couleur

Information transmise visuellement par l’intermédiaire d’une couleur. L’indication que les champs en rouge sont obligatoires dans un formulaire, le bouton actif dans une liste de boutons, le changement de couleur d’un nom d’article pour indiquer son indisponibilité dans une liste d’articles sont autant d’exemples d’indication donnée par la couleur.

L’indication donnée uniquement par la couleur doit être accompagnée d’une autre méthode à destination des utilisateurs qui ne voient pas ou perçoivent mal les couleurs ou leurs associations.

L’indication donnée par la couleur doit être fournie&nbsp;: 
- par un moyen faisant intervenir du graphisme (pictogramme, image de fond, forme, style de bordure différent, etc.) ou un autre style typographique (gras, italique, taille de texte, autre police, etc) pour les utilisateurs qui perçoivent mal les couleurs&nbsp;;
- et par une information descriptive (non visible) présente sur l’élément afin que les lecteurs d’écran restituent l’information aux utilisateurs qui ne voient pas.

#### Indication donnée par la forme, la taille ou la position

Il peut s’agir, par exemple&nbsp;:
- de la présence d’un marqueur visuel, pour indiquer l’écran actif dans un menu de navigation (indication donnée par la position)&nbsp;;
- d’une mise en avant-plan pour indiquer un onglet actif (indication donnée par la forme)&nbsp;;
- d’une modification de la taille de police dans un nuage de tags (indication donnée par la taille).
- Ou tout autre effet graphique similaire.

#### Intitulé visible

Texte affiché faisant office d’intitulé visible à l’écran au sein d’un bouton ou d’un lien.

Texte affiché faisant office d’étiquette pour un champ formulaire.

Ce texte peut être constitué de texte ou d’une image contenant du texte.

### L

#### Listes

Suite d’éléments pouvant être regroupés sous la forme d’une liste structurée. Par exemple la suite des liens d’un menu de navigation est une liste de liens, les différentes étapes d’une procédure sont une liste d’éléments.

La notion de « regroupés visuellement sous forme de liste » se caractérise par&nbsp;:

- La présence d’un marqueur visuel permettant de faire comprendre qu’il s’agit d’une liste non ordonnée par exemple -, •, \*, etc.&nbsp;;
- La présence d’un marqueur visuel permettant de faire comprendre qu’il s’agit d’une liste ordonnée par exemple un chiffre, une lettre grecque, etc.&nbsp;;
- La présence d’une série d’éléments se suivant visuellement les uns les autres, avec une forme visuelle, une nature et un fonctionnement identique, mais sans avoir directement de marqueur visuel de liste, par exemple un menu de navigation.

Attention cependant toutes les listes ne nécessitent pas obligatoirement une structure de liste, par exemple une série de termes séparés par une virgule.

### M

#### Mécanisme de remplacement

Un mécanisme de remplacement est un dispositif permettant à l’utilisateur d’accéder à une version de l’application avec certains paramètres (généralement d’affichage) modifiés (par exemple, les couleurs de police et de fond).

Ce mécanisme peut être fourni par la plateforme elle-même ou par l’application. Lorsque la plateforme possède un mécanisme de remplacement robuste, les auteurs doivent privilégier son utilisation à un mécanisme de remplacement propre à l’application.

Les plateformes proposent aux utilisateurs plusieurs mécanismes de remplacement. L’activation de ces mécanismes de remplacement est détectable par les applications qui peuvent en retour servir des informations et présentations particulières.

##### Mécanismes de remplacement disponibles dans iOS

- **Augmenter le contraste**&nbsp;: L’option est disponible depuis le chemin&nbsp;: *Réglages > Accessibilité > Affichage et taille du texte > Augmenter le contraste*. Lorsqu’elle est activée, cette option permet de charger des styles différents qui auraient été définis par l’auteur pour cette option précise afin d’offrir une version plus contrastée aux utilisateurs qui en auraient besoin. De plus, cette option permet d’augmenter le contraste des composants natifs d’iOS comme les boutons *switch*{lang=en}.
- **Différencier sans couleur**&nbsp;: L’option est disponible depuis le chemin&nbsp;: *Réglages > Accessibilité > Affichage et taille du texte > Différencier sans couleur*. Lorsqu’elle est activée, cette option permet de charger des informations visuelles supplémentaires autres que la couleur (par exemple, forme ou taille) qui auraient été définies par l’auteur pour cette option précise afin de mettre en évidence un élément graphique dont la mise en couleur est porteuse d’information (un bouton actif par exemple).

##### Mécanismes de remplacement disponibles dans Android

Il n’existe pas de mécanisme de remplacement dans Android équivalent à ceux d’iOS, ou qui soit suffisamment robuste.

Le mécanisme de remplacement disponible sur Android (&laquo;&nbsp;**Texte avec contraste élevé**&nbsp;&raquo;) est encore expérimental. Son utilisation n’est pour l’instant pas recommandée.

##### Autres mécanismes de remplacement non délivrés par les plateformes

Lorsque la plateforme ne propose pas de mécanisme de remplacement pour certains paramètres, l’application peut en proposer depuis son interface.

#### Mécanisme qui permet d’activer une fonctionnalité d’accessibilité

Composant d’interface ou ensemble de composants d’interface permettant d’activer une fonctionnalité qui prend en compte un ou des besoins d’adaptation de l’interface. Par exemple&nbsp;: un bouton permettant d’afficher un écran avec des contrastes conformes ou un bouton permettant d’augmenter l’interlignage des paragraphes.

On parle également d’**ensemble de composants** lorsque dans certaines interfaces, le composant qui permet d’activer la fonctionnalité n’est rendu disponible que depuis l’activation nécessaire préalable d’un ou plusieurs autres composants. Par exemple&nbsp;: un bouton permet d’afficher une fenêtre modale qui elle-même contient un bouton qui permet d’afficher un écran avec des contrastes conformes. Dans ce cas, le bouton qui affiche la fenêtre modale **et** le bouton permettant d’activer l’affichage des contrastes conformes constituent à eux deux le mécanisme.

Ce mécanisme doit conserver à l’identique les contenus et les fonctionnalités de l’application ou de l’écran qu’il modifie.

#### Mécanisme qui permet d’afficher un rapport de contraste conforme

Composant d’interface dont l’activation permet de modifier l’apparence du site ou de la page de manière à afficher les contenus avec un ratio de contraste suffisant. Le design de ce composant d’interface devra être conforme au [critère 2.2](referentiel-technique.md#crit-2-2) et au [critère 2.3](referentiel-technique.md#crit-2-3) sans avoir recours lui-même à un mécanisme permettant d’afficher un rapport de contraste conforme. Ce mécanisme doit conserver à l’identique les contenus et les fonctionnalités du site ou de la page qu’il modifie.

#### Média temporel (type son, vidéo et synchronisé)

- Média temporel seulement audio&nbsp;: contenu sonore (Wav, MP3…).
- Média temporel seulement vidéo&nbsp;: images ou photos en mouvement ou en séquence.
- Média temporel synchronisé&nbsp;: flux audio ou vidéo synchronisé avec un autre format pour présenter de l’information et/ou comportant des composants temporels interactifs. Un média temporel peut être consulté de 2 manières différentes&nbsp;:
	- fichier à télécharger consultable avec un logiciel externe&nbsp;;
	- contenu embarqué dans le logiciel et consultable depuis l’interface.

Un média temporel peut être diffusé en temps réel ou être proposé en lecture de manière asynchrone (média préenregistré).

**Note 1&nbsp;:** les gif animés, les animations d’images par un script dans l’application ne sont pas considérés comme étant des médias temporels.

#### Message de statut

Un message de statut informe l’utilisateur d’un changement de contenu dans l’écran sans interrompre son activité principale (il n’y a pas de changement de contexte comme par exemple un repositionnement du focus sur le message).

Un message de statut peut informer sur&nbsp;:
- Le succès ou le résultat d’une action&nbsp;;
- L’état occupé d’une application&nbsp;;
- L’état de progression d’un processus&nbsp;;
- L’existence d’erreur.

Un message de statut n’est pas nécessairement visible à l’écran, mais il doit toujours être accessible aux technologies d’assistance.

#### Modifier ou annuler les données et les actions effectuées

Procédés par lesquels un utilisateur peut modifier les données qu’il a saisies, faire annuler sa saisie ou faire annuler les actions découlant de sa saisie par exemple annuler une commande ou un virement bancaire.

Note&nbsp;: L’écran contenant un formulaire qui modifie ou supprime des données, ou qui transmet des réponses à un test ou un examen, ou dont la validation a des conséquences financières ou juridiques, doit indiquer explicitement la durée pendant laquelle l’utilisateur peut demander l’annulation de sa saisie. Elle devra également contenir la procédure à effectuer pour annuler cette saisie. Cette procédure n’a pas à être obligatoirement réalisable en ligne même si cela reste recommandé.

### N

#### Nom, rôle, valeur, paramétrage et changements d’état

Un composant doit avoir un rôle et un nom appropriés, ses valeurs, états et paramètres éventuels doivent également être accessibles et correctement transmis aux API d’accessibilité.

Le nom peut être l’intitulé du composant comme l’intitulé d’un bouton par exemple.

La valeur est, par exemple, l’élément sélectionné d’une liste déroulante ou la valeur actuelle d’un curseur.

Le rôle correspond au type d’élément défini dans la spécification de la technologie employée. Le rôle (bouton, lien, champ de saisie par exemple) est généralement restitué par les technologies d’assistance.

Le paramétrage correspond aux informations particulières d’un composant. Par exemple un paramètre qui transmet aux API l’information que le composant contrôle tel ou tel contenu.

Les changements d’état doivent également être mis à disposition. Par exemple, l’utilisation d’une propriété permettant de signaler aux API que le composant est «&nbsp;ouvert&nbsp;» ou «&nbsp;fermé&nbsp;». Note&nbsp;: un état peut également être transmis via le nom, lorsque l’intitulé est changé dynamiquement pour correspondre à l’état de la zone contrôlée notamment.

Ces paramètres ne sont pas obligatoires, mais peuvent être requis s’ils sont indispensables pour rendre le composant accessible. C’est à l’auditeur de considérer les cas où ces paramètres sont indispensables en fonction du contexte lié à l’utilisation du composant.

L’auditeur doit également vérifier que, lorsqu’ils sont présents, ces paramètres sont correctement utilisés.

### O

#### Ordre de tabulation

Ordre dans lequel le focus du clavier se déplace (vers un élément suivant ou vers un élément précédent). 

**Attention&nbsp;:** lorsqu’un élément initie un changement dans l’écran (changement de contexte, gestion de zones cachées, ajout de contenu, gestion de champs de formulaire…) il est nécessaire d’activer l’élément qui initie le changement pour tester la cohérence de l’ordre de tabulation.

#### Outil d’édition

Application ou composant d’édition présent dans une application permettant de créer ou modifier du contenu destiné à être diffusé pour d’autres utilisateurs. Un outil d’édition peut être utilisé par un ou plusieurs utilisateurs travaillant en collaboration.

Un outil d’édition peut être&nbsp;:
- l’outil tel qu’il est délivré par l’éditeur&nbsp;;
- l’outil augmenté d’extensions non développées par l’éditeur&nbsp;;
- un ensemble d’outils.

Exemples d’outils d’édition&nbsp;:
- application permettant d’éditer et de contrôler le contenu de sites web ou application, par exemple, les CMS (*Content Management System*{lang=en}), LMS (*Learning Management System*{lang=en}), LCMS (*Learning Content Management System*{lang="en"}), agrégateur de contenus&nbsp;;
- application permettant de créer des documents bureautiques (par exemple pour une diffusion au format PDF)&nbsp;;
- outils d’édition multimédia&nbsp;;
- application permettant la création d’applications web&nbsp;;
- application permettant l’édition de code&nbsp;;
- application permettant d’exporter au format d’une technologie web (par exemple, un logiciel qui permet de sauvegarder en HTML)&nbsp;;
- application qui génère du contenu sur la base de gabarits, scripts, ligne de commande, etc.&nbsp;;
- application ou fonctionnalité d’une application permettant d’éditer des portions de pages web ou d’applications (typiquement, les systèmes de blog, les fonctionnalités de commentaires sur les sites web, les forums ou encore les systèmes wiki)&nbsp;;
- application mail permettant d’envoyer des *e-mails*{lang=en}.

Exemples d’outils d’édition qui ne sont pas inclus dans le champ d’application&nbsp;:
- Une application dont le contenu créé n’est pas mis à disposition d’autres utilisateurs (application de prise de note sans fonctionnalité de partage par exemple). Dans ce cas, le contenu édité n’est disponible que pour le propriétaire et n’est pas mis à destination d’autres utilisateurs.
- Les formulaires à destination des utilisateurs. Par exemple, un formulaire de commande d’une application e-commerce. Bien que les formulaires permettent d’éditer des contenus, ces contenus ne sont pas mis à disposition d’autres utilisateurs.
- Les outils de contrôles d’accessibilité indépendants&nbsp;: ces outils ne modifient pas le contenu qu’ils contrôlent.

Les outils d’édition ne sont pas à intégrer systématiquement dans l’échantillon. Par exemple, lors de l’audit d’une application d’actualités, le RAAM ne réclame pas à ce que l’outil d’édition (par exemple un CMS) qui permet de créer les contenus, soit lui-même audité. Si l’objet de l’audit est d’évaluer l’interface publique de consultation, l’échantillon ne doit contenir que les écrans publics représentatifs, mais pas l’outil de gestion des contenus. 

### P

#### Piège au clavier

On parle de piège au clavier lorsqu’un utilisateur qui navigue au clavier, depuis une position dans l’écran (par exemple un champ de formulaire, un bouton, un composant complexe), ne peut pas atteindre le composant suivant ou précédent.

Il existe des cas particuliers pour lesquels il est nécessaire de capturer le focus du clavier et d’empêcher l’utilisateur d’atteindre les éléments suivants ou précédents l’élément en cours de consultation. Par exemple, dans une fenêtre modale il est impératif que l’utilisateur qui navigue au clavier ne puisse pas atteindre les composants en dehors de la fenêtre modale tant que cette dernière est active.

#### Pressé ou posé

Correspond aux gestionnaires d’événement considérés comme des événements descendants. Par exemple *ACTION_DOWN*{lang=en} sur Android ou *UITouch.Phase.began*{lang=en} sur iOS.

#### Prise de focus 

La prise de focus est l’état renvoyé par un élément qui reçoit l’attention suite à une action de l’utilisateur. Il y a plusieurs moyens de donner le focus à un élément&nbsp;:
- en activant l’élément par un dispositif de pointage (au toucher sur l’écran)&nbsp;;
- en atteignant l’élément par une touche d’un clavier externe (tabulation, flèche de direction)&nbsp;;
- en atteignant l’élément en utilisant un commutateur externe (*switch*{lang=en}, *joystick*{lang=en}).

#### Procédé de rafraîchissement

Technique visant à modifier le contenu d’un ou de plusieurs éléments de l’écran. L’utilisateur doit pouvoir contrôler chaque procédé de rafraîchissement de manière indépendante.

### Q

#### QVGA

La résolution QVGA (*Quarter Video Graphics Array*{lang=en}) est une norme d’affichage qui correspond à une taille de 320 pixels X 240 pixels (soit 76 800 pixels).

### R

#### Raccourci clavier

Un moyen de déclencher une action associée à un composant de l’interface utilisateur en appuyant sur une ou plusieurs touches d’un clavier.

#### Règles d’accessibilité numérique

La dénomination générique «&nbsp;règles d’accessibilité numérique&nbsp;» désigne le [RAWeb](../raweb1/index.html), le [RAAM](../raam1.1/index.html), le [RAPDF](../rapdf1/index.html) ou encore la norme [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf) selon le contexte d’utilisation.

#### Relâché ou relevé

Correspond aux gestionnaires d’événement considérés comme des événements ascendants (*mouseup, touchend*{lang=en} par exemple). Par exemple *ACTION_UP*{lang=en} sur Android ou *UITouch.Phase.ended*{lang=en} sur iOS.

#### Répétition des touches

Fonctionnalité qui consiste à imprimer (à l’écran, dans une zone de saisie par exemple) un caractère plusieurs fois tant que la touche correspondante sur le clavier (visuel ou physique) est activée. 

Lorsque les touches sont associées à des fonctionnalités dans une application, ce n’est plus le caractère qui est imprimé plusieurs fois, mais la fonctionnalité qui peut alors être répétée plusieurs fois.

Le délai de déclenchement et le délai entre deux répétitions de touches est un paramètre qui peut se définir au niveau de la plateforme, mais une application pourrait permettre de configurer également ce paramètre. Voir [les paramètres de configuration possible sur iOS](https://support.apple.com/fr-fr/guide/iphone/ipha7c3927eb/ios) par exemple.

#### Résumé (de tableau)

Un résumé est un passage de texte associé à un tableau de données complexe. Il permet de donner des informations sur la nature et la structure du tableau afin d’en faciliter l’utilisation par les utilisateurs de technologies d’assistance par exemple.

**Note&nbsp;:** si les utilisateurs principalement impactés sont les personnes qui utilisent des lecteurs d’écran, d’autres utilisateurs peuvent bénéficier également de ces indications, comme par exemple certaines personnes déficientes visuelles ou intellectuelles. Dans ce cas le résumé, s’il est masqué par défaut, aurait vocation à être rendu visible par l’intermédiaire d’un bouton par exemple.

### S

#### Service d’assistance

Un service d’assistance peut être&nbsp;: 
- le mécanisme de retour d’information identifié dans la déclaration d’accessibilité de l’application,
- un *help desk*{lang=en}, 
- un centre d’appel, 
- un support technique,
- un [service de relais](#service-de-relais),
- un service de formation.

#### Service de relais

Les services de relais permettent aux utilisateurs, quel que soit leur mode de communication (le texte, les signes, la parole) d’interagir au cours d’une communication en temps réel à distance avec d’autres participants, en fournissant une conversion entre les modes de communication. 

Par exemple&nbsp;: un utilisateur qui communique avec la langue des signes veut échanger avec un interlocuteur ne la pratiquant pas, un service de relais va fournir un interprétariat en direct pour qu’ils puissent communiquer.

#### Sous-titres de traduction

Les sous-titres de traduction sont des sous-titres dans une langue différente de la langue de la vidéo.

Les sous-titres de traduction (*subtitles*{lang=en}) sont différents des [sous-titres pour sourds et malentendants](#sous-titres-synchronises-objet-multimedia) (*captions*{lang=en}).

#### Sous-titres synchronisés (objet multimédia)

Texte des informations audio (paroles d’un personnage, bruit important pour comprendre l’action…) présentes dans un média temporel et affiché de manière synchrone avec le flux de l’objet multimédia.

**Note 1&nbsp;:** pour différencier les sources sonores (différents personnages, voix off…), il est recommandé d’utiliser un mécanisme approprié (mise entre crochets, mise en italique, annonce explicite du type &laquo;&nbsp;voix off&nbsp;: &hellip;&nbsp;&raquo;).

**Note 2&nbsp;:** il ne faut pas confondre le sous-titrage pour la traduction et le sous-titrage pour sourds et malentendants. Ces deux types de sous-titrage poursuivent des buts différents. Seule la présence et la pertinence d’un sous-titrage pour sourds et malentendants permet d’être conforme.

### T

#### Tableau de données

Élément permettant de structurer des informations en lignes et en colonnes via des cellules de données et des cellules d’en-têtes.

#### Tableau de données complexe

Lorsqu’un tableau de données contient des en-têtes qui ne sont pas répartis uniquement sur la première ligne et/ou la première colonne de la grille ou dont la portée n’est pas valable pour l’ensemble de la colonne ou de la ligne, on parle de tableau de données complexe. Il est alors nécessaire de fournir un «&nbsp;résumé&nbsp;» permettant d’en expliquer sa nature et sa structure afin d’en faciliter la consultation pour des utilisateurs de technologies d’assistance par exemple.

#### Texte stylé

Texte dont l’apparence est contrôlée par la technologie de mise en forme de la plateforme (comme CSS pour les pages HTML).

#### Titre d’un tableau (de données)

Texte relié au tableau qui permet d’identifier le contenu d’un tableau de données de manière claire et concise.

#### Transcription textuelle (média temporel)

Contenu textuel associé à un média temporel par la technique appropriée (texte présent dans l’interface ou dans un fichier texte qui se trouve dans le même écran ou consultable grâce à un bouton). Ce contenu donne accès à l’utilisateur (de manière indépendante de la consultation de l’objet multimédia) à&nbsp;:
- La totalité de ce qui y est exprimé oralement.
- Toutes les informations descriptives nécessaires à une compréhension équivalente de l’action.

Ces informations textuelles doivent être présentées dans l’ordre chronologique de leur apparition dans le média temporel.

#### Transformation

Procédé géré automatiquement par l’outil d’édition. On distingue deux types de transformation&nbsp;: 
- des restructurations de contenus&nbsp;: transformation pendant laquelle la technologie d’entrée (ex. HTML, XML…) n’est pas modifiée en sortie, la restructuration modifie seulement des éléments du balisage. Par exemple&nbsp;: la linéarisation de tableau, le découpage d’un document en plusieurs pages.
- des recodages de contenu&nbsp;: transformation pendant laquelle la technologie d’entrée est modifiée en sortie (ex. HTML vers XHTML, HTML vers PDF). Ceci concerne notamment les zones d’édition qui utilisent une syntaxe différente de celle qui sera utilisée pour l’affichage public.

#### Type et format de données

Indication textuelle permettant à l’utilisateur de savoir quel est le type de donnée et/ou le format de saisie requis par un champ, préalablement à son renseignement. Par exemple&nbsp;:

- Date (jj/mm/aaaa)&nbsp;;
- Montant en euros&nbsp;;
- Code postal (4 chiffres&nbsp;: ex. L-2450).

Note&nbsp;: lorsque le type de champ de formulaire propose un masque de saisie, notamment par l’affichage d’un contrôle natif (par exemple, le composant natif de choix de date), l’indication de format n’est pas nécessaire.

### U

#### Uniquement à des fins de présentation

Utilisation des éléments d’interface pour une finalité différente de celle prévue dans les spécifications. Par exemple, une utilisation détournée dans une application pourrait être l’utilisation d’un élément interactif (bouton par exemple) comme texte simple.

#### Unité de saisie

Pour la saisie caractère par caractère, la plus petite unité de saisie de texte est le caractère.

Pour un système qui dispose d’une fonctionnalité de prédiction de mots, la plus petite unité de saisie est le mot. 

Pour certains systèmes de reconnaissance vocale, le texte n’est pas retranscrit tant qu’un mot entier ou une phrase entière n’ont pas été prononcés. Dans ce cas, la plus petite unité de saisie est le mot ou la phrase.

### V

#### Version accessible

Les documents en téléchargement dont les types de formats sont reconnus compatibles avec l’accessibilité doivent être rendus accessibles soit directement, soit par l’intermédiaire d’une version accessible. Les formats de document dont la compatibilité est reconnue sont&nbsp;:
- Microsoft Office (Word 2003, OOXML)&nbsp;;
- Open Office Org (ODF)&nbsp;;
- Adobe PDF&nbsp;;
- ePub/Daisy.

Les documents PDF doivent être conformes au [référentiel d’évaluation de l’accessibilité des documents au format PDF (RAPDF 1)](../rapdf1/index.html).
Les autres types de contenus doivent être conformes aux critères de la [section 10 <span lang="en">Non-web documents</span>](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=52) de la norme européenne EN 301 549 v3.2.1.

**Note&nbsp;:** le format TXT ne peut pas être utilisé pour produire une version accessible pour un document en téléchargement.

#### Version alternative «&nbsp;audio seulement&nbsp;»

Une version «&nbsp;audio seulement&nbsp;» est une version sonore, sous la forme d’un simple fichier au format MP3 par exemple, utilisée comme alternative à une vidéo seulement (vidéo sans information sonore). Les seuls utilisateurs impactés par l’accessibilité étant les personnes aveugles, qui ne peuvent pas voir la vidéo.

La version «&nbsp;audio seulement&nbsp;» doit contenir toutes les informations visuelles importantes de la vidéo.

Généralement, il est plus simple de produire une version sonore qu’une version textuelle lorsque la vidéo est très descriptive (la transcription textuelle nécessitant souvent un travail rédactionnel important). Il est rappelé, néanmoins, que seule la transcription textuelle assure un accès universel aux informations diffusées par la vidéo, dans le cas où un utilisateur ne serait pas en capacité de lancer la vidéo par exemple.

#### Vues web

On parle également de *web view*{lang=en}. Il s’agit de pages web (réalisées en HTML et CSS) embarquées dans une application mobile. Les vues web peuvent être des écrans entiers d’applications ou ne constituer que des parties d’écrans (par exemple, des encarts publicitaires).