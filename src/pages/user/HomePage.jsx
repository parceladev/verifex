// eslint-disable-next-line no-unused-vars
import React from "react";
import Jumbotron from "../../components/homes/Jumbotron";
import Tagline from "../../components/homes/Tagline";
import Statistic from "../../components/homes/Statistic";
const HomePage = () => {
  return (
    <section className="flex flex-col mx-auto justify-center min-h-screen bg-primary max-w-[1150px] font-sans ">
      <Jumbotron />
      <Tagline />
      <Statistic/>
    </section>
  );
};

export default HomePage;
