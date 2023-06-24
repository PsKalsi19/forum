import { Link, useLocation } from "react-router-dom";
import Card from "../../components/card/Card";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";



const Post = () => {
    const location = useLocation()
    console.log(location);
    const { state: post } = location
    return (
        <div>
            <div className="flex items-center flex-row space-x-4">
                <Link to="/">
                    <ArrowLeftIcon  className="h-6 w-6 text-gray-500" />
                </Link>
                <h5 className="text-2xl font-bold text-gray-800">Post</h5>
            </div>
            <div className="flex flex-col mt-8">
                    <Card key={post.postId} postData={post} />

                </div> 
        </div>
    );
};

export default Post;