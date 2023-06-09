import "./Favorites.scss";
import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/slices/favoritesSlices";
import Poster from "../../components/Poster/Poster";

export default function Favorites() {
  const favorites = useSelector(selectFavorites);

  return (
    <div className="Favorites">
      <h2 className="Favorites__title">Your Favorites</h2>
      <div className="Favorites__wrap">
        {favorites && favorites.length > 0 ? (
          favorites.map((favorite) => (
            <Poster
              movie={favorite}
              isLarge={false}
              isFavorite={true}
              key={favorite.id}
            />
          ))
        ) : (
          <h2 className="Favorites__title">
            You have no movies in your list yet.
          </h2>
        )}
      </div>
    </div>
  );
}
