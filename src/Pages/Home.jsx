import React from "react";
import { SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix } from "../Components/HomeComponents";
import vecOne from "../Images/vec-one.png";
import { Helmet } from "react-helmet-async";

export const Home = () => {
  return (
    <div className=" text-center relative flex Andis flex-col  ">
     <Helmet>
     <title> CRYSTALVEÉY</title>
    <meta name='description' content="Crystalveey   is   a   portfolio   company   encompassing   a   fashion
          merchandize   and   re-commerce   brand   that   produces   quality
          clothing for both male and female, a like-minded community that
          fuses   the   worlds   of   adventure,   fun   and   healthy   lifestyle   and   a
          travel agency that offers affordable vacation packages to various
          destinations.   We   also   provide   consultations   and   an   all-in-one
          resource for exceptional travel and event package. Our team of
          trusted   professionals   are   readily   available   to   ensure   every
          experience is nothing short of the best."/>
    <link rel=" canonical"  href='/'/>
    </Helmet>
        <img src={vecOne} alt="vecOne" className="absolute right-0 w-96 lg:hidden" />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
    </div>
  );
};
