import styled from "styled-components";
import { lighten, rgba } from "polished";

export const StyledInput = styled.input`
  &&&:focus,
  &&&.focus {
    border-color: ${(props) => lighten(0.05, props.theme.primary)};
    box-shadow: ${(props) => `0 0 0 0.2rem ${rgba(props.theme.primary, 0.25)}`};
  }
`;

export const StyledSelect = styled.select`
  &&&:focus,
  &&&.focus {
    border-color: ${(props) => lighten(0.05, props.theme.primary)};
    box-shadow: ${(props) => `0 0 0 0.2rem ${rgba(props.theme.primary, 0.25)}`};
  }
`;
