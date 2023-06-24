import { BsRocket } from "react-icons/bs"; 
import { CgProfile } from "react-icons/cg";
import { HiOutlineHome, HiOutlineBookmark } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { ForumContext } from "../../context/ForumProvider";
const Sidebar = () => {
const {forumState:{forums}}=useContext(ForumContext)
    const {username,name,picUrl}=forums
    return (
        <div className="hidden h-screen md:block">
            <div className="flex flex-col h-[90vh]">

                <div className="flex-1 mt-8 space-y-1">

                    {/* Nav Links */}
                    <div>
                        <NavLink
                            to="/"
                            className="flex px-2 py-4 space-x-4 text-xl font-medium text-gray-700 rounded-md hover:bg-gray-200/80 group"
                        >
                            <HiOutlineHome className="w-8 h-8 text-gray-700" />
                            <p>Home</p>
                        </NavLink>
                        <NavLink
                            to="/"
                            className="flex px-2 py-4 space-x-4 text-xl font-medium text-gray-700 rounded-md hover:bg-gray-200/80 group"
                        >
                            <BsRocket className="w-8 h-8 text-gray-700" />
                            <p>Explore</p>
                        </NavLink>
                        <NavLink
                            to="/"
                            className="flex px-2 py-4 space-x-4 text-xl font-medium text-gray-700 rounded-md hover:bg-gray-200/80 group"
                        >
                            <HiOutlineBookmark className="w-8 h-8 text-gray-700" />
                            <p>Bookmark</p>
                        </NavLink>
                        <NavLink
                            to="/"
                            className="flex px-2 py-4 space-x-4 text-xl font-medium text-gray-700 rounded-md hover:bg-gray-200/80 group"
                        >
                            <CgProfile className="w-8 h-8 text-gray-700" />
                            <p>Profile</p>
                        </NavLink>

                  
                    </div>
                </div>


                    <div className="flex items-center justify-between w-full ">
                        <div className="flex items-center justify-center space-x-2">
                                <img className="rounded-full w-14 h-14" src={picUrl} alt={name} />
                            <div className="flex flex-col items-start justify-start">
                                <p className="text-base leading-5 text-gray-900 font-semibold cursor-pointer">{name}</p>
                                <p className="text-xs leading-3 text-primary cursor-pointer">@{username}</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;