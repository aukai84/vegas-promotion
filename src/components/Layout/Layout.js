import React from "react";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider, CSSReset, Box, theme } from "@chakra-ui/core";
import { Navigation } from "../Navigation";
import "./index.css";

const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    navigation: "Montserrat",
  },
};

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Box>
        <Navigation />
        {children}
      </Box>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
