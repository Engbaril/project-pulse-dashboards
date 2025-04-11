
// Mock data for the project management dashboard

// Project Status Distribution
export const statusDistribution = [
  { name: 'On Track', value: 12, color: '#10b981' },
  { name: 'At Risk', value: 5, color: '#f59e0b' },
  { name: 'Off Track', value: 3, color: '#ef4444' },
  { name: 'Completed', value: 8, color: '#8b5cf6' },
  { name: 'Not Started', value: 4, color: '#6b7280' },
];

// Projects
export const projects = [
  {
    id: 'proj-001',
    title: 'ERP Implementation',
    description: 'Company-wide implementation of a new Enterprise Resource Planning system to streamline operations.',
    status: 'on-track' as const,
    progress: 75,
    dueDate: 'Aug 15, 2025',
    budget: { allocated: 850000, spent: 520000 },
    team: [
      { id: 'u1', name: 'John Smith', initials: 'JS' },
      { id: 'u2', name: 'Sarah Johnson', initials: 'SJ' },
      { id: 'u3', name: 'Michael Chen', initials: 'MC' },
      { id: 'u4', name: 'Emily Davis', initials: 'ED' },
    ],
    phase: 'Implementation',
    location: 'Global',
  },
  {
    id: 'proj-002',
    title: 'Office Relocation',
    description: 'Moving headquarters to a new location with minimal business disruption.',
    status: 'at-risk' as const,
    progress: 45,
    dueDate: 'Jun 30, 2025',
    budget: { allocated: 350000, spent: 180000 },
    team: [
      { id: 'u5', name: 'Robert Wilson', initials: 'RW' },
      { id: 'u6', name: 'Amanda Lee', initials: 'AL' },
      { id: 'u7', name: 'David Thompson', initials: 'DT' },
    ],
    phase: 'Execution',
    location: 'New York',
  },
  {
    id: 'proj-003',
    title: 'Cloud Migration',
    description: 'Migrating all on-premise infrastructure to cloud-based solutions.',
    status: 'off-track' as const,
    progress: 30,
    dueDate: 'Sep 10, 2025',
    budget: { allocated: 650000, spent: 420000 },
    team: [
      { id: 'u8', name: 'Jessica Martin', initials: 'JM' },
      { id: 'u9', name: 'Kevin Brown', initials: 'KB' },
      { id: 'u1', name: 'John Smith', initials: 'JS' },
    ],
    phase: 'Planning',
    location: 'Global',
  },
  {
    id: 'proj-004',
    title: 'Product Launch',
    description: 'Launch of our new flagship product in international markets.',
    status: 'on-track' as const,
    progress: 60,
    dueDate: 'Jul 22, 2025',
    budget: { allocated: 750000, spent: 380000 },
    team: [
      { id: 'u10', name: 'Laura Garcia', initials: 'LG' },
      { id: 'u11', name: 'Thomas Wright', initials: 'TW' },
      { id: 'u12', name: 'Patricia Lopez', initials: 'PL' },
      { id: 'u6', name: 'Amanda Lee', initials: 'AL' },
    ],
    phase: 'Execution',
    location: 'Europe',
  },
  {
    id: 'proj-005',
    title: 'Digital Transformation',
    description: 'Strategic initiative to transform business processes through digital technologies.',
    status: 'completed' as const,
    progress: 100,
    dueDate: 'Mar 15, 2025',
    budget: { allocated: 1200000, spent: 1150000 },
    team: [
      { id: 'u13', name: 'Andrew Kim', initials: 'AK' },
      { id: 'u2', name: 'Sarah Johnson', initials: 'SJ' },
      { id: 'u14', name: 'Michelle Wang', initials: 'MW' },
    ],
    phase: 'Closed',
    location: 'Global',
  },
  {
    id: 'proj-006',
    title: 'Supply Chain Optimization',
    description: 'Optimizing the entire supply chain to improve efficiency and reduce costs.',
    status: 'not-started' as const,
    progress: 0,
    dueDate: 'Nov 30, 2025',
    budget: { allocated: 480000, spent: 0 },
    team: [
      { id: 'u15', name: 'Richard Taylor', initials: 'RT' },
      { id: 'u16', name: 'Susan Clark', initials: 'SC' },
    ],
    phase: 'Initiation',
    location: 'APAC',
  },
];

// Budget data for charts
export const budgetData = [
  { name: 'ERP Implementation', planned: 850000, actual: 520000 },
  { name: 'Office Relocation', planned: 350000, actual: 180000 },
  { name: 'Cloud Migration', planned: 650000, actual: 420000 },
  { name: 'Product Launch', planned: 750000, actual: 380000 },
  { name: 'Digital Transformation', planned: 1200000, actual: 1150000 },
];

// Timeline data for charts
export const timelineData = [
  { name: 'Q1', planned: 3, actual: 2 },
  { name: 'Q2', planned: 5, actual: 4 },
  { name: 'Q3', planned: 7, actual: 3 },
  { name: 'Q4', planned: 4, actual: 5 },
];

// Risks and Issues
export const risksIssues = [
  {
    id: 'risk-001',
    type: 'risk' as const,
    title: 'Vendor delivery delays',
    project: 'ERP Implementation',
    priority: 'high' as const,
    status: 'open' as const,
    owner: 'John Smith',
  },
  {
    id: 'issue-001',
    type: 'issue' as const,
    title: 'Insufficient server capacity',
    project: 'Cloud Migration',
    priority: 'high' as const,
    status: 'open' as const,
    owner: 'Jessica Martin',
  },
  {
    id: 'risk-002',
    type: 'risk' as const,
    title: 'Budget overrun in Q3',
    project: 'Office Relocation',
    priority: 'medium' as const,
    status: 'mitigated' as const,
    owner: 'Robert Wilson',
  },
  {
    id: 'issue-002',
    type: 'issue' as const,
    title: 'Team skill gap for new technology',
    project: 'Cloud Migration',
    priority: 'medium' as const,
    status: 'open' as const,
    owner: 'Kevin Brown',
  },
  {
    id: 'risk-003',
    type: 'risk' as const,
    title: 'Regulatory compliance issues',
    project: 'Product Launch',
    priority: 'high' as const,
    status: 'mitigated' as const,
    owner: 'Laura Garcia',
  },
  {
    id: 'issue-003',
    type: 'issue' as const,
    title: 'Integration failed with legacy system',
    project: 'ERP Implementation',
    priority: 'high' as const,
    status: 'closed' as const,
    owner: 'Sarah Johnson',
  },
];

// Resource allocation data
export const resourceAllocation = [
  { name: 'Development', allocated: 12, utilized: 10 },
  { name: 'Design', allocated: 8, utilized: 7 },
  { name: 'PM', allocated: 5, utilized: 6 },
  { name: 'QA', allocated: 6, utilized: 4 },
  { name: 'Operations', allocated: 4, utilized: 3 },
];

// Teams
export const teams = [
  { id: 'team-1', name: 'Alpha Team', members: 8, projectsAssigned: 3 },
  { id: 'team-2', name: 'Beta Team', members: 6, projectsAssigned: 2 },
  { id: 'team-3', name: 'Gamma Team', members: 10, projectsAssigned: 4 },
  { id: 'team-4', name: 'Delta Team', members: 5, projectsAssigned: 1 },
];

// Locations
export const locations = [
  { id: 'loc-1', name: 'Global', projectCount: 3 },
  { id: 'loc-2', name: 'New York', projectCount: 1 },
  { id: 'loc-3', name: 'Europe', projectCount: 1 },
  { id: 'loc-4', name: 'APAC', projectCount: 1 },
];

// Project phases
export const phases = [
  { id: 'phase-1', name: 'Initiation', projectCount: 1 },
  { id: 'phase-2', name: 'Planning', projectCount: 1 },
  { id: 'phase-3', name: 'Execution', projectCount: 2 },
  { id: 'phase-4', name: 'Implementation', projectCount: 1 },
  { id: 'phase-5', name: 'Closed', projectCount: 1 },
];

// Dashboard summary stats
export const dashboardStats = [
  {
    title: 'Active Projects',
    value: '18',
    trend: { value: 12, isPositive: true },
  },
  {
    title: 'On Track',
    value: '72%',
    trend: { value: 5, isPositive: true },
  },
  {
    title: 'Budget Utilization',
    value: '$4.8M',
    trend: { value: 3, isPositive: false },
  },
  {
    title: 'Open Risks',
    value: '15',
    trend: { value: 0, isNeutral: true },
  },
];

// Project detail for a specific project
export const projectDetail = {
  id: 'proj-001',
  title: 'ERP Implementation',
  description: 'Company-wide implementation of a new Enterprise Resource Planning system to streamline operations and integrate financial, HR, and supply chain processes.',
  status: 'on-track' as const,
  progress: 75,
  startDate: 'Feb 10, 2025',
  dueDate: 'Aug 15, 2025',
  budget: { allocated: 850000, spent: 520000 },
  team: [
    { id: 'u1', name: 'John Smith', role: 'Project Manager', initials: 'JS' },
    { id: 'u2', name: 'Sarah Johnson', role: 'Business Analyst', initials: 'SJ' },
    { id: 'u3', name: 'Michael Chen', role: 'Technical Lead', initials: 'MC' },
    { id: 'u4', name: 'Emily Davis', role: 'Change Manager', initials: 'ED' },
  ],
  phase: 'Implementation',
  location: 'Global',
  milestones: [
    { id: 'm1', title: 'Project Kickoff', date: 'Feb 10, 2025', completed: true },
    { id: 'm2', title: 'Requirements Analysis', date: 'Mar 15, 2025', completed: true },
    { id: 'm3', title: 'System Configuration', date: 'May 20, 2025', completed: true },
    { id: 'm4', title: 'User Acceptance Testing', date: 'Jul 10, 2025', completed: false },
    { id: 'm5', title: 'Go Live', date: 'Aug 10, 2025', completed: false },
  ],
  risks: [
    {
      id: 'risk-001',
      title: 'Vendor delivery delays',
      description: 'The vendor may not deliver customizations on schedule.',
      priority: 'high' as const,
      status: 'open' as const,
      owner: 'John Smith',
      mitigation: 'Weekly status meetings with vendor, establish penalties for delays in contract.',
    },
    {
      id: 'risk-004',
      title: 'Data migration issues',
      description: 'Difficulty in migrating data from legacy systems may cause delays.',
      priority: 'medium' as const,
      status: 'mitigated' as const,
      owner: 'Michael Chen',
      mitigation: 'Additional resources allocated for data cleansing and validation.',
    },
  ],
  issues: [
    {
      id: 'issue-003',
      title: 'Integration failed with legacy system',
      description: 'The planned integration with the accounting system failed during testing.',
      priority: 'high' as const,
      status: 'closed' as const,
      owner: 'Sarah Johnson',
      resolution: 'Developed custom API adapter to facilitate data transfer between systems.',
    },
  ],
};
