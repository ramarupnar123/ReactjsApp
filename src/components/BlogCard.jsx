import React from 'react';

const BlogCard = ({ post, addToFavorites }) => {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h5 className="card-title text-primary">{post.title}</h5>
        <p className="card-text text-muted">{post.body}</p>
        <button
          className="btn btn-warning btn-sm"
          onClick={() => addToFavorites(post)}
        >
          Mark as Favorite
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
