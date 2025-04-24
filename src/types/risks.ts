
export interface RiskIssue {
  id: string;
  type: 'risk' | 'issue';
  title: string;
  project: string;
  priority: 'high' | 'medium' | 'low';
  status: 'open' | 'mitigated' | 'closed';
  owner: string;
  description?: string;
}

export interface RiskIssueFormValues {
  title: string;
  type: 'risk' | 'issue';
  project: string;
  priority: 'high' | 'medium' | 'low';
  status: 'open' | 'mitigated' | 'closed';
  owner: string;
  description?: string;
}
