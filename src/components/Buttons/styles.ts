import { transparentize } from "polished";
import styled from "styled-components";
import { colors } from "../../styles/colors";

interface ButtonProps {
  backgroundColor?: "primary" | "secondary";
}

export const Button = styled.button`
  width: 100%;
  max-width: 21.5rem;
  height: 3.125rem;
  background-color: ${(props: ButtonProps) => props.backgroundColor === 'secondary' ? colors.secondaryButtonBackground : colors.primaryButtonBackground}}
  color: var(--button-primary-font-color);
  border-radius: 0.3125rem;
  border: none;

  &:hover {
    background-color: ${(props) => transparentize(0.1, props.backgroundColor === 'secondary' ? colors.secondaryButtonBackground : colors.primaryButtonBackground)};
  }
`;

export const FacebookButton = styled.button`
  background-color: var(--facebook-button-background-color);
  color: var(--button-primary-font-color);
  max-width: 10.3125rem;
  width: 100%;
  height: 2.5rem;
  border-radius: 0.3125rem;
  border: none;

  &:hover {
    background-color: ${transparentize(0.1, colors.facebookButtonBackground)};
  }
`

export const GoogleButton = styled.button`
  background-color: var(--google-button-background-color);
  color: var(--button-primary-font-color);
  max-width: 10.3125rem;
  width: 100%;
  height: 2.5rem;
  border-radius: 0.3125rem;
  border: none;

  &:hover {
    background-color: ${transparentize(0.1, colors.googleButtonBackground)};
  }
`
