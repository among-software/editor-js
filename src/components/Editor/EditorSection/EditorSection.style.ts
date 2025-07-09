import styled from "styled-components";

export const EditorSectionContainer = styled.div<{
  $width?: string;
}>`
  width: ${({ $width }) => {
    if (!$width) return "768px";

    const match = $width.match(/^(\d+)(px)?$/);
    if (!match) return $width;

    const num = parseInt(match[1], 10);
    return `${num + 40}px`;
  }};
  padding-top: 80px;
  position: relative;
  border: 1px solid #dedede;
`;
