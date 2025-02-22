import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Experiences } from "./components/Experiences";
import { Projects } from "./components/Projects";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Experiences />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
