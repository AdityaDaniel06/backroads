import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Tours from './components/Tours';
import Hero from './components/Hero';
import Services from './components/Services';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
