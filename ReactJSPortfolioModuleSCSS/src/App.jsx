
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/client/home'; 
import {About} from '../pages/client/about'; 
import Contact from '../pages/client/contact'; 
import Blog from '../pages/client/blog'; 
import BlogDetails from '../pages/client/blogdetails'; 
import Header from '../components/layouts/header';
import Footer from '../components/layouts/footer';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} /> 
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
