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
  ];

  return (
    <>
      {/* Include Navbar */}
      <Nav />
      {/* home section  */}
      <div className="home-content">
      <video autoPlay muted loop className="background-video">
          <source src="/6008028_4k_Beautiful_1920x1080.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1>Welcome to Clyro</h1>
        <p>Discover the latest trends in fashion and elevate your style.</p>
        <button className="shop-now">Shop Now</button>
      </div>
      {/* Product Section */}
      <div className="home-container">
        <h1 className="section-title"></h1>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} className="product-image" />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">{product.price}</p>
              <div className="product-actions">
                <button className="fav-btn">
                  <i className="fas fa-heart"></i>
                </button>
                <button className="cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
