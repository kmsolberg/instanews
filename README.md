# Project 2: Instanews
This project is a web application that generates a visual grid of the most recent news stories from the New York Times.  It was designed as an introduction to using Ajax, JSON and APIs.

![Image of Landing Page](assets/images/landing-page.png)

## Technologies Used:
This website has a main HTML page linked to minified CSS and JS files using Gulp.

- Ajax
- JSON
- [New York Times API](https://developer.nytimes.com/)
- SASS
- [Gulp](http://gulpjs.com/)
  - Dev dependencies:
    - browser-sync
    - gulp-autoprefixer
    - gulp-cssnano
    - gulp-eslint
    - gulp-prettyerror
    - gulp-rename
    - gulp-sass
    - gulp-uglify
- [Node](https://www.npmjs.com/)
- [Google Chrome](https://www.google.com/chrome/) 
- Google Chrome Developer Tools
- @font-face generated from [Font Squirrel](https://www.fontsquirrel.com/)
- JavaScript
- [jQuery](https://jquery.com/)
- HTML Validator (https://validator.w3.org/)
- CSS Validator (https://jigsaw.w3.org/css-validator/)
- CSS Reset, [Eric Meyer's Reset CSS](http://cssreset.com/scripts/eric-meyer-reset-css/)

## Personal Learnings
- Flex boxes can be stacked within one another and it can become confusing to keep track of them in the different media queries, like with the logo and selection menu in the header.  It's difficult to keep them all organized in the CSS.
- A solution that worked last time may not work this time.  For instance, I had to set a height for the grid boxes which I didn't do for project 01 because the text was centered vertically there.  It's always best to have an open mind for new solutions
- There are literally dozens of way to code a single thing.  Comparing my work to others is not always the most efficient way to find a solution.
- When it comes to writing up JavaScript, it's best for me to write out the exact steps that need to happen and create the code following that so that I don't lose track of a step of have excess code.
- I need to brush up on my JavaScript since it was not always evident to me why some things worked and others didn't.
- Sass is amazing - it makes such a differnece with the media queries, although again I had to learn to plan ahead and modify as I went in case there was too much nesting!
- The one part of JavaScript that this project helped me master was concatinating.  It was drilled into my head.