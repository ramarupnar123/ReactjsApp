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
      <h1 className="text-center mb-4 text-dark">My Favorite Blogs</h1>
      {favorites.length === 0 ? (
        <p className="text-center text-muted">No favorites yet!</p>
      ) : (
        <div className="row g-4">
          {favorites.map((post) => (
            <div className="col-lg-4 col-md-6" key={post.id}>
              <div
                className="card border-0 shadow-sm h-100"
                style={{ borderRadius: '10px' }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="card-img-top"
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">{post.title}</h5>
                  <p className="card-text text-muted">{post.body}</p>
                  <button
                    className="btn btn-danger btn-sm mt-2"
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
