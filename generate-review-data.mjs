import fs from "fs";

const tops = {
  top01: { name: "奶油蝴蝶結上衣", short: "奶油蝴蝶結", vibe: "溫柔學院", palette: "light", structure: "separate", volume: "soft", drama: 1 },
  top02: { name: "午夜藍連身洋裝", short: "午夜藍洋裝", vibe: "華麗夢幻", palette: "dark", structure: "full", volume: "ornate", drama: 3 },
  top03: { name: "幾何拼色上衣", short: "幾何拼色", vibe: "冷調個性", palette: "contrast", structure: "separate", volume: "sharp", drama: 3 },
  top04: { name: "青蘋果蝴蝶結上衣", short: "青蘋果上衣", vibe: "俏皮學院", palette: "fresh", structure: "separate", volume: "light", drama: 2 },
  top05: { name: "森林披肩連身裝", short: "森林披肩", vibe: "童話森林", palette: "earth", structure: "full", volume: "cape", drama: 3 },
  top06: { name: "霧橄欖澎袖上衣", short: "霧橄欖澎袖", vibe: "安靜氣質", palette: "earth", structure: "separate", volume: "soft", drama: 1 },
  top07: { name: "圍巾拼色連身裝", short: "圍巾拼色", vibe: "復古角色", palette: "warm", structure: "full", volume: "scarf", drama: 3 },
};

const bottoms = {
  "-": { name: "不搭下身", short: "單穿", type: "none", palette: "none", volume: "none", vibe: "留白", weight: 0 },
  bottom01: { name: "黑色流蘇短裙", short: "流蘇短裙", type: "short", palette: "dark", volume: "special", vibe: "戲劇", weight: 4 },
  bottom02: { name: "灰色百褶短裙", short: "灰短裙", type: "short", palette: "neutral", volume: "light", vibe: "學院", weight: 2 },
  bottom03: { name: "格紋短裙", short: "格紋短裙", type: "short", palette: "earth", volume: "light", vibe: "學院", weight: 3 },
  bottom04: { name: "淺色牛仔褲", short: "牛仔褲", type: "pants", palette: "cool", volume: "straight", vibe: "日常", weight: 2 },
  bottom05: { name: "灰綠直筒褲", short: "灰綠長褲", type: "pants", palette: "earth", volume: "straight", vibe: "安靜", weight: 2 },
  bottom06: { name: "青綠寬褲", short: "青綠寬褲", type: "pants", palette: "fresh", volume: "wide", vibe: "跳色", weight: 3 },
  bottom07: { name: "森林長裙", short: "森林長裙", type: "long", palette: "earth", volume: "long", vibe: "森系", weight: 4 },
  bottom08: { name: "米灰層次長裙", short: "米灰長裙", type: "long", palette: "neutral", volume: "layered", vibe: "成熟", weight: 4 },
  bottom09: { name: "橄欖層次長裙", short: "橄欖長裙", type: "long", palette: "earth", volume: "layered", vibe: "成熟", weight: 4 },
  bottom10: { name: "米色寬直筒褲", short: "米色長褲", type: "pants", palette: "light", volume: "straight", vibe: "乾淨", weight: 2 },
};

const shoes = {
  "-": { name: "不搭鞋子", short: "無鞋", vibe: "留白", weight: 0, sharpness: 0 },
  shoes01: { name: "棕色樂福鞋", short: "樂福鞋", vibe: "學院", weight: 2, sharpness: 2 },
  shoes02: { name: "綁帶厚底鞋", short: "厚底鞋", vibe: "甜感", weight: 3, sharpness: 1 },
  shoes03: { name: "深藍繞帶鞋", short: "繞帶鞋", vibe: "夢幻", weight: 2, sharpness: 2 },
  shoes04: { name: "奶油短靴", short: "短靴", vibe: "造型", weight: 3, sharpness: 3 },
  shoes05: { name: "深色低調鞋", short: "低調鞋", vibe: "收斂", weight: 1, sharpness: 1 },
  shoes06: { name: "灰黑個性鞋", short: "個性鞋", vibe: "個性", weight: 2, sharpness: 3 },
};

const socks = {
  "-": { name: "不搭襪子", short: "無襪", vibe: "俐落", weight: 0 },
  socks01: { name: "白襪", short: "白襪", vibe: "學院", weight: 1 },
  socks02: { name: "紅襪", short: "紅襪", vibe: "跳色", weight: 2 },
};

const accessoryParts = {
  acc01: { name: "銀白頭飾", role: "head", vibe: "精緻", weight: 2 },
  acc02: { name: "玫瑰狐狸", role: "story", vibe: "敘事", weight: 2 },
  acc03: { name: "睡狐抱枕", role: "story", vibe: "柔和", weight: 2 },
};

const pairScores = {
  top01: { "-": 5, bottom01: 4, bottom02: 9, bottom03: 10, bottom04: 7, bottom05: 7, bottom06: 6, bottom07: 5, bottom08: 7, bottom09: 6, bottom10: 8 },
  top02: { "-": 10, bottom01: 3, bottom02: 4, bottom03: 4, bottom04: 3, bottom05: 3, bottom06: 2, bottom07: 4, bottom08: 4, bottom09: 4, bottom10: 3 },
  top03: { "-": 5, bottom01: 8, bottom02: 6, bottom03: 5, bottom04: 9, bottom05: 8, bottom06: 8, bottom07: 5, bottom08: 6, bottom09: 7, bottom10: 8 },
  top04: { "-": 5, bottom01: 4, bottom02: 9, bottom03: 10, bottom04: 6, bottom05: 5, bottom06: 8, bottom07: 4, bottom08: 5, bottom09: 5, bottom10: 7 },
  top05: { "-": 10, bottom01: 4, bottom02: 4, bottom03: 4, bottom04: 3, bottom05: 4, bottom06: 3, bottom07: 5, bottom08: 5, bottom09: 5, bottom10: 4 },
  top06: { "-": 5, bottom01: 5, bottom02: 8, bottom03: 7, bottom04: 10, bottom05: 9, bottom06: 7, bottom07: 7, bottom08: 8, bottom09: 9, bottom10: 9 },
  top07: { "-": 9, bottom01: 4, bottom02: 5, bottom03: 5, bottom04: 4, bottom05: 4, bottom06: 4, bottom07: 6, bottom08: 7, bottom09: 8, bottom10: 5 },
};

const topIds = Object.keys(tops);
const bottomIds = Object.keys(bottoms);
const shoeIds = Object.keys(shoes);
const sockIds = Object.keys(socks);
const accessoryKeys = ["-", "acc01", "acc02", "acc03", "acc01,acc02", "acc01,acc03", "acc02,acc03", "acc01,acc02,acc03"];

function hashSeed(seed) {
  let hash = 2166136261;
  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function pick(list, key, salt) {
  const hash = hashSeed(`${key}:${salt}`);
  return list[hash % list.length];
}

function accessoryList(key) {
  if (key === "-") return [];
  return key.split(",").map((id) => accessoryParts[id]).filter(Boolean);
}

function accessoryName(key) {
  const items = accessoryList(key).map((item) => item.name);
  if (items.length === 0) return "無配件";
  return items.join("、");
}

function comboKey(look) {
  return `${look.topId}|${look.bottomId}|${look.shoesId}|${look.socksId}|${look.accessoryKey}`;
}

function comboLabel(look) {
  const parts = [tops[look.topId].short];
  if (look.bottomId !== "-") parts.push(bottoms[look.bottomId].short);
  if (look.socksId !== "-") parts.push(socks[look.socksId].short);
  if (look.shoesId !== "-") parts.push(shoes[look.shoesId].short);
  if (look.accessoryKey !== "-") parts.push(accessoryName(look.accessoryKey));
  return parts.join("＋");
}

function paletteFit(top, bottom) {
  if (bottom.type === "none") return 0;
  if (top.palette === "earth" && ["earth", "neutral", "light"].includes(bottom.palette)) return 2;
  if (top.palette === "light" && ["light", "neutral", "earth"].includes(bottom.palette)) return 2;
  if (top.palette === "fresh" && ["fresh", "neutral", "light", "earth"].includes(bottom.palette)) return 2;
  if (top.palette === "contrast" && ["cool", "earth", "light"].includes(bottom.palette)) return 2;
  if (top.palette === "dark" && ["none", "dark", "neutral", "earth"].includes(bottom.palette)) return 1;
  if (top.palette === "warm" && ["earth", "neutral"].includes(bottom.palette)) return 1;
  return -1;
}

function silhouetteFit(top, bottom) {
  if (top.structure === "full") return bottom.type === "none" ? 3 : -3;
  if (bottom.type === "none") return -2;
  if (top.volume === "soft" && ["short", "pants"].includes(bottom.type)) return 2;
  if (top.volume === "light" && ["short", "pants"].includes(bottom.type)) return 2;
  if (top.volume === "sharp" && bottom.type === "pants") return 2;
  if (top.volume === "sharp" && bottom.type === "short") return 1;
  if (top.volume === "soft" && bottom.type === "long") return 0;
  if (bottom.volume === "special") return -1;
  return 0;
}

function shoeFit(top, bottom, shoe) {
  if (shoe.short === "無鞋") return -2;
  if (top.vibe.includes("學院") && shoe.vibe === "學院") return 2;
  if (top.vibe.includes("夢幻") && ["夢幻", "甜感"].includes(shoe.vibe)) return 2;
  if (top.vibe.includes("個性") && ["個性", "造型"].includes(shoe.vibe)) return 2;
  if (top.vibe.includes("童話") && ["夢幻", "造型"].includes(shoe.vibe)) return 1;
  if (top.vibe.includes("氣質") && ["收斂", "學院"].includes(shoe.vibe)) return 2;
  if (top.vibe.includes("復古") && ["造型", "個性"].includes(shoe.vibe)) return 1;
  if (bottom.type === "long" && shoe.weight >= 3) return 1;
  return 0;
}

function sockFit(top, bottom, sock, shoe) {
  if (sock.short === "無襪") return 0;
  if (sock.short === "白襪" && (bottom.type === "short" || shoe.vibe === "學院")) return 2;
  if (sock.short === "紅襪" && ["俏皮學院", "復古角色"].includes(top.vibe)) return 1;
  if (sock.short === "紅襪" && top.vibe === "安靜氣質") return -1;
  return 0;
}

function accessoryFit(top, accessoryKey) {
  const count = accessoryList(accessoryKey).length;
  if (count === 0) return 0;
  if (top.structure === "full" && count >= 2) return -1;
  if (top.vibe === "童話森林" && accessoryKey === "acc01,acc03") return 3;
  if (top.vibe === "華麗夢幻" && accessoryKey.includes("acc01")) return 2;
  if (top.vibe.includes("學院") && accessoryKey === "acc01") return 2;
  if (top.vibe === "復古角色" && count >= 2) return 2;
  return 1;
}

function scoreFor(look) {
  const top = tops[look.topId];
  const bottom = bottoms[look.bottomId];
  const shoe = shoes[look.shoesId];
  const sock = socks[look.socksId];

  const basePair = pairScores[look.topId][look.bottomId] ?? 5;
  let score = 48 + basePair * 4;
  score += paletteFit(top, bottom) * 2;
  score += silhouetteFit(top, bottom) * 3;
  score += shoeFit(top, bottom, shoe) * 2;
  score += sockFit(top, bottom, sock, shoe);
  score += accessoryFit(top, look.accessoryKey) * 2;

  if (look.bottomId !== "-" && look.shoesId !== "-") score += 1;
  if (look.bottomId !== "-" && look.socksId !== "-") score += 1;
  if (look.shoesId === "-" && look.socksId !== "-") score -= 2;
  if (look.bottomId === "-" && top.structure === "separate") score -= 4;
  if (look.bottomId !== "-" && top.structure === "full") score -= 5;

  return Math.max(35, Math.min(98, score));
}

function titleFor(look, score) {
  const key = comboKey(look);
  const band = score >= 90 ? "高完成" : score >= 80 ? "順眼完成" : score >= 65 ? "風格成形" : "還能再調";
  const pieces = [tops[look.topId].short];
  if (look.bottomId !== "-") pieces.push(bottoms[look.bottomId].short);
  if (look.shoesId !== "-") pieces.push(shoes[look.shoesId].short);
  return `${band} ${pieces.join(" x ")}`;
}

function openingFor(look, score) {
  const top = tops[look.topId];
  const key = comboKey(look);
  const high = [
    `這套 ${comboLabel(look)} 的整體完成度很高，視線從上到下都有被收在同一個氣氛裡。`,
    `把 ${comboLabel(look)} 放在一起看時，主體、腳邊和收尾都有接上，所以不像湊件數，更像真的定好的一套。`,
    `這組 ${comboLabel(look)} 不只單件順眼，整體也有把 ${top.vibe} 那條線拉完整。`,
  ];
  const mid = [
    `這套 ${comboLabel(look)} 已經有明確方向，整體看得出是在往 ${top.vibe} 版本收。`,
    `現在這組 ${comboLabel(look)} 的主題算清楚，雖然還有細節能再修，但不會像各穿各的。`,
    `${comboLabel(look)} 站在一起時已經有整體感，至少主體不會散成幾段。`,
  ];
  const low = [
    `這套 ${comboLabel(look)} 不是沒有想法，只是整體還沒有完全收進同一套語氣裡。`,
    `把 ${comboLabel(look)} 放在一起後，能看出方向，但還留著幾個彼此拉扯的點。`,
    `${comboLabel(look)} 現在比較像過程版，整體還差最後那一步才會真的變漂亮。`,
  ];
  return pick(score >= 88 ? high : score >= 72 ? mid : low, key, "opening");
}

function bodyFor(look) {
  const top = tops[look.topId];
  const bottom = bottoms[look.bottomId];
  const key = comboKey(look);

  if (top.structure === "full" && look.bottomId === "-") {
    return pick([
      `${top.name} 本身就把下擺和角色輪廓做進衣服裡，單穿時最能保住那個完整主體。`,
      `${top.name} 的本體量感夠完整，不再疊別的下身時，原本的輪廓會最乾淨。`,
      `這件 ${top.name} 靠自己就能撐出完整造型，所以單穿版本反而最俐落。`,
    ], key, "body-full-solo");
  }

  if (top.structure === "full" && look.bottomId !== "-") {
    return pick([
      `${top.name} 外面再加 ${bottom.name} 之後，原本該一口氣落下去的輪廓被截斷，畫面會變得偏厚。`,
      `這組最大的扣分點就是 ${bottom.name} 壓進 ${top.name} 下面，讓本來完整的主體被分成兩層。`,
      `${top.name} 已經夠完整了，現在多加 ${bottom.name} 反而會把主角感打散。`,
    ], key, "body-full-extra");
  }

  const pairing = pairScores[look.topId][look.bottomId] ?? 5;
  const strong = [
    `${top.name} 配上 ${bottom.name} 之後，主體方向很明確，比例也比較像真的穿得出去的版本。`,
    `${bottom.name} 有把 ${top.name} 的語氣接住，所以整套不是單件各自漂亮，而是放在一起也順。`,
    `${top.name} 和 ${bottom.name} 站在一起時，重心有落下去，整體看起來比較完整。`,
  ];
  const medium = [
    `${top.name} 和 ${bottom.name} 至少有接到一部分，但還不到毫無違和的程度。`,
    `${bottom.name} 沒有把 ${top.name} 完全拖壞，只是整體驚喜感還不夠高。`,
    `這組 ${top.name} 加 ${bottom.name} 能成立，但氣氛沒有完全鎖死。`,
  ];
  const weak = [
    `${top.name} 跟 ${bottom.name} 放在一起時，語氣有點分開，所以整體會比較像硬湊。`,
    `${bottom.name} 沒有真的把 ${top.name} 接起來，重心會卡在中間那一段。`,
    `這組 ${top.name} 配 ${bottom.name} 的問題不在單件，而是在一起時沒有完全變成同一套。`,
  ];
  return pick(pairing >= 9 ? strong : pairing >= 7 ? medium : weak, key, "body-separate");
}

function feetFor(look) {
  const key = comboKey(look);
  const shoe = shoes[look.shoesId];
  const sock = socks[look.socksId];

  if (look.shoesId !== "-" && look.socksId !== "-") {
    return pick([
      `${shoe.name} 加上 ${sock.name} 之後，腳邊不只補完整度，也會直接改變這套落下去的節奏。`,
      `腳下用了 ${shoe.name} 配 ${sock.name}，整體比只有主體衣服時更像完成版。`,
      `${shoe.name} 和 ${sock.name} 一起進場後，下盤有被真正收住，不會讓視線突然斷掉。`,
    ], key, "feet-both");
  }

  if (look.shoesId !== "-") {
    return pick([
      `${shoe.name} 一加進來，這套就不再只是主體試搭，而是開始有完整造型的味道。`,
      `腳邊用了 ${shoe.name} 之後，下盤有被撐住，整體自然比無鞋版本穩很多。`,
      `${shoe.name} 在這組裡不是配角，它直接決定這套最後會走向收斂還是造型感。`,
    ], key, "feet-shoe");
  }

  if (look.socksId !== "-") {
    return pick([
      `只有 ${sock.name} 沒有鞋子時，腳邊雖然多了細節，但整體還是停在半成品感。`,
      `${sock.name} 單獨出現會讓腳邊有存在感，不過沒有鞋子時仍然少最後一個收尾。`,
      `這版先放了 ${sock.name}，可是不搭鞋子時，下半身完成度還是會被壓住。`,
    ], key, "feet-sock");
  }

  return pick([
    "這版腳邊完全留白，所以整體好不好看會很直接回到主體搭配本身。",
    "沒有鞋襪時，整套的優缺點會被看得最清楚，因為沒有其他細節幫忙分散注意力。",
    "腳邊留空的版本最誠實，整體感夠不夠穩一眼就看得出來。",
  ], key, "feet-none");
}

function accessoryFor(look) {
  const key = comboKey(look);
  const items = accessoryList(look.accessoryKey);

  if (items.length === 0) {
    return pick([
      "這版不靠配件幫忙撐場，所以分數幾乎全看服裝本身能不能站住。",
      "沒有外加配件時，整體更乾淨，但問題也完全藏不住。",
      "空配件版的好處是俐落，缺點是整體只要沒收好就會立刻暴露。",
    ], key, "acc-none");
  }

  if (items.length === 1) {
    return pick([
      `${items[0].name} 這種單一配件比較像收尾，補到人物感但不會一下子把畫面塞滿。`,
      `加上 ${items[0].name} 之後，整體會比素版更像真的設計過的搭配。`,
      `${items[0].name} 剛好把這套往角色造型推一步，但還沒有推到過滿。`,
    ], key, "acc-one");
  }

  return pick([
    `${accessoryName(look.accessoryKey)} 一起上時，這套會明顯從穿搭往角色造型走，所以整體秩序更重要。`,
    `多配件版本像 ${accessoryName(look.accessoryKey)} 這樣的組法，記憶點很高，但只要主體弱一點就會顯得滿。`,
    `${accessoryName(look.accessoryKey)} 讓這套的敘事感整個被打開，所以整體會比單配件版本更有角色感。`,
  ], key, "acc-many");
}

function closeFor(look, score) {
  const key = comboKey(look);
  const label = comboLabel(look);
  const high = [
    `所以 ${label} 會進高分，不是因為某一件特別亮，而是整套真的有合在一起。`,
    `${label} 這組最後能拿高分，關鍵就是全身站在一起時有完整感，不像單件拼裝。`,
    `這套高分的理由很直接，${label} 看起來像一套已經定稿的造型。`,
  ];
  const mid = [
    `所以 ${label} 會落在偏高分區，整體已經漂亮，只差最後一點收束。`,
    `${label} 現在已經算好看，分數不上不下的地方在於它還留著少量可以再修的空間。`,
    `這組 ${label} 大方向是對的，因此分數不低，但還沒到最強版本。`,
  ];
  const low = [
    `所以 ${label} 這組分數拉不上去，問題不是零件少，而是整體還沒完全融合。`,
    `${label} 目前被扣分的原因很明確，就是全身放在一起時還不夠像同一套。`,
    `最後 ${label} 會停在這個分數，主要還是因為完整感不夠緊。`,
  ];
  return pick(score >= 88 ? high : score >= 72 ? mid : low, key, "close");
}

function detailsFor(look, score) {
  const key = comboKey(look);
  const top = tops[look.topId];
  const bottom = bottoms[look.bottomId];
  const shoe = shoes[look.shoesId];
  const sock = socks[look.socksId];
  const accText = accessoryName(look.accessoryKey);

  const exactLogic = top.structure === "full" && look.bottomId !== "-"
    ? [
        `${top.name} 已經是完整造型，再壓上 ${bottom.name} 之後，最大問題就是兩層下擺互相搶位置，輪廓不再乾淨。`,
        `${top.name} 本來靠自己就能把主體撐滿，現在多了 ${bottom.name}，畫面反而容易卡在腰下那一段。`,
        `${top.name} 外面再加 ${bottom.name} 時，原本一體成形的主角感會被切開，這就是這組最主要的扣分點。`,
      ]
    : [
        `${comboLabel(look)} 放在一起之後，重點是整體氣氛有沒有收成同一條線。`,
        `${comboLabel(look)} 這版最吃的是全身站在一起時的完整感，而不是局部單看漂不漂亮。`,
        `${comboLabel(look)} 現在要看的就是主體、腳邊和配件能不能一起把風格撐住。`,
      ];

  const exactState = [
    look.bottomId === "-"
      ? `${top.name} 這次維持單穿或上身主體版本，視覺焦點會集中在衣服本身，整體成立與否特別吃主體輪廓。`
      : `${bottom.name} 在這組裡不是配角，它直接決定 ${top.name} 最後會偏乾淨、偏日常，還是偏戲劇。`,
    look.shoesId === "-"
      ? "腳邊沒有鞋子時，整體完成度一定會比有完整收尾的版本再低一截。"
      : `${shoe.name} 把下盤的語氣定下來了，所以這雙鞋在這組裡的分量其實很高。`,
    look.socksId === "-"
      ? "這版沒有再用襪子補節奏，因此整體比例好不好看會被直接放大。"
      : `${sock.name} 不是附帶細節而已，它會影響這套腳邊到底是走俐落還是走存在感。`,
    look.accessoryKey === "-"
      ? "沒有配件時最能看底子，整體感夠不夠強完全藏不住。"
      : `${accText} 把人物感帶進來後，這套就不能只看衣服順不順，而要看整個角色畫面有沒有成立。`,
  ];

  const scoreLine = score >= 88
    ? [
        "它最後能進高分區，是因為主體、腳邊和收尾三段都有接上。",
        "這種分數代表你看到的不是湊齊零件，而是真的有整體完成感。",
        "高分的來源就是全身關係大致都對了，沒有明顯哪一段掉出來。",
      ]
    : score >= 72
      ? [
          "它已經有整體，但還保留一些可以再收得更準的地方。",
          "目前這套算順眼，只是還沒有到毫無死角的狀態。",
          "整體方向成立，不過細節之間還沒有完全鎖死。",
        ]
      : [
          "它現在比較像方向版，離最漂亮的完成稿還差最後幾個關鍵銜接。",
          "分數上不去的原因很直接，就是整體感還是比單件魅力弱了一點。",
          "這套的問題不在缺件，而是在一起之後還沒有真的變成同一套語言。",
        ];

  return [
    pick(exactLogic, key, "detail-logic"),
    ...exactState,
    pick(scoreLine, key, "detail-score"),
  ].join("");
}

function summaryFor(look, score) {
  return [openingFor(look, score), bodyFor(look), feetFor(look), accessoryFor(look), closeFor(look, score)].join("");
}

const reviews = {};

for (const topId of topIds) {
  for (const bottomId of bottomIds) {
    for (const shoesId of shoeIds) {
      for (const socksId of sockIds) {
        for (const accessoryKey of accessoryKeys) {
          const look = { topId, bottomId, shoesId, socksId, accessoryKey };
          const score = scoreFor(look);
          reviews[comboKey(look)] = {
            title: titleFor(look, score),
            score,
            summary: summaryFor(look, score),
            details: detailsFor(look, score),
          };
        }
      }
    }
  }
}

fs.writeFileSync("review-data.js", `window.OUTFIT_REVIEW_LOOKUP = ${JSON.stringify(reviews)};\n`, "utf8");
console.log(`generated=${Object.keys(reviews).length}`);
