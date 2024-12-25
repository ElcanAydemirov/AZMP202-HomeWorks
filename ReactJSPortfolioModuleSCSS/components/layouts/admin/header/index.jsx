import React, { useState } from 'react';
import styles from './index.module.scss';
import { NavLink } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import pimage from '../../../../assets/images/portfolio-logo-png-transparent.png'; 

const AdminHeader = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.navbar}>
                        <div className={styles.logo}>
                            <img src={pimage} className={styles.img} alt="Logo" />
                        </div>
                        <nav>
                            <IoMenu 
                                className={styles.menu} 
                                onClick={toggleSidebar} 
                            />

                            <div 
                                className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}
                                onClick={toggleSidebar}
                            >
                                <ul className={styles.ul}>
                                    <li>
                                        <NavLink to="/admin">Dashboard</NavLink> {/* Düzgün yol */}
                                    </li>
                                    <li>
                                        <NavLink to="/admin/products">Products</NavLink> {/* Düzgün yol */}
                                    </li>
                                    <li>
                                        <NavLink to="/admin/users">Users</NavLink> {/* Düzgün yol */}
                                    </li>
                                    <li>
                                        <NavLink to="/admin/blog">Blog</NavLink> {/* Düzgün yol */}
                                    </li>
                                </ul>
                            </div>

                            <ul className={styles.ul}>
                                <li>
                                    <NavLink to="/admin">Dashboard</NavLink> {/* Düzgün yol */}
                                </li>
                                <li>
                                    <NavLink to="/admin/products">Products</NavLink> {/* Düzgün yol */}
                                </li>
                                <li>
                                    <NavLink to="/admin/users">Users</NavLink> {/* Düzgün yol */}
                                </li>
                                <li>
                                    <NavLink to="/admin/blog">Blog</NavLink> {/* Düzgün yol */}
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default AdminHeader;
