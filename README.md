# CS50 Wordy

This is [@TheRedstoneRadiant](https://github.com/TheRedstoneRadiant) and [@Atapa1908](https://github.com/Atapa1908)'s final project for [Harvard's CS50x](https://cs50.harvard.edu/x).

<a href="https://cs50-wordy.redstoneradiant.repl.co"><img src="https://i.imgur.com/gmVfFOR.png" alt="CS50 Wordy" width="600"></a>

## Live Demo: https://cs50-wordy.redstoneradiant.repl.co
## Video Demo: https://www.youtube.com/watch?v=df3imK0LEu8

## Project Description

Our final project to conclude CS50x is a web based game called 'Wordy', similar to the [New York Times Wordle game](https://www.nytimes.com/games/wordle/index.html). 

Unlike Wordle, Wordy offers the player to choose between a 5-letter, 6-letter, or 7-letter game. 

Depending on the player's choice, a random word is loaded from the respective dictionary, which the player will have to guess. The player inputs their valid guess, and after each guess, color indicators will appear providing the player information for the next guess. 

<details>
<summary>Project Files</summary>

- [templates/index.html](https://github.com/TheRedstoneRadiant/CS50-Wordy/blob/main/templates/index.html): This file contains the basic rules for playing the game, along with a demo of wordle rows representing what each color indicates.
- [templates/keyboard.html](https://github.com/TheRedstoneRadiant/CS50-Wordy/blob/main/templates/keyboard.html): The keyboard.html file provides a virtual keyboard for mobile users to press the buttons. Additionally, JavaScript logic is implemented to change the color of each key based on the player's guesses and whether they are correct. For example, if the letter 'Y' was previously guessed and it is in the word, the 'Y' key on the keyboard will turn yellow.
- [templates/layout.html](https://github.com/TheRedstoneRadiant/CS50-Wordy/blob/main/templates/layout.html): The layout.html file defines the basic webpage layout, including the navbar and meta tags.
- [templates/wordle.html](https://github.com/TheRedstoneRadiant/CS50-Wordy/blob/main/templates/wordle.html): The wordle.html file serves as the main page for the game. It imports keyboard.html and calls a wordle board render function based on the 'length' template variable. This file also includes error and game over boxes that are hidden by default.
- [static/wordle.js](https://github.com/TheRedstoneRadiant/CS50-Wordy/blob/main/static/wordle.js): The wordle.js file contains all the JavaScript logic for the wordle game. It includes functions for generating the wordle board, handling keyboard input, making requests to Flask to validate words and fetch random words, and managing game logic.
- [static/style.css](https://github.com/TheRedstoneRadiant/CS50-Wordy/blob/main/static/style.css): The style.css file provides basic styles for the homepage and main layout of the game. It also includes code to make the game mobile-responsive and resize the navbar.
- [static/wordle.css](https://github.com/TheRedstoneRadiant/CS50-Wordy/blob/main/static/wordle.css): The wordle.css file contains styles specifically tailored to the wordle board and error box. It includes keyframe animations, such as shaking the wordle row if the word is incorrect and flipping each letter as it is being revealed. This file also includes media queries to ensure the game is mobile-responsive and resizes the board accordingly.
- [static/favicon](https://github.com/TheRedstoneRadiant/CS50-Wordy/tree/main/static/favicon): The favicon directory contains the page favicon, which was generated using https://favicon.io.
- [datasets/words_*.txt](https://github.com/TheRedstoneRadiant/CS50-Wordy/tree/main/datasets): These files contain the datasets used for the wordle game. They were programmatically generated from CS50's 'Speller' assignment and provide the words that players can guess in the game based on the chosen word length.
- [helpers.py](https://github.com/TheRedstoneRadiant/CS50-Wordy/blob/main/helpers.py): The helpers.py file includes three helper functions. The 'get_word' function retrieves a random word of a specified length from the corresponding dataset file. The 'word_exists' function checks if a word of a certain length exists in the corresponding dataset file. The 'length_check' function is a Flask wrapper that verifies the validity of the URL attribute 'length' for any API calls.
- [main.py](https://github.com/TheRedstoneRadiant/CS50-Wordy/blob/main/main.py): The main.py file contains the main Flask routing logic for the game. It renders index.html for the root domain and has a '/<length>_letters' route that renders wordle.html, passing the 'length' variable as a template variable to enable dynamic page rendering. The '/random_word/<length>' API endpoint calls the 'get_word' helper function to retrieve a word of the specified length
</details>

## Features:
- Choose between 5-letter, 6-letter, or 7-letter games.
- Random word generation based on the chosen difficulty level.
- Players can input their guesses and receive color indicators for feedback.
- Green tile indicates a correctly guessed letter in the correct position.
- Orange tile indicates a correctly guessed letter in the wrong position.
- Fully gray tile indicates that the letter does not exist in the random word.
- Mobile responsiveness for a seamless experience on mobile devices.

## Implemented Dictionaries
The dictionary that was provided by CS50's 'Speller' assignment was programmatically filtered to create three separate dictionaries: `words_5.txt`, `words_6.txt`, and `words_7.txt` to be loaded when the player chooses a difficulty.

## Technologies 
- Python: The main programming language used for the backend logic of the game.
- Flask: A web framework utilized to build the web application, handling routing, managing HTTP requests and responses, and rendering HTML templates.
- HTML/CSS: Used for creating the structure and styling of the web pages.
- JavaScript: Used to implement interactive features and handle user input.

## Setup

```bash
git clone https://github.com/TheRedstoneRadiant/CS50-Wordle

cd CS50-Wordle
python3 -m pip install -r requirements.txt
```

To run the application, execute `./run.sh` or `./debug.sh`.

## About CS50

David J. Malan is the instructor of the online Harvard course [CS50](https://cs50.harvard.edu/x/2023/), which serves as an introduction to the field of computer science and the craft of programming. This course teaches students how to approach problems algorithmically and effectively. The subjects covered in this course include resource management, security, software engineering, and web programming. The languages include HTML, CSS, JavaScript, Python, and SQL. Problem sets influenced by the social sciences, humanities, and sciences. The final project for the course serves as its conclusion.
