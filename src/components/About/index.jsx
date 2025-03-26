import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="floating-box">
        <h1 className="display-4">About</h1>
        <p className="lead">Who We Are</p>
        <p className="answer">
          Welcome to EShop, your one-stop shop for daily essentials. We are committed to providing high-quality products at the best prices, with a seamless shopping experience and top-notch customer support.
        </p>

        <p className="lead">Our Mission</p>
        <p className="answer">
          At EShop, we believe that shopping should be easy, affordable, and enjoyable. Our mission is to bring you the latest and greatest products while ensuring fast shipping, secure payments, and hassle-free returns.
        </p>

        <p className="lead">Why Choose Us?</p>
        <ul className="answer">
          <li>✅ <strong>Premium Quality:</strong> We handpick the best products to ensure top-notch quality.</li>
          <li>✅ <strong>Secure Payments:</strong> Your transactions are protected with the latest security technologies.</li>
          <li>✅ <strong>Fast Shipping:</strong> We deliver quickly to your doorstep, wherever you are.</li>
          <li>✅ <strong>Excellent Support:</strong> Our customer service team is here to assist you 24/7.</li>
        </ul>

        <p className="lead">Join Our Community</p>
        <p className="answer">
          Follow us on Twitter and subscribe to our newsletter to stay updated on the latest deals and trends!
          <br /><br />
          💌 <strong>Contact Us:</strong> Have a question? Reach out at eshop@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default About;