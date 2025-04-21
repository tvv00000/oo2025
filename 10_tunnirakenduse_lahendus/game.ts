const suits = ['♠', '♥', '♦', '♣'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

type Card = { value: string; suit: string };

let deck: Card[] = [];
let playerHand: Card[] = [];
let dealerHand: Card[] = [];
let gameOver = false;
let revealDealerCard = false;

function createDeck(): Card[] {
  const deck: Card[] = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push({ value, suit });
    }
  }
  return deck;
}

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
  while (total > 21 && aces > 0) {
    total -= 10;
    aces--;
  }
  return total;
}

function renderHand(hand: Card[], elementId: string, hideSecondCard = false) {
  const el = document.getElementById(elementId)!;
  el.innerHTML = hand.map((c, i) => {
    if (hideSecondCard && i === 1) return '🂠'; // Hidden card symbol
    return `${c.value}${c.suit}`;
  }).join(' ');
}

function updateUI() {
  renderHand(playerHand, 'player-hand');
  renderHand(dealerHand, 'dealer-hand', !revealDealerCard);
  (document.getElementById('player-total') as HTMLElement).textContent = calculateTotal(playerHand).toString();
  (document.getElementById('dealer-total') as HTMLElement).textContent = revealDealerCard
    ? calculateTotal(dealerHand).toString()
    : '?';
}

function showMessage(msg: string) {
  (document.getElementById('message') as HTMLElement).textContent = msg;
}

function endGame() {
  updateUI();
  const playerTotal = calculateTotal(playerHand);
  const dealerTotal = calculateTotal(dealerHand);
  let result = '';

  if (playerTotal > 21) result = 'Player Busts! Dealer Wins!';
  else if (dealerTotal > 21) result = 'Dealer Busts! Player Wins!';
  else if (playerTotal > dealerTotal) result = 'Player Wins!';
  else if (playerTotal < dealerTotal) result = 'Dealer Wins!';
  else result = "It's a Tie!";

  showMessage(result);
  gameOver = true;
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerTurn() {
  revealDealerCard = true;
  updateUI();

  await delay(1000); // Reveal delay

  while (calculateTotal(dealerHand) < 17) {
    dealerHand.push(deck.pop()!);
    updateUI();
    await delay(1000); // Delay between card draws
  }

  endGame();
}

function startGame() {
  deck = createDeck();
  shuffle(deck);
  playerHand = [deck.pop()!, deck.pop()!];
  dealerHand = [deck.pop()!, deck.pop()!];
  gameOver = false;
  revealDealerCard = false;
  showMessage('');
  updateUI();
}

document.getElementById('hit')!.addEventListener('click', () => {
  if (gameOver) return;
  playerHand.push(deck.pop()!);
  updateUI();
  if (calculateTotal(playerHand) > 21) {
    revealDealerCard = true;
    endGame();
  }
});

document.getElementById('stand')!.addEventListener('click', () => {
  if (gameOver) return;
  gameOver = true; // Prevent further hits
  dealerTurn();
});

document.getElementById('restart')!.addEventListener('click', () => {
  startGame();
});

startGame();
