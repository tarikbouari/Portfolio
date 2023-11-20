import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Header from './components/Header';
import Navbar from './components/Nav';
import Design from './components/Design';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Project />
      <Design />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
