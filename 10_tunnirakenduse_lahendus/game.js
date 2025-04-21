var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var suits = ['♠', '♥', '♦', '♣'];
var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var deck = [];
var playerHand = [];
var dealerHand = [];
var gameOver = false;
var revealDealerCard = false;
function createDeck() {
    var deck = [];
    for (var _i = 0, suits_1 = suits; _i < suits_1.length; _i++) {
        var suit = suits_1[_i];
        for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
            var value = values_1[_a];
            deck.push({ value: value, suit: suit });
        }
    }
    return deck;
}
function shuffle(deck) {
    var _a;
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [deck[j], deck[i]], deck[i] = _a[0], deck[j] = _a[1];
    }
}
function getCardValue(card) {
    if (['J', 'Q', 'K'].includes(card.value))
        return 10;
    if (card.value === 'A')
        return 11;
    return parseInt(card.value);
}
function calculateTotal(hand) {
    var total = 0;
    var aces = 0;
    for (var _i = 0, hand_1 = hand; _i < hand_1.length; _i++) {
        var card = hand_1[_i];
        var value = getCardValue(card);
        total += value;
        if (card.value === 'A')
            aces++;
    }
    while (total > 21 && aces > 0) {
        total -= 10;
        aces--;
    }
    return total;
}
function renderHand(hand, elementId, hideSecondCard) {
    if (hideSecondCard === void 0) { hideSecondCard = false; }
    var el = document.getElementById(elementId);
    el.innerHTML = hand.map(function (c, i) {
        if (hideSecondCard && i === 1)
            return '🂠'; // Hidden card symbol
        return "".concat(c.value).concat(c.suit);
    }).join(' ');
}
function updateUI() {
    renderHand(playerHand, 'player-hand');
    renderHand(dealerHand, 'dealer-hand', !revealDealerCard);
    document.getElementById('player-total').textContent = calculateTotal(playerHand).toString();
    document.getElementById('dealer-total').textContent = revealDealerCard
        ? calculateTotal(dealerHand).toString()
        : '?';
}
function showMessage(msg) {
    document.getElementById('message').textContent = msg;
}
function endGame() {
    updateUI();
    var playerTotal = calculateTotal(playerHand);
    var dealerTotal = calculateTotal(dealerHand);
    var result = '';
    if (playerTotal > 21)
        result = 'Player Busts! Dealer Wins!';
    else if (dealerTotal > 21)
        result = 'Dealer Busts! Player Wins!';
    else if (playerTotal > dealerTotal)
        result = 'Player Wins!';
    else if (playerTotal < dealerTotal)
        result = 'Dealer Wins!';
    else
        result = "It's a Tie!";
    showMessage(result);
    gameOver = true;
}
function delay(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
function dealerTurn() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    revealDealerCard = true;
                    updateUI();
                    return [4 /*yield*/, delay(1000)];
                case 1:
                    _a.sent(); // Reveal delay
                    _a.label = 2;
                case 2:
                    if (!(calculateTotal(dealerHand) < 17)) return [3 /*break*/, 4];
                    dealerHand.push(deck.pop());
                    updateUI();
                    return [4 /*yield*/, delay(1000)];
                case 3:
                    _a.sent(); // Delay between card draws
                    return [3 /*break*/, 2];
                case 4:
                    endGame();
                    return [2 /*return*/];
            }
        });
    });
}
function startGame() {
    deck = createDeck();
    shuffle(deck);
    playerHand = [deck.pop(), deck.pop()];
    dealerHand = [deck.pop(), deck.pop()];
    gameOver = false;
    revealDealerCard = false;
    showMessage('');
    updateUI();
}
document.getElementById('hit').addEventListener('click', function () {
    if (gameOver)
        return;
    playerHand.push(deck.pop());
    updateUI();
    if (calculateTotal(playerHand) > 21) {
        revealDealerCard = true;
        endGame();
    }
});
document.getElementById('stand').addEventListener('click', function () {
    if (gameOver)
        return;
    gameOver = true; // Prevent further hits
    dealerTurn();
});
document.getElementById('restart').addEventListener('click', function () {
    startGame();
});
startGame();
