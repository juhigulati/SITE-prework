# Pre-work - _Memory Game_

Test your memory! is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Juhi Gulati

Time spent: 2.5 hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

- [Y] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [Y] "Start" button toggles between "Start" and "Stop" when clicked.
- [Y] Game buttons each light up and play a sound when clicked.
- [Y] Computer plays back sequence of clues including sound and visual cue for each button
- [Y] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [Y] User wins the game after guessing a complete pattern
- [Y] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [Y] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [Y] Buttons use a pitch (frequency) other than the ones in the tutorial
- [Y] More than 4 functional game buttons
- [Y] Playback speeds up on each turn
- [N] Computer picks a different pattern each time the game is played
- [N] Player only loses after 3 mistakes (instead of on the first mistake)
- [N] Game button appearance change goes beyond color (e.g. add an image)
- [N] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [N] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [N/A] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![Test your memory! Losing Demo]("http://g.recordit.co/9KSa1mApEK.gif")

![Test your memory! Winning Demo]("http://g.recordit.co/ocnrPIMf2H.gif")

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

I used: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value to choose colors for the game.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

One challenge I encountered while creating this submission occurred when I was creating nested for loops for the guess function.
The base function I had at first consisted did not account for all of the processes that went into determining whether or not the user
won or lost and instead was a very basic if-else statement. I had trouble determining which functions went into the nested for loops,
and specifically had trouble recognizing that the progress had to equal the pattern.length -1 instead of simply pattern.length. To
overcome this issue, I used Google Chrome's developer tools console and did practice runs of my code at certain points, which was akin
to creating breakpoints. At these breakpoints, I ran through the code to see what specific issue was occuring and worked to remedy that.
I also went through the game to see what issues were popping up and recognized errors only occurred with my winGame, not my loseGame.
Ultimately, working through my code, being patient with errors, and making comments as I wrote code to keep track of it were the most
successful devices to overcoming this coding challenge.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

This was my first experience using HTML and CSS and I am very intrigued to learn more about its features. As I learn more about web
development, I would like to understand in greater detail the processes that connect specific coding languages and frameworks to
create web pages. Along with this, I would like to learn more about the technical procedure through which web pages can be created
and accessed via the internet. Beyond that, I would also like to learn about the different features that CSS has to mold and shift
websites.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

If I had a few more hours to work on this project, I would add more stylistic elements to make the game more enticing. To develop
stronger formatting, I would first create a title page that then leads to the game playing page. To make users more focused on the
game, I would make the title fade in and out and use stronger and more varied colors, as those are more likely to keep user's focus.
Lastly, I would likely use a recursive function for the guess function as a way of refactoring it to allow it to run at the same
pace for larger sequences.

## License

    Copyright Juhi Gulati

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
