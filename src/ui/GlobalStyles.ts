import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

html {
  box-sizing: border-box;
}

body{
   font-family: 'Noto Sans SC', sans-serif;
   font-weight: 400;
   letter-spacing: -0.3px;
   color: #000000;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

ul[class],
ol[class] {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

ul[class] {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

button {
  display: block;
}

a {
  text-decoration: none;
}



`;
