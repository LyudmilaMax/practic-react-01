import styled from 'styled-components';

// export const Text = styled.p`
//   font-size: 18px;
//   background-color: aqua;
//   color: red;

//   &:hover {
//     background-color: green;
//   }
// `;

// export const SpanText = styled.span`
//   color: blue;
//   ${Text}:hover & {
//     color: pink;
//   }
// `;

export const SpanText = styled.span`
  color: orangered;
  color: ${({ isGreen }) => (isGreen ? 'green' : 'orangered')};
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 18px;
  background-color: aqua;
  color: blue;
  &:hover {
    background-color: green;
  }
  &:hover ${SpanText} {
    color: yellow;
  }
`;
