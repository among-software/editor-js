import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import * as S from "./VideoIcon.style";
export default function VideoIcon({ handleBlockIndex, addBlock, onUpload, }) {
    const fileInputRef = useRef(null);
    const handleFileChange = async (event) => {
        const file = event.target.files?.[0];
        if (!file)
            return;
        let videoData;
        if (onUpload) {
            const uploaded = await onUpload(file);
            videoData = {
                url: uploaded.path,
                name: uploaded.name,
                type: file.type,
                size: file.size,
            };
        }
        else {
            const reader = new FileReader();
            const base64 = await new Promise((resolve) => {
                reader.onloadend = () => resolve(reader.result);
                reader.readAsDataURL(file);
            });
            videoData = {
                url: base64,
                name: file.name,
                type: file.type,
                size: file.size,
            };
        }
        addBlock("video", videoData);
        if (fileInputRef.current)
            fileInputRef.current.value = "";
    };
    const handleIconClick = () => {
        handleBlockIndex();
        fileInputRef.current?.click();
    };
    return (_jsxs(S.VideoIconWrapper, { children: [_jsx(S.VideoIcon, { onClick: handleIconClick }), _jsx(S.VideoFileInput, { type: "file", accept: "video/*", ref: fileInputRef, onChange: handleFileChange, style: { display: "none" } })] }));
}
