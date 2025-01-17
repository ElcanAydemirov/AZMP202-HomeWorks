import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ClientLayout from './layouts/client'
import ClientHome from './pages/client/home'
import ProductDetail from './pages/client/productdetails'
import Wishlist from './pages/client/wishlist'
import Basket from './pages/client/basket'
import AdminLayout from './layouts/admin'
import AdminHeader from './layouts/admin/header'
import AdminHome from './pages/admin/home'
import AdminEdit from './pages/admin/edit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<ClientLayout />}>
          <Route index element={<ClientHome />} />
          <Route path='/:id' element={<ProductDetail />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/basket' element={<Basket />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path='/admin/add' element={<AdminHome />} />
          <Route path='/admin/edit/:id' element={<AdminEdit />} />
        </Route>

        <Route path='*' element/>
      </Routes>
    </>
  )
}

export default App
