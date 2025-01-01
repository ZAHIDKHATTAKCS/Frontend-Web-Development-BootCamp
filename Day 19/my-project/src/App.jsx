import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Profile from "./Components/Profile"
import{BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      {/* <Navbar /><br />
      <div>
        <h1 className="text-3xl font-bold underline bg-blue-50 text-center">
          Hello world!
        </h1>
      </div><br />
      <Profile /><br />

      <Footer /> */}

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>

    </>
  )
}

export default App
