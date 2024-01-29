import React from "react";

const BlogComment = ({ comment }) => {
  return (
    <div className="w-1/2 mx-auto">
      <p className="bg-gray-800 my-2 py-3 px-3 rounded-xl text-lg font-mono ">{comment.comment}</p>
      {/* <div className="card w-1/2 bg-gray-800 mx-auto text-neutral-content">
        <div className="card-body items-center text-center">
          <p className="">{comment.comment}</p>
        </div>
      </div> */}
    </div>
  );
};

export default BlogComment;
