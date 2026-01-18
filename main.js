const menuItems = [
  { name: "우니 플레이트", price: "30,000원", tag: "시그니처", img: "./assets/food/uni_plate.jpg" },
  { name: "광어 카르파쵸", price: "25,000원", tag: "사시미", img: "./assets/food/hirame_carpaccio.jpg" },
  { name: "연어 사시미", price: "20,000원", tag: "사시미", img: "./assets/food/salmon_sashimi.jpg" },
  { name: "새우장", price: "20,000원", tag: "사이드", img: "./assets/food/shrimp_jeotgal.jpg" },
  { name: "히레 스테이크", price: "25,000원", tag: "스테이크", img: "./assets/food/hire_steak.jpg" },
  { name: "오리 스테이크", price: "25,000원", tag: "스테이크", img: "./assets/food/duck_steak.jpg" },
  { name: "연어 스테이크", price: "25,000원", tag: "스테이크", img: "./assets/food/salmon_steak.jpg" },
  { name: "전복 빠다야끼", price: "25,000원", tag: "구이", img: "./assets/food/abalone_butter_yaki.jpg" },
  { name: "토리야끼", price: "15,000원", tag: "구이", img: "./assets/food/tori_yaki.jpg" },
  { name: "전복 그린오일 파스타", price: "20,000원", tag: "파스타", img: "./assets/food/abalone_green_oil_pasta.jpg" },
  { name: "미소라구 파스타", price: "20,000원", tag: "파스타", img: "./assets/food/miso_ragu_pasta.jpg" },
  { name: "새우 레몬 버터 파스타", price: "20,000원", tag: "파스타", img: "./assets/food/shrimp_lemon_butter_pasta.jpg" },
  { name: "사카무시", price: "20,000원", tag: "탕/나베", img: "./assets/food/sakamushi.jpg" },
  { name: "매콤 토마토 나베", price: "20,000원", tag: "탕/나베", img: "./assets/food/spicy_tomato_nabe.jpg" },
  { name: "트러플 버섯구이", price: "10,000원", tag: "사이드", img: "./assets/food/truffle_mushroom_grill.jpg" },
  { name: "명란구이", price: "10,000원", tag: "사이드", img: "./assets/food/mentaiko_grill.jpg" },
  { name: "모찌리도후", price: "10,000원", tag: "사이드", img: "./assets/food/mozzari_dofu.jpg" },
  { name: "우메 토마토", price: "10,000원", tag: "사이드", img: "./assets/food/ume_tomato.jpg" }
];

const boardItems = [
  { title: "메뉴판 1", src: "./assets/menuboard_opt/board1.jpg" },
  { title: "메뉴판 2", src: "./assets/menuboard_opt/board2.jpg" },
  { title: "메뉴판 3", src: "./assets/menuboard_opt/board3.jpg" },
  { title: "메뉴판 4", src: "./assets/menuboard_opt/board4.jpg" },
  { title: "메뉴판 5", src: "./assets/menuboard_opt/board5.jpg" },
  { title: "메뉴판 6", src: "./assets/menuboard_opt/board6.jpg" }
];

const galleryItems = [
  { title: "간판", src: "./assets/sign.jpg" },
  { title: "내부", src: "./assets/inside1.jpg" },
  { title: "내부", src: "./assets/inside2.jpg" },
  { title: "갤러리", src: "./assets/gallery/gallery1.jpg" },
  { title: "갤러리", src: "./assets/gallery/gallery2.jpg" },
  { title: "갤러리", src: "./assets/gallery/gallery3.jpg" },
  { title: "갤러리", src: "./assets/gallery/gallery4.jpg" },
  { title: "갤러리", src: "./assets/gallery/gallery5.jpg" },
  { title: "갤러리", src: "./assets/gallery/gallery6.jpg" }
];

const drinkItems = [
  { name: "다이야메", price: "80,000원", tag: "고구마 소주", img: "./assets/drinks/daiyame.jpg" },
  { name: "도로가메", price: "80,000원", tag: "보리 소주", img: "./assets/drinks/dorogame.jpg" },
  { name: "요루노테이오우 준마이", price: "80,000원", tag: "사케", img: "./assets/drinks/sake_yoruno_teio.jpg" },
  { name: "쇼비뇽 블랑", price: "50,000원", tag: "화이트 와인", img: "./assets/drinks/white_wine_sauvignon.jpg" },
  { name: "일품진로 오크43", price: "50,000원", tag: "소주/증류주", img: "./assets/drinks/ilpoom_oak_43.jpg" },
  { name: "일품진로 오크25", price: "30,000원", tag: "소주/증류주", img: "./assets/drinks/ilpoom_oak_25.jpg" },
  { name: "아사히 생맥", price: "10,000원", tag: "생맥주", img: "./assets/drinks/asahi_draft.jpg" },
  { name: "진로 소주", price: "6,000원", tag: "소주", img: "./assets/drinks/jinro_soju.jpg" }
];

function escapeHtml(input) {
  return String(input)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatMenu(items) {
  return items
    .map((m, idx) => {
      const safeName = escapeHtml(m.name);
      const safePrice = escapeHtml(m.price || "");
      const safeTag = escapeHtml(m.tag);
      const safeImg = escapeHtml(m.img || "");

      const priceHtml = safePrice
        ? `<div class="mitem__price">${safePrice}</div>`
        : `<div class="mitem__price mitem__price--muted">가격 문의</div>`;

      return `
        <article class="mcard ${safeImg ? "" : "is-empty"}" data-idx="${idx}">
          <div class="mcard__img">
            <img class="mcard__photo" src="${safeImg}" alt="${safeName}" loading="lazy" decoding="async" />
            <div class="noimg">이미지 준비중</div>
          </div>
          <div class="mcard__body">
            <div class="mcard__top">
              <div class="mcard__name">${safeName}</div>
              ${priceHtml}
            </div>
            <div class="mcard__tag">${safeTag}</div>
          </div>
          <button class="mcard__open" type="button" aria-label="${safeName} 크게 보기">보기</button>
        </article>
      `;
    })
    .join("");
}

function formatBoards(items) {
  return items
    .map((it, idx) => {
      const title = escapeHtml(it.title);
      const src = escapeHtml(it.src);
      return `
        <article class="board" data-idx="${idx}">
          <div class="board__img">
            <img class="board__photo" src="${src}" alt="${title}" loading="lazy" decoding="async" />
            <div class="noimg">이미지 준비중</div>
          </div>
          <div class="board__cap">${title}</div>
          <button class="board__open" type="button" aria-label="${title} 크게 보기">보기</button>
        </article>
      `;
    })
    .join("");
}

function formatGallery(items) {
  return items
    .map((it, idx) => {
      const title = escapeHtml(it.title);
      const src = escapeHtml(it.src);
      return `
        <article class="gallery__item ${src ? "" : "is-empty"}" data-idx="${idx}">
          <img loading="lazy" decoding="async" src="${src}" alt="${title}" />
          <div class="noimg">이미지 준비중</div>
          <button class="gallery__open" type="button" aria-label="${title} 크게 보기">보기</button>
        </article>
      `;
    })
    .join("");
}

function formatDrinks(items) {
  return items
    .map((d, idx) => {
      const safeName = escapeHtml(d.name);
      const safePrice = escapeHtml(d.price || "");
      const safeTag = escapeHtml(d.tag || "");
      const img = d.img ? escapeHtml(d.img) : "";
      const imgHtml = img
        ? `<img class="dcard__photo" src="${img}" alt="${safeName}" loading="lazy" decoding="async" />`
        : "";

      return `
        <article class="dcard ${img ? "" : "is-empty"}" data-idx="${idx}">
          <div class="dcard__img ${img ? "" : "dcard__img--placeholder"}">
            ${imgHtml}
            <div class="noimg">이미지 준비중</div>
          </div>
          <div class="dcard__body">
            <div class="dcard__top">
              <div class="dcard__name">${safeName}</div>
              <div class="dcard__price">${safePrice}</div>
            </div>
            <div class="dcard__tag">${safeTag}</div>
          </div>
          <button class="mcard__open" type="button" aria-label="${safeName} 크게 보기">보기</button>
        </article>
      `;
    })
    .join("");
}

function initMenu() {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  let currentList = [];
  const render = (filter) => {
    currentList =
      !filter || filter === "all"
        ? menuItems
        : menuItems.filter((m) => String(m.tag) === String(filter));
    grid.innerHTML = formatMenu(currentList);
  };

  render("all");

  grid.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    const card = t.closest(".mcard");
    if (!card) return;

    const idx = Number(card.getAttribute("data-idx") || "0");
    const item = currentList[idx];
    if (!item) return;

    openLightboxGallery({
      items: currentList.map((m) => ({ src: m.img, title: m.name, subtitle: m.price || "" })),
      index: idx,
      kind: "menu"
    });
  });

  const filterWrap = document.querySelector(".filters");
  if (filterWrap) {
    filterWrap.addEventListener("click", (e) => {
      const t = e.target;
      if (!(t instanceof HTMLElement)) return;
      if (!t.matches(".filter")) return;

      const value = t.getAttribute("data-filter") || "all";
      for (const b of Array.from(filterWrap.querySelectorAll(".filter"))) {
        b.classList.toggle("is-on", b === t);
      }
      render(value);
    });
  }
}

function initBoards() {
  const grid = document.getElementById("boardsGrid");
  if (!grid) return;
  grid.innerHTML = formatBoards(boardItems);

  grid.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    const card = t.closest(".board");
    if (!card) return;
    const idx = Number(card.getAttribute("data-idx") || "0");

    openLightboxGallery({
      items: boardItems.map((b) => ({ src: b.src, title: b.title, subtitle: "" })),
      index: idx,
      kind: "board"
    });
  });
}

function initDrinks() {
  const grid = document.getElementById("drinksGrid");
  if (!grid) return;

  grid.innerHTML = formatDrinks(drinkItems);

  grid.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;

    const card = t.closest(".dcard");
    if (!card) return;

    const idx = Number(card.getAttribute("data-idx") || "0");
    openLightboxGallery({
      items: drinkItems.map((d) => ({ src: d.img || "", title: d.name, subtitle: d.price })),
      index: idx,
      kind: "drink"
    });
  });
}

function initGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  grid.innerHTML = formatGallery(galleryItems);

  grid.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;

    const card = t.closest(".gallery__item");
    if (!card) return;
    const idx = Number(card.getAttribute("data-idx") || "0");

    openLightboxGallery({
      items: galleryItems.map((g) => ({ src: g.src, title: g.title, subtitle: "" })),
      index: idx,
      kind: "gallery"
    });
  });
}

function initYear() {
  const el = document.getElementById("year");
  if (!el) return;
  el.textContent = String(new Date().getFullYear());
}

function initReveal() {
  const els = Array.from(document.querySelectorAll("[data-reveal]"));
  if (els.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const delay = Number(e.target.getAttribute("data-reveal-delay") || "0");
        e.target.style.transitionDelay = `${delay}ms`;
        e.target.classList.add("is-in");
        observer.unobserve(e.target);
      }
    },
    { threshold: 0.12, rootMargin: "40px" }
  );

  for (const el of els) observer.observe(el);
}

function initTopbarElevate() {
  const topbar = document.querySelector(".topbar[data-elevate]");
  if (!topbar) return;

  const onScroll = () => {
    topbar.setAttribute("data-elevate", window.scrollY > 6 ? "1" : "0");
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initToTop() {
  const btn = document.getElementById("toTop");
  if (!btn) return;

  const onScroll = () => {
    btn.classList.toggle("is-on", window.scrollY > 520);
  };

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function ensureLightbox() {
  let lb = document.getElementById("lightbox");
  if (lb) return lb;

  lb = document.createElement("div");
  lb.id = "lightbox";
  lb.className = "lightbox";
  lb.hidden = true;
  lb.dataset.mode = "";

  lb.innerHTML = `
    <div class="lightbox__backdrop" data-close></div>
    <div class="lightbox__panel" role="dialog" aria-modal="true" aria-label="이미지 보기">
      <button class="lightbox__x" type="button" data-close aria-label="닫기">닫기</button>
      <button class="lightbox__nav lightbox__nav--prev" type="button" data-prev aria-label="이전">이전</button>
      <button class="lightbox__nav lightbox__nav--next" type="button" data-next aria-label="다음">다음</button>

      <div class="lightbox__stage">
        <img class="lightbox__img" alt="" />
        <div class="lightbox__placeholder">이미지 준비중</div>
      </div>

      <div class="lightbox__bar">
        <div class="lightbox__meta">
          <div class="lightbox__title"></div>
          <div class="lightbox__sub"></div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(lb);

  lb.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;

    if (t.hasAttribute("data-close")) closeLightbox();
    if (t.hasAttribute("data-prev")) moveLightbox(-1);
    if (t.hasAttribute("data-next")) moveLightbox(1);
  });

  const stage = lb.querySelector(".lightbox__stage");
  if (stage instanceof HTMLElement) {
    stage.addEventListener("click", (e) => {
      const r = stage.getBoundingClientRect();
      const x = e.clientX - r.left;
      if (x < r.width * 0.4) moveLightbox(-1);
      else moveLightbox(1);
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") moveLightbox(-1);
    if (e.key === "ArrowRight") moveLightbox(1);
  });

  return lb;
}

function openLightbox({ src, title, subtitle }) {
  const lb = ensureLightbox();
  const img = lb.querySelector(".lightbox__img");
  const titleEl = lb.querySelector(".lightbox__title");
  const subEl = lb.querySelector(".lightbox__sub");

  if (!(img instanceof HTMLImageElement)) return;
  if (!(titleEl instanceof HTMLElement)) return;

  img.src = src;
  img.alt = title;
  titleEl.textContent = title;

  if (subEl instanceof HTMLElement) {
    subEl.textContent = subtitle ? String(subtitle) : "";
  }

  lb.hidden = false;
  document.documentElement.style.overflow = "hidden";
}

function openLightboxGallery({ items, index, kind }) {
  const lb = ensureLightbox();
  lb.dataset.mode = "gallery";
  lb._items = items;
  lb._index = index;
  lb._kind = kind || "";
  renderLightboxGallery();

  lb.hidden = false;
  document.documentElement.style.overflow = "hidden";
}

function renderLightboxGallery() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  const items = lb._items || [];
  const idx = Number(lb._index || 0);
  if (!items[idx]) return;

  const it = items[idx];
  const src = it.src || "";
  const title = it.title || "";
  const subtitle = it.subtitle || "";

  lb.classList.toggle("is-empty", !src);
  openLightbox({ src, title, subtitle });

  const prevBtn = lb.querySelector("[data-prev]");
  const nextBtn = lb.querySelector("[data-next]");
  if (prevBtn instanceof HTMLButtonElement) prevBtn.disabled = idx <= 0;
  if (nextBtn instanceof HTMLButtonElement) nextBtn.disabled = idx >= items.length - 1;
}

function moveLightbox(delta) {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  if (lb.dataset.mode !== "gallery") return;

  const items = lb._items || [];
  const next = Number(lb._index || 0) + delta;
  if (next < 0 || next >= items.length) return;
  lb._index = next;
  renderLightboxGallery();
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lb.hidden = true;
  lb.dataset.mode = "";
  lb._items = null;
  lb._index = 0;
  lb._kind = "";
  lb.classList.remove("is-empty");
  document.documentElement.style.overflow = "";

  const img = lb.querySelector(".lightbox__img");
  if (img instanceof HTMLImageElement) img.src = "";
}

function initMobileNav() {
  const btn = document.querySelector(".navtoggle");
  const panel = document.getElementById("mobileNav");
  if (!btn || !panel) return;

  const close = () => {
    panel.hidden = true;
    btn.setAttribute("aria-expanded", "false");
  };

  const open = () => {
    panel.hidden = false;
    btn.setAttribute("aria-expanded", "true");
  };

  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    if (expanded) close();
    else open();
  });

  panel.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    if (t.matches("a")) close();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

initMenu();
initBoards();
initDrinks();
initGallery();
initYear();
initReveal();
initTopbarElevate();
initToTop();
initMobileNav();
