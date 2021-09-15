import { createContext, useContext } from 'react';

interface Favorite {
  favorites: Array<string>;
  setFavorite: (favorite: Array<string>) => void;
}

const FavoriteContext = createContext<Favorite>({} as Favorite);

const useFavorite = () => useContext(FavoriteContext);

export { FavoriteContext, useFavorite };
