const FENCED_CODE_BLOCK_RE = /(```[\s\S]*?```|~~~[\s\S]*?~~~)/g;

function normalizeThinkTagSegment(content: string): string {
  return content
    .replace(/(<think\b[^>]*>)(?!\n)/gi, '$1\n')
    .replace(/([^\n])(<\/think\s*>)/gi, '$1\n$2');
}

export function normalizeThinkTagsForMarkdown(content: string): string {
  return content
    .split(FENCED_CODE_BLOCK_RE)
    .map((segment) => (
      segment.startsWith('```') || segment.startsWith('~~~')
        ? segment
        : normalizeThinkTagSegment(segment)
    ))
    .join('');
}
