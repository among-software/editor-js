import { UploadHandler } from "../../../../types/upload";
interface FileIconProps {
    addBlock: (type: string, data: object) => void;
    handleBlockIndex: () => void;
    onUpload?: UploadHandler;
}
/**
 * 파일 업로드를 위한 아이콘 컴포넌트
 * 외부 업로드 함수(onUpload)가 주어지면 그 결과(path, name)를 사용해 block 삽입
 */
export default function FileIcon({ handleBlockIndex, addBlock, onUpload, }: FileIconProps): import("react/jsx-runtime").JSX.Element;
export {};
