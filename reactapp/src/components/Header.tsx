const Header = () => {

    return (
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-2xl">My Application</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#home" className="hover:underline">Home</a></li>
                    <li><a href="#about" className="hover:underline">About</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
