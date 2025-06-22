// ✅ AlignIcon.style.ts
import styled from "styled-components";
// import justifyIcon from "../../../../assets/icons/justify.svg";
// import justifyHoverIcon from "../../../../assets/icons/justify-hover.svg";

export const AlignIcon = styled.div<{
  $align: "left" | "center" | "right" | "justify";
}>`
  width: 25px;
  height: 25px;
  background-repeat: no-repeat;
  background-size: ${({ $align }) =>
    $align === "justify" ? "24px 24px" : "auto"};
  /* background-position: ${({ $align }) => {
    switch ($align) {
      case "left":
        return "1px -292px";
      case "center":
        return "1px -334px";
      // case "right":
      //   return "1px -376px";
      default:
        return "center";
    }
  }}; */

  background-image: ${({ $align }) => {
    if ($align === "justify") {
      return `url('https://kr1-api-object-storage.nhncloudservice.com/v1/AUTH_96c6313b6d6a405b9511658326418a69/lotte-foundation/justify.svg')`;
    }
    if ($align === "right") {
      return `url('https://kr1-api-object-storage.nhncloudservice.com/v1/AUTH_96c6313b6d6a405b9511658326418a69/lotte-foundation/right.svg')`;
    }
    if ($align === "left") {
      return `url('https://kr1-api-object-storage.nhncloudservice.com/v1/AUTH_96c6313b6d6a405b9511658326418a69/lotte-foundation/left.svg')`;
    }
    if ($align === "center") {
      return `url('https://kr1-api-object-storage.nhncloudservice.com/v1/AUTH_96c6313b6d6a405b9511658326418a69/lotte-foundation/center.svg')`;
    }
    return "url('https://t1.daumcdn.net/brunch/static/img/help/pc/editor/btn_side.v2.png')";
  }};

  cursor: pointer;

  &:hover {
    background-image: ${({ $align }) => {
      if ($align === "justify") {
        return `url('https://kr1-api-object-storage.nhncloudservice.com/v1/AUTH_96c6313b6d6a405b9511658326418a69/lotte-foundation/justify-hover.svg')`;
      }
      if ($align === "right") {
        return `url('https://kr1-api-object-storage.nhncloudservice.com/v1/AUTH_96c6313b6d6a405b9511658326418a69/lotte-foundation/right-hover.svg')`;
      }
      if ($align === "left") {
        return `url('https://kr1-api-object-storage.nhncloudservice.com/v1/AUTH_96c6313b6d6a405b9511658326418a69/lotte-foundation/left-hover.svg')`;
      }
      if ($align === "center") {
        return `url('https://kr1-api-object-storage.nhncloudservice.com/v1/AUTH_96c6313b6d6a405b9511658326418a69/lotte-foundation/center-hover.svg')`;
      }
      return undefined;
    }};
    /* background-position: ${({ $align }) => {
      switch ($align) {
        case "left":
          return "-29px -292px";
        case "center":
          return "-29px -334px";
        // case "right":
        //   return "-29px -376px";
        default:
          return "center";
      }
    }}; */
  }
`;
