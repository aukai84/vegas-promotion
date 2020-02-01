import React from "react";
import { Link } from "gatsby";
import { Box } from "@chakra-ui/core";
import { Layout, Image } from "../components";
import SEO from "../components/seo";

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Box width="100%" height="100vh">
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          src="chainsmokers_2.jpg"
          alt="Chainsmokers"
        />
      </Box>
      <Link to="/about">Go to page About</Link>
    </Layout>
  );
};

export default Home;
