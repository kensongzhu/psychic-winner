import styled from "styled-components";
import { darken, rgba } from "polished";
import { colorYig } from "./utils";

const StyledButton = styled.button`
  color: ${(props) => colorYig(props.theme.primary)};
  background-color: ${(props) => props.theme.primary};
  border-color: ${(props) => props.theme.primary};

  &&&:hover,
  &&&:focus,
  &&&.focus {
    color: ${(props) => colorYig(props.theme.primary)};
    border-color: ${(props) => darken(0.05, props.theme.primary)};
    background-color: ${(props) => darken(0.05, props.theme.primary)};
  }

  &&&&&:focus,
  &&&&&.focus {
    box-shadow: ${(props) => `0 0 0 0.2rem ${rgba(props.theme.primary, 0.5)}`};
  }
`;

export default StyledButton;
