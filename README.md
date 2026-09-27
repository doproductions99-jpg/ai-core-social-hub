async function loadOverview() {
  const res = await fetch('/api/overview');
  const data = await res.json();

  document.getElementById('dailyOutput').textContent = `${data.dailyOutput} posts`;
  document.getElementById('engagement').textContent = data.engagement;
  document.getElementById('approvalRate').textContent = data.approvalRate;
}

async function loadAccounts() {
  const res = await fetch('/api/accounts');
  const accounts = await res.json();

  const list = document.getElementById('accountsList');
  list.innerHTML = accounts.map(account => `
    <div class="account-card">
      <div>
        <div class="account-meta">
          <div>
            <div class="account-name">${account.name}</div>
            <div class="account-platform">${account.platform}</div>
          </div>
          <span class="badge ${account.status.toLowerCase().replace(/\s+/g, '')}">${account.status}</span>
        </div>
        <div class="account-detail">
          <span>${account.niche}</span>
          <span>${account.followers.toLocaleString()} followers</span>
          <span>${account.nextPost}</span>
        </div>
      </div>
      <div class="account-detail" style="flex-direction: column; align-items: flex-end; justify-content: center;">
        <span>${account.tone}</span>
        <span>${account.contentMix.join(' • ')}</span>
      </div>
    </div>
  `).join('');
}

async function loadQueue() {
  const res = await fetch('/api/queue');
  const queue = await res.json();

  const list = document.getElementById('queueList');
  list.innerHTML = queue.map(item => `
    <div class="queue-item">
      <div class="queue-top">
        <div class="queue-type">${item.platform} • ${item.type}</div>
        <span class="badge ${item.status.toLowerCase().replace(/\s+/g, '')}">${item.status}</span>
      </div>
      <div class="queue-title">${item.title}</div>
      <div class="account-detail">
        <span>${item.account}</span>
        <span>${item.date}</span>
        <span class="queue-score">${item.score}/100</span>
      </div>
    </div>
  `).join('');
}

async function generatePost() {
  const account = 'Velocity Labs';
  const platform = 'Instagram';

  const res = await fetch('/api/generate-post', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ account, platform })
  });

  const data = await res.json();
  if (data.ok) {
    await loadQueue();
    alert(data.message);
  }
}

async function schedulePost() {
  const res = await fetch('/api/schedule-post', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      account: 'Briefly AI',
      platform: 'X',
      title: 'Daily cadence: 3 plays that turn attention into trust'
    })
  });

  const data = await res.json();
  if (data.ok) {
    await loadQueue();
    alert(data.message);
  }
}

async function init() {
  await loadOverview();
  await loadAccounts();
  await loadQueue();

  document.getElementById('generatePostBtn').addEventListener('click', generatePost);
  document.getElementById('scheduleBtn').addEventListener('click', schedulePost);
}

init();
