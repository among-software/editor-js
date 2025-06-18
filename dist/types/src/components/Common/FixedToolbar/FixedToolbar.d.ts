import { ReactNode } from "react";
interface Props {
    position: {
        top: number;
        right: number;
    };
    children?: ReactNode;
}
/**
 * 화면에 고정된 위치에 툴바를 표시하는 컴포넌트
 * top과 right 값을 통해 위치를 지정할 수 있음
 */
export default function FixedToolbar({ position, children }: Props): import("react/jsx-runtime").JSX.Element;
export {};
