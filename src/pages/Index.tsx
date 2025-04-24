
import React from 'react';
import { BarChart3, CheckCircle, AlertTriangle, DollarSign, Users, Clock, CalendarCheck, PieChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart as RechartsPlot, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import PageLayout from '@/components/layout/PageLayout';
import StatCard from '@/components/dashboard/StatCard';
import ProjectCard from '@/components/dashboard/ProjectCard';
import ProgressChart from '@/components/dashboard/ProgressChart';
import RiskIssueTable from '@/components/dashboard/RiskIssueTable';
import { projects, statusDistribution, budgetData, timelineData, dashboardStats } from '@/services/mockData';
import { useRiskIssue } from '@/contexts/RiskIssueContext';

const Dashboard = () => {
  const { statsCount } = useRiskIssue();
  
  return (
    <PageLayout showFilters={true}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's an overview of your project portfolio.
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title={dashboardStats[0].title}
            value={dashboardStats[0].value}
            icon={<BarChart3 />}
            trend={dashboardStats[0].trend}
          />
          <StatCard
            title={dashboardStats[1].title}
            value={dashboardStats[1].value}
            icon={<CheckCircle />}
            trend={dashboardStats[1].trend}
          />
          <StatCard
            title={dashboardStats[2].title}
            value={dashboardStats[2].value}
            icon={<DollarSign />}
            trend={dashboardStats[2].trend}
          />
          <StatCard
            title="Open Risks"
            value={statsCount.openRisks.toString()}
            icon={<AlertTriangle />}
            trend={{ value: 0, isNeutral: true }}
          />
        </div>

        {/* Portfolio Overview */}
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Project Status</CardTitle>
              <CardDescription>Distribution of projects by status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPlot>
                    <Pie
                      data={statusDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      nameKey="name"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {statusDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </RechartsPlot>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-2">
            <Tabs defaultValue="budget" className="h-full">
              <TabsList>
                <TabsTrigger value="budget">Budget</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
              </TabsList>
              <TabsContent value="budget" className="h-[calc(100%-42px)]">
                <ProgressChart data={budgetData} title="Budget: Planned vs Actual" />
              </TabsContent>
              <TabsContent value="timeline" className="h-[calc(100%-42px)]">
                <ProgressChart data={timelineData} title="Milestones: Planned vs Completed" />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Top Projects */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Top Projects</h2>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                status={project.status}
                progress={project.progress}
                dueDate={project.dueDate}
                team={project.team}
              />
            ))}
          </div>
        </div>

        {/* Recent Risks & Issues */}
        <RiskIssueTable />

        {/* Quick Stats */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
          <Card>
            <CardContent className="flex items-center justify-between pt-6">
              <div className="flex items-center space-x-2">
                <Users className="h-10 w-10 text-primary p-2 bg-primary/10 rounded-full" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Teams</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center justify-between pt-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-10 w-10 text-primary p-2 bg-primary/10 rounded-full" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Completion</p>
                  <p className="text-2xl font-bold">92 days</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center justify-between pt-6">
              <div className="flex items-center space-x-2">
                <CalendarCheck className="h-10 w-10 text-primary p-2 bg-primary/10 rounded-full" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">On-time Delivery</p>
                  <p className="text-2xl font-bold">83%</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center justify-between pt-6">
              <div className="flex items-center space-x-2">
                <PieChart className="h-10 w-10 text-primary p-2 bg-primary/10 rounded-full" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Resource Util.</p>
                  <p className="text-2xl font-bold">78%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
