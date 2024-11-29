"use client"

import { createContext, useContext, useState } from 'react';

const GamesContext = createContext();

export function GamesProvider({ children }) {
  const [games, setGames] = useState([]);

  const updateGames = async () => {
    try {
      const response = await fetch('http://localhost:8080/gameimage/');
      if (response.ok) {
        const data = await response.json();
        const normalizedData = data.map((item) => ({
          id: item.id,
          title: item.game.title,
          description: item.game.description,
          price: item.game.price,
          category: item.game.category.name,
          mark: item.game.mark.name,
          backgroundImage: item.url, 
        }));
        setGames(normalizedData);
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
