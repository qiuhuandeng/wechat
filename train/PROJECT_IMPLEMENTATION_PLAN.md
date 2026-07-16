# 专列运营 ERP 静态原型：页面实施计划

> 来源附件：`/Users/qiu/Downloads/专列页面.docx`
>
> 本文件用于指导 116 个业务页面和最终导航页的分批生成、验收与串联。页面制作仍必须遵守 `AGENTS.md` 中的统一布局、视觉、交互和菜单规范。
>
> 视觉与交互基准：参照 `train_2/railtour-erp-static`，当前项目已复制并适配共享资产到 `assets/styles.css`、`assets/app.js`、`assets/favicon.svg`。后续页面默认使用这些资产生成后台外壳、导航、Modal、Drawer、Toast、Tab 和表格筛选交互。

## 1. 当前核对结论

- 附件正文中通过 `▶ 文件名：` 明确给出的页面指令共 114 个。
- 附件末尾汇总写明目标为 116 个 HTML，其中：
  - 订单交易标为 18 页，但正文只列出 17 个 `order-` 页面；
  - 经营看板标为 7 页，但正文只列出 6 个 `bi-` 页面。
- 因此项目目标按“116 个业务页面 + 1 个最终导航页”推进；因 `index.html` 已按最新要求作为工作台页面，最终页面地图建议使用 `prototype-map.html` 或 `page-map.html`，避免覆盖工作台。
- 缺失的 2 个业务页面先作为“待补设计页”处理，建议：
  - `order-doc-manage.html` — 单据管理：管理确认件、收款单、发团通知、分团单的生成记录、发送状态和下载入口。
  - `bi-customer.html` — 客户分析：补齐经营看板第 7 页，展示客户结构、复购、客群标签和客单价分析。
- 若用户后续指定这 2 页的其他文件名或页面含义，以用户最新指令为准。

## 2. 实施节奏

建议每批生成 3-5 个页面。每批完成后做一次小验收，再进入下一批，避免 100 多个页面后期返工。

1. 运力库存：先做 17 页，沉淀后台通用 Header、Sidebar、筛选栏、表格、Modal、Drawer 风格。
2. 产品定价：做 16 页，重点统一产品、价格、退改、促销的表单和价格展示。
3. 销售分销：做 12 页，打通销售查位、客户、渠道、分销账号等入口。
4. 订单交易：做 17 个附件明确页面，再补 1 个订单单据管理页，形成下单、收款、单据、选铺、退改主链路。
5. 计调操作：做 12 页，覆盖分团、名单、地接、发团和变更协同。
6. 财务结算：做 12 页，覆盖应收、应付、对账、毛利、发票和财务对接。
7. 经营看板：做 6 个附件明确页面，再补 1 个客户分析页。
8. 系统管理：做 8 页，覆盖组织、权限、字典、消息、日志、集成和参数。
9. C 端报名端：做 8 页，使用手机端 375px 居中布局，不使用后台 Header + Sidebar。
10. 分销门户：做 6 页，使用轻量 PC 端横向菜单，不使用复杂 Sidebar。
11. 最后生成 `prototype-map.html` 导航页，按 10 个模块分组列出 116 个业务页面链接。

每批页面都先按 `assets/styles.css` 的组件类生成，不重新发明页面风格；若需要新组件，优先贴近 train_2 的面板、表格、按钮和状态 Badge 语言。

## 3. 页面清单

### 3.1 运力库存（17 页）

| 文件名 | 页面 |
| --- | --- |
| `stock-traintype-list.html` | 车型模板列表 |
| `stock-carriage-config.html` | 车厢配置 |
| `stock-cabin-config.html` | 包厢配置 |
| `stock-berth-config.html` | 铺位配置 |
| `stock-facility.html` | 设施属性 |
| `stock-schedule-year.html` | 年度排期 |
| `stock-schedule-batch.html` | 系列开班 |
| `stock-schedule-list.html` | 班期列表 |
| `stock-overview.html` | 库存总览 |
| `stock-berth-board.html` | 铺位看板 |
| `stock-log.html` | 库存日志 |
| `stock-display-rule.html` | 展示规则 |
| `stock-hold-apply.html` | 守仓申请 |
| `stock-hold-expire.html` | 守仓到期 |
| `stock-cut-manage.html` | 切位管理 |
| `stock-release-log.html` | 释放记录 |
| `stock-warning.html` | 库存预警 |

### 3.2 产品定价（16 页）

| 文件名 | 页面 |
| --- | --- |
| `product-list.html` | 产品列表 |
| `product-edit.html` | 产品编辑 |
| `product-schedule-link.html` | 班期关联 |
| `product-publish.html` | 产品上架 |
| `price-plan.html` | 价格方案 |
| `price-headcount.html` | 人数定价 |
| `price-berth.html` | 铺位定价 |
| `price-single-diff.html` | 单房差价 |
| `price-calendar.html` | 价格日历 |
| `price-multi-system.html` | 多价体系 |
| `refund-ladder.html` | 阶梯退改 |
| `refund-anti-abuse.html` | 反薅规则 |
| `refund-special.html` | 特殊规则 |
| `promo-earlybird.html` | 早鸟团购 |
| `promo-commission.html` | 渠道返佣 |
| `promo-activity-list.html` | 活动列表 |

### 3.3 销售分销（12 页）

| 文件名 | 页面 |
| --- | --- |
| `sale-workbench.html` | 销售台席 |
| `sale-customer-list.html` | 我的客户 |
| `sale-customer-merge.html` | 客户查重 |
| `sale-customer-tag.html` | 客户标签 |
| `channel-list.html` | 渠道档案 |
| `channel-credit.html` | 签约授信 |
| `channel-price.html` | 结算价格 |
| `channel-reconcile.html` | 返佣对账 |
| `channel-order-log.html` | 下单记录 |
| `distribution-account.html` | 分销账号 |
| `distribution-permission.html` | 分销权限 |
| `distribution-audit.html` | 分销审核 |

### 3.4 订单交易（18 页）

| 文件名 | 页面 |
| --- | --- |
| `order-list.html` | 订单列表 |
| `order-detail.html` | 订单详情 |
| `order-create.html` | 新建订单 |
| `order-change.html` | 订单变更 |
| `order-traveler-list.html` | 出行名单 |
| `order-ocr.html` | 证件识别 |
| `order-doc-check.html` | 证件核验 |
| `order-doc-generate.html` | 单据生成 |
| `order-doc-manage.html` | 单据管理（待补设计页） |
| `order-berth-pending.html` | 待选铺单 |
| `order-berth-assign.html` | 铺位分配 |
| `order-berth-log.html` | 换铺记录 |
| `order-payment.html` | 收款记录 |
| `order-online-pay.html` | 在线支付 |
| `order-pay-remind.html` | 收款提醒 |
| `order-refund.html` | 退改申请 |
| `order-refund-calc.html` | 违约计算 |
| `order-refund-process.html` | 退款处理 |

### 3.5 计调操作（12 页）

| 文件名 | 页面 |
| --- | --- |
| `ops-group-split.html` | 班期分团 |
| `ops-group-list.html` | 团队列表 |
| `ops-group-detail.html` | 团队详情 |
| `ops-namelist.html` | 名单总览 |
| `ops-namelist-export.html` | 名单导出 |
| `ops-dmc-plan.html` | 下达计划 |
| `ops-dmc-settle.html` | 地接结算 |
| `ops-dmc-list.html` | 地接档案 |
| `ops-dispatch-board.html` | 发团看板 |
| `ops-pre-notice.html` | 行前提醒 |
| `ops-doc-recheck.html` | 证件复核 |
| `ops-change-collab.html` | 变更协同 |

### 3.6 财务结算（12 页）

| 文件名 | 页面 |
| --- | --- |
| `fin-receivable.html` | 应收账款 |
| `fin-writeoff.html` | 收款核销 |
| `fin-aging.html` | 账龄分析 |
| `fin-payable.html` | 缔结结算（应付） |
| `fin-payable-other.html` | 其他应付 |
| `fin-channel-reconcile.html` | 渠道对账 |
| `fin-auto-match.html` | 自动匹配 |
| `fin-reconcile-doc.html` | 对账单据 |
| `fin-profit.html` | 毛利核算 |
| `fin-channel-analysis.html` | 渠道分析 |
| `fin-invoice.html` | 发票管理 |
| `fin-integration.html` | 财务对接 |

### 3.7 经营看板（7 页）

| 文件名 | 页面 |
| --- | --- |
| `bi-overview.html` | 经营总览 |
| `bi-sales.html` | 销售分析 |
| `bi-direct.html` | 直客分析 |
| `bi-stock.html` | 库存分析 |
| `bi-refund.html` | 退改分析 |
| `bi-report.html` | 报表中心 |
| `bi-customer.html` | 客户分析（待补设计页） |

### 3.8 系统管理（8 页）

| 文件名 | 页面 |
| --- | --- |
| `sys-dept.html` | 部门管理 |
| `sys-user.html` | 员工账号 |
| `sys-role.html` | 角色权限 |
| `sys-dict.html` | 数据字典 |
| `sys-msg-template.html` | 消息模板 |
| `sys-log.html` | 操作日志 |
| `sys-integration.html` | 集成配置 |
| `sys-params.html` | 参数设置 |

### 3.9 C 端报名端（8 页）

| 文件名 | 页面 |
| --- | --- |
| `c-home.html` | 产品首页 |
| `c-product-detail.html` | 产品详情 |
| `c-schedule.html` | 班期查询 |
| `c-booking.html` | 在线报名 |
| `c-pay.html` | 在线支付 |
| `c-berth-select.html` | 付款选铺 |
| `c-my-orders.html` | 我的订单 |
| `c-service.html` | 在线客服 |

### 3.10 分销门户（6 页）

| 文件名 | 页面 |
| --- | --- |
| `d-home.html` | 渠道首页 |
| `d-search.html` | 查价查位 |
| `d-order-create.html` | 在线下单 |
| `d-my-orders.html` | 我的订单 |
| `d-settlement.html` | 结算查看 |
| `d-reconcile.html` | 对账中心 |

## 4. 每批页面验收清单

每批完成后必须检查：

1. 文件名与清单完全一致。
2. 每个 HTML 都是完整独立文件，包含 `<!DOCTYPE html>`、Tailwind CDN、完整 `body`、内联原生 JS。
3. 每个 HTML 必须引用 `assets/styles.css`、`assets/app.js` 和 `assets/favicon.svg`；后台页由共享 JS 注入 Sidebar、Topbar 和面包屑。
4. 后台页 `body` 必须写 `data-page="文件名去掉 .html"`；分销门户写 `data-shell="channel"`；C 端写 `data-shell="mobile"`。
5. 当前一级菜单高亮正确，面包屑与页面模块一致。
6. 列表页具备筛选、新建按钮、操作列和分页。
7. 详情使用 Drawer；新建、编辑、确认使用 Modal；默认隐藏，按钮可演示。
8. 字段、示例数据、行数严格来自附件指令；未给足时按同业务风格补齐。
9. C 端页面必须是 375px 手机端布局，库存只显示模糊状态。
10. 分销门户页面必须使用轻量 PC 横向菜单，只显示渠道结算价和模糊库存。
11. 每批结束后记录已完成文件，最后用 `prototype-map.html` 串联全部业务页。

## 5. 导航页 `prototype-map.html` 要求

最后生成一个原型导航页 `prototype-map.html`：

- 按 10 个模块分组：运力库存、产品定价、销售分销、订单交易、计调操作、财务结算、经营看板、系统管理、C 端报名端、分销门户。
- 每个页面一个卡片链接，卡片显示页面中文名和文件名。
- 每个模块显示页数统计。
- 对“待补设计页”可显示小标签，等页面完成后移除。
- 页面整体仍用 Tailwind CDN + 原生 JS，可独立打开。
- 所有链接使用相对路径，便于直接打开本地文件夹演示。

## 5.1 V1.1 菜单收敛改造记录

### 运力库存

本模块 V1.1 菜单收敛改造已按要求撤销，保持原多子项菜单结构：

- 车型编组：车型模板 / 车厢配置 / 包厢配置 / 铺位配置 / 设施属性。
- 运力规划：年度排期 / 系列开班 / 班期列表。
- 库存管理：库存总览 / 铺位看板 / 库存日志 / 展示规则。
- 守仓切位：守仓申请 / 守仓到期 / 切位管理 / 释放记录。
- 库存预警：库存预警。

### 产品定价

本模块 V1.1 菜单收敛改造已按要求撤销，保持原多子项菜单结构：

- 产品管理：产品列表 / 产品编辑 / 班期关联 / 产品上架。
- 定价管理：价格方案 / 人数定价 / 铺位定价 / 单房差价 / 价格日历 / 多价体系。
- 退改策略：阶梯退改 / 反薅规则 / 特殊规则。
- 促销政策：早鸟团购 / 渠道返佣 / 活动列表。

### 销售分销

本模块 V1.1 菜单收敛改造已按要求撤销，保持原多子项菜单结构：

- 销售台席：销售台席。
- 客户管理：客户列表 / 客户查重 / 客户标签。
- 渠道管理：渠道档案 / 签约授信 / 结算价格 / 返佣对账 / 下单记录。
- 分销配置：分销账号 / 分销权限 / 分销审核。

### 订单交易

本模块 V1.1 菜单收敛改造已按要求撤销，保持原多子项菜单结构：

- 订单管理：订单列表 / 订单详情 / 新建订单 / 订单变更。
- 出行人员：出行名单 / 证件识别 / 证件核验。
- 单据生成：单据生成（确认件 / 收款单 / 发团通知书 / 分团单在同页 Tab）。
- 选铺管理：待选铺单 / 铺位分配 / 换铺记录。
- 收款管理：收款记录 / 在线支付 / 收款提醒。
- 退改管理：退改申请 / 违约计算 / 退款处理。

已撤销的聚合页 `order-berth-manage.html` 不再保留；订单列表中的“单据/变更”等行操作恢复为跳转独立页面。

### 计调操作

本模块 V1.1 菜单收敛改造已按要求撤销，保持原多子项菜单结构：

- 分团管理：班期分团 / 团队列表 / 团队详情。
- 名单管理：名单总览 / 名单导出。
- 地接计划：下达计划 / 地接结算 / 地接档案。
- 发团作业：发团看板 / 行前提醒 / 证件复核。
- 变更协同：变更协同。

## 6. 建议主演示动线

最终演示时优先串这几条主流程：

1. 库存建模：车型模板 → 车厢配置 → 包厢配置 → 铺位看板 → 库存总览。
2. 产品售卖：产品列表 → 产品编辑 → 班期关联 → 价格方案 → 产品上架。
3. 销售下单：销售台席 → 新建订单 → 收款记录 → 待选铺单 → 铺位分配。
4. 客户自助：C 端首页 → 产品详情 → 班期查询 → 在线报名 → 在线支付 → 付款选铺 → 我的订单。
5. 渠道自助：分销门户首页 → 查价查位 → 在线下单 → 我的订单 → 结算查看 → 对账中心。
6. 履约计调：班期分团 → 名单总览 → 下达计划 → 发团看板 → 证件复核。
7. 财务闭环：应收账款 → 收款核销 → 渠道对账 → 毛利核算 → 发票管理 → 财务对接。
8. 经营汇报：经营总览 → 销售分析 → 直客分析 → 库存分析 → 毛利/渠道分析 → 报表中心。
