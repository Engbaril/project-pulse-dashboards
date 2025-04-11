
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  CalendarDays, 
  Clock, 
  DollarSign, 
  Users, 
  MapPin, 
  Layers, 
  CheckCircle2, 
  AlertTriangle,
  AlertCircle, 
  FileText
} from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { projectDetail } from '@/services/mockData';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  // In a real application, you'd fetch the project data based on the id
  const project = projectDetail;
  
  // Calculate budget percentage
  const budgetPercentage = Math.round((project.budget.spent / project.budget.allocated) * 100);
  
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };
  
  // Determine budget status color
  const getBudgetStatusColor = () => {
    if (budgetPercentage <= 70) return 'text-success';
    if (budgetPercentage <= 90) return 'text-warning';
    return 'text-danger';
  };

  return (
    <PageLayout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <a href="/projects" className="text-sm text-muted-foreground hover:text-primary flex items-center mb-2">
              ← Back to Projects
            </a>
            <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              {project.description}
            </p>
          </div>
          <StatusBadge status={project.status} className="self-start md:self-auto" />
        </div>
        
        {/* Project Overview Cards */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Progress Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold">{project.progress}%</span>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </div>
              <Progress
                value={project.progress}
                className="h-2"
              />
            </CardContent>
          </Card>
          
          {/* Budget Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Budget</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-1">
                <span className="text-2xl font-bold">{formatCurrency(project.budget.spent)}</span>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">of {formatCurrency(project.budget.allocated)}</span>
                <span className={`text-xs font-medium ${getBudgetStatusColor()}`}>
                  {budgetPercentage}%
                </span>
              </div>
              <Progress
                value={budgetPercentage}
                className="h-2 mt-2"
              />
            </CardContent>
          </Card>
          
          {/* Timeline Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Start Date</p>
                  <p className="font-medium">{project.startDate}</p>
                </div>
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="h-0.5 bg-secondary my-2"></div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Due Date</p>
                  <p className="font-medium">{project.dueDate}</p>
                </div>
                <span className="text-xs text-muted-foreground">
                  87 days left
                </span>
              </div>
            </CardContent>
          </Card>
          
          {/* Team Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Team</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold">{project.team.length}</span>
                <Users className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex flex-wrap gap-2">
                {project.team.map((member) => (
                  <Avatar key={member.id} className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Additional Info Cards */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <div className="flex gap-4">
            <Card className="flex-1">
              <CardContent className="p-4 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="font-medium">{project.location}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="flex-1">
              <CardContent className="p-4 flex items-center gap-2">
                <Layers className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Phase</p>
                  <p className="font-medium">{project.phase}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="md:col-span-2">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <div>
                    <p className="text-xs text-muted-foreground">Project Manager</p>
                    <p className="font-medium">{project.team[0].name}</p>
                  </div>
                </div>
                <div>
                  <Badge variant="outline" className="bg-primary-foreground">
                    Priority: High
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Tabs Section */}
        <Tabs defaultValue="milestones">
          <TabsList>
            <TabsTrigger value="milestones">Milestones</TabsTrigger>
            <TabsTrigger value="risks">Risks & Issues</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>
          
          {/* Milestones Tab */}
          <TabsContent value="milestones">
            <Card>
              <CardHeader>
                <CardTitle>Project Milestones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  {project.milestones.map((milestone, index) => (
                    <div key={milestone.id} className="relative pl-8">
                      {/* Timeline connector */}
                      {index < project.milestones.length - 1 && (
                        <div className="absolute top-6 bottom-0 left-[13px] w-0.5 bg-secondary"></div>
                      )}
                      
                      {/* Status circle */}
                      <div className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center ${
                        milestone.completed 
                          ? 'bg-success text-white' 
                          : 'bg-secondary text-muted-foreground'
                      }`}>
                        {milestone.completed ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : (
                          <Clock className="h-3 w-3" />
                        )}
                      </div>
                      
                      {/* Content */}
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-base">{milestone.title}</h3>
                          <Badge variant={milestone.completed ? "outline" : "secondary"} className={milestone.completed ? "bg-success-light text-success" : ""}>
                            {milestone.completed ? "Completed" : "Pending"}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Due: {milestone.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Risks & Issues Tab */}
          <TabsContent value="risks">
            <Card>
              <CardHeader>
                <CardTitle>Risks & Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-lg flex items-center mb-3">
                      <AlertTriangle className="h-4 w-4 mr-2 text-warning" />
                      Risks
                    </h3>
                    <div className="space-y-4">
                      {project.risks.map((risk) => (
                        <Card key={risk.id}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium">{risk.title}</h4>
                              <Badge variant="outline" className="bg-warning-light text-warning">
                                {risk.priority}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{risk.description}</p>
                            <div className="flex justify-between items-center text-sm">
                              <p>Owner: <span className="font-medium">{risk.owner}</span></p>
                              <Badge variant="outline" className={
                                risk.status === 'open' 
                                  ? "bg-danger-light text-danger" 
                                  : "bg-warning-light text-warning"
                              }>
                                {risk.status}
                              </Badge>
                            </div>
                            <div className="mt-3 text-sm">
                              <p className="font-medium text-muted-foreground">Mitigation:</p>
                              <p>{risk.mitigation}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg flex items-center mb-3">
                      <AlertCircle className="h-4 w-4 mr-2 text-danger" />
                      Issues
                    </h3>
                    <div className="space-y-4">
                      {project.issues.map((issue) => (
                        <Card key={issue.id}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium">{issue.title}</h4>
                              <Badge variant="outline" className="bg-danger-light text-danger">
                                {issue.priority}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{issue.description}</p>
                            <div className="flex justify-between items-center text-sm">
                              <p>Owner: <span className="font-medium">{issue.owner}</span></p>
                              <Badge variant="outline" className="bg-success-light text-success">
                                {issue.status}
                              </Badge>
                            </div>
                            <div className="mt-3 text-sm">
                              <p className="font-medium text-muted-foreground">Resolution:</p>
                              <p>{issue.resolution}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Team Tab */}
          <TabsContent value="team">
            <Card>
              <CardHeader>
                <CardTitle>Project Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  {project.team.map((member) => (
                    <Card key={member.id}>
                      <CardContent className="p-4 flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{member.name}</h4>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Documents Tab */}
          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Project Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <div className="flex-1">
                        <h4 className="font-medium">Project Charter</h4>
                        <p className="text-sm text-muted-foreground">Updated 3 weeks ago</p>
                      </div>
                      <Badge>PDF</Badge>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <div className="flex-1">
                        <h4 className="font-medium">Requirements Specification</h4>
                        <p className="text-sm text-muted-foreground">Updated 2 weeks ago</p>
                      </div>
                      <Badge>DOCX</Badge>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <div className="flex-1">
                        <h4 className="font-medium">Risk Register</h4>
                        <p className="text-sm text-muted-foreground">Updated 5 days ago</p>
                      </div>
                      <Badge>XLSX</Badge>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <div className="flex-1">
                        <h4 className="font-medium">Implementation Plan</h4>
                        <p className="text-sm text-muted-foreground">Updated 1 week ago</p>
                      </div>
                      <Badge>PDF</Badge>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default ProjectDetail;
