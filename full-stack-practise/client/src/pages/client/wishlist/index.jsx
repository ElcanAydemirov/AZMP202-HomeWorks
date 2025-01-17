import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import styles from './index.module.scss'
import ProductCard from '../../../components/card'

const Wishlist = () => {
    const wishlist = useSelector((state) => state.wishlist.wishlist)
    const dispatch = useDispatch()
    return (
        <div className="container">
        <div >
            <Grid container className={styles.row}>
                {wishlist && wishlist.map((d) => {
                    return <ProductCard title={d.title} imageUrl={d.imageUrl} price={d.price} data={d} />
                })}
            </Grid>
        </div>

    </div>
    )
}

export default Wishlist