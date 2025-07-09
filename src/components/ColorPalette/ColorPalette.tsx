// components/Editor/ColorPalette.tsx
import React from "react";
import styled from "styled-components";

const PaletteWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 16px);
  gap: 4px;
  padding: 8px;
  background: white;
`;

const ColorBox = styled.div<{ color: string }>`
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  background-color: ${({ color }) => color};
  cursor: pointer;

  &:hover {
    outline: 2px solid #16b06d;
    outline-offset: 1px;
  }
`;

interface ColorPaletteProps {
  colors: string[];
  onSelect: (color: string) => void;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ colors, onSelect }) => {
  return (
    <PaletteWrapper>
      {colors.map((color) => (
        <ColorBox
          key={color}
          color={color}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(color);
          }}
        />
      ))}
    </PaletteWrapper>
  );
};

export default ColorPalette;
