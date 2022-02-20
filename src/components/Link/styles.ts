import { transparentize } from "polished";
import styled from "styled-components";

export const Link = styled.button`
  background: none;
  border: none;
  color: var(--link-button-color);
  &:hover {
    color: ${transparentize(0.2, "#1A4F8B")};
  }
`;