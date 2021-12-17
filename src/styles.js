import { css } from "styled-components";

export const embossedText = css`
  text-shadow: 0px -2px 0px #000, 0px -1px 0px #000, 0px 1px 1px #666;
`;
export const embossedTextSvg = css`
  -webkit-filter: drop-shadow(0px 1px 1px #666) drop-shadow(0px -2px 0px #000);
  filter: drop-shadow(0px 1px 1px #666) drop-shadow(0px -2px 0px #000);
`;
