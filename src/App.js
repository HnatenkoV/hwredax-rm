import './App.css';
import HomePage from "./pages/homePage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./compotents/header";
import React from "react";
import HeroList from "./compotents/heroList";
import EpisodeList from "./compotents/episodeList";

function App() {

  return (
    <div>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/heroes" element={<HeroList />}/>
                <Route path="/episodes" element={ <EpisodeList />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
