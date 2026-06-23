function GameBoard() {
    let board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]       
    ];

    let full = false;

    const checkWin= () => {
        let horizString = "";
        let vertString = ["", "", ""];
        let diagString  = "";
        let diagString2 = ""
        let diagCounter = 0;
        let diagCounter2 = 2;
        // Loop through borad and check each row, stop loop
        // if no two markers match
        for (let row = 0; row < board.length; row++) {
            //vertString += board[row];
            for (let col = 0; col < board[row].length; col++) {
                horizString += board[row][col];
                vertString[col] += board[row][col] + "";
                if (col == diagCounter && row == diagCounter) {
                    diagString += board[row][col];
                    diagCounter++;

                }

                if (Math.abs(col - row) == 2 || (row == 1 && col == 1))  {
                    diagString2 += board[row][col];
                    diagCounter2--;
                }

                if (row == board[row].length - 1) {
                // Once you get to the last row, you can check for if the
                // vertical win condition is met
                    console.log(vertString[col]);
                    if (vertString[col] == "XXX" ||  vertString[col] == "OOO") {
                        return vertString[col][0];
                    }
                    
                }   
            }
            if (horizString == "XXX" || horizString =="OOO") {
                return horizString[0];
            }
            horizString = "";

        }

        if (diagString == "XXX" || diagString == "OOO")  {
            return diagString[0];
        }

        if (diagString2 == "XXX" || diagString2 == "OOO")  {
            return diagString2[0];
        }
        return null;


    }


    const newBoard = () => {
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                board[row][col] = null;
            }
        }
    }

    return { board, checkWin, newBoard};
        

};



function Player(name, marker) {
    return { name , marker };
}

// Displays whats on the board currently
function DisplayController() {
    // Draws the board onto the console
    const drawBoard = (gameBoard) => {
        // loop through the game board and
        // draw out each value of the board with a space
        // between it onto the

        for (let row = 0; row < gameBoard.board.length; row++) {
            for (let col = 0; col < gameBoard.board[row].length; col++) {
                // Display the number that must be inputed to add to the cell
                // if the gameBoard is null
                let button = document.getElementById(row + "" + col).firstElementChild;
                if (gameBoard.board[row][col] == null) {
                    button.textContent = "";
                } else {
                    button.textContent = gameBoard.board[row][col] + "";
                }
            }   
        }

        
    };

    return { drawBoard };
}

// Contains the gameloop for the game.
function Game() {
    let gameBoard = GameBoard();
    let displayBoard = DisplayController(gameBoard); 
    let player1 = Player(null, "X");
    let player2 = Player(null, "O");
    let turn = true;
    let win;
    let gridSize = 0;
    let turnDiv = document.getElementById("turns");


        // Add actionlisters to each button that corrresponds to a space 
    // on the grid on the dom
    const addActionListeners = () => {
        for (let row = 0; row < gameBoard.board.length; row++) {
            for (let col = 0; col < gameBoard.board[row].length; col++) {
                let button = document.getElementById(row + "" + col).firstElementChild;
                console.log(button);
                button.addEventListener("click", (event) => {
                    if (gameBoard.board[row][col] == null) {
                        if (turn == true) {
                            gameBoard.board[row][col] = player1.marker;
                            //button.textContent = player1.marker;
                            updateDOM(gameBoard, row, col);
                            turn  = !turn;
                            gridSize++;
                        } else {
                            gameBoard.board[row][col] = player2.marker;
                            //button.textContent = player2.marker;
                            updateDOM(gameBoard, row, col);
                            turn  = !turn;
                            gridSize++;
                        }

                        gameLoop();
                    }
                });
            }
        }
    };

    // Resets the game
    const resetGame = () => {

    }

    function updateDOM(gameBoard, row, col) {
        // given the row and the column that the user inputs
        // retrieve the value from the gameboard
        // place that value into the place in the grid
        
        let id = row + "" + col;
        let input = gameBoard.board[row][col];
        let cell = document.getElementById(id).firstElementChild;
        console.log(input);
        console.log(id); 
        console.log(cell);
        cell.textContent = input;
    };
    const startGame = () => {
        const player1Name = document.getElementById("player1").value;
        const player2Name = document.getElementById("player2").value;

        player1.name = player1Name;
        player2.name = player2Name;

        addActionListeners();

        gameLoop();
    };

    const stopGame = () => {
        // restarts the game. When button is clicked to retry, clears
        // the board.
    };
    
    const gameLoop = () => {


        console.log(`${player1.name} vs ${player2.name}`)
        if (turn) {
            turns.textContent = `${player1.name}'s turn!`;
        } else {
            turns.textContent = `${player2.name}'s turn!`;
        }
        win = gameBoard.checkWin();
        displayBoard.drawBoard(gameBoard);
        if (win != null) {
            if (win == "X") {
                turns.textContent = `${player1.name} wins!`;
            } else {
                turns.textContent = `${player2.name} wins!`;
            }
            gameBoard.newBoard();
            displayBoard.drawBoard(gameBoard);
            gridSize = 0;
            turn = true;
            win = null;
        } else if (gridSize == 9) {
            console.log("Its a tie!");
            gameBoard.newBoard();
            displayBoard.drawBoard();
        }    
    };

    return { startGame };
};

function interactWithDOM() {

}

// Running the game;

// Retrive the players names after clicking start button, then start 
tictactoe =  Game();

let startButton = document.getElementById("startGame");

startButton.addEventListener("click", (event) => {
    tictactoe.startGame();      
}); 

