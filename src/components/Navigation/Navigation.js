import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2.25rem 0;
`;

const NavHeader = styled(Link)`
  font-weight: 600;
`;

const NavItem = styled(Link)``;

const Navigation = () => (
  <Wrapper>
    <div>
      <NavItem to="/venues">Venues</NavItem>
      <NavItem to="/rsvp">Table RSVP</NavItem>
    </div>
    <div>
      <NavHeader to="/">XS VIP</NavHeader>
    </div>
    <div>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/contact">Contact Us</NavItem>
    </div>
  </Wrapper>
);

export default Navigation;
