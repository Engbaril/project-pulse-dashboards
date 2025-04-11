import React, { useState } from 'react';
import { 
  Filter, 
  PlusCircle,
  GripVertical,
  LayoutGrid,
  ListFilter
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import PageLayout from '@/components/layout/PageLayout';
import ProjectCard from '@/components/dashboard/ProjectCard';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { projects } from '@/services/mockData';

const Projects = () => {
  const [view, setView] = useState<'grid' | 'table'>('grid');
  
  return (
    <PageLayout showFilters={true}>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
            <p className="text-muted-foreground mt-1">
              Manage and monitor all your projects
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <Button size="sm" variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="outline" className="flex items-center gap-2">
                  <GripVertical className="h-4 w-4" />
                  Sort
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Name (A-Z)
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Name (Z-A)
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Status
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Progress
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Due Date
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <div className="flex items-center border rounded-md">
              <Button
                size="sm"
                variant={view === 'grid' ? 'default' : 'ghost'}
                className="rounded-r-none"
                onClick={() => setView('grid')}
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant={view === 'table' ? 'default' : 'ghost'}
                className="rounded-l-none"
                onClick={() => setView('table')}
              >
                <ListFilter className="h-4 w-4" />
              </Button>
            </div>
            
            <Button size="sm" className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              New Project
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="my">My Projects</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4 mt-4">
            {view === 'grid' ? (
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
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
            ) : (
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Project</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Progress</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Team</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {projects.map((project) => (
                        <TableRow key={project.id}>
                          <TableCell>
                            <div>
                              <a href={`/projects/${project.id}`} className="font-medium hover:underline">
                                {project.title}
                              </a>
                              <p className="text-sm text-muted-foreground line-clamp-1">
                                {project.description}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <StatusBadge status={project.status} />
                          </TableCell>
                          <TableCell>
                            <div className="w-full max-w-xs">
                              <div className="flex justify-between text-xs mb-1">
                                <span>{project.progress}%</span>
                              </div>
                              <Progress
                                value={project.progress}
                                className="h-2"
                              />
                            </div>
                          </TableCell>
                          <TableCell>{project.dueDate}</TableCell>
                          <TableCell>
                            <div className="flex -space-x-2">
                              {project.team.slice(0, 3).map((member) => (
                                <Avatar key={member.id} className="border-2 border-background h-8 w-8">
                                  <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                                    {member.initials}
                                  </AvatarFallback>
                                </Avatar>
                              ))}
                              {project.team.length > 3 && (
                                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted border-2 border-background text-xs font-medium">
                                  +{project.team.length - 3}
                                </div>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          {/* Other tabs will have the same content structure but with filtered data */}
          <TabsContent value="active">
            <div className="py-10 text-center text-muted-foreground">
              Filter applied for active projects
            </div>
          </TabsContent>
          <TabsContent value="completed">
            <div className="py-10 text-center text-muted-foreground">
              Filter applied for completed projects
            </div>
          </TabsContent>
          <TabsContent value="my">
            <div className="py-10 text-center text-muted-foreground">
              Filter applied for your assigned projects
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Projects;
