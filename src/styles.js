import { css } from "styled-components";

export const embossedText = css`
  text-shadow: 0px -2px 0px #000, 0px -1px 0px #000, 0px 1px 1px #666;
`;
export const embossedTextSvg = css`
  -webkit-filter: drop-shadow(0px 1px 1px #666) drop-shadow(0px -2px 0px #000);
  filter: drop-shadow(0px 1px 1px #666) drop-shadow(0px -2px 0px #000);
`;

// hiding elements with `display: none` also hides it from some assistive technologies
// this css creates a hidden element that can still be seen by screen readers etc
export const visuallyHidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: auto;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`;
