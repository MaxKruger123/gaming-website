import React from 'react';
import TopContainer from './TopContainer.js';
import ImageGallery from './ImageGallery.js';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <TopContainer />
      <main className="main">
        <ImageGallery />
      </main>
    </div>
  );
};

export default App;