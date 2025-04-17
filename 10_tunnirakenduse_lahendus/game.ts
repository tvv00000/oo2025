// Define Card interface directly in game.ts
interface Card {
  value: number; // The numeric value of the card, such as 2, 10, 11 (Ace)
  suit: string;  // The suit of the card, such as "hearts", "spades", etc.
  name: string;  // The name of the card, like "Ace", "King", "10", etc.
  emoji: string; // The emoji representation of the card, like "🂡" for Ace, "🃎" for Jack, etc.
}

// Define SpecialRule enum directly in game.ts
enum SpecialRule {
  STANDARD = 'standard',
  FEW = 'few',
  HIGH = 'high'
}

// Define DeckType enum directly in game.ts
enum DeckType {
  STANDARD = 'standard',
  ODD = 'odd',
  EVEN = 'even'
}

let deck: Card[] = [];
let specialRule: SpecialRule = SpecialRule.STANDARD;
let deckType: DeckType = DeckType.STANDARD;
let playerCards: Card[] = [];
let dealerCards: Card[] = [];
let playerTotal: number = 0;
let dealerTotal: number = 0;
let dealerSecondCardHidden: boolean = true; // Flag to track if the second card is hidden

// Start a new game
function startGame(): void {
  deckType = (document.getElementById('deck-type') as HTMLSelectElement).value as DeckType;
  specialRule = (document.getElementById('special-rule-type') as HTMLSelectElement).value as SpecialRule;

  initializeDeck(deckType);
  shuffleDeck();
  playerCards = [dealCard(), dealCard()];
  dealerCards = [dealCard(), dealCard()];

  playerTotal = calculateTotal(playerCards);
  // Only calculate the dealer's total for the first card, as the second card is hidden
  dealerTotal = calculateTotal([dealerCards[0]]);

  document.getElementById('player-cards')!.innerText = displayCards(playerCards);
  document.getElementById('dealer-cards')!.innerHTML = `
    <span id="dealer-card-1">${dealerCards[0].emoji}</span>
    <span id="dealer-card-2">🂠</span>
  `;
  document.getElementById('player-total')!.innerText = playerTotal.toString();
  document.getElementById('dealer-total')!.innerText = dealerTotal.toString();

  document.getElementById('game-board')!.style.display = 'block';
  document.getElementById('result')!.style.display = 'none';

  // Enable buttons
  (document.getElementById('hit-button') as HTMLButtonElement).disabled = false;
  (document.getElementById('stand-button') as HTMLButtonElement).disabled = false;
}

// Initialize the deck based on deck type
function initializeDeck(deckType: DeckType): void {
  deck = [];
  const suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  for (let suit of suits) {
    deck.push({ value: 11, suit, name: 'Ace', emoji: '🂡' });

    if (deckType === DeckType.STANDARD) {
      for (let value = 2; value <= 10; value++) {
        deck.push({ value, suit, name: value.toString(), emoji: getCardEmoji(value) });
      }
    } else if (deckType === DeckType.ODD) {
      for (let value of [3, 5, 7, 9]) {
        deck.push({ value, suit, name: value.toString(), emoji: getCardEmoji(value) });
      }
    } else if (deckType === DeckType.EVEN) {
      for (let value of [2, 4, 6, 8, 10]) {
        deck.push({ value, suit, name: value.toString(), emoji: getCardEmoji(value) });
      }
    }

    deck.push({ value: 10, suit, name: 'Jack', emoji: '🃎' });
    deck.push({ value: 10, suit, name: 'Queen', emoji: '🃕' });
    deck.push({ value: 10, suit, name: 'King', emoji: '🃞' });
  }
}

// Get the emoji representation for a card
function getCardEmoji(value: number): string {
  const emojis: Record<number, string> = {
    2: '🂢', 3: '🂣', 4: '🂤', 5: '🂥',
    6: '🂦', 7: '🂧', 8: '🂨', 9: '🂩',
    10: '🂪', 11: '🂡'
  };
  return emojis[value] || '';
}

// Shuffle the deck
function shuffleDeck(): void {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// Deal a single card from the deck
function dealCard(): Card {
  return deck.pop()!;
}

// Calculate the total value of a player's or dealer's hand
function calculateTotal(cards: Card[], isDealerTurn: boolean = false): number {
  let total = 0;
  let aces = 0;

  // If it's the dealer's second card, and it's hidden, don't include it in the total calculation
  const cardsToConsider = isDealerTurn || !dealerSecondCardHidden ? cards : [cards[0]];

  for (let card of cardsToConsider) {
    total += card.value;
    if (card.name === 'Ace') aces++;
  }

  while (total > 21 && aces > 0) {
    total -= 10;
    aces--;
  }

  return total;
}

// Display the cards as emojis
function displayCards(cards: Card[]): string {
  return cards.map(card => card.emoji).join(' ');
}

// Get the winning total based on the special rule
function getWinningTotal(): number {
  if (specialRule === SpecialRule.STANDARD) return 21;
  if (specialRule === SpecialRule.FEW) return 19;
  if (specialRule === SpecialRule.HIGH) return 25;
  return 21;
}

// Handle the player's action (hit or stand)
function playerAction(action: 'hit' | 'stand'): void {
  if (action === 'hit') {
    playerCards.push(dealCard());
    playerTotal = calculateTotal(playerCards);
    document.getElementById('player-cards')!.innerText = displayCards(playerCards);
    document.getElementById('player-total')!.innerText = playerTotal.toString();

    if (playerTotal > getWinningTotal()) {
      // Disable buttons after bust
      (document.getElementById('hit-button') as HTMLButtonElement).disabled = true;
      (document.getElementById('stand-button') as HTMLButtonElement).disabled = true;
      gameOver('You busted!');
    }
  } else if (action === 'stand') {
    // Disable buttons after standing
    (document.getElementById('hit-button') as HTMLButtonElement).disabled = true;
    (document.getElementById('stand-button') as HTMLButtonElement).disabled = true;
    dealerTurn();
  }
}

// Handle the dealer's turn
function dealerTurn(): void {
  // Reveal the second card immediately when the player stands
  document.getElementById('dealer-card-2')!.innerText = dealerCards[1].emoji; // Show the second card
  dealerSecondCardHidden = false; // Set flag to false after the second card is revealed

  // Recalculate the dealer's total with both cards now revealed
  dealerTotal = calculateTotal(dealerCards, true);
  document.getElementById('dealer-total')!.innerText = dealerTotal.toString();

  // Dealer draws until total is 17 or higher
  const delay = 500; // Delay for drawing cards
  const interval = setInterval(() => {
    if (dealerTotal < 17) {
      dealerCards.push(dealCard());
      dealerTotal = calculateTotal(dealerCards, true);
      document.getElementById('dealer-cards')!.innerText = displayCards(dealerCards);
      document.getElementById('dealer-total')!.innerText = dealerTotal.toString();
    }

    if (dealerTotal >= 17) {
      clearInterval(interval); // Stop drawing cards once the dealer's total is 17 or higher

      if (dealerTotal > getWinningTotal()) {
        gameOver('Dealer busted! You win!');
      } else if (dealerTotal === playerTotal) {
        gameOver("It's a tie!");
      } else if (dealerTotal > playerTotal) {
        gameOver("Dealer wins!");
      } else {
        gameOver("You win!");
      }
    }
  }, delay);
}

// End the game and display the result
function gameOver(message: string): void {
  document.getElementById('player-cards')!.innerText = displayCards(playerCards);
  document.getElementById('dealer-cards')!.innerText = displayCards(dealerCards);
  document.getElementById('player-total')!.innerText = playerTotal.toString();
  document.getElementById('dealer-total')!.innerText = dealerTotal.toString();
  document.getElementById('result')!.innerText = message;
  document.getElementById('result')!.style.display = 'block';
}
