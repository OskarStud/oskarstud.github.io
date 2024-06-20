export function cutText(text: string): string {
  if (text.length > 50) {
    return `${text.slice(0, 49)}...`;
  }
  return text;
}

export function generateId() {
  const generatedId = Math.random().toString(16).slice(2);
  return generatedId;
}
