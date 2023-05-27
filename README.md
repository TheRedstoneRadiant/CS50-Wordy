## CS50 Wordy

This is [@TheRedstoneRadiant](https://github.com/TheRedstoneRadiant) and [@Atapa1908](Atapa1908)'s final project for [Harvard's CS50](https://cs50.harvard.edu).

# Project Description
Our final project to conclude CS50 is a web based game called 'Wordy', similar to the New York Times Wordle
(https://www.nytimes.com/games/wordle/index.html) game. 
Unlike Wordle, Wordy offers the player to choose between a 5-letter, 6-letter, or 5-letter. Depending on the player's
choice a random word is loaded from the according dictionary, which the player will have to guess. The player inputs
their valid length, depending on the game chosen, word to guess the word. After each guess, color indicators will
appear providing the player information for the next guess. A green tile indicates that the guessed letter is in the
correct place of the random word. An orange tile indicates that the letter exists, but in a different place of the
random word. 

# Favicon
The website https://favicon.io has been consulted to generate the favicon utilized for this project.

# Web Development
The web framework, Flask, was utilized to build web applications, handling routing, managing HTTP requests and responses, and rendering HTML templates. 

# Setup

```bash
git clone https://github.com/TheRedstoneRadiant/CS50-Wordle

cd CS50-Wordle
python3 -m pip install -r requirements.txt
```

Run `./run.sh` OR `./debug.sh`
