import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Slider from "react-slick";
import { Image } from "@chakra-ui/core";
import { Layout } from "../components";
import SEO from "../components/seo";

const CarouselImage = ({ src, alt }) => (
  <Image src={src} alt={alt} width="100%" height="100vh" objectFit="cover" />
);

CarouselImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const Home = () => {
  const settings = {
    infinite: true,
    fade: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <Layout>
      <SEO title="Home" />
      <Slider {...settings}>
        <CarouselImage src="/resources/chainsmokers_2.jpg" alt="Chainsmokers" />
        <CarouselImage src="/resources/diplo_1.jpg" alt="Diplo" />
        <CarouselImage src="/resources/drake-cover.jpg" alt="Drake" />
        <CarouselImage
          src="/resources/chainsmokers_3.jpg"
          alt="Chainsmokers_3"
        />
      </Slider>
      <Link to="/about">Go to page About</Link>
    </Layout>
  );
};

export default Home;
