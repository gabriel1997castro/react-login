import styled from "styled-components";


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