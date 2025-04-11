
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowDownIcon, ArrowUpIcon, Minus } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactElement;
  trend?: {
    value: number;
    isPositive?: boolean;
    isNeutral?: boolean;
  };
  className?: string;
}

const StatCard = ({ title, value, icon, trend, className }: StatCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            
            {trend && (
              <div className="flex items-center mt-1">
                <div 
                  className={cn(
                    "flex items-center text-xs font-medium",
                    trend.isNeutral ? "text-gray-500" : (trend.isPositive ? "text-success" : "text-danger")
                  )}
                >
                  {trend.isNeutral ? (
                    <Minus className="h-3 w-3 mr-1" />
                  ) : trend.isPositive ? (
                    <ArrowUpIcon className="h-3 w-3 mr-1" />
                  ) : (
                    <ArrowDownIcon className="h-3 w-3 mr-1" />
                  )}
                  <span>{Math.abs(trend.value)}%</span>
                </div>
                <span className="text-xs text-muted-foreground ml-1">vs last period</span>
              </div>
            )}
          </div>
          
          <div className="p-2 bg-primary/10 rounded-md text-primary">
            {React.cloneElement(icon, { size: 20 })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
