import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
  let [openMenu, setOpenMenu] = useState(false);

  return (
    <div style={ { backgroundColor: "#2d2d2d" } }>
      <div className='navbar-container' style={ { margin: "0 3vw" } }>
          <div className='logo'>
              <Link href="/" className="logo-string">Bla Bla Logo</Link>
          </div>

          <div className='navbar-buttons'>
              <Link className='link-buttons' href="/munasebet">button</Link>
              <Link className='link-buttons' href="/keylogger">button</Link>
              
              <div className="ddmenu">
                <Link href="#" className="ddmenu-buttons" onMouseEnter={() => setOpenMenu(true)} onMouseLeave={() => setOpenMenu(false)} onPointerUp={openMenu ? () => setOpenMenu(false) : () => setOpenMenu(true)}>Dropdown Menu</Link>

                <div className="ddlist" style= { { scale: openMenu ? "1" : "0" } } onMouseEnter={() => setOpenMenu(true)} onMouseLeave={() => setOpenMenu(false)}>
                    <Link href="/muntehabat" className="ddlist-button">Button</Link>
                    <Link href="/siirlerim" className="ddlist-button">Button</Link>
                    <Link href="/ozlusozler" className="ddlist-button">Button</Link>
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
  padding: 2em 0;
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

*/



