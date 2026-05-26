const levels = [
  {
    type: "order",
    title: "故事排序",
    prompt: "把〈月光河〉的故事排成正確順序。",
    hint: "先找背景，再找小白兔生病，最後是大家幫他看見月亮。",
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
    type: "match",
    title: "部首連連看",
    prompt: "選出每個生字正確的部首。",
    hint: "猴的部首是犬部，病看起來像病床，所以是疒部。",
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
    type: "family",
    title: "昔字家族",
    prompt: "把「昔」加上正確部首，變成句子需要的字。",
    hint: "可惜的惜有心情，弄錯的錯和金屬旁有關。",
    pairs: [
      ["阿姨向媽媽__用廚房。", "借"],
      ["她弄__醬油和黑醋。", "錯"],
      ["酸辣湯需要黑__。", "醋"],
      ["可__整鍋湯變鹹辣湯了。", "惜"]
    ],
    options: ["借", "醋", "錯", "惜"]
  },
  {
    type: "quiz",
    title: "語氣判斷",
    prompt: "讀句子，選出比較適合的詞語。",
    hint: "一定表示很確定；可能表示不確定。",
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
    type: "sentence",
    title: "句子重組",
    prompt: "用「除了……都……」把句子排好。",
    hint: "句型是：除了 + 特別的人或事，其他的人 + 都 + 做某件事。",
    answer: ["除了", "文欣", "生病請假", "我們", "都", "參加了運動會"],
    bank: ["都", "生病請假", "文欣", "參加了運動會", "除了", "我們"]
  },
  {
    type: "quiz",
    title: "聆聽理解",
    prompt: "根據家明打電話給智文的情境，回答問題。",
    hint: "想一想：誰沒來上學？誰打電話關心朋友？",
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

const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
const gamePanel = document.querySelector("#game-panel");
const resultPanel = document.querySelector("#result-panel");
const stage = document.querySelector(".stage");
const levelTitle = document.querySelector("#level-title");
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

let current = 0;
let score = 0;
let answered = false;
let orderState = [];
let sentenceState = [];

function startGame() {
  current = 0;
  score = 0;
  answered = false;
  stage.hidden = true;
  resultPanel.hidden = true;
  gamePanel.hidden = false;
  renderLevel();
}

function renderLevel() {
  const level = levels[current];
  answered = false;
  levelTitle.textContent = level.title;
  progress.textContent = `${current + 1} / ${levels.length}`;
  scoreLabel.textContent = `${score} 分`;
  progressFill.style.width = `${((current + 1) / levels.length) * 100}%`;
  promptBox.textContent = level.prompt;
  feedback.textContent = "";
  feedback.className = "feedback";
  nextButton.disabled = true;
  checkButton.disabled = false;
  playArea.innerHTML = "";

  if (level.type === "order") renderOrder(level);
  if (level.type === "match") renderMatch(level);
  if (level.type === "family") renderFamily(level);
  if (level.type === "quiz") renderQuiz(level);
  if (level.type === "sentence") renderSentence(level);
}

function renderOrder(level) {
  orderState = level.shuffled.map((index) => level.items[index]);
  const list = document.createElement("div");
  list.className = "play-area";
  orderState.forEach((text, index) => list.appendChild(createOrderCard(text, index)));
  playArea.appendChild(list);
}

function createOrderCard(text, index) {
  const card = document.createElement("div");
  card.className = "order-card";
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
  return card;
}

function moveOrder(index, direction) {
  const nextIndex = index + direction;
  [orderState[index], orderState[nextIndex]] = [orderState[nextIndex], orderState[index]];
  playArea.innerHTML = "";
  const list = document.createElement("div");
  list.className = "play-area";
  orderState.forEach((text, itemIndex) => list.appendChild(createOrderCard(text, itemIndex)));
  playArea.appendChild(list);
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
  const layout = document.createElement("div");
  layout.className = "match-layout";
  const list = document.createElement("div");
  list.className = "match-list";
  level.pairs.forEach(([word]) => {
    const row = document.createElement("label");
    row.className = "match-card";
    row.innerHTML = `<strong>${word}</strong>`;
    row.appendChild(createSelect(level.options));
    list.appendChild(row);
  });
  layout.appendChild(list);
  playArea.appendChild(layout);
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
  wrapper.className = "play-area";
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
  sentenceState.push(word);
  const item = document.createElement("button");
  item.className = "word-chip selected";
  item.type = "button";
  item.textContent = word;
  item.addEventListener("click", () => {
    sentenceState = sentenceState.filter((value, index) => index !== sentenceState.indexOf(word));
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
    correct = sentenceState.join("") === level.answer.join("");
  }

  answered = correct;
  if (correct) {
    score += 10;
    scoreLabel.textContent = `${score} 分`;
    feedback.textContent = "答對了！森林朋友又往小池塘靠近一步。";
    feedback.className = "feedback good";
    nextButton.disabled = false;
    checkButton.disabled = true;
  } else {
    feedback.textContent = "還差一點點，再讀一次題目和提示，重新調整看看。";
    feedback.className = "feedback try";
  }
}

function showHint() {
  feedback.textContent = levels[current].hint;
  feedback.className = "feedback";
}

function nextLevel() {
  current += 1;
  if (current >= levels.length) {
    showResult();
  } else {
    renderLevel();
  }
}

function showResult() {
  gamePanel.hidden = true;
  resultPanel.hidden = false;
  progressFill.style.width = "100%";
  const perfect = score === levels.length * 10;
  resultCopy.textContent = perfect
    ? "太棒了，你完成所有挑戰，也把月亮帶到小白兔的院子裡。"
    : "你完成了月光河任務，可以再玩一次，把每一關都點亮。";
  resultGrid.innerHTML = "";
  [
    ["總分", `${score}`],
    ["完成關卡", `${levels.length}`],
    ["學習主題", "6"]
  ].forEach(([label, value]) => {
    const item = document.createElement("div");
    item.className = "result-item";
    item.innerHTML = `<strong>${value}</strong><span>${label}</span>`;
    resultGrid.appendChild(item);
  });
}

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);
hintButton.addEventListener("click", showHint);
checkButton.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", nextLevel);
