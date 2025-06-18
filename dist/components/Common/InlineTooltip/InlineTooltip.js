import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import * as S from "./InlineTooltip.style";
/**
 * 화면의 특정 위치에 툴팁을 표시하는 컴포넌트
 * 위치 조정이 가능하며 보이기/숨기기 제어 가능
 */
const InlineTooltip = forwardRef(({ visible, children, position = { left: 0, top: 50 } }, ref) => {
    return (_jsx(S.TooltipWrapper, { ref: ref, "$visible": visible, "$left": position.left, "$top": position.top, children: children }));
});
export default InlineTooltip;
