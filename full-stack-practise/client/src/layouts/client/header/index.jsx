import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
const ClientHeader = () => {
    const basket = useSelector((state) => state.basket.basket)
    const wishlist = useSelector((state) => state.wishlist.wishlist)
    let basketCount = 0;
    basket.forEach((b) => {
        basketCount += b.quantity
    });
    console.log(basketCount);

    return (
        <section id={styles.navbar}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.texts}>
                        <p>
                            We believe we helps people
                            for happier lives
                        </p>

                    </div>
                    <div className={styles.logo}>
                        <img src="https://preview.colorlib.com/theme/immigration/img/logo.png" alt="" />
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to={"/"} >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/wishlist"} >Wishlist <sup>{wishlist.length}</sup> </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/basket"} >Basket <sup>{basketCount}</sup></NavLink>
                            </li>
                            <MenuIcon className={styles.menu} />
                        </ul>
                    </nav>
                </div>

            </div>
        </section>
    )
}

export default ClientHeader