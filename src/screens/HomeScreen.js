import React from "react";
import Newsletter from "../components/Newsletter";
import FollowUs from "../components/FollowUs";
import FromBlog from "../components/FromBlog";
import TheLook from "../components/TheLook";
import GoodToKnow from "../components/GoodToKnow";
import NewIn from "../components/NewIn";
import Hero from "../components/Hero";

const HomeScreen = () => {
  return (
    <>
      <div className="mb-3 mt-16 lg:mb-7 lg:mt-36">
        <Hero />
        <NewIn />
        <GoodToKnow />
        <TheLook />
        <FromBlog />
        <FollowUs />
        <Newsletter />
      </div>
    </>
  );
};

export default HomeScreen;
