
import React from 'react';
import { 
  File, 
  FileText, 
  FilePlus, 
  FolderPlus, 
  Search, 
  Calendar, 
  Clock,
  MoreVertical,
  Users
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
import PageLayout from '@/components/layout/PageLayout';

// Mock documents data
const documents = [
  { 
    id: 'doc-001', 
    name: 'Project Charter - ERP Implementation.docx', 
    type: 'docx',
    size: '245 KB',
    lastModified: '2025-04-01',
    owner: 'Robert Johnson',
    project: 'ERP Implementation'
  },
  { 
    id: 'doc-002', 
    name: 'Risk Assessment Report.pdf', 
    type: 'pdf',
    size: '1.2 MB',
    lastModified: '2025-03-28',
    owner: 'Jane Smith',
    project: 'Cloud Migration'
  },
  { 
    id: 'doc-003', 
    name: 'Budget Forecast 2025.xlsx', 
    type: 'xlsx',
    size: '356 KB',
    lastModified: '2025-03-25',
    owner: 'Sarah Williams',
    project: 'Product Launch'
  },
  { 
    id: 'doc-004', 
    name: 'Technical Requirements Specification.pdf', 
    type: 'pdf',
    size: '1.8 MB',
    lastModified: '2025-03-22',
    owner: 'Michael Brown',
    project: 'Cloud Migration'
  },
  { 
    id: 'doc-005', 
    name: 'Meeting Minutes - Stakeholders.docx', 
    type: 'docx',
    size: '128 KB',
    lastModified: '2025-03-18',
    owner: 'Robert Johnson',
    project: 'Office Relocation'
  },
];

// Mock folders
const folders = [
  { id: 'folder-001', name: 'Project Charters', count: 5 },
  { id: 'folder-002', name: 'Technical Documents', count: 12 },
  { id: 'folder-003', name: 'Financial Reports', count: 8 },
  { id: 'folder-004', name: 'Meeting Minutes', count: 15 },
];

const Documents = () => {
  return (
    <PageLayout showFilters={true}>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Documents</h1>
            <p className="text-muted-foreground mt-1">
              Manage and organize project documents
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search documents..."
                className="w-full pl-10"
              />
            </div>
            
            <Button size="sm" variant="outline" className="flex items-center gap-2">
              <FolderPlus className="h-4 w-4" />
              New Folder
            </Button>
            
            <Button size="sm" className="flex items-center gap-2">
              <FilePlus className="h-4 w-4" />
              Upload
            </Button>
          </div>
        </div>
        
        {/* Folders section */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {folders.map(folder => (
            <Card key={folder.id} className="cursor-pointer hover:bg-muted/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <File className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{folder.name}</h3>
                      <p className="text-sm text-muted-foreground">{folder.count} documents</p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Rename</DropdownMenuItem>
                      <DropdownMenuItem>Share</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Documents table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>Last Modified</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents.map(doc => (
                  <TableRow key={doc.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                          {doc.type === 'pdf' ? (
                            <FileText className="h-5 w-5 text-red-500" />
                          ) : doc.type === 'xlsx' ? (
                            <FileText className="h-5 w-5 text-green-500" />
                          ) : (
                            <FileText className="h-5 w-5 text-blue-500" />
                          )}
                        </div>
                        <span className="font-medium">{doc.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{doc.project}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span className="text-sm">{doc.lastModified}</span>
                      </div>
                    </TableCell>
                    <TableCell>{doc.size}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-[10px] text-primary-foreground font-medium">
                            {doc.owner.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-sm">{doc.owner}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Download</DropdownMenuItem>
                          <DropdownMenuItem>Share</DropdownMenuItem>
                          <DropdownMenuItem>Rename</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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

export default Documents;
