/* =========================================================
   SHARED BEHAVIOR
   ========================================================= */

// Swap a broken/missing image for a soft text placeholder instead
// of a broken-image icon, so the site looks fine before you add photos.
function withImageFallback(imgEl, label){
  imgEl.addEventListener("error", () => {
    const holder = imgEl.parentElement;
    imgEl.remove();
    const fallback = document.createElement("div");
    fallback.className = "fallback-label";
    fallback.textContent = label;
    holder.appendChild(fallback);
  }, { once: true });
}

/* ---------- projects grid (projects.html) ---------- */
function renderProjectGrid(){
  const grid = document.querySelector("[data-project-grid]");
  if (!grid) return;

  const categories = ["All", ...new Set(PROJECTS.map(p => p.category))];
  const filterRow = document.querySelector("[data-filter-row]");

  function draw(list){
    grid.innerHTML = "";
    list.forEach(p => {
      const card = document.createElement("a");
      card.href = `project.html?id=${encodeURIComponent(p.id)}`;
      card.className = "project-card";
      card.innerHTML = `
        <img src="${p.image}" alt="${p.title}">
        <div class="card-meta">
          <p class="cat">${p.category} — ${p.year}</p>
          <h3>${p.title}</h3>
        </div>
      `;
      grid.appendChild(card);
      withImageFallback(card.querySelector("img"), `Add ${p.image}`);
    });
  }

  if (filterRow){
    filterRow.innerHTML = "";
    categories.forEach((cat, i) => {
      const btn = document.createElement("button");
      btn.textContent = cat;
      if (i === 0) btn.classList.add("active");
      btn.addEventListener("click", () => {
        filterRow.querySelectorAll("button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        draw(cat === "All" ? PROJECTS : PROJECTS.filter(p => p.category === cat));
      });
      filterRow.appendChild(btn);
    });
  }

  draw(PROJECTS);
}

/* ---------- project detail (project.html) ---------- */
function renderProjectDetail(){
  const root = document.querySelector("[data-project-detail]");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = PROJECTS.find(p => p.id === id) || PROJECTS[0];

  if (!project){
    root.innerHTML = "<p>Project not found.</p>";
    return;
  }

  document.title = `${project.title} — Jorene`;

  root.innerHTML = `
    <div class="detail-hero">
      <div class="detail-media">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="detail-copy">
        <a href="projects.html" class="back-link">&larr; Back to projects</a>
        <p class="cat">${project.category} — ${project.year}</p>
        <h1>${project.title}</h1>
        <p class="summary">${project.summary}</p>
        <div class="meta-grid">
          <div><span>Role</span>${project.role}</div>
          <div><span>Year</span>${project.year}</div>
          <div><span>Skills</span>${project.skills}</div>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="detail-body">
        ${project.body.map(p => `<p>${p}</p>`).join("")}
      </div>
    </div>
  `;

  withImageFallback(root.querySelector(".detail-media img"), `Add ${project.image}`);
}

function renderEventText(text){
  if (Array.isArray(text)){
    return text.map(line => `<p class="event-para">${line}</p>`).join("");
  }
  return `<p>${text}</p>`;
}

function renderEventText(text){
  if (Array.isArray(text)){
    return text.map(line => `<p class="event-para">${line}</p>`).join("");
  }
  return `<p>${text}</p>`;
}

function renderEducationTimeline(){
  const root = document.querySelector("[data-timeline-root]");
  if (!root) return;

  const layers = TIMELINE.map((t, i) =>
    `<div class="scroll-bg-layer${i === 0 ? " active" : ""}" data-bg-for="${t.id}" style="background-image:url('${t.bg}');"></div>`
  ).join("");

  const railButtons = TIMELINE.map((t, i) =>
    `<button class="rail-year${i === 0 ? " active" : ""}" data-rail-for="${t.id}">${t.year}</button>`
  ).join("");

  const points = TIMELINE.map(t => `
    <div class="scroll-point" data-bg="${t.id}" id="point-${t.id}" data-event-index="0">
      ${t.events.length > 1 ? `
        <div class="event-nav-top">
          <span class="event-count">1 / ${t.events.length}</span>
          <button class="event-next" aria-label="Next event this year">&rarr;</button>
        </div>` : ""}
      <img class="timeline-photo" src="${t.events[0].image}" alt="${t.events[0].title}">
      <div class="scroll-point-text">
        <p class="date">${t.year}</p>
        <h3>${t.events[0].title}</h3>
        <div class="event-body">${renderEventText(t.events[0].text)}</div>
      </div>
    </div>
  `).join("");

  root.innerHTML = `
    <div class="scroll-bg">
      ${layers}
      <div class="scroll-rail">
        <div class="rail-line"></div>
        <div class="rail-track">${railButtons}</div>
      </div>
    </div>
    <div class="wrap scroll-track">${points}<div class="scroll-spacer"></div></div>
  `;

  root.querySelectorAll(".timeline-photo").forEach(img =>
    withImageFallback(img, `Add ${img.getAttribute("src")}`)
  );

  root.querySelectorAll(".event-next").forEach(btn => {
    btn.addEventListener("click", () => {
      const point = btn.closest(".scroll-point");
      const t = TIMELINE.find(x => x.id === point.dataset.bg);
      let idx = (parseInt(point.dataset.eventIndex, 10) + 1) % t.events.length;
      point.dataset.eventIndex = idx;

      const ev = t.events[idx];
      point.querySelector(".timeline-photo").src = ev.image;
      point.querySelector(".timeline-photo").alt = ev.title;
      point.querySelector("h3").textContent = ev.title;
      point.querySelector(".event-body").outerHTML = `<div class="event-body">${renderEventText(ev.text)}</div>`;
      point.querySelector(".event-count").textContent = `${idx + 1} / ${t.events.length}`;
    });
  });

  initScrollObserver();
}

function initScrollObserver(){
  const points = document.querySelectorAll(".scroll-point");
  const layers = document.querySelectorAll(".scroll-bg-layer");
  const rail = document.querySelectorAll(".rail-year");
  const track = document.querySelector(".rail-track");
  const railWindow = document.querySelector(".scroll-rail");
  if (!points.length || !track) return;

  const itemHeight = window.innerWidth <= 768 ? 42 : 70; // must match CSS .rail-year height

  function moveTrackTo(index){
    const windowHeight = railWindow.offsetHeight;
    const offset = (windowHeight / 2) - (index * itemHeight) - (itemHeight / 2);
    track.style.transform = `translateY(${offset}px)`;
  }

  moveTrackTo(0); // start aligned on first year

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const key = entry.target.dataset.bg;
        const index = TIMELINE.findIndex(t => t.id === key);

        layers.forEach(layer => layer.classList.toggle("active", layer.dataset.bgFor === key));
        rail.forEach(btn => btn.classList.toggle("active", btn.dataset.railFor === key));
        moveTrackTo(index);
      }
    });
  }, { rootMargin: "-50% 0px -50% 0px", threshold: 0 });

  points.forEach(p => observer.observe(p));

  rail.forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById(`point-${btn.dataset.railFor}`)?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function initScrollObserver(){
  const points = document.querySelectorAll(".scroll-point");
  const layers = document.querySelectorAll(".scroll-bg-layer");
  const rail = document.querySelectorAll(".rail-year");
  if (!points.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const key = entry.target.dataset.bg;
        layers.forEach(layer => layer.classList.toggle("active", layer.dataset.bgFor === key));
        rail.forEach(btn => btn.classList.toggle("active", btn.dataset.railFor === key));
      }
    });
  }, { rootMargin: "-50% 0px -50% 0px", threshold: 0 });

  points.forEach(p => observer.observe(p));

  rail.forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById(`point-${btn.dataset.railFor}`)?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjectGrid();
  renderProjectDetail();
  renderEducationTimeline();
});
