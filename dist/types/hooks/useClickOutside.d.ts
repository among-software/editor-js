/**
 * 특정 요소의 외부 클릭을 감지하는 커스텀 훅
 * @param onClickOutside 외부 클릭 시 실행할 콜백 함수
 * @param ignoreCondition 특정 조건에서 외부 클릭을 무시할지 결정하는 선택적 함수
 * @returns ref 객체 - 감지하고자 하는 요소에 연결해야 함
 */
export declare const useClickOutside: <T extends HTMLElement>(onClickOutside: () => void, ignoreCondition?: (element: HTMLElement) => boolean) => {
    $ref: import("react").MutableRefObject<T>;
};
