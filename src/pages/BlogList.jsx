import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Spinner from '../components/Spinner';
import { fetchPosts } from '../services/api';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };
    getPosts();


    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = (post) => {
    if (!favorites.some((fav) => fav.id === post.id)) {
      const updatedFavorites = [...favorites, post];
      setFavorites(updatedFavorites);


      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  if (loading) return <Spinner />;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Blog List</h1>

      <div className="row align-items-center mb-4">
        <div className="col-md-4">
          <SearchBar setSearchQuery={setSearchQuery} />
        </div>
        <div className="col-md-4 offset-md-4 text-end">
          <button
            className="btn btn-primary"
            onClick={() => (window.location.href = '/favorites')}
          >
            My Favorite Blogs
          </button>
        </div>
      </div>

      <div className="row">
        {currentPosts.map((post) => (
          <div className="col-md-6 mb-4" key={post.id}>
            <BlogCard post={post} addToFavorites={addToFavorites} />
          </div>
        ))}
      </div>

      <Pagination
        totalPosts={filteredPosts.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default BlogList;
