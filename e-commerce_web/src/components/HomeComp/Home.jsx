import React from "react";
import Nav from "../Shaired/Nav/Nav";
import { Link } from "react-router-dom"; // Importing Link from React Router
import "./home.css";

function Home() {

  const products = [
    {
      id: 1,
      image: "/ryan-hoffman-6Nub980bI3I-unsplash.jpg",
      title: "Stylish Shirt",
      price: "$29.99",
    },
    {
      id: 2,
      image: "/ryan-hoffman-6Nub980bI3I-unsplash.jpg",
      title: "Elegant Dress",
      price: "$49.99",
    },
    {
      id: 3,
      image: "/ryan-hoffman-6Nub980bI3I-unsplash.jpg",
      title: "Casual Shoes",
      price: "$39.99",
    },
    {
      id: 4,
      image: "/ryan-hoffman-6Nub980bI3I-unsplash.jpg",
      title: "Classic Watch",
      price: "$99.99",
    },
    {
      id: 5,
      image: "/ryan-hoffman-6Nub980bI3I-unsplash.jpg",
      title: "Classic belt",
      price: "$99.99",
    },
    {
      id: 6,
      image: "/ryan-hoffman-6Nub980bI3I-unsplash.jpg",
      title: "hat",
      price: "$99.99",
    },
  ];
  // target page implementann//
  const scrollToSelection=()=>{
    const targetSection= document.getElementById('targetSection');
    targetSection.scrollIntoView({behavior:'smooth'});
  }
// target implemrnt over//


  return (
    <>
      {/* Navbar */}
      <Nav />
      <div className="relative flex flex-col justify-center items-center text-center text-white h-[calc(100vh-70px)] overflow-hidden home-content z-10">
        <img className="absolute inset-0 w-full h-full object-cover background-video"
          src="/bannerhome.png">
        </img>
        {/* <h1 className="text-4xl font-bold z-1 ">Welcome to Clyro</h1>
        <p className="text-xl font-bold my-6 z-10">
          Discover the latest trends in fashion and elevate your style.
        </p> */}
        <button className="bg-[#D97C52] text-white py-2 px-6 rounded-lg hover:bg-[#A65A3C] transition duration-300 z-10" onClick={scrollToSelection}>
          Shop Now
        </button>
      </div>
      {/* sticky bacimage */}
      <div className="background-images"></div>
      {/* Product Grid */}
      <div className="container mx-auto px-4 py-16 bg-[#f9f9f9] home-container">
        <h1 className="text-3xl text-center mb-8">Shop Our Collection</h1>
        <div className="product-grid" id="targetSection">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-4 product-image"
              />
              <h2 className="text-xl font-semibold mb-2 product-title">
                {product.title}
              </h2>
              <p className="text-[#D97C52] text-lg mb-4 product-price">
                {product.price}
              </p>
              <div className="flex justify-between items-center px-4 py-2 product-actions">
                {/* Favorite Button */}
                <button className="fav-btn">
                  <i className="fas fa-heart" ></i>
                </button>

                {/* Cart Button */}
                <button className="cart-btn">
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
