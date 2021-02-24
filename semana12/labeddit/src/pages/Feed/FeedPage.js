import React from 'react'
import Button from '@material-ui/core/Button'
import useProtectedPage from '../../hooks/useProtectedPage'


const FeedPage = () => {
  useProtectedPage()
  return (
    <div>
      <p>Feed aaaaa</p>
      <Button variant="contained" color="primary">Botão</Button>
    </div>
  );
};

export default FeedPage;
