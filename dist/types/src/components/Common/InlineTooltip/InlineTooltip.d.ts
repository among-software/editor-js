import { ReactNode } from "react";
/**
 * 화면의 특정 위치에 툴팁을 표시하는 컴포넌트
 * 위치 조정이 가능하며 보이기/숨기기 제어 가능
 */
declare const InlineTooltip: import("react").ForwardRefExoticComponent<{
    visible: boolean;
    children: ReactNode;
    position: {
        left: number;
        top: number;
    };
} & import("react").RefAttributes<HTMLDivElement>>;
export default InlineTooltip;
