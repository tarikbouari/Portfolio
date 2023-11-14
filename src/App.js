import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav';
import Footer from './components/Footer';
import About from './pages/about';
import Work from './pages/work';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
