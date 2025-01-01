import Footer from "./assets/Components/Footer"
import Navbar from "./assets/Components/Navbar"
import Profile from "./assets/Components/Profile"

function App() {

  return (
    <>
      <Navbar LogoName="Zk Store" />

      <Profile Profile={{
        id: 2,
        Name: "Zahid Khattak",
        Age: 32,
        Country: "Pakistan",
        Hobby: "Learning React"
      }} Source = "../public/Images/Zahid_Khattak.JPG"  />

      <main className="mt-5">
        <h1 className="text-3xl font-bold underline text-center">
          Hello world!
        </h1>
      </main>

      <Footer />
    </>
  )
}

export default App


const myobject = {

}


console.log('The name in Object is = ', myobject.Name)