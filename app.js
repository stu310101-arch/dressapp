(() => {
  const ACCESSORY_CATEGORY = "配件";
  const CATEGORY_META = [
    { key: ACCESSORY_CATEGORY, label: "配件" },
    { key: "上衣", label: "上衣" },
    { key: "下身裝扮", label: "下身裝扮" },
    { key: "鞋子", label: "鞋子" },
    { key: "襪子", label: "襪子" },
  ];
  const CATEGORIES = CATEGORY_META.map((item) => item.key);
  const MULTI_SELECT_CATEGORIES = new Set([ACCESSORY_CATEGORY]);
  const SINGLE_SELECT_CATEGORIES = CATEGORIES.filter((category) => !MULTI_SELECT_CATEGORIES.has(category));
  const TOP_CATEGORY = CATEGORY_META[1].key;
  const BOTTOM_CATEGORY = CATEGORY_META[2].key;
  const SHOES_CATEGORY = CATEGORY_META[3].key;
  const SOCKS_CATEGORY = CATEGORY_META[4].key;
  const CATEGORY_Z_INDEX = {
    襪子: 10,
    鞋子: 15,
    下身裝扮: 20,
    上衣: 40,
    [ACCESSORY_CATEGORY]: 50,
  };
  const OUTFIT_REVIEW_LOOKUP = window.OUTFIT_REVIEW_LOOKUP || {};
  const FULL_LOOK_TOP_IDS = new Set(["top02"]);
  const TOP_META = {
    top01: {
      label: "奶油蝴蝶結上衣",
      mode: "separate",
      vibe: "溫柔學院",
      pairings: {
        bottom01: [9, "和灰色短裙搭起來很乾淨，比例也很順。"],
        bottom02: [10, "格紋短裙能把學院感直接拉滿，方向很準。"],
        bottom03: [8, "奶油色和柔和短裙放在一起很穩，氣質夠完整。"],
        bottom04: [7, "配牛仔褲能穿，但精緻感會降一點。"],
        bottom05: [6, "長褲比較收斂，會把視覺重心留給上衣。"],
        bottom06: [6, "修身褲偏安全，整體不會出錯但少了驚喜。"],
        bottom07: [5, "長裙量體偏大，會把上衣的細節吃掉。"],
        bottom08: [8, "柔色長裙能把上衣的溫柔氣質接住。"],
        bottom09: [7, "沉穩長裙讓風格變成熟，算是穩定版。"],
        bottom10: [4, "流蘇下身和這件上衣的語氣差得太多。"],
      },
    },
    top02: {
      label: "午夜藍連身洋裝",
      mode: "separate",
      vibe: "華麗夢幻",
      summary: "這件本身就是連身造型，重點在上半身裝飾和裙擺層次，不適合再另外疊下身。",
    },
    top03: {
      label: "幾何拼色上衣",
      mode: "separate",
      vibe: "冷調個性",
      pairings: {
        bottom01: [7, "短裙能讓上衣當主角，整體節奏還算俐落。"],
        bottom02: [7, "格紋能接住一點學院感，但風格不會完全融合。"],
        bottom03: [7, "柔和短裙能中和上衣的銳利感，屬於安全搭法。"],
        bottom04: [8, "牛仔褲最自然，像真的會穿出門。"],
        bottom05: [8, "俐落長褲能把幾何感撐起來，畫面很穩。"],
        bottom06: [8, "修身褲讓上衣線條更清楚，方向正確。"],
        bottom07: [6, "長裙太有存在感，會把上衣弄得有點孤單。"],
        bottom08: [7, "柔色長裙能柔化上衣，但記憶點會轉弱。"],
        bottom09: [7, "沉穩長裙和上衣有成熟感，但少一點銳氣。"],
        bottom10: [6, "流蘇下身有情緒，上衣反而顯得太理性。"],
      },
    },
    top04: {
      label: "青蘋果蝴蝶結上衣",
      mode: "separate",
      vibe: "俏皮學院",
      pairings: {
        bottom01: [8, "配短裙很直接，整體有校園感。"],
        bottom02: [10, "格紋短裙最能接住這件上衣的活力。"],
        bottom03: [7, "柔和短裙能穿，但會把活力壓下來一點。"],
        bottom04: [6, "牛仔褲偏日常，少了造型亮點。"],
        bottom05: [6, "長褲把上衣的俏皮感壓掉一部分。"],
        bottom06: [6, "修身褲穩是穩，但沒有把上衣特色放大。"],
        bottom07: [4, "這件上衣太輕快，接不太住成熟長裙。"],
        bottom08: [5, "柔色長裙和上衣的語氣有點分開。"],
        bottom09: [5, "沉穩長裙讓上衣顯得過於跳。"],
        bottom10: [5, "暗色流蘇下身和上衣的活潑感衝突明顯。"],
      },
    },
    top05: {
      label: "森林披肩連身裝",
      mode: "separate",
      vibe: "童話森林",
      summary: "這件已經把披肩和下擺做進同一套了，應該當成完整角色裝來看。",
    },
    top06: {
      label: "霧橄欖澎袖上衣",
      mode: "separate",
      vibe: "安靜氣質",
      pairings: {
        bottom01: [8, "短裙會讓整體乾淨，而且有一點文氣。"],
        bottom02: [7, "格紋短裙能搭，但重點會比較分散。"],
        bottom03: [8, "柔和短裙和這件上衣相處得很好。"],
        bottom04: [10, "牛仔褲意外很合，安靜又自然。"],
        bottom05: [8, "長褲能把整體收得很穩。"],
        bottom06: [8, "修身褲和澎袖形成平衡，比例不錯。"],
        bottom07: [7, "長裙版本比較偏氣質路線，算穩定。"],
        bottom08: [9, "柔色長裙能把這件上衣的安靜感放大。"],
        bottom09: [8, "沉穩長裙會讓造型更成熟。"],
        bottom10: [6, "流蘇下身有點搶戲，會把上衣的安靜感吃掉。"],
      },
    },
    top07: {
      label: "圍巾拼色連身裝",
      mode: "full",
      vibe: "復古角色",
      summary: "這件下半身結構已經做進衣服本體，配下身會重疊，畫面會怪。",
    },
  };
  const SHOE_META = {
    shoes01: { score: 3, text: "樂福鞋把整體收得很完整，也最容易成立。" },
    shoes02: { score: 1, text: "鞋子不搶戲，視線會留在服裝本身。" },
    shoes03: { score: 2, text: "鞋型比較輕，能讓畫面節奏更靈活。" },
    shoes04: { score: 4, text: "短靴會讓造型感更完整，腳邊存在感明顯。" },
    shoes05: { score: 1, text: "鞋子偏穩定，主要作用是把整體收乾淨。" },
    shoes06: { score: 3, text: "鞋子本身有個性，會把記憶點往上拉。" },
  };
  const SOCK_META = {
    "-": { score: 0, text: "沒有搭襪子時，腳邊會比較俐落。" },
    socks01: { score: 2, text: "白襪能補完整度，尤其在短裙或學院搭法裡很好用。" },
    socks02: { score: 1, text: "紅襪會把視線往下拉，個性更強，但也更挑整體。" },
  };
  const ACCESSORY_META = {
    "-": { score: 0, text: "沒有額外配件時，整體會比較直接靠衣服本身說話。" },
    acc01: { score: 3, text: "頭飾能把人物完成度拉高，氣質更完整。" },
    acc02: { score: 2, text: "玫瑰和狐狸讓畫面更像角色插圖，存在感很強。" },
    acc03: { score: 2, text: "睡狐配件會把氣氛拉得更柔和。" },
    "acc01,acc02": { score: 4, text: "花環和玫瑰狐狸一起上時，故事感會明顯變強。" },
    "acc01,acc03": { score: 4, text: "花環和睡狐一起時，會很像童話角色。" },
    "acc02,acc03": { score: 3, text: "雙配件角色感夠強，但也更考驗主體服裝。" },
    "acc01,acc02,acc03": { score: 4, text: "全配件版本最有舞台感，畫面也最滿。" },
  };

  const WARDROBE_DATA = {
    baseModel: {
      front: "./模特兒/model.PNG",
    },
    items: [
      { id: "top01", name: "上衣1", category: "上衣", front: "./裝扮/上衣/上衣1.png" },
      { id: "top02", name: "上衣2", category: "上衣", front: "./裝扮/上衣/上衣2.png" },
      { id: "top03", name: "上衣3", category: "上衣", front: "./裝扮/上衣/上衣3.png", customTransform: "scale(0.85) translate(7px, 79px)" },
      { id: "top04", name: "上衣4", category: "上衣", front: "./裝扮/上衣/上衣4.png", customTransform: "scale(0.97) translate(0px, 48px)" },
      { id: "top05", name: "上衣5", category: "上衣", front: "./裝扮/上衣/上衣5.png", customTransform: "scale(0.82) translate(11px, 105px)" },
      { id: "top06", name: "上衣6", category: "上衣", front: "./裝扮/上衣/上衣6.png", customTransform: "scale(0.82) translate(11px, 112px)" },
      { id: "top07", name: "上衣7", category: "上衣", front: "./裝扮/上衣/上衣7.png", customTransform: "scale(0.82) translate(11px, 112px)" },

      { id: "bottom01", name: "下身1", category: "下身裝扮", front: "./裝扮/下身裝扮/裙子1.png" },
      { id: "bottom02", name: "下身2", category: "下身裝扮", front: "./裝扮/下身裝扮/裙子2.png" },
      { id: "bottom03", name: "下身3", category: "下身裝扮", front: "./裝扮/下身裝扮/裙子3.png" },
      { id: "bottom04", name: "下身4", category: "下身裝扮", front: "./裝扮/下身裝扮/褲子2.png" },
      { id: "bottom05", name: "下身5", category: "下身裝扮", front: "./裝扮/下身裝扮/褲子3.png" },
      { id: "bottom06", name: "下身6", category: "下身裝扮", front: "./裝扮/下身裝扮/褲子4.png", customTransform: "scale(0.97) translate(0px, 48px)" },
      { id: "bottom07", name: "下身7", category: "下身裝扮", front: "./裝扮/下身裝扮/褲子5.png" },
      { id: "bottom08", name: "下身8", category: "下身裝扮", front: "./裝扮/下身裝扮/褲子6.png", customTransform: "scale(0.85) translate(10px, 100px)" },
      { id: "bottom09", name: "下身9", category: "下身裝扮", front: "./裝扮/下身裝扮/褲子7.png", customTransform: "scale(0.85) translate(10px, 100px)" },
      { id: "bottom10", name: "下身10", category: "下身裝扮", front: "./裝扮/下身裝扮/褲子1.png" },

      { id: "shoes01", name: "鞋子1", category: "鞋子", front: "./裝扮/鞋子/鞋子1.png" },
      { id: "shoes02", name: "鞋子2", category: "鞋子", front: "./裝扮/鞋子/鞋子2.png", customTransform: "scale(0.97) translate(7px, 20px)" },
      { id: "shoes03", name: "鞋子3", category: "鞋子", front: "./裝扮/鞋子/鞋子3.png" },
      { id: "shoes04", name: "鞋子4", category: "鞋子", front: "./裝扮/鞋子/鞋子4.png", customTransform: "scale(0.85) translate(9px, 46.5px)" },
      { id: "shoes05", name: "鞋子5", category: "鞋子", front: "./裝扮/鞋子/鞋子5.png", customTransform: "scale(0.85) translate(9px, 46.5px)" },
      { id: "shoes06", name: "鞋子6", category: "鞋子", front: "./裝扮/鞋子/鞋子6.png", customTransform: "scale(0.85) translate(9px, 46.5px)" },

      { id: "socks01", name: "襪子1", category: "襪子", front: "./裝扮/襪子/襪子1.png" },
      { id: "socks02", name: "襪子2", category: "襪子", front: "./裝扮/襪子/襪子2.png", customTransform: "scale(0.97) translate(9px, 14px)" },

      { id: "acc01", name: "頭飾1", category: ACCESSORY_CATEGORY, front: "./裝扮/配件/頭飾1.png", customTransform: "" },
      { id: "acc02", name: "配件1", category: ACCESSORY_CATEGORY, front: "./裝扮/配件/配件1.png", customTransform: "scale(2) translate(0px, -180px)" },
      { id: "acc03", name: "配件2", category: ACCESSORY_CATEGORY, front: "./裝扮/配件/配件2.png", customTransform: "scale(0.8) translate(-80px, 40px)" },
    ],
  };

  const state = {
    wardrobe: { baseModel: { front: "" }, items: [] },
    equippedSingle: new Map(),
    equippedAccessories: new Set(),
    itemsById: new Map(),
    reviewLookup: {},
    categoryButtons: new Map(),
    activeCategory: CATEGORIES[0],
    lastBaseFrontSrc: "",
    reviewResult: null,
  };

  function setStatus(text = "") {
    const element = document.getElementById("status");
    if (element) element.textContent = text;
  }

  function safeLocaleCompare(a, b) {
    try {
      return a.localeCompare(b, "zh-Hant");
    } catch {
      return a.localeCompare(b);
    }
  }

  function normalizeItem(raw, idx) {
    const item = raw && typeof raw === "object" ? raw : {};
    const category = CATEGORIES.includes(String(item.category || "").trim()) ? String(item.category || "").trim() : null;
    if (!category) return null;

    return {
      id: String(item.id || `${category}-${idx}`),
      name: String(item.name || `單品${idx + 1}`),
      category,
      images: { front: item.front || "" },
      customTransform: item.customTransform || "",
      customObjectFit: item.customObjectFit || "",
      customObjectPosition: item.customObjectPosition || "",
      customWidth: item.customWidth || "",
      customHeight: item.customHeight || "",
      customTop: item.customTop || "",
      customRight: item.customRight || "",
      customBottom: item.customBottom || "",
      customLeft: item.customLeft || "",
    };
  }

  function normalizeWardrobe(raw) {
    const base = raw?.baseModel || {};
    const items = Array.isArray(raw?.items) ? raw.items : [];
    return {
      baseModel: { front: base.front || "" },
      items: items.map(normalizeItem).filter(Boolean),
    };
  }

  function initEquipped() {
    state.equippedSingle = new Map();
    SINGLE_SELECT_CATEGORIES.forEach((category) => state.equippedSingle.set(category, null));
    state.equippedAccessories = new Set();
  }

  function rebuildIndex() {
    state.itemsById = new Map();
    state.wardrobe.items.forEach((item) => state.itemsById.set(item.id, item));
  }

  function getTopId() {
    return state.equippedSingle.get(TOP_CATEGORY);
  }

  function isFullLookTop(topId = getTopId()) {
    return FULL_LOOK_TOP_IDS.has(topId);
  }

  function normalizeOutfitSelection() {}

  function getAccessoryKey() {
    return Array.from(state.equippedAccessories).sort().join(",") || "-";
  }

  function getTopMeta(topId = getTopId()) {
    return TOP_META[topId] || null;
  }

  function getCategoryItems(category) {
    return state.wardrobe.items
      .filter((item) => item.category === category)
      .sort((a, b) => safeLocaleCompare(a.name, b.name));
  }

  function getOverlaySelector(category, itemId = null) {
    const categorySelector = `img[data-category="${CSS.escape(category)}"]`;
    return itemId ? `${categorySelector}[data-item-id="${CSS.escape(itemId)}"]` : categorySelector;
  }

  function applyOverlayStyle(img, item, zIndex) {
    img.style.zIndex = String(zIndex);
    img.style.objectFit = item.customObjectFit || "";
    img.style.objectPosition = item.customObjectPosition || "";
    img.style.width = item.customWidth || "";
    img.style.height = item.customHeight || "";
    img.style.top = item.customTop || "";
    img.style.right = item.customRight || "";
    img.style.bottom = item.customBottom || "";
    img.style.left = item.customLeft || "";
    img.style.transform = item.customTransform || "";
  }

  function applyBaseImage(src) {
    const image = document.querySelector(".model-base");
    const placeholder = document.querySelector('.model-placeholder[data-kind="base"]');
    if (!image || !placeholder) return;

    if (!src) {
      image.removeAttribute("src");
      image.style.display = "none";
      placeholder.style.display = "grid";
      state.lastBaseFrontSrc = "";
      return;
    }

    if (state.lastBaseFrontSrc === src && image.getAttribute("src")) return;

    image.style.display = "block";
    placeholder.style.display = "none";
    image.onerror = () => {
      image.style.display = "none";
      placeholder.style.display = "grid";
    };
    image.src = src;
    state.lastBaseFrontSrc = src;
  }

  function updateModelOverlays() {
    const overlays = document.querySelector(".model-overlays");
    if (!overlays) return;

    SINGLE_SELECT_CATEGORIES.forEach((category) => {
      const existing = overlays.querySelector(getOverlaySelector(category));
      const itemId = state.equippedSingle.get(category);
      const item = itemId ? state.itemsById.get(itemId) : null;

      if (!item?.images?.front) {
        if (existing) existing.remove();
        return;
      }

      const img = existing || document.createElement("img");
      if (!existing) {
        img.alt = "";
        img.dataset.category = category;
        img.addEventListener("error", () => img.remove());
        overlays.appendChild(img);
      }

      if (img.getAttribute("src") !== item.images.front) img.src = item.images.front;
      applyOverlayStyle(img, item, CATEGORY_Z_INDEX[category] || 0);
    });

    const accessories = Array.from(state.equippedAccessories)
      .map((itemId) => state.itemsById.get(itemId))
      .filter(Boolean)
      .sort((a, b) => safeLocaleCompare(a.name, b.name));

    const keepIds = new Set(accessories.map((item) => item.id));
    overlays.querySelectorAll(getOverlaySelector(ACCESSORY_CATEGORY)).forEach((img) => {
      if (!keepIds.has(img.dataset.itemId || "")) img.remove();
    });

    accessories.forEach((item, index) => {
      const existing = overlays.querySelector(getOverlaySelector(ACCESSORY_CATEGORY, item.id));
      const img = existing || document.createElement("img");
      if (!existing) {
        img.alt = "";
        img.dataset.category = ACCESSORY_CATEGORY;
        img.dataset.itemId = item.id;
        img.addEventListener("error", () => img.remove());
        overlays.appendChild(img);
      }

      if (img.getAttribute("src") !== item.images.front) img.src = item.images.front;
      applyOverlayStyle(img, item, (CATEGORY_Z_INDEX[ACCESSORY_CATEGORY] || 0) + index);
    });
  }

  function updateCategoryFiltersActiveState() {
    state.categoryButtons.forEach((button, category) => {
      const active = state.activeCategory === category;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", active ? "true" : "false");
    });
  }

  function setActiveCategory(category) {
    state.activeCategory = category;
    updateCategoryFiltersActiveState();
    renderShelf();
  }

  function initCategoryFilters() {
    const root = document.getElementById("categoryFilters");
    if (!root) return;

    root.innerHTML = "";
    state.categoryButtons = new Map();

    CATEGORY_META.forEach(({ key, label }) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "subcategory-button category-filter-button";
      button.textContent = label;
      button.dataset.category = key;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-selected", "false");
      button.addEventListener("click", () => setActiveCategory(key));
      root.appendChild(button);
      state.categoryButtons.set(key, button);
    });
  }

  function createSlotThumb(src, fallbackText = "預覽") {
    const thumb = document.createElement("div");
    thumb.className = "slot-thumb";

    if (!src) {
      const fallback = document.createElement("div");
      fallback.className = "slot-thumb__fallback";
      fallback.textContent = fallbackText;
      thumb.appendChild(fallback);
      return thumb;
    }

    const image = document.createElement("img");
    image.alt = "";
    image.src = src;
    image.loading = "lazy";
    image.addEventListener("error", () => {
      image.remove();
      const fallback = document.createElement("div");
      fallback.className = "slot-thumb__fallback";
      fallback.textContent = fallbackText;
      thumb.appendChild(fallback);
    });
    thumb.appendChild(image);
    return thumb;
  }

  function renderShelf() {
    const root = document.getElementById("wardrobeItems");
    if (!root) return;

    root.innerHTML = "";
    const category = state.activeCategory;
    const items = getCategoryItems(category);
    const equippedSingleId = state.equippedSingle.get(category);

    const shelf = document.createElement("section");
    shelf.className = "shelf";

    const header = document.createElement("div");
    header.className = "shelf-header";

    const title = document.createElement("div");
    title.className = "shelf-title";

    const titleName = document.createElement("div");
    titleName.className = "shelf-title__name";
    titleName.textContent = CATEGORY_META.find((item) => item.key === category)?.label || category;

    const titleMeta = document.createElement("div");
    titleMeta.className = "shelf-title__meta";
    titleMeta.textContent = `共 ${items.length} 件`;

    title.appendChild(titleName);
    title.appendChild(titleMeta);
    header.appendChild(title);

    const slots = document.createElement("div");
    slots.className = "shelf-slots";

    items.forEach((item) => {
      const selected = MULTI_SELECT_CATEGORIES.has(category)
        ? state.equippedAccessories.has(item.id)
        : equippedSingleId === item.id;

      const card = document.createElement("button");
      card.type = "button";
      card.className = `slot-card${selected ? " is-selected" : ""}`;
      card.setAttribute("aria-pressed", selected ? "true" : "false");
      card.appendChild(createSlotThumb(item.images.front));

      const name = document.createElement("div");
      name.className = "slot-name";
      name.textContent = item.name;
      card.appendChild(name);

      card.addEventListener("click", () => toggleEquip(item.category, item.id));
      slots.appendChild(card);
    });

    shelf.appendChild(header);
    shelf.appendChild(slots);
    root.appendChild(shelf);
  }

  function getEquippedEntries() {
    const entries = [];

    SINGLE_SELECT_CATEGORIES.forEach((category) => {
      const itemId = state.equippedSingle.get(category);
      if (itemId) entries.push({ category, itemId });
    });

    Array.from(state.equippedAccessories)
      .map((itemId) => state.itemsById.get(itemId))
      .filter(Boolean)
      .sort((a, b) => safeLocaleCompare(a.name, b.name))
      .forEach((item) => entries.push({ category: ACCESSORY_CATEGORY, itemId: item.id }));

    return entries;
  }

  function renderEquippedChips() {
    const root = document.getElementById("equippedChips");
    if (!root) return;

    root.innerHTML = "";
    const entries = getEquippedEntries();

    if (!entries.length) {
      const empty = document.createElement("div");
      empty.className = "equipped-empty";
      empty.textContent = "尚未穿上任何單品";
      root.appendChild(empty);
      return;
    }

    entries.forEach(({ category, itemId }) => {
      const item = state.itemsById.get(itemId);
      const chip = document.createElement("div");
      chip.className = "equipped-chip";
      chip.tabIndex = 0;
      chip.setAttribute("role", "button");

      const label = document.createElement("span");
      label.className = "equipped-chip__label";
      label.textContent = `${CATEGORY_META.find((meta) => meta.key === category)?.label || category}:`;

      const value = document.createElement("span");
      value.className = "equipped-chip__value";
      value.textContent = item ? item.name : itemId;

      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "equipped-chip__remove";
      remove.setAttribute("aria-label", "移除單品");
      remove.textContent = "×";
      remove.addEventListener("click", (event) => {
        event.stopPropagation();
        if (category === ACCESSORY_CATEGORY) {
          state.equippedAccessories.delete(itemId);
        } else {
          state.equippedSingle.set(category, null);
        }
        clearReviewResult();
        renderEquippedChips();
        if (state.activeCategory === category) renderShelf();
        updateModelOverlays();
      });

      chip.addEventListener("click", () => setActiveCategory(category));
      chip.appendChild(label);
      chip.appendChild(value);
      chip.appendChild(remove);
      root.appendChild(chip);
    });
  }

  function clearReviewResult() {
    state.reviewResult = null;
    closeReviewModal();
    renderReviewCard();
  }

  function openReviewModal() {
    const modal = document.getElementById("reviewModal");
    if (modal) modal.hidden = false;
  }

  function closeReviewModal() {
    const modal = document.getElementById("reviewModal");
    if (modal) modal.hidden = true;
  }

  function toggleEquip(category, itemId) {
    if (MULTI_SELECT_CATEGORIES.has(category)) {
      if (state.equippedAccessories.has(itemId)) {
        state.equippedAccessories.delete(itemId);
      } else {
        state.equippedAccessories.add(itemId);
      }
    } else {
      const current = state.equippedSingle.get(category);
      state.equippedSingle.set(category, current === itemId ? null : itemId);
      if (category === TOP_CATEGORY) normalizeOutfitSelection();
    }

    clearReviewResult();
    renderEquippedChips();
    renderShelf();
    updateModelOverlays();
    setStatus("");
  }

  function clearAll() {
    SINGLE_SELECT_CATEGORIES.forEach((category) => state.equippedSingle.set(category, null));
    state.equippedAccessories.clear();
    renderEquippedChips();
    renderShelf();
    updateModelOverlays();
    clearReviewResult();
    setStatus("");
  }

  function randomWear() {
    const topItems = getCategoryItems(TOP_CATEGORY);
    const topPick = topItems[Math.floor(Math.random() * topItems.length)];
    state.equippedSingle.set(TOP_CATEGORY, topPick ? topPick.id : null);
    normalizeOutfitSelection();

    const bottomItems = getCategoryItems(BOTTOM_CATEGORY);
    const bottomPick = bottomItems[Math.floor(Math.random() * bottomItems.length)];
    state.equippedSingle.set(BOTTOM_CATEGORY, bottomPick ? bottomPick.id : null);

    const shoeItems = getCategoryItems(SHOES_CATEGORY);
    const shoePick = shoeItems[Math.floor(Math.random() * shoeItems.length)];
    state.equippedSingle.set(SHOES_CATEGORY, shoePick ? shoePick.id : null);

    const sockItems = getCategoryItems(SOCKS_CATEGORY);
    const sockPick = Math.floor(Math.random() * (sockItems.length + 1));
    state.equippedSingle.set(SOCKS_CATEGORY, sockPick === 0 ? null : sockItems[sockPick - 1].id);

    state.equippedAccessories.clear();
    const accessories = [...getCategoryItems(ACCESSORY_CATEGORY)].sort(() => Math.random() - 0.5);
    const count = Math.floor(Math.random() * (accessories.length + 1));
    accessories.slice(0, count).forEach((item) => state.equippedAccessories.add(item.id));

    renderEquippedChips();
    renderShelf();
    updateModelOverlays();
    clearReviewResult();
    setStatus("");
  }

  function getLookState() {
    return {
      topId: state.equippedSingle.get(TOP_CATEGORY) || "-",
      bottomId: state.equippedSingle.get(BOTTOM_CATEGORY) || "-",
      shoesId: state.equippedSingle.get(SHOES_CATEGORY) || "-",
      socksId: state.equippedSingle.get(SOCKS_CATEGORY) || "-",
      accessoryKey: getAccessoryKey(),
    };
  }

  function getAccessoryCount(accessoryKey) {
    if (!accessoryKey || accessoryKey === "-") return 0;
    return accessoryKey.split(",").length;
  }

  function hashCombo(seed) {
    let hash = 2166136261;
    for (let index = 0; index < seed.length; index += 1) {
      hash ^= seed.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function pickCombo(list, key, salt = "") {
    const hash = hashCombo(`${key}:${salt}`);
    return list[hash % list.length];
  }

  function getExactLookKey(look) {
    return [look.topId, look.bottomId, look.shoesId, look.socksId, look.accessoryKey].join("|");
  }

  function getAccessoryKeys() {
    const accessoryIds = getCategoryItems(ACCESSORY_CATEGORY).map((item) => item.id);
    const keys = ["-"];

    for (let mask = 1; mask < 1 << accessoryIds.length; mask += 1) {
      const picked = accessoryIds.filter((_, index) => (mask & (1 << index)) !== 0);
      keys.push(picked.join(","));
    }

    return keys;
  }

  function getFullLookBase(topId) {
    if (topId === "top02") return [88, "這件午夜藍連身裝本身就有主角感，亮點集中在胸前裝飾和不規則裙擺。"];
    if (topId === "top05") return [86, "森林披肩這套的量感和角色感都很完整，視線自然會先落在肩線和前片層次。"];
    if (topId === "top07") return [84, "圍巾拼色這套靠配色和輪廓吃飯，只要細節搭對就會很有角色造型感。"];
    return [82, "這套本身已經有完整輪廓，接下來看的就是細節是否有把主體再往上推。"];
  }

  function getLookTitle(topMeta, lookKey) {
    const titleMap = {
      top01: ["奶油學院版", "柔亮蝴蝶結版", "乾淨短裙線"],
      top02: ["午夜藍主角版", "藍調定裝版", "舞台感洋裝版"],
      top03: ["冷調拼色版", "幾何個性版", "理性穿搭線"],
      top04: ["青蘋果俏皮版", "跳色學院版", "活潑蝴蝶結版"],
      top05: ["森林角色版", "披肩童話版", "森系定裝版"],
      top06: ["霧橄欖靜謐版", "安靜氣質版", "柔霧澎袖版"],
      top07: ["復古角色版", "圍巾敘事版", "拼色定裝版"],
    };
    return pickCombo(titleMap[topMeta?.id] || ["本套搭配"], lookKey, "title");
  }

  function getShoeExactNote(topId, bottomId, shoesId, lookKey) {
    const notes = {
      shoes01: [
        "樂福鞋把這套的節奏收得很穩，讓視線不會從腳邊散掉。",
        "這雙樂福鞋是很聰明的選法，會把整體往完整穿搭而不是散件堆疊帶。",
        "腳上用了樂福鞋之後，整套會顯得比較有整理過的感覺。",
      ],
      shoes02: [
        "這雙鞋存在感比較低，所以整體成敗會更落在服裝主體本身。",
        "鞋子沒有搶前面那層戲，算是把重點老實留給衣服。",
        "腳邊這樣收法偏克制，適合主體本來就夠明顯的造型。",
      ],
      shoes03: [
        "鞋型偏輕，會讓整體節奏比較靈活，不會壓住上半身。",
        "這雙鞋把腳邊做得比較輕盈，畫面會少一點厚重感。",
        "腳下這樣選會讓整套看起來比較有呼吸，而不是一路往下墜。",
      ],
      shoes04: [
        "短靴一上去，整套造型感會立刻被拉出來，腳邊也更有存在感。",
        "這雙短靴把整體往角色穿搭推了一步，所以氣勢會更明確。",
        "腳邊換成短靴後，整套的下盤終於有撐住，不會顯得頭重腳輕。",
      ],
      shoes05: [
        "鞋子本身走穩定路線，所以更像是在幫整體收尾而不是搶記憶點。",
        "這雙鞋不會帶太多戲，但能把整套邊緣修得乾淨。",
        "腳邊這樣處理偏保守，安全是安全，驚喜感就少一點。",
      ],
      shoes06: [
        "這雙鞋本身帶個性，會讓整套的記憶點往腳邊再延伸一段。",
        "鞋子有自己的角色感，所以整體會顯得比較像完整造型而不是單純穿衣。",
        "腳上這個選擇很有存在感，能把原本平的畫面再推高一些。",
      ],
    };
    return pickCombo(notes[shoesId] || ["鞋子沒有明顯破壞整體。"], `${topId}|${bottomId}|${lookKey}`, "shoe-note");
  }

  function getSockExactNote(topId, bottomId, socksId, lookKey) {
    const notes = {
      "-": [
        "沒有加襪子時，腳踝露出來會讓整體更俐落，但也比較直接，遮不住比例問題。",
        "這版把襪子留空，畫面會比較乾淨，所以服裝本身好不好看會被看得更清楚。",
        "不搭襪子的處理讓節奏更快，適合本來就靠輪廓撐得住的搭配。",
      ],
      socks01: [
        "白襪補進去之後，整套會更像真的搭過，而不是只把衣服穿上去。",
        "白襪有把腳邊銜接起來，尤其在短裙和學院感搭法裡會特別有用。",
        "這雙白襪幫忙補到了完整度，讓視線往下走時不會突然斷掉。",
      ],
      socks02: [
        "紅襪會把注意力往腳邊拉，所以整套會更有個性，但也比較挑整體平衡。",
        "這雙紅襪不是低調選項，它會主動參與整套氣氛，所以成功時很亮，失手時也很明顯。",
        "腳邊用紅襪之後，整體語氣會更鮮明，等於把下半身也推成一個重點。",
      ],
    };
    return pickCombo(notes[socksId] || notes["-"], `${topId}|${bottomId}|${lookKey}`, "sock-note");
  }

  function getAccessoryExactNote(topId, accessoryKey, lookKey) {
    const notes = {
      "-": [
        "這版完全靠主體服裝說話，所以整套的重心會很誠實地落在衣服輪廓上。",
        "沒有外加配件時，整體乾淨很多，等於把評分重點全部押在服裝本身。",
        "這種空配件版本最容易看出搭配底子，因為沒有其他東西幫忙轉移注意力。",
      ],
      acc01: [
        "頭飾一加進來，角色完成度明顯高一階，整套會比較像設計過的造型。",
        "這顆頭飾把上半身重心收得更完整，會讓人物感比素穿時更清楚。",
        "頭飾的加入剛好補到上半部空間，整體完成度會比無配件版本高。",
      ],
      acc02: [
        "玫瑰和狐狸的存在感很強，所以整套會從穿搭往角色插圖再走一步。",
        "這組配件不是小修飾，它會直接改變畫面的故事感，所以整體印象會更鮮明。",
        "一旦加上玫瑰狐狸，這套就不只是衣服搭得順不順，而是整個場景感都被帶出來了。",
      ],
      acc03: [
        "睡狐把這套的氣氛拉柔了一點，所以整體會更偏療癒而不是銳利。",
        "這顆配件幫整套加了一層情緒，讓原本單純的穿搭多了一點敘事感。",
        "睡狐放進來後，畫面會多一種陪伴感，整套氣質也會更軟一些。",
      ],
      "acc01,acc02": [
        "花環加玫瑰狐狸後，這套的故事感被打開了，畫面會明顯變得更滿。",
        "這組雙配件會把人物感直接做出來，所以整體很有戲，但也很考驗主體能不能撐住。",
        "雙配件一起上時，整套會從穿搭升級成角色造型，視覺存在感很高。",
      ],
      "acc01,acc03": [
        "花環和睡狐放在一起時，整套會很像童話角色，柔和感會變得特別完整。",
        "這組配件讓整體更夢，會把人設感直接鋪出來，不再只是單純穿衣。",
        "頭飾加睡狐這個組合很會造氣氛，整套會顯得比較有世界觀。",
      ],
      "acc02,acc03": [
        "這組雙配件把角色感疊得很高，所以整體不能只靠安全搭法，主體一定要站得住。",
        "玫瑰狐狸和睡狐一起出現後，畫面戲很多，成功時會很有記憶點。",
        "雙配件版本的重點不是精緻，而是整體有沒有把故事性一起接住。",
      ],
      "acc01,acc02,acc03": [
        "全配件版本會把整體推到最滿，所以看起來最有舞台感，也最容易變成主題造型。",
        "配件全開時，整套已經不是日常搭配，而是完整角色展示，記憶點也會最強。",
        "這種滿配版本如果撐得住，效果會很強；撐不住時也最容易顯得擁擠。",
      ],
    };
    return pickCombo(notes[accessoryKey] || notes["-"], `${topId}|${lookKey}`, "acc-note");
  }

  function getExactSummary(topMeta, look, score, baseComment, lookKey) {
    const openingMap = {
      top01: [
        "這套把奶油色那種乾淨感穿得很完整，視線會自然停在胸前蝴蝶結和上半身輪廓。",
        "這組搭法最討喜的地方，是上身的溫柔感沒有被下面拖亂，整體看起來很順。",
        "這一套的重點不在華麗，而是在乾淨、乖巧又有整理過的氣質。",
      ],
      top02: [
        "這件藍色連身裝本來就很有主角氣勢，所以整體好不好看，關鍵在你有沒有把它的華麗感接穩。",
        "這套藍色造型不是靠小細節取勝，而是靠整體輪廓和氣場一起成立。",
        "藍色這件一穿上去，整體主題其實就定了，後面的鞋襪配件只是決定它會走向精緻還是過滿。",
      ],
      top03: [
        "這套拼色上衣的存在感很強，所以整體成敗其實很看下面有沒有接住它的理性線條。",
        "這一套不是甜美型搭配，重點反而在節奏夠不夠利落、重心有沒有亂掉。",
        "拼色這件一旦搭得對，會很有個性；搭得不對就容易變成彼此搶戲。",
      ],
      top04: [
        "這套最明顯的優點是活力有被保住，看起來不會把那個青蘋果色的輕快感壓掉。",
        "這件上衣本來就很跳，所以整體要成立，下面和腳邊都不能太笨重。",
        "這套的語氣偏俏皮，重點不是成熟，而是有沒有把那種乾淨活潑的感覺留住。",
      ],
      top05: [
        "森林披肩這套本來就很像角色裝，整體好不好看，決勝點在於細節有沒有幫它把童話感往上推。",
        "這件不是拿來隨便混搭的，它自己的世界觀很強，所以後面加的東西都得跟著那個氣氛走。",
        "這套一開始就有敘事感，真正要看的反而是鞋襪和配件有沒有把那個森林角色感接完整。",
      ],
      top06: [
        "這套最舒服的地方是安靜感有留住，不會因為多加幾樣東西就把氣質弄髒。",
        "霧橄欖這件其實很吃收法，只要整體過度用力，就會把它原本最好看的沉靜感磨掉。",
        "這套不靠誇張取勝，重點反而是每個地方都不要搶著說話，整體自然就會高級。",
      ],
      top07: [
        "這套復古拼色本來就不是普通上衣，它靠的是整體角色感和配色記憶點一起成立。",
        "這件圍巾拼色很看整體故事感，所以每個細節都像在幫它補人設。",
        "這一套如果搭得好，會比一般穿搭更像完整造型；如果搭得差，就很容易散掉。",
      ],
    };

    const scoreLayer = score >= 90
      ? [
          "這次最難得的是，整體不只成立，還有把每個重點收進同一個方向裡。",
          "這套不是單件好看而已，而是真的有把整體美感做出來。",
          "它強的地方在於重心、比例和氣氛都沒有互相打架，所以看起來特別完整。",
        ]
      : score >= 82
        ? [
            "整體已經很順了，只差一點就會到那種一眼記住的程度。",
            "這套的完成度夠高，雖然不是最炸的版本，但整體確實是漂亮的。",
            "整體看起來有經過整理，主次分明，所以不會讓人覺得亂。",
          ]
        : [
            "它有自己的方向，但有些細節還在互相拉扯，所以整體感沒有完全鎖住。",
            "這套不是沒想法，只是目前還有一兩個地方會把整體美感往外拉開。",
            "看得出你在找風格，不過這版還差一點才會變成真正完整的一套。",
          ];

    const shapeLayer = topMeta.mode === "full"
      ? [
          "因為衣服本體已經自帶完整輪廓，所以後面所有變化都會直接影響它的主角感是變強還是被分散。",
          "這種完整造型沒有上下身分工可以救場，所以鞋襪和配件一改，整體印象就會整個換掉。",
          "本體量感夠大的時候，細節其實更難配，因為每一樣加上去都會被看得很清楚。",
        ]
      : [
          "這套屬於分件式搭配，所以真正漂亮的地方，是上衣、下身和腳邊有沒有連成同一條線。",
          "分件式搭法最怕的是上下身像各穿各的，還好這套至少有把主體方向定下來。",
          "這種兩件式的評分重點不是單看哪件漂亮，而是它們放在一起之後有沒有互相成就。",
        ];

    const closingLayer = [
      "這一版的整體印象會比單看某一件衣服更重要，因為美感其實是靠整套一起撐起來的。",
      "最後讓這套成立的，不是哪個單品本身多強，而是你有沒有把全身的語氣收成同一套。",
      "所以這套的分數不是零件相加，而是整體穿出來之後那個完成感到底夠不夠漂亮。",
    ];

    return [
      pickCombo(openingMap[topMeta?.id] || ["這套有自己的主題。"], lookKey, "opening"),
      baseComment,
      pickCombo(scoreLayer, lookKey, "score-layer"),
      pickCombo(shapeLayer, lookKey, "shape-layer"),
      pickCombo(closingLayer, lookKey, "closing"),
    ].join("");
  }

  function getExactDetails(topMeta, look, score, lookKey) {
    const { topId, bottomId, shoesId, socksId, accessoryKey } = look;
    const accessoryCount = getAccessoryCount(accessoryKey);
    const bottomState =
      topId === "top02" && bottomId !== "-"
        ? [
            "這件藍色洋裝本來就自帶完整下擺，你再加下身後，視覺重點會卡在腰以下，畫面容易變厚。",
            "藍色這件其實不缺下半身量感，所以多穿一件下身時，輪廓會變得不夠俐落。",
            "這套最大的問題就在多加了下身，讓原本該乾淨落下的輪廓被中途截斷。",
          ]
        : topMeta.mode === "full"
          ? [
              "這類完整造型最怕的是後加細節把主體打散，所以整套評分會特別看重重心有沒有穩住。",
              "因為衣服本體已經很完整，所以後面每個選擇都不是補空，而是在決定它會變精緻還是變擁擠。",
              "完整造型沒有上下身互相救場的空間，所以每個細節都會直接改變整體完成感。",
            ]
          : [
              "這套的評分核心還是上下身放在一起後的整體感，而不是誰單看比較好看。",
              "分件式搭配最重要的是上衣、下身和腳邊是不是在說同一種語氣，這比單件亮不亮眼更重要。",
              "這套不是零件相加，而是整體站在一起時有沒有真的像同一套穿搭。",
            ];

    const finishState =
      shoesId === "shoes04" || shoesId === "shoes06"
        ? [
            "腳邊這次有把造型撐起來，所以整體看起來會更像完成版，而不是只先把衣服套上去。",
            "鞋子的存在感有跟主體接上，這會讓整套下盤比較穩。",
            "這次腳邊不是配角，反而有幫整體把輪廓往下收住。",
          ]
        : socksId !== "-"
          ? [
              "襪子的加入有把細節補齊，所以整體不會停在半套感。",
              "腳邊多這一層後，畫面銜接會比較完整，整體看起來也比較像真的搭過。",
              "這次腳邊不是空的，會讓視線往下走時更順。",
            ]
          : [
              "這版腳邊處理得比較乾淨，所以主體衣服本身的好壞會被看得更清楚。",
              "沒有太多腳邊裝飾時，整體就更吃本體比例和輪廓。",
              "這種收法比較直接，優點是乾淨，缺點是沒地方遮整體問題。",
            ];

    const accessoryState =
      accessoryCount >= 3
        ? [
            "滿配件版本的重點不是堆得多，而是堆滿後還能不能保持整體秩序。",
            "配件全開時，整套會直接往主題造型走，所以一旦平衡抓對，記憶點會非常強。",
            "這種滿配最吃整體控制，因為每個視覺焦點都在搶位置。",
          ]
        : accessoryCount >= 2
          ? [
              "雙配件以上的版本會更有戲，所以評分時也會更看整體有沒有失焦。",
              "配件一多之後，這套就不只是穿搭，而是開始往角色造型靠。",
              "這種多配件版本最怕的不是不夠華麗，而是華麗得沒有秩序。",
            ]
          : accessoryCount === 1
            ? [
                "單一配件的作用比較像收尾，能不能加分，重點就在它有沒有剛好補到空位。",
                "只放一個配件時，整體會比滿配更好控制，所以細節只要接對就很容易加分。",
                "單配件版看起來通常比較清爽，因此主體和配件之間的相性會特別明顯。",
              ]
            : [
                "沒有用配件幫忙轉移注意力時，整體好不好看會完全回到服裝本體身上。",
                "空配件版本最能看出底子，因為畫面裡沒有其他東西幫主體分擔壓力。",
                "這版不靠配件救場，所以整體是否順眼會顯得更直接。",
              ];

    const scoreState =
      score >= 90
        ? [
            "這也是為什麼這一套最後會高分，因為它不是某一件突出，而是整體真的有站在一起。",
            "高分的原因在於整體完成感明確，不是靠單一亮點硬撐。",
            "它會好看，是因為全身重心有對上，而不是零件剛好都不差。",
          ]
        : score >= 80
          ? [
              "所以最後分數會落在偏高的位置，因為整體大方向對了，只剩個別細節還能再精修。",
              "整體已經是漂亮的，只是還不到那種毫無死角的版本。",
              "這套已經有明確美感，只差一點點就會進到很強的那個區間。",
            ]
          : [
              "也因為這樣，最後分數不會太高，問題不是單件醜，而是整體沒有完全合在一起。",
              "分數拉不高的原因很直接，就是整體感還是比單件魅力更弱一些。",
              "最後會被扣分，主要不是哪個單品有錯，而是全身站在一起時還不夠完整。",
            ];

    return [
      pickCombo(bottomState, lookKey, "detail-bottom"),
      pickCombo(finishState, lookKey, "detail-finish"),
      pickCombo(accessoryState, lookKey, "detail-acc"),
      pickCombo(scoreState, lookKey, "detail-score"),
    ].join("");
  }

  function getExactComboSummary(topMeta, look, score, baseComment, lookKey) {
    const { topId, bottomId, shoesId, socksId, accessoryKey } = look;
    const accessoryCount = getAccessoryCount(accessoryKey);
    const hasShoes = shoesId !== "-";
    const hasSocks = socksId !== "-";

    const opening = topId === "top02"
      ? [
          "這套藍色洋裝版的重點不是單品多不多，而是整體主角感有沒有被你保住。",
          "藍色這件一穿上去，整體方向其實就很鮮明，所以後面每加一樣東西都會直接改變成品氣質。",
          "這套藍色版本最吃整體完成感，因為主體本身已經夠明顯，其他細節一錯就會很容易看出來。",
        ]
      : [
          "這一套現在看的不是零件，而是你把這些東西放在一起之後，整體像不像同一套穿搭。",
          "這組搭配的成敗在整體，不在單件，所以只要其中一塊接不住，整體感就會鬆掉。",
          "這套要不要看，重點從來不是哪件單看漂亮，而是它們站在一起時有沒有真的變成一套。",
        ];

    const structure = topId === "top02" && bottomId !== "-"
      ? [
          "你又加下身之後，原本該乾淨落下的裙擺被切斷，所以輪廓會明顯變得擁擠。",
          "這版最大的問題就是多了一層下身，讓本來完整的洋裝線條被卡住，畫面不夠俐落。",
          "多穿這件下身後，藍色洋裝原本的主體輪廓被分成兩段，整體自然就沒那麼順。",
        ]
      : hasShoes && hasSocks && accessoryCount > 0
        ? [
            "現在這組已經不是半套，而是連腳邊和收尾都一起算進來，所以整體感會比只看衣服更完整。",
            "這版把鞋子、襪子和配件都帶進來了，所以整體不是停在穿上去，而是真的有在做造型。",
            "這個組合已經把主體、腳邊和收尾全算進來，所以好不好看會很明確地反映在整體完成感上。",
          ]
        : hasShoes && hasSocks
          ? [
              "這版已經把腳邊處理進去了，所以整體比單純只看衣服和下身更完整。",
              "鞋襪一起進來後，這套的下半身節奏有被做出來，整體感會比素版更明確。",
              "這種有鞋襪但沒太多別的東西的版本，最能看出整體比例到底順不順。",
            ]
          : hasShoes
            ? [
                "鞋子一加進來之後，這套就不再只是衣服搭對沒對，連下盤能不能撐住也一起被看進去了。",
                "這版有把鞋子算進來，所以整體完成感會比只有上衣下身時更明確。",
                "有鞋子的版本會比素搭更接近成品，因為整體重心已經開始往全身延伸。",
              ]
            : [
                "目前這版還停在主體搭配，所以整體好不好看，會非常直接地落在上衣和下身的關係上。",
                "這組還沒有靠鞋子或配件幫忙修飾，所以整體底子順不順會被看得特別清楚。",
                "這種主體先決版最誠實，因為沒有其他細節能幫忙轉移整體問題。",
              ];

    const closing = score >= 90
      ? [
          "這也是為什麼這組會高分，因為它不是某一塊特別亮，而是整套真的有合在一起。",
          "高分的原因很直接，這套是整體成立，不是單件各自不差而已。",
          "它會進高分區，是因為全身重心真的有對到，而不是只靠某一件撐畫面。",
        ]
      : score >= 80
        ? [
            "所以這組整體是漂亮的，只是還差一點點才會到那種一眼就很強的版本。",
            "最後會落在這個分數，是因為整體已經順了，但還有一些地方沒有完全鎖死。",
            "這套已經算好看，問題不是方向錯，而是距離最完整版本還差最後一點收束。",
          ]
        : [
            "也因為這樣，最後分數拉不上去，問題不在單件，而是整體沒有完全接成一條線。",
            "分數被壓住的原因是整體感不夠緊，不是某一件單看一定不好看。",
            "最後會被扣下來，主要就是這組放在一起後，整體完成感還不夠強。",
          ];

    return [
      pickCombo(opening, lookKey, "combo-opening"),
      baseComment,
      pickCombo(structure, lookKey, "combo-structure"),
      pickCombo(closing, lookKey, "combo-closing"),
    ].join("");
  }

  function getExactComboDetails(topMeta, look, score, lookKey) {
    const { topId, bottomId, shoesId, socksId, accessoryKey } = look;
    const accessoryCount = getAccessoryCount(accessoryKey);
    const hasShoes = shoesId !== "-";
    const hasSocks = socksId !== "-";

    const body = [
      "這一版最重要的是全身站在一起之後順不順眼，所以主體、腳邊和配件都在一起影響結果。",
      "這套更看整體氣氛有沒有收進同一條線，而不是局部單看夠不夠亮眼。",
      "這組搭配最吃完整感，因為上衣、下身、鞋襪和配件會一起決定最後觀感。",
    ];

    const stage = topId === "top02" && bottomId === "-"
      ? [
          "藍色洋裝單穿時，視線會更集中在它自己的輪廓和裝飾，所以整體會比亂加一層下身更乾淨。",
          "藍色這件不配下身時，主體反而完整，重點比較不會被腰線附近切碎。",
          "這版藍色洋裝維持單穿，輪廓會最直接，也最容易保住它原本的主角感。",
        ]
      : topId === "top02" && bottomId !== "-"
        ? [
            "你現在看到的是『洋裝再加下身』的結果，所以問題會直接反映在輪廓變厚和重心變亂上。",
            "這版藍色洋裝不是不能選下身，而是選了之後整體通常會更難看，分數也就會被往下拉。",
            "洋裝外再疊下身這種選法不是系統不給，而是實際穿起來多半會讓畫面失去原本該有的俐落。",
          ]
        : hasShoes && hasSocks && accessoryCount >= 2
          ? [
              "這種已經把主體、腳邊和配件都補到很滿的組合，最考驗的是整體秩序，而不是單件亮點。",
              "當這麼多元素一起出現時，整套能不能成立就會變得很明確，因為沒有哪一塊可以躲在後面。",
              "這版東西加得多，所以整體感只要沒有收住，就會立刻顯得滿而亂。",
            ]
          : hasShoes && hasSocks
            ? [
                "鞋襪都進來之後，這套的整體感會比素版更完整，所以分數也會更依賴全身比例。",
                "這一版因為腳邊有做，所以整體更接近真正穿出門的完成態，不只是主體草稿。",
                "鞋襪一起看時，這套的好壞會比只看主體時更明顯，因為視線已經走完整個人。",
              ]
            : hasShoes
              ? [
                  "只有鞋子進場的版本，通常最能看出這套到底是被撐起來，還是只是勉強成立。",
                  "這版雖然還沒很多細節，但鞋子一進來，整體就已經開始往成品靠了。",
                  "有鞋子但還沒加太多別的東西時，整體會很直接地暴露比例有沒有穩住。",
                ]
              : [
                  "這種主體版沒有太多裝飾干擾，所以整體好不好看幾乎全靠衣服本身的組合關係。",
                  "越少細節的版本越誠實，因為整套順不順眼會直接表現在主體搭配上。",
                  "目前這版還是偏主體測試，所以整體成立與否看得會特別清楚。",
                ];

    const scoreClose = score >= 88
      ? [
          "所以這組會讓人覺得完整，因為你看到的是整套一起成立，而不是某一件單獨厲害。",
          "它最後會高，是因為這個完整組合的整體感有被做出來。",
          "這套的強項就是完整，不是零件各自發揮。",
        ]
      : [
          "所以這組的問題也很直接，就是整體感還沒有強到可以完全蓋過局部衝突。",
          "這套目前還不像最終版，原因就是完整感沒有真的壓過那些衝突點。",
          "因此這組雖然有方向，但整套站在一起時還沒有到最漂亮的那種狀態。",
        ];

    return [
      pickCombo(body, lookKey, "combo-detail-body"),
      pickCombo(stage, lookKey, "combo-detail-stage"),
      pickCombo(scoreClose, lookKey, "combo-detail-score"),
    ].join("");
  }

  function createIncompleteReview() {
    const topId = getTopId();
    const missing = [];

    if (!topId) missing.push("上衣");

    return {
      title: "搭配未完成",
      score: 0,
      summary: "還缺少 " + missing.join("、") + "，目前還看不出完整造型。",
      details: "先選一件上衣，系統才會開始顯示這組搭配的固定評語與分數。",
    };
  }

  function buildLookReview(look) {
    const { topId, bottomId, shoesId, socksId, accessoryKey } = look;
    const topMeta = getTopMeta(topId);
    const lookKey = getExactLookKey({ topId, bottomId, shoesId, socksId, accessoryKey });
    const shoeMeta = SHOE_META[shoesId] || { score: 0, text: "????????????????????" };
    const sockMeta = SOCK_META[socksId] || SOCK_META["-"];
    const accessoryMeta = ACCESSORY_META[accessoryKey] || ACCESSORY_META["-"];

    let baseScore = 72;
    let baseComment = "?????????????????????????";

    if (topMeta?.mode === "full") {
      [baseScore, baseComment] = getFullLookBase(topId);
      if (bottomId !== "-") {
        baseScore -= 14;
        baseComment = "??????????????????????????????????????????";
      }
    } else if (topMeta?.pairings?.[bottomId]) {
      const pairData = topMeta.pairings[bottomId];
      const pairScore = pairData[0];
      const pairText = pairData[1];
      baseScore = 50 + pairScore * 4;
      baseComment = pairText;
    } else {
      baseScore = 58;
      baseComment = "??????????????????????????";
    }

    let score = baseScore + shoeMeta.score + sockMeta.score + accessoryMeta.score;
    const accessoryCount = getAccessoryCount(accessoryKey);

    if (topId === "top02" && bottomId !== "-") score -= 2;
    if (topMeta?.mode === "full" && accessoryCount >= 2) score -= 1;
    if (topMeta?.mode === "full" && (shoesId === "shoes04" || shoesId === "shoes06")) score += 1;
    if (topMeta?.mode === "separate" && accessoryCount === 0 && socksId === "-") score -= 1;
    if (topMeta?.vibe?.includes("??") && shoesId === "shoes01") score += 1;
    if (topMeta?.vibe?.includes("??") && socksId === "socks02") score -= 2;
    if (topMeta?.vibe?.includes("??") && shoesId === "shoes05") score -= 1;

    score = Math.max(45, Math.min(98, score));

    return {
      title: getLookTitle(topMeta, lookKey),
      score,
      summary: getExactComboSummary(topMeta || { id: "", mode: "separate", vibe: "" }, { topId, bottomId, shoesId, socksId, accessoryKey }, score, baseComment, lookKey),
      details: getExactComboDetails(topMeta || { id: "", mode: "separate", vibe: "" }, { topId, bottomId, shoesId, socksId, accessoryKey }, score, lookKey),
    };
  }

  function createLookReview() {
    return buildLookReview(getLookState());
  }

  function buildReviewLookup() {
    const lookup = {};
    const topIds = getCategoryItems(TOP_CATEGORY).map((item) => item.id);
    const bottomIds = ["-", ...getCategoryItems(BOTTOM_CATEGORY).map((item) => item.id)];
    const shoeIds = ["-", ...getCategoryItems(SHOES_CATEGORY).map((item) => item.id)];
    const sockIds = ["-", ...getCategoryItems(SOCKS_CATEGORY).map((item) => item.id)];
    const accessoryKeys = getAccessoryKeys();

    topIds.forEach((topId) => {
      bottomIds.forEach((bottomId) => {
        shoeIds.forEach((shoesId) => {
          sockIds.forEach((socksId) => {
            accessoryKeys.forEach((accessoryKey) => {
              const look = { topId, bottomId, shoesId, socksId, accessoryKey };
              lookup[getExactLookKey(look)] = buildLookReview(look);
            });
          });
        });
      });
    });

    return lookup;
  }

  function submitLook() {
    const topId = state.equippedSingle.get(TOP_CATEGORY);

    if (!topId) {
      state.reviewResult = createIncompleteReview();
      renderReviewCard();
      openReviewModal();
      return;
    }

    const look = getLookState();
    const key = getExactLookKey(look);
    state.reviewResult = state.reviewLookup[key] || {
      title: "本套搭配",
      score: 60,
      summary: "這套目前有基本方向，但還沒有找到最漂亮的完成點。",
      details: "這一版沒有對應到預先整理好的評論資料，所以先顯示保守評語。",
    };
    renderReviewCard();
    openReviewModal();
  }

  function renderReviewCard() {
    const card = document.getElementById("reviewCard");
    const placeholder = card?.querySelector(".review-card__placeholder");
    const result = card?.querySelector(".review-card__result");
    const title = document.getElementById("reviewTitle");
    const score = document.getElementById("reviewScore");
    const summary = document.getElementById("reviewSummary");
    const details = document.getElementById("reviewDetails");

    if (!card || !placeholder || !result || !title || !score || !summary || !details) return;

    if (!state.reviewResult) {
      card.classList.add("is-empty");
      placeholder.hidden = false;
      result.hidden = true;
      placeholder.textContent = "搭配完成後按下送出，就會顯示這套穿搭的評語。";
      return;
    }

    card.classList.remove("is-empty");
    placeholder.hidden = true;
    result.hidden = false;
    title.textContent = state.reviewResult.title || "";
    score.textContent = state.reviewResult.score ? `評分 ${state.reviewResult.score} / 100` : "";
    summary.textContent = state.reviewResult.summary || "";
    details.textContent = state.reviewResult.details || "";
  }

  function initButtons() {
    document.getElementById("clearAllBtn")?.addEventListener("click", clearAll);
    document.getElementById("randomWearBtn")?.addEventListener("click", randomWear);
    document.getElementById("submitLookBtn")?.addEventListener("click", submitLook);
    document.getElementById("closeReviewBtn")?.addEventListener("click", closeReviewModal);
    document.getElementById("reviewModalBackdrop")?.addEventListener("click", closeReviewModal);
  }

  document.addEventListener("DOMContentLoaded", () => {
    initEquipped();
    state.wardrobe = normalizeWardrobe(WARDROBE_DATA);
    rebuildIndex();
    state.reviewLookup = Object.keys(OUTFIT_REVIEW_LOOKUP).length ? OUTFIT_REVIEW_LOOKUP : buildReviewLookup();
    initButtons();
    initCategoryFilters();
    updateCategoryFiltersActiveState();
    applyBaseImage(state.wardrobe.baseModel.front);
    renderEquippedChips();
    renderShelf();
    updateModelOverlays();
    renderReviewCard();
    setStatus("");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeReviewModal();
  });
})();
