import React from 'react';
import styles from './index.module.scss';
import { NavLink } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";

const Header = () => {
    function sideBar() {

    }
    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.navbar}>
                        <div className={styles.logo}>
                            Eljan Aydamirov
                        </div>
                        <nav>
                            <IoMenu className={styles.menu} onClick={sideBar} />
                            <div className={styles.sidebar}>

                            </div>
                            <ul className={styles.ul}>

                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
