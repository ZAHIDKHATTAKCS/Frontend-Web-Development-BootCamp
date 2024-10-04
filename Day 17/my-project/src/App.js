const name2= "Zahid Khattak"; //global variable

function App(){
  const username= "zahid khattak";

  return<>
  <h1>Hello world</h1>
  {
    username === "zahid" ? <h1>zahid</h1>:<h1 className="bg-blue-600 text-white text-2xl">Error the Name is =  {username}</h1>
  }
  
  <h1>Hello world second one</h1>
  </>

}

export default App;