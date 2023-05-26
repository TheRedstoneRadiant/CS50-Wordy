const rowCount = 6;

let rows = [];
let currentRow = 0;
let currentChar = 0;

const getRandomWord = async (length) => {
  const response = await fetch(`/random_word/${length}`);
  return await response.text();
}

// let guessWord;

// // Fetch random guessWord
// getRandomWord.then(randomWord => {
//   guessWord = randomWord;
// })

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

      // Add to rows array
      rows.push(row);
    }

    // Append row to wordle element
    wordle.appendChild(row);
  }
};

const getCurrentChar = (currentRow, currentChar) => {
  return rows[currentRow].querySelector(`#char${currentChar}`);
}

const handleSubmit = () => {
  let word = "";

  const charElementsInRow = rows[currentRow].querySelectorAll("div");
  for (const charElement of charElementsInRow) {
    word += charElement.innerHTML;
  }

  console.log(word);
}

const handleBackspace = () => {
  currentChar -= 1;
  const currentCharElement = getCurrentChar(currentRow, currentChar);
  
  currentCharElement.innerHTML = "";
  currentCharElement.classList.remove("selected-char");
  currentCharElement.classList.add("unselected-char");
}

const keypress = (event) => {
  // Enter is pressed
  if (event.keyCode === 13) {
    return handleSubmit();
  }

  // Backspace is pressed
  else if (event.keyCode === 8 && currentChar > 0) {
    return handleBackspace();
  }

  // Row is full
  else if (currentChar >= charCount) {
    return;
  }

  // Ignore if ctrl or win key held
  if (event.ctrlKey || event.metaKey) return;

  // Ignore non letter keypresses
  if (!(event.key.length === 1 && event.key.match(/^[a-zA-Z]$/))) return;

  const currentCharElement = getCurrentChar(currentRow, currentChar);
  currentChar += 1;

  currentCharElement.innerHTML = event.key.toUpperCase();
  currentCharElement.classList.remove("unselected-char");
  currentCharElement.classList.add("selected-char");
}

document.body.onload = renderRows;
document.addEventListener("keydown", keypress);
