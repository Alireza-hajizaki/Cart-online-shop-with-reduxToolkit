import React from "react";
import { useGetAllProductsQuery } from "../Redux/slices/productsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/slices/cartSlice";



const Main = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured..</p>
      ) : (
        <>
          <h2>New Arrials</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={`/${product.image}`} alt={product.name}></img>
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
