import React from "react";

export default function Card({ card, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`w-20 h-20 cursor-pointer perspective`}
    >
      <div
        className={`relative w-full h-full duration-500 transform-style preserve-3d ${
          card.isFlipped || card.isMatched ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full bg-white rounded-lg flex items-center justify-center text-2xl backface-hidden border shadow">
          {card.isFlipped || card.isMatched ? card.emoji : "❓"}
        </div>
        <div className="absolute w-full h-full bg-green-100 rounded-lg flex items-center justify-center text-2xl rotate-y-180 backface-hidden border shadow">
          {card.emoji}
        </div>
      </div>
    </div>
  );
}
