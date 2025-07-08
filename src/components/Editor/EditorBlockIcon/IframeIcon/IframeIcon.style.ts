import styled from "styled-components";

export const IframeIconWrapper = styled.div`
  position: relative; /* 중요: 기준점이 되어줌 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IframeIcon = styled.div`
  width: 28px;
  height: 28px;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQif7xGKRoQ0YzL1AtIAj92R3A6YRNQ8lCF-A&s");
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const PromptOverlay = styled.div`
  position: absolute;
  top: 36px; /* 버튼 아래로 살짝 띄움 */
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
  z-index: 100;
`;

export const PromptBox = styled.div`
  padding: 16px;
  width: 300px;
  font-size: 14px;

  input {
    width: 100%;
    padding: 8px;
    margin-top: 8px;
  }

  button {
    margin-right: 8px;
  }
`;
