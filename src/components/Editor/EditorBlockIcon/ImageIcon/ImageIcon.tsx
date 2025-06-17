import { ChangeEvent, useRef } from "react";
import * as S from "./ImageIcon.style";
import { UploadHandler } from "@/types/upload";

interface ImageIconProps {
  addBlock: (type: string, data: object) => void;
  handleBlockIndex: () => void;
  onUpload?: UploadHandler;
}

export default function ImageIcon({
  handleBlockIndex,
  addBlock,
  onUpload,
}: ImageIconProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      let imageUrl: string, name: string;

      if (onUpload) {
        const { name: uploadedName, path } = await onUpload(file);
        imageUrl = path;
        name = uploadedName;
      } else {
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

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const getImageDimensions = (
    url: string
  ): Promise<{ width: number; height: number }> => {
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

  return (
    <S.ImageIconWrapper>
      <S.ImageIcon onClick={handleIconClick} />
      <S.ImageFileInput
        type='file'
        accept='image/*'
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </S.ImageIconWrapper>
  );
}
