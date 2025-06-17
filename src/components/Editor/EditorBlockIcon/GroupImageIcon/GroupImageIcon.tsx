import { ChangeEvent, useRef } from "react";
import * as S from "./GroupImageIcon.style";
import { UploadHandler } from "@/types/upload";

interface GroupImageIconProps {
  addBlock: (type: string, data: object) => void;
  handleBlockIndex: () => void;
  onUpload?: UploadHandler;
}

export default function GroupImageIcon({
  handleBlockIndex,
  addBlock,
  onUpload,
}: GroupImageIconProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const imagesData = await Promise.all(
        Array.from(files).map(async (file) => {
          let url: string, name: string;

          if (onUpload) {
            const result = await onUpload(file);
            url = result.path;
            name = result.name;
          } else {
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
        })
      );

      const columnCount = Math.ceil(imagesData.length / 3);
      const columns: Array<typeof imagesData> = Array.from(
        { length: columnCount },
        () => []
      );

      imagesData.forEach((imageData, index) => {
        const colIndex = index % columnCount;
        columns[colIndex].push(imageData);
      });

      columns.forEach((columnImages) => {
        addBlock("unifiedImage", { images: columnImages });
      });
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
    <S.GroupImageIconWrapper>
      <S.GroupImageIcon onClick={handleIconClick} />
      <input
        type='file'
        accept='image/*'
        ref={fileInputRef}
        onChange={handleFileChange}
        multiple
        style={{ display: "none" }}
      />
    </S.GroupImageIconWrapper>
  );
}
