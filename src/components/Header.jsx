import Logo from "../assets/fav.png";
function Header(){
    return (
        <header className="flex relative w-full justify-center h-12">
            <img src={Logo} alt="" className=" left-0 absolute h-12 w-12"/>
            <span className=" align-middle font-extrabold text-4xl text-blue-700">TaskMate</span>
        </header>
    )
}

export default Header;