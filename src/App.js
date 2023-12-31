import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './index.css';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
