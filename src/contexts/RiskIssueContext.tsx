
import React, { createContext, useContext, useState, useEffect } from 'react';
import { risksIssues as initialRisksIssues } from '@/services/mockData';
import { RiskIssue, RiskIssueFormValues } from '@/types/risks';
import { useToast } from '@/hooks/use-toast';

interface RiskIssueContextType {
  risks: RiskIssue[];
  issues: RiskIssue[];
  allItems: RiskIssue[];
  addRiskIssue: (values: RiskIssueFormValues) => void;
  statsCount: {
    openRisks: number;
    mitigatedRisks: number;
    openIssues: number;
    resolvedIssues: number;
  };
}

const RiskIssueContext = createContext<RiskIssueContextType | undefined>(undefined);

export function RiskIssueProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<RiskIssue[]>(initialRisksIssues);
  const { toast } = useToast();
  
  // Calculate derived state
  const risks = items.filter(item => item.type === 'risk');
  const issues = items.filter(item => item.type === 'issue');
  
  // Calculate stats counts
  const statsCount = {
    openRisks: risks.filter(risk => risk.status === 'open').length,
    mitigatedRisks: risks.filter(risk => risk.status === 'mitigated' || risk.status === 'closed').length,
    openIssues: issues.filter(issue => issue.status === 'open').length,
    resolvedIssues: issues.filter(issue => issue.status === 'closed' || issue.status === 'mitigated').length,
  };

  // Function to add a new risk or issue
  const addRiskIssue = (values: RiskIssueFormValues) => {
    const newItem: RiskIssue = {
      id: `${values.type}-${Date.now().toString(36)}`,
      ...values
    };
    
    setItems(prevItems => [...prevItems, newItem]);
    
    toast({
      title: `New ${values.type} added`,
      description: `"${values.title}" has been added successfully.`,
    });
  };

  return (
    <RiskIssueContext.Provider 
      value={{ 
        risks, 
        issues, 
        allItems: items, 
        addRiskIssue,
        statsCount
      }}
    >
      {children}
    </RiskIssueContext.Provider>
  );
}

export function useRiskIssue() {
  const context = useContext(RiskIssueContext);
  if (context === undefined) {
    throw new Error('useRiskIssue must be used within a RiskIssueProvider');
  }
  return context;
}
