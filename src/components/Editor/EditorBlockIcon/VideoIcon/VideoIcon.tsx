import { ChangeEvent, useRef } from "react";
import * as S from "./VideoIcon.style";
import { UploadHandler } from "@/types/upload";

interface VideoIconProps {
  addBlock: (type: string, data: object) => void;
  handleBlockIndex: () => void;
  onUpload?: UploadHandler;
}

export default function VideoIcon({
  handleBlockIndex,
  addBlock,
  onUpload,
}: VideoIconProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    let videoData;

    if (onUpload) {
      const uploaded = await onUpload(file);
      videoData = {
        url: uploaded.path,
        name: uploaded.name,
        type: file.type,
        size: file.size,
      };
    } else {
      const reader = new FileReader();
      const base64 = await new Promise<string>((resolve) => {
        reader.onloadend = () => resolve(reader.result as string);
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
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleIconClick = () => {
    handleBlockIndex();
    fileInputRef.current?.click();
  };

  return (
    <S.VideoIconWrapper>
      <S.VideoIcon onClick={handleIconClick} />
      <S.VideoFileInput
        type='file'
        accept='video/*'
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </S.VideoIconWrapper>
  );
}
