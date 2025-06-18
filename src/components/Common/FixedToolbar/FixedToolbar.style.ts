import styled from "styled-components";

interface ToolbarProps {
  $top: number;
  $right: number;
}

export const FixedToolbarContainer = styled.div<ToolbarProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 768px;
  position: absolute;
  top: ${(props) => props.$top}px;
  /* right: ${(props) => props.$right}%; */
  z-index: 1000;
  border-bottom: 1px solid black;
  padding: 8px;
`;
