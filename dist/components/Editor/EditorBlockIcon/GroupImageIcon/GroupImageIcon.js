import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import * as S from "./GroupImageIcon.style";
export default function GroupImageIcon({ handleBlockIndex, addBlock, onUpload, }) {
    const fileInputRef = useRef(null);
    const handleFileChange = async (event) => {
        const files = event.target.files;
        if (files) {
            const imagesData = await Promise.all(Array.from(files).map(async (file) => {
                let url, name;
                if (onUpload) {
                    const result = await onUpload(file);
                    url = result.path;
                    name = result.name;
                }
                else {
                    url = URL.createObjectURL(file);
                    name = file.name;
                }
                const { width, height } = await getImageDimensions(url);
                return {
                    url,
                    name,
                    type: file.type,
                    size: file.size,
                    width,
                    height,
                    ratio: width / height,
                };
            }));
            const columnCount = Math.ceil(imagesData.length / 3);
            const columns = Array.from({ length: columnCount }, () => []);
            imagesData.forEach((imageData, index) => {
                const colIndex = index % columnCount;
                columns[colIndex].push(imageData);
            });
            columns.forEach((columnImages) => {
                addBlock("unifiedImage", { images: columnImages });
            });
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
    return (_jsxs(S.GroupImageIconWrapper, { children: [_jsx(S.GroupImageIcon, { onClick: handleIconClick }), _jsx("input", { type: "file", accept: "image/*", ref: fileInputRef, onChange: handleFileChange, multiple: true, style: { display: "none" } })] }));
}
