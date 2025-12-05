import './index.css';
import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Dashboard />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;