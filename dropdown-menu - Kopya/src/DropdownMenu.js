import React, { useState } from 'react'
import styles from "./DropdownMenu.module.css"

export default function DropdownMenu() {
    let [openMenu, setOpenMenu] = useState(false);
    let [openSecondMenu, setOpenSecondMenu] = useState(false);

    function openAllMenus(){
        setOpenMenu(true);
        setOpenSecondMenu(true);
    }

    function closeAllMenus(){
        setOpenMenu(false);
        setOpenSecondMenu(false);
    }

  return (
    <div className={styles.allButtons}>
        <button className={styles.upperbuttons}>Upperbuttons</button>
        <button className={styles.upperbuttons}>Upperbuttons</button>
        <button className={styles.upperbuttons}>Upperbuttons</button>
        <button className={styles.upperbuttons}>Upperbuttons</button>

        <div className={styles.ddMenu}>
            <button className={styles.ddMenuButtons} onMouseOver={() => setOpenMenu(true)} onMouseOut={() => setOpenMenu(false)}>Dropdown is here</button>

            <div className={styles.ddList} style= { { scale: openMenu ? "1" : "0" } }>
                <button className={styles.ddListButton} onMouseOver={() => setOpenMenu(true)} onMouseOut={() => setOpenMenu(false)}>Ddlist Button</button>
                <button className={styles.ddListButton} onMouseOver={() => setOpenMenu(true)} onMouseOut={() => setOpenMenu(false)}>Ddlist Button</button>
                <button className={styles.ddListButton} onMouseOver={() => setOpenMenu(true)} onMouseOut={() => setOpenMenu(false)}>Ddlist Button</button>
                

                <div className={styles.ddMenuTwo}>
                    <button className={styles.ddMenuButtons} onMouseOver={openAllMenus} onMouseOut={closeAllMenus}>Dropdown is here</button>

                    <div className={styles.ddListTwo} style= { { scale: openSecondMenu ? "1" : "0" } }>
                        <button className={styles.ddListButton} onMouseOver={openAllMenus} onMouseOut={closeAllMenus}>Ddlist Button</button>
                        <button className={styles.ddListButton} onMouseOver={openAllMenus} onMouseOut={closeAllMenus}>Ddlist Button</button>
                        <button className={styles.ddListButton} onMouseOver={openAllMenus} onMouseOut={closeAllMenus}>Ddlist Button</button>
                        <button className={styles.ddListButton} onMouseOver={openAllMenus} onMouseOut={closeAllMenus}>Ddlist Button</button>
                    </div>
                </div>

                <button className={styles.ddListButton} onMouseOver={() => setOpenMenu(true)} onMouseOut={() => setOpenMenu(false)}>Ddlist Button</button>
            </div>
        </div>

        <button className={styles.upperbuttons}>Upperbuttons</button>
        <button className={styles.upperbuttons}>Upperbuttons</button>
    </div>
  )
}
