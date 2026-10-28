const games = [
  {
    id: "hanajong",
    name: "華雀",
    icon: "花",
    description: "ルールを確認して、ラウンドごとの点数を記録できます。",
    scoring: true,
  },
  {
    id: "neu",
    name: "Neu",
    icon: "N",
    description: "Neuのルールを確認できます。",
    scoring: false,
  },
  {
    id: "last-continue",
    name: "Last continue",
    icon: "L",
    description: "GOOD/BADステージとアイテムを使い、最後まで生き残る心理戦カードゲームです。",
    scoring: false,
  },
  {
    id: "direct",
    name: "DIRECT",
    icon: "D",
    description: "DIRECTのルールを確認できます。",
    scoring: false,
  },
  {
    id: "supply-collapse",
    name: "供給崩壊",
    icon: "供",
    description: "供給崩壊のルールを確認できます。",
    scoring: false,
  },
];

const hanajongYaku = [
  ["リーチ", "テンパイ時に「リーチ」と宣言してアガる", "1", "不可"],
  ["イッパツ", "リーチをかけて1巡目以内にアガる", "1", "不可"],
  ["メンゼンツモ", "門前でツモアガりをする", "1", "不可"],
  ["ピンフ", "門前で4つの順子と雀頭を作り、両面待ちで、雀頭が役札以外", "1", "不可"],
  ["イーペーコー", "札の種類と数の並びが同じ連華を2組作る", "1", "不可"],
  ["ヤクハイ", "松竹梅または春夏秋冬のいずれかを同華で揃える", "1", "1"],
  ["タンヤオ", "一九役札を一切含まない札姿でアガる", "1", "1"],
  ["ハイテイ", "山札の最後の札でツモアガりをする", "1", "1"],
  ["ホウテイ", "その局最後の打札でロンアガりをする", "1", "1"],
  ["ダブルリーチ", "一巡目の打札でリーチをかける", "2", "不可"],
  ["スートイイーメン", "対子4組と面子1組を揃える", "2", "不可"],
  ["サンアンコウ", "3つの面子を暗華で揃える", "2", "不可"],
  ["トイトイ", "3つの面子を全て同華で揃える", "2", "2"],
  ["ショウコウレン", "松竹梅の1種を雀頭とし、残り2種を面子で揃える", "2", "2"],
  ["ホンロウトウ", "一九役札のみで全ての面子と雀頭を揃える", "2", "2"],
  ["イッキカンツウ", "数札で123・456・789を揃える", "2", "1"],
  ["チャンタ", "全ての面子と雀頭に一九役札を絡ませる", "2", "1"],
  ["ジュンチャン", "全ての面子と雀頭に数札の一九札を絡ませる", "3", "2"],
  ["ホンイツ", "数札の一種類と役札だけで面子と雀頭を作る", "3", "2"],
  ["チンイツ", "数札の一種類だけで面子と雀頭を作る", "6", "5"],
  ["チューレンポウトウ", "数札で11234567899を揃える", "役満", "不可"],
  ["ダイコウレン", "松竹梅を全て同華で揃える（鳴いてもよい）", "役満", "役満"],
  ["コクシムソウ", "一九字札10種類を集め、そのうち1種を雀頭にする", "役満", "不可"],
  ["リューイーソー", "2・3・4・6・8の蓮札と竹のみで作る（緑色の札のみ）", "役満", "役満"],
  ["ツーイーソー", "役札のみで作る", "役満", "役満"],
  ["テンホー", "親が配札の時点で3面子1雀頭のアガリ形", "役満", "不可"],
  ["チーホー", "子が最初のツモでアガる（最初のツモまでに鳴きが入ると不成立）", "役満", "不可"],
  ["数え役満", "役の複合で合計13翻以上", "役満", "役満"],
  ["コクシジュウメンマチ", "一九役札10種を集め、持っている札が打札されたときにロンまたはツモ", "ダブル", "不可"],
  ["チンロウトウ", "一九札のみで全ての面子と雀頭を作る", "ダブル", "不可"],
  ["ジュンセイチュウレンポウトウ", "数札の11234567899をツモで揃える", "ダブル", "不可"],
  ["コクシイッツウ", "一九役札10種を集め、持っていない一九役札でロンまたはツモ", "トリプル", "不可"],
];

const hanajongPayments = [
  { label: "1", parentRon: 1500, parentTsumo: 500, childRon: 1000, childTsumoChild: 500, childTsumoParent: 1000 },
  { label: "2", parentRon: 3000, parentTsumo: 1000, childRon: 2000, childTsumoChild: 500, childTsumoParent: 1000 },
  { label: "3", parentRon: 6000, parentTsumo: 2000, childRon: 4000, childTsumoChild: 1000, childTsumoParent: 2000 },
  { label: "4", parentRon: 10500, parentTsumo: 3500, childRon: 7000, childTsumoChild: 2000, childTsumoParent: 3000 },
  { label: "5", parentRon: 12000, parentTsumo: 4000, childRon: 8000, childTsumoChild: 2000, childTsumoParent: 4000 },
  { label: "6・7", parentRon: 18000, parentTsumo: 6000, childRon: 12000, childTsumoChild: 3000, childTsumoParent: 6000 },
  { label: "8・9・10", parentRon: 24000, parentTsumo: 8000, childRon: 16000, childTsumoChild: 4000, childTsumoParent: 8000 },
  { label: "11・12", parentRon: 36000, parentTsumo: 12000, childRon: 24000, childTsumoChild: 6000, childTsumoParent: 12000 },
  { label: "13", parentRon: 48000, parentTsumo: 16000, childRon: 32000, childTsumoChild: 8000, childTsumoParent: 16000 },
];

const hanajongTileLabels = [
  "壱蕐", "弐蕐", "参蕐", "肆蕐", "伍蕐", "陸蕐", "漆蕐", "捌蕐", "玖蕐",
  "一蓮", "二蓮", "三蓮", "四蓮", "五蓮", "六蓮", "七蓮", "八蓮", "九蓮",
  "春", "夏", "秋", "冬", "松", "竹", "梅",
];
const hanajongTileArtOrder = [
  15, 16, 17, 18, 19, 20, 1, 2, 3,
  14, 9, 6, 7, 8, 10, 11, 12, 13,
  24, 25, 26, 27, 22, 21, 23,
];
const hanajongTiles = hanajongTileLabels.map((label, index) => ({
  id: `tile-${index + 1}`,
  label,
  number: index < 18 ? index % 9 + 1 : null,
  image: `hanajong-art-${String(hanajongTileArtOrder[index]).padStart(2, "0")}.png`,
}));
const hanajongTileGroups = [
  { name: "蕐牌", tiles: hanajongTiles.slice(0, 9).sort((a, b) => a.number - b.number) },
  { name: "蓮牌", tiles: hanajongTiles.slice(9, 18).sort((a, b) => a.number - b.number) },
  { name: "季節牌", tiles: hanajongTiles.slice(18, 22) },
  { name: "松竹梅", tiles: hanajongTiles.slice(22) },
];
const hanajongNamedArt = [
  ...hanajongTiles.map((tile) => ({ file: tile.image, label: tile.label })),
  { file: "hanajong-art-04.png", label: "蓮の札・別図柄" },
  { file: "hanajong-art-05.png", label: "伍蕐の札・別図柄" },
];
const maxHandSize = 11;
const storageKey = "card-game-scorebook-hanajong";
const panel = document.querySelector("#game-panel");
const tabs = [...document.querySelectorAll(".game-tab")];

let selectedGame = "hanajong";
let scoreState = loadScoreState();
let selectedHand = [];
let winningTileIndex = null;
let ponTileIds = [];
let ponInputMode = false;
let kanTileIds = [];
let kanInputMode = false;
let ankanTileIds = [];
let ankanInputMode = false;

function loadScoreState() {
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return { players: [], rounds: [] };

    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed.players) || !Array.isArray(parsed.rounds)) {
      throw new Error("Saved score data has an invalid shape.");
    }
    return parsed;
  } catch (error) {
    console.error("華雀の保存データを読み込めませんでした。", error);
    return { players: [], rounds: [] };
  }
}

function saveScoreState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(scoreState));
  } catch (error) {
    console.error("華雀のスコアを保存できませんでした。", error);
    window.alert("スコアを保存できませんでした。ブラウザーの保存領域をご確認ください。");
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function formatScore(score) {
  return new Intl.NumberFormat("ja-JP").format(score);
}

function render() {
  tabs.forEach((tab) => {
    const isActive = tab.dataset.game === selectedGame;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-pressed", String(isActive));
  });

  const game = games.find((item) => item.id === selectedGame);
  if (game.id === "hanajong") {
    renderHanajong(game);
  } else if (game.id === "neu") {
    renderNeuRules(game);
  } else if (game.id === "last-continue") {
    renderLastContinueRules(game);
  } else if (game.id === "direct") {
    renderDirectRules(game);
  } else if (game.id === "supply-collapse") {
    renderSupplyCollapseRules(game);
  } else {
    renderRulesPlaceholder(game);
  }
}

function renderSupplyCollapseRules(game) {
  panel.innerHTML = `
    <div class="panel-heading">
      <div>
        <h2>${escapeHtml(game.name)}</h2>
        <p>エリアの読み合いとカードで資源を集め、いち早く勝利条件を満たすゲームです。</p>
      </div>
      <span class="game-icon" aria-hidden="true">${escapeHtml(game.icon)}</span>
    </div>
    <div class="content-card rules-card">
      <p><strong>人数:</strong> 2〜4人　<strong>時間:</strong> 15〜30分</p>
      <h3>勝利条件</h3>
      <ul>
        <li><strong>完全勝利:</strong> 木・小麦・鉄をそれぞれ2枚集める。</li>
        <li><strong>技術勝利:</strong> 資源を集めて特殊建築物を完成させる。</li>
        <li><strong>生き残り勝利:</strong> ほかの全員が脱落または破産する。</li>
      </ul>
      <p>いずれかを最初に達成したプレイヤーがその場で勝利します。</p>
      <h3>ゲームの準備</h3>
      <ol>
        <li>森・畑・鉱山のエリアカードを中央に並べ、各エリアの横に対応する資源カードの山札を置きます。</li>
        <li>各プレイヤーにエリア選択カード一式と、初期アクションカードをランダムに2枚配ります。</li>
        <li>じゃんけんなどで最初の親（スタートプレイヤー）を決めます。</li>
      </ol>
      <h3>ターンの流れ</h3>
      <ol>
        <li><strong>エリア選択:</strong> 全員が森・畑・鉱山・全エリアのいずれかを伏せて出します。</li>
        <li><strong>公開と判定:</strong> 一斉に公開します。エリアを1人だけ選んだ場合、そのエリアの資源を1枚獲得します。</li>
        <li><strong>イベントカード:</strong> 一斉公開後、イベントカードの効果を先に処理します。バッティングしていた場合は、戦闘などの処理もここで行います。</li>
        <li><strong>物資カード:</strong> イベントカードの処理後に物資カードを処理します。エリアを単独で選んだ人は対応する物資を獲得します。同じエリアに複数人が集まった場合は供給崩壊となり、そのエリアの物資は獲得できません。</li>
      </ol>
      <h3>エリアと資源</h3>
      <ul>
        <li><strong>森 → 木:</strong> 建築や道具、勝利条件やカードのコストに使います。</li>
        <li><strong>畑 → 小麦:</strong> 勝利条件に使うほか、交渉材料にもできます。</li>
        <li><strong>鉱山 → 鉄:</strong> 強力なカードや高レベルの建築に使います。</li>
      </ul>
      <h3>カードと効果</h3>
      <div class="card-gallery" aria-label="ルールブック掲載カード画像">
        ${[
          ["image-01-733x1024.jpg", "木", "建築や道具に使う基本資源。勝利条件やカードのコストにも使います。"],
          ["image-02-733x1024.jpg", "畑", "単独で選ぶと、対応する資源の小麦を1枚獲得できます。"],
          ["image-03-733x1024.jpg", "小麦", "勝利条件に使う食料資源。ほかのプレイヤーとの交渉にも使えます。"],
          ["image-04-733x1024.jpg", "鉱山", "単独で選ぶと、対応する資源の鉄を1枚獲得できます。"],
          ["image-05-733x1024.jpg", "鉄", "強力なカードや高レベルの建築に使う資源です。"],
          ["image-06-733x1024.jpg", "全エリア選択カード", "木・小麦・鉄の全エリアを選んだ扱いになります。バッティングの危険も高まります。"],
          ["image-07-733x1024.jpg", "リプレイカード", "ダイス戦闘時に使い、戦闘を2回行います。どちらかで勝てば勝利です。"],
          ["image-08-733x1024.jpg", "出目＋2カード", "ダイスを振る直前に使い、対象に選んだ1人の次の出目を2増やします。"],
          ["image-09-733x1024.jpg", "出目－2カード", "ダイスを振る直前に使い、指定した相手1人の次の出目を2減らします。"],
        ].map(([file, label, description]) => `
          <article class="illustrated-card">
            <img src="pdf-images/${file}" alt="${escapeHtml(label)}" loading="lazy">
            <div class="illustrated-card-copy"><h4>${escapeHtml(label)}</h4><p>${escapeHtml(description)}</p></div>
          </article>
        `).join("")}
        <article class="illustrated-card">
          <img src="pdf-images/battle-card.png" alt="戦闘カード。選んだ相手と戦闘し、勝つと相手の手札をすべて獲得" loading="lazy">
          <div class="illustrated-card-copy"><h4>戦闘カード</h4><p>相手を1人選んで戦闘します。戦闘中はイベントカードを使えず、お互いサイコロを1回だけ振ります。勝つと、選んだ相手の手札をすべて自分の手札に加えます。</p></div>
        </article>
        <article class="illustrated-card">
          <img src="pdf-images/steal-card.png" alt="強奪カード。選んだ相手の手札を見て1枚選び、自分の手札に加える" loading="lazy">
          <div class="illustrated-card-copy"><h4>強奪カード</h4><p>相手1人の手札を見て1枚選び、自分の手札に加えます。</p></div>
        </article>
      </div>
      <p>3人以上がバッティングした場合は全員でダイスを振り、最も高い出目の人が勝ちます。出目＋2・出目－2はいずれも対象を1人指定します。</p>
    </div>
  `;
}

function renderNeuRules(game) {
  const cards = [
    ["neu-1.png", "1"], ["neu-2.png", "2"], ["neu-3.png", "3"],
    ["neu-4.png", "4"], ["neu-5.png", "5"], ["neu-6.png", "6"],
    ["neu-7.png", "7"], ["neu-8.png", "8"], ["neu-9.png", "9"],
    ["neu-10.png", "10"], ["neu-50.png", "50"],
    ["neu-minus-1.png", "−1"], ["neu-minus-10.png", "−10"],
    ["neu-pass.png", "PASS"], ["neu-turn.png", "TURN"],
    ["neu-shot.png", "SHOT"], ["neu-double.png", "DOUBLE"], ["neu-101.png", "101"],
  ];

  panel.innerHTML = `
    <div class="panel-heading">
      <div>
        <h2>${escapeHtml(game.name)}</h2>
        <p>${escapeHtml(game.description)}</p>
      </div>
      <span class="game-icon" aria-hidden="true">${escapeHtml(game.icon)}</span>
    </div>
    <div class="content-card rules-card">
      <h3>ゲームの準備</h3>
      <ul>
        <li>最初の親を決め、各プレイヤーにカードを3枚ずつ配ります。</li>
        <li>カード構成：1～9が各3枚、10が6枚、50が2枚、−10が4枚、−1が2枚。PASS・TURNが各4枚、SHOT・DOUBLEが各2枚、101が5枚。</li>
      </ul>
      <h3>ゲームの手順</h3>
      <ol>
        <li>親は手札からカードを1枚表向きに出し、場の数字の合計を宣言します。</li>
        <li>山札から1枚引いてターン終了。親を時計回りに交代し、同じ手順を続けます。</li>
      </ol>
      <h3>特殊カード</h3>
      <ul>
        <li><strong>PASS：</strong>特殊な効果なし。</li>
        <li><strong>TURN：</strong>プレイ順が逆向きになります。</li>
        <li><strong>SHOT：</strong>次の親を指定できます。</li>
        <li><strong>DOUBLE：</strong>次のプレイヤーはカードを2枚出します。2枚目にだけ出せます。</li>
        <li>PASS・TURN・SHOTの効果は、次の親へ押し付けられます。特殊カードを出したターンは数字カードを出さず、山札を引いて終了します。</li>
        <li><strong>101：</strong>直前の数字にかかわらず、場の合計を101にします。</li>
      </ul>
      <h3>カード画像</h3>
      <div class="card-gallery neu-card-gallery" aria-label="Neuのカード画像">
        ${cards.map(([file, label]) => `
          <figure class="illustrated-card neu-card-image">
            <img src="pdf-images/${file}" alt="Neu ${escapeHtml(label)}カード" loading="lazy">
            <figcaption>${escapeHtml(label)}</figcaption>
          </figure>
        `).join("")}
      </div>
      <h3>勝敗</h3>
      <p>場の合計が102以上になったプレイヤーがそのラウンドの敗者となり、次の親です。2回負けると脱落し、最後に残った1人が勝者です。</p>
    </div>
  `;
}

function renderDirectRules(game) {
  const cards = [
    ["direct-jump.jpg", "ジャンプ（1枚）", "上下左右に隣接する壁を1つ飛び越えて、すぐ向こう側のマスへ移動します。壁の長さは問いません。着地先に相手のコマがいる場合や、盤面の外へ出る場合は使えません。"],
    ["direct-move-two.jpg", "2マス移動（1枚）", "壁を越えず、前後左右に合計2マス移動します。途中で方向を変えてL字に動けます。1マス目で相手のコマと隣接した場合は、通常のコマの飛び越えルールを2マス目に適用できます。"],
    ["direct-place-two-walls.jpg", "壁2個設置（1枚）", "自分のストックから壁を2枚選び、盤面に設置します。それぞれの壁で完全封鎖禁止を守ります。ストックが1枚以下なら、残りの枚数だけ設置します。"],
    ["direct-wall-recovery.jpg", "壁回収（2枚）", "盤面の壁を1枚取り除き、自分のストックに加えます。自分が置いた壁だけでなく、相手が置いた壁も回収できます。回収した壁は自分の壁として再設置できます。"],
  ];

  panel.innerHTML = `
    <div class="panel-heading">
      <div>
        <h2>${escapeHtml(game.name)}</h2>
        <p>${escapeHtml(game.description)}</p>
      </div>
      <span class="game-icon" aria-hidden="true">${escapeHtml(game.icon)}</span>
    </div>
    <div class="content-card rules-card">
      <h3>ゲーム概要</h3>
      <p>9×9マスの盤面で壁を設置しながら進路を作り、相手より先にゴールを目指す2人用の戦略ゲームです。運要素はありません。</p>
      <h3>勝利条件</h3>
      <p>自分のコマを、相手側の最奥列にあるいずれかのマスへ先に到達させると勝利です。</p>
      <h3>内容物</h3>
      <ul>
        <li>9×9マスのゲームボード</li>
        <li>プレイヤーコマ2個（各プレイヤー1個）</li>
        <li>壁：各プレイヤー10枚（1マス分3枚、2マス分4枚、3マス分3枚）</li>
        <li>アクションカード：各プレイヤー5枚（ジャンプ1枚、2マス移動1枚、壁2個設置1枚、壁回収2枚）</li>
      </ul>
      <h3>ゲームの準備</h3>
      <p>2人で対戦します。各プレイヤーはアクションカード5枚を表向きにして手元に置きます。カードはお互いに確認できる公開情報です。</p>
      <h3>ターンの流れ</h3>
      <p>自分のターンに、次のいずれか1つを必ず行います。パスはできません。</p>
      <ol>
        <li><strong>移動：</strong>自分のコマを上下左右の隣接マスへ1歩動かします。</li>
        <li><strong>壁の設置：</strong>自分のストックから壁を1枚選び、盤面の溝に置きます。</li>
        <li><strong>カードの発動：</strong>手元のアクションカードを1枚使い、効果を処理します。使用したカードはゲームから除外します。</li>
      </ol>
      <h3>壁の設置ルール</h3>
      <p>相手のコマがゴールへ到達する経路を完全に塞ぐ壁の置き方は禁止です。このルールは通常の壁設置と、カードによる壁設置の両方に適用されます。</p>
      <h3>アクションカード</h3>
      <div class="card-gallery" aria-label="DIRECTのカード画像">
        ${cards.map(([file, label, description]) => `
          <figure class="illustrated-card">
            <img src="pdf-images/${file}" alt="${escapeHtml(label)}カード" loading="lazy">
            <div class="illustrated-card-copy">
              <h4>${escapeHtml(label)}</h4>
              <p>${escapeHtml(description)}</p>
            </div>
          </figure>
        `).join("")}
      </div>
    </div>
  `;
}

function renderLastContinueRules(game) {
  const cards = [
    ["last-continue-good-stage.jpg", "GOOD STAGE", "引いた人はGOOD効果を解決し、続けて自分のターンを行います。"],
    ["last-continue-bad-stage.jpg", "BAD STAGE", "引いた人はBAD効果を受けます。基本は残機を1つ失い、その後、次のプレイヤーへ移ります。"],
    ["last-continue-debug.jpg", "DEBUG", "一番上のステージカードの内容を確認できます。"],
    ["last-continue-reset.jpg", "RESET", "自分または対戦相手1人を選び、その人の手持ちのアイテムをすべて山札に戻してシャッフルし、同じ枚数を引き直します。"],
    ["last-continue-save.jpg", "SAVE", "アイテムを1枚セットします。セット後、1周以内に残機が0になったら残機1で復活し、セットしたアイテムを回収します。未発動のまま1周するか、他のプレイヤーがSAVEを使うと、セットしたアイテムは失われます。"],
    ["last-continue-1up.jpg", "1UP", "残機を1つ増やします。残機は最大3です。"],
    ["last-continue-continue.jpg", "CONTINUE", "このカードを出した状態でBAD STAGEを引いた場合、残機の減少を無効にし、自分のターンを続けます。"],
    ["last-continue-glitch.jpg", "GLITCH", "このターンに引くステージカードの結果を反転します。GOODはBADに、BADはGOODになります。"],
    ["last-continue-heart.jpg", "残機（ハート）", "ゲーム開始時の残機は各プレイヤー3です。"],
  ];

  panel.innerHTML = `
    <div class="panel-heading">
      <div>
        <h2>${escapeHtml(game.name)}</h2>
        <p>${escapeHtml(game.description)}</p>
      </div>
      <span class="game-icon" aria-hidden="true">${escapeHtml(game.icon)}</span>
    </div>
    <div class="content-card rules-card">
      <h3>ゲーム概要</h3>
      <p>GOOD STAGEとBAD STAGEが混ざったステージデッキを使い、自分で引くか、他の人に引かせるかを選びながら生き残る心理戦ゲームです。ステージデッキに残るGOODとBADの枚数は全員に公開されますが、カードの順番は分かりません。</p>
      <p><strong>人数：</strong>3〜4人　<strong>プレイ時間：</strong>約10〜15分</p>
      <h3>勝利条件</h3>
      <p>残機が0になるとGAME OVERです。最後まで生き残ったプレイヤーが勝者です。</p>
      <h3>ゲームの準備</h3>
      <ol>
        <li>全員の残機を3にします。</li>
        <li>各ラウンドの開始時に、各プレイヤーへアイテムカードを2枚配ります。残りのアイテムカードは山札にします。</li>
        <li>じゃんけんなどで最初のプレイヤーを決めます。以降は時計回りに進みます。</li>
      </ol>
      <h3>ラウンドの準備</h3>
      <ol>
        <li>GOOD STAGEとBAD STAGEを混ぜてシャッフルします。</li>
        <li>サイコロを2個振り、出目の合計と同じ枚数を今回使うステージデッキにします。残りのカードはそのラウンドでは使いません。</li>
        <li>今回のステージデッキに含まれるGOODとBADの枚数を全員に公開します。カードの順番は伏せたままにします。</li>
      </ol>
      <h3>自分のターン</h3>
      <p>次のどちらかを選びます。</p>
      <ul>
        <li><strong>自分でPLAY：</strong>自分でステージカードを1枚引きます。</li>
        <li><strong>他の人にPLAYさせる：</strong>プレイヤーを1人選び、その人にステージカードを1枚引かせます。この場合、自分のターンは必ず終了します。</li>
      </ul>
      <h3>ステージカードの結果</h3>
      <ul>
        <li><strong>GOOD STAGE：</strong>引いた人がGOOD効果を解決し、その人のターンが続きます。</li>
        <li><strong>BAD STAGE：</strong>引いた人がBAD効果を解決します。基本は残機を1つ失い、その後、次のプレイヤーへ移ります。</li>
        <li>他の人に引かせた場合、GOODならその人のターンが続き、BADならその人が効果を受けて次のプレイヤーへ移ります。引かせた側のターンには戻りません。</li>
      </ul>
      <h3>アイテム</h3>
      <p>アイテムは基本的に自分のターンに使います。使用したアイテムは捨て札になります。</p>
      <div class="card-gallery last-continue-gallery" aria-label="Last Continueのステージカード・アイテム画像">
        ${cards.map(([file, label, description]) => `
          <figure class="illustrated-card last-continue-card">
            <img src="pdf-images/${file}" alt="${escapeHtml(label)}" loading="lazy">
            <div class="illustrated-card-copy"><h4>${escapeHtml(label)}</h4><p>${escapeHtml(description)}</p></div>
          </figure>
        `).join("")}
      </div>
      <h3>ラウンド終了</h3>
      <p>ステージデッキのカードをすべて引き終えたらROUND CLEARです。次のラウンドを準備して同じ手順を繰り返します。</p>
    </div>
  `;
}

function renderRulesPlaceholder(game) {
  panel.innerHTML = `
    <div class="panel-heading">
      <div>
        <h2>${escapeHtml(game.name)}</h2>
        <p>${escapeHtml(game.description)}</p>
      </div>
      <span class="game-icon" aria-hidden="true">${escapeHtml(game.icon)}</span>
    </div>
    <div class="content-card">
      <div class="section-heading">
        <h3>ルール</h3>
        <p class="section-description">ルールは準備中です。</p>
      </div>
      <div class="rules-placeholder">
        <strong>ルールを追加できます</strong>
        <span>このゲームのルールが決まったら、ここに遊び方を掲載します。</span>
      </div>
    </div>
  `;
}

function getPlayerTotals() {
  return scoreState.players.map((player) => {
    const total = scoreState.rounds.reduce(
      (sum, round) => sum + (round.scores[player.id] ?? 0),
      0,
    );
    return { ...player, total };
  });
}

function renderPlayerOptions(players, selectedIndex) {
  return players.map((player, index) => `
    <option value="${escapeHtml(player.id)}" ${index === selectedIndex ? "selected" : ""}>${escapeHtml(player.name)}</option>
  `).join("");
}

function renderTilePicker() {
  const openMeldCount = ponTileIds.length + kanTileIds.length;
  const meldCount = openMeldCount + ankanTileIds.length;
  const concealedTarget = maxHandSize - meldCount * 3;
  const tileCounts = selectedHand.reduce((counts, tileId) => {
    counts[tileId] = (counts[tileId] ?? 0) + 1;
    return counts;
  }, {});
  ponTileIds.forEach((tileId) => { tileCounts[tileId] = (tileCounts[tileId] ?? 0) + 3; });
  kanTileIds.forEach((tileId) => { tileCounts[tileId] = (tileCounts[tileId] ?? 0) + 4; });
  ankanTileIds.forEach((tileId) => { tileCounts[tileId] = (tileCounts[tileId] ?? 0) + 4; });

  return `
    <div class="tile-picker" id="tile-picker">
      <div class="section-heading">
        <h4>手牌を選ぶ <span class="tile-count">${selectedHand.length}/${concealedTarget}枚${meldCount ? `（面子${meldCount}組・合計${selectedHand.length + ponTileIds.length * 3 + kanTileIds.length * 4 + ankanTileIds.length * 4}枚）` : ""}</span></h4>
        <p class="section-description">牌を押して手牌に追加します。「和了牌」で最後に引いた牌を指定できます。</p>
      </div>
      <div class="selected-hand" aria-label="選択中の手牌">
        ${selectedHand.length
          ? selectedHand.map((tileId, index) => {
              const tile = hanajongTiles.find((item) => item.id === tileId);
              return `<span class="selected-tile-group"><button class="tile-button selected-tile" type="button" data-remove-tile="${index}" aria-label="${tile.label}を手牌から取り除く">${renderTileFace(tile)}</button><button class="winning-tile-toggle ${winningTileIndex === index ? "is-selected" : ""}" type="button" data-win-tile="${index}" aria-pressed="${winningTileIndex === index}">和了牌</button></span>`;
            }).join("")
          : `<span class="hand-placeholder">ここに選んだ牌が並びます</span>`}
      </div>
      <div class="open-meld-area" aria-label="面子の入力">
        <div class="open-meld-heading"><strong>面子</strong><span>${meldCount ? `ポン${ponTileIds.length}組・明槓${kanTileIds.length}組・暗槓${ankanTileIds.length}組` : "なし"}</span></div>
        ${ponTileIds.map((tileId, meldIndex) => {
          const ponTile = hanajongTiles.find((tile) => tile.id === tileId);
          return `<div class="open-pon-meld" aria-label="${escapeHtml(ponTile.label)}をポンした3枚">${Array.from({ length: 3 }, (_, index) => `<span class="open-pon-tile ${index === 2 ? "called-tile" : ""}">${renderTileFace(ponTile)}</span>`).join("")}<button class="small-button" data-clear-pon="${meldIndex}" type="button" aria-label="このポンを解除">解除</button></div>`;
        }).join("")}
        ${kanTileIds.map((tileId, meldIndex) => {
          const kanTile = hanajongTiles.find((tile) => tile.id === tileId);
          return `<div class="open-pon-meld open-kan-meld" aria-label="${escapeHtml(kanTile.label)}の明槓・鳴き">${Array.from({ length: 4 }, (_, index) => `<span class="open-pon-tile ${index === 3 ? "called-tile" : ""}">${renderTileFace(kanTile)}</span>`).join("")}<span class="kan-kind-label">明槓・鳴き</span><button class="small-button" data-clear-kan="${meldIndex}" type="button" aria-label="この明槓を解除">解除</button></div>`;
        }).join("")}
        ${ankanTileIds.map((tileId, meldIndex) => {
          const kanTile = hanajongTiles.find((tile) => tile.id === tileId);
          return `<div class="open-pon-meld open-kan-meld concealed-kan-meld" aria-label="${escapeHtml(kanTile.label)}の暗槓・門前">${Array.from({ length: 4 }, (_, index) => index === 0 || index === 3 ? `<span class="kan-tile-back" aria-label="伏せ牌">裏</span>` : `<span class="open-pon-tile">${renderTileFace(kanTile)}</span>`).join("")}<span class="kan-kind-label">暗槓・門前</span><button class="small-button" data-clear-ankan="${meldIndex}" type="button" aria-label="この暗槓を解除">解除</button></div>`;
        }).join("")}
        <div class="open-meld-actions">
          <button class="secondary-button pon-mode-button ${ponInputMode ? "is-active" : ""}" id="pon-mode" type="button" aria-pressed="${ponInputMode}" ${meldCount >= 3 ? "disabled" : ""}>${ponInputMode ? "ポンする牌を選択中" : "ポンを追加"}</button>
          <button class="secondary-button pon-mode-button ${kanInputMode ? "is-active" : ""}" id="kan-mode" type="button" aria-pressed="${kanInputMode}" ${meldCount >= 3 ? "disabled" : ""}>${kanInputMode ? "明槓する牌を選択中" : "明槓を追加"}</button>
          <button class="secondary-button pon-mode-button ${ankanInputMode ? "is-active" : ""}" id="ankan-mode" type="button" aria-pressed="${ankanInputMode}" ${meldCount >= 3 ? "disabled" : ""}>${ankanInputMode ? "暗槓する牌を選択中" : "暗槓を追加"}</button>
        </div>
        <p class="helper-text">明槓・暗槓はボタンを押して牌一覧から選ぶだけで登録できます。手牌に同じ牌が明槓なら3枚、暗槓なら4枚あれば自動で移動します。ポン済みの牌は明槓に変更できます。槓の後は嶺上牌を手牌に加えてください。</p>
      </div>
      <div class="tile-picker-actions"><button class="secondary-button" id="clear-hand" type="button" title="Ctrl + Backspace" ${selectedHand.length || meldCount ? "" : "disabled"}>手牌をクリア</button><button class="secondary-button" id="random-hand" type="button" title="Shift + D">和了形をランダム入力</button></div>
      <div class="tile-palette" aria-label="牌一覧">
        ${hanajongTileGroups.map((group) => `
          <section class="tile-family">
            <h5>${group.name}</h5>
            <div class="tile-family-grid">
              ${group.tiles.map((tile) => {
                const count = tileCounts[tile.id] ?? 0;
                const concealedCount = selectedHand.filter((selectedTileId) => selectedTileId === tile.id).length;
                const currentPonCount = ponTileIds.filter((ponTileId) => ponTileId === tile.id).length * 3 + kanTileIds.filter((kanTileId) => kanTileId === tile.id).length * 4 + ankanTileIds.filter((ankanTileId) => ankanTileId === tile.id).length * 4;
                const canMoveTriplet = ponInputMode && concealedCount >= 3 && currentPonCount === 0;
                const canEnterPon = ponInputMode && selectedHand.length <= concealedTarget - 3 && count <= 1;
                const canMoveQuad = kanInputMode && concealedCount >= 3 && currentPonCount === 0;
                const canEnterKan = kanInputMode && (ponTileIds.includes(tile.id) || (concealedCount === 0 && selectedHand.length <= concealedTarget - 3));
                const canMoveAnkan = ankanInputMode && concealedCount >= 4 && currentPonCount === 0;
                const canEnterAnkan = ankanInputMode && concealedCount === 0 && selectedHand.length <= concealedTarget - 3;
                const disabled = (ponInputMode || kanInputMode || ankanInputMode)
                  ? (ponInputMode ? !(canMoveTriplet || canEnterPon) : kanInputMode ? !(canMoveQuad || canEnterKan) : !(canMoveAnkan || canEnterAnkan))
                  : count >= 4 || selectedHand.length >= concealedTarget;
                return `<button class="tile-button palette-tile" type="button" data-add-tile="${tile.id}" aria-label="${tile.label}を手牌に追加、選択済み${count}枚" ${disabled ? "disabled" : ""}>${renderTileFace(tile)}<span class="tile-quantity">${count}/4枚</span></button>`;
              }).join("")}
            </div>
          </section>
        `).join("")}
      </div>
      <p class="helper-text tile-note">牌を11枚選ぶと、手牌の組み合わせから役と翻数を自動判定します。リーチなど状況による役は下の項目で指定してください。</p>
    </div>
  `;
}

function renderTileFace(tile) {
  const number = tile.number ? `<span class="tile-rank">${tile.number}</span>` : "";
  return `<span class="tile-face"><img src="pdf-images/${tile.image}" alt="">${number}<span class="tile-face-label">${escapeHtml(tile.label)}</span></span>`;
}

function updateTilePicker() {
  const tilePicker = panel.querySelector("#tile-picker");
  if (!tilePicker) return;
  tilePicker.outerHTML = renderTilePicker();
  panel.querySelector("#clear-hand")?.addEventListener("click", () => {
    selectedHand = [];
    winningTileIndex = null;
    ponTileIds = [];
    kanTileIds = [];
    ankanTileIds = [];
    ponInputMode = false;
    kanInputMode = false;
    ankanInputMode = false;
    updateTilePicker();
  });
  panel.querySelector("#pon-mode")?.addEventListener("click", () => {
    if (ponTileIds.length + kanTileIds.length + ankanTileIds.length >= 3) return;
    ponInputMode = !ponInputMode;
    kanInputMode = false;
    ankanInputMode = false;
    updateTilePicker();
  });
  panel.querySelector("#kan-mode")?.addEventListener("click", () => {
    if (ponTileIds.length + kanTileIds.length + ankanTileIds.length >= 3) return;
    kanInputMode = !kanInputMode;
    ponInputMode = false;
    ankanInputMode = false;
    updateTilePicker();
  });
  panel.querySelector("#ankan-mode")?.addEventListener("click", () => {
    if (ponTileIds.length + kanTileIds.length + ankanTileIds.length >= 3) return;
    ankanInputMode = !ankanInputMode;
    ponInputMode = false;
    kanInputMode = false;
    updateTilePicker();
  });
  panel.querySelectorAll("[data-clear-pon]").forEach((button) => {
    button.addEventListener("click", () => {
      ponTileIds.splice(Number(button.dataset.clearPon), 1);
      ponInputMode = false;
      kanInputMode = false;
      ankanInputMode = false;
      updateTilePicker();
    });
  });
  panel.querySelectorAll("[data-clear-kan]").forEach((button) => {
    button.addEventListener("click", () => {
      kanTileIds.splice(Number(button.dataset.clearKan), 1);
      kanInputMode = false;
      updateTilePicker();
    });
  });
  panel.querySelectorAll("[data-clear-ankan]").forEach((button) => {
    button.addEventListener("click", () => {
      ankanTileIds.splice(Number(button.dataset.clearAnkan), 1);
      ankanInputMode = false;
      updateTilePicker();
    });
  });
  panel.querySelector("#random-hand")?.addEventListener("click", () => {
    selectedHand = createRandomWinningHand();
    winningTileIndex = selectedHand.length - 1;
    ponTileIds = [];
    kanTileIds = [];
    ankanTileIds = [];
    ponInputMode = false;
    kanInputMode = false;
    ankanInputMode = false;
    updateTilePicker();
  });
  panel.querySelectorAll("[data-add-tile]").forEach((button) => {
    button.addEventListener("click", () => {
      const tileId = button.dataset.addTile;
      const count = selectedHand.filter((selectedTileId) => selectedTileId === tileId).length;
      if (kanInputMode) {
        const ponIndex = ponTileIds.indexOf(tileId);
        if (ponIndex >= 0) {
          ponTileIds.splice(ponIndex, 1);
          kanTileIds.push(tileId);
        } else if (count >= 3) {
          const indices = selectedHand.flatMap((id, index) => id === tileId ? [index] : []).slice(0, 3);
          const removedBeforeWinningTile = indices.filter((index) => index < winningTileIndex).length;
          if (indices.includes(winningTileIndex)) winningTileIndex = null;
          else if (winningTileIndex !== null) winningTileIndex -= removedBeforeWinningTile;
          selectedHand = selectedHand.filter((_, index) => !indices.includes(index));
          kanTileIds.push(tileId);
        } else if (count === 0 && selectedHand.length <= maxHandSize - (ponTileIds.length + kanTileIds.length + ankanTileIds.length) * 3 - 3) {
          kanTileIds.push(tileId);
        } else return;
        kanInputMode = false;
        updateTilePicker();
        return;
      }
      if (ankanInputMode) {
        if (count >= 4) {
          const indices = selectedHand.flatMap((id, index) => id === tileId ? [index] : []).slice(0, 4);
          const removedBeforeWinningTile = indices.filter((index) => index < winningTileIndex).length;
          if (indices.includes(winningTileIndex)) winningTileIndex = null;
          else if (winningTileIndex !== null) winningTileIndex -= removedBeforeWinningTile;
          selectedHand = selectedHand.filter((_, index) => !indices.includes(index));
          ankanTileIds.push(tileId);
        } else if (count === 0 && selectedHand.length <= maxHandSize - (ponTileIds.length + kanTileIds.length + ankanTileIds.length) * 3 - 3) {
          ankanTileIds.push(tileId);
        } else return;
        ankanInputMode = false;
        updateTilePicker();
        return;
      }
      if (ponInputMode) {
        if (count >= 3) {
          const ponIndices = selectedHand.flatMap((selectedTileId, index) => selectedTileId === tileId ? [index] : []).slice(0, 3);
          const removedBeforeWinningTile = ponIndices.filter((index) => index < winningTileIndex).length;
          if (ponIndices.includes(winningTileIndex)) winningTileIndex = null;
          else if (winningTileIndex !== null) winningTileIndex -= removedBeforeWinningTile;
          selectedHand = selectedHand.filter((_, index) => !ponIndices.includes(index));
        } else if (selectedHand.length > maxHandSize - (ponTileIds.length + kanTileIds.length + ankanTileIds.length) * 3 - 3 || count + ponTileIds.filter((ponTileId) => ponTileId === tileId).length * 3 + kanTileIds.filter((kanTileId) => kanTileId === tileId).length * 4 + ankanTileIds.filter((ankanTileId) => ankanTileId === tileId).length * 4 > 1) {
          return;
        }
        ponTileIds.push(tileId);
        ponInputMode = false;
        updateTilePicker();
        return;
      }
      if (selectedHand.length >= maxHandSize - (ponTileIds.length + kanTileIds.length + ankanTileIds.length) * 3 || count + ponTileIds.filter((ponTileId) => ponTileId === tileId).length * 3 + kanTileIds.filter((kanTileId) => kanTileId === tileId).length * 4 + ankanTileIds.filter((ankanTileId) => ankanTileId === tileId).length * 4 >= 4) return;
      selectedHand.push(tileId);
      winningTileIndex = selectedHand.length - 1;
      updateTilePicker();
    });
  });
  panel.querySelectorAll("[data-remove-tile]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedHand.splice(Number(button.dataset.removeTile), 1);
      if (winningTileIndex === Number(button.dataset.removeTile)) winningTileIndex = null;
      else if (winningTileIndex > Number(button.dataset.removeTile)) winningTileIndex -= 1;
      updateTilePicker();
    });
  });
  panel.querySelectorAll("[data-win-tile]").forEach((button) => {
    button.addEventListener("click", () => {
      winningTileIndex = Number(button.dataset.winTile);
      updateTilePicker();
    });
  });
  updateScorePreview();
}

function createRandomWinningHand() {
  for (let attempt = 0; attempt < 500; attempt += 1) {
    const counts = Array(25).fill(0);
    const hand = [];
    const pair = Math.floor(Math.random() * 25);
    counts[pair] = 2;
    hand.push(`tile-${pair + 1}`, `tile-${pair + 1}`);
    let valid = true;
    for (let group = 0; group < 3; group += 1) {
      const useTriplet = Math.random() < 0.5;
      let tiles;
      if (useTriplet) {
        const tile = Math.floor(Math.random() * 25);
        tiles = [tile, tile, tile];
      } else {
        const suit = Math.floor(Math.random() * 2);
        const start = suit * 9 + Math.floor(Math.random() * 7);
        tiles = [start, start + 1, start + 2];
      }
      if (tiles.some((tile) => counts[tile] + tiles.filter((value) => value === tile).length > 4)) { valid = false; break; }
      tiles.forEach((tile) => { counts[tile] += 1; hand.push(`tile-${tile + 1}`); });
    }
    if (valid) return hand;
  }
  return [];
}

function getHandDecompositions() {
  const completeHand = [...selectedHand, ...[...ponTileIds, ...kanTileIds, ...ankanTileIds].flatMap((tileId) => [tileId, tileId, tileId])];
  if (completeHand.length !== maxHandSize) return [];
  const counts = Array(25).fill(0);
  completeHand.forEach((tileId) => { counts[Number(tileId.slice(5)) - 1] += 1; });
  const results = [];
  function takeMelds(remaining, melds) {
    const first = remaining.findIndex((count) => count > 0);
    if (first < 0) {
      if (melds.length === 3) results.push(melds);
      return;
    }
    if (melds.length >= 3) return;
    if (remaining[first] >= 3) {
      const next = [...remaining]; next[first] -= 3;
      takeMelds(next, [...melds, { type: "triplet", tile: first }]);
    }
    if (first < 18 && first % 9 <= 6 && remaining[first + 1] && remaining[first + 2]) {
      const next = [...remaining]; next[first]--; next[first + 1]--; next[first + 2]--;
      takeMelds(next, [...melds, { type: "sequence", tile: first }]);
    }
  }
  for (let pair = 0; pair < counts.length; pair += 1) {
    if (counts[pair] < 2) continue;
    const remaining = [...counts]; remaining[pair] -= 2;
    const before = results.length;
    takeMelds(remaining, []);
    for (let i = before; i < results.length; i += 1) results[i] = { pair, melds: results[i] };
  }
  return results;
}

function analyzeHand() {
  const decompositions = getHandDecompositions();
  const completeHand = [...selectedHand, ...[...ponTileIds, ...kanTileIds, ...ankanTileIds].flatMap((tileId) => [tileId, tileId, tileId])];
  const indices = completeHand.map((tileId) => Number(tileId.slice(5)) - 1);
  if (indices.length !== maxHandSize) return null;
  const counts = Array(25).fill(0);
  indices.forEach((index) => { counts[index] += 1; });
  const winningTile = winningTileIndex === null ? null : indices[winningTileIndex];
  const isHonor = (tile) => tile >= 18;
  const rank = (tile) => tile % 9 + 1;
  const isTerminalOrHonor = (tile) => isHonor(tile) || rank(tile) === 1 || rank(tile) === 9;
  const ponTileIndices = [...ponTileIds, ...kanTileIds, ...ankanTileIds].map((tileId) => Number(tileId.slice(5)) - 1);
  const yakuValues = new Map(hanajongYaku.map(([name, , closedValue, openValue]) => [name, { closedValue, openValue }]));

  function evaluate(decomposition) {
    const yaku = new Map();
    let yakuman = 0;
    const { pair, melds } = decomposition;
    const ponMelds = ponTileIndices.map((tileIndex) => melds.find((meld) => meld.type === "triplet" && meld.tile === tileIndex));
    if (ponMelds.some((meld) => !meld)) return null;
    const closed = ponTileIds.length === 0 && kanTileIds.length === 0;
    const add = (name, multiplier = 1) => {
      const value = yakuValues.get(name);
      const han = (closed ? value?.closedValue : value?.openValue) ?? "不可";
      if (han === "役満") { yakuman += multiplier; yaku.set(name, "役満"); }
      else if (han === "ダブル") { yakuman += 2 * multiplier; yaku.set(name, "ダブル役満"); }
      else if (han === "トリプル") { yakuman += 3 * multiplier; yaku.set(name, "トリプル役満"); }
      else if (han !== "不可" && Number(han) > 0) yaku.set(name, (yaku.get(name) ?? 0) + Number(han) * multiplier);
    };
    const triplets = melds.filter((meld) => meld.type === "triplet");
    const sequences = melds.filter((meld) => meld.type === "sequence");
    const suit = Math.floor((indices.find((item) => item < 18) ?? -9) / 9);
    const allSameSuit = suit >= 0 && indices.every((tile) => tile < 18 && Math.floor(tile / 9) === suit);
    const suits = new Set(indices.filter((tile) => tile < 18).map((tile) => Math.floor(tile / 9)));
    const hasHonors = indices.some(isHonor);
    const allTerminalOrHonor = indices.every(isTerminalOrHonor);
    const allNumberTerminals = indices.every((tile) => tile < 18 && isTerminalOrHonor(tile));

    if (closed && panel.querySelector("#win-type")?.value === "tsumo") add("メンゼンツモ");
    if (indices.every((tile) => tile < 18 && rank(tile) >= 2 && rank(tile) <= 8)) add("タンヤオ");
    if (triplets.length === 3) add("トイトイ");
    if (closed && triplets.length === 3) add("サンアンコウ");
    const yakuhaiCount = triplets.filter((meld) => isHonor(meld.tile)).length;
    if (yakuhaiCount) add("ヤクハイ", yakuhaiCount);

    const honorTriplets = triplets.map((meld) => meld.tile).filter((tile) => tile >= 22);
    const honorsPair = pair >= 22;
    if (honorTriplets.length >= 2 && honorsPair && [22, 23, 24].every((tile) => honorTriplets.includes(tile) || pair === tile)) add("ショウコウレン");
    const winningSequence = winningTile === null || pair === winningTile || triplets.some((meld) => meld.tile === winningTile)
      ? null
      : sequences.find((meld) => winningTile >= meld.tile && winningTile <= meld.tile + 2);
    const winningRank = winningTile === null ? 0 : rank(winningTile);
    const sequenceStartRank = winningSequence ? rank(winningSequence.tile) : 0;
    const isRyanmen = winningSequence && winningRank !== sequenceStartRank + 1
      && !(winningRank === sequenceStartRank + 2 && sequenceStartRank === 1)
      && !(winningRank === sequenceStartRank && sequenceStartRank === 7);
    if (sequences.length === 3 && pair < 18 && isRyanmen && closed) add("ピンフ");
    if (closed && sequences.length === 3 && sequences.some((a, i) => sequences.some((b, j) => j > i && a.tile === b.tile))) add("イーペーコー");
    if (closed && counts.filter((count) => count === 2).length === 4 && counts.filter((count) => count === 3).length === 1) add("スートイイーメン");

    const isTerminalMeld = (meld) => meld.type === "sequence" ? [1, 7].includes(rank(meld.tile)) : isTerminalOrHonor(meld.tile);
    if (sequences.length > 0 && isTerminalOrHonor(pair) && melds.every(isTerminalMeld)) add(hasHonors ? "チャンタ" : "ジュンチャン");
    if (allTerminalOrHonor) add("ホンロウトウ");
    if (allNumberTerminals) add("チンロウトウ");
    if (suits.size === 1 && hasHonors) add("ホンイツ");
    if (allSameSuit) add("チンイツ");

    const sequenceSuits = new Set(sequences.map((meld) => Math.floor(meld.tile / 9)));
    const sequenceRanks = new Set(sequences.map((meld) => rank(meld.tile)));
    if (sequences.length === 3 && sequenceSuits.size === 1 && [1, 4, 7].every((start) => sequenceRanks.has(start))) add("イッキカンツウ");
    if (indices.every(isHonor)) add("ツーイーソー");
    if (indices.every((tile) => tile >= 9 && tile < 18 && [2, 3, 4, 6, 8].includes(rank(tile)) || tile === 23)) add("リューイーソー");
    if (counts[22] >= 3 && counts[23] >= 3 && counts[24] >= 3) add("ダイコウレン");

    const riichi = panel.querySelector("#riichi-state")?.value;
    if (closed && riichi === "riichi") add("リーチ");
    if (closed && riichi === "double") add("ダブルリーチ");
    if (closed && riichi !== "none" && panel.querySelector("#context-ippatsu")?.checked) add("イッパツ");
    if (panel.querySelector("#win-type")?.value === "tsumo" && panel.querySelector("#context-haitei")?.checked) add("ハイテイ");
    if (panel.querySelector("#win-type")?.value === "ron" && panel.querySelector("#context-houtei")?.checked) add("ホウテイ");
    if (closed && panel.querySelector("#context-first-draw")?.checked && panel.querySelector("#win-type")?.value === "tsumo") add(panel.querySelector("#winner-role")?.value === "parent" ? "テンホー" : "チーホー");

    const regularHan = [...yaku.values()].reduce((sum, value) => sum + (typeof value === "number" ? value : 0), 0);
    if (regularHan >= 13 && yakuman === 0) { yakuman = 1; yaku.set("数え役満", "役満"); }
    return { yaku, regularHan, yakuman };
  }

  const evaluated = decompositions.map(evaluate).filter(Boolean);
  if (!evaluated.length) return null;
  const terminalHonorTypes = new Set(indices.filter(isTerminalOrHonor));
  if (ponTileIds.length === 0 && kanTileIds.length === 0 && ankanTileIds.length === 0 && terminalHonorTypes.size === 10 && indices.every(isTerminalOrHonor) && counts.some((count) => count === 2)) {
    evaluated.push({ yaku: new Map([["コクシムソウ", "役満"]]), regularHan: 0, yakuman: 1 });
  }
  for (let suit = 0; suit < 2; suit += 1) {
    const start = suit * 9;
    const isChuuren = counts.slice(start, start + 9).every((count, index) => count === (index === 0 || index === 8 ? 2 : 1))
      && counts.every((count, index) => index >= start && index < start + 9 || count === 0);
    if (ponTileIds.length === 0 && kanTileIds.length === 0 && ankanTileIds.length === 0 && isChuuren) evaluated.push({ yaku: new Map([["チューレンポウトウ", "役満"]]), regularHan: 0, yakuman: 1 });
  }
  if (!evaluated.length) return null;
  evaluated.sort((a, b) => (b.yakuman ? b.yakuman * 100 : b.regularHan) - (a.yakuman ? a.yakuman * 100 : a.regularHan));
  return evaluated[0];
}

function calculateRoundResult() {
  const winnerIsParent = panel.querySelector("#winner-role").value === "parent";
  const winType = panel.querySelector("#win-type").value;
  const analysis = analyzeHand();
  if (!analysis || !analysis.yaku.size) return null;
  const baseHan = analysis.regularHan;
  const doraCount = Number(panel.querySelector("#dora-count")?.value ?? 0);
  const uraDoraCount = Number(panel.querySelector("#ura-dora-count")?.value ?? 0);
  const akaDoraCount = Number(panel.querySelector("#aka-dora-count")?.value ?? 0);
  const rawHan = baseHan + doraCount + uraDoraCount + akaDoraCount;
  const yakumanMultiplier = analysis.yakuman || (rawHan >= 13 ? 1 : 0);
  const han = yakumanMultiplier ? 13 : Math.min(13, rawHan);
  const yaku = [...analysis.yaku];
  if (rawHan >= 13 && !analysis.yakuman) yaku.push(["数え役満", "役満"]);
  const scoreRow = hanajongPayments.at(-1);
  const payments = yakumanMultiplier > 0
    ? scoreRow
    : hanajongPayments.find((row) => Number(row.label) === han)
      ?? hanajongPayments.find((row) => row.label.split("・").map(Number).includes(han));

  if (!payments || !Number.isSafeInteger(han) || (han < 1 && !yakumanMultiplier) || han > 13) return null;

  const baseMultiplier = yakumanMultiplier || 1;
  let winningPoints;
  let paymentBreakdown;
  if (winType === "ron") {
    winningPoints = (winnerIsParent ? payments.parentRon : payments.childRon) * baseMultiplier;
    paymentBreakdown = [{ label: "放銃者から", points: winningPoints }];
  } else if (winnerIsParent) {
    const payment = payments.parentTsumo * baseMultiplier;
    winningPoints = payment * 3;
    paymentBreakdown = [
      { label: "子1人あたり（3人）", points: payment },
      { label: "合計受取", points: winningPoints, total: true },
    ];
  } else {
    const parentPayment = payments.childTsumoParent * baseMultiplier;
    const childPayment = payments.childTsumoChild * baseMultiplier;
    winningPoints = parentPayment + childPayment * 2;
    paymentBreakdown = [
      { label: "親（1人）から", points: parentPayment },
      { label: "子1人あたり（2人）", points: childPayment },
      { label: "合計受取", points: winningPoints, total: true },
    ];
  }

  return {
    winningPoints,
    paymentBreakdown,
    winType,
    han,
    baseHan,
    yaku,
    doraCount,
    uraDoraCount,
    akaDoraCount,
    yakumanMultiplier,
    winnerIsParent,
    paymentEach: winType === "tsumo" && winnerIsParent ? payments.parentTsumo * baseMultiplier : 0,
    parentPayment: winType === "tsumo" && !winnerIsParent ? payments.childTsumoParent * baseMultiplier : 0,
    childPayment: winType === "tsumo" && !winnerIsParent ? payments.childTsumoChild * baseMultiplier : 0,
  };
}

function updateScorePreview() {
  const result = calculateRoundResult();
  const preview = panel.querySelector("#score-preview");
  if (!preview) return;
  if (!result) {
    const handTarget = maxHandSize - (ponTileIds.length + kanTileIds.length + ankanTileIds.length) * 3;
    const message = selectedHand.length < handTarget
      ? `手牌を${handTarget}枚${ponTileIds.length + kanTileIds.length + ankanTileIds.length ? "（面子を除く）" : ""}選ぶと、役と翻数を自動判定します。`
      : getHandDecompositions().length
        ? "成立役が見つかりません。和了形か、リーチなどの状況設定を確認してください。"
        : "手牌が3面子1雀頭の形になっていません。牌の選択を確認してください。";
    preview.innerHTML = `<p class="empty-state">${message}</p>`;
    return;
  }

  const yakuSummary = result.yaku.map(([name, value]) => `${escapeHtml(name)}（${escapeHtml(value)}）`).join("、");
  const limitName = result.yakumanMultiplier >= 3 ? "トリプル役満"
    : result.yakumanMultiplier === 2 ? "ダブル役満"
      : result.yakumanMultiplier === 1 ? "役満"
        : result.han >= 11 ? "三倍満"
          : result.han >= 8 ? "倍満"
            : result.han >= 6 ? "跳満"
              : result.han >= 5 ? "満貫" : "通常手";
  const hanSummary = result.yakumanMultiplier
    ? `役満 ${result.yakumanMultiplier}倍。ドラ ${result.doraCount}枚・裏ドラ ${result.uraDoraCount}枚・赤ドラ ${result.akaDoraCount}枚。`
    : `役 ${result.baseHan}翻 ＋ ドラ ${result.doraCount}枚 ＋ 裏ドラ ${result.uraDoraCount}枚 ＋ 赤ドラ ${result.akaDoraCount}枚 → 計 ${result.han}翻。`;
  preview.innerHTML = `
    <div class="score-result">
      <div class="score-metric han-metric"><span>合計翻数</span><strong class="han-total">${result.han}翻</strong><span class="hand-limit">${limitName}</span></div>
      <div class="score-metric"><span>自分の獲得点</span><strong class="score-positive">${formatScore(result.winningPoints)} 点</strong></div>
      <p class="helper-text">成立役: ${yakuSummary}。${hanSummary}</p>
      <div class="score-payments">
        <h4>支払い内訳</h4>
        <ul>${result.paymentBreakdown.map((item) => `<li class="${item.total ? "is-total" : ""}"><span>${escapeHtml(item.label)}</span><strong>${formatScore(item.points)} 点</strong></li>`).join("")}</ul>
      </div>
    </div>
  `;
}

function renderScorebook() {
  const totals = getPlayerTotals();
  return `
    <section class="score-section" aria-labelledby="scorebook-heading">
      <div class="section-heading">
        <h3 id="scorebook-heading">対局記録</h3>
        <p class="section-description">プレイヤーを4人登録すると、計算した和了点をラウンドごとに記録できます。</p>
      </div>
      ${totals.length < 4 ? `
        <form class="add-player-form" id="add-player-form">
          <label class="visually-hidden" for="player-name">プレイヤー名</label>
          <input class="text-input" id="player-name" name="name" maxlength="24" placeholder="プレイヤー名" required>
          <button class="primary-button" type="submit">追加</button>
        </form>` : `<p class="helper-text">プレイヤーは4人登録済みです。</p>`}
      ${totals.length ? `
        <div class="score-table-wrap"><table class="score-table">
          <thead><tr><th scope="col">プレイヤー</th><th scope="col">累計</th><th scope="col">操作</th></tr></thead>
          <tbody>${totals.map((player) => `<tr><th scope="row">${escapeHtml(player.name)}</th><td class="total-cell">${formatScore(player.total)} 点</td><td><button class="remove-button" type="button" data-remove-player="${escapeHtml(player.id)}">削除</button></td></tr>`).join("")}</tbody>
        </table></div>
        ${scoreState.rounds.length ? `<h4 class="round-history-heading">ラウンド履歴</h4><ol class="round-history">${scoreState.rounds.map((round, index) => `<li><strong>${index + 1}局</strong><span>${escapeHtml(round.summary ?? "記録済み")}</span></li>`).join("")}</ol>` : `<p class="empty-state">まだラウンド記録がありません。</p>`}
      ` : `<p class="empty-state">プレイヤーを登録して記録を始めましょう。</p>`}
    </section>`;
}

function recordRound() {
  if (scoreState.players.length !== 4) {
    window.alert("ラウンドを記録するには、プレイヤーを4人登録してください。");
    return;
  }
  const result = calculateRoundResult();
  if (!result) return;
  const winnerId = panel.querySelector("#round-winner")?.value;
  const payerId = panel.querySelector("#round-payer")?.value;
  const parentId = panel.querySelector("#round-parent")?.value;
  if (!winnerId || (result.winType === "ron" && (!payerId || payerId === winnerId))) {
    window.alert("和了者と放銃者を選択してください。");
    return;
  }
  if ((winnerId === parentId) !== result.winnerIsParent) {
    window.alert("自分の立場と親の選択が一致するようにしてください。");
    return;
  }
  const scores = Object.fromEntries(scoreState.players.map(({ id }) => [id, 0]));
  scores[winnerId] += result.winningPoints;
  if (result.winType === "ron") {
    scores[payerId] -= result.winningPoints;
  } else {
    const others = scoreState.players.filter(({ id }) => id !== winnerId);
    if (result.winnerIsParent) {
      others.forEach(({ id }) => { scores[id] -= result.paymentEach; });
    } else {
      others.forEach((player) => {
        const amount = player.id === parentId ? result.parentPayment : result.childPayment;
        scores[player.id] -= amount;
      });
    }
  }
  const winner = scoreState.players.find(({ id }) => id === winnerId);
  const payer = scoreState.players.find(({ id }) => id === payerId);
  scoreState.rounds.push({ scores, summary: `${winner.name} ${result.winType === "ron" ? `ロン（${payer.name}から）` : "ツモ"} +${formatScore(result.winningPoints)}点` });
  saveScoreState();
  render();
}

function renderHanajong(game) {
  const rules = `
    <div class="rules-accordion">
      <details>
        <summary>準備とゲームの進行</summary>
        <div class="details-content">
          <h4>準備</h4>
          <ul>
            <li>4人で遊びます。札は25種類が各4枚、合計100枚です。札の種類は、壱蕐から玖蕐までの9種類、一蓮から九蓮までの9種類、春夏秋冬、松竹梅です。</li>
            <li>各プレイヤーに万点棒1本・五千点棒2本・千点棒4本・百点棒10本（計25,000点）を配ります。</li>
            <li>親は札をよくシャッフルし、反時計回りに各プレイヤーへ4枚ずつ配ります。配られた札は各プレイヤーがさらにシャッフルし、伏せて札山にします。</li>
            <li>親はサイコロ2個を振ります。親の札山を基準に、出目の数だけ反時計回りに数えます。止まった札山の下から7枚を隣によけ、王札にします。</li>
            <li>王札を除いて残った札山の上から、親を基準に反時計回りで各4枚を2周配ります。続けて各1枚を2周配り、最後に親へもう1枚配ります。札山がなくなったら、その左隣の札山から配ります。</li>
          </ul>
          <h4>手番と札の取り方</h4>
          <ul>
            <li>親から始めます。親がディーラーの場合は、親が指定した人から始めます。ターンごとに時計回りで手番を交代します。</li>
            <li>手番の人は札山から1枚引き、手札から1枚選んで捨てます。誰もアクションしなければ、その捨て札は河に置かれ、右隣の人が続けます。</li>
            <li>引く札山は、配牌後に余った札山か、前のプレイヤーが引いた札山です。前の人が引いた札山がなくなったら、その左隣の札山から引き始めます。これ以外から引くとチョンボです。</li>
            <li>チョンボをした人は卓に千点を払い、引いた札を元の札山に戻して、その札山をよくシャッフルします。卓の点棒は、いずれかのプレイヤーがアガったとき、そのプレイヤーが受け取ります。</li>
            <li>打札と同じ柄・数の札を手札に2枚持っていれば、「ポン」と宣言して打札を取れます。手札の2枚と取った札を公開し、手札の右隣に置きます。ポンした人が1枚捨て、その人の右隣から次の手番を始めます。ポンした人の打札に対しても、ポンまたはロンできます。</li>
          </ul>
          <h4>アガリと親の継続</h4>
          <ul>
            <li>基本形は3面子（3枚1組）と1雀頭（2枚1組）で、役が1つ以上必要です（一部例外あり）。他プレイヤーの打札でアガるのがロン、札山から待ち札を引いてアガるのがツモです。ロン・ツモ自体は役ではありません。</li>
            <li>誰もアガらなければ流局です。親がアガるか、流局時に親があと1枚でアガれる状態なら親を継続します。それ以外は親の右隣の人に親が移ります。</li>
            <li>親が4人全員に回るか、誰かの点棒がなくなるとゲーム終了です。</li>
          </ul>
          <h4>用語</h4>
          <p>連華は同じ種類の数札を連番で揃えた面子です。字札では連華を作れず、9から1へもつながりません。異なる種類の数札を混ぜても連華にはなりません。同華は全く同じ種類の札3枚で作る面子です。捨て札を置く場所を河と呼びます。</p>
        </div>
      </details>
      <details>
        <summary>役一覧（門前／鳴き）</summary>
        <div class="details-content rules-table-wrap">
          <table class="score-table rules-table">
            <thead><tr><th scope="col">役</th><th scope="col">条件</th><th scope="col">門前</th><th scope="col">鳴き</th></tr></thead>
            <tbody>${hanajongYaku.map(([name, condition, closed, open]) => `
              <tr><th scope="row">${escapeHtml(name)}</th><td>${escapeHtml(condition)}</td><td>${escapeHtml(closed)}</td><td>${escapeHtml(open)}</td></tr>
            `).join("")}</tbody>
          </table>
        </div>
      </details>
      <details>
        <summary>華雀の札・役イラスト（27枚）</summary>
        <div class="details-content">
          <p>札の種類と数字が分かるよう、札名を付けて種類ごとに並べています。名前が付けにくい図柄には、絵の内容を記しています。</p>
          <div class="card-gallery hanajong-art-gallery" aria-label="華雀の札・役イラスト">
            ${hanajongNamedArt.map(({ file, label }) => {
              return `
                <figure class="illustrated-card hanajong-art">
                  <img src="pdf-images/${file}" alt="${escapeHtml(label)}" loading="lazy">
                  <figcaption>${escapeHtml(label)}</figcaption>
                </figure>
              `;
            }).join("")}
          </div>
        </div>
      </details>
      <details>
        <summary>点数表（ロン／ツモ）</summary>
        <div class="details-content rules-table-wrap">
          <table class="score-table rules-table">
            <thead><tr><th scope="col">翻</th><th scope="col">親ロン</th><th scope="col">親ツモ（子1人分）</th><th scope="col">子ロン</th><th scope="col">子ツモ（子）</th><th scope="col">子ツモ（親）</th></tr></thead>
            <tbody>${hanajongPayments.map((row) => `
              <tr><th scope="row">${escapeHtml(row.label)}</th><td>${formatScore(row.parentRon)}</td><td>${formatScore(row.parentTsumo)}</td><td>${formatScore(row.childRon)}</td><td>${formatScore(row.childTsumoChild)}</td><td>${formatScore(row.childTsumoParent)}</td></tr>
            `).join("")}</tbody>
          </table>
          <p class="helper-text">親ツモでは各子が表の点数を支払います。子ツモの合計支払額は、子2人分と親1人分の合計です。</p>
        </div>
      </details>
    </div>
  `;

  const calculator = `<fieldset class="input-group"><legend>和了条件</legend><div class="calculator-grid">
        <label>自分の立場<select class="text-input" id="winner-role"><option value="child">子</option><option value="parent">親</option></select></label>
        <label>和了方法<select class="text-input" id="win-type"><option value="ron">ロン</option><option value="tsumo">ツモ</option></select></label>
        <label>リーチ<select class="text-input" id="riichi-state"><option value="none">なし</option><option value="riichi">リーチ</option><option value="double">ダブルリーチ</option></select></label>
      </div></fieldset>
      <fieldset class="input-group"><legend>ドラ</legend><div class="calculator-grid dora-grid">
        <label>ドラの数<select class="text-input" id="dora-count">${Array.from({ length: 14 }, (_, index) => `<option value="${index}">${index}枚</option>`).join("")}</select></label>
        <label>裏ドラの数<select class="text-input" id="ura-dora-count">${Array.from({ length: 14 }, (_, index) => `<option value="${index}">${index}枚</option>`).join("")}</select></label>
        <label>赤ドラの数<select class="text-input" id="aka-dora-count">${Array.from({ length: 14 }, (_, index) => `<option value="${index}">${index}枚</option>`).join("")}</select></label>
      </div></fieldset>
      <fieldset class="context-options"><legend>状況による役</legend>
        <label><input id="context-ippatsu" type="checkbox"> 一発</label>
        <label><input id="context-haitei" type="checkbox"> ハイテイ（最後のツモ）</label>
        <label><input id="context-houtei" type="checkbox"> ホウテイ（最後の打牌でロン）</label>
        <label><input id="context-first-draw" type="checkbox"> 最初のツモでアガリ（天和／地和）</label>
      </fieldset>
      ${renderTilePicker()}
      <p class="helper-text calculator-note">面子・雀頭の形から判定できる役を自動計算します。リーチ、一発、ハイテイなど局の状況は該当項目を選んでください。ドラ・裏ドラ・赤ドラの枚数は入力してください。ドラは役にならないため、役を1つ以上成立させてください。</p>
      <div class="section-heading preview-heading"><h4>点数の増減（自動計算）</h4></div>
      <div id="score-preview" aria-live="polite"></div>
      ${scoreState.players.length === 4 ? `
        <div class="round-entry">
          <label>和了者<select class="text-input" id="round-winner">${renderPlayerOptions(scoreState.players, 0)}</select></label>
          <label>親<select class="text-input" id="round-parent">${renderPlayerOptions(scoreState.players, 0)}</select></label>
          <label>放銃者（ロン時）<select class="text-input" id="round-payer">${renderPlayerOptions(scoreState.players, 1)}</select></label>
          <button class="primary-button" id="record-round" type="button">この内容でラウンドを記録</button>
        </div>` : `<p class="helper-text round-entry-note">ラウンド記録にはプレイヤーを4人登録してください。</p>`}
      ${renderScorebook()}`;

  panel.innerHTML = `
    <div class="panel-heading">
      <div>
        <h2>${escapeHtml(game.name)}</h2>
        <p>4人で遊ぶ華雀のルールと点数計算</p>
      </div>
      <span class="game-icon" aria-hidden="true">${escapeHtml(game.icon)}</span>
    </div>
    <section class="content-card" aria-labelledby="rules-heading">
      <div class="section-heading"><h3 id="rules-heading">ルール</h3><p class="section-description">遊び方・役・点数表</p></div>
      ${rules}
    </section>
    <section class="content-card score-section" aria-labelledby="score-heading">
      <div class="section-heading">
        <h3 id="score-heading">点数計算</h3>
        <p class="section-description">和了時の手牌から役と翻数を自動判定して獲得点を計算します。</p>
      </div>
      ${calculator}
    </section>
  `;

  updateTilePicker();
  panel.querySelector("#add-player-form")?.addEventListener("submit", addPlayer);
  panel.querySelectorAll("[data-remove-player]").forEach((button) => {
    button.addEventListener("click", () => removePlayer(button.dataset.removePlayer));
  });
  panel.querySelector("#record-round")?.addEventListener("click", recordRound);
  ["#winner-role", "#win-type", "#riichi-state", "#context-ippatsu", "#context-haitei", "#context-houtei", "#context-first-draw", "#dora-count", "#ura-dora-count", "#aka-dora-count", "#round-winner", "#round-parent"].forEach((selector) => {
    panel.querySelector(selector)?.addEventListener("change", updateScorePreview);
  });
  updateScorePreview();
}

function addPlayer(event) {
  event.preventDefault();
  const nameInput = panel.querySelector("#player-name");
  const name = nameInput.value.trim();
  if (!name) return;
  if (scoreState.players.length >= 4) return;

  scoreState.players.push({
    id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
  });
  saveScoreState();
  render();
  panel.querySelector("#player-name")?.focus();
}

function removePlayer(playerId) {
  const player = scoreState.players.find((item) => item.id === playerId);
  if (!player) return;

  scoreState.players = scoreState.players.filter((item) => item.id !== playerId);
  scoreState.rounds = scoreState.rounds.map((round) => {
    const scores = { ...round.scores };
    delete scores[playerId];
    return { ...round, scores };
  });
  saveScoreState();
  render();
}

function saveRound() {
  const result = calculateRoundResult();
  if (!result) {
    window.alert("4人のプレイヤーと、正しい和了情報を選択してください。");
    return;
  }

  scoreState.rounds.push(result);
  saveScoreState();
  render();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    selectedGame = tab.dataset.game;
    render();
  });
});

document.addEventListener("keydown", (event) => {
  if (selectedGame !== "hanajong" || event.target.closest("input, textarea, select, [contenteditable='true']")) return;
  if (event.ctrlKey && event.key === "Backspace") {
    event.preventDefault();
    selectedHand = [];
    winningTileIndex = null;
    ponTileIds = [];
    kanTileIds = [];
    ankanTileIds = [];
    ponInputMode = false;
    kanInputMode = false;
    ankanInputMode = false;
    updateTilePicker();
  } else if (event.shiftKey && event.key.toLowerCase() === "d") {
    event.preventDefault();
    selectedHand = createRandomWinningHand();
    winningTileIndex = selectedHand.length - 1;
    ponTileIds = [];
    kanTileIds = [];
    ankanTileIds = [];
    ponInputMode = false;
    kanInputMode = false;
    ankanInputMode = false;
    updateTilePicker();
  }
});

render();
