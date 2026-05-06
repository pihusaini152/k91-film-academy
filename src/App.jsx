import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Training from "./pages/Training/Training";
import About from "./pages/About/About";
import Admission from "./pages/Admission/Admission";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Courses />
      <Training/>
      <About/>
      <Admission/>
      <Contact/>
      <Footer/>
      
     
      
      

    
    </div>
  );
}

export default App;