import styled from "styled-components";

export const EditorSectionContainer = styled.div<{
  $width?: string;
}>`
  width: ${({ $width }) => $width || "500px"};
  padding-top: 40px;
  position: relative;
`;
