import styled from "styled-components";

export const LineIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48px;
  margin: 0 4px;
  cursor: pointer;
  user-select: none;
`;

export const LineIcon = styled.div`
  width: 25px;
  height: 25px;
  background-position: 1px -250px;
  background-image: url("https://t1.daumcdn.net/brunch/static/img/help/pc/editor/btn_side.v2.png");
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    background-position: -29px -250px;
  }
`;
