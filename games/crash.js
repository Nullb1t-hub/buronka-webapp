// ===================== CRASH GAME =====================
const crashScreen = document.getElementById('game-screen');
const crashMultiplier = document.getElementById('crash-multiplier');
const crashHistory = document.getElementById('crash-history');
const crashBetInput = document.getElementById('crash-bet');
const crashBetButton = document.getElementById('crash-bet-btn');
const crashCashoutButton = document.getElementById('crash-cashout-btn');
const crashBackButton = document.getElementById('crash-back-btn');
let crashBalance = 1000; // стартовый баланс
let currentBet = 0;
let currentMultiplier = 1;
let interval = null;
let crashed = false;
let history = [];

function updateBalanceDisplay() {
    document.getElementById('balance-display').innerText = `Balance: ${crashBalance} BUR`;
}

function startCrashGame() {
    crashScreen.style.display = 'block';
    crashMultiplier.innerText = '1.00x';
    currentMultiplier = 1;
    crashed = false;
    crashBetButton.disabled = false;
    crashCashoutButton.disabled = true;
}

function placeBet() {
    currentBet = parseInt(crashBetInput.value);
    if(currentBet > crashBalance || currentBet <= 0) {
        alert('Invalid bet!');
        return;
    }
    crashBalance -= currentBet;
    updateBalanceDisplay();
    crashBetButton.disabled = true;
    crashCashoutButton.disabled = false;
    runCrash();
}

function runCrash() {
    // Случайный момент краша
    const crashPoint = (Math.random() * 9 + 1).toFixed(2); // 1x - 10x
    interval = setInterval(() => {
        if(crashed) return;
        currentMultiplier = (currentMultiplier + 0.01).toFixed(2);
        crashMultiplier.innerText = `${currentMultiplier}x`;
        updateMultiplierColor(currentMultiplier);
        if(currentMultiplier >= crashPoint) {
            crashed = true;
            crashMultiplier.innerText = `${crashPoint}x`;
            crashHistory.unshift(`Lost ${currentBet} BUR at ${crashPoint}x`);
            if(crashHistory.length > 6) crashHistory.pop();
            renderHistory();
            crashCashoutButton.disabled = true;
            setTimeout(() => {
                crashScreen.style.display = 'none';
            }, 5000);
            clearInterval(interval);
        }
    }, 50);
}

function cashout() {
    if(crashed) return;
    const win = Math.floor(currentBet * currentMultiplier);
    crashBalance += win;
    updateBalanceDisplay();
    crashHistory.unshift(`Won ${win} BUR at ${currentMultiplier}x`);
    if(crashHistory.length > 6) crashHistory.pop();
    renderHistory();
    crashed = true;
    clearInterval(interval);
    crashCashoutButton.disabled = true;
    setTimeout(() => {
        crashScreen.style.display = 'none';
    }, 5000);
}

function updateMultiplierColor(mult) {
    mult = parseFloat(mult);
    if(mult >= 6) {
        crashMultiplier.style.color = '#9b59b6'; // фиолетовый 6x+
    } else if(mult > 2) {
        crashMultiplier.style.color = '#bdc3c7'; // серый средний
    } else if(mult <= 2) {
        crashMultiplier.style.color = '#e74c3c'; // красный низкий
    }
    // можно добавить зеленый для промо раундов
}

function renderHistory() {
    crashHistory.innerHTML = '';
    history.forEach(h => {
        const li = document.createElement('li');
        li.innerText = h;
        crashHistory.appendChild(li);
    });
}

// Кнопка назад
crashBackButton.addEventListener('click', () => {
    crashScreen.style.display = 'none';
    clearInterval(interval);
});

// Ставка и кэш аут
crashBetButton.addEventListener('click', placeBet);
crashCashoutButton.addEventListener('click', cashout);

updateBalanceDisplay();