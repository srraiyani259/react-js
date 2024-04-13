import logo from './logo.svg';
import './App.css';
import './Navbar';
import Navbar from './Navbar';
import Section from './Section';
import Sec2 from './Sec2';
import Trust from './Trust';
import Map from './Map';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
    <Navbar />
    <Section />
    <Sec2 />
    <Trust />
    <Map />
    <Footer />
    </div>
  );
}

export default App;
