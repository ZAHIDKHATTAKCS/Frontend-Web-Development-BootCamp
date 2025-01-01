import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
function App() {

  const Greetings = "hi how are you doing today!";
  const Name = "Zahid Khattak";

  function CheckingName (){
    if (Name === "Zahid Khattak"){
      return <div className=' text-green-700 border border-green-700 rounded-md mb-4 mt-4 w-fit mx-auto p-1 text-lg'>
        <p>Hello, {Name}! You are authorized to view this content.</p>
      </div>
    }else{
      return <div className=' text-red-700'>
        <p>Hello, {Name}! You are not authorized to view this content.</p>
      </div>
    }
  }

  return (
    <>

      <Navbar />
      <div className='main  text-center'>

        <h3 className='mt-2'>{Greetings} {Name}</h3>

        {
          CheckingName()
        }

        {
          Name === "Zahid" ? <h5 className='mt-2 mb-2'>Hello {Name}</h5> : <h5  className='mt-2 mb-2'>Error {Name}</h5>
        }

      </div>

      <Footer />
    </>
  )
}

export default App;
