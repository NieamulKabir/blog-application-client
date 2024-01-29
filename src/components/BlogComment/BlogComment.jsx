import React from "react";

const BlogComment = ({ comment }) => {
  console.log(comment);
  return (
    <div className="w-1/2 mx-auto">
      <p className="bg-gray-800 my-2 py-3 px-3 rounded-xl text-lg font-mono ">{comment.comment}</p>
      
    </div>
  );
};

export default BlogComment;
