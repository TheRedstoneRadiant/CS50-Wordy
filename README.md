# CS50 Wordy

This is [@TheRedstoneRadiant](https://github.com/TheRedstoneRadiant) and [@Atapa1908](Atapa1908)'s final project for [Harvard's CS50x](https://cs50.harvard.edu/x).

<img src="https://i.imgur.com/gmVfFOR.png" alt="CS50 Wordy" width="600">

## Live Demo: https://cs50-wordy.redstoneradiant.repl.co
## Video Demo: <>

## Project Description
Our final project to conclude CS50x is a web based game called 'Wordy', similar to the New York Times Wordle
(https://www.nytimes.com/games/wordle/index.html) game. 
Unlike Wordle, Wordy offers the player to choose between a 5-letter, 6-letter, or 7-letter game. 

Depending on the player's choice, a random word is loaded from the according dictionary, which the player will have to guess. The player inputs their valid guess, and after each guess, color indicators will appear providing the player information for the next guess. 

- A green tile indicates that the guessed letter is in the correct place of the random word.
- An orange tile indicates that the letter exists, but in a different place of the random word. 

## Implemented Dictionaries
The dictionary that was provided by CS50's 'Speller' assignment was programmatically filtered to create three separate dictionaries: `words_5.txt`, `words_6.txt`, and `words_7.txt` to be loaded when the player chooses a difficulty.

## Favicon
The website https://favicon.io has been consulted to generate the favicon utilized for this project.

## Web Development
The web framework, Flask, was utilized to build the web application, handling routing, managing HTTP requests and
responses, and rendering HTML templates. 

## Setup

```bash
git clone https://github.com/TheRedstoneRadiant/CS50-Wordle

cd CS50-Wordle
python3 -m pip install -r requirements.txt
```

To run the application, execute `./run.sh` or `./debug.sh`.