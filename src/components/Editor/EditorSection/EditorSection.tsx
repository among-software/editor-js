import { useEffect, useRef, useState } from "react";
import * as S from "./EditorSection.style";
import EditorToolbar from "../../../components/Editor/EditorToolbar/EditorToolbar";
import EditorContent from "../../../components/Editor/EditorContent/EditorContent";
import { UploadHandler } from "../../../types/upload";
import useEditorStore from "../../../store/useEditorStore";

interface EditorSectionProps {
  value?: any;
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
  const { editor, setSelectedBlockIds } = useEditorStore();

  // 스크롤에 따라 툴바 위치 조정
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

  // ✅ 드래그 기반 블럭 선택 기능
  useEffect(() => {
    let startY = 0;
    let endY = 0;

    const handleMouseDown = (e: MouseEvent) => {
      startY = e.clientY;
    };

    const handleMouseUp = (e: MouseEvent) => {
      endY = e.clientY;

      const minY = Math.min(startY, endY);
      const maxY = Math.max(startY, endY);

      const selectedIds: string[] = [];

      document.querySelectorAll(".ce-block").forEach((block) => {
        const rect = block.getBoundingClientRect();
        const intersects = rect.top <= maxY && rect.bottom >= minY;

        if (intersects) {
          const id = block.getAttribute("data-id");
          if (id) selectedIds.push(id);
        }
      });

      // ✅ 상태 저장을 마이크로태스크 이후로 defer
      setTimeout(() => {
        useEditorStore.getState().setSelectedBlockIds(selectedIds);
        console.log("[드래그 선택된 블럭 ID들]", selectedIds);
      }, 0);
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [setSelectedBlockIds]);

  return (
    <S.EditorSectionContainer ref={editorSectionRef} $width={width}>
      <EditorContent value={value} onChange={onChange} />
      <EditorToolbar
        toolbarTop={toolbarTop}
        onUpload={onUpload}
        width={width}
      />
    </S.EditorSectionContainer>
  );
}
