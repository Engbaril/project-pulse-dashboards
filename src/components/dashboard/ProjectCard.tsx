
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import StatusBadge from './StatusBadge';
import { CalendarDays, Clock } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  status: 'on-track' | 'at-risk' | 'off-track' | 'completed' | 'not-started';
  progress: number;
  dueDate: string;
  team: Array<{
    id: string;
    name: string;
    initials: string;
  }>;
}

const ProjectCard = ({
  id,
  title,
  description,
  status,
  progress,
  dueDate,
  team
}: ProjectCardProps) => {
  // Determine progress bar color based on status
  const progressBarColor = 
    status === 'on-track' || status === 'completed' 
      ? 'progress-bar-green' 
      : status === 'at-risk' 
        ? 'progress-bar-amber' 
        : 'progress-bar-red';

  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <Link to={`/projects/${id}`} className="hover:underline">
            <h3 className="font-semibold text-lg">{title}</h3>
          </Link>
          <StatusBadge status={status} />
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="space-y-4">
          {/* Progress bar */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium">Progress</span>
              <span className="text-xs font-medium">{progress}%</span>
            </div>
            <div className="progress-bar-container">
              <div 
                className={`progress-bar ${progressBarColor}`} 
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          
          {/* Due date */}
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 text-muted-foreground mr-2" />
            <span className="text-sm">Due: {dueDate}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="px-6 py-4 border-t flex items-center justify-between">
        <div className="flex -space-x-2">
          {team.slice(0, 3).map((member) => (
            <Avatar key={member.id} className="border-2 border-background h-8 w-8">
              <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                {member.initials}
              </AvatarFallback>
            </Avatar>
          ))}
          {team.length > 3 && (
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted border-2 border-background text-xs font-medium">
              +{team.length - 3}
            </div>
          )}
        </div>
        
        <div className="flex items-center text-muted-foreground">
          <Clock className="h-4 w-4 mr-1" />
          <span className="text-xs">Updated 2d ago</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
