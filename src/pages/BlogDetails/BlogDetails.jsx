import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  let { id } = useParams();

  const {
    data: blogsDetails = {},
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["blogDetails", id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/blogs/${id}`);
      return res.json();
    },
  });
  console.log(blogsDetails);

  return (
    <div className="pt-28 pb-10 text-white">
      <div className="card card-compact w-3/4 mx-auto bg-gray-800 shadow-xl">
        <figure>
          <img className="w-full h-60" src={blogsDetails?.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{blogsDetails?.title}</h2>
          <p className="text-green-600 font-mono font-bold"> <span>Author</span>: {blogsDetails?.author}</p>
          <p>{blogsDetails?.description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
