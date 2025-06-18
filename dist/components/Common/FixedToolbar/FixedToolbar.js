import { jsx as _jsx } from "react/jsx-runtime";
import * as S from "./FixedToolbar.style";
/**
 * 화면에 고정된 위치에 툴바를 표시하는 컴포넌트
 * top과 right 값을 통해 위치를 지정할 수 있음
 */
export default function FixedToolbar({ position, children }) {
    return (_jsx(S.FixedToolbarContainer, { "$top": position.top, "$right": position.right, children: children }));
}
