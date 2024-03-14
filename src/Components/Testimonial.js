import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        This food app has revolutionized eating habits! It makes meal planning effortless and introduces users to delicious, nutritious recipes they wouldn't have tried otherwise. Highly recommended for anyone seeking convenience and healthy eating
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Passionate about promoting healthy living through nutritious and delicious meals. Join me on a journey to discover the joys of balanced eating
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Krishnaveni N</h2>
      </div>
    </div>
  );
};

export default Testimonial;
