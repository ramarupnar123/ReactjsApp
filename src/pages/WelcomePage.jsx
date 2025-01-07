
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/bloglist');
    }, 5000);
  }, [navigate]);

  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Our Blog</h1>
      <p>We are excited to have you here. Redirecting to the blog list...</p>
    </div>
  );
};

export default WelcomePage;
