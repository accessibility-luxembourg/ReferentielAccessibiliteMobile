Une certaine partie des tests du référentiel d’évaluation de l’accessibilité des applications mobiles se réalise avec les technologies d’assistance mises à disposition sur les plateformes.

### Environnement de test 

Les systèmes d’exploitation retenus sont iOS et Android. Il s’agit des systèmes d’exploitation les plus représentés dans les usages des personnes aveugles et malvoyantes dans les pays francophones (consulter à ce titre l’[&laquo;&nbsp;enquête internationale sur l’usage des technologies d’assistance indispensables aux personnes déficientes visuelles&nbsp;&raquo;](https://access42.net/enquete-internationale-usage-technologies-assistance-deficients-visuels)).

Pour chacun des systèmes, il est demandé de tester sur la dernière version disponible du système. 

Les versions des technologies d’assistance à utiliser seront la dernière disponible sur le système d’exploitation retenu. 

Lorsque l’application est destinée à un public dont l’équipement est maîtrisé, les tests devront se faire sur un environnement de test adapté au contexte de l’environnement maîtrisé.

<table>
	<caption>Environnement de test Terminal mobile</caption>
	<tr>
		<th scope="col">iOS (dernière version)</th>
		<th scope="col">Android (dernière version)</th>
	</tr>
	<tr>
		<td>VoiceOver (dernière version)</td>
		<td>TalkBack (dernière version)</td>
	</tr>
</table>

La section [Méthodologie](methodologie.md) du présent référentiel vous présente des ressources pour vous aider dans l’installation et configuration des différents outils de tests. 

#### Concernant Android 

Le système Android a ceci de particulier qu’il peut recevoir des couches applicatives supplémentaires selon le constructeur qui exploite le système. Par exemple, un système Android sur un téléphone de marque X sera différent d’un système Android présent sur un téléphone de marque Y. Néanmoins, il semble que les paramètres d’accessibilité et la présence du lecteur d’écran n’en soient pas impactés. Ainsi il n’est pas requis de réaliser les tests pour le système Android sur un modèle particulier de terminal.

#### Environnement maîtrisé

Lorsque l’application est destinée à être diffusée et utilisée dans un environnement maîtrisé, l’environnement de test (base de référence) doit être constitué des configurations (technologie d’assistance, système d’exploitation) effectivement utilisées dans l’environnement maîtrisé.

Par exemple, lorsque l’application est exclusivement diffusée dans un environnement iOS, les tests devront être réalisés uniquement avec des terminaux iOS et les technologies d’assistance qui en dépendent, par les agents sur cette plateforme. Cet environnement de test (base de référence) se substitue à l’environnement de test (base de référence) utilisé en environnement non maîtrisé.