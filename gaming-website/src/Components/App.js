import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import TopContainer from './TopContainer';
import ImageGallery from './ImageGallery';
import SignUp from './SignUp';
import TheoryPage from './TheoryPage';
import './styles/App.css'


const App = () => {
  return (
    <div className="App">
      <Header />
      
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/theory" element={<TheoryPage />} />
          
        </Routes>
      </main>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <TopContainer />
      <ImageGallery />
      <SignUp />
    </>
  );
};

export default App;