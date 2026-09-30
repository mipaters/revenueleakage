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
  },
  {
    title: 'Roaming Promo Not Applied',
    impact: '$186K',
    confidence: '97%',
    status: 'critical',
    org: 'Billing Ops',
    summary: 'Eligible roaming customers were charged standard pay-as-you-go rates because the purchased travel pass was not applied by the rating rule.',
    score: '95',
    cycleTime: '2.1 days',
    root: 'Promo rating code mismatch',
    evidence: ['Travel pass active', 'Roaming sessions recorded', 'Pay-as-you-go rate applied']
  },
  {
    title: 'Partner Settlement Discrepancy',
    impact: '$640K',
    confidence: '93%',
    status: 'watch',
    org: 'Partner Finance',
    summary: 'Roaming partner settlement records do not match contract rates and mediation usage, leaving a disputed revenue variance.',
    score: '89',
    cycleTime: '5.4 days',
    root: 'Settlement rate table drift',
    evidence: ['Partner statement received', 'Mediation usage reconciled', 'Rate table variance identified']
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

const recoveryCases = [
  { id: 'RC-1042', issue: 'Unbilled fiber service', customer: 'Northstar Health Group', impact: 182000, team: 'Billing Ops', sla: '4h remaining', status: 'Ready to assign', owner: '' },
  { id: 'RC-1038', issue: 'Enterprise invoice gap', customer: 'Meridian Logistics', impact: 246000, team: 'Finance', sla: '1 day remaining', status: 'In progress', owner: 'J. Chen' },
  { id: 'RC-1029', issue: 'Mobile provisioning drift', customer: 'Pinecrest Wireless', impact: 96000, team: 'Network Ops', sla: 'At risk', status: 'Ready to assign', owner: '' },
  { id: 'RC-1016', issue: 'Expired discount recovery', customer: '7,420 consumer accounts', impact: 890000, team: 'Product', sla: 'Resolved', status: 'Resolved', owner: 'A. Patel' }
];

const scenarioWalkthroughs = {
  2: {
    label: 'Unbilled fiber service',
    approvalPrompt: 'Review the proposed 90-day, $450K billing adjustment. Nothing is sent to Billing Operations until you approve.',
    approvalAction: 'Approve remediation',
    rejectionMessage: 'Remediation was rejected. No recovery work item was created.',
    completionMessage: 'Walkthrough complete. The approved recovery is now visible in the Recovery Center below.',
    leakTitle: 'Unbilled Fiber Service',
    case: {
      id: 'SC-2001',
      issue: 'Northstar fiber billing correction',
      customer: 'Northstar Health Group',
      impact: 450000,
      team: 'Billing Ops'
    },
    steps: [
      {
        agent: 'Revenue Leakage Detection Agent',
        icon: '🤖',
        action: 'Scan service and billing events',
        result: 'Active fiber service detected with no matching billing account or recurring charge.',
        evidence: ['Order OS-78421 complete', 'Network activation EVT-99108 successful', 'No billing start event']
      },
      {
        agent: 'Investigation Agent',
        icon: '🔎',
        action: 'Correlate the customer timeline',
        result: 'The order-to-activation handoff succeeded, but the billing event was dropped during account migration.',
        evidence: ['CRM: Northstar Health Group', 'Network inventory: service active since Apr 01', 'Billing: no service instance found']
      },
      {
        agent: 'Revenue Recovery Agent',
        icon: '💰',
        action: 'Prepare a recovery recommendation',
        result: 'Estimated exposure is $1.8M annualized. The proposed initial adjustment is $450K for the validated 90-day period.',
        evidence: ['Annualized exposure: $1.8M', 'Validated recovery window: 90 days', 'Confidence: 96%']
      },
      {
        agent: 'Remediation Orchestration Agent',
        icon: '🧭',
        action: 'Create an approved billing correction',
        result: 'Billing Operations receives a prioritized work item to establish recurring billing and review the $450K adjustment.',
        evidence: ['Billing trigger repair', '90-day adjustment review', 'SLA: 72 hours']
      },
      {
        agent: 'Executive Intelligence Agent',
        icon: '📈',
        action: 'Publish the case outcome',
        result: 'The case is tracked in the recovery queue with an auditable approval, estimated value, accountable team, and SLA.',
        evidence: ['Recovery opportunity: $450K', 'Owner: Billing Operations', 'Annualized exposure remains under monitoring']
      }
    ]
  },
  3: {
    label: 'mobile provisioning failure',
    approvalPrompt: 'Approve a $320K service-rating correction for the validated premium-plan usage and the provisioning profile repair. No account changes or billing adjustments are applied until you approve.',
    approvalAction: 'Approve rating correction',
    rejectionMessage: 'The rating correction was rejected. No account changes or adjustments were made.',
    completionMessage: 'Walkthrough complete. The approved mobile rating correction is now tracked in the Recovery Center.',
    leakTitle: 'Mobile Provisioning Drift',
    case: {
      id: 'SC-2003',
      issue: 'Premium mobile rating correction',
      customer: '1,240 premium mobile accounts',
      impact: 320000,
      team: 'Network Ops'
    },
    steps: [
      {
        agent: 'Revenue Leakage Detection Agent',
        icon: '🤖',
        action: 'Compare purchased plans to billed tiers',
        result: 'Premium plan orders are paired with lower-tier billing records after incomplete provisioning updates.',
        evidence: ['1,240 premium plan orders', 'Billing profile: standard tier', 'Estimated exposure: $1.2M']
      },
      {
        agent: 'Investigation Agent',
        icon: '🔎',
        action: 'Trace the order and provisioning handoff',
        result: 'The order was accepted, but the premium feature activation acknowledgement did not reach the billing profile service.',
        evidence: ['Order OMS-402918: premium plan', 'Provisioning: feature activation incomplete', 'Billing catalog: standard tier retained']
      },
      {
        agent: 'Revenue Recovery Agent',
        icon: '💰',
        action: 'Validate the rating adjustment',
        result: 'The agent reconciles usage and contracts to estimate $320K in eligible undercharges, separately from the $1.2M annualized exposure.',
        evidence: ['Validated adjustment: $320K', 'Usage and entitlement matched', 'Confidence: 94%']
      },
      {
        agent: 'Remediation Orchestration Agent',
        icon: '🧭',
        action: 'Prepare the profile repair',
        result: 'Network Operations prepares the missing provisioning update and a billing review for verified premium usage.',
        evidence: ['Repair premium feature profile', 'Review validated usage adjustments', 'SLA: 72 hours']
      },
      {
        agent: 'Executive Intelligence Agent',
        icon: '📈',
        action: 'Publish the service impact',
        result: 'The incident is tracked with affected accounts, approved adjustment, team ownership, and provisioning root cause.',
        evidence: ['1,240 accounts monitored', 'Recovery opportunity: $320K', 'Provisioning mismatch trend tracked']
      }
    ]
  },
  4: {
    label: 'discount misconfiguration',
    approvalPrompt: 'Approve the $890K annualized exposure case and forward-looking discount-rule correction for 7,420 accounts. The proposal does not back-bill customers; eligibility and customer communication are reviewed first.',
    approvalAction: 'Approve discount correction',
    rejectionMessage: 'The discount correction was rejected. No customer pricing or discount rules were changed.',
    completionMessage: 'Walkthrough complete. The approved discount eligibility review is now tracked in the Recovery Center.',
    leakTitle: 'Discount Misconfiguration',
    case: {
      id: 'SC-2004',
      issue: 'Expired promotion eligibility correction',
      customer: '7,420 promotional accounts',
      impact: 890000,
      team: 'Product'
    },
    steps: [
      {
        agent: 'Revenue Leakage Detection Agent',
        icon: '🤖',
        action: 'Check promotion end dates against billing',
        result: 'The agent finds promotional discounts still applied after their offer windows closed.',
        evidence: ['7,420 accounts beyond offer end date', 'Discount still present on invoices', 'Annualized exposure: $890K']
      },
      {
        agent: 'Investigation Agent',
        icon: '🔎',
        action: 'Inspect the offer eligibility rule',
        result: 'A campaign migration left the expiration event unset for one promotion cohort; the customer contracts and original offer terms are verified.',
        evidence: ['Campaign: SPRING-24-MIGRATED', 'Expiration event: missing', 'Offer terms and account eligibility matched']
      },
      {
        agent: 'Revenue Recovery Agent',
        icon: '💰',
        action: 'Quantify forward-looking exposure',
        result: 'The agent estimates $890K annualized exposure and recommends ending only verified expired discounts, with no retrospective customer charges.',
        evidence: ['Annualized exposure: $890K', 'Eligible cohort: 7,420 accounts', 'Back-billing: excluded']
      },
      {
        agent: 'Remediation Orchestration Agent',
        icon: '🧭',
        action: 'Prepare a reviewed offer-rule change',
        result: 'Product prepares the corrected expiration rule and a customer-care communication plan for human review before the next bill cycle.',
        evidence: ['Correct future offer expiration', 'Customer-care notice review', 'SLA: next bill cycle']
      },
      {
        agent: 'Executive Intelligence Agent',
        icon: '📈',
        action: 'Publish the exposure and guardrails',
        result: 'Leadership sees the projected recurring exposure, affected population, customer protection guardrails, and decision audit trail.',
        evidence: ['7,420 accounts under review', 'Annualized exposure: $890K', 'Customer back-billing prohibited']
      }
    ]
  },
  5: {
    label: 'enterprise billing error',
    approvalPrompt: 'Approve a $600K catch-up invoice proposal for nine circuits verified against Meridian Logistics’ signed contract and service inventory. No invoice is issued until Finance approves.',
    approvalAction: 'Approve invoice proposal',
    rejectionMessage: 'The invoice proposal was rejected. No customer invoice or billing change was issued.',
    completionMessage: 'Walkthrough complete. The approved enterprise invoice review is now tracked in the Recovery Center.',
    leakTitle: 'Enterprise Invoice Gap',
    case: {
      id: 'SC-2005',
      issue: 'Meridian Logistics circuit invoice review',
      customer: 'Meridian Logistics · 9 active circuits',
      impact: 600000,
      team: 'Finance'
    },
    steps: [
      {
        agent: 'Revenue Leakage Detection Agent',
        icon: '🤖',
        action: 'Compare enterprise inventory to invoices',
        result: 'Nine active customer circuits appear in network inventory but are missing from recent invoice line items.',
        evidence: ['9 active circuits', 'No matching recurring invoice lines', 'Portfolio exposure: $2.4M']
      },
      {
        agent: 'Investigation Agent',
        icon: '🔎',
        action: 'Match contract, inventory, and billing records',
        result: 'Each circuit maps to a signed contract and active service; an account migration caused invoice account codes to diverge.',
        evidence: ['Contract: MLG-ENT-8841', 'Network inventory: all 9 circuits active', 'Billing account mapping: stale']
      },
      {
        agent: 'Revenue Recovery Agent',
        icon: '💰',
        action: 'Calculate the verified invoice proposal',
        result: 'The agent calculates $600K in a 90-day catch-up estimate, subject to contract-rate and customer-account reconciliation.',
        evidence: ['Proposed 90-day amount: $600K', 'Contract rates matched', 'Confidence: 98%']
      },
      {
        agent: 'Remediation Orchestration Agent',
        icon: '🧭',
        action: 'Route the invoice for Finance approval',
        result: 'Finance receives an itemized draft with circuit references and contract evidence; invoice release remains on hold.',
        evidence: ['9 itemized circuit lines', 'Contract evidence attached', 'Invoice hold until approval']
      },
      {
        agent: 'Executive Intelligence Agent',
        icon: '📈',
        action: 'Report enterprise exposure and decision',
        result: 'The enterprise exposure and proposed catch-up amount appear in the recovery view with Finance ownership and approval status.',
        evidence: ['Portfolio exposure: $2.4M', 'Invoice proposal: $600K', 'Customer billing approval recorded']
      }
    ]
  },
  6: {
    label: 'partner settlement discrepancy',
    approvalPrompt: 'Approve a $214K settlement dispute for the validated roaming rate variance. The partner claim is only prepared for review; no payment or settlement record is changed until you approve.',
    approvalAction: 'Approve settlement dispute',
    rejectionMessage: 'The settlement dispute was rejected. No partner claim or settlement adjustment was submitted.',
    completionMessage: 'Walkthrough complete. The approved partner dispute is now tracked in the Recovery Center.',
    leakTitle: 'Partner Settlement Discrepancy',
    case: {
      id: 'SC-2006',
      issue: 'Atlantic Mobile roaming settlement dispute',
      customer: 'Atlantic Mobile · roaming partner',
      impact: 214000,
      team: 'Partner Finance'
    },
    steps: [
      {
        agent: 'Revenue Leakage Detection Agent',
        icon: '🤖',
        action: 'Compare partner statements to expected rates',
        result: 'Settlement charges diverge from expected contract rates for roaming traffic recorded in the same period.',
        evidence: ['Statement variance: $640K', 'Period: May settlement', 'Partner: Atlantic Mobile']
      },
      {
        agent: 'Investigation Agent',
        icon: '🔎',
        action: 'Reconcile usage, contract, and settlement',
        result: 'Mediation usage matches, but the partner statement applied a superseded rate table to a subset of roaming destinations.',
        evidence: ['Mediation records reconciled', 'Contract rate schedule: current', 'Statement rate table: superseded']
      },
      {
        agent: 'Revenue Recovery Agent',
        icon: '💰',
        action: 'Validate the dispute amount',
        result: 'The agent isolates $214K of supported variance for dispute and separates it from the larger $640K statement exposure pending further reconciliation.',
        evidence: ['Supported dispute: $214K', 'Remaining variance: under review', 'Confidence: 93%']
      },
      {
        agent: 'Remediation Orchestration Agent',
        icon: '🧭',
        action: 'Prepare an evidence-backed partner claim',
        result: 'Partner Finance prepares a dispute packet with contract clauses, usage records, and the corrected rate table for authorized review.',
        evidence: ['Contract and usage evidence attached', 'Partner claim: draft only', 'SLA: 5 business days']
      },
      {
        agent: 'Executive Intelligence Agent',
        icon: '📈',
        action: 'Publish settlement recovery progress',
        result: 'The $214K proposed dispute and remaining $426K reconciliation are reported separately with owners and settlement status.',
        evidence: ['$214K supported dispute', '$426K remains under review', 'No settlement action before approval']
      }
    ]
  },
  9: {
    label: 'Roaming promo package',
    approvalPrompt: 'Approve $186K in customer billing credits and a rating-rule correction. No credits or configuration changes happen without your approval.',
    approvalAction: 'Approve credits & rule fix',
    rejectionMessage: 'The proposed credits and rating-rule change were rejected. No customer adjustments or billing changes were made.',
    completionMessage: 'Walkthrough complete. The approved promo correction is now tracked in the Recovery Center.',
    leakTitle: 'Roaming Promo Not Applied',
    case: {
      id: 'SC-2009',
      issue: 'Roaming promo billing correction',
      customer: '312 eligible roaming customers',
      impact: 186000,
      team: 'Billing Ops'
    },
    steps: [
      {
        agent: 'Revenue Leakage Detection Agent',
        icon: '🤖',
        action: 'Compare roaming passes to rated sessions',
        result: 'The agent finds eligible travel passes that were active while roaming sessions were charged at standard pay-as-you-go rates.',
        evidence: ['312 customers affected', '1,284 roaming days reviewed', 'Estimated billing variance: $186K']
      },
      {
        agent: 'Investigation Agent',
        icon: '🔎',
        action: 'Trace the offer through billing',
        result: 'Customers purchased the Roam Easy Day Pass, but the rating rule mapped their sessions to the default retail roaming tariff.',
        evidence: ['Offer catalog: ROAM-EU-12 active', 'Customer subscriptions: pass attached', 'Rated events: PAYG-ROAM tariff']
      },
      {
        agent: 'Revenue Recovery Agent',
        icon: '💰',
        action: 'Calculate customer adjustment exposure',
        result: 'The mismatch affected 312 customers. The recommended $186K represents the validated difference between pass pricing and posted roaming charges.',
        evidence: ['Proposed customer credits: $186K', 'Affected accounts: 312', 'Confidence: 97%']
      },
      {
        agent: 'Remediation Orchestration Agent',
        icon: '🧭',
        action: 'Prepare the rating fix and credit batch',
        result: 'Billing Operations prepares a corrected promo mapping and a reviewable credit batch; neither is applied until a human approves.',
        evidence: ['Correct promo-to-rating mapping', 'Credit batch for 312 accounts', 'SLA: 48 hours']
      },
      {
        agent: 'Executive Intelligence Agent',
        icon: '📈',
        action: 'Publish the customer and revenue impact',
        result: 'The incident, approval decision, affected customers, and adjustment value are added to the executive recovery view.',
        evidence: ['Adjustment under review: $186K', 'Customer impact: 312 accounts', 'Control: approval required before billing changes']
      }
    ]
  }
};

const walkthroughStates = Object.fromEntries(
  Object.keys(scenarioWalkthroughs).map((scenarioId) => [
    scenarioId,
    { completedSteps: [], approval: 'pending' }
  ])
);

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
  },
  {
    id: 9,
    title: 'Roaming Promo Not Applied',
    short: 'Purchased travel pass missed by billing',
    summary: 'Customers bought an eligible roaming promo package, but billing rated their roaming usage at standard pay-as-you-go rates instead of applying the package.',
    metrics: [
      { label: 'Proposed credits', value: '$186K' },
      { label: 'Customers affected', value: '312' },
      { label: 'Sessions reviewed', value: '1,284' },
      { label: 'Detection confidence', value: '97%' }
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
    const selectLeak = () => {
      tbody.querySelectorAll('tr').forEach((node) => node.classList.remove('active'));
      row.classList.add('active');
      renderLeakDetail(leakData[Number(row.dataset.index)]);
    };
    row.addEventListener('click', selectLeak);
    row.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectLeak();
      }
    });
    row.tabIndex = 0;
    row.setAttribute('role', 'button');
    row.setAttribute('aria-label', `View investigation for ${leakData[Number(row.dataset.index)].title}`);
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
    <button class="scenario-tile ${index === 1 ? 'active' : ''}" data-index="${index}">
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

  renderScenarioDetail(scenarios[1]);
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
    ${scenarioWalkthroughs[item.id] ? '<section id="scenarioWalkthrough" class="fiber-walkthrough" aria-live="polite"></section>' : ''}
  `;
  if (scenarioWalkthroughs[item.id]) renderScenarioWalkthrough(item.id);
}

function renderScenarioWalkthrough(scenarioId) {
  const container = document.getElementById('scenarioWalkthrough');
  if (!container) return;

  const config = scenarioWalkthroughs[scenarioId];
  const state = walkthroughStates[scenarioId];
  const { completedSteps, approval } = state;
  const { steps } = config;
  const awaitingApproval = completedSteps.length === 3 && approval === 'pending';
  const declined = approval === 'rejected';
  const finished = completedSteps.length === steps.length;
  const activeIndex = completedSteps.length;

  container.innerHTML = `
    <div class="fiber-walkthrough-heading">
      <div>
        <span class="section-kicker">Interactive agent walkthrough</span>
        <h5>Follow the ${config.label} case from signal to approved action</h5>
        <p>Advance each agent yourself. The proposed remediation pauses for your approval before billing work is created.</p>
      </div>
      <button type="button" class="secondary-btn small" data-walkthrough-action="reset">
        ${completedSteps.length || approval !== 'pending' ? 'Restart walkthrough' : 'Reset'}
      </button>
    </div>
    <ol class="agent-timeline">
      ${steps.map((step, index) => {
        const isComplete = completedSteps.includes(index);
        const isActive = index === activeIndex && !awaitingApproval && !declined && !finished;
        const isLocked = !isComplete && !isActive;
        const result = isComplete
          ? `<p class="agent-result">${step.result}</p>
             <div class="evidence-chips">${step.evidence.map((evidence) => `<span>${evidence}</span>`).join('')}</div>`
          : '';
        const control = isActive
          ? `<button type="button" class="primary-btn small" data-walkthrough-action="run-step" data-step="${index}">${step.action}</button>`
          : `<span class="timeline-state">${isComplete ? 'Completed' : isLocked ? 'Waiting' : 'Ready'}</span>`;
        return `
          <li class="agent-timeline-step ${isComplete ? 'complete' : ''} ${isActive ? 'active' : ''} ${isLocked ? 'locked' : ''}">
            <span class="timeline-icon" aria-hidden="true">${step.icon}</span>
            <div class="timeline-body">
              <div class="timeline-title-row"><strong>${step.agent}</strong>${control}</div>
              ${result}
            </div>
          </li>
        `;
      }).join('')}
    </ol>
    ${awaitingApproval ? `
      <div class="human-approval">
        <div class="approval-heading"><span aria-hidden="true">✋</span><div><strong>Human approval required</strong><p>${config.approvalPrompt}</p></div></div>
        <div class="approval-controls">
          <button type="button" class="primary-btn small" data-walkthrough-action="approve">${config.approvalAction}</button>
          <button type="button" class="secondary-btn small" data-walkthrough-action="reject">Reject and stop</button>
        </div>
      </div>
    ` : ''}
    ${declined ? `<p class="walkthrough-outcome declined" role="status">${config.rejectionMessage}</p>` : ''}
    ${finished ? `<p class="walkthrough-outcome completed" role="status">${config.completionMessage}</p>` : ''}
    <p class="demo-disclaimer">Demo simulation using sample data; actions do not connect to or change live billing systems.</p>
  `;

  container.querySelectorAll('[data-walkthrough-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const { walkthroughAction, step } = button.dataset;
      if (walkthroughAction === 'reset') {
        state.completedSteps = [];
        state.approval = 'pending';
      } else if (walkthroughAction === 'run-step') {
        completeScenarioStep(scenarioId, Number(step));
      } else if (walkthroughAction === 'approve') {
        approveScenarioRemediation(scenarioId);
      } else if (walkthroughAction === 'reject') {
        state.approval = 'rejected';
        toast('Remediation rejected · no changes made');
      }
      renderScenarioWalkthrough(scenarioId);
    });
  });
}

function completeScenarioStep(scenarioId, stepIndex) {
  const state = walkthroughStates[scenarioId];
  const { steps } = scenarioWalkthroughs[scenarioId];
  if (stepIndex !== state.completedSteps.length) return;
  if (stepIndex >= 3 && state.approval !== 'approved') return;
  state.completedSteps.push(stepIndex);
  toast(`${steps[stepIndex].agent} completed its step`);
}

function approveScenarioRemediation(scenarioId) {
  const config = scenarioWalkthroughs[scenarioId];
  const state = walkthroughStates[scenarioId];
  if (state.completedSteps.length !== 3 || state.approval !== 'pending') return;

  state.approval = 'approved';
  state.completedSteps.push(3);
  const existingCase = recoveryCases.find((item) => item.id === config.case.id);
  if (!existingCase) {
    recoveryCases.unshift({
      ...config.case,
      sla: '72h remaining',
      status: 'In progress',
      owner: config.case.team
    });
  }

  const relatedLeak = leakData.find((item) => item.title === config.leakTitle);
  if (relatedLeak) relatedLeak.status = 'recovering';
  renderLeakTable();
  renderRecoveryQueue();
  toast(`Approved · billing remediation work item ${config.case.id} created`);
}

function renderTechnologyStack() {
  const container = document.getElementById('techStack');
  container.innerHTML = technologyStack.map((item) => `<span class="tech-chip">${item}</span>`).join('');
}

function renderRecoveryQueue() {
  const queue = document.getElementById('recoveryQueue');
  const openCases = recoveryCases.filter((item) => item.status !== 'Resolved').length;
  const recoveredAmount = recoveryCases
    .filter((item) => item.status === 'Resolved')
    .reduce((total, item) => total + item.impact, 0);

  document.getElementById('recoverySummary').textContent =
    `${openCases} open · ${formatCurrency(recoveredAmount)} recovered`;

  queue.innerHTML = recoveryCases.map((item) => `
    <article class="recovery-card ${item.status === 'Resolved' ? 'resolved' : ''}">
      <div class="recovery-card-heading">
        <span class="case-id">${item.id}</span>
        <span class="status-pill ${item.status === 'Resolved' ? 'recovering' : item.sla === 'At risk' ? 'critical' : 'watch'}">${item.status}</span>
      </div>
      <h4>${item.issue}</h4>
      <p>${item.customer}</p>
      <div class="recovery-meta">
        <span>Est. recovery<strong>${formatCurrency(item.impact)}</strong></span>
        <span>Assigned team<strong>${item.team}</strong></span>
        <span>SLA<strong>${item.sla}</strong></span>
      </div>
      <div class="recovery-actions">
        ${item.owner
          ? `<span class="assigned-label">Owner: ${item.owner}</span>`
          : `<button class="secondary-btn small" data-recovery-action="assign" data-case-id="${item.id}">Assign to me</button>`}
        ${item.status !== 'Resolved'
          ? `<button class="primary-btn small" data-recovery-action="resolve" data-case-id="${item.id}">Mark resolved</button>`
          : '<span class="assigned-label">Recovery confirmed</span>'}
      </div>
    </article>
  `).join('');

  queue.querySelectorAll('[data-recovery-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const recoveryCase = recoveryCases.find((item) => item.id === button.dataset.caseId);
      if (!recoveryCase) return;

      if (button.dataset.recoveryAction === 'assign') {
        recoveryCase.owner = 'You';
        recoveryCase.status = 'In progress';
        toast(`${recoveryCase.id} assigned to you · ${recoveryCase.team} notified`);
      } else {
        recoveryCase.owner = recoveryCase.owner || 'You';
        recoveryCase.status = 'Resolved';
        recoveryCase.sla = 'Met';
        toast(`${formatCurrency(recoveryCase.impact)} recovery confirmed for ${recoveryCase.customer}`);
      }
      renderRecoveryQueue();
    });
  });
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(amount);
}

let toastTimer;
function toast(message) {
  const notification = document.getElementById('toast');
  notification.textContent = message;
  notification.classList.add('visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => notification.classList.remove('visible'), 3200);
}

function navigateTo(targetId, navButton) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  document.querySelectorAll('.nav-link').forEach((button) => {
    button.classList.toggle('active', button === navButton);
    if (button === navButton) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
}

function exportLeakageCsv() {
  const columns = ['Leak', 'Financial impact', 'Confidence', 'Status', 'Responsible organization', 'Root cause'];
  const rows = leakData.map((item) => [
    item.title,
    item.impact,
    item.confidence,
    item.status,
    item.org,
    item.root
  ]);
  const csv = [columns, ...rows]
    .map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(','))
    .join('\r\n');
  const file = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(file);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'revenue-leakage-dashboard.csv';
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
  toast('Dashboard exported as revenue-leakage-dashboard.csv');
}

function openPlaybook() {
  const content = document.getElementById('playbookContent');
  content.innerHTML = agentData.map((agent, index) => `
    <article class="playbook-step">
      <span class="playbook-step-number">${String(index + 1).padStart(2, '0')}</span>
      <div>
        <h3>${agent.icon} ${agent.name}</h3>
        <p>${agent.description}</p>
        <span class="playbook-output">${index === 0 ? 'Output: scored leak signal' : index === 1 ? 'Output: evidence-backed root cause' : index === 2 ? 'Output: prioritized recovery estimate' : index === 3 ? 'Output: assigned, trackable work item' : 'Output: executive impact briefing'}</span>
      </div>
    </article>
  `).join('');
  document.getElementById('playbookDialog').showModal();
}

const themeToggle = document.getElementById('themeToggle');
const demoToggle = document.getElementById('demoToggle');
const walkthrough = document.getElementById('walkthroughSection');
const playbookDialog = document.getElementById('playbookDialog');

themeToggle.addEventListener('click', () => {
  const currentTheme = document.body.dataset.theme;
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.dataset.theme = nextTheme;
  themeToggle.textContent = nextTheme === 'dark' ? 'Light mode' : 'Dark mode';
});

demoToggle.addEventListener('click', () => {
  const opening = walkthrough.classList.contains('hidden');
  walkthrough.classList.toggle('hidden', !opening);
  demoToggle.setAttribute('aria-expanded', String(opening));
  demoToggle.textContent = opening ? 'Hide Executive Demo Walkthrough' : 'Executive Demo Walkthrough';
  if (opening) walkthrough.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.querySelectorAll('.nav-link').forEach((button) => {
  button.addEventListener('click', () => navigateTo(button.dataset.target, button));
});

document.getElementById('launchOperations').addEventListener('click', () => {
  const firstCriticalIndex = leakData.findIndex((item) => item.status === 'critical');
  const criticalRow = document.querySelector(`#leakTableBody tr[data-index="${firstCriticalIndex}"]`);
  criticalRow?.click();
  navigateTo('leakageDashboard', document.querySelector('.nav-link[data-target="leakageDashboard"]'));
  toast('Operations view ready · highest-priority leak selected');
});

document.querySelectorAll('.playbook-trigger').forEach((button) => {
  button.addEventListener('click', openPlaybook);
});

document.getElementById('closePlaybook').addEventListener('click', () => playbookDialog.close());
playbookDialog.addEventListener('click', (event) => {
  if (event.target === playbookDialog) playbookDialog.close();
});
document.getElementById('exportView').addEventListener('click', exportLeakageCsv);

renderAgents();
renderLeakTable();
renderScenarioTiles();
renderTechnologyStack();
renderRecoveryQueue();
