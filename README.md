# Higher or Lower?
'Higher or Lower?' is a classic, fun and incredibly simple game that most of us have played in our lives but normally with playing cards. This site has taken this straightforward concept and digitised it. Using pure JavaScript for the logic and supported by HTML and CSS, it allows the user to feel the same adrenaline rush experienced when deciding if the next number will be higher or lower. It is fully responsive and accessible on all devices. 

![Screenshot of 'Am I responsive image'](readme-images/am-i-responsive-screensplash.png)

[Source: https://jdohertydev.github.io/higher-or-lower-v2/]

# User experience
As a player of this game, I want:

* a simplistic design.
* it to work on all devices.
* it to capture my attention. 
* to be able to play without having to learn a lot of rules.
* to see my progress in the form of a score counter.
* to be rewarded when I pass game milestones.
* to know when my turn is over.

## Early development
Before starting, a basic wireframe was developed using balsamiq which helped visualise the website.

![Screenshot of wireframe](readme-images/wireframe-image.png)

## Technologies used
This project uses HTML, CSS and JavaScript.

## Features

### Existing Features
* Simple colour scheme
    * At the heart of the game's design is simplicity and this starts with the colour scheme used. A simple yet elegant black and white interface combines with the "Play" font which gives this game a retro, arcade feel. 

* Logo and Heading
    * The logo and heading are centred at the top of the page which makes it easy for the user to see. The logo, which combines the '+' and '–' symbols, adds a visual element which breaks up the text. 

![Screenshot of logo and heading](readme-images/logo.png)

* Favicon
    * The Favicon is a mirror image of the logo, which keeps design elements consistent.

![Screenshot of Favicon](readme-images/favicon.png)

* Instruction box
    * The instruction box is the first and only thing that the user sees so to not overwhelm or distract them. The language used is persuasive to entice the user to play and it clearly outlines the game's objectives, which the user will read before clicking the 'play now' button and entering the game.
    * When the user has clicked the 'play now' button, the instructions are hidden to maximise the game area.

![Screenshot of instruction box](readme-images/instruction-box.png)

* Game area
    * The user is presented with a simple interface; a randomly generated number, 'up' and 'down' icons from FontAwesome which are purposely placed on top of each other for good design, as well as 'higher and 'lower' text. 
    * The 'higher' and 'lower' text element is removed when viewed on smaller viewports to avoid the text wrapping.

![Screenshot example of text being removed for smaller viewports](readme-images/mobile-with-icons-only.png)

* The buttons and text are clickable with the cursor changing to pointer and trigger an onEvent action in JavaScript. 
* The keystrokes for 'up' and 'down' have been enabled so users using a keyboard can bypass clicking.

![Screenshot of game area](readme-images/game-area.png)

* Area to say if the answer is correct or incorrect
     * If the user gets the answer correct, a green 'Correct' text is displayed however if the answer is incorrect, a red 'Incorrect' text is displayed. These colours are traditionally used in this context.
     * For a better visual style, the answer area text fades out in 0.8 of a second.

![Screenshot of correct text](readme-images/correct.png)

![Screenshot of incorrect text](readme-images/incorrect.png)

* Score area
    * The score area is logically placed at the bottom of the game area which shows the user's current and highest streak.

![Screenshot of score area on desktop](readme-images/score-area.png)

* On smaller viewports, the font size is reduced to accommodate the content.

![Screenshot of score area on mobile](readme-images/score-area-on-mobile.png)
  
* To add an element of progress, JavaScript is used to change the page background colour depending on the user's streak (3 changes to bronze, 5 changes to silver and 10 changes to gold).

![Screenshot of game display in silver](readme-images/silver-screenshot.png)

* When the user guesses incorrectly, the background is returned back to black to signify the end of this turn. 
    
## Testing
* This site has been tested on a Windows 11 desktop version of Chrome, Firefox and Edge.
* Using Chrome Dev Tools, simulations of mobile and tablet viewports have also been tested with no display errors.

### Screenshots of the website on different devices

#### Mobile Device

##### Instruction splash screen 

![Screenshot of mobile device](readme-images/mobile-viewport.png)

##### Game splash screen

![Screenshot of mobile device](readme-images/game-splash-screen-mobile.png)

#### Tablet

##### Instruction splash screen 

![Screenshot of tablet](readme-images/ipad-screenshot.png)

##### Game splash screen

![Screenshot of tablet device](readme-images/game-splash-screen-tablet.png)

#### Laptop

##### Instruction splash screen 

![Screenshot of desktop](readme-images/desktop-screenshot.png)

##### Game splash screen

![Screenshot of desktop](readme-images/game-splash-screen-desktop.png)

### Validator Testing

#### HTML
* No HTML errors are returned when passing through [The W3C Markup Validation Service](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjdohertydev.github.io%2Fhigher-or-lower-v2%2F).

#### CSS
* No CSS errors are returned when passing through [The W3C CSS Validation Service - Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjdohertydev.github.io%2Fhigher-or-lower-v2%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en).

#### JavaScript
* No errors were found when passing through the official [Jshint validator](https://jshint.com/).
* The following metrics were returned:
    * There are **14** functions in this file.
    * Function with the largest signature takes **1** arguments, while the median is **0**.
    * Largest function has **9** statements in it, while the median is **3**.
    * The most complex function has a cyclomatic complexity value of **5** while the median is **2**.

### Accessibility
* This site was developed with a colour scheme that is visually appealing but also very minimal, always considering the accessibility of the user.
* Using Lighthouse, this site scored an accessibility rating of **100** and a **100** performance rating overall.

![Screenshot of Lighthouse report](readme-images/lighthouse-screenshot.png)

## Solved Bugs

* When initiating a game after clicking 'play now', the word 'incorrect' always appeared. This was due to the event listener logging a click and starting a turn. To fix this, I created a new function with an 'onActionBtnClick' specifically to load the game first.
* When a user clicked 'higher' or 'lower' very quickly, it made the correct/incorrect text blink. This was fixed using an 'if' statement calling `clearInterval` at the beginning of the function.

## Unfixed Bugs
* There are no unfixed bugs in this project.

## Deployment
* This site was created using GitPod and deployed to GitHub.
    * In the GitHub repository, navigate to the Settings tab.
    * From the source section drop-down menu, select the Master Branch.
    * Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
* The live link is ['Higher or Lower'?](https://jdohertydev.github.io/higher-or-lower-v2/).

## Credits

### Content

* The idea for the game came from [DAY 8 - How to code a Number Game in Javascript](https://www.youtube.com/watch?v=kMmtRm4P_EE&t=1205s) and some of the design features draw similarities.
* The website used to make the Favicon was [Favicon Converter](https://favicon.io/favicon-converter/).
* The icons in the page were taken from [Font Awesome](https://fontawesome.com/).
* To create the text fade out effect, I used code from [How do I create a callback function for when the fading function is done?](https://stackoverflow.com/questions/67625352/how-do-i-create-a-callback-function-for-when-the-fading-function-is-done).
* Along the way, I was helped by my mentor as well as tutor support.