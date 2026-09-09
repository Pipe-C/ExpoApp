export const formatHeadline = (text: string): string => {
  return text.trim().toUpperCase();
};

export const sanitizeHighlights = (items: { id: string; label: string }[]) => {
  return items.map((item) => ({
    ...item,
    label: item.label.trim(),
  }));
};