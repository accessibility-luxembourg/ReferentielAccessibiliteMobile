Some of the tests in the mobile applications accessibility assessment framework are carried out using the assistive technologies available on the platforms.

### Test environment 

The operating systems selected are iOS and Android. These are the operating systems most commonly used by blind and partially-sighted people in French-speaking countries (see the [international survey on the use of assistive technologies by visually impaired people](https://access42.net/enquete-internationale-usage-technologies-assistance-deficients-visuels)).

For each of the systems, you are asked to test on the latest available version of the system. 

The assistive technology versions to be used will be the latest available on the selected operating system. 

When the application is intended for a public whose equipment is managed, the tests will have to be carried out on a test environment adapted to the context of the managed environment.

<table>
	<caption>Mobile test environment </caption>
	<tr>
		<th scope="col">iOS (latest version)</th>
		<th scope="col">Android (latest version)</th>
	</tr>
	<tr>
		<td>VoiceOver (latest version)</td>
		<td>TalkBack (latest version)</td>
	</tr>
</table>

The [Methodology](methodologie.md) section of this framework contains resources to help you install and configure the various testing tools. 

#### About Android 

The Android system is unique in that it can receive additional application layers depending on the manufacturer operating the system. For example, an Android system on a phone of brand X will be different from an Android system on a phone of brand Y. However, accessibility settings and the presence of the screen reader do not seem to be affected. It is therefore not necessary to carry out tests for the Android system on a particular device model.

#### Managed environment

When the application is intended to be distributed and used in a managed environment, the test environment (baseline) must be made up of the configurations (assistive technology, operating system) actually used in the managed environment.

For example, if the application is distributed exclusively in an iOS environment, the tests will have to be carried out only with iOS devices and the assistive technologies that depend on them, by the agents on this platform. This test environment replaces the test environment used in the unmanaged environment.