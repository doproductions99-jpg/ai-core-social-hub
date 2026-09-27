const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const accounts = [
  {
    id: 'ig-velocity',
    name: 'Velocity Labs',
    platform: 'Instagram',
    niche: 'Startup growth',
    status: 'Running',
    followers: 48200,
    tone: 'Bold, tactical, high-energy',
    contentMix: ['carousels', 'reels', 'stories'],
    nextPost: 'Today · 9:30 AM'
  },
  {
    id: 'x-briefly',
    name: 'Briefly AI',
    platform: 'X / Twitter',
    niche: 'AI commentary',
    status: 'Optimizing',
    followers: 31500,
    tone: 'Sharp, informed, opinionated',
    contentMix: ['threads', 'hot takes', 'quotes'],
    nextPost: 'Today · 11:00 AM'
  },
  {
    id: 'yt-creator',
    name: 'Creator OS',
    platform: 'YouTube Shorts',
    niche: 'Creator systems',
    status: 'Scheduled',
    followers: 62800,
    tone: 'Practical, educational',
    contentMix: ['shorts', 'tutorials', 'hooks'],
    nextPost: 'Tomorrow · 7:45 AM'
  }
];

const queue = [
  {
    id: 'post-101',
    account: 'Velocity Labs',
    platform: 'Instagram',
    type: 'Carousel',
    status: 'Queued',
    date: 'Today',
    title: 'The 5 metrics a founder should watch before scaling',
    score: 94
  },
  {
    id: 'post-102',
    account: 'Briefly AI',
    platform: 'X',
    type: 'Thread',
    status: 'Generating',
    date: 'Today',
    title: 'Why most AI teams fail to ship a usable product',
    score: 91
  },
  {
    id: 'post-103',
    account: 'Creator OS',
    platform: 'YouTube Shorts',
    type: 'Short',
    status: 'Scheduled',
    date: 'Tomorrow',
    title: 'The 3 systems every creator needs before they go viral',
    score: 96
  }
];

const overview = {
  dailyOutput: 12,
  engagement: '+28.4%',
  conversion: '3.7%',
  approvalRate: '96%',
  revenueLift: '$14.2K',
  activeAccounts: 9,
  automations: 23,
  distribution: {
    organic: 62,
    paid: 18,
    referral: 20
  }
};

app.get('/api/overview', (req, res) => {
  res.json(overview);
});

app.get('/api/accounts', (req, res) => {
  res.json(accounts);
});

app.get('/api/queue', (req, res) => {
  res.json(queue);
});

app.post('/api/generate-post', (req, res) => {
  const { account, platform } = req.body;

  const generated = {
    id: `post-${Date.now()}`,
    account: account || 'New Account',
    platform: platform || 'Social platform',
    type: 'AI-generated',
    status: 'Ready to Review',
    date: 'Now',
    title: 'AI-generated concept: Build systems, not hacks',
    score: 98
  };

  queue.unshift(generated);

  res.json({ ok: true, post: generated, message: 'New content concept generated and placed into review.' });
});

app.post('/api/schedule-post', (req, res) => {
  const { account, platform, title } = req.body;

  const scheduled = {
    id: `post-${Date.now()}`,
    account: account || 'Auto account',
    platform: platform || 'Main channel',
    type: 'Scheduled',
    status: 'Approved',
    date: 'Next slot',
    title: title || 'Daily cadence post: Stay visible, stay useful',
    score: 95
  };

  queue.unshift(scheduled);

  res.json({ ok: true, scheduled, message: 'Post scheduled and queued for automation.' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`AI Core Social Hub running at http://localhost:${PORT}`);
});
