import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Gabriela'}
          fotoUsuario={'https://picsum.photos/id/237/200/300'}
          fotoPost={'https://picsum.photos/200/300?grayscale'}
        />
         <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/200/300'}
          fotoPost={'https://picsum.photos/200/150'}
        />
         <Post
          nomeUsuario={'Letícia'}
          fotoUsuario={'https://picsum.photos/seed/picsum/200/300'}
          fotoPost={'https://picsum.photos/id/870/200/300?grayscale&blur=2'}
        />
      </div>
    );
  }
}

export default App;
