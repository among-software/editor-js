import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import * as S from "./EmojiModal.style";
import useEditorStore from "../../../../store/useEditorStore";
import emojiData from "../../../../assets/data/emoji.json";
/**
 * 이모지 선택을 위한 모달 컴포넌트
 * 페이지네이션이 적용된 이모지 목록을 제공하고 선택한 이모지를 에디터에 추가
 */
export default function EmojiModal({ addBlock }) {
    const [emojis, setEmojis] = useState([]);
    const [page, setPage] = useState(0);
    const ITEMS_PER_PAGE = 150;
    const { closeModal } = useEditorStore();
    const handleEmojiClick = (emojiData) => {
        addBlock("emoji", {
            emoji: emojiData.emoji,
        });
        closeModal();
    };
    useEffect(() => {
        setEmojis(emojiData);
    }, []);
    const paginatedEmojis = emojis.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);
    return (_jsxs(S.EmojiModalWrapper, { children: [_jsx(S.EmojiListWrapper, { children: paginatedEmojis.map((emoji, index) => (_jsx(S.EmojiItem, { onClick: () => handleEmojiClick(emoji), children: _jsx("span", { children: emoji.emoji }) }, index))) }), _jsxs(S.PaginationWrapper, { children: [_jsx(S.PaginationButton, { disabled: page === 0, onClick: () => setPage(page - 1), children: "\uC774\uC804" }), _jsx(S.PaginationButton, { disabled: (page + 1) * ITEMS_PER_PAGE >= emojis.length, onClick: () => setPage(page + 1), children: "\uB2E4\uC74C" })] })] }));
}
