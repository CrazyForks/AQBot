import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ModelParamSliders } from '../ModelParamSliders';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe('ModelParamSliders', () => {
  it('keeps null as disabled and toggles max tokens back to its default', async () => {
    const onChange = vi.fn();
    const { rerender } = render(
      <ModelParamSliders
        values={{ temperature: null, topP: null, maxTokens: 32768, frequencyPenalty: null }}
        onChange={onChange}
        defaults={{ maxTokens: 4096 }}
        visibleParams={['maxTokens']}
      />,
    );

    await userEvent.click(screen.getByRole('switch'));
    expect(onChange).toHaveBeenLastCalledWith({ maxTokens: null });

    rerender(
      <ModelParamSliders
        values={{ temperature: null, topP: null, maxTokens: null, frequencyPenalty: null }}
        onChange={onChange}
        defaults={{ maxTokens: 4096 }}
        visibleParams={['maxTokens']}
      />,
    );

    await userEvent.click(screen.getByRole('switch'));
    expect(onChange).toHaveBeenLastCalledWith({ maxTokens: 4096 });
  });
});
