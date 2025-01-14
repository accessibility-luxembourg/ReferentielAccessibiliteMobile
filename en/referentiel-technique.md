**Warning:** For each criterion in the framework, an assessment methodology is proposed. It should be noted that this methodology has no normative value. It is intended to serve as a reference point for familiarising oneself with the standard, and to illustrate a potential evaluation method. However, it is acknowledged that other evaluation methods may exist. In addition, the content of this methodology and these steps cannot be used as a basis in the event of a dispute. Finally, it is possible that errors will not be detected solely on the basis of this methodology. Only the content of the criteria and the tests have normative value.

**Note concerning [web views](glossaire.md#web-views):** in applications, some screens (or all screens) are embedded web pages, also called [web views](glossaire.md#web-views). If the content of these web views is the responsibility of the application publisher, then they must comply with this framework in the same way as other screens in the application developed in a language specific to mobile applications. If these web views are not under the responsibility of the publisher, their content may be derogated from. Nevertheless, depending on the importance of the content for users, an alternative or means of compensation may be required.

### [Topic 1](#topic-1): Graphic elements {id="topic-1"}

#### [Criterion 1.1](#crit-1-1) [A] Is every [decorative graphic element](glossaire.md#decorative-graphic-element) [ignored by assistive technologies](glossaire.md#ignored-by-assistive-technologies)? {id="crit-1-1"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Activate the **screen reader**.
1. Identify the decorative graphic elements on the screen ([see glossary note on the particularities of rendering](glossaire.md#graphic-element)).
1. Check that
	- they cannot be reached with the screen reader; 
	- their content is not being rendered from another element on the screen.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content)
- EN 301 549 V3.2.1 (2021-03) *11.1.1.1.1 Non-text Content*.

#### [Criterion 1.2](#crit-1-2) [A] Does each [graphic element conveying information](glossaire.md#graphic-element-conveying-information) have an alternative [accessible to assistive technologies](glossaire.md#accessible-to-assistive-technologies)? {id="crit-1-2"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Activate the **screen reader**.
1. Identify graphic element conveying informations on the screen ([see glossary note on the particularities of rendering](glossaire.md#graphic-element)), for example an image or icon.
1. Check
	- that they can be reached with the screen reader; 
	- or that the information they convey is rendered from another element on the screen.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content)
- EN 301 549 V3.2.1 (2021-03) *11.1.1.1.1 Non-text Content*.

#### [Criterion 1.3](#crit-1-3) [A] For each [graphic element conveying information](glossaire.md#graphic-element-conveying-information), is the alternative [accessible to assistive technologies](glossaire.md#accessible-to-assistive-technologies) relevant (excluding special cases)? {id="crit-1-3"}

##### Special cases 

The criterion is not applicable when the graphic element is used as a [CAPTCHA](glossaire.md#captcha) or as a [test graphic element](glossaire.md#test-graphic-element). In the event that it is not possible to provide an alternative that is both relevant and does not compromise the integrity of the CAPTCHA or the test, the criterion is not applicable.

Note: specific consideration is given to CAPTCHAs and test graphic elements in [criterion 1.4](#crit-1-4).

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Activate the **screen reader**.
1. Identify the graphic element conveying informations on the screen ([see glossary note on the particularities of rendering](glossaire.md#graphic-element)).
1. Check 
	- that the alternative rendered by the screen reader is relevant; 
	- or that the information rendered from another element on the screen is relevant.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content)
- EN 301 549 V3.2.1 (2021-03) *11.1.1.1.1 Non-text Content*.

#### [Criterion 1.4](#crit-1-4) [A] For each [graphic element](glossaire.md#graphic-element) used as a [CAPTCHA](glossaire.md#captcha) or as a [test graphic element](glossaire.md#test-graphic-element), does the alternative rendered by the assistive technologies make it possible to identify the nature and function of the graphic element? {id="crit-1-4"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Activate the **screen reader**.
1. Identify the graphic elements used as CAPTCHAs on the screen ([see glossary note on the particularities of rendering](glossaire.md#graphic-element)).
1. Check that the alternative rendered by the screen reader makes it possible to understand the function of the graphic element (e.g. "Secret code to enter", "Security code").
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content)
- EN 301 549 V3.2.1 (2021-03) *11.1.1.1.1 Non-text Content*.

#### [Criteria 1.5](#crit-1-5) [A] Does each [graphic element](glossaire.md#graphic-element) used as a [CAPTCHA](glossaire.md#captcha) have an alternative? {id="crit-1-5"}

**[Test 1.5.1](#test-1-5-1)** Does each graphic element used as a CAPTCHA meet one of these conditions? {id="test-1-5-1"}
- There is another form of non-graphic CAPTCHA, at least;
- There is another solution for accessing the functionality secured by the CAPTCHA.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify the graphic elements used as CAPTCHAs on the screen ([see glossary note on the particularities of rendering](glossaire.md#graphic-element)).
1. Check
	- the presence of a non-graphic alternative (sound or logical CAPTCHA);
	- or the presence of another solution for accessing the functionality secured by the CAPTCHA (sending an SMS code, sending a confirmation email, etc.).
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content)
- EN 301 549 V3.2.1 (2021-03) *11.1.1.1.1 Non-text Content*.

#### [Criterion 1.6](#crit-1-6) [A] Does each [graphic element conveying information](glossaire.md#graphic-element-conveying-information) have, where necessary, a [detailed description](glossaire.md#detailed-description)? {id="crit-1-6"}

**[Test 1.6.1](#test-1-6-1):** Does each graphic element conveying information that requires a detailed description meet one of these conditions? {id="test-1-6-1"}
- From the graphic element, assistive technologies render or provide access to a detailed description;
- There is a clearly identifiable detailed description adjacent to the graphic element;
- There is a function that provides access to a detailed description.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify the graphic elements conveying information on the screen that require a detailed description ([see glossary note on the particularities of rendering](glossaire.md#graphic-element)). For example
	- graphic elements for which the alternative to be provided is too long (more than one sentence, for example) or requires structuring (headings, lists or tables); 
	- graphic elements which combine several issues (information through colour, text graphic element, contrasts, etc.) such as graphs or maps.
1. Check for 
	- the presence of a clearly identifiable detailed description adjacent to the graphic element; 
	- or the presence of a function (a button, a link) providing access to a detailed description.
1. If not, activate the **screen reader** and navigate to the graphic element. 
1. Check that the screen reader displays a detailed description.
1. If it does, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content)
- EN 301 549 V3.2.1 (2021-03) *11.1.1.1.1 Non-text Content*.

#### [Criterion 1.7](#crit-1-7) [A] For each [graphic element conveying information](glossaire.md#graphic-element-conveying-information) with a [detailed description](glossaire.md#detailed-description), is this description relevant? {id="crit-1-7"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify the graphic elements on the screen that have a detailed description.
1. Check that each detailed description is relevant. It should contain all the information required to understand the content of the graphic element. 
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content)
- EN 301 549 V3.2.1 (2021-03) *11.1.1.1.1 Non-text Content*.

#### [Criterion 1.8](#crit-1-8) [AA] Each [text graphic element](glossaire.md#text-graphic-element) conveying information, in the absence of a [replacement mechanism](glossaire.md#replacement-mechanism), must, if possible, be replaced by [styled text](glossaire.md#styled-text). Is this rule respected (excluding special cases)? {id="crit-1-8"}

##### Special cases

The criterion does not apply to the following elements:
- When the text is part of a logo or an element associated with the graphic identity of an organisation or company (a slogan, for example).
- When the text contained in the graphic element is used as a [CAPTCHA](glossaire.md#captcha) or as a [test graphic element](glossaire.md#test-graphic-element).
- When the text is part of an element whose graphic accuracy is considered essential for the proper transmission of the information conveyed by the graphic element. 

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify the graphic elements conveying information in the screen ([see glossary note on the particularities of rendering](glossaire.md#graphic-element)) 
	- Activate the **screen reader**, browse the content and identify whether the elements displayed as "graphic element" or "image" contain text conveying information.
1. Check 
	- that there is a mechanism for replacing text graphic elements with text that can be modified according to the user's display preferences (size, colour, font, etc.);
    - or that styles and effects cannot be reproduced using [styled text](glossaire.md#styled-text).
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.4.5 Images of Text (AA)](https://www.w3.org/TR/WCAG21/#images-of-text)
- EN 301 549 V3.2.1 (2021-03): *11.1.4.5.1 Images of text*.

#### [Criterion 1.9](#crit-1-9) [AA] Is each [graphic element with legend](glossaire.md#graphic-element-with-legend) correctly rendered by assistive technologies? {id="crit-1-9"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Activate the **screen reader**.
1. Navigate to the graphic elements with legends.
1. Check that the legend for the graphic element is displayed when the focus reaches the graphic element (the graphic element and the legend are contained in a single element that can be reached by the screen reader).
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content)
- EN 301 549 V3.2.1 (2021-03) *11.1.1.1.1 Non-text Content*.

### [Topic 2](#topic-2): Colours {id="topic-2"}

#### [Criterion 2.1](#crit-2-1) [A] On each screen, [information must not be provided by colour alone](glossaire.md#information-provided-by-colour). Is this rule respected? {id="crit-2-1"}

**[Test 2.1.1](#test-2-1-1):** On each screen, does each element whose colour conveys information respect at least one of these conditions? {id="test-2-1-1"}
- The information is not provided by colour alone;
- A [replacement mechanism](glossaire.md#replacement-mechanism) allows the user to display an alternative to the colour.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS

1. Activate the **Differentiate without colour** option (*Settings &gt; Accessibility &gt; Text display and size &gt; Differentiate without colour*).
1. Identify on the screen words or sets of words, texts, graphic elements conveying information and time-based media whose colouring conveys information.
1. Check that there is another visual way of retrieving this information: the presence of an icon or a graphic effect of shape or position, a typographic effect, etc.
1. Using the **screen reader**, access the information provided by the colour.  
1. Check that equivalent information is rendered by the screen reader (for example the "selected" status of a green button).
1. If this is the case, the criterion is validated.

###### Android

1. Identify on the screen words or sets of words, texts, graphic elements conveying information and time-based media whose colouring conveys information.
1. Check that there is another visual way of retrieving this information: the presence of an icon or a graphic effect of shape or position, a typographic effect, etc.
1. Using the **screen reader**, access the information provided by the colour. 
1. Check that equivalent information is rendered by the screen reader (for example the "selected" status of a green button).
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Info and Relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships), [1.4.1 Use of color (A)](https://www.w3.org/TR/WCAG21/#use-of-color)
- EN 301 549 V3.2.1 (2021-03): *11.1.3.1.1 Info and Relationships*, *11.1.4.1 Use of color*.

#### [Criterion 2.2](#crit-2-2) [AA] On each screen, is the [contrast](glossaire.md#contrast) between the colour of the text and the colour of its background sufficiently high (excluding special cases)? {id="crit-2-2"}

**[Test 2.2.1](#test-2-2-1):** For each text, does the contrast between the colour of the text and the colour of its background meet one of these conditions? {id="test-2-2-1"}
- The contrast ratio between the text and its background is at least 4.5:1 for [normal text size](glossaire.md#contrast-text-size) and at least 3:1 for [large text size](glossaire.md#contrast-text-size);
- A [replacement mechanism](glossaire.md#replacement-mechanism) allows the user to display [normal text size](glossaire.md#contrast-text-size) with a contrast ratio of at least 4.5:1 and [large-size text](glossaire.md#contrast-text-size) with a contrast ratio of at least 3:1.

##### Special cases

The criterion does not apply to the following elements:
- The text is part of a logo or brand name of an organisation or company.
- The text or the text contained in the graphic element is purely decorative.
- The text is part of a graphic element conveying information, but the text itself does not provide any essential information.
- The text or the text contained in the graphic element is part of an interface element on which no action is possible (for example, a disabled button).

##### Evaluation methodology {class="disclosure methodo"}

###### iOS

1. Activate the **Increase contrast** option (*Settings &gt; Accessibility &gt; Text display and size &gt; Increase contrast*) or if present in the application, activate the replacement mechanism enabling the application to be displayed with a sufficient contrast ratio.
1. Identify  on the screen the texts, the texts contained in graphic elements and the texts embedded in videos that could cause contrast problems.
1. Activate the **Colour Contrast Analyser** software on the computer and capture the foreground and background colours on the mobile device either 
	- by [broadcasting the screen of the mobile device to the computer](methodologie.md#broadcast-the-screen-of-the-mobile-device);
	- by taking [screenshots](methodologie.md#take-screenshots) of the elements to be evaluated (and importing them onto the computer).
1. Check:
	- for normal size text, that the contrast value is 4.5:1, at least; 
	- for large text, that the contrast value is at least 3:1.
1. If this is the case, the criterion is validated.

Note: It is possible to use the **[Accessibility Inspector](methodologie.md#test-applications)** application available on macOS to carry out a quick evaluation of screen contrasts. The software has an "Audit" function which allows you to automatically test certain text and graphic elements on screens. This function does not detect all contrast faults, and additional tests following the methodology described above will be necessary.

###### Android

1. If it exists in the application, activate the replacement mechanism to display the application with a sufficient contrast ratio.
1. Identify  on the screen the texts, the texts contained in graphic elements and the texts embedded in videos that could cause contrast problems.
1. Activate the **Colour Contrast Analyser** software on the computer and capture the foreground and background colours on the mobile device either 
	- by [broadcasting the screen of the mobile device to the computer](methodologie.md#broadcast-the-screen-of-the-mobile-device);
	- by taking [screenshots](methodologie.md#take-screenshots) of the elements to be evaluated (and importing them onto the computer).
1. Check:
	- for normal size text, that the contrast value is 4.5:1, at least; 
	- for large text, that the contrast value is at least 3:1.
1. If this is the case, the criterion is validated.

Note: It is possible to use the **[Accessibility Scanner](methodologie.md#test-applications) application** to carry out a quick evaluation of screen contrasts. The application does not detect all contrast defects, and additional tests following the methodology described above will be necessary.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.4.3 Contrast (minimum) (AA)](https://www.w3.org/TR/WCAG21/#contrast-minimum)
- EN 301 549 V3.2.1 (2021-03): *11.1.4.3 Contrast (Minimum)*, *11.7 User preferences*.

#### [Criterion 2.3](#crit-2-3) [AA] On each screen, are the colours used in the [user interface components](glossaire.md#user-interface-component) and the graphic elements conveying information sufficiently contrasted (excluding special cases)? {id="crit-2-3"}

- **[Test 2.3.1](#test-2-3-1):** On each screen, does the contrast ratio between the colours of a [user interface component](glossaire.md#user-interface-component) in its various states and the [adjacent colours](glossaire.md#adjacent-colour) satisfy one of these conditions (excluding special cases)? {id="test-2-3-1"}
	- The contrast ratio is 3:1, at least;
	- A [replacement mechanism](glossaire.md#replacement-mechanism) is used to display the user interface component with a contrast ratio of at least 3:1.
- **[Test 2.3.2](#test-2-3-2):** On each screen, does the contrast ratio of each colour required to understand a graphic element and the [adjacent colours](glossaire.md#adjacent-colour) meet one of these conditions (excluding special cases)? {id="test-2-3-2"}
	- The contrast ratio is 3:1, at least;
	- A [replacement mechanism](glossaire.md#replacement-mechanism) allows a contrast ratio of at least 3:1.

##### Special cases

The criterion does not apply to the following elements:
- Inactive user interface component (for example, a disabled button) on which no action is possible.
- A user interface component managed by the platform and for which there is no simple development method for modifying it.
- A user interface component whose colour is not necessary to identify the component or its state (for example, the underlining of links which would have a contrast ratio of less than 3:1 but whose text has a contrast ratio of 4.5:1).
- A [graphic element](glossaire.md#graphic-element) or parts of a graphic element that do not convey information or have an alternative, detailed description or identical information visible on the screen.
- A [graphic element](glossaire.md#graphic-element) or parts of a graphic element forming part of a logo or brand name of an organisation or company.
- A [graphic element](glossaire.md#graphic-element) or parts of a graphic element whose presentation is essential to the information conveyed (for example, flags, logotypes, photographs of people or scenes, screen captures, medical diagrams, heat maps).
- A [graphic element](glossaire.md#graphic-element) or parts of a dynamic graphic element whose contrast may vary if other elements are hovered over (or receive focus), but whose hovering or focus makes it possible to give it sufficient contrast (for example, a pie chart made up of several sections with sufficient contrast, but when the mouse hovers over a section of the pie chart, the other sections are no longer sufficiently contrasted, their opacity is reduced to highlight the section hovered over).

##### Evaluation methodology {class="disclosure methodo"}

###### iOS

1. Activate the **Increase contrast** option (*Settings &gt; Accessibility &gt; Text display and size &gt; Increase contrast*) or, if present in the application, activate the replacement mechanism enabling graphic elements to be displayed with a sufficient contrast ratio.
1. Identify on the screen the graphic elements conveying information and for each 
	- Identify which colour(s) of the component are necessary to identify the location and/or the information conveyed (this could be the border, the colour of an icon, the background colour);
	- Identify the adjacent colours that have an impact on the visibility of the component colour(s).
1. Identify on the screen the interactive components that may have several states (hovered, focused, activated, checked) and for each
	- Identify which colour(s) of the component are necessary to identify the location and/or the information conveyed and the state (this could be the border, the colour of an icon, the background colour) for each of the states;
	- Identify the adjacent colours that have an impact on the visibility of the component's colour(s).
1. Activate the **Colour Contrast Analyser** software on the computer and capture the foreground and background colours on the mobile device either 
	- by [broadcasting the screen of the mobile device to the computer](methodologie.md#broadcast-the-screen-of-the-mobile-device);
	- by taking [screenshots](methodologie.md#take-screenshots) of the elements to be evaluated (and importing them onto the computer).
1. Check that the contrast ratio between the colours identified is at least 3:1.
1. If this is the case, the criterion is validated.

Note: It is possible to use the **[Accessibility Inspector](methodologie.md#test-applications)** application available on macOS to carry out a quick evaluation of screen contrasts. The software has an "Audit" function which allows you to automatically test certain text and graphic elements on screens. This function does not detect all contrast faults, and additional tests following the methodology described above will be necessary.

###### Android

1. If it exists in the application, activate the application's replacement mechanism to display graphic elements with a sufficient contrast ratio.
1. Identify on the screen the graphic element conveying informations and for each 
	- Identify which colour(s) of the component are necessary to identify the location and/or the information conveyed (this could be the border, the colour of an icon, the background colour);
	- Identify the adjacent colours that have an impact on the visibility of the component colour(s).
1. Identify on the screen the interactive components that may have several states (hovered, focused, activated, checked) and for each
	- Identify which colour(s) of the component are necessary to identify the location and/or the information conveyed and the state (this could be the border, the colour of an icon, the background colour) for each of the states;
	- Identify the adjacent colours that have an impact on the visibility of the component's colour(s).
1. Activate the **Colour Contrast Analyser** software on the computer and capture the foreground and background colours on the mobile device  
	- either by [broadcasting the screen of the mobile device to the computer](methodologie.md#broadcast-the-screen-of-the-mobile-device);
	- or by taking [screenshots](methodologie.md#take-screenshots) of the elements to be evaluated (and importing them onto the computer).
1. Check that the contrast ratio between the colours identified is at least 3:1.
1. If this is the case, the criterion is validated.

Note: It is possible to use the **[Accessibility Scanner](methodologie.md#test-applications)** application to carry out a rapid assessment of screen contrasts. The application does not detect all contrast defects, and additional tests following the methodology described above will be necessary.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.4.11 Non-text contrast (AA)](https://www.w3.org/TR/WCAG21/#non-text-contrast)
- EN 301 549 V3.2.1 (2021-03) *11.1.4.11 Non-text Contrast*, *11.7 User preference*.

#### [Criterion 2.4](#crit-2-4) [AA] Is the contrast ratio of each [replacement mechanism for displaying a correct contrast ratio](glossaire.md#application-mechanism-for-displaying-a-correct-contrast-ratio) sufficiently high? {id="crit-2-4"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS

1. Check that the **Increase contrast** option (*Settings &gt; Accessibility &gt; Text display and size &gt; Increase contrast*) is deactivated.
1. Check for the presence of a replacement mechanism enabling the application to be displayed with a sufficient contrast ratio.
1. Check that it is not activated (i.e. the screen is displayed with the default contrast).
1. Activate the **Colour Contrast Analyser** software on the computer and capture the foreground and background colours on the mobile device 
	- either by [broadcasting the screen of the mobile device to the computer](methodologie.md#broadcast-the-screen-of-the-mobile-device);
	- or by taking [screenshots](methodologie.md#take-screenshots) of the elements to be evaluated (and importing them onto the computer).
1. If the replacement mechanism is identified by text, capture the foreground and background colours and check 
	- For normal size text, that the contrast value is at least 4.5:1; 
	- For enlarged text, that the contrast value is at least 3:1.
1. If the replacement mechanism is identified by a non-text element only (an icon for example):
	1. Identify which colour(s) of the component are necessary to identify the location and/or information (this could be the border, the colour of an icon, the background colour);
	1. Identify adjacent colours that have an impact on the visibility of the colour;
	1. Check that the contrast ratio between the colours identified is at least 3:1.
1. If this is the case, the criterion is validated.

###### Android

1. Identify the presence of a replacement mechanism enabling the application to be displayed with a sufficient contrast ratio.
1. Check that it is not activated (i.e. the screen is displayed with the default contrast).
1. Activate the **Colour Contrast Analyser** software on the computer and capture the foreground and background colours on the mobile device  
	- either by [broadcasting the screen of the mobile device to the computer](methodologie.md#broadcast-the-screen-of-the-mobile-device);
	- or by taking [screenshots](methodologie.md#take-screenshots) of the elements to be evaluated (and importing them onto the computer).
1. If the replacement mechanism is identified by text, capture the foreground and background colours and check 
	- For normal size text, that the contrast value is at least 4.5:1; 
	- For enlarged text, that the contrast value is at least 3:1.
1. If the replacement mechanism is identified by a non-text element only (an icon for example):
	1. Identify which colour(s) of the component are necessary to identify the location and/or information (this could be the border, the colour of an icon, the background colour);
	1. Identify adjacent colours that have an impact on the visibility of the colour;
	1. Check that the contrast ratio between the colours identified is at least 3:1.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.4.3 Contrast (minimum) (AA)](https://www.w3.org/TR/WCAG21/#contrast-minimum), [1.4.11 Non-text contrast (AA)](https://www.w3.org/TR/WCAG21/#non-text-contrast)
- EN 301 549 V3.2.1 (2021-03): *5.2 Activation of accessibility features*, *11.1.4.3 Contrast (Minimum)*, *11.1.4.11 Non-text Contrast*.

### [Topic 3](#topic-3): Multimedia {id="topic-3"}

#### [Criterion 3.1](#crit-3-1) [A] Does each pre-recorded audio-only [time-based media](glossaire.md#time-based-media-audio-video-and-synchronised) have, where appropriate, a [clearly identifiable adjacent](glossaire.md#clearly-identifiable-adjacent) [transcript](glossaire.md#transcript-time-based-media) (excluding special cases)? {id="crit-3-1"}

##### Special cases

The criterion does not apply to the following elements:
- The time-based media is used for decorative purposes (i.e. it does not provide any information).
- The time-based media is itself an alternative to on-screen content (a video in sign language or the vocalisation of a text, for example).
- The time-based media is used to access an enlarged version.
- The time-based media is used as a CAPTCHA.
- The time-based media is part of a test that would be useless if the text transcript, synchronised captions or audio description were provided.
- The time-based media was published before 23 September 2020 (according to the [law of 28 May 2019](http://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo)).

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify on the screen the audio-only time-based media that require text transcription.
1. Check for:
	- the presence of a transcript accessible via an adjacent component (a button or a link);
	- or the presence of a clearly identifiable adjacent transcript.
1. If this is the case, the criterion is validated. 

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.2.1 Audio only and video only (prerecorded) (A)](https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded), [1.2.3 Audio description or media alternative (prerecorded) (A)](https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded). 
- EN 301 549 V3.2.1 (2021-03): *11.1.2.1.1 Audio-only and Video-only (Pre-recorded)*, *11.1.2.3.1 Audio Description or Media Alternative (Pre-recorded)*.

#### [Criterion 3.2](#crit-3-2) [A] For each pre-recorded audio-only [time-based media](glossaire.md#time-based-media-audio-video-and-synchronised) with a [transcript](glossaire.md#transcript-time-based-media), is this transcript relevant (excluding special cases)? {id="crit-3-2"}

##### Special cases

[See special cases in criterion 3.1](#crit-3-1) 

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify on the screen text transcripts of audio-only time-based media.
1. Check that each text transcript is relevant (all important audio or visual information is present, including dialogue and embedded text).
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.2.1 Audio only and video only (prerecorded) (A)](https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded)
- EN 301 549 V3.2.1 (2021-03) *11.1.2.1.1 Audio-only and Video-only (Pre-recorded)*.

#### [Criterion 3.3](#crit-3-3) [A] Does each pre-recorded video-only [time-based media](glossaire.md#time-based-media-audio-video-and-synchronised) have, if necessary, an alternative (excluding special cases)? {id="crit-3-3"}

**[Test 3.3.1](#test-3-3-1):** Does each pre-recorded video-only time-based media satisfy, if necessary, one of these conditions (excluding special cases)? {id="test-3-3-1"}
- There is a [clearly identifiable adjacent](glossaire.md#clearly-identifiable-adjacent) [alternative "audio only" version](glossaire.md#alternative-audio-only-version);
- There is a [clearly identifiable adjacent](glossaire.md#clearly-identifiable-adjacent) accessible [transcript](glossaire.md#transcript-time-based-media);
- There is a [synchronised audio description](glossaire.md#audio-description-time-based-media);
- There is an alternative version with a [synchronised audio description](glossaire.md#audio-description-time-based-media) accessible via an adjacent component (a button or a link).
	
##### Special cases

[See special cases in criterion 3.1](#crit-3-1) 

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify on the screen video-only time-based media that require a text-based transcript.
1. Check for
	- the presence of an alternative audio-only version accessible via an adjacent component (a button or a link);
	- or the presence of an adjacent audio-only alternative version;
	- or the presence of an adjacent text transcript (a button or a link);
	- or the presence of a clearly identifiable adjacent text transcript;
	- or the presence of a synchronised audio description;
	- or the presence of an alternative version with a synchronised audio description accessible via an adjacent component (a button or a link).
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.2.1 Audio only and video only (prerecorded) (A)](https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded), [1.2.3 Audio description or media alternative (prerecorded) (A)](https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded). 
- EN 301 549 V3.2.1 (2021-03): *11.1.2.1.1 Audio-only and Video-only (Pre-recorded)*, *11.1.2.3.1 Audio Description or Media Alternative (Pre-recorded)*.

#### [Criterion 3.4](#crit-3-4) [A] For each pre-recorded video-only [time-based media](glossaire.md#time-based-media-audio-video-and-synchronised) with an alternative, is the alternative relevant (excluding special cases)? {id="crit-3-4"}

**[Test 3.4.1](#test-3-4-1):** Does each pre-recorded video-only time-based media meet one of these conditions? {id="test-3-4-1"}
- The [transcript](glossaire.md#transcript-time-based-media) is relevant;
- The [synchronised audio description](glossaire.md#audio-description-time-based-media) is relevant and correctly synchronised;
- The [alternative version "audio only"](glossaire.md#alternative-audio-only-version) is relevant.

##### Special cases

[See special cases in criterion 3.1](#crit-3-1) 

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify on the screen video-only time-based media with an alternative (text transcript or audio-only version).
1. If the text transcript is present, check 
	- that it is relevant (all important audio or visual information is present, including dialogue and embedded text).
1. If there is an audio description, check 
	- that it is relevant (all the important visual information is present);
	- and that it is correctly synchronised (the audio description soundtrack coincides correctly with the video).
1. If there is an "audio only" version, check 
	- that it is relevant (all important audio or visual information is present, including dialogue and embedded text).
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.2.1 Audio only and video only (prerecorded) (A)](https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded), [1.2.3 Audio description or media alternative (prerecorded) (A)](https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded). 
- EN 301 549 V3.2.1 (2021-03): *11.1.2.1.1 Audio-only and Video-only (Pre-recorded)*, *11.1.2.3.1 Audio Description or Media Alternative (Pre-recorded)*.

#### [Criterion 3.5](#crit-3-5) [A] Does each pre-recorded synchronised [time-based media](glossaire.md#time-based-media-audio-video-and-synchronised) have, if necessary, an alternative (excluding special cases)? {id="crit-3-5}

**[Test 3.5.1](#test-3-5-1):** If necessary, does each pre-recorded synchronised time-based medium satisfy one of these conditions (excluding special cases)? {id="test-3-5-1"}
- There is a [clearly identifiable adjacent](glossaire.md#clearly-identifiable-adjacent) accessible [transcript](glossaire.md#transcript-time-based-media);
- There is a [synchronised audio description](glossaire.md#audio-description-time-based-media);
- There is an alternative version with a [synchronised audio description](glossaire.md#audio-description-time-based-media) accessible via an adjacent component (a button or a link).
	
##### Special cases

[See special cases in criterion 3.1](#crit-3-1)  

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify on the screen synchronised time-based media that require a text transcript.
1. Check for
	- the presence of a clearly identifiable adjacent text transcript;
	- or the presence of a transcript accessible via an adjacent component (a button or a link);
	- or the presence of a synchronised audio description;
	- or the presence of an alternative version with a synchronised audio description accessible via an adjacent component (a button or a link).
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.2.3 Audio description or media alternative (prerecorded) (A)](https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded). 
- EN 301 549 V3.2.1 (2021-03) *11.1.2.3.1 Audio Description or Media Alternative (Pre-recorded)*.

#### [Criterion 3.6](#crit-3-6) [A] For each pre-recorded synchronised [time-based media](glossaire.md#time-based-media-audio-video-and-synchronised) with an alternative, is the alternative relevant (excluding special cases)? {id="crit-3-6"}

**[Test 3.6.1](#test-3-6-1):** Does each synchronised pre-recorded time-based media meet one of these conditions? {id="test-3-6-1"}
- The audio description is relevant and correctly synchronised;
- The text transcription is relevant.

##### Special cases

[See special cases in criterion 3.1](#crit-3-1) 

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify on the screen synchronised audio description or transcript (time-based media).
1. If an audio description is present, check 
	- that it is relevant (all the important visual information is present);
	- and that it is correctly synchronised (the audio description soundtrack coincides correctly with the video).
1. If a text transcript is present, check
	-  that it is relevant (all important audio or visual information is present, including dialogue and embedded text).
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.2.3 Audio description or media alternative (prerecorded) (A)](https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded). 
- EN 301 549 V3.2.1 (2021-03): *7.2.2 Audio description synchronization*, *11.1.2.3.1 Audio Description or Media Alternative (Pre-recorded)*.

#### [Criterion 3.7](#crit-3-7) [A] Does each pre-recorded synchronised [time-based media](glossaire.md#time-based-media-audio-video-and-synchronised) have, where appropriate, [synchronised captions](glossaire.md#synchronised-captions-media-object) (excluding special cases)? {id="crit-3-7}

##### Special cases

[See special cases in criterion 3.1](#crit-3-1) 

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify on the screen synchronised time-based media that require captions (i.e. where the soundtrack provides information, such as a person's speech).
1. Check
	- that there are synchronised captions;
	- or that there is an alternative version with synchronised captions accessible via an adjacent component (a button or a link).
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.2.2 Captions (prerecorded) (A)](https://www.w3.org/TR/WCAG21/#captions-prerecorded) 
- EN 301 549 V3.2.1 (2021-03) *11.1.2.2 Captions (Prerecorded)*.

#### [Criterion 3.8](#crit-3-8) [A] For each pre-recorded synchronised [time-based media](glossaire.md#time-based-media-audio-video-and-synchronised) with [synchronised captions](glossaire.md#synchronised-captions-media-object), are these relevant? {id="crit-3-8}

**[Test 3.8.1](#test-3-8-1):** For each pre-recorded synchronised time-based media with synchronised captions, do the captions meet these conditions? {id="test-3-8-1"}
- Captions are relevant;
- Captions are correctly synchronised.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify synchronised time-based media with captions on the screen.
1. Check that the captions are
	- relevant (all important audio information is present, including dialogue);
	- correctly synchronised. If there is no delay between the spoken word and the appearance of the captions, the captions are correctly synchronised. The reference standard specifies that captions should appear within 100 ms of the [caption time stamp](glossaire.md#time-stamp).
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.2.2 Captions (prerecorded) (A)](https://www.w3.org/TR/WCAG21/#captions-prerecorded) 
- EN 301 549 V3.2.1 (2021-03): *7.1.2 Captioning synchronization*, *11.1.2.2 Captions (Prerecorded)*.

#### [Criterion 3.9](#crit-3-9) [AA] Does each pre-recorded [time-based media](glossaire.md#time-based-media-audio-video-and-synchronised) (video only or synchronised) have, where appropriate, a [synchronised audio description](glossaire.md#audio-description-time-based-media) (excluding special cases)? {id="crit-3-9"}

##### Special cases

[See special cases in criterion 3.1](#crit-3-1) 

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify pre-recorded video-only and synchronised time-based media on the screen that require audio description.
1. Check for:
	- the presence of a synchronised audio description;
	- or the presence of an alternative version with a synchronised audio description adjacent to or accessible via an adjacent component (a button or a link).
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.2.5 Audio description (prerecorded) (AA)](https://www.w3.org/TR/WCAG21/#audio-description-prerecorded)
- EN 301 549 V3.2.1 (2021-03) *11.1.2.5 Audio description (prerecorded)*.

#### [Criterion 3.10](#crit-3-10) [AA] For each pre-recorded video-only or synchronised [time-based media](glossaire.md#time-based-media-audio-video-and-synchronised) with a [synchronised audio description](glossaire.md#audio-description-time-based-media), is the description relevant? {id="crit-3-10"}

**[Test 3.10.1](#test-3-10-1):** For each pre-recorded video-only or synchronised time-based media with an audio description, does it meet these conditions? {id="test-3-10-1"}
- The audio description is relevant;
- The audio description is correctly synchronised (the audio description soundtrack coincides correctly with the video).

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify on the screen video-only or synchronised time-based media with audio description.
1. Check that the audio description is
	- relevant (all important visual information is present);
	- correctly synchronised 
		- the sounds and words of the audio description do not overlap with those of the original soundtrack to cause perception and comprehension problems; 
		- the information conveyed in the audio description is given at the same time as the equivalent visual information appears.
1. If this is the case, the criterion is met.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.2.5 Audio description (prerecorded) (AA)](https://www.w3.org/TR/WCAG21/#audio-description-prerecorded)
- EN 301 549 V3.2.1 (2021-03): *7.2.2 Audio description synchronization*, *11.1.2.5 Audio description (prerecorded)*.

#### [Criterion 3.11](#crit-3-11) [A] For each pre-recorded [time-based media](glossaire.md#time-based-media-audio-video-and-synchronised), does the adjacent text content clearly identify the time-based media (excluding special cases)?  {id="crit-3-11"}

##### Special cases

The criterion does not apply when the time-based media is used for decorative purposes (i.e. it does not provide any information).

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify pre-recorded synchronised or audio only or video only time-based media on the screen.
1. Check that:
	- a text passage (a heading or paragraph, for example) that identifies the time-based media immediately precedes or follows it;
	- that the text passage is located outside the media content player.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content) 
- EN 301 549 V3.2.1 (2021-03) *11.1.1.1.1 Non-text Content*.

#### [Criterion 3.12](#crit-3-12) [A] Is each automatically triggered sound sequence [controllable](glossaire.md#control-automatically-triggered-sound) by the user? {id="crit-3-12"}

**[Test 3.12.1](#test-3-12-1):** Does each automatically triggered sound sequence meet one of these conditions? {id="test-3-12-1"}
- The sound sequence lasts 3 seconds or less;
- The sound sequence can be stopped by the user;
- The volume of the sound sequence can be controlled by the user independently of the system volume control.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. When the screen loads, if a sound is triggered automatically, check
	- that the sound sequence lasts 3 seconds or less;
	- or that a component (a button, for example) on the element that triggered the sound, or on the screen, can be used to stop it;
	- or that the volume of the sequence can be controlled by the user, independently of the system volume control.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.4.2 Audio control (A)](https://www.w3.org/TR/WCAG21/#audio-control)
- EN 301 549 V3.2.1 (2021-03) *11.1.4.2 Audio Control*.

#### [Criterion 3.13](#crit-3-13) [A] Does each [time-based media](glossaire.md#time-based-media-audio-video-and-synchronised) have, where necessary, the [viewing control features](glossaire.md#viewing-control-time-based-media)?  {id="crit-3-13"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify pre-recorded time-based media on the screen.
1. Check that at least the following features are present: 
	- a play function;
	- a pause or stop function; 
	- if the media has a sound track, a function that enables the sound to be switched on and off;
1. If the media has audio description, check that there is a function that enables audio description to be switched on and off.
1. If the media has synchronised captions: 
	- if the captions are embedded (open captions) as an image, check that they are displayed when the video is played;
	- otherwise, in the case of closed captions, check that there is a function that allows you to activate and deactivate these captions.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [2.1.1 Keyboard (A)](https://www.w3.org/TR/WCAG21/#keyboard)
- EN 301 549 V3.2.1 (2021-03): *7.1.1 Captioning playback*, *7.2.1 Audio description playback*, *11.2.1.1.1 Keyboard*.

#### [Criterion 3.14](#crit-3-14) [AA] For each [time-based media](glossaire.md#time-based-media-audio-video-and-synchronised), are alternative control features presented at the same level as other [primary control](glossaire.md#primary-control-of-a-time-based-media) features? {id="crit-3-14"}

**[Test 3.14.1](#test-3-14-1):** For each time-based media, do the alternative control features meet these conditions? {id="test-3-14-1"}
- For each time-based media, the functionality that enables captions to be activated and deactivated is presented at the same level as the other primary control features;
- For each time-based media, the functionality enabling audio description to be activated and deactivated is presented at the same level as the other primary control features.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify pre-recorded time-based media with an alternative (synchronised captions or audio description) on the screen.
1. If captions are present, check that the functionality that enables captions to be activated and deactivated is presented at the same level as the other features (such as the playback functionality, for example), i.e. that it is not necessary to perform more actions to trigger captions than to trigger the other features. For example, if the play button can be activated from the interface by a simple tap gesture (without the need to activate a first component), the captions function should be available in the same way, with a simple tap gesture. If the captions function is available from a drop-down menu that needs to be activated (by a tap gesture, for example), it will not be considered to be at the same level because there will be an additional step to perform.
1. If audio description is present, check that the function that enables you to activate and deactivate audio description is presented at the same level as the other functions.
1. If this is the case, the criterion is validated.

Note: Although volume and playback controls may be physical components of the devices (volume buttons on a smartphone for example), it is not required that these devices have physical controls dedicated to activating captions and audio description or that these controls, if they exist, are located at the same level.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 N/A
- EN 301 549 V3.2.1 (2021-03) *7.3 User controls for captions and audio description*.

#### [Criterion 3.15](#crit-3-15) [AA] For each feature that transmits, converts or records pre-recorded synchronised [time-based media](glossaire.md#time-based-media-audio-video-and-synchronised) that has a captions track, at the end of the process, are the captions correctly preserved? {id="crit-3-15"}

**[Test 3.15.1](#test-3-15-1):** For each feature that transmits, converts or records a video that has a captions track, at the end of the process, do the captions respect these conditions? {id="test-3-15-1"}
- The captions are present;
- The captions can be displayed;
- The captions are correctly synchronised;
- The [key features of captions](glossaire.md#key-features-of-captions) are preserved.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify the functions used to transmit (e.g. send content to another device), convert or record time-based media.
1. Execute each function (transmit, convert and record).
1. For each of the media resulting from the function, check
	- whether the captions are still present; 
	- whether the captions can be displayed;
	- whether the captions are correctly synchronised;
	- whether the key features of captions are preserved (for example, if in the original media the captions were coloured according to the speaker, this colouring must be retained in the media resulting from the functionality).
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): *5.4 Preservation of accessibility information during conversion*, *7.1.3 Preservation of captioning*.

#### [Criterion 3.16](#crit-3-16) [AA] For each feature that transmits, converts or records a [time-based media](glossaire.md#time-based-media-audio-video-and-synchronised) pre-recorded with a [synchronised audio description](glossaire.md#audio-description-time-based-media), at the end of the process, is the audio description correctly preserved? {id="crit-3-16"}

**[Test 3.16.1](#test-3-16-1):** For each feature that transmits, converts or records pre-recorded time-based media with synchronised audio description, at the end of the process does the audio description meet these conditions? {id="test-3-16-1"}
- The audio description is present;
- The audio description can be activated;
- The audio description is correctly synchronised.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify the functions used to transmit (e.g. send content to another device), convert or record time-based media.
1. Execute each function (transmit, convert and record).
1. For each of the media resulting from the function, check
	- whether audio description is present; 
	- whether audio description can be activated;
	- whether the audio description is correctly synchronised: 
	    - the sounds and words of the audio description do not overlap with those of the original soundtrack to cause perception and comprehension problems;
	    - the information conveyed in the audio description is given at the same time as the equivalent visual information appears.
1. If this is the case, the criterion is met.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): *5.4 Preservation of accessibility information during conversion*, *7.2.3 Preservation of audio description*.

#### [Criterion 3.17](#crit-3-17) [AA] For each pre-recorded [time-based media](glossaire.md#time-based-media-audio-video-and-synchronised), is the presentation of captions controllable by the user (excluding special cases)? {id="crit-3-17"}

##### Special cases

The criterion does not apply to embedded captions (*open captions*).

##### Evaluation methodology {class="disclosure methodo"}

###### iOS

1. Identify pre-recorded time-based media with captions on the screen.
1. Modify the subtitle presentation settings from the platform: 
	- Go to Settings &gt; Accessibility &gt; Subtitles and Captioning &gt; Style;
	- Select **Create a style** to define a personalised and recognisable subtitle style. 
	- Define one or more of the following parameters: subtitle size, colour, subtitle border style, background colour or background opacity (check that the **Video Override** parameter at the bottom of the screen is deactivated).
1. Check that the settings defined at platform level are applied to the captions.
1. If this is not the case, check the media for a function that allows you to modify the subtitle presentation settings.
1. Check that the parameters defined above are applied to the captions.
1. If this is the case, the criterion is validated.

###### Android

1. Identify pre-recorded time-based media with captions on the screen.
1. Modify the subtitle presentation settings from the platform: 
	- Go to Settings &gt; Accessibility &gt; Caption preferences &gt; Caption size and style;
	- Define one or more of the following parameters: text size, colour, caption border style, background colour or background opacity.
1. Check that the platform settings are applied to the captions.
1. If this is not the case, check the media for a function that allows you to modify the captions presentation parameters.
1. Check that the parameters defined above are applied to the captions.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): *7.1.4 Captions characteristics, 11.7 User preferences*.

#### [Criterion 3.18](#crit-3-18) [AA] For each [pre-recorded synchronised time-based media](glossaire.md#time-based-media-audio-video-and-synchronised) that has [synchronised subtitles](glossaire.md#synchronised-captions-media-object), can these be, if necessary, vocalised (excluding special cases)? {id="crit-3-18"}

**[Test 3.18.1](#test-3-18-1):** Does each pre-recorded synchronised time-based media with synchronised subtitles meet one of these conditions? {id="test-3-18-1"}
- The subtitles are in a standardised format;
- There is an additional audio track containing the subtitles.

##### Special cases

The criterion does not apply in the following cases: 
- The subtitles are embedded in the video.
- The video and subtitles are in the same language. The criterion only applies to translation subtitles.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS

1. Identify pre-recorded synchronised time-based media with translation subtitles on the screen.
1. Check that the subtitles are in a standardised format (for example, .srt format).
1. If not, activate the **screen reader** and navigate to the media player.
1. [Activate the rotor](https://support.apple.com/en-gb/guide/iphone/iph3e2e3a6d/ios).
1. Scroll through the rotor settings and find the "Multimedia Description" option. 
1. If so, scroll up and select the "Enunciation" option.
1. Activate the video subtitles and play the video.
1. Check that the subtitles displayed are rendered by the screen reader.
1. If this is not the case, check that there is an additional sound track in the media player, which would be the vocalised version of the subtitles.
1. Activate the additional audio track and check that the spoken subtitles correspond to the subtitles displayed.
1. If this is the case, the criterion is validated.

Note: If the "Multimedia description" option is not available in the rotor, move the focus of the screen reader to the video and use the rotor again. If the option still does not appear, the screen reader will not be able to render the subtitles and the criterion is not met.

###### Android

1. Identify pre-recorded synchronised time-based media with translation subtitles on the screen.
1. Check that the subtitles are in a standardised format (e.g. .srt).
1. If not, check that there is an additional sound track in the media player that is the vocalised version of the subtitles.
1. Activate the additional audio track and check that the spoken subtitles correspond to the subtitles displayed.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03) *7.1.5 Spoken subtitles*.

### [Topic 4](#topic-4): Tables {id="topic-4"}

#### [Criterion 4.1](#crit-4-1) [A] Does each [complex data table](glossaire.md#complex-data-table) have a [summary](glossaire.md#summary-of-table)? {id="crit-4-1"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify complex data tables on the screen.
1. Activate the **screen reader**.
1. Check
	- that a summary is displayed when the screen reader reaches the table; 
	- or that a summary is available before the table, in the form of text preceding the table.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Info and relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships)
- EN 301 549 V3.2.1 (2021-03): *11.1.3.1.1 Info and Relationships*, *11.5.2.5 Object information*.

#### [Criterion 4.2](#crit-4-2) [A] For each [complex data table](glossaire.md#complex-data-table) with a [summary](glossaire.md#summary-of-table), is the summary relevant? {id="crit-4-2"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Check that each summary (of table) is relevant, i.e. that it makes it possible to understand the nature of the data and the construction of the table.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Info and relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships)
- EN 301 549 V3.2.1 (2021-03): *11.1.3.1.1 Info and Relationships*, *11.5.2.5 Object information*.

#### [Criteria 4.3](#crit-4-3) [A] Does each [data table](glossaire.md#data-table) have a [title](glossaire.md#data-table-title)? {id="crit-4-3"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify the data tables on the screen.
1. Activate the **screen reader**. 
1. Check that a title is rendered when the screen reader reaches the table.
1. If so, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Info and relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships)
- EN 301 549 V3.2.1 (2021-03): *11.1.3.1.1 Info and Relationships*, *11.5.2.5 Object information*.

#### [Criterion 4.4](#crit-4-4) [A] For each [data table](glossaire.md#data-table) with a [title](glossaire.md#data-table-title), is the title relevant? {id="crit-4-4"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Check that each data table title is relevant, i.e. that it identifies the nature of the data presented in the table.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Info and relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships)
- EN 301 549 V3.2.1 (2021-03): *11.1.3.1.1 Info and Relationships*, *11.5.2.5 Object information*.

#### [Criteria 4.5](#crit-4-5) [A] For each [data table](glossaire.md#data-table), are the row and column headings correctly linked to the data cells? {id="crit-4-5"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify the data tables on the screen.
1. Activate the **screen reader** and browse the data cells.
1. Check that the headings are correctly rendered.
1. If so, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Info and relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships)
- EN 301 549 V3.2.1 (2021-03) *11.1.3.1.1 Info and Relationships*, *11.5.2.5 Object information*, *11.5.2.6 Row, column, and headers*.

### [Topic 5](#topic-5): Interactive components {id="topic-5"}

#### [Criterion 5.1](#crit-5-1) [A] Is each [user interface component](glossaire.md#user-interface-component), if necessary, [compatible with assistive technologies](glossaire.md#compatible-with-assistive-technologies) (excluding special cases)? {id="crit-5-1"}

- **[Test 5.1.1](#test-5-1-1):** Does each user interface component meet one of these conditions, if necessary? {id="test-5-1-1"}
	- [The name, role, value, properties and changes of state](glossaire.md#name-role-value-properties-and-changes-of-state) are [accessible to assistive technologies](glossaire.md#accessible-to-assistive-technologies) via an accessibility API;
	- A [clearly identifiable adjacent](glossaire.md#clearly-identifiable-adjacent) alternative compatible with an accessibility API provides access to the same accessibility features.
- **[Test 5.1.2](#test-5-1-2)** Does each user interface component meet these conditions (excluding special cases)? {id="test-5-1-2"}
	- The component has a relevant name;
	- The accessible name of the component contains at least the visible label;
	- The component has a relevant role;
	- The component has a relevant value;
	- The component has a relevant state.

##### Special cases

The criterion is not applicable for the following elements:
- The application is subject to strict security requirements that prevent other applications from interacting with its interface (such as assistive technology). Examples of systems subject to strict security requirements are systems dealing with intelligence activities, cryptology activities related to national security, command and control of military forces.
- Maps and online mapping services, provided that the essential information is provided in an accessible digital form for navigational maps.

There is special case management for [test 5.1.2](#test-5-1-2) where
- Punctuation and capital letters are present in the text of the visible label: they can be ignored in the accessible name without consequence.
- The text of the visible label is used as a symbol: the text must not be interpreted literally in the accessible name. The name must express the function conveyed by the symbol (for example, "B" in a text editor will have the accessible name "Bold", the sign "&gt;", depending on the context, will mean "Next" or "Start video"). The exception is mathematical symbols (see note below).

**Note:** if the visible label represents a mathematical expression, the mathematical symbols can be used literally to label the accessible name (e.g. "A&gt;B"). It is left to the user to work out the correspondence between the expression and what they have to spell, taking into account their knowledge of how their voice input software works ("A greater than B" or "A superior to B").

##### Evaluation methodology {class="disclosure methodo"}

The most comprehensive test is a rendering test using a screen reader. All the elements to be evaluated, if present, are rendered by the screen readers. Other tests with other assistive technologies may be necessary to ensure compatibility. Several more or less comprehensive evaluation methods are described below.

Several methods are available for iOS, but only the test with VoiceOver enables all the elements required by the criterion to be evaluated.

What's more, as with the web, there is no technical documentation to describe how it works and the expected implementations (for example, for modal windows or sliders). In the absence of such documentation, in order to evaluate this type of component as accurately as possible, it is still advisable to approach 
- what is described in [the ARIA specification for design patterns](https://www.w3.org/TR/wai-aria-practices-1.1/);
- the [documentation from publishers of platforms dedicated to developers](methodologie.md#editor-resources).

###### iOS with VoiceOver

1. Activate the **screen reader**.
1. Identify interactive components on the screen (e.g. button, link).
1. Access each interactive component using the screen reader gestures.
1. Check that
	- a role is rendered (e.g. button, edit zone, link); 
	- the role rendered is relevant to the associated functionality (for example, a component that triggers the opening of a modal window and is rendered as a "edit zone" has an irrelevant role; it should be identified as a button); 
	- a name is rendered and that this name is relevant, i.e. that it enables the function of the element to be understood (for form fields, please refer to the "Forms" theme for an assessment);
	- if the component has a visible label (a visible text), the text is rendered;
	- if the component has a perceptible state (activated, deactivated, selected), this state is rendered;
	- if the component can change state (e.g. toggle button, slider), perform the necessary actions to test the different states and check that each change of state is correctly rendered (switching to the selected state, increasing the slider);
	- if the component has a perceptible value (value of a slider), this value is rendered.
1. If this is the case, the criterion is validated.

###### iOS With **Accessibility Inspector**

1. Connect the iOS mobile device to the computer running macOS.
1. Activate the **Accessibility Inspector** software.
1. Choose the mobile device as the source and stay on the "Inspection" tab (buttons at top right).
1. Use the arrows in Accessibility Inspector to access each element of the interface.
1. Check that 
	- a role is available in the "Traits" parameter (for example, Button, Tab, Text Field); 
	- the role is relevant to the associated functionality (for example, a component which triggers the opening of a modal window and which is presented as Static text has an irrelevant role; it should be identified as a button); 
	- a name is available in the "Label" parameter and that this name is relevant, i.e. that it allows the function of the element to be understood (for form fields, please refer to the "Forms" theme for an assessment);
	- if the component has a visible name (a visible text), the label defined in the "Label" parameter contains at least this label.
1. If the component has a perceptible state (activated, deactivated, selected), check that this state 
	- is available in the "Traits" parameter;
	- or is indicated in the "Label" parameter.
1. If the component can change state (e.g. toggle button, slider), perform the necessary actions to test the different states and check that each change of state (switching to the selected state, increasing the slider)
	- is available in the "Traits" parameter;
	- or is indicated in the "Label" parameter.
1. If this is the case, the criterion is validated.

###### iOS With voice control

The voice control application allows users to navigate by voice. 

Criterion 5.1 in its entirety cannot be assessed with voice control, but one voice control feature (the display of labels) provides a quick overview of the status of interactive components.

Voice control will enable us to detect the components that can be used by touch but are not interactive components detectable by assistive technologies, the presence of a label and its relevance, and the presence of the visible label in the accessible label.

1. Activate voice control: Settings &gt; Accessibility &gt; Voice control.
1. Display the accessible names of interactive components: from the voice control settings screen, go to the "Overlay" button and activate it, then choose "Element names".
1. From now on, when voice control is activated, grey tooltips will appear above interactive elements that have labels. Note that if the screen has a very large number of interactive controls, the labels will be displayed in successive groups (one group of labels disappears and another appears).

What you need to know: only elements with interactive roles recognised by the Accessibility API will have a label. This will allow you to quickly identify which elements that can be used by touch are not recognised by the voice control and are therefore not interactive elements (which constitutes non-compliance).

Procedure: 

1. Identify all the interactive controls (that can be activated by touch) on the screen.
1. Activate the voice control and check that all the interactive controls identified have an associated label (grey tooltip).
1. If so, check that 
	- the associated label is relevant;
	- and the visible name (if it has one) is included in this label.
1. If this is the case, the conditions regarding the relevance of the label and the presence of the visible name in the accessible name are met.

###### Android

1. Activate the **screen reader**.
1. Identify the interactive components on the screen (e.g. button, link).
1. Access each interactive component using the screen reader gestures.
1. Check that
	- a role is rendered (e.g. button, edit zone, link); 
	- the role rendered is relevant to the associated functionality (for example, a component that triggers the opening of a modal window and is rendered as a "edit zone" has an irrelevant role; it should be identified as a button); 
	- a name is rendered and that this name is relevant, i.e. that it allows the function of the element to be understood (for form fields, please refer to the ["Forms"](#topic-9) theme to evaluate them);
	- if the component has a visible name (a visible text), the label is rendered;
	- if the component has a perceptible state (activated, deactivated, selected), this state is rendered;
	- if the component can change state (e.g. toggle button, slider), perform the necessary actions to test the different states and check that each change of state is correctly rendered (switching to the selected state, increasing the slider);
	- that if the component has a perceptible value (value of a slider), this value is rendered.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [2.4.4 Link Purpose (In Context)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context), [2.5.3 Label in name (A)](https://www.w3.org/TR/WCAG21/#label-in-name), [4.1.2 Name, role, value (A)](https://www.w3.org/TR/WCAG21/#name-role-value)
- EN 301 549 V3.2.1 (2021-03) *5.6.1 Tactile or auditory status*, *11.2.4.4 Link Purpose (in context)*, *11.2.5.3.1 Label in Name*, *11.4.1.2.1 Name, role, value*, *11.5.2.3 Use of accessibility services*, *11.5.2.5 Object information*, *11.5.2.7 Values*, *11.5.2.8 Label relationships*, *11.5.2.9 Parent-child relationships*, *11.5.2.11 List of available actions*, *11.5.2.12 Execution of available actions*, *11.5.2.16 Modifications of states and properties*, *11.6.2 No disruption of accessibility features*.

#### [Criteria 5.2](#crit-5-2) [A] Is every [user interface component](glossaire.md#user-interface-component) [accessible and operable by keyboard and any pointing device](glossaire.md#accessible-and-operable-by-keyboard-and-any-pointing-device) (excluding special cases)? {id="crit-5-2"}

##### Special cases

The criterion is not applicable for the following elements:
- The functionality depends on the use of an event handler with no universal equivalent; for example, a freehand drawing application cannot be made keyboard-controllable.
- The application is subject to strict security requirements that prevent other applications from interacting with its interface (such as assistive technology). Examples of systems subject to strict security requirements are systems dealing with intelligence activities, cryptology activities related to national security, and the command and control of military forces.
- Maps and online mapping services, provided that the essential information is provided in an accessible digital form for navigation maps.

##### Evaluation methodology {class="disclosure methodo"}

The aim here is to ensure that the component can be used by the screen reader, voice control, an external keyboard or any other external switch. The tests can be limited to a few pointing devices since the characteristics required (on interactive components) are similar.

It is nevertheless necessary to test at least with the screen reader and an external keyboard.

For the external keyboard, [some settings are necessary for the device to be fully functional](methodologie.md#external-keyboard).

###### iOS and Android

1. Activate the **screen reader**.
1. Browse all the interactive components.
1. For each interactive component, check that 
	- it can be reached with the screen reader;
	- it can be activated with the screen reader. 
1. If this is the case a modifiable component (input field, tick box, slider), check that it can be modified with the screen reader.
1. Connect an **external keyboard** (and [configure keyboard navigation](methodologie.md#external-keyboard)).
1. Browse all the interactive components.
1. For each interactive component, check that 
	- it can be reached using the keyboard keys;
	- it can be activated using the dedicated key on the keyboard.
1. If this is the case a modifiable component (input field, check box, slider), check that it can be modified using the keyboard keys.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Info and Relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships), [2.1.1 Keyboard (A)](https://www.w3.org/TR/WCAG21/#keyboard), [2.4.7 Focus visible (AA)](https://www.w3.org/TR/WCAG21/#focus-visible) 
- EN 301 549 V3.2.1 (2021-03) *11.1.3.1.1 Info and Relationships*, *11.2.1.1.1 Keyboard*, *11.2.4.7 Focus Visible*, *11.5.2.3 Use of accessibility services*, *11.5.2.7 Values*, *11.5.2.12 Execution of available actions*, *11.5.2.13 Tracking of focus and selection attributes*, *11.5.2.14 Modification of focus and selection attributes*, *11.5.2.17 Modifications of values and text*.

#### [Criteria 5.3](#crit-5-3) [A] Does each [change of context](glossaire.md#changes-of-context) meet one of these conditions? {id="crit-5-3"}

**[Test 5.3.1](#test-5-3-1):** Does each change of context meet one of these conditions? {id="test-5-3-1"}
- The user is warned of the type of change by a text before it is triggered;
- The change of context is initiated by a user action on a component with an explicit name.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify all events in the screen that initiate a change of context, for example
	- dynamic updating of form fields;
	- opening a new page when a list entry is selected;
	- updating an essential part of the screen without user action;
	- automatic launch of a video player when a playlist is selected;
	- focus manipulation that changes the user's current position on the screen.
1. Check that:
	- the user is warned by text of the type of change before it is triggered;
	- or the change of context is initiated by an explicit button or link.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [3.2.1 On focus (A)](https://www.w3.org/TR/WCAG21/#on-focus), [3.2.2 On input (A)](https://www.w3.org/TR/WCAG21/#on-input)
- EN 301 549 V3.2.1 (2021-03): *11.3.2.1 On Focus*, *11.3.2.2 On Input*.

#### [Criterion 5.4](#crit-5-4) [AA] On each screen, are the [status messages](glossaire.md#status-message) correctly rendered by assistive technologies? {id="crit-5-4"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Activate the **screen reader**. 
1. Perform the actions required for a status message to appear, for example: 
	- filling in a form correctly and validating it to display a message indicating successful submission;
	- submitting a form with mandatory fields without input to display a message indicating the presence of errors; 
	- accessing a screen that takes a certain amount of time to load, so that a progress message or a loading progress indicator is displayed.
1. Check that when the status appears, the screen reader renders the information and that this information is understandable.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [4.1.3 Status messages (SA)](https://www.w3.org/TR/WCAG21/#status-messages)
- EN 301 549 V3.2.1 (2021-03): *11.4.1.3.1 Status Messages*, *11.5.2.3 Use of accessibility services*, *11.5.2.15 Change notification*.

#### [Criterion 5.5](#crit-5-5) [A] Is each state of a [toggle control](glossaire.md#toggle-control) presented to the user perceptible? {id="crit-5-5"}

**[Test 5.5.1](#test-5-5-1):** For each state of a toggle control presented to the user, are the following conditions met? {id="test-5-5-1"} 
- The state of the functionality is visible on the interface without modifying the state of the control; 
- The state of the functionality can be determined by touch or sound without modifying the state of the control.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify toggle controls on the screen (buttons with one or more states, e.g. checkboxes, radio buttons, switches).
1. Check that it is possible to determine the state of the control on the basis of its presentation in the interface (for example, a change in shape when the control goes from one state to another).
1. Activate the **screen reader** and navigate to the control.
1. Check that the state of the control is rendered by the screen reader without having to interact with the control.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03) *5.6.1 Tactile or auditory status, 5.6.2 Visual status*.

### [Topic 6](#topic-6): Mandatory elements {id="topic-6"}

#### [Criterion 6.1](#crit-6-1) [A] On each screen, are texts rendered by assistive technologies in the main language of the screen? {id="crit-6-1"}

**Note:** It is not required that language changes in the screen are identified (e.g. a foreign language term included in a paragraph) but that the screen is rendered at least correctly in the main language of the screen. However, in certain applications where language changes would be essential to the understanding of the content (such as a translation application or a foreign language course application) it will be necessary to ensure that foreign language texts are correctly rendered in the identified language.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS 

1. Go to Settings &gt; Accessibility &gt; VoiceOver &gt; Speech and activate the "Detect languages" setting.
1. Activate the **screen reader** and browse through all the elements on the screen.
1. Check that the text is rendered in the main language of the screen.
1. If this is the case, the criterion is validated.

###### Android 

1. Go to Settings &gt; Accessibility &gt; TalkBack &gt; Settings &gt; Text-to-Speech Settings (depending on the platform version, the path may be different): 
	- Check that the "Preferred engine" setting is "Google Text-to-Speech"; 
	- Activate the text-to-speech settings (button to the right of "Preferred engine") and check that the "Language detection" setting is "Aggressive".
1. Activate the **screen reader** and browse through all the elements on the screen.
1. Check that the text is rendered in the main language of the screen.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [3.1.1 Language of page (A)](https://www.w3.org/TR/WCAG21/#language-of-page)
- EN 301 549 V3.2.1 (2021-03) *11.3.1.1.1 Language of software*.

#### [Criterion 6.2](#crit-6-2) [A] On each screen, interface elements must not be used [only for layout purposes](glossaire.md#only-for-layout-purposes). Is this rule respected? {id="crit-6-2"}

##### Evaluation methodology {class="disclosure methodo"}

This criterion only checks elements that should not be interactive (text elements, tables for example).

###### iOS with VoiceOver

1. Activate the **screen reader** and browse all the elements on the screen.
1. Check that the role rendered by the screen reader corresponds to the nature of the element (for example, when the screen reader reaches what appears to be a paragraph and renders "Button", this is an error, no role is rendered for the paragraphs).
1. If this is the case, the criterion is validated.

###### iOS With Accessibility Inspector

1. Connect the iOS mobile device to the computer running macOS.
1. Activate the **Accessibility Inspector** software.
1. Choose the mobile device as the source and stay on the "Inspection" tab (buttons at top right).
1. Use the arrows in Accessibility Inspector to access each element of the interface.
1. Check that the role available in the "Traits" parameter is relevant to the nature of the associated element (for example, simple text acting as a button would be considered non-compliant and should be identified as static text).
1. If this is the case, the criterion is validated.

###### Android

1. Activate the **screen reader** and browse all the elements on the screen.
1. Check that the role rendered by the screen reader corresponds to the nature of the element (for example, when the screen reader reaches what appears to be a paragraph and returns "Button", this is an error - no role is rendered for the paragraphs).
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Info and relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships) 
- EN 301 549 V3.2.1 (2021-03) *11.1.3.1.1 Info and Relationships*.

### [Topic 7](#topic-7): Information structure {id="topic-7"}

#### [Criterion 7.1](#crit-7-1) [A] On each screen, is the information structured by the appropriate use of headings? {id="crit-7-1"}

**[Test 7.1.1](#test-7-1-1)** Does each screen meet these conditions? {id="test-7-1-1"}
- The content of each heading is relevant;
- Each passage of text that makes up a heading is identified as a heading.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS with VoiceOver

1. Activate the **screen reader**.
1. Use the rotor and select "Headings".
1. Browse through the headings by sliding your finger up or down.
1. Check that 
	- each text structure on the screen can be reached; 
	- each heading reached is relevant, i.e. 
		- the heading is useful for structuring the screen;
		- the text contained in the heading makes it possible to understand the content of the section thus titled.
1. If this is the case, the criterion is validated.

###### iOS with Accessibility Inspector

1. Connect the iOS mobile device to the computer using macOS.
1. Activate the **Accessibility Inspector** software.
1. Choose the mobile device as the source and stay on the "Inspection" tab (buttons at top right).
1. Use the arrows in Accessibility Inspector to access each element of the interface.
1. Check that 
	- for each text that structures the screen, the "Traits" parameter contains the value "Headings"; 
	- that each text whose "Traits" parameter contains the value "Headings" is relevant, i.e. 
		- the heading thus declared is useful for structuring the screen;
		- the text contained in the heading makes it possible to understand the content of the section thus titled.
1. If this is the case, the criterion is validated.

###### Android

1. Activate the **screen reader**.
1. Use the playback controls menu and select "Headings".
1. Browse through the headings by sliding your finger up or down.
1. Check that 
	- each text structure on the screen is reached in this way and is rendered as a heading; 
	- that each heading is relevant, i.e. 
		- the heading is useful for structuring the screen;
		- that the text contained in the heading makes it possible to understand the content of the section thus titled.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Info and relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships), [2.4.6 Headings and labels (AA)](https://www.w3.org/TR/WCAG21/#headings-and-labels), [4.1.2 Name, role, value (A)](https://www.w3.org/TR/WCAG21/#name-role-value)
- EN 301 549 V3.2.1 (2021-03) *11.1.3.1.1 Info and Relationships*, *11.2.4.6 Headings and Labels*, *11.4.1.2 Name, Role, Value*, *11.5.2.3 Use of accessibility services*, *11.5.2.5 Object information*, *11.5.2.9 Parent-child relationships*.

#### [Criterion 7.2](#crit-7-2) [A] On each screen, is each list correctly structured? {id="crit-7-2"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Activate the **screen reader**.
1. Find items on the screen in the form of lists.
1. Check that the screen reader renders "List" when it reaches the group of items.
1. If it does, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Info and relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships)
- EN 301 549 V3.2.1 (2021-03): *11.1.3.1.1 Info and Relationships*, *11.5.2.5 Object information*, *11.5.2.9 Parent-child relationships*.

### [Topic 8](#topic-8): Presentation of information {id="topic-8"}

#### [Criterion 8.1](#crit-8-1) [A] On each screen, is the visible content carrying information accessible to assistive technologies? {id="crit-8-1"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Activate the **screen reader**.
1. Scroll through all the items using the screen reader gestures.
1. Check that all the information visible on the screen is rendered by the screen reader.
1. If this is the case, the criterion is validated.

Note: In applications, items can be grouped together. For example, in a product catalogue, each item has a title, a price and a description. Instead of having the screen reader focus on each of the 3 items, the application can be designed so that the screen reader only accesses the item as a whole, so that the screen reader displays all the information without the user having to make several gestures to reach the 3 items. This is acceptable (and even encouraged, since it limits the number of actions required to browse the content), but care must be taken to ensure that all the text is rendered by the screen reader. 

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content), [1.3.1 Info and relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships) 
- EN 301 549 V3.2.1 (2021-03): *11.1.1.1.1 Non-text Content*, *11.1.3.1.1 Info and Relationships*, *11.5.2.10 Text*.

#### [Criterion 8.2](#crit-8-2) [AA] On each screen, can the user increase the font size by at least 200% (excluding special cases)? {id="crit-8-2"}

**[Test 8.2.1](#test-8-2-1)** Does each screen meet these conditions? {id="test-8-2-1"}
- The user can enlarge the size of all the texts by 200% using the platform parameters;
- All the texts on the screen are enlarged;
- All enlarged texts remain legible and the interactive components usable.

##### Special cases

The criterion does not apply to the following elements:
- image of text;
- captions.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS

1. Access the font size settings for the platform: Settings &gt; Accessibility &gt; Display and text size &gt; Larger text.
1. Activate the "Larger accessibility sizes" button and increase the value of the font size (slider at the bottom of the screen) until a magnification of 200% is reached (the maximum of the gauge allows a zoom greater than 200%, so the test can be limited to increasing the zoom using the penultimate position of the slider).
1. If necessary, restart the application to ensure that the parameter is taken into account by the application.
1. Check that 
	- all the texts in the interface have been enlarged; 
	- all the text in the interface remains legible and the functions usable; 
	- content has not disappeared; 
	- if any text has disappeared, that there is a method on the screen for displaying the text on demand (for example, by holding down an icon).
1. If this is the case, the criterion is validated.

###### Android

1. Access the font size settings for the platform: Settings &gt; Accessibility &gt; Font size (depending on the version of the platform, the access path may be different); 
1. Increase the value of the font size (slider at the bottom of the screen) until you reach a magnification of 200% (on some devices, the slider gauge may be different and offer values that allow you to achieve a zoom greater than 200%, so check that the test is only carried out for a value of 200%).
1. If necessary, restart the application to ensure that the parameter is taken into account by the application.
1. Check that 
	- all the texts in the interface have been enlarged; 
	- all the text in the interface remains legible and the functions usable;
	- content has not disappeared; 
	- if any text has disappeared, that there is a method on the screen for displaying the text on demand (for example, by holding down an icon).
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.4.4 Resize text (AA)](https://www.w3.org/TR/WCAG21/#resize-text)
- EN 301 549 V3.2.1 (2021-03): *11.1.4.4.1 Resize Text (AA)*, *11.5.2.3 Use of accessibility services*, *11.7 User preferences*.

#### [Criterion 8.3](#crit-8-3) [A] On each screen, does each [component in a text environment whose nature is not obvious](glossaire.md#component-whose-nature-is-not-obvious) have a contrast ratio greater than or equal to 3:1 in relation to the surrounding text? {id="crit-8-3"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS

1. Activate the **Differentiate without colour** option (Settings &gt; Accessibility &gt; Text display and size &gt; Differentiate without colour).
1. Activate the **Increase contrast** option (Settings &gt; Accessibility &gt; Text display and size &gt; Increase contrast) or if present in the application, activate the replacement mechanism enabling the application to be displayed with a sufficient contrast ratio.
1. Identify user interface components (links, buttons) with text embedded in a text environment (in a sentence, for example), identified only by colour (without any other formatting that distinguishes them from the rest of the text in which they are embedded).
1. Activate the **Colour Contrast Analyser** software on the computer and capture the colours of the surrounding text and the interactive component on the mobile device, 
	- either by [broadcasting the screen of the mobile device on the computer](methodologie.md#broadcast-the-screen-of-the-mobile-device);
	- or by taking [screenshots](methodologie.md#take-screenshots) of the elements to be evaluated (and importing them onto the computer).
1. Check that the contrast between the font colour of the component and the font colour of the surrounding text is at least 3:1.
1. If this is the case, the criterion is validated.

###### Android

1. If it exists in the application, activate the replacement mechanism to display the application with a sufficient contrast ratio.
1. Identify user interface components (links, buttons) with text embedded in a text environment (in a sentence, for example) identified solely by colour (without any other formatting that distinguishes them from the rest of the text in which they are embedded).
1. Activate the **Colour Contrast Analyser** software on the computer and capture the colours of the surrounding text and the interactive component on the mobile device, 
	- either by [broadcasting the screen of the mobile device on the computer](methodologie.md#broadcast-the-screen-of-the-mobile-device);
	- or by taking [screenshots](methodologie.md#take-screenshots) of the elements to be evaluated (and importing them onto the computer).
1. Check that the contrast between the font colour of the component and the font colour of the surrounding text is at least 3:1.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.4.1 Use of color (A)](https://www.w3.org/TR/WCAG21/#use-of-color)
- EN 301 549 V3.2.1 (2021-03) *11.1.4.1 Use of color*.

#### [Criterion 8.4](#crit-8-4) [A] On each screen, for each [component in a text environment whose nature is not obvious](glossaire.md#component-whose-nature-is-not-obvious), is there an indication other than colour to indicate when focused and hovered with the mouse? {id="crit-8-4"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify user interface components (links, buttons) with text embedded in a text environment (in a sentence, for example), identified solely by colour (without any other formatting that distinguishes them from the rest of the text in which they are embedded).
1. Connect an **external keyboard** (and [set keyboard navigation parameters](methodologie.md#external-keyboard)).
1. Check that the focus visibility as defined at system level is preserved on these elements.
1. Connect a **mouse**.
1. Check that hovering over interactive components in a text environment is indicated by means other than colour (bolding, underlining for example).
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.4.1 Use of color (A)](https://www.w3.org/TR/WCAG21/#use-of-color)
- EN 301 549 V3.2.1 (2021-03) *11.1.4.1 Use of color*.

#### [Criterion 8.5](#crit-8-5) [A] On each screen, for each element receiving the focus, is the [focus](glossaire.md#when-focused) visible? {id="crit-8-5"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS

1. Connect an **external keyboard** (and [configure keyboard navigation](methodologie.md#external-keyboard)).
1. Enable all [available focus style settings](methodologie.md#external-keyboard). 
1. Navigate through the application and assess whether the focus visibility as defined at system level is preserved for all elements of the application.
1. If this is the case, the criterion is validated.

###### Android

1. Connect an **external keyboard** (and [configure keyboard navigation](methodologie.md#external-keyboard)).
1. Navigate through the application and assess whether the focus visibility as defined at system level is preserved for all elements of the application.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.4.1 Use of color (A)](https://www.w3.org/TR/WCAG21/#use-of-color), [2.4.7 Focus visible (AA)](https://www.w3.org/TR/WCAG21/#focus-visible) 
- EN 301 549 V3.2.1 (2021-03): *11.1.4.1 Use of color*, *11.2.4.7 Focus Visible*, *11.7 User preferences*.

#### [Criterion 8.6](#crit-8-6) [A] On each screen, information must not be conveyed solely by [shape, size or location](glossaire.md#indication-conveyed-by-shape-size-or-location). Is this rule respected? {id="crit-8-6"}

This applies to words or sets of words, texts, graphic elements conveying information and time-based media.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify information on the screen given by shape, size or location in a text, graphic element, time-based or non-time-based media. This can be an icon positioned to the left of a component to indicate that it is active, or an instruction on the screen to activate a component positioned at a certain point on the screen.
1. Check that there is another way of retrieving this information from the screen (for example, a text that everyone can read and that gives the same information).
1. If this is not the case, activate the **screen reader** and check that information other than the shape, size or location is rendered by the screen reader.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.3.3 Sensory characteristics (A)](https://www.w3.org/TR/WCAG21/#sensory-characteristics), [1.4.1 Use of color (A)](https://www.w3.org/TR/WCAG21/#use-of-color). 
- EN 301 549 V3.2.1 (2021-03): *11.1.3.3 Sensory Characteristics*, *11.1.4.1 Use of color*.

#### [Criterion 8.7](#crit-8-7) [AA] On each screen, is the additional content that appears when the focus is set or when a [user interface component](glossaire.md#user-interface-component) is hovered over controllable by the user (excluding special cases)? {id="crit-8-7"}

- **[Test 8.7.1](#test-8-7-1):** Can each additional content which becomes visible when a user interface component is focused or hovered over be hidden by a user action without moving the focus or the mouse pointer (excluding special cases)? {id="test-8-7-1"}
- **[Test 8.7.2](#test-8-7-2)** Can each additional content that appears when hovering over an interface component be hovered over by the mouse pointer without disappearing (excluding special cases)? {id="test-8-7-2"}
- **[Test 8.7.3](#test-8-7-3)** Does any additional content which appears when focusing or when hovering over a user interface component meet one of these conditions (excluding special cases)? {id="test-8-7-3"}
	- The additional content remains visible until the user removes the mouse pointer or the focus from the additional content and the user interface component that triggered its appearance;
	- The additional content remains visible until the user performs an action that hides this content without moving the focus or mouse pointer of the user interface component that triggered its appearance;
	- The additional content remains visible until it is no longer valid.

##### Special cases

The criterion is not applicable when the additional content is controlled by the platform (for example, the `title` attribute in HTML) or corresponds to a modal window.

When the additional content does not mask or replace any information-bearing content, [test 8.7.1](#test-8-7-1) is not applicable.


##### Evaluation methodology {class="disclosure methodo"}

###### iOS

1. Connect an **external keyboard** (and [configure keyboard navigation](methodologie.md#external-keyboard)).
1. Browse the screen and locate the additional content that appears when focusing a user interface component.
1. Check that the additional content can be hidden using a keyboard key (the <kbd>ESC</kbd> key, for example).
1. Check that the additional content remains visible 
	- until the focus is moved away from the user interface component and the additional content;
	- or as long as the focus is positioned on the user interface component or in the additional content;
	- or as long as the additional content is valid. 
1. Connect a **mouse**.
1. Scan the screen with the mouse and locate the additional content that appears when a user interface component is hovered over.
1. Check that the additional content can be hovered over with the mouse.
1. Check that the additional content remains visible 
	- until the mouse pointer is moved away from the user interface component and the additional content;
	- or as long as the mouse pointer hovers over the user interface component or the additional content;
	- or as long as the additional content is valid. 
1. If this is the case, the criterion is validated.

###### Android

1. Connect an **external keyboard** (and [configure keyboard navigation](methodologie.md#external-keyboard)).
1. Browse the screen and locate the additional content that appears when focusing a user interface component.
1. Check that the additional content can be hidden by a key on the keyboard (generally the key or combination of keys that will have been associated in Switch Access for the Return parameter)
1. Check that the additional content remains visible 
	- until the focus is moved away from the user interface component and the additional content;
	- or as long as the focus is positioned on the user interface component or in the additional content;
	- or as long as the additional content is valid. 
1. Connect a **mouse**.
1. Scan the screen with the mouse and locate the additional content that appears when a user interface component is hovered over.
1. Check that the additional content can be hovered over with the mouse.
1. Check that the additional content remains visible 
	- until the mouse pointer is moved away from the user interface component and the additional content;
	- or as long as the mouse pointer hovers over the user interface component or the additional content;
	- or as long as the additional content is valid. 
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.4.13 Content on hover or focus (AA)](https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus) 
- EN 301 549 V3.2.1 (2021-03) *11.1.4.13 Content on Hover or Focus*.

### [Topic 9](#topic-9): Forms {id="topic-9"}

#### [Criterion 9.1](#crit-9-1) [A] Does each form field have a visible label? {id="crit-9-1"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify on the screen the form fields (input field, radio button, check box).
1. Check for the presence of an adjacent visible label.
1. Activate the form input field (e.g. enter text).
1. Check that the label remains visible.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [2.4.6 Headings and labels (AA)](https://www.w3.org/TR/WCAG21/#headings-and-labels)
- EN 301 549 V3.2.1 (2021-03) *11.2.4.6 Headings and Labels*.

#### [Criterion 9.2](#crit-9-2) [A] Does each form field have a label that is accessible to assistive technologies? {id="crit-9-2"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS with VoiceOver

1. Activate the **screen reader**.
1. Navigate to form elements using screen reader gestures.
1. Check that a label is rendered when the focus of the screen reader is on the form field.
1. If this is the case, the criterion is validated.

###### iOS with voice control

1. Activate **voice control**.
1. Identify all the form fields on the screen.
1. Check that a label is detected by Voice Control (a grey tooltip appears above the field).
1. If this is the case, the criterion is validated.

###### Android

1. Activate the **screen reader**.
1. Navigate to form elements using screen reader gestures.
1. Check that a label is rendered when the focus of the screen reader is on the form field.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Info and relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships), [3.3.2 Labels or instructions (A)](https://www.w3.org/TR/WCAG21/#labels-or-instructions), [4.1.2 Name, role, value (A)](https://www.w3.org/TR/WCAG21/#name-role-value)
- EN 301 549 V3.2.1 (2021-03): *11.1.3.1 Info and Relationships (A)*, *11.3.3.2 Labels or Instructions (A)*, *11.4.1.2.1 Name, role, value (A)*, *11.5.2.3 Use of accessibility services*, *11.5.2.5 Object information*, *11.5.2.8 Label relationships*.

#### [Criterion 9.3](#crit-9-3) [A] Is each label associated with a form field relevant? {id="crit-9-3"}

**[Test 9.3.1](#test-9-3-1)** Does each label associated with a form field meet these conditions? {id="test-9-3-1"}
- The label accessible to assistive technologies is relevant;
- The visible label is contained in the label accessible to assistive technologies.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS with VoiceOver

1. Activate the **screen reader**.
1. Navigate to form elements using screen reader gestures.
1. Check that
	- the label rendered by the screen reader is relevant (it allows you to understand the nature of the expected input);
	- the visible label is contained in the label rendered by the screen reader.
1. If this is the case, the criterion is validated.

###### With voice control

1. Activate **voice control**.
1. Identify all the form fields on the screen.
1. Check that
	- the label detected by the voice control (grey tooltip) is relevant (it allows you to understand the nature of the expected input);
	- the visible label is contained in the label detected by the voice control (grey tooltip).
1. If this is the case, the criterion is validated.

###### Android

1. Activate the **screen reader**.
1. Navigate to form elements using screen reader gestures.
1. Check that
	- the label rendered by the screen reader is relevant (it allows you to understand the nature of the input required);
	- the visible label is contained in the label rendered by the screen reader.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [2.4.6 Headings and labels (AA)](https://www.w3.org/TR/WCAG21/#headings-and-labels), [2.5.3 Label in name (A)](https://www.w3.org/TR/WCAG21/#label-in-name), [3.3.2 Labels or instructions (A)](https://www.w3.org/TR/WCAG21/#labels-or-instructions).
- EN 301 549 V3.2.1 (2021-03): *11.2.4.6 Headings and Labels*, *11.2.5.3.1 Label in Name*, *11.3.3.2 Labels or Instructions (A)*, *11.5.2.5 Object information*.

#### [Criterion 9.4](#crit-9-4) [A] Are each field label and its associated field [located next to each other](glossaire.md#label-and-field-located-next-to-each-other)? {id="crit-9-4"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify all the form fields on the screen.
1. For each form field, check that the visible label is adjacent to the field to which it is linked.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [3.3.2 Labels or instructions (A)](https://www.w3.org/TR/WCAG21/#labels-or-instructions)
- EN 301 549 V3.2.1 (2021-03) *11.3.3.2 Labels or Instructions (A)*.

#### [Criterion 9.5](#crit-9-5) [A] In each form, is the label of each button relevant? {id="crit-9-5"}

**[Test 9.5.1](#test-9-5-1)** Does each form button meet these conditions? {id="test-9-5-1"}
- The label of the button accessible to assistive technologies is relevant;
- The visible text of the button is contained in the label accessible to assistive technologies.

##### Evaluation methodology {class="disclosure methodo"}

2 evaluation methods are proposed for iOS. Both methods lead to the same results. Only one of these methods is required to evaluate the criterion on iOS.

###### iOS with VoiceOver

1. Activate the **screen reader**.
1. Navigate to the form buttons using the screen reader gestures.
1. Check that
	- the heading rendered by the screen reader is relevant (it allows you to understand the action of the button);
	- the visible label is contained in the label rendered by the screen reader.
1. If this is the case, the criterion is validated.

###### iOS with voice control

1. Activate **voice control**.
1. Identify the form buttons on the screen.
1. Check that
	- the heading detected by the voice control (grey tooltip) is relevant (it allows you to understand the action of the button);
	- the visible label is contained in the label detected by the voice control (grey tooltip);
1. If this is the case, the criterion is validated.

###### Android 

1. Activate the **screen reader**.
1. Navigate to the form buttons using the screen reader gestures.
1. Check that
	- the heading rendered by the screen reader is relevant (it allows you to understand the action of the button);
	- the visible label is contained in the label rendered by the screen reader.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [2.5.3 Label in name (A)](https://www.w3.org/TR/WCAG21/#label-in-name), [4.1.2 Name, role, value (A)](https://www.w3.org/TR/WCAG21/#name-role-value)
- EN 301 549 V3.2.1 (2021-03): *11.2.5.3.1 Label in Name (A)*, *11.4.1.2.1 Name, role, value (A)*, *11.5.2.5 Object information*, *11.5.2.8 Label relationships*.

#### [Criterion 9.6](#crit-9-6) [A] In each form, are the [related form controls](glossaire.md#related-form-controls) identified, if necessary? {id="crit-9-6"}

**[Test 9.6.1](#test-9-6-1):** Do the related form controls respect these conditions, if necessary? {id="test-9-6-1"}
- The fields are grouped together in a common element;
- The grouping has a relevant name.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Activate the **screen reader**.
1. Identify on the screen the fields of the same kind that need to be grouped together (for example, the fields for entering the different sequences of digits in a credit card code).
1. Check that
	- when the focus is placed on the first field, information is rendered identifying the group to which the field belongs (although this is important for users, it is not required that the grouping information is rendered on each of the form fields, but only on at least the first field in the grouping);
	- the information rendered is relevant, i.e. that it enables the nature of the grouping to be understood.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Info and relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships), [3.3.2 Labels or instructions (A)](https://www.w3.org/TR/WCAG21/#labels-or-instructions). 
- EN 301 549 V3.2.1 (2021-03): *11.1.3.1 Info and Relationships, 11.3.3.2 Labels or Instructions*.

#### [Criterion 9.7](#crit-9-7) [A] Are the mandatory form fields correctly identified (excluding special cases)? {id="crit-9-7"}

**[Test 9.7.1](#test-9-7-1)** Does each mandatory form field meet these conditions? {id="test-9-7-1"}
- The required nature is visible;
- The required nature is accessible to assistive technologies.

##### Special case 

The criterion does not apply when the form contains a single form field or indicates optional fields in a way that is
- visible;
- in the field label.

If all the fields on a form are mandatory, the criterion remains applicable. 

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android 

1. Activate the **screen reader**.
1. Validate the form without entering any data in order to identify the mandatory fields.
1. For each mandatory field, check that
	- the information rendered by the screen reader when focused on the field contains the required nature;
	- a visible text near the field indicates that the form field is mandatory.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [3.3.2 Labels or instructions (A)](https://www.w3.org/TR/WCAG21/#labels-or-instructions). 
- EN 301 549 V3.2.1 (2021-03) *11.3.3.2 Labels or Instructions (A)*.

#### [Criterion 9.8](#crit-9-8) [A] For each mandatory form field, is the expected data type and/or format available? {id="crit-9-8"}

**[Test 9.8.1](#test-9-8-1):** Does each mandatory form field meet these conditions? {id="test-9-8-1"}
- The data type and/or format is visible;
- The data type and/or format is accessible to assistive technologies.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android 

1. Activate the **screen reader**.
1. Fill in form input fields with values that are likely to cause input errors (e.g. enter an incorrectly formed e-mail address).
1. Validate the form.
1. For each mandatory form field that has a format check (which will be displayed with an error after validation), check that
	- the expected data type and/or format are rendered by the screen reader when focused on the field;
	- a visible text near the field indicates the expected data type and/or format.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [3.3.2 Labels or instructions (A)](https://www.w3.org/TR/WCAG21/#labels-or-instructions). 
- EN 301 549 V3.2.1 (2021-03) *11.3.3.2 Labels or Instructions (A)*. 

#### [Criterion 9.9](#crit-9-9) [A] In each form, are input errors accessible? {id="crit-9-9"}

**[Test 9.9.1](#test-9-9-1)** Does each input error meet these conditions? {id="test-9-9-1"}
- The input error is visible;
- The input error is accessible to assistive technologies.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android 

1. Activate the **screen reader**.
1. Fill in form fields with values that are likely to cause input errors (leaving a field empty, entering a badly formed e-mail address, for example).
1. Validate the form.
1. For each field in error, check that
	- the error message is visible near the field;
	- the error message is rendered by the screen reader when focused on the field.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [3.3.1 Error identification (A)](https://www.w3.org/TR/WCAG21/#error-identification)
- EN 301 549 V3.2.1 (2021-03) *11.3.3.1.1 Error Identification (A)*.

#### [Criterion 9.10](#crit-9-10) [AA] In each form, is the [error management](glossaire.md#error-management-form) accompanied, if necessary, by suggestions of expected data types, formats or values? {id="crit-9-10"}

**[Test 9.10.1](#test-9-10-1):** In each form, does the error management check these conditions?  {id="test-9-10-1"}
- If necessary, the input check is accompanied by suggestions for the expected data types and formats;
- The input check is accompanied, if necessary, by suggestions for expected values.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android 

1. Activate the **screen reader**.
1. Fill in form input fields with values that are likely to cause input errors (e.g. entering an incorrectly formed e-mail address).
1. Validate the form.
1. For each field in error that has a format check, check that the error message includes a real example of an input (for example, for an e-mail address, check that the pattern refers to a real address, like "jean.schmitt@accessibilite.lu").
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [3.3.3 Error suggestion (AA)](https://www.w3.org/TR/WCAG21/#error-suggestion). 
- EN 301 549 V3.2.1 (2021-03): *11.3.3.3 Error Suggestion (AA)*. 

#### [Criterion 9.11](#crit-9-11) [AA] For each form that modifies or deletes data, or transmits answers to a test or examination, or whose validation has financial or legal consequences, can the data entered be modified, updated or rendered by the user? {id="crit-9-11"} 

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android 

1. Activate the **screen reader**.
2. Fill in the form.
3. For all data of a financial (e.g. income), legal (e.g. reference to an administrative act) or personal (e.g. telephone number) nature, for each form that transmits answers to a test or examination, check that the user can:
	- modify or cancel data and carried out actions on that data while it is being entered (e.g. field entry and the browser's undo editing functionality are not disabled);
	- or explicitly confirm the sending of this data via a dedicated mechanism (for example, a form field or an additional step).
4. For each form that modifies or deletes data (for example, deleting a postal address), check that the user can
	- retrieve the deleted data during input;
	- or explicitly confirm the deletion of this data via a dedicated mechanism (for example, a form field or an additional step).
5. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [3.3.4 Error prevention (legal, financial, data) (AA)](https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data). 
- EN 301 549 V3.2.1 (2021-03) *11.3.3.4 Error Prevention (Legal, Financial, Data) (AA)*.

#### [Criterion 9.12](#crit-9-12) [AA] For each field that expects [personal user data](glossaire.md#personal-user-data), is input facilitated? {id="crit-9-12"}

**[Test 9.12.1](#test-9-12-1):** Does each field that expects personal data from the user respect these conditions?  {id="test-9-12-1"}
- The [appropriate native platform controls](glossaire.md#native-platform-controls) are presented to the user;
- The field is compatible with an auto-fill functionality.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS 

1. Access each of the form fields (tap on the input field, for example, to activate the appearance of input controls).
1. For each field that expects personal data about the user, check that the [appropriate platform-native controls](glossaire.md#native-platform-controls) are presented to the user. For example
	- for a field requesting the user's e-mail address, the keyboard shown has the @ character without the user having to perform any keyboard operations (such as displaying the secondary keyboard);
	- for a field asking the user to enter a telephone number, the numeric keypad is presented directly to the user;
	- and so on.
1. Check that the form is compatible with an auto-fill mechanism. For example, iOS allows fields to be filled in automatically on the basis of the last values entered, depending on their nature (postal address, town, surname, first name, e-mail address). Check that relevant values are suggested for these fields.
1. If so, the criterion is validated.

###### Android 

1. Access each of the form fields (tap on the input field, for example, to activate the appearance of input controls).
1. For each field that expects personal data about the user, check that the [appropriate platform-native controls](glossaire.md#native-platform-controls) are presented to the user. For example
	- for a field requesting the user's e-mail address, the keyboard shown has the @ character without the user having to perform any keyboard operations (such as displaying the secondary keyboard);
	- for a field asking the user to enter a telephone number, the numeric keypad is presented directly to the user;
	- and so on.
1. Check that the form is compatible with an autofill mechanism. For example, Google provides an auto-fill system on Android. Go to Settings &gt; System &gt; Languages and input &gt; Advanced settings &gt; Autofill service (depending on the version of the platform, the path may be different) to activate and set the parameters.
1. On the application form, check that the system offers you an option to fill in the data automatically.
1. If it does, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.3.5 Identify input purpose (AA)](https://www.w3.org/TR/WCAG21/#identify-input-purpose)
- EN 301 549 V3.2.1 (2021-03): *11.1.3.5.1 Identify Input Purpose (AA)*.

### [Topic 10](#topic-10): Navigation {id="topic-10"}

#### [Criteria 10.1](#crit-10-1) [A] On each screen, is the [navigation sequence](glossaire.md#navigation-sequence) [consistent](glossaire.md#consistent-reading-sequence)? {id="crit-10-1"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Connect an **external keyboard** (and [configure keyboard navigation](methodologie.md#external-keyboard)).
1. Navigate through all the elements on the screen and check that the navigation sequence remains consistent. The navigation sequence does not have to follow the natural reading order (left to right and top to bottom, for example) as long as the elements are accessible in a consistent order.
1. Identify on the screen components (buttons for example) that update content (display hidden elements, dynamic content updates for example): 
	1. activate the component;
	1. after displaying the updated content, check that the tabulation remains consistent.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [2.4.3 Focus order (A)](https://www.w3.org/TR/WCAG21/#focus-order) 
- EN 301 549 V3.2.1 (2021-03) *11.2.4.3 Focus Order (A)*.

#### [Criterion 10.2](#crit-10-2) [A] On each screen, is the reading sequence by assistive technologies [consistent](glossaire.md#consistent-reading-sequence)? {id="crit-10-2"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Activate the **screen reader**.
1. Navigate all the elements on the screen using the screen reader gestures and check that the order of access to the elements on the screen (interactive components and text) remains consistent. The order does not have to follow the natural reading order (from left to right and from top to bottom, for example) as long as the elements are accessible in a coherent order that does not cause comprehension problems.
1. Identify components on the screen (buttons for example) that update content (display hidden elements, dynamic content updates for example): 
	1. activate the component;
	1. after displaying the updated content, check that the screen reader's path remains consistent.
1. If this is the case, the criterion is validated.

**Example of content whose implementation causes comprehension problems:** An arrival time and a departure time are displayed on the screen in the form of two blocks of visual information (arrival time 17:00; departure time 18:00). The screen reader sequentially reaches "arrival time" then "departure time" then "17:00" and finally "18:00". The reading order does not correspond to the visual order, and the reading order is problematic because it does not allow the information to be linked together.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.3.2 Meaningful sequence (A)](https://www.w3.org/TR/WCAG21/#meaningful-sequence), [2.4.3 Focus order (A)](https://www.w3.org/TR/WCAG21/#focus-order)
- EN 301 549 V3.2.1 (2021-03): *11.1.3.2.1 Meaningful Sequence, 11.2.4.3 Focus Order (A), 11.5.2.10 Text*.

#### [Criterion 10.3](#crit-10-3) [A] On each screen, the navigation must not contain any [keyboard traps](glossaire.md#keyboard-trap). Is this rule respected? {id="crit-10-3"}

**[Test 10.3.1](#test-10-3-1):** On each screen, does each focusable element meet one of these conditions? {id="test-10-3-1"}
- It is possible to use the keyboard to go to the next or previous focusable element;
- The user is informed of a functional mechanism enabling the next or previous focusable element to be reached using the keyboard.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS

1. Connect an **external keyboard** (and [configure keyboard navigation](methodologie.md#external-keyboard)).
1. Navigate all the elements on the screen using the dedicated keyboard keys (by default in iOS, the <kbd>Tab</kbd> and arrow keys are used to navigate content).
1. Check that
	 - from the current position, the next or previous focusable item can be reached using the keyboard navigation keys;
	 - the element currently in focus offers a method that can be used with the keyboard (for example, a keyboard shortcut) to reach the next or previous element.
1. If this is the case, the criterion is validated.

**Note:** Some complex elements, often managed by the platform, can call on optimised navigations which generally use the direction arrows to move from one part of the component to another.
The keyboard trap test is then limited to checking that the component can be reached and that it is possible to move on to the next component or return to the previous component. The actual use of the component is not checked in this criterion.

###### Android

1. Connect an **external keyboard** (and [configure keyboard navigation](methodologie.md#external-keyboard)).
1. Navigate through all the elements on the screen using the keys on the keyboard (the keys or combination of keys that will have been associated in Switch Access for the "Next" and "Previous" parameters).
1. Check that
	 - from the current position, the next or previous focusable element can be reached using the keyboard navigation key;
	 - the element currently in focus offers a method that can be used with the keyboard (for example, a keyboard shortcut) to reach the next or previous element.
1. If this is the case, the criterion is validated.

**Note:** Some complex elements, often managed by the platform, can call on optimised navigations which generally use the direction arrows to move from one part of the component to another.
The keyboard trap test is then limited to checking that the component can be reached and that it is possible to move on to the next component or return to the previous component. The actual use of the component is not checked in this criterion.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [2.1.1 Keyboard (A)](https://www.w3.org/TR/WCAG21/#keyboard), [2.1.2 No keyboard trap (A)](https://www.w3.org/TR/WCAG21/#no-keyboard-trap). 
- EN 301 549 V3.2.1 (2021-03): *11.2.1.1.1 Keyboard (A), 11.2.1.2 No Keyboard Trap (A)*. 

#### [Criterion 10.4](#crit-10-4) [A] On each screen, are [keyboard shortcuts](glossaire.md#keyboard-shortcut) using only one key (upper or lower case letter, punctuation, number or symbol) controllable by the user?  {id="crit-10-4"}

**[Test 10.4.1](#test-10-4-1):** On each screen, does each keyboard shortcut using a single key (lower or upper case letter, punctuation, number or symbol) meet one of these conditions? {id="test-10-4-1"}
- A mechanism is available to disable the keyboard shortcut;
- A mechanism is available for configuring the keyboard shortcut key using the modifier keys (<kbd>Ctrl</kbd>, <kbd>Alt</kbd>, <kbd>Shift</kbd>, etc.);
- In the case of a user interface component, the associated keyboard shortcut can only be activated if the keyboard focus is on this component.

##### Evaluation methodology {class="disclosure methodo"} 

###### iOS and Android

1. Connect an **external keyboard** (and [configure keyboard navigation](methodologie.md#external-keyboard)).
1. From the application, successively press each of the printable character keys (lowercase letters a-z, uppercase letters A-Z, numbers 0-9, all symbols such as $,\*,%,! etc. as long as they can be written on the screen).
1. If the keyboard shortcut is associated with a single component isolated from the screen, check that it can only be activated if the keyboard focus is inside that component.
1. Otherwise, if an action is triggered, check that there is a configuration menu in the application which allows you to
	- disable these one-touch keyboard shortcuts;
	- configure these keyboard shortcuts by adding a modifier key (<kbd>Ctrl</kbd>, <kbd>Alt</kbd>, <kbd>Shift</kbd>, etc.). 
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [2.1.4 Character key shortcuts (A)](https://www.w3.org/TR/WCAG21/#character-key-shortcuts). 
- EN 301 549 V3.2.1 (2021-03): *11.2.1.4.1 Character Key Shortcuts (A)*.

### [Topic 11](#topic-11): Consultation {id="topic-11"}

#### [Criterion 11.1](#crit-11-1) [A] For each screen, does the user have control over each [time limit modifying content](glossaire.md#refresh-process) (excluding special cases)? {id="crit-11-1"}

**[Test 11.1.1](#test-11-1-1):** Does each time limit respect one of these conditions? {id="test-11-1-1"}
- The user can stop or restart the refresh;
- The user can increase the time limit between two refreshes by at least ten times;
- The user is warned that a refresh is imminent and has at least twenty seconds to increase the time limit before the next refresh;
- The time limit between two refreshes is at least twenty hours.

##### Special cases

The criterion does not apply when the time limit is essential, in particular when it could not be removed without fundamentally changing the content or the features linked to the content.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify processes that limit session time (e.g. after authentication).
1. Check 
	- for the presence of a mechanism enabling the user to remove the time limit (for example, a toggle button enabling the user to activate or deactivate the session time limit);
	- or for the presence of a mechanism allowing the user to increase the time limit (for example, a drop-down list with available connection time values);
	- or for the presence of a mechanism which warns the user of the imminence of the time limit and allows the user at least 20 seconds to increase the time limit (for example, the opening of a modal with a button allowing the time limit to be increased);
	- or that the time limit is at least twenty hours.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [2.2.1 Timing adjustable (A)](https://www.w3.org/TR/WCAG21/#timing-adjustable), [2.2.2 Pause, stop, hide (A)](https://www.w3.org/TR/WCAG21/#pause-stop-hide). 
- EN 301 549 V3.2.1 (2021-03): *11.2.2.1 Timing adjustable (A), 11.2.2.2 Pause, Stop, Hide (A)*.

#### [Criterion 11.2](#crit-11-2) [A] For each screen, can each process limiting the time of a session be stopped or deleted (excluding special cases)? {id="crit-11-2"}

**[Test 11.2.1](#test-11-2-1):** Does each session time limiting process meet one of these conditions? {id="test-11-2-1"}
- The user can remove the time limit;
- The user can increase the time limit;
- The time limit before the end of the session is at least twenty hours.

##### Special cases

The criterion is not applicable when the time limit is essential, in particular when it could not be removed without fundamentally changing the content or the features linked to the content.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify session time limits (for example, logging out of a customer account).
1. Check
	- the presence of a mechanism enabling the user to remove the time limit (for example, a button with an explicit label);
	- or the presence of a mechanism enabling the user to increase the time limit (for example, a parameter available in the application to manage session times);
	- or that the duration of the session is at least twenty hours.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [2.2.1 Timing adjustable (A)](https://www.w3.org/TR/WCAG21/#timing-adjustable)
- EN 301 549 V3.2.1 (2021-03): *11.2.2.1 Timing adjustable*.

#### [Criterion 11.3](#crit-11-3) [A] On each screen, does each office document available for download have, if necessary, an [accessible version](glossaire.md#accessible-version) (excluding special cases)? {id="crit-11-3"}

**[Test 11.3.1](#test-11-3-1):** Does each office document meet one of these conditions?  {id="test-11-3-1"}
- The document to be downloaded is compatible with accessibility;
- There is an alternative version of the document available for download that is compatible with accessibility;
- There is an alternative version of the downloadable document in the application that is accessible to assistive technologies.

##### Special cases

The criterion is not applicable when office documents (e.g. PDF, Microsoft or LibreOffice documents, etc.) were published before 23 September 2018 (unless this content is necessary for the purposes of active administrative processes concerning tasks carried out by the public sector body concerned), they are exempt from the accessibility obligation, according to the law of [28 May 2019](http://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo).

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify the components on the screen (a link, a button (form) or a download form for example) used to download a file in office format (.doc, .docx, .pdf for example).
1. For each file offered for download in an office format, check that an alternative version is presented as accessible.
1. If the alternative is offered in an office format (pdf, odt, doc, docx, EPUB/DAISY): 
	- download the file containing the proposed alternative; 
	- if this file is in PDF format, check that it complies with the [PDF accessibility assessment framework (RAPDF 1)](../rapdf1/index.html).
	- if the file is in another format, check that it complies with the criteria of [section 10 Non-web documents](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=52) of European standard EN 301 549 v3.2.1.
1. If the alternative is proposed in the application, check that the content complies with this framework.
1. Otherwise, for documents in office format (pdf, odt, doc, docx, EPUB/DAISY): 
	- download the file; 
	- if the file is in PDF format, check that it complies with the [PDF accessibility assessment framework (RAPDF 1)](../rapdf1/index.html).
	- if the file is in another format, check that it complies with the criteria of [section 10 Non-web documents](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=52) of European standard EN 301 549 v3.2.1.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content), [1.3.1 Info and relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships), [1.3.2 Meaningful sequence (A)](https://www.w3.org/TR/WCAG21/#meaningful-sequence), [2.4.1 Bypass blocks (A)](https://www.w3.org/TR/WCAG21/#bypass-blocks), [2.4.3 Focus order (A)](https://www.w3.org/TR/WCAG21/#focus-order), [3.1.1 Language of Page (A)](https://www.w3.org/TR/WCAG21/#language-of-page), [4.1.2 Name, role, value (A)](https://www.w3.org/TR/WCAG21/#name-role-value).
- EN 301 549 V3.2.1 (2021-03): all the criteria in section 10 *Non-web documents*.

#### [Criterion 11.4](#crit-11-4) [A] For each office document with an [accessible version](glossaire.md#accessible-version), does this version offer the same information (excluding special cases)? {id="crit-11-4"}

##### Special cases

The criterion is not applicable when the office documents (e.g. PDF, Microsoft or LibreOffice documents, etc.) were published before 23 September 2018 (unless this content is necessary for the needs of active administrative processes concerning tasks carried out by the public sector body concerned), they are exempt from the accessibility obligation, according to the law of [28 May 2019](http://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo).

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. For each file offered for download in a desktop format that has an alternative version presented as accessible, check that both documents (the original document and the accessible version in a desktop format or in the application) offer the same information.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content), [1.3.1 Info and relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships), [1.3.2 Meaningful sequence (A)](https://www.w3.org/TR/WCAG21/#meaningful-sequence), [2.4.1 Bypass blocks (A)](https://www.w3.org/TR/WCAG21/#bypass-blocks), [2.4.3 Focus order (A)](https://www.w3.org/TR/WCAG21/#focus-order), [3.1.1 Language of Page (A)](https://www.w3.org/TR/WCAG21/#language-of-page), [4.1.2 Name, role, value (A)](https://www.w3.org/TR/WCAG21/#name-role-value). 
- EN 301 549 V3.2.1 (2021-03): all the criteria in section 10 *Non-web documents*.

#### [Criterion 11.5](#crit-11-5) [A] On each screen, does each cryptic content (ASCII art, emoticon, cryptic syntax) have an alternative? {id="crit-11-5"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify cryptic content on the screen (ascii art, emoticons, cryptic syntax).
1. Check that a definition is available in the adjacent context (immediately before or after the cryptic content, in the adjacent text or via the activation of a user interface component).
1. If not, activate the **screen reader**.
1. Navigate to the cryptic content and check that an alternative is rendered.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content). 
- EN 301 549 V3.2.1 (2021-03): *11.1.1.1 Non-text Content (A)*. 

#### [Criterion 11.6](#crit-11-6) [A] On each screen, for each cryptic content (ASCII art, emoticon, cryptic syntax) having an alternative, is this alternative relevant? {id="crit-11-6"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. For each cryptic content item that has an alternative, check that the alternative given is relevant (it enables the content or function to be understood).
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content). 
- EN 301 549 V3.2.1 (2021-03): *11.1.1.1 Non-text Content (A)*. 

#### [Criterion 11.7](#crit-11-7) [A] On each screen, are [sudden change in brightness or blinking effects](glossaire.md#sudden-change-in-brightness-or-blinking-effect) used correctly? {id="crit-11-7"}

**[Test 11.7.1](#test-11-7-1):** Do sudden changes in brightness or blinking effects meet any of these conditions? {id="test-11-7-1"}
- The effect frequency is less than 3 per second;
- The total cumulative area of the effects is less than or equal to 21,824 pixels.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify content on the screen that flashes or causes flash effects: animated graphic element, video or animation, formatting effect.
1. Check that
	- the frequency of the effect is less than 3 flashes per second;
	- or that the total surface area is less than 21,824 pixels.
1. If this is the case, the criterion is validated.

Note: The [PEAT](https://trace.umd.edu/peat/) tool can be used to analyse videos in .avi format.

##### Matches {class="disclosure mapping"}

- WCAG 2.1 [2.3.1 Three Flashes or Below Threshold (A)](https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold).
- EN 301 549 V3.2.1 (2021-03) *11.2.3.1 Three Flashes or Below Threshold (A)*.

#### [Criterion 11.8](#crit-11-8) [A] On each screen, is each moving or blinking content [controllable](glossaire.md#control-moving-or-blinking-content) by the user? {id="crit-11-8"}

**[Test 11.8.1](#test-11-8-1):** Does each moving or blinking content meet one of these conditions? {id="test-11-8-1"}
- The duration of the movement or blinking is less than or equal to 5 seconds;
- The user can stop and restart the movement or blinking;
- The user can display and hide moving or blinking content;
- The user can display all the information without the movement or blinking.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify moving or blinking content on the screen (e.g. a graphic element, formatting effect or carousel) that is triggered automatically when the screen loads or when content is displayed (see note).
1. Check
	- that the total duration of movement or blinking is less than 5 seconds;
	- or that there is a mechanism (e.g. a button) to stop and restart the movement or blinking;
	- or the presence of a mechanism (e.g. a button) that allows the moving or blinking content to be hidden and displayed again;
	- or the presence of a mechanism (such as a button) that allows the content to be displayed without movement or blinking.
1. If this is the case, the criterion is validated.

**Note:**
- the stopping or pausing of moving or blinking content when focused (the effect is suspended only while focused, but resumes once the focus is lost) or by touching moving content (the effect is suspended only while pressure is applied to the content, but resumes once the pressure is released) are not considered to be compliant processes.
- in some cases, the movement cannot be stopped, for example a progress bar, in which case the criterion is not applicable.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [2.2.1 Timing adjustable (A)](https://www.w3.org/TR/WCAG21/#timing-adjustable), [2.2.2 Pause, stop, hide (A)](https://www.w3.org/TR/WCAG21/#pause-stop-hide)
- EN 301 549 V3.2.1 (2021-03): *11.2.2.1 Timing Adjustable (A), 11.2.2.2 Pause, Stop, Hide (A)*.

#### [Criterion 11.9](#crit-11-9) [AA] On each screen, is the content offered viewable regardless of screen orientation (portrait or landscape) (excluding special cases)? {id="crit-11-9"}

**[Test 11.9.1](#test-11-9-1)** On each screen, does all content meet these conditions? {id="test-11-9-1"}
- Consultation is possible regardless of the screen orientation;
- The content offered remains the same whatever the screen orientation, even though its presentation and the means of accessing it may differ.

##### Special cases

The criterion is not applicable when the orientation of the peripheral is essential to the use of the application, for example: game interfaces, piano interfaces, etc.
If the interface is the only means of accessing the proposed service, an alternative should be put in place.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS

1. Open the **Control Center**.
1. Check that the screen orientation is not locked in the platform settings ([see official documentation](https://support.apple.com/en-gb/guide/iphone/iph3badf94ec/ios)).
1. Display the application and toggle the device between landscape and portrait mode.
1. Check that 
	- the application can be used in both orientations, i.e. that the elements of the application are repositioned so that they can be read; 
	- the content available in one orientation is still available in the other orientation (directly or by activating an additional component, for example).
1. If this is the case, the criterion is validated.

###### Android

1. Open the **Quick settings** panel.
1. Check that "Auto-rotate" is enabled ([see official documentation](https://support.google.com/android/answer/9083864?hl=en)).
1. Display the application and toggle the device between landscape and portrait mode.
1. Check that 
	- the application can be used in both orientations, i.e. that the elements of the application are repositioned so that they can be read;
	- the content available in one orientation is still available in the other orientation (directly or by activating an additional component, for example).
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.3.4 Orientation (AA)](https://www.w3.org/TR/WCAG21/#orientation)
- EN 301 549 V3.2.1 (2021-03) *11.1.3.4 Orientation*.

#### [Criterion 11.10](#crit-11-10) [A] On each screen, are the features that can be activated using a [complex gesture](glossaire.md#complex-and-simple-gestures) able to be activated using a [simple gesture](glossaire.md#complex-and-simple-gestures) (excluding special cases)? {id="crit-11-10"}

##### Special cases

The criterion does not apply to the following elements:
- Gestures required by the platform.
- Features for which a complex gesture is essential (e.g. drawing a signature).

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify functions on the screen that require complex gestures (look for instructions in the interface or in documentation associated with the application), for example
	- using two or more fingers simultaneously;
	- tracing a trajectory (such as the swipe gesture).
1. Check that there is an alternative method of performing the associated action using a simple gesture, for example pressing a single key on the keyboard or a button. 
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [2.5.1 Pointer gestures (A)](https://www.w3.org/TR/WCAG21/#pointer-gestures). 
- EN 301 549 V3.2.1 (2021-03): *5.5.1 Means of operation, 5.9 Simultaneous user actions, 11.2.5.1 Pointer Gestures*.

#### [Criterion 11.11](#crit-11-11) [A] On each screen, are the features that can be activated by performing simultaneous actions activated by means of a single action? Is this rule respected (excluding special cases)? {id="crit-11-11"}

##### Special cases

The criterion does not apply to actions required by the platform.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify on the screen functions that require two or more actions to be performed simultaneously, for example 
	- using two or more keys on a keyboard at the same time;
	- having to say a voice command and touch the screen at the same time to perform an action.
1. Check that the screen or application provides an alternative method of performing the action associated with a single action, for example pressing a button. 
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A 
- EN 301 549 V3.2.1 (2021-03) *5.9 Simultaneous user actions*.

#### [Criterion 11.12](#crit-11-12) [A] On each screen, can actions triggered by a pointing device on a single point on the screen be cancelled (excluding special cases)? {id="crit-11-12"}

**[Test 11.12.1](#test-11-12-1):** On each screen, do actions triggered using a pointing device on a single point on the screen meet one of these conditions (excluding special cases)? {id="test-11-12-1"}
- The action is triggered when the pointing device is released;
- The action is triggered when the pointing device is pressed (down-event) and then cancelled when the pointing device is released (up-event);
- The [action is complex](glossaire.md#complex-action) and a mechanism is available to abort (before completion of the action) or cancel (after completion) the execution of the action.

##### Special cases

The criterion is not applicable when the functionality requires the expected behaviour to be performed during a top-down event, for example, a keyboard emulator whose keys must be activated when pressed, as on a physical keyboard.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify interactive components (e.g. buttons or links) on the screen.
1. For each interactive component, press and hold the button.
1. Move your finger outside the interactive zone and check that the associated action is not triggered.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [2.5.2 Pointer Cancellation (A)](https://www.w3.org/TR/WCAG21/#pointer-cancellation) 
- EN 301 549 V3.2.1 (2021-03) *11.2.5.2 Pointer Cancellation (A)*.

#### [Criterion 11.13](#crit-11-13) [A] On each screen, can the features involving movement from or to the device be satisfied in an alternative way (excluding special cases)? {id="crit-11-13"}

**[Test 11.13.1](#test-11-13-1):** Does each feature that involves movement to or from the device meet these conditions? {id="test-11-13-1"}
- The functionality can be triggered using a user interface component;
- The user can disable motion detection to prevent the feature from being triggered accidentally.

##### Special cases

The criterion is not applicable when
- Motion is essential to the performance of the functionality (e.g. pedometer).
- Motion detection is used to control functionality via an interface that is compatible with accessibility.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify functions on the screen that are triggered by a movement of the device or a gesture towards the device (for example, look for instructions in the interface or in documentation associated with the application that describe this type of triggering).
2. Check
	- that the functionality can be triggered without movement, for example by activating a button or a link;
	- and that the application provides a method for deactivating motion detection (for example, a parameter in the application).
3. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [2.5.4 Motion Actuation (A)](https://www.w3.org/TR/WCAG21/#motion-actuation)
- EN 301 549 V3.2.1 (2021-03): *5.5.1 Means of operation, 11.2.5.4 Motion Actuation (A)*.

#### [Criterion 11.14](#crit-11-14) [AA] For each document conversion feature, is the [accessibility information](glossaire.md#accessibility-information) available in the source document retained in the destination document (excluding special cases)? {id="crit-11-14"}

This concerns all digital formats such as text, audio and video.

##### Special cases

The criterion is not applicable when the conversion format does not have the necessary elements for identifying accessibility information. For example, if the conversion is from an HTML format to a TXT format, then the criterion is not applicable.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify document conversion functions on the screen (e.g. export to PDF, .odt, HTML etc.)
1. Identify accessibility information in the original content (e.g. an alternative graphic element, headings levels, table of contents).
1. Check that the accessibility information is still present in the converted document (unless the conversion format chosen does not support the accessibility information in the source document).
1. If this is the case, the test is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03) *5.4 Preservation of accessibility information during conversion*.

#### [Criterion 11.15](#crit-11-15) [A] Is an alternative method available for each identification or control functionality of the application that relies on the use of [biological characteristics](glossaire.md#biological-characteristics) of the user? {id="crit-11-15"}

**[Test 11.15.1](#test-11-15-1):** Does each identification or control functionality of the application that relies on the use of a user's biological characteristics meet one of these conditions? {id="test-11-15-1"}
- There is an alternative that does not rely on a user's biological characteristics;
- There is an alternative that relies on a biological characteristic of the user that is sufficiently different.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify on the screen the identification (authentication) and control functions that are based on the use of biological characteristics (e.g. voice recognition, fingerprint, facial recognition). 
1. Check that there is an alternative method of performing the action, for example 
	- for an authentication feature that uses fingerprint recognition, a button is available on the login screen to access password entry instead.
	- for authentication functionality that involves voice recognition, the application also offers fingerprint recognition (if the alternative method also relies on a biological characteristic, it is desirable that it does not involve a similar biological characteristic. For example, if the initial method involves voice, the alternative method should not involve voice) 
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03) *5.3 Biometrics*.

#### [Criterion 11.16](#crit-11-16) [A] For each application that incorporates [key repeat](glossaire.md#key-repeat) functionality, is the repeat adjustable (excluding special cases)? {id="crit-11-16"}

**[Test 11.16.1](#test-11-16-1):** For each application that includes key repeat functionality, are the following conditions met? {id="test-11-16-1"}
- The delay for triggering the repeat function can be set to at least 2 seconds;
- The delay between two repetitions can be set to at least 2 seconds.

##### Special cases

The criterion does not apply: 
- For key repetitions managed at the platform level;
- For applications that have a method for deactivating the key repeat functionality.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify the presence of a key repeat function in the application (for example, look for instructions in the interface or in documentation associated with the application).
1. Check that the delay before the repeat function is activated (the time between the very first key press to be repeated and the repeat function being activated)
	- is at least 2 seconds;
	- or that there is a method for setting it to at least 2 seconds (for example, an input field in the application's user parameters). 
1. Check that the delay between two repetitions 
	- is at least 2 seconds;
	- or that there is a method for setting it to at least 2 seconds (for example, an input field in the application's user parameters).
1. If this is the case, the test is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03) *5.7 Key repeat*.

### [Topic 12](#topic-12): Documentation and accessibility features {id="topic-12"}

#### [Criterion 12.1](#crit-12-1) [AA] Does the application documentation describe the [accessibility features](glossaire.md#accessibility-feature) of the application and their use? {id="crit-12-1"}

**[Test 12.1.1](#test-12-1-1):** Does the application documentation include at least the following elements? {id="test-12-1-1"}
- A description of the application's accessibility features;
- An explanation of how the application's accessibility features are used; 
- Information about the accessibility of the platform and its compatibility with assistive technologies.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify the presence of documentation in the application, for example 
	- a help screen;
	- an [accessibility statement](../obligations.html#accessibility-statement); 
	- any other content that serves as documentation.
1. Identify the presence of accessibility features in the application.
1. Check that the documentation includes 
	- a description of the application's accessibility features, for example 
		- accessibility parameters integrated into the application, such as colour management, font sizes, animation management, etc;
		- a customised rotor on certain screens (the rotor is a screen reader feature that enables rapid navigation between different types of elements on a screen; some platforms allow you to define application-specific rapid navigation elements in this rotor. [See a demonstration](https://developer.apple.com/videos/play/wwdc2020/10116/)); 
		- gestures or device movements that trigger functions;  
		- special keyboard shortcuts available for certain assistive technologies.
	- a description of the complex components for which special management is in place depending on the assistive technology;
	- explanations of how to use these functions (where they are located, how to activate them); 
	- a description of the elements that do not comply or are not compatible with certain assistive technologies, and the presence of alternatives where appropriate.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03) *12.1.1 Accessibility and compatibility features*.

#### [Criterion 12.2](#crit-12-2) [A] For each [accessibility feature](glossaire.md#accessibility-feature) described in the documentation, the entire path that enables it to be activated meets the accessibility needs of the users who require it. Is this rule respected (excluding special cases)? {id="crit-12-2"}

##### Special cases

The criterion does not apply to features integrated into the platform.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify in the application the accessibility features described in the documentation. For example 
	- a feature that provides access to a simplified language version of the application;
	- a feature that locks the orientation of a screen.
1. Check that it is possible for users who need to
	- perceive the presence of this functionality in the interface;
	- activate this functionality. For example, if a functionality is available that allows access to a simplified language version of the application, then all the components that make up the path to the functionality must be in simplified language.
1. If this is the case, the criterion is validated. 

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): *5.2 Activation of accessibility features*.

#### [Criterion 12.3](#crit-12-3) [A] The application does not interfere with the accessibility features of the platform. Is this rule respected? {id="crit-12-3"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS

1. Identify the accessibility features made available to users in the platform documentation (see the [documentation concerning the accessibility features provided by iOS](https://www.apple.com/uk/accessibility/).
1. Check that the application does not prevent their use, for example
	- if the application implements interactions that trigger features, these interactions do not prevent the platform's accessibility features such as the screen reader or other touch-based features from working properly;
	- if the application includes voice recognition, then the use of the voice command integrated into the platform is not disrupted; 
	- if the application implements keyboard shortcuts, these do not use key combinations already employed by the platform for accessibility features ([VoiceOver can be used with a keyboard](https://support.apple.com/en-gb/guide/iphone/iph6c494dc6/ios) for example, the proposed shortcuts must not interfere);
	- or any other application functionality.
1. If this is the case, the criterion is validated.

###### Android

1. Identify the accessibility features made available to users in the platform documentation (see the [documentation concerning accessibility features provided by Android](https://support.google.com/accessibility/android/answer/6006564?hl=en)).
1. Check that the application does not prevent their use, for example
	- if the application implements interactions that trigger features, these interactions do not prevent the platform's accessibility features, such as the screen reader or other touch-based features, from working properly;
	- if the application includes voice recognition, then the use of the voice command integrated into the platform is not disrupted;
	- if the application implements keyboard shortcuts, these do not use key combinations already employed by the platform for accessibility features ([TalkBack can be used with a keyboard](https://support.google.com/accessibility/android/answer/6110948?hl=en&amp;ref_topic=10602074) for example, the proposed shortcuts must not interfere); 
	- or any other application functionality.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03) *11.6.2 No disruption of accessibility features*.

#### [Criterion 12.4](#crit-12-4) [A] Is the application documentation accessible? {id="crit-12-4"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify the presence of documentation in the application, for example 
	- a help screen;
	- an [accessibility statement](../obligations.html#accessibility-statement); 
	- any other content that acts as documentation (this could be a pdf document or an external HTML page readable in a web browser).
1. If this is the case, check for each item of documentation: 
	- If this is the case a web page, that it complies with [RAWeb1](../raweb1/criteres.html); 
	- If this is the case an office document in PDF format, that it complies with the [PDF accessibility assessment framework (RAPDF 1)](../rapdf1/index.html).
	- If this is the case an office document in another format, that it complies with the criteria of [section 10 Non-web documents](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=52) of European standard EN 301 549 v3.2.1;
	- If this is the case an application screen, that the present framework is complied with (the **[Requirements](../obligations.html)** page also details that screens relating to documentation must be included in the evaluation sample).
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): *12.1.2 Accessible documentation, 12.2.4 Accessible documentation*.

### [Topic 13](#topic-13): Editing tools {id="topic-13"}

#### [Criterion 13.1](#crit-13-1) [A] Can the [editing tool](glossaire.md#editing-tool) be used to define the [accessibility information](glossaire.md#accessibility-information) required to create compliant content? {id="crit-13-1"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify the editing functions in the tool (for example, a text editor, but it could also be a media library or any other interface that lets you enter text or define properties).
1. Check that it is possible to define the accessibility information needed to make the content RAWeb-compliant. For example 
	 - defining the text alternative for an image from the text editor or a media library;
	 - define an accessible name (of a link);
	 - etc.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): *11.8.1 Content technology, 11.8.2 Accessible content creation*.

#### [Criterion 13.2](#crit-13-2) [A] Does the [editing tool](glossaire.md#editing-tool) provide help with creating accessible content? {id="crit-13-2"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify in the tool the presence of help with creating accessible content. This may include 
	- user documentation that explains how to define accessibility properties for each content item; 
	- automatic or semi-automatic tests available from the editing functions; 
	- manual tests available from the editing functions to guide authors in detecting errors.
1. Check that the help with creating accessible content is relevant, i.e. that it enables accessible content to be created.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): *11.8.1 Content technology, 11.8.2 Accessible content creation*.

#### [Criterion 13.3](#crit-13-3) [A] Is the content generated by each content [transformation](glossaire.md#transformation) accessible (excluding special cases)? {id="crit-13-3"}

##### Special cases

The criterion is not applicable when the destination format does not allow the accessibility information present in the input content to be retained.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. From the editing functions (a text editor, but it can also be a media library or any other interface that lets you enter text or define properties), enter the types of content proposed by the editor (heading, list, table, image, etc.). Also use the various parameters for defining accessibility information (enter the text alternative for an image, add a description to a link, etc.)
1. Save your entries.
1. View the generated content 
	- in the editing function (for example, in the text editor); 
	- in the content publication interface (for example, the publication web page).
1. Check that 
	- accessibility information (e.g. alternative image, heading levels) is preserved in the generated content;
	- the technology supports the accessibility information for the restructured form of the information (check that the transformation of the information is compatible with the technology, in particular to ensure that this information can be used by assistive technologies).
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): *11.8.1 Content technology, 11.8.3 Preservation of accessibility information in transformations*.

#### [Criterion 13.4](#crit-13-4) [AA] For each accessibility error identified by an automatic or semi-automatic accessibility test, does the editing tool provide suggestions for repair? {id="crit-13-4"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify the presence of automatic or semi-automatic test functions in the tool.
2. Modify the values or content in the editing zones to create accessibility errors in the content generated (web and non-web).
3. Activate the test functions.
4. Check that the tool
	- automatically repairs the error;
	- or provides the author with repair suggestions.
5. In the case of a semi-automatic test, check that the tool 
	- provides decision support and repair suggestions;
	- or provides the author with explanations enabling him to carry out the repair.
6. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): *11.8.1 Content technology, 11.8.4 Repair Assistance*.

#### [Criterion 13.5](#crit-13-5) [A] For each set of [templates](glossaire.md#template), at least one template meets the requirements of the [RAWeb](../raweb1/criteres.html). Is this rule respected? {id="crit-13-5"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify the presence of templates provided by the editing tool.
1. Test compliance with the [RAWeb](../raweb1/criteres.html) criteria and check that at least one of the templates is fully compliant.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): *11.8.1 Content technology, 11.8.5 Templates*.

#### [Criterion 13.6](#crit-13-6) [A] Is each [template](glossaire.md#template) that enables the RAWeb requirements to be met clearly identifiable? {id="crit-13-6"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify the presence of templates fully compliant with the [RAWeb](../raweb1/criteres.html) provided by the editing tool.
1. Check that there is an explicit reference to identify them. For example, in the list of templates, compliant templates have an "accessible template" label.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): *11.8.1 Content technology, 11.8.5 Templates*.

### [Topic 14](#topic-14): Support services {id="topic-14"}

#### [Criterion 14.1](#crit-14-1) [AA] Does each [support service](glossaire.md#support-services) provide information relating to the [accessibility features](glossaire.md#accessibility-feature) of the application described in the documentation? {id="crit-14-1"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Find out whether a support service is available in the application.
1. If this is the case, look for documentation in the application, for example: 
	- a help screen;
	- an [accessibility statement](../obligations.html#accessibility-statement); 
	- any other content that serves as documentation.
1. Identify the presence in the documentation of 
	- a description of the application's accessibility features, for example 
		- accessibility parameters built into the application, such as colour management, font sizes, animation management, etc;
		- a customised rotor on certain screens (the rotor is a screen reader feature that enables rapid navigation between different types of elements on a screen; some platforms allow you to define application-specific rapid navigation elements in this rotor. [See a demonstration](https://developer.apple.com/videos/play/wwdc2020/10116/)); 
		- gestures or device movements that trigger functions;  
		- special keyboard shortcuts available for certain assistive technologies.
	- a description of the complex components for which special management is in place depending on the assistive technology;
	- explanations of how to use these functions (where they are located, how to activate them); 
	- a description of the elements that do not comply or are not compatible with certain assistive technologies, and the presence of alternatives where appropriate.
1. Check that the support service provides information about these features. 
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): *12.2.2 Information on accessibility and compatibility features*.

#### [Criterion 14.2](#crit-14-2) [A] The [support service](glossaire.md#support-services) meets the communication needs of people with disabilities directly or through [a relay service](glossaire.md#relay-service). Is this rule respected? {id="crit-14-2"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify the presence of a support service in the application.
1. If so, check that the support service can be used by all people with disabilities. It may be useful to search the application documentation to find this information. For example, if the support service is available from a telephone number, check that there are alternative means for users who cannot express themselves orally (deaf or hard of hearing people) or who cannot use verbal language (people with aphasia). For example 
	- instant messaging, which provides an equivalent service (real-time dialogue with a human operator); 
	- the provision of simultaneous written or visual translation of oral or audio information, or the provision of a sign language interpreter (use of a relay service).
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03) *12.2.3 Effective communication*.

### [Topic 15](#topic-15): Real-time communication {id="topic-15"}

#### [Criterion 15.1](#crit-15-1) [A] For each [two-way voice communication application](glossaire.md#two-way-voice-communication-application), is the application capable of encoding and decoding this communication with a frequency range whose upper limit is at least 7,000 Hz? {id="crit-15-1"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

The safest way to assess this criterion is to search either the interface or the application documentation for this information. It is also recommended that you ask the application publisher to provide this information. 

An implementation of [ITU-T Recommendation G.722](https://www.itu.int/rec/T-REC-G.722/en) for example seems to be an optimal solution.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 N/A
- EN 301 549 V3.2.1 (2021-03) *6.1 Audio bandwidth for speech*.

#### [Criterion 15.2](#crit-15-2) [A] Does each application that supports [two-way voice communication](glossaire.md#two-way-voice-communication-application) have [real-time text communication](glossaire.md#real-time-text-communication) functionality? {id="crit-15-2"}

**[Test 15.2.1](#test-15-2-1):** Does each application that enables two-way voice communication meet one of these conditions?  {id="test-15-2-1"}
- The application has built-in real-time text (RTT) functionality;
- The application can be connected to a terminal with built-in real-time text functionality. 

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Check that the application allows two-way voice communication.
1. If it does, check that there is a real-time text function (it may sometimes be necessary to activate a dedicated parameter in the application to enable real-time text).
1. If not, check whether the application can connect to a terminal with real-time text functionality (this may be difficult to assess without a real-time communication terminal or if the network used by the terminal does not support real-time text protocols. A first step may be to search the documentation or ask the application publisher directly)
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): *6.2.1.1 RTT communication*.

#### [Criterion 15.3](#crit-15-3) [A] For each application that allows [two-way voice communication](glossaire.md#two-way-voice-communication-application) and [real-time text](glossaire.md#real-time-text-communication), are both modes usable simultaneously? {id="crit-15-3"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Check that the application allows two-way voice communication.
1. If it does, check that it has a real-time text (RTT) function.
1. If this is the case, check that it is possible to use both modes of communication at the same time, i.e. users can send RTT messages at the same time as other users are speaking, for example.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): *6.2.1.2 Concurrent voice and text*.

#### [Criterion 15.4](#crit-15-4) [A] For each [real-time text communication](glossaire.md#real-time-text-communication) functionality, can the messages be identified (excluding special cases)? {id="crit-15-4"}

**[Test 15.4.1](#test-15-4-1):** For each real-time text (RTT) functionality, do the messages respect these conditions? {id="test-15-4-1"}
- Messages received and sent are separated in the presentation;
- The presentation can be used to identify the nature of the message (received or sent);
- The presentation is used to identify the authors of the messages;
- The nature of the message (received or sent) is accessible to assistive technologies;
- Identification of the author of the message is accessible to assistive technologies.

##### Special cases

The criterion is not applicable when the two-way voice communication functionality does not allow the participants to be identified, in which case the RTT communication functionality is not required to identify the authors of the messages.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Activate the application and the application's RTT functionality on two terminals and connect them to the same session.
1. Send a text message from both terminals to obtain messages with different statuses (sent and received).
1. Check that 
	- sent and received messages are visually separated (for example, sent messages are in one window and received messages in another, or there is a line break between each received and sent message if they are presented in the same window);
	- it is visually possible to distinguish between messages sent and messages received (for example, the words "Sent" near a message sent or "Received" near a message received);
	- if the interlocutor is identified for oral communication (for example, the avatar of the person speaking), that the authors of written messages are also identified (for example, the presence of a name or an identifier preceding the message).
1. Activate the **screen reader** and navigate through the messages.
1. Check that the screen reader displays
	- the sent or received status of each message; 
	- identification of the author of the message.
1. If this is the case, the criterion is validated. 

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): *6.2.2.1 Visually distinguishable display, 6.2.2.2 Programmatically determinable send and receive direction, 6.2.2.3 Speaker identification*.

#### [Criterion 15.5](#crit-15-5) [A] For each [two-way voice communication application](glossaire.md#two-way-voice-communication-application), is a visual indicator of oral activity present? {id="crit-15-5"} 

- **[Test 15.5.1](#test-15-5-1):** For each real-time text (RTT) and oral communication application, is there a visual indicator of spoken activity?  {id="test-15-5-1"}
- **[Test 15.5.2](#test-15-5-2)** For each two-way voice communication application that has real-time video, is there a visual indicator of spoken activity? {id="test-15-5-2"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Check that the application allows two-way voice communication and RTT communication or real-time video broadcasting.
1. If this is the case, activate the application on two terminals and connect them to the same session.
1. Have a user speak from one of the terminals.
1. Check that a visual indicator appears on the interface to identify that a person is speaking. It is not necessary for this criterion to identify who is speaking, but simply to identify that there is a person speaking. For example, a halo around or an icon near the avatar of the person speaking.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): *6.2.2.4 Visual indicator of Audio with RTT, 6.5.5 Visual indicator of audio with video*.

#### [Criterion 15.6](#crit-15-6) [A] Does each [real-time text communication](glossaire.md#real-time-text-communication) application that can interact with other [real-time text communication](glossaire.md#real-time-text-communication) applications comply with the interoperability rules in force? {id="crit-15-6"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

No evaluation method is proposed for this criterion.

**Important note:** This criterion is very complex to assess and requires a certain mastery of all interoperability concepts and standards. If the application you are assessing or developing needs to cover this criterion, we refer you to the full text of criterion 6.2.3 Interoperability in the EN 301 549 standard.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 N/A
- EN 301 549 V3.2.1 (2021-03) *6.2.3 Interoperability*.

#### [Criterion 15.7](#crit-15-7) [AA] For each application that supports [real-time text (RTT) communication](glossaire.md#real-time-text-communication), the transmission delay for each [input unit](glossaire.md#input-unit) is 500ms or less. Is this rule respected? {id="crit-15-7"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Check that the application supports real-time text (RTT) communication.
1. If so, activate the application and the written communication functionality on two separate terminals and connect them to the same session.
1. Enter text on the first terminal and observe its appearance on the second terminal. The appearance on the second terminal must be instantaneous (less than half a second). Depending on how the functionality works, each character is not sent individually. In fact, if the RTT communication functionality implements word prediction, it is when the desired word is selected that it is sent, not when the first characters used to trigger the suggestion display are entered. A simple observation test may be sufficient to observe the instantaneous appearance on the terminal receiving the written message. 
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03) *6.2.4 RTT Responsiveness*.

#### [Criterion 15.8](#crit-15-8) [A] For each telecommunication application, is the identification of the party initiating a call accessible? {id="crit-15-8"}

**[Test 15.8.1](#test-15-8-1):** For each telecommunication application that provides caller identification, does the identification meet these conditions? {id="test-15-8-1"}
- The caller identification is presented in text form;
- The caller identification is accessible to assistive technologies.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Activate the **screen reader** from a terminal.
1. From a second terminal, make a call to the first terminal.
1. When the incoming call appears, check
	- that the caller identification is available in visible text format (for example, a name or a telephone number);
	- and that this identification is correctly rendered by **the screen reader**.
1. If this is the case, the criterion is validated. 

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03) *6.3 Caller ID*.

#### [Criterion 15.9](#crit-15-9) [A] For each [two-way voice communication](glossaire.md#two-way-voice-communication-application) application that provides caller identification, is there a way to present this identification for sign language users? {id="crit-15-9"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Activate the application and launch a video call between the two terminals.
1. Check that the terminal receiving the call has a method enabling sign language users to identify the caller. 
1. If this is the case, the criterion is validated. 

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03) *6.5.6 Speaker identification with video (sign language) communication*.

#### [Criterion 15.10](#crit-15-10) [A] For each [two-way voice communication](glossaire.md#two-way-voice-communication-application) application that has [voice-based services](glossaire.md#voice-based-services), are these services usable without the need to listen or speak? {id="crit-15-10"}

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

1. Identify the features available (apart from the oral communication feature) that are based on listening to information or issuing commands, for example
	- voicemail; 
	- an automatic switchboard (e.g. one that requires you to say a number between 1 and 4 to be redirected to a service);
	- or any other interactive voice server.
1. Check: 
	- that the information is available without having to listen or speak; 
	- that the actions can be carried out without having to listen or speak, or that there is an alternative to the functionality that can be used without having to listen or speak.
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03) *6.4 Alternatives to voice-based services*.

#### [Criterion 15.11](#crit-15-11) [AA] For each [two-way voice communication application](glossaire.md#two-way-voice-communication-application) that has real-time video, is the quality of the video sufficient? {id="crit-15-11"}

**[Test 15.11.1](#test-15-11-1):** For each two-way voice communication application that has real-time video, are the following conditions met? {id="test-15-11-1"}
- The video resolution is at least [QVGA](glossaire.md#qvga);
- The frame rate is at least 20 frames per second;
- The lag between video and speech must not exceed 100ms.

##### Evaluation methodology {class="disclosure methodo"}

###### iOS and Android

For conditions relating to resolution and frame rate, the safest way to assess this criterion is to search either the interface or the application's documentation for this information. It is also advisable to ask the application's publisher to provide these technical details.

For the last condition concerning the time lag between video and audio, the test can be established by simple observation:
1. Activate the application on two devices.
1. Establish a video call connection between the two devices.
1. Check that speech and video are synchronised (lip-sync, lip movement).
1. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): *6.5.2 Resolution, 6.5.3 Frame rate, 6.5.4 Synchronization between audio and video*.
