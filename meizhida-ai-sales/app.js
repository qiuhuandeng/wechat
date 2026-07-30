const categories = [
  { id: "ice", name: "破冰开场" },
  { id: "need", name: "需求挖掘" },
  { id: "recommend", name: "项目推荐" },
  { id: "objection", name: "异议处理" },
  { id: "close", name: "逼单收定" },
  { id: "maintain", name: "到店维护" },
  { id: "wake", name: "沉默唤醒" }
];

const quickTags = ["价格", "效果", "距离", "怕痛", "考虑", "不回复"];

const scripts = [
  {
    id: "price-high",
    category: "objection",
    title: "客户说“太贵了”",
    tags: ["价格", "比价", "贵", "价格高", "预算"],
    match: 96,
    psychology: "价格超出预期，同时还没有把项目成本、服务差异和长期收益建立起来。",
    paths: [
      {
        name: "路径A：价值塑造法",
        timing: "首次回应",
        content: "姐姐我特别理解你会先看价格。这个项目我们用的是认证仪器加院线修护，不是只做一次操作，前后皮肤检测、能量参数和术后跟进都会包含在里面，所以效果和安全性会更稳。"
      },
      {
        name: "路径B：拆解对比法",
        timing: "客户提到竞品",
        content: "你可以这样对比：198 通常只包含单次基础操作，我们这边包含检测、清洁、仪器操作、修护和复查。拆下来不是单纯贵，而是把容易影响效果的环节补齐了。"
      },
      {
        name: "路径C：限时权益法",
        timing: "准备锁单",
        content: "如果你今天先锁 99 预约金，我可以帮你保留新客体验价和皮肤检测名额。到店确认不适合可以退，这样你先把优惠权益占住。"
      }
    ],
    avoid: ["不要直接降价，容易破坏客户对项目价值的判断。", "不要用“一分钱一分货”压客户，容易让客户产生被教育感。"],
    caseId: "case-a"
  },
  {
    id: "effect-doubt",
    category: "objection",
    title: "客户担心“没效果”",
    tags: ["效果", "没用", "担心", "案例", "质疑"],
    match: 92,
    psychology: "客户不是否定项目，而是在寻找确定性，需要真实案例和可验证的阶段目标。",
    paths: [
      {
        name: "路径A：先降风险",
        timing: "客户焦虑明显",
        content: "姐姐你担心效果很正常，皮肤项目不是越猛越好。我们会先做检测，看你的肤质、敏感度和问题层级，再决定能量和方案，先保证适合你。"
      },
      {
        name: "路径B：案例佐证",
        timing: "客户愿意了解",
        content: "我发你一个和你情况比较像的案例，她主要是暗沉和毛孔，第一次做完是透亮度变化更明显，第二到第三次毛孔细腻度会更稳定。"
      },
      {
        name: "路径C：阶段预期",
        timing: "避免过度承诺",
        content: "我们会把预期说清楚：单次主要看肤色、光泽和细腻度，多次护理才是稳定改善。你到店后我让老师先给你做一份皮肤评估。"
      }
    ],
    avoid: ["不要承诺“一次见效到什么程度”。", "不要只发优惠，先建立专业可信度。"],
    caseId: "case-b"
  },
  {
    id: "far-away",
    category: "objection",
    title: "客户觉得距离太远",
    tags: ["距离", "远", "交通", "不方便", "停车"],
    match: 89,
    psychology: "距离是表层阻力，真实问题是客户还没有觉得值得专门跑一趟。",
    paths: [
      {
        name: "路径A：路线减负",
        timing: "首次回应",
        content: "确实不算特别近，我给你发一条最省时间的路线。我们店楼下可以停车，地铁出来步行 4 分钟，整体会比你想象中顺。"
      },
      {
        name: "路径B：到店收益",
        timing: "客户仍犹豫",
        content: "如果只是普通清洁，跑远确实没必要。但你现在主要想解决暗沉和毛孔，仪器、老师经验和术后修护会影响结果，值得选稳一点的地方。"
      },
      {
        name: "路径C：时间锁定",
        timing: "准备约时间",
        content: "我帮你约周六 11 点，人少不用等，你做完还能顺路吃午饭。先把时间留住，临近我再发你路线和停车点。"
      }
    ],
    avoid: ["不要只强调“很近”，客户已认定远时会显得敷衍。", "先消除麻烦感，再塑造值得到店的理由。"],
    caseId: "case-c"
  },
  {
    id: "family-discuss",
    category: "objection",
    title: "客户说要跟家人商量",
    tags: ["家人", "商量", "考虑", "犹豫", "决策"],
    match: 86,
    psychology: "客户在延迟决策，可能需要更多安全感，也可能是在寻找退出空间。",
    paths: [
      {
        name: "路径A：尊重决策",
        timing: "客户态度温和",
        content: "当然可以，变美这件事和家里人沟通很正常。我先把项目包含内容、适合人群和注意事项整理给你，你拿去沟通会更清楚。"
      },
      {
        name: "路径B：锁定权益",
        timing: "客户有兴趣",
        content: "我建议你先把 99 预约权益占住，名额和价格今天能保留。你沟通后如果时间不合适可以调整，不会耽误你的决定。"
      },
      {
        name: "路径C：协助解释",
        timing: "家人担心安全",
        content: "如果家里人主要担心安全，我可以发你仪器资质和护理流程。你们关注的问题我先说清楚，决定起来会更踏实。"
      }
    ],
    avoid: ["不要追问“你自己不能决定吗”。", "不要把家人放到对立面，应该帮客户降低沟通成本。"],
    caseId: "case-a"
  },
  {
    id: "silent",
    category: "wake",
    title: "客户已读不回",
    tags: ["不回复", "已读不回", "沉默", "唤醒", "跟进"],
    match: 84,
    psychology: "客户兴趣下降或决策被打断，需要一个低压力、带新信息的重新进入点。",
    paths: [
      {
        name: "路径A：轻提醒",
        timing: "12-24 小时",
        content: "姐姐我刚看了下你的情况，比较适合先做温和提亮，不建议一上来做太强的项目。你方便的话我帮你把方案发一版。"
      },
      {
        name: "路径B：新信息",
        timing: "24-48 小时",
        content: "给你补充一个同肤质案例，她的问题和你很像，第一次主要是肤色透亮度改善。你可以先看看效果是不是你想要的方向。"
      },
      {
        name: "路径C：低门槛收口",
        timing: "超过 3 天",
        content: "这周新客名额我先不打扰你啦。如果你还想做皮肤检测，我可以帮你保留一个可退预约位，之后按你时间来。"
      }
    ],
    avoid: ["不要连续追问“在吗”。", "每次跟进都要带一个理由或新价值。"],
    caseId: "case-b"
  },
  {
    id: "close-deposit",
    category: "close",
    title: "高意向客户引导收定",
    tags: ["锁单", "预约金", "定金", "高意向", "成交"],
    match: 90,
    psychology: "客户已认可价值，但还需要一个明确、低风险的下一步动作。",
    paths: [
      {
        name: "路径A：确认收益",
        timing: "破异完成后",
        content: "那我们今天先把新客权益锁住：99 预约金可以抵项目，到店老师会先检测再定方案，不适合可以退。这样你不用担心白跑。"
      },
      {
        name: "路径B：时间稀缺",
        timing: "周末档期紧张",
        content: "周六下午只剩 2 个检测位，我建议你先占一个。你后面如果临时有事，提前一天我帮你改时间。"
      },
      {
        name: "路径C：权益清单",
        timing: "客户问值不值",
        content: "预约金包含皮肤检测、新客体验价锁定和护理后跟进，我会把注意事项提前发你。你先锁权益，到店再确认最终方案。"
      }
    ],
    avoid: ["不要让客户一次性做大额决策。", "强调可退、可改期，降低支付心理门槛。"],
    caseId: "case-a"
  }
];

const flowSteps = [
  { key: "ice", label: "破冰" },
  { key: "need", label: "挖需" },
  { key: "recommend", label: "推荐" },
  { key: "objection", label: "破异" },
  { key: "close", label: "锁单" }
];

const checklistMap = {
  0: ["已完成欢迎问候", "已发送门店定位和服务亮点", "已确认客户来源渠道", "已建立轻松聊天氛围"],
  1: ["已确认核心诉求", "已了解皮肤或身体问题持续时间", "已询问既往护理经历", "已判断客户预算和到店时间"],
  2: ["已确认客户核心诉求", "已推荐 1-2 个适配项目", "已发送项目效果对比图", "已告知预约金金额和锁定权益"],
  3: ["已识别主要异议类型", "已先共情再解释", "已补充案例或资质证据", "已推动下一步低风险动作"],
  4: ["已确认到店时间", "已说明预约金权益", "已发送支付方式", "已同步到店前注意事项"]
};

const cases = [
  {
    id: "case-a",
    title: "犹豫型客户 3 天成交全流程",
    sales: "销冠小A",
    types: ["犹豫型", "价格敏感"],
    project: "光子嫩肤",
    difficulty: "高",
    days: 3,
    result: "成交",
    deposit: 99,
    highlights: ["破冰自然", "3 次异议处理得当", "逼单节奏清晰"],
    segments: [
      {
        stage: "破冰",
        day: 1,
        annotation: "客户态度冷淡时，销冠没有追问，而是先用轻信息降低压力。",
        messages: [
          { role: "sales", content: "亲爱的欢迎你呀，我看到你主要关注光子嫩肤，对暗沉和毛孔会比较在意对吗？" },
          { role: "customer", content: "嗯，随便看看。" },
          { role: "sales", content: "没关系，你先不用急着定。我发你一张同肤质案例，你判断一下是不是你想改善的方向。" }
        ]
      },
      {
        stage: "异议处理",
        day: 2,
        annotation: "客户说贵时，没有直接降价，而是把价格拆成服务内容和风险控制。",
        messages: [
          { role: "customer", content: "你们比别家贵好多。" },
          { role: "sales", content: "姐姐我懂，你不是只看便宜，是想知道贵在哪里、值不值。我给你拆开看，会更直观。" },
          { role: "sales", content: "我们包含皮肤检测、参数设计、仪器操作、术后修护和复查跟进，这些环节都会影响最终效果。" }
        ]
      },
      {
        stage: "锁单",
        day: 3,
        annotation: "最后一步只让客户支付小额可退预约金，降低了成交门槛。",
        messages: [
          { role: "customer", content: "那我周六去看看吧。" },
          { role: "sales", content: "可以的，我先帮你锁周六 11 点。99 预约金可抵项目，到店检测后不适合也可以退。" },
          { role: "customer", content: "好，发我吧。" }
        ]
      }
    ]
  },
  {
    id: "case-b",
    title: "效果质疑客户二次唤醒成交",
    sales: "销冠小B",
    types: ["效果质疑", "犹豫型"],
    project: "抗衰紧致",
    difficulty: "中",
    days: 5,
    result: "成交",
    deposit: 199,
    highlights: ["案例补强", "沉默后低压唤醒", "预期管理稳定"],
    segments: [
      {
        stage: "需求挖掘",
        day: 1,
        annotation: "先确认客户真正担心的是效果不稳定，而不是项目本身。",
        messages: [
          { role: "customer", content: "我之前做过一次，感觉没什么用。" },
          { role: "sales", content: "那你之前做完主要是完全没变化，还是维持时间比较短？这两个原因处理方式不一样。" },
          { role: "customer", content: "维持时间短。" }
        ]
      },
      {
        stage: "沉默唤醒",
        day: 3,
        annotation: "唤醒时带了新案例，避免空泛催促。",
        messages: [
          { role: "sales", content: "我给你补充一个维持时间短的案例，她后来调整了能量和修护，第二次稳定很多。" },
          { role: "customer", content: "这个看起来还可以。" }
        ]
      }
    ]
  },
  {
    id: "case-c",
    title: "嫌远客户当天锁单",
    sales: "销冠小C",
    types: ["距离顾虑", "价格敏感"],
    project: "身体SPA",
    difficulty: "中",
    days: 1,
    result: "成交",
    deposit: 99,
    highlights: ["路线减负", "强化到店收益", "档期推动自然"],
    segments: [
      {
        stage: "异议处理",
        day: 1,
        annotation: "先承认距离问题，再减少交通成本。",
        messages: [
          { role: "customer", content: "你们离我有点远。" },
          { role: "sales", content: "确实不是楼下距离。我给你发最省时间路线，地铁出来 4 分钟，楼下也能停车。" },
          { role: "sales", content: "这次主要是想解决肩颈和水肿，老师手法差异会很明显，值得来体验一次。" }
        ]
      }
    ]
  }
];

const state = {
  tab: "scripts",
  query: "",
  category: "objection",
  step: 2,
  checked: [true, true, false, false],
  intent: "中",
  blockers: ["价格", "效果"]
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("meizhida-state") || "{}");
    Object.assign(state, saved);
  } catch (error) {
    localStorage.removeItem("meizhida-state");
  }
}

function saveState() {
  localStorage.setItem("meizhida-state", JSON.stringify({
    tab: state.tab,
    query: state.query,
    category: state.category,
    step: state.step,
    checked: state.checked,
    intent: state.intent,
    blockers: state.blockers
  }));
}

function toast(message) {
  const node = $("#toast");
  node.textContent = message;
  node.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => node.classList.remove("show"), 1900);
}

function switchTab(tab) {
  state.tab = tab;
  $$(".tab-btn").forEach((button) => button.classList.toggle("active", button.dataset.tab === tab));
  $$(".tab-panel").forEach((panel) => panel.classList.toggle("active", panel.id === `tab-${tab}`));
  saveState();
}

function renderTags() {
  $("#quickTags").innerHTML = quickTags.map((tag) => (
    `<button type="button" class="${state.query === tag ? "active" : ""}" data-tag="${tag}">${tag}</button>`
  )).join("");
}

function renderCategories() {
  $("#categoryGrid").innerHTML = categories.map((category) => (
    `<button type="button" class="${state.category === category.id ? "active" : ""}" data-category="${category.id}">${category.name}</button>`
  )).join("");
}

function scoreScript(script, query) {
  if (!query) {
    return script.category === state.category ? script.match : script.match - 28;
  }

  const text = `${script.title} ${script.tags.join(" ")} ${script.psychology} ${script.paths.map((path) => path.content).join(" ")}`;
  let score = script.match - 18;
  if (text.includes(query)) score += 28;
  script.tags.forEach((tag) => {
    if (query.includes(tag) || tag.includes(query)) score += 18;
  });
  if (/贵|价格|比|预算|费钱/.test(query) && script.tags.includes("价格")) score += 24;
  if (/效果|没用|担心|案例/.test(query) && script.tags.includes("效果")) score += 22;
  if (/远|路|停车|地铁|交通/.test(query) && script.tags.includes("距离")) score += 22;
  if (/家人|商量|考虑|想想/.test(query) && script.tags.includes("家人")) score += 20;
  if (/不回|已读|没回复|沉默/.test(query) && script.tags.includes("不回复")) score += 20;
  return Math.min(score, 99);
}

function getMatchedScripts() {
  const query = state.query.trim();
  return scripts
    .map((script) => ({ ...script, displayScore: scoreScript(script, query) }))
    .filter((script) => query ? script.displayScore >= 74 : script.category === state.category || script.displayScore >= 72)
    .sort((a, b) => b.displayScore - a.displayScore)
    .slice(0, 3);
}

function renderScripts() {
  const list = getMatchedScripts();
  $("#resultTitle").textContent = state.query ? "AI语义推荐" : "推荐话术";
  $("#resultMeta").textContent = `匹配 ${list.length} 个场景 · ${state.query.length > 6 ? "预计 1.8s" : "预计 0.4s"}`;
  $("#currentStageName").textContent = categories.find((category) => category.id === state.category)?.name || "异议处理";
  $("#customerStateText").textContent = `${state.intent}意向 · ${state.blockers.join(" / ") || "暂无卡点"}`;

  $("#sceneList").innerHTML = list.map((script, index) => `
    <article class="scene-card ${index === 0 ? "expanded" : ""}" data-script="${script.id}">
      <div class="scene-head">
        <div>
          <div class="scene-title">
            ${script.title}
            <span class="match-pill">${script.displayScore}%</span>
          </div>
          <div class="scene-sub">${script.tags.slice(0, 4).join(" · ")}</div>
        </div>
        <button type="button" class="expand-scene" aria-label="展开话术">${index === 0 ? "收" : "展"}</button>
      </div>
      <div class="scene-body">
        <div class="insight">
          <b>客户心理分析</b>
          <p>${script.psychology}</p>
        </div>
        ${script.paths.map((path) => `
          <div class="path">
            <div class="path-head">
              <strong>${path.name}</strong>
              <span>${path.timing}</span>
            </div>
            <p>${path.content}</p>
            <button type="button" class="copy-btn" data-copy="${escapeHtml(path.content)}">复制话术</button>
          </div>
        `).join("")}
        <div class="avoid">
          <b>避坑提醒</b>
          <ul>${script.avoid.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
        <button type="button" class="case-link" data-open-case="${script.caseId}">查看关联销冠案例</button>
      </div>
    </article>
  `).join("");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("\"", "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderFlow() {
  $("#flowSteps").innerHTML = flowSteps.map((step, index) => {
    const status = index < state.step ? "done" : index === state.step ? "current" : "";
    const label = index < state.step ? "✓" : index + 1;
    return `
      <div class="flow-step ${status}">
        <button type="button" data-step="${index}" aria-label="切换到${step.label}">${label}</button>
        <span>${step.label}</span>
      </div>
    `;
  }).join("");

  const currentLabel = flowSteps[state.step]?.label || "推荐";
  $("#checklistTitle").textContent = `第${state.step + 1}步「${currentLabel}」关键动作`;

  const items = checklistMap[state.step] || checklistMap[2];
  if (!Array.isArray(state.checked) || state.checked.length !== items.length) {
    state.checked = items.map((_, index) => index < Math.min(2, items.length));
  }

  const checkedCount = state.checked.filter(Boolean).length;
  $("#checkProgress").textContent = `${checkedCount}/${items.length}`;
  $("#checklist").innerHTML = items.map((item, index) => `
    <label class="check-row ${state.checked[index] ? "done" : ""}">
      <input type="checkbox" data-check="${index}" ${state.checked[index] ? "checked" : ""}>
      <span>${item}</span>
    </label>
  `).join("");

  updateAdvice();
}

function updateAdvice() {
  const blockerSet = new Set(state.blockers);
  if (blockerSet.has("已读不回")) {
    state.category = "wake";
    $("#nextAdviceTitle").textContent = "带新信息轻唤醒";
    $("#nextAdviceText").textContent = "客户已读不回时不要连续追问，下一句用同肤质案例或检测建议重新进入。";
  } else if (state.intent === "高" && state.step >= 3) {
    state.category = "close";
    $("#nextAdviceTitle").textContent = "小额预约金锁权益";
    $("#nextAdviceText").textContent = "异议已经处理完，建议把动作缩小为 99 预约金，强调可退、可改期。";
  } else if (blockerSet.has("价格")) {
    state.category = "objection";
    $("#nextAdviceTitle").textContent = "先共情，再做价值拆解";
    $("#nextAdviceText").textContent = "客户卡在价格时，先承接顾虑，再拆仪器、产品、修护和服务差异。";
  } else if (blockerSet.has("距离")) {
    state.category = "objection";
    $("#nextAdviceTitle").textContent = "先减少麻烦感";
    $("#nextAdviceText").textContent = "距离卡点优先发路线、停车和少等待时段，再说明为什么值得来。";
  } else {
    $("#nextAdviceTitle").textContent = "推进到下一步动作";
    $("#nextAdviceText").textContent = "当前客户状态较顺，可以补充案例后推动预约检测或小额预约金。";
  }
}

function renderCases() {
  const type = $("#typeFilter").value;
  const project = $("#projectFilter").value;
  const difficulty = $("#difficultyFilter").value;
  const filtered = cases.filter((item) => (
    (type === "all" || item.types.includes(type)) &&
    (project === "all" || item.project === project) &&
    (difficulty === "all" || item.difficulty === difficulty)
  ));

  $("#caseList").innerHTML = filtered.map((item) => `
    <article class="case-card">
      <div class="case-card-top">
        <div>
          <strong>${item.title}</strong>
          <div class="case-meta">${item.sales} · ${item.project} · ${item.days} 天 · 预约金 ${item.deposit}</div>
        </div>
        <div class="difficulty">${item.difficulty === "高" ? "高难度" : "中难度"}</div>
      </div>
      <div class="case-tags">${item.types.map((tag) => `<span>${tag}</span>`).join("")}</div>
      <ul class="case-highlights">${item.highlights.map((text) => `<li>${text}</li>`).join("")}</ul>
      <button type="button" data-open-case="${item.id}">查看完整对话</button>
    </article>
  `).join("") || `<div class="case-card"><strong>暂无匹配案例</strong><p class="case-meta">调整筛选条件后再查看。</p></div>`;
}

function openCase(caseId) {
  const item = cases.find((entry) => entry.id === caseId) || cases[0];
  $("#caseTitle").textContent = item.title;
  $("#caseSubtitle").textContent = `${item.sales} · ${item.project} · ${item.result}`;
  $("#caseDetailBody").innerHTML = `
    <div class="case-summary">
      <div><span>客户类型</span><strong>${item.types.join(" / ")}</strong></div>
      <div><span>周期</span><strong>${item.days} 天</strong></div>
      <div><span>预约金</span><strong>${item.deposit} 元</strong></div>
    </div>
    ${item.segments.map((segment) => `
      <section class="segment-block">
        <div class="segment-title">
          <strong>${segment.stage}</strong>
          <span>第 ${segment.day} 天</span>
        </div>
        ${segment.messages.map((message) => `
          <div class="dialog-line ${message.role}">
            <div class="dialog-bubble">${message.content}</div>
          </div>
        `).join("")}
        <div class="annotation">${segment.annotation}</div>
      </section>
    `).join("")}
  `;
  $("#caseDrawer").hidden = false;
}

function copyText(text, button) {
  const finish = () => {
    if ($("#chatComposer")) {
      $("#chatComposer").value = text;
      $("#chatComposer").focus();
    }
    if (button) {
      const oldText = button.textContent;
      button.classList.add("copied");
      button.textContent = "已复制";
      setTimeout(() => {
        button.classList.remove("copied");
        button.textContent = oldText;
      }, 1600);
    }
    toast("话术已复制到输入框");
  };

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(finish).catch(finish);
  } else {
    finish();
  }
}

function syncSearch(value) {
  state.query = value.trim();
  $("#scriptSearch").value = value;
  renderTags();
  renderScripts();
  saveState();
}

function renderStatusPopover() {
  $$("#intentGroup button").forEach((button) => {
    button.classList.toggle("active", button.dataset.value === state.intent);
  });
  $$("#blockerGroup button").forEach((button) => {
    button.classList.toggle("active", state.blockers.includes(button.dataset.value));
  });
  $$("#doneStepGroup button").forEach((button) => {
    const index = Number(button.dataset.step);
    button.classList.toggle("active", index <= state.step);
  });
}

function startAnalysis() {
  const progress = $("#analysisProgress");
  const report = $("#analysisReport");
  const steps = [
    ["图片压缩中", "正在准备截图内容...", 12],
    ["OCR识别中", "正在识别聊天气泡和文本...", 34],
    ["对话结构化", "正在区分客户与客服角色...", 58],
    ["语义分析中", "正在判断客户意图和当前阶段...", 78],
    ["生成策略建议", "正在匹配下一步话术和相似案例...", 100]
  ];
  let index = 0;
  report.hidden = true;
  progress.hidden = false;

  function tick() {
    const [title, hint, percent] = steps[index];
    $("#analysisStep").textContent = title;
    $("#analysisHint").textContent = hint;
    $("#analysisPercent").textContent = `${percent}%`;
    $("#progressFill").style.width = `${percent}%`;
    index += 1;
    if (index < steps.length) {
      setTimeout(tick, 520);
    } else {
      setTimeout(() => {
        progress.hidden = true;
        report.hidden = false;
        toast("复盘报告已生成");
      }, 360);
    }
  }

  tick();
}

function handleUploads(files) {
  const list = Array.from(files).slice(0, 6);
  if (!list.length) return;
  $("#thumbList").innerHTML = "";
  list.forEach((file, index) => {
    const reader = new FileReader();
    reader.onload = () => {
      const node = document.createElement("div");
      node.className = "thumb";
      node.innerHTML = `<img src="${reader.result}" alt="聊天截图 ${index + 1}"><span>${index + 1}</span>`;
      $("#thumbList").appendChild(node);
    };
    reader.readAsDataURL(file);
  });
  toast(`已添加 ${list.length} 张截图`);
}

function bindEvents() {
  $$(".tab-btn").forEach((button) => {
    button.addEventListener("click", () => switchTab(button.dataset.tab));
  });

  $("#quickTags").addEventListener("click", (event) => {
    const button = event.target.closest("[data-tag]");
    if (!button) return;
    syncSearch(button.dataset.tag);
  });

  $("#categoryGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.category = button.dataset.category;
    state.query = "";
    $("#scriptSearch").value = "";
    renderCategories();
    renderTags();
    renderScripts();
    saveState();
  });

  $("#scriptSearch").addEventListener("input", (event) => {
    event.target.style.height = "auto";
    event.target.style.height = `${Math.min(event.target.scrollHeight, 72)}px`;
    state.query = event.target.value.trim();
    renderTags();
    renderScripts();
    saveState();
  });

  $("#clearSearch").addEventListener("click", () => syncSearch(""));
  $("#voiceBtn").addEventListener("click", () => toast("已进入语音输入状态"));

  document.addEventListener("click", (event) => {
    const copyButton = event.target.closest("[data-copy]");
    if (copyButton) {
      copyText(copyButton.dataset.copy, copyButton);
      return;
    }

    const caseButton = event.target.closest("[data-open-case]");
    if (caseButton) {
      openCase(caseButton.dataset.openCase);
      return;
    }

    const tabSwitch = event.target.closest("[data-switch-tab]");
    if (tabSwitch) {
      switchTab(tabSwitch.dataset.switchTab);
      renderCategories();
      renderScripts();
    }
  });

  $("#sceneList").addEventListener("click", (event) => {
    const button = event.target.closest(".expand-scene");
    if (!button) return;
    const card = button.closest(".scene-card");
    card.classList.toggle("expanded");
    button.textContent = card.classList.contains("expanded") ? "收" : "展";
  });

  $("#flowSteps").addEventListener("click", (event) => {
    const button = event.target.closest("[data-step]");
    if (!button) return;
    state.step = Number(button.dataset.step);
    state.checked = (checklistMap[state.step] || []).map((_, index) => index < Math.min(2, checklistMap[state.step].length));
    renderFlow();
    renderCategories();
    renderScripts();
    saveState();
  });

  $("#checklist").addEventListener("change", (event) => {
    const input = event.target.closest("[data-check]");
    if (!input) return;
    state.checked[Number(input.dataset.check)] = input.checked;
    renderFlow();
    saveState();
  });

  $("#openStatus").addEventListener("click", () => {
    renderStatusPopover();
    $("#statusPopover").hidden = false;
  });
  $("#closeStatus").addEventListener("click", () => $("#statusPopover").hidden = true);
  $("#statusPopover").addEventListener("click", (event) => {
    if (event.target === $("#statusPopover")) $("#statusPopover").hidden = true;
  });

  $("#intentGroup").addEventListener("click", (event) => {
    const button = event.target.closest("[data-value]");
    if (!button) return;
    state.intent = button.dataset.value;
    renderStatusPopover();
  });

  $("#blockerGroup").addEventListener("click", (event) => {
    const button = event.target.closest("[data-value]");
    if (!button) return;
    const value = button.dataset.value;
    state.blockers = state.blockers.includes(value)
      ? state.blockers.filter((item) => item !== value)
      : [...state.blockers, value];
    renderStatusPopover();
  });

  $("#doneStepGroup").addEventListener("click", (event) => {
    const button = event.target.closest("[data-step]");
    if (!button) return;
    state.step = Number(button.dataset.step);
    renderStatusPopover();
  });

  $("#saveStatus").addEventListener("click", () => {
    $("#statusPopover").hidden = true;
    renderFlow();
    renderCategories();
    renderTags();
    renderScripts();
    saveState();
    toast("客户状态已保存");
  });

  ["typeFilter", "projectFilter", "difficultyFilter"].forEach((id) => {
    $(`#${id}`).addEventListener("change", renderCases);
  });

  $("#closeCase").addEventListener("click", () => $("#caseDrawer").hidden = true);
  $("#caseDrawer").addEventListener("click", (event) => {
    if (event.target === $("#caseDrawer")) $("#caseDrawer").hidden = true;
  });

  $("#screenInput").addEventListener("change", (event) => handleUploads(event.target.files));
  $("#uploadZone").addEventListener("dragover", (event) => {
    event.preventDefault();
    $("#uploadZone").style.borderColor = "#7458ff";
  });
  $("#uploadZone").addEventListener("dragleave", () => {
    $("#uploadZone").style.borderColor = "";
  });
  $("#uploadZone").addEventListener("drop", (event) => {
    event.preventDefault();
    $("#uploadZone").style.borderColor = "";
    handleUploads(event.dataTransfer.files);
  });
  $("#startAnalysis").addEventListener("click", startAnalysis);

  $("#sendMessage").addEventListener("click", () => {
    const text = $("#chatComposer").value.trim();
    if (!text) {
      toast("输入框为空");
      return;
    }
    const row = document.createElement("div");
    row.className = "message-row sales";
    row.innerHTML = `<div class="bubble">${escapeHtml(text)}</div>`;
    $("#chatBody").appendChild(row);
    $("#chatBody").scrollTop = $("#chatBody").scrollHeight;
    $("#chatComposer").value = "";
    toast("消息已发送");
  });

  $("#clearComposer").addEventListener("click", () => {
    $("#chatComposer").value = "";
  });

  $("#resetState").addEventListener("click", () => {
    localStorage.removeItem("meizhida-state");
    Object.assign(state, {
      tab: "scripts",
      query: "",
      category: "objection",
      step: 2,
      checked: [true, true, false, false],
      intent: "中",
      blockers: ["价格", "效果"]
    });
    renderAll();
    toast("已恢复默认状态");
  });
}

function renderAll() {
  $("#scriptSearch").value = state.query;
  switchTab(state.tab);
  renderTags();
  renderFlow();
  renderCategories();
  renderScripts();
  renderCases();
}

loadState();
bindEvents();
renderAll();
