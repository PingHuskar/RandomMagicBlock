const BOARD = document.querySelector('.board')
const BLOCKCOLORS =  ["blue","red","yellow","green","orange","white"]

const RESETBOARD = () => {
    BOARD.innerHTML = ``
}

const GENBOARD = () => {
    let newBoard = []
    for (let i = 0; i < 4; i++) {
        for (let BLOCKCOLOR of BLOCKCOLORS) {
            newBoard.push(BLOCKCOLOR)
        }
    }
    return newBoard
}

const SHUFFLEBOARD = (newBoard) => {
    return newBoard.sort((a, b) => 0.5 - Math.random());
}

const DISPLAYNEWBOARD = (newRandomBoard) => {
    for (let eachBoardRow = 0; eachBoardRow < 5; eachBoardRow++) {
        let thisRow = newRandomBoard.splice(0, 5);
        let thisRowElement = document.createElement("div")
        for (let block of thisRow) {
            let div = document.createElement("div")
            div.className = block
            thisRowElement.append(div)
        }
        BOARD.appendChild(thisRowElement)
    }
}
const RandomBoard = () => {
    RESETBOARD()
    const newBoard = GENBOARD()
    const newRandomBoard = SHUFFLEBOARD(newBoard)
    DISPLAYNEWBOARD(newRandomBoard)
}

document.getElementById("random").addEventListener("click", RandomBoard)
RandomBoard()