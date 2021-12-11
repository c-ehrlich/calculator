import { createGlobalStyle } from "styled-components";

import AGExtendedWoff from "./AGExtended.woff";
import AGExtendedWoff2 from "./AGExtended.woff2";
import AGRegularWoff from "./AGRegular.woff";
import AGRegularWoff2 from "./AGRegular.woff2";
import D7MonoWoff from "./D7Mono.woff";
import D7MonoWoff2 from "./D7Mono.woff2";

export default createGlobalStyle`
  @font-face {
    font-family: 'AGExtended';
    src: local('AG Extended'), local('AGExtended'),
    url(${AGExtendedWoff2}) format('woff2'),
    url(${AGExtendedWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'AGRegular';
    src: local('AG Regular'), local('AGRegular'),
    url(${AGRegularWoff2}) format('woff2'),
    url(${AGRegularWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'D7Mono';
    src: local('D7 Mono'), local('D7 Mono'),
    url(${D7MonoWoff2}) format('woff2'),
    url(${D7MonoWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
`;
