import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import TopContainer from './TopContainer';
import ImageGallery from './ImageGallery';
import SignUp from './SignUp';
import TheoryPage from './TheoryPage';
import DesignPage from './DesignPage';
import AboutUsPage from './AboutUs';
import NoutFoundPage from './NotFound'
import './styles/App.css'
import NotFoundPage from './NotFound';
import BlogPost1 from './Blog1'



const App = () => {
  return (
    <div className="App">
      <Header />
      
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/theory" element={<TheoryPage />} />
          <Route path="/design" element={<DesignPage />} />\
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/blog1" element={<BlogPost1 />} />
          <Route component={NotFoundPage} /> {/* Catch-all route for 404 */}
          
        </Routes>
      </main>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <TopContainer />
      {/* <ImageGallery />
      <div id="signUpSection">
        <SignUp />
      </div>*/}
      
    </>
  );
};

export default App;