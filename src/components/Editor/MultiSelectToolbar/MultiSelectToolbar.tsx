import React, { ComponentType, useRef, useState } from "react";
import styled from "styled-components";
import useEditorStore from "../../../store/useEditorStore";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaTextHeight,
  FaFont,
  FaPalette,
  FaAlignLeft,
  FaListUl,
  FaQuoteRight,
  FaHeading,
} from "react-icons/fa";
import { CiLineHeight } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";
import { RxDividerVertical } from "react-icons/rx";
import { RiLetterSpacing2 } from "react-icons/ri";
import { FaLink } from "react-icons/fa";

const LinkInputWrapper = styled.div<{ top: number; left: number }>`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 6px 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 1002;
`;

const LinkInput = styled.input`
  padding: 6px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  min-width: 220px;

  &:focus {
    outline: none;
    border-color: #16b06d;
  }
`;

const ConfirmButton = styled.button`
  background: #16b06d;
  color: white;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #139e61;
  }
`;

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  &:hover .tooltip {
    opacity: 1;
    visibility: visible;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease;
  z-index: 999;
`;

type IconType = ComponentType<{ className?: string }>;
// @ts-ignore
const Divider = styled(RxDividerVertical as IconType)`
  font-size: 16px;
  margin: 0 6px;
  align-self: center;
  vertical-align: middle;
  display: inline-block;
`;

const ToolbarWrapper = styled.div<{ top: number; left: number }>`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  background: white;
  border: none;
  padding: 4px;
  display: flex;
  gap: 3px;
  z-index: 1000;
  box-shadow: none;
`;

const ToolButton = styled.button<{ active?: boolean }>`
  background: white;
  border-radius: 2px;
  cursor: pointer;
  font-size: 13px;
  padding: 2px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: auto;
  min-height: 24px;
  color: #444;
  box-shadow: none;

  &:hover {
    background: #f9f9f9;
    border-color: #bbb;
  }

  svg {
    font-size: 13px;
    margin: 0;
    color: #444;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 4px 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  min-width: 120px;
  max-height: 200px;
  overflow-y: auto;
  font-size: 13px;
`;

const FloatingDropdown = styled(Dropdown)<{ top: number; left: number }>`
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
`;

const DropdownItem = styled.div.attrs(() => ({
  onMouseDown: (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  },
}))<{ selected?: boolean }>`
  font-size: 14px;
  padding: 6px 12px;
  cursor: pointer;
  background: ${({ selected }) => (selected ? "#e6f5ef" : "white")};
  color: ${({ selected }) => (selected ? "#16b06d" : "#333")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: inherit;

  &:hover {
    background: #f0f0f0;
  }

  &::after {
    content: ${({ selected }) => (selected ? "'✓'" : "''")};
    color: #16b06d;
    font-size: 13px;
  }
`;

export default function MultiSelectToolbar() {
  const {
    editor,
    selectedBlockIds,
    toolbarPosition,
    selectionRange,
    setSelectionRange,
  } = useEditorStore();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });

  const fontSizes = ["12px", "14px", "16px", "18px", "20px"];
  const fontFamilies = [
    "MalgunGothic",
    "NotoSans",
    "NanumMyeongjo",
    "NanumGothic",
    "NanumBarunGothic",
    "Helvetica",
    "Georgia",
  ];
  const backgroundColors = [
    "#ffff99",
    "#d3f8d3",
    "#d1ecf1",
    "#f8d7da",
    "#fce5cd",
  ];
  const fontColors = [
    "#ffffff",
    "#000000",
    "#16b06d",
    "#00c6be",
    "#2e84b6",
    "#959595",
    "#f4c016",
    "#f6655b",
    "#ec4c69",
    "#5c5cb2",
  ];
  const blockTypes = [
    {
      label: "본문",
      tag: "paragraph",
      // @ts-ignore
      icon: (<FaAlignLeft />) as any,
    },
    // @ts-ignore
    { label: "제목", tag: "h1", icon: (<FaHeading />) as any },
    // @ts-ignore
    { label: "인용구", tag: "blockquote", icon: (<FaQuoteRight />) as any },
    // @ts-ignore
    { label: "리스트", tag: "ul", icon: (<FaListUl />) as any },
  ];
  const lineHeights = ["1", "1.5", "1.75", "2", "2.5", "3"];
  const letterSpacings = ["normal", "0.5px", "1px", "1.5px", "2px"];
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkInputValue, setLinkInputValue] = useState("");
  const [linkInputPos, setLinkInputPos] = useState({ top: 40, left: 400 });

  const buttonRefs: Record<string, React.RefObject<HTMLButtonElement>> = {
    fontSize: useRef(null),
    fontFamily: useRef(null),
    fontColor: useRef(null),
    backgroundColor: useRef(null),
    blockType: useRef(null),
    letterSpacing: useRef(null),
    lineHeight: useRef(null),
    link: useRef(null),
  };

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      const ref = buttonRefs[name];
      if (ref?.current) {
        const rect = ref.current.getBoundingClientRect();
        const toolbarRect = ref.current.offsetParent?.getBoundingClientRect();

        if (toolbarRect) {
          setDropdownPosition({
            top: 40, // 4px 마진
            left: rect.left - toolbarRect.left,
          });
        }
      }
      setActiveDropdown(name);
    }
  };

  const applyToBlocks = (transform: (html: string) => string) => {
    if (!editor) return;
    selectedBlockIds.forEach((id) => {
      const blockEl = document.querySelector(`.ce-block[data-id='${id}']`);
      if (!blockEl) return;
      const allBlocks = document.querySelectorAll(".ce-block");
      const index = Array.from(allBlocks).indexOf(blockEl);
      const block = editor.blocks.getBlockByIndex(index) as any;

      if (block?.name === "paragraph") {
        const container = block.holder.querySelector(
          ".ce-paragraph"
        ) as HTMLDivElement;
        if (!container) return;

        const rawHTML = container.innerHTML.trim();
        const updatedHTML = transform(rawHTML);

        container.innerHTML = updatedHTML;
        editor.blocks.update(id, {
          ...block.data,
          text: updatedHTML,
        });
      }
    });
  };

  const wrapWithStyle = (
    style: Partial<CSSStyleDeclaration>,
    dataAttr?: string,
    dataValue?: string
  ) => {
    applyToBlocks((html) => {
      const container = document.createElement("div");
      container.innerHTML = html;

      const existing = container.querySelector(`span[${dataAttr}]`);
      if (existing) {
        existing.removeAttribute("style");
        // @ts-ignore
        existing.removeAttribute(dataAttr);
        existing.innerHTML = existing.innerHTML;
        return container.innerHTML;
      }

      const span = document.createElement("span");
      Object.entries(style).forEach(([key, value]) => {
        if (value) (span.style as any)[key as any] = value;
      });
      if (dataAttr && dataValue) {
        span.setAttribute(dataAttr, dataValue);
      }
      span.innerHTML = html;
      return span.outerHTML;
    });
  };

  const replaceWithBlockType = (tag: string) => {
    applyToBlocks((html) => {
      const content = html.replace(/<[^>]+>/g, "");
      if (tag === "paragraph") {
        return `<div class="ce-paragraph" contenteditable="true">${content}</div>`;
      }
      if (tag === "blockquote") {
        return `<blockquote class="cdx-input cdx-quote__text blockquote_type1" contenteditable="true">${content}</blockquote>`;
      } else if (tag === "ul") {
        return `<ul class="cdx-block cdx-list cdx-list--unordered" contenteditable="true"><li class="cdx-list__item">${content}</li></ul>`;
      } else {
        return `<h1 class="ce-header">${content}</h1>`;
      }
    });
  };

  const toggleStyle = (
    styleKey: keyof CSSStyleDeclaration,
    value: string,
    dataAttr: string
  ) => {
    applyToBlocks((html) => {
      const container = document.createElement("div");
      container.innerHTML = html;
      const span = container.querySelector(
        `span[${dataAttr}]`
      ) as HTMLSpanElement | null;

      if (span) {
        (span.style as any)[styleKey] = "";
        span.removeAttribute(dataAttr);
        return span.innerHTML;
      } else {
        const newSpan = document.createElement("span");
        (newSpan.style as any)[styleKey] = value;
        newSpan.setAttribute(dataAttr, "true");
        newSpan.innerHTML = html;
        return newSpan.outerHTML;
      }
    });
  };

  const handleInsertLinkClick = () => {
    const rect = buttonRefs.link.current?.getBoundingClientRect();
    if (rect) {
      setLinkInputPos({
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
      });
    }
    setShowLinkInput((prev) => !prev); // 🔄 2번 문제: 토글
  };

  const insertLinkToParagraph = async (url: string, label: string) => {
    if (!editor) return;

    const safeUrl =
      url.startsWith("http://") || url.startsWith("https://")
        ? url
        : `https://${url}`;

    const anchorHTML = `<span style="display: inline-block; word-break: break-word;"><a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${label}</a></span>`;

    const insertIndex = editor.blocks.getBlocksCount(); // always insert at end
    editor.blocks.insert(
      "paragraph",
      {
        text: anchorHTML,
        realText: label,
        align: "left",
        letterSpacing: "normal",
        lineHeight: "normal",
        isBold: false,
        isItalic: false,
        isUnderline: false,
        isStrikethrough: false,
        fontSize: "",
        fontFamily: "",
      },
      {},
      insertIndex,
      true
    );

    console.log("✅ 링크 삽입 완료 (새 블록으로)");
  };

  const renderDropdown = (
    name: string,
    items: string[],
    styleKey: keyof CSSStyleDeclaration,
    dataAttr: string,
    renderStyle?: (value: string) => React.CSSProperties
  ) => {
    return (
      activeDropdown === name && (
        <FloatingDropdown
          top={dropdownPosition.top}
          left={dropdownPosition.left}
        >
          {items.map((item) => (
            <DropdownItem
              key={item}
              style={renderStyle?.(item) || {}}
              onClick={() => {
                wrapWithStyle({ [styleKey]: item } as any, dataAttr, item); // 👈 스타일 적용
                setActiveDropdown(null); // 👈 드롭다운 닫기
              }}
            >
              {item}
            </DropdownItem>
          ))}
        </FloatingDropdown>
      )
    );
  };

  return (
    <ToolbarWrapper top={65} left={0}>
      <TooltipWrapper
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <ToolButton
          ref={buttonRefs.blockType}
          onClick={() => toggleDropdown("blockType")}
        >
          {/* 
          // @ts-ignore */}
          <FaAlignLeft />
          {/* 
          // @ts-ignore */}
          <FiChevronDown />
        </ToolButton>
        <Tooltip className="tooltip">블록 타입</Tooltip>
        {activeDropdown === "blockType" && (
          <FloatingDropdown
            top={dropdownPosition.top}
            left={dropdownPosition.left}
          >
            {blockTypes.map((item) => (
              <DropdownItem
                key={item.tag}
                onClick={() => {
                  replaceWithBlockType(item.tag);
                  setActiveDropdown(null);
                }}
              >
                {item.icon} {item.label}
              </DropdownItem>
            ))}
          </FloatingDropdown>
        )}
      </TooltipWrapper>

      <TooltipWrapper
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <ToolButton
          ref={buttonRefs.fontFamily}
          onClick={() => toggleDropdown("fontFamily")}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {/* 
          // @ts-ignore */}
          <FaFont />
          {/* 
          // @ts-ignore */}
          <FiChevronDown />
        </ToolButton>
        <Tooltip className="tooltip">폰트 선택</Tooltip>
      </TooltipWrapper>
      {renderDropdown(
        "fontFamily",
        fontFamilies,
        "fontFamily",
        "data-font-family",
        (font) => ({ fontFamily: font })
      )}

      <TooltipWrapper
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <ToolButton
          ref={buttonRefs.fontSize}
          onClick={() => toggleDropdown("fontSize")}
        >
          {/* 
          // @ts-ignore */}
          <FaTextHeight />
          {/* 
          // @ts-ignore */}
          <FiChevronDown />
        </ToolButton>
        <Tooltip className="tooltip">글자 크기</Tooltip>
      </TooltipWrapper>
      {renderDropdown("fontSize", fontSizes, "fontSize", "data-font-size")}
      <Divider />

      <TooltipWrapper
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <ToolButton
          onClick={() => toggleStyle("fontWeight", "bold", "data-bold")}
        >
          {/* 
          // @ts-ignore */}
          <FaBold />
        </ToolButton>
        <Tooltip className="tooltip">굵게</Tooltip>
      </TooltipWrapper>

      <TooltipWrapper
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <ToolButton
          onClick={() => toggleStyle("fontStyle", "italic", "data-italic")}
        >
          {/* 
          // @ts-ignore */}
          <FaItalic />
        </ToolButton>
        <Tooltip className="tooltip">기울임꼴</Tooltip>
      </TooltipWrapper>

      <TooltipWrapper
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <ToolButton
          onClick={() =>
            toggleStyle("textDecoration", "underline", "data-underline")
          }
        >
          {/* 
          // @ts-ignore */}
          <FaUnderline />
        </ToolButton>
        <Tooltip className="tooltip">밑줄</Tooltip>
      </TooltipWrapper>

      <TooltipWrapper
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <ToolButton
          onClick={() =>
            toggleStyle("textDecoration", "line-through", "data-strikethrough")
          }
        >
          {/* 
          // @ts-ignore */}
          <FaStrikethrough />
        </ToolButton>
        <Tooltip className="tooltip">취소선</Tooltip>
      </TooltipWrapper>

      <TooltipWrapper
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <ToolButton
          ref={buttonRefs.fontColor}
          onClick={() => toggleDropdown("fontColor")}
        >
          A // @ts-ignore
          <FiChevronDown />
        </ToolButton>
        <Tooltip className="tooltip">글자 색상</Tooltip>
        {renderDropdown(
          "fontColor",
          fontColors,
          "color",
          "data-color",
          (color) => ({ color })
        )}
      </TooltipWrapper>

      <TooltipWrapper
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <ToolButton
          ref={buttonRefs.backgroundColor}
          onClick={() => toggleDropdown("backgroundColor")}
        >
          {/* 
          // @ts-ignore */}
          <FaPalette />
          {/* 
          // @ts-ignore */}
          <FiChevronDown />
        </ToolButton>
        <Tooltip className="tooltip">배경 색상</Tooltip>
        {renderDropdown(
          "backgroundColor",
          backgroundColors,
          "backgroundColor",
          "data-bg",
          (bg) => ({ backgroundColor: bg })
        )}
      </TooltipWrapper>

      <Divider />

      <TooltipWrapper
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <ToolButton
          ref={buttonRefs.letterSpacing}
          onClick={() => toggleDropdown("letterSpacing")}
        >
          {/* 
          // @ts-ignore */}
          <RiLetterSpacing2 />
          {/* 
          // @ts-ignore */}
          <FiChevronDown />
        </ToolButton>
        <Tooltip className="tooltip">자간 설정</Tooltip>
        {renderDropdown(
          "letterSpacing",
          letterSpacings,
          "letterSpacing",
          "data-letter-spacing"
        )}
      </TooltipWrapper>

      <TooltipWrapper
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <ToolButton
          ref={buttonRefs.lineHeight}
          onClick={() => toggleDropdown("lineHeight")}
        >
          {/* 
          // @ts-ignore */}
          <CiLineHeight />
          {/* 
          // @ts-ignore */}
          <FiChevronDown />
        </ToolButton>
        <Tooltip className="tooltip">줄 간격 설정</Tooltip>
        {renderDropdown(
          "lineHeight",
          lineHeights,
          "lineHeight",
          "data-line-height"
        )}
      </TooltipWrapper>
      <TooltipWrapper
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <ToolButton onClick={handleInsertLinkClick}>
          {/* 
          // @ts-ignore */}
          {showLinkInput ? <FaLink color="#1aff00" /> : <FaLink />}
        </ToolButton>
        <Tooltip className="tooltip">링크 추가</Tooltip>
      </TooltipWrapper>

      {showLinkInput && (
        <LinkInputWrapper top={linkInputPos.top} left={linkInputPos.left}>
          <LinkInput
            type="text"
            placeholder="URL을 입력하세요."
            value={linkInputValue}
            onChange={(e) => setLinkInputValue(e.target.value)}
          />
          <ConfirmButton
            onClick={async () => {
              await insertLinkToParagraph(linkInputValue, linkInputValue); // URL과 라벨 동일하게 처리
              setShowLinkInput(false);
              setLinkInputValue("");
            }}
          >
            ✓
          </ConfirmButton>
        </LinkInputWrapper>
      )}
    </ToolbarWrapper>
  );
}
