import regulamentation from "./regulamentation.js"
import warning from "./warning.js"

const screenSettings = document.getElementById('screen-settings')
const screenMain = document.getElementById('screen-main')
const screenGame = document.getElementById('screen-game')
const screenPerformance = document.getElementById('screen-performance')
const screenChallenge = document.getElementById('screen-challenge')
const screenBoards = document.getElementById('screen-boards')
const screenFeedback = document.getElementById('screen-feedback')
const screenCongratulation = document.getElementById('screen-congratulation')
const screenGameChallenge = document.getElementById('screen-play-challenge')

const mainBoards = document.getElementById('main-boards')
const mainSettings = document.getElementById('main-settings')
const backSettings = document.getElementById('back-settings')
const mainPerformance = document.getElementById('main-performance')
const homeInBoards = document.getElementById('home-in-boards')
const backBoards = document.getElementById('back-boards')
const homeInSettings = document.getElementById('home-in-settings')
const homeInPerformance = document.getElementById('home-in-performance')
const backPerformance = document.getElementById('back-performance')
const backCongratulation = document.getElementById('back-congratulation')
const mainEffect = document.getElementById('main-base-effect')
const titleEffect = document.getElementById('title-effect')
const homeInChallenge = document.getElementById('home-in-challenge')

const startBtnC = document.getElementById('main-play-challenge')
const startBtn = document.getElementById('main-play')
const lineEffect = document.getElementById('line-effect')
const deleteHistoric = document.getElementById('reset-game')

const boardTypeR = document.getElementById('board-type-r')
const boardTypeW = document.getElementById('board-type-w')
const typeR = document.getElementById('type-R')
const typeW = document.getElementById('type-W')
const amountTitleB = document.getElementById('amount-title-b')
const boardsRP = document.getElementById('boards-r-p')
const boardsWP = document.getElementById('boards-w-p')
const boardsGame = document.getElementById('boards-game')
let boardImage = document.getElementById('board-image-challenge')
let boardName = document.getElementById('board-name-challenge')
let boardCode = document.getElementById('board-code-challenge')
let boardNameGame = document.getElementById('board-name')
const blockPanel = document.getElementById('block-panel')
const blockPanelB = document.getElementById('block-panel-b')
const blockPanelC = document.getElementById('block-panel-c')
const settingsGame = document.getElementById('settings-game')
const pointError1 = document.getElementById('points-error1')
const pointError2 = document.getElementById('points-error2')
const textFail = document.getElementById('id-text-fail')
const inforFail = document.getElementById('id-infor-fail')
const fail = document.getElementById('fail')
const textOk = document.getElementById('id-text-ok')
const correct = document.getElementById('correct')
const typeComplete = document.getElementById('type-complete')
const strawberry = document.getElementById('img-strawberry')
const star = document.getElementById('img-star')
const listLevel = document.getElementById('list-level')
const boardNameTitle = document.getElementById('board-name-title')
const nameBoardChallenge = document.getElementById('boards-game-challenge')
const challengePanelTop = document.getElementById('challenge-panel-top')
const answer = document.getElementById('answer-board')
const answerBoard = document.getElementById('img-answer-board')
const answerName = document.getElementById('name-answer-board')
const sinal1 = document.getElementById('sinal-1')
const sinal2 = document.getElementById('sinal-2')
const difficulty1 = document.getElementById('difficulty-1')
const difficulty2 = document.getElementById('difficulty-2')
const intro = document.getElementById('intro')
let audioOk = []
audioOk[0] = new Audio()
audioOk[1] = new Audio()
audioOk[2] = new Audio()
audioOk[3] = new Audio()
audioOk[4] = new Audio()
for (let i = 0; i < 5; i++)
    audioOk[i].src = './audios/ok.wav'
let k
let audioError = []
audioError[0] = new Audio()
audioError[1] = new Audio()
audioError[2] = new Audio()
for (let i = 0; i < 3; i++)
    audioError[i].src = './audios/wrong.wav'
let t
const audioWin = new Audio()
audioWin.src = './audios/win.wav'
const audioLose = new Audio()
audioLose.src = './audios/lose.wav'
const audioMouse = new Audio()
audioMouse.src = './audios/mouse.wav'
const audioBack = new Audio()
audioBack.src = './audios/back.wav'
const shutter = new Audio()
shutter.src = './audios/shutter.wav'
const booster = new Audio()
booster.src = './audios/booster.wav'
const victory = new Audio()
victory.src = './audios/victory.wav'
const historic = {
    points: 0,
    idPoints: document.getElementById('historic-points'),
    hits: 0,
    idHits: document.getElementById('historic-hits'),
    errors: 0,
    idErrors: document.getElementById('historic-errors'),
    hours: 0,
    idHours: document.getElementById('historic-hours'),
    minutes: 0,
    idMinutes: document.getElementById('historic-minutes'),
    seconds: 0,
    idSeconds: document.getElementById('historic-seconds')
}
historic.idPoints.innerHTML = 0
historic.idHits.innerHTML = 0
historic.idErrors.innerHTML = 0
historic.idHours.innerHTML = '00'
historic.idMinutes.innerHTML = '00'
historic.idSeconds.innerHTML = '00'
let changeCategory = {
    id: document.getElementById('change-category'),
    key: 0
}
var intervalIntroLeft
var intervalIntroHide
let typeB
let countB1 = 0
let countB2 = 0
let countC1 = 0
let countC2 = 0
let codeB1 = []
let codeB2 = []
let auxElement
var rBoards = []
var wBoards = []
var userRBoards = []
var userWBoards = []
var challengeRBoards = []
var challengeWBoards = []
var boardsChallenge = []
var boards = []
let boardsLevel = 12
var barColor = []
for (let i = 0; i < 9; i++) {
    boardsChallenge.push({
        board: document.getElementById(`c${i + 1}`),
        stateUse: false,
        checked: false
    })
}
var intervalStartGame
var intervalResetGameBoard
var intervalGameBoard
var intervalPlayGame
var intervalWaitBoard
var intervalStartNextRound
var intervalIntroductionBoard
var intervalFailFeedback
var intervalOkFeedback
var intervalGameChallenge
var intervalNextChallenge
let hour = 0
let minute = 0
let second = 0
let millisecond = 0
let cron
let levels = []
levels.push({
    level: 'normal',
    selected: true,
    countR: 0,
    countW: 0,
})
levels.push({
    level: 'hard',
    selected: false,
    countR: 0,
    countW: 0
})
let boardElement = []
for (let i = 0; i < 2; i++) {
    boardElement.push({
        id: '',
        name: '',
        code: '',
        url: '',
        description: '',
        newBoard: true
    })
}
let boardElementChallenge = []
for (let i = 0; i < 3; i++) {
    boardElementChallenge.push({
        name: '',
        code: '',
        url: '',
        newBoard: true
    })
}
let hits
let errors
let lifes = []
var count = 0
let pointsBar
let completed = false
let errorCard
let data = {
    cB1: 0,
    cB2: 0,
    points: 0,
    hits: 0,
    erros: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    category: 0,
    level1S: true,
    level1CR: 0,
    level1CW: 0,
    level2S: false,
    level2CR: 0,
    level2CW: 0,
    codeAB1: [],
    codeAB2: [],
}
let dataString
regulamentation(rBoards)
warning(wBoards)
userRBoards = createNewVetorRBoards(userRBoards)
userWBoards = createNewVetorWBoards(userWBoards)
challengeRBoards = createNewVetorRBoards(challengeRBoards)
challengeWBoards = createNewVetorWBoards(challengeWBoards)
configureBarColor()
configureLifes()
configurePointsBar()
createBoardsList()
loadData()
createListLevel()
window.addEventListener("load", () => {
    intervalIntroLeft = setInterval(introLeft, 3000)
})
// INICIO INTRO
// window.addEventListener("click", () => {
//     intervalIntroLeft = setInterval(introLeft, 500)
// })
startBtnC.addEventListener('click', () => {
    titleEffect.classList.add('title-left')
    mainEffect.classList.add('screen-main-left')
    audioMouse.play()
    intervalGameChallenge = setInterval(gameChallenge, 1300)
})
function introLeft() {
    clearInterval(intervalIntroLeft)
    intro.classList.add("intro-left");
    intervalIntroHide = setInterval(introHide, 1200);
}
function introHide() {
    clearInterval(intervalIntroHide)
    intro.classList.add("intro-hide");
}
function gameChallenge() {
    clearInterval(intervalGameChallenge)
    screenMain.classList.add('display-off')
    screenGameChallenge.classList.remove('display-off')
    titleEffect.classList.remove('title-left')
    mainEffect.classList.remove('screen-main-left')
    configureGameChallenge()
}
function configureGameChallenge() {
    if (changeCategory.key == 1) {
        if (boardElementChallenge[0].newBoard == true) {
            if (challengeRBoards.length > 0) {
                boardElementChallenge[0] = challengeRBoards.shift()
                boardElementChallenge[0].newBoard = false
            }
            else {
                for (let i = 0; i < rBoards.length; i++)
                    challengeRBoards.push(rBoards[i])
                challengeRBoards.sort(() => Math.random() - 0.5)
                boardElementChallenge[0] = challengeRBoards.shift()
                boardElementChallenge[0].newBoard = false
            }
            if (countC1 == 51)
                countC1 = 0
            nameBoardChallenge.innerHTML = `${countC1 + 1}/51`
        }
        boardNameTitle.innerText = boardElementChallenge[0].name
    }
    else if (changeCategory.key == 2) {
        if (boardElementChallenge[1].newBoard == true) {
            if (challengeWBoards.length > 0) {
                boardElementChallenge[1] = challengeWBoards.shift()
                boardElementChallenge[1].newBoard = false
            }
            else {
                for (let i = 0; i < wBoards.length; i++)
                    challengeWBoards.push(wBoards[i])
                challengeWBoards.sort(() => Math.random() - 0.5)
                boardElementChallenge[1] = challengeWBoards.shift()
                boardElementChallenge[1].newBoard = false
            }
            if (countC2 == 69)
                countC2 = 0
            nameBoardChallenge.innerHTML = `${countC2 + 1}/69`
        }
        boardNameTitle.innerText = boardElementChallenge[1].name
    }
    for (let i = 0; i < 9; i++) {
        boardsChallenge[i].stateUse = false
        boardsChallenge[i].checked = false
    }
    let auxValue
    let auxNewBoard
    let countI = 0
    while (countI < 9) {
        if (changeCategory.key == 1) {
            auxValue = Math.floor(Math.random() * (rBoards.length - 1))
            auxNewBoard = rBoards[auxValue]
            if (auxNewBoard.id != boardElementChallenge[0].id) {
                boardElementChallenge[3] = rBoards[auxValue]
                fillChallengeBoard(false, countI)
                countI++
            }
        }
        else if (changeCategory.key == 2) {
            auxValue = Math.floor(Math.random() * (wBoards.length - 1))
            auxNewBoard = wBoards[auxValue]
            if (auxNewBoard.id != boardElementChallenge[1].id) {
                boardElementChallenge[3] = wBoards[auxValue]
                fillChallengeBoard(false, countI)
                countI++
            }
        }
    }
    let position = Math.floor(Math.random() * (10 - 1))
    fillChallengeBoard(true, position)
    playChallenge()
}
function fillChallengeBoard(key, item) {
    switch (item) {
        case 0: if (key == true) {
            boardsChallenge[0].stateUse = true
            boardsChallenge[0].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElementChallenge[0].url}')` : `url('${boardElementChallenge[1].url}')`
        }
        else if (key == false && boardsChallenge[0].stateUse == false)
            boardsChallenge[0].board.style.backgroundImage = `url('${boardElementChallenge[3].url}')`
            break;
        case 1: if (key == true) {
            boardsChallenge[1].stateUse = true
            boardsChallenge[1].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElementChallenge[0].url}')` : `url('${boardElementChallenge[1].url}')`
        }
        else if (key == false && boardsChallenge[0].stateUse == false)
            boardsChallenge[1].board.style.backgroundImage = `url('${boardElementChallenge[3].url}')`
            break;
        case 2: if (key == true) {
            boardsChallenge[2].stateUse = true
            boardsChallenge[2].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElementChallenge[0].url}')` : `url('${boardElementChallenge[1].url}')`
        }
        else if (key == false && boardsChallenge[0].stateUse == false)
            boardsChallenge[2].board.style.backgroundImage = `url('${boardElementChallenge[3].url}')`
            break;
        case 3: if (key == true) {
            boardsChallenge[3].stateUse = true
            boardsChallenge[3].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElementChallenge[0].url}')` : `url('${boardElementChallenge[1].url}')`
        }
        else if (key == false && boardsChallenge[0].stateUse == false)
            boardsChallenge[3].board.style.backgroundImage = `url('${boardElementChallenge[3].url}')`
            break;
        case 4: if (key == true) {
            boardsChallenge[4].stateUse = true
            boardsChallenge[4].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElementChallenge[0].url}')` : `url('${boardElementChallenge[1].url}')`
        }
        else if (key == false && boardsChallenge[0].stateUse == false)
            boardsChallenge[4].board.style.backgroundImage = `url('${boardElementChallenge[3].url}')`
            break;
        case 5: if (key == true) {
            boardsChallenge[5].stateUse = true
            boardsChallenge[5].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElementChallenge[0].url}')` : `url('${boardElementChallenge[1].url}')`
        }
        else if (key == false && boardsChallenge[0].stateUse == false)
            boardsChallenge[5].board.style.backgroundImage = `url('${boardElementChallenge[3].url}')`
            break;
        case 6: if (key == true) {
            boardsChallenge[6].stateUse = true
            boardsChallenge[6].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElementChallenge[0].url}')` : `url('${boardElementChallenge[1].url}')`
        }
        else if (key == false && boardsChallenge[0].stateUse == false)
            boardsChallenge[6].board.style.backgroundImage = `url('${boardElementChallenge[3].url}')`
            break;
        case 7: if (key == true) {
            boardsChallenge[7].stateUse = true
            boardsChallenge[7].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElementChallenge[0].url}')` : `url('${boardElementChallenge[1].url}')`
        }
        else if (key == false && boardsChallenge[0].stateUse == false)
            boardsChallenge[7].board.style.backgroundImage = `url('${boardElementChallenge[3].url}')`
            break;
        case 8: if (key == true) {
            boardsChallenge[8].stateUse = true
            boardsChallenge[8].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElementChallenge[0].url}')` : `url('${boardElementChallenge[1].url}')`
        }
        else if (key == false && boardsChallenge[0].stateUse == false)
            boardsChallenge[8].board.style.backgroundImage = `url('${boardElementChallenge[3].url}')`
            break;
    }
}
function playChallenge() {
    for (let i = 0; i < 9; i++) {
        boardsChallenge[i].board.addEventListener('click', () => {
            if (boardsChallenge[i].stateUse && !boardsChallenge[i].checked) {
                boardsChallenge[i].checked = true
                if (changeCategory.key == 1) {
                    boardElementChallenge[0].newBoard = true
                    countC1++
                }
                else if (changeCategory.key == 2) {
                    boardElementChallenge[1].newBoard = true
                    countC2++
                }
                feedbackChallenge(true)
            }
            else if (!boardsChallenge[i].stateUse && !boardsChallenge[i].checked) {
                boardsChallenge[i].checked = true
                if (changeCategory.key == 1)
                    boardElementChallenge[0].newBoard = false
                else if (changeCategory.key == 2)
                    boardElementChallenge[1].newBoard = false
                feedbackChallenge(false)
            }
        })
    }
}
function feedbackChallenge(value) {
    if (value == true) {
        audioOk[0].play()
        challengePanelTop.classList.remove('panel-default')
        challengePanelTop.classList.add('panel-correct')
        boardNameTitle.innerText = 'CERTO!'
        boardNameTitle.classList.remove('challenge-title')
        boardNameTitle.classList.add('ok-text')
        blockPanelB.classList.add('block-panel-c-on')
        intervalNextChallenge = setInterval(nextPlayChallenge, 1300)
    }
    else {
        audioError[0].play()
        challengePanelTop.classList.remove('panel-default')
        challengePanelTop.classList.add('panel-wrong')
        boardNameTitle.innerText = 'A Placa Certa é'
        boardNameTitle.classList.remove('challenge-title')
        boardNameTitle.classList.add('error-text')
        blockPanelC.classList.add('block-panel-dark')
        blockPanelC.classList.remove('display-off')
        answerBoard.src = changeCategory.key == 1 ?
            `${boardElementChallenge[0].url}` : `${boardElementChallenge[1].url}`
        answerName.innerText = changeCategory.key == 1 ?
            `${boardElementChallenge[0].name}` : `${boardElementChallenge[1].name}`
        intervalNextChallenge = setInterval(nextPlayChallenge, 5000)
    }
}
function nextPlayChallenge() {
    clearInterval(intervalNextChallenge)
    challengePanelTop.classList.remove('panel-correct')
    challengePanelTop.classList.remove('panel-wrong')
    challengePanelTop.classList.add('panel-default')
    boardNameTitle.classList.add('challenge-title')
    boardNameTitle.classList.remove('ok-text')
    boardNameTitle.classList.remove('error-text')
    blockPanelB.classList.remove('block-panel-c-on')
    blockPanelC.classList.remove('block-panel-dark')
    blockPanelC.classList.add('display-off')
    answer.classList.add('display-off')
    configureGameChallenge()
}
startBtn.addEventListener("click", () => {
    completed = false
    startLife()
    configureCurrentBoard()
    if (changeCategory.key == 1)
        boardsGame.innerHTML = `${countB1}/51`
    else if (changeCategory.key == 2)
        boardsGame.innerHTML = `${countB2}/69`
    titleEffect.classList.add('title-left')
    mainEffect.classList.add('screen-main-left')
    audioMouse.play()
    count = 0
    changeBgColor()
    lineEffect.classList.remove('line-boosters-on')
    changeBgBarColor()
    // completed = true para testar vitoria
    // completed = true
    intervalIntroductionBoard = setInterval(introductionBoard, 1300)
});
function introductionBoard() {
    clearInterval(intervalIntroductionBoard)
    screenMain.classList.add('display-off')
    screenChallenge.classList.remove('display-off')
    intervalStartGame = setInterval(startGame, 5000);
}
function startGame() {
    clearInterval(intervalStartGame)
    startLife()
    if (changeCategory.key == 1)
        boardsGame.innerHTML = `${countB1 + 1}/51`
    else if (changeCategory.key == 2)
        boardsGame.innerHTML = `${countB2 + 1}/69`
    screenChallenge.classList.add('display-off')
    screenGame.classList.remove('display-off')
    blockPanel.classList.add('block-panel-on')
    intervalGameBoard = setInterval(gameBoard, 2000)
}
function gameBoard() {
    clearInterval(intervalGameBoard)
    let numberChallenge = 0
    //1 - pegar todas as casas do tabuleiro
    if (levels[0].selected) {
        boardsLevel = 12
        numberChallenge = 4
    }
    else if (levels[1].selected) {
        boardsLevel = 20
        numberChallenge = 5
    }
    for (let i = 0; i < boardsLevel; i++) {
        boards[i].stateUse = false
        boards[i].checked = false
    }
    //2 - pegar as posicoes aleatorias para enviar fotos
    let positions = []
    let valor = Math.floor(Math.random() * (boardsLevel - 1));
    positions.push(valor)

    do {
        valor = Math.floor(Math.random() * (boardsLevel - 1));
        let found = positions.find(x => x == valor)

        if (found == undefined)
            positions.push(valor)

    } while (positions.length < numberChallenge)
    //3 - preencher o tabuleiro
    positions.forEach(item => {
        fillGameBoard(true, item)
    })
    for (let i = 0; i < boardsLevel; i++)
        fillGameBoard(false, i)
    shutter.play()
    intervalResetGameBoard = setInterval(resetGameBoard, 2000)
}
function fillGameBoard(key, item) {
    boards[item].board.classList.toggle('flip')
    switch (item) {
        case 0: if (key == true) {
            boards[0].board.classList.toggle('flip')
            boards[0].stateUse = true;
            boards[0].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElement[0].url}')` : `url('${boardElement[1].url}')`
            boards[0].board.classList.add('element-img')
        }
        else if (key == false && boards[0].stateUse == false)
            boards[0].board.classList.add(errorCard)
            break;

        case 1: if (key == true) {
            boards[1].board.classList.toggle('flip')
            boards[1].stateUse = true;
            boards[1].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElement[0].url}')` : `url('${boardElement[1].url}')`
            boards[1].board.classList.add('element-img')
        }
        else if (key == false && boards[1].stateUse == false)
            boards[1].board.classList.add(errorCard)
            break;

        case 2: if (key == true) {
            boards[2].board.classList.toggle('flip')
            boards[2].stateUse = true;
            boards[2].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElement[0].url}')` : `url('${boardElement[1].url}')`
            boards[2].board.classList.add('element-img')
        }
        else if (key == false && boards[2].stateUse == false)
            boards[2].board.classList.add(errorCard)
            break;

        case 3: if (key == true) {
            boards[3].board.classList.toggle('flip')
            boards[3].stateUse = true;
            boards[3].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElement[0].url}')` : `url('${boardElement[1].url}')`
            boards[3].board.classList.add('element-img')
        }
        else if (key == false && boards[3].stateUse == false)
            boards[3].board.classList.add(errorCard)
            break;

        case 4: if (key == true) {
            boards[4].board.classList.toggle('flip')
            boards[4].stateUse = true;
            boards[4].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElement[0].url}')` : `url('${boardElement[1].url}')`
            boards[4].board.classList.add('element-img')
        }
        else if (key == false && boards[4].stateUse == false)
            boards[4].board.classList.add(errorCard)
            break;

        case 5: if (key == true) {
            boards[5].board.classList.toggle('flip')
            boards[5].stateUse = true;
            boards[5].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElement[0].url}')` : `url('${boardElement[1].url}')`
            boards[5].board.classList.add('element-img')
        }
        else if (key == false && boards[5].stateUse == false)
            boards[5].board.classList.add(errorCard)
            break;

        case 6: if (key == true) {
            boards[6].board.classList.toggle('flip')
            boards[6].stateUse = true;
            boards[6].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElement[0].url}')` : `url('${boardElement[1].url}')`
            boards[6].board.classList.add('element-img')
        }
        else if (key == false && boards[6].stateUse == false)
            boards[6].board.classList.add(errorCard)
            break;

        case 7: if (key == true) {
            boards[7].board.classList.toggle('flip')
            boards[7].stateUse = true;
            boards[7].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElement[0].url}')` : `url('${boardElement[1].url}')`
            boards[7].board.classList.add('element-img')
        }
        else if (key == false && boards[7].stateUse == false)
            boards[7].board.classList.add(errorCard)
            break;

        case 8: if (key == true) {
            boards[8].board.classList.toggle('flip')
            boards[8].stateUse = true;
            boards[8].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElement[0].url}')` : `url('${boardElement[1].url}')`
            boards[8].board.classList.add('element-img')
        }
        else if (key == false && boards[8].stateUse == false)
            boards[8].board.classList.add(errorCard)
            break;

        case 9: if (key == true) {
            boards[9].board.classList.toggle('flip')
            boards[9].stateUse = true;
            boards[9].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElement[0].url}')` : `url('${boardElement[1].url}')`
            boards[9].board.classList.add('element-img')
        }
        else if (key == false && boards[9].stateUse == false)
            boards[9].board.classList.add(errorCard)
            break;

        case 10: if (key == true) {
            boards[10].board.classList.toggle('flip')
            boards[10].stateUse = true;
            boards[10].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElement[0].url}')` : `url('${boardElement[1].url}')`
            boards[10].board.classList.add('element-img')
        }
        else if (key == false && boards[10].stateUse == false)
            boards[10].board.classList.add(errorCard)
            break;

        case 11: if (key == true) {
            boards[11].board.classList.toggle('flip')
            boards[11].stateUse = true;
            boards[11].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElement[0].url}')` : `url('${boardElement[1].url}')`
            boards[11].board.classList.add('element-img')
        }
        else if (key == false && boards[11].stateUse == false)
            boards[11].board.classList.add(errorCard)
            break;
        case 12: if (key == true) {
            boards[12].board.classList.toggle('flip')
            boards[12].stateUse = true;
            boards[12].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElement[0].url}')` : `url('${boardElement[1].url}')`
            boards[12].board.classList.add('element-img')
        }
        else if (key == false && boards[12].stateUse == false)
            boards[12].board.classList.add(errorCard)
            break;
        case 13: if (key == true) {
            boards[13].board.classList.toggle('flip')
            boards[13].stateUse = true;
            boards[13].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElement[0].url}')` : `url('${boardElement[1].url}')`
            boards[13].board.classList.add('element-img')
        }
        else if (key == false && boards[13].stateUse == false)
            boards[13].board.classList.add(errorCard)
            break;
        case 14: if (key == true) {
            boards[14].board.classList.toggle('flip')
            boards[14].stateUse = true;
            boards[14].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElement[0].url}')` : `url('${boardElement[1].url}')`
            boards[14].board.classList.add('element-img')
        }
        else if (key == false && boards[14].stateUse == false)
            boards[14].board.classList.add(errorCard)
            break;
        case 15: if (key == true) {
            boards[15].board.classList.toggle('flip')
            boards[15].stateUse = true;
            boards[15].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElement[0].url}')` : `url('${boardElement[1].url}')`
            boards[15].board.classList.add('element-img')
        }
        else if (key == false && boards[15].stateUse == false)
            boards[15].board.classList.add(errorCard)
            break;
        case 16: if (key == true) {
            boards[16].board.classList.toggle('flip')
            boards[16].stateUse = true;
            boards[16].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElement[0].url}')` : `url('${boardElement[1].url}')`
            boards[16].board.classList.add('element-img')
        }
        else if (key == false && boards[16].stateUse == false)
            boards[16].board.classList.add(errorCard)
            break;
        case 17: if (key == true) {
            boards[17].board.classList.toggle('flip')
            boards[17].stateUse = true;
            boards[17].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElement[0].url}')` : `url('${boardElement[1].url}')`
            boards[17].board.classList.add('element-img')
        }
        else if (key == false && boards[17].stateUse == false)
            boards[17].board.classList.add(errorCard)
            break;
        case 18: if (key == true) {
            boards[18].board.classList.toggle('flip')
            boards[18].stateUse = true;
            boards[18].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElement[0].url}')` : `url('${boardElement[1].url}')`
            boards[18].board.classList.add('element-img')
        }
        else if (key == false && boards[18].stateUse == false)
            boards[18].board.classList.add(errorCard)
            break;
        case 19: if (key == true) {
            boards[19].board.classList.toggle('flip')
            boards[19].stateUse = true;
            boards[19].board.style.backgroundImage = changeCategory.key == 1 ?
                `url('${boardElement[0].url}')` : `url('${boardElement[1].url}')`
            boards[19].board.classList.add('element-img')
        }
        else if (key == false && boards[19].stateUse == false)
            boards[19].board.classList.add(errorCard)
            break;
    }
}
//4 - limpar o tabuleiro
function resetGameBoard() {
    clearInterval(intervalResetGameBoard)
    for (let i = 0; i < boardsLevel; i++) {
        boards[i].board.classList.toggle('flip')
        boards[i].board.classList.remove(errorCard)
        boards[i].board.style.backgroundImage = "";
        boards[i].board.classList.remove('element-img')
    }
    shutter.play()
    intervalPlayGame = setInterval(playGame, 100)
}
function playGame() {
    startTimer();
    clearInterval(intervalPlayGame)
    errors = 0
    hits = 0
    k = 0
    t = 0
    blockPanel.classList.remove('block-panel-on')
    for (let i = 0; i < boardsLevel; i++) {
        boards[i].board.addEventListener('click', () => {
            if (boards[i].stateUse && !boards[i].checked) {
                boards[i].checked = true
                boards[i].board.classList.toggle('flip')
                boards[i].board.lastElementChild.style.backgroundImage = changeCategory.key == 1 ?
                    `url('${boardElement[0].url}')` : `url('${boardElement[1].url}')`
                boards[i].board.lastElementChild.classList.add('element-img')
                count++
                changePointsInBar(true)
                changeBgColor()
                changeBgBarColor()
                hits++
                audioOk[k].play()
                k++

                if (levels[0].selected) {
                    if (hits == 4)
                        correctHits()
                }
                else if (levels[1].selected) {
                    if (hits == 5)
                        correctHits()
                }
            }
            else if (!boards[i].stateUse && !boards[i].checked) {
                lineEffect.classList.remove('line-boosters-on')
                errors++
                audioError[t].play()
                t++
                if (errors >= 3) {
                    blockPanel.classList.add('block-panel-on')
                    if (changeCategory.key == 1)
                        boardElement[0].newBoard = false
                    else if (changeCategory.key == 2)
                        boardElement[1].newBoard = false
                }
                boards[i].checked = true
                boards[i].board.classList.toggle('flip')
                boards[i].board.lastElementChild.classList.add(errorCard)
                count = 0
                changePointsInBar(false)
                changeBgColor()
                changeBgBarColor()
                changeLife()
            }
        })
    }
}
function correctHits() {
    blockPanel.classList.add('block-panel-on')
    if (changeCategory.key == 1)
        boardElement[0].newBoard = true
    else if (changeCategory.key == 2)
        boardElement[1].newBoard = true
    fillBoardsList()
    intervalWaitBoard = setInterval(feedbackRound, 1000, true)
}
function feedbackRound() {
    clearInterval(intervalWaitBoard)
    boardNameGame.classList.add('visibility-off')
    if (errors >= 3)
        intervalFailFeedback = setInterval(failFeedback, 1300)
    else
        intervalOkFeedback = setInterval(okFeedback, 100)
}
function okFeedback() {
    clearInterval(intervalOkFeedback)
    audioWin.play()
    screenFeedback.classList.remove('display-off')
    correct.classList.remove('display-off')
    correct.classList.add('ok-effect-on')
    textOk.classList.add('text-ok-on')
    intervalStartNextRound = setInterval(startNextRound, 4000)
}
function failFeedback() {
    clearInterval(intervalFailFeedback)
    audioLose.play()
    screenFeedback.classList.remove('display-off')
    fail.classList.remove('display-off')
    textFail.classList.add('text-fail-on')
    inforFail.classList.add('infor-fail-on')
    intervalStartNextRound = setInterval(startNextRound, 4000)
}
function startNextRound() {
    clearInterval(intervalStartNextRound)
    configureCurrentBoard()
    if (completed == true)
        congratulation()
    else {
        screenFeedback.classList.add('display-off')
        correct.classList.add('display-off')
        correct.classList.remove('ok-effect-on')
        textOk.classList.remove('text-ok-on')
        fail.classList.add('display-off')
        textFail.classList.remove('text-fail-on')
        inforFail.classList.remove('infor-fail-on')
        screenChallenge.classList.remove('display-off')
        screenGame.classList.add('display-off')
        boardNameGame.classList.remove('visibility-off')
        intervalStartGame = setInterval(startGame, 4000);
    }
}
function changeLife() {
    if (lifes[1].state) {
        lifes[1].state = false
        lifes[1].life.classList.remove('life-on')
        lifes[1].life.classList.add('life-off')
    }
    else if (lifes[0].state) {
        lifes[0].state = false
        lifes[0].life.classList.remove('life-on')
        lifes[0].life.classList.add('life-off')
    }
    else
        intervalWaitBoard = setInterval(feedbackRound, 1200, false)
}
function startLife() {
    lifes[1].state = true
    lifes[1].life.classList.remove('life-off')
    lifes[1].life.classList.add('life-on')
    lifes[0].state = true
    lifes[0].life.classList.remove('life-off')
    lifes[0].life.classList.add('life-on')
}
function changePointsInBar(key) {
    if (key) {
        if (pointsBar.pointsBar.classList == 'text-bar-effect') {
            pointsBar.pointsBar.classList.remove('text-bar-effect')
            pointsBar.pointsBar.classList.add('text-bar-effect-1')
        }
        else if (pointsBar.pointsBar.classList == 'text-bar-effect-1') {
            pointsBar.pointsBar.classList.remove('text-bar-effect-1')
            pointsBar.pointsBar.classList.add('text-bar-effect')
        }
        if (count < 4) {
            pointsBar.points += 10
            historic.points += 10
        }
        else if (count < 6) {
            pointsBar.points += 20
            historic.points += 20
        }
        else if (count < 8) {
            pointsBar.points += 30
            historic.points += 30
        }
        else if (count < 10) {
            pointsBar.points += 40
            historic.points += 40
        }
        else {
            pointsBar.points += 50
            historic.points += 50
            lineEffect.classList.add('line-boosters-on')
        }
        historic.hits += 1
    }
    else {
        pointsBar.points -= 100
        if (pointsBar.points <= 0)
            pointsBar.points = 0

        if (!pointError1.classList.contains('text-bar-effect-2')) {
            pointError1.classList.add('text-bar-effect-2')
            pointError1.classList.add('bar-effect-off')
            pointError2.classList.remove('text-bar-effect-3')
            pointError2.classList.remove('bar-effect-off')
        }
        else if (pointError1.classList.contains('text-bar-effect-2')) {
            pointError2.classList.add('text-bar-effect-3')
            pointError2.classList.add('bar-effect-off')
            pointError1.classList.remove('text-bar-effect-2')
            pointError1.classList.remove('bar-effect-off')
        }
        historic.errors += 1
    }
    pointsBar.pointsBar.innerText = pointsBar.points
}
function changeBgBarColor() {
    switch (count) {
        case 0:
            for (let i = 0; i < barColor.length; i++) {
                if (i < 3)
                    barColor[i].classList.remove('element-bg1')
                else if (i < 5)
                    barColor[i].classList.remove('element-bg2')
                else if (i < 7)
                    barColor[i].classList.remove('element-bg3')
                else if (i < 9)
                    barColor[i].classList.remove('element-bg4')
                else
                    barColor[i].classList.remove('element-bg5')
                barColor[i].classList.add('mini-off')
            }
            break;
        case 1:
            barColor[0].classList.remove('mini-off')
            barColor[0].classList.add('element-bg1')
            break;
        case 2:
            barColor[1].classList.remove('mini-off')
            barColor[1].classList.add('element-bg1')
            break;
        case 3:
            barColor[2].classList.remove('mini-off')
            barColor[2].classList.add('element-bg1')
            break;
        case 4:
            barColor[3].classList.remove('mini-off')
            barColor[3].classList.add('element-bg2')
            break;
        case 5:
            barColor[4].classList.remove('mini-off')
            barColor[4].classList.add('element-bg2')
            break;
        case 6:
            barColor[5].classList.remove('mini-off')
            barColor[5].classList.add('element-bg3')
            break;
        case 7:
            barColor[6].classList.remove('mini-off')
            barColor[6].classList.add('element-bg3')
            break;
        case 8:
            barColor[7].classList.remove('mini-off')
            barColor[7].classList.add('element-bg4')
            break;
        case 9:
            barColor[8].classList.remove('mini-off')
            barColor[8].classList.add('element-bg4')
            break;
        default:
            barColor[9].classList.remove('mini-off')
            barColor[9].classList.add('element-bg5')
            break;
    }
}
function changeBgColor() {
    for (let i = 0; i < boardsLevel; i++) {
        boards[i].board.classList.remove('element-bg0')
        boards[i].board.classList.remove('element-bg1')
        boards[i].board.classList.remove('element-bg2')
        boards[i].board.classList.remove('element-bg3')
        boards[i].board.classList.remove('element-bg4')
        boards[i].board.classList.remove('element-bg5')
    }
    if (count < 1) {
        for (let i = 0; i < boardsLevel; i++)
            boards[i].board.classList.add('element-bg0')
    }
    else if (count < 4) {
        for (let i = 0; i < boardsLevel; i++)
            boards[i].board.classList.add('element-bg1')
    }
    else if (count < 6) {
        for (let i = 0; i < boardsLevel; i++)
            boards[i].board.classList.add('element-bg2')
    }
    else if (count < 8) {
        for (let i = 0; i < boardsLevel; i++)
            boards[i].board.classList.add('element-bg3')
    }
    else if (count < 10)
        for (let i = 0; i < boardsLevel; i++) {
            boards[i].board.classList.add('element-bg4')
        }
    else {
        if (count == 10)
            booster.play()
        for (let i = 0; i < boardsLevel; i++)
            boards[i].board.classList.add('element-bg5')
    }
}
//inicio cronometro
function startTimer() {
    pauseTimer();
    cron = setInterval(() => { timer(); }, 10);
}
function pauseTimer() {
    clearInterval(cron);
}
function resetTimer() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    historic.idHours.innerHTML = '00'
    historic.idMinutes.innerHTML = '00'
    historic.idSeconds.innerHTML = '00'
    historic.hours = '00'
    historic.minutes = '00'
    historic.seconds = '00'
}
function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    historic.idHours.innerHTML = returnData(hour)
    historic.idMinutes.innerHTML = returnData(minute)
    historic.idSeconds.innerHTML = returnData(second)
}
function returnData(input) {
    return input >= 10 ? input : `0${input}`
}
//fim cronometro
function recoverHistoric() {
    boardsRP.innerText = `${countB1}/51`
    boardsWP.innerText = `${countB2}/69`
    historic.idPoints.innerText = historic.points
    historic.idHits.innerText = historic.hits
    historic.idErrors.innerText = historic.errors
    //USO PARA TESTE DE CONCLUSÃO DO JOGO, comentar placas também
    // if (levels[0].countR >= 1 && levels[0].countW >= 1)
    if (levels[0].countR >= 51 && levels[0].countW >= 69)
        strawberry.src = './images/strawberryOn.png'
    else
        strawberry.src = './images/strawberryOff.png'
    // strawberry.src = './images/strawberryOn.png'
    // if (levels[1].countR >= 1 && levels[1].countW >= 1)
    if (levels[1].countR == 51 && levels[1].countW >= 69)
        star.src = './images/starOnGold.png'
    else
        star.src = './images/starOff.png'
    // star.src = './images/starOnGold.png'
}
function configureLifes() {
    lifes.push({
        life: document.getElementById('life-1'),
        state: true
    })
    lifes.push({
        life: document.getElementById('life-2'),
        state: true
    })
}
function configurePointsBar() {
    pointsBar = ({
        pointsBar: document.getElementById('points-bar'),
        points: 0
    })
}
function configureBarColor() {
    for (let i = 0; i < 10; i++) {
        barColor[i] = document.getElementById(`b${i + 1}`)
    }
}
function reFillBoardsList() {
    typeB = document.getElementById(`${auxElement.id}`)
    typeB.innerHTML = `<li id="${auxElement.id}">
        <div class="list-elements-on mt-10">
            <div class="infor-elements">
                <img src="${auxElement.url}" class="img-list">
                    <div class="ml-10">
                        <p class="text-title">${auxElement.name}</p>
                        <p class="text-sub-title mt-10">${auxElement.code}</p>
                    </div>
                </div>
            <div>
            <p class="t-description mt-10">${auxElement.description}</p>
        </div>            
        </li>`
}
function fillBoardsList() {
    if (changeCategory.key == 1) {
        typeB = document.getElementById(`${boardElement[0].id}`)
        typeB.innerHTML = `<li id="${boardElement[0].id}">
        <div class="list-elements-on mt-10">
            <div class="infor-elements">
                <img src="${boardElement[0].url}" class="img-list">
                    <div class="ml-10">
                        <p class="text-title">${boardElement[0].name}</p>
                        <p class="text-sub-title mt-10">${boardElement[0].code}</p>
                    </div>
                </div>
            <div>
            <p class="t-description mt-10">${boardElement[0].description}</p>
        </div>            
        </li>`
        if (countB1 < 51)
            countB1++
        codeB1.push(boardElement[0].id)
    }
    else if (changeCategory.key == 2) {
        typeB = document.getElementById(`${boardElement[1].id}`)
        typeB.innerHTML = `<li id="${boardElement[1].id}">
        <div class="list-elements-on mt-10">
            <div class="infor-elements">
                <img src="${boardElement[1].url}" class="img-list">
                    <div class="ml-10">
                        <p class="text-title">${boardElement[1].name}</p>
                        <p class="text-sub-title mt-10">${boardElement[1].code}</p>
                    </div>
                </div>
            <div>
            <p class="t-description mt-10">${boardElement[1].description}</p>
        </div>            
        </li>`
        if (countB2 < 69)
            countB2++
        codeB2.push(boardElement[1].id)
    }
}
function createBoardsList() {
    amountTitleB.innerHTML = `0/51`
    for (let i = 1; i <= 51; i++) {
        typeR.innerHTML += `<li id=rb${i}>
        <div class="list-elements-off mt-10">
        <img src="./images/boardROff.png" class="img-list">
        <div class="ml-10">
            <p class="text-title mt-5">Bloqueado</p>
        </div>
        </div>
    </li>`
    }
    for (let i = 1; i <= 69; i++) {
        typeW.innerHTML += `<li id=wb${i}>
        <div class="list-elements-off mt-10">
        <img src="./images/boardWOff.png" class="img-list">
        <div class="ml-10">
            <p class="text-title mt-5">Bloqueado</p>
        </div>
        </div>
    </li>`
    }
}
function configureCurrentBoard() {
    if (changeCategory.key == 1) {
        if (boardElement[0].newBoard == true) {
            if (userRBoards.length > 0) {
                boardElement[0] = userRBoards.shift()
                boardElement[0].newBoard = false
                currentBoard(boardElement[0])
                if (levels[0].selected)
                    levels[0].countR += 1
                else if (levels[1].selected)
                    levels[1].countR += 1
            }
            else {
                createNewVetorRBoards(userRBoards)
                completed = true
            }
        }
        else
            currentBoard(boardElement[0])
    }
    else if (changeCategory.key == 2)
        if (boardElement[1].newBoard == true) {
            if (userWBoards.length > 0) {
                boardElement[1] = userWBoards.shift()
                boardElement[1].newBoard = false
                currentBoard(boardElement[1])
                if (levels[0].selected)
                    levels[0].countW += 1
                else if (levels[1].selected)
                    levels[1].countW += 1
            }
            else {
                createNewVetorWBoards(userWBoards)
                completed = true
            }
        }
        else
            currentBoard(boardElement[1])
    for (let i = 0; i < boardsLevel; i++) {
        boards[i].board.classList.add('flip')
        boards[i].board.lastElementChild.classList.remove(errorCard)
        boards[i].board.lastElementChild.style.backgroundImage = "";
        boards[i].board.lastElementChild.classList.remove('element-img')
    }
}
function currentBoard(atualBoard) {
    boardImage.src = atualBoard.url
    boardName.innerText = atualBoard.name
    boardCode.innerText = atualBoard.code
    boardNameGame.innerText = atualBoard.name
}
function createNewVetorRBoards(newUserRBoards) {
    for (let i = 0; i < rBoards.length; i++) {
        newUserRBoards.push(rBoards[i])
    }
    newUserRBoards.sort(() => Math.random() - 0.5)
    return newUserRBoards
}
function createNewVetorWBoards(newUserWBoards) {
    for (let i = 0; i < wBoards.length; i++) {
        newUserWBoards.push(wBoards[i])
    }
    newUserWBoards.sort(() => Math.random() - 0.5)
    return newUserWBoards
}
homeInBoards.addEventListener('click', () => {
    audioBack.play()
    screenMain.classList.remove('display-off')
    screenBoards.classList.add('display-off')
})
backBoards.addEventListener('click', () => {
    audioBack.play()
    screenMain.classList.remove('display-off')
    screenBoards.classList.add('display-off')
})
homeInSettings.addEventListener('click', () => {
    audioBack.play()
    screenMain.classList.remove('display-off')
    screenSettings.classList.add('display-off')
})
backSettings.addEventListener('click', () => {
    audioBack.play()
    screenMain.classList.remove('display-off')
    screenSettings.classList.add('display-off')
    saveData()
})
homeInPerformance.addEventListener('click', () => {
    audioBack.play()
    screenMain.classList.remove('display-off')
    screenPerformance.classList.add('display-off')
})
homeInChallenge.addEventListener('click', () => {
    audioBack.play()
    screenMain.classList.remove('display-off')
    screenGameChallenge.classList.add('display-off')
})
backPerformance.addEventListener('click', () => {
    audioBack.play()
    screenMain.classList.remove('display-off')
    screenPerformance.classList.add('display-off')
})
backCongratulation.addEventListener('click', () => {
    audioBack.play()
    screenMain.classList.remove('display-off')
    screenCongratulation.classList.add('display-off')
})
mainBoards.addEventListener('click', () => {
    audioMouse.play()
    if (boardTypeR.classList.contains('boards-type-on-1'))
        amountTitleB.innerHTML = `${countB1}/51`
    else if (boardTypeW.classList.contains('boards-type-on-2'))
        amountTitleB.innerHTML = `${countB2}/69`

    screenBoards.classList.remove('display-off')
    screenMain.classList.add('display-off')
})
mainSettings.addEventListener('click', () => {
    audioMouse.play()
    screenSettings.classList.remove('display-off')
    screenMain.classList.add('display-off')
})
mainPerformance.addEventListener('click', () => {
    loadData()
    pauseTimer()
    recoverHistoric()
    audioMouse.play()
    screenPerformance.classList.remove('display-off')
    screenMain.classList.add('display-off')
})
settingsGame.addEventListener('click', () => {
    pauseTimer()
    recoverHistoric()
    audioBack.play()
    if (changeCategory.key == 1)
        boardElement[0].newBoard = false
    else if (changeCategory.key == 2)
        boardElement[1].newBoard = false
    screenMain.classList.remove('display-off')
    titleEffect.classList.remove('title-left')
    mainEffect.classList.remove('screen-main-left')
    screenGame.classList.add('display-off')
    saveData()
})
boardTypeR.addEventListener('click', () => {
    boardTypeR.classList.add('boards-type-on-1')
    boardTypeW.classList.remove('boards-type-on-2')
    typeR.classList.remove('display-off')
    typeW.classList.add('display-off')
    amountTitleB.innerHTML = `${countB1}/51`
})
boardTypeW.addEventListener('click', () => {
    boardTypeW.classList.add('boards-type-on-2')
    boardTypeR.classList.remove('boards-type-on-1')
    typeW.classList.remove('display-off')
    typeR.classList.add('display-off')
    amountTitleB.innerHTML = `${countB2}/69`
})
deleteHistoric.addEventListener('click', () => {
    audioBack.play()
    historic.points = 0
    historic.hits = 0
    historic.errors = 0
    resetTimer()
    userRBoards = []
    userWBoards = []
    createNewVetorRBoards(userRBoards)
    createNewVetorWBoards(userWBoards)
    countB1 = 0
    countB2 = 0
    codeB1 = []
    codeB2 = []
    levels[0].completed = false
    levels[1].completed = false
    levels[0].countR = 0
    levels[1].countR = 0
    levels[0].countW = 0
    levels[1].countW = 0
    recoverHistoric()
    for (let i = 1; i <= 51; i++)
        typeR.innerHTML = ''

    for (let i = 1; i <= 69; i++)
        typeW.innerHTML = ''
    createBoardsList()
    saveData()
})
sinal1.addEventListener('click', () => {
    sinal1.classList.add('sub-category-box-pressed')
    sinal2.classList.remove('sub-category-box-pressed')
    changeCategory.id.classList.add('regulamentation')
    changeCategory.key = 1
    changeCategory.id.classList.remove('warning')
})
sinal2.addEventListener('click', () => {
    sinal2.classList.add('sub-category-box-pressed')
    sinal1.classList.remove('sub-category-box-pressed')
    changeCategory.id.classList.add('warning')
    changeCategory.key = 2
    changeCategory.id.classList.remove('regulamentation')
})
difficulty1.addEventListener('click', () => {
    difficulty1.classList.add('sub-category-box-pressed')
    difficulty2.classList.remove('sub-category-box-pressed')
    levels[0].selected = true
    levels[1].selected = false
    createListLevel()
})
difficulty2.addEventListener('click', () => {
    difficulty2.classList.add('sub-category-box-pressed')
    difficulty1.classList.remove('sub-category-box-pressed')
    levels[1].selected = true
    levels[0].selected = false
    createListLevel()
})
function congratulation() {
    if (changeCategory.key == 1) {
        typeComplete.innerHTML = 'regulamentação'
        typeComplete.style.color = '#ffa6a6'
    }
    else if (changeCategory.key == 2) {
        typeComplete.innerHTML = 'advertência'
        typeComplete.style.color = '#fcf6af'
    }
    victory.play()
    titleEffect.classList.remove('title-left')
    mainEffect.classList.remove('screen-main-left')
    correct.classList.add('display-off')
    correct.classList.remove('ok-effect-on')
    textOk.classList.remove('text-ok-on')
    screenGame.classList.add('display-off')
    screenFeedback.classList.add('display-off')
    boardNameGame.classList.remove('visibility-off')
    screenCongratulation.classList.remove('display-off')
}
function saveData() {
    data.cB1 = countB1
    data.cB2 = countB2
    data.category = changeCategory.key
    data.points = historic.points
    data.hits = historic.hits
    data.erros = historic.erros
    data.hours = historic.hours
    data.minutes = historic.minutes
    data.seconds = historic.seconds
    data.level1S = levels[0].selected
    data.level1CR = levels[0].countR
    data.level1CW = levels[0].countW
    data.level2S = levels[1].selected
    data.level2CR = levels[1].countR
    data.level2CW = levels[1].countW
    data.codeAB1 = codeB1
    data.codeAB2 = codeB2
    localStorage.setItem('data', JSON.stringify(data))
}
function loadData() {
    if (localStorage.getItem('data') != null) {
        dataString = localStorage.getItem('data')
        data = JSON.parse(dataString)
        countB1 = data.cB1
        countB2 = data.cB2
        changeCategory.key = data.category
        historic.points = data.points
        historic.hits = data.hits
        historic.erros = data.erros
        historic.hours = data.hours
        historic.minutes = data.minutes
        historic.seconds = data.seconds
        levels[0].selected = data.level1S
        levels[0].countR = data.level1CR
        levels[0].countW = data.level1CW
        levels[1].selected = data.level2S
        levels[1].countR = data.level2CR
        levels[1].countW = data.level2CW
        codeB1 = data.codeAB1
        codeB2 = data.codeAB2
        if (changeCategory.key == 1) {
            sinal1.classList.add('sub-category-box-pressed')
            sinal2.classList.remove('sub-category-box-pressed')
        }
        else if (changeCategory.key == 2) {
            sinal2.classList.add('sub-category-box-pressed')
            sinal1.classList.remove('sub-category-box-pressed')
        }
        if (levels[0].selected) {
            difficulty1.classList.add('sub-category-box-pressed')
            difficulty2.classList.remove('sub-category-box-pressed')
        }
        else if (levels[1].selected) {
            difficulty2.classList.add('sub-category-box-pressed')
            difficulty1.classList.remove('sub-category-box-pressed')
        }
        if (codeB1.length > 0) {
            for (let i = 0; i < codeB1.length; i++) {
                for (let q = 0; q < rBoards.length; q++) {
                    if (codeB1[i] == rBoards[q].id) {
                        auxElement = rBoards[q]
                        reFillBoardsList()
                    }
                }
            }
        }
        if (codeB2.length > 0) {
            for (let i = 0; i < codeB2.length; i++) {
                for (let q = 0; q < wBoards.length; q++) {
                    if (codeB2[i] == wBoards[q].id) {
                        auxElement = wBoards[q]
                        reFillBoardsList()
                    }
                }
            }
        }
        recoverHistoric()
    }
    else
        changeCategory.key = 1
}
function createListLevel() {
    if (levels[0].selected) {
        boardsLevel = 12
        errorCard = 'error'
        listLevel.innerHTML = ''
        for (let i = 0; i < boardsLevel; i++) {
            listLevel.innerHTML += `<li id="${i}" class="size-normal elements card flip">
            <div class="size-normal face front"></div>
            <div class="size-normal face back"></div>
            </li>`
        }
    }
    else if (levels[1].selected) {
        boardsLevel = 20
        errorCard = 'error-h'
        listLevel.innerHTML = ''
        for (let i = 0; i < boardsLevel; i++) {
            listLevel.innerHTML += `<li id="${i}" class="size-hard elements card flip">
            <div class="size-hard face front"></div>
            <div class="size-hard face back"></div>
            </li>`
        }
    }
    boards = []
    for (let i = 0; i < boardsLevel; i++) {
        boards.push({
            board: document.getElementById(i),
            stateUse: false,
            checked: false
        })
    }
}
