function Header() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Services</a></li>
                        <li><a>Tarifs</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Carrières</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img src="/src/assets/logo/easitech_v2.png" className="h-auto w-64 mr-64" alt="logo" />
                </a>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal hidden lg:flex px-4">
                    <li><a>Services</a></li>
                    <li><a>Tarifs</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Carrières</a></li>
                </ul>
                <a className="btn btn-ghost bg-primary-opacity-80 rounded-full">Contactez-nous</a>
            </div>
        </div>
    );
}

export default Header;