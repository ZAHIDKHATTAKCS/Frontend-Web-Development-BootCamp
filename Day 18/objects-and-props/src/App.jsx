import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer.1";
import Profile from "./Components/Profile";

function App() {
  return (
    <>
      {/* here is we are going to use props */}
      <Navbar Logoname="Logo using props" />
      <h1 className="text-3xl text-white text-center font-bold underline bg-blue-500">
        Hello world!
      </h1>


      {/* send object as a parameter */}
      <Profile props = {{id:2, name:"zahid khattak",age:20,hobby:"coding",country:"Pakistan"}} source = "https://th.bing.com/th/id/OIP.qz5ltPSGpDVHCTPOpSCMsAHaK7?rs=1&pid=ImgDetMain"/>

      <Footer Footer="&copy;" />
    </>
  );
}

export default App;


// const myObject = {
//   id: 1,
//   Name:"zahid",
//   country:"Pakistan",
//   hobby:"drawing"
// }

// console.log(myObject.id);
// console.log(myObject.Name);
// console.log(myObject.country);
// console.log(myObject.hobby);