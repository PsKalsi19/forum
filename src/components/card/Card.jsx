import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { ShareIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";

import { GiPlainCircle } from "react-icons/gi";
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ForumContext } from "../../context/ForumProvider";



const Card = ({ postData }) => {
    const {handleUpVote,handleDownVote,toggleBookMark}=useContext(ForumContext)
    const {
        postId,
        username,
        name,
        picUrl,
        post,
        postDescription,
        upvotes,
        downvotes,
        tags,
        createdAt,
        comments,
        isBookmarked
    } = postData
    const location = useLocation()
    return (
        <div className="rounded-sm bg-gray-50 shadow-sm py-4 pl-4 pr-6 ">
            <div className="flex space-x-4 flex-row">
                <div className="flex flex-col space-y-2  items-center">
                    <AiFillCaretUp onClick={()=>handleUpVote(postId)} className="h-12 w-14 text-gray-500" />
                    <span className="text-sm font-bold text-primary">{upvotes - downvotes}</span>
                    <AiFillCaretDown onClick={()=>handleDownVote(postId)} className="h-12 w-14 text-gray-500" />
                </div>
                <div className="flex space-y-1 flex-col">
                    <div className="flex flex-row items-center space-x-2 ">
                        <img className="rounded-full w-10 h-10" src={picUrl} alt={name} />
                        <p className="text-base text-gray-500 font-medium">Posted by</p>
                        <p className="text-base leading-3 text-primary font-semibold">@{username}</p>
                        <GiPlainCircle className="text-[0.5rem] text-gray-500 font-medium" />
                        <p className="text-base text-gray-500 font-medium">{`${new Date(createdAt).getHours()}h ${new Date(createdAt).getMinutes()}m`}</p>
                    </div>
                    <h3 className="text-gray-800 font-bold py-0 mt-1 text-xl">{post}</h3>
                    <p className="pb-2">{tags && tags.length > 0 && tags.map((tag, index) => <small key={index} className="text-primary text-[0.5rem] font-bold mr-2 px-2.5 py-0.5 rounded-md uppercase bg-indigo-100 ">{tag}</small>)
                    } </p>
                    <p className="text-base border-b border-gray-300 pb-2 leading-6 text-justify text-gray-700 font-medium">{postDescription}</p>
                    <div className="flex pt-2 flex-row justify-between">
                        <Link to="/post" state={postData}>
                            <ChatBubbleLeftIcon  className="h-6 w-6 text-gray-500" />
                        </Link>
                        <ShareIcon className="h-6 w-6 text-gray-500" />
                        <BookmarkIcon onClick={()=>toggleBookMark(postId)} className={`h-6 w-6 ${isBookmarked?'  fill-primary text-primary':'text-gray-500'}`} />
                    </div>
                </div>
            </div>
            {/* For comments */}
            { location.pathname==='/post' &&
                comments && comments.length > 0 && comments.map((singleComment, index) =>
                    <div className="flex mt-8 flex-row space-x-4" key={index}>
                        <img className="rounded-full w-12 h-12" src={singleComment.picUrl} alt={singleComment.name} />
                        <div className="flex w-full space-y-1 flex-col">
                            <div className="flex flex-row items-center space-x-2 ">
                                <p className="text-base text-gray-800 font-bold">{singleComment.name}</p>
                                <p className="text-base leading-3 text-gray-500 font-semibold">@{singleComment.username}</p>
                                <GiPlainCircle className="text-[0.5rem] text-gray-500 font-medium" />
                                <p className="text-base text-gray-500 font-medium">{`${new Date(singleComment.createdAt).getHours()}h ${new Date(singleComment.createdAt).getMinutes()}m`}</p>
                            </div>
                            <p className=" font-medium text-gray-500">Replying to <span className="text-primary">{username}</span>
                            </p>
                            <p className="text-base w-full leading-6 text-justify text-gray-700 font-medium">{singleComment.comment}</p>
                            <div className="flex w-full flex-grow pt-2 flex-row justify-between">
                                <p className="flex flex-row space-x-2">
                                    <HeartIcon className="h-4 w-4 text-gray-500" />
                                    <span className="text-gray-500">{singleComment.likes}</span>
                                </p>
                                <ChatBubbleLeftIcon className="h-4 w-4 text-gray-500" />
                                <ShareIcon className="h-4 w-4 text-gray-500" />


                            </div>
                        </div></div>)
            }
        </div>
    );
};

export default Card;