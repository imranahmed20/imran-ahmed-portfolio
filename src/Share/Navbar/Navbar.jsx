
const Navbar = () => {
    const navItem = <>
        <li><a href="/">HOME</a></li>
        <li><a href="/#about">ABOUT</a></li>
        <li><a href="/#service">SERVICE</a></li>
        <li><a href="/#skills">SKILLS</a></li>
        <li><a href="/#projects">PROJECTS</a></li>
        <li><a href="/#resume">RESUME</a></li>
        <li><a href="/#contact">CONTACT</a></li>
    </>
    return (
        <div className="fixed  w-full z-10  navbar mb-5" style={{ backgroundColor: "#0a101e" }}>
            <div className="navbar-start ml-8">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <a className=" text-xl">Imran Ahmed</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end mr-5">
                <a href='/#contact' className="btn">Here me</a>
            </div>
        </div>
    );
};

export default Navbar;