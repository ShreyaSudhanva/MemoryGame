// components/GameBoard.jsx
import React from "react";
import Card from "./Card";

export default function GameBoard({ cards, onCardClick }) {
  return (
    <div className="flex justify-center w-full">
  <div className="grid grid-cols-4 gap-4 justify-items-center">
    {cards.length > 0 ? (
      cards.map((card) => (
        <Card key={card.id} card={card} onClick={() => onCardClick(card)} />
      ))
    ) : (
      <p>Loading Cards...</p> /* Displays a message if no cards are found */
    )}
  </div>
</div>

  );
}
