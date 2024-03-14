import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Select your meals with ease from a wide array of delicious options tailored to your preferences and dietary needs.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Customize how frequently you'd like to receive meal suggestions, empowering you to tailor your eating habits to fit your lifestyle seamlessly.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Experience swift and reliable deliveries, ensuring your meals reach you promptly and conveniently, ready to enjoy.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          
Our streamlined process simplifies meal planning: browse diverse recipes, customize preferences, and let our intuitive app handle the rest—from meal selection to grocery list creation—for hassle-free, nutritious eating.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
