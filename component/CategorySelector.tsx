'use client';
import { useState } from 'react';

export default function CategorySelector({ onSelect }: { 
  onSelect: (category: 'chill' | 'medium' | 'spicy') => void 
}) {
  return (
    <div className="category-container">
      <h2>Choisis l'intensité :</h2>
      <div className="category-buttons">
        <button 
          onClick={() => onSelect('chill')}
          className="category-btn chill"
        >
          😌 Chill
        </button>
        <button 
          onClick={() => onSelect('medium')}
          className="category-btn medium"
        >
          😏 Medium
        </button>
        <button 
          onClick={() => onSelect('spicy')}
          className="category-btn spicy"
        >
          🔥 Spicy
        </button>
      </div>
    </div>
  );
}