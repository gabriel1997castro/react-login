import { transparentize } from "polished";
import styled from "styled-components";

interface ButtonProps {
  backgroundColor?: "primary" | "secondary";
}

export const Button = styled.button`
  width: 100%;
  max-width: 21.5rem;
  height: 3.125rem;
  background-color: ${(props: ButtonProps) => props.backgroundColor === 'secondary' ? "#BF1541" : "#1A4F8B"}}
  color: var(--button-primary-font-color);
  border-radius: 0.3125rem;
  border: none;

  &:hover {
    background-color: ${transparentize(0.1, "#1A4F8B")};
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
    background-color: ${transparentize(0.1, "#385C8E")};
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
    background-color: ${transparentize(0.1, "#F14436")};
  }
`
