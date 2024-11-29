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
      brand: "clyro",
      price: "$29.99",
    },
    {
      id: 2,
      image: "/ryan-hoffman-6Nub980bI3I-unsplash.jpg",
      title: "Elegant Dress",
      brand: "clyro",
      price: "$49.99",
    },
    {
      id: 3,
      image: "/ryan-hoffman-6Nub980bI3I-unsplash.jpg",
      title: "Casual Shoes",
      brand: "clyro",
      price: "$39.99",
    },
    {
      id: 4,
      image: "/ryan-hoffman-6Nub980bI3I-unsplash.jpg",
      title: "Classic Watch",
      brand: "clyro",
      price: "$99.99",
    },
    {
      id: 5,
      image: "/ryan-hoffman-6Nub980bI3I-unsplash.jpg",
      title: "Classic belt",
      brand: "clyro",
      price: "$99.99",
    },
    {
      id: 6,
      image: "/ryan-hoffman-6Nub980bI3I-unsplash.jpg",
      title: "hat",
      brand: "clyro",
      price: "$99.99",
    },
    {
      id: 7,
      image: "/ryan-hoffman-6Nub980bI3I-unsplash.jpg",
      title: "hat",
      brand: "clyro",
      price: "$99.99",
    },
    {
      id: 8,
      image: "/ryan-hoffman-6Nub980bI3I-unsplash.jpg",
      title: "hat",
      brand: "clyro",
      price: "$99.99",
    },
  ];

  // target page implementation
  const scrollToSelection = () => {
    const targetSection = document.getElementById('targetSection');
    targetSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Navbar */}
      <Nav />
      <div id="carouselExampleAutoplaying" className="carousel slide container" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner"> 
          <div className="carousel-item active">
            <img src="/bannerhome.png" className="d-block w-100 img-fluid" alt="..." />
         
          </div>
          <div className="carousel-item">
            <img src="/bannerhome.png" className="d-block w-100 h-10 img-fluid" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/bannerhome.png" className="d-block w-100 h-10 img-fluid" alt="..." />
          </div>
        </div>
      </div>

      {/* sticky background image */}
      <div className="background-images"></div>
       {/* product gris */}
      <div className="container my-5">
        <h1 className="text-center mb-5 text-black">Our Products</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {products.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-0">
                {/* Image with responsive size */}
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title text-dark">{product.title}</h5>
                  <p className="card-text text-dark">${product.price}</p>

                  {/* Add to Cart and Favorite buttons with FontAwesome icons */}
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-dark btn-sm">
                      <i className="fas fa-cart-plus me-2"></i>Cart
                    </button>
                    <button className="btn btn-outline-dark btn-sm">
                      <i className="fas fa-heart me-2"></i> Favorite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
