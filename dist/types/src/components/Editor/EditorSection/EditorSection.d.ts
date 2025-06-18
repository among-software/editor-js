import { UploadHandler } from "../../../types/upload";
interface EditorSectionProps {
    onUpload?: UploadHandler;
    width?: string;
    onChange?: (data: any) => void;
}
/**
 * 에디터의 메인 섹션을 담당하는 컴포넌트
 * 에디터 컨텐츠와 툴바를 포함하며, 스크롤에 따른 툴바 위치 조정을 관리
 */
export default function EditorSection({ onUpload, width, onChange, }: EditorSectionProps): import("react/jsx-runtime").JSX.Element;
export {};
