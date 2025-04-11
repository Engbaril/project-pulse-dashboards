
import React from 'react';
import { 
  Users, 
  Plus, 
  Mail, 
  Phone, 
  PieChart, 
  Search,
  Filter,
  ChevronDown
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PageLayout from '@/components/layout/PageLayout';

// Mock team member data
const teamMembers = [
  { 
    id: 1, 
    name: 'John Doe', 
    role: 'Lead Developer',
    email: 'john.doe@projectpulse.com',
    phone: '+1 (555) 123-4567',
    allocation: 85,
    projects: ['Cloud Migration', 'ERP Implementation'],
    skills: ['React', 'Node.js', 'AWS'],
    availability: 'Available'
  },
  { 
    id: 2, 
    name: 'Jane Smith', 
    role: 'UX Designer',
    email: 'jane.smith@projectpulse.com',
    phone: '+1 (555) 234-5678',
    allocation: 70,
    projects: ['Product Launch', 'Office Relocation'],
    skills: ['Figma', 'UI Design', 'User Research'],
    availability: 'In Meeting'
  },
  { 
    id: 3, 
    name: 'Robert Johnson', 
    role: 'Project Manager',
    email: 'robert.johnson@projectpulse.com',
    phone: '+1 (555) 345-6789',
    allocation: 100,
    projects: ['ERP Implementation', 'Office Relocation'],
    skills: ['Leadership', 'Agile', 'Risk Management'],
    availability: 'Away'
  },
  { 
    id: 4, 
    name: 'Sarah Williams', 
    role: 'Business Analyst',
    email: 'sarah.williams@projectpulse.com',
    phone: '+1 (555) 456-7890',
    allocation: 65,
    projects: ['Cloud Migration', 'Product Launch'],
    skills: ['Requirements Analysis', 'Process Modeling', 'SQL'],
    availability: 'Available'
  },
  { 
    id: 5, 
    name: 'Michael Brown', 
    role: 'Backend Developer',
    email: 'michael.brown@projectpulse.com',
    phone: '+1 (555) 567-8901',
    allocation: 90,
    projects: ['Cloud Migration', 'ERP Implementation'],
    skills: ['Java', 'Spring Boot', 'Microservices'],
    availability: 'Available'
  },
  { 
    id: 6, 
    name: 'Emma Davis', 
    role: 'QA Engineer',
    email: 'emma.davis@projectpulse.com',
    phone: '+1 (555) 678-9012',
    allocation: 75,
    projects: ['Product Launch', 'ERP Implementation'],
    skills: ['Test Automation', 'Selenium', 'Cypress'],
    availability: 'Away'
  },
];

const Team = () => {
  return (
    <PageLayout showFilters={true}>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Team</h1>
            <p className="text-muted-foreground mt-1">
              Manage team members and their assignments
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search team members..."
                className="w-full pl-10"
              />
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuCheckboxItem checked>
                  All Roles
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Developers
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Designers
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Managers
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button size="sm" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Team Member
            </Button>
          </div>
        </div>
        
        {/* Team Stats */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
          <Card>
            <CardContent className="flex items-center justify-between pt-6">
              <div className="flex items-center space-x-2">
                <Users className="h-10 w-10 text-primary p-2 bg-primary/10 rounded-full" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Members</p>
                  <p className="text-2xl font-bold">{teamMembers.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center justify-between pt-6">
              <div className="flex items-center space-x-2">
                <PieChart className="h-10 w-10 text-primary p-2 bg-primary/10 rounded-full" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Allocation</p>
                  <p className="text-2xl font-bold">
                    {Math.round(teamMembers.reduce((acc, member) => acc + member.allocation, 0) / teamMembers.length)}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center justify-between pt-6">
              <div className="flex items-center space-x-2">
                <Users className="h-10 w-10 text-green-500 p-2 bg-green-100 rounded-full" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Available Now</p>
                  <p className="text-2xl font-bold">
                    {teamMembers.filter(member => member.availability === 'Available').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center justify-between pt-6">
              <div className="flex items-center space-x-2">
                <Mail className="h-10 w-10 text-primary p-2 bg-primary/10 rounded-full" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Departments</p>
                  <p className="text-2xl font-bold">4</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Team Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map(member => (
            <Card key={member.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="text-xl bg-primary text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-lg">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Mail className="h-4 w-4 mr-2" />
                        <span>{member.email}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Phone className="h-4 w-4 mr-2" />
                        <span>{member.phone}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-sm font-medium mb-1">Projects:</p>
                      <div className="flex flex-wrap gap-1">
                        {member.projects.map((project, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <p className="text-sm font-medium mb-1">Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((skill, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        member.availability === 'Available' 
                          ? 'bg-green-100 text-green-700' 
                          : member.availability === 'In Meeting'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-gray-100 text-gray-700'
                      }`}>
                        {member.availability}
                      </span>
                      
                      <Button variant="outline" size="sm">View Profile</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Team;
