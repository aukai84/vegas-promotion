import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavHeader = styled(Link)``;
const NavItem = styled(Link)``;

const Navigation = () => (
  <div>
    <NavHeader to="/">XS Nightclub Promotion</NavHeader>
    <NavItem to="/about">About</NavItem>
    <NavItem to="/rsvp">Table RSVP</NavItem>
    <NavItem to="/venues">Venues</NavItem>
  </div>
);

export default Navigation;
