import React from 'react';
const ProductCard = ({ ProductEntity }) => {
  return (
      <div className="card w-72 h-30 bg-base-100 shadow-xl">

<figure>
  <a href="#">
        <img
          className="p-8 rounded-t-lg w-40 h-30"
          src={`http://localhost:3000/customer/getproductimgbyid/${ProductEntity.id}`}

          // src={ProductEntity.Product_Image}
          alt={ProductEntity.Product_Name}
        />
      </a>
      </figure>
      <div className="card-body">
        <a href="#">
          <h5 className="text-sm font-normal tracking-tight text-gray-900 dark:text-white">
            {ProductEntity.Product_Name}
            <div className="badge badge-secondary">NEW</div>
          </h5>
        </a>
        <p>{ProductEntity.Status}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-1">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {ProductEntity.Price}৳
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">BD</span>
          </div>
          {/* <div className="flex items-center space-x-2">
            <a
              href="#"
              className="btn btn-primary btn-sm"
            >
              Add to cart
            </a>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>