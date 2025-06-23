import { useEffect, useRef, useState } from "react";
import * as S from "./EditorSection.style";
import EditorToolbar from "../../../components/Editor/EditorToolbar/EditorToolbar";
import EditorContent from "../../../components/Editor/EditorContent/EditorContent";
import { UploadHandler } from "../../../types/upload";
import useEditorStore from "../../../store/useEditorStore";

interface EditorSectionProps {
  value?: any; // ✅ 추가
  onUpload?: UploadHandler;
  width: string;
  onChange?: (data: any) => void;
}

/**
 * 에디터의 메인 섹션을 담당하는 컴포넌트
 * 에디터 컨텐츠와 툴바를 포함하며, 스크롤에 따른 툴바 위치 조정을 관리
 */
export default function EditorSection({
  value,
  onUpload,
  width,
  onChange,
}: EditorSectionProps) {
  const editorSectionRef = useRef<HTMLDivElement>(null);
  const [toolbarTop, setToolbarTop] = useState(0);
  const { editor } = useEditorStore();

  console.log("lib value:", value);

  useEffect(() => {
    const handleScroll = () => {
      if (editorSectionRef.current) {
        const rect = editorSectionRef.current.getBoundingClientRect();

        if (rect.top > 0) {
          setToolbarTop(rect.top + 40);
        }

        if (rect.top <= 0) {
          setToolbarTop(40);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.EditorSectionContainer ref={editorSectionRef} $width={width}>
      <EditorContent value={value} onChange={onChange} /> {/* ✅ value 전달 */}
      <EditorToolbar
        toolbarTop={toolbarTop}
        onUpload={onUpload}
        width={width}
      />
    </S.EditorSectionContainer>
  );
}
