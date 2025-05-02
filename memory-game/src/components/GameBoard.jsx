import React from "react";
import Card from "./Card";

export default function GameBoard({ cards, onCardClick }) {
  return (
    <div className="grid grid-cols-4 gap-4 justify-center items-center">
      {cards.map(card => (
        <Card key={card.id} card={card} onClick={() => onCardClick(card)} />
      ))}
    </div>
  );
}

