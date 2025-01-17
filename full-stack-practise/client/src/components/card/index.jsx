import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import styles from './index.module.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { checkWishlist } from '../../redux/features/wishlistslice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { checkBasket } from '../../redux/features/basketslice';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router";

const ProductCard = ({ title, imageUrl, price, data }) => {

    const wishlist = useSelector((state) => state.wishlist.wishlist)

    const dispatch = useDispatch()
    const nav = useNavigate()


    return (
        <>


            <Grid item xs={6} md={3} className={styles.card}>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src={imageUrl} alt="" />
                    </div>
                    <div className={styles.texts}>
                        <h2>{title}</h2>
                        <h4>${price}</h4>
                    </div>
                    <div className={styles.btns}>
                        <button className={styles.heart} onClick={() => {
                            dispatch(checkWishlist(data))
                            console.log(wishlist);
                        }}>
                            {wishlist.some((w) => w._id === data._id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}

                        </button>
                        <button className={styles.basket} onClick={() => {
                            dispatch(checkBasket(data))
                        }}>
                            <ShoppingCartIcon />
                        </button>
                    </div>

                </div>

            </Grid >



        </>
    )
}

export default ProductCard