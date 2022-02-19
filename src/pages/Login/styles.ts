import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.div`
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 2.5rem 1rem;
`;

export const Box = styled.main`
  display: flex;
  flex-direction: column;
  background: var(--container-background);
  max-width: 840px;
  height: 841px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 212px;
`;

export const MainText = styled.h1`
  color: var(textColor);
  `;

export const InputGroup = styled.div`
  /* margin-top: 2.25rem; */

   
  position: relative;
  max-width: 21.5rem;
  height: 3.125rem;
  width: 100%;
  border-radius: 0.3125rem;
  border: 1px solid var(--input-border-color);
`

export const InputText = styled.input`
  background-color: var(--input-background-color);
  position: absolute;
  padding-left: 2.2rem;
  padding-right: 0.5rem;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0.3125rem;
  &::placeholder {
    /* padding-left: 0.5rem; */
    color: var(--placeholder-font-color);
    }
`;

export const InputIcon = styled.img`
  position: absolute;
  z-index: 1;
  top: 0.88rem;
  left: 0.6rem;
  width: 1.2rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 21.5rem;
  height: 100%;
  padding: 0.5rem;
  align-items: center;
  /* border: 1px solid; */
`;

export const Link = styled.button`
  background: none;
  border: none;
  color: var(--link-button-color);
  &:hover {
    color: ${transparentize(0.2, "#1A4F8B")};
  }
`;

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

export const SocialMediaWrapper = styled.span`
  display: flex;
  width: 100%;
`

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


