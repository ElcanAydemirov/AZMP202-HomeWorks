import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../../../components/card';
import { useGetProductsQuery } from '../../../../redux/service'
import { Grid } from '@mui/material'
import { checkWishlist } from '../../../../redux/features/wishlistslice';
import styles from './index.module.scss'

const Products = () => {

    const basket = useSelector((state) => state.basket.basket)
    console.log(basket);

    const { data, isLoading, isError } = useGetProductsQuery()


    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <h1>Some Error Occurred</h1>
    }

    return (
        <>
            <section id="products">
                <div className="container">
                    <div >
                        <Grid container className={styles.row}>
                            {data && data.map((d) => {
                                return <ProductCard title={d.title} imageUrl={d.imageUrl} price={d.price} data={d} />
                            })}
                        </Grid>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Products