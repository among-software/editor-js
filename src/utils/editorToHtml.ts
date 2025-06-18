import EditorJsHtml from "editorjs-html";

const editorJsHtml = EditorJsHtml();

export function convertEditorDataToHtml(editorData: any): string {
  const htmlBlocks = editorJsHtml.parse(editorData);

  if (Array.isArray(htmlBlocks)) {
    return htmlBlocks.join("");
  }

  // 이미 string일 경우 그대로 반환
  return htmlBlocks;
}
