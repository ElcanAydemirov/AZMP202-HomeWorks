import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'
import { FavoritesContext } from '../../context/FavContext/FavContext'

const Header = () => {

    const { fav } = useContext(FavoritesContext)

  return (
    <header>
        <div className="header">
            <div className="container">
                <div className={styles.header}>
                <h2>Eljan Aydamirov</h2>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/products"}>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/favorites"}>Favorites <span>{fav.length}</span></NavLink>
                        </li>
                    </ul>
                </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header