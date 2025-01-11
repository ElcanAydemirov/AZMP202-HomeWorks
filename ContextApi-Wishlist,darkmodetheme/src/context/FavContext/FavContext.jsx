/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
export const FavoritesContext = createContext(null)

const FavoritesProvider = ({children}) => {

    const [fav, setFav] = useState([])

    const toggleFavorites = (product)=>{
        const found = fav.find((p) => p.id === product.id); 
        if(found){
            setFav((prev)=>prev.filter((p) => p.id !== product.id))
        }else{
            setFav((prev)=>[...prev, product ])
        }
    }

    const clearFavorites = () =>{
        setFav([])
    }
  return (
    <FavoritesContext.Provider value={{fav, toggleFavorites, clearFavorites}}>{children}</FavoritesContext.Provider>
  )
}

export default FavoritesProvider