import Footer from './components/footer';
import Navbar from './components/header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import JoinUs from './pages/JoinUs';
import Single from './pages/Blog/[slug]';
import All from './pages/Blog/All'
function App() {
  return (
    <div className=" transition duration-500">
      
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blog/:slug' element={<Single/>}/>
          <Route path='/blog' element={<All/>}/>
          <Route path='/join-us' element={<JoinUs/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
