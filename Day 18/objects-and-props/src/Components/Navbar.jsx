function Navbar({ Logoname }) {
    return (
        <div className="bg-gray-700 text-white text-3xl">
            <ul className="flex justify-around p-6">
                <li><a href="#">{Logoname}</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar;