import Car from "./assets/Components/MyCar";
import Footer from "./assets/Components/Footer";
import Navbar from "./assets/Components/Navbar";
import About from "./assets/Components/About";
import Contact from "./assets/Components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
      {/* using React Routes here */}

      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={
            <div>
              <main className="mt-5">
                <h1 className="text-3xl font-bold underline text-center">
                  Hello world!
                </h1>

                <Car />
              </main>
            </div>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />


    </>
  );
}

export default App;
