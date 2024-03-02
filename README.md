# Higher or Lower?

‘Higher or Lower?’ is a classic, fun and incredibly simple game that most of us have played in our lives but  normally with playing cards. This site has taken this straightforward concept and digitised it. Using pure JavaScript for the logic and supported by HTML and CSS, it allows the user to feel the same adrenaline rush experienced when deciding if the next number will be higher or lower. It is fully responsive and accessible on all devices. 

Insert picture from 'Am I reponsive?'

[Source: https://jdohertydev.github.io/higher-or-lower-v2/]

## Early development

Before starting, a basic wireframe was developed using balsamiq which helped visualise the website.

## Technologies used

Based on the information given by GitHub, this project uses:

* JavaScript - 27.9% 
* HTML - 19.8%
* Dockerfile - 19.0% 
* CSS - 16.6% 
* Python - 8.9% 
* Shell - 7.8%

## Features

### Existing Features

* Simple colour scheme
    * At the heart of the game’s design is simplicity and this starts with the colour scheme used. A simple yet elegant black and white interface combines with the "Play" font which gives this game a retro, arcade feel. 

* Logo and Heading
    * The logo and heading are centred at the top of the page which makes it easy for the user to see. The logo, which combines the ‘+’ and ‘–‘ symbols, adds a visual element which breaks up the text. 

* Favicon
    * The Favicon is a mirror image of the logo, which keeps design elements consistent.

* Instruction box
    * The instruction box is the first and only thing that the user sees as to not overwhelm or distract them. The language used is persuasive to entice the the user to play and it clearly outlines the game's objectives, which the user will read before clicking the ‘play now’ button and entering the game.
    * When the user has clicked the ‘play now’ button, the instructions are hidden to maximise the game area.

* Game area
    * The user is presented with a simple interface; a number, up and down icons from FontAwesome which are purposely placed on top of each other for good design, as well as ‘higher and ‘lower’ text. 
    * The 'higher' and 'lower' text element is removed when viewed on smaller viewports to avoid the text wrapping.
    * The buttons and text are clickable with the cursor changing to pointer and trigger an onEvent action in JavaScript. 
    * The keystrokes for ‘up’ and ‘down’ have been enabled so users using a keyboard can bypass clicking.

* Area to say if answer is correct or incorrect
     * If the user gets the answer correct, a green ‘Correct’ text is displayed however if the answer is incorrect, a red ‘Incorrect’ text is displayed. These colours are traditionally used in this context.

* Score area
    * The score area is logically placed at the bottom of the game area which shows the user’s current and highest streak.
    * On smaller viewports, the font size is reduced to accommodate the content.
    * To add an element of progress, JavaScript is used to change the page background colour depending on the user’s streak (3 changes to bronze, 5 changes to silver and 10 changes to gold).


### Features Left to Implement
* Transitioning text
    * Within the game area, having the answer status transition in and out would improve the visual aesthetics. This proved a bit too technical at this stage.

## Testing

### Validator Testing
#### HTML
#### CSS
#### JavaScript

## Unfixed Bugs

## Deployment

## Credits

### Content
### Media

