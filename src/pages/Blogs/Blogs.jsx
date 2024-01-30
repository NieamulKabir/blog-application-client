import { useQuery } from "@tanstack/react-query";
import BlogCard from "../../components/BlogCard/BlogCard";
import toast from "react-hot-toast";
import Loading from "../../components/Loading/Loading";

const Blogs = () => {
  const {
    data: blogs = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const res = await fetch(
        "https://blog-applcation-server.vercel.app/blogs"
      );
      return res.json();
    },
  });

  //delete blog functionality
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://blog-applcation-server.vercel.app/blogs/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Blog Deleted Successfully");
          refetch();
        }
      })
      .catch((er) => {
        toast.error("Blog Not Deleted");
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-600 text-white font-mono py-16">
      <h1 className="text-center text-3xl py-6 font-bold">Our Web-Dev Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 w-3/4 mx-auto gap-10">
        {blogs?.data?.map((blog) => (
          <BlogCard key={blog._id} blog={blog} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
