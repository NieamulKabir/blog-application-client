import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Fetch wishlist data from local storage when the component mounts
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []); // Empty dependency array ensures the effect runs only once on component mount
  
  return (
    <div className="pt-20 text-white font-mono h-max">
      <div className="pb-80">
        <h1 className="text-center text-3xl font-bold">Wishlist</h1>
        {wishlist.length === 0 ? (
          <p className="text-white text-center   text-xl mt-2">No items in wishlist</p>
        ) : (
          wishlist.map((item,index) => (
            <div key={index} className="w-1/2 mx-auto">
              <p className="bg-gray-800 my-2 py-3 px-3 rounded-xl text-lg font-mono ">
                
                {item.title}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
