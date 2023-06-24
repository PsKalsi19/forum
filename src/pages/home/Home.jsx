
import { useContext } from 'react';
import { ForumContext } from '../../context/ForumProvider';
import Card from '../../components/card/Card';
const Home = () => {
    const { forumState: { forums,sortBy } } = useContext(ForumContext)
    const handleSort=()=>{
        [...forums.posts].sort((a, b) => {
                if (sortBy === 'votes') {
                    return b.upvotes - a.upvotes;
                } else {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                }
            });
    }
    return (
        <div className="my-4">
            <h5 className="text-2xl font-bold text-gray-800">Latest Posts</h5>
            <div className="flex flex-col mt-8 space-y-4">
                {
                    handleSort().length>0 && handleSort().map(post=><Card key={post.postId} postData={post} />)
                }
            </div>

        </div>
    );
};

export default Home;