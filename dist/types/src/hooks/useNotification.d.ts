/**
 * 일정 시간 후 자동으로 사라지는 알림을 관리하는 커스텀 훅
 * @param duration 알림이 표시되는 시간 (밀리초 단위, 기본값: 2000ms)
 * @returns {Object} 알림 상태와 표시 함수를 포함한 객체
 * - isVisible: 알림 표시 여부
 * - showNotification: 알림을 표시하는 함수
 */
export declare function useNotification(duration?: number): {
    isVisible: boolean;
    showNotification: () => void;
};
