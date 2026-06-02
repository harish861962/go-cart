// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function Contact(){
// return(
// <>
// <Navbar/>
// <Footer/>
// </>
// )
// }


import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
  return (
    <>
     <Navbar/>
 
    <div className="contact-container">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We're here to help. Get in touch with us anytime.</p>
      </div>

      <div className="contact-content">

        <div className="contact-info">
          <h2>Contact Information</h2>

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>123 Shopping Street, Jaipur, Rajasthan, India</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+91 9876543210</p>
          </div>

          <div className="info-box">
            <h3>✉️ Email</h3>
            <p>support@yourdailyneed.com</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Message</h2>

          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea rows="5" placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>

      {/* Google Map Section */}
      <div className="map-section">
        <h2>Find Us On Map</h2>

        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Jaipur,Rajasthan&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

    </div>
    <Footer/>
    </>
  );
}