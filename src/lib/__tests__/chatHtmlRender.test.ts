import { describe, expect, it } from 'vitest';
import { getMarkdown, parseMarkdownToStructure } from 'stream-markdown-parser';

import {
  normalizeHtmlRenderContent,
  normalizeHtmlRenderMarkers,
  shouldFallbackIncompleteHtmlRender,
} from '../chatHtmlRender';

describe('chat html render marker compatibility', () => {
  it('converts completed comment markers to html-render tags', () => {
    expect(normalizeHtmlRenderMarkers('before\n<!-- html-render-start --><div>ok</div><!-- html-render-end -->\nafter')).toBe(
      'before\n<html-render><div>ok</div></html-render>\nafter',
    );
  });

  it('converts multiple completed marker pairs independently', () => {
    expect(normalizeHtmlRenderMarkers('<!-- html-render-start --><b>a</b><!-- html-render-end -->\n<!-- html-render-start --><i>b</i><!-- html-render-end -->')).toBe(
      '<html-render><b>a</b></html-render>\n<html-render><i>b</i></html-render>',
    );
  });

  it('keeps incomplete comment markers renderable while streaming', () => {
    expect(normalizeHtmlRenderMarkers('before <!-- html-render-start --><div>draft', { final: false })).toBe(
      'before <html-render><div>draft',
    );
  });

  it('falls incomplete comment markers back to source text after streaming ends', () => {
    const source = 'before <!-- html-render-start --><div>draft';

    expect(normalizeHtmlRenderMarkers(source, { final: true })).toBe(source);
  });

  it('detects incomplete html-render tags only after final output', () => {
    expect(shouldFallbackIncompleteHtmlRender('<html-render><div>draft', { final: false })).toBe(false);
    expect(shouldFallbackIncompleteHtmlRender('<html-render><div>draft', { final: true })).toBe(true);
    expect(shouldFallbackIncompleteHtmlRender('<html-render><div>ok</div></html-render>', { final: true })).toBe(false);
  });

  it('temporarily closes incomplete html-render tags while streaming', () => {
    expect(normalizeHtmlRenderContent('<html-render><div>draft', { final: false })).toBe(
      '<html-render>\n<div>draft</html-render>',
    );
  });

  it('temporarily closes incomplete comment marker html-render blocks while streaming', () => {
    expect(normalizeHtmlRenderContent('before <!-- html-render-start --><div>draft', { final: false })).toBe(
      'before <html-render>\n<div>draft</html-render>',
    );
  });

  it('keeps streaming html-render content parseable before the final closing tag arrives', () => {
    const normalized = normalizeHtmlRenderContent('<html-render><div class="card">draft', { final: false });
    const md = getMarkdown('chat-html-render-streaming-test', { customHtmlTags: ['html-render'] });
    const nodes = parseMarkdownToStructure(normalized, md, {
      customHtmlTags: ['html-render'],
      final: false,
    });

    expect(nodes).toHaveLength(1);
    expect(nodes[0]).toMatchObject({
      type: 'html-render',
      content: '<div class="card">draft',
    });
  });
});
