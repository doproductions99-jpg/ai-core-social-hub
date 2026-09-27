* {
  box-sizing: border-box;
}

:root {
  --bg: #07111f;
  --bg-strong: #0d1f33;
  --panel: rgba(20, 33, 52, 0.86);
  --panel-alt: rgba(10, 20, 32, 0.96);
  --line: rgba(149, 176, 255, 0.2);
  --text: #eaf3ff;
  --muted: #93a8c8;
  --accent: #63e6be;
  --accent-2: #7cc4ff;
  --warning: #ffcc70;
  --shadow: 0 18px 50px rgba(0, 0, 0, 0.38);
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(88, 153, 255, 0.18), transparent 30%),
    radial-gradient(circle at bottom right, rgba(99, 230, 190, 0.16), transparent 28%),
    var(--bg);
  color: var(--text);
}

body {
  padding: 28px;
}

button {
  font: inherit;
}

.app-shell {
  max-width: 1400px;
  min-height: calc(100vh - 56px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 280px 1fr;
  background: rgba(12, 18, 31, 0.84);
  border: 1px solid var(--line);
  border-radius: 26px;
  overflow: hidden;
  box-shadow: var(--shadow);
  backdrop-filter: blur(12px);
}

.sidebar {
  background: rgba(4, 9, 18, 0.8);
  border-right: 1px solid var(--line);
  padding: 28px 20px;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 36px;
}

.brand-mark {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--accent-2), var(--accent));
  color: #08131d;
  font-weight: 800;
}

.eyebrow {
  margin: 0;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 11px;
}

h1, h2, h3, p {
  margin: 0;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 28px;
}

.nav-item {
  background: transparent;
  border: 1px solid transparent;
  color: var(--text);
  text-align: left;
  padding: 12px 14px;
  border-radius: 12px;
  transition: 0.2s ease;
  cursor: pointer;
}

.nav-item.active,
.nav-item:hover {
  background: rgba(124, 196, 255, 0.08);
  border-color: var(--line);
}

.mini-panel {
  margin-top: 34px;
  padding: 18px 14px;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: linear-gradient(180deg, rgba(16, 33, 51, 0.9), rgba(11, 20, 31, 0.9));
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mini-panel strong {
  font-size: 22px;
}

.mini-panel span {
  color: var(--muted);
  font-size: 0.92rem;
}

.main-panel {
  padding: 28px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
}

.topbar h2 {
  font-size: clamp(1.6rem, 2.5vw, 2.3rem);
}

.status-pill {
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(99, 230, 190, 0.1);
  border: 1px solid rgba(99, 230, 190, 0.35);
  color: var(--accent);
  font-weight: 700;
}

.hero-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 18px;
  margin-bottom: 24px;
}

.hero-card,
.panel {
  background: linear-gradient(180deg, rgba(17, 25, 39, 0.9), rgba(9, 16, 26, 0.94));
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 18px 18px 14px;
}

.hero-card {
  min-height: 160px;
}

.hero-card.accent {
  background: linear-gradient(135deg, rgba(124, 196, 255, 0.12), rgba(17, 25, 39, 0.9));
}

.hero-card.highlight {
  background: linear-gradient(135deg, rgba(99, 230, 190, 0.12), rgba(17, 25, 39, 0.9));
}

.card-header,
.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  color: var(--muted);
  margin-bottom: 18px;
}

.spark {
  color: var(--accent-2);
  font-weight: 700;
}

.hero-card h3 {
  font-size: clamp(2.2rem, 4vw, 3rem);
  margin-bottom: 10px;
}

.hero-card p {
  color: var(--muted);
  line-height: 1.5;
}

.content-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 22px;
}

.panel {
  min-height: 360px;
}

.action-btn {
  background: linear-gradient(135deg, var(--accent-2), var(--accent));
  color: #05151d;
  border: none;
  padding: 10px 16px;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
}

.action-btn.secondary {
  background: rgba(255,255,255,0.06);
  border: 1px solid var(--line);
  color: var(--text);
}

.accounts-list,
.queue-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.account-card,
.queue-item {
  background: rgba(11, 18, 30, 0.85);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 14px 14px;
}

.account-card {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
}

.account-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.account-name {
  font-size: 1rem;
  font-weight: 700;
}

.account-platform {
  color: var(--muted);
  font-size: 0.85rem;
}

.badge {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  border: 1px solid transparent;
}

.badge.running {
  background: rgba(99, 230, 190, 0.12);
  border-color: rgba(99, 230, 190, 0.35);
  color: var(--accent);
}

.badge.optimizing,
.badge.scheduled,
.badge.queued {
  background: rgba(124, 196, 255, 0.12);
  border-color: rgba(124, 196, 255, 0.35);
  color: var(--accent-2);
}

.account-detail {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  color: var(--muted);
  font-size: 0.82rem;
}

.queue-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.queue-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.queue-type {
  font-size: 0.76rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.queue-title {
  font-weight: 600;
  line-height: 1.45;
}

.queue-score {
  font-weight: 800;
  color: var(--accent);
}

@media (max-width: 980px) {
  body {
    padding: 18px;
  }

  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }

  .hero-grid,
  .content-grid {
    grid-template-columns: 1fr;
  }
}
