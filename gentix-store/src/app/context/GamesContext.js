"use client"

import { createContext, useContext, useState } from 'react';

const GamesContext = createContext();

export function GamesProvider({ children }) {
  const [games, setGames] = useState([]);

  const updateGames = async () => {
    try {
      const response = await fetch('https://pjct-e-commerce-back.onrender.com/api/game/');
      if (response.ok) {
        const data = await response.json();
        setGames(data);
      }
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  };

  return (
    <GamesContext.Provider value={{ games, updateGames }}>
      {children}
    </GamesContext.Provider>
  );
}

export const useGames = () => useContext(GamesContext);
