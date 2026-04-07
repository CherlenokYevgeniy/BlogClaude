// ─── Constants ────────────────────────────────────────────────
const STORAGE_KEY  = 'notes_v2';
const MAX_CHARS    = 500;
const MAX_PHOTOS   = 2;
const USERNAME     = 'CherlenokYevgeniy';

// ─── Emoji data ───────────────────────────────────────────────
const EMOJI_CATS = [
  { id:'smileys', icon:'😊', label:'Смайлики', items:['😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','😊','😇','🥰','😍','🤩','😘','😗','😚','😙','🥲','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🤨','😐','😑','😶','😏','😒','🙄','😬','🤥','😌','😔','😪','🤤','😴','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','🥴','😵','🤯','🤠','🥳','🥸','😎','🤓','🧐','😕','😟','🙁','☹️','😮','😯','😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀','💩','🤡','👹','👺','👻','👽','🤖'] },
  { id:'people',  icon:'👋', label:'Люди',     items:['👋','🤚','🖐','✋','🖖','👌','🤌','🤏','✌️','🤞','🤟','🤘','🤙','👈','👉','👆','🖕','👇','☝️','👍','👎','✊','👊','🤛','🤜','👏','🙌','👐','🤲','🙏','✍️','💅','🤳','💪','🦾','🦿','🦵','🦶','👂','🦻','👃','👣','👁','👀','👄','💋','👅'] },
  { id:'animals', icon:'🐶', label:'Животные', items:['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🙈','🙉','🙊','🐔','🐧','🐦','🦆','🦅','🦉','🦇','🐝','🦋','🐌','🐞','🐜','🦟','🕷','🐢','🐍','🦎','🐙','🦑','🦐','🦞','🦀','🐡','🐠','🐟','🐬','🐳','🐋','🦈','🐊','🐘','🦛','🦏','🐪','🐫','🦒','🦘','🦬','🐃','🐂','🐄','🐎','🐖','🐏','🐑','🦙','🐐','🦌','🐕','🐩','🦮','🐈','🐓','🦃','🦤','🦚','🦜','🦢','🦩','🕊','🐇','🦝','🦨','🦡','🦫','🦦','🦥','🐁','🐀','🐿','🦔'] },
  { id:'food',    icon:'🍕', label:'Еда',       items:['🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🫐','🍒','🍑','🥭','🍍','🥥','🥝','🍅','🫒','🥑','🍆','🥦','🥬','🥒','🌶','🧄','🧅','🥔','🍠','🥐','🥯','🍞','🥖','🥨','🧀','🥚','🍳','🧈','🥞','🧇','🥓','🥩','🍗','🍖','🌭','🍔','🍟','🍕','🥪','🥙','🧆','🌮','🌯','🥗','🥘','🍝','🍜','🍲','🍛','🍣','🍱','🥟','🦪','🍤','🍙','🍚','🍘','🍥','🥮','🍢','🧁','🍰','🎂','🍮','🍭','🍬','🍫','🍿','🍩','🍪','🍯','🧃','🥤','🧋','🍵','☕','🫖','🍺','🍻','🥂','🍷','🥃','🍸','🍹','🍾'] },
  { id:'sport',   icon:'⚽', label:'Спорт',    items:['⚽','🏀','🏈','⚾','🥎','🎾','🏐','🏉','🎱','🏓','🏸','🏒','🥍','🏑','🏏','⛳','🏹','🎣','🤿','🥊','🥋','🎽','🛹','🛷','🏂','🪂','🏋️','🤼','🤸','🏆','🥇','🥈','🥉','🎖','🎫','🎪','🎭','🎨','🎬','🎤','🎧','🎼','🎹','🥁','🎷','🎺','🎸','🎻','🎲','♟️','🎯','🎳','🎮','🎰','🧩'] },
  { id:'travel',  icon:'🌍', label:'Места',    items:['🌍','🌎','🌏','🗺','🏔','⛰','🌋','🗻','🏕','🏖','🏜','🏝','🏟','🏛','🏗','🏘','🏠','🏡','🏢','🏥','🏦','🏨','🏪','🏫','🏬','🏭','🏯','🏰','💒','🗼','🗽','⛪','🕌','🛕','🕍','⛩','🕋','⛲','⛺','🌁','🌃','🏙','🌄','🌅','🌆','🌇','🌉','✈️','🚀','🛸','🚁','🛳','⛴','🚢','🚂','🚃','🚄','🚅','🚇','🚌','🚎','🏎','🚓','🚑','🚒','🚐','🛻','🚚','🚛','🚜','🏍','🛵','🚲','🛴','🛺','🚀'] },
  { id:'symbols', icon:'❤️', label:'Символы',  items:['❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔','❤️‍🔥','❤️‍🩹','💕','💞','💓','💗','💖','💘','💝','💟','☮️','✝️','☪️','🕉','✡️','☯️','🛐','💯','✅','❎','⭕','❌','✔️','☑️','⚡','🔥','💧','🌊','🌈','⭐','🌟','💫','❄️','🌙','☀️','🌤','⛅','🌧','⛈','🌩','🌪','🌈','☃️','⛄','🏳️','🏴','🚩','🎌','🏁','🎗','🎀','🎁','🎊','🎉','🎈','🎆','🎇','✨','🎃','🎄','🎋','🎍','🎎','🎏','🎑','🧧','🎐'] },
];

// ─── State ────────────────────────────────────────────────────
let selectedPhotos = [];   // base64 strings
let activeCat = 0;
let lastSel = null;        // saved selection before emoji panel click

// ─── DOM refs ─────────────────────────────────────────────────
const editor       = document.getElementById('editor');
const charCounter  = document.getElementById('charCounter');
const publishBtn   = document.getElementById('publishBtn');
const photoInput   = document.getElementById('photoInput');
const photoPreviews= document.getElementById('photoPreviews');
const emojiToggle  = document.getElementById('emojiToggle');
const emojiPanel   = document.getElementById('emojiPanel');
const emojiSearch  = document.getElementById('emojiSearch');
const emojiCats    = document.getElementById('emojiCats');
const emojiGrid    = document.getElementById('emojiGrid');
const feed         = document.getElementById('feed');
const lightbox     = document.getElementById('lightbox');
const lbImg        = document.getElementById('lbImg');
const lbClose      = document.getElementById('lbClose');

// ─── Editor ───────────────────────────────────────────────────
editor.addEventListener('input', onEditorInput);
editor.addEventListener('keydown', (e) => {
  if (charLen() >= MAX_CHARS && !isNavigationKey(e)) {
    // allow only navigation / delete keys when at limit
    if (!['Backspace','Delete','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) {
      e.preventDefault();
    }
  }
});

// Strip HTML on paste – keep plain text only
editor.addEventListener('paste', (e) => {
  e.preventDefault();
  const text = e.clipboardData.getData('text/plain');
  document.execCommand('insertText', false, text);
});

function onEditorInput() {
  const len = charLen();
  charCounter.textContent = `${len} / ${MAX_CHARS}`;
  charCounter.className = 'char-counter' + (len >= MAX_CHARS ? ' over' : len >= 400 ? ' warn' : '');
  publishBtn.disabled = len === 0;
}

function charLen() {
  return editor.textContent.length;
}

function isNavigationKey(e) {
  return ['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(e.key);
}

// ─── Formatting buttons ───────────────────────────────────────
document.querySelectorAll('.fmt').forEach(btn => {
  btn.addEventListener('mousedown', (e) => {
    e.preventDefault(); // don't steal focus from editor
    const cmd = btn.dataset.cmd;
    editor.focus();
    document.execCommand(cmd, false, null);
    editor.dispatchEvent(new Event('input'));
  });
});

// ─── Photo input ─────────────────────────────────────────────
photoInput.addEventListener('change', async () => {
  const slots = MAX_PHOTOS - selectedPhotos.length;
  const files = Array.from(photoInput.files).slice(0, slots);
  for (const f of files) {
    if (selectedPhotos.length >= MAX_PHOTOS) break;
    selectedPhotos.push(await toBase64(f));
  }
  photoInput.value = '';
  renderPhotoPreviews();
  updatePhotoBtn();
});

function toBase64(file) {
  return new Promise(res => {
    const r = new FileReader();
    r.onload = e => res(e.target.result);
    r.readAsDataURL(file);
  });
}

function renderPhotoPreviews() {
  photoPreviews.innerHTML = '';
  selectedPhotos.forEach((src, i) => {
    const wrap = document.createElement('div');
    wrap.className = 'pw';
    const img = document.createElement('img');
    img.src = src;
    const btn = document.createElement('button');
    btn.className = 'pw-remove';
    btn.innerHTML = '&#x2715;';
    btn.addEventListener('click', () => {
      selectedPhotos.splice(i, 1);
      renderPhotoPreviews();
      updatePhotoBtn();
    });
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
    btn.textContent = cat.icon;
    btn.title = cat.label;
    btn.addEventListener('mousedown', (e) => {
      e.preventDefault();
      activeCat = i;
      buildEmojiCats();
      fillGrid(EMOJI_CATS[i].items);
    });
    emojiCats.appendChild(btn);
  });
}

function fillGrid(items) {
  emojiGrid.innerHTML = '';
  items.forEach(em => {
    const btn = document.createElement('button');
    btn.className = 'ep-emoji';
    btn.textContent = em;
    btn.addEventListener('mousedown', (e) => {
      e.preventDefault();
      insertEmoji(em);
    });
    emojiGrid.appendChild(btn);
  });
}

function insertEmoji(em) {
  editor.focus();
  if (lastSel) {
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(lastSel);
  }
  document.execCommand('insertText', false, em);
  onEditorInput();
  // save new selection
  const sel = window.getSelection();
  if (sel.rangeCount) lastSel = sel.getRangeAt(0).cloneRange();
}

emojiToggle.addEventListener('mousedown', (e) => {
  e.preventDefault();
  // save current selection
  const sel = window.getSelection();
  if (sel.rangeCount) lastSel = sel.getRangeAt(0).cloneRange();

  const hidden = emojiPanel.hidden;
  emojiPanel.hidden = !hidden;
  emojiToggle.classList.toggle('on', !hidden === false ? false : true);
  if (!hidden === false) {
    // closed
    emojiToggle.classList.remove('on');
  } else {
    emojiToggle.classList.add('on');
    buildEmojiCats();
    fillGrid(EMOJI_CATS[activeCat].items);
  }
});

emojiSearch.addEventListener('input', () => {
  const q = emojiSearch.value.trim().toLowerCase();
  if (!q) {
    fillGrid(EMOJI_CATS[activeCat].items);
    return;
  }
  // Search across all categories
  const all = EMOJI_CATS.flatMap(c => c.items);
  // Simple: just show all (emoji don't have text we can search easily, just show all)
  fillGrid(all.filter(() => true)); // show all when searching (Unicode names not bundled)
});

// Close emoji panel when clicking outside
document.addEventListener('click', (e) => {
  if (!emojiPanel.hidden && !emojiPanel.contains(e.target) && e.target !== emojiToggle) {
    emojiPanel.hidden = true;
    emojiToggle.classList.remove('on');
  }
});

// ─── Publish ─────────────────────────────────────────────────
publishBtn.addEventListener('click', () => {
  const html  = editor.innerHTML.trim();
  const text  = editor.textContent.trim();
  if (!text) return;

  const post = {
    id:        Date.now(),
    html,
    photos:    [...selectedPhotos],
    createdAt: new Date().toISOString(),
    likes:     0,
    likedByMe: false,
  };

  const posts = loadPosts();
  posts.unshift(post);
  savePosts(posts);

  // Reset compose
  editor.innerHTML = '';
  charCounter.textContent = `0 / ${MAX_CHARS}`;
  charCounter.className = 'char-counter';
  selectedPhotos = [];
  renderPhotoPreviews();
  updatePhotoBtn();
  publishBtn.disabled = true;
  emojiPanel.hidden = true;
  emojiToggle.classList.remove('on');
  lastSel = null;

  renderFeed();
});

// ─── Storage ─────────────────────────────────────────────────
function loadPosts() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}
function savePosts(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

// ─── Feed ─────────────────────────────────────────────────────
function renderFeed() {
  const posts = loadPosts();
  feed.innerHTML = '';

  if (posts.length === 0) {
    feed.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🧵</div>
        <div>Ещё нет заметок. Напишите первую!</div>
      </div>`;
    return;
  }

  posts.forEach(post => feed.appendChild(buildPostCard(post)));
}

function buildPostCard(post) {
  const card = document.createElement('div');
  card.className = 'post-card';
  card.dataset.id = post.id;

  // Thread row
  const row = document.createElement('div');
  row.className = 'thread-row';

  // Left col
  const colL = document.createElement('div');
  colL.className = 'col-left';
  const av = document.createElement('div');
  av.className = 'avatar avatar-me';
  av.textContent = 'Ч';
  const line = document.createElement('div');
  line.className = 'thread-line';
  colL.append(av, line);

  // Right col
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
  time.textContent = relativeTime(post.createdAt);
  const menuBtn = document.createElement('button');
  menuBtn.className = 'post-menu-btn';
  menuBtn.innerHTML = '&middot;&middot;&middot;';
  menuBtn.title = 'Удалить';
  menuBtn.addEventListener('click', () => deletePost(post.id));
  head.append(uname, time, menuBtn);

  // Body text
  const body = document.createElement('div');
  body.className = 'post-body';
  body.innerHTML = sanitize(post.html || '');

  colR.append(head, body);

  // Images
  if (post.photos && post.photos.length > 0) {
    const imgs = document.createElement('div');
    imgs.className = 'post-imgs n' + post.photos.length;
    post.photos.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.loading = 'lazy';
      img.addEventListener('click', () => openLightbox(src));
      imgs.appendChild(img);
    });
    colR.appendChild(imgs);
  }

  // Actions
  const actions = document.createElement('div');
  actions.className = 'post-actions';

  // Like
  const likeBtn = document.createElement('button');
  likeBtn.className = 'act-btn' + (post.likedByMe ? ' liked' : '');
  likeBtn.innerHTML = `
    <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
    <span class="act-count">${post.likes > 0 ? post.likes : ''}</span>`;
  likeBtn.addEventListener('click', () => toggleLike(post.id));

  // Comment (decorative)
  const commentBtn = document.createElement('button');
  commentBtn.className = 'act-btn';
  commentBtn.innerHTML = `
    <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    <span class="act-count"></span>`;

  // Repost (decorative)
  const repostBtn = document.createElement('button');
  repostBtn.className = 'act-btn';
  repostBtn.innerHTML = `
    <svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
    <span class="act-count"></span>`;

  // Share (decorative)
  const shareBtn = document.createElement('button');
  shareBtn.className = 'act-btn';
  shareBtn.innerHTML = `
    <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;

  actions.append(likeBtn, commentBtn, repostBtn, shareBtn);
  colR.appendChild(actions);

  // Likes text
  if (post.likes > 0) {
    const likesRow = document.createElement('div');
    likesRow.className = 'post-likes-row';
    likesRow.innerHTML = `<span class="post-likes-text">${post.likes} ${pluralLikes(post.likes)}</span>`;
    colR.appendChild(likesRow);
  }

  row.append(colL, colR);
  card.appendChild(row);
  return card;
}

function deletePost(id) {
  const posts = loadPosts().filter(p => p.id !== id);
  savePosts(posts);
  renderFeed();
}

function toggleLike(id) {
  const posts = loadPosts();
  const post = posts.find(p => p.id === id);
  if (!post) return;
  post.likedByMe = !post.likedByMe;
  post.likes = post.likedByMe ? post.likes + 1 : post.likes - 1;
  savePosts(posts);
  renderFeed();
}

// ─── Helpers ─────────────────────────────────────────────────
function sanitize(html) {
  // Allow only safe inline tags
  return html.replace(/<(?!\/?(?:b|i|s|br)\b)[^>]+>/gi, '');
}

function relativeTime(iso) {
  const diff = (Date.now() - new Date(iso)) / 1000;
  if (diff < 60)    return 'только что';
  if (diff < 3600)  return `${Math.floor(diff / 60)} мин`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} ч`;
  if (diff < 604800)return `${Math.floor(diff / 86400)} дн`;
  return new Date(iso).toLocaleDateString('ru-RU', { day:'2-digit', month:'2-digit', year:'numeric' });
}

function pluralLikes(n) {
  const mod10 = n % 10, mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 19) return 'нравится';
  if (mod10 === 1) return 'нравится';
  if (mod10 >= 2 && mod10 <= 4) return 'нравится';
  return 'нравится';
}

// ─── Lightbox ─────────────────────────────────────────────────
function openLightbox(src) {
  lbImg.src = src;
  lightbox.classList.add('open');
}

lbClose.addEventListener('click', () => lightbox.classList.remove('open'));
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('open'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.classList.remove('open'); });

// ─── Init ─────────────────────────────────────────────────────
renderFeed();
