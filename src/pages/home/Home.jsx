
import { useContext } from 'react';
import { ForumContext } from '../../context/ForumProvider';
import Card from '../../components/card/Card';
const Home = () => {
    const { forumState: { forums } } = useContext(ForumContext)
    return (
        <div className="my-4">
            <h5 className="text-2xl font-bold text-gray-800">Latest Posts</h5>
            <div className="flex flex-col mt-8 space-y-4">
                {
                    forums.posts.map(post=><Card key={post.postId} postData={post} />)
                }
            </div>

        </div>
    );
};

export default Home;