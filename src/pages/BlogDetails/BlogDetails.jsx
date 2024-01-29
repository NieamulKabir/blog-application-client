import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import BlogComment from "../../components/BlogComment/BlogComment";

const BlogDetails = () => {
  let { id } = useParams();

  // get blogDetails by id
  const { data: blogsDetails = {} } = useQuery({
    queryKey: ["blogDetails", id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/blogs/${id}`);
      return res.json();
    },
  });

  //post comment in dataBase
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
        refetch();
      }
    });
  };

  //get all comment
  const { data: allComments = [], refetch } = useQuery({
    queryKey: ["allComments"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/comments`);
      return res.json();
    },
  });
 

  //filter comment by blogId
  const blogComments = allComments?.data?.filter(
    (blogComment) => blogComment.blogId === id
  );


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

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("comment")}
            type="text"
            placeholder="Comment Here"
            className="input input-bordered md:w-full  md:max-w-sm mx-w-xs bg-gray-500 text-white mx-4 my-3"
          />
          <input
            className="btn font-bold bg-gray-500 text-white hover:text-black ml-4 mb-4"
            type="submit"
          />
        </form>
      </div>
      <div>
        <h1 className="text-center text-4xl font-mono font-bold my-4">
          Blog Comments
        </h1>
        <div>
          {blogComments?.map((comment) => (
            <BlogComment key={comment._id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
