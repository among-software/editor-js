import styled from "styled-components";

export const EditorContentContainer = styled.div`
  margin-top: 20px;
  cursor: pointer;

  /* 실제 컨텐츠 영역은 기본 커서 사용 */
  .ce-block {
    cursor: text;
  }
`;
