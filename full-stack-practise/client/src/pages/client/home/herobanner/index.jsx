import { Button, Grid } from '@mui/material'
import React from 'react'
import Custombtn from '../../../../components/button'
import styles from './index.module.scss'

const HeroBanner = () => {
    return (
        <>
            <section id={styles.herobanner}>
                <div className="container">
                    <div className={styles.classherobanner}>
                        <Grid container spacing={2}>
                            <Grid xs={8} sm={6}>
                                <div className={styles.heroleft}>

                                    <h3>Lorem ipsum dolor sit.</h3>
                                    <h1>
                                        mmigrations &
                                        Visa Consultation
                                    </h1>
                                    <Custombtn size={"16px"} title={"Book Consultancy"} bckcolor={"white"} padding={"0.7rem 1.6rem"} border={"none"} />
                                </div>
                            </Grid>
                            <Grid xs={8} sm={6} >
                                <img src="https://preview.colorlib.com/theme/immigration/img/header-img.png" alt="" className={styles.heroimage} />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroBanner