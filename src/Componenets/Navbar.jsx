import React from "react";
import './navbar.css';


const Navbar=()=>{

    return (
        <>
        <div className="tagline">
          <p>Delivering in Mumbai, Delhi and Gurgaon | Same Day delivery!</p>
        </div>
        <div className="navbar">
          
          <div className="menu-icon">
            <span id="menubar">
              <i className="fa-solid fa-bars" />
            </span>
          </div>
          <div className="menu-items">
            <ul className="leftmenu">
              <li>
                <a href="#">SHOP</a>
                <ul className="submenu">
                  <li>
                    <a href="#">ALL FRUITS</a>
                  </li>
                  <li>
                    <a href="#">ALL VEGGIES</a>
                  </li>
                  <li>
                    <a href="#">FRESH CUTS</a>
                  </li>
                  <li>
                    <a href="#">FRUIT COMBOS</a>
                  </li>
                  <li>
                    <a href="#">GIFTS BY KIMAYE</a>
                  </li>
                  <li>
                    <a href="#">FRUIT X SUBSCRIPTION</a>
                  </li>
                  <li>
                    <a href="#">COMMUNITY BUYING</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">LEARN</a>
                <ul className="submenu">
                  <li>
                    <a href="#">OUR STORY</a>
                  </li>
                  <li>
                    <a href="#">WHY KIMAYE</a>
                  </li>
                  <li>
                    <a href="#">TRACEBLITY</a>
                  </li>
                  <li>
                    <a href="#">BEYOND FRUITS</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">GROW</a>
              </li>
            </ul>
          </div>

          <div className="logo">
            <img
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1614326029"
              alt="Logo"
            />
          </div>


          <div className="right">
            <div className="icons">
              <div className="search-bar">
                {/* Search bar with magnifying glass icon inside */}
                <input type="text" placeholder="Search" />
                <div className="search-icon">
                  <i className="fa-solid fa-magnifying-glass" />
                </div>
              </div>
              <div className="login">
                <i className="fa-regular fa-user" />
              </div>
              <div className="bag">
                <i className="fa-solid fa-bag-shopping" />
              </div>
            </div>
          </div>
        </div>
      </>
      
      
      
    )

}

export {Navbar};