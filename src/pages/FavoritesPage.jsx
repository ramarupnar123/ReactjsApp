import React, { useState, useEffect } from 'react';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);


  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((post) => post.id !== id);
    setFavorites(updatedFavorites);


    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">My Favorite Blogs</h1>
      {favorites.length === 0 ? (
        <p className="text-center text-muted">No favorites yet!</p>
      ) : (
        <div className="row">
          {favorites.map((post) => (
            <div className="col-md-6 mb-4" key={post.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.body}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromFavorites(post.id)}
                  >
                    Remove from Favorites
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
