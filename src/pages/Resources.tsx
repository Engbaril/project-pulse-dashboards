
import React from 'react';
import { PieChart, Users, Briefcase, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import PageLayout from '@/components/layout/PageLayout';
import { projects } from '@/services/mockData';

// Mock resource data
const resources = [
  { id: 1, name: 'John Doe', role: 'Developer', allocation: 85, projects: ['Cloud Migration', 'ERP Implementation'] },
  { id: 2, name: 'Jane Smith', role: 'Designer', allocation: 70, projects: ['Product Launch', 'Office Relocation'] },
  { id: 3, name: 'Robert Johnson', role: 'Project Manager', allocation: 100, projects: ['ERP Implementation', 'Office Relocation'] },
  { id: 4, name: 'Sarah Williams', role: 'Business Analyst', allocation: 65, projects: ['Cloud Migration', 'Product Launch'] },
  { id: 5, name: 'Michael Brown', role: 'Developer', allocation: 90, projects: ['Cloud Migration', 'ERP Implementation'] },
];

// Mock equipment data
const equipment = [
  { id: 'eq-001', name: 'Development Servers', allocated: 75, available: 25 },
  { id: 'eq-002', name: 'Testing Environment', allocated: 50, available: 50 },
  { id: 'eq-003', name: 'Design Workstations', allocated: 90, available: 10 },
  { id: 'eq-004', name: 'Network Equipment', allocated: 60, available: 40 },
];

const Resources = () => {
  return (
    <PageLayout showFilters={true}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resources</h1>
          <p className="text-muted-foreground mt-1">
            Manage team members and equipment allocation
          </p>
        </div>

        {/* Resource overview */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
          <Card>
            <CardContent className="flex items-center justify-between pt-6">
              <div className="flex items-center space-x-2">
                <Users className="h-10 w-10 text-primary p-2 bg-primary/10 rounded-full" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Staff</p>
                  <p className="text-2xl font-bold">15</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center justify-between pt-6">
              <div className="flex items-center space-x-2">
                <Briefcase className="h-10 w-10 text-primary p-2 bg-primary/10 rounded-full" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Equipment</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center justify-between pt-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-10 w-10 text-primary p-2 bg-primary/10 rounded-full" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Utilization</p>
                  <p className="text-2xl font-bold">78%</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center justify-between pt-6">
              <div className="flex items-center space-x-2">
                <PieChart className="h-10 w-10 text-primary p-2 bg-primary/10 rounded-full" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Capacity</p>
                  <p className="text-2xl font-bold">82%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Resources */}
        <Card>
          <CardHeader>
            <CardTitle>Team Allocation</CardTitle>
            <CardDescription>Team members and their current project assignments</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Team Member</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Allocation</TableHead>
                  <TableHead>Projects</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {resources.map((resource) => (
                  <TableRow key={resource.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {resource.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span>{resource.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{resource.role}</TableCell>
                    <TableCell>
                      <div className="w-full max-w-xs">
                        <div className="flex justify-between text-xs mb-1">
                          <span>{resource.allocation}%</span>
                        </div>
                        <Progress
                          value={resource.allocation}
                          className="h-2"
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {resource.projects.map((project, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            {project}
                          </span>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Equipment Resources */}
        <Card>
          <CardHeader>
            <CardTitle>Equipment Allocation</CardTitle>
            <CardDescription>Overview of equipment and resource availability</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Resource</TableHead>
                  <TableHead>Allocated</TableHead>
                  <TableHead>Available</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {equipment.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>
                      <div className="w-full max-w-xs">
                        <div className="flex justify-between text-xs mb-1">
                          <span>{item.allocated}%</span>
                        </div>
                        <Progress
                          value={item.allocated}
                          className="h-2"
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{item.available}%</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Resources;
