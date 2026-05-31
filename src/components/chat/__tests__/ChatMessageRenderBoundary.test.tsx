import { render, screen } from '@testing-library/react';
import type { ReactElement } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { ChatMessageRenderBoundary } from '../ChatMessageRenderBoundary';

function ThrowingMessage(): ReactElement {
  throw new Error('render failed');
}

describe('ChatMessageRenderBoundary', () => {
  it('falls back to plain text for a single failed message render', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <div>
        <div>previous message</div>
        <ChatMessageRenderBoundary fallback={<div style={{ whiteSpace: 'pre-wrap' }}>plain fallback text</div>}>
          <ThrowingMessage />
        </ChatMessageRenderBoundary>
        <div>next message</div>
      </div>,
    );

    expect(screen.getByText('previous message')).toBeInTheDocument();
    expect(screen.getByText('plain fallback text')).toBeInTheDocument();
    expect(screen.getByText('next message')).toBeInTheDocument();

    consoleSpy.mockRestore();
  });
});
