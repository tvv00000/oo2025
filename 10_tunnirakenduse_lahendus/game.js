// Define SpecialRule enum directly in game.ts
var SpecialRule;
(function (SpecialRule) {
    SpecialRule["STANDARD"] = "standard";
    SpecialRule["FEW"] = "few";
    SpecialRule["HIGH"] = "high";
})(SpecialRule || (SpecialRule = {}));
// Define DeckType enum directly in game.ts
var DeckType;
(function (DeckType) {
    DeckType["STANDARD"] = "standard";
    DeckType["ODD"] = "odd";
    DeckType["EVEN"] = "even";
})(DeckType || (DeckType = {}));
var deck = [];
var specialRule = SpecialRule.STANDARD;
var deckType = DeckType.STANDARD;
var playerCards = [];
var dealerCards = [];
var playerTotal = 0;
var dealerTotal = 0;
var dealerSecondCardHidden = true; // Flag to track if the second card is hidden
// Start a new game
function startGame() {
    deckType = document.getElementById('deck-type').value;
    specialRule = document.getElementById('special-rule-type').value;
    initializeDeck(deckType);
    shuffleDeck();
    playerCards = [dealCard(), dealCard()];
    dealerCards = [dealCard(), dealCard()];
    playerTotal = calculateTotal(playerCards);
    // Only calculate the dealer's total for the first card, as the second card is hidden
    dealerTotal = calculateTotal([dealerCards[0]]);
    document.getElementById('player-cards').innerText = displayCards(playerCards);
    document.getElementById('dealer-cards').innerHTML = "\n    <span id=\"dealer-card-1\">".concat(dealerCards[0].emoji, "</span>\n    <span id=\"dealer-card-2\">\uD83C\uDCA0</span>\n  ");
    document.getElementById('player-total').innerText = playerTotal.toString();
    document.getElementById('dealer-total').innerText = dealerTotal.toString();
    document.getElementById('game-board').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    // Enable buttons
    document.getElementById('hit-button').disabled = false;
    document.getElementById('stand-button').disabled = false;
}
// Initialize the deck based on deck type
function initializeDeck(deckType) {
    deck = [];
    var suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    for (var _i = 0, suits_1 = suits; _i < suits_1.length; _i++) {
        var suit = suits_1[_i];
        deck.push({ value: 11, suit: suit, name: 'Ace', emoji: '🂡' });
        if (deckType === DeckType.STANDARD) {
            for (var value = 2; value <= 10; value++) {
                deck.push({ value: value, suit: suit, name: value.toString(), emoji: getCardEmoji(value) });
            }
        }
        else if (deckType === DeckType.ODD) {
            for (var _a = 0, _b = [3, 5, 7, 9]; _a < _b.length; _a++) {
                var value = _b[_a];
                deck.push({ value: value, suit: suit, name: value.toString(), emoji: getCardEmoji(value) });
            }
        }
        else if (deckType === DeckType.EVEN) {
            for (var _c = 0, _d = [2, 4, 6, 8, 10]; _c < _d.length; _c++) {
                var value = _d[_c];
                deck.push({ value: value, suit: suit, name: value.toString(), emoji: getCardEmoji(value) });
            }
        }
        deck.push({ value: 10, suit: suit, name: 'Jack', emoji: '🃎' });
        deck.push({ value: 10, suit: suit, name: 'Queen', emoji: '🃕' });
        deck.push({ value: 10, suit: suit, name: 'King', emoji: '🃞' });
    }
}
// Get the emoji representation for a card
function getCardEmoji(value) {
    var emojis = {
        2: '🂢', 3: '🂣', 4: '🂤', 5: '🂥',
        6: '🂦', 7: '🂧', 8: '🂨', 9: '🂩',
        10: '🂪', 11: '🂡'
    };
    return emojis[value] || '';
}
// Shuffle the deck
function shuffleDeck() {
    var _a;
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [deck[j], deck[i]], deck[i] = _a[0], deck[j] = _a[1];
    }
}
// Deal a single card from the deck
function dealCard() {
    return deck.pop();
}
// Calculate the total value of a player's or dealer's hand
function calculateTotal(cards, isDealerTurn) {
    if (isDealerTurn === void 0) { isDealerTurn = false; }
    var total = 0;
    var aces = 0;
    // If it's the dealer's second card, and it's hidden, don't include it in the total calculation
    var cardsToConsider = isDealerTurn || !dealerSecondCardHidden ? cards : [cards[0]];
    for (var _i = 0, cardsToConsider_1 = cardsToConsider; _i < cardsToConsider_1.length; _i++) {
        var card = cardsToConsider_1[_i];
        total += card.value;
        if (card.name === 'Ace')
            aces++;
    }
    while (total > 21 && aces > 0) {
        total -= 10;
        aces--;
    }
    return total;
}
// Display the cards as emojis
function displayCards(cards) {
    return cards.map(function (card) { return card.emoji; }).join(' ');
}
// Get the winning total based on the special rule
function getWinningTotal() {
    if (specialRule === SpecialRule.STANDARD)
        return 21;
    if (specialRule === SpecialRule.FEW)
        return 19;
    if (specialRule === SpecialRule.HIGH)
        return 25;
    return 21;
}
// Handle the player's action (hit or stand)
function playerAction(action) {
    if (action === 'hit') {
        playerCards.push(dealCard());
        playerTotal = calculateTotal(playerCards);
        document.getElementById('player-cards').innerText = displayCards(playerCards);
        document.getElementById('player-total').innerText = playerTotal.toString();
        if (playerTotal > getWinningTotal()) {
            // Disable buttons after bust
            document.getElementById('hit-button').disabled = true;
            document.getElementById('stand-button').disabled = true;
            gameOver('You busted!');
        }
    }
    else if (action === 'stand') {
        // Disable buttons after standing
        document.getElementById('hit-button').disabled = true;
        document.getElementById('stand-button').disabled = true;
        dealerTurn();
    }
}
// Handle the dealer's turn
function dealerTurn() {
    // Reveal the second card immediately when the player stands
    document.getElementById('dealer-card-2').innerText = dealerCards[1].emoji; // Show the second card
    dealerSecondCardHidden = false; // Set flag to false after the second card is revealed
    // Recalculate the dealer's total with both cards now revealed
    dealerTotal = calculateTotal(dealerCards, true);
    document.getElementById('dealer-total').innerText = dealerTotal.toString();
    // Dealer draws until total is 17 or higher
    var delay = 500; // Delay for drawing cards
    var interval = setInterval(function () {
        if (dealerTotal < 17) {
            dealerCards.push(dealCard());
            dealerTotal = calculateTotal(dealerCards, true);
            document.getElementById('dealer-cards').innerText = displayCards(dealerCards);
            document.getElementById('dealer-total').innerText = dealerTotal.toString();
        }
        if (dealerTotal >= 17) {
            clearInterval(interval); // Stop drawing cards once the dealer's total is 17 or higher
            if (dealerTotal > getWinningTotal()) {
                gameOver('Dealer busted! You win!');
            }
            else if (dealerTotal === playerTotal) {
                gameOver("It's a tie!");
            }
            else if (dealerTotal > playerTotal) {
                gameOver("Dealer wins!");
            }
            else {
                gameOver("You win!");
            }
        }
    }, delay);
}
// End the game and display the result
function gameOver(message) {
    document.getElementById('player-cards').innerText = displayCards(playerCards);
    document.getElementById('dealer-cards').innerText = displayCards(dealerCards);
    document.getElementById('player-total').innerText = playerTotal.toString();
    document.getElementById('dealer-total').innerText = dealerTotal.toString();
    document.getElementById('result').innerText = message;
    document.getElementById('result').style.display = 'block';
}
