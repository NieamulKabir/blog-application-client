
import { NavLink } from "react-router-dom";


const BlogCard = ({ blog,handleDelete }) => {
  const { _id, title, image, description } = blog;

 

  return (
    <div>
      <div className="card card-compact  bg-slate-700 shadow-xl cursor-pointer md:h-[500px]">
        <figure>
          <img className="bg-cover w-full h-60" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <p>{description.slice(0, 150)}...</p>
          <div className="card-actions justify-end">
            <NavLink to={`/blogs/${_id}`}>
              <button className="btn bg-gray-700 text-white hover:bg-slate-600">
                See More..
              </button>
            </NavLink>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
