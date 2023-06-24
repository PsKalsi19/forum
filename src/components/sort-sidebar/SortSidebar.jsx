
const SortSidebar = () => {

    return (
        <div className="hidden md:block">
            <div className="flex flex-col">

                <div
                    className="flex flex-col flex-1 h-[90vh]"
                >
                
                    <div className="flex flex-col flex-1 pb-4 overflow-y-auto">
                        <nav className="flex-1 px-2 mt-5 space-y-1">

                            {/* Follow Suggestions */}
                            <div className="pt-8">
                                <div className="block max-w-sm p-6 border border-gray-300 rounded-lg shadow-md w-92 hover:bg-gray-200/80 ">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-500 ">Sort By</h5>
                              
                                </div>
                            </div>

                        </nav>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default SortSidebar;