import React from 'react';

type ChatMessageRenderBoundaryProps = {
  children: React.ReactNode;
  fallback: React.ReactNode;
};

type ChatMessageRenderBoundaryState = {
  hasError: boolean;
};

export class ChatMessageRenderBoundary extends React.Component<
  ChatMessageRenderBoundaryProps,
  ChatMessageRenderBoundaryState
> {
  state: ChatMessageRenderBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ChatMessageRenderBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error('Failed to render chat message:', error);
  }

  componentDidUpdate(previousProps: ChatMessageRenderBoundaryProps) {
    if (this.state.hasError && previousProps.children !== this.props.children) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
