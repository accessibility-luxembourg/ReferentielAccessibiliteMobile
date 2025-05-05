### Assessment of compliance with the reference standard

#### General framework

In order to assess the compliance of the mobile application with the reference standard, the organisation must conduct an accessibility audit. The audit (or evaluation) may be carried out by the organisation itself (self-evaluation) or by a third party. The evaluation is carried out on a sample of screens representative of the application. 

The verification of conformity of the screens, parts of the sample of a mobile application, with the applicable criteria is carried out using the [Mobile Application Accessibility Assessment Framework (RAAM)](./index.html). 

The final phase of the audit is the accessibility statement, which reports on compliance with the applicable rules.

The audit (or evaluation) meets the following criteria:

- it is reliable: it is the responsibility of the organisation concerned to ensure the reliability of its statement by all possible means (recourse to an external service provider, training of internal experts, cross-audits, etc.);
- it is representative: it is based on a representative sample (see "Sample" section below).

The accessibility of applications must be assessed by applying the technical method of the framework in question.

It is possible to use another test method, subject to three conditions:

- ensure that the test method used can be communicated on request to a user or an administration;
- produce an explicit mapping table between the criteria and tests and the chosen reference standard;
- indicate this information in the accessibility statement.

#### Sample

The sample on which the audit of a mobile application is carried out covers at least the following screens, where they exist:

1. the home screen;
1. the legal information screen;
1. the authentication screen or process;
1. the contact screen;
1. the screens that make up the documentation of the application;
1. at least one relevant screen for each type of service provided and any other main intended use (e.g. 1st level headings in the tree structure), including the search functionality;
1. at least one relevant downloadable document, where applicable, for each type of service provided and for any other main intended use;
1. all the screens that make up a process (for example, an input form or a multi-screen transaction);
examples of screens with a substantially distinct appearance or different type of content (e.g. a screen containing data tables, multimedia elements, illustrations, forms, real-time communication feature, etc.).

The selection of screens audited and their number must be representative of the mobile application. The number of visitors per screen can be taken into account when selecting the sample.

Finally, randomly selected screens representing at least 10% of the screens in the sample described above are added.

#### Test environment (or "baseline")


Unlike web content, where it is possible to inspect the source code to determine the presence of elements and attributes, it is very difficult to do the same for mobile applications. On the one hand, because this would require a high level of technical expertise (you can have access to the software, but rarely to its code, unlike a website). Secondly, because unlike the web and HTML/CSS/JavaScript technologies, there is a diversity of development environments that makes it difficult to define a list of tests based on code review.

Some of the tests in the [mobile applications accessibility assessment framework](./index.html) are carried out using the assistive technologies available on the platforms.

##### Definition of the test environment

To validate these criteria, a test environment (or "baseline") needs to be defined. By default, it is made up of the platforms and assistive technologies most commonly used by people with disabilities. 

To perform the evaluation tests within the framework of RAAM, it is necessary to take into account the [RAAM test environment for the evaluation of mobile applications](./environnement.md).

This minimum test environment may be supplemented, where appropriate, by available free and open source solutions or by older technologies, depending on the use of the application. Whenever it is possible to know the configuration of the workstations and the hardware used, the baseline is composed of the services actually used in this environment.

#### Testing screens

Each screen in the sample must be checked against the criteria applicable to it.

There are 3 reasons why a criterion may not be applicable to a screen:

  1. The criterion relates to content or a functionality that does not exist. For example: if the screen does not include a video, the criteria relating to videos will not be applicable.
  2. The criterion relates to an exempt content or service which is therefore not subject to the accessibility obligation.
  3. The criterion concerns content subject to derogation for disproportionate burden that is accompanied by an accessible digital alternative. For example, a statistical table with graphics that offers a digital alternative in text. In this case, the criteria applicable to content subject to derogation will not apply. 
      Please note: if the content subject to derogation for disproportionate burden does not offer an accessible digital alternative, the criteria for this content are considered applicable.

The screens are then tested against the applicable criteria. These tests provide:

  * the number of validated and non-validated criteria for each screen;
  * the compliance rate for each screen.

Please note: 

  * a criterion is validated for a given screen when all the elements of the screen have passed the tests used to validate the criterion;
  * if a single element of the screen does not pass the tests for a criterion, the criterion cannot be validated;
  * if the screen is part of a process (making a declaration, taking part in a public consultation, making an appointment), a criterion is validated for a screen in the process only if it is validated for all the screens in the process.

Some criteria or themes are applicable to the whole app and not to a particular screen, so it is not necessary to evaluate them on all the screens in the sample. In this case, they may, for example, be evaluated on a single screen in the sample and considered as not applicable to all the other screens. This methodology for reporting the results of the evaluation of these criteria is, of course, optional. Whatever methodology is chosen, there will be no impact on the application's overall compliance rate. This is particularly the case for the following criteria and themes:
  * Theme 12: Documentation and accessibility features
  * Theme 14: Support services.

#### Compliance rate with the standard

The compliance rate measures the progress made by the online service in complying with accessibility requirements. 

This rate indicates the percentage of criteria met by the online service.

The percentage of criteria met is obtained by dividing the number of validated criteria by the number of applicable criteria.

  * Validated criterion: a criterion is validated if it is validated on all the screens in the sample. If a criterion is invalidated on only one screen in the sample, it cannot be considered valid for calculating the rate.
  * Applicable criterion: for a criterion to be applicable, it only needs to be applicable on one screen in the sample. The corollary of this is that a criterion is not applicable if it is not applicable on all the screens in the sample without exception.

This compliance rate determines the compliance status to be mentioned in the [accessibility statement](../obligations.md#content-of-the-accessibility-statement).

#### Non-interference principle

In an audit sample, there may be content that is not subject to the accessibility obligation:

- [exempt content](../obligations.md#exempt-content);
- [content derogated for disproportionate burden](../obligations.md#derogation-for-disproportionate-burden);
- non-accessible content that has an accessible alternative.

It is essential to ensure that this content does not prevent users from accessing the rest of the screen or the app.

Therefore, although the compliance of this content is not required, it must comply with the following criteria and tests:

- [Criterion 3.12](./referentiel-technique.html#crit-3-12): Is each automatically triggered sound sequence controllable by the user?
- [Criterion 10.3](./referentiel-technique.html#crit-10-3): On each screen, the navigation must not contain any keyboard traps. Is this rule respected?
- [Criterion 11.1](./referentiel-technique.html#crit-11-1): For each screen, does the user have control over each time limit modifying content (excluding special cases)?
- [Criterion 11.7](./referentiel-technique.html#crit-11-7): On each screen, are sudden change in brightness or blinking effects used correctly?
- [Criterion 11.8](./referentiel-technique.html#crit-11-8): On each screen, is each moving or blinking content controllable by the user?

Failure to comply with one of these criteria or tests for one of the types of content listed renders the corresponding criteria non-compliant.

The non-interference principle is identified in standard EN 301 549 in criterion 9.6 WCAG conformance requirements.

### Elements of methodology

Unlike web content, where it is possible to inspect the source code to determine the presence of elements or attributes, it is very difficult to do the same for mobile applications. On the one hand, because this would require a high level of technical expertise (you can access the software, but rarely its code, unlike a website). On the other hand, because unlike the web and HTML / CSS / JavaScript technologies there is a diversity of development environments which makes it difficult to define a list of tests based on code review.

This is why the chosen approach is to test for the presence of certain elements using specialised tools (interface inspectors, assistive technologies, external switches) or directly on the interface itself.

For example, when the interface contains an graphic element conveying information, the criterion asks you to check that an alternative is available and relevant, without giving any further details on the techniques to be used to provide an alternative to a graphic element. To help with the assessment, each criterion has a practical methodology (**which is non-normative**) setting out a possible method of assessing the criterion.

We would also refer you to the documentation provided by language publishers and application creation software publishers, which sets out the features to be respected, the properties to be used and, in some cases, specialised tools for inspecting the interface or the code.

### Editor resources

#### Android
- [Android Accessibility Help](https://support.google.com/accessibility/android): description of the assistive technologies and accessibility features available on Android systems.
- [Test your app's accessibility](https://developer.android.com/guide/topics/ui/accessibility/testing): presentation of tools and methods for evaluating the accessibility of Android applications.
- [Make apps more accessible](https://developer.android.com/guide/topics/ui/accessibility/apps): general development principles for complying with certain accessibility rules.
- [Build accessible apps](https://developer.android.com/guide/topics/ui/accessibility): a set of resources for designing and developing accessible Android applications.

#### iOS
- [iOS Accessibility](https://www.apple.com/accessibility/): description of assistive technologies and accessibility features available on iOS systems.
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/accessibility/overview/introduction/): general accessibility principles for mobile application interfaces on iOS.
- [Videos and tutorials](https://developer.apple.com/videos/frameworks/accessibility/): a collection of videos demonstrating assistive technologies available on iOS or presenting technical development methods for taking accessibility into account.

### Evaluation tools

To assess the criteria in the framework, it will be useful to carry out tests using the parameters and assistive technologies of the platforms. 

This section does not attempt to provide exhaustive documentation or detailed explanations on how to use these elements. Nevertheless, the essential elements for an evaluation process are listed, with links to official documentation where possible, and with configuration or understanding help where necessary.

#### Screen reader

The screen reader is one of the tools that will be most widely used to evaluate the accessibility of applications. Screen readers are mainly used by blind or partially-sighted people to interact with an application.

Some criteria involve assessing the compatibility of components with assistive technologies (including the screen reader), but the screen reader is also used to assess criteria that also have an impact on other assistive technologies.

The preferred navigation methods are gesture navigation or navigation combined with an external keyboard. Both methods produce the same effects.

##### VoiceOver on iOS

VoiceOver is the screen reader integrated into iOS.

###### Documentation 

To get started with VoiceOver, we refer you to the official documentation, which explains the first steps for activating and using gestures.
- [Turn on and practice VoiceOver on iPhone](https://support.apple.com/en-ca/guide/iphone/iph3e2e415f/ios).
- [Use VoiceOver on iPhone with an Apple external keyboard](https://support.apple.com/uk/guide/iphone/iph6c494dc6/ios)
- [Change your VoiceOver settings on iPhone](https://support.apple.com/en-ca/guide/iphone/iphfa3d32c50/ios)
- [Use VoiceOver gestures on iPhone](https://support.apple.com/en-ca/guide/iphone/iph3e2e2281/ios): this page explains the gestures available for navigating interfaces with VoiceOver.
- [Control VoiceOver using the rotor on iPhone](https://support.apple.com/en-ca/guide/iphone/iph3e2e3a6d/ios): the rotor is a central element in VoiceOver navigation. It lets you select a type of element (link, button, header, etc.) as the target for quick navigation (swipe up/down). It is important to know that it exists and how to use it. See also [the list of parameters that can be found in the rotor](https://support.apple.com/en-ca/HT204783).

###### Voice output display

It is useful to be able to view the voice output. In iOS you can activate the caption panel, which displays VoiceOver announcements in text format at the bottom of the screen. To do this, go to *Settings &gt; Accessibility &gt; VoiceOver* and at the bottom of the settings screen activate the "Caption Panel" setting.

##### TalkBack on Android

TalkBack is Android's built-in screen reader. To take advantage of more options, you may need to install a third-party application (developed by Android): [Android Accessibility Suite](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback&amp;gl=US).

###### Documentation 

To get started with TalkBack, we refer you to the official documentation, which details the first steps for activating and using gestures.
- [Turn on TalkBack](https://support.google.com/accessibility/android/answer/6007100?ref_topic=10601570).
- [Learn about TalkBack settings](https://support.google.com/accessibility/android/answer/6006589?ref_topic=10601570).
- [Use TalkBack gestures](https://support.google.com/accessibility/android/answer/6151827?ref_topic=10601570).
- [Use the TalkBack menu & reading controls](https://support.google.com/accessibility/android/answer/6007066): playback control (or playback controls) is a feature similar to VoiceOver's rotor, allowing you to select types of item (links, buttons, headings, etc.) for quick navigation (swipe up/down).

###### Voice output display

It is useful to be able to view voice output. In TalkBack you can activate a parameter that displays TalkBack announcements in text format at the bottom of the screen. To do this, go to *Settings &gt; Accessibility &gt; TalkBack &gt; Settings &gt; Advanced settings &gt; Developer settings* and activate the "Display speech output" setting.

Depending on the version of Android you're using, the path to the TalkBack "Display speech output" setting may not be exactly the same.

#### External keyboard

Not all users with a motor disability will be able to use the touch interface, so they will need to interact via an external switch: keyboard or other external device.

In order to test the criteria related to the use of applications with an external keyboard, it will be necessary to connect an external keyboard to the device and set a number of parameters in the platforms.

##### iOS

To enable the device to be controlled by an external keyboard, the "Full keyboard access" option needs to be activated. To do this, go to *Settings &gt; Accessibility &gt; Keyboards &gt; Full keyboard access* and activate "Full keyboard access".

iOS allows you to specify a focus style for users using an external device (*Settings &gt; Accessibility &gt; Keyboard &gt; Full Keyboard Access*). The user can choose:
- to hide it automatically after a configurable time;
- to increase the focus size;
- to increase the contrast;
- the colour.

##### Android

Using an external keyboard with Android can be done in several ways, and the EN 301 549 standard does not impose a method.

###### Keyboard access only

The simplest method is to connect an external keyboard via USB or *Bluetooth* to the mobile terminal, and perform the tests without any settings.

You can consult the [list of keyboard shortcuts available for Android](https://appt.org/en/docs/android/features/keyboard-access) in order to navigate efficiently.

###### Keyboard access with an accessibility service

If the tests are not satisfactory, it is possible to perform additional tests using the accessibility service [Switch Access](https://support.google.com/accessibility/android/answer/6122836?hl=fr).

A guide allows you to configure your external keyboard step by step by defining switches, it is available in <em>Settings &gt; Accessibility &gt; <span lanf="en">Switch Access</span> &gt; Settings &gt; Open setup guide</em>. You will associate two actions:

- *Next*: press the keyboard key you wish to associate (we recommend <kbd>Tab</kbd> to keep the keys used when browsing on a computer).
- *Select*: press the keyboard key you wish to associate (we recommend <kbd>Enter</kbd> to keep the keys used when navigating on a computer).

Once the first configuration step is completed (using the configuration guide), it will be necessary to configure other navigation keys:

- *Switch Access &gt; Settings &gt; Assign switches for scanning*: Associate the  *Previous* setting with a key or key combination (we recommend <kbd>Shift + Tab</kbd>)
- *Switch Access &gt; Settings &gt; Assign switches to global actions*: Associate the *Back* setting with a key or key combination (we recommend <kbd>ESC</kbd>)

#### Test applications

##### iOS (macOS)

Some methodology elements will offer you several test methods, often as an alternative to assistive technologies for evaluating elements. With iOS, it is possible to connect the device to a computer with macOS and use the **Accessibility Inspector** application.

The **[Accessibility Inspector](https://developer.apple.com/library/archive/documentation/Accessibility/Conceptual/AccessibilityMacOSX/OSXAXTestingApps.html)** is available from [Xcode](https://apps.apple.com/app/xcode/id497799835?mt=12), used for developing mobile applications. This tool is useful for carrying out certain tests. To activate it, launch Xcode, then from Xcode, follow the path *Xcode &gt; Open Developer Tool &gt; Accessibility Inspector*.

##### Android

To carry out certain tests on Android applications, third-party applications are required or can help you with the evaluation.

- [**Android Accessibility Suite**](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback&gl=US): Android application for adding options and gestures to the Talkback screen reader.
- [**Accessibility Scanner**](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor&amp;gl=US) Android application that enables automatic tests to be carried out for certain criteria. Once installed, access the application from *Settings &gt; Accessibility &gt; Installed Services &gt;* *Accessibility Scanner*.

##### iOS and Android

- [Colour Contrast Analyser (CCA)](https://www.tpgi.com/color-contrast-checker/): tool for evaluating contrasts from the computer, available on Mac and Windows.

#### Change the font size on iOS

On iOS, it is possible to display a text size gauge that gives the value of the magnification ratio. To do this, you must add the "Text Size" parameter to the control center.

Depending on the version of iOS, there are different methods to customize the control center and thus add the "Text Size" parameter. [The official documentation details them for iOS versions 12 to 18](https://support.apple.com/en-gb/guide/iphone/iph59095ec58/ios#iph83c5f986c).

We can see that the parameter allows you to reach 190% or 235% magnification, but never 200%, this level does not exist for the moment. 190% being closer to 200%, this is the value that the methodology suggests testing.

#### Broadcast the screen of the mobile device

Broadcasting your mobile device screen to your computer can allow you to record certain interactions and take screenshots when you need to write audit reports. Casting can also be useful for demonstrations during audit feedback.
Broadcasting the mobile device is not an essential requirement for evaluating applications, but it is nevertheless useful because it can facilitate certain evaluation activities.

##### iOS

###### You have a computer with macOS 

1. Connect the iOS device to the macOS computer using the USB cable. 
1. Open the QuickTime software and in the *File* menu, select "New video recording".
1. A window will open showing an image from your computer's camera. Click to the right of the red record button to change the source and choose your device.
1. The screen of your mobile device will now be displayed on your computer.

###### You have a computer running Windows 

There are a number of software (free or paid) that allow you to stream your iOS device to a Windows computer.

##### Android

There is an open source application that allows you to stream an Android application to **Windows and macOS**: [SCRCPY](https://github.com/Genymobile/scrcpy). 

Installing it on a macOS environment may require some technical knowledge. On Windows, it can be used like a standard application. However, it is not essential that you project your mobile device, you can do without this installation (another method is detailed later in the document).
Windows provides an integrated "Connect" function for broadcasting certain external sources. [See documentation](https://support.google.com/pixelphone/answer/2865484?ref_topic=7084202)

#### Take screenshots

If it is not possible to broadcast mobile devices on the computer screen, a satisfactory alternative is to take screenshots from your mobile device and then import these captures, by the method of your choice, onto your computer.

For criteria 2.2, 2.3 and 2.4 for the evaluation of contrasts, we strongly recommend that you use this method of capturing screens so that you can accurately evaluate the sizes of the texts. Indeed, capturing a screen from the device guarantees preserved proportions, unlike a capture that would be taken from a device projected onto a desktop environment.

- [Take a screenshot of your Android device](https://support.google.com/android/answer/9075928?hl=fr).
- [Take a screenshot on an iPhone](https://support.apple.com/fr-fr/HT200289).

##### Import screenshots onto the computer

Generally speaking, regardless of the mobile platform or the desktop environment, the main method to facilitate the transit of photos from the mobile device to the desktop computer is to **set up an online photo backup utility** on the mobile device, as can be done for example by services such as Dropbox, OneDrive or Google (Photos or Drive), and access the backup from the desktop computer.

There may then be specific methods depending on the platforms:
- From iOS to macOS: the [AirDrop](https://support.apple.com/fr-fr/119857) functionality.
- From iOS to macOS and Windows: the [iCloud](https://support.apple.com/fr-fr/guide/photos/phtf5e48489c/mac) solution. This method works with both macOS and [Windows](https://support.apple.com/en-us/103232).
- From Android to macOS: the [MacDroid](https://www.macdroid.app) solution.
- From Android or iOS to Windows: [direct USB connection](https://support.microsoft.com/en-us/windows/importing-photos-and-videos-aed09800-f826-4d40-a243-7640de229d9d).

Other utilities may be suitable, this list is not exhaustive.

##### Evaluate the size of a text

If during the evaluations, the size of some texts is not obvious (for example, it is not obvious to the naked eye whether a text is in normal size or enlarged size), then it will be necessary to measure it to determine the minimum contrast ratio required. Here is a methodology that allows you to obtain this measurement:
1. Determine the screen size of the test device:
  - activate Safari (on iOS) or Chrome (on Android) and navigate to [https://www.mydevice.io](https://www.mydevice.io);
  - locate the <code>JS screen.width</code> value (which corresponds to the physical width of the screen).
1. Reset the default font size in the application to evaluate the text at 100%.
  - On iOS, the easiest way is to go through the gauge available in [the control center](methodologie.md#change-the-font-size-on-ios) to restore the size to 100%.
  - On Android, if font size settings are available (*Settings > Accessibility > Font size*), activate the function to reset the font size. Otherwise, reduce the size to reach the first or second step of the gauge, depending on the initial size.
1. Take a screenshot from the mobile device and import it on the computer (see above, this is the preferred method to ensure that the sizes are preserved).
1. Open the capture in an image editing software:
  - On macOS, open the capture with the "Preview" software:
    - in the "Tools" menu, choose "Adjust size";
    - set the units to pixels;
    - in the "Width" field, enter the value of the screen width determined previously. 
  - On Windows, open the capture with the "Paint" software:
    - in the toolbar, select the "Resize" option;
    - set the units in pixels;
    - in the "Horizontal" field, enter the value of the screen width determined previously.
1. Locate texts on the screen, texts contained in graphic elements and texts embedded in videos, that could cause contrast problems and determine their size:
  - from the screenshot opened in the editing software, activate the rectangular selection tool;
  - draw a rectangle around the text for which you want to determine the size:
    - it is best to start with a capital letter, otherwise include a letter such as "d", "t" or "b";
    - you can zoom in on the screenshot to make the most precise selection possible, this does not affect the calculation of the height. 
  - locate the height of the rectangle thus defined in the software:
    - in "Preview" the value is displayed right next to the selection, the height is the second value;
    - in "Paint" the values ​​are displayed in the status bar at the bottom of the software window, the height is the second value.
