import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addToFavorites(movie) {
    setFavorites((prev) => [...prev, movie]);
  }

  function removeFromFavorites(id) {
    setFavorites((prev) => prev.filter((m) => m.imdbID !== id));
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
