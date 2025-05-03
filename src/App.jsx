// App.jsx
import React, { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";

const emojiList = ['🍕','🌈','🐶','🐱','🎈','🚀','🎵','🍩'];

function shuffleArray(array) {
  const duplicated = [...array, ...array];
  return duplicated.sort(() => Math.random() - 0.5).map((emoji, index) => ({
    id: index,
    emoji,
    isFlipped: false,
    isMatched: false
  }));
}

export default function App() {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    setCards(shuffleArray(emojiList));
  }, []);

  useEffect(() => {
    if (firstCard && secondCard) {
      setDisabled(true);
      if (firstCard.emoji === secondCard.emoji) {
        setCards(prev => prev.map(card =>
          card.emoji === firstCard.emoji ? { ...card, isMatched: true } : card
        ));
        resetTurn();
      } else {
        setTimeout(() => {
          setCards(prev => prev.map(card =>
            card.id === firstCard.id || card.id === secondCard.id
              ? { ...card, isFlipped: false }
              : card
          ));
          resetTurn();
        }, 1000);
      }
      setMoves(m => m + 1);
    }
  }, [firstCard, secondCard]);

  const handleCardClick = (card) => {
    if (!disabled && !card.isFlipped && !card.isMatched) {
      setCards(prev => prev.map(c => c.id === card.id ? { ...c, isFlipped: true } : c));
      if (!firstCard) {
        setFirstCard(card);
      } else {
        setSecondCard(card);
      }
    }
  };

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  };

  const resetGame = () => {
    setCards(shuffleArray(emojiList));
    setMoves(0);
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-10 p-4 w-full">
      <h1 className="text-3xl font-bold mb-4">🧠 Memory Match Game</h1>
      <p className="mb-2">Moves: {moves}</p>
      <div className="flex justify-center w-full">
        <GameBoard cards={cards} onCardClick={handleCardClick} />
      </div>
      <button onClick={resetGame} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Reset Game
      </button>
    </div>
  );
}
