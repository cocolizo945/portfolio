import { CgDarkMode } from "react-icons/cg";
import { useState } from "react";
import React, { useContext } from "react";
import { ThemeContext } from "../Theme";

import styles from './darkmode.module.css'

const Darkmode = (  ) => {
    const { theme, toggleTheme } = useContext(ThemeContext);


   return(
    
    <div className={styles.container}onClick={() => toggleTheme()}>
       
        <CgDarkMode size={25} className={styles.icon} />
        
    </div>
    
    
   )
}

export default Darkmode;
