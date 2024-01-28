import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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

  const { data: allComments = [] } = useQuery({
    queryKey: ["allComments"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/comments`);
      return res.json();
    },
  });
  console.log(allComments.data);

  const blogComments = allComments?.data?.filter(
    (blogComment) => blogComment.blogId === id
  );
  console.log(blogComments);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const blogId = id;
    const value = {
      blogId,
      comment: data.comment,
    };
    const url = `http://localhost:5000/comment`;
    axios.post(url, value).then((res) => {
      if (res.data.insertedId) {
        toast("Added successfully");
        reset();
      }
    });
  };
  return (
    <div className="pt-28 pb-10 text-white">
      <div className="card card-compact w-3/4 mx-auto bg-gray-800 shadow-xl">
        <figure>
          <img className="w-full h-60" src={blogsDetails?.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{blogsDetails?.title}</h2>
          <p className="text-green-600 font-mono font-bold">
            {" "}
            <span>Author</span>: {blogsDetails?.author}
          </p>
          <p>{blogsDetails?.description}</p>
        </div>

        <form  onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("comment")}
            type="text"
            placeholder="Comment Here"
            className="input input-bordered md:w-full  md:max-w-sm mx-w-xs bg-gray-500 text-white mx-4 my-3"
          />
          <input className="btn font-bold bg-gray-500 text-white hover:text-black ml-4 mb-4" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default BlogDetails;
