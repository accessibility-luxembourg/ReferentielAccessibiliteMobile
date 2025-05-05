### A

#### Accessibility feature 

Example of an accessibility feature: 
- a component for loading a more contrasting colour palette for users;
- a font size enlargement component; 
- a component providing access to a simplified language version;
- special keyboard shortcuts available for certain assistive technologies;
- gestures or device movements that trigger features;
- a customised rotor on some screens (the rotor is a screen reader feature that enables quick navigation between types of elements on a screen; some platforms allow you to define application-specific quick navigation elements in this rotor. [See a demo](https://developer.apple.com/videos/play/wwdc2020/10116/)).

#### Accessibility information

Accessibility information is all the information (attributes, programmatic relationships, alternatives, etc.) required to make content accessible. For example: the alternative of a graphic element, the semantics of a passage of text, the title of an online frame, etc.

For example, in HTML, the `alt` attribute of an image is accessibility information.

An editing tool should have functions that enable all the information needed to create accessible content to be defined, for example: 
- the ability to define the alternative of an image or, on the contrary, declaring it decorative;
- the ability to definee section headings;
- the ability to define the language of a passage of text;
- the ability to define form field labels.

All accessibility criteria relating to the considered content technology are concerned. For example, for an HTML page, all the [RAWeb](../raweb1/criteres.html) level A and AA criteria must be met. For the production of a PDF document, it must be possible to meet all the criteria of the PDF Accessibility Assessment Framework ([RAPDF](../rapdf1/index.html)) levels A and AA. For an application, all the criteria in this framework must be met.

#### Accessible and operable by keyboard and any pointing device

Pointing devices in a mobile environment can be, but are not limited to: 
- touch; 
- mouse;
- eye tracking devices; 
- the point scanning feature [on iOS](https://support.apple.com/en-gb/119835) or [Android](https://support.google.com/accessibility/android/answer/6395627?hl=en); 
- voice control.

A user interface component (link, button, form field, etc.) can be accessed by any pointing device when the user 
- can set the focus on the component, regardless of the device;
- can initiate the action provided for by the user interface component by means of a manipulation specific to the device (a certain key on the keyboard, a gesture on the screen, for example);

**Warning:** for certain user interface components such as potentiometers (slider, rotary knob), several interactions are possible and therefore several manipulations specific to the device may be required to interact with the component. On the keyboard, for example for potentiometers, the direction arrows (right, left, up and down) are used to interact with and modify the component. 

In this framework, the expression "accessible and operable by keyboard and any pointing device" also refers to this definition.

**Important note:** the use of certain technologies may make focus management too complex or too unstable to rely solely on tab, arrow and enter keys. In this case, providing keyboard shortcuts may be the only way to make the component usable. The criterion can only be considered compliant if the keyboard shortcuts used are properly documented, functional and comply with [criterion 10.4](referentiel-technique.md#crit-10-4).

#### Accessible to assistive technologies

For information to be accessible to assistive technologies, it must be made available to them, either through the software itself or via an accessibility API, the latter method being the most widespread.

This can be achieved by means of descriptive properties that may not be visible on the interface, but which are rendered by assistive technologies, or by means of API parameters that define states, for example (selected, active, disabled, etc.)

#### Accessible version

Downloadable documents whose format types are recognised as compatible with accessibility must be made accessible either directly or via an accessible version (for a downloadable document). The document formats recognised as compatible are
- Microsoft Office (Word 2003, OOXML);
- Open Office Org (ODF);
- Adobe PDF;
- ePub/Daisy.

PDF documents must comply with the [PDF accessibility assessment framework (RAPDF 1)](../rapdf1/index.html).
Other types of content must comply with the criteria of [section 10 <span lang="en">Non-web documents</span>](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=52) of European standard EN 301 549 v3.2.1.

**Note:** TXT format cannot be used to produce an accessible version for a downloadable document.

#### Adjacent colour

Colour directly in contact with the colours of the component or graphic element, this can be the background colour or any other colour in direct contact.

**Example:** In a "no-entry" sign, the red of the sign is the colour adjacent to the white line in the centre of the sign.

It is important to understand that [criterion 2.3](referentiel-technique.md#crit-2-3) on the contrasts of user interface components and graphic elements only assesses **non-textual** elements. As soon as the contrast of text needs to be assessed, even if it is present in a user interface component, [criterion 2.2](referentiel-technique.md#crit-2-2) applies.

Not all colours in a graphic element or user interface component need to be evaluated. It is essential to assess 
- **Information-conveying colours** (not all colours convey information): 
	- For example, in an application's navigation panel, the navigation buttons have a grey background colour, but the active screen button has a green background colour. It is necessary to check that the green colour in direct junction with the grey background colour has a contrast ratio of at least 3:1.
- **Colours used to identify the location of an element or interactive zones**, for example 
	- The border of a form field, if this is the only means of identifying the location of the interaction, must have a colour with a contrast ratio of at least 3:1 with the adjacent colour, generally the background colour;
	- The borders of checkboxes and radio buttons, and their status (selected or not). It is essential here to assess the contrast ratio of the border of these components with the adjacent colours (generally the background colour) but also to assess the contrast ratio of these components when they are selected. It is necessary to assess whether the visual element used to signify the selection has a sufficient contrast ratio.
- **The colours of non-text information elements** (graphic elements):
	- A chevron is positioned to the right of the item selected in a list of items, the contrast ratio between the colour of the chevron and the adjacent colours (generally the background colour) must be at least 3:1. 

The background colour of a form submit button, for example ("Submit"), does not have to contrast with the screen background. This is because the button is located by the text, which must already comply with the text contrast constraints ([criterion 2.2](referentiel-technique.md#crit-2-2)). The size of the button and its edges are not considered to be information that meets this criterion.

**Note 1:** In the case of a gradient, the adjacent colour with the least contrast in the gradient will be considered as the adjacent colour.

**Note 2:** In the case of multiple colours, all the colours are to be considered as adjacent colours.

#### Alternative audio only version

An "audio only" version is an audio version, in the form of a simple file in MP3 format for example, used as an alternative to a video only (video without audio information). The only users affected by accessibility are blind people, who cannot see the video.

The "audio only" version must contain all the important visual information in the video.

Generally speaking, it is easier to produce an audio version than a text version when the video is highly descriptive (text transcription often requires a great deal of editorial work). It should be remembered, however, that only a text transcript provides universal access to the information in the video, in the event that a user is unable to launch the video, for example.

#### Application mechanism for displaying a correct contrast ratio

A user interface component whose activation allows the appearance of the site or page to be modified so that content is displayed with a sufficient contrast ratio. The design of this interface component must comply with [criterion 2.2](referentiel-technique.md#crit-2-2) and [criterion 2.3](referentiel-technique.md#crit-2-3) without itself using a mechanism enabling a compliant contrast ratio to be displayed. This mechanism must maintain the same content and functionality as the site or page it modifies.

#### Audio description (time-based media)

Narration added (via a sound file) to an audio track to describe important visual details that cannot be understood from the main audio track alone. The audio description must be synchronised with the time-based media by an application device linked to the media player.

**Note 1:** the audio description of a video provides information about actions, characters, scene changes, on-screen text and other visual content.

**Note 2:** in standard audio description, narration is added during pauses in the dialogue (see also extended audio description).

**Note 3:** when all the information in the video is already given in the audio track, no additional audio description is required.

### B

#### Biological characteristics

User identification or control methods based on usable biological characteristics may include, for example:
- fingerprint recognition; 
- facial recognition; 
- voice recognition.

### C

#### CAPTCHA

A CAPTCHA is a test used to distinguish a human user from a computer. The test often uses graphic elements containing distorted text, mixed with other shapes or using altered colour schemes, which the user is asked to retype. Other forms of CAPTCHA may be based on logical questions or sound clips.

W3C provides full documentation on the accessibility of this type of test: [Inaccessibility of CAPTCHA](https://www.w3.org/TR/turingtest/).

#### Clearly identifiable adjacent

The element is made available adjacent to the object identified by the criterion in the graphical representation and in the keyboard navigation order. If necessary, the item may be available elsewhere in the software and be accessible with a function (a button for example) which is adjacent to the object identified in the criterion, explicit and clearly identifiable (the name of the function is explicit).

#### Complex action

A complex action is one in which the downward and upward actions of the pointer are inseparable events in the action, so that it is not possible for the user to cancel the downward action simply by moving the pointer outside the interactive zone. This is the case, for example, with drag'n'drop mechanisms, where the downward action of the pointer selects an item and the upward action of the pointer positions the item.

#### Changes of context

Major changes in the content of a screen that, if made without user awareness, can disorient users who are not able to view the entire screen simultaneously. 
Changes in context include changes of:
- application;
- user agent;
- viewport;
- focus;
- content that changes the meaning of the screen.

**Note:** A change of content is not always a change of context. Changes in content, such as an expanding outline, dynamic menu, or a tab control do not necessarily change the context, unless they also change one of the above (e.g., focus).

**Example:** Opening in another user agent, moving focus to a different component or significantly re-arranging the screen content are all examples of a change of context.

#### Compatible with assistive technologies

Content or functionality must be compatible with assistive technologies and software accessibility features via an accessibility API.

This concerns the technology, its functions and its uses:
- The way the technology is used must be compatible with assistive technologies. This means that the way in which the technology is used has been tested for interoperability with users of assistive technologies in the software content.
- The technology runs natively on the platform and uses the platform's accessibility API.

#### Complex and simple gestures

A simple gesture with a screen involves touching a single point on the screen. This may be a single press or click, a double press or click, or a long press. 

A complex gesture can be:
- a gesture involving several points of contact on the screen (example: a gesture with two fingers on the screen to zoom in or out on a map); 
- a gesture based on following a trajectory on the screen (e.g. a function that detects the movement of a finger to the left or right on a tactile surface to trigger switching to the previous/next item in a carousel).

#### Complex data table

When a data table contains headers that are not distributed solely over the first row and/or column of the grid, or whose scope does not apply to the entire column or row, it is referred to as a complex data table. It is then necessary to provide a "summary" to explain its nature and structure in order to make it easier to consult for users of assistive technologies, for example.

#### Component whose nature is not obvious

An interactive component mixed with non-interactive elements (text, for example) and which is not visually distinguishable from the non-interactive elements.

#### Consistent (reading sequence)

Understandable content is readable (the order of the elements is logical) and coherent (the reading sequence is consistent).

#### Contrast

Marked opposition between the brightness of a foreground colour and a background colour. The contrast ratio is based on the difference in relative luminance between the background and the foreground according to the rule: (L1 + 0.05) / (L2 + 0.05) where L1 is the lightest relative luminance and L2 the darkest relative luminance. Luminosity is calculated using the following formula: L = 0.2126 * R + 0.7152 * G + 0.0722 * B. Where R, G and B are defined by
- If RsRGB &lt;= 0.03928 then R = RsRGB/12.92 otherwise R = ((RsRGB+0.055)/1.055) ^ 2.4;
- If GsRGB &lt;= 0.03928 then G = GsRGB/12.92 otherwise G = ((GsRGB+0.055)/1.055) ^ 2.4;
- If BsRGB &lt;= 0.03928 then B = BsRGB/12.92 otherwise B = ((BsRGB+0.055)/1.055) ^ 2.4.

and RsRGB, GsRGB and BsRGB are defined by
- RsRGB = R8bit/255;
- GsRGB = G8bit/255;
- BsRGB = B8bit/255.

The "^" character is the power operator.

**Note:** the contrast measurement concerns text, content in graphic elements, text and image of text in animations, captions text and embedded text in videos. Text in the elements of a graphic element or video (e.g. a sign, poster, etc.) is not affected.

**Source:** [WCAG contrast calculation procedure](https://www.w3.org/WAI/WCAG21/Techniques/general/G18#procedure).

#### Contrast (text size)

The standard distinguishes between several sizes of text to be evaluated, each size having a contrast threshold. These sizes are evaluated in pixels or points. The larger the text (greater than 18.5px bold or 24px normal weight), the lower the required ratio (3:1).

In the framework:
- a normal text size is a text with a calculated size of less than 24px normal weight or less than 18.5px bold;
- a large text is a text with a calculated size of 24px or more normal weight or less than 18.5px or more bold.

#### Control (moving or blinking content)

The ability for the user to control the display or playback of moving or blinking content using any pointing device (touch, keyboard, mouse, etc.).

All moving content, with the exception of time-based media supported by the [Multimedia](referentiel-technique.html#topic-3) theme, is concerned: animated graphic elements and moving content, for example.

**Note 1:** where appropriate, the control method should be available as the first element of the interface.

**Note 2:** the control method for moving or blinking content must allow the user to interact with the rest of the application. As a result, stopping or pausing via an event triggered only when focused does not meet this criterion.

**Note 3:** In some cases, movement is an integral part of the component and it is not possible to give the user control over it, for example a progress bar whose function is to indicate by movement the progress of an event such as a download. In this case, the criterion does not apply.

#### Control (automatically triggered sound)

Option for the user to stop or restart an automatically triggered sound.

**Note:** the sound control method should be available as the first item on the screen.

### D

#### Data table

Element used to structure information in rows and columns using data cells and header cells.

#### (Data) table title

Text linked to the table that identifies the content of a data table clearly and concisely.

#### Data type and format

Text indication enabling the user to know what type of data and/or input format is required by a field, before filling it in. For example:
- Date (dd/mm/yyyy);
- Amount in euros;
- Postcode (4 digits: e.g. L-2450).

**Note:** when the form field type provides an input mask, such as by displaying a native control (for example, the native date picker component), the format indication is not necessary.

#### Decorative graphic element

[Graphic element](#graphic-element) having no function and conveying no specific information in relation to the content with which it is associated. Examples:
- A graphic element part of the layout.
- A graphic element next to a button label used simply as a graphic embellishment (icon, layout).
- A graphic element that does not provide any information necessary for understanding the text to which it is associated (a decorative image).

#### Detailed description

Content associated with a [graphic element](#graphic-element) in addition to its textual alternative in order to fully describe the information conveyed by the element.

#### Digital accessibility rules 

The generic term "digital accessibility rules" refers to the <a href="https://accessibilite.public.lu/en/raweb1/index.html">RAWeb</a>, the <a href="https://accessibilite.public.lu/en/raam1/index.html">RAAM</a>, the RAPDF or the <a href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf">EN 301 549 standard</a>, depending on the context of use.

#### Documentation 

The documentation of an application or [support service](#support-services) can be:
- a help screen;
- an [accessibility statement](../obligations.html#accessibility-statement); 
- any other content that serves as documentation (PDF document, external HTML page readable in a web browser).

### E

#### Editing tool

Application or editing component in an application used to create or modify content for distribution to other users. An editing tool can be used by one or more users working together.

An editing tool can be
- the tool as delivered by the editor;
- the tool enhanced with extensions not developed by the publisher;
- a set of tools.

Examples of editing tools
- an application for editing and controlling the content of a website or application, e.g. CMS (Content Management System), LMS (Learning Management System), LCMS (Learning Content Management System), content aggregator;
- an application for creating office documents (e.g. for distribution in PDF format);
- multimedia editing tools;
- applications for creating web applications;
- application for editing code;
- application for exporting in web technology format (for example, software for saving in HTML);
- applications that generate content using templates, scripts, command lines, etc.;
- an application or feature of an application for editing portions of web pages or applications (typically, blog systems, comment features on websites, wikis and forums);
- mail application for sending e-mails.

Examples of editing tools that are not included in the scope
- An application where the content created is not made available to other users (note-taking application with no sharing functionality, for example). In this case, the edited content is only available to the owner and is not made available to other users.
- Forms intended for users. For example, an order form for an e-commerce application. Although forms allow content to be edited, this content is not made available to other users.
- Independent accessibility control tools: these tools do not modify the content they control.

Editing tools are not systematically included in the sample. For example, when auditing a news application, RAAM does not require the editing tool (e.g. a CMS) used to create the content to be audited. If the purpose of the audit is to evaluate the public consultation interface, the sample should only contain representative public screens, but not the content management system. 

#### Error management (form) 

All the processes used to inform the user 
- mandatory fields,
- expected type or format indications, 
- input errors in a form. 

### G

#### Graphic element

Element using a visual representation such as images, pictograms or graphics.

This element may be made up of one or more parts which need to be visible in order to be understood (for example, each point on each line of a statistics chart).

The "Image" role is not rendered uniformly in all environments.
- TalkBack (Android): the nature of graphic elements is not rendered when they are integrated into a native application; the screen reader will render the description if it is defined but will not announce "image". However, for images embedded in [web views](glossaire.md#web-views), the screen reader will render "Graphic elements".
- VoiceOver (iOS): whether in a native application or in a web view, VoiceOver renders "Image" for images it can access.

Generally speaking, depending on the development method, it is also possible that the role is not rendered on either TalkBack or VoiceOver. In this case, observation alone will determine the nature of the element.

In most cases, it is not essential for the "Image" role to be rendered. Except in special cases where identification of the role is essential, the absence of a rendered role cannot constitute non-compliance.

#### Graphic element conveying information

A [graphic element](#graphic-element) that conveys information needed to understand the content with which it is associated.

#### Graphic element with legend

When a text adjacent to a graphic element contains information about the graphic element (e.g. copyright, date, author, etc.) or is intended to supplement the information provided by the graphic element (e.g. a text associated with an image in an image gallery), it is referred to as a captioned graphic element.

When a graphic element is captioned, it is necessary to associate the legend with the graphic element, so that assistive technologies can treat the graphic element and its legend as a single whole.

### H

#### Help with creating accessible content
Any feature available from a content editing interface, whatever the target format, which helps the author of the content to take account of digital accessibility rules.

An help in creating accessible content can be an automatic assistance tool or a documentation.

An help in creating content includes:
- automatic or semi-automatic tests available from the editing features;
- other automatic tools (a chatbot, for example);
- documentation explaining how to define accessibility properties for each content item;
- manual tests available from the editing features to guide authors in detecting errors.

### I

#### Ignored by assistive technologies

Rendering elements such as decorative graphic elements that do not provide relevant information can create complex consultation conditions by overloading the rendering by assistive technologies with useless information.

It is therefore important to be able to prevent these elements from being rendered. Most accessibility APIs have properties or methods for preventing this type of element from being rendered.

#### Information (provided by colour)

Information transmitted visually by means of a colour. The indication that fields in red are mandatory in a form, the active button in a list of buttons, the change of colour of an item name to indicate its unavailability in a list of items are all examples of information given by colour.

Indication by colour alone must be accompanied by another method for users who do not see or perceive colours or their associations well.

The indication given by colour must be provided: 
- by a means involving graphics (pictogram, background image, shape, different border style, etc.) or another typographic style (bold, italic, text size, other font, etc.) for users with limited colour perception.
- and by descriptive (non-visible) information present on the element so that screen readers can render the information to users who cannot see.

#### Indication conveyed by shape, size or location

This may be, for example
- the presence of a visual marker, to indicate the active screen in a navigation menu (indication given by position);
- a highlight to indicate an active tab (indication given by the shape);
- changing the font size in a tag cloud (indication given by the size);
- or any other similar graphic effect.

#### Input unit

For character-by-character input, the smallest text input unit is the character.

For a system with word prediction functionality, the smallest input unit is the word. 

For some speech recognition systems, the text is not retranscribed until an entire word or phrase has been spoken. In this case, the smallest input unit is the word or phrase.

### K

#### Key features of captions

It is possible to apply presentation effects to captions (text colour, style, font) in order to convey information to users (e.g. identify the person speaking). These key features of captions are essential for users to understand them and should be retained during the transformation process (sending or recording the video, for example) if they are present.

#### Key repeat

Feature which consists of printing (on the screen, in an input zone for example) a character several times as long as the corresponding key on the keyboard (visual or physical) is activated.

When keys are associated with functions in an application, it is no longer the character that is printed several times, but the function that can then be repeated several times.

The trigger delay and the delay between two key repetitions is a parameter that can be defined at the platform level, but an application could allow this parameter to be configured as well. See [possible configuration parameters on iOS](https://support.apple.com/en-gb/guide/iphone/ipha7c3927eb/ios) for example.

#### Keyboard shortcut

A means of triggering an action associated with a user interface component by pressing one or more keys on a keyboard.

#### Keyboard trap

A keyboard trap occurs when a user navigating with the keyboard from a position on the screen (e.g. a form field, a button, a complex component) cannot reach the next or previous component.

There are special cases where it is necessary to capture the keyboard focus and prevent the user from reaching the elements following or preceding the element currently being viewed. For example, in a modal window it is imperative that the user navigating with the keyboard cannot reach components outside the modal window as long as the latter is active.

### L

#### Label and field located next to each other

 The label and its field must be visually close, so that the relationship between the two cannot lead to confusion.

#### Lists 

A sequence of elements that can be grouped together in the form of a structured list. For example, the sequence of links in a navigation menu is a list of links, and the various steps in a procedure are a list of elements.

The notion of "visually grouped in the form of a list" is characterised by:
- The presence of a visual marker making it clear that it is an unordered list, for example -, -, *, etc.;
- The presence of a visual marker to indicate that it is an ordered list, e.g. a number, a Greek letter, etc.;
- The presence of a series of elements that visually follow one another, with an identical visual form, nature and function, but without having a direct visual list marker, for example a navigation menu.

However, not all lists require a list structure, for example a series of terms separated by a comma.

### M

#### Mandatory field indication

Textual or graphic indication (icon) letting the user know that a field is mandatory before entering it.

**Note:** If this indication is not made explicitly in text (icon, "*", "!", etc.), the explanation of the meaning of this indication must be located, visually and in reading order, before the indication is used for the first time.

#### Mechanism enabling to activate an accessibility feature 

Interface component or set of interface components used to activate a feature that takes into account one or more adaptation needs of the interface. For example: a button enabling to display a screen with compliant contrasts or a button enabling to increase paragraph spacing.

We also talk about a **set of components** when, in some interfaces, the component that enables the feature to be activated is only made available once one or more other components have been activated. For example: a button can be used to display a modal window, which itself contains a button that can be used to display a screen with the correct contrast. In this case, the button that displays the modal window **and** the button that activates the display of compliant contrasts together constitute the mechanism.

This mechanism must keep the content and features of the application or screen it modifies unchanged.

#### Mechanism that enables a compliant contrast ratio to be displayed

Interface component whose activation enables the appearance of the site or page to be modified so as to display the contents with a sufficient contrast ratio. The design of this interface component must comply with [criterion 2.2](referentiel-technique.md#crit-2-2) and [criterion 2.3](referentiel-technique.md#crit-2-3) without using itself a mechanism for displaying a compliant contrast ratio. This mechanism must keep the content and features of the application or screen it modifies unchanged.

#### Modifying or cancelling data and actions taken

Processes by which a user can modify the data they have entered, have their entry cancelled or have actions resulting from their entry cancelled, for example cancelling an order or a bank transfer.

**Note:** The screen containing a form which modifies or deletes data, or which transmits answers to a test or examination, or whose validation has financial or legal consequences, must explicitly indicate the period during which the user can request the cancellation of their input. It must also contain the procedure for cancelling the entry. This process does not have to be available online, although it is recommended.

### N

#### Name, role, value, properties and changes of state

A component must have an appropriate role and name, and any values, states and properties must also be accessible and correctly passed on to the accessibility APIs.

The name can be the title of the component, such as the accessible name of a button, for example.

The value is, for example, the selected item in a drop-down list or the current value of a cursor.

The role corresponds to the type of element defined in the specification of the technology used. The role (button, link, input field, for example) is generally rendered by assistive technologies.

Parameters correspond to specific information about a component. For example, a parameter that transmits to the APIs the information that the component controls such and such content.

Changes of state must also be made available. For example, using a property to tell the APIs that the component is "open" or "closed". Note: a state can also be transmitted via the name, when it is dynamically changed to correspond to the state of the controlled zone in particular.

These parameters are not mandatory, but may be required if they are essential for making the component accessible. It is up to the auditor to consider the cases where these parameters are essential, depending on the context in which the component is used.

The auditor must also check that, where they are present, these parameters are used correctly.

#### Native platform controls

Platforms have native controls, for example a native color picker for colour selection, a calendar or a specific field containing the format control for date selection, etc. Form fields that expect particular formats (such as a date, for example) should use the platform's native controls to ensure maximum compatibility with assistive technologies.

#### Navigation sequence

The order in which the keyboard focus moves (to the next element or to the previous element). 

**Warning:** when an element initiates a change in the screen (change of context, management of hidden zones, addition of content, management of form fields, etc.) it is necessary to activate the element initiating the change in order to test the consistency of the navigation sequence.

### O

#### Only for layout purposes

Use of interface elements for a purpose other than that stated in the specifications. For example, a misuse in an application could be the use of an interactive element (button for example) as plain text.

### P

#### Personal user data

Personal data concerning the user in a form can be 
- surname; 
- first name;
- password;
- e-mail address;
- postal address;
- postcode; 
- telephone number; 
- credit card codes; 
- birthday; 
- the URL of a web page presenting the user or the organisation that the person represents.

#### Pressed

Corresponds to event handlers considered as down events. For example ACTION_DOWN on Android or UITouch.Phase.began on iOS.

#### Primary features (of a time-based media)

Primary control functions are the basic functions of a media player: play, pause, stop, audio control.

### Q

#### QVGA

QVGA (Quarter Video Graphics Array) resolution is a display standard that corresponds to a size of 320 pixels X 240 pixels (i.e. 76,800 pixels).

### R

#### Real-time text communication

Real-time text (RTT) is a mode of written communication which allows users to read the text being written by the sender, without waiting for the sender to validate (for example with the <kbd>enter</kbd> key).

Collaborative editing tools (e.g. online office suites) are an example of how RTT works: the various parties involved can see the texts written and modified by each of them at the same time as the changes are applied to the texts. This is very different from a common online conversation system (such as instant messaging), which only transmits a written message to interlocutors when a key or button is pressed (for example, the <kbd>enter</kbd> key).

Example of real-time text communication integrated into a platform: [Answer or make RTT or TTY calls from your iPhone](https://support.apple.com/en-us/HT207033)

#### Refresh process

A technique for modifying the content of one or more screen elements. The user must be able to control each refresh process independently.

#### Related form controls

In a form, all the fields that can be grouped together by the nature of the information required. The purpose of grouping is to identify fields that should be treated as a whole.

Here are some examples:
- Three successive fields for entering a date (day/month/year);
- Successive fields for a telephone number;
- A block for entering the user's identity and address, when the form contains several contact blocks;
- A set of radio buttons or tick boxes relating to a question.

These fields must be grouped together when the field labels are not sufficient to inform the user that the fields are part of a group.

When the form consists of a single block of information of the same kind (the user's identity and address, for example) or a single field (a search engine, for example), the grouping of fields is not mandatory.

#### Relay service

Relay services allow users, whatever their mode of communication (text, sign, speech) to interact remotely during real-time communication with other participants, by providing conversion between modes of communication. 

For example: a user who communicates using sign language wants to talk to someone who does not. A relay service will provide live interpreting so that they can communicate.

#### Released

Corresponds to event handlers considered as up events (mouseup, touchend for example). For example ACTION_UP on Android or UITouch.Phase.ended on iOS.

#### Replacement mechanism

A replacement mechanism is a feature that allows the user to access a version of the application with certain parameters (usually display parameters) modified (for example, font and background colours).

This mechanism may be provided by the platform itself or by the application. Where the platform has a robust replacement mechanism, authors should use it instead of an application-specific replacement mechanism.

Platforms offer users several replacement mechanisms. The activation of these replacement mechanisms is detectable by the applications, which can in turn serve specific information and presentations.

##### Replacement mechanisms available in iOS

- **Increase contrast**: The option is available from the path: *Settings &gt; Accessibility &gt; Display & text size &gt; Increase contrast*. When enabled, this option allows different styles to be loaded that have been defined by the author for this specific option in order to offer a higher contrast version to users who need it. In addition, this option increases the contrast of native iOS components such as switch buttons.
- **Differentiate without colour**: This option is available via the path: *Settings &gt; Accessibility &gt; Display & text size &gt; Differentiate without colour*. When enabled, this option allows you to load additional visual information other than colour (for example, shape or size) that has been defined by the author for this specific option, in order to highlight a graphic element whose colouring carries information (an active button, for example).

##### Replacement mechanisms available on Android

There are no replacement mechanisms in Android that are equivalent to those in iOS, or that are sufficiently robust.

The replacement mechanism available on Android ("**High contrast text**") is still experimental. Its use is not currently recommended.

##### Other replacement mechanisms not provided by the platforms
n
If the platform does not provide a replacement mechanism for certain parameters, the application can provide one from its interface.

### S

#### Status message

A status message informs the user of a change in content on the screen without interrupting their main activity (there is no change of context, such as repositioning the focus on the message).

A status message can inform about
- The success or result of an action;
- The busy state of an application;
- The progress of a process;
- The existence of an error.

A status message is not necessarily visible on the screen, but it must always be accessible to assistive technologies.

#### Styled text

Text whose appearance is controlled by the platform's formatting technology (such as CSS for HTML pages).

#### Subtitles 

Subtitles are in a language other than the language of the video.

Subtitles are different from [captions](#synchronised-captions-media-object) for the deaf and hard of hearing.

#### Sudden change in brightness or blinking effect

Alternating relative brightness that can cause seizures in some people, if they are large enough in a specific frequency range.

#### Summary (of table)

A summary (of table) is a passage of text associated with a complex data table. It provides information about the nature and structure of the table to make it easier to use for users of assistive technologies, for example.

**Note:** although the main users affected are those using screen readers, other users may also benefit from this information, such as certain people with visual or intellectual impairments. In this case, the summary, although hidden by default, should be made visible by means of a button, for example.

#### Support services

A support service can be
- the feedback mechanism identified in the application's accessibility statement,
- a help desk, 
- a call centre, 
- a technical support,
- a [relay service](#relay-service),
- a training service.

#### Synchronised captions (media object)

Text of audio information (a character's words, important noise to understand the action, etc.) present in a time-based medium and displayed synchronously with the flow of the multimedia object.

**Note 1:** to differentiate between sound sources (different characters, voice-over, etc.), it is recommended that an appropriate mechanism be used (bracketing, italics, explicit announcement such as "voice-over: ...").

**Note 2:** subtitling for translation should not be confused with captioning for the deaf and hard of hearing. Subtitling and captioning serve different purposes. Only the presence and relevance of captions for the deaf and hard of hearing will ensure compliance.

### T

#### Template

A template is a document format with predefined parameters. It is used to insert content edited by the author. A template has presentation, usage and technical parameters that are not visible.

A template may concern an entire page or screen (home page template, etc.) or specific types of content (forms, pictures, videos, etc.)

A set of templates is a group of templates that allow different formatting of the same element. For example
- templates for the application's home screen;
- templates for screens containing interactive elements;
- templates for creating a PDF.

#### Test graphic element

[Graphic element](#graphic-element) used in a test, a CAPTCHA or a graphic element used as a test in a quiz or game. Example: a series of graphic elements presents a detail from a famous painting. You need to recognise the title and painter of each painting. In this situation, it is not possible to give a relevant alternative (for example the name of the painting and/or the painter) without rendering the test unusable. In this case, the alternative must simply give the possibility of identifying the graphic element, for example "test image 1".

#### Text graphic element

[Graphic element](#graphic-element) displaying text.

The use of graphic elements containing text is not recommended. Where it is possible to reproduce the same effects with the technology in which the interface is developed, [criterion 1.8](referentiel-technique.html#crit-1-8) requires that the text be reproduced in this format or that a replacement mechanism allows the user to replace these graphic elements with styled text.

#### Time-based media (audio, video and synchronised)

- Time-based media audio-only: sound content (Wav, MP3...).
- Time-based media video-only: moving or sequential images or photos.
- Synchronised time-based media: audio or video streams synchronised with another format to present information and/or including interactive temporal components. Time-based media can be viewed in 2 different ways:
	- as a downloadable file that can be viewed with external software;
	- content embedded in the software and viewable from the interface.

Time-based media can be broadcast in real time or played back asynchronously (pre-recorded media).

**Note 1:** animated gifs and images animated by a script in the application are not considered to be temporal media.

#### Time stamp

The video time stamp is the time value declared in the caption file.

```
1
00:00:03,000 --> 00:00:06,999
The title should appear when the video reaches 3 seconds.
````

#### Toggle control

A toggle control is a control that can have 2 or 3 states, so the user-defined state is persisted to the next state. It can be a screen lock control (the screen is either on or off), or a control for enabling or disabling application notifications.

Examples of toggle controls 
- a checkbox,
- a radio button, 
- a button that can have an enabled or disabled state.

#### Transcript (time-based media)

Text content associated with time-based media using the appropriate technique (text present in the interface or in a text file located on the same screen or available via a button). This content gives the user access (independently of viewing the multimedia object) to
- everything that is said orally;
- all the descriptive information needed for an equivalent understanding of the action.

This textual information must be presented in the chronological order in which it appears in the time-based media.

#### Transformation

Process managed automatically by the editing tool. There are two types of transformation: 
- content restructuring: transformation during which the input format (e.g. HTML, XML...) is the same as the output one, the restructuring only modifies elements of the markup. For example: linearising a table, dividing a document into several pages.
- content recoding: transformation during which the input format is different of the output one (e.g. HTML to XHTML, HTML to PDF). This applies in particular to editing zones that use a different syntax to that which will be used for public display.

#### Two-way voice communication application

Two-way voice communication applications are applications that allow 2 or more people to speak simultaneously. Videoconferencing applications, which allow people to speak at the same time, are an example.

### U

#### User interface component

A user interface component is an element with which the user can interact, for example a button, a link or an input zone. Some components can be more complex, such as a menu, a dialogue window or a system of tabs. Finally, a user interface component can be based on elements native to the platform language or developed from scratch.

**Note:** Not all native HTML interface components are found in mobile application development languages. For example, radio buttons or checkboxes do not exist as such in applications developed for iOS. Developers will then need to use the most appropriate components available in development languages to fulfil a similar function. To reproduce what would be a list of radio buttons, it is possible, for example, to use lists of buttons associated with a selected or unselected state. Therefore, during screen reader tests, it is possible that the declared role does not correspond to the role displayed by the interface (for example, a button that looks like a radio button). Nevertheless, if the role and state of the component are relevant and accessible to assistive technologies, then the criterion will be considered compliant for this component.

### V

#### Viewing control (time-based media)

Possibility for the user to control the viewing of time-based media using the keyboard and any pointing device, at least. The following points must be respected:

List of mandatory features for controlling consultation
- The multimedia object must always have at least the following functions: play, pause or stop;
- If the multimedia object has sound, it must have a sound on/off function;
- If the multimedia object has audio description, it must have a function for controlling the activation and deactivation of audio description;
- If the multimedia object has closed captions, it must have functionality for controlling the activation and deactivation of closed captions.

Each function must be accessible via the keyboard and any pointing device (touch, screen reader, keyboard, mouse, etc.).

If the player does not allow a second audio track to be included for audio description, a link (or button) to an alternative video with audio description is a satisfactory alternative feature. The same applies to closed captions: if the video does not have closed captions that can be activated and deactivated, the presence of an alternative video with closed captions (available via a link or a button) is a satisfactory alternative.

**Note:** If there is no sound in a time-based media, there is no point in adding a sound activation/deactivation feature. However, if this functionality is present and requires a text alternative to be understood by certain users, then it should be given one since the user is likely to access it and want to activate it.

#### Visible text 

Text displayed as a visible text on the screen within a button or link.

Text displayed as a label for a form field.

This text can be text or an image containing text.

#### Voice-based services

In an oral communication system (e.g. telephony), features may be provided, for example:
- a voice mailbox (answering machine);
- an automatic switchboard that requires you to say a number between 1 and 4 to be redirected to a service;
- or any other interactive voice server.

### W

#### Web views

These are web pages (created in HTML and CSS) embedded in a mobile application. Web views can be entire application screens or just parts of screens (for example, advertising inserts).

#### When focused 

This is the state returned by an element which receives attention following a user action. There are several ways of bringing an element into focus:
- by activating the element using a pointing device (by touching the screen);
- by reaching the element using a key on an external keyboard (tab, direction arrow);
- by reaching the element using an external switch (switch, joystick).

When focused in a mobile environment, the focus should be assessed with the appropriate assistive technologies and parameters activated. Simply connecting an external switch (keyboard, switch for example) is not enough for keyboard control to be fully functional. So the focus visibility should only be evaluated when these elements are activated and configured. The [**Methodology**](methodologie.md) page describes the procedures required to [configure an external keyboard](methodologie.md#external-keyboard). 