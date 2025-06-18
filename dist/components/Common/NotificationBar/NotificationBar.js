import { jsx as _jsx } from "react/jsx-runtime";
import * as S from "./NotificationBar.style";
/**
 * 알림 메시지를 표시하는 공통 컴포넌트
 *
 * @example
 * ```tsx
 * <NotificationBar isVisible={showAlert}>
 *   최대 글자수를 초과했습니다.
 * </NotificationBar>
 * ```
 */
export default function NotificationBar({ children, isVisible }) {
    return (_jsx(S.NotificationBarContainer, { "$isVisible": isVisible, children: children }));
}
