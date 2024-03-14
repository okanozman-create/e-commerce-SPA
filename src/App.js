// import "./index.css";

import './assets/css/index.css';
import React from 'react';



function App() {
  return (
    <div className="App">
       <header className="App-header bg-gray-800 text-white">
        <div className='container-header flex justify-center items-center'>
        <h2 className="text-yellow-500 text-5xl">OceanBreeze</h2>
        <nav className="main-nav">
          {/* <ul className="main-nav-list"> */}
          <ul className="main-nav-list flex justify-center  gap-4">
            <li><button className="main-nav-btn m-8 p-8 text-xl">MEN</button></li>
            <li><button className="main-nav-btn m-8 p-8 text-xl">WOMEN</button></li>
            <li><button className="main-nav-btn m-8 p-8 text-xl">KIDS</button></li>
            <li><button className="main-nav-btn m-8 p-8 text-xl">HOME</button></li>
            <li><button className="main-nav-btn m-8 p-8 text-xl">ACCESSORIES</button></li>
            <li><button className="main-nav-btn m-8 p-8 text-xl">SUSTAINABLY CRAFTED</button></li>
            <li><button className="main-nav-btn m-8 p-8 text-xl">CLEARANCE</button></li>
          </ul>
        </nav>
        </div>
      </header>
    </div>
  );
}

export default App;