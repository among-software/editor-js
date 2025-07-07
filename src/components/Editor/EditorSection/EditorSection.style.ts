import styled from "styled-components";

export const EditorSectionContainer = styled.div<{
  $width?: string;
}>`
  width: ${({ $width }) => $width || "768px"};
  padding-top: 100px;
  position: relative;
`;
