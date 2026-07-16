(function () {
  "use strict";

  var menuTree = [
    { id: "index", label: "工作台", pageLabel: "工作台", icon: "dashboard", file: "index.html" },
    { label: "运力库存", icon: "train", sections: [
      { label: "车型编组", items: [
        { id: "stock-traintype-list", label: "车型模板", file: "stock-traintype-list.html" },
        { id: "stock-carriage-config", label: "车厢配置", file: "stock-carriage-config.html" },
        { id: "stock-cabin-config", label: "包厢配置", file: "stock-cabin-config.html" },
        { id: "stock-berth-config", label: "铺位配置", file: "stock-berth-config.html" },
        { id: "stock-facility", label: "设施属性", file: "stock-facility.html" }
      ]},
      { label: "运力规划", items: [
        { id: "stock-schedule-year", label: "年度排期", file: "stock-schedule-year.html" },
        { id: "stock-schedule-batch", label: "系列开班", file: "stock-schedule-batch.html" },
        { id: "stock-schedule-list", label: "班期列表", file: "stock-schedule-list.html" }
      ]},
      { label: "库存管理", items: [
        { id: "stock-overview", label: "库存总览", file: "stock-overview.html" },
        { id: "stock-berth-board", label: "铺位看板", file: "stock-berth-board.html" },
        { id: "stock-log", label: "库存日志", file: "stock-log.html" },
        { id: "stock-display-rule", label: "展示规则", file: "stock-display-rule.html" }
      ]},
      { label: "守仓切位", items: [
        { id: "stock-hold-apply", label: "守仓申请", file: "stock-hold-apply.html" },
        { id: "stock-hold-expire", label: "守仓到期", file: "stock-hold-expire.html" },
        { id: "stock-cut-manage", label: "切位管理", file: "stock-cut-manage.html" },
        { id: "stock-release-log", label: "释放记录", file: "stock-release-log.html" }
      ]},
      { label: "库存预警", hideTitle: true, items: [
        { id: "stock-warning", label: "库存预警", file: "stock-warning.html" }
      ]}
    ]},
    { label: "产品定价", icon: "package", sections: [
      { label: "产品管理", items: [
        { id: "product-list", label: "产品列表", file: "product-list.html" },
        { id: "product-edit", label: "产品编辑", file: "product-edit.html" },
        { id: "product-schedule-link", label: "班期关联", file: "product-schedule-link.html" },
        { id: "product-publish", label: "产品上架", file: "product-publish.html" }
      ]},
      { label: "定价管理", items: [
        { id: "price-plan", label: "价格方案", file: "price-plan.html" },
        { id: "price-headcount", label: "人数定价", file: "price-headcount.html" },
        { id: "price-berth", label: "铺位定价", file: "price-berth.html" },
        { id: "price-single-diff", label: "单房差价", file: "price-single-diff.html" },
        { id: "price-calendar", label: "价格日历", file: "price-calendar.html" },
        { id: "price-multi-system", label: "多价体系", file: "price-multi-system.html" }
      ]},
      { label: "退改策略", items: [
        { id: "refund-ladder", label: "阶梯退改", file: "refund-ladder.html" },
        { id: "refund-anti-abuse", label: "反薅规则", file: "refund-anti-abuse.html" },
        { id: "refund-special", label: "特殊规则", file: "refund-special.html" }
      ]},
      { label: "促销政策", items: [
        { id: "promo-earlybird", label: "早鸟团购", file: "promo-earlybird.html" },
        { id: "promo-commission", label: "渠道返佣", file: "promo-commission.html" },
        { id: "promo-activity-list", label: "活动列表", file: "promo-activity-list.html" }
      ]}
    ]},
    { label: "销售分销", icon: "customers", sections: [
      { label: "销售台席", items: [
        { id: "sale-workbench", label: "销售台席", file: "sale-workbench.html" }
      ]},
      { label: "客户管理", items: [
        { id: "sale-customer-list", label: "客户列表", file: "sale-customer-list.html" },
        { id: "sale-customer-merge", label: "客户查重", file: "sale-customer-merge.html" },
        { id: "sale-customer-tag", label: "客户标签", file: "sale-customer-tag.html" }
      ]},
      { label: "渠道管理", items: [
        { id: "channel-list", label: "渠道档案", file: "channel-list.html" },
        { id: "channel-credit", label: "签约授信", file: "channel-credit.html" },
        { id: "channel-price", label: "结算价格", file: "channel-price.html" },
        { id: "channel-reconcile", label: "返佣对账", file: "channel-reconcile.html" },
        { id: "channel-order-log", label: "下单记录", file: "channel-order-log.html" }
      ]},
      { label: "分销配置", items: [
        { id: "distribution-account", label: "分销账号", file: "distribution-account.html" },
        { id: "distribution-permission", label: "分销权限", file: "distribution-permission.html" },
        { id: "distribution-audit", label: "分销审核", file: "distribution-audit.html" }
      ]}
    ]},
    { label: "订单交易", icon: "orders", sections: [
      { label: "订单管理", items: [
        { id: "order-list", label: "订单列表", file: "order-list.html" },
        { id: "order-detail", label: "订单详情", file: "order-detail.html" },
        { id: "order-create", label: "新建订单", file: "order-create.html" },
        { id: "order-change", label: "订单变更", file: "order-change.html" }
      ]},
      { label: "出行人员", items: [
        { id: "order-traveler-list", label: "出行名单", file: "order-traveler-list.html" },
        { id: "order-ocr", label: "证件识别", file: "order-ocr.html" },
        { id: "order-doc-check", label: "证件核验", file: "order-doc-check.html" }
      ]},
      { label: "单据生成", items: [
        { id: "order-doc-generate", label: "单据生成", file: "order-doc-generate.html" }
      ]},
      { label: "选铺管理", items: [
        { id: "order-berth-pending", label: "待选铺单", file: "order-berth-pending.html" },
        { id: "order-berth-assign", label: "铺位分配", file: "order-berth-assign.html" },
        { id: "order-berth-log", label: "换铺记录", file: "order-berth-log.html" }
      ]},
      { label: "收款管理", items: [
        { id: "order-payment", label: "收款记录", file: "order-payment.html" },
        { id: "order-online-pay", label: "在线支付", file: "order-online-pay.html" },
        { id: "order-pay-remind", label: "收款提醒", file: "order-pay-remind.html" }
      ]},
      { label: "退改管理", items: [
        { id: "order-refund", label: "退改申请", file: "order-refund.html" },
        { id: "order-refund-calc", label: "违约计算", file: "order-refund-calc.html" },
        { id: "order-refund-process", label: "退款处理", file: "order-refund-process.html" }
      ]}
    ]},
    { label: "计调操作", icon: "fulfillment", sections: [
      { label: "分团管理", items: [
        { id: "ops-group-split", label: "班期分团", file: "ops-group-split.html" },
        { id: "ops-group-list", label: "团队列表", file: "ops-group-list.html" },
        { id: "ops-group-detail", label: "团队详情", file: "ops-group-detail.html" }
      ]},
      { label: "名单管理", items: [
        { id: "ops-namelist", label: "名单总览", file: "ops-namelist.html" },
        { id: "ops-namelist-export", label: "名单导出", file: "ops-namelist-export.html" }
      ]},
      { label: "地接计划", items: [
        { id: "ops-dmc-plan", label: "下达计划", file: "ops-dmc-plan.html" },
        { id: "ops-dmc-settle", label: "地接结算", file: "ops-dmc-settle.html" },
        { id: "ops-dmc-list", label: "地接档案", file: "ops-dmc-list.html" }
      ]},
      { label: "发团作业", items: [
        { id: "ops-dispatch-board", label: "发团看板", file: "ops-dispatch-board.html" },
        { id: "ops-pre-notice", label: "行前提醒", file: "ops-pre-notice.html" },
        { id: "ops-doc-recheck", label: "证件复核", file: "ops-doc-recheck.html" }
      ]},
      { label: "变更协同", hideTitle: true, items: [
        { id: "ops-change-collab", label: "变更协同", file: "ops-change-collab.html" }
      ]}
    ]},
    { label: "财务结算", icon: "finance", sections: [
      { label: "应收管理", items: [
        { id: "fin-receivable", label: "应收账款", file: "fin-receivable.html" },
        { id: "fin-writeoff", label: "收款核销", file: "fin-writeoff.html" },
        { id: "fin-aging", label: "账龄分析", file: "fin-aging.html" }
      ]},
      { label: "应付管理", items: [
        { id: "fin-payable", label: "缔结结算", file: "fin-payable.html" },
        { id: "fin-payable-other", label: "其他应付", file: "fin-payable-other.html" }
      ]},
      { label: "对账管理", items: [
        { id: "fin-channel-reconcile", label: "渠道对账", file: "fin-channel-reconcile.html" },
        { id: "fin-auto-match", label: "自动匹配", file: "fin-auto-match.html" },
        { id: "fin-reconcile-doc", label: "对账单据", file: "fin-reconcile-doc.html" }
      ]},
      { label: "成本毛利", items: [
        { id: "fin-profit", label: "毛利核算", file: "fin-profit.html" },
        { id: "fin-channel-analysis", label: "渠道分析", file: "fin-channel-analysis.html" }
      ]},
      { label: "发票管理", hideTitle: true, items: [
        { id: "fin-invoice", label: "发票管理", file: "fin-invoice.html" }
      ]},
      { label: "财务对接", items: [
        { id: "fin-integration", label: "财务对接", file: "fin-integration.html" }
      ]}
    ]},
    { label: "经营看板", icon: "chart", sections: [
      { label: "经营看板", hideTitle: true, items: [
        { id: "bi-overview", label: "经营总览", file: "bi-overview.html" },
        { id: "bi-sales", label: "销售分析", file: "bi-sales.html" },
        { id: "bi-direct", label: "直客分析", file: "bi-direct.html" },
        { id: "bi-stock", label: "库存分析", file: "bi-stock.html" },
        { id: "bi-refund", label: "退改分析", file: "bi-refund.html" },
        { id: "bi-customer", label: "客户分析", file: "bi-customer.html" },
        { id: "bi-report", label: "报表中心", file: "bi-report.html" }
      ]}
    ]},
    { label: "系统管理", icon: "settings", sections: [
      { label: "组织人员", items: [
        { id: "sys-dept", label: "部门管理", file: "sys-dept.html" },
        { id: "sys-user", label: "员工账号", file: "sys-user.html" }
      ]},
      { label: "系统管理", hideTitle: true, items: [
        { id: "sys-role", label: "角色权限", file: "sys-role.html" },
        { id: "sys-dict", label: "数据字典", file: "sys-dict.html" },
        { id: "sys-msg-template", label: "消息模板", file: "sys-msg-template.html" },
        { id: "sys-log", label: "操作日志", file: "sys-log.html" },
        { id: "sys-integration", label: "集成配置", file: "sys-integration.html" },
        { id: "sys-params", label: "参数设置", file: "sys-params.html" }
      ]}
    ]}
  ];

  var channelPages = [
    { id: "d-home", label: "渠道首页", file: "d-home.html" },
    { id: "d-search", label: "查价查位", file: "d-search.html" },
    { id: "d-order-create", label: "在线下单", file: "d-order-create.html" },
    { id: "d-my-orders", label: "我的订单", file: "d-my-orders.html" },
    { id: "d-settlement", label: "结算查看", file: "d-settlement.html" },
    { id: "d-reconcile", label: "对账中心", file: "d-reconcile.html" }
  ];

  var navIcons = {
    dashboard: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11.2 12 4l8 7.2v8.2a1.6 1.6 0 0 1-1.6 1.6h-4.2v-5.2H9.8V21H5.6A1.6 1.6 0 0 1 4 19.4Z"/></svg>',
    train: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h10a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2Z"/><path d="M8 8h8M8 12h8M8 21l2-3M16 18l2 3"/></svg>',
    package: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4.5 8 7.5 4.1L19.5 8M12 20.2V12.1"/><path d="M5 8.2 12 4l7 4.2v7.6L12 20 5 15.8Z"/></svg>',
    customers: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 11.2a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8ZM3.8 19.5c.7-3.3 2.8-5 5.7-5s5 1.7 5.7 5"/><path d="M16 10.8a2.8 2.8 0 1 0 0-5.6M16.5 14.3c2.1.4 3.4 2.1 3.9 4.6"/></svg>',
    orders: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h10a2 2 0 0 1 2 2v14l-3-1.8-3 1.8-3-1.8L7 20V6a2 2 0 0 1 2-2Z"/><path d="M9 9h6M9 13h6"/></svg>',
    fulfillment: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 15.5h14M7 15.5l-1.7-5.8A2 2 0 0 1 7.2 7h9.6a2 2 0 0 1 1.9 2.7L17 15.5"/><path d="M8 19.5h.1M16 19.5h.1M9 11h6"/></svg>',
    finance: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7.5h14v11H5z"/><path d="M8 7.5V5h8v2.5M8 12h8M8 15h5"/></svg>',
    chart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19V5M5 19h14"/><path d="m8 15 3-4 3 2 4-6"/></svg>',
    settings: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"/><path d="m19.2 13.2.1-2.4-2.3-.7-.8-1.8 1.1-2.1-1.7-1.7-2.1 1.1-1.9-.7L11 2.6H8.6L8 4.9l-1.8.8-2.1-1.1-1.7 1.7 1.1 2.1-.7 1.8-2.3.7.1 2.4 2.2.6.8 1.9-1 2.1 1.7 1.7 2-1.1 1.9.8.6 2.2h2.4l.6-2.2 1.9-.8 2 1.1 1.7-1.7-1-2.1.8-1.9Z"/></svg>'
  };

  var noticeIcon = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18 16v-5a6 6 0 0 0-12 0v5l-2 2h16l-2-2Z"/><path d="M9.5 20a2.5 2.5 0 0 0 5 0"/></svg>';

  function ensureFavicon() {
    if (document.querySelector('link[rel~="icon"]')) return;
    var link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.href = "assets/favicon.svg";
    document.head.appendChild(link);
  }

  function renderNavIcon(name) {
    return '<span class="nav-primary-icon">' + (navIcons[name] || navIcons.dashboard) + '</span>';
  }

  function findMenuItem(pageId) {
    var found = null;
    menuTree.forEach(function (domain) {
      if (domain.id === pageId) {
        found = {
          id: domain.id,
          label: domain.pageLabel || domain.label,
          file: domain.file,
          path: [domain.label]
        };
      }
      (domain.sections || []).forEach(function (section) {
        section.items.forEach(function (item) {
          if (item.id === pageId) {
            found = {
              id: item.id,
              label: item.label,
              file: item.file,
              path: item.path || (section.hideTitle ? [domain.label] : [domain.label, section.label]),
              parentId: item.parentId
            };
          }
        });
      });
    });
    return found || { id: "index", label: "原型导航", file: "index.html", path: ["工作台"] };
  }

  function branchHasActive(domain, pageId) {
    if (domain.id === pageId) return true;
    return (domain.sections || []).some(function (section) {
      return section.items.some(function (item) { return item.id === pageId; });
    });
  }

  function defaultFileForDomain(domain) {
    if (domain.file) return domain.file;
    var firstVisible = null;
    domain.sections.some(function (section) {
      firstVisible = section.items.find(function (item) { return !item.hidden; });
      return Boolean(firstVisible);
    });
    return (firstVisible || domain.sections[0].items[0]).file;
  }

  function sectionHasActive(section, pageId) {
    return section.items.some(function (item) { return item.id === pageId; });
  }

  function domainShortLabel(label) {
    var map = {
      "工作台": "工作台",
      "运力库存": "运力",
      "产品定价": "定价",
      "销售分销": "销售",
      "订单交易": "订单",
      "计调操作": "计调",
      "财务结算": "财务",
      "经营看板": "看板",
      "系统管理": "系统"
    };
    return map[label] || label;
  }

  function buildSidebar(pageId) {
    var activeDomain = menuTree.find(function (domain) { return branchHasActive(domain, pageId); }) || menuTree[0];
    var activeItem = findMenuItem(pageId);
    var hasSecondary = Boolean(activeDomain.sections && activeDomain.sections.length);
    var primaryNav = menuTree.map(function (domain) {
      var active = branchHasActive(domain, pageId) ? " active" : "";
      return '<a class="nav-primary-item' + active + '" href="' + defaultFileForDomain(domain) + '" title="' + domain.label + '">' +
        renderNavIcon(domain.icon) + '<span class="nav-primary-label">' + domainShortLabel(domain.label) + '</span></a>';
    }).join("");
    var secondaryNav = hasSecondary ? activeDomain.sections.map(function (section) {
      var sectionActive = sectionHasActive(section, pageId) ? " active" : "";
      var links = section.items.filter(function (item) { return !item.hidden; }).map(function (item) {
        var active = item.id === pageId || item.id === activeItem.parentId ? " active" : "";
        return '<a class="nav-link nav-link-level3' + active + '" href="' + item.file + '">' +
          '<span class="nav-link-label">' + item.label + '</span></a>';
      }).join("");
      var title = section.hideTitle ? "" : '<div class="nav-section-title">' + section.label + '</div>';
      return '<div class="nav-section' + sectionActive + '">' + title + links + '</div>';
    }).join("") : "";

    return '<aside class="app-sidebar app-sidebar-split' + (hasSecondary ? "" : " sidebar-primary-only") + '">' +
      '<div class="sidebar-rail">' +
      '<a class="rail-brand" href="index.html" aria-label="专列ERP"><span class="brand-mark">专</span></a>' +
      '<nav class="primary-nav">' + primaryNav + '</nav></div>' +
      (hasSecondary ?
      '<div class="sidebar-panel">' +
      '<div class="sidebar-panel-head module-only"><small>' + activeDomain.label + '</small></div>' +
      '<nav class="side-nav">' + secondaryNav + '</nav></div>' : "") +
      '</aside>';
  }

  function buildCrumbs(item, displayTitle) {
    var path = item.path.slice();
    if (path[path.length - 1] !== displayTitle) path.push(displayTitle);
    return path.map(function (part, index) {
      return index === path.length - 1 ? '<b>' + part + '</b>' : '<span>' + part + '</span>';
    }).join('<i>/</i>');
  }

  function buildTopbar(item, displayTitle) {
    return '<header class="app-topbar">' +
      '<div class="crumbs">' + buildCrumbs(item, displayTitle) + '</div>' +
      '<div class="top-tools">' +
      '<select class="departure-picker" id="globalDeparture" aria-label="当前班期">' +
      '<option>2026-09-25 · 环云南9天</option>' +
      '<option>2026-10-17 · 环云南9天</option>' +
      '<option>2026-11-14 · 环云南9天</option>' +
      '<option>2026-12-19 · 环云南9天</option>' +
      '<option>2026-12-28 · 环云南9天</option>' +
      '</select>' +
      '<button class="top-icon" type="button" data-toast="暂时没有新的系统通知" aria-label="通知">' + noticeIcon + '</button>' +
      '<span class="avatar" title="张经理">张</span><span class="user-name">张经理</span>' +
      '</div></header>';
  }

  function buildChannelShell(activeId, displayTitle, content) {
    var nav = channelPages.map(function (item) {
      return '<a class="channel-nav-link' + (item.id === activeId ? " active" : "") + '" href="' + item.file + '">' + item.label + '</a>';
    }).join("");
    return '<div class="channel-shell">' +
      '<header class="channel-topbar">' +
      '<a class="channel-brand" href="d-home.html"><span class="brand-mark">专</span><b>专列ERP分销门户</b></a>' +
      '<nav class="channel-nav">' + nav + '</nav>' +
      '<div class="top-tools"><button class="top-icon" type="button" data-toast="没有新的渠道通知" aria-label="通知">' + noticeIcon + '</button><span class="avatar" title="康辉旅行社">康</span><span class="user-name">康辉旅行社</span></div>' +
      '</header>' +
      '<main class="page-content channel-content"><div class="crumbs channel-crumbs">分销门户<i>/</i><b>' + displayTitle + '</b></div>' + content + '</main>' +
      '<div class="toast" id="globalToast" role="status" aria-live="polite"><i>✓</i><span></span></div>' +
      '</div>';
  }

  function injectShell() {
    var body = document.body;
    var shell = body.getAttribute("data-shell") || "internal";
    var pageId = body.getAttribute("data-page") || "index";
    var item = findMenuItem(pageId);
    var displayTitle = body.getAttribute("data-title") || item.label;
    var content = body.innerHTML;

    if (shell === "mobile") {
      body.insertAdjacentHTML("beforeend", '<div class="toast" id="globalToast" role="status" aria-live="polite"><i>✓</i><span></span></div>');
      return;
    }

    if (shell === "channel") {
      body.innerHTML = buildChannelShell(body.getAttribute("data-channel-page") || pageId, displayTitle, content);
      return;
    }

    body.innerHTML = buildSidebar(pageId) +
      '<div class="app-main">' + buildTopbar(item, displayTitle) +
      '<main class="page-content">' + content + '</main></div>' +
      '<div class="toast" id="globalToast" role="status" aria-live="polite"><i>✓</i><span></span></div>';
  }

  var toastTimer = 0;
  function showToast(message) {
    var toast = document.getElementById("globalToast");
    if (!toast) return;
    toast.querySelector("span").textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("show");
    }, 2300);
  }

  function getTableBySelector(selector) {
    if (!selector) return null;
    try {
      return document.querySelector(selector);
    } catch (error) {
      return null;
    }
  }

  function getActiveStatus(table) {
    var status = "";
    document.querySelectorAll("[data-status-tabs]").forEach(function (tabs) {
      if (getTableBySelector(tabs.getAttribute("data-target")) !== table) return;
      var active = tabs.querySelector("button.active");
      var value = active ? active.getAttribute("data-status") : "";
      if (value && value !== "all") status = value;
    });
    return status;
  }

  function resetStatusTabs(table) {
    document.querySelectorAll("[data-status-tabs]").forEach(function (tabs) {
      if (getTableBySelector(tabs.getAttribute("data-target")) !== table) return;
      tabs.querySelectorAll("button").forEach(function (button) {
        button.classList.toggle("active", button.getAttribute("data-status") === "all");
      });
    });
  }

  function applyTableFilters(table) {
    if (!table) return;
    var activeStatus = getActiveStatus(table).toLowerCase();
    var terms = [];
    var filters = [];
    document.querySelectorAll("[data-table-search]").forEach(function (input) {
      if (getTableBySelector(input.getAttribute("data-table-search")) !== table) return;
      var term = input.value.trim().toLowerCase();
      if (term) terms.push(term);
    });
    document.querySelectorAll("[data-table-filter]").forEach(function (control) {
      if (getTableBySelector(control.getAttribute("data-table-filter")) !== table) return;
      var value = control.value.trim().toLowerCase();
      var key = control.getAttribute("data-filter-key");
      if (value && key) filters.push({ key: key, value: value });
    });
    table.querySelectorAll("tbody tr").forEach(function (row) {
      var visible = true;
      if (activeStatus && (row.getAttribute("data-status") || "").toLowerCase() !== activeStatus) visible = false;
      terms.forEach(function (term) {
        if (row.textContent.toLowerCase().indexOf(term) === -1) visible = false;
      });
      filters.forEach(function (filter) {
        if ((row.getAttribute("data-" + filter.key) || "").toLowerCase() !== filter.value) visible = false;
      });
      row.hidden = !visible;
    });
  }

  function bindToasts() {
    document.querySelectorAll("[data-toast]").forEach(function (element) {
      element.addEventListener("click", function () {
        showToast(element.getAttribute("data-toast") || "操作已完成");
      });
    });
  }

  function bindConfirmations() {
    document.querySelectorAll("[data-confirm]").forEach(function (button) {
      button.addEventListener("click", function () {
        var message = button.getAttribute("data-confirm") || "确认执行此操作？";
        if (window.confirm(message)) showToast(button.getAttribute("data-confirm-success") || "操作已确认");
      });
    });
  }

  function bindModals() {
    var lastFocusedElement = null;
    var focusableSelector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    function openModal(modal, trigger) {
      lastFocusedElement = trigger || document.activeElement;
      modal.hidden = false;
      if (!modal.getAttribute("role")) modal.setAttribute("role", "dialog");
      if (!modal.getAttribute("aria-modal")) modal.setAttribute("aria-modal", "true");
      window.setTimeout(function () {
        var focusable = modal.querySelector(focusableSelector);
        if (focusable) focusable.focus();
      }, 0);
    }
    function closeModal(modal) {
      modal.hidden = true;
      if (lastFocusedElement && typeof lastFocusedElement.focus === "function") lastFocusedElement.focus();
    }
    document.querySelectorAll("[data-modal-open]").forEach(function (button) {
      button.addEventListener("click", function () {
        var modal = document.getElementById(button.getAttribute("data-modal-open"));
        if (modal) openModal(modal, button);
      });
    });
    document.querySelectorAll("[data-modal-close]").forEach(function (button) {
      button.addEventListener("click", function () {
        var modal = button.closest(".modal");
        if (modal) closeModal(modal);
      });
    });
    document.querySelectorAll(".modal").forEach(function (modal) {
      modal.addEventListener("click", function (event) {
        if (event.target === modal && !modal.hasAttribute("data-modal-static")) closeModal(modal);
      });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        var openModals = Array.prototype.slice.call(document.querySelectorAll(".modal:not([hidden])"));
        if (!openModals.length) return;
        var topModal = openModals[openModals.length - 1];
        if (!topModal.hasAttribute("data-modal-static")) closeModal(topModal);
      }
      if (event.key === "Tab") {
        var modal = document.querySelector(".modal:not([hidden])");
        if (!modal) return;
        var focusable = Array.prototype.slice.call(modal.querySelectorAll(focusableSelector)).filter(function (item) {
          return item.offsetParent !== null;
        });
        if (!focusable.length) return;
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
  }

  function bindTabs() {
    document.querySelectorAll("[data-tabs]").forEach(function (tabs) {
      var scopeSelector = tabs.getAttribute("data-scope");
      var scope = scopeSelector ? document.querySelector(scopeSelector) : document;
      tabs.querySelectorAll("[data-tab]").forEach(function (button) {
        button.addEventListener("click", function () {
          var name = button.getAttribute("data-tab");
          tabs.querySelectorAll("[data-tab]").forEach(function (item) { item.classList.remove("active"); });
          button.classList.add("active");
          scope.querySelectorAll("[data-tab-panel]").forEach(function (panel) {
            panel.hidden = panel.getAttribute("data-tab-panel") !== name;
          });
        });
      });
    });
  }

  function bindViewSwitches() {
    document.querySelectorAll("[data-view-switch]").forEach(function (switcher) {
      var scopeSelector = switcher.getAttribute("data-scope");
      var scope = scopeSelector ? document.querySelector(scopeSelector) : document;
      switcher.querySelectorAll("button").forEach(function (button) {
        button.addEventListener("click", function () {
          var view = button.getAttribute("data-view");
          switcher.querySelectorAll("button").forEach(function (item) { item.classList.remove("active"); });
          button.classList.add("active");
          scope.querySelectorAll("[data-view-panel]").forEach(function (panel) {
            panel.hidden = panel.getAttribute("data-view-panel") !== view;
          });
        });
      });
    });
  }

  function bindTables() {
    document.querySelectorAll(".data-table.selectable tbody tr").forEach(function (row) {
      row.addEventListener("click", function (event) {
        if (event.target.closest("button, a, input, select")) return;
        row.parentElement.querySelectorAll("tr").forEach(function (item) { item.classList.remove("selected"); });
        row.classList.add("selected");
      });
    });
    document.querySelectorAll("[data-table-search]").forEach(function (input) {
      input.addEventListener("input", function () {
        applyTableFilters(getTableBySelector(input.getAttribute("data-table-search")));
      });
    });
    document.querySelectorAll("[data-table-filter]").forEach(function (control) {
      control.addEventListener("change", function () {
        applyTableFilters(getTableBySelector(control.getAttribute("data-table-filter")));
      });
    });
    document.querySelectorAll("[data-apply-filters]").forEach(function (button) {
      button.addEventListener("click", function () {
        applyTableFilters(getTableBySelector(button.getAttribute("data-apply-filters")));
        showToast("筛选完成");
      });
    });
    document.querySelectorAll("[data-status-tabs]").forEach(function (tabs) {
      tabs.querySelectorAll("button").forEach(function (button) {
        button.addEventListener("click", function () {
          tabs.querySelectorAll("button").forEach(function (item) { item.classList.remove("active"); });
          button.classList.add("active");
          applyTableFilters(getTableBySelector(tabs.getAttribute("data-target")));
        });
      });
    });
    document.querySelectorAll("[data-reset-filters]").forEach(function (button) {
      button.addEventListener("click", function () {
        var scope = button.closest("[data-filter-scope]") || button.closest(".panel") || document;
        scope.querySelectorAll("input").forEach(function (input) { input.value = ""; });
        scope.querySelectorAll("select").forEach(function (select) { select.selectedIndex = 0; });
        document.querySelectorAll(".data-table").forEach(function (table) {
          resetStatusTabs(table);
          applyTableFilters(table);
        });
        showToast("筛选条件已重置");
      });
    });
  }

  function bindForms() {
    document.querySelectorAll("form").forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        showToast(form.getAttribute("data-success") || "信息已保存");
        var modal = form.closest(".modal");
        if (modal) modal.hidden = true;
      });
    });
  }

  function bindMenus() {
    document.querySelectorAll("[data-menu-toggle]").forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.stopPropagation();
        var menu = button.parentElement.querySelector(".action-menu");
        if (!menu) return;
        menu.hidden = !menu.hidden;
      });
    });
    document.addEventListener("click", function () {
      document.querySelectorAll(".action-menu").forEach(function (menu) { menu.hidden = true; });
    });
  }

  function bindCarriages() {
    document.querySelectorAll(".carriage[data-car]").forEach(function (button) {
      button.addEventListener("click", function () {
        document.querySelectorAll(".carriage[data-car]").forEach(function (item) { item.classList.remove("active"); });
        button.classList.add("active");
        var title = document.querySelector("[data-car-title]");
        if (title && button.querySelector("b")) title.textContent = button.getAttribute("data-car") + "车 · " + button.querySelector("b").textContent;
        showToast("已切换至" + button.getAttribute("data-car") + "车");
      });
    });
  }

  function bindDeparture() {
    var picker = document.getElementById("globalDeparture");
    if (!picker) return;
    try {
      var saved = window.localStorage.getItem("railtour-departure");
      if (saved) picker.value = saved;
      picker.addEventListener("change", function () {
        window.localStorage.setItem("railtour-departure", picker.value);
        showToast("当前班期已切换");
      });
    } catch (error) {
      picker.addEventListener("change", function () { showToast("当前班期已切换"); });
    }
  }

  ensureFavicon();
  injectShell();
  bindMenus();
  bindToasts();
  bindConfirmations();
  bindViewSwitches();
  bindTabs();
  bindModals();
  bindTables();
  bindCarriages();
  bindForms();
  bindDeparture();

  window.RailtourERP = { showToast: showToast, applyTableFilters: applyTableFilters };
}());
