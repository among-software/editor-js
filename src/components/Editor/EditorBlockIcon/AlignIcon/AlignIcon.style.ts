// ✅ AlignIcon.style.ts
import styled from "styled-components";

export const AlignIcon = styled.div<{
  $align: "left" | "center" | "right" | "justify";
}>`
  width: 25px;
  height: 25px;
  background-repeat: no-repeat;
  background-size: ${({ $align }) =>
    $align === "justify" ? "24px 24px" : "auto"};
  background-position: ${({ $align }) => {
    switch ($align) {
      case "left":
        return "1px -292px";
      case "center":
        return "1px -334px";
      case "right":
        return "1px -376px";
      default:
        return "center";
    }
  }};

  background-image: ${({ $align }) => {
    if ($align === "justify") {
      return "url('/assets/icons/justify.svg')";
    }
    return "url('https://t1.daumcdn.net/brunch/static/img/help/pc/editor/btn_side.v2.png')";
  }};

  cursor: pointer;

  &:hover {
    background-image: ${({ $align }) => {
      if ($align === "justify") {
        return "url('/assets/icons/justify-hover.svg')";
      }
      return undefined;
    }};
    background-position: ${({ $align }) => {
      switch ($align) {
        case "left":
          return "-29px -292px";
        case "center":
          return "-29px -334px";
        case "right":
          return "-29px -376px";
        default:
          return "center";
      }
    }};
  }
`;
