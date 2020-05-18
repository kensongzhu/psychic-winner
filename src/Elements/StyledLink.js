import styled from "styled-components";
import { darken } from "polished";
import { Link } from "react-router-dom";

export const RouteLink = styled(Link)`
  color: ${(props) => props.theme.primary};

  &:hover,
  &:focus,
  &.focus,
  &:active {
    color: ${(props) => darken(0.05, props.theme.primary)};
  }
`;

export const FooterLink = styled.a`
  color: black;

  &&&:hover,
  &&&:focus,
  &&&:active {
    color: ${(props) => darken(0.05, props.theme.primary)};
  }
`;
