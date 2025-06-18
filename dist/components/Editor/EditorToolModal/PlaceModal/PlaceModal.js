import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import * as S from "./PlaceModal.style";
import useEditorStore from "../../../../store/useEditorStore";
import { fetchPlaceData } from "../../../../utils/fetchPlaceData";
/**
 * 장소 검색 및 선택을 위한 모달 컴포넌트
 * 장소를 검색하고 결과를 표시하며, 선택한 장소를 에디터에 블록으로 추가
 */
export default function PlaceModal({ addBlock }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const { closeModal } = useEditorStore();
    /**
     * 장소 검색 처리 함수
     * API를 통해 장소 데이터를 가져와 결과 업데이트
     */
    const handleSearch = async (query) => {
        const placeData = await fetchPlaceData(query);
        setResults(placeData);
    };
    const handleClearSearch = () => {
        setSearchTerm("");
    };
    /**
     * 검색어와 일치하는 텍스트 하이라이트 처리 함수
     * 검색어와 일치하는 부분을 강조 표시
     */
    const highlightMatch = (text) => {
        if (!searchTerm)
            return text;
        const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));
        return parts.map((part, index) => part.toLowerCase() === searchTerm.toLowerCase() ? (_jsx(S.HighlightText, { children: part }, index)) : (part));
    };
    const handleItemClick = (item) => {
        addBlock("place", item);
        closeModal();
    };
    useEffect(() => {
        handleSearch(searchTerm);
    }, [searchTerm]);
    return (_jsxs(S.PlaceModalWrapper, { children: [_jsxs(S.PlaceInputWrapper, { children: [_jsx(S.PlaceSearchInput, { type: "text", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), placeholder: "\uC7A5\uC18C, \uC8FC\uC18C\uB97C \uAC80\uC0C9\uD558\uC138\uC694" }), _jsxs(S.PlaceIconWrapper, { children: [_jsx(S.PlaceInputClearIcon, { onClick: handleClearSearch }), _jsx(S.PlaceSearchIcon, { onClick: () => handleSearch(searchTerm) })] })] }), results.length === 0 ? (_jsx(S.NoResultsWrapper, { children: _jsxs(S.PlaceTextWrapper, { children: [_jsx(S.PlaceIcon, {}), _jsx(S.PlaceHelpText, { children: "\uC7A5\uC18C \uCCA8\uBD80" })] }) })) : (_jsx(S.PlaceListWrapper, { children: results.map((result) => (_jsx(S.PlaceItemContainer, { children: _jsxs(S.PlaceItem, { onClick: () => handleItemClick(result), children: [_jsx(S.PlaceName, { children: highlightMatch(result.name) }), _jsx(S.PlaceAddress, { children: result.address })] }) }, result.id))) }))] }));
}
