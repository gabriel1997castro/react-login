import styled from "styled-components"

export const ToolTip = styled.div`
  position: relative;
  display: inline-block;
`

export const ToolTipText = styled.span`
  width: 16rem;
  visibility: hidden;
  background-color: var(--tooltip-background-color);
  color: var(--tooltip-font-color);
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: justify;
  position: absolute;
  z-index: 2;
  bottom: 1.5rem;
  left: -5rem;
  margin-left: 5rem;
  :after {
    position: absolute;
    top: 1rem;
    left: 2rem;
    margin-left: -0.3rem;
    border: 0.3rem solid;
  }
  ${ToolTip}:hover & {
    visibility: visible;
  }
`;
