
import React from 'react';
import { cn } from '@/lib/utils';

type StatusType = 'on-track' | 'at-risk' | 'off-track' | 'completed' | 'not-started';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const statusConfig = {
  'on-track': {
    color: 'bg-success-light text-success',
    label: 'On Track'
  },
  'at-risk': {
    color: 'bg-warning-light text-warning',
    label: 'At Risk'
  },
  'off-track': {
    color: 'bg-danger-light text-danger',
    label: 'Off Track'
  },
  'completed': {
    color: 'bg-success-light text-success',
    label: 'Completed'
  },
  'not-started': {
    color: 'bg-gray-100 text-gray-600',
    label: 'Not Started'
  }
};

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const config = statusConfig[status];
  
  return (
    <div className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
      config.color,
      className
    )}>
      <div className={cn('w-1.5 h-1.5 rounded-full mr-1', {
        'bg-success': status === 'on-track' || status === 'completed',
        'bg-warning': status === 'at-risk',
        'bg-danger': status === 'off-track',
        'bg-gray-400': status === 'not-started'
      })} />
      {config.label}
    </div>
  );
};

export default StatusBadge;
