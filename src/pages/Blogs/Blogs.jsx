import { useQuery } from "@tanstack/react-query";
import BlogCard from "../../components/BlogCard/BlogCard";

const Blogs = () => {
  const {
    data: blogs = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/blogs");
      return res.json();
    },
  });
 
  return (
    <div className="bg-gray-600 text-white font-mono py-16">
      <h1 className="text-center text-3xl py-6 font-bold">Our Web-Dev Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 w-3/4 mx-auto gap-10">
        {blogs?.data?.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
