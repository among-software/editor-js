export interface UploadFile {
    name: string;
    path: string;
}
export type UploadHandler = (file: File) => Promise<UploadFile>;
