
import React from 'react';
import { 
  Calendar,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageLayout from '@/components/layout/PageLayout';
import { projects } from '@/services/mockData';

const Timeline = () => {
  // Helper function to organize projects by month
  const projectsByMonth = projects.reduce((acc, project) => {
    const date = new Date(project.dueDate);
    const month = date.toLocaleString('default', { month: 'long' });
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  // Sort months chronologically
  const sortedMonths = Object.keys(projectsByMonth).sort((a, b) => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames.indexOf(a) - monthNames.indexOf(b);
  });

  return (
    <PageLayout showFilters={true}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Timeline</h1>
          <p className="text-muted-foreground mt-1">
            View and manage project timelines and milestones
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Timeline sidebar */}
          <div className="col-span-12 md:col-span-3">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Timeline View</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center p-2 rounded-md bg-primary/10 text-primary font-medium">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Monthly View</span>
                  </div>
                  <div className="flex items-center p-2 rounded-md hover:bg-muted cursor-pointer">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Quarterly View</span>
                  </div>
                  <div className="flex items-center p-2 rounded-md hover:bg-muted cursor-pointer">
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    <span>Milestone View</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader className="pb-3">
                <CardTitle>Timeline Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Project Status</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="status-all" className="mr-2" checked />
                        <label htmlFor="status-all">All Statuses</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="status-active" className="mr-2" />
                        <label htmlFor="status-active">Active</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="status-risk" className="mr-2" />
                        <label htmlFor="status-risk">At Risk</label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Time Range</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="radio" name="time-range" id="range-3month" className="mr-2" checked />
                        <label htmlFor="range-3month">Next 3 Months</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" name="time-range" id="range-6month" className="mr-2" />
                        <label htmlFor="range-6month">Next 6 Months</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" name="time-range" id="range-year" className="mr-2" />
                        <label htmlFor="range-year">Next Year</label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timeline content */}
          <div className="col-span-12 md:col-span-9">
            <Card>
              <CardHeader>
                <CardTitle>Project Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {sortedMonths.map(month => (
                    <div key={month} className="space-y-4">
                      <h3 className="text-lg font-semibold border-b pb-2">{month}</h3>
                      <div className="space-y-4">
                        {projectsByMonth[month].map(project => (
                          <div key={project.id} className="flex items-start border-l-4 pl-4 py-2" 
                               style={{ 
                                 borderColor: project.status === 'at-risk' ? 'rgb(239 68 68)' : 
                                              project.status === 'on-track' ? 'rgb(34 197 94)' : 
                                              'rgb(59 130 246)' 
                               }}>
                            <div className="flex-1">
                              <div className="flex items-center">
                                <h4 className="text-md font-medium">{project.title}</h4>
                                {project.status === 'at-risk' && (
                                  <AlertTriangle className="h-4 w-4 text-red-500 ml-2" />
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">Due: {project.dueDate}</p>
                              <p className="text-sm mt-1">{project.description}</p>
                            </div>
                            <div className="text-primary">
                              <a href={`/projects/${project.id}`} className="flex items-center hover:underline text-sm">
                                View Details
                                <ChevronRight className="h-4 w-4 ml-1" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Timeline;
