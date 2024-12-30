import Navbar from "./Components/Navbar"

import Footer from "./Components/Footer"

function App() {
  return (
    <>
    <Navbar />
    <h1 className=" text-blue-500 text-3xl text-center">Hello, Welcome to my first React and Tailwindcss Project</h1>
    <a href="https://zahidkhattak.vercel.app/" target="_blank" className="bg-slate-700 text-white block">My Portfolio</a>
    <Footer />
    </>
  )
}

export default App
