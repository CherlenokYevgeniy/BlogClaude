// ─── Constants ────────────────────────────────────────────────
const STORAGE_KEY  = 'notes_v3';
const MAX_CHARS    = 500;
const MAX_PHOTOS   = 2;
const MAX_DEPTH    = 4;       // max nesting level
const USERNAME     = 'CherlenokYevgeniy';

// ─── Emoji data ───────────────────────────────────────────────
const EMOJI_CATS = [
  { id:'smileys', icon:'😊', label:'Смайлики', items:['😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','😊','😇','🥰','😍','🤩','😘','😗','😚','😙','🥲','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🤨','😐','😑','😶','😏','😒','🙄','😬','🤥','😌','😔','😪','🤤','😴','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','🥴','😵','🤯','🤠','🥳','🥸','😎','🤓','🧐','😕','😟','🙁','☹️','😮','😯','😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀','💩','🤡','👹','👺','👻','👽','🤖'] },
  { id:'people',  icon:'👋', label:'Люди',     items:['👋','🤚','🖐','✋','🖖','👌','🤌','🤏','✌️','🤞','🤟','🤘','🤙','👈','👉','👆','🖕','👇','☝️','👍','👎','✊','👊','🤛','🤜','👏','🙌','👐','🤲','🙏','✍️','💅','🤳','💪','🦾','🦿','🦵','🦶','👂','🦻','👃','👣','👁','👀','👄','💋','👅'] },
  { id:'animals', icon:'🐶', label:'Животные', items:['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🙈','🙉','🙊','🐔','🐧','🐦','🦆','🦅','🦉','🦇','🐝','🦋','🐌','🐞','🐜','🦟','🕷','🐢','🐍','🦎','🐙','🦑','🦐','🦞','🦀','🐡','🐠','🐟','🐬','🐳','🐋','🦈','🐊','🐘','🦛','🦏','🐪','🐫','🦒','🦘','🦬','🐃','🐂','🐄','🐎','🐖','🐏','🐑','🦙','🐐','🦌','🐕','🐩','🦮','🐈','🐓','🦃','🦤','🦚','🦜','🦢','🦩','🕊','🐇','🦝','🦨','🦡','🦫','🦦','🦥','🐁','🐀','🐿','🦔'] },
  { id:'food',    icon:'🍕', label:'Еда',       items:['🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🫐','🍒','🍑','🥭','🍍','🥥','🥝','🍅','🫒','🥑','🍆','🥦','🥬','🥒','🌶','🧄','🧅','🥔','🍠','🥐','🥯','🍞','🥖','🥨','🧀','🥚','🍳','🧈','🥞','🧇','🥓','🥩','🍗','🍖','🌭','🍔','🍟','🍕','🥪','🥙','🧆','🌮','🌯','🥗','🥘','🍝','🍜','🍲','🍛','🍣','🍱','🥟','🦪','🍤','🍙','🍚','🍘','🍥','🥮','🍢','🧁','🍰','🎂','🍮','🍭','🍬','🍫','🍿','🍩','🍪','🍯','🧃','🥤','🧋','🍵','☕','🫖','🍺','🍻','🥂','🍷','🥃','🍸','🍹','🍾'] },
  { id:'sport',   icon:'⚽', label:'Спорт',    items:['⚽','🏀','🏈','⚾','🥎','🎾','🏐','🏉','🎱','🏓','🏸','🏒','🥍','🏑','🏏','⛳','🏹','🎣','🤿','🥊','🥋','🎽','🛹','🛷','🏂','🪂','🏋️','🤼','🤸','🏆','🥇','🥈','🥉','🎖','🎫','🎪','🎭','🎨','🎬','🎤','🎧','🎼','🎹','🥁','🎷','🎺','🎸','🎻','🎲','♟️','🎯','🎳','🎮','🎰','🧩'] },
  { id:'travel',  icon:'🌍', label:'Места',    items:['🌍','🌎','🌏','🗺','🏔','⛰','🌋','🗻','🏕','🏖','🏜','🏝','🏟','🏛','🏗','🏘','🏠','🏡','🏢','🏥','🏦','🏨','🏪','🏫','🏬','🏭','🏯','🏰','💒','🗼','🗽','⛪','🕌','🛕','🕍','⛩','🕋','⛲','⛺','🌁','🌃','🏙','🌄','🌅','🌆','🌇','🌉','✈️','🚀','🛸','🚁','🛳','⛴','🚢','🚂','🚃','🚄','🚅','🚇','🚌','🚎','🏎','🚓','🚑','🚒','🚐','🛻','🚚','🚛','🚜','🏍','🛵','🚲','🛴','🛺'] },
  { id:'symbols', icon:'❤️', label:'Символы',  items:['❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔','❤️‍🔥','❤️‍🩹','💕','💞','💓','💗','💖','💘','💝','💟','☮️','✝️','☪️','🕉','✡️','☯️','🛐','💯','✅','❎','⭕','❌','✔️','☑️','⚡','🔥','💧','🌊','🌈','⭐','🌟','💫','❄️','🌙','☀️','🌤','⛅','🌧','⛈','🌩','🌪','🌈','☃️','⛄','🏳️','🏴','🚩','🎌','🏁','🎗','🎀','🎁','🎊','🎉','🎈','🎆','🎇','✨','🎃','🎄','🎋','🎍','🎎','🎏','🎑','🧧','🎐'] },
];

// ─── State ────────────────────────────────────────────────────
let selectedPhotos = [];
let activeCat = 0;
let lastSel = null;

// ─── DOM refs ─────────────────────────────────────────────────
const editor        = document.getElementById('editor');
const charCounter   = document.getElementById('charCounter');
const publishBtn    = document.getElementById('publishBtn');
const photoInput    = document.getElementById('photoInput');
const photoPreviews = document.getElementById('photoPreviews');
const emojiToggle   = document.getElementById('emojiToggle');
const emojiPanel    = document.getElementById('emojiPanel');
const emojiSearch   = document.getElementById('emojiSearch');
const emojiCats     = document.getElementById('emojiCats');
const emojiGrid     = document.getElementById('emojiGrid');
const feed          = document.getElementById('feed');
const lightbox      = document.getElementById('lightbox');
const lbImg         = document.getElementById('lbImg');
const lbClose       = document.getElementById('lbClose');

// ─── Editor ───────────────────────────────────────────────────
editor.addEventListener('input', onEditorInput);
editor.addEventListener('blur', () => {
  const sel = window.getSelection();
  if (sel.rangeCount) lastSel = sel.getRangeAt(0).cloneRange();
});
editor.addEventListener('keydown', (e) => {
  if (charLen() >= MAX_CHARS && !['Backspace','Delete','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) {
    e.preventDefault();
  }
});
editor.addEventListener('paste', (e) => {
  e.preventDefault();
  document.execCommand('insertText', false, e.clipboardData.getData('text/plain'));
});

function onEditorInput() {
  const len = charLen();
  charCounter.textContent = `${len} / ${MAX_CHARS}`;
  charCounter.className = 'char-counter' + (len >= MAX_CHARS ? ' over' : len >= 400 ? ' warn' : '');
  publishBtn.disabled = len === 0;
}
function charLen() { return editor.textContent.length; }

// ─── Formatting ───────────────────────────────────────────────
document.querySelectorAll('.fmt').forEach(btn => {
  btn.addEventListener('mousedown', (e) => {
    e.preventDefault();
    editor.focus();
    document.execCommand(btn.dataset.cmd, false, null);
    editor.dispatchEvent(new Event('input'));
  });
});

// ─── Photos ───────────────────────────────────────────────────
photoInput.addEventListener('change', async () => {
  const files = Array.from(photoInput.files).slice(0, MAX_PHOTOS - selectedPhotos.length);
  for (const f of files) {
    if (selectedPhotos.length >= MAX_PHOTOS) break;
    selectedPhotos.push(await toBase64(f));
  }
  photoInput.value = '';
  renderPhotoPreviews();
  updatePhotoBtn();
});

function toBase64(file) {
  return new Promise(res => { const r = new FileReader(); r.onload = e => res(e.target.result); r.readAsDataURL(file); });
}

function renderPhotoPreviews() {
  photoPreviews.innerHTML = '';
  selectedPhotos.forEach((src, i) => {
    const wrap = document.createElement('div');
    wrap.className = 'pw';
    const img = document.createElement('img'); img.src = src;
    const btn = document.createElement('button');
    btn.className = 'pw-remove'; btn.innerHTML = '&#x2715;';
    btn.addEventListener('click', () => { selectedPhotos.splice(i, 1); renderPhotoPreviews(); updatePhotoBtn(); });
    wrap.append(img, btn);
    photoPreviews.appendChild(wrap);
  });
}

function updatePhotoBtn() {
  const label = document.querySelector('label[for="photoInput"]');
  label.style.opacity = selectedPhotos.length >= MAX_PHOTOS ? '0.35' : '1';
  label.style.pointerEvents = selectedPhotos.length >= MAX_PHOTOS ? 'none' : '';
}

// ─── Emoji picker ─────────────────────────────────────────────
function buildEmojiCats() {
  emojiCats.innerHTML = '';
  EMOJI_CATS.forEach((cat, i) => {
    const btn = document.createElement('button');
    btn.className = 'ep-cat-btn' + (i === activeCat ? ' on' : '');
    btn.textContent = cat.icon; btn.title = cat.label;
    btn.addEventListener('mousedown', (e) => {
      e.preventDefault(); activeCat = i;
      buildEmojiCats(); fillGrid(EMOJI_CATS[i].items);
    });
    emojiCats.appendChild(btn);
  });
}

function fillGrid(items) {
  emojiGrid.innerHTML = '';
  items.forEach(em => {
    const btn = document.createElement('button');
    btn.className = 'ep-emoji'; btn.textContent = em;
    btn.addEventListener('mousedown', (e) => { e.preventDefault(); insertEmoji(em); });
    emojiGrid.appendChild(btn);
  });
}

function insertEmoji(em) {
  editor.focus();
  if (lastSel) { const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(lastSel); }
  document.execCommand('insertText', false, em);
  onEditorInput();
  const sel = window.getSelection();
  if (sel.rangeCount) lastSel = sel.getRangeAt(0).cloneRange();
}

emojiToggle.addEventListener('click', () => {
  if (!emojiPanel.hidden) {
    emojiPanel.hidden = true; emojiToggle.classList.remove('on');
  } else {
    emojiPanel.hidden = false; emojiToggle.classList.add('on');
    buildEmojiCats(); fillGrid(EMOJI_CATS[activeCat].items);
  }
});

emojiSearch.addEventListener('input', () => {
  const q = emojiSearch.value.trim();
  fillGrid(q ? EMOJI_CATS.flatMap(c => c.items) : EMOJI_CATS[activeCat].items);
});

document.addEventListener('click', (e) => {
  if (!emojiPanel.hidden && !emojiPanel.contains(e.target) && !emojiToggle.contains(e.target)) {
    emojiPanel.hidden = true; emojiToggle.classList.remove('on');
  }
});

// ─── Publish ─────────────────────────────────────────────────
publishBtn.addEventListener('click', () => {
  const html = editor.innerHTML.trim();
  const text = editor.textContent.trim();
  if (!text) return;

  const post = {
    id:        Date.now(),
    html,
    photos:    [...selectedPhotos],
    createdAt: new Date().toISOString(),
    likes:     0,
    likedByMe: false,
    replies:   [],
  };

  const posts = loadPosts();
  posts.unshift(post);
  savePosts(posts);

  editor.innerHTML = '';
  charCounter.textContent = `0 / ${MAX_CHARS}`;
  charCounter.className = 'char-counter';
  selectedPhotos = []; renderPhotoPreviews(); updatePhotoBtn();
  publishBtn.disabled = true;
  emojiPanel.hidden = true; emojiToggle.classList.remove('on');
  lastSel = null;

  renderFeed();
});

// ─── Storage ─────────────────────────────────────────────────
function loadPosts() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}
function savePosts(posts) { localStorage.setItem(STORAGE_KEY, JSON.stringify(posts)); }

// ─── Recursive helpers ────────────────────────────────────────
function findById(items, id) {
  for (const item of items) {
    if (item.id === id) return item;
    const found = findById(item.replies || [], id);
    if (found) return found;
  }
  return null;
}

function removeById(arr, id) {
  const i = arr.findIndex(x => x.id === id);
  if (i !== -1) { arr.splice(i, 1); return true; }
  return arr.some(item => removeById(item.replies || [], id));
}

function countAllReplies(item) {
  const direct = (item.replies || []).length;
  return direct + (item.replies || []).reduce((s, r) => s + countAllReplies(r), 0);
}

// ─── Feed ─────────────────────────────────────────────────────
function renderFeed() {
  const posts = loadPosts();
  feed.innerHTML = '';
  if (!posts.length) {
    feed.innerHTML = `<div class="empty-state"><div class="empty-icon">🧵</div><div>Ещё нет заметок. Напишите первую!</div></div>`;
    return;
  }
  posts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.appendChild(buildThreadItem(post, 0));
    feed.appendChild(card);
  });
}

// ─── Thread item (recursive) ──────────────────────────────────
function buildThreadItem(item, depth) {
  const avSize = depth === 0 ? 36 : depth === 1 ? 28 : 22;

  const wrap = document.createElement('div');
  wrap.className = 'ti-wrap';
  wrap.dataset.id = item.id;

  // ── Thread row ──
  const row = document.createElement('div');
  row.className = 'thread-row';

  // Left col (avatar + thread line)
  const colL = document.createElement('div');
  colL.className = 'col-left';
  const av = document.createElement('div');
  av.className = 'avatar avatar-me';
  av.style.cssText = `width:${avSize}px;height:${avSize}px;font-size:${Math.round(avSize * 0.38)}px;flex-shrink:0`;
  av.textContent = 'Ч';
  const line = document.createElement('div');
  line.className = 'thread-line';
  colL.append(av, line);

  // Right col (content)
  const colR = document.createElement('div');
  colR.className = 'col-right';

  // Header
  const head = document.createElement('div');
  head.className = 'post-head';
  const uname = document.createElement('span');
  uname.className = 'post-username';
  uname.textContent = USERNAME;
  const time = document.createElement('span');
  time.className = 'post-time';
  time.textContent = relativeTime(item.createdAt);
  const menuBtn = document.createElement('button');
  menuBtn.className = 'post-menu-btn';
  menuBtn.innerHTML = '&middot;&middot;&middot;';
  menuBtn.title = 'Действия';
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showItemMenu(menuBtn, item.id);
  });
  head.append(uname, time, menuBtn);

  // Body text
  const body = document.createElement('div');
  body.className = 'post-body';
  body.innerHTML = sanitize(item.html || '');
  colR.append(head, body);

  // Images
  if (item.photos && item.photos.length) {
    const imgs = document.createElement('div');
    imgs.className = 'post-imgs n' + item.photos.length;
    item.photos.forEach(src => {
      const img = document.createElement('img');
      img.src = src; img.loading = 'lazy';
      img.addEventListener('click', () => openLightbox(src));
      imgs.appendChild(img);
    });
    colR.appendChild(imgs);
  }

  // Actions
  const actions = document.createElement('div');
  actions.className = 'post-actions';

  const likeBtn = document.createElement('button');
  likeBtn.className = 'act-btn' + (item.likedByMe ? ' liked' : '');
  likeBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg><span class="act-count">${item.likes > 0 ? item.likes : ''}</span>`;
  likeBtn.addEventListener('click', () => toggleLike(item.id));

  const replyCount = countAllReplies(item);
  const commentBtn = document.createElement('button');
  commentBtn.className = 'act-btn';
  commentBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span class="act-count">${replyCount || ''}</span>`;

  actions.append(likeBtn, commentBtn);
  colR.appendChild(actions);

  row.append(colL, colR);
  wrap.appendChild(row);

  // ── Replies section ──
  const section = document.createElement('div');
  section.className = 'replies-section';

  // Nested replies (recursive, stop at MAX_DEPTH)
  if (depth < MAX_DEPTH && (item.replies || []).length > 0) {
    const repliesWrap = document.createElement('div');
    repliesWrap.className = 'replies-wrap';
    item.replies.forEach(reply => repliesWrap.appendChild(buildThreadItem(reply, depth + 1)));
    section.appendChild(repliesWrap);
  }

  // Inline reply composer (hidden by default)
  const composer = buildReplyComposer(item.id, depth, section, commentBtn);
  composer.hidden = true;
  section.appendChild(composer);

  commentBtn.addEventListener('click', () => {
    composer.hidden = !composer.hidden;
    commentBtn.classList.toggle('on', !composer.hidden);
    if (!composer.hidden) setTimeout(() => composer.querySelector('.rc-editor').focus(), 30);
  });

  wrap.appendChild(section);
  return wrap;
}

// ─── Reply composer (full rich editor) ───────────────────────
let _rcCounter = 0;

function buildReplyComposer(parentId, depth, section, commentBtn) {
  const uid = ++_rcCounter;
  const avSize = depth === 0 ? 28 : 24;
  let rcPhotos = [];

  const wrap = document.createElement('div');
  wrap.className = 'reply-composer';

  // Avatar
  const av = document.createElement('div');
  av.className = 'avatar avatar-me';
  av.style.cssText = `width:${avSize}px;height:${avSize}px;font-size:${Math.round(avSize*0.38)}px;flex-shrink:0`;
  av.textContent = 'Ч';

  // Body
  const body = document.createElement('div');
  body.className = 'rc-body';

  // Editor
  const rcEditor = document.createElement('div');
  rcEditor.className = 'rc-editor';
  rcEditor.contentEditable = 'true';
  rcEditor.dataset.placeholder = 'Ответить...';
  rcEditor.spellcheck = true;

  // Photo previews
  const rcPreviews = document.createElement('div');
  rcPreviews.className = 'rc-previews';

  // Emoji panel
  const rcEmojiPanel = document.createElement('div');
  rcEmojiPanel.className = 'emoji-panel rc-emoji-panel';
  rcEmojiPanel.hidden = true;
  // reuse same emoji rendering
  const rcEpSearch = document.createElement('input');
  rcEpSearch.type = 'text'; rcEpSearch.className = 'ep-search'; rcEpSearch.placeholder = 'Поиск...';
  const rcEpSearchRow = document.createElement('div');
  rcEpSearchRow.className = 'ep-search-row'; rcEpSearchRow.appendChild(rcEpSearch);
  const rcEpCats = document.createElement('div'); rcEpCats.className = 'ep-cats';
  const rcEpGrid = document.createElement('div'); rcEpGrid.className = 'ep-grid';
  rcEmojiPanel.append(rcEpSearchRow, rcEpCats, rcEpGrid);

  let rcActiveCat = 0;
  let rcLastSel = null;

  function buildRcCats() {
    rcEpCats.innerHTML = '';
    EMOJI_CATS.forEach((cat, i) => {
      const btn = document.createElement('button');
      btn.className = 'ep-cat-btn' + (i === rcActiveCat ? ' on' : '');
      btn.textContent = cat.icon; btn.title = cat.label;
      btn.addEventListener('mousedown', e => {
        e.preventDefault(); rcActiveCat = i; buildRcCats(); fillRcGrid(EMOJI_CATS[i].items);
      });
      rcEpCats.appendChild(btn);
    });
  }
  function fillRcGrid(items) {
    rcEpGrid.innerHTML = '';
    items.forEach(em => {
      const btn = document.createElement('button');
      btn.className = 'ep-emoji'; btn.textContent = em;
      btn.addEventListener('mousedown', e => { e.preventDefault(); insertRcEmoji(em); });
      rcEpGrid.appendChild(btn);
    });
  }
  function insertRcEmoji(em) {
    rcEditor.focus();
    if (rcLastSel) { const s = window.getSelection(); s.removeAllRanges(); s.addRange(rcLastSel); }
    document.execCommand('insertText', false, em);
    onRcInput();
    const s = window.getSelection();
    if (s.rangeCount) rcLastSel = s.getRangeAt(0).cloneRange();
  }
  rcEpSearch.addEventListener('input', () => {
    fillRcGrid(rcEpSearch.value.trim() ? EMOJI_CATS.flatMap(c => c.items) : EMOJI_CATS[rcActiveCat].items);
  });

  // Toolbar
  const toolbar = document.createElement('div');
  toolbar.className = 'toolbar rc-toolbar';

  // Photo button
  const photoLabel = document.createElement('label');
  photoLabel.className = 't-btn'; photoLabel.title = 'Фото';
  photoLabel.htmlFor = `rc-photo-${uid}`;
  photoLabel.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2.5"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" stroke="none"/><polyline points="21 15 16 10 5 21"/></svg>`;
  const photoInput2 = document.createElement('input');
  photoInput2.type = 'file'; photoInput2.accept = 'image/*'; photoInput2.multiple = true;
  photoInput2.hidden = true; photoInput2.id = `rc-photo-${uid}`;
  photoInput2.addEventListener('change', async () => {
    const files = Array.from(photoInput2.files).slice(0, MAX_PHOTOS - rcPhotos.length);
    for (const f of files) { if (rcPhotos.length >= MAX_PHOTOS) break; rcPhotos.push(await toBase64(f)); }
    photoInput2.value = '';
    renderRcPreviews();
    photoLabel.style.opacity = rcPhotos.length >= MAX_PHOTOS ? '0.35' : '1';
    photoLabel.style.pointerEvents = rcPhotos.length >= MAX_PHOTOS ? 'none' : '';
  });

  function renderRcPreviews() {
    rcPreviews.innerHTML = '';
    rcPhotos.forEach((src, i) => {
      const pw = document.createElement('div'); pw.className = 'pw';
      const img = document.createElement('img'); img.src = src;
      const btn = document.createElement('button'); btn.className = 'pw-remove'; btn.innerHTML = '&#x2715;';
      btn.addEventListener('click', () => {
        rcPhotos.splice(i, 1); renderRcPreviews();
        photoLabel.style.opacity = rcPhotos.length >= MAX_PHOTOS ? '0.35' : '1';
        photoLabel.style.pointerEvents = rcPhotos.length >= MAX_PHOTOS ? 'none' : '';
      });
      pw.append(img, btn); rcPreviews.appendChild(pw);
    });
  }

  // Emoji toggle (wrapped for positioning)
  const emojiWrap = document.createElement('div'); emojiWrap.className = 'emoji-wrap';
  const emojiBtn = document.createElement('button');
  emojiBtn.className = 't-btn'; emojiBtn.title = 'Эмодзи';
  emojiBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><circle cx="9" cy="9" r="0.8" fill="currentColor" stroke="none"/><circle cx="15" cy="9" r="0.8" fill="currentColor" stroke="none"/></svg>`;
  rcEditor.addEventListener('blur', () => { const s = window.getSelection(); if (s.rangeCount) rcLastSel = s.getRangeAt(0).cloneRange(); });
  emojiBtn.addEventListener('click', () => {
    if (!rcEmojiPanel.hidden) { rcEmojiPanel.hidden = true; emojiBtn.classList.remove('on'); }
    else { rcEmojiPanel.hidden = false; emojiBtn.classList.add('on'); buildRcCats(); fillRcGrid(EMOJI_CATS[rcActiveCat].items); }
  });
  document.addEventListener('click', e => {
    if (!rcEmojiPanel.hidden && !rcEmojiPanel.contains(e.target) && !emojiBtn.contains(e.target)) {
      rcEmojiPanel.hidden = true; emojiBtn.classList.remove('on');
    }
  });
  emojiWrap.append(emojiBtn, rcEmojiPanel);

  // Format buttons
  const fmtBold = makeFmtBtn('bold', '<b>B</b>', rcEditor);
  const fmtItalic = makeFmtBtn('italic', '<i>I</i>', rcEditor);
  const fmtStrike = makeFmtBtn('strikeThrough', '<s>S</s>', rcEditor);

  // Char counter + send
  const counter = document.createElement('span');
  counter.className = 'char-counter';
  counter.textContent = '0 / 500';

  const sendBtn = document.createElement('button');
  sendBtn.className = 'reply-send';
  sendBtn.textContent = 'Ответить';
  sendBtn.disabled = true;

  function onRcInput() {
    const len = rcEditor.textContent.length;
    counter.textContent = `${len} / 500`;
    counter.className = 'char-counter' + (len >= 500 ? ' over' : len >= 400 ? ' warn' : '');
    sendBtn.disabled = len === 0;
  }

  rcEditor.addEventListener('input', onRcInput);
  rcEditor.addEventListener('keydown', e => {
    if (rcEditor.textContent.length >= MAX_CHARS && !['Backspace','Delete','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) e.preventDefault();
  });
  rcEditor.addEventListener('paste', e => { e.preventDefault(); document.execCommand('insertText', false, e.clipboardData.getData('text/plain')); });

  sendBtn.addEventListener('click', submit);

  toolbar.append(photoLabel, photoInput2, emojiWrap, fmtBold, fmtItalic, fmtStrike);
  const tSep = document.createElement('span'); tSep.className = 't-sep';
  toolbar.append(tSep, counter, sendBtn);

  body.append(rcEditor, rcPreviews, toolbar);
  wrap.append(av, body);

  function submit() {
    const html = rcEditor.innerHTML.trim();
    const text = rcEditor.textContent.trim();
    if (!text) return;

    const reply = {
      id:        Date.now(),
      html:      sanitize(html),
      photos:    [...rcPhotos],
      createdAt: new Date().toISOString(),
      likes:     0,
      likedByMe: false,
      replies:   [],
    };

    const posts = loadPosts();
    const parent = findById(posts, parentId);
    if (!parent) return;
    if (!parent.replies) parent.replies = [];
    parent.replies.push(reply);
    savePosts(posts);

    // Append into DOM without full re-render
    let repliesWrap = section.querySelector('.replies-wrap');
    if (!repliesWrap) {
      repliesWrap = document.createElement('div');
      repliesWrap.className = 'replies-wrap';
      section.insertBefore(repliesWrap, wrap);
    }
    repliesWrap.appendChild(buildThreadItem(reply, Math.min(depth + 1, MAX_DEPTH)));

    // Update counter
    const allPosts = loadPosts();
    const fresh = findById(allPosts, parentId);
    if (fresh) commentBtn.querySelector('.act-count').textContent = countAllReplies(fresh) || '';

    // Reset
    rcEditor.innerHTML = '';
    rcPhotos = []; renderRcPreviews();
    counter.textContent = '0 / 500'; counter.className = 'char-counter';
    sendBtn.disabled = true;
    rcEmojiPanel.hidden = true; emojiBtn.classList.remove('on');
  }

  return wrap;
}

function makeFmtBtn(cmd, html, targetEditor) {
  const btn = document.createElement('button');
  btn.className = 't-btn fmt'; btn.dataset.cmd = cmd; btn.innerHTML = html;
  btn.addEventListener('mousedown', e => {
    e.preventDefault(); targetEditor.focus(); document.execCommand(cmd, false, null);
  });
  return btn;
}

// ─── Context menu ────────────────────────────────────────────
let _activeMenu = null;
function showItemMenu(anchor, id) {
  if (_activeMenu) { _activeMenu.remove(); _activeMenu = null; }

  const menu = document.createElement('div');
  menu.className = 'item-menu';

  const delBtn = document.createElement('button');
  delBtn.className = 'item-menu-btn item-menu-danger';
  delBtn.textContent = 'Удалить';
  delBtn.addEventListener('click', () => { menu.remove(); _activeMenu = null; deleteItem(id); });

  const cancelBtn = document.createElement('button');
  cancelBtn.className = 'item-menu-btn';
  cancelBtn.textContent = 'Отмена';
  cancelBtn.addEventListener('click', () => { menu.remove(); _activeMenu = null; });

  menu.append(delBtn, cancelBtn);
  anchor.parentElement.style.position = 'relative';
  anchor.parentElement.appendChild(menu);
  _activeMenu = menu;

  setTimeout(() => {
    document.addEventListener('click', function handler() {
      menu.remove(); _activeMenu = null;
      document.removeEventListener('click', handler);
    }, { once: true });
  }, 10);
}

// ─── Actions ─────────────────────────────────────────────────
function deleteItem(id) {
  const posts = loadPosts();
  removeById(posts, id);
  savePosts(posts);
  renderFeed();
}

function toggleLike(id) {
  const posts = loadPosts();
  const item = findById(posts, id);
  if (!item) return;
  item.likedByMe = !item.likedByMe;
  item.likes += item.likedByMe ? 1 : -1;
  savePosts(posts);
  // Update UI without full re-render
  const wrap = feed.querySelector(`[data-id="${id}"]`);
  if (wrap) {
    const likeBtn = wrap.querySelector('.thread-row > .col-right .act-btn');
    if (likeBtn) {
      likeBtn.classList.toggle('liked', item.likedByMe);
      const count = likeBtn.querySelector('.act-count');
      if (count) count.textContent = item.likes > 0 ? item.likes : '';
    }
  }
}

// ─── Helpers ─────────────────────────────────────────────────
function sanitize(html) {
  return html.replace(/<(?!\/?(?:b|i|s|br)\b)[^>]+>/gi, '');
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function relativeTime(iso) {
  const diff = (Date.now() - new Date(iso)) / 1000;
  if (diff < 60)     return 'только что';
  if (diff < 3600)   return `${Math.floor(diff / 60)} мин`;
  if (diff < 86400)  return `${Math.floor(diff / 3600)} ч`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} дн`;
  return new Date(iso).toLocaleDateString('ru-RU', { day:'2-digit', month:'2-digit', year:'numeric' });
}

// ─── Lightbox ─────────────────────────────────────────────────
function openLightbox(src) { lbImg.src = src; lightbox.classList.add('open'); }
lbClose.addEventListener('click', () => lightbox.classList.remove('open'));
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('open'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.classList.remove('open'); });

// ─── Init ─────────────────────────────────────────────────────
renderFeed();
