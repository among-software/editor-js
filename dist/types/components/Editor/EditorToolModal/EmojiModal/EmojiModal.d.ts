interface EmojiIconProps {
    addBlock: (type: string, data: object) => void;
}
/**
 * 이모지 선택을 위한 모달 컴포넌트
 * 페이지네이션이 적용된 이모지 목록을 제공하고 선택한 이모지를 에디터에 추가
 */
export default function EmojiModal({ addBlock }: EmojiIconProps): import("react/jsx-runtime").JSX.Element;
export {};
