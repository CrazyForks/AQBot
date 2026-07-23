# Hide Chat Parameters for Image Models

## Goal

在服务商模型设置中，绘画模型只展示与图片模型有关的配置，不展示或提交上下文窗口、采样参数、Token 参数、推理参数和聊天请求 `extra_body`。

## Scope

- 单模型设置弹窗。
- 批量编辑弹窗。
- 单模型与批量编辑的保存保护。
- 直接相关的 `ProviderDetail` 组件测试。

不修改数据库结构、图片协议契约、历史参数，也不清理已经保存的聊天模型参数。

## UI Rules

### Single-model settings

当当前编辑类型为 `Image`：

- 保留模型基本信息和模型类型选择。
- 显示 `ImageProtocolEditor`。
- 隐藏模型能力。
- 隐藏整个聊天模型参数区块，包括上下文窗口、温度、Top P、最大 Tokens、频率惩罚、`max_completion_tokens`、System 角色、强制 Max Tokens、思维参数风格和聊天请求 `extra_body`。

切回其它模型类型后，原有界面状态可以重新显示。

### Batch editing

批量编辑按以下优先级计算界面模式：

| 类型修改 | 目标类型 | 当前选择 | 界面模式 |
|---|---|---|---|
| 已启用 | `Image` | 任意，包括混合选择 | 图片模式 |
| 已启用 | 非 `Image` | 任意 | 非图片模式 |
| 未启用 | — | 全部为 `Image` | 图片模式 |
| 未启用 | — | 混合选择或包含非 `Image` | 非图片模式 |

图片批量编辑隐藏能力、上下文窗口和整块聊天参数。模型类型选择仍然可见。

## Save Rules

### Single-model save

- `Image` 类型不解析隐藏的聊天 `extra_body`，因此隐藏字段的旧状态不会阻止图片协议保存。
- `Image` 类型不调用聊天参数更新入口。
- 保存模型列表时，`max_tokens` 和 `param_overrides` 原样复制弹窗打开前 `editingModel` 中的持久化值，不使用弹窗内隐藏前的暂存编辑值。
- 最终类型为 `Image` 时，能力继续使用现有 `sanitizeModelCapabilities('Image', …)` 规则收敛为空列表，避免保留聊天能力。
- 图片协议继续写入 `image_config`。

### Batch save

- 每个模型根据保存后的最终 `model_type` 独立判断。
- 最终类型为 `Image` 的模型不应用批量上下文窗口或聊天参数覆盖。
- 混合选择时，聊天参数只应用到最终类型不是 `Image` 的模型。
- 批量修改类型为 `Image` 时，能力按现有类型规则收敛为空列表，即使用户此前启用过批量能力修改。
- 未修改模型类型时，最终为 `Image` 的模型保留已有能力；混合选择中启用的批量能力只应用到最终非 `Image` 模型。
- 已有图片模型参数不清理，避免切回 Chat 时丢失用户配置。

## Error Handling

- 图片模型保存不受隐藏聊天 `extra_body` 校验影响。
- 图片协议编辑器保留现有结构化 JSON 校验和错误展示。
- 保存失败继续使用现有统一错误提示，不新增静默回退。

## Testing

- 单模型图片设置显示图片协议，不显示“模型参数”或参数控件。
- 从 Chat 切换到 Image 后，即使聊天 `extra_body` 输入无效，也能保存图片配置，且不调用聊天参数更新入口。
- 全部选中模型为 Image 时，批量编辑隐藏能力、上下文窗口和聊天参数。
- 混合选择并批量修改类型为 Image 时使用图片模式，保存后所有目标模型均不携带批量聊天参数，能力为空列表。
- 全部 Image 批量修改为非 Image 时使用非图片模式，并允许应用已启用的聊天参数。
- 混合批量编辑保存时，聊天参数只写入最终非 Image 模型。
- 单模型保存精确保留 `editingModel` 原始 `max_tokens` 和 `param_overrides`。
- 运行 `ProviderDetail` 定向测试、TypeScript 类型检查及前端完整测试。
