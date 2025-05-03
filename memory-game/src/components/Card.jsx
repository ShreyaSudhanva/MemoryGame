// components/Card.jsx
import React from "react";

export default function Card({ card, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`w-24 h-24 flex items-center justify-center perspective card ${card.isFlipped || card.isMatched ? "flipped" : ""}`}
    >
      <div className="relative w-full h-full card-inner">
  {/* Front Face - Only Visible When Not Flipped */}
  {!card.isFlipped && (
    <div className="absolute inset-0 bg-white rounded-lg flex items-center justify-center text-2xl border shadow card-face">
      ❓
    </div>
  )}
  {/* Back Face - Only Visible When Flipped */}
  {card.isFlipped && (
    <div className="absolute inset-0 bg-green-100 rounded-lg flex items-center justify-center text-2xl card-back border shadow">
      {card.emoji}
    </div>
  )}
</div>

    </div>
  );
}

