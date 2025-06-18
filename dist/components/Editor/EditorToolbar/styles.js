import styled from "styled-components";
import { COMMON_THEME } from "../../../styles/Theme";
export const TitleSaveWrapper = styled.button `
  border-radius: 15px;
  width: 66px;
  height: 30px;
  border: 1px solid ${COMMON_THEME.gray_primary};
  font-size: 12px;
  color: ${COMMON_THEME.dark_gray};
  background-color: ${COMMON_THEME.white_primary};
  z-index: 100;
`;
