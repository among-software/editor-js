import { UploadHandler } from "../../../../types/upload";
interface VideoIconProps {
    addBlock: (type: string, data: object) => void;
    handleBlockIndex: () => void;
    onUpload?: UploadHandler;
}
export default function VideoIcon({ handleBlockIndex, addBlock, onUpload, }: VideoIconProps): import("react/jsx-runtime").JSX.Element;
export {};
