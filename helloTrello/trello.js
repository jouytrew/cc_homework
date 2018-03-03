// comments

const listOfBoards = {
    'Tester Board': {
      'To Do': ['Laundry',
                'Buy Apples',
                'Pay Phone Bill'],

      'Doing': ['Laundry',
                'Studying Javascript',
                'Studying HTML',
                'Studying Ruby'],

      'Done':  ['Laundry']
    },

    'Dreams': {
      'Wish List': ['Conquer the Seven Kingdoms', 'Get my baby back', 'My hand needs to chill'],
    }
};

displayBoard("Tester Board")
createList("Tester Board", "Test List")
createCard("Tester Board", "Test List", "Test Card")
console.log("\n");
displayBoard("Tester Board")
removeCard("Tester Board", "Test List", "Test Card")
createCard("Tester Board", "Test List", "HELLLLLOOO")
displayBoard("Tester Board")



// Functions
function listBoards() {
  console.log("-".repeat(18));
  let boardCounter = 0
  for(var boardName in listOfBoards) {
    boardCounter++;
    console.log("%s- %s\n%s", boardCounter, boardName, "-".repeat(18));
  }
}

function createBoard(boardName) {
  if(!(boardName in listOfBoards)) {
    listOfBoards[boardName] = {}
    console.log("Created new board %s", boardName);
  } else {
    console.log("%s already exists!", boardName);
  }
}

function removeBoard(boardName) {
  if (boardName in listOfBoards) {
    console.log("Removing %s", boardName);
    delete listOfBoards[boardName]
  }
}

function displayBoard(board) {
  if (board in listOfBoards) { // if it exists
    for(var list in listOfBoards[board]) {
      console.log("|%s\n| %s\n|%s", "-".repeat(20), list, "-".repeat(20));
      items = listOfBoards[board][list]
      for (var i = 0; i < items.length; i++) {
        console.log("|> %s", items[i]);
      }
    }
    console.log("|%s", "-".repeat(20));
  } else {
    console.log("Board does not exist");
  }
}

function createList(boardName, listName) {
  // check to see if the board exists
  if (boardName in listOfBoards) {
    board = listOfBoards[boardName]
    // check to see if the list already exists
    if (listName in board) {
      console.log("%s list already exists!", listName);
    } else { // can create list
      board[listName] = []
    }
  } else { // then it doesn't exist
    console.log("%s board does not exist!", boardName);
  }
}

function createCard(boardName, listName, cardName) {
  // check to see if the board exists
  if (boardName in listOfBoards) {
    board = listOfBoards[boardName]
    // check to see if the list already exists
    if (listName in board) {
      list = board[listName]
      list.push(cardName)
    } else {
      console.log("%s list does not exist!", listName);
    }
  } else { // then it doesn't exist
    console.log("%s board does not exist!", boardName);
  }
}

function removeList(boardName, listName) {
  if (boardName in listOfBoards) {
    board = listOfBoards[boardName]
    if (listName in board) {
      console.log("Removing %s", listName);
      delete board[listName]
    } else {
      console.log("The list does not exist");
    }
  } else {
    console.log("This board does not exist");
  }
}

function removeCard(boardName, listName, cardName) {
  if (boardName in listOfBoards) {
    board = listOfBoards[boardName]
    if (listName in board) {
      list = board[listName]
      if (list.includes(cardName)) {
        console.log("Removing %s", cardName);
        index = list.indexOf(cardName)
        list.splice(index, 1)
      } else {
        console.log("This card does not exist!");
      }
    } else {
      console.log("The list does not exist");
    }
  } else {
    console.log("This board does not exist");
  }
}
