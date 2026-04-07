const STORAGE_KEY = 'notes_posts';
const MAX_CHARS = 500;
const MAX_PHOTOS = 2;

let selectedPhotos = []; // array of base64 strings

const textarea = document.getElementById('postText');
const charCounter = document.getElementById('charCounter');
const publishBtn = document.getElementById('publishBtn');
const photoInput = document.getElementById('photoInput');
const photoLabel = document.getElementById('photoLabel');
const photoPreviews = document.getElementById('photoPreviews');
const feed = document.getElementById('feed');

// --- Character counter ---
textarea.addEventListener('input', () => {
  const len = textarea.value.length;
  charCounter.textContent = `${len} / ${MAX_CHARS}`;
  charCounter.className = 'char-counter' + (len >= MAX_CHARS ? ' limit' : len >= 400 ? ' warn' : '');
  updatePublishState();
});

function updatePublishState() {
  const hasText = textarea.value.trim().length > 0;
  publishBtn.disabled = !hasText;
}

// --- Photo selection ---
photoInput.addEventListener('change', async () => {
  const files = Array.from(photoInput.files).slice(0, MAX_PHOTOS - selectedPhotos.length);
  for (const file of files) {
    if (selectedPhotos.length >= MAX_PHOTOS) break;
    const b64 = await readFileAsDataURL(file);
    selectedPhotos.push(b64);
  }
  photoInput.value = '';
  renderPreviews();
  updatePhotoLabel();
});

function readFileAsDataURL(file) {
  return new Promise((res) => {
    const reader = new FileReader();
    reader.onload = (e) => res(e.target.result);
    reader.readAsDataURL(file);
  });
}

function renderPreviews() {
  photoPreviews.innerHTML = '';
  selectedPhotos.forEach((src, i) => {
    const wrap = document.createElement('div');
    wrap.className = 'preview-wrap';
    const img = document.createElement('img');
    img.src = src;
    const btn = document.createElement('button');
    btn.className = 'remove-photo';
    btn.textContent = '×';
    btn.addEventListener('click', () => {
      selectedPhotos.splice(i, 1);
      renderPreviews();
      updatePhotoLabel();
    });
    wrap.appendChild(img);
    wrap.appendChild(btn);
    photoPreviews.appendChild(wrap);
  });
}

function updatePhotoLabel() {
  if (selectedPhotos.length >= MAX_PHOTOS) {
    photoLabel.classList.add('disabled');
  } else {
    photoLabel.classList.remove('disabled');
  }
}

// --- Publish ---
publishBtn.addEventListener('click', () => {
  const text = textarea.value.trim();
  if (!text) return;

  const post = {
    id: Date.now(),
    text,
    photos: [...selectedPhotos],
    createdAt: new Date().toISOString(),
  };

  const posts = loadPosts();
  posts.unshift(post);
  savePosts(posts);

  textarea.value = '';
  charCounter.textContent = `0 / ${MAX_CHARS}`;
  charCounter.className = 'char-counter';
  selectedPhotos = [];
  renderPreviews();
  updatePhotoLabel();
  updatePublishState();

  renderFeed();
});

// --- Storage ---
function loadPosts() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}

function savePosts(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

// --- Render feed ---
function renderFeed() {
  const posts = loadPosts();
  feed.innerHTML = '';

  if (posts.length === 0) {
    feed.innerHTML = '<p class="empty-state">Пока нет заметок. Напишите первую!</p>';
    return;
  }

  posts.forEach((post) => {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.dataset.id = post.id;

    const header = document.createElement('div');
    header.className = 'post-header';

    const time = document.createElement('span');
    time.className = 'post-time';
    time.textContent = formatDate(post.createdAt);

    const delBtn = document.createElement('button');
    delBtn.className = 'post-delete';
    delBtn.title = 'Удалить';
    delBtn.innerHTML = '&times;';
    delBtn.addEventListener('click', () => deletePost(post.id));

    header.appendChild(time);
    header.appendChild(delBtn);

    const textEl = document.createElement('p');
    textEl.className = 'post-text';
    textEl.textContent = post.text;

    card.appendChild(header);
    card.appendChild(textEl);

    if (post.photos && post.photos.length > 0) {
      const grid = document.createElement('div');
      grid.className = `post-images ${post.photos.length === 1 ? 'one' : 'two'}`;
      post.photos.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        img.loading = 'lazy';
        img.addEventListener('click', () => openLightbox(src));
        grid.appendChild(img);
      });
      card.appendChild(grid);
    }

    feed.appendChild(card);
  });
}

function deletePost(id) {
  const posts = loadPosts().filter((p) => p.id !== id);
  savePosts(posts);
  renderFeed();
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleString('ru-RU', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
}

// --- Lightbox ---
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
const lbImg = document.createElement('img');
const lbClose = document.createElement('button');
lbClose.className = 'lightbox-close';
lbClose.textContent = '×';
lbClose.addEventListener('click', () => lightbox.classList.remove('open'));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); });
lightbox.appendChild(lbImg);
lightbox.appendChild(lbClose);
document.body.appendChild(lightbox);

function openLightbox(src) {
  lbImg.src = src;
  lightbox.classList.add('open');
}

// --- Init ---
updatePublishState();
renderFeed();
