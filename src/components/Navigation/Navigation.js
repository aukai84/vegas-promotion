import React from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";
import { Flex, Heading, Link } from "@chakra-ui/core";

const NavLink = ({ to, ...rest }) => (
  <Link
    color="white"
    fontFamily="navigation"
    fontSize="lg"
    fontWeight="medium"
    textDecor="none"
    as={GatsbyLink}
    to={to}
    {...rest}
  />
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
};

const Navigation = () => (
  <Flex position="fixed" width="100%" justify="space-between" p={6} zIndex={1}>
    <Flex width={[1 / 3]} justify="space-around">
      <NavLink to="/venues">Venues</NavLink>
      <NavLink to="/rsvp">Table RSVP</NavLink>
    </Flex>
    <Flex width={[1 / 3]} justify="center">
      <NavLink to="/">
        <Heading to="/">XS VIP</Heading>
      </NavLink>
    </Flex>
    <Flex width={[1 / 3]} justify="space-around">
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </Flex>
  </Flex>
);

export default Navigation;
