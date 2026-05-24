import { describe, expect, it } from 'vitest';

import { normalizeAutoConversationTitle } from '../conversationTitle';

describe('normalizeAutoConversationTitle', () => {
  it('truncates long auto titles without splitting multibyte text', () => {
    const title = '这是一个用于测试自动会话标题截断逻辑的超长用户问题内容，需要继续追加更多文字';

    expect(normalizeAutoConversationTitle(title)).toBe(
      `${Array.from(title).slice(0, 30).join('')}...`,
    );
  });

  it('trims whitespace and common quote wrappers', () => {
    expect(normalizeAutoConversationTitle('  「项目排期讨论」  ')).toBe('项目排期讨论');
  });
});
