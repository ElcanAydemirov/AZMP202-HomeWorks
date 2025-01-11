import  { createContext, useState } from 'react'
export const ThemeContext = createContext(null)


const ThemeProvider = ({children}) => {

    const [theme, setThem] = useState("light")

    const toggleTheme = ()=>{
        setThem((prevTheme)=>prevTheme === "light" ? "dark" : "light")
    }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider