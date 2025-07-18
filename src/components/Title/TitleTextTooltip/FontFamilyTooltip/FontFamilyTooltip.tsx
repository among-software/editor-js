import { useState } from "react";
import * as S from "./FontFamilyTooltip.style";
import { FONT_OPTIONS, FontType } from "../../../../types/common/font.types";

interface FontFamilyTooltipProps {
  selectedFont: FontType;
  onFontSelect: (font: FontType) => void;
  isOpen: boolean;
  onToggle: () => void;
}

/**
 * 폰트 패밀리를 선택할 수 있는 드롭다운 툴팁 컴포넌트
 * 한글/영문 폰트 옵션을 제공하고 선택된 폰트를 표시
 */
export default function FontFamilyTooltip({
  selectedFont,
  onFontSelect,
  isOpen,
  onToggle,
}: FontFamilyTooltipProps) {
  const [activeFont, setActiveFont] = useState(
    FONT_OPTIONS.find((option) => option.value === selectedFont)?.label
  );

  const handleFontSelect = (font: FontType) => {
    onFontSelect(font);
    setActiveFont(
      FONT_OPTIONS.find((option) => option.value === font)?.label ||
        FONT_OPTIONS[0].label
    );
    onToggle();
  };

  return (
    <S.DropdownWrapper>
      <S.DropdownHeader onClick={onToggle} $isDropdownOpen={isOpen}>
        {activeFont}
        <S.DropdownIcon $isDropdownOpen={isOpen} />
      </S.DropdownHeader>
      {isOpen && (
        <S.DropdownList>
          {FONT_OPTIONS.map((font) => (
            <S.DropdownItem
              key={font.value}
              onClick={() => handleFontSelect(font.value)}
              fontFamily={font.value}
              $isSelected={font.label === activeFont} // 선택된 항목인지 확인
            >
              {font.label}
            </S.DropdownItem>
          ))}
        </S.DropdownList>
      )}
    </S.DropdownWrapper>
  );
}
