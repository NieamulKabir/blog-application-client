const BlogCard = ({ blog }) => {
  const { title, image, description } = blog;
  return (
    <div>
      <div className="card card-compact  bg-slate-700 shadow-xl cursor-pointer">
        <figure>
          <img className="bg-cover w-full h-60" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <p>{description.slice(0, 150)}...</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
