import { UploadHandler } from "../../../../types/upload";
interface GroupImageIconProps {
    addBlock: (type: string, data: object) => void;
    handleBlockIndex: () => void;
    onUpload?: UploadHandler;
}
export default function GroupImageIcon({ handleBlockIndex, addBlock, onUpload, }: GroupImageIconProps): import("react/jsx-runtime").JSX.Element;
export {};
