const levels = [
  {
    id: "order",
    icon: "序",
    kicker: "關卡一｜故事排序",
    type: "order",
    title: "月光河故事拼圖",
    prompt: "把〈月光河〉的故事排成正確順序。",
    hint: "先找背景，再找小白兔生病，最後是大家幫他看見月亮。",
    summary: "故事排序要抓住起因、經過和結果，讀故事時可以先找時間和事件順序。",
    items: [
      "很久很久以前，有一條神祕的河，月圓時會出現很多圓圓的月亮。",
      "月圓那天，除了小白兔沒有來，其他動物都來了。",
      "大家知道小白兔生病了，決定去探望他。",
      "小白兔很開心，但可惜不能看到月光河裡的月亮。",
      "動物們挖了大坑，請小象把月光河的水吸到院子裡。",
      "池塘裡也有很多月亮，小白兔和大家度過快樂的夜晚。"
    ],
    shuffled: [1, 3, 0, 5, 2, 4]
  },
  {
    id: "radical",
    icon: "首",
    kicker: "關卡二｜部首連連看",
    type: "match",
    title: "森林生字研究所",
    prompt: "選出每個生字正確的部首。",
    hint: "猴的部首是犬部，病看起來像病床，所以是疒部。",
    summary: "部首能幫我們理解字義，例如犬部常和動物有關，疒部常和生病有關。",
    pairs: [
      ["祕", "示部"],
      ["猴", "犬部"],
      ["病", "疒部"],
      ["探", "手部"],
      ["體", "骨部"],
      ["請", "言部"]
    ],
    options: ["示部", "犬部", "疒部", "手部", "骨部", "言部", "木部", "心部"]
  },
  {
    id: "family",
    icon: "昔",
    kicker: "關卡三｜昔字家族",
    type: "family",
    title: "昔字魔法樹",
    prompt: "把「昔」加上正確部首，變成句子需要的字。",
    hint: "可惜的惜有心情，弄錯的錯和金屬旁有關。",
    summary: "同一個字件加上不同部首，會變成不同的字，也常帶出不同意思。",
    pairs: [
      ["阿姨向媽媽__用廚房。", "借"],
      ["她弄__醬油和黑醋。", "錯"],
      ["酸辣湯需要黑__。", "醋"],
      ["可__整鍋湯變鹹辣湯了。", "惜"]
    ],
    options: ["借", "醋", "錯", "惜"]
  },
  {
    id: "tone",
    icon: "氣",
    kicker: "關卡四｜語氣判斷",
    type: "quiz",
    title: "一定或可能",
    prompt: "讀句子，選出比較適合的詞語。",
    hint: "一定表示很確定；可能表示不確定。",
    summary: "「一定」表示很確定，「可能」表示還不確定，說話語氣不一樣。",
    questions: [
      {
        text: "哥哥已經報名了，他____會參加說故事比賽。",
        answer: "一定",
        options: ["一定", "可能"]
      },
      {
        text: "弟弟還沒決定，他____會參加說故事比賽。",
        answer: "可能",
        options: ["一定", "可能"]
      },
      {
        text: "這枝筆太貴了，媽媽____不會買。",
        answer: "一定",
        options: ["一定", "可能"]
      }
    ]
  },
  {
    id: "sentence",
    icon: "句",
    kicker: "關卡五｜句型重組",
    type: "sentence",
    title: "除了……都……小橋",
    prompt: "用「除了……都……」把句子排好。",
    hint: "句型是：除了 + 特別的人或事，其他的人 + 都 + 做某件事。",
    summary: "「除了……都……」可以說出一個例外，再說其他人或事都有相同情況。",
    answer: ["除了", "文欣", "生病請假", "我們", "都", "參加了運動會"],
    bank: ["都", "生病請假", "文欣", "參加了運動會", "除了", "我們"]
  },
  {
    id: "listen",
    icon: "聽",
    kicker: "關卡六｜聆聽理解",
    type: "quiz",
    title: "朋友電話任務",
    prompt: "根據家明打電話給智文的情境，回答問題。",
    hint: "想一想：誰沒來上學？誰打電話關心朋友？",
    summary: "聆聽時要抓住人物、原因和行動，才能知道故事中誰在關心誰。",
    questions: [
      {
        text: "是誰主動打電話給對方？",
        answer: "家明",
        options: ["家明", "智文", "老師"]
      },
      {
        text: "下課時，家明和智文常一起做什麼？",
        answer: "跑步",
        options: ["跑步", "畫畫", "借書"]
      },
      {
        text: "家明和智文的感情怎麼樣？",
        answer: "很好",
        options: ["很好", "普通", "不好"]
      }
    ]
  }
];

const storyText = [
  "很久很久以前，有一條神祕的河。每到月圓的那一天，河裡就會出現很多圓圓的月亮，森林裡的動物們都叫它月光河。",
  "月圓的那一天，除了小白兔沒有來，其他的動物都來了，小猴子說他生病了。大家說：小白兔一定很難過，我們去探望他。",
  "小白兔看見大家都來了，欣喜的說：謝謝你們來看我，我的身體好多了。可惜今天晚上，我卻無法看到月光河裡的月亮。",
  "動物們想了一個好辦法，在院子裡挖了一個大坑之後，再請小象到月光河邊，用鼻子吸水，一次又一次，直到院子裡的坑成了一個小池塘。",
  "池塘裡也有很多圓圓的月亮，和月光河的一模一樣。小白兔很高興，跟大家在小池塘邊，度過了快樂的夜晚。"
].join(" ");

const hero = document.querySelector(".hero");
const startButton = document.querySelector("#start-button");
const storyButton = document.querySelector("#story-button");
const restartButton = document.querySelector("#restart-button");
const gamePanel = document.querySelector("#game-panel");
const resultPanel = document.querySelector("#result-panel");
const trail = document.querySelector("#trail");
const levelKicker = document.querySelector("#level-kicker");
const levelTitle = document.querySelector("#level-title");
const levelVisual = document.querySelector("#level-visual");
const progress = document.querySelector("#progress");
const scoreLabel = document.querySelector("#score");
const progressFill = document.querySelector("#progress-fill");
const promptBox = document.querySelector("#prompt");
const playArea = document.querySelector("#play-area");
const feedback = document.querySelector("#feedback");
const hintButton = document.querySelector("#hint-button");
const checkButton = document.querySelector("#check-button");
const nextButton = document.querySelector("#next-button");
const resultCopy = document.querySelector("#result-copy");
const resultGrid = document.querySelector("#result-grid");
const confettiLayer = document.querySelector("#confetti-layer");

let current = 0;
let score = 0;
let answered = false;
let orderState = [];
let sentenceState = [];
let completed = new Set();
let audioContext;
let storySpeaking = false;
let draggedIndex = null;

function startGame() {
  stopStory();
  current = 0;
  score = 0;
  answered = false;
  completed = new Set();
  hero.hidden = true;
  resultPanel.hidden = true;
  gamePanel.hidden = false;
  renderLevel();
}

function toggleStory() {
  if (!("speechSynthesis" in window)) {
    storyButton.textContent = "瀏覽器不支援朗讀";
    return;
  }

  if (storySpeaking) {
    stopStory();
    return;
  }

  const utterance = new SpeechSynthesisUtterance(storyText);
  utterance.lang = "zh-TW";
  utterance.rate = 0.88;
  utterance.pitch = 1.05;
  utterance.onend = () => {
    storySpeaking = false;
    storyButton.textContent = "先聽故事";
  };
  utterance.onerror = () => {
    storySpeaking = false;
    storyButton.textContent = "先聽故事";
  };
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
  storySpeaking = true;
  storyButton.textContent = "停止朗讀";
}

function stopStory() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  storySpeaking = false;
  if (storyButton) storyButton.textContent = "先聽故事";
}

function playTone(kind) {
  try {
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
    const now = audioContext.currentTime;
    const tones = {
      correct: [523.25, 659.25, 783.99],
      wrong: [220, 174.61],
      complete: [523.25, 659.25, 783.99, 1046.5]
    }[kind];
    tones.forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.type = kind === "wrong" ? "triangle" : "sine";
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.0001, now + index * 0.11);
      gain.gain.exponentialRampToValueAtTime(0.16, now + index * 0.11 + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.11 + 0.12);
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.start(now + index * 0.11);
      oscillator.stop(now + index * 0.11 + 0.14);
    });
  } catch (error) {
    // Audio is optional; ignore browsers that block it.
  }
}

function renderLevel() {
  const level = levels[current];
  answered = completed.has(level.id);
  levelKicker.textContent = level.kicker;
  levelTitle.textContent = level.title;
  promptBox.textContent = level.prompt;
  feedback.textContent = answered ? `這關已完成。學習重點：${level.summary}` : "";
  feedback.className = answered ? "feedback good" : "feedback";
  nextButton.disabled = !answered;
  checkButton.disabled = answered;
  playArea.innerHTML = "";
  renderScore();
  renderTrail();
  renderLevelVisual(level);

  if (level.type === "order") renderOrder(level);
  if (level.type === "match") renderMatch(level);
  if (level.type === "family") renderFamily(level);
  if (level.type === "quiz") renderQuiz(level);
  if (level.type === "sentence") renderSentence(level);
}

function renderScore() {
  progress.textContent = `${current + 1} / ${levels.length}`;
  scoreLabel.textContent = `${score} 分`;
  progressFill.style.width = `${((completed.size + 0.12) / levels.length) * 100}%`;
}

function renderTrail() {
  trail.innerHTML = "";
  levels.forEach((level, index) => {
    const button = document.createElement("button");
    button.className = "stage-tab";
    if (index === current) button.classList.add("is-active");
    if (completed.has(level.id)) button.classList.add("is-done");
    button.type = "button";
    button.innerHTML = `
      <span class="badge-icon">${level.icon}</span>
      <span>${level.title}<small>${level.kicker.replace("｜", " ")}</small></span>
      <span class="checkmark">${completed.has(level.id) ? "✓" : ""}</span>
    `;
    button.addEventListener("click", () => {
      current = index;
      renderLevel();
    });
    trail.appendChild(button);
  });
}

function renderLevelVisual(level) {
  const scenes = {
    order: `
      <svg viewBox="0 0 820 210" role="img" aria-label="月光河故事卡片">
        <defs><linearGradient id="river" x1="0" x2="1"><stop stop-color="#2f8f9d"/><stop offset="1" stop-color="#9dd8dd"/></linearGradient></defs>
        <rect width="820" height="210" fill="#eaf6f5"/><circle cx="690" cy="48" r="34" fill="#ffd76a"/>
        <path d="M0 154 C130 115 250 188 390 146 C520 108 650 132 820 92 L820 210 L0 210Z" fill="url(#river)"/>
        <path d="M58 86 C84 54 128 56 150 92 C126 86 92 86 58 86Z" fill="#4f8a56"/>
        <g transform="translate(168 48)"><rect width="96" height="82" rx="8" fill="#fff8e8" stroke="#d8e2de" stroke-width="4"/><text x="48" y="52" text-anchor="middle" font-size="36" fill="#176672">1</text></g>
        <g transform="translate(288 35)"><rect width="96" height="82" rx="8" fill="#fff8e8" stroke="#d8e2de" stroke-width="4"/><text x="48" y="52" text-anchor="middle" font-size="36" fill="#176672">2</text></g>
        <g transform="translate(408 58)"><rect width="96" height="82" rx="8" fill="#fff8e8" stroke="#d8e2de" stroke-width="4"/><text x="48" y="52" text-anchor="middle" font-size="36" fill="#176672">3</text></g>
        <g transform="translate(532 42)"><rect width="96" height="82" rx="8" fill="#fff8e8" stroke="#d8e2de" stroke-width="4"/><text x="48" y="52" text-anchor="middle" font-size="36" fill="#176672">4</text></g>
      </svg>`,
    radical: `
      <svg viewBox="0 0 820 210" role="img" aria-label="部首研究所">
        <rect width="820" height="210" fill="#eef7f1"/><path d="M0 160 C160 130 278 180 428 150 C568 122 670 130 820 102 L820 210 L0 210Z" fill="#d8efe6"/>
        <g transform="translate(56 42)"><rect width="132" height="110" rx="8" fill="#fff8e8" stroke="#d8e2de" stroke-width="4"/><text x="66" y="66" text-anchor="middle" font-size="42" fill="#263238">猴</text><text x="66" y="96" text-anchor="middle" font-size="18" fill="#66737a">犬部</text></g>
        <g transform="translate(234 42)"><rect width="132" height="110" rx="8" fill="#fff8e8" stroke="#d8e2de" stroke-width="4"/><text x="66" y="66" text-anchor="middle" font-size="42" fill="#263238">病</text><text x="66" y="96" text-anchor="middle" font-size="18" fill="#66737a">疒部</text></g>
        <g transform="translate(412 42)"><rect width="132" height="110" rx="8" fill="#fff8e8" stroke="#d8e2de" stroke-width="4"/><text x="66" y="66" text-anchor="middle" font-size="42" fill="#263238">體</text><text x="66" y="96" text-anchor="middle" font-size="18" fill="#66737a">骨部</text></g>
        <g transform="translate(612 58)"><circle cx="42" cy="42" r="36" fill="#ffd76a"/><path d="M92 98 C64 74 62 45 82 28 C114 54 128 78 126 112Z" fill="#4f8a56"/></g>
      </svg>`,
    family: `
      <svg viewBox="0 0 820 210" role="img" aria-label="昔字魔法樹">
        <rect width="820" height="210" fill="#f6f2ea"/><path d="M392 70 C342 72 306 106 304 150 L514 150 C506 104 470 70 392 70Z" fill="#8ecf98"/>
        <rect x="384" y="108" width="42" height="62" rx="8" fill="#8a5a3c"/><circle cx="404" cy="82" r="42" fill="#4f8a56"/>
        <text x="404" y="94" text-anchor="middle" font-size="44" fill="#fff8e8">昔</text>
        <g fill="#fff8e8" stroke="#d8e2de" stroke-width="4"><rect x="126" y="50" width="92" height="62" rx="8"/><rect x="260" y="18" width="92" height="62" rx="8"/><rect x="502" y="20" width="92" height="62" rx="8"/><rect x="636" y="50" width="92" height="62" rx="8"/></g>
        <g fill="#176672" font-size="34" text-anchor="middle"><text x="172" y="91">借</text><text x="306" y="59">醋</text><text x="548" y="61">錯</text><text x="682" y="91">惜</text></g>
        <path d="M218 86 L360 86 M352 58 L360 86 L352 114 M502 86 L448 86 M456 58 L448 86 L456 114" stroke="#efbd55" stroke-width="7" fill="none" stroke-linecap="round"/>
      </svg>`,
    tone: `
      <svg viewBox="0 0 820 210" role="img" aria-label="一定和可能語氣判斷">
        <rect width="820" height="210" fill="#eaf6f5"/><circle cx="130" cy="110" r="54" fill="#ffd76a"/><circle cx="690" cy="110" r="54" fill="#d8e2de"/>
        <g transform="translate(226 46)"><rect width="150" height="86" rx="8" fill="#fff8e8" stroke="#d8e2de" stroke-width="4"/><path d="M48 84 L32 118 L82 84Z" fill="#fff8e8" stroke="#d8e2de" stroke-width="4"/><text x="75" y="55" text-anchor="middle" font-size="32" fill="#4f8a56">一定</text></g>
        <g transform="translate(442 46)"><rect width="150" height="86" rx="8" fill="#fff8e8" stroke="#d8e2de" stroke-width="4"/><path d="M104 84 L120 118 L70 84Z" fill="#fff8e8" stroke="#d8e2de" stroke-width="4"/><text x="75" y="55" text-anchor="middle" font-size="32" fill="#6650a4">可能</text></g>
        <text x="410" y="174" text-anchor="middle" font-size="22" fill="#66737a">確定和不確定，語氣不一樣</text>
      </svg>`,
    sentence: `
      <svg viewBox="0 0 820 210" role="img" aria-label="除了都句型小橋">
        <rect width="820" height="210" fill="#fff8e8"/><path d="M0 168 C140 120 260 190 410 150 C550 112 670 130 820 104 L820 210 L0 210Z" fill="#9dd8dd"/>
        <path d="M158 138 C260 62 550 62 662 138" fill="none" stroke="#b77a4b" stroke-width="20" stroke-linecap="round"/>
        <path d="M156 134 C260 76 550 76 664 134" fill="none" stroke="#efbd55" stroke-width="7" stroke-linecap="round"/>
        <g><rect x="172" y="52" width="128" height="58" rx="8" fill="#fff" stroke="#d8e2de" stroke-width="4"/><text x="236" y="91" text-anchor="middle" font-size="28" fill="#c54b4b">除了</text></g>
        <g><rect x="518" y="52" width="128" height="58" rx="8" fill="#fff" stroke="#d8e2de" stroke-width="4"/><text x="582" y="91" text-anchor="middle" font-size="28" fill="#4f8a56">都</text></g>
      </svg>`,
    listen: `
      <svg viewBox="0 0 820 210" role="img" aria-label="家明打電話關心智文">
        <rect width="820" height="210" fill="#eef7f7"/><rect x="66" y="48" width="248" height="116" rx="8" fill="#fff8e8" stroke="#d8e2de" stroke-width="4"/>
        <rect x="506" y="48" width="248" height="116" rx="8" fill="#fff8e8" stroke="#d8e2de" stroke-width="4"/>
        <circle cx="152" cy="103" r="28" fill="#ffd76a"/><rect x="132" y="132" width="44" height="26" rx="12" fill="#3c78a8"/>
        <circle cx="592" cy="103" r="28" fill="#ffd76a"/><path d="M566 105 C580 116 604 116 618 105" stroke="#fff" stroke-width="12" stroke-linecap="round"/>
        <path d="M310 102 C366 62 454 62 510 102" fill="none" stroke="#2f8f9d" stroke-width="8" stroke-dasharray="14 12" stroke-linecap="round"/>
        <text x="190" y="83" text-anchor="middle" font-size="22" fill="#176672">家明</text><text x="630" y="83" text-anchor="middle" font-size="22" fill="#176672">智文</text>
        <text x="410" y="152" text-anchor="middle" font-size="24" fill="#66737a">打電話關心朋友</text>
      </svg>`
  };
  levelVisual.innerHTML = scenes[level.id];
}

function renderOrder(level) {
  orderState = level.shuffled.map((index) => level.items[index]);
  const list = document.createElement("div");
  list.className = "order-list";
  list.setAttribute("aria-label", "故事排序卡片");
  orderState.forEach((text, index) => list.appendChild(createOrderCard(text, index)));
  playArea.appendChild(list);
}

function createOrderCard(text, index) {
  const card = document.createElement("div");
  card.className = "order-card";
  card.draggable = true;
  card.dataset.index = index;
  card.innerHTML = `<strong>${index + 1}</strong><span>${text}</span>`;
  const controls = document.createElement("div");
  controls.className = "order-buttons";
  const up = iconButton("↑", "往上移");
  const down = iconButton("↓", "往下移");
  up.disabled = index === 0;
  down.disabled = index === orderState.length - 1;
  up.addEventListener("click", () => moveOrder(index, -1));
  down.addEventListener("click", () => moveOrder(index, 1));
  controls.append(up, down);
  card.appendChild(controls);
  card.addEventListener("dragstart", () => {
    draggedIndex = index;
    card.classList.add("is-dragging");
  });
  card.addEventListener("dragend", () => {
    draggedIndex = null;
    card.classList.remove("is-dragging");
  });
  card.addEventListener("dragover", (event) => event.preventDefault());
  card.addEventListener("drop", (event) => {
    event.preventDefault();
    const targetIndex = Number(card.dataset.index);
    if (draggedIndex === null || draggedIndex === targetIndex) return;
    const [moved] = orderState.splice(draggedIndex, 1);
    orderState.splice(targetIndex, 0, moved);
    redrawOrder();
  });
  return card;
}

function moveOrder(index, direction) {
  const nextIndex = index + direction;
  [orderState[index], orderState[nextIndex]] = [orderState[nextIndex], orderState[index]];
  redrawOrder();
}

function redrawOrder() {
  const list = playArea.querySelector(".order-list");
  list.innerHTML = "";
  orderState.forEach((text, itemIndex) => list.appendChild(createOrderCard(text, itemIndex)));
}

function iconButton(text, label) {
  const button = document.createElement("button");
  button.className = "icon-button";
  button.type = "button";
  button.textContent = text;
  button.setAttribute("aria-label", label);
  button.title = label;
  return button;
}

function renderMatch(level) {
  const list = document.createElement("div");
  list.className = "match-list";
  level.pairs.forEach(([word]) => {
    const row = document.createElement("label");
    row.className = "match-card";
    row.innerHTML = `<strong>${word}</strong>`;
    row.appendChild(createSelect(level.options));
    list.appendChild(row);
  });
  playArea.appendChild(list);
}

function renderFamily(level) {
  const list = document.createElement("div");
  list.className = "match-list";
  level.pairs.forEach(([sentence]) => {
    const row = document.createElement("label");
    row.className = "match-card";
    row.innerHTML = `<span>${sentence}</span>`;
    row.appendChild(createSelect(level.options));
    list.appendChild(row);
  });
  playArea.appendChild(list);
}

function createSelect(options) {
  const select = document.createElement("select");
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "請選擇";
  select.appendChild(placeholder);
  options.forEach((option) => {
    const item = document.createElement("option");
    item.value = option;
    item.textContent = option;
    select.appendChild(item);
  });
  return select;
}

function renderQuiz(level) {
  const wrapper = document.createElement("div");
  wrapper.className = "quiz-list";
  level.questions.forEach((question, index) => {
    const group = document.createElement("div");
    group.className = "choice-group";
    group.innerHTML = `<p><strong>${index + 1}. </strong>${question.text}</p>`;
    const grid = document.createElement("div");
    grid.className = "card-grid";
    question.options.forEach((option) => {
      const button = document.createElement("button");
      button.className = "choice";
      button.type = "button";
      button.textContent = option;
      button.dataset.question = index;
      button.dataset.value = option;
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", () => selectChoice(button));
      grid.appendChild(button);
    });
    group.appendChild(grid);
    wrapper.appendChild(group);
  });
  playArea.appendChild(wrapper);
}

function selectChoice(button) {
  const siblings = playArea.querySelectorAll(`[data-question="${button.dataset.question}"]`);
  siblings.forEach((item) => item.setAttribute("aria-pressed", "false"));
  button.setAttribute("aria-pressed", "true");
}

function renderSentence(level) {
  sentenceState = [];
  const sentenceBox = document.createElement("div");
  sentenceBox.className = "sentence-box";
  sentenceBox.id = "sentence-box";
  const bank = document.createElement("div");
  bank.className = "bank";
  level.bank.forEach((word) => {
    const chip = document.createElement("button");
    chip.className = "word-chip";
    chip.type = "button";
    chip.textContent = word;
    chip.addEventListener("click", () => addWord(chip, word));
    bank.appendChild(chip);
  });
  playArea.append(sentenceBox, bank);
}

function addWord(chip, word) {
  if (chip.disabled) return;
  chip.disabled = true;
  const id = `${word}-${Math.random().toString(36).slice(2)}`;
  sentenceState.push({ id, word });
  const item = document.createElement("button");
  item.className = "word-chip selected";
  item.type = "button";
  item.textContent = word;
  item.addEventListener("click", () => {
    sentenceState = sentenceState.filter((value) => value.id !== id);
    chip.disabled = false;
    item.remove();
  });
  document.querySelector("#sentence-box").appendChild(item);
}

function checkAnswer() {
  if (answered) return;
  const level = levels[current];
  let correct = false;

  if (level.type === "order") {
    correct = orderState.every((item, index) => item === level.items[index]);
  }

  if (level.type === "match" || level.type === "family") {
    const selects = [...playArea.querySelectorAll("select")];
    correct = selects.every((select, index) => select.value === level.pairs[index][1]);
  }

  if (level.type === "quiz") {
    correct = level.questions.every((question, index) => {
      const selected = playArea.querySelector(`[data-question="${index}"][aria-pressed="true"]`);
      return selected && selected.dataset.value === question.answer;
    });
  }

  if (level.type === "sentence") {
    correct = sentenceState.map((item) => item.word).join("") === level.answer.join("");
  }

  if (correct) {
    answered = true;
    if (!completed.has(level.id)) {
      completed.add(level.id);
      score += 10;
    }
    renderScore();
    renderTrail();
    feedback.textContent = `答對了！森林朋友又往小池塘靠近一步。學習重點：${level.summary}`;
    feedback.className = "feedback good";
    nextButton.disabled = false;
    checkButton.disabled = true;
    playTone("correct");
  } else {
    feedback.textContent = "還差一點點，再讀一次題目和提示，重新調整看看。";
    feedback.className = "feedback try";
    playTone("wrong");
  }
}

function showHint() {
  feedback.textContent = levels[current].hint;
  feedback.className = "feedback";
}

function nextLevel() {
  const nextUnfinished = levels.findIndex((level, index) => index > current && !completed.has(level.id));
  if (nextUnfinished >= 0) {
    current = nextUnfinished;
    renderLevel();
    return;
  }
  if (completed.size >= levels.length) {
    showResult();
    return;
  }
  current = (current + 1) % levels.length;
  renderLevel();
}

function showResult() {
  gamePanel.hidden = true;
  resultPanel.hidden = false;
  progressFill.style.width = "100%";
  playTone("complete");
  launchConfetti();
  const maxScore = levels.length * 10;
  const ratio = score / maxScore;
  if (ratio === 1) {
    resultCopy.textContent = "滿分！你不只完成挑戰，也把月亮穩穩帶到小白兔的院子裡。";
  } else if (ratio >= 0.7) {
    resultCopy.textContent = "很棒！你已經掌握大部分重點，再挑戰一次就有機會讓整條月光河都亮起來。";
  } else {
    resultCopy.textContent = "你完成了月光河任務。可以先聽一次故事，再回來把每一關慢慢點亮。";
  }
  resultGrid.innerHTML = "";
  [
    ["總分", `${score}/${maxScore}`],
    ["完成關卡", `${completed.size}/${levels.length}`],
    ["學習主題", "6"]
  ].forEach(([label, value]) => {
    const item = document.createElement("div");
    item.className = "result-item";
    item.innerHTML = `<strong>${value}</strong><span>${label}</span>`;
    resultGrid.appendChild(item);
  });
}

function launchConfetti() {
  confettiLayer.innerHTML = "";
  const colors = ["#ffd76a", "#4f8a56", "#2f8f9d", "#c54b4b", "#6650a4", "#fffaf2"];
  for (let index = 0; index < 34; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[index % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.35}s`;
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    confettiLayer.appendChild(piece);
  }
}

startButton.addEventListener("click", startGame);
storyButton.addEventListener("click", toggleStory);
restartButton.addEventListener("click", startGame);
hintButton.addEventListener("click", showHint);
checkButton.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", nextLevel);
