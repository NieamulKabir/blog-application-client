import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const blogData = {
      title: data.title,
      author: data.author,
      description: data.description,
      image: data.image,
    };
    
    const url = `http://localhost:5000/blogs`;
    axios.post(url, blogData).then((res) => {
      if (res.data.insertedId) {
        toast.success("Added successfully");
        reset();
      }
    });
  };
  return (
    <div className="max-w-screen-xl mx-auto font-mono ">
      <h1 className="text-3xl font-bold text-center mt-6 mb-2 text-white   pt-20">
        Add New Blog
      </h1>
      <div className="mx-auto flex items-center justify-center w-[60%]">
        <form
          className="w-full flex-col items-center text-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-control w-full ">
            <label className="label text-black">
              <span className="label-text text-lg font-semibold text-white">
                Blog Name
              </span>
            </label>
            <input
              {...register("title")}
              name="title"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full text-black"
            />

            <label className="label">
              <span className="label-text text-lg font-semibold text-white">
                Author Name
              </span>
            </label>
            <input
              {...register("author")}
              name="author"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full text-black"
            />

            <label className="label">
              <span className="label-text text-lg font-semibold text-white">
                Blog Image URL
              </span>
            </label>
            <input
              {...register("image")}
              name="image"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full text-black"
            />

            <label className="label">
              <span className="label-text text-lg font-semibold text-white">
                Description
              </span>
            </label>
            <input
              {...register("description")}
              name="description"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full text-black"
            />
          </div>

          <button
            className="btn bg-gray-800 border-0 text-white hover:bg-gray-300 hover:text-black my-3"
            type="submit"
          >
            Add New Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
