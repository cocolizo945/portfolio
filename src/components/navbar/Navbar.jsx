import React from "react";
import { useState } from "react";
import styles from './Navbar.module.css'
import { IoMenu, IoClose } from "react-icons/io5";
import Darkmode from '../darkmode/darkmode'

import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Navbar = () => {
    const [nav, setNav] = useState(false);

    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })

        return (
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>
                    {children}
                </Link>
            </li>
        )
    }

    return (
        <header className={styles.navbar}>

            <nav>
                <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                    <li onClick={() => setNav(false)}>
                        <CustomLink to="/" className="site-title">
                            Cocolizo945
                        </CustomLink>
                    </li>
                    <li onClick={() => setNav(false)} >
                        <CustomLink to="/projects" className="site-title">
                            Proyectos
                        </CustomLink>
                    </li>
                    <li onClick={() => setNav(false)}>
                        <CustomLink to="/experience" className="site-title">
                            Experiencia
                        </CustomLink>
                    </li>
                    <li className="icon-container">
                      <Darkmode/>
                    </li>
                </ul>
            </nav>
            <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
                {nav ? <IoClose size={25} color="#fff" /> : <IoMenu size={25} color="#fff" />}

            </div>
        </header>
    )

}

export default Navbar
