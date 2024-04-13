import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Nubi from "./Nubi";
import Services from "./Services";
import Team from "./Team";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Nubi/>
      <Services/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;