
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/client/home'; 
import {About} from '../pages/client/about'; 
import Contact from '../pages/client/contact'; 
import Blog from '../pages/client/blog'; 
import BlogDetails from '../pages/client/blogdetails'; 
import Client from '../pages/client';
import ClientHeader from '../components/layouts/client/header'
import ClientFooter from '../components/layouts/client/footer'
import Admin from '../pages/admin';
import AdminProducts from '../pages/admin/products';
import AdminUsers from '../pages/admin/users';
import AdminHeader from '../components/layouts/admin/header';
import AdminBlog from '../pages/admin/blog';
import NotFound from '../pages/notfound';


function App() {
  return (
    <>





      <Routes>

      <Route path='/admin' >
        <Route index element={<Admin/>}/>
        <Route path='products' element={<AdminProducts/>}/>
        <Route path='users' element={<AdminUsers/>}/>
        <Route path='blog' element={<AdminBlog/>}/>
      </Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} /> 
      <Route />
      <Route path='*' element={<NotFound/>}/>
      </Routes>


    </>
  );
}

export default App;
