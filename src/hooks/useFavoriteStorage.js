import createPersistedState from "use-persisted-state";
import { useEffect } from "react";
const useFavouritesState = createPersistedState(
  "favourites",
  window.localStorage
);

export const useFavouritesStorage = () => {
  const [favourites, setFavourites] = useFavouritesState([]);
  useEffect(() => {
    if (!Array.isArray(favourites)) setFavourites();
  }, [favourites, setFavourites]);
  return [
    favourites,
    {
      add: (id) => {

        if (favourites.find((v) => v === id)) return false;
        setFavourites([id, ...favourites]);
        return true;
      },
      remove: (id) => {
        const ind = favourites.findIndex((v) => v === id);
        if (ind > -1) {
          favourites.splice(ind, 1);
          setFavourites([...favourites]);
          return true;
        } else return false;
      },
    },
  ];
};
