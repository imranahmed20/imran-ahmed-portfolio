
const Navbar = () => {
    const navItem = <>
        <li><a>HOME</a></li>
        <li><a>ABOUT</a></li>
        <li><a>RESUME</a></li>
        <li><a>PORTFOLIO</a></li>
        <li><a>BLOG</a></li>
        <li><a>CONTACT</a></li>
    </>
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
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
                <div className="navbar-end">
                    <a className="btn">Here me</a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;