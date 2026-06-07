import { Divider, Input, InputNumber, Switch, theme } from 'antd';
import { useTranslation } from 'react-i18next';
import { useSettingsStore } from '@/stores';
import { DEFAULT_MCP_TOOL_LOOP_MAX_ITERATIONS } from '@/types';
import { useSystemFonts } from '@/hooks/useSystemFonts';
import { SettingsGroup } from './SettingsGroup';
import { SettingsSelect } from './SettingsSelect';

const { TextArea } = Input;
const CHAT_FONT_SIZE_MIN = 12;
const CHAT_FONT_SIZE_MAX = 22;
const CHAT_LINE_HEIGHT_MIN = 1.3;
const CHAT_LINE_HEIGHT_MAX = 2.0;
const CHAT_FONT_WEIGHT_MIN = 300;
const CHAT_FONT_WEIGHT_MAX = 700;

function normalizeTimeoutSeconds(value: number | string | null) {
  const numericValue = typeof value === 'number' ? value : Number(value ?? 0);
  if (!Number.isFinite(numericValue)) return 0;
  return Math.max(0, Math.floor(numericValue));
}

function normalizeMcpToolLoopMaxIterations(value: number | string | null) {
  const numericValue = typeof value === 'number'
    ? value
    : Number(value ?? DEFAULT_MCP_TOOL_LOOP_MAX_ITERATIONS);
  if (!Number.isFinite(numericValue)) return DEFAULT_MCP_TOOL_LOOP_MAX_ITERATIONS;
  return Math.min(100, Math.max(1, Math.floor(numericValue)));
}

function normalizeChatFontSize(value: number | string | null) {
  const numericValue = typeof value === 'number' ? value : Number(value ?? 15);
  if (!Number.isFinite(numericValue)) return 15;
  return Math.min(CHAT_FONT_SIZE_MAX, Math.max(CHAT_FONT_SIZE_MIN, Math.round(numericValue)));
}

function normalizeChatLineHeight(value: number | string | null) {
  const numericValue = typeof value === 'number' ? value : Number(value ?? 1.7);
  if (!Number.isFinite(numericValue)) return 1.7;
  const clamped = Math.min(CHAT_LINE_HEIGHT_MAX, Math.max(CHAT_LINE_HEIGHT_MIN, numericValue));
  return Math.round(clamped * 10) / 10;
}

function normalizeChatFontWeight(value: number | string | null) {
  const numericValue = typeof value === 'number' ? value : Number(value ?? 400);
  if (!Number.isFinite(numericValue)) return 400;
  return Math.min(CHAT_FONT_WEIGHT_MAX, Math.max(CHAT_FONT_WEIGHT_MIN, Math.round(numericValue)));
}

export function ConversationSettings() {
  const { t } = useTranslation();
  const settings = useSettingsStore((s) => s.settings);
  const saveSettings = useSettingsStore((s) => s.saveSettings);
  const { token } = theme.useToken();
  const systemFonts = useSystemFonts();
  const rowStyle = { padding: '4px 0' };

  const fontOptions = [
    { label: t('settings.fontDefault'), value: '' },
    ...systemFonts.map((font) => ({ label: font, value: font })),
  ];

  return (
    <div style={{ padding: 24 }}>
      <SettingsGroup title={t('settings.defaultSystemPrompt')}>
        <div style={{ fontSize: 12, color: token.colorTextDescription, marginBottom: 12 }}>
          {t('settings.defaultSystemPromptDesc')}
        </div>
        <TextArea
          value={settings.default_system_prompt ?? ''}
          onChange={(e) => saveSettings({ default_system_prompt: e.target.value || null })}
          placeholder={t('settings.defaultSystemPromptPlaceholder')}
          autoSize={{ minRows: 3, maxRows: 10 }}
        />
      </SettingsGroup>

      <SettingsGroup title={t('settings.groupMessageStyle')}>
        <div className="flex items-center justify-between" style={rowStyle}>
          <span>{t('settings.bubbleStyle')}</span>
          <SettingsSelect
            value={settings.bubble_style}
            onChange={(val) => saveSettings({ bubble_style: val })}
            options={[
              { label: t('settings.bubbleModern'), value: 'modern' },
              { label: t('settings.bubbleCompact'), value: 'compact' },
              { label: t('settings.bubbleMinimal'), value: 'minimal' },
            ]}
          />
        </div>
        <Divider style={{ margin: '4px 0' }} />
        <div className="flex items-center justify-between" style={rowStyle}>
          <span>{t('settings.chatFontSize')}</span>
          <InputNumber
            aria-label={t('settings.chatFontSize')}
            min={CHAT_FONT_SIZE_MIN}
            max={CHAT_FONT_SIZE_MAX}
            step={1}
            value={settings.chat_font_size ?? 15}
            onChange={(value) => saveSettings({
              chat_font_size: normalizeChatFontSize(value),
            })}
            addonAfter="px"
            style={{ width: 120 }}
          />
        </div>
        <Divider style={{ margin: '4px 0' }} />
        <div className="flex items-center justify-between" style={rowStyle}>
          <span>{t('settings.chatLineHeight')}</span>
          <InputNumber
            aria-label={t('settings.chatLineHeight')}
            min={CHAT_LINE_HEIGHT_MIN}
            max={CHAT_LINE_HEIGHT_MAX}
            step={0.1}
            value={settings.chat_line_height ?? 1.7}
            onChange={(value) => saveSettings({
              chat_line_height: normalizeChatLineHeight(value),
            })}
            style={{ width: 120 }}
          />
        </div>
        <Divider style={{ margin: '4px 0' }} />
        <div className="flex items-center justify-between" style={rowStyle}>
          <span>{t('settings.chatFontFamily')}</span>
          <SettingsSelect
            searchable
            value={settings.chat_font_family || ''}
            onChange={(val) => saveSettings({ chat_font_family: val })}
            options={fontOptions}
          />
        </div>
        <Divider style={{ margin: '4px 0' }} />
        <div className="flex items-center justify-between" style={rowStyle}>
          <span>{t('settings.chatFontWeight')}</span>
          <InputNumber
            aria-label={t('settings.chatFontWeight')}
            min={CHAT_FONT_WEIGHT_MIN}
            max={CHAT_FONT_WEIGHT_MAX}
            step={100}
            value={settings.chat_font_weight ?? 400}
            onChange={(value) => saveSettings({
              chat_font_weight: normalizeChatFontWeight(value),
            })}
            style={{ width: 120 }}
          />
        </div>
        <Divider style={{ margin: '4px 0' }} />
        <div className="flex items-center justify-between" style={rowStyle}>
          <span>{t('settings.codeFontFamily')}</span>
          <SettingsSelect
            searchable
            value={settings.code_font_family || ''}
            onChange={(val) => saveSettings({ code_font_family: val })}
            options={fontOptions}
          />
        </div>
        <Divider style={{ margin: '4px 0' }} />
        <div className="flex items-center justify-between" style={rowStyle}>
          <div>
            <div>{t('settings.renderUserMarkdown')}</div>
            <div style={{ fontSize: 12, color: token.colorTextDescription }}>{t('settings.renderUserMarkdownDesc')}</div>
          </div>
          <Switch
            checked={settings.render_user_markdown ?? false}
            onChange={(checked) => saveSettings({ render_user_markdown: checked })}
          />
        </div>
      </SettingsGroup>

      <SettingsGroup title={t('settings.multiModelDisplayMode')}>
        <div style={{ fontSize: 12, color: token.colorTextDescription, marginBottom: 12 }}>
          {t('settings.multiModelDisplayModeDesc')}
        </div>
        <div className="flex items-center justify-between" style={rowStyle}>
          <span>{t('settings.multiModelDisplayMode')}</span>
          <SettingsSelect
            value={settings.multi_model_display_mode ?? 'tabs'}
            onChange={(val) => saveSettings({ multi_model_display_mode: val as 'tabs' | 'side-by-side' | 'stacked' })}
            options={[
              { label: t('settings.multiModelDisplayModeTabs'), value: 'tabs' },
              { label: t('settings.multiModelDisplayModeSideBySide'), value: 'side-by-side' },
              { label: t('settings.multiModelDisplayModeStacked'), value: 'stacked' },
            ]}
          />
        </div>
      </SettingsGroup>

      <SettingsGroup title={t('settings.chatSidebar')}>
        <div className="flex items-center justify-between" style={rowStyle}>
          <div>
            <div>{t('settings.chatSidebarCollapsed')}</div>
            <div style={{ fontSize: 12, color: token.colorTextDescription }}>{t('settings.chatSidebarCollapsedDesc')}</div>
          </div>
          <Switch
            checked={settings.chat_sidebar_collapsed ?? false}
            onChange={(checked) => saveSettings({ chat_sidebar_collapsed: checked })}
          />
        </div>
      </SettingsGroup>

      <SettingsGroup title={t('settings.newConversationDefaults')}>
        <div className="flex items-center justify-between" style={rowStyle}>
          <div>
            <div>{t('settings.inheritConversationPreferencesOnCreate')}</div>
            <div style={{ fontSize: 12, color: token.colorTextDescription }}>
              {t('settings.inheritConversationPreferencesOnCreateDesc')}
            </div>
          </div>
          <Switch
            checked={settings.inherit_conversation_preferences_on_create ?? true}
            onChange={(checked) => saveSettings({ inherit_conversation_preferences_on_create: checked })}
          />
        </div>
      </SettingsGroup>

      <SettingsGroup title={t('settings.chatStreamTimeouts')}>
        <div style={{ fontSize: 12, color: token.colorTextDescription, marginBottom: 12 }}>
          {t('settings.chatStreamTimeoutsDesc')}
        </div>
        <div className="flex items-center justify-between" style={rowStyle}>
          <div>
            <div>{t('settings.chatStreamFirstPacketTimeout')}</div>
            <div style={{ fontSize: 12, color: token.colorTextDescription }}>
              {t('settings.chatStreamFirstPacketTimeoutDesc')}
            </div>
          </div>
          <InputNumber
            aria-label={t('settings.chatStreamFirstPacketTimeout')}
            min={0}
            max={3600}
            step={5}
            value={settings.chat_stream_first_packet_timeout_secs ?? 180}
            onChange={(value) => saveSettings({
              chat_stream_first_packet_timeout_secs: normalizeTimeoutSeconds(value),
            })}
            addonAfter="s"
            style={{ width: 120 }}
          />
        </div>
        <Divider style={{ margin: '4px 0' }} />
        <div className="flex items-center justify-between" style={rowStyle}>
          <div>
            <div>{t('settings.chatStreamIdleTimeout')}</div>
            <div style={{ fontSize: 12, color: token.colorTextDescription }}>
              {t('settings.chatStreamIdleTimeoutDesc')}
            </div>
          </div>
          <InputNumber
            aria-label={t('settings.chatStreamIdleTimeout')}
            min={0}
            max={3600}
            step={5}
            value={settings.chat_stream_idle_timeout_secs ?? 90}
            onChange={(value) => saveSettings({
              chat_stream_idle_timeout_secs: normalizeTimeoutSeconds(value),
            })}
            addonAfter="s"
            style={{ width: 120 }}
          />
        </div>
      </SettingsGroup>

      <SettingsGroup title={t('settings.chatMinimap')}>
        <div style={{ fontSize: 12, color: token.colorTextDescription, marginBottom: 12 }}>
          {t('settings.chatMinimapEnabledDesc')}
        </div>
        <div className="flex items-center justify-between" style={rowStyle}>
          <span>{t('settings.chatMinimapEnabled')}</span>
          <Switch
            checked={settings.chat_minimap_enabled ?? false}
            onChange={(checked) => saveSettings({ chat_minimap_enabled: checked })}
          />
        </div>
        {settings.chat_minimap_enabled && (
          <>
            <Divider style={{ margin: '4px 0' }} />
            <div className="flex items-center justify-between" style={rowStyle}>
              <span>{t('settings.chatMinimapStyle')}</span>
              <SettingsSelect
                value={settings.chat_minimap_style ?? 'faq'}
                onChange={(val) => saveSettings({ chat_minimap_style: val as 'faq' | 'sticky' })}
                options={[
                  { label: t('settings.chatMinimapFaq'), value: 'faq' },
                  { label: t('settings.chatMinimapSticky'), value: 'sticky' },
                ]}
              />
            </div>
          </>
        )}
      </SettingsGroup>

      <SettingsGroup title={t('settings.additionalFeatures')}>
        <div className="flex items-center justify-between" style={rowStyle}>
          <div className="flex flex-col gap-1">
            <span>{t('settings.documentAttachmentReading')}</span>
            <span className="text-xs opacity-60">{t('settings.documentAttachmentReadingDesc')}</span>
          </div>
          <Switch
            checked={settings.document_attachment_reading_enabled ?? false}
            onChange={(checked) => saveSettings({ document_attachment_reading_enabled: checked })}
          />
        </div>
        <Divider style={{ margin: '4px 0' }} />
        <div className="flex items-center justify-between" style={rowStyle}>
          <span>{t('settings.showImageModelsInModelSelector')}</span>
          <Switch
            checked={settings.show_image_models_in_model_selector ?? false}
            onChange={(checked) => saveSettings({ show_image_models_in_model_selector: checked })}
          />
        </div>
        <Divider style={{ margin: '4px 0' }} />
        <div className="flex items-center justify-between" style={rowStyle}>
          <div>
            <div>{t('settings.mcpToolLoopMaxIterations')}</div>
            <div style={{ fontSize: 12, color: token.colorTextDescription }}>
              {t('settings.mcpToolLoopMaxIterationsDesc')}
            </div>
          </div>
          <InputNumber
            aria-label={t('settings.mcpToolLoopMaxIterations')}
            min={1}
            max={100}
            step={1}
            value={settings.mcp_tool_loop_max_iterations ?? DEFAULT_MCP_TOOL_LOOP_MAX_ITERATIONS}
            onChange={(value) => saveSettings({
              mcp_tool_loop_max_iterations: normalizeMcpToolLoopMaxIterations(value),
            })}
            style={{ width: 120 }}
          />
        </div>
      </SettingsGroup>
    </div>
  );
}
