
const Navbar = () => {
    const navlinks = <>
        <li><a href="/">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </>

    return (
        <div className="navbar sticky top-0 z-10 bg-slate-500 text-white">
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal gap-6 text-xl my-4">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm bg-slate-900 dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;