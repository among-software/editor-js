import { ReactNode } from "react";
import * as S from "./FixedToolbar.style";

interface Props {
  position: { top: number; right: number; width: string };
  children?: ReactNode;
}

/**
 * 화면에 고정된 위치에 툴바를 표시하는 컴포넌트
 * top과 right 값을 통해 위치를 지정할 수 있음
 */

export default function FixedToolbar({ position, children }: Props) {
  return (
    <S.FixedToolbarContainer
      $top={0}
      $right={position.right}
      $width={position.width}
    >
      {children}
    </S.FixedToolbarContainer>
  );
}
