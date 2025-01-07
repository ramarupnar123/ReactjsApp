import React from 'react';

const BlogCard = ({ post, addToFavorites }) => {
  return (
    <div className="card shadow-sm border-0" style={{ borderRadius: '10px' }}>
      <img
        src="/image/computer image.jpg"
        alt="Blog"
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
          className="btn btn-warning btn-sm mt-2"
          onClick={() =>
            addToFavorites({ ...post, image: '/image/computer image.jpg' })
          }
        >
          Mark as Favorite
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
