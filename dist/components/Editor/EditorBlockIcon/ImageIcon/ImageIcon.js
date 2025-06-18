import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import * as S from "./ImageIcon.style";
export default function ImageIcon({ handleBlockIndex, addBlock, onUpload, }) {
    const fileInputRef = useRef(null);
    const handleFileChange = async (event) => {
        const file = event.target.files?.[0];
        if (file) {
            let imageUrl, name;
            if (onUpload) {
                const { name: uploadedName, path } = await onUpload(file);
                imageUrl = path;
                name = uploadedName;
            }
            else {
                imageUrl = URL.createObjectURL(file);
                name = file.name;
            }
            const { width, height } = await getImageDimensions(imageUrl);
            const imageData = {
                url: imageUrl,
                name,
                size: file.size,
                type: file.type,
                width,
                height,
                ratio: width / height,
            };
            addBlock("unifiedImage", { images: [imageData] });
        }
        if (fileInputRef.current)
            fileInputRef.current.value = "";
    };
    const getImageDimensions = (url) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve({ width: img.width, height: img.height });
            img.src = url;
        });
    };
    const handleIconClick = () => {
        handleBlockIndex();
        fileInputRef.current?.click();
    };
    return (_jsxs(S.ImageIconWrapper, { children: [_jsx(S.ImageIcon, { onClick: handleIconClick }), _jsx(S.ImageFileInput, { type: "file", accept: "image/*", ref: fileInputRef, onChange: handleFileChange, style: { display: "none" } })] }));
}
