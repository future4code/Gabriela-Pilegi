import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';

const PostPage = () => {
  useProtectedPage()
  return (
    <div>
      <p>Post</p>
    </div>
  );
};

export default PostPage;
