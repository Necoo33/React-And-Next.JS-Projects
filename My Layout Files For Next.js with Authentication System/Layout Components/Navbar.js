import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
  let [openMenu, setOpenMenu] = useState(false);

  return (
    <div style={ { backgroundColor: "#2d2d2d" } }>
      <div className='navbar-container'>
          <div className='logo'>
              <Link href="/" className="logo-string">Adding Authentication</Link>
          </div>

          <div className='navbar-buttons'>
              <div className="ddmenu">
                <Link href="#" className="ddmenu-buttons" onMouseEnter={() => setOpenMenu(true)} onMouseLeave={() => setOpenMenu(false)} onPointerUp={openMenu ? () => setOpenMenu(false) : () => setOpenMenu(true)}>Auth Settings</Link>

                <div className="ddlist" style= { { scale: openMenu ? "1" : "0" } } onMouseEnter={() => setOpenMenu(true)} onMouseLeave={() => setOpenMenu(false)}>
                    <Link href="/register" className="ddlist-button">Register</Link>
                    <Link href="/login" className="ddlist-button">Login</Link>
                    <Link href="#" className="ddlist-button">Logout</Link>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

// styles for that navbar component, just copy them to "globals.css" file.

/* 
.navbar-container{
  display: flex;
  place-content: space-between;
  align-items: center;
  margin: 0 3vw;
  padding: 1.5em 0;
  border-bottom: 5px solid white;
  background-color: #2d2d2d;
}
.logo{
  font-weight: 600;
}
.logo-string{
  font-size: 1.7rem;
  padding: 0.5em;
  border-radius: 50px;
  color: white;
}
.logo-string:hover{
  background-color: white;
  color: #2d2d2d;
}
.navbar-buttons{
  display: flex;
  align-items: center;
  gap: 10px;
}
.link-buttons, .ddmenu-buttons {
  display: block;
  background-color: white;
  font-size: 1rem;
  color: #2d2d2d;
  border-radius: 20px;
  font-weight: 600;
  width: 9em;
  padding: 1em 0;
  text-align: center;
}

.link-buttons:hover{
  background-color: black;
  color: white;
}

.ddmenu-buttons:hover{
  background-color: black;
  color: white;
}

.dd-menu{
  position: relative;
}

.ddmenu-buttons{
  display: block;
}

.ddlist{
  position: absolute;
  transition: 0.3s;
  transform-origin: top;
  scale: 0;
  translate: 0 7px;
}

.ddlist-button{
  display: block;
  margin-bottom: 3px;
  background-color: white;
  font-size: 1rem;
  color: #2d2d2d;
  border-radius: 20px;
  font-weight: 600;
  width: 9em;
  padding: 1em 0;
  text-align: center;
}

.ddlist-button:hover{
  background-color: black;
  color: white;
}

@media screen and (max-width: 768px){
  .navbar-container{
    flex-direction: column;
    padding: 0.75em 0;
  }

  .logo{
    margin-bottom: 1em;
  }

  .navbar-buttons{
    border-top: 5px solid white;
    padding: 0.75em 0;
  }
}

*/


// Aşşağıdakilerin tamamını "globals.css"e kopyalayabilirsin:

/* 

html,
body {
  padding: 0;
  margin: 0 3vw;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #2d2d2d;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

.navbar-container{
  display: flex;
  place-content: space-between;
  align-items: center;
  margin: 0 3vw;
  padding: 1.5em 0;
  border-bottom: 5px solid white;
  background-color: #2d2d2d;
}
.logo{
  font-weight: 600;
}
.logo-string{
  font-size: 1.7rem;
  padding: 0.5em;
  border-radius: 50px;
  color: white;
}
.logo-string:hover{
  background-color: white;
  color: #2d2d2d;
}
.navbar-buttons{
  display: flex;
  align-items: center;
  gap: 10px;
}
.link-buttons, .ddmenu-buttons {
  display: block;
  background-color: white;
  font-size: 1rem;
  color: #2d2d2d;
  border-radius: 20px;
  font-weight: 600;
  width: 9em;
  padding: 1em 0;
  text-align: center;
}

.link-buttons:hover{
  background-color: black;
  color: white;
}

.ddmenu-buttons:hover{
  background-color: black;
  color: white;
}

.dd-menu{
  position: relative;
}

.ddmenu-buttons{
  display: block;
}

.ddlist{
  position: absolute;
  transition: 0.3s;
  transform-origin: top;
  scale: 0;
  translate: 0 7px;
}

.ddlist-button{
  display: block;
  margin-bottom: 3px;
  background-color: white;
  font-size: 1rem;
  color: #2d2d2d;
  border-radius: 20px;
  font-weight: 600;
  width: 9em;
  padding: 1em 0;
  text-align: center;
}

.ddlist-button:hover{
  background-color: black;
  color: white;
}

@media screen and (max-width: 768px){
  .navbar-container{
    flex-direction: column;
    padding: 0.75em 0;
  }

  .logo{
    margin-bottom: 1em;
  }

  .navbar-buttons{
    border-top: 5px solid white;
    padding: 0.75em 0;
  }
}

*/


