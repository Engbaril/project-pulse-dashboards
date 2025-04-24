
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, AlertCircle } from 'lucide-react';
import { useRiskIssue } from '@/contexts/RiskIssueContext';

const priorityColors = {
  high: 'bg-danger-light text-danger border-danger/40',
  medium: 'bg-warning-light text-warning border-warning/40',
  low: 'bg-success-light text-success border-success/40',
};

const statusColors = {
  open: 'bg-danger-light text-danger border-danger/40',
  mitigated: 'bg-warning-light text-warning border-warning/40',
  closed: 'bg-success-light text-success border-success/40',
};

const RiskIssueTable = () => {
  const { allItems } = useRiskIssue();
  
  // Show only the most recent 5 items
  const items = [...allItems].sort((a, b) => 
    b.id.localeCompare(a.id)
  ).slice(0, 5);

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Recent Risks & Issues</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Type</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Owner</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  {item.type === 'risk' ? (
                    <AlertTriangle className="h-4 w-4 text-warning" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-danger" />
                  )}
                </TableCell>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.project}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={priorityColors[item.priority]}>
                    {item.priority}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={statusColors[item.status]}>
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>{item.owner}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RiskIssueTable;
