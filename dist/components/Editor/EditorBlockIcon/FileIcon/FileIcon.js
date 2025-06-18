import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import * as S from "./FileIcon.style";
/**
 * 파일 업로드를 위한 아이콘 컴포넌트
 * 외부 업로드 함수(onUpload)가 주어지면 그 결과(path, name)를 사용해 block 삽입
 */
export default function FileIcon({ handleBlockIndex, addBlock, onUpload, }) {
    const fileInputRef = useRef(null);
    const handleFileChange = async (event) => {
        const file = event.target.files?.[0];
        if (file) {
            let fileData;
            if (onUpload) {
                const { name, path } = await onUpload(file);
                fileData = {
                    url: path,
                    name,
                    type: file.type,
                    size: file.size,
                };
            }
            else {
                fileData = {
                    url: URL.createObjectURL(file),
                    name: file.name,
                    type: file.type,
                    size: file.size,
                };
            }
            addBlock("file", fileData);
        }
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };
    const handleIconClick = () => {
        handleBlockIndex();
        fileInputRef.current?.click();
    };
    return (_jsxs(_Fragment, { children: [_jsx(S.FileIcon, { onClick: handleIconClick }), _jsx(S.FileInput, { type: "file", ref: fileInputRef, onChange: handleFileChange, style: { display: "none" } })] }));
}
