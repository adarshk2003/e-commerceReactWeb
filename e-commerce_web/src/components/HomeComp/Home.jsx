import React from "react";
import Nav from "../Shaired/Nav/Nav";
import "./home.css";

function Home() {
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/200",
      title: "Stylish Shirt",
      price: "$29.99",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/200",
      title: "Elegant Dress",
      price: "$49.99",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/200",
      title: "Casual Shoes",
      price: "$39.99",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/200",
      title: "Classic Watch",
      price: "$99.99",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/200",
      title: "Classic belt",
      price: "$99.99",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/200",
      title: "hat",
      price: "$99.99",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <Nav />
      {/* Video Background */}  ``
      <div className="relative flex flex-col justify-center items-center text-center text-white h-[calc(100vh-70px)] overflow-hidden home-content">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover background-video">
          <source src="/CLYRO intro [578C790].mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className="text-4xl font-bold z-10 ">Welcome to Clyro</h1>
        <p className="text-xl font-bold my-6 z-10 ">Discover the latest trends in fashion and elevate your style.</p>
        <button className="bg-[#D97C52] text-white py-2 px-6 rounded-lg hover:bg-[#A65A3C] transition duration-300 z-10">
          Shop Now
        </button>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-16 bg-[#f9f9f9] home-container">
        <h1 className="text-3xl  text-center mb-8">Shop Our Collection</h1>
        <div className="product-grid">
          {products.map((product) => (
            <div
              className="product-card "
              key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-4 product-image"
              />
              <h2 className="text-xl font-semibold mb-2 product-title">{product.title}</h2>
              <p className="text-[#D97C52] text-lg mb-4 product-price">{product.price}</p>
              <div className="flex justify-between items-center px-4 py-2 product-actions">
                <button className="fav-btn text-xl hover:text-[#D97C52] transform transition duration-200 hover:scale-110 text-gray-800">
                  <i className="fas fa-heart"></i>
                </button>
                <button className="cart-btn bg-[#007BFF] text-white py-2 px-4 rounded-lg hover:bg-[#0056b3] transition duration-300">
                  Add to Cart
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
