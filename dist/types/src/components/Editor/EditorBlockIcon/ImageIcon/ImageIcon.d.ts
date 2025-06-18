import { UploadHandler } from "../../../../types/upload";
interface ImageIconProps {
    addBlock: (type: string, data: object) => void;
    handleBlockIndex: () => void;
    onUpload?: UploadHandler;
}
export default function ImageIcon({ handleBlockIndex, addBlock, onUpload, }: ImageIconProps): import("react/jsx-runtime").JSX.Element;
export {};
