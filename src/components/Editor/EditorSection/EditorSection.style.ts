import styled from "styled-components";

export const EditorSectionContainer = styled.div<{
  $width?: string;
}>`
  width: ${({ $width }) => $width || "768px"};
  padding-top: 80px;
  position: relative;
  border: 1px solid #dedede;
`;
