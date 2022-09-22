
export function getBoardSizeByDifficulty(difficulty) {
    switch (difficulty) {
        case 'easy': return 5;
        case 'medium': return 10;
        case 'hard': return 15;
        case 'expert': return 20;
        default: return 10;
    }
}

// status:
// 0 - empty, no action
// 1 - black cell
// 2 - after action, cell empty
export function generateRandomBoard(size) {
    const board = [];
    for(let i = 0; i < size; i++) {
        const row = [];
        for(let j = 0; j < size; j++) {
            const shouldBeFilled = Math.random() > 0.4;
            const cell = { i, j, status: 0, shouldBeFilled };
            row.push(cell);
        }
        board.push(row);
    }
    return board;
}

export function getHintsArrFromCellsArr(cellsArr) {
    let currentCount = 0;
    const hintsArr = [];
    for (let i = 0; i < cellsArr.length; i++) {
        if (cellsArr[i]) { // this current cell should be filled
            currentCount++;
        } else if (currentCount !== 0) { // this current cell should NOT be filled
            hintsArr.push(currentCount);
            currentCount = 0;
        }
    }
    if (currentCount !== 0) { // this current cell should NOT be filled
        hintsArr.push(currentCount);
    }
    return hintsArr;
}

export function isBoardCleared(board) {
    let isBoardCleared = true;
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if (board[i][j].shouldBeFilled && board[i][j].status !== 1) {
                isBoardCleared = false;
            }
        }
    }
    return isBoardCleared;
}

export function resetBoard(board) {
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            board[i][j].status = 0;
        }
    }
    return board;
}
