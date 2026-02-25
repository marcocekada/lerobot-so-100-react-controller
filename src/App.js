import React, { useState, useEffect } from 'react';
import './css/style.css';
import './css/header.css';
import './css/footer.css';
import './css/custom.css';
import './config/bootstrap.scss';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

/** pages */
import Home from './pages/index';
import NotFound from './pages/not_found';
import About from './pages/about';
import Code from './pages/code';
import Repo from './pages/repo';
import Waveshare from './pages/waveshare';


import HeaderBlock from './components/HeaderBlock';
import FooterBlock from './components/FooterBlock';


import { Helmet } from "react-helmet";



function App() {

    library.add(fas)

    useEffect( () => {
        
    }, []);
    


    return (
        <Router basename={'/'}>
            <div id="app-container">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>LeRobot SO-100 React js Controller</title>
                    <meta name="description" content={"LeRobot SO-100 React js Controller"} />
                </Helmet>
                <HeaderBlock />
                <Routes>
                    <Route exact path='/' element={<Home />} /> {/* default page */}
                    <Route path="*" element={<NotFound />} /> {/* 404 page */}
                    <Route path='/about' element={<About />} />
                    <Route path='/code' element={<Code />} />
                    <Route path='/repo' element={<Repo />} />
                    <Route path='/waveshare' element={<Waveshare />} />
                </Routes>
                <FooterBlock />
            </div>
        </Router>
    );
   
    
}

export default App;