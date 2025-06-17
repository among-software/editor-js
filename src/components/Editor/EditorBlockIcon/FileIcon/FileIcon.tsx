import { ChangeEvent, useRef } from "react";
import * as S from "./FileIcon.style";
import { UploadHandler } from "@/types/upload";

interface FileIconProps {
  addBlock: (type: string, data: object) => void;
  handleBlockIndex: () => void;
  onUpload?: UploadHandler;
}

/**
 * 파일 업로드를 위한 아이콘 컴포넌트
 * 외부 업로드 함수(onUpload)가 주어지면 그 결과(path, name)를 사용해 block 삽입
 */
export default function FileIcon({
  handleBlockIndex,
  addBlock,
  onUpload,
}: FileIconProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
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
      } else {
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

  return (
    <>
      <S.FileIcon onClick={handleIconClick} />
      <S.FileInput
        type='file'
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </>
  );
}
