/* eslint-disable react/prop-types */


const Profile = ({Profile,Source}) => {
  return (
    <div>
        <div className="flex justify-center items-center border border-red-500 rounded-md p-3 gap-12">
            <div>
                <img src="../Images/Zahid_Khattak.JPG" alt="pic" className="w-52 border rounded-md" />
            </div>
        <ul className="border p-2 border-red-500 rounded-md">
            <li> Name :  {Profile.Name} </li>
            <li> Age : {Profile.Age} </li>
            <li> Country : {Profile.Country} </li>

            <li> User Image : <img src={Source} alt="user image" className="w-52 border border-green-900 rounded-md mt-2" /> </li>
        </ul>
        </div>
    </div>
  )
}

export default Profile