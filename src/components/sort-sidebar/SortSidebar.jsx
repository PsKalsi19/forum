
import { useContext } from 'react';
import { ForumContext } from '../../context/ForumProvider';
const SortSidebar = () => {
    const {handleSortBy,forumState:{sortBy}}=useContext(ForumContext)

    return (
        <div className="hidden md:block">
            <div className="flex flex-col">

                <div
                    className="flex flex-col flex-1 h-[90vh]"
                >

                    <div className="flex flex-col flex-1 pb-4 overflow-y-auto">
                        <nav className="flex-1 px-2 mt-5 space-y-1">

                            <div className="pt-8">
                                <div className="block  p-6 border border-gray-300 rounded-lg shadow-md w-92 hover:bg-gray-200/80 ">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-500 ">Sort By</h5>
                                    <select className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary  block w-80 p-2.5 bg-gray-100  placeholder-gray-400  ' value={sortBy} onChange={(e)=>handleSortBy(e.target.value)}>
                                        <option value="votes">Upvote</option>
                                        <option value="date">Date</option>
                                    </select>
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