const AUTO_CONVERSATION_TITLE_LIMIT = 30;

function trimTitleWrappers(value: string): string {
  return value
    .trim()
    .replace(/^["'“”「」《》]+/, '')
    .replace(/["'“”「」《》]+$/, '')
    .trim();
}

export function normalizeAutoConversationTitle(value: string): string {
  const normalized = trimTitleWrappers(value.replace(/\s+/g, ' '));
  const chars = Array.from(normalized);
  if (chars.length <= AUTO_CONVERSATION_TITLE_LIMIT) {
    return normalized;
  }
  return `${chars.slice(0, AUTO_CONVERSATION_TITLE_LIMIT).join('')}...`;
}
