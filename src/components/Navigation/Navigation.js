import React from "react";
import { Link } from "gatsby";
import { Flex, Heading } from "@chakra-ui/core";

const Navigation = () => (
  <Flex justify="space-between" p={6}>
    <div>
      <Link to="/venues">Venues</Link>
      <Link to="/rsvp">Table RSVP</Link>
    </div>
    <Link to="/">
      <Heading to="/">XS VIP</Heading>
    </Link>
    <div>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  </Flex>
);

export default Navigation;
