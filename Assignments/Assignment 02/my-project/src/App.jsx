function App(){
  return <div className="container-fluid bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen box-border">
    <header className="bg-white">
      <nav className="bg-white border border-black w-full h-20 text-black flex justify-center items-center">
        <ul className="flex justify-between  w-[90%] mx-auto p-5 items-center h-full">
          <li>
          <img src="../public/logo.png" alt="Logo" className="w-16"/>
          </li>
          <li><a href="App.jsx">Home</a></li>
          <li><a href="About.html">About US Page</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>

      </nav>
    </header>
  </div>

  
}

export default App;