import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LightSwitch from './display/LightSwitch';
import BackToTop from './display/BackToTop';
import AppProvider from './context/AppProvider';
import MainPage from './MainPage';
import NavBar from './display/NavBar';
import Footer from './display/Footer';
import ServicesPage from './pages/ServicesPage';
import ArticlesPage from './pages/ArticlesPage';
import ArticlePage from './pages/ArticlePage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';


function App() {

  let faqText = require('./data/faqText.json')
  let articles = require('./data/articles.json')

  return (
    <AppProvider>
      <BrowserRouter>
          <NavBar/>
          <div className="content">
            {/* <NavBar/> */}
            {/* <LightSwitch/> */}
            <BackToTop/>
            {/* <SimScrollbar/> */}
            <div className="app">
              <Routes>
                <Route index element={<MainPage/>} />
                <Route path="/services" element={<ServicesPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/articles" element={<ArticlesPage articles={articles}/>} />
                <Route path="/articles/:articleID" element={<ArticlePage articles={articles}/>} />
                <Route path="/faq" element={<FAQPage faqText={faqText}/>} />
              </Routes>
            </div>
          </div>
          <Footer/>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
