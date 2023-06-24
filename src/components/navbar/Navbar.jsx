import { NavLink } from "react-router-dom";
function Navbar() {

    return (

        <nav className={`sticky left-0 top-0 right-0 z-10 bg-gray-100`}>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <div className="flex items-center">
                        <NavLink
                           to="/"
                            className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md group"
                        >
                            <h4 className="mb-4 text-lg font-extrabold md:text-3xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">MYFORUM</span></h4>
                        </NavLink>
                    </div>



                </div>
            </div>
        </nav>
    );
}

export default Navbar;
