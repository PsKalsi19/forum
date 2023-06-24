/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import forumData from "../db/forumData";

// const forumReducer = (state, { type, payload }) => {
//     const {forums,sortBy}=state
//     switch (type) {
//         case FORUM_ACTIONS.UPVOTE:
//         return  {...state,forums:forums.posts.map(ele => ele.postId === payload ? ({ ...ele, upvotes: ele.upvotes + 1 }) : ele)}
//         case FORUM_ACTIONS.DOWNVOTE:
//             return { ...state, forums: forums.posts.map(ele => ele.postId === payload ? ({ ...ele, downvotes: ele.downvotes + 1 }) : ele) }

//         default:
//             return state;
//     }
// }

export const ForumContext = createContext()
const ForumProvider = ({ children }) => {

    const [forumState, setForumState] = useState({
        forums: forumData,
        sortBy: "votes"
    })
    const { forums } = forumState

    const handleUpVote = (id) => {
        const data = forums.posts.map(ele => ele.postId === id ? ({ ...ele, upvotes: ele.upvotes + 1 }) : ele)
        const updatedForumData = { ...forums, posts: data };
        setForumState({ ...forumState, forums: updatedForumData })
    }

    const handleDownVote = (id) => {
        const data = forums.posts.map(ele => ele.postId === id ? ({ ...ele, downvotes: ele.downvotes + 1 }) : ele)
        const updatedForumData = { ...forums, posts: data };
        setForumState({ ...forumState, forums: updatedForumData })
    }
    const toggleBookMark = (id) => {
        const data = forums.posts.map(ele => ele.postId === id ? ({ ...ele, isBookmarked: !ele.isBookmarked }) : ele)
        const updatedForumData = { ...forums, posts: data };
        setForumState({ ...forumState, forums: updatedForumData })
    }

    const handleSortBy = (type) => {
        setForumState({ ...forumState, sortBy: type })
    };
    return (
        <ForumContext.Provider value={{ forumState, setForumState, handleUpVote, handleDownVote, toggleBookMark, handleSortBy }}>
            {children}
        </ForumContext.Provider>
    );
};

export default ForumProvider;