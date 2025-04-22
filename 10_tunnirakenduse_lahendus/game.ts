const suits = ['♠', '♥', '♦', '♣'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

type Card = { value: string; suit: string };

let deck: Card[] = [];
let playerHand: Card[] = [];
let dealerHand: Card[] = [];
let gameOver = false;
let revealDealerCard = false;
let scoringMethod: string = '21';
let deckType: string = 'standard';

function createDeck(deckType: string): Card[] {
  const deck: Card[] = [];
  let selectedValues = values;

  if (deckType === 'odd') {
    selectedValues = ['3', '5', '7', '9', 'A'];
  } else if (deckType === 'even') {
    selectedValues = ['2', '4', '6', '8', '10', 'J', 'Q', 'K'];
  }

  for (let suit of suits) {
    for (let value of selectedValues) {
      deck.push({ value, suit });
    }
  }
  return deck;
}

//chatgpt shuffle
function shuffle(deck: Card[]) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

function getCardValue(card: Card): number {
  if (['J', 'Q', 'K'].includes(card.value)) return 10;
  if (card.value === 'A') return 11;
  return parseInt(card.value);
}

function calculateTotal(hand: Card[]): number {
  let total = 0;
  let aces = 0;
  for (let card of hand) {
    let value = getCardValue(card);
    total += value;
    if (card.value === 'A') aces++;
  }
  const targetScore = scoringMethod === '25' ? 25 : 21;
  while (total > targetScore && aces > 0) {
    total -= 10;
    aces--;
  }
  return total;
}

function renderHand(hand: Card[], elementId: string, hideSecondCard = false) {
  const el = document.getElementById(elementId);
  el!.innerHTML = hand
    .map((c, i) => {
      if (hideSecondCard && i === 1) return '🂠';
      return `${c.value}${c.suit}`;
    })
    .join(' ');
}

function updateUI() {
  renderHand(playerHand, 'player-hand');
  const hideDealerCard = !revealDealerCard;
  renderHand(dealerHand, 'dealer-hand', hideDealerCard);

  const playerTotal = calculateTotal(playerHand);
  document.getElementById('player-total')!.textContent = playerTotal.toString();

  let dealerTotal: string;
  if (revealDealerCard) {
    dealerTotal = calculateTotal(dealerHand).toString();
  } else {
    dealerTotal = '?';
  }

  document.getElementById('dealer-total')!.textContent = dealerTotal;
}

async function dealerTurn() {
  revealDealerCard = true;
  updateUI();

  await new Promise(resolve => setTimeout(resolve, 1000));

  const threshold = scoringMethod === '25' ? 20 : 17;
  while (calculateTotal(dealerHand) < threshold) {
    dealerHand.push(deck.pop()!);
    updateUI();
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  endGame();
}

function startGame() {
  const scoringOptions = ['21', '25'];
  const deckOptions = ['standard', 'odd', 'even'];

  scoringMethod = scoringOptions[Math.floor(Math.random() * scoringOptions.length)];
  deckType = deckOptions[Math.floor(Math.random() * deckOptions.length)];


  document.getElementById('scoring-method-label')!.textContent =
    scoringMethod === '21' ? 'Standard (21)' : 'High Score (25)';

  document.getElementById('deck-type-label')!.textContent =
    deckType.charAt(0).toUpperCase() + deckType.slice(1);


  deck = createDeck(deckType);
  shuffle(deck);
  playerHand = [deck.pop()!, deck.pop()!];
  dealerHand = [deck.pop()!, deck.pop()!];
  gameOver = false;
  revealDealerCard = false;

  document.getElementById('message')!.textContent = '';
  updateUI();
}

function endGame() {
  updateUI();
  const playerTotal = calculateTotal(playerHand);
  const dealerTotal = calculateTotal(dealerHand);
  let result = '';

  const bustLimit = scoringMethod === '25' ? 25 : 21;

  if (playerTotal > bustLimit) result = 'Player Busts! Dealer Wins!';
  else if (dealerTotal > bustLimit) result = 'Dealer Busts! Player Wins!';
  else if (playerTotal > dealerTotal) result = 'Player Wins!';
  else if (playerTotal < dealerTotal) result = 'Dealer Wins!';
  else result = "It's a Tie!";

  document.getElementById('message')!.textContent = result;
  gameOver = true;
}

document.getElementById('hit')!.addEventListener('click', () => {
  if (gameOver) return;
  playerHand.push(deck.pop()!);
  updateUI();

  const bustLimit = scoringMethod === '25' ? 25 : 21;
  if (calculateTotal(playerHand) > bustLimit) {
    revealDealerCard = true;
    endGame();
  }
});

document.getElementById('stand')!.addEventListener('click', () => {
  if (gameOver) return;
  gameOver = true;
  dealerTurn();
});

document.getElementById('restart')!.addEventListener('click', () => {
  startGame();
});

startGame();