// import React from "react";


// export default function Aboutus(){
// return(
// <>
// 
// </>
// )
// }

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <>
    <Navbar/>
 
    <div className="about-container">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          Your trusted online shopping destination for quality products at
          affordable prices.
        </p>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1000"
            alt="About Us"
          />
        </div>

        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Welcome to Your Daily Need. We are passionate about providing
            customers with a seamless online shopping experience. Our platform
            offers a wide range of products including electronics, fashion,
            home essentials, and much more.
          </p>

          <p>
            We focus on quality, affordability, and customer satisfaction.
            Every product is carefully selected to ensure the best experience
            for our customers.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <h2>Why Choose Us?</h2>

        <div className="features-grid">

          <div className="feature-card">
            <h3>🚚 Fast Delivery</h3>
            <p>Quick and reliable delivery across the country.</p>
          </div>

          <div className="feature-card">
            <h3>💳 Secure Payments</h3>
            <p>Safe and trusted payment options for every order.</p>
          </div>

          <div className="feature-card">
            <h3>⭐ Quality Products</h3>
            <p>Handpicked products with guaranteed quality.</p>
          </div>

          <div className="feature-card">
            <h3>🎧 24/7 Support</h3>
            <p>Dedicated customer support whenever you need help.</p>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">

        <div className="stat-box">
          <h2>10K+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-box">
          <h2>5K+</h2>
          <p>Products</p>
        </div>

        <div className="stat-box">
          <h2>500+</h2>
          <p>Daily Orders</p>
        </div>

        <div className="stat-box">
          <h2>99%</h2>
          <p>Customer Satisfaction</p>
        </div>

      </section>

    </div>
    <Footer/>
    </>
  );
}