const rowCount = 6;

let rows = [];
let currentRow = 0;
let currentChar = 0;
let errorTimeout;
let blockInput;
let revealInterval;

const getRandomWord = async (length) => {
  const response = await fetch(`/random_word/${length}`);
  return await response.text();
};

let guessWord;

// Fetch random guessWord
getRandomWord(charCount).then((randomWord) => {
  guessWord = randomWord;
});

const renderRows = () => {
  const wordle = document.getElementById("wordle");

  // Amount of rows
  for (let i = 0; i < rowCount; i++) {
    // Create row element
    let row = document.createElement("div");
    row.setAttribute("id", `row${i}`);
    row.classList.add("row");

    // Amount of chars
    for (let i = 0; i < charCount; i++) {
      // Create chars element
      let char = document.createElement("div");
      char.setAttribute("id", `char${i}`);
      char.classList.add("char");
      char.classList.add("unselected-char");

      // Append as child to row
      row.appendChild(char);
    }

    // Add to rows array
    rows.push(row);

    // Append row to wordle element
    wordle.appendChild(row);
  }
};

const getCurrentChar = (currentRow, currentChar) => {
  return rows[currentRow].querySelector(`#char${currentChar}`);
};

const shakeRow = () => {
  rows[currentRow].animate(
    [
      // keyframes
      { transform: "translateX(0px)" },
      { transform: "translateX(10px)" },
      { transform: "translateX(0px)" },
      { transform: "translateX(-10px)" },
      { transform: "translateX(0px)" },
    ],
    {
      // timing options
      duration: 150,
      iterations: 4,
    }
  );
};

const verifyWordExists = async (word) => {
  const response = await fetch(`/word_exists/${charCount}?word=${word}`);
  return (await response.text()) === "True";
};

const renderError = (error) => {
  if (errorTimeout) {
    clearInterval(errorTimeout);
  }

  const errorElement = document.getElementById("error");

  errorElement.innerHTML = error;
  errorElement.classList.add("visible");

  errorTimeout = setTimeout(() => {
    errorElement.classList.remove("visible");

    errorTimeout = null;
  }, 2000);
};

const endGame = (win) => {
  const endGameElement = document.getElementById("gameOver");
  const result = document.getElementById("gameResult");
  const wordResult = document.getElementById("wordResult");

  endGameElement.classList.add("visible");
  result.innerHTML = `You ${win ? "win" : "lose"}!`;
  wordResult.innerHTML = `The word was: ${guessWord.toUpperCase()}`;
};

const updateLetter = (charElement, i) => {
  const charValue = charElement.innerHTML.toLowerCase();

  if (guessWord[i] == charValue) {
    charElement.classList.add("valid-guess");
  } else if (guessWord.includes(charValue)) {
    charElement.classList.add("partial-guess");
  } else {
    charElement.classList.add("invalid-guess");
  }
};

const handleSubmit = () => {
  if (currentChar < charCount) {
    shakeRow();
    return renderError("Not enough letters");
  }

  let word = "";

  const charElementsInRow = rows[currentRow].querySelectorAll("div");
  for (const charElement of charElementsInRow) {
    word += charElement.innerHTML.toLowerCase();
  }

  let result;

  verifyWordExists(word).then((wordExists) => {
    result = wordExists;

    if (!result) {
      shakeRow();
      renderError("Not in word list");
    } else {
      blockInput = true;

      currentRow += 1;
      currentChar = 0;

      let i = 0;

      const flipChar = () => {
        if (i >= charCount - 1) {
          clearInterval(revealInterval);
        }

        const charElement = charElementsInRow[i];

        charElement.classList.add("flip");

        setTimeout(updateLetter, 250, charElement, i);
        i += 1;
      };

      flipChar();
      revealInterval = setInterval(flipChar, 250);

      setTimeout(() => {
        if (word === guessWord) {
          endGame(true);
        } else if (currentRow >= rowCount) {
          endGame(false);
        } else {
          blockInput = false;
        }
      }, 250 * charCount);
    }
  });
};

const handleBackspace = () => {
  currentChar -= 1;
  const currentCharElement = getCurrentChar(currentRow, currentChar);

  currentCharElement.innerHTML = "";
  currentCharElement.classList.remove("selected-char");
  currentCharElement.classList.add("unselected-char");
};

const keypress = (event) => {
  if (blockInput) return;

  // Enter is pressed
  else if (event.key === "Enter") {
    return handleSubmit();
  }

  // Backspace is pressed
  else if (event.key === "Backspace" && currentChar > 0) {
    return handleBackspace();
  }

  // Row is full
  else if (currentChar >= charCount) {
    return;
  }

  // Ignore if ctrl or win key held
  else if (event.ctrlKey || event.metaKey) return;

  // Ignore non letter keypresses
  else if (!(event.key.length === 1 && event.key.match(/^[a-zA-Z]$/))) return;

  const currentCharElement = getCurrentChar(currentRow, currentChar);
  currentChar += 1;

  currentCharElement.innerHTML = event.key.toUpperCase();
  currentCharElement.classList.remove("unselected-char");
  currentCharElement.classList.add("selected-char");
};

const simulateKeyPress = (event) => {
  const key = event.target.id;

  if (key === "Backspace") {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Backspace" }));
  } else {
    document.dispatchEvent(new KeyboardEvent("keydown", { key }));
  }
};

document.body.onload = renderRows;
document.addEventListener("keydown", keypress);

// Keyboard logic
const keyboardButtons = document.querySelectorAll(".keyboardRow > button");
for (const keyboardButton of keyboardButtons) {
  keyboardButton.addEventListener("click", simulateKeyPress);
}

document.querySelector("i").onclick = (e) => {e.target.parentElement.click()};
