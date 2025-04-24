
import React, { useState } from 'react';
import { 
  AlertTriangle, 
  AlertCircle, 
  PlusCircle, 
  Filter
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import PageLayout from '@/components/layout/PageLayout';
import { risksIssues } from '@/services/mockData';
import { AddRiskIssueDialog } from '@/components/risks/AddRiskIssueDialog';

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

const Risks = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  
  const risks = risksIssues.filter(item => item.type === 'risk');
  const issues = risksIssues.filter(item => item.type === 'issue');
  
  const handleNewEntry = (values: any) => {
    // In a real app, you would save this to your backend/database
    // For now, we'll just show a toast notification
    toast({
      title: `New ${values.type} added`,
      description: `"${values.title}" has been added successfully.`,
    });
  };
  
  return (
    <PageLayout showFilters={true}>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Risks & Issues</h1>
            <p className="text-muted-foreground mt-1">
              Identify, track, and mitigate project risks and issues
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <Button size="sm" variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button 
              size="sm" 
              className="flex items-center gap-2"
              onClick={() => setIsDialogOpen(true)}
            >
              <PlusCircle className="h-4 w-4" />
              New Entry
            </Button>
          </div>
        </div>
        
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <div className="relative mb-2">
                  <div className="text-5xl font-bold text-danger">15</div>
                  <AlertTriangle className="absolute -top-3 -right-3 h-6 w-6 text-danger" />
                </div>
                <p className="text-sm font-medium">Open Risks</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <div className="relative mb-2">
                  <div className="text-5xl font-bold text-success">9</div>
                  <AlertTriangle className="absolute -top-3 -right-3 h-6 w-6 text-success" />
                </div>
                <p className="text-sm font-medium">Mitigated Risks</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <div className="relative mb-2">
                  <div className="text-5xl font-bold text-danger">7</div>
                  <AlertCircle className="absolute -top-3 -right-3 h-6 w-6 text-danger" />
                </div>
                <p className="text-sm font-medium">Open Issues</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <div className="relative mb-2">
                  <div className="text-5xl font-bold text-success">12</div>
                  <AlertCircle className="absolute -top-3 -right-3 h-6 w-6 text-success" />
                </div>
                <p className="text-sm font-medium">Resolved Issues</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="risks">
          <TabsList>
            <TabsTrigger value="risks" className="flex items-center gap-1">
              <AlertTriangle className="h-4 w-4" />
              Risks
            </TabsTrigger>
            <TabsTrigger value="issues" className="flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              Issues
            </TabsTrigger>
          </TabsList>
          
          {/* Risks Tab */}
          <TabsContent value="risks" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Risks</CardTitle>
                <CardDescription>
                  View and manage potential obstacles that might impact your projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Risk Description</TableHead>
                      <TableHead>Project</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Owner</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {risks.map((risk) => (
                      <TableRow key={risk.id}>
                        <TableCell className="font-mono text-xs">
                          {risk.id}
                        </TableCell>
                        <TableCell className="font-medium">
                          {risk.title}
                        </TableCell>
                        <TableCell>{risk.project}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={priorityColors[risk.priority]}>
                            {risk.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={statusColors[risk.status]}>
                            {risk.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{risk.owner}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Issues Tab */}
          <TabsContent value="issues" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Issues</CardTitle>
                <CardDescription>
                  Track and resolve problems that have already occurred
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Issue Description</TableHead>
                      <TableHead>Project</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Owner</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {issues.map((issue) => (
                      <TableRow key={issue.id}>
                        <TableCell className="font-mono text-xs">
                          {issue.id}
                        </TableCell>
                        <TableCell className="font-medium">
                          {issue.title}
                        </TableCell>
                        <TableCell>{issue.project}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={priorityColors[issue.priority]}>
                            {issue.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={statusColors[issue.status]}>
                            {issue.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{issue.owner}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <AddRiskIssueDialog 
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSubmit={handleNewEntry}
      />
    </PageLayout>
  );
};

export default Risks;
