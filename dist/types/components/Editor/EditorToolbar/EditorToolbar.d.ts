import { UploadHandler } from "../../../types/upload";
interface Props {
    toolbarTop: number;
    onUpload?: UploadHandler;
}
/**
 * 에디터의 툴바 컴포넌트
 * 블록을 추가할 수 있는 도구들을 제공
 */
export default function EditorToolbar({ toolbarTop, onUpload }: Props): import("react/jsx-runtime").JSX.Element;
export {};
