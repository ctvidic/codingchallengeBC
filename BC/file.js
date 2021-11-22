//Problem 1: Blind Mice

var blindMice = function (string) {
    let splitString = string.split('C')
    if (splitString.length !== 2) {
        return 'Need exactly one cheese'
    }
    let left = splitString[0].split('')
    let right = splitString[1].split('')

    let i = 0;
    let count = 0;
    while (i < left.length) {
        if (left[i] === 'M' && left[i + 1] === '~') {
            count++;
            i += 2;
        } else if (left[i] === '~' && left[i + 1] === 'M') {
            i += 2;
        } else {
            i++;
        }
    }

    let j = 0
    while (j < right.length) {
        if (right[j] === '~' && right[j + 1] === 'M') {
            count++;
            j += 2;
        } else if (right[j] === 'M' && right[j + 1] === '~') {
            j += 2;
        } else {
            j++;
        }
    }
    return count
}


//Problem 2: TicTacToe

var ticTacToe = function (string) {
    var won = function (board) {
        let cols = [[], [], []]
        let rows = []
        let diagDown = []
        let diagUp = []
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (col === row) {
                    diagDown.push(board[col][row])
                }
                if ((col === 1 && row === 1) || (col === 0 && row === 2) || (row === 0 && col === 2)) {
                    diagUp.push(board[col][row])
                }
                cols[col].push(board[row][col])
            }
            if (board[row].join('') === 'XXX' || board[row].join('') === 'OOO') {

                return true
            }
        }
        for (let i = 0; i < cols.length; i++) {
            if (cols[i].join('') === 'XXX' || cols[i].join('') === 'OOO') {
                return true
            }
        }
        if (diagDown.join('') === 'XXX' || diagUp.join('') === 'OOO') {

            return true
        }
        return false
    }


    let boardArr = string.split('\n');

    if (boardArr.length !== 3) {
        return 'Invalid Board'
    }
    let board = []
    for (let i = 0; i < boardArr.length; i++) {
        let row = boardArr[i].split('')
        board.push(row)
    }
    if (won(board) || won(board)) {
        return [0, 0]
    }

    let countX = 0;
    let countO = 0;

    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            if (board[x][y] === ' ') {
                let boardCopy = board.slice();
                boardCopy[x][y] = 'O'
                if (won(boardCopy)) {
                    countO++
                }
                boardCopy[x][y] = 'X'
                if (won(boardCopy)) {
                    countX++
                }
                boardCopy[x][y] = ' '
            }
        }
    }
    return [countX, countO]
}


//Problem 3: Race Time

var raceTime = function (array) {
    let timesMins = []
    let maxTime = 0
    for (let i = 0; i < array.length; i++) {
        let time = array[i]['time']
        if (time === 'dnf') {
            continue
        }
        let splitTime = time.split(':')
        let seconds = (+splitTime[0]) * 60 * 60 + (+splitTime[1]) * 60 + (+splitTime[2]);
        timesMins.push([seconds, array[i]['name']])
    }
    if (timesMins.length === 1) {
        return `${timesMins[0][1]} won by no contest`
    } else if (timesMins.length === 0) {
        return 'There is no winner'
    }
    timesMins.sort((a, b) => a[0] - b[0])
    let diff = timesMins[timesMins.length - 1][0] - timesMins[timesMins.length - 2][0]
    let hrs = Math.floor(diff / (60 * 60))
    let mins = Math.floor((diff - (hrs * 3600)) / 60);
    let secs = diff - (hrs * 3600) - (mins * 60);
    return `${timesMins[timesMins.length - 1][1]} won by ${hrs} hours, ${mins} minutes, and ${secs} seconds`
}