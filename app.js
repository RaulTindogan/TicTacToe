const bgMusic = document.createElement('audio')
bgMusic.src = 'assets/bgMusic.mp3'

const gameBoard = document.getElementById('board') 

// Create and Add Tiles to Board div
window.addEventListener('load', ()=> {
    let tile = ""
    let k = 1;
    for(k; k<=9; k++) {
        tile+=`
                <div class="tile" id="tile${k}"></div>
            `
    }
    gameBoard.innerHTML = tile  
})

const modal = document.getElementById('modal')
const playBtn = document.getElementById('play-btn')
const startContainer = document.getElementById('start')
const playerInfo = document.getElementById('playerInfo')

let board = ["","","","","","","","",""]

const pieces = {
    brook: '<img src="assets/brook-san.png" alt="" class="piece">',
    chopper: '<img src="assets/chopper-san.png" alt="" class="piece">',
    franky: '<img src="assets/franky-san.png" alt="" class="piece">',
    luffy: '<img src="assets/luffy-san.png" alt="" class="piece">',
    nami: '<img src="assets/nami-san.png" alt="" class="piece">',
    robin: '<img src="assets/robin-san.png" alt="" class="piece">',
    sanji: '<img src="assets/sanji-san.png" alt="" class="piece">',
    usopp: '<img src="assets/usopp-san.png" alt="" class="piece">',
    zoro: '<img src="assets/zoro-san.png" alt="" class="piece">',
}

const player1ScoreContainer = document.getElementById('player1Score')
const player2ScoreContainer = document.getElementById('player2Score')
const drawScoreContainer = document.getElementById('drawScore')

let moveCount = 0;
let gameOver = false;

let player1 = ""
let player2 = ""

let player1Score = 0
let player2Score = 0
let drawScore = 0

let currentPlayer = "X"
let currentPiece;



const winnerName = document.getElementById('winner-name')
const winnerPiece = document.getElementById('winner-piece')

const speakerContainer = document.getElementById('speaker')
const speaker1 = document.getElementById('speaker1')
const speaker2 = document.getElementById('speaker2')

speaker1.addEventListener('click', ()=>{
    bgMusic.pause()
    speaker1.style.display = 'none'
    speaker2.style.display = 'block'
})

speaker2.addEventListener('click', ()=>{
    bgMusic.play()
    speaker1.style.display = 'block'
    speaker2.style.display = 'none'
})

// Play Button (click)
playBtn.addEventListener('click', ()=>{
    speakerContainer.style.display='block'
    bgMusic.play()
    bgMusic.setAttribute('loop', true)
    startContainer.style.display = 'none'
    playerInfo.style.display = 'block'

    
    let tiles = document.querySelectorAll('.tile')

    // Loop the tiles and add an eventlistener to every tile div
    tiles.forEach((tile, index)=> {
        tile.addEventListener('click', ()=> {
            // It will check if the board[index] is empty and add value to it if the condition pass and return if not
            if(board[index] === "") {
                moveCount++
                board[index] = currentPlayer
                tile.innerHTML = currentPiece
                tile.firstElementChild.setAttribute('alt', currentPlayer)
                tile.style.pointerEvents = "none"
                checkPiece(currentPlayer)
                checkWinner()
                isOver()
            } else {
                return
            }
        })
    })
})

function checkPiece(x) {
    if(x==="X") {
        currentPlayer = "O"
        currentPiece = player2
    } else {
        currentPlayer = "X"
        currentPiece = player1
    } 
}

function displayWinner(player, piece) {
    if(player === 'Draw' && piece === 'Draw') {
        winnerName.innerHTML = "It's a Draw"
        winnerPiece.innerHTML = "<h2>Nice Try</h2>"
    } else {
        winnerName.innerHTML = "Winner is " + player
        winnerPiece.innerHTML = piece
    }   
}

function disableTiles() {
    let tiles = document.querySelectorAll('.tile')
    tiles.forEach(tile =>{
        tile.style.pointerEvents = 'none'
    }) 
}

function enableTiles() {
    let tiles = document.querySelectorAll('.tile')
    tiles.forEach(tile =>{
        tile.style.pointerEvents = 'all'
    }) 
}

function checkWinner() {

    if (board[0] === "X" && board[1] === "X" && board[2] === "X") {
        player1Score++
        player1ScoreContainer.innerHTML = `${player1Name} Score: ${player1Score}`
        gameOver = true;
        disableTiles()
        displayWinner(player1Name, player1)
        winnerClass(1)
        rematch()
    } else if (board[3] === "X" && board[4] === "X" && board[5] === "X") {
        player1Score++
        player1ScoreContainer.innerHTML = `${player1Name} Score: ${player1Score}`
        gameOver = true;
        disableTiles()
        displayWinner(player1Name, player1)
        winnerClass(2)
        rematch()
    } else if (board[6] === "X" && board[7] === "X" && board[8] === "X") {
        player1Score++
        player1ScoreContainer.innerHTML = `${player1Name} Score: ${player1Score}`
        gameOver = true;
        disableTiles()
        displayWinner(player1Name, player1)
        winnerClass(3)
        rematch()
    } else if (board[0] === "X" && board[3] === "X" && board[6] === "X") {
        player1Score++
        player1ScoreContainer.innerHTML = `${player1Name} Score: ${player1Score}`
        gameOver = true;
        disableTiles()
        displayWinner(player1Name, player1)
        winnerClass(4)
        rematch()
    } else if (board[1] === "X" && board[4] === "X" && board[7] === "X") {
        player1Score++
        player1ScoreContainer.innerHTML = `${player1Name} Score: ${player1Score}`
        gameOver = true;
        disableTiles()
        displayWinner(player1Name, player1)
        winnerClass(5)
        rematch()
    } else if (board[2] === "X" && board[5] === "X" && board[8] === "X") {
        player1Score++
        player1ScoreContainer.innerHTML = `${player1Name} Score: ${player1Score}`
        gameOver = true;
        disableTiles()
        displayWinner(player1Name, player1)
        winnerClass(6)
        rematch()
    } else if (board[0] === "X" && board[4] === "X" && board[8] === "X") {
        player1Score++
        player1ScoreContainer.innerHTML = `${player1Name} Score: ${player1Score}`
        gameOver = true;
        disableTiles()
        displayWinner(player1Name, player1)
        winnerClass(7)
        rematch()
    } else if (board[2] === "X" && board[4] === "X" && board[6] === "X") {
        player1Score++
        player1ScoreContainer.innerHTML = `${player1Name} Score: ${player1Score}`
        gameOver = true;
        disableTiles()
        displayWinner(player1Name, player1)
        winnerClass(8)
        rematch()
    } else if (board[0] === "O" && board[1] === "O" && board[2] === "O") {
        player2Score++
        player2ScoreContainer.innerHTML = `${player2Name} Score: ${player2Score}`
        gameOver = true;
        disableTiles()
        displayWinner(player2Name, player2)
        winnerClass(1)
        rematch()
    } else if (board[3] === "O" && board[4] === "O" && board[5] === "O") {
        player2Score++
        player2ScoreContainer.innerHTML = `${player2Name} Score: ${player2Score}`
        gameOver = true;
        disableTiles()
        displayWinner(player2Name, player2)
        winnerClass(2)
        rematch()
    } else if (board[6] === "O" && board[7] === "O" && board[8] === "O") {
        player2Score++
        player2ScoreContainer.innerHTML = `${player2Name} Score: ${player2Score}`
        gameOver = true;
        disableTiles()
        displayWinner(player2Name, player2)
        winnerClass(3)
        rematch()
    } else if (board[0] === "O" && board[3] === "O" && board[6] === "O") {
        player2Score++
        player2ScoreContainer.innerHTML = `${player2Name} Score: ${player2Score}`
        gameOver = true;
        disableTiles()
        displayWinner(player2Name, player2)
        winnerClass(4)
        rematch()
    } else if (board[1] === "O" && board[4] === "O" && board[7] === "O") {
        player2Score++
        player2ScoreContainer.innerHTML = `${player2Name} Score: ${player2Score}`
        gameOver = true;
        disableTiles()
        displayWinner(player2Name, player2)
        winnerClass(5)
        rematch()
    } else if (board[2] === "O" && board[5] === "O" && board[8] === "O") {
        player2Score++
        player2ScoreContainer.innerHTML = `${player2Name} Score: ${player2Score}`
        gameOver = true;
        disableTiles()
        displayWinner(player2Name, player2)
        winnerClass(6)
        rematch()
    } else if (board[0] === "O" && board[4] === "O" && board[8] === "O") {
        player2Score++
        player2ScoreContainer.innerHTML = `${player2Name} Score: ${player2Score}`
        gameOver = true;
        disableTiles()
        displayWinner(player2Name, player2)
        winnerClass(7)
        rematch()
    } else if (board[2] === "O" && board[4] === "O" && board[6] === "O") {
        player2Score++
        player2ScoreContainer.innerHTML = `${player2Name} Score: ${player2Score}`
        gameOver = true;
        disableTiles()
        displayWinner(player2Name, player2)
        winnerClass(8)
        rematch()
    } else {
       if (moveCount >= 9 && gameOver === false){
            drawScore++
            drawScoreContainer.innerHTML = "Draw(s): " + drawScore
            gameOver = true
            disableTiles()
            displayWinner('Draw', 'Draw')
            rematch()
       } 
       return
    }
}



const rematchContainer = document.getElementById('rematch-container')
const yesBtn = document.getElementById('yes')
const noBtn = document.getElementById('no')

function rematch() {
    setTimeout(() => {
        modal.style.display = 'flex'
        rematchContainer.style.display = 'flex'
    }, 1000);  
}

yesBtn.addEventListener('click', ()=>{
    board.forEach(element => {
        element = ""
    });
    
    let tiles = document.querySelectorAll('.tile')
    tiles.forEach((element, index) => {
        if(element.innerHTML = "") {
            return
        } else {
            element.classList.remove('winner')
            element.style.pointerEvents = "all" 
            board[index] = ""
            element.innerHTML = ""
        }
        modal.style.display = 'none'  
});

    // gameBoard.innerHTML = tile  
    gameBoard.classList.remove('gameOver')
    currentPlayer = 'O'
    checkPiece(currentPlayer)
    rematchContainer.style.display = 'none'
    moveCount = 0;
    gameOver = false
})

noBtn.addEventListener('click', ()=>{
    bgMusic.pause()
    bgMusic.currentTime = 0
    speaker1.style.display = 'block'
    speaker2.style.display = 'none'
    speakerContainer.style.display = 'none'
    player1Score = 0
    player2Score = 0
    drawScore = 0
    player1ScoreContainer.innerHTML = ''
    player2ScoreContainer.innerHTML = ''
    drawScoreContainer.innerHTML = ''
    player1InputContainer.style.display = "flex"
    player2InputContainer.style.display = "none"
    modal.style.display = 'flex'
    player1 = ''
    player2 = ''
    player1Input.value = ''
    player2Input.value = ''
    currentPlayer = 'X'
    rematchContainer.style.display = 'none'
    startContainer.style.display = 'flex'

    board.forEach(element => {
        element = ""
    });

    pieceTile.forEach(element =>{
        element.classList.remove('isChosen')
        element.classList.remove('isActive')
        element.style.pointerEvents = 'all'
    })
    
    
    let tiles = document.querySelectorAll('.tile')
    tiles.forEach((element, index) => {
        if(element.innerHTML = "") {
            return
        } else {
            element.classList.remove('winner')
            element.style.pointerEvents = "all" 
            board[index] = ""
            element.innerHTML = ""
        }
});

    gameBoard.classList.remove('gameOver')
    currentPlayer = 'O'
    checkPiece(currentPlayer)
    rematchContainer.style.display = 'none'
    moveCount = 0;
    gameOver = false
})

function isOver(x) {
    if (gameOver) {
     gameBoard.classList.add('gameOver')
    } 
    return
 }

function winnerClass(x) {
    let tile = document.querySelectorAll(".tile")

    switch(x) {
        case 1: 
            tile[0].classList.add('winner')
            tile[1].classList.add('winner')
            tile[2].classList.add('winner')
            break;
        case 2: 
            tile[3].classList.add('winner')
            tile[4].classList.add('winner')
            tile[5].classList.add('winner')
            break;
        case 3: 
            tile[6].classList.add('winner')
            tile[7].classList.add('winner')
            tile[8].classList.add('winner')
            break;
        case 4: 
            tile[0].classList.add('winner')
            tile[3].classList.add('winner')
            tile[6].classList.add('winner')
            break;
        case 5: 
            tile[1].classList.add('winner')
            tile[4].classList.add('winner')
            tile[7].classList.add('winner')
            break;
        case 6: 
            tile[2].classList.add('winner')
            tile[5].classList.add('winner')
            tile[8].classList.add('winner')
            break;
        case 7: 
            tile[0].classList.add('winner')
            tile[4].classList.add('winner')
            tile[8].classList.add('winner')
            break;
        case 8: 
            tile[2].classList.add('winner')
            tile[4].classList.add('winner')
            tile[6].classList.add('winner')
            break;
    }
}

const pieceHolder = document.getElementById('pieceHolder')
let player1Name = "";
let player2Name = ""
const enterBtn = document.getElementById('enter')
let pieceChose = 0;

let player1Input = document.getElementById('p1Name')
let player2Input = document.getElementById('p2Name')

const confirmContainer = document.getElementById('confirmInfo-container')
const confirmPlayerName = document.getElementById('playerName')
const confirmPlayerPiece = document.getElementById('playerPiece')
const confirmBtn = document.getElementById('confirmCreds')
const cancelBtn = document.getElementById('cancel')
let enterClick = 0;

const player1InputContainer = document.getElementById('container-for-player1')
const player2InputContainer = document.getElementById('container-for-player2')


const errorContainer = document.getElementById('error-container')
const errorMessage = document.getElementById('error')
const okBtn = document.getElementById('ok')

okBtn.addEventListener('click', ()=> {
    errorContainer.style.display = "none"
    playerInfo.style.display = 'block'
})

cancelBtn.addEventListener('click', ()=>{
    playerInfo.style.display = 'block'
    if(enterClick === 1) {
        player1Name = ""
        player1 = ""
        enterClick = 0
        document.getElementById('p1Name').value = ""
    } else {
        player2Name = ""
        player2 = ""
        enterClick = 1;
        document.getElementById('p2Name').value = ""
    } 
    confirmContainer.style.display='none'
})

function showErrorContainer(error) {
    errorContainer.style.display = "flex"
    errorMessage.innerHTML = error
    playerInfo.style.display = 'none'
}

enterBtn.addEventListener('click', enterPlayer)

function enterPlayer() {
    if(enterClick === 0) {
        if(player1Input.value === "" || pieceChose === 0) {
            showErrorContainer('Please Enter Your Name and Choose Piece')
        } else {
            playerInfoFunc(1);
            pieceChose = 0
            enterClick = 1
        }     
    } else {
        if(player2Input.value === "" || pieceChose === 0) {
            showErrorContainer('Please Enter Your Name and Choose Piece')
        } else {
            playerInfoFunc(2);
            pieceChose = 0
            enterClick = 0
        }
    }   
}

function playerInfoFunc(num) {
    if(num === 1) {
        player1Name = player1Input.value
        switch(pieceChose) {
            case 1:
                player1 = pieces.brook
                break;
            case 2:
                player1 = pieces.chopper
                break;
            case 3:
                player1 = pieces.franky
                break;
            case 4:
                player1 = pieces.luffy
                break;
            case 5:
                player1 = pieces.nami
                break;
            case 6:
                player1 = pieces.robin
                break;
            case 7:
                player1 = pieces.sanji
                break;
            case 8:
                player1 = pieces.usopp
                break;
            case 9:
                player1 = pieces.zoro
        }
        currentPiece = player1
        openConfirmContainer();
    } else {
        player2Name = player2Input.value
        switch(pieceChose) {
            case 1:
                player2 = pieces.brook
                break;
            case 2:
                player2 = pieces.chopper
                break;
            case 3:
                player2 = pieces.franky
                break;
            case 4:
                player2 = pieces.luffy
                break;
            case 5:
                player2 = pieces.nami
                break;
            case 6:
                player2 = pieces.robin
                break;
            case 7:
                player2 = pieces.sanji
                break;
            case 8:
                player2 = pieces.usopp
                break;
            case 9:
                player2 = pieces.zoro
        }
        openConfirmContainer();
    }
}

function openConfirmContainer() {
    confirmContainer.style.display = 'flex'
    playerInfo.style.display = 'none'
    if(enterClick === 0) {
        confirmPlayerName.innerHTML = player1Name
        confirmPlayerPiece.innerHTML = player1
    } else {
        confirmPlayerName.innerHTML = player2Name
        confirmPlayerPiece.innerHTML = player2
    }
}

let bonePiece

confirmBtn.addEventListener('click', ()=>{
    playerInfo.style.display = 'block'
    if(enterClick === 1) {
        player1InputContainer.style.display = "none"
        player2InputContainer.style.display = "flex"
        confirmContainer.style.display = 'none'
        bonePiece.classList.add('isChosen')
    } else {
        player2InputContainer.style.display = "none"
        confirmContainer.style.display = 'none'
        modal.style.display = 'none'
        playerInfo.style.display = 'none'
        player1ScoreContainer.innerHTML = `${player1Name} Score: ${player1Score}`
        player2ScoreContainer.innerHTML = `${player2Name} Score: ${player2Score}`
        drawScoreContainer.innerHTML = `Draw(s): ${drawScore}`
    }
    bonePiece.style.pointerEvents = "none"
})



let pieceTile = document.querySelectorAll('.pieceTile')

pieceTile.forEach((element, index)=>{
    element.addEventListener('click', ()=> {
        pieceChose = index + 1
        bonePiece = element
        addActive(index)
    })
})

function addActive(num) {
    let i = 0
    for(i; i<pieceTile.length; i++) {
        if( i===num ) {
            pieceTile[i].classList.add('isActive')
        } else {
            pieceTile[i].classList.remove('isActive')
        }
    }
}
