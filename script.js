const agentData = [
  {
    icon: '🤖',
    name: 'Revenue Leakage Detection',
    description: 'Continuously analyzes billing, order, and network events to identify hidden revenue leakage patterns and score opportunities.',
    role: 'Realtime monitoring',
    status: 'Active'
  },
  {
    icon: '🔎',
    name: 'Investigation Agent',
    description: 'Correlates customer history, provisioning records, and billing events to trace the root cause of each leak with evidence.',
    role: 'Root cause analysis',
    status: 'Investigating'
  },
  {
    icon: '💰',
    name: 'Revenue Recovery',
    description: 'Quantifies recoverable revenue, prioritizes high-value cases, and projects the financial recovery timeline.',
    role: 'Recovery forecasting',
    status: 'Prioritizing'
  },
  {
    icon: '🧭',
    name: 'Remediation Orchestration',
    description: 'Routes issues to the right teams, tracks work item progress, and monitors SLA and escalation thresholds.',
    role: 'Workflow orchestration',
    status: 'Running'
  },
  {
    icon: '📈',
    name: 'Executive Intelligence',
    description: 'Summarizes leakage trends, forecasts future exposure, and delivers strategic recommendations to leadership teams.',
    role: 'Executive briefing',
    status: 'Reporting'
  }
];

const leakData = [
  {
    title: 'Unbilled Fiber Service',
    impact: '$1.8M',
    confidence: '96%',
    status: 'critical',
    org: 'Billing Ops',
    summary: 'Active fiber service remains billed at zero even though the network and service activation completed successfully.',
    score: '92',
    cycleTime: '4.2 days',
    root: 'Missing billing trigger',
    evidence: ['Provisioning complete', 'Network active', 'No billing start event']
  },
  {
    title: 'Mobile Provisioning Drift',
    impact: '$1.2M',
    confidence: '94%',
    status: 'watch',
    org: 'Network Ops',
    summary: 'Premium plan was provisioned partially, and the customer was billed at a lower service class than was actually activated.',
    score: '88',
    cycleTime: '2.9 days',
    root: 'Provisioning mismatch',
    evidence: ['Order validated', 'Provisioning partial', 'Charge profile under-coded']
  },
  {
    title: 'Discount Misconfiguration',
    impact: '$890K',
    confidence: '91%',
    status: 'recovering',
    org: 'Product',
    summary: 'Promotional discount remained active beyond contract end date, causing recurring under-billing across eligible customers.',
    score: '84',
    cycleTime: '6.1 days',
    root: 'Policy expiration bug',
    evidence: ['Discount policy not expired', 'Date validation failure', 'Recurring billing overrun']
  },
  {
    title: 'Enterprise Invoice Gap',
    impact: '$2.4M',
    confidence: '98%',
    status: 'critical',
    org: 'Finance',
    summary: 'Multiple enterprise circuits were active in the inventory system but absent from the invoice line items for a major business customer.',
    score: '97',
    cycleTime: '1.6 days',
    root: 'Invoice reconciliation failure',
    evidence: ['Contract signed', 'Inventory active', 'Invoice output missing services']
  }
];

const technologyStack = [
  'Microsoft Copilot Studio',
  'Azure AI Foundry',
  'Azure OpenAI',
  'Microsoft Fabric',
  'OneLake',
  'Azure Data Factory',
  'Dataverse',
  'Power Apps',
  'Power Automate',
  'Power BI',
  'Microsoft Teams',
  'Azure Event Hubs',
  'Azure Functions',
  'Microsoft Entra ID',
  'Microsoft Purview'
];

const scenarios = [
  {
    id: 1,
    title: 'Why Revenue Leakage Matters',
    short: 'Financial exposure and EBITDA pressure',
    summary: 'A telecom operator discovers millions of dollars lost annually through billing and operational failures across its service lifecycle.',
    metrics: [
      { label: 'Annual exposure', value: '$48.7M' },
      { label: 'EBITDA impact', value: '−4.2%' },
      { label: 'Investigations', value: '184' },
      { label: 'Manual effort', value: '3.4x' }
    ]
  },
  {
    id: 2,
    title: 'Unbilled Fiber Service',
    short: 'Active service with no billing record',
    summary: 'A fiber customer completes service activation, but no billing trigger is created, leaving annual recurring revenue unbilled.',
    metrics: [
      { label: 'Estimated loss', value: '$1.8M' },
      { label: 'Detection confidence', value: '96%' },
      { label: 'Service status', value: 'Active' },
      { label: 'Action', value: 'Create invoice' }
    ]
  },
  {
    id: 3,
    title: 'Mobile Provisioning Failure',
    short: 'Premium plan billed at a lower tier',
    summary: 'The order system and provisioning platform disagree on the premium mobile entitlement, resulting in a lower billing profile and leakage.',
    metrics: [
      { label: 'Impact', value: '$1.2M' },
      { label: 'Root cause', value: 'Mismatch' },
      { label: 'Evidence', value: '3 systems' },
      { label: 'Recovery', value: '92%' }
    ]
  },
  {
    id: 4,
    title: 'Discount Misconfiguration',
    short: 'Expired discount never disabled',
    summary: 'A promotion did not expire as configured, leaving customers on a below-market price plan beyond the eligibility period.',
    metrics: [
      { label: 'Projected recovery', value: '$890K' },
      { label: 'Affected', value: '7,420' },
      { label: 'Root cause', value: 'Policy bug' },
      { label: 'Status', value: 'Recovering' }
    ]
  },
  {
    id: 5,
    title: 'Enterprise Billing Error',
    short: 'Key circuits omitted from invoices',
    summary: 'Large enterprise customers have multiple active circuits, but the billing platform omitted several services from invoice generation.',
    metrics: [
      { label: 'Impact', value: '$2.4M' },
      { label: 'Contract links', value: '9' },
      { label: 'Affecting', value: '1 client' },
      { label: 'Priority', value: 'Critical' }
    ]
  },
  {
    id: 6,
    title: 'Partner Settlement Discrepancy',
    short: 'Roaming partner reconciliation mismatch',
    summary: 'Partner settlement charges do not match the expected revenue share, creating a financial discrepancy across international roaming traffic.',
    metrics: [
      { label: 'Variance', value: '$640K' },
      { label: 'Latency', value: '3 days' },
      { label: 'Root cause', value: 'Settlement rule drift' },
      { label: 'Mode', value: 'Auto-flag' }
    ]
  },
  {
    id: 7,
    title: 'Automated Recovery Workflow',
    short: 'Recovery + remediation working together',
    summary: 'The Recovery Agent calculates the value, and the Remediation Agent automatically generates workstreams for billing, product, and network teams.',
    metrics: [
      { label: 'Cases queued', value: '31' },
      { label: 'Recovered', value: '$4.3M' },
      { label: 'SLA target', value: '72h' },
      { label: 'Status', value: 'On track' }
    ]
  },
  {
    id: 8,
    title: 'Business Impact',
    short: 'Before-and-after financial performance',
    summary: 'Leadership sees a measurable reduction in leakage, faster investigation cycles, and improved financial accuracy across the business.',
    metrics: [
      { label: 'Leakage reduction', value: '−22.4%' },
      { label: 'Recovery uplift', value: '+11.2%' },
      { label: 'Faster triage', value: '62%' },
      { label: 'Cost savings', value: '$3.1M' }
    ]
  }
];

function renderAgents() {
  const grid = document.getElementById('agentGrid');
  grid.innerHTML = agentData
    .map(
      (agent) => `
        <article class="agent-card">
          <div class="agent-icon">${agent.icon}</div>
          <h4>${agent.name}</h4>
          <p>${agent.description}</p>
          <div class="agent-meta">
            <span>${agent.role}</span>
            <span>${agent.status}</span>
          </div>
        </article>
      `
    )
    .join('');
}

function renderLeakTable() {
  const tbody = document.getElementById('leakTableBody');
  tbody.innerHTML = leakData
    .map(
      (item, index) => `
        <tr class="${index === 0 ? 'active' : ''}" data-index="${index}">
          <td><span class="table-badge">${item.title}</span></td>
          <td>${item.impact}</td>
          <td>${item.confidence}</td>
          <td><span class="status-pill ${item.status}">${item.status === 'critical' ? 'Critical' : item.status === 'watch' ? 'Watch' : 'Recovering'}</span></td>
          <td>${item.org}</td>
        </tr>
      `
    )
    .join('');

  tbody.querySelectorAll('tr').forEach((row) => {
    row.addEventListener('click', () => {
      tbody.querySelectorAll('tr').forEach((node) => node.classList.remove('active'));
      row.classList.add('active');
      renderLeakDetail(leakData[Number(row.dataset.index)]);
    });
  });

  renderLeakDetail(leakData[0]);
}

function renderLeakDetail(item) {
  const details = document.getElementById('leakDetails');
  details.innerHTML = `
    <div class="leak-summary">
      <h4>${item.title}</h4>
      <p>${item.summary}</p>
    </div>
    <div class="score-row">
      <div class="score-box">
        <span>Confidence</span>
        <strong>${item.confidence}</strong>
      </div>
      <div class="score-box">
        <span>Score</span>
        <strong>${item.score}</strong>
      </div>
    </div>
    <div class="score-row">
      <div class="score-box">
        <span>Recovery time</span>
        <strong>${item.cycleTime}</strong>
      </div>
      <div class="score-box">
        <span>Root cause</span>
        <strong>${item.root}</strong>
      </div>
    </div>
    <ul class="debug-list">
      ${item.evidence.map((point) => `<li><span>Signal</span><strong>${point}</strong></li>`).join('')}
    </ul>
  `;
}

function renderScenarioTiles() {
  const container = document.getElementById('scenarioTiles');
  container.innerHTML = scenarios.map((scenario, index) => `
    <button class="scenario-tile ${index === 0 ? 'active' : ''}" data-index="${index}">
      <strong>Tile ${scenario.id}</strong>
      <small>${scenario.short}</small>
    </button>
  `).join('');

  container.querySelectorAll('.scenario-tile').forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.index);
      container.querySelectorAll('.scenario-tile').forEach((tile) => tile.classList.remove('active'));
      button.classList.add('active');
      renderScenarioDetail(scenarios[index]);
    });
  });

  renderScenarioDetail(scenarios[0]);
}

function renderScenarioDetail(item) {
  const detail = document.getElementById('scenarioDetail');
  detail.innerHTML = `
    <div class="scenario-head">
      <h4>${item.title}</h4>
      <span class="status-pill recovering">Executive view</span>
    </div>
    <p class="summary">${item.summary}</p>
    <div class="scenario-metrics">
      ${item.metrics.map((metric) => `
        <div class="metric-box">
          <span>${metric.label}</span>
          <strong>${metric.value}</strong>
        </div>
      `).join('')}
    </div>
  `;
}

function renderTechnologyStack() {
  const container = document.getElementById('techStack');
  container.innerHTML = technologyStack.map((item) => `<span class="tech-chip">${item}</span>`).join('');
}

const themeToggle = document.getElementById('themeToggle');
const demoToggle = document.getElementById('demoToggle');
const walkthrough = document.getElementById('walkthroughSection');

themeToggle.addEventListener('click', () => {
  const currentTheme = document.body.dataset.theme;
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.dataset.theme = nextTheme;
  themeToggle.textContent = nextTheme === 'dark' ? 'Light mode' : 'Dark mode';
});

demoToggle.addEventListener('click', () => {
  walkthrough.classList.toggle('hidden');
  walkthrough.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

renderAgents();
renderLeakTable();
renderScenarioTiles();
renderTechnologyStack();
