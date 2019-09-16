import React from "react";
import { Link } from "gatsby";

import { Layout, Image } from "../components";
import SEO from "../components/seo";

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>This is the feature branch PR was edited!!!!</h1>
      <h1>Hi people</h1>
      <h2>test</h2>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image src="alesso_1.jpg" alt="Alesso" />
      </div>
      <Link to="/about">Go to page About</Link>
    </Layout>
  );
};

export default Home;
