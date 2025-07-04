import { useState } from "react";
import * as S from "./IframeIcon.style";
import { IconLabel } from "../index.style";

interface IframeIconProps {
  addBlock: (type: string, data: object) => void;
  handleBlockIndex: () => void;
}

export default function IframeIcon({
  handleBlockIndex,
  addBlock,
}: IframeIconProps) {
  const [showPrompt, setShowPrompt] = useState(false);
  const [videoId, setVideoId] = useState("");

  const handleIconClick = () => {
    handleBlockIndex();
    setShowPrompt(true);
  };

  const handleConfirm = () => {
    const trimmed = videoId.trim();
    if (!trimmed || trimmed.length < 5) {
      alert("유효한 유튜브 동영상 ID를 입력해주세요.");
      return;
    }

    const url = `https://www.youtube.com/embed/${trimmed}`;

    addBlock("iframe", {
      url,
      name: "iframe",
      type: "iframe",
    });

    setVideoId("");
    setShowPrompt(false);
  };

  return (
    <S.IframeIconWrapper>
      <S.IframeIcon onClick={handleIconClick} />
      <IconLabel>유튜브</IconLabel>

      {showPrompt && (
        <S.PromptOverlay>
          <S.PromptBox>
            <p style={{ fontWeight: "bold", marginBottom: "4px" }}>
              유튜브 동영상 ID를 입력해주세요
            </p>
            <p style={{ fontSize: "12px", marginBottom: "8px" }}>
              유튜브 영상의 주소가 아래와 같다면:
              <br />
              <code>https://www.youtube.com/watch?v=abc123XYZ</code>
              <br />
              <b>→ 영상 ID: abc123XYZ</b> 만 입력해주세요
            </p>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <input
                type="text"
                value={videoId}
                onChange={(e) => setVideoId(e.target.value)}
                placeholder="동영상 ID (예: abc123XYZ)"
                style={{
                  padding: "8px 10px",
                  fontSize: "14px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  outline: "none",
                  backgroundColor: "#f9f9f9",
                  color: "#333",
                }}
              />

              <span style={{ fontSize: "12px", color: "#666" }}>
                삽입 주소: https://www.youtube.com/embed/
                <b>{videoId || "동영상ID"}</b>
              </span>
            </div>

            <div style={{ marginTop: "12px" }}>
              <button onClick={handleConfirm}>확인</button>
              <button onClick={() => setShowPrompt(false)}>취소</button>
            </div>
          </S.PromptBox>
        </S.PromptOverlay>
      )}
    </S.IframeIconWrapper>
  );
}
