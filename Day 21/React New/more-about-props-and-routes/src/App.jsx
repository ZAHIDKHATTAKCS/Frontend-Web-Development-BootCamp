import Car from "./assets/Components/MyCar";
import Footer from "./assets/Components/Footer";
import Navbar from "./assets/Components/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Router >
      <Navbar LogoName="Zk Store" />

      <Routes>
        <Route path="/" />
        
      </Routes>

      <Footer />
    </Router>

      <main className="mt-5">
        <h1 className="text-3xl font-bold underline text-center">
          Hello world!
        </h1>

        <Car />
      </main>

      <Footer />
    </>
  );
}

export default App;
