import styled from "styled-components";

export const IframeIconWrapper = styled.div`
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const PromptBox = styled.div`
  background: white;
  padding: 24px;
  max-width: 400px;
  margin: 20% auto;
  border-radius: 8px;

  input {
    width: 100%;
    padding: 8px;
    margin-top: 8px;
  }

  button {
    margin-right: 8px;
  }
`;
