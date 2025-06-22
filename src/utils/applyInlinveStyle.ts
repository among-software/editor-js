export function applyInlineStyle(style: Record<string, string>) {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || selection.isCollapsed) return;

  const range = selection.getRangeAt(0);

  const span = document.createElement("span");
  Object.entries(style).forEach(([key, value]) => {
    span.style.setProperty(key, value);
    span.setAttribute(`data-${key}`, value);
  });
  span.style.display = "inline-block";
  span.style.wordBreak = "break-word";

  span.appendChild(range.extractContents());
  range.deleteContents();
  range.insertNode(span);

  const newRange = document.createRange();
  newRange.selectNodeContents(span);
  newRange.collapse(false);
  selection.removeAllRanges();
  selection.addRange(newRange);
}
