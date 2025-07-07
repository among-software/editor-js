import React, { useState } from "react";
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
} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

import { FaAlignLeft, FaListUl, FaQuoteRight, FaHeading } from "react-icons/fa";

const ToolbarWrapper = styled.div<{ top: number; left: number }>`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 4px 8px;
  display: flex;
  gap: 6px;
  z-index: 1000;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const ToolButton = styled.button<{ active?: boolean }>`
  background: ${({ active }) => (active ? "#e7f6f1" : "white")};
  border: 1px solid ${({ active }) => (active ? "#16b06d" : "#ccc")};
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  min-width: 32px;
  min-height: 28px;
  transition: all 0.2s;

  &:hover {
    background: #f4f4f4;
    border-color: #16b06d;
  }

  svg {
    margin-right: 4px;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 4px 0;
  margin-top: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  z-index: 1001;
  min-width: 140px;
  max-height: 220px;
  overflow-y: auto;
`;

const DropdownItem = styled.div<{ selected?: boolean }>`
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
  const { editor, selectedBlockIds, toolbarPosition } = useEditorStore();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
    { label: "제목", tag: "h1", icon: <FaHeading /> },
    { label: "인용구", tag: "blockquote", icon: <FaQuoteRight /> },
    { label: "리스트", tag: "ul", icon: <FaListUl /> },
  ];

  const lineHeights = ["1", "1.5", "1.75", "2", "2.5", "3"];
  const letterSpacings = ["normal", "0.5px", "1px", "1.5px", "2px"];

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

  const replaceWithBlockType = (tag: string) => {
    applyToBlocks((html) => {
      const content = html.replace(/<[^>]+>/g, ""); // 태그 제거
      if (tag === "blockquote") {
        return `
          <blockquote class="cdx-input cdx-quote__text blockquote_type1" contenteditable="true">${content}</blockquote>
        `;
      } else if (tag === "ul") {
        return `
          <ul class="cdx-block cdx-list cdx-list--unordered" contenteditable="true">
            <li class="cdx-list__item">${content}</li>
          </ul>
        `;
      } else {
        return `<h1 class="ce-header">${content}</h1>`;
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

      const span = document.createElement("span");
      Object.entries(style).forEach(([key, value]) => {
        if (value) (span.style as any)[key] = value;
      });

      if (dataAttr && dataValue) {
        span.setAttribute(dataAttr, dataValue);
      }

      span.innerHTML = html;
      return span.outerHTML;
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
        const newSpan = document.createElement("span") as HTMLSpanElement;
        (newSpan.style as any)[styleKey] = value;
        newSpan.setAttribute(dataAttr, "true");
        newSpan.innerHTML = html;
        return newSpan.outerHTML;
      }
    });
  };

  return (
    <ToolbarWrapper
      top={70}
      left={toolbarPosition.left}
      onMouseDown={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <ToolButton
        active={activeDropdown === "blockType"}
        onClick={() => setActiveDropdown("blockType")}
      >
        <FaAlignLeft />
        <FiChevronDown />
      </ToolButton>
      {activeDropdown === "blockType" && (
        <Dropdown>
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
        </Dropdown>
      )}

      {/* Bold */}
      <ToolButton
        onClick={() => toggleStyle("fontWeight", "bold", "data-bold")}
      >
        <FaBold />
      </ToolButton>

      {/* Italic */}
      <ToolButton
        onClick={() => toggleStyle("fontStyle", "italic", "data-italic")}
      >
        <FaItalic />
      </ToolButton>

      {/* Underline */}
      <ToolButton
        onClick={() =>
          toggleStyle("textDecoration", "underline", "data-underline")
        }
      >
        <FaUnderline />
      </ToolButton>

      {/* Strikethrough */}
      <ToolButton
        onClick={() =>
          toggleStyle("textDecoration", "line-through", "data-strikethrough")
        }
      >
        <FaStrikethrough />
      </ToolButton>

      {/* Font Size Dropdown */}
      <ToolButton
        active={activeDropdown === "fontSize"}
        onClick={() => setActiveDropdown("fontSize")}
      >
        <FaTextHeight />
        <FiChevronDown />
      </ToolButton>
      {activeDropdown === "fontSize" && (
        <Dropdown>
          {fontSizes.map((size) => (
            <DropdownItem
              key={size}
              onClick={() => {
                wrapWithStyle({ fontSize: size }, "data-font-size", size);
                setActiveDropdown(null);
              }}
            >
              {size}
            </DropdownItem>
          ))}
        </Dropdown>
      )}

      {/* Font Family Dropdown */}
      <ToolButton
        active={activeDropdown === "fontFamily"}
        onClick={() => setActiveDropdown("fontFamily")}
      >
        <FaFont />
        <FiChevronDown />
      </ToolButton>
      {activeDropdown === "fontFamily" && (
        <Dropdown>
          {fontFamilies.map((font) => (
            <DropdownItem
              key={font}
              style={{ fontFamily: font }}
              onClick={() => {
                wrapWithStyle({ fontFamily: font }, "data-font-family", font);
                setActiveDropdown(null);
              }}
            >
              {font}
            </DropdownItem>
          ))}
        </Dropdown>
      )}

      {/* Font Color Dropdown */}
      <ToolButton
        active={activeDropdown === "fontColor"}
        onClick={() => setActiveDropdown("fontColor")}
      >
        A
        <FiChevronDown />
      </ToolButton>
      {activeDropdown === "fontColor" && (
        <Dropdown>
          {fontColors.map((color) => (
            <DropdownItem
              key={color}
              style={{ color }}
              onClick={() => {
                wrapWithStyle({ color }, "data-color", color);
                setActiveDropdown(null);
              }}
            >
              {color}
            </DropdownItem>
          ))}
        </Dropdown>
      )}

      {/* Background Color Dropdown */}
      <ToolButton
        active={activeDropdown === "backgroundColor"}
        onClick={() => setActiveDropdown("backgroundColor")}
      >
        <FaPalette />
        <FiChevronDown />
      </ToolButton>
      {activeDropdown === "backgroundColor" && (
        <Dropdown>
          {backgroundColors.map((bg) => (
            <DropdownItem
              key={bg}
              style={{ backgroundColor: bg }}
              onClick={() => {
                wrapWithStyle({ backgroundColor: bg }, "data-bg", bg);
                setActiveDropdown(null);
              }}
            >
              {bg}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
      <ToolButton
        active={activeDropdown === "letterSpacing"}
        onClick={() => setActiveDropdown("letterSpacing")}
      >
        자간
        <FiChevronDown />
      </ToolButton>
      {activeDropdown === "letterSpacing" && (
        <Dropdown>
          {letterSpacings.map((space) => (
            <DropdownItem
              key={space}
              onClick={() => {
                wrapWithStyle(
                  { letterSpacing: space },
                  "data-letter-spacing",
                  space
                );
                setActiveDropdown(null);
              }}
            >
              {space}
            </DropdownItem>
          ))}
        </Dropdown>
      )}

      <ToolButton
        active={activeDropdown === "lineHeight"}
        onClick={() => setActiveDropdown("lineHeight")}
      >
        행간
        <FiChevronDown />
      </ToolButton>
      {activeDropdown === "lineHeight" && (
        <Dropdown>
          {lineHeights.map((lh) => (
            <DropdownItem
              key={lh}
              onClick={() => {
                wrapWithStyle({ lineHeight: lh }, "data-line-height", lh);
                setActiveDropdown(null);
              }}
            >
              {lh}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </ToolbarWrapper>
  );
}
