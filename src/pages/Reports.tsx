
import React from 'react';
import { 
  BarChart3, 
  PieChart, 
  LineChart,
  Download,
  Calendar,
  Filter,
  ChevronDown,
  RefreshCw
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart as RechartsLineChart, Line, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import PageLayout from '@/components/layout/PageLayout';

// Mock data for reports
const projectStatusData = [
  { name: 'On Track', value: 12, color: '#22c55e' },
  { name: 'At Risk', value: 4, color: '#f59e0b' },
  { name: 'Delayed', value: 2, color: '#ef4444' },
  { name: 'Completed', value: 8, color: '#3b82f6' },
];

const budgetComparisonData = [
  { name: 'Jan', planned: 20000, actual: 22000 },
  { name: 'Feb', planned: 35000, actual: 32000 },
  { name: 'Mar', planned: 45000, actual: 48000 },
  { name: 'Apr', planned: 30000, actual: 35000 },
  { name: 'May', planned: 25000, actual: 24000 },
  { name: 'Jun', planned: 15000, actual: 18000 },
];

const resourceUtilizationData = [
  { name: 'Developers', utilization: 85 },
  { name: 'Designers', utilization: 70 },
  { name: 'Project Managers', utilization: 95 },
  { name: 'QA Engineers', utilization: 65 },
  { name: 'Business Analysts', utilization: 80 },
];

const projectTrendData = [
  { month: 'Jan', completed: 2, started: 4, ongoing: 10 },
  { month: 'Feb', completed: 3, started: 2, ongoing: 11 },
  { month: 'Mar', completed: 4, started: 3, ongoing: 10 },
  { month: 'Apr', completed: 2, started: 5, ongoing: 13 },
  { month: 'May', completed: 5, started: 2, ongoing: 10 },
  { month: 'Jun', completed: 3, started: 3, ongoing: 10 },
];

const Reports = () => {
  return (
    <PageLayout showFilters={true}>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
            <p className="text-muted-foreground mt-1">
              Analyze project data and generate insights
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Last 30 Days</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Last 7 Days</DropdownMenuItem>
                <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
                <DropdownMenuItem>Last Quarter</DropdownMenuItem>
                <DropdownMenuItem>Year to Date</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Custom Range...</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
            
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="budget">Budget</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="milestones">Milestones</TabsTrigger>
            <TabsTrigger value="custom">Custom Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Project Status</CardTitle>
                  <CardDescription>Current status of all projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={projectStatusData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          nameKey="name"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {projectStatusData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Resource Utilization</CardTitle>
                  <CardDescription>Team allocation by department</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={resourceUtilizationData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis unit="%" />
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Bar dataKey="utilization" name="Utilization" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="col-span-1 lg:col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle>Project Trends</CardTitle>
                  <CardDescription>Project status changes over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart
                        data={projectTrendData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="completed" name="Completed" stroke="#22c55e" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="started" name="Started" stroke="#3b82f6" />
                        <Line type="monotone" dataKey="ongoing" name="Ongoing" stroke="#f59e0b" />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Budget Overview</CardTitle>
                <CardDescription>Planned vs. actual budget expenditure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={budgetComparisonData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                      <Legend />
                      <Bar dataKey="planned" name="Planned Budget" fill="#3b82f6" />
                      <Bar dataKey="actual" name="Actual Expenditure" fill="#22c55e" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="budget">
            <Card>
              <CardHeader>
                <CardTitle>Budget Analysis</CardTitle>
                <CardDescription>Detailed budget metrics by project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="py-10 text-center text-muted-foreground">
                  Detailed budget analysis reports will appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="resources">
            <Card>
              <CardHeader>
                <CardTitle>Resource Management</CardTitle>
                <CardDescription>Team allocation and capacity planning</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="py-10 text-center text-muted-foreground">
                  Resource management reports will appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="milestones">
            <Card>
              <CardHeader>
                <CardTitle>Milestones & Timeline</CardTitle>
                <CardDescription>Track milestone completion across projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="py-10 text-center text-muted-foreground">
                  Milestone reports will appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="custom">
            <Card>
              <CardHeader>
                <CardTitle>Custom Reports</CardTitle>
                <CardDescription>Build and save your own reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="py-10 text-center text-muted-foreground">
                  Custom report builder will appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Reports;
