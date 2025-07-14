import { useEffect, useRef, useState } from "react";
import * as S from "./EditorSection.style";
import EditorToolbar from "../../../components/Editor/EditorToolbar/EditorToolbar";
import EditorContent from "../../../components/Editor/EditorContent/EditorContent";
import { UploadHandler } from "../../../types/upload";
import useEditorStore from "../../../store/useEditorStore";
import MultiSelectToolbar from "../MultiSelectToolbar/MultiSelectToolbar";

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
    console.log("test");

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
    console.log("asdf");
    let startBlock: HTMLElement | null = null;

    const handleMouseDown = (e: MouseEvent) => {
      startBlock = (e.target as HTMLElement).closest(".ce-block");
    };

    const handleMouseUp = (e: MouseEvent) => {
      const endBlock = (e.target as HTMLElement).closest(".ce-block");
      if (!startBlock || !endBlock) return;

      const blocks = Array.from(document.querySelectorAll(".ce-block"));

      const startIndex = blocks.indexOf(startBlock);
      const endIndex = blocks.indexOf(endBlock);

      if (startIndex === -1 || endIndex === -1) return;

      const [from, to] = [
        Math.min(startIndex, endIndex),
        Math.max(startIndex, endIndex),
      ];

      const selectedBlocks = blocks.slice(from, to + 1);
      const selectedIds = selectedBlocks
        .map((block) => block.getAttribute("data-id"))
        .filter(Boolean) as string[];

      useEditorStore.getState().setSelectedBlockIds(selectedIds);
      console.log("[정확한 드래그 선택 블럭 ID]", selectedIds);

      const lastBlock = blocks[to];
      if (lastBlock) {
        const rect = lastBlock.getBoundingClientRect();
        useEditorStore.getState().setToolbarPosition({
          top: rect.top + window.scrollY - 60,
          left: rect.left + window.scrollX,
        });
      }

      // 초기화
      startBlock = null;
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <S.EditorSectionContainer ref={editorSectionRef} $width={width}>
      <MultiSelectToolbar />
      <EditorContent value={value} onChange={onChange} />
      <EditorToolbar
        toolbarTop={toolbarTop}
        onUpload={onUpload}
        width={width}
      />
    </S.EditorSectionContainer>
  );
}
